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

const guide = getGuide("pourquoi-google-ads-ne-convertit-pas");

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
        alt: "Google Ads génère des clics mais peu de clients : retrouver le point de rupture",
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
      name: "Pourquoi Google Ads ne convertit pas",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Combien de clics faut-il avant de conclure que Google Ads ne fonctionne pas ?",
    answer:
      "Il n’existe pas de nombre universel. La période utile dépend du nombre habituel de demandes, du délai entre le clic et la vente et des changements récents. Avant d’attendre davantage, vérifiez surtout que l’action comptée existe vraiment et que les contacts reçus sont rapprochés des ventes.",
  },
  {
    question:
      "Faut-il augmenter le budget pour donner plus de données à Google ?",
    answer:
      "Pas tant que vous ignorez l’action que Google cherche à reproduire. S’il optimise un clic ou une demande non reçue, davantage de budget peut simplement multiplier ce mauvais résultat. Une hausse se défend lorsque la mesure, la qualification, le suivi commercial et l’économie d’une vente sont suffisamment compris.",
  },
  {
    question:
      "Google affiche des conversions, mais je ne reçois aucun contact. Que vérifier ?",
    answer:
      "Ouvrez le nom exact de l’action comptée, puis envoyez une demande test identifiable sans cliquer plusieurs fois sur vos propres annonces. Vérifiez son arrivée dans la boîte de réception, le téléphone et le logiciel commercial. Une page de remerciement ou un clic peut être compté alors que la demande n’a jamais été transmise.",
  },
  {
    question: "Le problème vient-il de la campagne ou de la page ?",
    answer:
      "Comparez la recherche tapée, la promesse de l’annonce et la réponse de la page. Si la recherche est hors sujet, corrigez le ciblage ou l’annonce. Si elle est pertinente mais que l’offre, la zone, les preuves ou la prochaine étape restent floues sur mobile, corrigez la page. Il peut aussi y avoir deux problèmes distincts.",
  },
  {
    question:
      "Beaucoup de clics sans vente signifie-t-il qu’il y a de la fraude au clic ?",
    answer:
      "Non. La fraude est une possibilité à examiner avec des éléments précis, pas une conclusion automatique. Des recherches ambiguës, une mauvaise action de conversion, une page décalée, des appels manqués ou une offre peu rentable peuvent produire le même symptôme. Commencez par documenter le premier écart observable.",
  },
  {
    question: "Quelle conversion principale faut-il choisir dans Google Ads ?",
    answer:
      "Choisissez l’action la plus proche du résultat commercial que vous pouvez transmettre de façon fiable et assez régulière : par exemple une demande arrivée dans vos outils ou un prospect qualifié selon une définition écrite. Une vente peut être préférable si le volume et le délai permettent de la relier. Le bon choix dépend donc de vos données, pas d’un réglage universel.",
  },
  {
    question:
      "Consent Mode rend-il automatiquement le suivi conforme au RGPD ?",
    answer:
      "Non. Consent Mode transmet des états de consentement aux outils Google, mais ne recueille pas lui-même le choix et ne remplace pas une bannière ou une plateforme de gestion du consentement. Les règles applicables dépendent des traceurs, de leur finalité et de leur configuration ; ce guide ne constitue pas un avis juridique.",
  },
  {
    question: "Faut-il arrêter les campagnes pendant le diagnostic ?",
    answer:
      "Cela dépend du risque. Une transmission cassée, une dépense incontrôlée ou une promesse manifestement trompeuse peut justifier une pause ou un plafond immédiat. Si la campagne produit encore des demandes utiles, un budget maîtrisé peut conserver des observations. Notez l’état initial et évitez de modifier plusieurs éléments en même temps.",
  },
];

