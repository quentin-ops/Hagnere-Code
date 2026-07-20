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
        alt: "Arbitrage entre SEO, Google Ads, stratégie hybride et report",
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
    question: "SEO ou Google Ads : lequel coûte le moins cher ?",
    answer:
      "Aucun des deux par nature. Ads ajoute une dépense média aux coûts de pilotage, de page et de mesure. Le SEO mobilise technique, recherche, contenus, diffusion, suivi et maintenance. Comparez sur un même horizon le coût complet et le résultat métier obtenu ; un clic organique n’est pas gratuit si sa page a coûté du temps et un clic payé n’est pas cher s’il produit une marge suffisante.",
  },
  {
    question: "Google Ads donne-t-il des résultats immédiatement ?",
    answer:
      "Une campagne éligible peut acheter de la visibilité sans attendre l’exploration et l’indexation d’une page. Cela ne garantit ni diffusion suffisante, ni clic, ni prospect qualifié, ni vente. Le résultat utile arrive seulement lorsque la requête, l’annonce, la page, la mesure et le traitement commercial forment une chaîne cohérente.",
  },
  {
    question: "Combien de temps faut-il pour voir les effets du SEO ?",
    answer:
      "Il n’existe pas de délai universel. Google indique que certains changements peuvent produire un effet en quelques jours et que d’autres peuvent demander plusieurs mois ; une amélioration peut aussi ne rien changer. Fixez plutôt des jalons vérifiables : pages explorables et indexables, requêtes et impressions pertinentes, clics, actions utiles, puis opportunités et ventes selon votre cycle commercial.",
  },
  {
    question: "Faut-il arrêter Google Ads quand le SEO fonctionne ?",
    answer:
      "Pas automatiquement. Vérifiez requête par requête si Ads apporte des ventes qui n’auraient pas eu lieu sans la publicité, protège une saison, couvre une offre absente en organique ou ne fait que capter une demande déjà acquise. Réduisez, déplacez ou maintenez le budget à partir d’un test et de données de vente, pas d’une règle générale.",
  },
  {
    question: "Google Ads améliore-t-il directement le référencement naturel ?",
    answer:
      "Non. L’achat d’annonces n’achète pas une meilleure position dans les résultats naturels. La publicité peut indirectement produire des apprentissages, des visites ou de la notoriété, mais ces effets ne constituent pas un transfert automatique de budget Ads vers le classement SEO.",
  },
  {
    question: "Quel budget minimum faut-il pour commencer ?",
    answer:
      "Google Ads n’impose pas de dépense minimale universelle, mais une expérience trop petite peut ne produire aucune conclusion. Le budget utile dépend du volume de recherche, des coûts estimés, de la valeur d’une vente, du délai de conversion et de la précision recherchée. Pour le SEO aussi, un budget dispersé entre trop de sujets peut n’achever aucune page réellement compétitive.",
  },
];

