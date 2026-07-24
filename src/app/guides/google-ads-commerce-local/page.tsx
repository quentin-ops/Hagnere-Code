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

const guide = getGuide("google-ads-commerce-local");

export const metadata = buildGuideMetadata(
  guide,
  "Google Ads pour un commerce local : appels, itinéraires, visites et ventes",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Google Ads pour commerce local",
);

const faqItems = [
  {
    question: "Une demande d’itinéraire prouve-t-elle une visite en magasin ?",
    answer:
      "Non. Elle prouve qu’une personne a demandé un trajet, pas qu’elle est arrivée ni qu’elle a acheté. C’est un signal utile à rapprocher des passages et des ventes observés, sans le transformer en chiffre d’affaires.",
  },
  {
    question:
      "Les conversions de visites en magasin sont-elles disponibles pour tous les comptes ?",
    answer:
      "Non. Google applique des conditions d’éligibilité et utilise une modélisation. Ne construisez pas votre plan de mesure en supposant que ce rapport sera disponible ; commencez par les appels, réservations ou ventes que votre établissement peut réellement noter.",
  },
  {
    question: "Faut-il une fiche d’établissement pour faire de la publicité ?",
    answer:
      "Non, pas pour toute campagne Search. En revanche, les conversions d’actions locales exigent des composants Lieu actifs. Si vous voulez afficher une adresse, une zone ou un itinéraire, vérifiez l’établissement lié, les horaires, le téléphone et la page avant de payer leur diffusion.",
  },
  {
    question: "Faut-il choisir Search ou Performance Max ?",
    answer:
      "Le choix vient après l’objectif et la manière de vérifier le résultat. Search peut être pertinent pour contrôler des recherches précises ; Performance Max peut utiliser davantage de surfaces et de signaux. Le bon choix dépend des données disponibles, du besoin de contrôle et des fonctions réellement accessibles dans votre compte.",
  },
  {
    question:
      "Une entreprise qui intervient chez ses clients peut-elle faire un test local ?",
    answer:
      "Oui, potentiellement. Une activité avec zone desservie peut chercher des appels, devis ou réservations dans les communes qu’elle sert réellement. Elle doit toutefois vérifier les règles du format et ne pas annoncer une adresse d’accueil qui n’existe pas.",
  },
  {
    question: "Quel rayon faut-il cibler autour du commerce ?",
    answer:
      "Il n’existe pas de rayon universel. Partez des communes ou zones d’où viennent réellement vos clients, de votre capacité de déplacement et de la concurrence, puis corrigez l’hypothèse avec les recherches et résultats du test. Un cercle de dix kilomètres n’a pas le même sens en centre-ville et en zone rurale.",
  },
];

