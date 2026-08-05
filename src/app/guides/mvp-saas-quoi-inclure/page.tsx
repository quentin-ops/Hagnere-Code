import Image from "next/image";
import Link from "next/link";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import {
  assessMvpContract,
  createAccordiaAutonomousPaymentFailure,
  createAccordiaCapacityStress,
  createAccordiaCriticalDeferred,
  createAccordiaExample,
  createAccordiaFirstClientDeferredAsNon,
  createAccordiaUnknownManualDuration,
  mvpFamilyLabels,
  mvpTreatmentLabels,
} from "./mvp-contract-engine";
import { MvpFirstClientContractTool } from "./mvp-contract-tool";

const guide = getGuide("mvp-saas-quoi-inclure");
const heroEmphasis = "quoi inclure";
const heroEmphasisIndex = guide.heroTitle.indexOf(heroEmphasis);

if (heroEmphasisIndex < 0) {
  throw new Error(`Accent du H1 absent du registre : ${heroEmphasis}`);
}

const heroHeading = {
  start: guide.heroTitle.slice(0, heroEmphasisIndex).trimEnd(),
  emphasis: heroEmphasis,
  suffix: guide.heroTitle
    .slice(heroEmphasisIndex + heroEmphasis.length)
    .trimStart(),
} as const;

const breadcrumbName = guide.cardTitle;