const symptoms = [
  {
    title: "Google affiche zéro conversion",
    question: "Recevez-vous malgré tout des appels ou formulaires ?",
    decision:
      "Si oui, commencez par la mesure. Si non, vérifiez ensuite l’arrivée des demandes, les recherches payées et la page.",
    style:
      "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20",
    labelStyle: "text-blue-700 dark:text-blue-300",
  },
  {
    title: "Google affiche des conversions, mais aucun contact n’arrive",
    question:
      "Quelle action exacte est comptée et où la demande disparaît-elle ?",
    decision:
      "Testez le formulaire et le téléphone jusqu’à la boîte de réception ou au logiciel commercial.",
    style:
      "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
    labelStyle: "text-amber-700 dark:text-amber-300",
  },
  {
    title: "Les contacts arrivent, mais ils sont hors sujet",
    question: "Qu’ont-ils recherché et qu’ont-ils compris de l’annonce ?",
    decision:
      "Rapprochez les recherches visibles, la zone, la promesse, l’offre et les motifs de refus.",
    style:
      "border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/20",
    labelStyle: "text-violet-700 dark:text-violet-300",
  },
  {
    title: "Les prospects sont sérieux, mais les ventes ne suivent pas",
    question: "Qui répond, que devient le devis et quelle marge reste-t-il ?",
    decision:
      "Examinez le suivi commercial et l’économie réelle avant d’acheter davantage de clics.",
    style:
      "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
    labelStyle: "text-emerald-700 dark:text-emerald-300",
  },
];

const realitySteps = [
  ["01", "Clic payé", "Une personne ouvre la page depuis une annonce."],
  [
    "02",
    "Action comptée",
    "Google comptabilise l’action définie ; le total peut inclure une estimation quand le résultat n’est pas observé directement.",
  ],
  [
    "03",
    "Contact reçu",
    "L’appel ou le formulaire arrive bien à l’entreprise.",
  ],
  [
    "04",
    "Prospect sérieux",
    "La demande correspond à l’offre, à la zone et au besoin.",
  ],
  ["05", "Vente", "Le prospect accepte et le résultat est enregistré."],
  ["06", "Marge", "La vente conserve de la valeur après ses coûts directs."],
];

function SymptomCards() {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      {symptoms.map((symptom) => (
        <section
          key={symptom.title}
          className={"rounded-2xl border p-5 " + symptom.style}
        >
          <h3 className={"m-0 text-base font-bold " + symptom.labelStyle}>
            {symptom.title}
          </h3>
          <p className="mb-0 mt-3 text-sm font-semibold leading-relaxed text-zinc-950 dark:text-zinc-100">
            {symptom.question}
          </p>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {symptom.decision}
          </p>
        </section>
      ))}
    </div>
  );
}

