import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("choisir-son-agence-web");

// --- METADATA SEO (title/description/dates depuis src/lib/guides.ts) ---
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
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
    // og:image générée par opengraph-image.tsx (convention Next.js).
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

// --- JSON-LD SCHEMAS (constantes statiques uniquement) ---
const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    knowsAbout: [
      "Développement web",
      "Achat de prestation digitale",
      "Contrats de prestation",
      "Propriété du code source",
      "Core Web Vitals",
      "SEO technique",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Choisir son agence web",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Comment reconnaître une bonne agence web ?",
    answer:
      "Elle cherche d'abord à comprendre l'entreprise, explique ce qu'elle recommande et ce qu'elle écarte, montre des réalisations en ligne, donne des contacts clients avec leur accord et remet une proposition lisible. Elle sait aussi dire quand une solution simple suffit.",
  },
  {
    question: "Quelles réalisations faut-il demander ?",
    answer:
      "Demandez deux ou trois sites récents proches de votre besoin ou de votre niveau de complexité. Ouvrez-les sur téléphone, testez le parcours principal et demandez quel travail l'agence a réellement réalisé : stratégie, design, textes, développement ou maintenance.",
  },
  {
    question: "Faut-il appeler les anciens clients de l'agence ?",
    answer:
      "Oui, avec leur accord. Demandez si le budget et le calendrier ont changé, qui pilotait le projet, comment les désaccords ont été traités et si l'agence répond encore après la mise en ligne. Un retour nuancé est plus utile qu'un témoignage parfait.",
  },
  {
    question: "Comment comparer deux agences web ?",
    answer:
      "Envoyez exactement la même demande et comparez le résultat proposé, les pages, les fonctions, les contenus, les tests, le calendrier, l'équipe, la maintenance et ce qui reste à votre charge. Le montant final n'est comparable qu'après cet alignement.",
  },
  {
    question: "Agence ou freelance : que choisir ?",
    answer:
      "Un bon freelance convient à un projet clair si vous pouvez piloter et si une solution de remplacement est prévue. Une agence convient lorsque plusieurs compétences et un pilotage régulier sont nécessaires. La qualité de l'équipe compte davantage que son statut.",
  },
  {
    question: "Faut-il choisir une agence proche de chez soi ?",
    answer:
      "La proximité facilite parfois les ateliers et la connaissance du marché local, mais elle ne garantit ni la compétence ni la disponibilité. Utilisez-la comme critère de départage après avoir vérifié la méthode, les réalisations, l'équipe et le contrat.",
  },
  {
    question: "Serai-je propriétaire de mon site ?",
    answer:
      "Pas automatiquement. Le contrat doit préciser les droits transmis sur le code, le design et les contenus. Le nom de domaine, l'hébergement, les outils de mesure et les comptes importants doivent être ouverts ou transférés au nom de l'entreprise.",
  },
  {
    question: "Qu'est-ce que la réversibilité ?",
    answer:
      "C'est la possibilité de changer de prestataire sans perdre le site ni les données. Le contrat doit prévoir la remise du code, des accès, des données dans un format utilisable, de la documentation et, si nécessaire, une aide limitée au passage de relais.",
  },
  {
    question: "Un site par abonnement est-il forcément mauvais ?",
    answer:
      "Non. Un abonnement peut être pertinent si la durée, le coût total, les services inclus et les conditions de sortie sont clairs. Soyez particulièrement attentif lorsqu'un organisme financier distinct encaisse plusieurs années de loyers, même si le prestataire ne livre plus.",
  },
  {
    question: "Que faire si l'agence ne livre pas ?",
    answer:
      "Rassemblez le devis, le contrat, les échanges et les livraisons, puis écrivez précisément ce qui manque et fixez un délai raisonnable. Une mise en demeure et le Médiateur des entreprises peuvent être envisagés. Pour un litige important, demandez un conseil juridique adapté.",
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
          { label: "Choisir son agence web" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous comparez plusieurs agences web ? Vérifiez leurs questions, leurs réalisations, l’équipe prévue, le contenu du devis, les coûts après la mise en ligne et votre liberté de changer de prestataire."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Des réalisations et clients vérifiables",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Un devis compréhensible et complet",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Comptes et sortie prévus dès le contrat",
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
            href: "/guides/agence-web-ou-freelance",
            label: "Agence web ou freelance ?",
          },
          {
            href: "/ressources/kit-cahier-des-charges-site-internet",
            label: "Modèle de cahier des charges",
          },
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          { href: "/guides/tjm-developpeur-web", label: "TJM développeur web" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/realisations", label: "Nos réalisations" },
        ]}
        faqTitle="Choisir son agence web : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous cherchez une agence pour créer ou refaire votre site et plusieurs
          propositions se ressemblent. Commencez par cinq choses simples :{" "}
          <strong>
            la qualité des questions, des réalisations vérifiables, une équipe
            clairement identifiée, un devis compréhensible et la possibilité de
            changer de prestataire
          </strong>
          .
        </p>
        <p>
          Vous n&apos;avez pas besoin de savoir coder pour faire ces
          vérifications. Une bonne agence doit expliquer ses choix dans vos
          mots, relier chaque dépense à un besoin et savoir proposer une
          solution plus simple lorsqu&apos;elle suffit. Ce guide vous aide à
          préparer les rendez-vous, comparer les réponses et lire le contrat
          avant de signer.
        </p>

        <InfoBox
          variant="blue"
          title="Ce guide s'applique aussi à Hagnéré Code"
        >
          Nous sommes une agence web et avons donc un intérêt commercial
          évident. Appliquez-nous exactement les mêmes critères : demandez des
          réalisations, vérifiez l&apos;entreprise, questionnez le travail
          réellement effectué et lisez nos propositions ligne par ligne. Une
          règle qui ne supporterait pas ce test n&apos;a pas sa place ici.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Les cinq qualités à rechercher",
            },
            {
              id: "besoin",
              label:
                "2. Préparer une demande qui laisse place à une solution simple",
            },
            { id: "realisations", label: "3. Vérifier le travail déjà livré" },
            {
              id: "rendez-vous",
              label: "4. Évaluer la qualité du premier échange",
            },
            {
              id: "propositions",
              label: "5. Comparer les propositions et les prix",
            },
            {
              id: "equipe",
              label: "6. Choisir l'équipe et le mode de collaboration",
            },
            {
              id: "contrat",
              label:
                "7. Protéger les comptes, les droits et le passage de relais",
            },
            {
              id: "abonnements",
              label: "8. Comprendre les abonnements avant de signer",
            },
            {
              id: "decision",
              label: "9. Prendre une décision sans précipitation",
            },
            {
              id: "auditez-nous",
              label: "10. Nous appliquer les mêmes vérifications",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Les cinq qualités à rechercher</h2>
        <GuideTable
          headers={["Qualité", "Ce que vous observez", "Preuve simple"]}
          rows={[
            [
              "Écoute",
              "L'agence reformule votre activité et vos priorités avant de proposer",
              "Un compte rendu ou une proposition fidèle au rendez-vous",
            ],
            [
              "Clarté",
              "Elle explique les choix, les limites et les coûts récurrents",
              "Un devis qu'une personne non technique peut résumer",
            ],
            [
              "Expérience",
              "Elle montre des projets en ligne et précise son rôle",
              "Deux ou trois références vérifiables",
            ],
            [
              "Organisation",
              "Vous savez qui décide, réalise, teste et répond après la livraison",
              "Des noms, des étapes et des délais",
            ],
            [
              "Indépendance",
              "Les comptes et les actifs restent accessibles à l'entreprise",
              "Des clauses de remise et de passage de relais",
            ],
          ]}
        />
        <p>
          Aucun critère ne suffit seul. Un site techniquement rapide ne prouve
          pas que l&apos;agence comprend votre marché. Une présentation
          brillante ne prouve pas qu&apos;elle livrera. Cherchez une cohérence
          entre le discours, les personnes, les réalisations et le document que
          vous signerez.
        </p>
        <p>
          Vérifiez aussi l&apos;existence de l&apos;entreprise dans{" "}
          <a
            href="https://annuaire-entreprises.data.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            l&apos;Annuaire des Entreprises
          </a>{" "}
          : identité, dirigeants, ancienneté et situation connue. Cette étape
          confirme à qui vous confiez l&apos;acompte ; elle ne permet pas, à
          elle seule, de juger la qualité du travail.
        </p>

        <h2 id="besoin">
          2. Préparer une demande qui laisse place à une solution simple
        </h2>
        <p>
          Décrivez le problème avant la solution. « Nous avons besoin d&apos;un
          site Next.js de vingt pages » enferme déjà la réponse. « Nos prospects
          ne comprennent pas nos trois offres et demandent rarement un
          rendez-vous depuis leur téléphone » permet à l&apos;agence de proposer
          ce qui est réellement utile.
        </p>
        <p>
          Envoyez à chaque candidat la même synthèse : activité, clients,
          objectif du site, pages indispensables, contenus disponibles,
          fonctions attendues, outils à connecter, budget, date et personne qui
          validera. Notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>{" "}
          vous aide à le faire sans vocabulaire technique.
        </p>
        <InfoBox
          variant="emerald"
          title="Une petite réponse peut être la bonne"
        >
          Pour une activité qui a seulement besoin d&apos;être trouvée, comprise
          et contactée, quelques pages bien écrites peuvent suffire. Demandez à
          l&apos;agence ce qu&apos;elle retirerait si le budget devait baisser
          de 30 %. Sa réponse montre si elle sait protéger l&apos;essentiel.
        </InfoBox>

        <h2 id="realisations">3. Vérifier le travail déjà livré</h2>
        <p>
          Demandez deux ou trois réalisations récentes et proches de votre
          besoin. L&apos;agence doit préciser ce qu&apos;elle a réellement fait
          : stratégie, maquettes, textes, développement, migration ou
          maintenance. Un site affiché dans un portfolio peut avoir été
          seulement hébergé ou légèrement modifié.
        </p>
        <ol>
          <li>
            Ouvrez chaque site sur votre téléphone et réalisez l&apos;action
            principale : trouver une offre, envoyer une demande ou acheter.
          </li>
          <li>
            Vérifiez que les textes sont lisibles, que les boutons fonctionnent
            et que les pages importantes s&apos;affichent correctement.
          </li>
          <li>
            Utilisez PageSpeed Insights de Google comme indice technique, pas
            comme note globale de l&apos;agence. Regardez surtout les problèmes
            répétés sur plusieurs sites.
          </li>
          <li>Demandez un contact client avec son accord et appelez-le.</li>
        </ol>
        <GuideTable
          headers={[
            "Question au client",
            "Ce que vous apprenez",
            "Réponse utile",
          ]}
          rows={[
            [
              "Qu'est-ce qui a changé entre le devis et la livraison ?",
              "Qualité de l'estimation et gestion des changements",
              "Un exemple précis, même imparfait",
            ],
            [
              "Qui pilotait et répondait chaque semaine ?",
              "Réalité de l'équipe présentée",
              "Une personne identifiable et disponible",
            ],
            [
              "Comment se passe l'après-lancement ?",
              "Maintenance et continuité",
              "Délais et responsabilités concrets",
            ],
          ]}
        />

        <h2 id="rendez-vous">4. Évaluer la qualité du premier échange</h2>
        <p>
          Le premier rendez-vous ne doit pas être un cours de technologie. Une
          agence sérieuse cherche d&apos;abord à comprendre les clients, le mode
          de vente, les contenus, les outils existants et la façon dont le
          résultat sera mesuré.
        </p>
        <ul>
          <li>
            Qu&apos;avez-vous compris de notre activité et de notre priorité ?
          </li>
          <li>Quelle solution plus simple avez-vous envisagée ?</li>
          <li>Quelles informations vous manquent avant de donner un prix ?</li>
          <li>Quel est le risque principal de ce projet ?</li>
          <li>Qui travaillera réellement avec nous ?</li>
          <li>Que devrons-nous fournir et valider ?</li>
          <li>Que se passe-t-il après la mise en ligne ?</li>
        </ul>
        <p>
          Les bonnes réponses contiennent des hypothèses et des limites. « Nous
          confirmerons après avoir vu les données » peut être plus professionnel
          qu&apos;une certitude immédiate. En revanche, chaque inconnue doit
          ensuite recevoir une méthode, un responsable et un moment de décision.
        </p>

        <h2 id="propositions">5. Comparer les propositions et les prix</h2>
        <p>
          Deux montants ne sont comparables que s&apos;ils couvrent le même
          travail. Faites compléter les lignes manquantes avant de classer les
          agences.
        </p>
        <GuideTable
          headers={[
            "À comparer",
            "Ce qui doit être écrit",
            "Question en cas d'écart",
          ]}
          rows={[
            [
              "Résultat",
              "Pages, fonctions et contenus livrés",
              "Que manquerait-il pour atteindre l'objectif ?",
            ],
            [
              "Travail",
              "Préparation, design, réalisation, tests et mise en ligne",
              "Qui prend en charge l'étape absente ?",
            ],
            [
              "Après-lancement",
              "Garantie, hébergement, maintenance et assistance",
              "Quel est le coût d'une année normale ?",
            ],
            [
              "Conditions",
              "Calendrier, paiements, changements et responsabilités",
              "Quel événement peut modifier le prix ?",
            ],
          ]}
        />
        <p>
          Un acompte peut financer le démarrage du projet. Plutôt qu&apos;un
          pourcentage présenté comme universel, regardez l&apos;équilibre de
          l&apos;échéancier : chaque paiement important doit correspondre à une
          étape ou à un élément que vous pouvez constater. Vérifiez aussi ce qui
          se passe si l&apos;entreprise tarde à fournir un contenu ou si le
          besoin change.
        </p>

        <h2 id="equipe">
          6. Choisir l&apos;équipe et le mode de collaboration
        </h2>
        <p>
          Une agence réunit généralement plusieurs compétences et organise la
          continuité. Un indépendant peut offrir une relation plus directe et un
          coût de structure plus faible. Une équipe distante peut très bien
          travailler si les échanges, les horaires et les responsabilités sont
          clairs. Aucun statut ne garantit le résultat.
        </p>
        <GuideTable
          headers={[
            "Votre situation",
            "Option à étudier",
            "Condition de réussite",
          ]}
          rows={[
            [
              "Projet clair et responsable interne disponible",
              "Freelance ou petite agence",
              "Un remplaçant et une documentation sont prévus",
            ],
            [
              "Design, contenus, développement et pilotage à réunir",
              "Agence pluridisciplinaire",
              "Les personnes réellement affectées sont identifiées",
            ],
            [
              "Marché très local",
              "Prestataire local ou distant",
              "Il comprend la clientèle et les concurrents, preuves à l'appui",
            ],
          ]}
        />
        <p>
          La proximité facilite un atelier en personne, mais ne remplace pas les
          vérifications. La taille ne remplace pas non plus la disponibilité :
          demandez qui sera votre interlocuteur, combien de projets il pilote et
          qui répond pendant ses absences.
        </p>

        <h2 id="contrat">
          7. Protéger les comptes, les droits et le passage de relais
        </h2>
        <p>
          Avant de signer, vérifiez que le nom de domaine, l&apos;hébergement,
          les outils de mesure et les comptes essentiels sont ouverts au nom de
          votre entreprise ou peuvent lui être transférés sans condition
          imprévue.
        </p>
        <p>
          Payer une création ne transfère pas automatiquement tous les droits.
          Le contrat doit identifier les éléments concernés et les droits
          transmis, conformément au cadre applicable. La{" "}
          <strong>réversibilité</strong> signifie simplement que vous pourrez
          changer de prestataire : code, données, accès, documentation et
          configurations vous sont remis dans un délai défini.
        </p>
        <ul>
          <li>ce qui sera livré et ce qui restera à votre charge ;</li>
          <li>les étapes de vérification avant acceptation ;</li>
          <li>les corrections couvertes par la garantie ;</li>
          <li>la maintenance et les délais d&apos;intervention ;</li>
          <li>la propriété ou les droits d&apos;usage sur chaque création ;</li>
          <li>
            la remise des comptes, du code et des données en cas de départ.
          </li>
        </ul>
        <p>
          Pour une clause sensible ou un investissement important, faites relire
          le contrat par un professionnel du droit. Ce guide aide à poser les
          questions ; il ne remplace pas un conseil juridique.
        </p>

        <h2 id="abonnements">8. Comprendre les abonnements avant de signer</h2>
        <p>
          Un abonnement n&apos;est pas mauvais par nature. Il peut regrouper
          hébergement, maintenance, assistance et améliorations. Comparez son
          coût sur toute la durée, les services inclus, la hausse possible, les
          conditions de résiliation et ce que vous récupérez en partant.
        </p>
        <p>
          Soyez particulièrement attentif lorsque deux contrats sont présentés :
          l&apos;un avec l&apos;agence et l&apos;autre avec un organisme
          financier qui encaisse les loyers. Vous pourriez devoir payer ce
          second organisme même si la relation avec le prestataire se dégrade.
          Ne signez pas tant que la durée, le coût total et le lien entre les
          contrats ne sont pas compris.
        </p>
        <InfoBox
          variant="amber"
          title="Pourquoi ce point mérite une vraie lecture"
        >
          Un coût mensuel peut sembler simple alors que deux entreprises, deux
          contrats et un engagement long interviennent. Demandez le coût total,
          le bénéficiaire de chaque paiement et les conséquences d’une rupture
          avec l’agence avant de signer avec l’organisme financier.
        </InfoBox>

        <h2 id="decision">9. Prendre une décision sans précipitation</h2>
        <ol>
          <li>Envoyez la même demande à deux ou trois prestataires adaptés.</li>
          <li>
            Assistez aux échanges avec la personne qui validera le projet.
          </li>
          <li>
            Vérifiez les réalisations, l&apos;entreprise et un contact client.
          </li>
          <li>Faites compléter les propositions avant de comparer les prix.</li>
          <li>Lisez les comptes, les droits, la maintenance et la sortie.</li>
          <li>Demandez une version corrigée du document avant de signer.</li>
        </ol>
        <p>
          Prenez le temps nécessaire pour comprendre la proposition, sans
          transformer la sélection en procédure de plusieurs mois pour un petit
          site. Une semaine de vérifications peut suffire lorsque la demande est
          claire et les interlocuteurs disponibles. L&apos;important est de ne
          pas signer sous une urgence commerciale que votre entreprise n&apos;a
          pas.
        </p>
        <p>
          Si un désaccord existe déjà, rassemblez les documents et formulez par
          écrit ce qui manque. Le Médiateur des entreprises propose un
          dispositif public. Une mise en demeure ou une action judiciaire doit
          être adaptée au contrat et à l&apos;enjeu ; demandez un avis juridique
          lorsque la situation le nécessite.
        </p>

        <h2 id="auditez-nous">10. Nous appliquer les mêmes vérifications</h2>
        <p>
          Vous pouvez consulter nos{" "}
          <Link href="/realisations">réalisations</Link>, vérifier Hagnéré Code
          dans les registres publics, tester ce site sur téléphone et demander
          qui travaillera sur votre projet. Dans notre proposition, cherchez les
          pages et fonctions, les responsabilités, le calendrier, les coûts
          après lancement, les comptes, les droits et les conditions de sortie.
        </p>
        <p>
          Notre réponse peut aussi être qu&apos;un site plus simple, une
          correction de l&apos;existant ou un autre prestataire convient mieux.
          Cette conclusion doit arriver avant la signature, pas après le premier
          acompte.
        </p>

        <GuideInlineCTA
          title="Vous voulez comparer une proposition ou nous demander la nôtre ?"
          description="Préparez votre objectif, les pages indispensables, le budget, la date et le devis déjà reçu s'il existe. Nous vous répondrons sur les questions encore ouvertes et sur la solution la plus simple qui peut réellement servir votre entreprise."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Consultées en juillet 2026 :{" "}
          <a
            href="https://annuaire-entreprises.data.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Annuaire des Entreprises, service public
          </a>{" "}
          ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            Légifrance, article L131-3 du Code de la propriété intellectuelle
          </a>{" "}
          ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/juri/id/JURITEXT000027424507/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cour de cassation, chambre mixte, 17 mai 2013 (interdépendance des
            contrats)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.economie.gouv.fr/mediateur-des-entreprises"
            target="_blank"
            rel="noopener noreferrer"
          >
            Médiateur des entreprises
          </a>
          .
        </p>
        <p className="text-sm">
          Cet article est rédigé par une agence web : le conflit d&apos;intérêt
          est déclaré en tête de guide, et la section 10 donne la méthode pour
          nous appliquer nos propres critères. Cet article ne constitue pas un
          conseil juridique personnalisé : pour un litige en cours, consultez un
          avocat.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
