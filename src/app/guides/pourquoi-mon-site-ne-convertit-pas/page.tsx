import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { formatGuideDate, getGuide, guidePath, guideUrl } from "@/lib/guides";

const guide = getGuide("pourquoi-mon-site-ne-convertit-pas");

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
  headline: guide.cardTitle,
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
    knowsAbout: [
      "Taux de conversion",
      "Mesure d'audience",
      "Consentement et RGPD",
      "Acquisition de clients",
      "Refonte de site internet",
      "Statistiques web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_URL + "/logos/logo-dark.png",
    },
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
      name: "Pourquoi mon site ne convertit pas",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "J'ai des visiteurs, mais presque aucune demande. Par où commencer ?",
    answer:
      "Commencez par compter tous les contacts réellement apportés par le site pendant un mois : formulaires, appels, emails directs et prises de rendez-vous. Vérifiez ensuite les recherches qui attirent ces visiteurs, puis seulement la clarté des pages. Cet ordre évite de refaire un site alors que le problème vient de la mesure ou du trafic.",
  },
  {
    question: "Quel est un bon taux de conversion pour mon activité ?",
    answer:
      "Il n'existe pas de taux universel suffisamment fiable pour décider à votre place. Une demande de devis, un achat et un appel ne représentent pas la même chose, et les outils ne comptent pas tous les visiteurs. Suivez surtout votre propre nombre de contacts qualifiés et de clients signés dans le temps.",
  },
  {
    question: "Mon site doit-il afficher ses prix ?",
    answer:
      "Affichez au moins un ordre de grandeur lorsque vos prix peuvent être expliqués honnêtement. Cela rassure les bons prospects et écarte certains contacts incompatibles avec votre budget minimum. Si chaque projet est différent, expliquez plutôt ce qui fait varier le prix et donnez deux ou trois exemples de prestations.",
  },
  {
    question: "Faut-il raccourcir le formulaire ?",
    answer:
      "Oui si les visiteurs abandonnent avant de vous contacter et si vous manquez de demandes. Non si votre équipe reçoit déjà trop de contacts hors cible. Demandez uniquement les informations nécessaires au premier échange et dites clairement ce qui se passe après l'envoi.",
  },
  {
    question: "Une refonte complète améliore-t-elle forcément les ventes ?",
    answer:
      "Non. Une refonte peut corriger un site illisible sur mobile, lent, confus ou techniquement fragile, mais elle ne crée ni demande de marché ni suivi commercial. Avant de signer, exigez que chaque problème observé soit relié à un correctif précis.",
  },
  {
    question: "Quand demander un audit extérieur ?",
    answer:
      "Demandez un regard extérieur lorsque vous ne savez pas si la perte se situe dans la mesure, l'acquisition, les pages ou le traitement commercial. L'audit doit vous laisser une liste priorisée de corrections, y compris s'il conclut qu'une refonte n'est pas nécessaire.",
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
          { label: "Pourquoi mon site ne convertit pas" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez des visites, mais trop peu d'appels ou de demandes de devis ? Ce guide vous aide à repérer où les clients se perdent, à corriger d'abord ce qui compte et à savoir si votre site doit vraiment être refait."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Compter les vrais contacts",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Trouver l'étape qui bloque",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Corriger avant de refaire",
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
            href: "/guides/pourquoi-mon-site-est-lent",
            label: "Pourquoi mon site est lent",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte",
          },
          {
            href: "/guides/prix-referencement-naturel",
            label: "Prix du référencement",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          { href: "/services/audit-technique", label: "Audit technique" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Site et conversion : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Votre site reçoit des visiteurs, mais votre téléphone sonne peu et les
          demandes de devis restent rares. La tentation est immédiate : changer
          le design, acheter plus de publicité ou refaire tout le site.
          <strong> Ne commencez pas par la solution.</strong> Commencez par
          trouver l&apos;endroit précis où un futur client s&apos;arrête.
        </p>

        <p>
          Dans ce guide, « convertir » signifie obtenir une action utile pour
          votre entreprise : un appel sérieux, une demande de devis, une
          réservation ou une vente. Vous allez vérifier, dans l&apos;ordre, si
          ces actions sont bien comptées, si les bonnes personnes arrivent sur
          le site, si elles comprennent votre offre et si votre équipe les
          rappelle correctement.
        </p>

        <InfoBox variant="blue" title="La réponse courte">
          Un site qui génère peu de demandes n&apos;est pas forcément un mauvais
          site. Le problème peut venir d&apos;un trafic peu qualifié, d&apos;une
          offre difficile à comprendre, d&apos;un manque de confiance ou du
          traitement des contacts après l&apos;envoi. Une refonte n&apos;est
          utile que si elle corrige l&apos;une de ces causes de manière
          identifiable.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "Ce qu'il faut vérifier en premier",
            },
            {
              id: "definition",
              label: "Ce qu'une conversion représente pour votre entreprise",
            },
            {
              id: "chiffre-faux",
              label:
                "Pourquoi vos statistiques ne racontent pas toute l'histoire",
            },
            {
              id: "compter",
              label: "Compter les appels, emails et demandes",
            },
            {
              id: "volume",
              label: "Lire de petits volumes sans se tromper",
            },
            {
              id: "chiffres-opposes",
              label: "Se méfier des moyennes toutes faites",
            },
            {
              id: "arbre",
              label: "Localiser l'endroit où les prospects se perdent",
            },
            {
              id: "trafic",
              label: "Attirez-vous des acheteurs ou seulement des curieux ?",
            },
            {
              id: "page",
              label: "Une page qui aide vraiment à décider",
            },
            {
              id: "confiance",
              label: "Donner assez de raisons de vous faire confiance",
            },
            {
              id: "apres-formulaire",
              label: "Ce qui se passe après la demande",
            },
            {
              id: "pas-le-site",
              label: "Quand le site n'est pas le vrai problème",
            },
            {
              id: "ne-pas-refaire",
              label: "Quand une refonte serait prématurée",
            },
            {
              id: "prix-correctifs",
              label: "Choisir le correctif proportionné",
            },
            {
              id: "methode",
              label: "Décider quoi faire maintenant",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="reponse-rapide">
          Commencez par identifier l&apos;endroit où les clients se perdent
        </h2>
        <p>
          Imaginez le parcours comme une suite de questions très simples. Des
          personnes recherchent-elles réellement votre service ? Les bons
          visiteurs trouvent-ils votre site ? Comprennent-ils ce que vous
          proposez ? Ont-ils envie de vous contacter ? Et, une fois le contact
          reçu, quelqu&apos;un répond-il assez vite pour poursuivre la
          discussion ?
        </p>
        <GuideTable
          caption="Les premières vérifications avant d'engager des travaux"
          headers={[
            "Ce que vous observez",
            "Question à poser",
            "Première action",
          ]}
          rows={[
            [
              "Peu de visites",
              "Êtes-vous visible sur les recherches de vos futurs clients ?",
              "Travailler l'acquisition avant la refonte.",
            ],
            [
              "Des visites, peu de contacts",
              "L'offre et la prochaine action sont-elles évidentes ?",
              "Relire les pages principales sur téléphone.",
            ],
            [
              "Des contacts, peu de ventes",
              "Les demandes sont-elles rappelées et suivies ?",
              "Auditer le traitement commercial.",
            ],
          ]}
        />
        <p>
          Ce premier tri n&apos;est pas parfait, mais il empêche déjà de
          confondre trois métiers différents : faire venir des personnes,
          convaincre celles qui sont là et transformer une demande en client.
        </p>

        <h2 id="definition">
          Une conversion doit correspondre à quelque chose d&apos;utile
        </h2>
        <p>
          Un clic sur un bouton n&apos;est pas encore un client. Choisissez une
          définition adaptée à votre activité. Pour un artisan, ce peut être un
          appel lié à un chantier réalisable dans sa zone. Pour un cabinet, une
          prise de rendez-vous répondant à ses critères. Pour un commerce en
          ligne, une commande payée.
        </p>
        <FormulaBox>
          Taux de conversion = actions utiles / visites observées × 100
        </FormulaBox>
        <p>
          Cette formule aide à suivre une évolution, mais elle ne vaut que si
          les deux éléments sont définis de la même façon d&apos;un mois à
          l&apos;autre. Notez donc noir sur blanc ce que vous comptez comme
          contact utile. Cela évite qu&apos;une équipe compte les formulaires,
          tandis qu&apos;une autre ajoute les appels et les rendez-vous.
        </p>

        <h2 id="chiffre-faux">
          Vos statistiques ne racontent qu&apos;une partie de l&apos;histoire
        </h2>
        <p>
          Un outil de mesure voit les événements qu&apos;on lui a demandé de
          suivre. Il peut manquer les appels, les emails tapés directement, les
          visites en magasin ou les personnes qui refusent certains traceurs. À
          l&apos;inverse, un formulaire envoyé deux fois ou un appel très court
          peut être compté comme deux réussites alors qu&apos;aucun projet
          sérieux n&apos;existe.
        </p>
        <p>
          Google explique que certaines données manquantes peuvent être
          modélisées seulement lorsque des conditions d&apos;éligibilité sont
          réunies ; cette modélisation ne transforme pas un petit tableau de
          bord en vérité exhaustive. La CNIL rappelle en parallèle que la mesure
          d&apos;audience et les traceurs doivent respecter des conditions
          précises. En pratique, utilisez les statistiques pour comprendre une
          tendance, puis rapprochez-les des appels, emails et ventes réellement
          observés.
        </p>
        <InfoBox
          variant="amber"
          title="Un pourcentage précis peut donner une fausse assurance"
        >
          Si votre outil affiche 1,2 %, ne concluez pas immédiatement que votre
          site est bon ou mauvais. Demandez d&apos;abord : 1,2 % de quoi, mesuré
          comment, et avec quels contacts absents du calcul ?
        </InfoBox>

        <h3 id="compter">
          Pendant un mois, comptez tout ce qui arrive réellement
        </h3>
        <p>
          Vous n&apos;avez pas besoin d&apos;un logiciel complexe pour
          commencer. Ajoutez une ligne à chaque demande avec la date, le canal,
          le besoin, la zone géographique, la suite donnée et l&apos;issue
          connue. Demandez aussi au téléphone : « Comment nous avez-vous trouvés
          ? » La réponse restera imparfaite, mais elle sera plus utile
          qu&apos;un tableau de bord qui ignore la moitié de votre activité.
        </p>
        <GuideTable
          caption="Un suivi simple des contacts"
          headers={["À noter", "Exemple de valeur", "Pourquoi c'est utile"]}
          rows={[
            [
              "Origine",
              "Google, publicité, recommandation, inconnu",
              "Savoir ce qui apporte les demandes.",
            ],
            [
              "Qualité",
              "Dans la cible, hors zone, budget incompatible",
              "Distinguer le volume de la pertinence.",
            ],
            [
              "Suite",
              "Rappelé, rendez-vous, devis, refus",
              "Voir où la relation s'arrête.",
            ],
          ]}
        />
        <p>
          <strong>Exemple fictif, construit pour expliquer la mesure.</strong>{" "}
          Ce cas ne décrit ni un client ni un témoignage réel. Une entreprise ne
          suivait que ses formulaires, alors que ses prospects préféraient
          appeler. Après avoir ajouté les appels au même tableau, elle n&apos;a
          pas « amélioré son taux » : elle a simplement obtenu une vision plus
          honnête de ce qui se passait déjà.
        </p>

        <h3 id="volume">
          Avec peu de demandes, regardez les faits avant les pourcentages
        </h3>
        <p>
          Lorsque vous recevez quelques contacts par mois, un écart de deux
          demandes peut faire monter ou baisser fortement un pourcentage. Cela
          ne prouve pas qu&apos;une nouvelle couleur, un bouton ou un texte a
          changé le comportement du marché.
        </p>
        <p>
          Comparez des périodes suffisamment longues pour couvrir votre cycle de
          vente et notez en parallèle les changements importants : campagne
          lancée, saison, rupture de stock, congés, hausse de prix ou problème
          téléphonique. Les tests statistiques entre deux versions deviennent
          vite peu concluants sur de petits volumes. Dans ce cas, les échanges
          avec les prospects, les abandons observés et les questions récurrentes
          sont souvent plus instructifs.
        </p>

        <h3 id="chiffres-opposes">
          Une moyenne du marché ne décide pas si votre site fonctionne
        </h3>
        <p>
          Les taux moyens publiés en ligne mélangent souvent des secteurs, des
          pays, des appareils et des définitions différentes. La FEVAD publie
          des données de référence sur le commerce en ligne, mais cela ne donne
          pas un objectif universel pour une PME de services. Le baromètre
          France Num décrit les usages numériques des TPE et PME ; il ne peut
          pas prédire votre nombre de devis.
        </p>
        <p>
          Une comparaison devient utile seulement si vous connaissez au minimum
          l&apos;action comptée, le type de visiteur, la période, la source du
          trafic et le mode de collecte. Sans ces informations, préférez votre
          propre évolution : contacts qualifiés, rendez-vous, devis et clients
          signés.
        </p>

        <h2 id="arbre">
          Posez les questions dans l&apos;ordre du parcours réel
        </h2>
        <GuideTable
          caption="Diagnostic du premier problème observable"
          headers={["Question", "Si la réponse est non", "Travail prioritaire"]}
          rows={[
            [
              "La demande existe-t-elle dans votre zone ?",
              "Peu de recherches ou marché trop étroit",
              "Revoir l'offre ou la zone visée.",
            ],
            [
              "Les bonnes personnes arrivent-elles ?",
              "Visites surtout informatives ou hors cible",
              "Corriger SEO et campagnes.",
            ],
            [
              "Comprennent-elles l'offre en quelques secondes ?",
              "Promesse vague, services mélangés",
              "Réécrire les pages principales.",
            ],
            [
              "Ont-elles assez confiance pour agir ?",
              "Peu de preuves, identité floue, risque perçu",
              "Renforcer les éléments vérifiables.",
            ],
            [
              "La prise de contact est-elle simple ?",
              "Formulaire confus ou action cachée",
              "Simplifier le parcours.",
            ],
            [
              "Les demandes sont-elles bien traitées ?",
              "Réponse tardive ou absence de relance",
              "Corriger l'organisation commerciale.",
            ],
          ]}
        />

        <h2 id="trafic">
          Vérifiez si vous attirez des acheteurs ou seulement des curieux
        </h2>
        <p>
          Ouvrez les requêtes qui amènent des visiteurs depuis Google Search
          Console et les termes de recherche de vos campagnes. Une personne qui
          cherche « comment entretenir une terrasse » ne se trouve pas au même
          moment qu&apos;une personne qui cherche « entreprise terrasse bois
          Chambéry devis ». Les deux visites peuvent être utiles, mais elles ne
          doivent pas être jugées avec la même attente.
        </p>
        <p>
          Si le trafic est surtout informatif, ne refaites pas tout le site.
          Créez ou améliorez les pages qui répondent aux besoins commerciaux :
          service précis, zone couverte, ordre de prix, délai, exemples et
          prochaine étape. Notre guide sur le{" "}
          <Link href="/guides/prix-referencement-naturel">
            prix du référencement naturel
          </Link>{" "}
          explique comment relier ce travail à un objectif commercial.
        </p>

        <h2 id="page">
          Une bonne page aide le lecteur à savoir s&apos;il doit vous appeler
        </h2>
        <p>
          Sur téléphone, lisez uniquement le haut de votre page comme si vous
          découvriez l&apos;entreprise. Pouvez-vous répondre à ces questions :
          que propose-t-elle, pour qui, dans quelle zone, à partir de quel ordre
          de grandeur et que se passe-t-il si je la contacte ?
        </p>
        <GuideTable
          caption="Les informations attendues sur une page de service"
          headers={["Information", "Question du lecteur", "Réponse utile"]}
          rows={[
            [
              "Service",
              "Est-ce exactement ce dont j'ai besoin ?",
              "Un service précis et ses limites.",
            ],
            [
              "Client concerné",
              "Travaillez-vous avec une entreprise comme la mienne ?",
              "Profils servis et cas non couverts.",
            ],
            [
              "Prix et délai",
              "Puis-je avancer sans perdre mon temps ?",
              "Ordre de grandeur ou facteurs de variation.",
            ],
            [
              "Prochaine étape",
              "Que va-t-il se passer après mon message ?",
              "Un échange concret, sans promesse irréaliste.",
            ],
          ]}
        />
        <p>
          Une page peut être belle et rester inutile si elle parle surtout de
          l&apos;entreprise, de sa passion ou de sa technologie. Le lecteur
          cherche d&apos;abord à reconnaître son problème et à comprendre ce
          qu&apos;il peut obtenir.
        </p>

        <h2 id="confiance">
          Donnez des raisons vérifiables de vous faire confiance
        </h2>
        <p>
          La confiance ne vient pas d&apos;une accumulation de slogans. Elle
          vient d&apos;informations que le prospect peut contrôler : identité de
          l&apos;entreprise, coordonnées, personnes qui interviendront,
          réalisations expliquées avec leur contexte, avis attribuables,
          conditions, garanties applicables et limites de la prestation.
        </p>
        <p>
          Les obligations juridiques dépendent de votre activité. Si votre site
          collecte, modère ou diffuse des avis de consommateurs, l’article
          L111-7-2 du code de la consommation prévoit des informations précises
          sur leur contrôle et leur publication. Pour certains artisans,
          l’article L132-1 du code de l’artisanat impose plutôt des mentions
          d’assurance sur les devis et factures : ce n’est pas une obligation
          générale d’affichage sur tous les sites. Ces deux exemples ne
          remplacent pas une vérification adaptée. Sur le plan commercial, une
          phrase simple comme « voici ce qui est inclus, ce qui ne l&apos;est
          pas et la prochaine étape » rassure davantage qu&apos;un badge
          générique.
        </p>

        <h2 id="apres-formulaire">
          Une demande perdue après l&apos;envoi reste une vente perdue
        </h2>
        <p>
          Testez vous-même le parcours : envoyez le formulaire depuis un
          téléphone, vérifiez le message de confirmation, la réception interne
          et la personne chargée de rappeler. Le prospect doit savoir si son
          message est parti et quand il peut raisonnablement attendre un
          contact.
        </p>
        <p>
          Une ancienne étude américaine publiée par Harvard Business Review
          suggérait déjà qu&apos;un suivi rapide améliorait les chances de
          qualifier un contact. Son contexte et son âge interdisent d&apos;en
          faire une promesse chiffrée pour votre entreprise. Le principe
          opérationnel reste simple : définissez un responsable, un délai
          réaliste et une relance, puis mesurez ce qui est effectivement tenu.
        </p>

        <h2 id="pas-le-site">Parfois, le problème commence après le site</h2>
        <GuideTable
          caption="Situations où la priorité n'est probablement pas une refonte"
          headers={[
            "Ce que vous voyez",
            "Cause possible",
            "Vérification utile",
          ]}
          rows={[
            [
              "Beaucoup de demandes, peu de devis",
              "Contacts hors cible ou qualification insuffisante",
              "Relire les demandes refusées.",
            ],
            [
              "Des devis, peu de signatures",
              "Prix, délai, relance ou proposition difficile à lire",
              "Interroger quelques prospects perdus.",
            ],
            [
              "Des demandes dans une mauvaise zone",
              "Ciblage SEO ou publicitaire trop large",
              "Contrôler requêtes et zones.",
            ],
            [
              "Une forte saisonnalité",
              "Baisse normale de la demande",
              "Comparer la même période d'une année à l'autre.",
            ],
          ]}
        />

        <h2 id="ne-pas-refaire">
          Une refonte est prématurée tant que la cause reste inconnue
        </h2>
        <p>
          Ne signez pas une reconstruction complète si vous ne comptez pas les
          appels, si le trafic est surtout hors cible, si les demandes restent
          sans réponse ou si personne ne sait expliquer ce qui bloque sur les
          pages actuelles. Dans ces cas, la refonte change le support sans
          corriger le problème.
        </p>
        <p>
          Une refonte devient plus crédible lorsque le site est difficile à
          utiliser sur mobile, lent malgré des corrections raisonnables,
          impossible à mettre à jour, techniquement non maintenu ou incapable de
          présenter clairement une offre devenue différente. Comparez alors le
          coût du maintien avec le{" "}
          <Link href="/guides/prix-refonte-site-internet">
            prix d&apos;une refonte de site
          </Link>
          . Si vous avancez, prévoyez aussi la{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">
            conservation du référencement lors de la refonte
          </Link>
          .
        </p>

        <h2 id="prix-correctifs">
          Achetez le plus petit correctif capable de résoudre le problème
        </h2>
        <GuideTable
          caption="Ordre de décision pour les correctifs"
          headers={[
            "Besoin constaté",
            "Correctif possible",
            "Comment le chiffrer",
          ]}
          rows={[
            [
              "Contacts mal comptés",
              "Plan de marquage et tableau de suivi",
              "Temps d'installation, contrôle et formation.",
            ],
            [
              "Pages difficiles à comprendre",
              "Réécriture ciblée des pages les plus vues",
              "Nombre de pages, entretiens et validation.",
            ],
            [
              "Site lent",
              "Audit puis corrections techniques",
              "Diagnostic séparé des travaux.",
            ],
            [
              "Site devenu impossible à maintenir",
              "Refonte partielle ou complète",
              "Migration, contenus, SEO et maintenance inclus.",
            ],
          ]}
        />
        <p>
          Les prix dépendent du nombre de pages, de la technologie et de
          l&apos;état de l&apos;existant. Demandez donc deux lignes distinctes :
          le coût du diagnostic et le coût de chaque correction recommandée.
          Notre guide sur le{" "}
          <Link href="/guides/prix-site-vitrine">
            prix d&apos;un site vitrine
          </Link>{" "}
          aide à comparer les périmètres, pas seulement les montants.
        </p>

        <h2 id="methode">
          Décidez de votre prochaine action à partir d&apos;une cause observée
        </h2>
        <p>
          À la fin de votre analyse, vous devez pouvoir écrire une phrase
          concrète : « Nous perdons surtout des personnes parce que… ». Si vous
          ne pouvez pas terminer cette phrase, continuez à observer avant
          d&apos;acheter.
        </p>
        <ul>
          <li>
            Si les bonnes personnes ne viennent pas, travaillez le référencement
            ou les campagnes.
          </li>
          <li>
            Si elles viennent mais ne comprennent pas, corrigez les pages
            principales.
          </li>
          <li>
            Si elles hésitent, ajoutez des informations vérifiables et réduisez
            le risque perçu.
          </li>
          <li>
            Si elles vous contactent mais ne signent pas, regardez le suivi
            commercial, le prix et la proposition.
          </li>
          <li>
            Si plusieurs problèmes structurels se cumulent, étudiez une refonte
            avec des objectifs mesurables.
          </li>
        </ul>

        <GuideInlineCTA
          title="Vous ne savez pas encore où les demandes se perdent ?"
          description="Montrez-nous vos pages, vos sources de trafic et la façon dont les contacts sont traités. Nous vous dirons ce qui mérite d'être corrigé en premier, y compris si une refonte n'est pas nécessaire."
          tags={[
            "Diagnostic expliqué",
            "Priorités concrètes",
            "Refonte non systématique",
          ]}
          ctaLabel="Faire examiner mon parcours"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>
        <p>
          Les sources suivantes éclairent la mesure, la confiance et le contexte
          numérique. Elles ne fournissent pas un taux de conversion applicable
          automatiquement à votre entreprise.
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/analytics/answer/11161109"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics, conditions de la modélisation comportementale
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL, solutions et conditions pour la mesure d&apos;audience
            </a>
            .
          </li>
          <li>
            <a
              href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harvard Business Review, étude américaine ancienne sur le suivi
              des contacts
            </a>
            . Elle est citée comme repère historique, pas comme résultat
            transposable.
          </li>
          <li>
            <a
              href="https://www.fevad.com/chiffres-cles-ecommerce-2026/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FEVAD, chiffres clés du commerce électronique
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/barometre-france-num"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num, baromètre de la transformation numérique des TPE et
              PME
            </a>
            .
          </li>
          <li>
            Références juridiques consultées sur Légifrance :{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049571119"
              target="_blank"
              rel="noopener noreferrer"
            >
              article L111-7-2 du code de la consommation sur les avis en ligne
            </a>{" "}
            et{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047362294/"
              target="_blank"
              rel="noopener noreferrer"
            >
              article L132-1 du code de l’artisanat sur l’assurance mentionnée
              dans certains devis et factures
            </a>
            . Vérifiez les obligations propres à votre activité et à votre
            clientèle.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