export const metadata = buildGuideMetadata(
  guide,
  "Contrat de test d’un MVP SaaS en sept familles",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const accordiaInput = createAccordiaExample();
const accordia = assessMvpContract(accordiaInput);
const accordiaStress = assessMvpContract(createAccordiaCapacityStress());
const accordiaDeferred = assessMvpContract(createAccordiaCriticalDeferred());
const accordiaUnknown = assessMvpContract(
  createAccordiaUnknownManualDuration(),
);
const accordiaPayment = assessMvpContract(
  createAccordiaAutonomousPaymentFailure(),
);
const accordiaDoubleVolume = assessMvpContract({
  ...accordiaInput,
  pilotClientCount: "6",
});
const accordiaFirstClientDeferred = assessMvpContract(
  createAccordiaFirstClientDeferredAsNon(),
);

const toc = [
  {
    id: "minimum",
    number: "01",
    label: "Définir le test minimum",
    shortLabel: "Minimum",
  },
  {
    id: "format",
    number: "02",
    label: "Choisir le format du test",
    shortLabel: "Format",
  },
  {
    id: "parcours",
    number: "03",
    label: "Rendre le parcours observable",
    shortLabel: "Parcours",
  },
  {
    id: "familles",
    number: "04",
    label: "Décider pour les sept familles",
    shortLabel: "7 familles",
  },
  {
    id: "manuel",
    number: "05",
    label: "Calculer le travail manuel",
    shortLabel: "Manuel",
  },
  {
    id: "exemple",
    number: "06",
    label: "Rejouer le cas Accordia",
    shortLabel: "Exemple",
  },
  {
    id: "outil",
    number: "07",
    label: "Remplir le contrat local",
    shortLabel: "Outil",
  },
  {
    id: "alternatives",
    number: "08",
    label: "Comparer les options plus simples",
    shortLabel: "Options",
  },
  {
    id: "decision",
    number: "09",
    label: "Faire relire la décision",
    shortLabel: "Décider",
  },
  {
    id: "faq",
    number: "10",
    label: "Fermer les questions fréquentes",
    shortLabel: "FAQ",
  },
];

const treatmentRows = [
  [
    mvpTreatmentLabels.CONSTRUIRE,
    "Le comportement porte la preuve recherchée ou doit rester maîtrisé dans le produit.",
    "Test d’acceptation et reprise en cas d’échec.",
  ],
  [
    mvpTreatmentLabels.MANUEL,
    "Une personne peut délivrer le résultat dans les limites du test.",
    "Responsable, calcul de charge, limite et moment où revoir ce choix.",
  ],
  [
    mvpTreatmentLabels.INTEGRER,
    "Un service existant couvre le besoin sans effacer vos responsabilités.",
    "États, erreurs, solution de repli, sortie et responsable.",
  ],
  [
    mvpTreatmentLabels.REPORTER,
    "La capacité n’est pas nécessaire à un prototype ou à un pilote choisi ; ce traitement est bloqué pour un premier client en production.",
    "Motif lié au format et déclencheur observable de réexamen.",
  ],
  [
    mvpTreatmentLabels.INCONNU,
    "La décision n’est pas encore défendable.",
    "Question, responsable et preuve à obtenir ; jamais zéro.",
  ],
];

const familyRows = [
  [
    mvpFamilyLabels.valueJourney,
    "Promesse vendue, parcours principal, état de réussite.",
    "Le client obtient le résultat annoncé et cet événement est observable.",
  ],
  [
    mvpFamilyLabels.accountsAccess,
    "Invitation, authentification, rôles et départ d’un utilisateur.",
    "Seules les personnes autorisées accèdent aux bonnes données.",
  ],
  [
    mvpFamilyLabels.dataContinuity,
    "Collecte minimale, export, sauvegarde, restauration et suppression.",
    "Une reprise testée existe pour les données réellement utilisées.",
  ],
  [
    mvpFamilyLabels.salesEntitlements,
    "Contrat, prix, facture, paiement et droits ouverts ou retirés.",
    "Chaque état commercial produit le droit attendu, y compris en échec.",
  ],
  [
    mvpFamilyLabels.helpIncidents,
    "Canal d’aide, délai, diagnostic, communication et escalade.",
    "Un utilisateur sait où signaler le blocage et qui le prend en charge.",
  ],
  [
    mvpFamilyLabels.administrationOperations,
    "Actions opérateur, journal utile, configuration et continuité.",
    "L’équipe peut exploiter sans accès improvisé ni secret dans les journaux.",
  ],
  [
    mvpFamilyLabels.measurementExit,
    "Événement de preuve, seuil de décision, export et fin du test.",
    "Continuer, modifier ou arrêter s’appuie sur une preuve définie avant le test.",
  ],
];

const scenarioRows = [
  [
    "Accordia · 3 clients",
    accordia.manualLoadMinutes + " min / capacité 300 min sur la période",
    accordia.publicLabel,
  ],
  [
    "Capacité dépassée · 5 clients",
    accordiaStress.manualLoadMinutes + " min / capacité 300 min",
    accordiaStress.publicLabel,
  ],
  [
    "Population doublée · 6 clients",
    accordiaDoubleVolume.manualLoadMinutes + " min / capacité 300 min",
    accordiaDoubleVolume.publicLabel,
  ],
  [
    "Continuité reportée",
    accordiaDeferred.manualLoadMinutes +
      " min calculées, mais non compensatoires",
    accordiaDeferred.publicLabel,
  ],
  [
    "Durée manuelle inconnue",
    "165 min restent visibles, avec l’état partiel/inexploitable ; aucune inconnue ne vaut zéro",
    accordiaUnknown.publicLabel,
  ],
  [
    "Achat autonome incomplet",
    "Échec de paiement et droits associés non décidés",
    accordiaPayment.publicLabel,
  ],
  [
    "Premier client · « Non » puis « Reporter »",
    "Une famille de responsabilité reste sans traitement actuel",
    accordiaFirstClientDeferred.publicLabel,
  ],
];

export default function Page() {
  return (
    <GuidesShell>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <GuidePremiumLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Contrat de test", variant: "dark" },
          { label: "7 familles", variant: "neutral" },
          { label: "Calcul local", variant: "success" },
          {
            label: "Mis à jour le " + formatGuideDate(guide.dateModified),
            variant: "muted",
          },
        ]}
        heroTitle={heroHeading.start}
        heroTitleEm={heroHeading.emphasis}
        heroTitleSuffix={heroHeading.suffix}
        heroDescription="Commencez par le résultat vendu et la preuve attendue. Pour chacune des sept familles, choisissez une option : construire, gérer manuellement, intégrer, reporter ou garder à vérifier. Puis calculez la charge humaine sans transformer une inconnue en zéro."
        stats={[
          { label: "Familles", value: "7" },
          { label: "Traitements", value: "5" },
          { label: "Statuts", value: "7" },
          { label: "Score global", value: "Aucun" },
          { label: "Calculateur · envoi", value: "Aucun" },
          { label: "Lecture", value: guide.readTimeMin + " min" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        toc={toc}
        tocLabel="Du format du test à la décision humaine"
        strategyCta={{
          titleStart: "Faire relire",
          titleEm: "le contrat avant le code",
          description:
            "Apportez une version sans donnée sensible : résultat vendu, format et période du test, sept familles et leurs choix, preuves, responsables et charge manuelle. La revue doit pouvoir recommander un test plus simple ou maintenir un STOP.",
          badges: [
            "Inconnues conservées",
            "Exploitation incluse",
            "Alternative plus simple possible",
          ],
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={[
          {
            source:
              "Eric Ries · What is an MVP? · page consultée le 2 août 2026",
            href: "https://leanstartup.co/resources/articles/what-is-an-mvp/",
            description:
              "Définit le MVP comme une version permettant un maximum d’apprentissage validé avec le moins d’effort. La page ne fournit ni checklist technique universelle ni date de republication fiable.",
          },
          {
            source: "GOV.UK Service Manual · Alpha · mise à jour 8 mai 2019",
            href: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works",
            description:
              "Prototypes et test des hypothèses les plus risquées. La transposition aide à distinguer apprentissage et production ; elle ne constitue pas une norme pour un SaaS privé.",
          },
          {
            source:
              "GOV.UK Service Manual · Beta · mise à jour 19 février 2021",
            href: "https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works",
            description:
              "Bêta privée avec utilisateurs limités, parcours de bout en bout et support. Les phases et durées d’un service public britannique ne sont pas reprises comme délais de marché.",
          },
          {
            source: "GOV.UK Service Manual · Live · mise à jour 8 mai 2019",
            href: "https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works",
            description:
              "Exploitation durable, responsables, support, disponibilité, mesure, sécurité et accessibilité d’un service en vie. Cette source publique britannique borne une responsabilité d’exploitation ; elle n’impose aucune fonction à un SaaS privé.",
          },
          {
            source: "RGPD · texte consolidé · articles 5, 25 et 32",
            href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:02016R0679-20160504",
            description:
              "Minimisation, protection dès la conception et sécurité adaptée au risque lorsque des données personnelles sont traitées. Bases légales, rôles et mesures restent à qualifier au cas par cas.",
          },
          {
            source: "CNIL · Guide RGPD du développeur · page vivante",
            href: "https://www.cnil.fr/fr/guide-rgpd-du-developpeur",
            description:
              "Pratiques de développement pour intégrer la protection des données. Ce guide pédagogique ne remplace pas l’analyse juridique du traitement réel.",
          },
          {
            source: "CNIL · Guide de la sécurité · édition 2024",
            href: "https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles-nouvelle-edition-2024",
            description:
              "Page publiée le 26 mars 2024 : fiches pratiques de sécurité. Les mesures doivent rester proportionnées aux données, aux risques et au contexte.",
          },
          {
            source: "ANSSI · Sauvegardes · version 1.1 du 27 novembre 2025",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
            description:
              "Recommande des tests réguliers et une procédure de restauration. Le guide ne fixe pas un objectif unique de reprise pour tous les MVP.",
          },
          {
            source: "OWASP ASVS · version stable 5.0.0",
            href: "https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release",
            description:
              "Catalogue vérifiable d’exigences de sécurité applicative, publié comme version stable le 30 mai 2025. Le niveau et le sous-ensemble pertinents dépendent du risque.",
          },
          {
            source: "OWASP · Logging Cheat Sheet · page vivante",
            href: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
            description:
              "Événements utiles, tests des défaillances du journal et données à exclure. Elle ne prescrit pas un volume identique de journaux pour tous les produits.",
          },
          {
            source: "W3C · WCAG 2.2 · Recommendation du 12 décembre 2024",
            href: "https://www.w3.org/TR/WCAG22/",
            description:
              "Critères techniques testables d’accessibilité du contenu Web. La conformité à WCAG ne suffit pas seule à conclure sur toutes les obligations applicables.",
          },
          {
            source: "Stripe · Subscription webhooks · documentation vivante",
            href: "https://docs.stripe.com/billing/subscriptions/webhooks",
            description:
              "Montre les états et événements à traiter pour des abonnements Stripe, notamment les échecs de paiement et droits d’accès. Cette logique est propre au fournisseur et au modèle retenu.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée et provenance",
          title: "Portée : préparation d’une revue humaine",
          description:
            "Accordia, ses clients, ses durées et ses résultats sont entièrement fictifs. Les sources soutiennent des principes dans leurs champs propres ; elles ne prouvent ni conformité, ni sécurité, ni viabilité commerciale de votre produit. La date de publication correspond à la première trace Git du contenu antérieur et non à une preuve de mise en ligne publique. Cette refonte reste prête pour revue humaine, sans preuve de déploiement ou d’indexation.",
        }}
        relatedGuides={[
          {
            label: "Valider une idée SaaS avant de développer",
            href: "/guides/valider-idee-saas-avant-developper",
          },
          {
            label: "Écrire un cahier des charges SaaS comparable",
            href: "/guides/cahier-des-charges-saas",
          },
          {
            label: "Calculer un calendrier SaaS par dépendances",
            href: "/guides/combien-de-temps-developper-saas",
          },
          {
            label: "Prioriser les fonctionnalités après le socle",
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
          },
        ]}
        relatedGuidesLabel="4 décisions voisines à relier au contrat"
      >
        <GuidePremiumSection
          id="minimum"
          number="01"
          label="Réponse directe"
          title="Délimitez le minimum par la preuve à obtenir"
        >
          <p>
            Le minimum d’un MVP SaaS ne se compte ni en écrans ni en fonctions.
            Il prend la forme d’un test borné : une population précise obtient
            un résultat vendu par un parcours défini, puis un événement
            observable indique s’il faut continuer, modifier ou arrêter. Le «
            contrat de test » relie ce résultat aux responsables, aux limites et
            aux preuves attendues. Même réduit, le périmètre couvre
            l’exploitation dont le test dépend.
          </p>
          <p>
            Écrivez d’abord sept éléments : le format et la période exacte du
            test, le résultat vendu, l’événement qui fera preuve, le nombre
            maximal de clients, le mode de vente et la capacité humaine totale
            disponible sur cette période. Passez ensuite les sept familles en
            revue. Une fonctionnalité absente est acceptable si le contrat
            attribue encore chaque responsabilité nécessaire au test.
          </p>
          <p>
            Avec un premier client en production, chaque famille reçoit un
            traitement actuel. Le couple « Non » puis « Reporter » laisse la
            responsabilité sans traitement ; un choix manuel ou intégré reste
            possible.
          </p>

          <GuideTable
            caption="Les cinq traitements possibles pour chaque famille"
            headers={[
              "Traitement",
              "Quand il peut convenir",
              "Ce qu’il faut écrire",
            ]}
            rows={treatmentRows}
          />

          <InfoBox
            variant="amber"
            title="Un client réel rend les responsabilités opérationnelles visibles"
          >
            <p>
              Dès qu’un vrai client dépend du service, attribuez les accès, les
              données, les échecs, l’aide, les opérations et la sortie. Chacune
              de ces responsabilités peut prendre une forme frugale ou manuelle
              si son responsable reste explicite.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="format"
          number="02"
          label="Frontière du test"
          title="Choisissez d’abord le format : prototype, pilote ou premier client"
        >
          <p>
            Le format fixe ce que vous pourrez conclure. Un prototype sans
            production peut tester une compréhension ou un parcours sans
            accueillir de données réelles. Un pilote accompagné sert quelques
            utilisateurs avec une équipe présente et des limites annoncées. Un
            premier client en production dépend du service. Son invitation
            déclenche la revue des conditions d’exploitation, de sécurité, de
            continuité et de support prévues pour ce cas.
          </p>

          <p>
            Si l’inconnue porte encore sur le format lui-même — compréhension,
            faisabilité, travail réel ou apprentissage client — utilisez la
            matrice{" "}
            <Link href="/guides/mvp-prototype-ou-poc">
              prototype, POC, pilote ou MVP
            </Link>{" "}
            avant de fixer ce contrat de test. Elle permet aussi de conclure
            qu’un entretien, un test manuel ou un outil existant suffit.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/mvp-saas-quoi-inclure/contrat-test-mvp-16x9.webp"
              alt="Trois formats de test SaaS indépendants appliqués au même contrat en sept familles"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
              priority
            />
          </div>

          <GuideTable
            caption="Ce que chaque format permet de conclure"
            headers={["Format", "Population et réalité", "Conclusion maximale"]}
            rows={[
              [
                "Prototype sans production",
                "Données fictives ou contrôlées, aucun client dépendant",
                "Concluez uniquement sur l’incertitude choisie ; ce format n’autorise pas la production.",
              ],
              [
                "Pilote accompagné",
                "Clients bornés, support rapproché, limites annoncées",
                "Soumettez le contrat à une revue de pilote.",
              ],
              [
                "Premier client en production",
                "Un client dépend du service dans les conditions convenues",
                "Soumettez le contrat à une décision humaine de mise en production.",
              ],
            ]}
          />

          <GuidePremiumMemo title="Écrivez la ligne d’arrivée en une phrase">
            <p>
              Remplacez les crochets : « Pendant [période exacte], avec au plus
              [nombre] clients, nous délivrons [résultat] par [parcours] ;
              [événement observable] fera preuve ; les limites et les reprises
              sont écrites ci-dessous. »
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="parcours"
          number="03"
          label="Promesse observable"
          title="Décrire une journée réelle révèle les capacités oubliées"
        >
          <p>
            Partez du moment où l’utilisateur cherche à obtenir le résultat,
            puis suivez les états normaux et les échecs. Nommez la personne qui
            l’invite. Décrivez ce qui arrive quand son accès est refusé, sa
            donnée invalide, son paiement échoué ou son résultat incomplet. Pour
            chaque échec, attribuez la détection, la réponse, la restauration et
            la décision suivante. Cette journée transforme une liste d’écrans en
            responsabilités testables.
          </p>

          <GuideTable
            caption="Parcours minimal à rendre observable"
            headers={["Moment", "Question", "Trace ou preuve attendue"]}
            rows={[
              [
                "Entrée",
                "Qui peut commencer et avec quel droit ?",
                "Invitation ou accès autorisé, refus compréhensible.",
              ],
              [
                "Action de valeur",
                "Quel résultat l’utilisateur cherche-t-il ?",
                "Événement de réussite relié à la promesse vendue.",
              ],
              [
                "Échec",
                "Comment détecter, expliquer et reprendre ?",
                "État d’erreur, responsable et procédure de reprise.",
              ],
              [
                "Aide",
                "Comment l’utilisateur demande-t-il de l’aide ?",
                "Canal, engagement réaliste et escalade.",
              ],
              [
                "Sortie",
                "Comment termine-t-on le test ou la relation ?",
                "Export, retrait des accès et décision documentée.",
              ],
            ]}
          />

          <p>
            Une ouverture de session ou un clic ne vaut preuve que s’il
            correspond au résultat vendu. Avant le test, écrivez qui consultera
            l’événement retenu, à quel moment et quelle décision il pourra
            réellement changer.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="familles"
          number="04"
          label="Sept responsabilités"
          title="Attribuez une décision et un responsable à chacune des sept familles"
        >
          <p>
            Les sept familles répartissent sept responsabilités ; elles ne
            prescrivent aucun module logiciel. Pour chacune, indiquez si elle
            est nécessaire au test, le choix retenu, le responsable, la preuve
            attendue et la reprise en cas d’échec. Terminez par le « déclencheur
            de réexamen » : l’événement observable qui vous obligera à revoir ce
            choix.
          </p>
          <p>
            Une décision « non nécessaire » doit rester motivée par le format.
            Dans un prototype ou un pilote borné, ce motif peut justifier un
            report. Avec un premier client en production, le domaine reste actif
            et demande un traitement actuel. Ce traitement peut être manuel ou
            confié à une intégration.
          </p>

          <GuideTable
            caption="Les sept familles du contrat de test"
            headers={[
              "Famille",
              "Décisions couvertes",
              "Test d’acceptation à réussir",
            ]}
            rows={familyRows}
          />

          <p>
            Si le test traite des données personnelles, consignez la finalité,
            la minimisation, les rôles, la base légale, la conservation et les
            mesures adaptées au risque. Pour la continuité, rejouez un scénario
            réaliste de restauration : la présence d’une sauvegarde ne suffit
            pas. Pour les journaux techniques, nommez l’événement à observer et
            les secrets à exclure.
          </p>

          <InfoBox
            variant="blue"
            title="Achat autonome : traiter aussi les états qui n’aboutissent pas"
          >
            <p>
              Si le client achète seul, écrivez les états de commande, de
              facture, de paiement, d’abonnement et de droits. Associez une
              action explicite à chaque paiement refusé, retardé, contesté ou
              annulé. Dans ce mode, la famille « Vente et droits associés » est
              nécessaire au test et doit être marquée « Oui ». « Non » puis «
              Reporter » ne produit jamais un candidat, même si les états et la
              procédure d’échec sont remplis. La page de paiement seule laisse
              cette responsabilité ouverte.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="manuel"
          number="05"
          label="Capacité humaine"
          title="Le travail manuel doit être nommé, borné et calculé"
        >
          <p>
            Une opération manuelle permet d’apprendre avant d’automatiser si
            vous nommez l’opération, son responsable, sa limite, sa reprise en
            cas d’échec et le moment où ce choix devra être revu. Additionnez
            ensuite la charge de toutes les familles manuelles pour le nombre
            maximal de clients du test. Nommez d’abord la période couverte : les
            occurrences par client et la capacité totale doivent porter sur
            l’ensemble de cette même période. Aucune conversion implicite de
            semaine, de jour ou de disponibilité n’est appliquée.
          </p>

          <FormulaBox>
            {
              "sur une même période nommée : charge d’une opération = minutes par occurrence × occurrences par client sur toute la période × clients\ncharge manuelle totale sur cette période = somme des opérations manuelles\ncapacité restante sur cette période = capacité totale disponible sur cette même période − charge manuelle totale"
            }
          </FormulaBox>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/guides/mvp-saas-quoi-inclure/charge-manuelle-mvp-4x3.webp"
              alt="Équation de charge manuelle comparée à une capacité humaine bornée"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>

          <GuideTable
            caption="Les quatre équations manuelles du cas Accordia"
            headers={["Famille", "Équation exacte", "Charge"]}
            rows={accordia.manualEquations.map((equation) => [
              equation.familyLabel,
              equation.equation,
              (equation.totalMinutes ?? "À vérifier") + " min",
            ])}
          />

          <p>
            Pour la période fictive « {accordiaInput.testHorizon} », Accordia
            consomme {accordia.manualLoadMinutes} minutes sur une capacité
            totale de {accordia.manualCapacityMinutes} minutes, soit{" "}
            {accordia.remainingCapacityMinutes} minutes restantes. Chaque
            fréquence par client et cette capacité couvrent toute la même
            période. Le calcul établit uniquement que la charge décrite tient
            dans la capacité saisie, sous les hypothèses écrites. Il n’établit
            ni la sécurité ni la légalité du test.
          </p>

          <InfoBox
            variant="amber"
            title="Une durée manquante ne devient jamais zéro"
          >
            <p>
              Le moteur laisse les autres équations visibles et maintient le
              STOP tant que l’opération inconnue n’est pas bornée. La somme
              conserve les nombres encore calculables, mais affiche
              explicitement « partiel/inexploitable » et reste impropre à une
              décision.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exemple"
          number="06"
          label="Cas fictif"
          title="Les STOP d’Accordia restent prioritaires, même quand le total semble tenir"
        >
          <GuidePremiumCase
            initial="A"
            eyebrow="Exemple entièrement fictif"
            title="Accordia · suivi d’accords B2B · pilote accompagné"
          >
            <p>
              Accordia est un SaaS B2B entièrement fictif. Sa liste initiale
              fictive mélange huit envies : annuaire fournisseurs, demandes
              d’achat, dépôt de devis, circuit de décision, commentaires,
              signature, paiement et tableaux de bord. Le test réduit cette
              liste à un résultat vendu borné : obtenir une décision traçable
              sur un devis fournisseur sans échange de fichier par courriel.
              Seuls l’invitation nominative, le dépôt contrôlé, l’approbation ou
              le refus motivé, puis la restitution et l’export de la décision
              appartiennent à ce test ; le reste sort du périmètre.
            </p>
            <p>
              Pendant la période fictive « {accordiaInput.testHorizon} », trois
              entreprises testent ce parcours. Le contrat prévoit 300 minutes
              d’opérations manuelles sur toute cette période. Quatre opérations
              totalisent 237 minutes : 72 minutes d’accès, 60 minutes de données
              et continuité, 45 minutes de vente et droits, et 60 minutes
              d’aide. Il reste 63 minutes avant revue humaine.
            </p>
          </GuidePremiumCase>

          <GuideTable
            caption="Sept variantes du même contrat fictif"
            headers={["Variante", "Observation", "Statut déterministe"]}
            rows={scenarioRows}
          />

          <p>
            Dans la variante à cinq clients, la même organisation demande 395
            minutes et dépasse la capacité de 95 minutes. La variante à six
            clients double exactement la population fictive de départ : la
            charge atteint {accordiaDoubleVolume.manualLoadMinutes} minutes et
            dépasse la capacité de 174 minutes. Ce doublement exact vient des
            seuls facteurs inchangés de l’exemple.
          </p>
          <p>
            Le moteur examine le report critique avant la capacité. Reporter la
            continuité nécessaire laisse 177 minutes calculées et maintient le
            STOP. Si la durée ou le responsable d’une opération manuelle est
            inconnu, les 165 minutes des seules opérations exploitables restent
            visibles avec l’état « partiel/inexploitable », sans permettre de
            conclure : le STOP « opération manuelle non bornée » reste
            prioritaire sur le dépassement de capacité.
          </p>
          <p>
            Un achat autonome sans procédure d’échec de paiement bloque aussi la
            revue. Dans ce mode, « Vente et droits associés » doit être
            nécessaire : la déclarer « Non » puis la reporter reste un STOP,
            même avec les états et la procédure complets. En production,
            déclarer toute autre famille « Non » puis la reporter provoque
            également un STOP : le libellé ne supprime pas la responsabilité.
          </p>

          <GuidePremiumMemo
            eyebrow="Ordre des contrôles"
            title="Le premier STOP applicable fixe le statut"
          >
            <ol>
              <li>
                Décisions indispensables inconnues ou invalides, dont la période
                du test et la nécessité de « Vente et droits associés » pour un
                achat autonome.
              </li>
              <li>
                Capacité nécessaire au test mais reportée, ou famille reportée
                pour un premier client en production même marquée « Non ».
              </li>
              <li>Opération manuelle non bornée.</li>
              <li>Capacité manuelle dépassée.</li>
              <li>Format non productif, pilote ou premier client à relire.</li>
            </ol>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="07"
          label="Outil local"
          title="Remplissez le contrat localement, sans transmission ni stockage"
        >
          <p>
            Le formulaire s’ouvre vide ; vous pouvez charger l’exemple fictif à
            la demande. Le calcul se fait uniquement dans votre navigateur :
            aucune requête réseau, aucun stockage local et aucun téléchargement.
            Le résultat réunit la période, les états et la procédure d’achat
            autonome, chaque limite et équation manuelle, les inconnues, le
            statut et un texte Markdown sélectionnable ou copiable. Ce texte
            conserve ainsi les décisions qui ont conduit au verdict.
          </p>
          <p>
            Les limites numériques écartent les entrées hors du périmètre
            technique : un million au maximum pour les clients, les minutes et
            les occurrences, avec trois décimales au plus. Les minutes par
            occurrence et les occurrences par client doivent être strictement
            positives ; une capacité totale nulle reste une décision possible.
            Ces bornes ne sont pas des références commerciales. Corrigez toute
            valeur signalée avant d’interpréter le statut.
          </p>

          <div className="not-prose my-8">
            <MvpFirstClientContractTool />
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="alternatives"
          number="08"
          label="Alternatives avant le code"
          title="Comparez service, intégration et absence de logiciel avant de construire"
        >
          <p>
            Le choix dépend de l’incertitude à fermer. Une maquette ou un
            entretien structuré peut suffire pour comprendre le problème. Pour
            éprouver la livraison du résultat, un service accompagné révèle le
            processus avant son automatisation. Une capacité générique déjà
            couverte par un produit existant peut être intégrée si ses états et
            ses erreurs préservent la preuve recherchée.
          </p>
          <p>
            Pour une intégration, écrivez qui détecte l’indisponibilité, quelle
            solution de repli protège le client, qui reprend l’erreur et comment
            quitter le fournisseur sans perdre la preuve ou les données
            nécessaires.
          </p>

          <GuideTable
            caption="Alternatives à comparer avant de construire"
            headers={[
              "Incertitude principale",
              "Test plus simple possible",
              "Ce qu’il doit prouver",
            ]}
            rows={[
              [
                "Le problème est-il prioritaire ?",
                "Entretiens, observation ou pré-engagement",
                "Une situation précise conduit à une décision réelle.",
              ],
              [
                "Le parcours est-il compris ?",
                "Prototype cliquable avec données fictives",
                "Les utilisateurs accomplissent et expliquent le parcours.",
              ],
              [
                "Le résultat crée-t-il de la valeur ?",
                "Service concierge ou opération accompagnée",
                "Le résultat est obtenu et justifie la suite.",
              ],
              [
                "Une capacité générique est-elle nécessaire ?",
                "Intégration d’un service existant",
                "États, erreurs, coûts et réversibilité restent acceptables.",
              ],
              [
                "Aucune preuve ne changerait la décision",
                "Arrêter ou différer",
                "Le coût évité est explicitement assumé.",
              ],
            ]}
          />

          <p>
            Les contenus concurrents consultés en août 2026 suivent souvent deux
            recettes. La première réduit le MVP à « une promesse, un parcours,
            une mesure », parfois assortis de quotas ou de délais universels. La
            seconde impose d’emblée une plateforme mutualisée entre clients, un
            paiement automatisé, une connexion d’entreprise ou une durée fixe.
            Les deux confondent le cœur d’apprentissage et le minimum
            opérationnel. Définissez chaque capacité depuis le test réel et
            écartez tout nombre de clients, de semaines ou gain de vitesse
            externe présenté comme règle.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="09"
          label="Revue humaine"
          title="Un statut « candidat » signifie seulement « prêt à relire »"
        >
          <div className="not-prose my-8 mx-auto max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/mvp-saas-quoi-inclure/decision-mvp-1x1.webp"
              alt="Arbre sans score : quatre STOP prioritaires et trois verdicts indépendants par format"
              width={900}
              height={900}
              sizes="(max-width: 640px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <p>
            Avant toute invitation réelle, une personne désignée relit la
            promesse et les preuves, puis confirme qu’un responsable est
            attribué à chaque choix. La même revue couvre les accès, les
            données, les tests de reprise, la sécurité, l’accessibilité, les
            incidents, la capacité et les termes convenus avec le client.
          </p>
          <p>
            Le résultat du moteur n’a aucune autorité juridique ou technique
            propre. « Candidat » veut seulement dire que le contrat est assez
            renseigné pour entrer dans cette revue.
          </p>

          <GuideTable
            caption="Décision finale à documenter après le calcul"
            headers={[
              "Décision",
              "Quand elle est défendable",
              "Trace attendue",
            ]}
            rows={[
              [
                "Continuer",
                "La preuve reste utile, les responsabilités sont acceptées et les STOP sont fermés.",
                "Contrat de test relu, responsable et date de revue.",
              ],
              [
                "Réduire le format",
                "Un prototype ou service accompagné répond à l’incertitude sans exposer un client.",
                "Nouvelle frontière et nouvelle conclusion maximale.",
              ],
              [
                "Modifier le traitement",
                "La charge, le risque ou la reprise rendent le choix actuel inadapté.",
                "Traitement remplacé et nouvelle preuve.",
              ],
              [
                "Arrêter ou différer",
                "Le test n’apprend rien de décisif ou ses conditions ne sont pas acceptables.",
                "Motif, événement éventuel de réexamen et responsable.",
              ],
            ]}
          />

          <p>
            Test automatisé, image valide et page rendue prouvent chacun leur
            propre contrôle. Le déploiement, la publication, l’indexation et
            l’acceptation par un client demandent des preuves distinctes après
            la revue éditoriale et technique.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="faq"
          number="10"
          label="Questions fréquentes"
          title="Répondez aux dernières questions avant de figer le périmètre"
        >
          <h3>Combien de fonctionnalités faut-il dans un MVP SaaS ?</h3>
          <p>
            Il n’existe aucun nombre universel. Gardez ce qui produit la preuve
            choisie et rend le format retenu exploitable ; une capacité peut
            rester manuelle ou intégrée.
          </p>

          <h3>Peut-on lancer sans paiement automatisé ?</h3>
          <p>
            Oui, si le mode convenu est un contrat et une facture gérés
            manuellement, avec responsable et droits associés. Si l’achat est
            autonome, marquez « Vente et droits associés » comme nécessaire,
            puis fermez les états de paiement, d’échec et de retrait des droits.
          </p>

          <h3>Le support peut-il être un simple courriel ?</h3>
          <p>
            Oui, pour un test borné, si l’adresse, le responsable, les délais
            réalistes, l’escalade et la communication d’incident sont écrits.
            Une boîte non surveillée n’est pas un dispositif d’aide.
          </p>

          <h3>Faut-il automatiser les sauvegardes dès le pilote ?</h3>
          <p>
            L’automatisation des sauvegardes n’est pas obligatoire dans tous les
            pilotes. Une continuité déclarée nécessaire doit exister et rester
            testable selon les données et le risque ; une copie jamais restaurée
            ne démontre pas la reprise.
          </p>

          <h3>
            Un statut candidat signifie-t-il que le produit est conforme ?
          </h3>
          <p>
            Non. « Candidat » signifie seulement que le contrat peut être relu.
            La conformité, la sécurité, l’accessibilité, les engagements
            contractuels et la décision de production restent à vérifier dans le
            contexte réel.
          </p>

          <h3>Que faire si une durée manuelle est inconnue ?</h3>
          <p>
            Gardez-la « à vérifier », mesurez un petit échantillon ou nommez une
            borne prudente défendable, puis rejouez le calcul. Ne la remplacez
            ni par zéro ni par une moyenne de marché sans preuve.
          </p>

          <h3>Quand passer du manuel à l’automatisation ?</h3>
          <p>
            Quand le déclencheur écrit avant le test est atteint : charge,
            fréquence, erreur, délai, risque ou volume maximal. Comparez alors
            automatisation, réduction du test, intégration et arrêt.
          </p>

          <h3>Ce contrat définit-il une architecture SaaS ?</h3>
          <p>
            Non. Il organise les décisions du test. Architecture, isolation des
            clients, hébergement, contrôle d’accès et intégrations doivent être
            choisis selon les contraintes réelles et faire l’objet de leur
            propre revue. Si l’alternative porte précisément sur une plateforme
            no-code et une base de code dédiée, le guide{" "}
            <Link href="/guides/bubble-ou-saas-sur-mesure">
              Bubble ou SaaS sur mesure
            </Link>{" "}
            les compare sur les mêmes preuves, le coût total et la capacité à
            changer de solution.
          </p>

          <h3>
            Peut-on utiliser le Markdown généré comme cahier des charges ?
          </h3>
          <p>
            Oui, comme point de départ seulement. Il faut encore faire relire
            les responsabilités, les preuves, les obligations, les tests
            d’acceptation et les conditions de production, puis versionner les
            décisions acceptées.
          </p>
        </GuidePremiumSection>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Pour préparer les décisions en amont, consultez aussi{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            la validation d’une idée SaaS
          </Link>
          . Pour rendre le résultat comparable entre prestataires, reliez ce
          contrat au{" "}
          <Link href="/guides/cahier-des-charges-saas">
            cahier des charges SaaS
          </Link>
          . Pour attribuer ensuite chaque responsabilité à une agence, un
          freelance, l’interne ou une équipe hybride, utilisez le guide{" "}
          <Link href="/guides/agence-saas-ou-freelance">
            agence SaaS ou freelance
          </Link>
          .
        </p>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