function RealityChain() {
  return (
    <figure
      className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-4 sm:p-6 dark:border-zinc-800"
      aria-labelledby="reality-chain-title"
    >
      <figcaption id="reality-chain-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
          Le résultat réel à rapprocher
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Google n’observe pas seul toute la suite
        </span>
      </figcaption>
      <ol className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {realitySteps.map(([number, title, text]) => (
          <li
            key={number}
            className="rounded-xl border border-white/10 bg-white/[0.05] p-4"
          >
            <p className="m-0 text-xs font-extrabold tracking-[0.14em] text-violet-300">
              {number}
            </p>
            <p className="mb-0 mt-2 text-sm font-bold text-white">{title}</p>
            <p className="mb-0 mt-1.5 text-xs leading-relaxed text-zinc-400">
              {text}
            </p>
          </li>
        ))}
      </ol>
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
          { label: "Pourquoi Google Ads ne convertit pas" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Des clics mais peu de clients ? Distinguez quatre situations : mesure absente, contact perdu, demande hors cible ou vente non rentable. Chaque symptôme conduit à une vérification différente."
        heroAction={{
          href: "#quatre-situations",
          label: "Identifier mon premier symptôme",
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
            title: "Une conversion n’est pas encore un client",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Comparer Google au résultat réel",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Corriger un seul écart à la fois",
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
            href: "/guides/audit-google-ads-que-verifier",
            label: "Savoir ce qu’un audit Google Ads doit vérifier",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Diagnostiquer un site qui reçoit peu de demandes",
          },
          {
            href: "/guides/prix-gestion-google-ads",
            label: "Comparer le coût complet d’une gestion Google Ads",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "Choisir entre SEO, Google Ads, les deux ou attendre",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Audit et pilotage de publicité en ligne",
          },
        ]}
        faqTitle="Google Ads dépense sans produire de clients : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous payez des clics sur Google, mais que manque-t-il exactement ?
          Peut-être que Google affiche zéro conversion alors que des demandes
          arrivent. Peut-être qu’il compte des conversions que vous ne retrouvez
          pas. Peut-être encore que les contacts sont hors cible, ou que les
          bons prospects ne signent pas. Ces quatre situations n’ont ni la même
          cause ni la même correction. Dans Google Ads, une{` `}
          <a
            href="https://support.google.com/google-ads/answer/6308?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            conversion est seulement l’action que votre compte a été réglé pour
            compter
          </a>
          {` `}: ce n’est pas forcément un client. Commencez donc par comparer
          ce que Google affiche aux appels, formulaires, devis et ventes
          enregistrés dans vos outils. Puis, selon le premier écart trouvé,
          vérifiez la mesure, les recherches payées, la page ou le suivi
          commercial. Ce guide vous permet de faire ce tri vous-même, de tester
          une seule correction et de savoir quand un audit devient utile.
        </p>

        <InfoBox
          variant="blue"
          title="La décision utile : corriger le premier écart prouvé"
        >
          Ne changez pas la campagne, la page, le formulaire et le suivi
          commercial le même jour. Rapprochez d’abord ce que Google compte de ce
          que l’entreprise reçoit. Le premier écart vérifié vous indique la
          prochaine correction ; le premier « inconnu » vous indique la donnée à
          retrouver.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "quatre-situations",
              label: "Décrire précisément ce qui ne convertit pas",
            },
            {
              id: "rapprocher-reel",
              label: "Rapprocher Google de ce qui s’est passé",
            },
            {
              id: "zero-conversion",
              label: "Google affiche zéro, mais des demandes arrivent",
            },
            {
              id: "conversion-sans-contact",
              label: "Google compte, mais aucun contact n’arrive",
            },
            {
              id: "contacts-hors-cible",
              label: "Les contacts arrivent, mais ils sont hors cible",
            },
            {
              id: "prospects-sans-vente",
              label: "Les bons prospects ne deviennent pas rentables",
            },
            {
              id: "tester-correction",
              label: "Tester une seule correction à la fois",
            },
            {
              id: "audit-cible",
              label: "Savoir quand demander un audit ciblé",
            },
            { id: "sources-limites", label: "Sources et limites" },
          ]}
        />

        <h2 id="quatre-situations">
          Commencez par décrire ce qui manque, pas par accuser Google
        </h2>

        <p>
          « Google Ads ne convertit pas » peut désigner quatre problèmes très
          différents. Tant qu’ils restent mélangés, chacun propose sa solution
          préférée : plus de budget, de nouveaux mots-clés, une autre page ou un
          nouveau prestataire. Séparez-les avant de toucher au compte.
        </p>

        <SymptomCards />

        <p>
          Prenez une période cohérente avec votre manière de vendre. Si un devis
          est généralement signé après plusieurs échanges, les clics récents ne
          doivent pas être comparés uniquement aux ventes du même jour. À
          l’inverse, une transmission de formulaire cassée n’a pas besoin de
          semaines supplémentaires pour être réparée. Le calendrier sert à
          relier des événements comparables, pas à repousser une vérification
          évidente.
        </p>

        <RealityChain />

        <p>
          Ce parcours de vérification n’est pas une méthode officielle de
          Google. Il réunit simplement les informations dispersées entre la
          publicité, le site, le téléphone, le suivi commercial et la
          comptabilité. Google peut mesurer correctement la première partie tout
          en ignorant la dernière.
        </p>

        <h2 id="rapprocher-reel">
          Rassemblez les mêmes faits avant de chercher une explication
        </h2>

        <p>
          Les données vivent souvent dans cinq endroits différents. Le relevé
          suivant les réunit sans exiger un nouveau logiciel. Choisissez une
          campagne ou un objectif important et une période qui couvre votre
          délai habituel entre le clic et la décision commerciale. Chaque nombre
          doit garder sa définition et sa source.
        </p>

        <FormulaBox>{`RELEVÉ GOOGLE ADS → RÉSULTAT MÉTIER

Période observée et délai habituel avant une vente :
Campagne ou objectif :
Dépense Google Ads :
Action que Google appelle « conversion » :
Nombre affiché par Google :
Contacts reçus :
Contacts correspondant à l’offre :
Ventes dont l’origine peut raisonnablement être reliée à cette campagne :
Marge restante sur ces ventes après les coûts variables :
Autres coûts liés à la campagne (gestion, outils, page, temps interne) :

Premier chiffre absent ou contradictoire :
Élément à consulter pour le vérifier (appel, formulaire, devis, facture) :`}</FormulaBox>

        <p>
          Arrêtez-vous au premier nombre absent ou incohérent. Il n’est pas
          nécessaire que tous les outils affichent exactement le même total. Ils
          peuvent dater le résultat différemment ; un visiteur peut avoir refusé
          certains traceurs ; Google peut aussi estimer une conversion qu’il n’a
          pas observée directement. Notez chaque écart et son explication. Un «
          inconnu » clairement nommé est plus utile qu’un zéro supposé.
        </p>

        <h2 id="zero-conversion">
          Google affiche zéro conversion, mais des demandes arrivent
        </h2>

        <p>
          Dans ce premier cas, la campagne produit peut-être des contacts que la
          mesure ne voit pas. N’en concluez ni que Google Ads échoue, ni que les
          demandes viennent forcément de la publicité. Prenez une demande
          réelle, notez sa date et vérifiez si son origine peut être rapprochée
          du compte. La première correction porte sur la mesure ou sur la
          manière de relier la demande à la campagne, pas encore sur le budget.
        </p>

        <p>
          Dans la liste des actions de conversion, repérez la ou les actions
          principales incluses dans les objectifs de la campagne. Elles figurent
          normalement dans la colonne « Conversions » et, si la campagne ajuste
          ses enchères à partir des conversions, elles peuvent guider ces
          enchères — le montant proposé par Google pour diffuser l’annonce. Les
          {` `}
          <a
            href="https://support.google.com/google-ads/answer/10993988?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            actions secondaires servent surtout à l’observation, sauf
            lorsqu’elles sont incluses dans un objectif personnalisé
          </a>
          . Vérifiez ensuite ce qui déclenche chaque action utilisée pour les
          enchères. Si Google cherche ainsi à reproduire un simple clic sur «
          Envoyer », il peut multiplier ces clics sans savoir si les demandes
          arrivent dans les outils de l’entreprise.
        </p>

        <p>
          Si des contacts existent mais que Google n’en voit aucun, alignez
          d’abord l’action comptée sur un résultat que vous pouvez vérifier.
          Vous pourrez ensuite juger la campagne avec une information utile,
          sans confondre absence de mesure et absence de demande.
        </p>

        <h2 id="conversion-sans-contact">
          Google compte une conversion, mais personne ne vous a contacté
        </h2>

        <p>
          Une page de remerciement peut s’afficher alors que l’e-mail échoue. Un
          bouton d’appel peut être touché sans que l’appel parte. Un formulaire
          peut arriver dans une boîte laissée sans surveillance. Avant
          d’examiner les mots-clés, rejouez donc le parcours complet avec une
          demande de test identifiable et une heure notée.
        </p>

        <ol>
          <li>
            ouvrez la page d’arrivée dans un environnement de test ou
            directement, sans cliquer plusieurs fois sur votre propre annonce ;
          </li>
          <li>
            envoyez un formulaire avec un libellé unique, puis vérifiez le
            message affiché à l’écran ;
          </li>
          <li>
            cherchez la demande dans la boîte de réception, les indésirables et
            le CRM — le logiciel qui suit les prospects et clients ;
          </li>
          <li>
            vérifiez qui reçoit l’alerte, qui peut répondre et ce qui arrive si
            la personne habituelle est absente ;
          </li>
          <li>
            contrôlez séparément que l’action attendue remonte bien dans l’outil
            de mesure, avec la même définition.
          </li>
        </ol>

        <p>
          Pour les appels, la{` `}
          <a
            href="https://support.google.com/google-ads/answer/6100664?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Google distingue notamment le clic sur un numéro et
            l’appel suivi
          </a>
          . Une durée d’appel montre une durée, pas la pertinence de la demande.
          Comparez donc appel compté, appel reçu, motif, qualification et issue
          commerciale.
        </p>

        <p>
          Les outils peuvent aussi rattacher un résultat à des dates
          différentes. Dans ses colonnes habituelles,{` `}
          <a
            href="https://support.google.com/google-ads/answer/6270625?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads rattache la conversion à la date du clic et propose aussi
            des colonnes par date de conversion
          </a>
          . Le logiciel commercial classe généralement la demande au jour de sa
          réception. Comparez la même définition et choisissez la date adaptée
          avant de parler d’erreur.
        </p>

        <h2 id="contacts-hors-cible">
          Les demandes arrivent, mais elles ne correspondent pas à vos clients
        </h2>

        <p>
          Ici, la transmission fonctionne. Le problème se situe entre la
          recherche payée, la promesse faite et la définition d’une demande
          utile. Réunissez ces trois éléments au lieu de corriger les mots-clés,
          l’annonce et la page séparément.
        </p>

        <h3>Commencez par les recherches payées</h3>

        <p>
          Un mot-clé est une consigne donnée à Google. Le{" "}
          <strong>terme de recherche</strong> est la formulation saisie par la
          personne. Le{` `}
          <a
            href="https://support.google.com/google-ads/answer/2472708?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport des termes de recherche
          </a>
          {` `}
          permet d’en lire une partie, mais il n’est pas exhaustif : certaines
          requêtes à faible activité sont masquées ou regroupées. Utilisez ce
          qui est visible sans prétendre expliquer chaque clic.
        </p>

        <p>
          Ne déduisez pas non plus la précision du ciblage à partir du mot «
          exact ». Google indique qu’une{` `}
          <a
            href="https://support.google.com/google-ads/answer/7478529?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            correspondance exacte peut couvrir des recherches de même sens ou de
            même intention
          </a>
          . Lisez donc les formulations ayant déclenché une dépense et
          reliez-les, lorsque c’est possible, aux contacts obtenus.
        </p>

        <p>Classez les recherches visibles sans jargon :</p>

        <ul>
          <li>
            <strong>utiles :</strong> le besoin, la zone et le type de client
            correspondent à l’offre ;
          </li>
          <li>
            <strong>ambiguës :</strong> la formulation pourrait correspondre,
            mais l’annonce ou la page doit clarifier ;
          </li>
          <li>
            <strong>hors sujet :</strong> recherche d’emploi, gratuité,
            tutoriel, autre zone ou service que vous ne vendez pas ;
          </li>
          <li>
            <strong>inconnues :</strong> la plateforme montre le clic, mais
            aucune donnée ne permet encore de le relier à un contact.
          </li>
        </ul>

        <p>
          Une exclusion peut être justifiée pour une recherche clairement hors
          cible. Une recherche ambiguë demande plus de prudence : elle peut
          révéler un problème de formulation de l’offre plutôt qu’un simple mot
          à bloquer. Conservez la recherche, la décision et son motif pour
          pouvoir revenir en arrière.
        </p>

        <h3>
          Lisez la recherche, l’annonce et la page comme une seule conversation
        </h3>

        <p>
          Une personne clique parce que l’annonce lui promet une réponse. Sur la
          page, elle doit retrouver cette réponse sans deviner ce que
          l’entreprise vend. Faites le test sur un téléphone, avec une recherche
          observée : lisez d’abord l’annonce, puis la partie visible de la page
          et essayez l’action proposée.
        </p>

        <p>
          En haut de la page, la personne doit retrouver le service recherché,
          le client concerné, la zone couverte, la limite principale et ce qui
          se passera après son contact.
        </p>

        <p>
          Si la recherche est bonne mais que la page présente une autre
          prestation, corrigez cette rupture précise avant de commander une
          refonte. Si le site reçoit aussi des visites depuis d’autres sources
          sans demandes, le guide sur les{` `}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            raisons pour lesquelles un site ne convertit pas
          </Link>
          {` `}
          élargit le diagnostic au-delà de Google Ads.
        </p>

        <h3>Écrivez ce qu’est un prospect sérieux pour votre entreprise</h3>

        <p>
          Écrivez ce qu’est une demande sérieuse pour votre entreprise : type de
          client, besoin traité, zone et critères indispensables. Pour chaque
          demande refusée, notez un seul motif clair. Vous verrez ainsi si les
          contacts hors cible viennent surtout des recherches payées, de la
          promesse, de la page ou du formulaire.
        </p>

        <p>
          Si les demandes existent déjà mais restent souvent hors zone, hors
          service ou destinées à un autre type de client, le guide consacré aux{" "}
          <Link href="/guides/leads-google-ads-non-qualifies">
            contacts Google Ads non qualifiés
          </Link>{" "}
          vous aide à classer toute une période et à choisir une seule
          correction mesurable.
        </p>

        <p>
          Google propose des catégories telles que{` `}
          <a
            href="https://support.google.com/google-ads/answer/11459091?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            « prospect qualifié » et « prospect converti »
          </a>
          , alimentées depuis votre outil de suivi commercial. Elles n’ont de
          sens que si votre définition est stable et si l’issue est enregistrée
          correctement. Elles ne prouvent pas la marge d’une vente.
        </p>

        <h2 id="prospects-sans-vente">
          Les bons prospects arrivent, mais aucune vente rentable n’en sort
        </h2>

        <h3>
          La campagne ne peut pas rappeler un prospect à la place de votre
          équipe
        </h3>

        <p>
          Une demande utile peut être perdue après son arrivée : appel manqué,
          message sans responsable, réponse générique, devis jamais relancé ou
          indisponibilité non expliquée. Google Ads continuera pourtant à
          compter l’action initiale. Le compte publicitaire ne peut pas
          diagnostiquer seul cette partie.
        </p>

        <p>
          Pour chaque contact sur une période choisie, notez l’heure d’arrivée,
          le premier traitement, le responsable, le besoin, la prochaine action
          et l’issue connue. Ne fixez pas un délai « idéal » copié d’une moyenne
          publiée ailleurs : mesurez votre délai réel et vérifiez s’il
          correspond à ce que votre promesse laisse attendre. Si vous n’avez pas
          de CRM, un tableau partagé peut suffire pour commencer, à condition
          que chacun utilise les mêmes définitions.
        </p>

        <p>
          Comparez aussi les demandes gagnées et perdues. Une répétition de «
          trop cher » peut révéler une mauvaise attente créée par l’annonce, une
          valeur mal expliquée ou un prix inadapté. Une répétition de « jamais
          rappelé » ne demande pas un nouveau mot-clé. Le motif doit conduire à
          une correction que l’entreprise peut nommer.
        </p>

        <h3>
          Une vente attribuée à Google Ads n’est rentable qu’après les coûts
        </h3>

        <p>
          Le chiffre d’affaires attribué à la publicité est utile, mais il ne
          suffit pas à décider. Google rappelle que le{` `}
          <a
            href="https://support.google.com/google-ads/answer/14090?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            retour sur investissement dépend du bénéfice et des coûts
          </a>
          . Le{` `}
          <a
            href="https://support.google.com/google-ads/answer/13405059?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ROAS correspond à la valeur de conversion attribuée divisée par la
            dépense publicitaire
          </a>
          . Si la valeur transmise est le chiffre d’affaires, il ne retire ni le
          coût de production, ni les honoraires, ni les outils, ni le temps
          commercial. Si vous transmettez une marge, il reflète cette marge
          selon vos règles, sans prouver à lui seul la rentabilité complète.
        </p>

        <p>
          Utilisez la marge contributive si elle est disponible : le chiffre
          d’affaires d’une vente moins les coûts variables directement
          nécessaires pour la réaliser. Puis comparez cette marge au coût
          complet de l’acquisition pour les mêmes ventes et sur la même période.
        </p>

        <FormulaBox>{`Marge attribuable aux ventes Google Ads
− dépenses publicitaires
− honoraires de gestion et outils dédiés
− coût de la page ou des créations affecté à la période
− temps interne directement mobilisé
= contribution estimée de l’acquisition

Si une donnée manque : écrivez « inconnu » au lieu de la remplacer par zéro.`}</FormulaBox>

        <p>
          Ce calcul ne rend pas certain le rattachement d’une vente à la
          campagne. Il rend seulement visibles les hypothèses. Selon le
          résultat, l’entreprise peut maintenir la dépense, la limiter, corriger
          un écart ou arrêter une campagne qui ne crée pas assez de valeur. Une
          vente sans marge n’est pas sauvée par un joli tableau de bord.
        </p>

        <h2 id="tester-correction">
          Changez un seul élément pour savoir ce qui a fonctionné
        </h2>

        <p>
          Reprenez le premier écart du relevé commun et transformez-le en test.
          Une correction n’a pas besoin d’être spectaculaire ; elle doit être
          reliée à une observation, confiée à une personne et réversible si le
          résultat se dégrade.
        </p>

        <FormulaBox>{`FICHE DE TEST

Constat observé :
Explication supposée :
Correction principale :
Personne responsable :
Éléments laissés stables :
Résultat attendu :
Date de décision compatible avec le délai de vente :
Condition d’arrêt ou de retour arrière :`}</FormulaBox>

        <p>
          Formulez ensuite une hypothèse et une seule correction principale.
          Notez ce qui doit changer, ce qui doit rester stable, la période
          d’observation et la condition de retour arrière. Une urgence manifeste
          — formulaire cassé, mauvaise destination ou dépense sans plafond — se
          corrige sans attendre. Pour les autres cas, changer plusieurs éléments
          à la fois vous empêcherait de savoir lequel a produit le résultat.
        </p>

        <h2 id="audit-cible">
          Demandez un audit si vos chiffres se contredisent ou si personne ne
          voit tout le parcours
        </h2>

        <p>
          Vous pouvez corriger en interne si le premier écart est clair, si une
          personne maîtrise les accès nécessaires et si le test reste
          réversible. Un regard extérieur devient utile lorsque Google, le site,
          le téléphone, le suivi commercial et les ventes racontent des
          histoires différentes, ou lorsque les réglages qui pilotent la
          diffusion ne sont pas documentés.
        </p>

        <p>
          Le livrable ne devrait pas être une liste de recommandations
          génériques. Demandez :
        </p>

        <ul>
          <li>le premier écart observé et la preuve qui le montre ;</li>
          <li>
            les informations encore inconnues et la manière de les obtenir ;
          </li>
          <li>
            la correction prioritaire, la personne responsable et le risque
            associé ;
          </li>
          <li>
            un test mesurable avec une condition d’arrêt ou de retour arrière ;
          </li>
          <li>
            une conclusion pouvant être « ne pas augmenter le budget » ou « ne
            pas confier la gestion mensuelle pour l’instant ».
          </li>
        </ul>

        <p>
          Si plusieurs écarts apparaissent, le guide sur{` `}
          <Link href="/guides/audit-google-ads-que-verifier">
            ce qu’un audit Google Ads complet doit vérifier
          </Link>
          {` `}
          précise les accès, les preuves et les décisions à exiger avant une
          hausse de budget.
        </p>

        <InfoBox
          variant="amber"
          title="Trois problèmes demandent un autre premier interlocuteur"
        >
          Si vous contestez une facture, commencez par le support et la
          procédure de contestation de Google, puis faites vérifier votre
          contrat si nécessaire. Si vous pensez qu’un compte ou un accès a été
          piraté, contactez d’abord un spécialiste de cybersécurité. Si votre
          question porte sur le RGPD ou une autre obligation juridique, demandez
          conseil à un juriste. Un audit de performance commerciale ne remplace
          aucun de ces travaux.
        </InfoBox>

        <GuideInlineCTA
          title="Retrouvez où vos clics cessent de produire des clients"
          description="Indiquez la période, la dépense, l’action comptée, le nombre de contacts reçus et l’issue commerciale connue. Vous obtenez une première lecture du point de rupture, des preuves manquantes et du test suivant — sans promesse de prospects ni demande de mot de passe dans le formulaire."
          tags={[
            "Premier écart nommé",
            "Preuves manquantes listées",
            "Option de ne pas investir",
          ]}
          ctaLabel="Décrire le blocage observé"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources-limites">Sources et limites de ce diagnostic</h2>

        <p>
          Les définitions et limites techniques de ce guide ont été vérifiées le
          21 juillet 2026 dans les documentations officielles Google Ads et
          Google Tag Platform, ainsi que dans les ressources de la CNIL. Les
          liens décisifs sont placés au niveau des affirmations qu’ils
          soutiennent. La suite « clic → action comptée → contact reçu →
          prospect sérieux → vente → marge » est notre synthèse de diagnostic ;
          Google ne la présente pas comme un parcours officiel universel.
        </p>

        <p>
          La mesure n’est jamais une copie parfaite du réel. Les{` `}
          <a
            href="https://support.google.com/google-ads/answer/9888656?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            conversions améliorées utilisent des coordonnées fournies
            directement par le visiteur puis transformées par hachage
          </a>
          . La{` `}
          <a
            href="https://www.cnil.fr/fr/identifier-les-donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL distingue la pseudonymisation de l’anonymisation
          </a>
          {` `}: une donnée hachée peut rester une donnée personnelle selon le
          traitement et les possibilités de rapprochement. Le{` `}
          <a
            href="https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consent Mode transmet des états et peut permettre de la modélisation
          </a>
          , mais il ne recueille pas lui-même le consentement. En mode de base,
          les balises concernées restent bloquées avant la décision ; en mode
          avancé, des mesures sans cookie peuvent être envoyées lorsque le
          consentement est refusé. Une conversion modélisée n’est pas une
          conversion directement observée.
        </p>

        <p>
          En France, la{` `}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle le principe du consentement préalable pour les
            traceurs non essentiels
          </a>
          , avec des exemptions limitées selon la finalité et la configuration.
          Ce guide ne certifie donc ni l’exhaustivité du rattachement des
          ventes, ni la conformité juridique, ni un niveau futur de ventes. Il
          fournit un ordre de vérification pour prendre une décision mieux
          documentée.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
