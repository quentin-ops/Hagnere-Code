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

const guide = getGuide("combien-de-temps-resultats-seo");

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
        alt: "Suivre un travail SEO de sa mise en ligne jusqu’aux ventes",
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
      name: "Délai des résultats SEO",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Le SEO prend-il toujours trois à six mois ?",
    answer:
      "Non. Cette fourchette ne décrit ni votre site, ni les recherches visées, ni ce que vous appelez un résultat. Google indique que l’effet d’une modification peut apparaître en quelques heures ou prendre plusieurs mois, et parfois rester sans effet notable.",
  },
  {
    question: "Une page indexée signifie-t-elle que le SEO fonctionne ?",
    answer:
      "Non. L’indexation signifie que Google a retenu une version de la page. Vérifiez encore si elle apparaît sur des recherches utiles, reçoit des clics, puis contribue à des demandes que votre entreprise accepte.",
  },
  {
    question: "À quelle fréquence faut-il regarder Search Console ?",
    answer:
      "Une lecture hebdomadaire peut vérifier les obstacles et le travail publié. Pour juger une tendance, comparez ensuite des semaines ou des mois cohérents avec les mêmes filtres, lorsque le volume est suffisant.",
  },
  {
    question: "Faut-il arrêter si rien ne bouge après 90 jours ?",
    answer:
      "Pas automatiquement. Les 90 jours proposés ici sont une fenêtre choisie pour tenir un journal, pas un délai imposé à Google. Identifiez l’étape qui ne progresse pas, le travail réellement livré et la décision économique avant de poursuivre ou d’arrêter.",
  },
  {
    question: "Une agence SEO peut-elle s’engager sur un résultat ?",
    answer:
      "Elle peut s’engager sur des travaux, des pages, des contrôles, des accès et des dates de compte rendu définis au contrat. En revanche, Google rappelle que personne ne peut garantir une première position dans ses résultats.",
  },
];

const resultStages = [
  {
    number: "01",
    title: "Travail publié",
    meaning:
      "La correction ou la page annoncée est réellement visible à l’adresse prévue.",
    limit:
      "Un audit, un texte envoyé ou une tâche marquée terminée ne change pas encore le site.",
  },
  {
    number: "02",
    title: "Exploration",
    meaning:
      "Google consulte ou relit l’adresse pour découvrir sa version actuelle.",
    limit:
      "Cette visite n’impose ni indexation, ni affichage dans les résultats.",
  },
  {
    number: "03",
    title: "Indexation",
    meaning: "Google retient une version de la page dans son index.",
    limit:
      "La page peut rester absente des recherches qui intéressent vos clients.",
  },
  {
    number: "04",
    title: "Impressions",
    meaning:
      "La page commence à apparaître dans les résultats mesurés par Search Console.",
    limit: "Une apparition n’est ni une visite ni une lecture de la page.",
  },
  {
    number: "05",
    title: "Clics",
    meaning: "Des personnes cliquent sur le résultat et arrivent sur le site.",
    limit:
      "Un clic ne dit pas encore si la personne correspond au client recherché.",
  },
  {
    number: "06",
    title: "Contacts qualifiés",
    meaning:
      "Les demandes correspondent à l’offre, à la zone et aux clients que vous acceptez.",
    limit:
      "Cette qualité se définit dans votre entreprise, pas dans Search Console.",
  },
  {
    number: "07",
    title: "Ventes",
    meaning:
      "Une demande a terminé votre cycle commercial par une vente conclue et enregistrée.",
    limit:
      "Un refus connu et un dossier encore ouvert restent à suivre, mais ne sont pas des ventes.",
  },
];

