import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("seo-ou-google-ads");

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
        alt: "Choisir entre référencement naturel et Google Ads",
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
      name: "SEO ou Google Ads : où investir en premier ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quelle est la différence entre SEO, SEA et Google Ads ?",
    answer:
      "Le SEO, ou référencement naturel, consiste à améliorer votre site et à publier des pages utiles pour apparaître dans les résultats non publicitaires de Google. Le SEA désigne la publicité sur les moteurs de recherche. Google Ads est la plateforme de Google pour diffuser cette publicité.",
  },
  {
    question: "SEO ou Google Ads : lequel coûte le moins cher ?",
    answer:
      "Il n’existe pas de gagnant automatique. Avec Google Ads, vous payez le budget publicitaire, la gestion, la page d’arrivée et le suivi des demandes. Avec le SEO, vous payez la stratégie, la technique, la rédaction, l’intégration et les mises à jour. Comparez le coût total avec les ventes rentables réellement obtenues.",
  },
  {
    question: "Google Ads peut-il apporter des clients immédiatement ?",
    answer:
      "Une campagne peut avoir la possibilité d’afficher des annonces rapidement après leur examen, mais elle doit encore gagner les enchères. Elle ne garantit ni visibilité, ni clic, ni demande sérieuse, ni vente. Google Ads sert surtout à tester une offre déjà claire auprès de personnes qui la recherchent.",
  },
  {
    question: "Combien de temps faut-il pour obtenir des résultats en SEO ?",
    answer:
      "Il n’existe pas de délai universel. Google explique que l’effet de certains changements peut apparaître en quelques heures, tandis que d’autres demandent plusieurs mois, sans résultat garanti. Suivez d’abord l’apparition des pages sur les bonnes recherches, puis les visites, les demandes et les ventes.",
  },
  {
    question: "Faut-il arrêter Google Ads lorsque le SEO fonctionne ?",
    answer:
      "Pas automatiquement. Google Ads peut rester utile pour une offre saisonnière, une zone précise ou une recherche sur laquelle votre site n’est pas encore visible. Décidez à partir des ventes supplémentaires apportées, pas seulement du nombre de clics.",
  },
  {
    question: "Google Ads améliore-t-il le référencement naturel ?",
    answer:
      "Non. Payer des annonces n’achète pas une meilleure position dans les résultats naturels. Une campagne peut vous montrer une partie des expressions employées par vos prospects, mais le SEO reste un travail distinct sur le site et ses contenus.",
  },
];

const quickChoices = [
  {
    label: "Google Ads d’abord",
    title: "Vous voulez tester une offre dans les prochaines semaines",
    description:
      "Votre offre est claire, des clients la recherchent déjà et votre équipe peut répondre rapidement aux demandes.",
    color: "border-blue-300/30 bg-blue-400/[0.08] text-blue-200",
  },
  {
    label: "SEO d’abord",
    title: "Vos prospects posent souvent les mêmes questions",
    description:
      "Vous pouvez publier des réponses vraiment utiles et attendre que ces pages gagnent progressivement en visibilité.",
    color: "border-emerald-300/30 bg-emerald-400/[0.08] text-emerald-200",
  },
  {
    label: "Les deux",
    title: "Vous pouvez mener deux actions sérieuses en parallèle",
    description:
      "Google Ads sert à tester rapidement ; le SEO construit les pages qui resteront utiles dans le temps.",
    color: "border-violet-300/30 bg-violet-400/[0.08] text-violet-200",
  },
  {
    label: "Attendez avant d’investir",
    title: "Votre offre, votre site ou votre suivi commercial n’est pas prêt",
    description:
      "Corrigez d’abord ce qui empêcherait un visiteur intéressé de comprendre, de vous contacter ou d’être rappelé.",
    color: "border-amber-300/30 bg-amber-400/[0.08] text-amber-200",
  },
];