function AcquisitionDecisionBoard() {
  const paths = [
    {
      label: "ADS D’ABORD",
      question: "Une demande identifiable doit être testée maintenant",
      proof: "requête → prospect qualifié → vente",
      color: "border-blue-400/30 bg-blue-400/[0.08] text-blue-200",
    },
    {
      label: "SEO D’ABORD",
      question: "La demande revient et mérite une réponse durable",
      proof: "page utile → visibilité pertinente → opportunité",
      color: "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-200",
    },
    {
      label: "HYBRIDE",
      question: "Deux rôles distincts sont financés et mesurables",
      proof: "test court → apprentissage → couverture organique",
      color: "border-violet-400/30 bg-violet-400/[0.08] text-violet-200",
    },
    {
      label: "REPORT",
      question: "L’offre, la page, la mesure ou la vente bloque",
      proof: "corriger le système avant d’acheter du trafic",
      color: "border-amber-400/30 bg-amber-400/[0.08] text-amber-200",
    },
  ];

  return (
    <figure
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="acquisition-board-title"
    >
      <figcaption id="acquisition-board-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
          Comité d’investissement
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Quatre sorties, une prochaine preuve
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Ne notez pas les canaux. Écrivez la contrainte dominante, la preuve à
          obtenir et la décision qui suivra.
        </span>
      </figcaption>

      <div className="grid gap-3 sm:grid-cols-2">
        {paths.map((path) => (
          <div key={path.label} className={"rounded-xl border p-4 " + path.color}>
            <p className="m-0 text-xs font-extrabold tracking-[0.14em]">
              {path.label}
            </p>
            <p className="mb-0 mt-2 text-sm font-semibold leading-relaxed text-white">
              {path.question}
            </p>
            <p className="mb-0 mt-3 text-xs leading-relaxed text-zinc-400">
              Preuve : {path.proof}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.045] p-4">
        <p className="m-0 text-sm font-bold text-white">
          Phrase à compléter avant toute commande
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-300">
          « Nous investissons dans ______ pendant ______ pour vérifier ______.
          Si ______ n’est pas observé, nous corrigeons, déplaçons ou arrêtons
          l’enveloppe avant ______. »
        </p>
      </div>
    </figure>
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
        heroDescription="Le bon choix dépend moins du canal que de la prochaine preuve dont votre entreprise a besoin. Ce guide relie urgence, demande, marge, mesure et capacité commerciale pour décider entre Ads, SEO, combinaison ou report."
        heroAction={{
          href: "#matrice",
          label: "Voir la matrice de décision",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Publié le " + formatGuideDate(guide.datePublished)}
        keyPoints={[
          {
            number: "01",
            title: "4 décisions possibles",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "5 prérequis non compensables",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Plan de preuves sur 90 jours",
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
            label: "Comprendre le coût réel du référencement naturel",
          },
          {
            href: "/guides/prix-gestion-google-ads",
            label: "Calculer le coût complet de Google Ads",
          },
          {
            href: "/guides/audit-seo-que-contient-il",
            label: "Vérifier ce qu’un audit SEO doit prouver",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer un compte Google Ads existant",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Diagnostiquer un site qui ne convertit pas",
          },
        ]}
        faqTitle="SEO ou Google Ads : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Choisissez Google Ads d’abord pour tester rapidement une demande
            identifiable ; le SEO d’abord pour couvrir durablement des
            recherches récurrentes ; les deux seulement si chacun a un rôle et
            un budget propres. Choisissez provisoirement aucun des deux si
            l’offre, la page, la mesure ou le suivi commercial sont défaillants.
          </strong>
        </p>

        <p>
          Cette réponse paraît moins confortable qu’un tableau « rapide contre
          durable ». Elle est pourtant plus utile à une entreprise. Google Ads
          peut rendre une annonce éligible sans garantir un prospect ; une page
          SEO peut être publiée sans garantir son indexation, sa position ou une
          vente. Dans les deux cas, votre budget achète d’abord une{" "}
          <strong>preuve</strong> : existence d’une demande, capacité d’une page
          à convaincre, qualité des contacts ou potentiel d’un sujet.
        </p>

        <InfoBox variant="blue" title="Périmètre exact de la comparaison">
          Dans ce guide, le <strong>SEO</strong> désigne le travail qui aide les
          pages à être comprises, trouvées et choisies dans les résultats non
          publicitaires. <strong>Google Ads</strong> désigne principalement les
          campagnes sur le Réseau de Recherche, dites Search, qui affichent des
          annonces en réponse à des requêtes. Display, vidéo, Shopping,
          Performance Max et les autres formats répondent à des mécanismes et
          objectifs supplémentaires : ils doivent être arbitrés séparément.
        </InfoBox>

        <AcquisitionDecisionBoard />

        <GuideToc
          items={[
            { id: "verdict", label: "1. Le verdict selon votre contrainte" },
            { id: "portes", label: "2. Les cinq portes avant le canal" },
            { id: "ads", label: "3. Quand Google Ads doit passer d’abord" },
            { id: "seo", label: "4. Quand le SEO doit passer d’abord" },
            { id: "hybride", label: "5. Quand combiner les deux" },
            { id: "matrice", label: "6. La matrice d’arbitrage" },
            { id: "preuves", label: "7. Le calendrier des 90 premiers jours" },
            { id: "cout", label: "8. Comparer le coût complet" },
            { id: "report", label: "9. Quand reporter les deux" },
            { id: "decision", label: "10. Écrire la décision sur une page" },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <h2 id="verdict">1. Le verdict dépend de la contrainte qui commande</h2>

        <p>
          Commencez par la contrainte que l’entreprise ne peut pas ignorer. Une
          saison dans six semaines, un cycle de vente de quatre mois et un site
          techniquement bloqué ne produisent pas le même ordre
          d’investissement. Le canal préféré du dirigeant, de l’agence ou du
          développeur ne doit pas remplacer ce diagnostic.
        </p>

        <GuideTable
          caption="Verdict SEO ou Google Ads selon la contrainte dominante"
          headers={["Contrainte dominante", "Premier choix", "Pourquoi", "Condition de validité"]}
          rows={[
            [
              "Tester une demande connue avant une échéance",
              "Google Ads Search",
              "Acheter une exposition sur des requêtes ciblées et observer la chaîne jusqu’au résultat métier",
              "page, mesure, marge et suivi commercial déjà prêts",
            ],
            [
              "Répondre à des questions récurrentes du marché",
              "SEO",
              "Construire des pages utiles que les prospects peuvent retrouver au fil du temps",
              "expertise, capacité éditoriale, socle technique et patience financière",
            ],
            [
              "Apprendre vite tout en construisant une couverture durable",
              "Hybride",
              "Donner à Ads et au SEO deux missions distinctes, puis partager les apprentissages utiles",
              "budget suffisant pour ne pas sous-financer les deux chantiers",
            ],
            [
              "Offre, conversion, donnée ou vente non maîtrisée",
              "Report ciblé",
              "Corriger le maillon qui rendrait les deux canaux illisibles",
              "responsable et date de relecture déjà nommés",
            ],
          ]}
        />

        <InfoBox variant="amber" title="L’urgence ne rend pas Google Ads rentable">
          Une urgence peut justifier un test plus rapide ; elle ne répare pas une
          offre floue, une page générique ou des appels non traités. Si la
          trésorerie exige une vente certaine à très court terme, aucun canal
          d’acquisition ne peut honnêtement fournir cette garantie.
        </InfoBox>

        <h2 id="portes">2. Ouvrez cinq portes avant de choisir le canal</h2>

        <p>
          Ces cinq portes sont non compensables. Une excellente mesure ne rend
          pas une offre désirable ; une forte demande ne transforme pas des
          contacts oubliés en ventes. Si une porte reste fermée, financez sa
          correction ou réduisez l’expérience à ce qu’elle peut réellement
          apprendre.
        </p>

        <h3>La porte de l’offre</h3>
        <p>
          Écrivez en une phrase le client, le problème, la réponse, la zone et
          la prochaine action. « Développeur web » ou « accompagnement digital »
          ne suffit pas. Un prospect doit pouvoir distinguer l’offre, son cas
          d’usage et ce qu’il obtient après le contact. Sans cela, Ads achète
          des visites ambiguës et le SEO produit des pages sans décision claire.
        </p>

        <h3>La porte de la demande</h3>
        <p>
          Listez les mots réellement employés par les prospects, mais ne
          confondez pas volume et intention commerciale. Une requête très
          recherchée peut être informative, scolaire ou trop large. Une requête
          rare peut correspondre à une mission importante. Le Planificateur de
          mots clés fournit des estimations de recherche et de coûts ; Google
          précise que les résultats réels dépendent notamment du budget, de la
          qualité, du ciblage et du comportement du marché.
        </p>

        <h3>La porte économique</h3>
        <p>
          Connaissez au minimum la marge contributive d’une vente — le chiffre
          d’affaires restant après les coûts variables directement liés à cette
          vente —, le taux de qualification des contacts, le taux de
          transformation commercial et le délai d’encaissement. Sinon, vous
          pourrez calculer un coût par clic ou par formulaire, mais pas décider
          si l’acquisition crée de la valeur. Une activité à faible marge et
          réachat nul n’accepte pas le même coût d’essai qu’un contrat récurrent.
        </p>

        <h3>La porte du parcours</h3>
        <p>
          La page atteinte doit répondre à la requête, rassurer, écarter les
          profils inadaptés et proposer une action proportionnée. Avant d’acheter
          davantage de trafic ou de multiplier les contenus, utilisez l’{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            arbre de diagnostic d’un site qui ne convertit pas
          </Link>
          . Une page qui échoue sur mobile, masque ses conditions ou demande
          trop d’informations contamine la comparaison entre canaux.
        </p>

        <h3>La porte de la mesure et de la vente</h3>
        <p>
          Décidez ce qui compte : formulaire valide, appel répondu, rendez-vous
          tenu, opportunité qualifiée, vente ou marge. Google Ads sait suivre
          plusieurs actions et importer des étapes hors ligne ; Search Console
          décrit surtout l’exposition et les clics avant l’arrivée. Votre outil
          de suivi commercial, souvent appelé CRM, doit reprendre le relais. La
          personne qui traite les demandes, le délai de rappel et les motifs de
          perte font donc partie du dispositif d’acquisition.
        </p>

        <InfoBox variant="blue" title="Le test de porte en dix minutes">
          Pour chaque porte, écrivez « ouverte », « partielle » ou « fermée »,
          puis ajoutez une preuve : phrase d’offre, liste de requêtes, marge,
          page testée, événement vérifié, historique de qualification. Une
          impression ne doit jamais remplacer une pièce observable.
        </InfoBox>

        <h2 id="ads">3. Google Ads passe d’abord quand il peut tester une demande</h2>

        <p>
          Dans une{" "}
          <a
            href="https://support.google.com/google-ads/answer/9510373?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            campagne sur le Réseau de Recherche
          </a>
          , l’entreprise peut viser des personnes qui recherchent activement un
          produit ou un service. C’est le principal intérêt d’Ads dans cet
          arbitrage : acheter une occasion d’observer une demande ciblée sans
          attendre qu’une nouvelle page gagne naturellement en visibilité.
        </p>

        <p>Ads est un premier choix défendable lorsque :</p>

        <ul>
          <li>les requêtes et la zone commerciale sont identifiables ;</li>
          <li>l’offre est disponible et sa marge permet un coût d’acquisition ;</li>
          <li>une page répond précisément à la promesse de l’annonce ;</li>
          <li>les appels, formulaires et ventes peuvent être rapprochés ;</li>
          <li>l’équipe peut rappeler et qualifier sans saturer ;</li>
          <li>un plafond, une période d’observation et un critère d’arrêt sont écrits.</li>
        </ul>

        <p>
          Google indique qu’{" "}
          <a
            href="https://support.google.com/google-ads/answer/6319?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aucune dépense minimale n’est imposée par le produit
          </a>
          . Cela ne signifie pas qu’une enveloppe quelconque produira une
          conclusion : elle doit encore permettre assez d’observations au regard
          des coûts estimés, du volume, de la zone et du cycle commercial.
        </p>

        <p>
          L’avantage n’est pas « des clients immédiats ». Une enchère a lieu à
          chaque occasion d’affichage et tient compte, entre autres, de
          l’enchère, de la pertinence, de la qualité de l’annonce et de la page,
          du contexte et de la concurrence. L’annonce peut ne pas être diffusée,
          le clic peut ne pas être qualifié et le prospect peut ne pas acheter.
        </p>

        <GuideTable
          caption="Ce que Google Ads peut tester et ce qu’il ne prouve pas seul"
          headers={["Signal Ads", "Ce qu’il permet d’observer", "Ce qu’il ne prouve pas"]}
          rows={[
            ["Impression", "l’annonce a pu être montrée dans un contexte donné", "que la personne a compris ou désiré l’offre"],
            ["Clic", "la promesse a suscité une visite", "que la visite est pertinente ou rentable"],
            ["Formulaire", "une action configurée a été déclenchée", "que le contact est unique, joignable et qualifié"],
            ["Prospect qualifié", "le besoin passe les critères commerciaux", "qu’une vente sera signée et encaissée"],
            ["Vente et marge", "la chaîne produit une valeur observée", "que le même résultat se répétera à budget supérieur"],
          ]}
        />

        <p>
          Si un compte existe déjà, ne relancez pas mécaniquement. Vérifiez la
          mesure, les requêtes achetées, les accès et la valeur commerciale avec
          notre guide{" "}
          <Link href="/guides/audit-google-ads-que-verifier">
            audit Google Ads
          </Link>
          . Un historique mal configuré peut entraîner une nouvelle campagne
          vers le mauvais objectif.
        </p>

        <h2 id="seo">4. Le SEO passe d’abord quand la réponse mérite d’exister longtemps</h2>

        <p>
          Le référencement naturel vise à aider le moteur à comprendre un
          contenu et l’utilisateur à décider s’il doit le consulter. Il devient
          prioritaire quand les prospects posent régulièrement les mêmes
          questions, comparent les mêmes options ou cherchent les mêmes services
          et que l’entreprise peut apporter une réponse plus utile que ce qui
          existe déjà.
        </p>

        <p>Le SEO est un premier choix défendable lorsque :</p>

        <ul>
          <li>la demande est récurrente et ne dépend pas d’une échéance unique ;</li>
          <li>l’entreprise possède une expertise, des preuves ou des outils réellement utiles ;</li>
          <li>le site peut être exploré, indexé, maintenu et mesuré ;</li>
          <li>l’équipe accepte que l’apprentissage commercial soit moins immédiat ;</li>
          <li>les pages pourront être mises à jour après leur publication ;</li>
          <li>la trésorerie n’exige pas que cette seule action finance le mois suivant.</li>
        </ul>

        <p>
          Le SEO n’est ni gratuit ni définitivement acquis. Il faut comprendre
          le marché, produire, intégrer, améliorer le site, mesurer et entretenir
          les contenus. Les positions restent dynamiques : demande, concurrence,
          problèmes techniques, sécurité et systèmes de classement évoluent.
          Google indique aussi dans son{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide pour débuter en SEO
          </a>{" "}
          qu’un changement peut produire un effet en quelques heures ou prendre
          plusieurs mois, et recommande généralement d’attendre quelques
          semaines avant d’en apprécier l’effet. Une amélioration peut aussi ne
          pas produire l’effet espéré.
        </p>

        <InfoBox variant="emerald" title="Le bon jalon SEO n’est pas toujours une vente">
          Pour une nouvelle page, la première preuve peut être son exploration,
          puis son indexation, des impressions sur des requêtes pertinentes, des
          clics, une action utile et enfin une opportunité commerciale. Ces
          jalons n’ont pas tous la même valeur ; ils empêchent seulement
          d’attendre six mois avant de découvrir qu’une étape élémentaire était
          bloquée.
        </InfoBox>

        <p>
          Avant de financer une longue production, vérifiez le périmètre, les
          preuves et les responsabilités attendus dans un{" "}
          <Link href="/guides/audit-seo-que-contient-il">audit SEO utile</Link>.
          Et pour lire correctement une proposition, séparez les livrables et
          le temps réellement mobilisé avec le guide{" "}
          <Link href="/guides/prix-referencement-naturel">
            prix du référencement naturel
          </Link>
          .
        </p>

        <h2 id="hybride">5. Combinez les deux seulement si chacun a un métier</h2>

        <p>
          « Faites les deux » n’est pas une stratégie. C’est parfois la manière
          la plus simple de doubler les coûts, de disperser les responsabilités
          et de ne plus savoir quel investissement a produit quoi. Un dispositif
          hybride devient cohérent lorsque chaque canal possède une mission
          différente et une décision de sortie.
        </p>

        <GuideTable
          caption="Répartition des rôles dans une stratégie SEO et Google Ads hybride"
          headers={["Mission", "Rôle possible d’Ads", "Rôle possible du SEO", "Décision commune"]}
          rows={[
            ["Tester une nouvelle offre", "exposer une promesse à une demande ciblée", "documenter les questions stables seulement après validation", "poursuivre, reformuler ou arrêter l’offre"],
            ["Couvrir une saison", "financer une fenêtre et une zone précises", "préparer les pages pérennes assez tôt", "réallouer après la saison selon les ventes"],
            ["Développer un sujet stratégique", "tester requêtes et pages sans prétendre prédire le SEO", "construire un ensemble de réponses originales", "conserver les apprentissages réellement transférables"],
            ["Défendre une acquisition existante", "mesurer les ventes supplémentaires réellement attribuables à Ads", "maintenir et enrichir les pages visibles", "réduire les doublons prouvés, pas supposés"],
          ]}
        />

        <p>
          Les données Ads peuvent révéler des formulations, des différences de
          qualification et des performances de pages. Elles ne prédisent pas
          directement le classement organique : la concurrence, le format des
          résultats et l’intention peuvent différer. Inversement, une requête
          visible dans Search Console ne prouve pas qu’une annonce y serait
          rentable.
        </p>

        <p>
          Google précise également que{" "}
          <a
            href="https://business.google.com/fr/resources/articles/seo-vs-ppc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            la publicité au paiement par clic n’améliore pas directement le
            classement naturel
          </a>
          . Les apprentissages de campagne peuvent nourrir une décision
          éditoriale ou commerciale ; ils n’achètent aucune position organique.
        </p>

        <p>
          Donnez donc à chaque canal son budget, son responsable et son tableau
          de décision. Gardez un identifiant commun dans l’outil commercial pour
          relier origine, qualification, opportunité, vente et marge. Si
          l’attribution reste incertaine, écrivez cette limite au lieu de
          répartir artificiellement cent pour cent du mérite.
        </p>

        <h2 id="matrice">6. La matrice d’arbitrage : laissez la contrainte décider</h2>

        <p>
          Remplissez cette matrice avec des faits propres à votre entreprise.
          Elle ne calcule aucun score : une seule contrainte bloquante peut
          invalider un canal, même si toutes les autres cases lui semblent
          favorables.
        </p>

        <GuideTable
          caption="Matrice de décision SEO, Google Ads, hybride ou report"
          headers={["Question", "Ads devient crédible si…", "SEO devient crédible si…", "Report si…"]}
          rows={[
            ["Quand faut-il apprendre ?", "une preuve est nécessaire avant une échéance proche", "le délai peut absorber exploration et apprentissage", "une vente certaine est exigée immédiatement"],
            ["La demande est-elle visible ?", "des requêtes ciblées et une zone peuvent être estimées", "des questions récurrentes méritent des réponses", "le problème et les mots du client restent inconnus"],
            ["L’économie tient-elle ?", "la marge et le taux de vente bornent un coût d’essai", "le coût de production et de maintien est supportable", "marge, panier, qualification ou cycle ne sont pas connus"],
            ["La page est-elle prête ?", "une destination spécifique peut être testée", "le site peut publier et faire évoluer des pages utiles", "la page est lente, ambiguë, inaccessible ou non mesurable"],
            ["La mesure suit-elle la vente ?", "les étapes peuvent remonter jusqu’au CRM", "Search Console, site et CRM peuvent être rapprochés", "le formulaire est la dernière donnée disponible"],
            ["Qui exploite ?", "une personne pilote requêtes, budget et qualité", "une personne produit, met à jour et distribue", "personne ne possède le canal après la mise en ligne"],
            ["Que se passe-t-il à l’arrêt ?", "les accès, données, pages et créations restent au client", "les contenus, accès et procédures restent exploitables", "propriété ou réversibilité sont inconnues"],
          ]}
        />

        <p>
          Une réponse « hybride » exige que les colonnes Ads et SEO soient
          simultanément crédibles, avec assez de moyens pour terminer les deux
          premières unités de travail. Deux demi-tests ne valent pas un test
          lisible. Si le budget ne permet qu’une page bien construite ou qu’une
          campagne correctement mesurée, terminez cette première expérience
          avant d’ouvrir la suivante.
        </p>

        <h2 id="preuves">7. Les 90 premiers jours : un calendrier de décisions, pas une promesse</h2>

        <p>
          Quatre-vingt-dix jours ne garantissent ni rentabilité Ads ni résultat
          SEO. Cette période sert uniquement à organiser les contrôles avant
          trois nouvelles dépenses mensuelles. Adaptez-la à la saison, au volume
          et surtout au cycle de vente : un contrat signé après quatre mois ne
          doit pas être déclaré perdu au trentième jour.
        </p>

        <GuideTable
          caption="Calendrier de preuves pour les 90 premiers jours"
          headers={["Moment", "Preuve commune", "Si Ads est financé", "Si le SEO est financé", "Décision"]}
          rows={[
            ["Avant J0", "offre, marge, page, mesure, responsable et plafond écrits", "prévision documentée, conversions testées, compte détenu par le client", "périmètre de requêtes, état technique, critères éditoriaux et accès", "ne pas lancer si une porte critique est fermée"],
            ["J1 à J30", "chaîne de données et traitement des contacts observés", "requêtes, diffusion, clics, doublons, qualification et dépenses", "exploration, indexabilité, qualité de page et premières requêtes éventuelles", "corriger une défaillance de mesure ou de destination"],
            ["J31 à J60", "signaux reliés à la qualité métier", "coût par contact unique puis qualifié, motifs de perte, capacité", "impressions pertinentes, clics utiles, comportement et retours commerciaux", "maintenir seulement les hypothèses encore défendables"],
            ["J61 à J90", "résultats compatibles avec le cycle réellement observable", "opportunités, ventes ou limite explicite liée au délai", "pages et sujets qui progressent, stagnent ou doivent être repris", "augmenter, conserver, déplacer, corriger ou arrêter"],
          ]}
        />

        <h3>Écrivez la règle avant de voir les chiffres</h3>

        <p>
          Une règle rédigée après coup se plie facilement au résultat souhaité.
          Avant le lancement, écrivez les événements qui entraînent une action :
          mesure non fiable, requêtes hors sujet, capacité commerciale saturée,
          coût supérieur à la marge admissible, page non indexable, demande
          différente de l’hypothèse ou absence de volume suffisant pour
          conclure.
        </p>

        <InfoBox variant="blue" title="Quatre décisions légitimes à chaque jalon">
          <strong>Maintenir</strong> si la preuve attendue progresse ;{" "}
          <strong>corriger</strong> si le canal est lisible mais qu’un maillon
          échoue ; <strong>réallouer</strong> si une autre hypothèse devient
          prioritaire ; <strong>arrêter</strong> si le bon résultat ne peut plus
          couvrir le coût ou si l’expérience ne répond plus à une question
          utile. « Attendre encore » doit être justifié comme les autres choix.
        </InfoBox>

        <h2 id="cout">8. Comparez le coût complet sur le même horizon</h2>

        <p>
          Comparer le budget média Ads au prix d’un article SEO n’a aucun sens.
          Comparez deux dispositifs capables de produire un résultat comparable
          sur la même période, avec les mêmes taxes et la même valorisation du
          temps interne. Toute inconnue doit rester « à confirmer », jamais zéro.
        </p>

        <GuideTable
          caption="Postes à inclure dans le coût complet SEO et Google Ads"
          headers={["Poste", "Google Ads", "SEO", "Question de contrôle"]}
          rows={[
            ["Accès à la demande", "budget média et éventuels outils", "recherche de demande et de concurrence", "quel périmètre de requêtes et de zones ?"],
            ["Production", "annonces, composants et pages de destination", "contenus, données, visuels et intégration", "qui produit, valide et possède ?"],
            ["Technique", "marquage, flux, vitesse et compatibilité des pages", "exploration, indexation, rendu, données structurées et performance", "quel socle doit être corrigé ?"],
            ["Pilotage", "requêtes, enchères, budget, tests et exclusions", "priorisation, maillage, mises à jour et distribution", "combien de temps réellement mobilisé ?"],
            ["Mesure", "consentement, conversions, imports CRM et attribution", "Search Console, analytics, événements et CRM", "quelle vente peut être rapprochée ?"],
            ["Temps interne", "qualification, vente, validation et retours", "expertise, relecture, preuves et maintenance", "quel coût d’opportunité ?"],
            ["Sortie", "export, accès, historique, pages et créations", "contenus, droits, accès, procédures et reprise", "que reste-t-il au client ?"],
          ]}
        />

        <p>
          Pour Ads, séparez toujours le média versé à la régie, les honoraires
          et les coûts annexes. Notre guide{" "}
          <Link href="/guides/prix-gestion-google-ads">
            prix de gestion Google Ads
          </Link>{" "}
          fournit la formule détaillée. Pour le SEO, distinguez audit, technique,
          production, diffusion, suivi et exploitation : un forfait mensuel ne
          révèle pas à lui seul ce qui sera réellement fait.
        </p>

        <p>
          Comparez aussi la trésorerie. Ads peut concentrer média, page et mise
          en place dès le départ. Le SEO peut lui aussi demander un socle
          technique et éditorial initial important. Un coût total acceptable
          peut rester impossible à financer si l’encaissement arrive après les
          décaissements. Le tableau de décision doit donc montrer montants et
          dates, pas seulement un total annuel.
        </p>

        <GuideTable
          caption="Canevas de trésorerie à compléter avant l’arbitrage"
          headers={["Période", "Décaissements Ads", "Décaissements SEO", "Encaissements attribuables", "Décision"]}
          rows={[
            ["Avant lancement", "page, mesure, créations, mise en place", "audit, technique, recherche, première production", "aucun encaissement traité comme certain", "lancer seulement les unités finançables"],
            ["Mois 1", "média, pilotage, qualification et corrections", "production, intégration, contrôle d’exploration", "noter vente, marge et date réelles", "corriger la chaîne avant d’augmenter"],
            ["Mois 2 à 3", "média et pilotage selon le plafond", "mise à jour, nouvelles pages ou consolidation", "séparer contact, opportunité, vente et paiement", "maintenir, déplacer ou arrêter selon la règle"],
            ["Après le test", "coût de poursuite ou d’arrêt", "coût d’exploitation et prochaines priorités", "encaissements encore différés à suivre", "réallouer avec les limites écrites"],
          ]}
        />

        <h2 id="report">9. Reporter les deux peut être la décision la plus rentable</h2>

        <p>
          Le report n’est pas l’inaction. C’est un chantier court qui retire une
          incertitude avant d’exposer davantage d’argent. Il doit avoir un
          responsable, un livrable et une date de nouvelle décision.
        </p>

        <ul>
          <li>
            <strong>Offre non prouvée :</strong> mener des entretiens, vendre
            manuellement ou tester une proposition avant d’acheter du volume.
          </li>
          <li>
            <strong>Marge inconnue :</strong> rapprocher prix, coûts variables,
            temps commercial, réachat et impayés avant de fixer un coût
            d’acquisition admissible.
          </li>
          <li>
            <strong>Page insuffisante :</strong> corriger message, preuves,
            mobile, vitesse, accessibilité et action avant d’amener plus de
            visiteurs.
          </li>
          <li>
            <strong>Mesure cassée :</strong> tester les événements, le
            consentement, les doublons et le passage dans l’outil commercial.
          </li>
          <li>
            <strong>Équipe saturée :</strong> organiser réponse, qualification,
            relance et motifs de perte avant d’augmenter les contacts.
          </li>
          <li>
            <strong>Demande trop faible ou mal connue :</strong> observer les
            clients existants, la recherche interne, les appels et les offres
            concurrentes avant une campagne ou un calendrier éditorial.
          </li>
        </ul>

        <p>
          Dépenser pour compenser une faiblesse structurelle produit souvent un
          faux diagnostic : Ads paraît trop cher, le SEO paraît inutile, alors
          que la page ou le suivi commercial détruit la valeur des deux. Nommez
          le maillon et mesurez sa correction avant de juger le canal.
        </p>

        <h2 id="decision">10. Faites tenir la décision sur une page</h2>

        <p>
          Une décision exploitable n’est pas un rapport de cinquante diapositives.
          Copiez les rubriques suivantes dans votre document de pilotage et
          remplissez-les avec les personnes qui possèdent l’offre, le site, la
          vente et la trésorerie.
        </p>

        <GuideTable
          caption="Fiche autonome de décision SEO ou Google Ads"
          headers={["Rubrique", "À écrire", "Responsable", "Preuve d’acceptation"]}
          rows={[
            ["Décision", "Ads, SEO, hybride ou report — et pourquoi maintenant", "direction", "phrase approuvée et datée"],
            ["Client et demande", "segment, besoin, requêtes, zone et exclusions", "métier / commercial", "liste issue d’entretiens ou de données identifiées"],
            ["Économie", "marge, qualification, vente, délai d’encaissement et plafond", "direction / finance", "hypothèses et sources visibles"],
            ["Première preuve", "événement qui réduit l’incertitude prioritaire", "pilote acquisition", "donnée testable et reliée au métier"],
            ["Enveloppe", "média, production, technique, mesure et temps interne", "direction", "montants, taxes, dates et inconnues"],
            ["Règle", "maintenir, corriger, déplacer ou arrêter selon quel constat", "comité nommé", "date de revue et décision consignée"],
            ["Sortie", "accès, données, contenus, créations et passation", "propriétaire désigné", "export ou restitution testée"],
          ]}
        />

        <InfoBox variant="emerald" title="Quand un cadrage externe est pertinent — et quand il ne l’est pas">
          <p className="mb-2">
            <strong>Cas adapté :</strong> l’offre et le marché sont identifiables,
            un budget doit être arbitré, les données peuvent être ouvertes et
            une personne est disponible pour expliquer qualification, ventes et
            marge.
          </p>
          <p className="mb-0">
            <strong>Cas inadapté :</strong> une vente certaine est exigée à très
            court terme, aucune page n’est exploitable, personne ne traite les
            contacts ou l’entreprise refuse de partager les informations
            nécessaires à la décision. Commencez alors par réparer ce prérequis.
          </p>
        </InfoBox>

        <p>
          Hagnéré Code propose un accompagnement en{" "}
          <Link href="/services/referencement-google">
            référencement naturel
          </Link>{" "}
          et en{" "}
          <Link href="/services/publicite-en-ligne">
            pilotage de publicité en ligne
          </Link>
          . Le cadrage doit néanmoins pouvoir conclure qu’un seul canal, une
          correction préalable ou une action interne est préférable à la vente
          des deux prestations.
        </p>

        <GuideInlineCTA
          title="Faire arbitrer le prochain budget d’acquisition"
          description="Décrivez l’offre, l’urgence, le budget, les données disponibles et le principal doute. Nous cadrons la première preuve utile et l’ordre SEO/Ads — ou nous recommandons de corriger l’offre, la page ou la mesure avant d’acheter du trafic."
          tags={[
            "Verdict SEO, Ads, hybride ou report",
            "Hypothèses visibles",
            "Aucune promesse de position ou de vente",
          ]}
          ctaLabel="Cadrer mon arbitrage SEO / Ads"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les interfaces, règles de
          diffusion, systèmes de mesure et recommandations évoluent. Les pages
          Google décrivent leurs propres produits et ne prouvent pas la
          rentabilité de votre entreprise. Les sources CNIL doivent être
          appliquées aux traceurs et traitements réels. Ce guide n’est ni une
          garantie de résultat, ni une certification juridique.
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
            : objectifs du SEO, absence de garantie et délais variables.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Créer du contenu utile et fiable
            </a>{" "}
            : priorité aux personnes, originalité et absence de nombre de mots
            préféré.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Associer les lectures Search Console et Analytics
            </a>{" "}
            : étapes et méthodes de calcul différentes.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/6366577?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Fonctionnement de la mise aux enchères
            </a>{" "}
            : enchère, qualité, contexte et concurrence.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/7337243?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Utiliser le Planificateur de mots clés
            </a>{" "}
            : volumes et prévisions à traiter comme des estimations.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/1722054?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Différentes façons de suivre les conversions
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/11459091?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              prospects qualifiés ou convertis
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/3123169?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Fenêtres de suivi des conversions
            </a>{" "}
            : adapter l’observation au cycle commercial.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Cookies et traceurs : que dit la loi ?
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              questions-réponses sur les lignes directrices
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
