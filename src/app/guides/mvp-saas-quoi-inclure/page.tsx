import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { TrackedGuideCtaLink } from "@/components/guides/tracked-guide-cta-link";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import {
  assessMvpContract,
  createAccordiaCapacityStress,
  createAccordiaCriticalDeferred,
  createAccordiaExample,
  createAccordiaUnknownManualDuration,
  mvpFamilyLabels,
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
  "Ce qui entre dans le premier lot d’un SaaS, ce qui peut rester manuel, et ce que coûte une coupe ratée",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

/* ──────────────────────────────────────────────
   Cas construit — le moteur reste la source des totaux
   ────────────────────────────────────────────── */
const accordiaInput = createAccordiaExample();
const accordia = assessMvpContract(accordiaInput);
const accordiaStress = assessMvpContract(createAccordiaCapacityStress());
const accordiaDeferred = assessMvpContract(createAccordiaCriticalDeferred());
const accordiaUnknown = assessMvpContract(
  createAccordiaUnknownManualDuration(),
);
const accordiaDoubleVolume = assessMvpContract({
  ...accordiaInput,
  pilotClientCount: "6",
});

/** Lignes du décompte manuel, engendrées par une fonction unique. */
const manualRows = accordia.manualEquations.map((equation) => [
  equation.familyLabel,
  `${equation.operation} — ${equation.minutesPerOccurrence}\u00a0min × ${equation.occurrencesPerClient}\u00a0fois par client × ${equation.clients}\u00a0clients`,
  `${equation.totalMinutes ?? "à vérifier"}\u00a0min`,
]);

const toc = [
  {
    id: "minimum",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Réponse",
  },
  {
    id: "format",
    number: "02",
    label: "Le format du test",
    shortLabel: "Format",
  },
  {
    id: "parcours",
    number: "03",
    label: "La journée du client",
    shortLabel: "Journée",
  },
  {
    id: "familles",
    number: "04",
    label: "Sept responsabilités",
    shortLabel: "7 familles",
  },
  {
    id: "trop-inclus",
    number: "05",
    label: "Ce qu’on ajoute à tort",
    shortLabel: "À tort",
  },
  {
    id: "manuel",
    number: "06",
    label: "La charge humaine",
    shortLabel: "Charge",
  },
  {
    id: "exemple",
    number: "07",
    label: "Ce qui rate",
    shortLabel: "Incidents",
  },
  {
    id: "outil",
    number: "08",
    label: "Votre propre contrat",
    shortLabel: "Outil",
  },
  {
    id: "alternatives",
    number: "09",
    label: "Ne pas construire",
    shortLabel: "Options",
  },
  {
    id: "decision",
    number: "10",
    label: "Qui tranche",
    shortLabel: "Décider",
  },
];

const familyRows = [
  [
    mvpFamilyLabels.valueJourney,
    "Quel résultat le client vient-il chercher, et par quel chemin\u00a0?",
    "Une personne obtient le résultat vendu, et l’événement est enregistré.",
  ],
  [
    mvpFamilyLabels.accountsAccess,
    "Qui invite, qui entre, qui sort\u00a0?",
    "Un compte retiré ne voit plus rien, vérifié avec un vrai compte.",
  ],
  [
    mvpFamilyLabels.dataContinuity,
    "Que se passe-t-il si la base disparaît demain matin\u00a0?",
    "Une restauration a été rejouée, chronométrée, et l’export du client s’ouvre.",
  ],
  [
    mvpFamilyLabels.salesEntitlements,
    "Qu’est-ce qui ouvre les droits, et qu’est-ce qui les referme\u00a0?",
    "Un paiement refusé referme les droits sans intervention de nuit.",
  ],
  [
    mvpFamilyLabels.helpIncidents,
    "Où un utilisateur bloqué écrit-il, et qui lui répond\u00a0?",
    "Une demande envoyée le matin trouve son destinataire le jour même.",
  ],
  [
    mvpFamilyLabels.administrationOperations,
    "Qui corrige une donnée fausse, et avec quelle trace\u00a0?",
    "Une correction est faite sans accès improvisé, et le journal la garde.",
  ],
  [
    mvpFamilyLabels.measurementExit,
    "Sur quel événement décidez-vous de continuer ou d’arrêter\u00a0?",
    "L’événement distingue un résultat obtenu d’une simple connexion.",
  ],
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "perimetre",
    num: "01",
    label: "Délimiter le premier lot",
    items: [
      {
        question: "Combien de fonctions faut-il dans un MVP SaaS\u00a0?",
        answer:
          "Aucun nombre ne tient, et notre grille publique le montre. Relevée le 30\u00a0août 2026, elle affiche 15\u00a0000\u00a0€ HT pour un MVP de trois à cinq écrans, puis 30\u00a0000 à 60\u00a0000\u00a0€ HT pour un produit de dix à quinze écrans qui ajoute un back-office riche, des workflows métier complexes et des intégrations tierces. Entre six et neuf écrans, elle n’affiche aucun montant\u00a0: ce lot-là se chiffre au devis. Comptez donc vos écrans plutôt que vos fonctions, et sachez que sortir de la bande trois à cinq vous fait sortir du prix affiché.",
      },
      {
        question: "Peut-on lancer sans paiement en ligne\u00a0?",
        answer:
          "Tant que le client signe un contrat et reçoit une facture, la vente reste une opération humaine, avec un responsable nommé et des droits ouverts après contrôle. Le calcul de charge dit quand cette solution s’arrête\u00a0: quinze minutes par contrat tiennent sur trois clients, pas sur trente. Dès que l’achat devient autonome, la question change de nature. Ce ne sont plus les pages de paiement qui coûtent, ce sont les états d’échec, et ceux-là entrent dans le premier lot.",
      },
      {
        question: "Faut-il un back-office dès le premier lot\u00a0?",
        answer:
          "Rarement. Un écran d’administration complet pèse deux à trois écrans de développement\u00a0— estimation éditoriale Hagnéré Code, pas un tarif\u00a0— pour un usage réservé à une ou deux personnes. Pendant un test borné, un accès en lecture seule à la base, tenu par une personne nommée avec trois requêtes écrites d’avance et relues, rend le même service, et toute correction passe par un script relu. Une restitution complète relève, elle, de la famille «\u00a0Données et continuité\u00a0». La bascule se décide sur un déclencheur écrit\u00a0: le jour où cette personne passe plus d’une heure par semaine à corriger des données à la main, l’écran devient moins cher que le temps.",
      },
    ],
  },
  {
    key: "obligations",
    num: "02",
    label: "Responsabilités et obligations",
    items: [
      {
        question: "Quelles obligations s’appliquent dès le pilote\u00a0?",
        answer:
          "Dès qu’une donnée personnelle réelle entre dans le produit, le règlement européen s’applique, quel que soit le mot écrit sur le devis\u00a0: minimisation, protection dès la conception et sécurité proportionnée au risque, articles 5, 25 et 32. Écrivez donc la finalité, ce que vous collectez, qui y accède et combien de temps vous le gardez. Le guide de la sécurité de la CNIL, édition 2024, fournit les fiches pratiques\u00a0; il ne remplace pas l’analyse de votre traitement réel.",
      },
      {
        question: "Une sauvegarde suffit-elle pour la continuité\u00a0?",
        answer:
          "Une copie jamais restaurée ne prouve rien. Les fondamentaux de la sauvegarde publiés par l’ANSSI, version 1.1 du 27\u00a0novembre 2025, recommandent des tests réguliers et une procédure de restauration écrite. Pour un pilote, la version honnête tient en une heure\u00a0: restaurez un jeu d’essai sur un environnement séparé, chronométrez, notez qui l’a fait et ce qui a manqué. Sans ce chronomètre, la ligne «\u00a0sauvegarde quotidienne\u00a0» du devis reste une intention.",
      },
      {
        question: "Que faire si une durée manuelle est inconnue\u00a0?",
        answer:
          "Gardez-la «\u00a0à vérifier\u00a0» et mesurez-la sur un échantillon\u00a0: trois occurrences chronométrées valent mieux qu’une moyenne trouvée en ligne. Le calculateur de cette page refuse de conclure tant qu’une opération n’est pas bornée, garde les autres totaux visibles et les marque «\u00a0partiel/inexploitable\u00a0». Une inconnue remplacée par zéro ne disparaît pas\u00a0: elle réapparaît en troisième semaine, quand la personne qui tient l’opération n’a plus d’heures devant elle.",
      },
    ],
  },
  {
    key: "apres",
    num: "03",
    label: "Après le test",
    items: [
      {
        question: "Combien coûte l’exploitation une fois le MVP livré\u00a0?",
        answer:
          "Elle se contracte à part et elle n’est pas marginale. Notre page tarifs publie un repère indicatif d’environ 2\u00a0500\u00a0€ HT par mois pour le scénario de maintenance le plus léger. Douze mois à ce repère font environ 30\u00a0000\u00a0€ HT, soit la borne basse du forfait de développement suivant, qui va de 30\u00a0000 à 60\u00a0000\u00a0€ HT. Ce montant appartient à la décision de continuer, pas à la découverte du douzième mois. Le forfait réel, lui, est fixé au devis.",
      },
      {
        question: "Le résultat du calculateur vaut-il validation\u00a0?",
        answer:
          "Non. «\u00a0Candidat\u00a0» veut dire que le contrat est assez renseigné pour qu’une personne le relise, rien de plus. La conformité, la sécurité, l’accessibilité, les engagements commerciaux et la décision de mise en production se vérifient dans votre contexte, avec les personnes qui en répondent. Le calculateur ne produit aucun score et n’envoie rien\u00a0: il rend visibles les décisions manquantes et refuse de conclure à leur place.",
      },
      {
        question:
          "Peut-on se servir du texte produit comme cahier des charges\u00a0?",
        answer:
          "Comme point de départ. Il porte la période, le résultat vendu, les sept décisions, les responsables, les preuves attendues et le calcul de charge\u00a0— ce qu’un développeur a besoin de savoir pour chiffrer. Il ne contient ni critères de recette détaillés, ni contraintes techniques, ni conditions contractuelles. Le cahier des charges SaaS ajoute ces trois parties, et le plan de recette écrit ce qu’il faudra vérifier avant de payer la dernière échéance.",
      },
    ],
  },
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
          { label: "Méthode de cadrage 2026", variant: "dark" },
          { label: "SaaS et MVP", variant: "neutral" },
          { label: "Calcul local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle={heroHeading.start}
        heroTitleEm={heroHeading.emphasis}
        heroTitleSuffix={heroHeading.suffix}
        heroDescription={
          "Un MVP ne se mesure pas en fonctions, il se mesure en écrans et en responsabilités. Notre grille publiée tarife un MVP de trois à cinq écrans, puis un produit de dix à quinze écrans au périmètre plus large\u00a0; entre les deux, elle n’affiche aucun montant. Ce guide dit ce qui doit entrer dans le premier lot parce qu’un vrai client en dépend, ce qui peut rester tenu à la main\u00a0— avec le calcul de la charge humaine\u00a0— et ce que coûte une coupe ratée."
        }
        stats={[
          { label: "Forfait MVP publié", value: "15\u00a0000\u00a0€ HT" },
          { label: "Zone sans prix affiché", value: "6 à 9 écrans" },
          { label: "Responsabilités à attribuer", value: "7" },
          { label: "Score global", value: "Aucun" },
          { label: "Calculateur · envoi", value: "Aucun" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Cadrage sans périmètre imposé",
          titleStart: "Faire relire",
          titleEm: "votre premier lot",
          description:
            "Apportez le devis que vous avez sur la table, la liste des écrans et le nom de votre premier utilisateur. Le premier échange peut conclure qu’il faut couper, pas construire.",
          benefits: [
            "Écrans du lot 1 et du lot 2 séparés",
            "Charge humaine du test calculée avec vous",
            "Renoncer reste une conclusion acceptable",
          ],
          primaryCtaLabel: "Voir le service SaaS sur mesure",
          primaryCtaHref: "/services/saas-applications-metier",
        }}
        toc={toc}
        tocLabel="Du format du test à la décision humaine"
        mobileCtaLabel="Faire relire mon lot 1"
        sidebarContextCta={{
          eyebrow: "SaaS et applications métier",
          title: "Vous hésitez sur ce qui entre dans le premier lot\u00a0?",
          description:
            "Décrivez le résultat vendu, les utilisateurs prévus et les écrans envisagés, sans donnée personnelle ni secret. Nous commençons par ce qui peut sortir du lot 1 sans se payer deux fois.",
          benefits: [
            "Aucune fonction décidée d’avance",
            "Charge manuelle chiffrée avant le code",
            "Exploitation et sortie écrites au devis",
          ],
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
          badgeLabel: "Premier échange sans engagement de faisabilité",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Ce qui reste ouvert",
          titleEm: "avant de signer",
          titleEnd: "le premier lot.",
          subtitle:
            "Nombre de fonctions, paiement en ligne, back-office, obligations dès le pilote, sauvegardes testées, durées inconnues, coût d’exploitation et portée du calculateur.",
          ctaTitle: "Un point encore ouvert sur votre périmètre\u00a0?",
          ctaDescription:
            "Décrivez le résultat que vous voulez prouver et les écrans envisagés, sans transmettre de donnée sensible.",
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Hagnéré Code · tarifs publics",
            href: "/tarifs",
            description:
              "Grille relevée le 30\u00a0août 2026\u00a0: SaaS et applications métier à 15\u00a0000\u00a0€ HT pour un MVP de 3 à 5 écrans\u00a0— le ticket d’entrée de 6\u00a0900\u00a0€ HT de la même page est annoncé pour un site vitrine, et la grille écrit elle-même qu’un MVP «\u00a0Essentiel\u00a0» démarre à 15\u00a0000\u00a0€ HT, pas à 6\u00a0900\u00a0€ HT —, 30\u00a0000 à 60\u00a0000\u00a0€ HT pour 10 à 15 écrans avec back-office riche, workflows complexes, intégrations tierces et fonctions d’IA, aucun montant publié entre 6 et 9 écrans, Discovery Sprint 1\u00a0500\u00a0€ HT sur 2 jours dont le devis précise la déduction applicable si la phase suivante est lancée avec nous, cadrage payé systématique au-delà de 8\u00a0000\u00a0€ HT de projet, repère indicatif de maintenance à environ 2\u00a0500\u00a0€ HT par mois. Repères publics et indicatifs\u00a0: le devis signé fixe le prix ferme.",
          },
          {
            source:
              "Eric Ries · What is an MVP? · page consultée le 2 août 2026",
            href: "https://leanstartup.co/resources/articles/what-is-an-mvp/",
            description:
              "Définit le MVP comme la version qui permet le maximum d’apprentissage validé avec le moins d’effort. La page ne fournit ni liste de fonctions, ni durée, ni date de republication fiable.",
          },
          {
            source: "GOV.UK Service Manual · Alpha · mise à jour 8 mai 2019",
            href: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works",
            description:
              "Prototypes et test des hypothèses les plus risquées. La transposition aide à séparer apprentissage et production\u00a0; elle ne constitue pas une norme pour un SaaS privé.",
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
              "Exploitation durable\u00a0: responsables, support, disponibilité, mesure, sécurité et accessibilité d’un service en vie. Cette source borne une responsabilité d’exploitation, elle n’impose aucune fonction.",
          },
          {
            source: "RGPD · texte consolidé · articles 5, 25 et 32",
            href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:02016R0679-20160504",
            description:
              "Minimisation, protection dès la conception et sécurité adaptée au risque dès qu’un traitement de données personnelles existe. Bases légales, rôles et mesures restent à qualifier au cas par cas.",
          },
          {
            source: "CNIL · Guide de la sécurité · édition 2024",
            href: "https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles-nouvelle-edition-2024",
            description:
              "Page publiée le 26 mars 2024\u00a0: fiches pratiques de sécurité. Les mesures restent à proportionner aux données, aux risques et au contexte.",
          },
          {
            source: "ANSSI · Sauvegardes · version 1.1 du 27 novembre 2025",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
            description:
              "Recommande des tests réguliers et une procédure de restauration écrite. Le guide ne fixe pas un objectif unique de reprise pour tous les projets.",
          },
          {
            source:
              "OWASP ASVS · page projet · version stable 5.0.0 · consultée le 30\u00a0août 2026",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Catalogue vérifiable d’exigences de sécurité applicative. La page projet date la sortie\u00a0— «\u00a0[30 May 2025] ASVS Version 5.0.0 is released LIVE at Global AppSec EU Barcelona 2025!\u00a0»\u00a0— et renvoie vers «\u00a0the latest stable version of the ASVS (5.0.0)\u00a0». La page de version du dépôt, elle, n’affiche ni l’année ni le mot «\u00a0stable\u00a0». Le niveau et le sous-ensemble pertinents dépendent du risque du produit.",
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
              "Liste les événements d’abonnement à traiter, dont l’échec de paiement d’une facture et les changements d’état qui ouvrent ou referment un accès. Cette logique est propre au fournisseur et au modèle retenu.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée du guide",
          title: "Une méthode de cadrage, pas un audit de votre produit",
          description:
            "Ce guide ne valide ni la conformité, ni la sécurité, ni l’accessibilité, ni la viabilité commerciale d’un produit. Accordia, ses clients, ses durées, son abonnement et le coût de son temps interne sont choisis pour l’exemple et ne viennent d’aucune source\u00a0; seuls les montants de prestation sont repris de notre grille publiée, et ce n’est pas un dossier client. Les prix de notre grille ont été relevés le 30\u00a0août 2026 et sont à revérifier tous les douze mois. Seul un devis signé fixe un prix, un périmètre et un délai.",
        }}
        relatedGuides={[
          {
            label: "Comment rédiger un cahier des charges SaaS\u00a0?",
            href: "/guides/cahier-des-charges-saas",
          },
          {
            label: "Plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
          {
            label: "Sécurité d’une application métier avant sa mise en service",
            href: "/guides/securite-application-metier",
          },
        ]}
        relatedGuidesLabel="3 guides à lire juste après"
      >
        {/* ── 01 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="minimum"
          number="01"
          label="Réponse directe"
          readingTime="2 min"
          title="Ce que votre premier client rend obligatoire"
        >
          <p>
            Un devis arrive sur la table avec quatorze écrans et trois lots, et
            on vous demande lesquels partent dans le premier. La question est
            mal posée&nbsp;: le minimum d’un MVP&nbsp;— la première version mise
            entre les mains de vrais utilisateurs&nbsp;— ne se compte pas en
            fonctions.
          </p>
          <p>
            <strong>
              Un premier lot tient quand il réunit deux choses&nbsp;: il produit
              la preuve que vous êtes venu chercher, et il couvre les
              responsabilités qu’un vrai client fait naître le jour où il dépend
              du service.
            </strong>{" "}
            Le reste peut sortir, rester tenu à la main, ou passer par un
            service existant. Sur notre{" "}
            <Link href="/tarifs">grille publiée</Link>, relevée le 30&nbsp;août
            2026, un MVP de trois à cinq écrans est affiché 15&nbsp;000&nbsp;€
            hors taxes (HT)&nbsp;; un produit de dix à quinze écrans, avec
            back-office riche, workflows métier complexes et intégrations
            tierces, 30&nbsp;000 à 60&nbsp;000&nbsp;€ HT. Entre les deux, elle
            n’affiche rien.
          </p>
          <p>
            Ce guide vous fait écrire un contrat de test en sept lignes, puis
            calculer les heures humaines qu’il coûtera pendant qu’il tourne.
            Vous saurez alors quelles coupes sont gratuites, et laquelle fait
            sortir votre lot 1 de la seule bande que la grille tarifie.
          </p>

          <GuidePremiumCase
            initial="A"
            eyebrow="Fil rouge du guide · exemple construit"
            title={
              "Accordia\u00a0: huit envies, un seul résultat vendu, six semaines pour le prouver"
            }
          >
            <p>
              <em>
                Exemple construit&nbsp;: la période, le nombre d’entreprises,
                les durées manuelles, l’abonnement et le coût du temps interne
                sont choisis pour l’exemple et ne viennent d’aucune source.
                Seuls les montants de prestation viennent de notre grille
                publiée, et ce n’est pas un dossier client.
              </em>{" "}
              Accordia est un logiciel de suivi d’accords fournisseurs porté par
              une fondatrice et une opératrice. La liste de départ mélange huit
              envies&nbsp;: annuaire fournisseurs, demandes d’achat, dépôt de
              devis, circuit de décision, commentaires, signature électronique,
              paiement en ligne et tableaux de bord.
            </p>
            <p>
              Le test réduit cette liste à un seul résultat vendu&nbsp;: un
              devis fournisseur reçoit une décision tracée, sans échange de
              fichier par courriel. Le pilote court du 7&nbsp;septembre au
              18&nbsp;octobre 2026, soit six semaines, avec trois entreprises et
              un abonnement fixé à 240&nbsp;€ HT par mois et par entreprise dans
              cet exemple.
            </p>
          </GuidePremiumCase>

          <InfoBox
            variant="amber"
            title={"Vous ne pouvez pas nommer votre premier utilisateur\u00a0?"}
          >
            <p>
              Alors aucun périmètre ne se décide. Un test se règle sur une
              personne précise, pas sur un marché&nbsp;: le{" "}
              <Link href="/guides/signes-besoin-logiciel-metier">
                diagnostic en six réponses
              </Link>{" "}
              tranche avant, quand le problème lui-même n’est pas encore nommé.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        {/* ── 02 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="format"
          number="02"
          label="Frontière du test"
          readingTime="2 min"
          title={
            "Prototype, pilote ou premier client\u00a0: que pourrez-vous conclure\u00a0?"
          }
        >
          <p>
            Le mot écrit sur le devis ne décide de rien. Le format du test, lui,
            fixe la conclusion que vous aurez le droit de tirer et les
            responsabilités que vous devrez assumer. Le manuel de service
            britannique sépare de la même façon l’alpha, où l’on teste les
            hypothèses risquées sur des prototypes, la bêta privée, où de vrais
            utilisateurs entrent avec un support rapproché, et la phase live,
            qui suppose des responsables, une disponibilité et une mesure. C’est
            un cadre de service public, pas une norme pour un logiciel
            privé&nbsp;; la découpe, elle, se transpose.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/mvp-saas-quoi-inclure/contrat-test-mvp-16x9.webp"
              alt="Trois formats de test SaaS indépendants appliqués au même contrat en sept familles"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>

          <GuideTable
            caption="Ce que chaque format autorise à conclure, et ce qu’il rend non négociable"
            headers={[
              "Format",
              "Qui utilise, avec quelles données",
              "Ce que vous pourrez conclure",
              "Ce qui devient non négociable",
            ]}
            rows={[
              [
                "Prototype sans production",
                "Personne d’extérieur, données fictives",
                "L’incertitude que vous avez choisie, rien de plus",
                "Aucune donnée réelle n’entre, y compris «\u00a0juste pour tester\u00a0»",
              ],
              [
                "Pilote accompagné",
                "2 à 5 clients réels (estimation éditoriale Hagnéré Code, aucune source ne borne un pilote), limites annoncées, équipe présente",
                "Que le résultat s’obtient dans des conditions accompagnées",
                "Accès nominatifs, reprise des données, canal d’aide nommé",
              ],
              [
                "Premier client en production",
                "1 client dépend du service pour son travail quotidien",
                "Que le produit tient sans vous derrière l’écran",
                "Les 7 responsabilités de la section 04, quel que soit le mot du devis",
              ],
            ]}
          />

          <p>
            Le piège tient à un enchaînement court&nbsp;: le devis dit
            «&nbsp;MVP&nbsp;», le client signe, ses données réelles entrent, et
            vous êtes en production sans l’avoir décidé. Le règlement européen
            ne lit pas le mot du devis&nbsp;: dès qu’une donnée personnelle
            réelle est traitée, ses articles 5, 25 et 32 s’appliquent&nbsp;—
            minimisation, protection dès la conception, sécurité proportionnée
            au risque.
          </p>

          <GuidePremiumMemo
            eyebrow="Le test des dix minutes"
            title="Écrivez la ligne d’arrivée en une phrase, avant tout le reste"
          >
            <p>
              Remplacez les crochets&nbsp;: «&nbsp;Pendant [période exacte],
              avec au plus [nombre] clients, nous délivrons [résultat] par
              [parcours]&nbsp;; [événement observable] fera preuve.&nbsp;» Sur
              le cas construit&nbsp;: du 7&nbsp;septembre au 18&nbsp;octobre
              2026, avec au plus trois entreprises, un devis fournisseur reçoit
              une décision tracée&nbsp;; la décision enregistrée puis exportée
              fera preuve. Un crochet que vous ne savez pas remplir désigne une
              décision encore ouverte&nbsp;: tranchez-la avant le devis.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        {/* ── 03 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="parcours"
          number="03"
          label="Méthode"
          readingTime="1 min"
          title="Une journée du client montre ce que la liste d’écrans oublie"
        >
          <p>
            La méthode tient en une heure et une feuille. Prenez un utilisateur
            nommé, une journée, et déroulez du moment où il veut le résultat
            jusqu’à celui où il l’a. À chaque étape, écrivez ce qui se passe
            quand ça rate. Le devis décrit le parcours quand tout marche&nbsp;;
            les fonctions manquantes apparaissent dans ce qui rate.
          </p>

          <ol>
            <li>
              <strong>Entrée. </strong>Qui l’invite, et que voit-il si son accès
              est refusé&nbsp;? Une page blanche est un incident de support.
            </li>
            <li>
              <strong>Première donnée. </strong>D’où vient-elle, et que se
              passe-t-il si elle est fausse&nbsp;? Un import raté sans message
              lisible fait revenir l’utilisateur vers vous.
            </li>
            <li>
              <strong>Action de valeur. </strong>Quel geste produit le résultat
              vendu, et où cet événement est-il enregistré&nbsp;?
            </li>
            <li>
              <strong>Échec. </strong>Qui détecte, qui répond, qui restaure, et
              en combien de temps&nbsp;?
            </li>
            <li>
              <strong>Aide. </strong>Où écrit-il, et quel délai lui a-t-on
              réellement annoncé&nbsp;?
            </li>
            <li>
              <strong>Sortie. </strong>Comment récupère-t-il ses données si le
              test s’arrête&nbsp;? Cette ligne n’a pas d’écran, et la section 07
              en donne le prix.
            </li>
          </ol>

          <p>
            Reste la mesure, et elle décide de ce que le test aura prouvé. Une
            connexion n’est pas un résultat, un clic non plus. L’événement de
            preuve d’Accordia porte l’identifiant du devis, le rôle de la
            personne et l’horodatage&nbsp;; le seuil est écrit avant le
            début&nbsp;: au moins deux des trois entreprises obtiennent une
            décision tracée sans courriel avant le 18&nbsp;octobre.
          </p>
          <p>
            Et si une seule y arrive&nbsp;? On ne prolonge pas de deux semaines
            pour aller chercher la deuxième. On rouvre les entretiens pour
            comprendre pourquoi la deuxième entreprise a continué d’envoyer des
            pièces jointes, et on accepte que la réponse puisse être «&nbsp;le
            problème n’était pas là&nbsp;». Déplacer le seuil après coup revient
            à changer l’hypothèse pour qu’elle devienne vraie.
          </p>
        </GuidePremiumSection>

        {/* ── 04 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="familles"
          number="04"
          label="Sept responsabilités"
          readingTime="3 min"
          title="Sept responsabilités, et le propriétaire de chacune"
        >
          <p>
            Sept familles suffisent à couvrir ce qu’un test met en jeu. Elles ne
            décrivent aucun module logiciel&nbsp;: ce sont des responsabilités,
            et chacune doit trouver une personne, pas un écran. Pour chaque
            ligne, écrivez la décision, le responsable, la preuve attendue, la
            reprise en cas d’échec et l’événement qui la fera revoir.
          </p>

          <GuideTable
            caption={
              "Les sept familles\u00a0: la question à trancher et le test à réussir"
            }
            headers={[
              "Famille",
              "La question à trancher",
              "Le test d’acceptation à réussir",
            ]}
            rows={familyRows}
          />

          <p>
            Trois de ces lignes s’appuient sur un référentiel extérieur qui
            recommande, là où le règlement européen cité à la section 02 oblige.
            Pour les données, les fondamentaux de la sauvegarde publiés par
            l’ANSSI en version 1.1 du 27&nbsp;novembre 2025 recommandent des
            tests réguliers et une procédure de restauration&nbsp;: une copie
            jamais restaurée ne prouve rien. Pour la sécurité, le catalogue
            OWASP ASVS, version stable 5.0.0 publiée le 30 mai 2025, permet de
            choisir un sous-ensemble proportionné. Pour l’accessibilité, les
            critères WCAG 2.2, recommandation du 12 décembre 2024, se testent
            écran par écran et ne s’ajoutent pas après coup sans refaire les
            gabarits.
          </p>

          <GuidePremiumMemo
            eyebrow="Cinq réponses possibles, aucune par défaut"
            title="Ce qu’on écrit en face d’une responsabilité"
          >
            <ul>
              <li>
                <strong>Construire dans le produit. </strong>Le comportement
                porte la preuve recherchée. Écrivez le test d’acceptation et la
                reprise en cas d’échec.
              </li>
              <li>
                <strong>Opérer manuellement. </strong>Une personne délivre le
                résultat dans les limites du test. Écrivez son nom, le calcul de
                charge, la limite et le moment où ce choix sera revu.
              </li>
              <li>
                <strong>Intégrer un service existant. </strong>Écrivez les
                états, les erreurs, le repli, la sortie et le responsable&nbsp;—
                l’intégration déplace le travail, elle ne supprime pas la
                responsabilité.
              </li>
              <li>
                <strong>Reporter avec déclencheur. </strong>Réservé au prototype
                et au pilote borné, avec le motif et l’événement qui rouvrira le
                sujet.
              </li>
              <li>
                <strong>À vérifier. </strong>La décision n’est pas encore
                défendable. Écrivez la question, le responsable et la preuve à
                obtenir&nbsp;; jamais zéro.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Une famille déclarée non nécessaire doit l’être à cause du format,
            pas par fatigue. Devant un premier client en production, la
            responsabilité reste active&nbsp;: tenue à la main ou confiée à un
            service, jamais remise à plus tard. Le calculateur de la section 08
            l’applique.
          </p>

          <InfoBox
            variant="blue"
            title={
              "Achat autonome\u00a0: ce sont les échecs qui coûtent, pas la page de paiement"
            }
          >
            <p>
              Si le client paie seul par carte, la famille «&nbsp;Vente et
              droits associés&nbsp;» devient nécessaire. La documentation Stripe
              sur les webhooks d’abonnement liste les événements à traiter, à
              commencer par l’échec de paiement d’une facture et les changements
              d’état qui ouvrent ou referment un accès. Écrivez ce qui se passe
              pour un paiement refusé, retardé, contesté ou annulé. Sans cette
              procédure, la page encaisse les cas nominaux et laisse les autres
              ouverts&nbsp;: le client garde son accès, et vous gardez une
              facture impayée.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        {/* ── 05 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="trop-inclus"
          number="05"
          label="Le lot 1 gonflé"
          readingTime="3 min"
          title={"Qu’est-ce qu’on ajoute à tort dans le premier lot\u00a0?"}
        >
          <p>
            Un premier lot ne gonfle pas d’un coup&nbsp;: il gonfle par ajouts
            qui paraissent raisonnables un par un. En voici six. La colonne
            «&nbsp;ce que ça pèse&nbsp;» est exprimée en écrans et non en
            euros&nbsp;: c’est une estimation éditoriale Hagnéré Code, à
            confronter à votre devis, pas un tarif.
          </p>

          <GuideTable
            caption="Six ajouts à interroger, ce qu’ils pèsent et ce qui suffit pendant le test"
            headers={[
              "Ce qu’on ajoute",
              "Ce que ça pèse",
              "Ce qui suffit pendant le test",
            ]}
            rows={[
              [
                "Un écran d’administration complet",
                "2 à 3 écrans, pour une ou deux personnes",
                "Un accès en lecture seule à la base, une personne nommée, trois requêtes écrites d’avance",
              ],
              [
                "Une matrice de rôles et de permissions",
                "1 écran, plus de la complexité dans toutes les pages",
                "Deux rôles écrits, et la liste des données qu’un rôle ne doit jamais voir",
              ],
              [
                "L’authentification unique d’entreprise",
                "Une intégration par annuaire client, jamais mutualisable",
                "Des invitations nominatives\u00a0; l’authentification unique se chiffre quand le contrat est signé",
              ],
              [
                "Une application mobile",
                "Un second produit à construire, à publier et à maintenir",
                "Un site qui reste lisible sur un écran de téléphone",
              ],
              [
                "Un tableau de bord de statistiques",
                "1 à 2 écrans qui ne changent aucune décision du test",
                "Un événement nommé, un export, et la personne qui les lit",
              ],
              [
                "Le paiement en ligne",
                "Les états d’échec, bien plus que la page de paiement",
                "Un contrat et une facture, tant que les clients tiennent dans la capacité",
              ],
            ]}
          />

          <p>
            Le substitut de la première ligne couvre la consultation et la
            correction, pas la restitution&nbsp;: produire un fichier qu’un
            client reprend dans son outil relève de «&nbsp;Données et
            continuité&nbsp;», et la section 07 en donne le prix.
          </p>

          <p>
            Additionnez la deuxième colonne. Trois lignes s’expriment en
            écrans&nbsp;: 2 à 3 pour l’administration, 1 pour les rôles, 1 à 2
            pour le tableau de bord, soit 4 au minimum et 6 au maximum. Les
            trois autres ne se comptent pas ainsi&nbsp;: l’authentification
            unique ajoute une intégration par annuaire client, l’application
            mobile un second produit, le paiement en ligne une série d’états
            d’échec. Un MVP de trois à cinq écrans qui les absorbe tous en
            compte sept à onze.
          </p>

          <p>
            Le rapport prix sur écran donne l’ordre de grandeur&nbsp;:
            15&nbsp;000&nbsp;€ HT pour trois à cinq écrans, soit 3&nbsp;000 à
            5&nbsp;000&nbsp;€ HT par écran&nbsp;; 30&nbsp;000 à
            60&nbsp;000&nbsp;€ HT pour dix à quinze écrans, soit 2&nbsp;000 à
            6&nbsp;000&nbsp;€ HT par écran. La division part de
            15&nbsp;000&nbsp;€&nbsp;: la grille réserve son ticket d’entrée de
            6&nbsp;900&nbsp;€ HT au site vitrine. Ce n’est pas un prix
            unitaire&nbsp;: le premier écran porte l’authentification, la base,
            le déploiement et la mise en ligne, le douzième ne les porte plus.
          </p>

          <p>
            La grille dit surtout ceci&nbsp;: entre six et neuf écrans, elle
            n’affiche aucun montant. Les deux forfaits publiés sont séparés de
            15&nbsp;000&nbsp;€ HT, 15&nbsp;000 contre 30&nbsp;000&nbsp;€ HT à la
            borne basse, mais ils ne couvrent pas le même produit&nbsp;: le
            second ajoute back-office riche, workflows métier complexes,
            intégrations tierces et fonctions d’intelligence artificielle. Cet
            écart mesure une marche entre deux périmètres différents, pas le
            prix de cinq écrans. Un lot 1 sorti de la bande trois à cinq écrans
            se chiffre au devis.
          </p>

          <p>
            Deux de ces six lignes méritent parfois d’entrer dès le premier lot,
            et le taire serait malhonnête. Le paiement en ligne devient
            obligatoire dès que le client achète seul&nbsp;: les états d’échec
            ne se rattrapent pas à la main. Les rôles le deviennent quand le
            produit affiche des salaires, des marges ou des données de santé,
            car la sécurité proportionnée au risque exigée par l’article 32 du
            règlement européen ne se reporte pas au lot 2.
          </p>
        </GuidePremiumSection>

        {/* ── 06 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="manuel"
          number="06"
          label="Capacité humaine"
          readingTime="3 min"
          title={
            "Combien de temps humain votre MVP coûte-t-il chaque semaine\u00a0?"
          }
        >
          <p>
            Tenir une opération à la main est souvent le bon choix, jamais le
            choix gratuit&nbsp;: le travail existe, il est payé en heures et non
            en lignes de code. Le calcul commence par la période, et une
            seule&nbsp;: les occurrences par client et la capacité disponible
            portent sur cette même période, sans conversion implicite.
          </p>

          <FormulaBox>
            {
              "sur une même période nommée\u00a0:\ncharge d’une opération = minutes par occurrence × occurrences par client sur toute la période × clients\ncharge manuelle totale = somme des opérations manuelles\ncapacité restante = capacité totale disponible sur cette même période − charge manuelle totale"
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
            caption="Le décompte manuel du pilote construit, poste par poste"
            headers={["Famille", "L’opération et son calcul", "Total"]}
            rows={manualRows}
          />

          <p>
            Sur les six semaines du pilote, Accordia consomme{" "}
            <strong>{accordia.manualLoadMinutes}&nbsp;minutes </strong>pour une
            capacité déclarée de {accordia.manualCapacityMinutes}
            &nbsp;minutes&nbsp;: il reste {accordia.remainingCapacityMinutes}
            &nbsp;minutes. Ramené à la semaine, cela fait{" "}
            <strong>39,5&nbsp;minutes </strong>pour 50&nbsp;minutes
            disponibles&nbsp;: moins d’une heure par semaine, tant que le pilote
            reste à trois clients. Traduites avec l’hypothèse posée plus bas,
            ces 237&nbsp;minutes valent 3&nbsp;heures et 57&nbsp;minutes, soit
            environ 198&nbsp;€&nbsp;; la capacité complète de 300&nbsp;minutes
            vaut 250&nbsp;€. Refaites le calcul avec vos nombres&nbsp;: la
            charge croît comme le nombre de clients, la capacité non.
          </p>
          <p>
            À cinq clients, les mêmes opérations demandent{" "}
            {accordiaStress.manualLoadMinutes}&nbsp;minutes et dépassent la
            capacité de 95&nbsp;minutes. À six clients, le double du départ,
            elles atteignent {accordiaDoubleVolume.manualLoadMinutes}
            &nbsp;minutes et dépassent de 174&nbsp;minutes. Sur ces durées et
            cette capacité, le dépassement commence dès le quatrième
            client&nbsp;: chaque client coûte 79&nbsp;minutes, et 79&nbsp;× 4 =
            316&nbsp;minutes pour 300 disponibles.
          </p>

          <InfoBox variant="amber" title="Ce décompte est planifié, pas subi">
            <p>
              Les limites écrites sur chaque opération le disent&nbsp;: deux
              interventions d’accès par client, un import initial, une facture,
              deux permanences d’aide. Un incident imprévu n’entre pas dans
              cette somme, puisque ces limites ne couvrent que le planifié.
              Tenez donc deux lignes séparées, l’une pour la permanence prévue,
              l’autre pour la provision d’incident&nbsp;: réunies, la première
              absorbe la seconde sans qu’on le voie.
            </p>
          </InfoBox>

          <p>
            Aucun nombre de cette section ne sort d’une source&nbsp;: les
            minutes, les occurrences et la capacité appartiennent au cas
            construit, et le coût du temps interne est posé de la même
            façon&nbsp;— <strong>350&nbsp;€ le jour chargé</strong>, soit
            50&nbsp;€ l’heure sur sept heures. Cette dernière hypothèse est
            écrite ici pour que vous puissiez la contester&nbsp;; votre
            expert-comptable ou votre contrôleur de gestion sort la vôtre à
            partir du salaire brut, des charges patronales et des jours
            réellement travaillés. Le calcul dit que la charge décrite tient
            dans la capacité saisie, sous les hypothèses écrites. Il ne dit rien
            de la sécurité ni de la légalité du test.
          </p>
        </GuidePremiumSection>

        {/* ── 07 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="exemple"
          number="07"
          label="Ce qui rate"
          readingTime="3 min"
          title="Ce qui rate quand on coupe la mauvaise chose"
        >
          <p>
            Les trois incidents ci-dessous sont construits sur le cas Accordia,
            les deux premiers pendant le pilote, le troisième après. Les durées,
            les volumes, l’abonnement et le coût du temps interne sont choisis
            pour l’exemple et ne viennent d’aucune source&nbsp;; ce ne sont pas
            des dossiers clients. Chacun correspond à une coupe qui paraissait
            sans conséquence au moment de signer.
          </p>

          <h3>
            L’export reporté&nbsp;: 700&nbsp;€ et 840&nbsp;minutes hors budget
          </h3>
          <p>
            La famille «&nbsp;Données et continuité&nbsp;» est marquée
            «&nbsp;reporter&nbsp;» pour tenir le budget du lot 1. Au
            vingt-quatrième jour, le 30&nbsp;septembre, la deuxième entreprise
            demande à récupérer ses décisions pour son propre outil. L’accès en
            lecture seule de la section 05 rend bien les lignes, mais les trois
            requêtes écrites d’avance servaient à consulter et à corriger&nbsp;:
            aucune ne reconstitue une décision complète, motif et pièces
            compris. L’opératrice reprend les 312 décisions une par une pendant
            deux jours, soit 2&nbsp;× 350 = 700&nbsp;€ au taux posé plus haut,
            et la restitution finale, prévue le 18&nbsp;octobre, arrive deux
            jours plus tard. Ces deux jours pèsent 840&nbsp;minutes, soit
            2&nbsp;× 7&nbsp;heures, quand la capacité manuelle du pilote entier
            valait 300&nbsp;minutes&nbsp;: l’incident coûte 2,8 fois le budget
            humain de six semaines. Le calculateur avait tranché avant le
            départ&nbsp;: la variante «&nbsp;continuité reportée&nbsp;» laisse{" "}
            {accordiaDeferred.manualLoadMinutes}&nbsp;minutes parfaitement
            calculées, et maintient quand même l’arrêt.
          </p>

          <h3>
            La durée inconnue prise pour zéro&nbsp;: 25&nbsp;% de capacité en
            trop
          </h3>
          <p>
            La durée de l’opération d’accès reste «&nbsp;à vérifier&nbsp;».
            L’équipe démarre quand même, en la comptant pour zéro&nbsp;— un zéro
            qui n’ajoute aucune ligne et ne se voit donc nulle part. Mesurée sur
            le premier client, l’opération vaut 35&nbsp;minutes, parce que
            chaque service informatique client exige une inscription sur liste
            blanche&nbsp;: 35&nbsp;×&nbsp;2&nbsp;×&nbsp;3 = 210&nbsp;minutes.
            Avec les {accordiaUnknown.manualLoadMinutes}
            &nbsp;minutes des trois autres opérations, le pilote demande
            375&nbsp;minutes pour 300 disponibles, soit 75&nbsp;minutes de trop
            et un quart de la capacité envolé. Le calculateur avait refusé de
            conclure et affiché «&nbsp;partiel/inexploitable&nbsp;» sur ces
            mêmes 165&nbsp;minutes.
          </p>

          <h3>
            Le paiement autonome sans procédure d’échec&nbsp;: 2&nbsp;880&nbsp;€
            HT non encaissés
          </h3>
          <p>
            Cette fois le pilote a conclu&nbsp;: Accordia vend son produit
            au-delà du 18&nbsp;octobre, et ouvre l’achat par carte au troisième
            mois d’exploitation sans écrire ce qui se passe quand un paiement
            échoue. Trois cartes expirent, l’événement d’échec de facture part
            bien, personne ne l’écoute, et les accès restent ouverts. À
            240&nbsp;€ HT par mois et par entreprise, trois abonnements ouverts
            quatre mois sans paiement font <strong>2&nbsp;880&nbsp;€ HT</strong>{" "}
            facturés et jamais encaissés. La règle manquante tenait en une
            ligne&nbsp;: quel événement referme l’accès, et au bout de combien
            de jours. Écrite après coup, elle se corrige sur un produit qui a
            déjà des utilisateurs&nbsp;: rattraper quatre mois d’événements,
            décider quels accès se referment, rouvrir la conversation avec trois
            clients de bonne foi.
          </p>

          <div className="not-prose my-8 mx-auto max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/mvp-saas-quoi-inclure/decision-mvp-1x1.webp"
              alt={
                "Arbre sans score\u00a0: quatre STOP prioritaires et trois verdicts indépendants par format"
              }
              width={900}
              height={900}
              sizes="(max-width: 640px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <GuidePremiumMemo
            eyebrow="L’ordre compte"
            title="Le premier blocage applicable fixe le verdict"
          >
            <ol>
              <li>
                Une décision indispensable est inconnue&nbsp;— la période du
                test, ou la nécessité de la vente en achat autonome.
              </li>
              <li>
                Une responsabilité nécessaire au test est reportée, ou une
                famille est reportée devant un premier client en production.
              </li>
              <li>Une opération manuelle n’est pas bornée.</li>
              <li>La capacité manuelle est dépassée.</li>
              <li>
                Le format ne permet pas la production, ou le contrat attend sa
                relecture.
              </li>
            </ol>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        {/* ── 08 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="outil"
          number="08"
          label="Votre dossier"
          readingTime="1 min"
          title="Remplir le contrat sur votre propre dossier"
        >
          <p>
            Le formulaire s’ouvre vide, et vous pouvez charger l’exemple
            construit d’un clic pour voir à quoi ressemble un contrat rempli.
            Tout se calcule dans votre navigateur&nbsp;: aucune requête réseau,
            aucun stockage, aucun téléchargement. Le résultat réunit la période,
            les sept décisions, les équations manuelles, les inconnues restées
            ouvertes et un texte que vous copiez tel quel pour l’envoyer à votre
            développeur. Les entrées sont bornées à un million pour les clients,
            les minutes et les occurrences&nbsp;; le nombre de clients se saisit
            en entier, les minutes, les occurrences et la capacité acceptent
            trois décimales au plus&nbsp;— ce sont des limites techniques, pas
            des repères commerciaux.
          </p>

          <div className="not-prose my-8" data-read-time-exclude="true">
            <MvpFirstClientContractTool />
          </div>
        </GuidePremiumSection>

        {/* ── 09 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="alternatives"
          number="09"
          label="Avant le code"
          readingTime="1 min"
          title={"Faut-il vraiment écrire du code pour apprendre ça\u00a0?"}
        >
          <p>
            Chaque incertitude a son test le moins cher. Voici quatre chemins,
            du plus économe au plus engageant&nbsp;: le développement est le
            dernier de la liste, pas le premier.
          </p>

          <ol>
            <li>
              <strong>Le problème est-il prioritaire&nbsp;? </strong>Des
              entretiens et un pré-engagement écrit répondent en quelques jours.
              Ce qu’ils doivent prouver&nbsp;: une situation précise conduit à
              une décision réelle, pas à un accord poli.
            </li>
            <li>
              <strong>Le parcours est-il compris&nbsp;? </strong>Une maquette
              cliquable avec des données fictives suffit. Ce qu’elle doit
              prouver&nbsp;: l’utilisateur accomplit le parcours et sait
              réexpliquer ce qu’il vient de faire.
            </li>
            <li>
              <strong>Le résultat crée-t-il de la valeur&nbsp;? </strong>Une
              opération tenue à la main, de bout en bout, pour les trois
              premiers clients. Ce qu’elle doit prouver&nbsp;: le résultat vaut
              ce qu’on demande de le payer.
            </li>
            <li>
              <strong>La capacité existe-t-elle déjà ailleurs&nbsp;? </strong>Un
              outil du marché ou une plateforme interne peuvent couvrir le
              besoin. Le guide{" "}
              <Link href="/guides/power-apps-ou-application-sur-mesure">
                Power Apps ou application sur mesure
              </Link>{" "}
              chiffre exactement ce type d’arbitrage sur cinq ans.
            </li>
          </ol>

          <p>
            Chacun de ces chemins permet de conclure «&nbsp;construisez moins
            maintenant, et gardez le budget pour le lot 2, quand vous saurez
            quoi y mettre&nbsp;». Notre propre point d’entrée payant existe pour
            cela&nbsp;: le Discovery Sprint, 1&nbsp;500&nbsp;€ HT sur deux
            jours&nbsp;; si la phase suivante est lancée avec nous, le devis
            précise la déduction applicable. Au-delà de 8&nbsp;000&nbsp;€ HT de
            projet, ce cadrage payé est systématique chez nous, parce qu’un
            périmètre décidé sans preuve se repaie deux fois.
          </p>
        </GuidePremiumSection>

        {/* ── 10 ─────────────────────────────────────── */}
        <GuidePremiumSection
          id="decision"
          number="10"
          label="Revue humaine"
          readingTime="2 min"
          title={"Qui tranche, et sur quelle preuve\u00a0?"}
        >
          <p>
            Avant la première invitation réelle, une personne désignée relit le
            contrat en entier&nbsp;: la promesse, les preuves attendues, le nom
            en face de chaque responsabilité, la restauration rejouée, les
            droits d’accès, le canal d’aide et les termes convenus avec le
            client. Le verdict du calculateur ne remplace pas cette
            relecture&nbsp;: «&nbsp;candidat&nbsp;» signifie seulement que le
            contrat est assez renseigné pour entrer en revue.
          </p>
          <p>
            Quatre décisions sortent de cette relecture, et trois réduisent le
            périmètre. Continuer, quand la preuve reste utile et que les
            responsabilités sont acceptées. Réduire le format, quand un
            prototype répond à la même question sans exposer un client. Changer
            un traitement, quand la charge ou le risque rendent le choix actuel
            intenable. Arrêter ou différer, quand le test n’apprend plus rien de
            décisif&nbsp;— avec le motif écrit, faute de quoi rien n’empêche la
            même demande de revenir telle quelle.
          </p>
          <p>
            Un chiffre doit figurer dans cette décision, et il n’apparaît sur
            aucune ligne d’un devis de développement&nbsp;: l’exploitation.
            Notre grille publie un repère indicatif d’environ 2&nbsp;500&nbsp;€
            HT par mois pour le scénario de maintenance le plus léger. Douze
            mois à ce repère font environ 30&nbsp;000&nbsp;€ HT, soit la borne
            basse du forfait de développement suivant, qui va de 30&nbsp;000 à
            60&nbsp;000&nbsp;€ HT. La première année d’exploitation pèse donc au
            moins autant que l’entrée de ce forfait, autant le savoir avant de
            dire oui. Le repère n’est pas un devis&nbsp;: le forfait réel est
            fixé au contrat.
          </p>
          <p>
            Les critères qui feront accepter la livraison se rédigent avec le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette d’une application métier
            </Link>
            , les contrôles à passer avant d’ouvrir le service sont listés dans
            les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité d’une application métier
            </Link>
            , et une demande comparable entre plusieurs équipes se prépare avec
            le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges SaaS
            </Link>
            . Si vous voulez une lecture extérieure de votre lot 1, vous pouvez{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire votre projet
            </TrackedGuideCtaLink>{" "}
            à Hagnéré Code, en précisant que renoncer reste une issue
            acceptable.
          </p>

          <div className="not-prose my-7 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/25">
            <div className="flex gap-3">
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-emerald-700 dark:text-emerald-300"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-100">
                  Ne rien construire peut être la bonne décision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-900 dark:text-emerald-100">
                  Si l’opération tenue à la main rend déjà le service attendu et
                  que la charge tient dans votre capacité, un logiciel
                  n’apportera qu’un coût de développement et un coût
                  d’exploitation. Le calcul de la section 06 sert autant à
                  justifier un projet qu’à le repousser d’un an.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm">
            <strong>Transparence. </strong>Hagnéré Code développe des
            applications SaaS sur mesure et perçoit des honoraires si vous
            retenez cette option&nbsp;— l’une de celles que ce guide arbitre.
            Rien ici n’exige de passer par nous&nbsp;: les sept familles, le
            calcul de charge et le décompte des écrans se refont avec vos
            nombres, et le calculateur ne transmet rien. Les montants de notre
            grille ont été relevés le 30&nbsp;août 2026 et sont à revérifier
            tous les douze mois. Aucun prix, aucun délai et aucun résultat ne
            sont garantis par cette page&nbsp;: seul un devis signé engage.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
