import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("choisir-agence-seo");

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
        alt: "Cinq questions pour vérifier chaque promesse d’une agence SEO",
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
      name: "Choisir une agence SEO",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Comment choisir une bonne agence SEO ?",
    answer:
      "Envoyez les mêmes informations à chaque agence, puis posez cinq questions : que ferez-vous concrètement, sur quelles pages ou quels comptes, que me remettrez-vous, que gardera mon entreprise et quand ferons-nous le bilan ? Écartez une position garantie, une méthode secrète ou des accès qui vous rendent dépendant.",
  },
  {
    question:
      "Une agence SEO bien classée sur Google est-elle forcément bonne ?",
    answer:
      "Non. Son propre classement montre au mieux un résultat dans une situation précise. Il ne prouve pas qu’elle comprend votre client, votre cycle de vente, votre site ou vos contraintes. Demandez comment elle passe de votre objectif commercial aux pages et travaux réellement proposés.",
  },
  {
    question: "Une agence SEO peut-elle garantir la première position ?",
    answer:
      "Non. Google conseille de se méfier des prestataires qui garantissent la première place. Une agence peut s’engager sur le travail réalisé, les pages examinées, les corrections, les contenus remis et le contrôle des résultats, pas sur une décision future du moteur.",
  },
  {
    question: "Faut-il accepter un audit SEO avant de choisir ?",
    answer:
      "Un premier regard limité peut aider à comprendre une proposition, mais un audit complet demande du temps, des données et une analyse. Définissez les pages examinées, le rapport remis et les limites. Pour un audit proposé avant la signature, Google conseille de ne donner qu’un accès en lecture seule à Search Console.",
  },
  {
    question: "Qui doit posséder Search Console et les contenus SEO ?",
    answer:
      "Votre entreprise doit garder la maîtrise de son nom de domaine, d’un compte administrateur du site, de Search Console et de son outil de mesure. Les droits sur les textes et images dépendent du contrat. L’agence peut conserver ses logiciels, mais elle doit préciser les données exportables et les conditions de départ. Ne partagez jamais un mot de passe personnel.",
  },
  {
    question: "Combien d’articles une agence SEO doit-elle écrire ?",
    answer:
      "Il n’existe pas de nombre universel. Le bon volume dépend des questions réellement recherchées, des pages déjà présentes, de leur qualité et de la capacité de votre entreprise à relire et utiliser les contenus. Demandez pourquoi chaque page est proposée et quelle décision elle aide le lecteur à prendre.",
  },
  {
    question: "Que doit contenir un compte rendu SEO mensuel ?",
    answer:
      "Il doit montrer les pages et changements du mois, les impressions et clics issus de Search Console, les visites lorsque l’outil du site le permet, les demandes commerciales connues, les limites de ces chiffres et la prochaine décision. Une courbe sans travail ni décision n’est pas suffisante.",
  },
  {
    question: "Que vaut une offre de référencement dans les réponses d’IA ?",
    answer:
      "Demandez le travail exact. Google indique que ses fonctions d’IA s’appuient sur les bonnes pratiques SEO habituelles et qu’aucun fichier ou balisage spécial n’est requis pour y apparaître. Une agence peut améliorer des pages utiles et leur accessibilité ; elle ne peut pas garantir une citation future.",
  },
];

function RedFlagCard({ title, why }: { title: string; why: string }) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-950/20">
      <h3 className="mb-2 text-base font-bold text-red-950 dark:text-red-100">
        {title}
      </h3>
      <p className="mb-0 text-sm leading-relaxed text-red-900 dark:text-red-200">
        {why}
      </p>
    </div>
  );
}

type PromiseCheckProps = {
  promise: string;
  work: string;
  scope: string;
  deliverable: string;
  companyControl: string;
  review: string;
};

