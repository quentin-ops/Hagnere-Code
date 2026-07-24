import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("site-indexe-sans-trafic");

export const metadata = buildGuideMetadata(
  guide,
  "Site indexé mais sans trafic : comprendre les impressions, les clics et les décisions",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Site indexé sans trafic",
);

const faqItems = [
  {
    question:
      "Une page indexée peut-elle ne jamais apparaître pour une recherche précise ?",
    answer:
      "Oui. L’indexation signifie que Google connaît et conserve la page dans son index ; elle ne garantit pas sa diffusion pour votre recherche, sa position ni un clic. Vérifiez les requêtes et les impressions de l’URL dans Search Console au lieu de déduire sa visibilité de son seul statut d’indexation.",
  },
  {
    question: "La commande site: suffit-elle pour vérifier l’indexation ?",
    answer:
      "Non. Une recherche avec l’opérateur site: peut fournir un indice, mais Google précise qu’elle n’est pas une liste exhaustive de toutes les pages indexées. Pour une URL précise, utilisez l’outil d’inspection d’URL dans la propriété Search Console correspondante.",
  },
  {
    question:
      "Zéro impression dans Search Console signifie-t-il que la page est mauvaise ?",
    answer:
      "Non, pas à lui seul. Vérifiez d’abord la période, les filtres, l’URL canonique choisie par Google et l’existence d’une demande correspondant réellement à la page. Une page utile pour quelques clients peut aussi traiter un sujet très peu recherché.",
  },
  {
    question: "Faut-il réécrire toutes les pages qui n’apportent pas de clics ?",
    answer:
      "Non. Une page sans impression, une page affichée sur de mauvaises recherches et une page pertinente mais peu cliquée ne réclament pas la même action. Classez les URL avant de réécrire ; certaines seront conservées, d’autres améliorées, fusionnées ou retirées.",
  },
  {
    question: "Combien de temps faut-il attendre après l’indexation ?",
    answer:
      "Il n’existe pas de délai universel. Donnez à la page une période d’observation cohérente avec la demande et l’historique du site, puis fixez une date de revue. Attendre n’est utile que si vous savez quel signal doit évoluer : impressions pertinentes, requêtes, clics ou demandes.",
  },
  {
    question: "La position moyenne indique-t-elle la place vue par mes clients ?",
    answer:
      "Non. Il s’agit d’une moyenne calculée avec les filtres du rapport ; les résultats peuvent varier selon la recherche, le lieu, l’appareil, la langue, l’heure et d’autres paramètres. Lisez-la comme une tendance avec les impressions et les clics, pas comme un rang fixe vu par tous.",
  },
];

const signalCards = [
  {
    name: "Indexation",
    meaning: "Google a ajouté une version de l’URL à son index.",
    doesNotProve: "La page apparaîtra pour une recherche utile.",
    question: "La bonne URL et la bonne canonique sont-elles retenues ?",
  },
  {
    name: "Impression",
    meaning:
      "Un résultat de votre site a été affiché selon les règles de comptage propres à ce type de résultat.",
    doesNotProve: "La personne a lu ou choisi ce résultat.",
    question: "Sur quelles requêtes et quelles pages apparaît-il ?",
  },
  {
    name: "Position moyenne",
    meaning:
      "La moyenne de la meilleure position de votre site selon les filtres et le regroupement du rapport.",
    doesNotProve: "Chaque client voit exactement ce rang.",
    question: "La tendance porte-t-elle sur les recherches qui comptent ?",
  },
  {
    name: "Clic",
    meaning: "Google Search a enregistré un clic vers la page.",
    doesNotProve:
      "La page s’est chargée, une session a été mesurée ou la personne est devenue prospect.",
    question: "La page répond-elle à la promesse faite dans le résultat ?",
  },
  {
    name: "Demande",
    meaning: "Une action métier a été observée et suivie par l’entreprise.",
    doesNotProve: "Le SEO en est l’unique cause sans rapprochement sérieux.",
    question: "L’appel, le formulaire ou la vente est-il relié à la page ?",
  },
];

