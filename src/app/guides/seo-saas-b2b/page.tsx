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

const guide = getGuide("seo-saas-b2b");

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
        alt: "Trois pages SEO SaaS B2B reliées aux questions des prospects et aux ventes",
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
      name: "SEO d’un SaaS B2B",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien d’articles faut-il publier chaque mois ?",
    answer:
      "Il n’existe pas de cadence universelle. Publiez au rythme auquel votre équipe peut produire, vérifier, relier et maintenir des réponses utiles. Si l’acheteur, le problème ou les preuves restent flous, zéro nouvelle page peut être la meilleure décision du mois.",
  },
  {
    question: "Google pénalise-t-il tout contenu aidé par une IA ?",
    answer:
      "Non. Google vise notamment le contenu créé à grande échelle principalement pour manipuler le classement et sans valeur ajoutée, quelle que soit la méthode de production. L’assistance par IA ne dispense pas de recherche, d’expérience, de vérification et de responsabilité éditoriale.",
  },
  {
    question: "Le trafic organique suffit-il pour juger le SEO ?",
    answer:
      "Non pour un SaaS B2B. Les impressions et visites indiquent une visibilité ou un intérêt, pas une demande qualifiée ni une vente. Rapprochez les pages des demandes, de leur qualification et du résultat commercial, avec les limites d’attribution clairement annoncées.",
  },
  {
    question: "Faut-il créer une page pour chaque variation de mot-clé ?",
    answer:
      "Non. Une page doit résoudre une question autonome. Regroupez les formulations qui appellent la même réponse ; séparez les pages lorsque le problème, l’option comparée, la preuve ou l’action change réellement.",
  },
  {
    question: "Un pilote de trois pages peut-il prouver le canal ?",
    answer:
      "Pas à lui seul. Il peut vérifier la capacité de l’équipe à choisir des questions utiles, publier des preuves et suivre le parcours. La demande peut être faible, le cycle long et l’attribution incomplète. La revue décide de poursuivre, réécrire ou arrêter sans transformer trois pages en certitude.",
  },
  {
    question: "Faut-il attendre quatre-vingt-dix jours dans tous les cas ?",
    answer:
      "Non. C’est la date de revue de l’exemple de ce guide, pas une loi du SEO. Fixez une fenêtre cohérente avec l’exploration, la demande existante et votre cycle de vente. Corrigez immédiatement une page inaccessible ou fausse ; attendez assez pour juger un résultat commercial tardif.",
  },
];

const conversationFields = [
  {
    label: "Phrase exacte",
    prompt: "Qu’a demandé ou objecté le prospect, dans ses propres mots ?",
    warning: "Ne la réécrivez pas immédiatement en mot-clé.",
  },
  {
    label: "Situation",
    prompt: "Qu’est-ce qui se passe dans son entreprise aujourd’hui ?",
    warning: "Écartez les problèmes que votre produit ne traite pas.",
  },
  {
    label: "Conséquence",
    prompt: "Pourquoi cette situation mérite-t-elle du temps ou un budget ?",
    warning: "N’inventez ni perte, ni gain, ni urgence.",
  },
  {
    label: "Options",
    prompt: "Quelles réponses compare-t-il réellement ?",
    warning: "Incluez le processus actuel et la décision de ne rien acheter.",
  },
  {
    label: "Preuve",
    prompt: "Que demande-t-il à voir avant une démonstration ?",
    warning: "Une promesse commerciale ne remplace pas une preuve publiable.",
  },
  {
    label: "Limite",
    prompt: "Dans quel cas le SaaS n’est-il pas adapté ?",
    warning: "Cette limite qualifie le lecteur au lieu de le pousser.",
  },
];