function PromiseCheck({
  promise,
  work,
  scope,
  deliverable,
  companyControl,
  review,
}: PromiseCheckProps) {
  const items = [
    ["1. Que ferez-vous ?", work, "text-violet-700 dark:text-violet-300"],
    ["2. Où ?", scope, "text-blue-700 dark:text-blue-300"],
    [
      "3. Que me remettrez-vous ?",
      deliverable,
      "text-emerald-700 dark:text-emerald-300",
    ],
    [
      "4. Que gardera mon entreprise ?",
      companyControl,
      "text-amber-700 dark:text-amber-300",
    ],
    [
      "5. Quand ferons-nous le bilan ?",
      review,
      "text-cyan-700 dark:text-cyan-300",
    ],
  ];

  return (
    <section className="not-prose my-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
          Promesse du devis
        </p>
        <h3 className="mb-0 mt-1 text-lg font-bold text-zinc-950 dark:text-white">
          « {promise} »
        </h3>
      </div>
      <div className="grid gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-2 xl:grid-cols-3">
        {items.map(([label, text, color]) => (
          <div
            key={label}
            className={
              "bg-white p-4 dark:bg-zinc-950 " +
              (label.startsWith("5.") ? "sm:col-span-2" : "")
            }
          >
            <p className={"mb-2 text-xs font-bold " + color}>{label}</p>
            <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VerdictCard({
  title,
  when,
  before,
}: {
  title: string;
  when: string;
  before: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {when}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-violet-800 dark:text-violet-300">
        <strong>Avant d’avancer :</strong> {before}
      </p>
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
          { label: "Choisir une agence SEO" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous comparez des articles, des corrections techniques ou des liens ? Trois devis peuvent sembler équivalents sans prévoir le même travail. Voici comment les départager."
        heroAction={{
          href: "#promesses",
          label: "Tester les promesses du devis",
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
            title: "4 promesses à écarter",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "5 questions par proposition",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 décisions honnêtes",
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
            href: "/guides/audit-seo-que-contient-il",
            label: "Comprendre le contenu d’un audit SEO",
          },
          {
            href: "/guides/prix-referencement-naturel",
            label: "Comparer le prix des prestations SEO",
          },
          {
            href: "/guides/contrat-seo-duree-engagement",
            label: "Lire la durée et la sortie du contrat SEO",
          },
          {
            href: "/guides/pourquoi-site-pas-visible-google",
            label: "Diagnostiquer un site peu visible",
          },
          {
            href: "/guides/choisir-son-agence-web",
            label: "Vérifier les points généraux d’une agence web",
          },
          {
            href: "/services/referencement-google",
            label: "Découvrir notre accompagnement SEO",
          },
        ]}
        faqTitle="Choisir une agence SEO : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous comparez trois devis SEO. Le premier prévoit des articles, le
          deuxième des corrections techniques et le troisième des liens ou une
          meilleure présence dans les réponses d’IA. Le référencement naturel,
          ou SEO, regroupe les travaux qui aident vos pages à être découvertes
          et comprises dans les résultats non publicitaires de Google. Mais ces
          trois devis ne vendent pas la même chose.{" "}
          <strong>La réponse :</strong> donnez les mêmes informations à chaque
          agence. Demandez ce qu’elle fera, sur quelles pages ou quels comptes,
          ce qu’elle vous remettra, ce que votre entreprise gardera et quand
          vous examinerez les résultats. Écartez une première position garantie,
          une méthode tenue secrète, des accès qui vous rendent dépendant ou des
          liens créés principalement pour manipuler le classement. Vous pourrez
          ensuite signer, demander un devis corrigé, commander un audit limité
          ou attendre.
        </p>
        <p>
          Vous voulez aussi comparer les budgets ou comprendre l’état technique
          de votre site ? Ces deux sujets sont traités séparément dans nos
          guides sur le{" "}
          <Link href="/guides/prix-referencement-naturel">
            prix du référencement naturel
          </Link>{" "}
          et sur le contenu d’un{" "}
          <Link href="/guides/audit-seo-que-contient-il">audit SEO</Link>.
        </p>

        <GuideToc
          items={[
            { id: "refus", label: "1. Écarter quatre promesses" },
            { id: "informations", label: "2. Envoyer la même demande" },
            { id: "questions", label: "3. Écouter les questions" },
            { id: "promesses", label: "4. Tester une réponse réelle" },
            { id: "exemples", label: "5. Vérifier les travaux proposés" },
            { id: "comptes", label: "6. Garder comptes et contenus" },
            { id: "rapport", label: "7. Exiger un compte rendu utile" },
            {
              id: "verdict",
              label: "8. Signer, corriger, auditer ou attendre",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="refus">1. Écartez quatre promesses avant de noter le reste</h2>
        <p>
          Un beau devis et un prix rassurant ne compensent pas une promesse
          dangereuse. Si l’un des quatre points suivants apparaît, demandez sa
          correction avant de comparer le reste. Si l’agence maintient son
          refus, écartez sa proposition.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <RedFlagCard
            title="« Première position garantie »"
            why="Personne ne contrôle les décisions futures de Google, la concurrence et la demande. Demandez plutôt quels travaux et contrôles peuvent être garantis."
          />
          <RedFlagCard
            title="« Notre méthode doit rester secrète »"
            why="Une agence peut protéger son savoir-faire sans vous cacher les pages modifiées, les liens obtenus, les comptes utilisés et les risques acceptés."
          />
          <RedFlagCard
            title="« Vous n’aurez aucun accès à vos comptes »"
            why="Votre entreprise doit garder la maîtrise du domaine, d’un compte administrateur du site, de Search Console et de son outil de mesure. L’agence peut conserver ses propres logiciels, pas vous rendre captif."
          />
          <RedFlagCard
            title="« Nous ne révélerons jamais l’origine des liens »"
            why="Avant de signer, l’agence doit expliquer ses critères, les paiements éventuels et les risques refusés. Après obtention, elle doit vous remettre la liste et le statut des liens."
          />
        </div>
        <p>
          Google recommande de se méfier des garanties de première place et de
          demander au prestataire d’expliquer son travail, sa méthode, ses
          résultats attendus, sa façon de les mesurer et sa communication. Sa
          page officielle{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Avez-vous besoin d’un référenceur ? »
          </a>{" "}
          conseille aussi, lorsqu’un référenceur propose un audit, d’en mesurer
          les implications et de ne lui donner d’abord qu’un accès Search
          Console en lecture seule.
        </p>

        <h2 id="informations">2. Envoyez la même demande aux trois agences</h2>
        <p>
          Une offre de quatre articles ne peut pas être comparée à une refonte
          technique uniquement par son prix. Donnez d’abord le même point de
          départ, puis demandez à chaque agence de signaler ce qui lui manque
          pour proposer un travail sérieux.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-zinc-950 dark:text-white">
            La demande commune tient sur une page
          </h3>
          <ul className="m-0 grid list-none gap-x-8 gap-y-3 p-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            {[
              [
                "Votre activité",
                "offre, clients recherchés, zone et décision que vous voulez faciliter.",
              ],
              [
                "Votre site",
                "pages importantes, outil utilisé, changements prévus et personnes capables de publier.",
              ],
              [
                "Votre situation Google",
                "visibilité connue, problèmes observés, données disponibles et événements récents.",
              ],
              [
                "Votre vente",
                "ce qu’est une demande utile, où elle est notée et combien de temps une vente peut prendre.",
              ],
              [
                "Vos moyens",
                "budget, temps de relecture, développeur disponible et capacité à produire des informations expertes.",
              ],
              [
                "Votre attente",
                "question à résoudre, délai lié à une vraie contrainte et résultat que la mission doit remettre.",
              ],
            ].map(([title, text]) => (
              <li
                key={title}
                className="border-b border-zinc-200 pb-3 dark:border-zinc-800"
              >
                <p className="mb-1 font-bold text-zinc-950 dark:text-white">
                  {title}
                </p>
                <p className="mb-0 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Écrivez « inconnu » lorsqu’une information manque. La bonne réponse
          n’est pas toujours un accompagnement mensuel. Une correction technique
          précise, un audit limité, une page importante à reprendre ou quelques
          semaines de préparation peuvent suffire.
        </p>

        <h2 id="questions">
          3. Une agence sérieuse cherche d’abord à comprendre votre activité
        </h2>
        <p>
          Avant de compter les articles ou les liens, regardez les questions
          posées. L’agence doit pouvoir relier une recherche à une page, puis
          cette page à une action utile pour votre entreprise. Elle ne connaît
          pas encore votre marché uniquement parce qu’elle a travaillé dans un
          secteur voisin.
        </p>
        <ul>
          <li>
            Quel type de client voulez-vous attirer et quel problème
            formule-t-il avec ses propres mots ?
          </li>
          <li>Que doit-il comprendre ou faire après avoir trouvé une page ?</li>
          <li>
            Quelles offres, zones ou types de demandes voulez-vous au contraire
            exclure ?
          </li>
          <li>
            Qui peut vérifier les informations métier avant leur publication ?
          </li>
          <li>
            Qu’est-ce qu’une demande utile, où est-elle suivie et quand
            devient-elle une vente ?
          </li>
          <li>
            Quelles modifications du site sont possibles et qui peut les
            appliquer ?
          </li>
        </ul>
        <InfoBox
          variant="blue"
          title="Méfiez-vous des quantités décidées avant de comprendre votre besoin"
        >
          Si la proposition fixe déjà un nombre de pages, d’articles et de liens
          avant ces réponses, demandez ce qui justifie chaque quantité. Le
          nombre peut devenir une conséquence du travail à faire ; il ne doit
          pas remplacer la compréhension du besoin.
        </InfoBox>

        <h3>Parlez à la personne qui s’occupera réellement de votre site</h3>
        <p>
          Demandez qui pilotera la mission, qui réalisera les corrections, qui
          écrira et relira les contenus, ce qui sera sous-traité et qui vous
          répondra en cas de problème. Échangez avec la personne chargée du
          suivi avant de signer. Demandez aussi un exemple comparable en
          séparant la situation de départ, le travail effectué, la période
          observée et les limites du résultat. Le prestige commercial de
          l’agence ne remplace pas l’équipe qui travaillera pour vous.
        </p>

        <h2 id="promesses">4. Transformez chaque promesse en cinq réponses</h2>
        <p>
          Prenez les trois promesses principales de chaque devis. Recopiez-les
          sans les améliorer, puis demandez les cinq réponses ci-dessous. Une
          agence n’a pas besoin de connaître à l’avance le résultat futur ; elle
          doit pouvoir expliquer le travail proposé et ce qui permettra de le
          vérifier.
        </p>
        <PromiseCheck
          promise="Nous allons améliorer votre visibilité"
          work="Nommez les actions prévues et ce qui n’est pas compris dans le devis."
          scope="Nommez les pages du site et les comptes concernés."
          deliverable="Précisez le document, le changement visible ou la comparaison avant/après que je recevrai."
          companyControl="Précisez les comptes, contenus et fichiers que mon entreprise pourra administrer ou réutiliser."
          review="Fixez la date, les chiffres examinés et la décision possible : continuer, corriger ou arrêter."
        />
        <p>
          Faites le même exercice avec « corriger la technique », « produire du
          contenu », « développer la popularité » ou « apparaître dans les
          réponses d’IA ». Les mots « visibilité », « contenu » ou « popularité
          » ne suffisent pas. Le devis doit dire ce qui changera concrètement
          sur votre site.
        </p>

        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <p className="m-0 bg-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-200 dark:bg-black">
            Exemple illustratif fictif
          </p>
          <div className="border-b border-zinc-200 bg-red-50 p-5 dark:border-zinc-800 dark:bg-red-950/20">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-red-700 dark:text-red-300">
              Réponse trop vague
            </p>
            <p className="m-0 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
              « Nous publierons quatre articles optimisés par mois. »
            </p>
          </div>
          <div className="bg-emerald-50 p-5 dark:bg-emerald-950/20">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-300">
              Réponse exploitable
            </p>
            <p className="m-0 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
              « Nous choisirons avec votre équipe les questions réellement
              posées par vos prospects. Avant de créer une page, nous
              vérifierons si une page existante doit être améliorée. Votre
              spécialiste métier validera les faits. Les textes et leurs
              fichiers vous seront remis. À la date prévue dans le devis, nous
              examinerons les pages publiées, les clics et les demandes
              commerciales connues pour décider de la suite. »
            </p>
          </div>
        </div>
        <p>
          La seconde réponse ne garantit ni classement ni vente. Elle permet en
          revanche de savoir ce qui sera fait, par qui, ce que votre entreprise
          gardera et comment le vérifier.
        </p>

        <h2 id="exemples">
          5. Demandez un exemple différent pour la technique, les contenus et
          les liens
        </h2>
        <p>
          Vous ne commandez pas encore l’audit complet. Demandez à l’agence de
          montrer, sur une page publique de votre site ou un exemple anonymisé
          qu’elle peut utiliser, comment elle a repéré un problème, quelle
          correction elle proposerait et comment elle vérifierait le résultat.
        </p>

        <h3>Pour une recommandation technique</h3>
        <p>
          Demandez une page concernée, le défaut observé, la source du constat,
          la correction possible, le responsable et le test après correction. «
          Le site est mal optimisé » ne suffit pas. Une bonne réponse peut aussi
          conclure que la correction n’est pas prioritaire.
        </p>

        <h3>Pour un contenu</h3>
        <p>
          Demandez quelle question réelle la page doit traiter, pour quel
          lecteur, avec quelles informations propres à l’entreprise et quelle
          action suivante. Vérifiez qui relit les faits, qui publie, où le texte
          restera accessible et quels droits le contrat vous accorde. Un nombre
          de mots ou une note donnée par un logiciel ne prouve pas qu’un
          dirigeant trouvera sa réponse.
        </p>

        <h3>Pour des liens ou des mentions</h3>
        <p>
          Avant de signer, demandez comment les sites seront choisis, si
          certains liens seront payés et quels risques l’agence refuse de
          prendre. Elle ne peut pas toujours connaître à l’avance les médias ou
          partenaires qui accepteront de vous citer. Après obtention, exigez la
          liste des liens et leur statut. Google classe parmi ses{" "}
          <a
            href="https://developers.google.com/search/docs/essentials/spam-policies?hl=fr#link-spam"
            target="_blank"
            rel="noopener noreferrer"
          >
            pratiques de spam les liens créés principalement pour manipuler les
            classements
          </a>
          . Une publicité ou un sponsoring peut comporter un lien. Google
          demande alors d’ajouter une indication technique signalant son
          caractère publicitaire : l’attribut{" "}
          <code>rel=&quot;nofollow&quot;</code> ou{" "}
          <code>rel=&quot;sponsored&quot;</code>. Écartez une offre qui promet
          seulement un volume de liens tout en refusant d’en expliquer les
          critères puis d’en révéler l’origine.
        </p>

        <h3>Pour une promesse de visibilité dans les réponses d’IA</h3>
        <p>
          Demandez le travail exact sur vos pages. Google indique que ses{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/ai-features?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonctions d’IA reposent sur les bonnes pratiques SEO habituelles
          </a>{" "}
          et qu’aucun fichier ou balisage spécial n’est nécessaire pour y
          apparaître. Une meilleure page peut être utile aux lecteurs et aux
          moteurs ; aucun « fichier magique » ne garantit une citation.
        </p>

        <h2 id="comptes">6. Gardez vos comptes et vos contenus</h2>
        <p>
          Search Console est l’outil de Google qui montre notamment si ses
          systèmes découvrent vos pages et sur quelles recherches elles
          obtiennent des impressions et des clics. Google distingue{" "}
          <a
            href="https://support.google.com/webmasters/answer/7687615?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            propriétaires et utilisateurs dans Search Console
          </a>
          . Gardez au moins un propriétaire contrôlé par votre entreprise et
          donnez à l’agence uniquement les droits nécessaires au travail
          commandé.
        </p>
        <p>
          Pour l’audit préalable, Google conseille un accès Search Console en
          lecture seule. Plus généralement, ne partagez jamais votre mot de
          passe ou un code de connexion : créez un accès nominatif, notez les
          droits accordés et prévoyez leur retrait à une date écrite. Après la
          signature, notez qui administre l’outil de statistiques du site,
          l’espace de publication, le domaine, les extensions et les tableaux de
          suivi.
        </p>
        <p>
          Votre entreprise doit garder la maîtrise du nom de domaine, d’un
          compte administrateur du site, de Search Console et de son outil de
          mesure. L’agence peut conserver ses propres logiciels et licences,
          mais elle doit préciser les données que vous pourrez consulter ou
          exporter et la procédure de départ. Le contrat doit aussi dire ce que
          vous pouvez réutiliser : textes, images, études, tableaux, modèles et
          réglages créés pour votre entreprise. Si l’enjeu est important, faites
          examiner les clauses par un professionnel compétent.
        </p>

        <h2 id="rapport">
          7. Le compte rendu doit relier le travail aux demandes commerciales
        </h2>
        <p>
          Search Console décrit ce qui se passe avant l’arrivée sur le site :
          impressions et clics depuis Google. Un outil comme Analytics décrit
          ensuite les visites et les actions sur le site. Google explique
          pourquoi les{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            chiffres de Search Console et d’Analytics peuvent différer
          </a>
          . Aucun des deux ne connaît automatiquement la qualité d’un prospect
          ou la vente enregistrée par votre équipe.
        </p>
        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-white dark:border-zinc-800 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
            Le compte rendu en six réponses
          </p>
          <ul className="m-0 grid list-none gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
            {[
              [
                "Travail",
                "Quelles pages ont été créées, corrigées ou examinées ?",
              ],
              [
                "Ce qui a été livré",
                "Quel changement, document ou test permet de le constater ?",
              ],
              [
                "Visibilité",
                "Quelles impressions et quels clics sont observés, avec quelle période de comparaison ?",
              ],
              [
                "Après le clic",
                "Quelles visites, demandes ou ventes sont connues et lesquelles restent impossibles à relier ?",
              ],
              [
                "Limite",
                "Qu’est-ce que les données ne permettent pas encore de conclure ?",
              ],
              [
                "Décision",
                "Que faut-il continuer, corriger, arrêter ou tester ensuite, et qui s’en charge ?",
              ],
            ].map(([title, text]) => (
              <li key={title} className="border-b border-white/10 pb-3">
                <h3 className="mb-1 text-sm font-bold text-white">{title}</h3>
                <p className="mb-0 text-sm leading-relaxed text-zinc-300">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Ne demandez pas à l’agence d’attribuer avec certitude chaque vente au
          SEO lorsque le parcours comporte plusieurs visites, appels ou
          recommandations. Demandez-lui de séparer ce qui est observé, ce qui
          est rapproché dans votre suivi commercial et ce qui reste une
          hypothèse.
        </p>

        <h2 id="verdict">8. Signez, faites corriger, auditez ou attendez</h2>
        <p>
          Si deux offres passent toutes ces vérifications, assurez-vous d’abord
          qu’elles traitent la même priorité. Demandez à la personne qui fera
          réellement le travail d’expliquer sa première action et la première
          page concernée. Comparez ensuite le coût total, la durée et les
          conditions de sortie, le temps que votre équipe devra consacrer au
          projet et la disponibilité de cette personne. Ne choisissez pas la
          liste de prestations la plus longue : choisissez l’offre dont la
          première action est précise, dont le résultat pourra être vérifié et
          dont les livrables resteront accessibles à votre entreprise.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <VerdictCard
            title="Signer la proposition"
            when="L’agence comprend le client recherché, décrit ses travaux, nomme les pages et personnes, laisse vos comptes sous contrôle et explique chaque contrôle."
            before="vérifiez encore la durée, les responsabilités, les droits sur les contenus et les conditions de départ."
          />
          <VerdictCard
            title="Demander une proposition corrigée"
            when="L’objectif semble juste, mais des quantités, accès, responsabilités ou moyens de contrôle restent flous."
            before="transformez chaque « à préciser » en réponse écrite ; ne signez pas sur la promesse qu’on détaillera plus tard."
          />
          <VerdictCard
            title="Commander un audit limité"
            when="Les agences proposent des travaux très différents parce que la cause du problème ou l’état du site n’est pas encore suffisamment connu."
            before="définissez les pages et données examinées, le rapport remis, les limites et le fait que l’audit n’autorise pas automatiquement les corrections."
          />
          <VerdictCard
            title="Attendre ou corriger un point précis"
            when="L’offre, les pages, les accès ou la personne chargée de valider les contenus ne sont pas prêts, ou une correction autonome suffit."
            before="fixez ce qui doit être prêt et la date à laquelle vous reprendrez la décision."
          />
        </div>

        <p>
          Hagnéré Code vend un{" "}
          <Link href="/services/referencement-google">
            accompagnement en référencement naturel
          </Link>
          . Nous avons donc un intérêt commercial dans ce sujet. Utilisez
          exactement les mêmes cinq questions sur notre proposition et sur
          celles des autres agences.
        </p>

        <GuideInlineCTA
          title="Faire le point sur vos propositions SEO"
          description="Indiquez votre site, les clients recherchés et ce que prévoient les devis reçus. Nous vous dirons si une correction précise, un audit limité, un accompagnement ou une préparation préalable semblent utiles, sans garantir de position ni de délai de résultat."
          tags={[
            "Travaux vérifiables",
            "Comptes conservés",
            "Audit ou accompagnement",
          ]}
          ctaLabel="Décrire mes devis SEO"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources, limites et date de vérification</h2>
        <p>
          Sources Google consultées le 22 juillet 2026 : choix d’un référenceur,
          utilisateurs et autorisations Search Console, rapprochement Search
          Console/Analytics, règles sur les liens et fonctions d’IA dans Google
          Search. Ces pages et produits peuvent évoluer ; consultez les liens
          officiels au moment de votre décision.
        </p>
        <p>
          Ce guide aide à comparer des propositions. Il ne remplace ni un audit
          du site, ni la lecture du contrat, ni un conseil juridique. Il ne
          prédit pas le classement, le trafic ou les ventes. La demande, la
          concurrence, la qualité des pages, la réputation du site et les
          changements de Google restent hors du contrôle d’une agence.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