const pageRegister = [
  "URL exacte et rôle de la page :",
  "Date de l’inspection et canonique choisie par Google :",
  "Période Search Console et filtres appliqués :",
  "Impressions, clics et tendance de position :",
  "Requêtes pertinentes et requêtes hors sujet :",
  "Autre page du site répondant à la même décision :",
  "Action choisie, responsable et date de revue :",
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Site indexé sans trafic" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre prestataire confirme que les pages sont indexées, mais Search Console montre peu de clics et votre entreprise ne reçoit aucune demande. Voici comment trouver où l’effort se perd avant de tout réécrire."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "5 signaux distincts",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "1 tableau page par page",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 décisions possibles",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/pourquoi-site-pas-visible-google",
            label: "Diagnostiquer un site qui n’est pas indexé ou visible",
          },
          {
            href: "/guides/positions-google-baissent",
            label: "Analyser une baisse après une visibilité acquise",
          },
          {
            href: "/guides/combien-de-temps-resultats-seo",
            label: "Décider quand attendre les résultats SEO",
          },
          {
            href: "/guides/audit-seo-que-contient-il",
            label: "Vérifier ce qu’un audit SEO doit livrer",
          },
          {
            href: "/services/referencement-google",
            label: "Découvrir l’accompagnement SEO",
          },
        ]}
        faqTitle="Questions fréquentes sur un site indexé sans trafic"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Situation entièrement fictive : votre rapport annonce 200 pages
          indexées, mais Search Console montre très peu de clics et votre
          entreprise ne reçoit aucune demande identifiable. Ce n’est pas une
          contradiction. Une page{" "}
          <strong>indexée</strong> est simplement une page que Google a ajoutée
          à son index. Elle peut ensuite ne produire aucune{" "}
          <strong>impression</strong>, c’est-à-dire ne pas apparaître dans un
          résultat mesuré, ou apparaître à une position peu visible. Elle peut
          aussi être affichée sans obtenir de clic, puis recevoir des visites
          sans générer de demande commerciale. Commencez donc par séparer ces
          étapes. Pour chaque groupe de pages, vérifiez la version choisie par
          Google, les recherches réellement associées, les impressions et les
          clics. Vous pourrez alors conserver une page utile, l’améliorer, la
          fusionner avec une réponse plus forte ou la retirer si elle ne sert ni
          le lecteur ni l’activité.
        </p>

        <InfoBox variant="emerald" title="La réponse simple">
          L’indexation n’est pas un résultat commercial. Elle ouvre seulement
          la possibilité d’apparaître. Ne financez pas une réécriture générale
          avant d’avoir identifié si le blocage se situe entre l’indexation et
          l’impression, entre l’impression et le clic, ou entre le clic, le
          chargement réel de la page et la demande.
        </InfoBox>

        <p>
          Ce guide commence après la confirmation de l’indexation. Si l’outil
          d’inspection indique que l’URL n’est pas indexée, utilisez plutôt le
          diagnostic{" "}
          <Link href="/guides/pourquoi-site-pas-visible-google">
            pourquoi votre site n’est pas visible sur Google
          </Link>
          . Si le site avait déjà des clics et les a perdus, le guide sur les{" "}
          <Link href="/guides/positions-google-baissent">
            positions Google en baisse
          </Link>{" "}
          partira de la bonne situation.
        </p>

        <GuideToc
          items={[
            {
              id: "cinq-signaux",
              label: "Séparer les cinq signaux",
            },
            {
              id: "bonne-page",
              label: "Vérifier la page choisie par Google",
            },
            {
              id: "impressions",
              label: "Comprendre l’absence d’impressions",
            },
            {
              id: "requetes",
              label: "Lire les recherches réellement associées",
            },
            {
              id: "clics",
              label: "Traiter les impressions sans clics",
            },
            {
              id: "chevauchement",
              label: "Repérer deux pages qui répondent au même besoin",
            },
            {
              id: "exemple",
              label: "Classer un exemple fictif",
            },
            {
              id: "registre",
              label: "Construire le tableau de suivi",
            },
            {
              id: "decider",
              label: "Conserver, améliorer, fusionner ou retirer",
            },
            {
              id: "sources",
              label: "Sources et limites",
            },
          ]}
        />

        <h2 id="cinq-signaux">
          Séparez cinq signaux avant de parler de « manque de trafic »
        </h2>

        <p>
          Le mot trafic résume trop de situations. Un dirigeant peut recevoir
          le même diagnostic — « le site ne marche pas » — alors que la page
          n’est pas la bonne version, qu’aucune personne ne recherche le sujet,
          que le résultat est peu choisi ou que le formulaire n’est pas suivi.
          Ces problèmes demandent des décisions différentes.
        </p>

        <div className="not-prose my-8 grid gap-4">
          {signalCards.map((signal, index) => (
            <section
              key={signal.name}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {signal.name}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                      Ce que cela dit :
                    </strong>{" "}
                    {signal.meaning}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                      Ce que cela ne prouve pas :
                    </strong>{" "}
                    {signal.doesNotProve}
                  </p>
                  <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-blue-700 dark:text-blue-300">
                    Question suivante : {signal.question}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          Le{" "}
          <a
            href="https://support.google.com/webmasters/answer/7576553?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport sur les performances de Google Search Console
          </a>{" "}
          fournit notamment les clics, les impressions, le taux de clics et la
          position moyenne. Il permet de filtrer par page, requête, pays,
          appareil, apparence dans les résultats et période. Ces filtres font
          partie du constat : une page peut sembler invisible dans un rapport
          global alors qu’elle apparaît seulement dans une zone, sur mobile ou
          pour le nom de l’entreprise.
        </p>

        <p>
          Google publie aussi une{" "}
          <a
            href="https://support.google.com/webmasters/answer/7042828?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            définition détaillée des clics, impressions et positions
          </a>
          . Une impression ne se compte pas exactement de la même façon pour
          tous les types de résultats. La position affichée est une moyenne
          calculée avec les filtres du rapport et selon son mode
          d’agrégation : elle ne correspond donc pas à une place fixe vue par
          chaque prospect.
        </p>

        <h2 id="bonne-page">
          Vérifiez d’abord quelle page Google a réellement choisie
        </h2>

        <p>
          Copiez l’URL exacte dans l’outil d’inspection de Search Console. La
          page{" "}
          <a
            href="https://support.google.com/webmasters/answer/9012289?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            dédiée à l’inspection d’URL
          </a>{" "}
          explique que le rapport donne des informations sur la version
          présente dans l’index, notamment la page canonique choisie. La
          canonique est la version que Google considère comme principale parmi
          plusieurs URL proches.
        </p>

        <p>
          Si Google a retenu une autre URL, ne commencez pas par ajouter des
          paragraphes. Vérifiez pourquoi deux adresses présentent un contenu
          identique ou très proche : paramètres, variantes, ancien chemin,
          doublon technique, redirection incomplète ou instruction canonique
          incohérente. Le test en direct montre ce que Google peut atteindre
          maintenant ; les données d’index décrivent la version connue. Les
          deux vues ne répondent donc pas exactement à la même question.
        </p>

        <InfoBox variant="blue" title="L’opérateur site: ne clôt pas le diagnostic">
          Une recherche telle que <code>site:exemple.fr/page</code> peut donner
          un indice, mais{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google indique que les opérateurs de recherche
          </a>{" "}
          ne fournissent pas nécessairement une liste exhaustive. Pour une URL
          précise, l’inspection dans la bonne propriété Search Console reste la
          vérification utile.
        </InfoBox>

        <h2 id="impressions">
          Une page indexée sans impression pose d’abord la question de la demande
        </h2>

        <p>
          Une absence d’impressions n’autorise pas immédiatement la conclusion
          « le contenu est mauvais ». Commencez par vérifier quatre éléments :
          la période est-elle assez longue pour le rythme réel de votre marché,
          les filtres sont-ils neutres, la bonne URL est-elle analysée et des
          personnes recherchent-elles cette question avec des mots que la page
          traite réellement ?
        </p>

        <p>
          Prenez le cas d’une entreprise qui publie une page très précise sur
          une fonctionnalité interne. Cette page peut être utile à un client
          déjà accompagné sans correspondre à une recherche publique fréquente.
          Elle mérite peut-être de rester accessible et bien reliée depuis la
          documentation, mais pas de recevoir un budget SEO important. À
          l’inverse, une page de service importante peut manquer les mots
          ordinaires utilisés par ses acheteurs et nécessiter une nouvelle
          formulation.
        </p>

        <GuideTable
          caption="Que vérifier lorsqu’une page indexée ne produit aucune impression"
          headers={["Observation", "Question humaine", "Action raisonnable"]}
          rows={[
            [
              "Sujet rarement recherché",
              "Cette page aide-t-elle tout de même un client ou une vente ?",
              "La conserver comme ressource utile ou cesser d’investir pour la positionner.",
            ],
            [
              "Sujet recherché avec d’autres mots",
              "Comment un dirigeant formule-t-il réellement son problème ?",
              "Reprendre le titre, l’ouverture et les réponses sans empiler des synonymes.",
            ],
            [
              "Page isolée du reste du site",
              "Depuis quel guide ou service devrait-on naturellement y arriver ?",
              "Ajouter un lien pertinent, avec une ancre qui annonce la décision.",
            ],
            [
              "Plusieurs URL très proches",
              "Laquelle doit apporter la réponse principale ?",
              "Choisir une page de référence avant d’enrichir les doublons.",
            ],
            [
              "Données trop récentes ou filtrées",
              "La période et les filtres permettent-ils vraiment de conclure ?",
              "Corriger le relevé et fixer une date de revue au lieu de modifier immédiatement.",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Ne pas investir est parfois la bonne réponse">
          Si le sujet n’est presque jamais recherché, que la page n’aide ni un
          client ni une étape commerciale et qu’elle n’est utile à aucune autre
          page, ne payez pas une réécriture dans le seul but de conserver une
          URL. Documentez la décision, vérifiez les liens et redirections
          nécessaires, puis consacrez l’effort à une question réellement utile.
        </InfoBox>

        <h2 id="requetes">
          Lisez les recherches réelles avant de décider que le texte est mauvais
        </h2>

        <p>
          Filtrez le rapport par page, puis lisez les requêtes disponibles. Ne
          vous contentez pas d’un outil qui annonce un mot-clé cible. Les
          requêtes disponibles indiquent dans quels résultats la page a
          enregistré des impressions. Rangez-les en trois groupes : questions
          qui correspondent à la décision de la page, recherches de marque et
          recherches hors sujet. Search Console peut masquer certaines requêtes
          pour protéger la vie privée et limiter les données affichées ; la
          liste visible n’est donc qu’une partie de l’information.
        </p>

        <GuideTable
          caption="Trois lectures possibles des requêtes associées à une page"
          headers={["Type de requête", "Ce qu’elle suggère", "Décision"]}
          rows={[
            [
              "Pertinente et précise",
              "Google rapproche déjà la page du besoin visé.",
              "Renforcer la réponse, les preuves et la promesse visible sans changer de sujet.",
            ],
            [
              "Nom de l’entreprise ou du produit",
              "La personne connaît probablement déjà la marque.",
              "Analyser séparément pour ne pas confondre notoriété et acquisition.",
            ],
            [
              "Informative mais hors décision",
              "Un passage ou un titre attire un autre besoin que celui de la page.",
              "Clarifier le rôle de la page ou créer une vraie différence avec la page adaptée.",
            ],
            [
              "Très large ou ambiguë",
              "Le mot a plusieurs sens ou l’intention reste incertaine.",
              "Ne pas réécrire sur cette seule requête ; chercher un ensemble cohérent.",
            ],
          ]}
        />

        <p>
          Google recommande de produire un{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            contenu utile, fiable et pensé d’abord pour les personnes
          </a>
          . Pour une entreprise, cela signifie notamment annoncer la situation,
          donner une réponse claire, expliquer les limites, montrer comment
          décider et éviter de publier une page seulement parce qu’un mot-clé
          existe. Ajouter vingt variantes lexicales à un texte sans décision ne
          résout pas le problème.
        </p>

        <h2 id="clics">
          Des impressions pertinentes sans clics interrogent la promesse visible
        </h2>

        <p>
          Si la page apparaît sur de bonnes recherches mais obtient peu ou pas
          de clics, regardez ce que le lecteur voit avant d’entrer : le titre,
          l’extrait, le nom du site et les autres résultats présents. Le{" "}
          <a
            href="https://support.google.com/webmasters/answer/17010961?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide Google des tâches courantes du rapport Performances
          </a>{" "}
          invite notamment à examiner le titre, la description et l’adéquation
          du contenu lorsqu’un résultat a un taux de clics faible.
        </p>

        <p>
          Ne cherchez pas un taux de clics « normal » valable pour tout le site.
          Une première position sur le nom de l’entreprise, un résultat local,
          une question informationnelle et une page de service n’ont pas le
          même environnement. Comparez une page à elle-même, sur des requêtes
          cohérentes et des périodes comparables. Une évolution de la page de
          résultats peut aussi changer les clics sans que votre position
          moyenne raconte toute l’histoire.
        </p>

        <ul>
          <li>
            Le titre doit annoncer la question et la réponse réelle, pas une
            formule spectaculaire que la page ne tient pas.
          </li>
          <li>
            L’ouverture doit confirmer en quelques lignes que le lecteur est au
            bon endroit.
          </li>
          <li>
            La page doit expliquer à qui la solution convient, à qui elle ne
            convient pas et quelle décision devient possible.
          </li>
          <li>
            La date, l’auteur, les preuves et les sources doivent être visibles
            lorsque la décision exige de la confiance.
          </li>
        </ul>

        <h2 id="chevauchement">
          Deux pages qui répondent au même besoin doivent être différenciées ou
          fusionnées
        </h2>

        <p>
          Comparez les pages qui reçoivent les mêmes requêtes. Le simple fait
          que deux URL apparaissent ne prouve pas un problème. En revanche, si
          elles visent le même lecteur, la même situation et la même décision,
          les maintenir séparément peut disperser l’information et obliger
          l’internaute à choisir entre deux réponses incomplètes.
        </p>

        <p>
          Écrivez en une phrase le rôle de chaque page. Une page « prix d’un
          site vitrine » peut aider à préparer un budget ; une page « devis de
          site vitrine » peut expliquer les informations nécessaires avant une
          proposition. Si les deux textes répondent finalement à « combien cela
          coûte ? », choisissez la meilleure base et consolidez avec prudence.
          Si leurs décisions sont réellement différentes, rendez cette
          différence évidente dans les titres, les ouvertures et les liens.
        </p>

        <InfoBox variant="blue" title="Fusionner ne signifie pas supprimer à l’aveugle">
          Avant de retirer une URL, vérifiez ses liens, son historique, les
          visites utiles, les conversions éventuelles et la destination
          pertinente. Préparez la redirection lorsque le contenu a un
          successeur réel. Une redirection vers une page vague ou sans rapport
          ne rend pas la décision plus claire.
        </InfoBox>

        <h2 id="exemple">
          Exemple fictif : 45 pages indexées appellent quatre décisions
          différentes
        </h2>

        <InfoBox variant="amber" title="Exemple entièrement fictif">
          Cet exemple ne décrit ni un client ni un cas réel Hagnéré Code. Les
          nombres ci-dessous ne constituent ni un benchmark ni une performance
          attendue. Ils servent uniquement à montrer pourquoi un total de pages
          indexées ne permet pas de choisir une action.
        </InfoBox>

        <p>
          Une entreprise fictive examine 45 pages sur une période qu’elle juge
          représentative de son activité. Elle conserve les mêmes filtres pour
          toute l’analyse et classe chaque URL une seule fois.
        </p>

        <GuideTable
          caption="Classement fictif de 45 pages indexées"
          headers={["Groupe et volume", "Observation", "Décision provisoire"]}
          rows={[
            [
              "A — 20 pages",
              "Aucune impression observée sur la période",
              "Vérifier canonique, demande, rôle et liens ; attendre seulement avec une date.",
            ],
            [
              "B — 12 pages",
              "Impressions surtout sur des recherches hors sujet",
              "Recentrer la réponse ou fusionner les pages dont le rôle se confond.",
            ],
            [
              "C — 8 pages",
              "Impressions pertinentes mais aucun clic",
              "Améliorer la promesse visible et confirmer la réponse dans l’ouverture.",
            ],
            [
              "D — 5 pages",
              "Impressions et clics pertinents, aucune demande suivie",
              "Conserver provisoirement et vérifier l’offre, le parcours et le suivi commercial.",
            ],
          ]}
        />

        <p>
          Le contrôle est simple : 20 + 12 + 8 + 5 = 45 pages. Ce classement
          n’établit pas la cause. Il empêche seulement quatre erreurs : attendre
          toutes les pages, réécrire toutes les pages, supprimer toutes les
          pages sans clics ou attribuer l’absence de demandes au seul
          référencement.
        </p>

        <p>
          Dans le groupe D, Search Console a enregistré un clic depuis une
          recherche pertinente. Il reste à vérifier que la page s’est chargée,
          qu’une session a été mesurée et ce qui s’est passé ensuite. Le
          problème peut se trouver dans l’offre, la page, le formulaire, la
          réponse commerciale ou la mesure. Le guide ne transforme donc pas
          chaque absence de demande en défaut de contenu. Dans le groupe A,
          l’entreprise peut aussi conclure qu’une page n’a aucun rôle
          suffisamment utile et arrêter d’y investir.
        </p>

        <h2 id="registre">
          Copiez un tableau de suivi page par page avant de commander une réécriture
        </h2>

        <p>
          Commencez par dix URL importantes pour le chiffre d’affaires ou les
          questions récurrentes des clients. Ne mettez pas toutes ces pages dans
          un tableur si personne ne traitera les décisions. Une ligne par URL
          et les sept champs suivants suffisent pour une première revue :
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="mb-4 text-sm font-semibold text-zinc-950 dark:text-white">
            Registre page-requête à copier
          </p>
          <ol className="m-0 space-y-3 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {pageRegister.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ol>
        </div>

        <p>
          Search Console ne fournit pas une vérité complète sur toutes les
          personnes. Certaines requêtes peuvent être absentes pour des raisons
          de confidentialité, les données récentes peuvent être incomplètes et
          les filtres modifient les résultats affichés. La position moyenne n’est pas la
          place fixe vue par chaque prospect. Notez donc la période, les
          filtres et la date d’extraction à côté des chiffres.
        </p>

        <p>
          Après une modification, ne changez pas trois autres éléments le
          lendemain. Inscrivez ce qui a été fait, la date et le signal attendu.
          Google recommande de regarder les tendances des impressions et des
          clics plutôt que de se concentrer uniquement sur la position. Votre
          date de revue dépendra du volume réel de données et de la saison de
          l’activité, pas d’un délai universel annoncé dans un article.
        </p>

        <h2 id="decider">
          Conservez, améliorez, fusionnez ou retirez avec une raison écrite
        </h2>

        <GuideTable
          caption="Les quatre décisions finales et leur condition"
          headers={["Décision", "Quand elle devient raisonnable", "Ce qu’il faut noter"]}
          rows={[
            [
              "Conserver",
              "La page sert un lecteur, une vente ou une documentation et aucune correction prioritaire n’est démontrée.",
              "Son rôle, le signal suivi et la prochaine date de revue.",
            ],
            [
              "Améliorer",
              "Les requêtes sont pertinentes mais la réponse, les éléments rassurants ou la promesse visible restent insuffisants.",
              "Le changement précis et l’évolution attendue.",
            ],
            [
              "Fusionner",
              "Deux pages répondent à la même situation et à la même décision sans différence utile.",
              "La page de référence, les contenus repris, les liens et la redirection.",
            ],
            [
              "Retirer",
              "La page n’aide aucun lecteur, ne soutient aucune étape métier et n’a pas de successeur justifiant sa conservation.",
              "Les impacts vérifiés, le code de réponse ou la destination réellement pertinente.",
            ],
          ]}
        />

        <p>
          <strong>Attendre n’est pas une cinquième décision finale.</strong>{" "}
          C’est un statut temporaire, légitime lorsque la page vient d’être
          publiée ou modifiée, que le relevé est trop court et qu’aucun défaut
          urgent n’est confirmé. Écrivez alors la date de revue et le signal
          attendu ; à cette date, la page devra rejoindre l’une des quatre
          décisions ci-dessus. « On verra plus tard » n’est pas une décision
          exploitable.
        </p>

        <p>
          Commencez sans prestataire : inspectez dix URL, lisez leurs requêtes
          et donnez-leur une décision provisoire. Un accompagnement devient
          utile lorsque la canonique est incohérente, que plusieurs modèles de
          pages se chevauchent, que le volume empêche une revue manuelle ou que
          les données ne permettent pas de distinguer le contenu, la technique
          et le parcours commercial.
        </p>

        <GuideInlineCTA
          title="Identifier les pages à garder, améliorer ou regrouper"
          description="Décrivez les pages concernées, leur rôle commercial et ce que Search Console montre déjà. Nous pouvons les examiner, les classer par situation et vous indiquer lesquelles conserver, améliorer, regrouper ou arrêter. Si la demande n’existe pas ou si une page n’a aucun rôle utile, la recommandation peut être de ne pas investir davantage."
          tags={[
            "Priorités par URL",
            "Aucun seuil inventé",
            "Arrêt possible",
          ]}
          ctaLabel="Faire examiner mes pages"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites de l’analyse</h2>

        <p>
          Sources consultées le 23 juillet 2026. Les interfaces, filtres,
          rapports et systèmes de Google évoluent. Les liens officiels doivent
          être revérifiés avant une modification importante du guide ou une
          intervention sur un compte réel.
        </p>

        <ul>
          <li>
            Google Search Console —{" "}
            <a
              href="https://support.google.com/webmasters/answer/9012289?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              outil d’inspection d’URL
            </a>
            , pour le statut d’indexation, la canonique et la distinction avec
            le test en direct.
          </li>
          <li>
            Google Search Console —{" "}
            <a
              href="https://support.google.com/webmasters/answer/7576553?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              rapport sur les performances
            </a>
            , pour les clics, impressions, taux de clics, position et dimensions
              disponibles.
          </li>
          <li>
            Google Search Console —{" "}
            <a
              href="https://support.google.com/webmasters/answer/7042828?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              définition des clics, impressions et positions
            </a>
            , pour les règles de comptage et les limites de la position moyenne.
          </li>
          <li>
            Google Search Console —{" "}
            <a
              href="https://support.google.com/webmasters/answer/17010961?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              tâches courantes du rapport Performances
            </a>
            , notamment pour lire les tendances et examiner un taux de clics
            faible.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement de la recherche Google
            </a>
            , pour distinguer exploration, indexation et diffusion.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              opérateurs de recherche et opérateur site:
            </a>
            , pour la limite d’exhaustivité de ce contrôle.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              principes d’un contenu utile et fiable
            </a>
            .
          </li>
        </ul>

        <p>
          Les chiffres Search Console sont des données de performance sur la
          période et avec les filtres choisis, pas une mesure exhaustive de la
          demande du marché ni des personnes. Une position moyenne ne promet
          aucune place individuelle. Une impression ne prouve pas une lecture,
          un clic ne prouve pas un prospect et une demande ne démontre pas à
          elle seule l’attribution au SEO. La décision finale doit donc aussi
          utiliser les données commerciales et la fonction réelle de chaque
          page.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
