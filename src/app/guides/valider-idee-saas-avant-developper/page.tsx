import type { Metadata } from "next";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SaasValidationDecisionJournal } from "@/components/guides/SaasValidationDecisionJournal";
import {
  formatGuideDate,
  getGuide,
  guidePath,
  guideRobots,
  guideUrl,
} from "@/lib/guides";
import {
  SAAS_UNIT_ECONOMICS_SCENARIOS,
  calculateSaasUnitEconomics,
} from "@/lib/saas-validation-decision";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("valider-idee-saas-avant-developper");
const economicsScenarios = SAAS_UNIT_ECONOMICS_SCENARIOS.map(
  calculateSaasUnitEconomics,
);
const euro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
const decimal = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 2,
});

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
        alt: "Valider une idée SaaS avec des preuves avant de développer",
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
    question: "Combien d’entretiens faut-il pour valider une idée SaaS ?",
    answer:
      "Aucun nombre ne valide une idée à lui seul. Définissez d’abord qui est éligible, recherchez des incidents récents, notez les contradictions et poursuivez tant que de nouveaux entretiens changent la décision. Huit entretiens homogènes peuvent être plus utiles que cinquante réponses de convenance.",
  },
  {
    question: "Une landing page ou une liste d’attente suffit-elle ?",
    answer:
      "Non. Une page mesure une promesse, une audience et une action légère dans des conditions données. Elle ne prouve ni le paiement, ni l’usage, ni la rétention. Elle devient utile si le trafic est qualifié, le service à venir est décrit honnêtement et le seuil est écrit avant le test.",
  },
  {
    question: "Faut-il faire payer le pilote ?",
    answer:
      "Un pilote payé apporte une preuve plus engageante qu’un compliment, à condition que l’acheteur soit habilité et que l’offre précise résultat, périmètre, prix, données, calendrier et sortie. Un paiement isolé ne prouve toutefois ni un marché répétable ni le renouvellement.",
  },
  {
    question: "Une lettre d’intention vaut-elle une vente ?",
    answer:
      "Non. Sa force dépend du signataire, du contenu, des conditions et de son caractère contraignant. Traitez-la comme une pièce du dossier, pas comme du chiffre d’affaires. Une décision d’achat, un pilote exécuté puis un usage répété apportent des preuves différentes.",
  },
  {
    question: "Peut-on valider une idée SaaS sans coder ?",
    answer:
      "Oui pour le problème, l’acheteur, une partie du prix et la valeur du résultat : entretien, prototype, service réalisé manuellement ou pilote limité peuvent suffire. Il faudra néanmoins du logiciel lorsque la question porte sur la fiabilité, l’intégration, la performance ou l’usage autonome répété.",
  },
  {
    question: "Quand passer du pilote au MVP ?",
    answer:
      "Lorsque le segment, le problème, l’acheteur, l’offre, le canal et la faisabilité sont documentés, puis que le pilote montre un premier résultat utile et un retour réel à l’usage. Le MVP doit alors limiter son périmètre à ce premier usage et conserver des critères d’arrêt.",
  },
  {
    question: "Comment protéger l’idée et les données pendant les tests ?",
    answer:
      "Parlez d’abord du problème et des pratiques actuelles, collectez le minimum nécessaire et utilisez des données fictives ou anonymisées dès que possible. Une e-Soleau peut dater une création mais ne crée pas un monopole sur une idée. Un NDA et un encadrement juridique peuvent être adaptés lorsque de vrais secrets ou des données clients sont échangés.",
  },
  {
    question: "Quels signaux doivent conduire à arrêter ?",
    answer:
      "Arrêtez ou reformulez si le problème n’apparaît pas dans des faits récents, si une alternative simple résout déjà mieux le besoin, si aucun acheteur ne peut engager une prochaine étape, si la donnée ne peut être utilisée légitimement ou si la promesse est impossible au coût et au niveau de risque annoncés.",
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
        heroDescription="Vous ne validez pas une idée avec des compliments : vérifiez séparément le problème, l’acheteur, le canal, la faisabilité, les coûts et l’usage grâce à des tests concrets et à un journal local."
        heroAction={{
          href: "#diagnostic",
          label: "Tester mon dossier",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Le verrou le plus faible décide",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "8 verrous · 4 STOP",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Journal local + CSV",
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
            label: "Limiter le premier MVP",
          },
          {
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
            label: "Prioriser les fonctionnalités",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Chiffrer le SaaS complet",
          },
          {
            href: "/guides/cahier-des-charges-saas",
            label: "Écrire le cahier des charges",
          },
          {
            href: "/guides/securite-saas-b2b",
            label: "Préparer la sécurité B2B",
          },
          {
            href: "/guides/rgpd-saas-b2b",
            label: "Préparer le RGPD",
          },
        ]}
        faqTitle="Validation SaaS : les questions décisives"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Vous pouvez financer l’étape suivante seulement si chaque risque
            critique a été vérifié par un fait adapté et qu’aucune condition
            d’arrêt ne reste ouverte.
          </strong>{" "}
          Un entretien rapporte une expérience ; une démonstration vérifie que
          le parcours se comprend ; un pilote payé montre un engagement sur une
          offre. Seuls l’usage répété et le renouvellement éclairent ensuite la
          fidélité. Confondre ces signaux pousse à développer trop tôt.
        </p>

        <InfoBox variant="blue" title="La réponse en 90 secondes">
          Décrivez un segment étroit et son travail actuel. Documentez des
          incidents récents et les alternatives déjà employées. Obtenez l’accès
          au décideur, puis testez une offre précise avec un seuil écrit avant
          le résultat. Vérifiez la donnée, la sécurité, le coût de service et le
          canal d’acquisition. Enfin, exécutez un pilote borné qui mesure le
          premier résultat utile et le retour à l’usage. Si un verrou reste
          inconnu, financez le test de ce verrou — pas le produit complet.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "validation",
              label: "1. Ce que « valider » autorise vraiment",
            },
            { id: "diagnostic", label: "2. Diagnostiquer les huit verrous" },
            { id: "preuve", label: "3. Classer la solidité des faits" },
            {
              id: "segment",
              label: "4. Segment, besoin et alternatives",
            },
            {
              id: "entretiens",
              label: "5. Mener des entretiens analysables",
            },
            {
              id: "tests",
              label: "6. Tester sans construire le produit",
            },
            {
              id: "acheteur",
              label: "7. Acheteur, prix et engagement",
            },
            {
              id: "economie",
              label: "8. Canal et économie SaaS",
            },
            {
              id: "faisabilite",
              label: "9. Faisabilité, données et sécurité",
            },
            {
              id: "cas",
              label: "10. Cas fictif complet : ConformiSuivi",
            },
            {
              id: "usage",
              label: "11. Premier usage, retours et fidélité",
            },
            {
              id: "decision",
              label: "12. STOP, pivot, pilote ou MVP",
            },
            {
              id: "plan-14-jours",
              label: "13. Plan d’enquête sur 14 jours",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="validation">
          1. Ce que « valider une idée SaaS » autorise vraiment
        </h2>

        <p>
          Une validation n’est pas un tampon définitif. C’est une décision
          proportionnée à la preuve disponible. Elle doit répondre à une
          question plus modeste et plus utile :{" "}
          <strong>
            quelle dépense ou expérience les faits autorisent-ils maintenant ?
          </strong>
        </p>

        <GuideTable
          headers={[
            "Signal obtenu",
            "Ce qu’il permet de dire",
            "Ce qu’il ne permet pas de dire",
          ]}
          rows={[
            [
              "Incidents récents racontés par une cible éligible",
              "Le problème existe dans ce segment et ce contexte",
              "La solution imaginée sera achetée",
            ],
            [
              "Prototype compris et tâche réussie",
              "Le parcours peut répondre au besoin testé",
              "Le produit fonctionnera avec les vraies données",
            ],
            [
              "Offre pilote signée ou payée",
              "Un acheteur engage quelque chose sur un périmètre donné",
              "Le canal, la marge et le renouvellement sont prouvés",
            ],
            [
              "Premier résultat utile pendant le pilote",
              "Une personne obtient la valeur attendue dans ce contexte",
              "Elle reviendra à l’usage sans accompagnement",
            ],
            [
              "Usage répété puis renouvellement",
              "La valeur persiste pour une cohorte et une période définies",
              "Le marché entier et la croissance sont acquis",
            ],
          ]}
        />

        <p>
          Le terme « marché validé » masque souvent plusieurs questions
          distinctes. Nous suivons donc huit verrous : problème, segment,
          alternatives, acheteur, offre, canal, faisabilité et usage. Les cinq
          décisions essentielles restent faciles à retenir :{" "}
          <strong>
            problème réel, acheteur engagé, accès au marché, solution viable,
            usage répété
          </strong>
          .
        </p>

        <InfoBox variant="amber" title="Un nombre magique n’est pas une preuve">
          Quatorze jours, dix entretiens, cent inscrits ou trois lettres
          d’intention peuvent organiser un test ; ils ne constituent pas des
          seuils universels. La population, le prix, le cycle d’achat, le canal
          et la conséquence d’une erreur changent la force du signal.
        </InfoBox>

        <h2 id="diagnostic">
          2. Diagnostiquer les huit verrous avant le prochain budget
        </h2>

        <p>
          Le journal ci-dessous ne calcule pas une moyenne qui permettrait à
          sept « bons » critères de compenser un risque critique. Il applique
          une logique de portes : une donnée non autorisée, une promesse
          impossible, un test trompeur ou l’absence de responsable impose un
          STOP. Une hypothèse contredite impose de pivoter ou d’arrêter. Le
          dossier reste local au navigateur et peut être exporté en texte ou en
          CSV.
        </p>

        <SaasValidationDecisionJournal />

        <p>
          Utilisez une ligne de journal par risque et par segment. Si deux
          populations ont des pratiques, acheteurs ou prix différents, elles ne
          doivent pas être fusionnées pour produire artificiellement un résultat
          moyen.
        </p>

        <h2 id="preuve">3. Classer la solidité des faits recueillis</h2>

        <p>
          Strategyzer distingue la déclaration de l’action et de
          l’investissement. Les guides publics britannique, australien et
          canadien ajoutent une discipline utile : partir du travail réel,
          choisir le prototype en fonction de la question, puis documenter ce
          qui change. Pour un SaaS B2B, l’échelle suivante évite de faire dire à
          une preuve plus qu’elle ne vaut.
        </p>

        <GuideTable
          headers={["Niveau", "Exemple de preuve", "Conclusion autorisée"]}
          rows={[
            [
              "1 · Déclaration",
              "« C’est intéressant », sondage d’opinion, intention future",
              "Écrire une hypothèse ; ne pas chiffrer la demande",
            ],
            [
              "2 · Action légère",
              "Clic, formulaire, inscription à une liste",
              "Le message déclenche une action dans ce trafic précis",
            ],
            [
              "3 · Fait passé",
              "Incident récent, fréquence, conséquence, tentative de correction",
              "Le problème existe pour ce participant éligible",
            ],
            [
              "4 · Artefact ou accès",
              "Tableur anonymisé, données de test, introduction au décideur",
              "Le participant investit du temps ou ouvre son processus",
            ],
            [
              "5 · Engagement commercial",
              "Pilote signé, acompte ou paiement sur une offre définie",
              "Cet acheteur accepte ce risque, ce prix et ces conditions",
            ],
            [
              "6 · Usage",
              "Premier résultat puis retours volontaires à la tâche",
              "La solution produit une valeur répétée dans ce contexte",
            ],
            [
              "7 · Continuité",
              "Renouvellement, expansion ou recommandation vérifiable",
              "La valeur persiste pour cette cohorte ; mesurer encore le canal et la marge",
            ],
          ]}
        />

        <p>
          Une preuve plus engageante n’est pas automatiquement plus fiable. Un
          acompte remboursable obtenu auprès d’un ami vaut moins qu’un incident
          documenté chez un acheteur inconnu si le recrutement, l’offre ou les
          conditions ont biaisé le test. Notez donc toujours{" "}
          <strong>
            qui a agi, pourquoi cette personne est éligible, ce qu’elle risquait
            et ce que le test ne mesure pas
          </strong>
          .
        </p>

        <h2 id="segment">
          4. Définir le segment, le travail à accomplir et les alternatives
        </h2>

        <p>
          « Les PME qui veulent gagner du temps » n’est pas un segment testable.
          Décrivez une population dont les pratiques et le processus d’achat
          sont comparables. L’objectif n’est pas d’écrire un persona décoratif,
          mais de savoir qui recruter et qui exclure de l’analyse.
        </p>

        <GuideTable
          headers={["Champ", "Question de terrain", "Exemple fictif précis"]}
          rows={[
            [
              "Contexte",
              "Dans quelle activité, taille, maturité et contrainte ?",
              "Cabinet de conseil de 10 à 40 personnes, plusieurs dossiers mensuels",
            ],
            [
              "Rôle",
              "Qui exécute, subit, supervise et achète ?",
              "Consultant utilisateur, responsable de mission champion, directeur payeur",
            ],
            [
              "Déclencheur",
              "Quel événement rend le problème urgent maintenant ?",
              "Clôture mensuelle ou audit client à date fixe",
            ],
            [
              "Résultat recherché",
              "Quel travail doit être accompli, indépendamment de votre produit ?",
              "Assembler un dossier complet, traçable et révisable avant l’échéance",
            ],
            [
              "Non-cible",
              "Qui ressemble à la cible mais ne vit pas le même problème ?",
              "Consultant seul avec deux dossiers simples par an",
            ],
          ]}
        />

        <p>
          Une formulation utile du travail attendu tient en une phrase : «
          Lorsque [déclencheur], [rôle] doit [résultat] afin de [conséquence],
          malgré [contrainte]. » Elle n’impose ni application, ni IA, ni tableau
          de bord.
        </p>

        <h3>Comparer le statu quo avant de comparer les concurrents</h3>

        <p>
          Votre concurrent principal peut être un tableur, une assistante, un
          logiciel vertical, un prestataire, un recrutement ou la décision de ne
          rien changer. Pour chaque alternative, observez le coût visible, le
          temps, le risque, les habitudes, les intégrations et l’effort de
          migration.
        </p>

        <GuideTable
          headers={[
            "Alternative",
            "Pourquoi elle reste choisie",
            "Fait à rechercher · risque à éviter",
          ]}
          rows={[
            [
              "Statu quo",
              "Coût de changement supérieur à la douleur perçue",
              "Incident récent sans tentative de correction · risque : urgence insuffisante",
            ],
            [
              "Tableur / email",
              "Flexible, connu, déjà payé",
              "Version, erreur, ressaisie ou traçabilité réelle · risque : ajouter plus de rigidité que de valeur",
            ],
            [
              "Logiciel existant",
              "Fonctions, écosystème et confiance déjà présents",
              "Essai, devis, motifs d’abandon ou fonctions non utilisées · risque : reconstruire moins bien une solution disponible",
            ],
            [
              "Prestation humaine",
              "Responsabilité et expertise incluses",
              "Temps, qualité, variabilité et capacité · risque : sous-estimer le service qui restera nécessaire",
            ],
            [
              "Développement interne",
              "Contrôle et connaissance métier",
              "Liste des travaux, compétences, délai et coût d’exploitation · risque : acheter une promesse plus chère qu’un renforcement interne",
            ],
          ]}
        />

        <h2 id="entretiens">
          5. Mener des entretiens éligibles et analysables
        </h2>

        <p>
          Un bon entretien n’a pas pour but de convaincre. Il reconstitue un
          événement. Recrutez des personnes qui ont réellement vécu le travail
          étudié dans une période assez récente pour décrire les étapes, les
          outils et les décisions. Documentez la source du contact et séparez
          votre entourage du recrutement hors réseau.
        </p>

        <h3>Critères d’éligibilité avant le rendez-vous</h3>

        <ul>
          <li>
            le participant correspond au segment écrit avant le recrutement ;
          </li>
          <li>il a exécuté ou décidé un cas réel dans la période retenue ;</li>
          <li>il connaît les outils et les personnes intervenus ;</li>
          <li>son intérêt personnel dans votre projet est déclaré ;</li>
          <li>
            l’entretien peut être analysé sans collecter de données inutiles.
          </li>
        </ul>

        <p>
          Une réponse d’un expert, d’un ami ou d’un dirigeant éloigné du travail
          peut éclairer une hypothèse, mais ne doit pas être comptée comme
          observation utilisateur si elle ne satisfait pas ces critères.
        </p>

        <h3>Script centré sur le dernier cas réel</h3>

        <ol>
          <li>« Quand cela s’est-il produit pour la dernière fois ? »</li>
          <li>« Qu’est-ce qui a déclenché le travail ? »</li>
          <li>
            « Montrez-moi les étapes, dans l’ordre, sans données sensibles. »
          </li>
          <li>« Qui est intervenu, attendu ou revenu en arrière ? »</li>
          <li>
            « Qu’avez-vous essayé avant, et pourquoi l’avez-vous gardé ou
            abandonné ? »
          </li>
          <li>« Quelle conséquence a été mesurée, facturée ou remontée ? »</li>
          <li>
            « Qui pourrait autoriser un essai, fournir les données et signer ? »
          </li>
          <li>« Qui pourrait bloquer le projet, et pour quelle raison ? »</li>
        </ol>

        <p>
          N’annoncez la solution qu’après avoir compris le cas. À la fin,
          demandez une action cohérente avec la question encore ouverte :
          montrer un artefact anonymisé, introduire le payeur, tester un
          prototype ou examiner une offre. Un « oui » poli sans prochaine action
          reste une déclaration.
        </p>

        <h3>Coder les résultats sans voter</h3>

        <GuideTable
          headers={["Colonne", "Exemple", "Erreur évitée"]}
          rows={[
            [
              "Fait",
              "Trois personnes ont rapproché deux fichiers pendant 2 h 20",
              "Transformer une impression en mesure",
            ],
            [
              "Interprétation",
              "Le rapprochement manuel semble être le goulot",
              "Présenter une conclusion comme un fait",
            ],
            [
              "Contradiction",
              "Deux cabinets utilisent déjà un logiciel satisfaisant",
              "Éliminer les signaux défavorables",
            ],
            [
              "Décision autorisée",
              "Resserrer la cible aux équipes multi-clients sans outil vertical",
              "Déclarer tout le secteur validé",
            ],
          ]}
        />

        <p>
          Continuez tant que les nouveaux entretiens changent les rôles, les
          étapes, les alternatives ou la décision. Une « saturation » n’est
          défendable que pour un segment et une question donnés. Si vous
          enregistrez, demandez un accord adapté, expliquez l’usage et la durée,
          puis prévoyez la suppression.
        </p>

        <h2 id="tests">6. Tester sans construire le produit complet</h2>

        <p>
          Le bon test n’est pas le plus impressionnant. C’est le moins coûteux
          qui peut encore invalider l’hypothèse. Écrivez avant son lancement :
          population, test, métrique, seuil, coût plafond, faux positifs,
          décision en cas de réussite et décision en cas d’échec.
        </p>

        <GuideTable
          headers={[
            "Expérience · question testée",
            "Mesure utile",
            "Ce qu’elle ne prouve pas",
          ]}
          rows={[
            [
              "Recherche documentaire — le problème, les règles et les alternatives existent-ils ?",
              "Sources primaires, offres, procédures et données de contexte",
              "Que votre segment paiera",
            ],
            [
              "Prototype cliquable — le parcours et le résultat sont-ils compréhensibles ?",
              "Tâches réussies, erreurs, hésitations et premier résultat",
              "La faisabilité, la fiabilité ou la rétention",
            ],
            [
              "Page d’offre test — la promesse déclenche-t-elle une action chez un trafic identifié ?",
              "Visiteurs éligibles, action et coût par conversation utile",
              "Le paiement et l’usage",
            ],
            [
              "Service réalisé manuellement — le résultat crée-t-il de la valeur avant l’automatisation ?",
              "Temps de service, qualité, fréquence et demande suivante",
              "Que la marge résistera au passage à l’échelle",
            ],
            [
              "Lettre d’intention ou précommande — un décideur accepte-t-il des conditions précises ?",
              "Signataire, objet, prix, calendrier, conditions et risque engagé",
              "Une vente acquise ou du revenu récurrent",
            ],
            [
              "Pilote payé — le résultat, l’intégration et le support tiennent-ils en réel ?",
              "Premier résultat utile, usage, incidents, contribution et décision de suite",
              "Un canal répétable ou la rétention longue",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Fake door et prototype : l’honnêteté fait partie du test"
        >
          Dites ce qui existe, ce qui est simulé, quand le service pourrait être
          fourni et ce qui arrive après le clic. Protégez un prototype public
          contre l’indexation ou la confusion avec un service en production. Un
          faux produit peut augmenter le taux de conversion tout en détruisant
          précisément la confiance que vous cherchez à mesurer.
        </InfoBox>

        <p>
          Une précommande ou un acompte exige une offre et des conditions
          adaptées au pays, au B2B/B2C et au mode de vente. Ne copiez pas un
          modèle américain dans une campagne française ou internationale sans
          qualification juridique. En France, la{" "}
          <a
            href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/les-informations-precontractuelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            DGCCRF détaille les informations précontractuelles dues au
            consommateur
          </a>
          . Le régime B2B et celui des autres pays doivent être examinés
          séparément. La validation commerciale ne suspend ni le droit de la
          consommation, ni le droit des données, ni vos obligations
          contractuelles.
        </p>

        <h2 id="acheteur">7. Identifier le comité d’achat et tester le prix</h2>

        <p>
          Dans un SaaS B2B, « l’utilisateur aime le produit » et « l’entreprise
          peut acheter » sont deux hypothèses différentes. Cartographiez le
          comité sur un achat comparable, pas sur l’organigramme théorique.
        </p>

        <GuideTable
          headers={["Rôle", "Question à vérifier", "Preuve plus forte"]}
          rows={[
            [
              "Utilisateur",
              "Qui exécute la tâche et obtient le premier résultat ?",
              "Tâche réelle accomplie sans aide excessive",
            ],
            [
              "Champion",
              "Qui gagne assez pour porter le changement en interne ?",
              "Introduction et préparation du dossier interne",
            ],
            [
              "Sponsor / budget",
              "Quel budget, quelle priorité et quel coût évité ?",
              "Arbitrage avec une dépense ou un projet existant",
            ],
            [
              "Finance / achats / juridique",
              "Quelles conditions, délais et responsabilités ?",
              "Liste réelle de documents et étapes",
            ],
            [
              "IT / sécurité / DPO",
              "Quelles données, intégrations, accès et exigences ?",
              "Revue du périmètre et des contrôles",
            ],
            [
              "Signataire",
              "Qui peut engager l’entreprise et sous quelles limites ?",
              "Offre ou pilote signé par la bonne personne",
            ],
          ]}
        />

        <h3>
          Trois tests de prix qui ne demandent pas « combien paieriez-vous ? »
        </h3>

        <ol>
          <li>
            <strong>Reconstituer le budget actuel.</strong> Quels outils,
            prestations, heures, erreurs ou risques sont déjà financés ? Ce
            n’est pas automatiquement votre prix, mais cela révèle la source
            budgétaire.
          </li>
          <li>
            <strong>Présenter une offre bornée.</strong> Donnez résultat,
            périmètre, calendrier, effort client, prix, responsabilités et
            sortie ; demandez la décision ou l’étape interne réelle.
          </li>
          <li>
            <strong>Comparer des périmètres honnêtes.</strong> Par exemple
            diagnostic seul, pilote accompagné, puis abonnement après preuve. Ne
            changez pas simultanément prix, cible et promesse : vous ne sauriez
            pas ce qui explique la réponse.
          </li>
        </ol>

        <p>
          « Trop cher » peut signifier absence de douleur, mauvais payeur,
          confiance insuffisante, cycle budgétaire fermé, risque de migration ou
          offre mal définie. Demandez quelle condition manque, puis cherchez une
          action. Ne baissez pas mécaniquement le prix après chaque refus.
        </p>

        <h3>Ce qu’un pilote doit écrire avant de commencer</h3>

        <ul>
          <li>le résultat attendu, le périmètre et les exclusions ;</li>
          <li>les données, rôles, accès, sous-traitants et durées ;</li>
          <li>
            le prix, la facturation, les annulations et remboursements éventuels
            ;
          </li>
          <li>la responsabilité de chaque partie et le mode de retour ;</li>
          <li>
            les mesures, la situation de départ, la durée et le critère de
            sortie ;
          </li>
          <li>
            la propriété des livrables, l’export et la suppression en fin de
            test.
          </li>
        </ul>

        <h2 id="economie">
          8. Prouver un accès au marché et une économie qui peut tenir
        </h2>

        <p>
          Trois clients de votre réseau peuvent prouver de la valeur sans
          prouver un canal. Tenez un entonnoir où chaque dénominateur reste
          visible : entreprises réellement ciblées, contacts délivrés, personnes
          éligibles, conversations, rendez-vous acheteur, offres, pilotes,
          comptes ayant obtenu un premier résultat et renouvellements. Une liste
          d’emails brute ne remplace pas cette chaîne.
        </p>

        <p>
          Testez un canal à la fois avec une cible et un message définis :
          partenaires, réseau professionnel, prospection ciblée, contenu
          spécialisé, événement ou acquisition payante. Le premier objectif
          n’est pas de calculer un coût d’acquisition client (CAC) définitif ;
          c’est de comprendre si vous pouvez obtenir à nouveau une conversation
          éligible hors de votre entourage, et à quel coût observé.
        </p>

        <h3>Les formules minimales avant un devis de produit</h3>

        <p>Pour un compte comparable, posez au moins :</p>

        <ul>
          <li>
            contribution mensuelle = prix encaissable − infrastructure −
            fournisseurs − support variable − opérations variables ;
          </li>
          <li>
            délai de récupération = coût d’acquisition et d’accompagnement
            initial ÷ contribution mensuelle, uniquement si cette contribution
            est positive ;
          </li>
          <li>
            capacité de support = temps humain disponible ÷ temps mensuel par
            compte ;
          </li>
          <li>
            contribution cumulée après N mois = N × contribution mensuelle −
            acquisition − accompagnement initial.
          </li>
        </ul>

        <p>
          Les trois scénarios suivants sont des{" "}
          <strong>hypothèses fictives de sensibilité</strong>, pas des
          benchmarks ni des tarifs Hagnéré Code. Ils supposent un compte actif
          pendant toute la période, sans perte de client, remise, retard de
          paiement ou hausse de support.
        </p>

        <GuideTable
          headers={[
            "Scénario et hypothèses",
            "Contribution et récupération",
            "Contribution cumulée à 12 / 36 / 60 mois",
          ]}
          rows={economicsScenarios.map((scenario) => [
            `${scenario.name} — prix ${euro.format(
              scenario.monthlyPriceEur,
            )}, coût variable ${euro.format(
              scenario.monthlyVariableCostEur,
            )}, acquisition et accompagnement ${euro.format(
              scenario.acquisitionAndOnboardingCostEur,
            )}`,
            `${euro.format(
              scenario.monthlyContributionEur,
            )} par mois · taux de contribution ${decimal.format(
              scenario.contributionRatePercent ?? 0,
            )} % · récupération ${
              scenario.paybackMonths === null
                ? "non atteinte"
                : `${decimal.format(scenario.paybackMonths)} mois`
            }`,
            `${euro.format(
              scenario.cumulativeContribution12MonthsEur,
            )} / ${euro.format(
              scenario.cumulativeContribution36MonthsEur,
            )} / ${euro.format(scenario.cumulativeContribution60MonthsEur)}`,
          ])}
        />

        <p>
          Le développement initial, les coûts fixes, la TVA, l’impôt, le coût du
          capital et les pertes de clients sont exclus. Il faut ensuite
          confronter le nombre de comptes actifs nécessaires aux capacités
          réelles de vente, d’accompagnement initial et de support. Un scénario
          qui ne tient qu’avec un taux de contribution parfait et aucune perte
          de client est un signal à tester, pas un business plan.
        </p>

        <h2 id="faisabilite">
          9. Fermer les risques de faisabilité, de données et de sécurité
        </h2>

        <p>
          Une douleur forte et un acheteur motivé ne rendent pas une promesse
          réalisable. Faites un essai technique sur la question la plus risquée,
          pas une architecture complète. L’objectif peut être d’importer un
          échantillon fictif, vérifier une API, éprouver une règle de droits ou
          produire le résultat attendu.
        </p>

        <GuideTable
          headers={[
            "Risque",
            "Preuve avant pilote",
            "Critère avant production",
          ]}
          rows={[
            [
              "Donnée",
              "Source, qualité, droit d’usage et échantillon minimisé",
              "Modèle, conservation, export, suppression et responsabilités",
            ],
            [
              "Intégration",
              "Appel ou import sur le chemin critique",
              "Limites, erreurs, reprise, surveillance et dépendance fournisseur",
            ],
            [
              "Droits",
              "Rôles et cas interdits sur un prototype",
              "Authentification, autorisation, moindre privilège et revue",
            ],
            [
              "Fiabilité",
              "Résultat contrôlable et mode manuel",
              "Sauvegarde, restauration testée, journalisation et incident",
            ],
            [
              "Performance",
              "Volume et délai représentatifs du pilote",
              "Charge, pic, coût, disponibilité et dégradation acceptable",
            ],
            [
              "Réversibilité",
              "Sortie du pilote sans perte de travail",
              "Export exploitable, suppression et migration documentées",
            ],
          ]}
        />

        <p>
          La CNIL demande de limiter les données à ce qui est adéquat, pertinent
          et nécessaire, puis de définir leur durée. Informez les personnes
          selon le mode de collecte et ne stockez pas de données sensibles dans
          les notes ou journaux sans nécessité. Pour un SaaS qui traite des
          données pour un client, les rôles et l’encadrement contractuel prévu
          par l’
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD
          </a>{" "}
          doivent être qualifiés ; une simple case « RGPD » ne suffit pas.
        </p>

        <p>
          La sécurité n’attend pas la « vraie version ». Même un pilote doit
          préciser les accès, les secrets, les mises à jour, les sauvegardes, la
          journalisation utile, le traitement d’un incident et le retour au mode
          précédent. L’
          <a
            href="https://owasp.org/www-project-application-security-verification-standard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OWASP ASVS 5.0.0
          </a>{" "}
          fournit le référentiel stable consulté le 28 juillet 2026. Le{" "}
          <a
            href="https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide d’hygiène de l’ANSSI
          </a>{" "}
          rassemble 42 mesures publiées en 2017 et se déclare non exhaustif. Ces
          deux bases doivent donc être complétées et adaptées au risque actuel
          du pilote.
        </p>

        <InfoBox
          variant="amber"
          title="Prospection internationale : aucune règle mondiale unique"
        >
          <p>
            La France, le Royaume-Uni, l’Australie, le Canada et les États-Unis
            n’encadrent pas de façon identique l’email, le SMS, les traceurs, la
            collecte indirecte ou le B2B. Ouvrez la règle du pays avant de
            recruter des participants :
          </p>
          <ul className="mb-3 mt-2 space-y-1">
            <li>
              France :{" "}
              <a
                href="https://www.cnil.fr/fr/communication-electronique-quelles-regles"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL — communications électroniques
              </a>
              .
            </li>
            <li>
              Royaume-Uni :{" "}
              <a
                href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ICO — marketing B2B
              </a>
              .
            </li>
            <li>
              Australie :{" "}
              <a
                href="https://www.acma.gov.au/avoid-sending-spam"
                target="_blank"
                rel="noopener noreferrer"
              >
                ACMA — Spam Act
              </a>
              .
            </li>
            <li>
              Canada :{" "}
              <a
                href="https://crtc.gc.ca/eng/com500/guide.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                CRTC — loi canadienne anti-pourriel
              </a>
              .
            </li>
            <li>
              États-Unis :{" "}
              <a
                href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
                target="_blank"
                rel="noopener noreferrer"
              >
                FTC — CAN-SPAM
              </a>
              .
            </li>
          </ul>
          <p>
            Qualifiez la cible, le canal, la source des données et les pays
            concernés avant une campagne ; cette liste oriente la vérification,
            elle ne remplace pas l’analyse juridique du cas réel.
          </p>
        </InfoBox>

        <h2 id="cas">10. Cas fictif complet : ConformiSuivi</h2>

        <p>
          Ce cas sert à montrer la méthode et les calculs. Il est entièrement
          fictif : aucun montant n’est une moyenne de marché, un tarif ou un
          résultat client.
        </p>

        <h3>Hypothèse de départ</h3>

        <p>
          « Les PME ont besoin d’un SaaS qui centralise leurs preuves de
          conformité. » Cette phrase est trop large. Après recrutement, le
          segment devient : cabinets de conseil de 10 à 40 personnes qui
          préparent chaque mois plusieurs dossiers clients avec preuves reçues
          par email et tableur.
        </p>

        <h3>Seuils écrits avant le test</h3>

        <ul>
          <li>au moins 5 incidents récents sur 8 entretiens éligibles ;</li>
          <li>au moins 3 introductions vers l’acheteur ;</li>
          <li>au moins 2 pilotes manuels acceptés ;</li>
          <li>au moins 1 engagement payé sur une offre précise ;</li>
          <li>aucune impossibilité critique dans le périmètre proposé.</li>
        </ul>

        <p>
          Ces nombres organisent cet exemple ; ils ne recommandent pas huit
          entretiens ni un paiement pour tout SaaS.
        </p>

        <h3>Budget de décision reproductible</h3>

        <GuideTable
          headers={["Poste fictif", "Calcul", "Montant"]}
          rows={[
            ["Temps fondateur", "52 h × 60 €/h", "3 120 €"],
            ["Indemnités d’entretien", "8 × 50 €", "400 €"],
            ["Test d’accès à la cible", "Plafond", "300 €"],
            ["Revue de faisabilité", "4 h × 120 €/h", "480 €"],
            ["Total valorisé", "3 120 € + 1 180 €", "4 300 €"],
          ]}
        />

        <p>
          Les entretiens documentent cinq incidents et trois introductions. Une
          contradiction apparaît : deux cabinets utilisent déjà un logiciel
          vertical satisfaisant. La cible est donc resserrée aux équipes
          multi-clients sans outil adapté ; la promesse ne reconstruit pas les
          fonctions déjà disponibles.
        </p>

        <p>
          Deux acheteurs acceptent le principe d’un pilote manuel, l’un signe un
          engagement payé. La revue technique ne trouve pas d’impossibilité
          critique, mais le temps de support n’est pas encore connu et aucun
          usage répété n’a eu lieu. Le verdict est donc{" "}
          <strong>
            PILOTE BORNÉ de quatre semaines, pas développement du SaaS complet
          </strong>
          .
        </p>

        <InfoBox variant="emerald" title="La valeur du cas est sa limite">
          Le paiement ferme une partie du risque d’offre. Il ne ferme ni le
          risque de rétention, ni le coût de support, ni le canal répétable. Le
          pilote doit donc mesurer ces points avant le cahier des charges du
          MVP.
        </InfoBox>

        <h2 id="usage">
          11. Mesurer le premier résultat, les retours et la fidélité
        </h2>

        <p>
          Beaucoup de guides s’arrêtent à la prévente. Or un SaaS ne crée pas sa
          valeur lorsque le contrat est signé, mais lorsque l’utilisateur
          obtient un résultat puis revient. Définissez avant le pilote
          l’événement qui marque ce premier résultat utile : ce doit être une
          action qui produit de la valeur, pas « compte créé » ou « connexion
          réussie ».
        </p>

        <GuideTable
          headers={["Mesure", "Question", "Piège"]}
          rows={[
            [
              "Situation de départ",
              "Comment la tâche réussit-elle aujourd’hui, avec quel délai et quel effort ?",
              "Comparer le pilote à une impression",
            ],
            [
              "Premier résultat utile",
              "Quel événement prouve que le travail attendu est accompli ?",
              "Choisir une métrique de vanité",
            ],
            [
              "Délai jusqu’au premier résultat utile",
              "Combien de temps et d’aide entre l’entrée et ce résultat ?",
              "Masquer l’accompagnement humain initial",
            ],
            [
              "Usage répété",
              "La personne revient-elle à la fréquence naturelle du travail ?",
              "Imposer J7 à une tâche mensuelle",
            ],
            [
              "Rétention de cohorte",
              "Parmi les comptes activés, combien restent actifs à l’échéance pertinente ?",
              "Diviser par les inscrits ou changer le dénominateur",
            ],
            [
              "Renouvellement / expansion",
              "Le payeur continue-t-il, augmente-t-il ou recommande-t-il avec preuve ?",
              "Confondre intention et décision",
            ],
            [
              "Clients perdus et abandons",
              "Qui quitte, à quel moment, et pour quelle alternative ?",
              "Ne contacter que les utilisateurs satisfaits",
            ],
          ]}
        />

        <p>
          J7, J30 ou J90 sont des points d’observation possibles, pas des
          standards. Une tâche quotidienne peut exiger des retours en quelques
          jours ; un processus trimestriel demande un horizon plus long. Écrivez
          la fréquence naturelle, la cohorte et le dénominateur. Un pilote payé
          mais jamais activé est une alerte, pas une victoire commerciale.
        </p>

        <h2 id="decision">12. Décider : STOP, pivot, pilote ou MVP limité</h2>

        <p>
          Préécrivez la décision avant le résultat. Sinon, chaque signal
          défavorable deviendra une raison de « tester encore » jusqu’à obtenir
          la conclusion souhaitée.
        </p>

        <GuideTable
          headers={[
            "État du dossier",
            "Décision",
            "Prochaine dépense autorisée",
          ]}
          rows={[
            [
              "Test trompeur, donnée non autorisée, promesse impossible ou aucun responsable",
              "STOP",
              "Corriger la condition ; ne pas lancer le pilote",
            ],
            [
              "Problème, segment ou alternative contredit",
              "PIVOT ou ARRÊT",
              "Reformuler une hypothèse ou protéger le budget",
            ],
            [
              "Problème encore fondé sur des opinions",
              "DISCOVERY",
              "Recrutement éligible et observation du travail actuel",
            ],
            [
              "Problème réel mais acheteur, prix, canal ou faisabilité inconnus",
              "TESTER L’OFFRE",
              "Prototype, offre ou essai technique ciblé",
            ],
            [
              "Engagement obtenu, usage répété non mesuré",
              "PILOTE BORNÉ",
              "Service manuel ou produit limité avec sortie",
            ],
            [
              "Usage, économie et risques documentés dans le premier cas",
              "CANDIDAT MVP",
              "Cadrer uniquement le premier usage prouvé",
            ],
          ]}
        />

        <h3>Quand la meilleure décision est de ne rien développer</h3>

        <ul>
          <li>
            un outil existant couvre le besoin à un coût et un risque inférieurs
            ;
          </li>
          <li>
            le problème est rare, faible ou déjà absorbé sans conséquence ;
          </li>
          <li>
            la cible n’est accessible qu’au travers de relations non répétables
            ;
          </li>
          <li>
            le payeur ne peut pas engager de budget ou de prochaine étape ;
          </li>
          <li>
            le service humain nécessaire détruit la contribution au prix accepté
            ;
          </li>
          <li>
            les données, la sécurité ou l’intégration rendent la promesse
            inacceptable.
          </li>
        </ul>

        <p>
          Acheter l’existant, rester en service manuel, attendre un changement
          réglementaire, resserrer la cible ou arrêter sont des résultats de
          validation utiles. Le budget préservé fait partie du résultat.
        </p>

        <h2 id="plan-14-jours">
          13. Un plan d’enquête sur 14 jours — pas une validation garantie
        </h2>

        <p>
          Deux semaines peuvent produire une première décision si la cible est
          joignable et le risque limité. Elles ne suffisent pas à observer une
          rétention mensuelle, un achat complexe ou une intégration réglementée.
          Adaptez le calendrier au cycle naturel.
        </p>

        <ol>
          <li>
            <strong>Jours 1–2 :</strong> écrire segment, non-cible, travail,
            alternative, hypothèse, métrique, seuil et STOP.
          </li>
          <li>
            <strong>Jours 3–6 :</strong> recruter hors entourage, mener les
            entretiens éligibles et coder faits, interprétations et
            contradictions.
          </li>
          <li>
            <strong>Jours 7–8 :</strong> cartographier alternatives, comité
            d’achat, canal et inconnue technique la plus risquée.
          </li>
          <li>
            <strong>Jours 9–11 :</strong> exécuter le test le plus léger :
            prototype, service réalisé manuellement, page d’offre honnête ou
            essai technique ciblé.
          </li>
          <li>
            <strong>Jours 12–13 :</strong> présenter une offre bornée à la
            personne habilitée et journaliser la décision réelle.
          </li>
          <li>
            <strong>Jour 14 :</strong> appliquer le seuil préécrit : arrêter,
            pivoter, lancer un autre test ou cadrer un pilote.
          </li>
        </ol>

        <p>
          Si la décision est un pilote, un second calendrier commence. Il doit
          couvrir la fréquence naturelle de la tâche et mesurer le premier
          résultat utile, les retours, le support, les incidents, la
          contribution et la sortie. N’intégrez pas rétroactivement ce pilote
          dans les « 14 jours » pour déclarer l’idée validée.
        </p>

        <GuideInlineCTA
          title="Faites relire un dossier déjà mesuré"
          description="Copiez le dossier produit par le journal : aucune donnée n’est transmise automatiquement. Ajoutez le segment, les faits, les contradictions, l’offre, le seuil, le résultat et le verrou restant. Nous pouvons recommander un autre test, un outil existant, un pilote limité — ou l’absence de développement."
          tags={[
            "Preuves relues",
            "STOP conservés",
            "Périmètre du premier usage",
          ]}
          ctaLabel="Faire relire mon dossier"
          ctaHref="/demarrer-un-projet?service=saas&source=guide-validation-saas"
        />

        <h2 id="sources">Sources, champ couvert et limites</h2>

        <p>
          Sources rouvertes ou consultées le 28 juillet 2026. Les méthodes
          étrangères renforcent la discipline de recherche et de test ; leurs
          règles administratives, juridiques ou commerciales ne sont pas
          transposées automatiquement à une entreprise française.
        </p>

        <h3>Recherche utilisateur, faits recueillis et expérimentation</h3>

        <ul>
          <li>
            <a
              href="https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK — Learning about users and their needs
            </a>{" "}
            : pratiques actuelles, problèmes et besoins fondés sur la recherche.
          </li>
          <li>
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK — How the discovery phase works
            </a>{" "}
            : comprendre le problème, les contraintes et la décision avant
            l’engagement.
          </li>
          <li>
            <a
              href="https://www.gov.uk/service-manual/design/making-prototypes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK — Making prototypes
            </a>{" "}
            : tester avant de construire et ne pas confondre prototype et
            production.
          </li>
          <li>
            <a
              href="https://www.digital.gov.au/policy/digital-experience/digital-service-standard/criterion-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Government — Know your user
            </a>{" "}
            et{" "}
            <a
              href="https://www.digital.gov.au/policy/digital-experience/toolkit/service-design-and-delivery-process/alpha-stage-testing-hypotheses"
              target="_blank"
              rel="noopener noreferrer"
            >
              testing hypotheses
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards/iterate-improve-frequently.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Government of Canada — Iterate and improve frequently
            </a>{" "}
            : situation de départ mesurée, indicateurs, prototypes,
            documentation et changement de direction.
          </li>
          <li>
            <a
              href="https://design.canada.ca/continuous-improvement/research.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada.ca — Research and prototyping
            </a>{" "}
            : prototypage comme réduction de risque et comparaison.
          </li>
          <li>
            <a
              href="https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Test Card
            </a>{" "}
            et{" "}
            <a
              href="https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strength of evidence
            </a>
            .
          </li>
          <li>
            <a
              href="https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steve Blank — Customer hypotheses
            </a>{" "}
            : hypothèses client et apprentissage terrain.
          </li>
          <li>
            <a
              href="https://www.ycombinator.com/blog/ycs-essential-startup-advice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Y Combinator — Essential startup advice
            </a>{" "}
            et{" "}
            <a
              href="https://www.ycombinator.com/interviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              interview guide
            </a>{" "}
            : utilisateurs, acquisition, usage, rétention et économie unitaire.
          </li>
        </ul>

        <h3>Données, propriété intellectuelle et sécurité</h3>

        <ul>
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
              information et transparence
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
            et{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles"
              target="_blank"
              rel="noopener noreferrer"
            >
              cookies et traceurs
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/se-preparer-au-depot-dune-e-soleau"
              target="_blank"
              rel="noopener noreferrer"
            >
              INPI — Se préparer au dépôt d’une e-Soleau
            </a>{" "}
            : preuve de création à une date, sans monopole sur l’idée.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Guide d’hygiène informatique
            </a>{" "}
            et{" "}
            <a
              href="https://owasp.org/www-project-application-security-verification-standard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP ASVS
            </a>
            .
          </li>
        </ul>

        <p className="text-sm">
          Ce guide organise une décision et des expériences. Il ne constitue ni
          une étude de marché, ni une garantie de ventes, de rentabilité, de
          classement SEO ou de conformité, ni un conseil juridique, fiscal ou
          financier personnalisé. Les chiffres ConformiSuivi et les scénarios
          12/36/60 mois sont fictifs et reproductibles. Ils ne décrivent aucun
          client ni tarif réel.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