const pageRoles = [
  {
    title: "1. Comprendre le problème",
    question: "« Est-ce vraiment notre problème, et que coûte l’inaction ? »",
    content:
      "Situation observable, mécanisme, calcul prudent lorsqu’il est possible, erreurs fréquentes et cas où il vaut mieux ne pas agir.",
    next: "Lire une comparaison seulement si le problème est reconnu et finançable.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "2. Évaluer les options",
    question: "« Tableur, logiciel standard, SaaS ou processus actuel ? »",
    content:
      "Critères communs, objections loyales, coûts, contraintes et cas où chaque option convient ou non.",
    next: "Consulter une preuve de déploiement lorsque le SaaS reste une option crédible.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "3. Se rassurer et agir",
    question: "« Peut-il s’intégrer, protéger les données et être déployé ? »",
    content:
      "Démonstration réelle, méthode, intégration, migration, sécurité, limites et informations à préparer.",
    next: "Demander une démonstration ou un échange seulement si la situation correspond.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
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
          { label: "SEO d’un SaaS B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre SaaS publie, mais les bonnes entreprises ne demandent pas de démonstration ? Arrêtez d’ajouter des pages tant que l’acheteur, le problème, les preuves et la mesure sont flous. Sinon, testez trois pages issues de vraies conversations."
        heroAction={{
          href: "#fiche-conversation",
          label: "Préparer mes trois pages",
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
            title: "10 conversations à rejouer",
            description: "",
            color: "blue",
          },
          {
            number: "02",
            title: "3 rôles de page",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "5 étapes à mesurer",
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
            href: "/guides/seo-ou-google-ads",
            label: "Choisir entre SEO et Google Ads",
          },
          {
            href: "/guides/google-ads-saas-b2b",
            label: "Relier Google Ads aux contrats du SaaS",
          },
          {
            href: "/guides/combien-de-temps-resultats-seo",
            label: "Fixer un horizon de revue SEO",
          },
          {
            href: "/guides/valider-idee-saas-avant-developper",
            label: "Valider l’idée du SaaS avant d’acquérir",
          },
        ]}
        faqTitle="Questions fréquentes sur le SEO d’un SaaS B2B"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Trente articles sur les fonctionnalités et presque aucune demande de
          démonstration : ne commandez pas quatre textes de plus. Relisez
          d’abord dix conversations commerciales. Si vous ne pouvez pas nommer
          l’entreprise qui achète, le problème assez important pour être
          financé, les options qu’elle compare et les preuves publiables, le
          SaaS n’est pas prêt pour un nouveau programme SEO. Clarifiez l’offre
          ou réparez le parcours. Si ces éléments existent, testez trois pages
          différentes — problème, options, réassurance — puis suivez leur chemin
          jusqu’aux demandes qualifiées et aux ventes.
        </p>

        <InfoBox
          variant="emerald"
          title="Le SEO n’est pas une cadence de publication"
        >
          C’est la capacité à répondre à une question que l’acheteur se pose
          avant de décider, avec une réponse fiable, une preuve accessible, une
          limite honnête et une prochaine action logique. Une page que personne
          ne peut vérifier ni maintenir ne devient pas meilleure parce qu’elle
          est publiée chaque mardi.
        </InfoBox>

        <p>
          Ce guide ne promet ni position, ni trafic, ni demande de
          démonstration. Il propose un pilote limité. Si votre besoin est une
          vente immédiate ou un volume garanti, n’investissez pas dans ce
          pilote. Si le produit n’a pas encore trouvé son problème et son
          acheteur, revenez à la{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            validation de l’idée SaaS
          </Link>{" "}
          avant de chercher des mots-clés.
        </p>

        <GuideToc
          items={[
            { id: "pret", label: "Vérifier si le SaaS est prêt" },
            {
              id: "fiche-conversation",
              label: "Rejouer dix conversations de vente",
            },
            { id: "questions", label: "Ranger les questions par décision" },
            { id: "pilote", label: "Choisir trois pages différentes" },
            { id: "ecriture", label: "Écrire une réponse utile" },
            { id: "maillage", label: "Relier les pages sans pousser" },
            { id: "mesure", label: "Mesurer jusqu’à la vente" },
            {
              id: "exemple",
              label: "Rejouer le scénario fictif Novaria",
            },
            { id: "decision", label: "Continuer, réécrire ou arrêter" },
            { id: "fit", label: "Savoir quand demander de l’aide" },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <h2 id="pret">Votre SaaS est-il prêt à financer du contenu ?</h2>
        <p>
          Avant toute liste de sujets, répondez aux sept questions ci-dessous.
          Les quatre premières sont des portes. Si elles restent vides, publier
          plus n’est probablement pas votre prochaine action.
        </p>
        <GuideTable
          caption="Test de préparation avant le pilote SEO"
          headers={["Question", "Réponse attendue", "Si elle manque"]}
          rows={[
            [
              "Qui achète ?",
              "Type d’entreprise, rôle et situation reconnaissables.",
              "Reprendre les conversations et la définition du marché.",
            ],
            [
              "Quel problème est financé ?",
              "Conséquence réelle assez importante pour décider.",
              "Clarifier l’offre ; ne pas créer de page de volume.",
            ],
            [
              "Quand le produit n’est-il pas adapté ?",
              "Limites et alternatives formulées loyalement.",
              "Définir qui ne devrait pas acheter avant de générer des demandes.",
            ],
            [
              "Quelle preuve peut être publiée ?",
              "Démonstration, méthode, intégration, sécurité ou exemple fictif annoncé.",
              "Créer ou vérifier la preuve avant le contenu.",
            ],
            [
              "Quelles questions entend-on ?",
              "Phrases datées issues d’appels, d’e-mails ou de rendez-vous.",
              "Rejouer dix conversations.",
            ],
            [
              "Comment une demande est-elle qualifiée ?",
              "Critères et statuts compris par marketing et vente.",
              "Réparer la mesure avant de juger le trafic.",
            ],
            [
              "Qui maintient la page ?",
              "Une personne capable de corriger une information devenue fausse.",
              "Réduire le pilote ou ne pas publier.",
            ],
          ]}
        />

        <h2 id="fiche-conversation">
          Rejouez dix conversations au lieu d’inventer dix mots-clés
        </h2>
        <p>
          Prenez les dix derniers appels, comptes rendus ou courriels que vous
          êtes autorisé à utiliser. Vous n’avez pas besoin d’un logiciel SEO
          pour commencer. Copiez les mots du prospect, retirez les informations
          personnelles inutiles, puis remplissez une fiche par question
          importante.
        </p>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {conversationFields.map((field) => (
            <article
              key={field.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="m-0 text-xs font-bold tracking-[0.15em] text-violet-600 dark:text-violet-400">
                {field.label.toUpperCase()}
              </p>
              <h3 className="mb-2 mt-2 text-base font-semibold text-zinc-950 dark:text-white">
                {field.prompt}
              </h3>
              <p className="m-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {field.warning}
              </p>
            </article>
          ))}
        </div>
        <p>
          Comptez les répétitions, mais ne transformez pas dix conversations en
          étude statistique du marché. Elles servent à entendre le langage de
          vos acheteurs actuels et à formuler des hypothèses de pages. Une
          question rare peut être décisive ; une question fréquente peut
          concerner des entreprises qui n’achèteront jamais.
        </p>

        <h2 id="questions">Rangez les questions selon la décision humaine</h2>
        <p>
          Oubliez un instant « haut », « milieu » et « bas de funnel ». Demandez
          ce que la personne essaie de décider : reconnaître son problème,
          comparer des réponses, vérifier la faisabilité ou préparer une
          discussion. Cette formulation évite un catalogue de fonctions.
        </p>
        <GuideTable
          caption="Quatre moments d’une décision B2B"
          headers={["Moment", "Question du prospect", "Réponse utile"]}
          rows={[
            [
              "Reconnaître",
              "« Avons-nous vraiment ce problème ? »",
              "Situation, mécanisme, coût prudent de l’inaction et option de ne pas agir.",
            ],
            [
              "Comparer",
              "« Pourquoi changer notre processus ou notre outil ? »",
              "Options sur les mêmes critères, objections et cas où elles conviennent ou non.",
            ],
            [
              "Vérifier",
              "« Le produit fonctionne-t-il avec nos données et contraintes ? »",
              "Preuve réelle, intégration, sécurité, migration et limites.",
            ],
            [
              "Préparer",
              "« Que faut-il apporter à une démonstration ? »",
              "Informations, rôles et questions à réunir avant l’échange.",
            ],
          ]}
        />

        <h2 id="pilote">Choisissez trois pages de rôles différents</h2>
        <p>
          Le pilote n’est pas « logiciel de suivi terrain », « logiciel de suivi
          terrain B2B » et « meilleur logiciel de suivi terrain ». Ces variantes
          appellent presque la même réponse. Choisissez plutôt trois moments de
          la décision, chacun avec son public, sa preuve et sa prochaine étape.
        </p>
        <div className="not-prose my-8 grid gap-4 lg:grid-cols-3">
          {pageRoles.map((role) => (
            <article
              key={role.title}
              className={`rounded-2xl border p-5 ${role.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {role.title}
              </h3>
              <p className="mb-0 mt-3 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                {role.question}
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Contenu :</strong> {role.content}
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Suite :</strong> {role.next}
              </p>
            </article>
          ))}
        </div>

        <InfoBox
          variant="blue"
          title="Une page par question autonome, pas par formulation"
        >
          Google recommande une organisation logique, des titres fidèles et du
          contenu utile d’abord aux personnes. Il déconseille de créer de
          nombreuses pages pour des variations de requêtes. Cela ne donne aucune
          garantie de classement : cela évite surtout de fabriquer un site
          répétitif et impossible à maintenir.
        </InfoBox>

        <h2 id="ecriture">Donnez la réponse dans les 150 premiers mots</h2>
        <p>
          Les 150 premiers mots doivent permettre au dirigeant de comprendre la
          réponse et la décision. Ne commencez pas par une définition du SEO ou
          l’histoire du logiciel. Décrivez la situation, donnez la
          recommandation, puis annoncez la méthode et ses limites.
        </p>
        <ol>
          <li>
            <strong>Qui est concerné ?</strong> Nommez le rôle et la situation.
          </li>
          <li>
            <strong>Quelle est la réponse ?</strong> Donnez-la sans retenir le
            verdict jusqu’à la conclusion.
          </li>
          <li>
            <strong>Comment vérifier ?</strong> Proposez un calcul, une grille,
            une démonstration ou une procédure reproductible.
          </li>
          <li>
            <strong>Quelle objection mérite d’être entendue ?</strong> Traitez
            loyalement l’outil standard, le processus actuel ou l’inaction.
          </li>
          <li>
            <strong>Quelle preuve existe ?</strong> Montrez-la ou annoncez
            explicitement l’exemple fictif.
          </li>
          <li>
            <strong>Où s’arrête la page ?</strong> Signalez l’incertitude, le
            cas auquel elle ne répond pas et la vérification spécialisée
            nécessaire.
          </li>
        </ol>

        <h2 id="maillage">
          Guidez le lecteur vers l’étape suivante, sans le pousser vers une
          démonstration
        </h2>
        <p>
          Chaque page importante devrait recevoir au moins un lien interne
          descriptif. Mais le parcours reste humain : une personne qui découvre
          encore le problème n’a pas forcément besoin d’un formulaire. Liez-la
          d’abord vers la comparaison utile. Depuis la comparaison, pointez vers
          une preuve. Depuis la preuve, proposez la démonstration seulement si
          le contexte correspond.
        </p>
        <p>
          Le lien doit annoncer ce que la personne trouvera. « Comprendre les
          limites du mode hors connexion » est plus utile que « en savoir plus
          ». Ne répétez pas le même appel commercial dans toutes les sections.
        </p>

        <h2 id="mesure">Mesurez cinq étapes séparées</h2>
        <p>
          Search Console aide à lire impressions, clics, taux de clic et
          position moyenne. Ces données ne montrent pas à elles seules le
          chiffre d’affaires et certaines sont agrégées ou incomplètes. Reliez
          la page à votre suivi commercial sans forcer une attribution parfaite.
        </p>
        <GuideTable
          caption="Chaîne de mesure du pilote"
          headers={["Étape", "Question", "Limite à écrire"]}
          rows={[
            [
              "Impression",
              "La page apparaît-elle pour une question cohérente ?",
              "Une position moyenne n’est pas le rang fixe de chaque personne.",
            ],
            [
              "Clic ou visite",
              "Le titre et la réponse attirent-ils le bon besoin ?",
              "Une visite ne prouve ni intérêt commercial ni lecture complète.",
            ],
            [
              "Demande",
              "La personne demande-t-elle une démo ou une information ?",
              "Dédupliquer et distinguer les demandes hors cible.",
            ],
            [
              "Qualification",
              "L’entreprise, le problème et le calendrier correspondent-ils ?",
              "Les critères doivent être écrits et partagés.",
            ],
            [
              "Vente",
              "Une vente est-elle conclue selon votre règle ?",
              "Le SEO peut avoir aidé sans être l’unique cause.",
            ],
          ]}
        />
        <p>
          Google Analytics recommande des événements distincts comme{" "}
          <code>generate_lead</code>, <code>qualify_lead</code> et{" "}
          <code>close_convert_lead</code>. Leur existence dans l’outil ne prouve
          pas que l’instrumentation, le consentement ou l’attribution sont
          corrects. Gardez les définitions métier et les statuts commerciaux
          comme référence.
        </p>

        <h2 id="exemple">
          Exemple illustratif fictif : Novaria remplace son catalogue
        </h2>
        <p>
          Novaria est une entreprise fictive. Elle vend un SaaS de suivi des
          interventions. Son blog compte trente pages sur le tableau de bord,
          les filtres et les exports. Les dix derniers échanges commerciaux
          autorisés font pourtant ressortir trois questions : comment remplacer
          les bons papier, comment travailler hors connexion, et comment relier
          les données à l’ERP.
        </p>
        <GuideTable
          caption="Pilote fictif de Novaria"
          headers={["Rôle", "Page choisie", "Preuve ou limite"]}
          rows={[
            [
              "Comprendre",
              "Coût et erreurs des bons papier",
              "Méthode de relevé ; aucun gain inventé.",
            ],
            [
              "Comparer",
              "Application standard ou parcours adapté au terrain",
              "Mêmes critères ; le standard peut gagner.",
            ],
            [
              "Se rassurer",
              "Hors-ligne, synchronisation et reprise d’erreur",
              "Démonstration vérifiable ; cas non couverts visibles.",
            ],
          ]}
        />
        <p>
          Novaria définit les cinq événements avant de publier et fixe une revue
          à quatre-vingt-dix jours pour cet exemple. Aucun volume de trafic ni
          résultat commercial n’est supposé. Si les pages sont invisibles,
          l’équipe vérifie l’accès, l’indexation et les titres. Si elles
          attirent les mauvaises entreprises, elle revoit le problème et le
          langage. Si les demandes sont bonnes mais la démonstration échoue,
          elle ne commande pas davantage de contenu : elle répare le parcours.
        </p>

        <h2 id="decision">Continuez, réécrivez, réparez ou arrêtez</h2>
        <GuideTable
          caption="Décision à la date de revue"
          headers={["Observation", "Décision possible", "À ne pas conclure"]}
          rows={[
            [
              "Le SaaS ou l’acheteur reste flou",
              "Arrêter le programme et clarifier l’offre.",
              "Que davantage de trafic résoudra la validation produit.",
            ],
            [
              "Les pages ne sont pas accessibles ou mesurées",
              "Réparer le parcours technique avant de juger.",
              "Que le sujet n’intéresse personne.",
            ],
            [
              "Les requêtes correspondent, la réponse ne convainc pas",
              "Réécrire avec meilleure preuve et objection loyale.",
              "Qu’une position suffit à valider le contenu.",
            ],
            [
              "Des demandes qualifiées apparaissent et le suivi tient",
              "Poursuivre par étapes autour des questions suivantes.",
              "Que le même rendement continuera à plus grande échelle.",
            ],
            [
              "Aucune preuve publiable ni personne pour maintenir",
              "Ne pas investir dans de nouvelles pages.",
              "Que l’automatisation remplacera le travail éditorial.",
            ],
          ]}
        />

        <h2 id="fit">Le bon moment pour demander un regard extérieur</h2>
        <p>
          Demandez de l’aide quand vous savez déjà qui achète, quel problème le
          SaaS résout et quelles preuves vous pouvez publier, mais que vous
          hésitez sur les premières questions à traiter ou la façon de suivre
          les demandes. Si l’offre reste floue ou si personne ne maintiendra les
          pages, le prochain travail n’est pas SEO.
        </p>

        <GuideInlineCTA
          title="Choisir les trois premières pages qui aideront vos prospects"
          description="Partagez les questions et objections qui reviennent dans vos échanges, sans données personnelles. Nous les transformerons en trois pages différentes — comprendre, comparer, se rassurer — avec une mesure jusqu’aux demandes qualifiées. Si l’offre ou le parcours bloque, nous vous le dirons avant de produire."
          tags={[
            "Trois pages distinctes",
            "Mesure jusqu’à la qualification",
            "Arrêt possible",
          ]}
          ctaLabel="Choisir mes trois pages"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources consultées le 23 juillet 2026. Elles décrivent le
          fonctionnement et les recommandations actuelles de Google ; elles ne
          garantissent ni exploration, ni indexation, ni position, ni citation
          dans une réponse générée par IA. Les rapports et interfaces évoluent :
          revérifiez la documentation avant une décision importante.
        </p>
        <ul>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
              target="_blank"
              rel="noopener noreferrer"
            >
              créer du contenu utile et fiable, d’abord pour les personnes
            </a>
            . Le document ne fournit ni score ni classement garanti.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnalités d’IA et recommandations pour les sites
            </a>
            , notamment l’absence de recette spéciale et l’inutilité de pages
            créées pour chaque variation de requête.
          </li>
          <li>
            Google Search Essentials —{" "}
            <a
              href="https://developers.google.com/search/docs/essentials/spam-policies"
              target="_blank"
              rel="noopener noreferrer"
            >
              règles concernant l’abus de contenu à grande échelle
            </a>
            . La méthode de production n’excuse pas un contenu créé
            principalement pour manipuler le classement.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content"
              target="_blank"
              rel="noopener noreferrer"
            >
              recommandations sur l’usage de l’IA générative
            </a>
            . L’IA peut aider ; elle ne remplace pas la valeur ajoutée et la
            responsabilité.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
              target="_blank"
              rel="noopener noreferrer"
            >
              liens explorables et ancres descriptives
            </a>
            . Le maillage facilite l’accès ; il ne garantit pas une position.
          </li>
          <li>
            Google Search Console —{" "}
            <a
              href="https://support.google.com/webmasters/answer/7042828"
              target="_blank"
              rel="noopener noreferrer"
            >
              métriques du rapport sur les performances
            </a>
            . Clics, impressions et position moyenne doivent être interprétés
            avec prudence et ne constituent pas un chiffre d’affaires.
          </li>
          <li>
            Google Analytics —{" "}
            <a
              href="https://developers.google.com/analytics/devguides/collection/ga4/reference/events"
              target="_blank"
              rel="noopener noreferrer"
            >
              événements recommandés pour la génération, la qualification et la
              conversion d’un lead
            </a>
            . Leur présence ne valide ni le consentement, ni l’attribution, ni
            la qualité des statuts.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