const resultCards = [
  {
    name: "Appel",
    proof: "Google Ads a compté un clic sur l’action « Appeler ».",
    limit:
      "Ce clic ne prouve ni qu’un appel a été émis, ni qu’il a été reçu ou répondu.",
    follow:
      "Rapprocher du journal téléphonique : appel reçu, répondu, besoin compatible, rendez-vous ou vente.",
  },
  {
    name: "Réservation",
    proof:
      "Un créneau ou une table a été réservé par un parcours identifiable.",
    limit: "Une réservation peut être annulée, non honorée ou déjà acquise.",
    follow: "Rapprocher la réservation de sa présence et de son issue.",
  },
  {
    name: "Itinéraire",
    proof: "Une personne a demandé un trajet vers l’établissement.",
    limit: "Ni l’arrivée, ni l’achat ne sont démontrés.",
    follow: "Le lire comme un signal intermédiaire, jamais comme une vente.",
  },
  {
    name: "Visite modélisée",
    proof:
      "Google estime des visites pour un compte et un établissement éligibles.",
    limit: "Il s’agit d’une estimation agrégée, pas d’un registre nominatif.",
    follow:
      "Comparer la tendance aux données internes sans exiger une égalité.",
  },
  {
    name: "Vente observée",
    proof: "Une vente est rapprochée par un moyen défini avant le test.",
    limit: "Le moyen peut oublier des ventes ou attribuer plusieurs canaux.",
    follow: "Dédupliquer, retirer annulations et raisonner sur la marge.",
  },
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
          { label: "Google Ads pour commerce local" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="À la fermeture, Google affiche des clics et des itinéraires ; votre caisse ne dit pas quels clients viennent de la publicité. Choisissez d’abord un résultat local que votre équipe peut réellement observer."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Un résultat local",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Résultat vérifiable",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Test par établissement",
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
            href: "/guides/seo-local-pme",
            label: "Améliorer la visibilité locale durable",
          },
          {
            href: "/guides/google-search-ads-ou-performance-max",
            label: "Choisir entre Search et Performance Max",
          },
          {
            href: "/guides/budget-google-ads-pme",
            label: "Préparer un budget Google Ads soutenable",
          },
          {
            href: "/guides/suivi-conversions-google-ads",
            label: "Relier les conversions au résultat métier",
          },
        ]}
        faqTitle="Questions fréquentes sur Google Ads pour un commerce local"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Imaginez cette situation fictive : il est 19 h et vous fermez le
          magasin. Google Ads affiche 120
          demandes d’itinéraire et 34 actions « Appeler ». La caisse ne montre
          pas 154 nouveaux clients. C’est normal : un clic sur un bouton, un
          trajet demandé, un appel reçu, une visite et une vente sont cinq
          choses différentes. Google Ads peut aider un commerce local à obtenir
          des appels, des réservations ou à être visible auprès des personnes
          situées près de son établissement. Mais il faut choisir un résultat
          principal et une façon réaliste de le vérifier. Si vos horaires, votre
          téléphone ou votre page sont faux, corrigez-les avant de payer leur
          diffusion. Si personne ne note l’issue des appels ou des réservations,
          organisez ce suivi avant d’augmenter le budget.
        </p>

        <InfoBox variant="emerald" title="Le principe en une phrase">
          Choisissez une action locale que vous pouvez observer — appel abouti,
          réservation honorée ou vente rapprochée — puis utilisez les
          itinéraires et visites modélisées comme des signaux, pas comme des
          clients certains.
        </InfoBox>

        <p>
          Ce guide concerne un établissement physique ou une activité qui sert
          une zone précise. Il ne promet ni fréquentation, ni coût par visite,
          ni chiffre d’affaires. Pour travailler d’abord votre fiche, votre site
          et les recherches naturelles, consultez le guide du{" "}
          <Link href="/guides/seo-local-pme">SEO local pour PME</Link>.
        </p>

        <GuideToc
          items={[
            { id: "resultat", label: "Choisir le résultat local" },
            { id: "preuve", label: "Comprendre ce que chaque mesure prouve" },
            { id: "etablissement", label: "Vérifier l’établissement" },
            { id: "zone", label: "Délimiter une zone réaliste" },
            { id: "format", label: "Choisir le format après l’objectif" },
            {
              id: "rapprocher",
              label: "Rapprocher les résultats chaque semaine",
            },
            { id: "attendre", label: "Savoir quand ne pas lancer" },
            {
              id: "decision",
              label: "Décider établissement par établissement",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="resultat">Choisissez le résultat local avant la campagne</h2>
        <p>
          Demandez-vous ce qu’un client intéressé fait naturellement. Un cabinet
          peut viser un appel qualifié ou un rendez-vous. Un restaurant peut
          suivre une réservation honorée. Un magasin peut tester une offre dont
          la vente est identifiable. Une entreprise qui se déplace chez ses
          clients peut mesurer des demandes dans sa zone de service.
        </p>

        <p>
          La documentation Google sur les{" "}
          <a
            href="https://support.google.com/google-ads/answer/3246303?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            annonces locales
          </a>{" "}
          présente actuellement plusieurs objectifs possibles, dont les visites
          ou ventes en magasin, les prospects, les appels, les réservations et
          le trafic du site. Cette liste décrit les possibilités du produit ;
          elle ne dit pas lesquelles sont disponibles ni utiles dans votre
          compte.
        </p>

        <GuideTable
          caption="Choisir un résultat principal selon l’activité"
          headers={[
            "Situation",
            "Résultat principal possible",
            "Vérification minimale",
          ]}
          rows={[
            [
              "Cabinet ou service sur rendez-vous",
              "Appel qualifié ou réservation honorée",
              "Registre d’appels et agenda rapprochés.",
            ],
            [
              "Restaurant ou hébergement",
              "Réservation honorée",
              "Origine notée sans compter deux fois la même table ou chambre.",
            ],
            [
              "Commerce avec vente sur place",
              "Vente identifiée sur une offre test",
              "Code, produit ou question d’accueil défini avant la campagne.",
            ],
            [
              "Artisan ou activité avec zone desservie",
              "Demande compatible dans la zone",
              "Commune, type de besoin et issue du rappel.",
            ],
          ]}
        />

        <p>
          Gardez un seul résultat principal pendant le premier test. Vous pouvez
          observer un signal secondaire, mais ne changez pas de verdict chaque
          semaine : si l’objectif passe de l’appel à l’itinéraire puis au clic,
          aucune période ne répondra à la même question.
        </p>

        <h2 id="preuve">Distinguez ce que chaque mesure permet de conclure</h2>
        <p>
          Un résultat <strong>observé</strong> est enregistré directement dans
          votre activité, comme une réservation honorée. Un résultat{" "}
          <strong>modélisé</strong> est une estimation calculée à partir de
          données disponibles. Les deux peuvent informer une décision, mais ils
          ne doivent pas être racontés de la même façon.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {resultCards.map((result) => (
            <section
              key={result.name}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {result.name}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-950 dark:text-white">
                  Ce que cela prouve :
                </strong>{" "}
                {result.proof}
              </p>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-950 dark:text-white">
                  Ce que cela ne prouve pas :
                </strong>{" "}
                {result.limit}
              </p>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-950 dark:text-white">
                  À faire :
                </strong>{" "}
                {result.follow}
              </p>
            </section>
          ))}
        </div>

        <p>
          Google explique que les{" "}
          <a
            href="https://support.google.com/google-ads/answer/6100636?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            conversions de visites en magasin
          </a>{" "}
          sont réservées aux comptes éligibles et reposent sur une modélisation.
          Si cet indicateur apparaît, il ne donne pas le nom de chaque visiteur
          ni la certitude de son achat. S’il n’apparaît pas, cela ne signifie pas
          que la campagne n’a produit aucune visite.
        </p>

        <h2 id="etablissement">
          Vérifiez l’établissement que vous allez payer pour afficher
        </h2>
        <p>
          Les{" "}
          <a
            href="https://support.google.com/google-ads/answer/2404182?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            composants Lieu
          </a>{" "}
          peuvent afficher selon le contexte une adresse, une carte, une
          distance, des horaires ou d’autres informations issues de
          l’établissement associé. Une donnée fausse n’est pas un petit détail :
          vous pouvez payer pour envoyer une personne devant une porte fermée.
        </p>

        <GuideTable
          caption="Contrôle avant de financer une présence locale"
          headers={["À vérifier", "Test concret", "Décision si le test échoue"]}
          rows={[
            [
              "Adresse ou zone desservie",
              "La localisation publique correspond-elle à la réalité ?",
              "Corriger avant diffusion ; ne pas inventer une adresse d’accueil.",
            ],
            [
              "Horaires",
              "Les horaires habituels et exceptionnels sont-ils tenus ?",
              "Nommer la personne qui les met à jour.",
            ],
            [
              "Téléphone",
              "Un appel test aboutit-il pendant les heures annoncées ?",
              "Réparer l’accueil ou choisir un autre résultat.",
            ],
            [
              "Page liée",
              "Le service, la zone et la prochaine action sont-ils évidents sur mobile ?",
              "Corriger la page avant d’acheter davantage de clics.",
            ],
            [
              "Capacité",
              "Pouvez-vous réellement recevoir, rappeler ou servir plus de demandes ?",
              "Limiter ou différer le test.",
            ],
          ]}
        />

        <h2 id="zone">Délimitez une zone à partir de vos vrais clients</h2>
        <p>
          Ne partez pas d’un rayon conseillé dans un article. Prenez les
          communes ou quartiers de vos clients récents, retirez les cas
          exceptionnels, puis notez les zones où votre offre reste réellement
          accessible. Ajoutez vos contraintes : temps de déplacement,
          concurrence, livraison, stationnement, capacité ou règles propres à
          l’activité.
        </p>
        <ol>
          <li>
            Listez les zones servies sur une période représentative, sans
            conserver de donnée personnelle inutile.
          </li>
          <li>
            Séparez les clients venus spontanément, les recommandations et les
            actions déjà payantes lorsque l’information existe.
          </li>
          <li>Formulez une première zone comme hypothèse, pas comme vérité.</li>
          <li>
            Examinez les recherches et résultats par zone, puis élargissez ou
            réduisez pour une raison écrite.
          </li>
        </ol>

        <InfoBox
          variant="amber"
          title="Le ciblage géographique n’est pas une barrière parfaite"
        >
          Dans le{" "}
          <a
            href="https://support.google.com/google-ads/answer/1722038?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            réglage géographique documenté par Google Ads
          </a>
          , l’option par défaut « Présence ou intérêt » peut inclure une
          personne située dans la zone, qui s’y trouve régulièrement ou qui a
          montré un intérêt pour elle. L’option « Présence » resserre ce
          principe aux personnes susceptibles de se trouver dans la zone ou d’y
          être régulièrement, sans rendre la localisation exacte à 100 %. Pour
          une visite physique, examinez ces deux options au regard de votre
          objectif au lieu d’appliquer une règle universelle. Contrôlez ensuite
          les zones qui ont réellement déclenché la diffusion et les termes
          recherchés : le cercle dessiné reste une hypothèse, pas l’emplacement certain de
          l’emplacement de chaque client.
        </InfoBox>

        <h2 id="format">
          Search ou Performance Max vient seulement maintenant
        </h2>
        <p>
          Une fois le résultat, sa vérification, l’établissement et la zone prêts,
          vous pouvez comparer les formats. Search permet de travailler des
          recherches explicites. Performance Max peut diffuser sur plusieurs
          surfaces à partir d’éléments et de données disponibles. Les fonctions,
          contrôles et noms d’interface évoluent.
        </p>

        <p>
          Ne choisissez pas Performance Max parce que son nom semble plus
          complet, ni Search parce qu’il paraît plus simple. Demandez : quelle
          recherche ou quel signal voulons-nous tester, quelles créations
          pouvons-nous fournir, quel résultat fiable sera utilisé, et quel
          niveau de contrôle est nécessaire ? Le comparatif{" "}
          <Link href="/guides/google-search-ads-ou-performance-max">
            Google Search Ads ou Performance Max
          </Link>{" "}
          reprend cette décision sans la confondre avec la mesure locale.
        </p>

        <h2 id="rapprocher">
          Rapprochez les signaux chaque semaine sans outil complexe
        </h2>
        <p>
          Préparez une fiche par établissement. Elle peut tenir dans un tableur
          ou un document partagé : résultat principal, résultat secondaire, zone
          testée, horaires vérifiés, personne responsable, source de la donnée,
          coût complet et date de revue.
        </p>

        <GuideTable
          caption="Fiche de suivi d’un test local"
          headers={["Champ", "Exemple de question", "Règle"]}
          rows={[
            [
              "Résultat principal",
              "Appel qualifié, réservation honorée ou vente ?",
              "Un seul pour le verdict initial.",
            ],
            [
              "Nature du résultat",
              "Observée, rapprochée ou modélisée ?",
              "Écrire la limite à côté du chiffre.",
            ],
            [
              "Responsable",
              "Qui répond, note et rapproche ?",
              "Une personne nommée, avec une cadence réaliste.",
            ],
            [
              "Coût complet",
              "Média, gestion, création, remise spécifique ?",
              "Compter chaque poste une seule fois.",
            ],
            [
              "Décision",
              "Continuer, corriger, couper ou attendre ?",
              "Décider à une date prévue, pas à chaque mauvais jour.",
            ],
          ]}
        />

        <p>
          L’exemple suivant est entièrement fictif ; il ne décrit ni un client
          ni un cas Hagnéré Code. Google rapporte 120 demandes d’itinéraire et
          34 actions « Appeler ». En rapprochant ces actions de son journal
          téléphonique, le commerce identifie 11 appels reçus ayant mené à une
          réservation, puis 8 réservations honorées. Dix ventes utilisent aussi
          le code du test. Il ne peut pas additionner automatiquement 8 et 10 :
          certaines ventes peuvent être les mêmes clients que les réservations.
          Il doit d’abord dédupliquer, puis comparer la marge prudente au coût
          complet.
        </p>

        <h2 id="attendre">Quatre raisons de ne pas lancer cette semaine</h2>
        <ul>
          <li>
            <strong>Les informations publiques sont fausses.</strong> Corrigez
            adresse, zone, horaires, téléphone et page.
          </li>
          <li>
            <strong>Les demandes ne peuvent pas être traitées.</strong> Un appel
            manqué n’est pas réparé par un second clic.
          </li>
          <li>
            <strong>Aucun résultat n’est observable.</strong> Choisissez un
            registre minimal avant d’acheter une estimation flatteuse.
          </li>
          <li>
            <strong>La capacité est déjà pleine.</strong> Utilisez le budget
            pour l’organisation, la réservation ou la fidélisation avant
            d’augmenter la demande.
          </li>
        </ul>

        <h2 id="decision">Décidez établissement par établissement</h2>
        <p>
          Lancez un test limité si l’établissement est exact, la zone plausible,
          la demande identifiable, le résultat observable et la personne
          responsable disponible. Corrigez d’abord le premier maillon cassé dans
          les autres cas. Une chaîne de dix magasins peut donc avoir trois
          décisions différentes : lancer, attendre la correction de la fiche ou
          ne pas financer un site déjà saturé.
        </p>

        <GuideInlineCTA
          title="Préparer un test local relié à une action observable"
          description="Indiquez l’établissement, sa zone réelle, l’action attendue et la manière dont vous traitez aujourd’hui appels, réservations ou ventes. Nous définirons un test limité et sa date de décision. Si les informations ou l’accueil doivent être réparés avant la publicité, la recommandation peut être d’attendre."
          tags={[
            "Un objectif principal",
            "Mesure expliquée",
            "Test différable",
          ]}
          ctaLabel="Préparer mon test local"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources consultées le 23 juillet 2026. Les produits, surfaces,
          conditions d’éligibilité, règles et rapports Google changent. Vérifiez
          la documentation et le compte réel avant de lancer. Les obligations
          propres aux professions réglementées, à la publicité et aux données
          doivent être examinées séparément.
        </p>
        <ul>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/1722038?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              options et limites du ciblage géographique
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/3246303?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              annonces locales et objectifs actuellement décrits
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/2404182?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              composants Lieu
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/9013908?hl=fr-419"
              target="_blank"
              rel="noopener noreferrer"
            >
              conversions d’actions locales
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/6100636?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              conversions de visites en magasin et éligibilité
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
