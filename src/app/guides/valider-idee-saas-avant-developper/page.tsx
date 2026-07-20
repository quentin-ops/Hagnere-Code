import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guidePath, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("valider-idee-saas-avant-developper");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    images: [
      {
        url: `${guideUrl(guide)}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Valider une idée SaaS en vérifiant cinq risques avant de développer",
      },
    ],
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [`${guideUrl(guide)}/opengraph-image`],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
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
      name: "Valider une idée SaaS avant de développer",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Combien de personnes faut-il interroger pour valider une idée SaaS ?",
    answer:
      "Il n'existe pas de nombre universel. Définissez d'abord un segment homogène et les critères qui rendent un entretien éligible. Quelques échanges précis peuvent révéler un mauvais problème ; davantage d'entretiens ne transformeront toutefois jamais des opinions en preuve d'achat. Poursuivez jusqu'à pouvoir décider du prochain test, documentez les contradictions et renforcez les paroles par une action observable.",
  },
  {
    question: "Faut-il construire un MVP pour valider une idée SaaS ?",
    answer:
      "Pas nécessairement. Un entretien factuel, l'observation d'un processus, un prototype cliquable, un service rendu manuellement ou une offre pilote peuvent tester le problème, le parcours et l'achat sans produit complet. Le MVP devient pertinent lorsque l'incertitude restante porte sur l'usage réel, la répétition ou la rétention et qu'aucun test plus léger ne peut y répondre.",
  },
  {
    question:
      "Une liste d'attente suffit-elle à prouver qu'il existe un marché ?",
    answer:
      "Non. Elle mesure l'intérêt pour une promesse auprès d'un trafic donné, avec un coût d'engagement très faible. Conservez la source du trafic, le profil des visiteurs, la formulation et l'action demandée. Une introduction au décideur, un jeu de données fourni, un pilote signé ou un paiement apportent une preuve plus forte, sans prouver encore l'usage durable.",
  },
  {
    question: "Comment tester la volonté de payer sans produit terminé ?",
    answer:
      "Commencez par documenter ce que le prospect dépense déjà en argent, temps, erreurs ou manque à gagner. Présentez ensuite une offre pilote précise : résultat, périmètre, prix, responsabilités, calendrier et sortie si le test échoue. Une lettre d'intention ou un pilote payé vaut davantage qu'un oui hypothétique, mais sa portée dépend de son signataire et de ses conditions.",
  },
  {
    question: "Comment protéger son idée pendant les entretiens ?",
    answer:
      "L'INPI rappelle qu'une idée ou un concept ne se protège pas en tant que tel. Parlez d'abord du problème et des pratiques, divulguez progressivement ce qui est nécessaire, datez les matérialisations utiles et envisagez un accord de confidentialité pour un véritable secret technique ou commercial. Une e-Soleau constitue une preuve datée, pas un titre de propriété industrielle.",
  },
  {
    question: "Que faire si les résultats de validation sont négatifs ?",
    answer:
      "Séparez ce qui a échoué. Un problème réel avec le mauvais acheteur appelle un pivot de cible ; une promesse incomprise appelle un autre test ; un risque technique encore inconnu appelle une preuve de faisabilité. Si personne ne rencontre récemment le problème, ne tente rien pour le résoudre et n'accepte aucun engagement proportionné, arrêter ou mettre en attente protège votre budget.",
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
          { label: "Valider une idée SaaS avant de développer" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Avant de financer un SaaS — un logiciel fourni en ligne — puis son MVP, la première version conçue pour apprendre en usage réel, vérifiez séparément le problème, l'acheteur, l'accès aux prospects, leur engagement et la faisabilité."
        heroAction={{
          href: "#journal",
          label: "Accéder au journal de validation",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Publié le ${formatGuideDate(guide.datePublished)}`}
        keyPoints={[
          {
            number: "01",
            title: "5 risques à prouver séparément",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Tests utiles sans développer",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Développer, pivoter ou arrêter",
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
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Définir le périmètre du premier MVP",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Combien coûte un SaaS ?",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d'une application métier",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement de SaaS",
          },
          { href: "/methode", label: "Notre méthode de projet" },
        ]}
        faqTitle="Valider un SaaS : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Une idée SaaS n&apos;est pas validée parce que dix personnes la
            trouvent bonne.
          </strong>{" "}
          Elle devient assez solide pour le prochain investissement lorsque cinq
          risques disposent chacun d&apos;une preuve adaptée : un problème
          récent, un acheteur identifiable, un accès répétable au marché, un
          engagement qui coûte quelque chose au prospect et une solution
          réalisable à une économie crédible. Si l&apos;un manque, le prochain
          travail n&apos;est pas « ajouter des écrans » : c&apos;est concevoir
          le test qui réduit précisément cette incertitude.
        </p>

        <InfoBox
          variant="blue"
          title="La réponse courte : la porte à cinq verrous"
        >
          <ol className="mb-0 mt-2 space-y-1.5 pl-5">
            <li>
              <strong>Problème :</strong> la cible l&apos;a réellement
              rencontré, avec une conséquence observable.
            </li>
            <li>
              <strong>Acheteur :</strong> vous savez qui utilise, qui décide,
              qui paie et qui peut bloquer.
            </li>
            <li>
              <strong>Accès :</strong> vous savez atteindre d&apos;autres
              comptes comparables sans dépendre de trois amis.
            </li>
            <li>
              <strong>Engagement :</strong> certains prospects donnent du temps,
              des données, une introduction, leur réputation ou de
              l&apos;argent.
            </li>
            <li>
              <strong>Faisabilité :</strong> les données, intégrations,
              contraintes et coûts permettent de tenir la promesse.
            </li>
          </ol>
        </InfoBox>

        <p>
          « Validée » signifie donc{" "}
          <strong>assez prouvée pour une décision donnée</strong>, jamais
          certaine pour toujours. Un pilote payé peut autoriser une petite
          version ; il ne prouve pas encore que les clients resteront abonnés.
          Cette nuance évite deux erreurs symétriques : coder sur un compliment,
          ou attendre une certitude que le marché ne donnera jamais.
        </p>

        <GuideToc
          items={[
            { id: "cinq-risques", label: "1. Les cinq risques à valider" },
            { id: "preuves", label: "2. La hiérarchie des preuves" },
            { id: "journal", label: "3. Le journal et les seuils de décision" },
            {
              id: "entretiens",
              label: "4. Des entretiens qui ne fabriquent pas le oui",
            },
            { id: "sans-coder", label: "5. Tester sans développer le SaaS" },
            {
              id: "acheteur-acces",
              label: "6. Trouver l'acheteur et éprouver l'accès au marché",
            },
            { id: "faisabilite", label: "7. Vérifier faisabilité et économie" },
            { id: "exemple", label: "8. Exemple illustratif fictif complet" },
            {
              id: "confidentialite",
              label: "9. Confidentialité, données et prospection",
            },
            {
              id: "decision",
              label: "10. Développer, pivoter, tester ou arrêter",
            },
            { id: "sources", label: "Sources originales consultées" },
          ]}
        />

        <h2 id="cinq-risques">
          1. Validez cinq risques, pas « l&apos;idée » en bloc
        </h2>

        <p>
          « Les PME paieront pour automatiser leurs relances » mélange au moins
          cinq hypothèses. Peut-être que le problème existe mais que la personne
          interrogée ne tient pas le budget. Peut-être que l&apos;acheteur
          paierait, mais qu&apos;aucun canal ne permet de le joindre à un coût
          acceptable. Peut-être enfin que la promesse exige une donnée que le
          logiciel tiers ne permet pas d&apos;extraire. Un oui global masque ces
          désaccords.
        </p>

        <GuideTable
          headers={[
            "Risque",
            "Question précise",
            "Preuve utile avant développement",
          ]}
          rows={[
            [
              "Problème",
              "Quand la situation s'est-elle produite et qu'a-t-elle coûté ?",
              "Épisode récent, étapes actuelles, contournement, temps ou dépense déjà engagés",
            ],
            [
              "Acheteur",
              "Qui peut autoriser le budget et selon quel processus ?",
              "Introduction au décideur, ligne budgétaire, critères d'achat et veto identifiés",
            ],
            [
              "Accès",
              "Pouvez-vous retrouver d'autres comptes semblables ?",
              "Liste qualifiée, canal testé et réponses attribuables à une source",
            ],
            [
              "Engagement",
              "Que consent le prospect pour obtenir le résultat ?",
              "Temps mobilisé, données préparées, sponsor nommé, pilote ou paiement",
            ],
            [
              "Faisabilité",
              "La promesse tient-elle avec les données, règles et coûts réels ?",
              "Test ciblé d'intégration, coût unitaire, risque de sécurité et alternative documentés",
            ],
          ]}
        />

        <p>
          Cette séparation reprend la logique du développement par la clientèle
          de{" "}
          <a
            href="https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steve Blank
          </a>{" "}
          : dans une vente entre entreprises (B2B), l&apos;utilisateur, le
          prescripteur, l&apos;acheteur et le décideur peuvent être des
          personnes différentes. Son exemple de Lean LaunchPad montre aussi
          qu&apos;un segment supposé peut être abandonné après confrontation au
          terrain. La bonne sortie d&apos;un test n&apos;est donc pas toujours
          de construire ; un segment plus précis est déjà un résultat
          exploitable.
        </p>

        <h2 id="preuves">
          2. Classez les preuves du compliment à l&apos;usage payé
        </h2>

        <p>
          Toutes les données ne répondent pas avec la même force.{" "}
          <a
            href="https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strategyzer distingue
          </a>{" "}
          les indices issus de ce que les personnes <em>disent</em>
          de ceux issus de ce qu&apos;elles <em>font</em>, puis regarde ce
          qu&apos;elles investissent dans l&apos;action. Cette hiérarchie ne
          donne pas une probabilité de succès ; elle empêche seulement de
          compter une « très bonne idée » comme une commande.
        </p>

        <GuideTable
          headers={["Niveau", "Signal", "Ce qu'il permet — et sa limite"]}
          rows={[
            [
              "0 — Conviction",
              "Votre expérience, une étude générale, un concurrent visible",
              "Forme une hypothèse ; ne prouve rien sur votre cible, votre offre ou votre accès",
            ],
            [
              "1 — Opinion",
              "Compliment, sondage, intention déclarée",
              "Aide à explorer le vocabulaire ; coûte peu au répondant et prédit mal l'achat",
            ],
            [
              "2 — Fait passé",
              "Incident récent, solution actuelle, temps ou argent déjà dépensés",
              "Prouve que le problème existe pour cette personne ; pas qu'elle achètera votre solution",
            ],
            [
              "3 — Action légère",
              "Second rendez-vous, introduction, retour spontané, données anonymisées préparées",
              "Montre un intérêt actif ; reste réversible et souvent non commercial",
            ],
            [
              "4 — Engagement coûteux",
              "Sponsor mobilisé, atelier avec décideur, lettre précise, pilote payé",
              "Renforce la preuve d'achat ; dépend du signataire, des conditions et du périmètre",
            ],
            [
              "5 — Comportement réel",
              "Usage répété, paiement, renouvellement ou extension",
              "Preuve la plus forte sur le produit observé ; n'autorise pas une généralisation sans contexte",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Une preuve forte dans le mauvais segment reste une mauvaise preuve"
        >
          Un ami paie peut-être pour vous encourager. Un grand groupe signe une
          lettre sans budget disponible. Une campagne attire des curieux hors
          cible. Pour chaque résultat, conservez donc le profil, la source, le
          contexte, l&apos;action exacte et son coût pour la personne. Cherchez
          ensuite une preuve d&apos;une autre nature : entretien + observation,
          page + introduction, pilote + usage.
        </InfoBox>

        <h2 id="journal">3. Écrivez le seuil avant le résultat</h2>

        <p>
          La{" "}
          <a
            href="https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Card de Strategyzer
          </a>{" "}
          impose quatre éléments : ce qui doit être vrai, la manière de le
          tester, ce qui sera mesuré et le seuil qui signifiera réussite. La
          dernière ligne est décisive. Si vous la remplissez après
          l&apos;expérience, chaque résultat peut devenir « encourageant ».
        </p>

        <FormulaBox>
          {[
            "JOURNAL DE VALIDATION — une ligne par hypothèse",
            "",
            "ID et risque : problème / acheteur / accès / engagement / faisabilité",
            "Hypothèse précise : nous pensons que [segment] rencontre [événement]",
            "                    dans [contexte] et cherche [résultat].",
            "Test le plus léger :",
            "Participants éligibles et mode de recrutement :",
            "Mesure observable :",
            "Seuil de continuer, fixé avant le test :",
            "Seuil de pivoter :",
            "Seuil d'arrêter ou de mettre en attente :",
            "Preuves recueillies, avec date et contexte :",
            "Contradictions et personnes hors cible :",
            "Décision : continuer / pivoter / nouveau test / arrêter",
            "Prochaine action, responsable et date :",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          headers={["Formulation invérifiable", "Hypothèse testable"]}
          rows={[
            [
              "Les cabinets ont besoin d'automatiser leurs dossiers",
              "Les responsables d'exploitation de cabinets de 20 à 80 personnes ont connu, dans les 90 derniers jours, un dossier bloqué par une pièce expirée et y consacrent déjà du temps ou un budget",
            ],
            [
              "Les gens paieront 99 € par mois",
              "Le décideur identifié accepte une offre pilote écrite à un prix donné, avec un résultat et un calendrier définis",
            ],
            [
              "Nous trouverons nos clients sur LinkedIn",
              "Une liste d'entreprises répondant à des critères écrits peut être contactée par ce canal, et les rendez-vous obtenus sont éligibles au segment",
            ],
          ]}
        />

        <p>
          Ne cherchez pas un budget ou une durée « moyens ». Chiffrez votre
          protocole ligne par ligne : temps de préparation et de recrutement,
          entretiens et synthèse, indemnisation éventuelle, page ou prototype,
          trafic, revue technique et conseil juridique si nécessaire. Valorisez
          le temps interne au lieu de le traiter comme gratuit, et marquez
          chaque poste inconnu « à confirmer ».
        </p>

        <FormulaBox>
          {[
            "Socle de validation = heures internes × coût interne",
            "                     + recrutement / indemnisation",
            "                     + prototype / trafic test",
            "                     + revue technique et juridique utile",
            "",
            "Ce socle n'est pas le coût du produit : il achète une décision mieux étayée.",
          ].join("\n")}
        </FormulaBox>

        <h2 id="entretiens">
          4. Menez des entretiens qui ne fabriquent pas le oui
        </h2>

        <p>
          Un entretien de découverte ne demande pas au prospect de juger votre
          idée. Il reconstruit la dernière fois où le problème a eu lieu. Le
          cadre original{" "}
          <a
            href="https://www.momtestbook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>The Mom Test</em> de Rob Fitzpatrick
          </a>{" "}
          est consacré à cette difficulté : obtenir des informations utiles sans
          provoquer des réponses polies et orientées. En pratique, gardez la
          présentation de votre solution pour la fin, après avoir compris les
          faits.
        </p>

        <GuideTable
          headers={[
            "Question qui pousse au oui",
            "Question qui produit un fait",
          ]}
          rows={[
            [
              "Vous utiliseriez un outil qui automatise cela ?",
              "Racontez-moi la dernière fois où cela s'est produit, du déclencheur au résultat.",
            ],
            [
              "Ce problème est important, n'est-ce pas ?",
              "Qu'avez-vous dû reporter, corriger ou payer à cause de cet épisode ?",
            ],
            [
              "Combien paieriez-vous pour notre SaaS ?",
              "Quel outil, temps interne ou prestataire financez-vous aujourd'hui, et qui autorise cette dépense ?",
            ],
            [
              "Quelle fonctionnalité voulez-vous ?",
              "Montrez-moi le document, l'écran ou le passage où le travail se bloque.",
            ],
          ]}
        />

        <h3>Un script court, dans l&apos;ordre du travail réel</h3>

        <ol>
          <li>
            Quel est le dernier dossier concerné, et quand a-t-il été traité ?
          </li>
          <li>
            Qu&apos;est-ce qui a déclenché le travail, puis quelles étapes et
            personnes sont intervenues ?
          </li>
          <li>
            Où se trouvent aujourd&apos;hui les données, documents et décisions
            ?
          </li>
          <li>
            Qu&apos;est-ce qui s&apos;est mal passé, avec quelle conséquence ?
          </li>
          <li>
            Qu&apos;avez-vous déjà essayé, abandonné ou acheté pour le résoudre
            ?
          </li>
          <li>
            Qui utilise, qui décide, qui paie, et qui doit approuver la sécurité
            ou le contrat ?
          </li>
          <li>
            Quelle prochaine action réelle est possible : observer un dossier,
            rencontrer l&apos;acheteur, tester un exemple anonymisé ou étudier
            une offre pilote ?
          </li>
        </ol>

        <p>
          Il n&apos;existe pas de nombre magique d&apos;entretiens. Commencez
          avec un segment assez homogène pour comparer les récits, notez les
          personnes hors cible et cherchez aussi les contre-exemples. Si les
          réponses divergent, ne faites pas une moyenne : séparez les profils.
          Et même après beaucoup de conversations, une parole reste moins forte
          qu&apos;une action. Le but est de choisir le prochain test, pas de
          remplir un quota.
        </p>

        <h2 id="sans-coder">
          5. Choisissez le test qui répond au risque — sans coder le SaaS
        </h2>

        <p>
          Construire est souvent le moyen le plus coûteux d&apos;apprendre.
          <a
            href="https://www.strategyzer.com/library/how-to-select-the-next-best-test-from-the-experiment-library"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strategyzer recommande
          </a>{" "}
          de commencer par des expériences rapides et légères, puis de renforcer
          la preuve. Le bon test n&apos;est pas le plus impressionnant ;
          c&apos;est celui qui peut faire changer la décision.
        </p>

        <GuideTable
          headers={[
            "Test",
            "Ce qu'il peut apprendre",
            "Ce qu'il ne prouve pas",
          ]}
          rows={[
            [
              "Observation d'un dossier",
              "Étapes, exceptions, données, rôles et coût du problème",
              "Que la solution proposée sera achetée",
            ],
            [
              "Page avec une promesse précise",
              "Compréhension du message, capacité d'un canal à produire une action",
              "Usage futur, rétention ou volonté de payer si l'action est un simple e-mail",
            ],
            [
              "Prototype cliquable",
              "Compréhension du parcours et blocages d'interface",
              "Faisabilité du moteur, fiabilité des données ou achat",
            ],
            [
              "Service rendu manuellement, dit « concierge »",
              "Valeur du résultat en exécutant manuellement le service promis",
              "Que l'automatisation sera rentable ou techniquement possible",
            ],
            [
              "Fausse façade, travail manuel derrière",
              "Comportement dans un parcours réaliste sans automatiser le cœur",
              "Montée en charge et coût d'exploitation futur",
            ],
            [
              "Offre pilote écrite",
              "Processus d'achat, objections, responsabilité et engagement commercial",
              "Renouvellement ou adoption à grande échelle",
            ],
            [
              "Preuve technique ciblée",
              "Accès à une interface de programmation (API), précision, délai, coût par opération ou migration",
              "Désir du marché",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Une page de test ne doit pas tromper">
          Présentez une disponibilité future ou un pilote comme tels. Ne simulez
          pas une commande définitive pour révéler seulement après le paiement
          que le service n&apos;existe pas. Si vous encaissez, écrivez le
          périmètre, le prix, le calendrier, les conditions de sortie et le sort
          des sommes ; faites vérifier l&apos;offre selon que vous vendez à des
          professionnels ou à des particuliers.
        </InfoBox>

        <p>
          Le MVP arrive lorsque l&apos;incertitude restante exige un produit
          réellement utilisé : répétition, autonomie, fiabilité, rétention.
          <a
            href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eric Ries définit le MVP
          </a>{" "}
          par l&apos;apprentissage qu&apos;il permet, non par un nombre minimal
          d&apos;écrans. Si un service manuel peut encore répondre à la
          question, ce service est souvent le test le plus responsable. Pour
          choisir ensuite entre prototype no-code et base de code, utilisez
          notre{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            comparatif no-code ou sur-mesure
          </Link>
          .
        </p>

        <h2 id="acheteur-acces">
          6. Testez l&apos;acheteur et l&apos;accès au marché
        </h2>

        <p>
          Un responsable administratif peut souffrir du problème sans avoir le
          droit d&apos;acheter. Dans une PME B2B, cinq rôles suffisent à faire
          échouer une vente parfaitement utile : utilisateur, sponsor, décideur
          budgétaire, informatique ou sécurité, puis achats ou juridique. Ils
          peuvent se cumuler, mais vous devez savoir qui porte chaque décision.
        </p>

        <GuideTable
          headers={["Rôle", "Preuve à demander"]}
          rows={[
            ["Utilisateur", "Rejouer un cas et tester le futur résultat"],
            [
              "Sponsor métier",
              "Mobiliser l'équipe et définir le résultat attendu",
            ],
            [
              "Acheteur / décideur",
              "Confirmer budget, calendrier et critères de décision",
            ],
            [
              "Informatique / sécurité",
              "Nommer données, intégrations, accès et conditions d'hébergement",
            ],
            [
              "Achats / juridique",
              "Expliquer référencement fournisseur, contrat et délai réel",
            ],
          ]}
        />

        <p>
          Testez aussi votre capacité à retrouver le segment. Constituez une
          liste selon des critères observables, utilisez un message identique
          centré sur le problème, puis mesurez séparément messages délivrés,
          réponses, rendez-vous et entretiens réellement éligibles. Il
          n&apos;existe pas de taux de réponse universel : le résultat dépend du
          canal, de la cible, de la réputation, du message et de la source des
          coordonnées. Une idée inaccessible à son fondateur n&apos;est pas
          encore un canal commercial.
        </p>

        <p>
          Pour la prospection électronique en France, la{" "}
          <a
            href="https://www.cnil.fr/fr/communication-electronique-quelles-regles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL distingue notamment les professionnels des particuliers
          </a>
          . Entre professionnels, le consentement préalable n&apos;est pas
          systématique si le message est lié à l&apos;activité professionnelle,
          si la personne est informée de l&apos;origine et de la finalité et si
          elle peut s&apos;opposer simplement. Pour les particuliers, le régime
          est plus strict. Dans tous les cas, une demande d&apos;entretien
          n&apos;est pas une permission de relancer indéfiniment.
        </p>

        <h2 id="faisabilite">
          7. Tuez tôt le risque technique qui peut tuer l&apos;économie
        </h2>

        <p>
          Une validation commerciale ne rend pas une promesse réalisable. Avant
          le MVP, faites examiner les deux ou trois inconnues capables de
          retourner le modèle : accès aux données, droit d&apos;utiliser une
          interface tierce, qualité des sources, précision exigée, volume,
          sécurité, localisation, coût variable et solution de repli.
        </p>

        <ul>
          <li>
            L&apos;API existe-t-elle, couvre-t-elle le besoin et sa licence
            autorise-t-elle l&apos;usage commercial prévu ?
          </li>
          <li>
            Les données sont-elles disponibles, assez propres et transmissibles
            sans exposer celles d&apos;un client ?
          </li>
          <li>
            Le coût par document, calcul, stockage ou appel tiers reste-t-il
            compatible avec le prix ?
          </li>
          <li>
            Une contrainte de sécurité, de santé, de paiement ou de décision
            automatisée change-t-elle le périmètre ?
          </li>
          <li>
            Un logiciel existant fournit-il déjà le résultat pour moins cher et
            plus vite ?
          </li>
        </ul>

        <FormulaBox>
          {[
            "Contribution mensuelle par compte",
            "= prix HT réellement testé",
            "- infrastructure variable",
            "- services tiers et paiement",
            "- support variable réaliste",
            "- coût du travail manuel qui subsiste",
            "",
            "Les ventes, le support fixe, la conformité, la maintenance et la sortie",
            "restent des postes distincts : une marge positive ici ne prouve pas la rentabilité.",
          ].join("\n")}
        </FormulaBox>

        <p>
          La preuve technique n&apos;est pas une architecture complète. Son
          livrable tient en quatre éléments : question, test reproductible,
          résultat avec limites, puis conséquence sur la promesse et le budget.
          Un résultat négatif peut produire une version plus simple : dépôt de
          fichier au lieu d&apos;un accès direct à la messagerie, calcul assisté
          au lieu d&apos;une décision automatique, export standard plutôt
          qu&apos;intégration temps réel.
        </p>

        <h2 id="exemple">8. Exemple illustratif fictif : ConformiSuivi</h2>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          ConformiSuivi, ses entretiens, ses entreprises, ses prix et tous ses
          résultats sont inventés pour expliquer la méthode. Ils ne décrivent
          aucun client, aucune étude de marché réelle et aucune performance
          obtenue par Hagnéré Code.
        </InfoBox>

        <p>
          Une fondatrice fictive imagine un SaaS qui surveille les dates
          d&apos;expiration de documents de sous-traitants et relance les
          responsables. Sa cible initiale est « les petites entreprises de
          maintenance ». Avant tout entretien, elle écrit cinq hypothèses et
          fixe ses seuils pour un sprint illustratif de douze jours ouvrés.
        </p>

        <GuideTable
          headers={[
            "Hypothèse et seuil fictifs",
            "Résultat fictif",
            "Décision",
          ]}
          rows={[
            [
              "Problème : au moins 5 entretiens éligibles sur 8 décrivent un blocage récent et un contournement",
              "5 sur 8 décrivent un blocage ; 4 entretiennent déjà un tableur et des relances",
              "Problème conservé, avec vocabulaire plus précis",
            ],
            [
              "Acheteur : 3 introductions vers la personne qui décide",
              "3 introductions ; les très petites structures n'ont ni budget ni acheteur distinct",
              "Cible resserrée sur des organisations multisites de 20 à 100 personnes",
            ],
            [
              "Accès : obtenir des entretiens hors réseau proche avec le même message",
              "Les réponses qualifiées viennent d'une association métier ; la publicité générale attire surtout des indépendants hors cible",
              "Canal partenaire à retester, campagne large arrêtée",
            ],
            [
              "Engagement : 2 pilotes acceptés et 1 engagement payant écrit",
              "2 équipes acceptent un pilote manuel ; 1 décideur signe un pilote fictif à 750 € HT",
              "Preuve suffisante pour le pilote, pas pour développer tout le SaaS",
            ],
            [
              "Faisabilité : aucune dépendance ne rend la promesse impossible au prix envisagé",
              "L'accès direct aux boîtes e-mail exige une revue de sécurité ; le dépôt manuel de documents permet le pilote",
              "Promesse réduite : dépôt contrôlé et rapport hebdomadaire, intégration reportée",
            ],
          ]}
        />

        <h3>Le budget fictif, sans fausse moyenne</h3>

        <FormulaBox>
          {[
            "52 h de la fondatrice × 60 €/h de coût interne fictif = 3 120 €",
            "8 indemnités × 50 €                                  =   400 €",
            "plafond du test d'acquisition                        =   300 €",
            "4 h de revue technique × 120 €/h                     =   480 €",
            "SOCLE VALORISÉ FICTIF                                = 4 300 €",
            "Calendrier : 12 jours ouvrés répartis sur 3 semaines",
            "Exclus : juridique, TVA, déplacement, futur développement — à confirmer.",
          ].join("\n")}
        </FormulaBox>

        <p>
          Le résultat n&apos;est ni « idée validée » ni « échec ». La cible, le
          canal et le premier périmètre ont pivoté. La prochaine dépense finance
          un service pilote manuel sur des données expurgées, avec un résultat
          hebdomadaire convenu. Le développement ne devient défendable
          qu&apos;après observation de l&apos;usage : les équipes déposent-elles
          réellement les documents, utilisent-elles le rapport, et le décideur
          paie-t-il pour poursuivre ?
        </p>

        <p>
          Si le pilote échoue, la fondatrice sait quel verrou a résisté. Si les
          équipes veulent le service mais refusent le dépôt manuel, elle teste
          l&apos;intégration. Si personne ne consulte le rapport, elle remet en
          cause le résultat promis. Si le décideur utilise puis renouvelle,
          l&apos;incertitude restante porte enfin sur la capacité à automatiser
          ce service : c&apos;est le bon moment pour cadrer un MVP.
        </p>

        <h2 id="confidentialite">
          9. Apprenez sans exposer inutilement idées ni données
        </h2>

        <h3>Confidentialité : révélez le problème avant le secret</h3>

        <p>
          L&apos;
          <a
            href="https://www.inpi.fr/inpi-block/download-document?id=20581"
            target="_blank"
            rel="noopener noreferrer"
          >
            INPI rappelle qu&apos;une idée ou un concept ne se protège pas en
            tant que tel
          </a>
          . Sa matérialisation peut relever du droit d&apos;auteur, d&apos;une
          marque, d&apos;un dessin ou modèle, d&apos;un brevet ou du secret,
          selon le cas. Une e-Soleau peut établir une date, mais elle ne crée
          pas un titre de propriété industrielle. Un accord de confidentialité
          peut encadrer des informations réellement sensibles ; faites-le
          adapter lorsque l&apos;enjeu le justifie.
        </p>

        <p>
          Pour la découverte courante, vous n&apos;avez souvent pas besoin de
          livrer l&apos;algorithme, les données ou le plan commercial. Parlez du
          travail actuel, des conséquences et du résultat. Divulguez ensuite le
          strict nécessaire au test. Exiger un accord lourd avant une simple
          conversation peut empêcher l&apos;accès au marché ; l&apos;absence de
          protection sur un secret technique peut, à l&apos;inverse, créer un
          risque. Ce guide ne remplace pas l&apos;avis d&apos;un conseil en
          propriété industrielle ou d&apos;un avocat.
        </p>

        <h3>Entretiens et prototypes : minimisez les données</h3>

        <p>
          La CNIL demande que les données personnelles soient pertinentes et
          nécessaires, et que les personnes soient informées au moment de la
          collecte. Avant un formulaire, une liste d&apos;attente ou un
          entretien enregistré, documentez identité du responsable, finalité,
          base légale, destinataires, durée, droits et contact.
          N&apos;enregistrez pas par défaut ; des notes structurées et
          pseudonymisées suffisent souvent. Définissez une purge au lieu de
          conserver toutes les conversations « au cas où ».
        </p>

        <ul>
          <li>Utilisez des cas synthétiques ou expurgés dans un prototype.</li>
          <li>
            Ne demandez pas à un prospect d&apos;importer les données de ses
            propres clients dans un outil de test non cadré.
          </li>
          <li>
            Séparez les coordonnées de recrutement des observations de recherche
            lorsque c&apos;est possible.
          </li>
          <li>
            Une adresse laissée pour un pilote n&apos;autorise pas toutes les
            prospections futures.
          </li>
          <li>
            Pour une mesure d&apos;audience ou un traceur, vérifiez les{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              cas où la CNIL exige un consentement
            </a>
            . Le caractère provisoire du test ne suffit pas à l&apos;en
            dispenser.
          </li>
        </ul>

        <h2 id="decision">10. Décidez sur le verrou le plus faible</h2>

        <p>
          N&apos;additionnez pas cinq notes pour produire un score rassurant. Un
          problème très douloureux ne compense pas une impossibilité légale ou
          technique ; un pilote payé ne crée pas un canal répétable. Relisez
          chaque ligne du journal et prenez l&apos;une des quatre sorties.
        </p>

        <GuideTable
          headers={[
            "Décision",
            "Conditions observables",
            "Prochaine dépense utile",
          ]}
          rows={[
            [
              "Développer un MVP resserré",
              "Les cinq risques ont des preuves cohérentes ; l'incertitude restante exige de mesurer l'usage réel",
              "Cahier des charges du premier parcours, recette, exploitation et budget",
            ],
            [
              "Pivoter",
              "Le problème existe, mais la cible, le payeur, la promesse, le canal ou le périmètre ne tient pas",
              "Nouveau test sur la seule hypothèse modifiée",
            ],
            [
              "Poursuivre les tests",
              "Les signaux sont contradictoires, le recrutement était hors cible ou un risque technique reste inconnu",
              "Expérience différente et seuil écrit avant son lancement",
            ],
            [
              "Arrêter ou mettre en attente",
              "Pas d'incident récent, aucun effort actuel, aucun acheteur accessible, aucun engagement ou économie impossible",
              "Documenter l'apprentissage et préserver le budget",
            ],
          ]}
        />

        <h3>Ce que vous pouvez faire dans les prochaines 48 heures</h3>

        <ol>
          <li>
            Écrivez une hypothèse pour chacun des cinq risques, sans les
            fusionner.
          </li>
          <li>
            Entourez celle dont l&apos;échec rendrait toutes les autres
            inutiles.
          </li>
          <li>
            Copiez le journal de la section 3 et fixez les trois seuils avant de
            contacter qui que ce soit.
          </li>
          <li>
            Recrutez les premiers participants selon des critères observables,
            pas selon leur enthousiasme pour vous aider.
          </li>
          <li>
            Terminez chaque entretien par une prochaine action réelle ou par un
            non clair ; ne transformez pas « tenez-moi au courant » en preuve.
          </li>
        </ol>

        <p>
          Si la décision devient « MVP », définissez d’abord{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            la tranche minimale capable de servir le premier client
          </Link>
          , puis préparez son coût avec le guide{" "}
          <Link href="/guides/combien-coute-un-saas">
            combien coûte un SaaS
          </Link>{" "}
          et notre méthode de{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d&apos;application
          </Link>
          . Si un outil existant couvre déjà la promesse, l&apos;acheter peut
          rester la meilleure validation : vous apprendrez sur l&apos;usage sans
          financer une réécriture.
        </p>

        <GuideInlineCTA
          title="Quel verrou empêche encore votre MVP ?"
          description="Transmettez votre cible, la preuve la plus forte déjà obtenue et l'incertitude qui reste. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti. Si le projet est prématuré, nous vous indiquerons le test à mener avant de parler développement ; s'il est assez étayé, nous pourrons cadrer le premier périmètre."
          tags={["Cadrage avant code", "Cas adapté ou non", "Sans engagement"]}
          ctaLabel="Faire challenger mes preuves"
          ctaHref="/demarrer-un-projet"
        />

        <InfoBox
          variant="emerald"
          title="Quand Hagnéré Code est adapté — et quand il ne l’est pas"
        >
          <p className="mb-2">
            <strong>Cas adapté :</strong> un problème B2B documenté, une cible
            accessible, un premier engagement et une vraie incertitude de
            produit ou de faisabilité à transformer en périmètre testable.
          </p>
          <p className="mb-0">
            <strong>Cas inadapté :</strong> une idée soutenue seulement par des
            compliments, aucun accès aux futurs acheteurs, un besoin déjà bien
            couvert par un logiciel abordable, ou la demande de fabriquer une
            page trompeuse et de coder avant d&apos;apprendre. Dans ces cas, le
            meilleur conseil peut être de ne pas développer maintenant.
          </p>
        </InfoBox>

        <h2 id="sources">Sources originales consultées</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les méthodes d&apos;innovation
          donnent des cadres de décision, pas des garanties de réussite ; les
          sources CNIL et INPI portent sur la France et doivent être appliquées
          au traitement et au contrat réels.
        </p>

        <ul>
          <li>
            <a
              href="https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Validate Your Ideas with the Test Card
            </a>{" "}
            : hypothèse, test, mesure et seuil définis avant l&apos;expérience.
          </li>
          <li>
            <a
              href="https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Is your hypothesis really validated?
            </a>{" "}
            : différence entre déclarations, comportements et investissement du
            participant.
          </li>
          <li>
            <a
              href="https://www.strategyzer.com/library/how-to-select-the-next-best-test-from-the-experiment-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Select the next best test
            </a>{" "}
            : expériences légères, prototypes et service manuel avant la
            construction finale.
          </li>
          <li>
            <a
              href="https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steve Blank — Customer Hypotheses
            </a>{" "}
            : séparation des rôles B2B, tests terrain et exemple de pivot.
          </li>
          <li>
            <a
              href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eric Ries — What is an MVP?
            </a>{" "}
            : le MVP comme véhicule d&apos;apprentissage, et non produit minimal
            par principe.
          </li>
          <li>
            <a
              href="https://www.ycombinator.com/blog/ycs-essential-startup-advice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Y Combinator — Essential Startup Advice
            </a>{" "}
            : contact direct avec les utilisateurs et travail manuel avant la
            mise à l&apos;échelle.
          </li>
          <li>
            <a
              href="https://www.momtestbook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rob Fitzpatrick — The Mom Test, site officiel
            </a>{" "}
            : entretiens de découverte et réduction des réponses biaisées.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Minimiser les données collectées
            </a>{" "}
            et{" "}
            <a
              href="https://cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence"
              target="_blank"
              rel="noopener noreferrer"
            >
              informer les personnes
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/communication-electronique-quelles-regles"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Communications électroniques aux prospects et clients
            </a>{" "}
            : règles B2B/B2C publiées le 10 juin 2026.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Questions-réponses sur les cookies et autres traceurs
            </a>{" "}
            : consentement, exemptions et responsabilités à vérifier avant un
            test instrumenté.
          </li>
          <li>
            <a
              href="https://www.inpi.fr/inpi-block/download-document?id=20581"
              target="_blank"
              rel="noopener noreferrer"
            >
              INPI — Protéger ses créations
            </a>{" "}
            et{" "}
            <a
              href="https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposer-une-e-soleau-ou-un-entiercement"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-Soleau et entiercement
            </a>
            .
          </li>
        </ul>

        <p className="text-sm">
          Ce guide décrit une méthode de décision et un exemple fictif. Il ne
          constitue ni une étude de marché, ni un conseil juridique, fiscal ou
          financier personnalisé. Une validation réduit le risque ; elle ne
          garantit ni les ventes, ni la rentabilité, ni le classement futur du
          produit.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