const journalSections = [
  {
    id: "decision",
    title: "A. La décision économique",
    lines: [
      "Offre ou service concerné :",
      "Type de client recherché :",
      "Action attendue après la visite : appel / formulaire / achat / autre :",
      "Définition d’un contact qualifié :",
      "Durée habituelle entre le contact et la vente ou le refus :",
      "Date de début et date de fin choisies pour cette fenêtre :",
      "Budget externe et temps interne suivis séparément :",
      "Décision précise à prendre à la fin de cette fenêtre : poursuivre / corriger / réduire / arrêter quelle action ?",
    ],
  },
  {
    id: "depart",
    title: "B. L’état de départ",
    lines: [
      "Date et heure de l’export :",
      "Propriété Search Console :",
      "Type de recherche, pays, appareil et autres filtres :",
      "Période comparée et saison ou événement connu :",
      "URL 1 à 5 et recherche ou besoin visé par chacune :",
      "Indexation : oui / non / inconnu :",
      "Impressions, clics, taux de clics et position moyenne :",
      "Contacts attribuables, contacts qualifiés, ventes et dossiers ouverts :",
      "Ce qui n’est pas mesuré ou reste inconnu :",
      "Sans état initial : plus ancienne période comparable retrouvée ; attribution incertaine : oui.",
    ],
  },
  {
    id: "changements",
    title: "C. Les changements réellement publiés",
    lines: [
      "Date de mise en ligne :",
      "URL :",
      "Ce qui a changé :",
      "Personne qui a publié ou vérifié :",
      "Élément visible qui confirme la mise en ligne :",
      "Besoin du lecteur auquel ce changement répond :",
      "Ce qui n’a pas changé :",
    ],
  },
  {
    id: "evenements",
    title: "D. Les événements observés",
    lines: [
      "Date :",
      "URL :",
      "Événement : publiée / explorée / indexée / impression / clic / contact / vente :",
      "Source de l’information :",
      "Ce que nous savons :",
      "Ce que nous ignorons :",
    ],
  },
  {
    id: "search-console",
    title: "E. La lecture Search Console",
    lines: [
      "Période et mêmes filtres :",
      "Recherches qui gagnent ou perdent des impressions :",
      "Pages qui gagnent ou perdent des clics :",
      "Taux de clics et position moyenne avec leur périmètre :",
      "Données préliminaires, requêtes anonymisées ou lignes manquantes :",
      "Pages non modifiées utilisées comme comparaison :",
    ],
  },
  {
    id: "commerce",
    title: "F. La lecture commerciale",
    lines: [
      "Clics naturels attribuables :",
      "Formulaires, appels ou achats attribuables :",
      "Contacts correspondant à notre définition :",
      "Ventes, refus et dossiers encore ouverts :",
      "Motifs de refus connus :",
      "Limites d’attribution :",
    ],
  },
  {
    id: "suite",
    title: "G. La décision suivante",
    lines: [
      "Poursuivre / corriger / réduire / arrêter quelle action précise :",
      "Fait qui justifie cette décision :",
      "Autre explication encore possible :",
      "Travail à réaliser avant le prochain contrôle :",
      "Personne responsable :",
      "Prochaine date de lecture et raison de cette date :",
      "Fait qui nous ferait changer d’avis :",
    ],
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
          { label: "Délai des résultats SEO" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous payez des corrections ou des articles, mais on vous demande encore d’attendre ? Suivez ce qui a vraiment été publié, ce que Google montre et les demandes reçues pour décider sans acheter une promesse de classement."
        heroAction={{
          href: "#resultat",
          label: "Définir le résultat attendu",
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
            title: "7 repères séparés",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "5 pages à suivre",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "1 journal à copier",
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
            href: "/guides/pourquoi-site-pas-visible-google",
            label: "Diagnostiquer une page absente de Google",
          },
          {
            href: "/guides/positions-google-baissent",
            label: "Enquêter sur une baisse déjà acquise",
          },
          {
            href: "/guides/audit-seo-que-contient-il",
            label: "Savoir ce qu’un audit SEO doit livrer",
          },
          {
            href: "/guides/choisir-agence-seo",
            label: "Comparer des agences SEO",
          },
          {
            href: "/services/referencement-google",
            label: "Découvrir l’accompagnement SEO",
          },
        ]}
        faqTitle="Délais SEO : les réponses directes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous financez des corrections ou des articles pour être mieux trouvé
          sur Google, mais vous ne savez pas quand attendre des appels ou des
          ventes. Votre prestataire parle de patience ; vous voulez vérifier si
          le travail avance vraiment.{" "}
          <strong>
            Il n’existe pas de délai SEO valable pour toutes les entreprises.
          </strong>{" "}
          Google indique qu’un changement peut produire un effet en quelques
          heures ou prendre plusieurs mois, et parfois ne produire aucun effet
          notable. Une page explorée ou indexée n’est donc pas encore un
          résultat commercial. Regardez chaque étape séparément : travail
          publié, exploration et indexation, apparitions sur des recherches
          utiles, clics, contacts qualifiés, puis ventes après votre cycle
          commercial. Ce guide vous aide à enregistrer votre point de départ,
          choisir les faits à attendre et décider quand poursuivre, corriger,
          réduire ou arrêter une action SEO, sans acheter une promesse de
          classement.
        </p>

        <InfoBox variant="blue" title="La réponse courte">
          Google explique dans son{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de démarrage SEO
          </a>{" "}
          qu’une modification peut agir en quelques heures ou prendre plusieurs
          mois, parfois sans effet notable. Cette amplitude n’est pas un
          calendrier commercial. Demandez plutôt : qu’est-ce qui a été mis en
          ligne, quelle étape peut maintenant être observée et quel fait
          changera notre décision ?
        </InfoBox>

        <GuideToc
          items={[
            { id: "resultat", label: "1. Définir ce qu’est un résultat SEO" },
            { id: "etat-initial", label: "2. Enregistrer l’état de départ" },
            { id: "travail-publie", label: "3. Vérifier le travail publié" },
            { id: "evenement", label: "4. Attendre le prochain événement" },
            { id: "situations", label: "5. Adapter le suivi à la situation" },
            { id: "exemple", label: "6. Refaire un exemple chiffré" },
            { id: "journal", label: "7. Copier le journal de décision" },
            { id: "decider", label: "8. Choisir entre quatre décisions" },
            { id: "aide", label: "9. Savoir quand demander de l’aide" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="resultat">1. Définissez ce que vous appelez un résultat SEO</h2>

        <p>
          « Le référencement progresse » peut vouloir dire sept choses
          différentes. Séparez-les avant de discuter d’un délai. Elles peuvent
          se chevaucher, reculer ou rester impossibles à mesurer ; elles ne
          forment pas une promesse selon laquelle chaque étape produira la
          suivante.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {resultStages.map((stage) => (
            <section
              key={stage.number}
              aria-labelledby={`stage-${stage.number}`}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5"
            >
              <p className="mb-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400">
                {stage.number}
              </p>
              <h3
                id={`stage-${stage.number}`}
                className="mb-2 text-base font-semibold text-zinc-950 dark:text-white"
              >
                {stage.title}
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {stage.meaning}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">
                  Cela ne prouve pas encore :
                </strong>{" "}
                {stage.limit}
              </p>
            </section>
          ))}
        </div>

        <p>
          Search Console mesure notamment les impressions, les clics, le taux de
          clics et la position moyenne. Les contacts qualifiés et les ventes
          vivent dans vos formulaires, vos appels, votre outil de suivi
          commercial ou votre facturation. Google explique pourquoi{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Console et l’outil d’analyse du site ne comptent pas la même
            partie du parcours
          </a>
          . Ne forcez pas leurs totaux à coïncider : rapprochez-les en gardant
          leurs limites.
        </p>

        <h2 id="etat-initial">
          2. Enregistrez l’état de départ avant de modifier les pages
        </h2>

        <p>
          Choisissez d’abord cinq pages qui correspondent à des offres ou à des
          questions commerciales importantes. Pour chacune, notez la date, la
          propriété Search Console, la période, le type de recherche, le pays,
          l’appareil et tous les filtres actifs. Ajoutez la saison connue, la
          recherche visée, les impressions, les clics, le taux de clics, la
          position moyenne, les contacts et les ventes disponibles.
        </p>

        <GuideTable
          caption="Les éléments à conserver avant le changement"
          headers={["À noter", "Pourquoi", "Réponse acceptée"]}
          rows={[
            [
              "Page et besoin visé",
              "Pour savoir quelle offre et quelle recherche vous comparez.",
              "URL exacte et phrase employée par un prospect.",
            ],
            [
              "Période et filtres",
              "Pour pouvoir retrouver la même vue plus tard.",
              "Type de recherche, pays, appareil et autres filtres ou “aucun”.",
            ],
            [
              "État Google",
              "Pour séparer indexation, apparition et clic.",
              "Oui, non ou inconnu pour l’indexation, puis chiffres exportés.",
            ],
            [
              "Résultat commercial",
              "Pour ne pas confondre un clic avec une demande utile.",
              "Contacts, ventes, dossiers ouverts ou mesure indisponible.",
            ],
          ]}
        />

        <p>
          La{" "}
          <a
            href="https://support.google.com/webmasters/answer/17011165?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation de Search Console sur les comparaisons
          </a>{" "}
          rappelle que la période, la granularité et les filtres modifient la
          lecture. Les données très récentes peuvent aussi être préliminaires,
          et la position moyenne dépend du regroupement choisi : ce n’est pas
          une place fixe occupée par votre entreprise pour toutes les
          recherches. La{" "}
          <a
            href="https://support.google.com/webmasters/answer/17011364?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les données du rapport Performances
          </a>{" "}
          détaille ces limites. Recopiez donc la vue, pas seulement quatre
          nombres isolés.
        </p>

        <p>
          Les recherches affichées dans le tableau ne forment pas toujours une
          liste complète : certaines recherches anonymisées sont omises et le
          nombre de lignes peut être limité. Google l’explique dans la{" "}
          <a
            href="https://support.google.com/webmasters/answer/17011259?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les dimensions du rapport
          </a>
          . Utilisez les lignes pour comprendre les sujets qui apparaissent,
          mais ne présentez pas leur somme comme la totalité des recherches. Un
          filtre de requête, de page ou un périmètre différent peut aussi
          expliquer un écart entre les totaux comparés.
        </p>

        <InfoBox
          variant="amber"
          title="Vous n’avez pas conservé d’état initial ?"
        >
          Ne fabriquez pas un « avant ». Retrouvez la plus ancienne période
          comparable disponible, notez ce qui a déjà changé entre-temps et
          marquez l’attribution comme <strong>incertaine</strong>. Cette base
          imparfaite permet de suivre la suite ; elle ne permet pas d’affirmer
          que le travail a causé l’écart observé.
        </InfoBox>

        <h2 id="travail-publie">
          3. Vérifiez ce qui a vraiment été mis en ligne
        </h2>

        <p>
          Une recommandation dans un audit, un article dans un document partagé
          ou une tâche marquée « terminée » n’est pas encore une modification du
          site. Pour chaque action facturée, demandez une date, une URL, ce qui
          a changé, le nom de la personne qui l’a vérifié et un élément que vous
          pouvez voir vous-même.
        </p>

        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
            Une ligne à exiger pour chaque changement
          </p>
          <div className="space-y-3">
            {[
              "Date de mise en ligne et URL exacte :",
              "Phrase simple décrivant ce qui a changé :",
              "Personne qui a publié ou vérifié :",
              "Élément visible qui confirme la mise en ligne :",
              "Question du futur client à laquelle ce changement répond :",
              "Éléments laissés inchangés pour faciliter la comparaison :",
            ].map((line) => (
              <p
                key={line}
                className="mb-0 rounded-lg border border-zinc-200 bg-white p-3 text-sm font-medium leading-relaxed text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <p>
          Après une mise en ligne, Google indique qu’une nouvelle exploration
          peut prendre plusieurs jours, voire plusieurs semaines. La demander
          plusieurs fois n’accélère pas le traitement et ne garantit pas
          l’inclusion dans les résultats. Ces limites figurent dans la{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur la nouvelle exploration
          </a>
          . Le chronomètre ne commence donc pas au jour de la facture, mais le
          suivi du projet commence bien au jour où le travail devait être
          visible.
        </p>

        <h2 id="evenement">
          4. Attendez le prochain événement observable, pas un mois magique
        </h2>

        <p>
          Chaque attente doit avoir une raison, une personne responsable, une
          date de lecture et un fait qui ferait changer d’avis. « Attendre six
          mois » ne suffit pas. « Vérifier vendredi si la correction est en
          ligne, puis relire l’indexation après que Google a revisité la page »
          donne deux actions contrôlables.
        </p>

        <GuideTable
          caption="La prochaine question dépend de ce qui est déjà observé"
          headers={[
            "Ce que vous voyez",
            "Question suivante",
            "Décision possible",
          ]}
          rows={[
            [
              "Le travail n’est pas publié",
              "Qui doit le mettre en ligne et comment le vérifier ?",
              "Corriger le projet ou le prestataire, pas attendre Google.",
            ],
            [
              "La page n’a pas encore été relue",
              "Est-elle accessible et reliée depuis le site ?",
              "Contrôler l’accès et observer sans promettre une date.",
            ],
            [
              "La page est indexée mais apparaît peu",
              "La demande existe-t-elle et la page répond-elle à la recherche ?",
              "Corriger la réponse ou attendre davantage de données avec une raison.",
            ],
            [
              "Les impressions portent sur les bonnes recherches",
              "Les personnes choisissent-elles le résultat ?",
              "Examiner clics, titre, extrait et présentation des résultats.",
            ],
            [
              "Les clics arrivent sans demande mesurée",
              "La page, le formulaire et les appels permettent-ils l’action attendue ?",
              "Corriger le site ou la mesure avant de produire plus de pages.",
            ],
            [
              "Des contacts qualifiés arrivent",
              "Les dossiers ont-ils terminé le cycle commercial ?",
              "Suivre ventes, refus et dossiers ouverts avant de conclure.",
            ],
            [
              "Le volume reste trop faible",
              "Cette recherche peut-elle fournir assez d’occasions pour votre économie ?",
              "Réduire, changer d’acquisition ou prolonger pour une raison écrite.",
            ],
          ]}
        />

        <p>
          Si une page reste introuvable, utilisez le diagnostic pour{" "}
          <Link href="/guides/pourquoi-site-pas-visible-google">
            comprendre pourquoi elle n’apparaît pas sur Google
          </Link>
          . Si une performance auparavant stable chute, passez plutôt au guide
          consacré aux{" "}
          <Link href="/guides/positions-google-baissent">
            positions Google qui baissent
          </Link>
          . Le présent guide organise un travail qui commence ou change ; il ne
          remplace pas l’enquête sur un incident.
        </p>

        <h2 id="situations">
          5. Le délai change selon la situation de votre site
        </h2>

        <p>
          Deux entreprises qui publient le même jour ne partent pas du même
          endroit. L’une améliore une page déjà visible ; l’autre lance un site
          sans historique. Le bon calendrier est celui du prochain fait
          observable dans chaque situation, puis celui de votre propre cycle de
          vente.
        </p>

        <GuideTable
          caption="Ce qu’il faut observer selon la situation de départ"
          headers={["Situation", "À observer", "Ce qui change la décision"]}
          rows={[
            [
              "Nouvelle page sur un site déjà connu",
              "Mise en ligne, exploration, indexation, recherches et impressions.",
              "Demande faible, page difficile à découvrir ou réponse trop étroite.",
            ],
            [
              "Page déjà visible que vous améliorez",
              "Même recherche, mêmes filtres, impressions, clics et page d’arrivée.",
              "Saison, autres changements et composition différente des résultats.",
            ],
            [
              "Site neuf sans historique",
              "Propriété Search Console, découverte, indexation et premières apparitions.",
              "Absence d’avant comparable et besoin commercial encore peu testé.",
            ],
            [
              "Blocage technique corrigé",
              "Correction visible, nouvelle exploration et état d’indexation.",
              "Google n’a pas encore relu la page ou un autre obstacle subsiste.",
            ],
            [
              "Migration avec changement d’adresse",
              "Anciennes et nouvelles URL, redirections, indexation et trafic.",
              "Nombre d’URL, erreurs de correspondance et capacité du serveur.",
            ],
            [
              "Clics naturels mais peu de demandes",
              "Formulaires, appels, offre, qualité des contacts et délai de réponse.",
              "Mesure incomplète, page confuse ou cycle commercial long.",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Une migration suit son propre plan">
          Un changement massif d’adresses ne se juge pas comme cinq articles
          ajoutés à un site stable. Suivez les anciennes et les nouvelles URL,
          les redirections et les erreurs pendant toute la transition. Google
          décrit cette situation séparément dans sa{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les migrations de site
          </a>
          .
        </InfoBox>

        <h2 id="exemple">
          6. Exemple fictif : davantage de clics, mais toujours deux ventes
        </h2>

        <p>
          <strong>Exemple illustratif entièrement fictif.</strong> Cet exemple
          ne décrit ni un client réel ni un cas client Hagnéré Code. Tous les
          nombres qui suivent sont inventés pour apprendre à lire un suivi ; ils
          ne constituent ni une moyenne ni un objectif. Les deux périodes
          fictives durent 90 jours et utilisent la même propriété, le même type
          de recherche, le même pays, le même appareil et les mêmes cinq pages
          commerciales.
        </p>

        <GuideTable
          caption="Deux périodes fictives comparées avec les mêmes filtres"
          headers={["Mesure", "Avant → après", "Calcul"]}
          rows={[
            ["Impressions", "5 000 → 8 000", "(8 000 − 5 000) ÷ 5 000 = +60 %"],
            [
              "Clics",
              "150 → 280",
              "(280 − 150) ÷ 150 = +86,7 %, soit 130 clics de plus",
            ],
            [
              "Taux de clics",
              "3,0 % → 3,5 %",
              "150 ÷ 5 000 = 3,0 % ; 280 ÷ 8 000 = 3,5 % ; +0,5 point",
            ],
            [
              "Contacts qualifiés attribuables",
              "8 → 12",
              "(12 − 8) ÷ 8 = +50 %, soit seulement 4 contacts de plus",
            ],
            [
              "Ventes attribuables",
              "2 → 2",
              "2 − 2 = 0 : aucune hausse observée",
            ],
          ]}
        />

        <p>
          Les contrôles inverses donnent <strong>5 000 × 3,0 % = 150</strong>
          et <strong>8 000 × 3,5 % = 280</strong>. Le rapport indicatif entre
          contacts et clics passe de <strong>8 ÷ 150 = 5,3 %</strong> à
          <strong> 12 ÷ 280 = 4,3 %</strong>. Avec les valeurs non arrondies,
          l’écart est de <strong>−1,0476 point</strong>, soit environ
          <strong> −1,05 point après arrondi</strong>. Ce rapport rapproche ici
          Search Console et des données commerciales fictives ; ce n’est pas une
          mesure fournie par Search Console.
        </p>

        <p>
          Supposons que cinq autres pages, elles aussi fictives mais non
          modifiées, passent de 6 000 à 8 400 impressions :
          <strong> (8 400 − 6 000) ÷ 6 000 = +40 %</strong>. L’écart de 20
          points avec les pages modifiées ne prouve pas que le changement a créé
          ces 20 points. Les groupes peuvent viser d’autres recherches, et une
          saison ou un changement commun au site peut expliquer une part
          inconnue des deux hausses.
        </p>

        <InfoBox variant="blue" title="La décision prudente dans cet exemple">
          Le dirigeant conserve les pages qui gagnent des recherches utiles,
          mais ne double pas le budget. Il vérifie pourquoi la part des clics
          devenant un contact diminue et combien des douze dossiers restent
          ouverts. Si le cycle commercial n’est pas terminé, il attend leur
          issue avant de juger les ventes. Il ne finance pas dix nouvelles pages
          tant que cette question reste ouverte.
        </InfoBox>

        <h2 id="journal">7. Copiez votre journal de décision SEO</h2>

        <p>
          Les 90 jours ci-dessous sont une{" "}
          <strong>fenêtre d’observation que vous choisissez</strong>, pas un
          délai promis par Google. Une migration, un cycle de vente de six mois
          ou un très faible volume peut exiger une autre durée. Gardez les mêmes
          sept blocs et adaptez seulement les dates.
        </p>

        <p>
          Vous pouvez sélectionner et copier chaque carte dans un document
          partagé, puis remplacer les deux-points par vos réponses. Aucun compte
          ni adresse e-mail n’est nécessaire. Gardez « inconnu » lorsqu’une
          information manque : une inconnue visible vaut mieux qu’un zéro
          inventé.
        </p>

        <div
          className="not-prose my-6 space-y-4"
          aria-label="Journal de décision SEO copiable"
        >
          <div className="rounded-2xl bg-zinc-950 p-5 text-white sm:p-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
              Modèle libre à copier
            </p>
            <p className="mb-0 text-lg font-semibold">
              Journal de décision SEO — fenêtre choisie de 90 jours
            </p>
          </div>
          {journalSections.map((section) => (
            <section
              key={section.id}
              aria-labelledby={`journal-${section.id}`}
              className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <h3
                id={`journal-${section.id}`}
                className="mb-4 text-base font-semibold text-zinc-950 dark:text-white"
              >
                {section.title}
              </h3>
              <pre className="mb-0 whitespace-pre-wrap break-words font-sans text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {section.lines.join("\n")}
              </pre>
            </section>
          ))}
        </div>

        <p>
          Le journal est exploitable si une personne absente du projet peut
          retrouver les cinq pages, reproduire la vue Search Console, distinguer
          le travail publié de l’effet observé, comprendre les limites
          commerciales et expliquer pourquoi la prochaine date a été choisie.
          Une ligne « attendre encore » ne passe pas ce test.
        </p>

        <h2 id="decider">
          8. Choisissez entre poursuivre, corriger, réduire ou arrêter
        </h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Poursuivre",
              text: "Le travail est publié, les recherches observées correspondent à l’offre et les clics ou demandes progressent dans une vue comparable. Écrivez tout de même le prochain fait attendu avant d’augmenter le budget.",
            },
            {
              title: "Corriger",
              text: "Une étape précise bloque : travail non publié, page inaccessible, recherches hors sujet, résultat peu choisi, formulaire défaillant, contacts hors cible ou suivi commercial trop tardif. Corrigez cette étape avant de produire davantage.",
            },
            {
              title: "Réduire ou reporter",
              text: "La mesure n’est pas prête, l’équipe ne peut pas traiter les demandes, la saison brouille la comparaison ou la demande accessible paraît trop faible. Limitez le travail aux pages importantes et revenez au sujet à une date justifiée.",
            },
            {
              title: "Arrêter une action précise",
              text: "Une action répétée ne produit ni travail vérifiable ni apprentissage, vise des recherches sans rapport avec vos clients ou absorbe un budget que vos données ne justifient pas. Conservez les accès, contenus et données déjà payés.",
            },
          ].map((decision) => (
            <section
              key={decision.title}
              aria-labelledby={`decision-${decision.title.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3
                id={`decision-${decision.title.toLowerCase().replaceAll(" ", "-")}`}
                className="mb-2 text-base font-semibold text-zinc-950 dark:text-white"
              >
                {decision.title}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {decision.text}
              </p>
            </section>
          ))}
        </div>

        <p>
          Commencez par l’action la plus petite qui permet d’apprendre quelque
          chose. Si les impressions arrivent sur de mauvaises recherches,
          corrigez la page concernée. Si les clics sont utiles mais les demandes
          mal suivies, réparez le formulaire ou le traitement commercial. Ne
          concluez pas que « tout le SEO ne marche pas » à partir d’une action
          mal exécutée.
        </p>

        <h2 id="aide">9. Quand un regard extérieur devient-il utile ?</h2>

        <p>
          Vous pouvez tenir ce journal avec votre équipe ou votre prestataire
          actuel. Un regard extérieur devient utile lorsque personne ne peut
          retrouver l’état initial, que plusieurs intervenants donnent des
          chiffres différents, que les positions remplacent toute lecture
          commerciale ou que le budget doit être reconduit sans décision écrite.
        </p>

        <GuideTable
          caption="Les situations où ce guide convient ou non"
          headers={["Votre situation", "Bonne suite", "Pourquoi"]}
          rows={[
            [
              "Travaux récents, pages accessibles, résultat encore incertain",
              "Remplir le journal et fixer la prochaine lecture.",
              "Le guide organise une action SEO qui commence ou change.",
            ],
            [
              "Performance stable puis chute nette",
              "Utiliser le guide sur les positions Google en baisse.",
              "Vous devez enquêter sur un incident, pas définir une attente initiale.",
            ],
            [
              "Une page précise reste absente",
              "Diagnostiquer d’abord sa visibilité et son indexation.",
              "Le premier obstacle doit être fermé avant un calendrier global.",
            ],
            [
              "Vous exigez des ventes certaines à très court terme",
              "Revoir l’offre, la prospection ou le choix du canal.",
              "Aucun travail SEO ne peut honnêtement garantir cette vente.",
            ],
            [
              "Le désaccord porte sur un contrat ou un litige",
              "Relire le contrat avec le professionnel compétent.",
              "Ce guide n’est pas un avis juridique ni une preuve d’inexécution.",
            ],
          ]}
        />

        <p>
          Un prestataire peut s’engager sur des pages, des travaux, des accès et
          des dates de compte rendu vérifiables. Il ne peut pas honnêtement
          garantir une première position : Google le rappelle dans son guide
          pour savoir si vous avez besoin d’un{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            professionnel du référencement
          </a>
          .
        </p>

        <InfoBox
          variant="amber"
          title="Notre intérêt commercial est à connaître"
        >
          Hagnéré Code vend des prestations de référencement naturel. Nous avons
          donc intérêt à ce qu’un projet pertinent continue. La méthode de ce
          guide conserve volontairement les autres issues : corriger avec votre
          prestataire actuel, réduire le travail, attendre avec une raison ou
          arrêter une action qui ne justifie plus son coût.
        </InfoBox>

        <GuideInlineCTA
          title="Vérifier si mon investissement SEO avance vraiment"
          description="Apportez cinq pages, l’état de départ disponible, les changements réellement publiés et vos chiffres commerciaux. Nous identifions les informations manquantes et la prochaine décision à ouvrir. Cette lecture peut conclure qu’il faut poursuivre avec votre prestataire actuel, corriger un point limité, réduire le travail ou ne pas investir davantage ; elle ne promet ni délai ni position."
          tags={[
            "Cinq pages prioritaires",
            "Décision écrite et vérifiable",
            "Aucune position promise",
          ]}
          ctaLabel="Vérifier mon investissement SEO"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Les sources officielles ci-dessous ont été consultées le 22 juillet
          2026. Elles décrivent le fonctionnement des outils et les limites
          générales données par Google. Elles ne prédisent ni la date
          d’indexation d’une page, ni sa position, ni le nombre de demandes ou
          de ventes de votre entreprise.
        </p>

        <ul>
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Guide de démarrage SEO
            </a>
            , pour l’amplitude possible des effets et l’absence de résultat
            automatique.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Demander une nouvelle exploration
            </a>
            , pour les délais propres à la relecture et l’absence de garantie
            d’inclusion.
          </li>
          <li>
            <a
              href="https://support.google.com/webmasters/answer/7576553?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Console — Rapport Performances
            </a>
            , pour les clics, impressions, taux de clics, position et filtres.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Search Console et Google Analytics
            </a>
            , pour séparer la recherche avant le clic des interactions sur le
            site.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Avez-vous besoin d’un référenceur ?
            </a>
            , pour l’absence de garantie de première position.
          </li>
        </ul>

        <p>
          Le choix de cinq pages, la fenêtre de 90 jours, les sept blocs du
          journal et les quatre décisions sont des recommandations pédagogiques
          Hagnéré Code. L’exemple est entièrement fictif. Aucun test avec un
          dirigeant réel n’est revendiqué à cette étape de rédaction.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