function QuickAnswer() {
  return (
    <section
      className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="quick-answer-title"
    >
      <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
        Pour vous orienter
      </p>
      <h2
        id="quick-answer-title"
        className="mb-0 mt-2 text-xl font-bold text-white"
      >
        Choisissez selon ce que votre entreprise doit obtenir maintenant
      </h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {quickChoices.map((choice) => (
          <div
            key={choice.label}
            className={"rounded-xl border p-4 " + choice.color}
          >
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em]">
              {choice.label}
            </p>
            <p className="mb-0 mt-2 text-sm font-semibold leading-relaxed text-white">
              {choice.title}
            </p>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-300">
              {choice.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SeoAdsComparison() {
  return (
    <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
          Référencement naturel — SEO
        </p>
        <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
          Vous investissez dans votre site
        </h3>
        <ul className="mb-0 mt-4 space-y-3 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <li>
            Vous créez ou améliorez des pages qui répondent aux recherches de
            vos clients.
          </li>
          <li>
            Vous ne payez pas Google chaque fois qu’une personne clique sur un
            résultat naturel.
          </li>
          <li>
            La visibilité prend généralement du temps et n’est jamais garantie.
          </li>
          <li>
            Une bonne page peut continuer à être trouvée après sa publication,
            si elle est entretenue.
          </li>
        </ul>
      </section>
      <section className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
          Publicité sur Google — Google Ads
        </p>
        <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
          Vous payez pour tenter d’être visible rapidement
        </h3>
        <ul className="mb-0 mt-4 space-y-3 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <li>
            Vous tentez d’afficher une annonce sur des recherches liées aux mots
            ou aux pages que vous ciblez.
          </li>
          <li>
            Vous payez la publicité, le plus souvent lorsqu’une personne clique.
          </li>
          <li>
            Vous pouvez tester plus vite l’offre, l’annonce, la page et le suivi
            commercial.
          </li>
          <li>
            Quand la campagne s’arrête, cette visibilité publicitaire s’arrête
            aussi.
          </li>
        </ul>
      </section>
    </div>
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
          { label: "SEO ou Google Ads" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous hésitez entre payer Google pour obtenir de la visibilité rapidement et investir dans votre site pour être trouvé durablement ? Ce guide vous aide à choisir selon votre objectif, votre délai, votre budget et la façon dont vous répondez aux personnes intéressées."
        heroAction={{
          href: "#reponse-rapide",
          label: "Obtenir une réponse claire",
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
            title: "Réponse selon votre situation",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Budget complet comparé",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Plan d’action sur 90 jours",
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
            href: "/guides/prix-referencement-naturel",
            label: "Comprendre le prix du référencement naturel",
          },
          {
            href: "/guides/prix-gestion-google-ads",
            label: "Calculer le coût d’une campagne Google Ads",
          },
          {
            href: "/guides/audit-seo-que-contient-il",
            label: "Savoir ce qu’un audit SEO doit contenir",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Vérifier un compte Google Ads existant",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Comprendre pourquoi un site ne génère pas de demandes",
          },
        ]}
        faqTitle="SEO ou Google Ads : vos questions concrètes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Vous cherchez à savoir s’il vaut mieux investir dans le
            référencement naturel — améliorer votre site et publier des pages
            utiles — ou dans Google Ads — payer pour afficher des annonces. La
            réponse dépend de ce que vous attendez : tester plus vite une offre
            déjà prête, ou construire progressivement votre visibilité.
          </strong>
        </p>

        <p>
          Dans ce guide, vous allez comprendre la différence entre les deux,
          savoir dans quels cas commencer par l’un ou l’autre, comparer les
          coûts souvent oubliés et repartir avec un plan simple. La réponse peut
          aussi être de faire les deux, ou de n’en lancer aucun tant que votre
          offre ou votre site n’est pas prêt.
        </p>

        <div id="reponse-rapide">
          <QuickAnswer />
        </div>

        <InfoBox
          variant="amber"
          title="Le point essentiel avant de parler de marketing"
        >
          Ni le SEO ni Google Ads ne peuvent garantir une vente. Ces deux
          approches peuvent amener des personnes vers votre site ou directement
          vers une prise de contact. Votre offre, votre page, votre prix, vos
          références et la manière dont vous répondez déterminent ensuite si cet
          intérêt devient une vente.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "difference",
              label: "1. La différence entre SEO et Google Ads",
            },
            { id: "objectif", label: "2. Choisir selon votre objectif" },
            { id: "ads", label: "3. Quand commencer par Google Ads" },
            { id: "seo", label: "4. Quand commencer par le SEO" },
            { id: "ensemble", label: "5. Quand combiner les deux" },
            {
              id: "avant",
              label: "6. Ce qu’il faut vérifier avant d’investir",
            },
            { id: "cout", label: "7. Comparer tous les coûts" },
            { id: "exemples", label: "8. Trois exemples d’entreprises" },
            { id: "plan", label: "9. Un plan simple sur 90 jours" },
            { id: "decision", label: "10. Prendre votre décision" },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <h2 id="difference">
          1. Quelle est la différence entre SEO et Google Ads ?
        </h2>

        <p>
          Les deux peuvent vous rendre visible dans Google, mais vous n’achetez
          pas la même chose. Avec le <strong>référencement naturel</strong>,
          aussi appelé <strong>SEO</strong>, vous investissez dans votre site et
          dans ses contenus. Avec <strong>Google Ads</strong>, vous payez pour
          diffuser des annonces pendant la durée de la campagne.
        </p>

        <SeoAdsComparison />

        <p>
          « Rapidement » ne signifie pas « automatiquement ». Google doit
          d’abord{" "}
          <a
            href="https://support.google.com/google-ads/answer/1722120?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            examiner l’annonce
          </a>
          , puis celle-ci doit gagner une{" "}
          <a
            href="https://support.google.com/google-ads/answer/1752122?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            enchère qui dépend notamment du montant proposé, de la concurrence,
            de la qualité de l’annonce et de sa page de destination
          </a>
          . Vous achetez donc la possibilité d’obtenir vite de la visibilité,
          jamais une place garantie.
        </p>

        <p>
          Prenons la recherche « logiciel de gestion sur mesure ». Une
          entreprise peut apparaître dans les annonces parce qu’elle paie pour
          cibler cette recherche. Elle peut aussi apparaître dans les résultats
          naturels parce que Google juge l’une de ses pages utile et pertinente.
          Le visiteur peut cliquer dans les deux cas, mais le mode
          d’investissement n’est pas le même.
        </p>

        <InfoBox variant="blue" title="Et le SEA dans tout cela ?">
          Le <strong>SEA</strong> signifie « publicité sur les moteurs de
          recherche ». Google Ads est la plateforme utilisée pour acheter cette
          publicité sur Google. Pour rester concret, la suite parle des annonces
          liées aux recherches des internautes, et non de publicité vidéo,
          Display ou Shopping.
        </InfoBox>

        <h2 id="objectif">2. Commencez par votre objectif, pas par l’outil</h2>

        <p>
          La première question n’est pas « quelle option est la meilleure ? »,
          mais « qu’est-ce que mon entreprise doit obtenir, et dans quel délai ?
          ». Dans cet <strong>exemple illustratif fictif</strong>, un
          restaurateur qui veut faire connaître une nouvelle terrasse cet été
          n’a pas le même besoin qu’un éditeur de logiciel qui veut devenir une
          référence sur un sujet pendant plusieurs années.
        </p>

        <h3>
          Vous voulez savoir rapidement si des prospects recherchent votre offre
        </h3>
        <p>
          Commencez généralement par une campagne Google Ads limitée à quelques
          recherches précises. Elle ne mesure pas la demande toute seule : elle
          teste en même temps votre ciblage, votre message, votre offre, votre
          page et la façon dont vous traitez les contacts. Elle peut donc vous
          apprendre plus vite où cette chaîne fonctionne ou se rompt, sans
          garantir de vente.
        </p>

        <h3>
          Vous voulez être trouvé régulièrement sur des questions récurrentes
        </h3>
        <p>
          Le SEO est souvent plus logique. Vous pouvez créer des pages qui
          répondent aux questions que vos futurs clients se posent avant de
          choisir : prix, délais, risques, comparaison de solutions ou méthode
          de travail. Ces pages demandent du temps, mais elles peuvent continuer
          à être utiles après leur publication.
        </p>

        <h3>Vous avez besoin de ventes certaines dès le mois prochain</h3>
        <p>
          Aucun des deux ne peut honnêtement vous offrir cette certitude. Google
          Ads peut apporter de la visibilité rapidement, pas obliger un prospect
          à acheter. Le SEO demande généralement plus de temps. Si votre
          trésorerie dépend d’un résultat immédiat, examinez aussi les clients
          existants, les recommandations, la prospection directe ou les
          partenariats.
        </p>

        <h2 id="ads">3. Quand faut-il commencer par Google Ads ?</h2>

        <p>
          Google Ads est utile lorsque des personnes cherchent déjà une solution
          comme la vôtre et que vous voulez tester rapidement votre capacité à
          obtenir des demandes auprès de cette demande estimée. La campagne doit
          rester assez précise pour que vous sachiez ce qui a fonctionné ou non.
        </p>

        <p>Commencer par Google Ads est cohérent si :</p>
        <ul>
          <li>votre offre peut être expliquée en une phrase simple ;</li>
          <li>vous connaissez la zone et les clients que vous ciblez ;</li>
          <li>votre site possède une page consacrée à cette offre ;</li>
          <li>vous savez ce qu’un nouveau client vous rapporte réellement ;</li>
          <li>les appels et formulaires sont suivis jusqu’à la vente ;</li>
          <li>une personne peut répondre rapidement aux demandes.</li>
        </ul>

        <h3>Ce que vous pouvez apprendre avec une campagne</h3>
        <p>
          Vous pouvez observer{" "}
          <a
            href="https://support.google.com/google-ads/answer/2472708?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            une partie des termes de recherche
          </a>
          , les annonces qui donnent envie de cliquer, les pages qui génèrent
          des contacts et la qualité de ces contacts. Google n’affiche pas
          individuellement toutes les requêtes à faible activité. Pour juger la
          campagne, ne vous arrêtez donc pas aux clics : notez les appels
          sérieux, les rendez-vous, les devis, les ventes et la marge obtenue.
        </p>

        <h3>Ce que Google Ads ne peut pas régler à votre place</h3>
        <p>
          Une annonce ne rend pas une offre plus claire, une page plus
          rassurante ou un service commercial plus réactif. Si les visiteurs ne
          comprennent pas ce que vous proposez, acheter davantage de clics
          accélère surtout la dépense. Dans ce cas, commencez par notre
          diagnostic des{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            raisons pour lesquelles un site ne génère pas de demandes
          </Link>
          .
        </p>

        <InfoBox
          variant="amber"
          title="Un petit budget n’est pas toujours un vrai test"
        >
          Google{" "}
          <a
            href="https://support.google.com/google-ads/answer/6319?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            n’impose pas de dépense minimale universelle
          </a>
          . Pourtant, si votre budget ne permet d’obtenir que quelques clics,
          vous risquez de ne rien apprendre. Le budget quotidien est une
          moyenne, pas toujours un plafond par jour : pour de nombreuses
          campagnes,{" "}
          <a
            href="https://support.google.com/google-ads/answer/10486536?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            la dépense peut atteindre deux fois cette moyenne un jour donné,
            avec une limite mensuelle de 30,4 fois la moyenne
          </a>
          . Fixez donc un risque total supportable et décidez ce que vous devez
          apprendre avant de poursuivre.
        </InfoBox>

        <p>
          Si une campagne existe déjà, vérifiez d’abord où part l’argent, quelle
          partie des termes de recherche est disponible et quelles ventes ont
          suivi. Notre guide d’{" "}
          <Link href="/guides/audit-google-ads-que-verifier">
            audit Google Ads
          </Link>{" "}
          détaille ces contrôles.
        </p>

        <h2 id="seo">4. Quand faut-il commencer par le SEO ?</h2>

        <p>
          Le SEO devient prioritaire lorsque vos futurs clients effectuent
          régulièrement les mêmes recherches, que votre site peut être consulté
          par Google et que votre entreprise peut apporter une réponse plus
          utile que les pages déjà visibles. Les questions entendues au
          téléphone sont un bon départ ; elles ne prouvent pas à elles seules
          qu’une page pourra être trouvée.
        </p>

        <p>Commencer par le SEO est cohérent si :</p>
        <ul>
          <li>
            les mêmes questions reviennent dans vos appels et vos rendez-vous ;
          </li>
          <li>
            votre activité ne dépend pas uniquement d’une promotion très courte
            ;
          </li>
          <li>vous disposez d’une véritable expertise à partager ;</li>
          <li>votre site peut être corrigé et enrichi dans le temps ;</li>
          <li>
            vous pouvez faire connaître ces pages et construire votre autorité
            dans un secteur concurrentiel ;
          </li>
          <li>vous pouvez attendre avant de juger le résultat commercial ;</li>
          <li>une personne pourra relire et mettre à jour les contenus.</li>
        </ul>

        <h3>Un bon contenu SEO aide d’abord le client à décider</h3>
        <p>
          Écrire beaucoup d’articles ne suffit pas.{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google recommande de créer d’abord un contenu utile aux personnes
          </a>
          . Chaque page doit donc répondre à une vraie question : combien coûte
          un projet, combien de temps faut-il, quelles erreurs éviter, quelle
          solution choisir ou comment préparer un cahier des charges. Un
          dirigeant doit comprendre la réponse et savoir quoi faire ensuite,
          même s’il ne vous contacte jamais.
        </p>

        <h3>Le SEO n’est ni gratuit ni garanti</h3>
        <p>
          Il faut rechercher les sujets, interroger les personnes qui
          connaissent le métier, rédiger, illustrer, intégrer, améliorer la
          technique du site, faire connaître les pages et les mettre à jour.{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google indique
          </a>{" "}
          que l’effet d’une modification peut apparaître en quelques heures ou
          demander plusieurs mois, et qu’aucun résultat n’est garanti.
        </p>

        <InfoBox
          variant="emerald"
          title="Comment suivre les progrès sans attendre une vente"
        >
          Vérifiez d’abord que la page peut être consultée par Google, puis
          qu’elle apparaît sur des recherches pertinentes. Regardez ensuite les
          visites, les prises de contact et les ventes. Une page vue sur les
          mauvais mots-clés n’est pas une réussite, même si son trafic augmente.
        </InfoBox>

        <p>
          Avant de signer, vérifiez ce qui sera réellement fourni grâce à notre
          guide sur le contenu d’un{" "}
          <Link href="/guides/audit-seo-que-contient-il">audit SEO utile</Link>.
          Pour comprendre ce que finance un forfait, consultez aussi le guide du{" "}
          <Link href="/guides/prix-referencement-naturel">
            prix du référencement naturel
          </Link>
          .
        </p>

        <h2 id="ensemble">
          5. Faut-il faire du SEO et Google Ads en même temps ?
        </h2>

        <p>
          Oui, à condition de donner une mission différente à chacun. L’erreur
          fréquente consiste à répartir un petit budget entre les deux, puis à
          constater qu’aucune action n’a été menée assez sérieusement pour être
          jugée.
        </p>

        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
          <p className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
            Exemple fictif : lancer un nouveau logiciel de gestion
          </p>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Ce scénario ne décrit ni un client ni un témoignage réel. Il sert
            uniquement à montrer comment donner un rôle différent aux deux
            budgets.
          </p>
          <ol className="mb-0 mt-4 space-y-3 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>
              Google Ads cible quelques recherches précises et teste la chaîne
              entre l’annonce, la page et la demande.
            </li>
            <li>
              Les appels permettent de comprendre les mots utilisés, les
              objections et les profils qui ne conviennent pas.
            </li>
            <li>
              Le SEO transforme les questions récurrentes en guides durables,
              sans prétendre que la publicité prédit les futures positions
              naturelles.
            </li>
          </ol>
        </div>

        <p>
          Suivez les deux budgets séparément. Vous devez savoir ce qui est payé
          à Google, ce qui finance la gestion des campagnes et ce qui finance le
          site ou les contenus.{" "}
          <a
            href="https://support.google.com/google-ads/answer/3097241?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Payer Google Ads n’améliore pas directement le classement naturel de
            votre site
          </a>
          .
        </p>

        <h2 id="avant">6. Que faut-il vérifier avant d’investir ?</h2>

        <p>
          Vérifiez les six points suivants. Si l’un d’eux manque, vous saurez
          exactement quoi corriger au lieu de conclure trop vite que « le
          marketing ne fonctionne pas ».
        </p>

        <ol>
          <li>
            <strong>L’offre :</strong> un prospect comprend-il en quelques
            secondes ce que vous faites, pour qui et avec quel résultat attendu
            ?
          </li>
          <li>
            <strong>La demande :</strong> connaissez-vous les questions et les
            mots réellement utilisés par vos clients ?
          </li>
          <li>
            <strong>La page :</strong> répond-elle précisément au besoin,
            notamment sur mobile, avec des références et une action claire ?
          </li>
          <li>
            <strong>Les chiffres :</strong> connaissez-vous votre marge, le
            nombre de demandes sérieuses et le nombre de ventes obtenues ?
          </li>
          <li>
            <strong>La mesure :</strong> un appel, un formulaire et une vente
            sont-ils distingués, avec les choix de consentement correctement
            transmis ?
          </li>
          <li>
            <strong>Le suivi :</strong> qui rappelle les prospects, dans quel
            délai et où sont notées les raisons d’une vente ou d’un refus ?
          </li>
        </ol>

        <p>
          Vous n’avez pas besoin d’un suivi parfait pour commencer. En revanche,
          une{" "}
          <a
            href="https://support.google.com/google-ads/answer/1722054?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            « conversion » Google Ads reste une action que vous avez choisie de
            mesurer
          </a>
          , pas nécessairement une vente. Rapprochez autant que possible les
          formulaires et appels des prospects qualifiés puis des clients dans
          votre outil commercial. En France, les traceurs publicitaires non
          strictement nécessaires nécessitent en principe un{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi"
            target="_blank"
            rel="noopener noreferrer"
          >
            consentement préalable
          </a>
          . La mesure peut donc rester incomplète : indiquez cette limite au
          lieu de transformer les chiffres de la plateforme en vérité absolue.
        </p>

        <h2 id="cout">7. Comment comparer tous les coûts ?</h2>

        <p>
          Comparer le budget publicitaire de Google Ads avec le prix d’un
          article SEO donne une réponse fausse. Comparez tout ce qu’il faut
          financer pour obtenir et traiter une demande pendant la même période.
        </p>

        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Coût complet de Google Ads
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>budget versé à Google ;</li>
              <li>création et gestion des campagnes ;</li>
              <li>création ou amélioration des pages ;</li>
              <li>suivi des appels, formulaires et ventes ;</li>
              <li>temps passé à répondre et à qualifier les demandes.</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Coût complet du SEO
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>analyse technique et corrections du site ;</li>
              <li>recherche des sujets et des concurrents ;</li>
              <li>rédaction, illustrations et intégration ;</li>
              <li>suivi des performances et des demandes ;</li>
              <li>mise à jour des pages dans le temps.</li>
            </ul>
          </section>
        </div>

        <h3>Le calcul utile pour un dirigeant</h3>
        <p>
          Pour chaque approche, retenez le même horizon et additionnez toutes
          les dépenses, y compris le temps interne. Notez ensuite les ventes que
          vous pouvez raisonnablement lui attribuer et la marge qu’elles ont
          générée. Les clics, les positions et les formulaires sont des étapes ;
          la décision financière se prend sur des clients et de la marge, avec
          assez de recul pour respecter votre cycle de vente.
        </p>

        <FormulaBox>
          {[
            "Coût complet = budget média éventuel + prestations externes + pages et contenus + outils de mesure + temps interne valorisé",
            "",
            "Coût par client attribuable = coût complet ÷ nombre de clients attribuables",
            "",
            "Résultat attribuable après acquisition = marge contributive des ventes attribuables − coût complet",
          ].join("\n")}
        </FormulaBox>

        <p>
          Ici, la <strong>marge contributive</strong> désigne le chiffre
          d’affaires des ventes attribuables diminué de leurs coûts variables,
          mais avant les dépenses d’acquisition déjà incluses dans le coût
          complet. Cette séparation évite de compter deux fois la même dépense.
          Si vous ne pouvez pas attribuer toutes les ventes avec certitude,
          calculez une fourchette basse et une fourchette haute. Cette
          incertitude vaut mieux qu’un coût par client artificiellement précis.
        </p>

        <InfoBox
          variant="blue"
          title="N’oubliez pas le calendrier de trésorerie"
        >
          Deux actions peuvent coûter la même somme sur un an sans demander le
          même effort au départ. Une campagne Ads consomme le budget au fil des
          clics. Un chantier SEO peut demander des corrections et plusieurs
          contenus avant les premiers résultats. Inscrivez les dates de dépenses
          et d’encaissement, pas seulement un total annuel.
        </InfoBox>

        <h2 id="exemples">
          8. Trois scénarios fictifs pour reconnaître votre situation
        </h2>

        <p>
          Ces situations ne décrivent ni des clients ni des témoignages réels.
          Elles montrent comment le choix change selon l&apos;offre, la zone et
          la manière de vendre.
        </p>

        <h3>Un artisan veut recevoir des demandes dans une zone précise</h3>
        <p>
          Son offre est claire, son équipe peut répondre et des habitants
          recherchent déjà ce service. Une campagne Google Ads bien ciblée peut
          tester sa capacité à transformer ces recherches en demandes. En
          parallèle, quelques pages locales utiles peuvent préparer une
          visibilité naturelle plus durable.
        </p>

        <h3>Un cabinet de conseil vend des missions longues et complexes</h3>
        <p>
          Les prospects comparent, cherchent des explications et ont besoin
          d’être rassurés avant de prendre rendez-vous. Le SEO peut être
          prioritaire pour publier des pages de fond et des réponses aux
          objections. Google Ads peut ensuite tester une offre précise ; une
          recherche trop large risque d’attirer beaucoup de curieux.
        </p>

        <h3>Une entreprise lance un nouveau SaaS</h3>
        <p>
          Si personne ne comprend encore clairement le problème ou le prix, ni
          le SEO ni Google Ads ne remplacera les échanges avec de vrais clients.
          Commencez par des entretiens et des démonstrations. Une fois l’offre
          clarifiée, Google Ads peut tester quelques recherches ; le SEO peut
          traiter les questions qui reviennent vraiment.
        </p>

        <h2 id="plan">9. Que faire pendant les 90 premiers jours ?</h2>

        <p>
          Ce calendrier ne promet pas un résultat SEO en trois mois ni une
          rentabilité immédiate de Google Ads. Il vous évite de dépenser pendant
          un trimestre sans savoir ce que vous cherchez à apprendre.
        </p>

        <div className="not-prose my-6 space-y-3">
          {[
            {
              period: "Avant de commencer",
              text: "Choisissez une offre, une cible et une zone. Vérifiez la page, le suivi des appels et la valeur moyenne d’un client. Fixez le budget maximal que vous pouvez perdre sans mettre l’entreprise en difficulté.",
            },
            {
              period: "Jours 1 à 30",
              text: "Pour Google Ads, contrôlez les recherches achetées, les dépenses et la qualité des demandes. Pour le SEO, vérifiez la technique, la publication et la présence des pages dans Google. Corrigez d’abord les erreurs évidentes.",
            },
            {
              period: "Jours 31 à 60",
              text: "Reliez les visites aux appels, rendez-vous, devis et ventes. Écoutez les objections des prospects. Améliorez les annonces, les pages ou les contenus à partir de ces retours concrets.",
            },
            {
              period: "Jours 61 à 90",
              text: "Décidez de poursuivre, d’augmenter, de réduire ou d’arrêter. Si votre cycle de vente dépasse trois mois, regardez les opportunités sérieuses et fixez une nouvelle date de décision.",
            },
          ].map((step) => (
            <section
              key={step.period}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-5"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {step.period}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {step.text}
              </p>
            </section>
          ))}
        </div>

        <h3>Décidez à l’avance ce qui vous fera arrêter</h3>
        <p>
          Écrivez une règle simple avant le lancement.{" "}
          <strong>Exemple illustratif fictif :</strong> « Nous investissons
          jusqu’à 2 000 € pour tester cette offre pendant huit semaines. Nous
          poursuivons si nous obtenons au moins trois demandes correspondant à
          notre cible ; sinon, nous analysons les recherches, la page et les
          retours commerciaux avant toute nouvelle dépense. » Les montants et
          les seuils doivent venir de votre activité, pas d’un modèle universel.
        </p>

        <h2 id="decision">
          10. Alors, dans quoi devez-vous investir en premier ?
        </h2>

        <p>Vous pouvez résumer votre décision de cette manière :</p>
        <ul>
          <li>
            <strong>Choisissez Google Ads d’abord</strong> si vous devez tester
            rapidement une offre claire auprès de personnes qui la recherchent
            déjà.
          </li>
          <li>
            <strong>Choisissez le SEO d’abord</strong> si vos clients posent des
            questions récurrentes et si vous pouvez investir dans des réponses
            utiles sans exiger un retour immédiat.
          </li>
          <li>
            <strong>Choisissez les deux</strong> si chaque approche a un rôle
            précis, un budget suffisant et une personne responsable.
          </li>
          <li>
            <strong>Attendez avant d’investir</strong> si votre offre reste
            floue, si votre page ne convainc pas ou si personne ne suit les
            demandes.
          </li>
        </ul>

        <p>
          Le meilleur choix n’est donc pas l’option qui promet le plus de
          trafic. C’est celle qui répond au besoin actuel de votre entreprise
          avec un budget supportable et un résultat que vous pourrez réellement
          mesurer.
        </p>

        <InfoBox
          variant="emerald"
          title="Les six informations à préparer pour décider"
        >
          Notez votre offre, votre client cible, la zone couverte, le délai dans
          lequel vous avez besoin d’apprendre, la marge moyenne d’une vente et
          la personne qui suivra les demandes. Avec ces six éléments, une
          discussion sur le SEO ou Google Ads devient beaucoup plus concrète.
        </InfoBox>

        <p>
          Hagnéré Code accompagne les entreprises en{" "}
          <Link href="/services/referencement-google">
            référencement naturel
          </Link>{" "}
          et en{" "}
          <Link href="/services/publicite-en-ligne">
            gestion de campagnes Google Ads
          </Link>
          . Un premier échange peut aussi conclure qu’il faut corriger votre
          offre, votre page ou votre suivi commercial avant de vous vendre l’une
          de ces prestations.
        </p>

        <GuideInlineCTA
          title="Choisir où investir votre prochain budget"
          description="Expliquez votre offre, votre objectif, votre délai et votre budget. Hagnéré Code relit directement votre demande et cherche à répondre le jour ouvré qui suit, sans garantir ce délai. Vous restez libre de ne lancer aucune prestation."
          tags={[
            "Réponse adaptée à votre situation",
            "Coûts et priorités expliqués",
            "Aucune obligation de lancer les deux",
          ]}
          ctaLabel="Faire le point sur mon projet"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Sources consultées le 21 juillet 2026. Les outils, les interfaces et
          les recommandations évoluent. Les documentations Google expliquent le
          fonctionnement de leurs produits ; elles ne prouvent pas la
          rentabilité d’une campagne ou d’un projet SEO pour votre entreprise.
          Ce guide ne constitue ni une garantie de résultat ni un conseil
          juridique.
        </p>

        <ul>
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Bien débuter en référencement naturel
            </a>{" "}
            : rôle du SEO, délais variables et absence de garantie.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Créer du contenu utile et fiable
            </a>{" "}
            : priorité donnée aux personnes et à l’utilité réelle du contenu.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/9510373?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — À propos des campagnes sur le Réseau de Recherche
            </a>{" "}
            : annonces liées aux recherches de produits et services.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/1722120?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Examen des annonces
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/1752122?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              classement des annonces
            </a>{" "}
            : conditions nécessaires avant d’obtenir une visibilité.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/6319?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Coûts et contrôle du budget
            </a>{" "}
            : absence de dépense minimale imposée par la plateforme.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/10486536?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Budget quotidien moyen
            </a>{" "}
            : limites de dépense journalière et mensuelle.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/2472708?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Rapport sur les termes de recherche
            </a>{" "}
            : requêtes disponibles et limites de confidentialité.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/1722054?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Suivre les conversions
            </a>{" "}
            : mesure des actions choisies après une interaction publicitaire.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/3097241?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Résultats naturels et sponsorisés
            </a>{" "}
            : la publicité ne modifie pas directement le classement naturel.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Cookies et autres traceurs : que dit la loi ?
            </a>{" "}
            : règles applicables au suivi publicitaire et à certaines mesures
            d’audience.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
