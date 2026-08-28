import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Database,
  GitBranch,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
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
import { PowerAppsDecisionWorkbench } from "./power-apps-decision-workbench";

const powerAppsGuide = getGuide("power-apps-ou-application-sur-mesure");

const breadcrumbName = "Power Apps ou sur mesure";

export const metadata = buildGuideMetadata(
  powerAppsGuide,
  "Matrice de décision Power Apps, architecture hybride et application sur mesure",
);

const structuredData = buildGuideStructuredData(powerAppsGuide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Réponse",
  },
  {
    id: "chemins",
    number: "02",
    label: "Deux chemins de décision",
    shortLabel: "Chemins",
  },
  {
    id: "cinq-tests",
    number: "03",
    label: "Cinq tests de preuve",
    shortLabel: "Tests",
  },
  { id: "cout", number: "04", label: "Comparer les TCO", shortLabel: "TCO" },
  {
    id: "scenarios",
    number: "05",
    label: "Raisonner sur cinq scénarios",
    shortLabel: "Scénarios",
  },
  {
    id: "remediation",
    number: "06",
    label: "Réparer avant de reconstruire",
    shortLabel: "Réparer",
  },
  {
    id: "audit",
    number: "07",
    label: "Migrer avec retour arrière",
    shortLabel: "Migration",
  },
  { id: "lundi", number: "08", label: "Commencer lundi", shortLabel: "Action" },
  {
    id: "sources",
    number: "09",
    label: "Sources et limites",
    shortLabel: "Sources",
  },
];

const outcomes = [
  {
    status: "DÉCISION EN ATTENTE",
    title: "Réunir la preuve manquante",
    trigger:
      "Une donnée capable de changer l’architecture manque : audience, requête réelle, licence, politique de données, hors-ligne, restauration ou exploitation.",
    next: "Obtenir la première preuve manquante. Ne pas remplacer l’inconnu par zéro, par un avis ou par une démonstration commerciale.",
  },
  {
    status: "CONSERVER",
    title: "Garder Power Apps",
    trigger:
      "Les cas difficiles passent, le coût contractuel est compris, les droits sont maîtrisés et l’équipe sait déployer, restaurer et soutenir l’application.",
    next: "Archiver les preuves et définir les événements qui déclencheront une nouvelle revue : volume, audience, licence, politique du tenant ou criticité.",
  },
  {
    status: "RENFORCER",
    title: "Corriger l’architecture Power Platform",
    trigger:
      "Le besoin convient à la plateforme, mais données, formules, environnements, rôles, propriétaires ou supervision sont insuffisants.",
    next: "Traiter le défaut mesuré, rejouer le test et recalculer le TCO avant de financer une reconstruction.",
  },
  {
    status: "HYBRIDE",
    title: "Sortir seulement la contrainte",
    trigger:
      "Une fonction déborde du cadre actuel, mais une frontière propre permet de conserver ce qui fonctionne sans dupliquer règles et données.",
    next: "Contractualiser l’interface entre systèmes (API), l’identité, les données de référence, les erreurs et le propriétaire de chaque côté.",
  },
  {
    status: "RECONSTRUIRE",
    title: "Préparer une application dédiée",
    trigger:
      "Une limite importante a été reproduite et ni remédiation ni frontière hybride testée ne couvre le besoin dans des conditions acceptables.",
    next: "Construire par coexistence, avec recette métier, migration répétable, critères de bascule et retour arrière joué.",
  },
] as const;

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "plateforme",
    num: "01",
    label: "Comprendre la plateforme",
    items: [
      {
        question: "Power Apps est-il gratuit avec Microsoft 365 ?",
        answer:
          "Non, pas pour tous les projets. Certains scénarios Microsoft 365 donnent des droits limités, mais ils ne couvrent pas automatiquement votre application. Vérifiez le plan exact, les connecteurs, Dataverse, les flux, l’audience et les droits sur les données. Le plan Developer sert au développement et au test, pas à la production.",
      },
      {
        question: "Power Apps est-il limité à 2 000 lignes ?",
        answer:
          "Non. Dans une application canevas, 500 est la limite locale par défaut appliquée à certaines opérations non délégables, configurable jusqu’à 2 000. Une formule délégable peut interroger la source sans ramener toutes les lignes localement. Le danger d’une formule non délégable est un résultat partiel ou faux, pas une limite universelle de stockage.",
      },
      {
        question: "SharePoint ou Dataverse : lequel choisir ?",
        answer:
          "SharePoint peut convenir à des listes et usages documentaires maîtrisés. Dataverse apporte un modèle relationnel, des métadonnées, une sécurité plus fine et des interfaces de programmation (API), avec gouvernance et licences à vérifier. Ne choisissez pas sur le seul volume : testez relations, requêtes, concurrence, droits, audit et cycle de vie.",
      },
      {
        question:
          "Une application pilotée par modèle remplace-t-elle une application canevas ?",
        answer:
          "Pas automatiquement. Une application pilotée par modèle est centrée sur le modèle Dataverse et ses processus. Une application canevas donne davantage de contrôle sur l’interface. Le choix dépend des tâches, de l’expérience, des données et de l’exploitation ; une combinaison peut aussi être rationnelle.",
      },
    ],
  },
  {
    key: "audience",
    num: "02",
    label: "Audience, usage et contrôle",
    items: [
      {
        question: "Peut-on partager une application canevas avec des clients ?",
        answer:
          "Oui, dans certains scénarios, avec des invités Microsoft Entra B2B (collaboration inter-entreprises). Chaque invité doit disposer des droits Power Apps nécessaires et des autorisations sur les sources sous-jacentes. Ce n’est pas la même chose qu’un portail public Power Pages ni qu’une application dédiée. Testez l’identité, la licence, les données et le parcours dans l’environnement Microsoft réel de votre organisation.",
      },
      {
        question: "Power Apps fonctionne-t-il hors ligne ?",
        answer:
          "Oui, mais dans un cadre précis. Le mode hors ligne intégré documenté repose sur Dataverse et Power Apps Mobile. Pour une application canevas autonome activée hors ligne, les connecteurs non-Dataverse comme SharePoint et les flux Power Automate ne sont pas pris en charge hors ligne. Ce n’est pas un mode général du navigateur. Reproduisez coupures, conflits, reprises, synchronisation et volumes sur les appareils visés.",
      },
      {
        question:
          "Le vérificateur d’accessibilité suffit-il pour être conforme ?",
        answer:
          "Non. Le vérificateur signale certains problèmes, mais ne certifie ni les Web Content Accessibility Guidelines (WCAG) ni le Référentiel général d’amélioration de l’accessibilité (RGAA). Testez aussi le clavier, l’ordre de focus, le zoom, le contraste, le lecteur d’écran et les messages d’erreur sur les parcours réels.",
      },
      {
        question:
          "Une politique de données peut-elle casser une application existante ?",
        answer:
          "Oui. Une politique de prévention de la perte de données (DLP, Data Loss Prevention) peut bloquer des combinaisons, suspendre ou mettre en quarantaine des ressources. Les politiques avancées de connecteurs (ACP, Advanced Connector Policies) ajoutent en 2026 une liste d’autorisation stricte pour les connecteurs certifiés. En mode mixte, la règle la plus restrictive s’applique ; les connecteurs personnalisés et HTTP restent à gouverner avec les politiques classiques. Inventoriez et testez les règles effectives avant un déploiement à grande échelle.",
      },
    ],
  },
  {
    key: "sortie",
    num: "03",
    label: "Coût, support et sortie",
    items: [
      {
        question: "Combien coûte Power Apps en 2026 ?",
        answer:
          "Au 3 août 2026, la page française affichait Premium à 17,30 € hors taxes (HT) par utilisateur et par mois avec paiement annuel, et 10,40 € HT avec un minimum de 2 000 postes/licences et contact commercial. Le paiement à l’usage (PAYG, pay-as-you-go) était documenté à 10 USD par utilisateur actif unique, par application et par mois. Confirmez contrat, devise, région, connecteurs, Dataverse, flux, capacité et support avant de calculer.",
      },
      {
        question:
          "L’export d’une solution donne-t-il une application React ou Next.js ?",
        answer:
          "Non. Les solutions et fichiers extraits facilitent transport, audit et contrôle de version dans l’écosystème Power Platform ; ils ne constituent pas un code web portable. Ces limites permettent d’en déduire que quitter l’environnement d’exécution (runtime) peut demander de reconstruire l’interface et la logique, de refaire les intégrations et de migrer les données.",
      },
      {
        question:
          "Le support Microsoft remplace-t-il la maintenance de l’application ?",
        answer:
          "Non. Le support de la plateforme ne nomme pas votre propriétaire métier, ne corrige pas vos règles, ne répond pas aux utilisateurs et ne garantit pas votre continuité. Séparez incident plateforme, maintenance applicative, support métier, administration du tenant — l’instance organisationnelle Microsoft qui regroupe notamment identités, licences, politiques et environnements Power Platform — et fonctionnement dégradé.",
      },
      {
        question: "Quand une application sur mesure devient-elle défendable ?",
        answer:
          "Lorsqu’une limite importante est reproduite sur un cas réel, qu’une remédiation raisonnable a été testée et qu’un hybride propre ne suffit pas. Le coût total de possession (TCO) doit aussi inclure construction, migration, exploitation, sécurité, support et réversibilité. Une préférence esthétique ou le départ du créateur de l’application ne suffit pas à lui seul.",
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
          { label: "Guide décisionnel 2026", variant: "dark" },
          { label: "Power Platform", variant: "neutral" },
          { label: "Diagnostic local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(powerAppsGuide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle={"Power Apps ou application sur mesure\u00a0:"}
        heroTitleEm={"comment\u00a0choisir\u00a0?"}
        heroDescription="Ne reconstruisez pas parce que Power Apps vous agace, et ne restez pas uniquement parce que l’application existe déjà. Vérifiez d’abord les cas difficiles, l’audience, les données, les licences, la gouvernance et la sortie. Comparez ensuite le coût total de possession (TCO). Si une preuve critique manque, laissez la décision en attente."
        stats={[
          { label: "Sorties possibles", value: "5" },
          { label: "Options chiffrées", value: "4" },
          { label: "Horizons TCO", value: "1 · 3 · 5 ans" },
          { label: "Score opaque", value: "Aucun" },
          { label: "Lecture", value: `${powerAppsGuide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Cadrage sans solution imposée",
          titleStart: "Faire examiner",
          titleEm: "votre cas Power Apps",
          description:
            "Apportez trois tâches réelles, les erreurs observées et votre dossier de décision. Le premier échange peut conclure qu’il faut conserver ou renforcer Power Apps.",
          benefits: [
            "Limite de plateforme et défaut corrigeable séparés",
            "Licences, données et exploitation rendues visibles",
            "Migration dédiée proposée seulement si elle se défend",
          ],
          primaryCtaLabel: "Voir le service outils internes",
          primaryCtaHref: "/services/outils-internes-sur-mesure",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Sommaire de la décision Power Apps"
        mobileCtaLabel="Cadrer mon cas"
        sidebarContextCta={{
          eyebrow: "Outils internes sur mesure",
          title:
            "Vous hésitez entre renforcer Power Apps et reconstruire\u00a0?",
          description:
            "Décrivez les utilisateurs, les données, les points de blocage et les résultats attendus, sans donnée personnelle ni secret. Nous commençons par les preuves qui peuvent invalider chaque option.",
          benefits: [
            "Aucun remplacement décidé d’avance",
            "Prototype des cas difficiles avant architecture",
            "Responsabilités, exploitation et sortie écrites",
          ],
          ctaLabel: "Étudier mon outil interne",
          ctaHref: "/demarrer-un-projet",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
          badgeLabel: "Premier échange sans garantie de faisabilité",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Décider entre",
          titleEm: "Power Apps",
          titleEnd: "et le sur-mesure.",
          subtitle:
            "Prix, délégation, SharePoint, Dataverse, invités, hors-ligne, accessibilité, politiques de données, export, support et conditions d’une reconstruction.",
          ctaTitle: "Un point encore ouvert sur votre outil interne ?",
          ctaDescription:
            "Décrivez les licences envisagées, les connecteurs nécessaires et la sortie attendue, sans transmettre de donnée sensible.",
          ctaLabel: "Décrire mon outil interne",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Microsoft · tarifs Power Apps",
            href: "https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing",
            description:
              "Page française vérifiée le 3 août 2026 : Premium à 17,30 € HT/utilisateur/mois, paiement annuel ; 10,40 € avec un minimum de 2 000 postes/licences et contact commercial ; Developer réservé au développement/test ; capacité Dataverse supplémentaire à 34,70 € HT/Go/mois.",
          },
          {
            source:
              "Microsoft · guide de licences Power Platform, juillet 2026",
            href: "https://go.microsoft.com/fwlink/?LinkId=2085130",
            description:
              "Guide officiel rouvert dans sa version de juillet 2026. La page 25 décrit le multiplexing et les accès directs ou indirects ; le guide précise qu’il ne remplace pas les documents contractuels ni la validation du scénario exact.",
          },
          {
            source: "Microsoft Learn · compteurs PAYG",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/pay-as-you-go-meters",
            description:
              "Compteur Power Apps à 10 USD/utilisateur actif unique/application/mois ; les ouvertures répétées dans le mois ne recomptent pas l’utilisateur. Ne pas convertir en euros sans facture ou contrat Azure.",
          },
          {
            source:
              "Microsoft Learn · partager une application canevas avec des invités",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/share-app-guests",
            description:
              "Distingue collaboration Entra B2B, licence Power Apps et autorisations sur les sources sous-jacentes. Un invité dans un tenant n’obtient pas automatiquement les droits requis dans un autre.",
          },
          {
            source: "Microsoft · tarifs Power Pages",
            href: "https://www.microsoft.com/fr-fr/power-platform/products/power-pages/pricing",
            description:
              "Page tarifaire distincte pour les utilisateurs externes authentifiés et anonymes. Les tarifs sont volatils ; vérifier le modèle, la capacité et le contrat au moment du projet.",
          },
          {
            source: "Microsoft Learn · présentation de Dataverse",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/data-platform-intro",
            description:
              "Tables, relations, métadonnées, logique, sécurité et intégration Power Platform. La présence de ces capacités ne remplace pas une conception des données ni une revue de licences.",
          },
          {
            source: "Microsoft Support · grandes listes SharePoint",
            href: "https://support.microsoft.com/fr-fr/office/seuil-d-affichage-de-liste-pour-les-biblioth%C3%A8ques-et-les-grandes-listes-e2ea4d5d-ec23-4171-95c4-c7f5b5dbfd8a",
            description:
              "Une liste ou bibliothèque peut stocker jusqu’à 30 millions d’éléments, tandis que le seuil de vue/requête documenté est de 5 000. Ce seuil n’est pas une limite de stockage à 5 000 lignes.",
          },
          {
            source:
              "Microsoft Learn · délégation dans les applications canevas",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/delegation-overview",
            description:
              "La limite locale pour une requête non délégable est de 500 par défaut et peut être portée à 2 000. Une formule non délégable peut produire un résultat partiel ou faux.",
          },
          {
            source: "Microsoft Learn · connecteurs Power Platform",
            href: "https://learn.microsoft.com/fr-fr/connectors/",
            description:
              "Catalogue et documentation des connecteurs. Chaque connecteur peut avoir ses propres opérations, authentifications, limites et statut standard ou Premium à confirmer.",
          },
          {
            source: "Microsoft Learn · limites de requêtes et allocations",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/api-request-limits-allocations",
            description:
              "Droits de requêtes liés aux licences et mécanismes associés. Les nombres changent ; ils ne doivent pas être transformés en promesse de capacité applicative.",
          },
          {
            source: "Microsoft Learn · protection de service Dataverse",
            href: "https://learn.microsoft.com/fr-fr/power-apps/developer/data-platform/api-limits",
            description:
              "Limites de protection de service Dataverse, distinctes des droits liés aux licences et des limites propres aux connecteurs.",
          },
          {
            source: "Microsoft Learn · environnements Power Platform",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/environments-overview",
            description:
              "Rôle des environnements dans la séparation des applications, flux, connexions et données. Une application critique ne devrait pas dépendre tacitement de l’environnement par défaut.",
          },
          {
            source: "Microsoft Learn · principes ALM Power Platform",
            href: "https://learn.microsoft.com/en-us/power-platform/alm/basics-alm",
            description:
              "Cycle de vie, solutions et disciplines de développement, test et production. À compléter par variables, références de connexion, tests et responsabilités.",
          },
          {
            source: "Microsoft Learn · pipelines Power Platform",
            href: "https://learn.microsoft.com/fr-fr/power-platform/alm/pipelines",
            description:
              "Déploiement des solutions entre environnements. Les pipelines ne transportent pas les données métier ; connexions, identités, secrets et données ont leur propre plan.",
          },
          {
            source:
              "Microsoft Learn · fichiers de solution et contrôle de version",
            href: "https://learn.microsoft.com/fr-fr/power-platform/alm/use-source-control-solution-files",
            description:
              "Extraction des fichiers de solution pour audit et contrôle de version dans Power Platform. Cela ne constitue pas un export en code React ou Next.js portable.",
          },
          {
            source: "Microsoft Learn · sécurité Dataverse",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/security-roles-privileges",
            description:
              "Les rôles et privilèges Dataverse sont cumulatifs. Le moindre privilège doit être testé avec des comptes représentatifs et les équipes réellement attribuées.",
          },
          {
            source: "Microsoft Learn · politiques de données DLP",
            href: "https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention",
            description:
              "Les politiques classent et combinent les connecteurs ; selon les règles effectives, applications et flux peuvent être bloqués, suspendus ou mis en quarantaine.",
          },
          {
            source: "Microsoft Learn · politiques avancées des connecteurs",
            href: "https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies",
            description:
              "Liste d’autorisation stricte pour les connecteurs certifiés. En mode mixte, la règle la plus restrictive avec les politiques classiques s’applique ; les connecteurs personnalisés et HTTP ne sont pas encore couverts par ACP.",
          },
          {
            source: "Microsoft Learn · offline-first Power Apps Mobile",
            href: "https://learn.microsoft.com/fr-fr/power-apps/mobile/mobile-offline-works-overview",
            description:
              "Architecture offline-first intégrée avec Dataverse et Power Apps Mobile. Les profils, filtres, synchronisations, conflits et limites doivent être testés sur les appareils réels.",
          },
          {
            source:
              "Microsoft Learn · limites hors ligne des applications canevas",
            href: "https://learn.microsoft.com/en-us/power-apps/mobile/limitations-canvas-apps",
            description:
              "L’offline-first concerne les applications canevas autonomes et Dataverse. Les connecteurs non-Dataverse, dont SharePoint, et les flux Power Automate ne sont pas pris en charge hors ligne ; d’autres limites de données et de synchronisation s’appliquent.",
          },
          {
            source: "Microsoft Learn · accessibilité des applications canevas",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps",
            description:
              "Recommandations pour ordre de navigation, libellés, contraste, clavier et lecteur d’écran. Elles doivent être appliquées puis testées sur les parcours réels.",
          },
          {
            source: "Microsoft Learn · vérificateur d’accessibilité",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessibility-checker",
            description:
              "Outil d’aide qui repère certains problèmes ; il ne constitue pas une preuve de conformité WCAG ou RGAA.",
          },
          {
            source: "Microsoft Learn · limites d’accessibilité connues",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps-limitations",
            description:
              "Limites connues à confronter aux technologies d’assistance et aux exigences réelles du projet.",
          },
          {
            source:
              "Microsoft Learn · exporter et importer une application canevas",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/export-import-app",
            description:
              "Procédure de transport d’application avec dépendances à gérer. Une exportation seule ne prouve pas la restauration complète des données, connexions, identités, secrets et flux.",
          },
          {
            source: "Microsoft Learn · support Power Platform",
            href: "https://learn.microsoft.com/en-us/power-platform/admin/support-overview",
            description:
              "Cadre du support de plateforme. Il ne remplace pas la maintenance applicative, l’assistance métier, la gouvernance et la continuité d’activité propres à l’organisation.",
          },
          {
            source: "CNIL · encadrer les développements informatiques",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Protection des données et sécurité dès la conception, minimisation et exigences intégrées au cycle de développement. Le choix de Power Apps ou du sur-mesure ne certifie pas à lui seul la conformité du traitement.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title: "Une méthode de décision, pas un audit de votre tenant",
          description:
            "Ce guide ne valide ni licence, ni sécurité, ni conformité, ni capacité, ni architecture. Les prix et règles de plateforme évoluent. Confirmez le contrat, la région, les politiques du tenant, les droits et les résultats sur des cas réels. En cas d’incident actif, traitez d’abord l’incident et la continuité avant toute modernisation.",
        }}
        relatedGuides={[
          {
            label: "Remplacer Microsoft Access sans perdre le métier",
            href: "/guides/remplacer-microsoft-access-application-web",
          },
          {
            label:
              "Calculer le retour sur investissement d’une application métier",
            href: "/guides/calculer-roi-application-metier",
          },
          {
            label: "Airtable, Notion ou application métier",
            href: "/guides/airtable-notion-ou-application-metier",
          },
        ]}
        relatedGuidesLabel="3 guides complémentaires"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="4 min"
          title="Power Apps ou sur mesure : la bonne réponse dépend de preuves, pas d’une préférence"
        >
          <p>
            <strong>
              Power Apps reste défendable si les tests des cas difficiles sont
              concluants, si vous maîtrisez le coût prévu au contrat et si votre
              équipe sait déployer, sécuriser, prendre en charge et restaurer
              l’application.
            </strong>{" "}
            Envisagez une application dédiée seulement après avoir reproduit une
            limite importante qu’une correction raisonnable n’a pas levée. Avant
            de migrer, vérifiez que les bénéfices attendus et documentés
            justifient son coût et son risque.
          </p>
          <p>
            Avant de tout réécrire, vous pouvez renforcer Power Platform ou
            conserver ce qui fonctionne et confier la contrainte bloquante à un
            module dédié. Si l’audience, les licences, l’exécution des requêtes
            dans la source — la délégation —, le hors-ligne, les politiques de
            données ou la reprise restent inconnus, suspendez la décision et
            notez : <strong>preuve manquante</strong>. Dans ce guide, le tenant
            désigne l’instance organisationnelle Microsoft qui regroupe
            notamment les identités, les licences, les politiques et les
            environnements Power Platform. Un tenant n’est donc pas un
            environnement.
          </p>
          <p>
            Isolez d’abord la cause. Une application lente peut venir d’une
            formule non délégable, d’un modèle SharePoint mal interrogé ou d’un
            flux mal conçu : ces défauts peuvent parfois être corrigés. À
            l’inverse, une démonstration fluide sur cinquante lignes ne prouve
            ni le comportement au volume, ni l’accès d’invités, ni la continuité
            dans une zone sans réseau, ni la capacité de l’équipe à reprendre
            l’outil.
          </p>

          <GuideTable
            caption="Les cinq conclusions possibles après vérification"
            headers={["Statut", "Quand il est défendable", "Action suivante"]}
            rows={outcomes.map((outcome) => [
              `${outcome.status} — ${outcome.title}`,
              outcome.trigger,
              outcome.next,
            ])}
          />

          <p>
            Chacune de ces cinq décisions doit reposer sur une preuve et
            déboucher sur une action précise. Si votre équipe ne peut pas nommer
            la première preuve à réunir, la décision reste en attente.
          </p>

          <GuidePremiumMemo
            eyebrow="Règle de décision"
            title="Une preuve doit pouvoir invalider votre option préférée"
          >
            <ul>
              <li>
                Testez les requêtes : le résultat peut écarter le maintien en
                l’état.
              </li>
              <li>
                Effectuez une restauration complète. Elle peut montrer que la
                sortie n’est pas aussi simple que prévu.
              </li>
              <li>
                Comparez le gain d’usage et le TCO du prototype dédié ; si le
                gain ne justifie pas le coût, écartez la reconstruction.
              </li>
              <li>
                Si la correction réussit, Power Apps peut redevenir préférable.
              </li>
            </ul>
          </GuidePremiumMemo>

          <InfoBox variant="amber" title="Incident actif : arrêtez l’arbitrage">
            <p>
              Si l’application est indisponible, si des données semblent
              perdues, si un compte est compromis ou si une politique vient de
              suspendre un flux, traitez d’abord l’incident et organisez le
              fonctionnement en mode dégradé. La refonte viendra ensuite : elle
              ne remplace ni une restauration ni une procédure de réponse à
              incident.
            </p>
          </InfoBox>

          <p>
            Avant de comparer les outils ou les tarifs, identifiez votre
            situation de départ : partez-vous de zéro ou d’une Power App déjà
            utilisée ? L’ordre des vérifications n’est pas le même.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="chemins"
          number="02"
          label="Deux chemins"
          readingTime="5 min"
          title="Vous ne choisissez pas de la même manière pour un nouveau projet et une Power App déjà utilisée"
        >
          <p>
            Pour un nouveau projet, vérifiez d’abord qu’un type d’application
            Power Platform couvre réellement la tâche. Pour une application déjà
            utilisée, identifiez la cause du problème avant d’abandonner un
            outil adopté. Les preuves à réunir sont les mêmes, mais leur ordre
            change.
          </p>

          <div className="not-prose my-7 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 dark:border-indigo-900 dark:bg-indigo-950/25">
              <div className="flex items-center gap-3">
                <Users
                  className="size-6 text-indigo-700 dark:text-indigo-300"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                  Chemin A · nouveau projet
                </h3>
              </div>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                <li>
                  Observer trois tâches représentatives et leurs exceptions.
                </li>
                <li>
                  Choisir le type d’application envisagé d’après son audience et
                  ses données.
                </li>
                <li>
                  Prototyper la requête, l’identité, le hors-ligne et le
                  parcours les plus risqués.
                </li>
                <li>
                  Faire valider licences, politiques de données, rôles,
                  environnements et exploitation.
                </li>
                <li>
                  Comparer le coût total de possession des quatre options, coûts
                  de sortie compris.
                </li>
              </ol>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/25">
              <div className="flex items-center gap-3">
                <Wrench
                  className="size-6 text-emerald-700 dark:text-emerald-300"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                  Chemin B · application existante
                </h3>
              </div>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                <li>
                  Geler une version connue et documenter l’incident ou la gêne
                  précise.
                </li>
                <li>
                  Inventorier application, données, flux, connecteurs, identités
                  et propriétaires, sans dépendre du seul créateur de
                  l’application — le « maker ».
                </li>
                <li>
                  Reproduire le problème sur une copie, mesurer les conditions
                  dans lesquelles il survient et en identifier la cause.
                </li>
                <li>Tester une correction limitée avant toute réécriture.</li>
                <li>
                  Comparer maintien corrigé, hybride et dédié sur les mêmes
                  scénarios.
                </li>
              </ol>
            </div>
          </div>

          <h3>Ce que vous comparez réellement</h3>
          <p>
            Power Apps recouvre plusieurs familles. Dans une application
            canevas, l’équipe compose librement l’interface. Une application
            pilotée par modèle s’organise autour du modèle de données Dataverse,
            tandis que Power Pages sert à créer des sites externes adossés à
            Dataverse. Avec une application dédiée, l’équipe choisit pour le
            projet l’interface, l’environnement d’exécution — le runtime —,
            l’identité, les données et le mode d’exploitation. Les traiter comme
            quatre produits interchangeables produirait de faux écarts.
          </p>

          <GuideTable
            caption="Quatre familles à confronter au même besoin"
            headers={[
              "Option",
              "Point fort à vérifier",
              "Contre-preuve à chercher",
              "Dépendance structurante",
            ]}
            rows={[
              [
                "Application canevas",
                "Parcours interne très spécifique et intégration Microsoft 365",
                "Requêtes non délégables, usage externe, accessibilité ou hors-ligne non couvert",
                "Connecteurs, sources et runtime Power Apps",
              ],
              [
                "Pilotée par modèle",
                "Données relationnelles Dataverse, vues, formulaires et processus structurés",
                "Expérience très sur mesure ou besoin sortant du modèle",
                "Dataverse, rôles et cycle de vie Power Platform",
              ],
              [
                "Power Pages",
                "Portail web externe lié à Dataverse",
                "Identité, marque, volumétrie ou tarification externe incompatible",
                "Capacité Power Pages, Dataverse et gouvernance du tenant",
              ],
              [
                "Application dédiée",
                "Expérience, intégrations et architecture conçues au besoin",
                "TCO, délai, exploitation ou dépendance à une équipe sous-estimés",
                "Code, hébergement, sécurité, support et compétences choisies",
              ],
            ]}
          />

          <p>
            Commencez donc par aligner la surface, l’audience et les données.
            Comparer une application canevas interne à un portail client dédié
            sans garder le même public fausse le verdict.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg"
              alt="Matrice en cinq sorties : arrêter, conserver, renforcer, hybrider ou reconstruire"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
            <p className="px-4 py-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-300">
              Une préférence ne devient une décision qu’après avoir recherché
              des faits capables de la contredire.
            </p>
          </div>

          <p>
            Le type d’application ne suffit pas pour trancher. Appliquez
            maintenant les mêmes cinq tests à chaque option.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cinq-tests"
          number="03"
          label="Preuves"
          readingTime="9 min"
          title="Cinq tests pour séparer une limite de plateforme d’un défaut corrigeable"
        >
          <p>
            Chaque test doit produire une trace : capture d’un avertissement,
            requête rejouable, compte de test, facture, export restauré, journal
            de déploiement ou procès-verbal de recette. « Cela devrait marcher »
            et « le commercial nous l’a dit » ne sont pas des preuves
            d’architecture.
          </p>

          <h3>Test 1 — la tâche et les données les plus difficiles</h3>
          <p>
            Prenez trois cas normaux, une exception et un échec. Notez les
            entrées, la règle, le résultat attendu, la personne qui décide et le
            temps d’attente acceptable. Rejouez ensuite les requêtes sur un jeu
            représentatif : volume, relations, filtres, tri, recherche, pièces
            jointes, simultanéité et historique.
          </p>
          <p>
            Ne confondez pas stockage et interrogation. Microsoft documente
            jusqu’à 30 millions d’éléments dans une liste ou bibliothèque
            SharePoint. Il publie aussi un seuil de vue ou requête de 5 000.
            Dans une application canevas, 500 — configurable jusqu’à 2 000 —
            concerne le traitement local de certaines opérations non délégables.
            Ce n’est pas une « limite Power Apps à 2 000 lignes ». Une formule
            non délégable peut surtout retourner un sous-ensemble incomplet et
            conduire à une décision fausse.
          </p>

          <GuidePremiumMemo
            eyebrow="Preuve attendue"
            title="Un test de délégation doit vérifier le résultat, pas seulement la vitesse"
          >
            <ul>
              <li>
                Identifier la source, la colonne, l’opérateur et la formule.
              </li>
              <li>Lire les avertissements de délégation dans l’éditeur.</li>
              <li>
                Comparer le nombre et l’identité des résultats à une requête de
                référence.
              </li>
              <li>Tester le cas au-delà des 500 et 2 000 premières lignes.</li>
              <li>Conserver une preuve après chaque correction.</li>
            </ul>
          </GuidePremiumMemo>

          <h3>Test 2 — l’audience, l’identité et les droits réels</h3>
          <p>
            Un salarié du tenant, un invité Microsoft Entra B2B provenant d’une
            autre organisation et un utilisateur public n’accèdent pas à l’outil
            dans les mêmes conditions. Pour chacun, vérifiez séparément
            l’identité, la licence et les droits. Pour un invité d’application
            canevas, contrôlez aussi l’invitation et chaque autorisation sur les
            sources sous-jacentes. Une licence dans un tenant ne confère pas
            automatiquement les mêmes droits dans un autre. Pour un portail,
            comparez Power Pages et une identité dédiée sur les volumes et
            parcours réels. Un simple partage n’est pas un portail client.
          </p>
          <p>
            Testez au minimum un compte sans privilège administratif, un compte
            invité, un compte désactivé et la révocation d’un accès. Vérifiez ce
            que l’utilisateur voit dans l’interface, mais aussi ce qu’il peut
            lire directement dans SharePoint, Dataverse ou l’API. Dans
            Dataverse, les rôles sont cumulatifs : un rôle bien configuré peut
            être contredit par un autre rôle ou une équipe.
          </p>
          <p>
            Le choix d’une architecture ne suffit pas à démontrer la conformité
            au Règlement général sur la protection des données (RGPD).
            Documentez la finalité, les catégories de données, leur
            minimisation, les durées de conservation, les destinataires, les
            sous-traitants et les transferts, puis faites examiner les mesures
            par les personnes chargées de la protection des données. Si le
            traitement est susceptible d’engendrer un risque élevé pour les
            droits et libertés, demandez au délégué à la protection des données
            (DPO) ou au conseil compétent de déterminer si une analyse d’impact
            relative à la protection des données (AIPD) est requise.
          </p>

          <h3>
            Test 3 — le contexte d’usage, le hors-ligne et l’accessibilité
          </h3>
          <p>
            Pour un usage terrain, reproduisez perte de réseau, reprise,
            synchronisation, conflit, batterie faible, appareil ancien et volume
            réaliste. Le mode dit offline-first, pensé pour continuer sans
            réseau, s’appuie ici sur Dataverse et Power Apps Mobile. Il ne
            transforme pas le navigateur ou une liste SharePoint en application
            hors-ligne générale. Si le travail doit continuer plusieurs heures
            sans réseau, le résultat de ce test peut suffire à départager le
            renforcement, l’architecture hybride et l’application dédiée.
          </p>
          <p>
            Pour une application canevas autonome configurée offline-first, la
            documentation actuelle exclut du mode hors ligne les connecteurs
            non-Dataverse comme SharePoint et les flux Power Automate. Vérifiez
            aussi relations, volumes synchronisés, pièces jointes, ordre des
            données, premier téléchargement et comportement en arrière-plan : le
            mot « hors-ligne » ne suffit pas à couvrir le parcours terrain.
            Ajoutez la perte ou le remplacement d’un appareil au protocole :
            données locales, effacement, reprise et accès résiduel doivent avoir
            un responsable et une preuve.
          </p>
          <p>
            Pour l’accessibilité, utilisez le vérificateur pour repérer des
            alertes, sans le considérer comme une preuve de conformité. À lui
            seul, il ne démontre le respect ni des Web Content Accessibility
            Guidelines (WCAG) ni du Référentiel général d’amélioration de
            l’accessibilité (RGAA). Parcourez chaque tâche au clavier, à 200 %
            de zoom, avec une police agrandie, un lecteur d’écran et les erreurs
            de validation. Contrôlez ordre de focus, nom accessible, contraste,
            messages, réactivité et orientation. Une interface « jolie dans le
            studio » n’est pas encore une interface utilisable.
          </p>

          <h3>Test 4 — le tenant : licences, connecteurs et cycle de vie</h3>
          <p>
            Dans le tenant, examinez ensemble les politiques de prévention de la
            perte de données (DLP, Data Loss Prevention), les interfaces de
            programmation (API) et la gestion du cycle de vie applicatif (ALM,
            Application Lifecycle Management).
          </p>
          <p>
            Inventoriez l’application, ses composants, ses flux Power Automate,
            connecteurs directs et indirects, passerelles, API personnalisées,
            connexions, comptes d’exécution et environnements. Pour chaque
            élément, notez propriétaire, licence, authentification, politique de
            données, fréquence, limite, alerte et procédure d’échec. Relevez
            aussi la région de chaque environnement et celle des systèmes
            connectés : la localisation d’un environnement ne prouve pas celle
            de toute la chaîne de données.
          </p>
          <p>
            Les droits de requêtes liés à la licence, la protection de service
            Dataverse et les limites propres aux connecteurs obéissent à des
            règles différentes. Les nombres publiés évoluent et ne constituent
            pas une promesse de débit métier. Les politiques DLP peuvent
            interdire une combinaison, suspendre ou mettre en quarantaine une
            application ou un flux : vérifiez les politiques effectives du
            tenant.
          </p>
          <p>
            Les politiques avancées de connecteurs (ACP, Advanced Connector
            Policies) publiées en 2026 reposent sur une liste d’autorisation
            stricte pour les connecteurs certifiés. En mode mixte, elles se
            combinent aux politiques classiques ; c’est alors la règle la plus
            restrictive qui s’applique. Les connecteurs personnalisés et HTTP ne
            sont pas encore couverts par ACP : continuez à les gouverner avec
            les politiques classiques. Inventoriez, simulez et déployez
            progressivement. Une règle sauvegardée trop tôt peut bloquer tout
            connecteur qui n’a pas été explicitement autorisé.
          </p>
          <p>
            Pour une application importante, exigez au minimum développement,
            test et production séparés, solutions, variables d’environnement,
            références de connexion, contrôle de version et déploiement
            reproductible. Un pipeline transporte une solution, pas vos données
            métier. Données, secrets, connexions et identités nécessitent leur
            propre plan et leur propre test.
          </p>

          <h3>Test 5 — propriété, support, restauration et sortie</h3>
          <p>
            Nommez le propriétaire métier, le propriétaire technique, un
            suppléant et le responsable du support. Définissez qui répond à une
            question utilisateur, qui corrige une règle, qui administre le
            tenant et qui contacte Microsoft lors d’un incident plateforme. Le
            support éditeur ne remplace ni la maintenance de votre application
            ni la continuité de votre activité.
          </p>
          <p>
            Exportez, puis restaurez sur un environnement séparé. Vérifiez
            application, flux, données, connexions, identités, secrets,
            variables, rôles et automatisations. Les solutions et fichiers
            extraits améliorent l’auditabilité et le contrôle de version dans
            Power Platform ; ils ne deviennent pas une application React ou
            Next.js. Le runtime désigne ici l’environnement technique qui
            exécute l’application. Les limites documentées de l’export
            permettent d’en déduire que quitter ce runtime peut exiger de
            reconstruire l’interface et la logique, de refaire les intégrations
            et de migrer les données ; ce n’est pas une règle Microsoft qui
            garantirait le même effort pour chaque projet.
          </p>

          <GuideTable
            caption="La preuve minimale attendue pour chaque axe"
            headers={[
              "Axe",
              "Question qui tranche",
              "Preuve acceptable",
              "Ce qui empêche de conclure",
            ]}
            rows={[
              [
                "Besoin",
                "Les cas difficiles sont-ils couverts ?",
                "Scénarios rejoués et résultats comparés",
                "Tâche ou exception inconnue",
              ],
              [
                "Données",
                "Les requêtes sont-elles exactes au volume ?",
                "Jeu représentatif et référence indépendante",
                "Avertissement non expliqué",
              ],
              [
                "Audience",
                "Chaque identité a-t-elle licence et droits ?",
                "Comptes réels de test et révocation",
                "Invité/public non testé",
              ],
              [
                "Usage",
                "Le parcours fonctionne-t-il dans son contexte ?",
                "Appareils, réseau, clavier, zoom, lecteur d’écran",
                "Usage hors ligne ou accessibilité seulement supposés",
              ],
              [
                "Tenant",
                "La solution reste-t-elle déployable et autorisée ?",
                "Politiques, environnements, solutions et journaux",
                "DLP, connexion ou propriétaire inconnu",
              ],
              [
                "Sortie",
                "Peut-on reprendre l’application sans son créateur initial ni son environnement d’origine ?",
                "Restauration complète sur environnement séparé",
                "Simple fichier exporté",
              ],
            ]}
          />

          <p>
            Pour chaque ligne encore sans preuve, définissez le prochain test à
            réaliser au lieu de retenir une hypothèse favorable. Une fois ces
            éléments réunis, comparez les coûts sans avantager l’option la moins
            documentée.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cout"
          number="04"
          label="Coût complet"
          readingTime="10 à 30 min"
          title="Comparez quatre coûts totaux de possession (TCO) à 1, 3 et 5 ans"
        >
          <p>
            Le prix d’une licence n’est pas le coût d’une application. Comparez
            Power Apps actuel, Power Apps renforcé, une architecture hybride et
            une application dédiée avec les mêmes familles de coûts. Comptez
            conception, migration, coexistence, formation, licences,
            hébergement, administration, maintenance, support métier, capacité,
            connecteurs, supervision, sécurité et réversibilité.
          </p>

          <FormulaBox>
            {`TCO sur N années = coûts ponctuels + coûts mensuels × 12 × N

N = 1, 3 ou 5
coût inconnu : le total ne peut pas être calculé
coût confirmé à 0 € : le total peut être calculé`}
          </FormulaBox>

          <p>
            Si vous valorisez du temps interne, écrivez la méthode : heures,
            rôle, coût retenu et période. Ne comptez pas la même heure dans la
            construction, la maintenance et le support. Sans méthode défendable,
            gardez ce poste inconnu ; un faux zéro favorise artificiellement
            l’option qui mobilise le plus l’équipe.
          </p>

          <h3>Les repères publics au 3 août 2026</h3>
          <p>
            La page française Microsoft affichait Power Apps Premium à
            <strong> 17,30 € HT par utilisateur et par mois</strong>, avec
            paiement annuel ; HT signifie « hors taxes ». Elle affichait aussi
            10,40 € HT avec un minimum de 2 000 postes/licences, avec paiement
            annuel et contact commercial. Le plan Developer gratuit était
            réservé au développement et au test, pas à la production.
            L’extension de capacité de base de données Dataverse était affichée
            à 34,70 € HT par Go et par mois, avec paiement annuel ; Go signifie
            « gigaoctet ».
          </p>
          <p>
            Le guide de licences de juillet 2026 indique la fin de
            commercialisation de l’ancien abonnement Power Apps « per app » en
            janvier 2026 : ne bâtissez pas un budget actuel sur l’ancien repère
            à 5 USD. Le paiement à l’usage (PAYG, pay-as-you-go) est documenté à
            10 dollars américains (USD) par utilisateur actif unique, par
            application et par mois. Plusieurs ouvertures de la même application
            dans le mois ne recomptent pas cet utilisateur. Le montant reste en
            USD : utilisez votre facture ou contrat Azure, jamais une conversion
            automatique cachée.
          </p>

          <h3>Une connexion mutualisée réduit-elle le nombre de licences ?</h3>
          <p>
            Non, pas automatiquement. Dans son guide de licences de juillet
            2026, Microsoft parle de <em>multiplexing</em> lorsqu’une
            organisation mutualise ou réachemine des connexions, interpose une
            couche technique ou automatise un processus pour réduire le nombre
            d’utilisateurs ou d’appareils qui accèdent directement au service.
            La page 25 précise qu’une personne ou un appareil qui saisit,
            interroge, consulte ou accède autrement à Power Apps, Power Automate
            ou Power Pages doit être correctement licencié, que l’accès soit
            direct ou indirect. Ajouter des couches intermédiaires ne change pas
            ce principe.
          </p>
          <p>
            Un budget limité au compte de service ou à la connexion partagée
            serait donc incomplet. La page 25 ne choisit cependant pas la
            référence commerciale applicable et ne dit pas que toute
            automatisation impose la même licence par utilisateur. Identifiez
            les personnes et appareils qui accèdent réellement au service, puis
            le modèle de licence applicable. Le guide ne remplace pas votre
            contrat : faites confirmer le scénario exact par votre équipe
            Microsoft ou un partenaire certifié Microsoft avant de chiffrer.
          </p>

          <InfoBox variant="blue" title="Prix public ≠ prix contractuel ≠ TCO">
            <p>
              Confirmez pays, devise, taxes, engagement, remise, seuil, droit
              Microsoft 365, connecteurs, Dataverse, flux, capacité,
              utilisateurs externes et canal d’achat. Un droit inclus dans un
              scénario ne signifie pas « Power Apps gratuit pour tout ».
            </p>
          </InfoBox>

          <PowerAppsDecisionWorkbench />

          <h3>
            Interpréter le résultat sans retenir trop vite l’option la moins
            chère
          </h3>
          <p>
            Un TCO incomplet n’est pas un TCO nul. Si les coûts de sortie ou de
            support de Power Apps restent inconnus, tout comme le coût de
            migration vers l’application dédiée, aucun des deux totaux ne doit
            être affiché. Une fois les données complètes, comparez aussi
            l’incertitude : montant contractuel, dépendance à une personne,
            fréquence d’évolution, capacité de restauration et coût d’une
            interruption.
          </p>
          <p>
            Ne monétisez pas automatiquement chaque heure « gagnée ». Une heure
            libérée ne devient une économie de trésorerie que si une dépense est
            réellement évitée. Pour une analyse financière plus large, utilisez
            ensuite le guide dédié au{` `}
            <Link href="/guides/calculer-roi-application-metier">
              retour sur investissement (ROI) d’une application métier
            </Link>
            , en gardant séparées trésorerie, capacité réaffectée et bénéfices
            qualitatifs.
          </p>
          <p>
            Le coût ne suffit pas pour trancher. Les cinq scénarios suivants
            montrent pourquoi une même option peut être adaptée ou non selon
            l’audience, le contexte d’usage et les preuves encore manquantes.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="scenarios"
          number="05"
          label="Exemples fictifs"
          readingTime="7 min"
          title="Cinq scénarios fictifs pour voir comment la conclusion peut changer"
        >
          <p>
            Les exemples ci-dessous sont des compositions pédagogiques. Ils ne
            sont ni des cas clients, ni des budgets ou délais de marché. Leur
            rôle est de montrer quelles preuves orientent le choix — et quelles
            informations empêchent encore de conclure.
          </p>

          <GuidePremiumCase
            initial="20"
            eyebrow="Scénario fictif composite 1 · formulaire interne"
            title="Vingt salariés saisissent des demandes simples"
          >
            <p>
              Les salariés sont déjà dans le tenant. Les données sont peu
              relationnelles, les requêtes délégables passent sur le volume
              projeté et aucun hors-ligne n’est requis. Les licences,
              environnements, rôles et propriétaires sont confirmés. Dans ce
              contexte, Power Apps peut être le choix le plus défendable ; une
              reconstruction devrait prouver un bénéfice absent du scénario.
            </p>
            <p>
              Si la solution vit dans l’environnement par défaut avec un seul
              maker, la réponse devient « renforcer », pas forcément «
              reconstruire ».
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="HF"
            eyebrow="Scénario fictif composite 2 · terrain"
            title="Des techniciens travaillent avec un réseau intermittent"
          >
            <p>
              La question décisive n’est pas « Power Apps a-t-il un mode offline
              ? », mais « ce profil Dataverse, sur ces appareils, avec ces
              pièces jointes et conflits, reproduit-il le travail attendu ? ».
              La réussite d’un pilote Power Apps Mobile peut suffire à justifier
              un renforcement. En cas d’échec, une fonction de collecte isolable
              ouvre la voie à un hybride. L’application dédiée devient
              défendable seulement si tout le travail exige un offline-first
              incompatible et inséparable.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="250"
            eyebrow="Scénario fictif composite 3 · outil critique"
            title="Deux cent cinquante utilisateurs dépendent de l’outil"
          >
            <p>
              Deux cent cinquante utilisateurs ne rendent pas Power Apps
              inadapté par principe. À cette échelle, il faut toutefois
              connaître le coût contractuel, vérifier les droits de requêtes et
              les limites des connecteurs, puis tester la charge utile. Il faut
              aussi savoir qui intervient en l’absence du propriétaire et avoir
              exécuté une restauration. Tant que ces éléments manquent, il est
              trop tôt pour trancher. Power Apps reste envisageable, à condition
              qu’un responsable d’exploitation soit nommé.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="PC"
            eyebrow="Scénario fictif composite 4 · portail client"
            title="Identité externe et expérience de marque exigeante"
          >
            <p>
              Un partage canevas à des invités B2B, Power Pages et une
              application dédiée n’offrent ni les mêmes parcours ni le même
              modèle d’identité. Comparez inscription, récupération de compte,
              droits sur les données, consentement, marque, accessibilité,
              volume, coût externe et référencement lorsqu’il est pertinent.
            </p>
            <p>
              Si Power Pages couvre le parcours, conservez-le dans la
              comparaison. Si seul un élément de marque ou d’identité manque, un
              module dédié peut compléter l’ensemble. Une reconstruction
              complète ne se justifie que si ces écarts persistent et si le coût
              total la rend soutenable.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="MP"
            eyebrow="Scénario fictif composite 5 · maker parti"
            title="L’application fonctionne mais personne n’ose la modifier"
          >
            <p>
              Le départ du maker révèle d’abord un défaut de propriété et de
              documentation. Inventoriez solutions, flux, connexions, comptes,
              règles et données ; nommez un suppléant ; restaurez sur un
              environnement séparé. Si l’application redevient déployable et
              compréhensible, le bon choix est probablement de la renforcer. Une
              reconstruction ne se justifie que si une limite fonctionnelle ou
              d’exploitation persiste après cette reprise.
            </p>
          </GuidePremiumCase>

          <GuideTable
            caption="Comment la même situation peut produire plusieurs conclusions"
            headers={[
              "Situation",
              "Preuve favorable à Power Apps",
              "Preuve favorable au dédié",
              "Verdict sans preuve",
            ]}
            rows={[
              [
                "20 salariés",
                "Requêtes, licences et gouvernance validées",
                "Parcours clé impossible à couvrir",
                "Ne pas trancher",
              ],
              [
                "Terrain",
                "Offline-first Dataverse testé avec succès",
                "Offline critique, échec reproduit et frontière inséparable",
                "Ne pas trancher",
              ],
              [
                "250 utilisateurs",
                "Coût et exploitation maîtrisés",
                "Limite durable et bénéfices documentés justifiant le coût total ou le surcoût du dédié",
                "Ne pas trancher",
              ],
              [
                "Portail client",
                "Power Pages couvre identité et marque",
                "Parcours externe essentiel non couvert",
                "Ne pas trancher",
              ],
              [
                "Maker parti",
                "Reprise et restauration réussies",
                "Maintenance toujours impraticable après remédiation",
                "Ne pas trancher",
              ],
            ]}
          />

          <p>
            Ces exemples ne désignent pas une solution valable partout. Quand un
            test échoue, tentez d’abord une correction ciblée avant de financer
            une reconstruction.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="remediation"
          number="06"
          label="Avant la refonte"
          readingTime="5 min"
          title="Testez une correction ciblée avant de financer une reconstruction"
        >
          <p>
            Décrivez le problème et le résultat attendu, puis nommez le
            responsable, l’échéance et le test qui permettra de conclure. Un
            résultat toujours insatisfaisant renforce le dossier de
            reconstruction. Si la correction tient, une migration entière
            devient peut-être inutile.
          </p>
          <p>
            Le test vous aide alors à distinguer un
            <strong> défaut remédiable</strong> d’une limite durable de
            plateforme.
          </p>

          <GuideTable
            caption="Corrections à tester avant de conclure à une limite de plateforme"
            headers={[
              "Symptôme",
              "Ce qu’il faut vérifier",
              "Correction à tenter",
              "Comment décider",
            ]}
            rows={[
              [
                "Résultats incomplets",
                "Formule non délégable, type de colonne, filtre ou source",
                "Réécrire la requête, indexer ou déplacer la logique vers une source adaptée",
                "Comparer les résultats au-delà de 500 et 2 000 lignes",
              ],
              [
                "Lenteur",
                "Appels répétés pour chaque ligne (effet N+1), flux synchrone, pièces jointes ou réseau",
                "Mesurer, réduire les appels, mettre en cache ce qui peut l’être ou revoir le modèle",
                "Temps et exactitude sur trois scénarios réels",
              ],
              [
                "Droits incohérents",
                "Rôles cumulatifs, partage direct ou autorisation de source",
                "Revoir groupes, rôles, équipes et principe du moindre privilège",
                "Tests avec comptes internes, invités, révoqués et sans privilège",
              ],
              [
                "Déploiement fragile",
                "Environnement par défaut, absence de solution ou connexion codée en dur",
                "Séparer environnements, utiliser solutions, variables et références de connexion",
                "Déploiement reproductible puis retour arrière sur environnement de test",
              ],
              [
                "Dépendance au maker",
                "Propriétaire unique, flux personnels, absence de documentation",
                "Suppléance, comptes appropriés, inventaire et procédure d’incident",
                "Modification et restauration menées sans le maker initial",
              ],
              [
                "Usage externe difficile",
                "Mauvaise surface, identité ou licence non choisie",
                "Comparer invités B2B, Power Pages, hybride et dédié sur un parcours",
                "Inscription, droits, révocation, marque et coût validés",
              ],
              [
                "Hors-ligne insuffisant",
                "Architecture SharePoint/navigateur ou profil Dataverse inadéquat",
                "Pilote Power Apps Mobile + Dataverse ou extraction d’un module terrain",
                "Coupures, conflits et reprise réussis sur appareils réels",
              ],
            ]}
          />

          <p>
            Chaque correction doit donc avoir un test, une échéance interne et
            une décision attendue. Sans ces trois éléments, le défaut reste
            ouvert et l’arbitrage est seulement repoussé.
          </p>

          <GuidePremiumMemo
            eyebrow="Lecture du résultat"
            title="Un résultat satisfaisant, insatisfaisant ou absent ne conduit pas à la même décision"
          >
            <ul>
              <li>
                Résultat satisfaisant : archivez la trace datée et poursuivez la
                comparaison.
              </li>
              <li>
                Résultat insatisfaisant : un défaut corrigeable appelle une
                nouvelle correction ciblée ; un périmètre ou un inventaire de
                licences incomplet maintient la décision en suspens ; une limite
                de plateforme reproduite ouvre l’étude de l’hybride puis de
                l’application dédiée.
              </li>
              <li>
                Preuve absente : aucune conclusion fiable n’est encore possible.
                La décision reste en attente et le prochain test doit être
                nommé.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Si le test reste négatif après cette correction bornée, la migration
            devient une hypothèse sérieuse. Elle doit encore préserver une voie
            de retour.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="audit"
          number="07"
          label="Migration exécutable"
          readingTime="8 min"
          title="Si vous reconstruisez, organisez la migration, les tests et le retour à l’ancien outil"
        >
          <p>
            Le mot « migration » masque souvent quatre travaux : comprendre
            l’existant, construire la cible, déplacer les données et faire
            changer l’organisation. Aucun export de solution ne réalise seul ces
            quatre travaux. Transformez la décision en séquence vérifiable.
          </p>

          <ol>
            <li>
              <strong>Consigner l’existant.</strong> Notez la version de
              l’application, les solutions, flux, connecteurs, environnements,
              propriétaires, sources, comptes, licences et politiques de
              données.
            </li>
            <li>
              <strong>La recette avant les écrans.</strong> Décrivez trois cas
              normaux, les exceptions, les erreurs, les droits, les documents
              produits et les temps de réponse attendus. Ces résultats servent
              de référence métier ; les captures des écrans actuels ne suffisent
              pas.
            </li>
            <li>
              <strong>Une restauration indépendante.</strong> Exportez puis
              restaurez l’ancien outil sur un environnement séparé. Vérifiez les
              données, connexions, identités, secrets, rôles et automatisations
              avant de dépendre de cette reprise.
            </li>
            <li>
              <strong>Un transfert reproductible.</strong> Avant de déplacer les
              données, attribuez un propriétaire aux doublons, clés, valeurs
              manquantes, pièces jointes, historiques, référentiels et règles de
              conservation. Le transfert utilise ensuite un script ou une
              procédure versionnée, un journal des rejets, un rapprochement des
              comptes et une vérification d’intégrité. Une copie manuelle unique
              ne suffit pas.
            </li>
            <li>
              <strong>Le parcours complet, puis les tests utilisateurs.</strong>
              Construisez d’abord un seul parcours avec identité, données,
              règle, sortie, journal et support. Testez ensuite cas normaux,
              exceptions, droits, accessibilité, charge utile, appareils et
              fonctionnement dégradé avec les utilisateurs. Chaque écart reçoit
              un responsable et une décision. Ne reproduisez pas tous les écrans
              avant d’avoir prouvé l’architecture.
            </li>
            <li>
              <strong>Coexistence, bascule et retour à l’ancien outil.</strong>
              Nommez le système maître, les écritures autorisées, la
              synchronisation, la gestion des conflits et la durée de double
              exploitation afin d’éviter deux sources de vérité. Avant la
              bascule, jouez le retour : précisez le déclencheur, le décideur,
              la dernière donnée fiable, la durée maximale, la communication et
              la procédure de réactivation de l’ancien outil. Un document non
              testé reste une hypothèse.
            </li>
            <li>
              <strong>L’extinction après stabilité.</strong> Une fois la
              stabilité mesurée, retirez les accès et connexions, archivez ce
              qui doit l’être, révoquez les secrets, arrêtez les flux et les
              licences, conservez les preuves et fixez la durée de rétention.
            </li>
          </ol>

          <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Données",
                text: "Système maître, clés, correspondance des champs, rejets, intégrité, historique et conservation.",
              },
              {
                icon: GitBranch,
                title: "Bascule",
                text: "Coexistence, synchronisation, gel des écritures, conditions de bascule ou de suspension et retour à l’ancien outil.",
              },
              {
                icon: ShieldCheck,
                title: "Exploitation",
                text: "Rôles, secrets, supervision, incident, support, sauvegarde, restauration et extinction.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <Icon
                  className="size-6 text-indigo-700 dark:text-indigo-300"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <InfoBox
            variant="amber"
            title="Ne supprimez pas l’ancien outil au premier succès"
          >
            <p>
              Définissez avant la bascule la période d’observation, les
              indicateurs d’erreur, le décideur d’extinction et les preuves à
              conserver. La coexistence coûte de l’argent, mais une extinction
              prématurée peut rendre le retour à l’ancien outil impossible.
            </p>
          </InfoBox>

          <p>
            Vous n’avez pas besoin d’attendre la décision finale. Répartissez
            dès maintenant les preuves à réunir, les essais à mener et leurs
            responsables ; la réunion suivante pourra alors s’appuyer sur des
            résultats plutôt que sur des préférences.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="lundi"
          number="08"
          label="Action immédiate"
          readingTime="3 min"
          title="Ce que vous pouvez faire lundi sans choisir encore la technologie"
        >
          <p>
            Réunissez le responsable métier, un créateur ou administrateur Power
            Platform, la personne en charge du tenant et un utilisateur
            représentatif. Ces quatre-vingt-dix minutes servent à inventorier
            les preuves disponibles et celles qui manquent, pas à choisir déjà
            une architecture.
          </p>

          <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
            <ol className="space-y-4">
              {[
                "Choisir trois tâches réelles, dont une exception et un échec récent ; nommer l’audience et les comptes de test.",
                "Inventorier application, données, flux, connecteurs, passerelles, connexions et propriétaires.",
                "Relever les avertissements de délégation, comparer un résultat au-delà des premières lignes et tester une restauration séparée.",
                "Ouvrir licences et factures réelles, puis identifier les politiques DLP, environnements et rôles effectivement appliqués.",
                "Remplir l’atelier de décision et laisser la décision en attente si une preuve critique manque ou si un contrôle fondateur est insatisfaisant.",
                "Définir une correction ciblée ou un prototype du cas le plus risqué, avec un responsable, une date et les critères de la prochaine décision.",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
                    {index + 1}
                  </span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <GuidePremiumMemo
            eyebrow="Livrable de la réunion"
            title="Le contenu minimal du compte rendu"
          >
            <ul>
              <li>
                Orientation actuelle : décision en attente, conserver,
                renforcer, hybride ou dédié.
              </li>
              <li>Preuves positives et contradictions observées.</li>
              <li>Première inconnue critique à lever.</li>
              <li>
                Estimation du coût total des quatre options, ou liste exacte des
                montants encore inconnus.
              </li>
              <li>Responsable, test et date de la prochaine décision.</li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Si la question dépasse Power Platform, deux comparaisons voisines
            éclairent la même décision. Le guide{" "}
            <Link href="/guides/airtable-notion-ou-application-metier">
              Airtable, Notion ou application métier
            </Link>{" "}
            traite du même arbitrage hors écosystème Microsoft, et celui
            consacré au remplacement de{" "}
            <Link href="/guides/remplacer-microsoft-access-application-web">
              Microsoft Access par une application web
            </Link>{" "}
            couvre le cas d’une base héritée. Si le besoin lui-même n’est pas
            encore établi, le{" "}
            <Link href="/guides/signes-besoin-logiciel-metier">
              diagnostic en trois situations
            </Link>{" "}
            évite d’acheter une solution avant d’avoir nommé le problème.
          </p>
          <p>
            Trois contrôles décident ensuite du niveau d’exigence. La{" "}
            <Link href="/guides/droits-acces-application-metier">
              gestion des droits d’accès
            </Link>{" "}
            confronte les rôles réellement appliqués dans le tenant à ceux que
            le métier croit en place. Les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité d’une application métier
            </Link>{" "}
            listent ce qu’il faut prouver avant d’élargir l’audience. Une
            bascule éventuelle suit la méthode de{" "}
            <Link href="/guides/migrer-logiciel-metier-sans-interruption">
              migration sans interruption de service
            </Link>
            , retour arrière compris.
          </p>
          <p>
            Si votre équipe ne peut pas réunir ces éléments, ne commandez pas
            encore une réécriture. Commencez par un inventaire et un prototype
            des cas difficiles. Vous pouvez ensuite{` `}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire votre projet
            </TrackedGuideCtaLink>{" "}
            à
            Hagnéré Code — ou d’abord vérifier{" "}
            <Link href="/guides/choisir-prestataire-application-metier">
              comment choisir un prestataire sur preuves
            </Link>{" "}
            ; indiquez explicitement que conserver Power Apps reste une issue
            acceptable.
          </p>
          <p>
            Avant de transmettre ce dossier, vérifiez enfin ce que chaque source
            prouve — et ce qu’elle ne prouve pas.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="sources"
          number="09"
          label="Traçabilité"
          readingTime="4 min"
          title="Comment lire les sources et les limites de ce guide"
        >
          <p>
            Les affirmations techniques et tarifaires de cette page reposent sur
            les pages produit, le guide de licences, Microsoft Learn et la
            Commission nationale de l’informatique et des libertés (CNIL),
            consultés à nouveau le 3 août 2026. La documentation officielle
            décrit le cadre général de la plateforme ; elle ne prouve pas que
            votre tenant, votre contrat, vos données et votre application
            correspondent au scénario décrit.
          </p>
          <p>
            Les prix, licences, capacités et limites d’API sont volatils. Le
            chiffre public sert de repère daté, jamais de devis. Les contrôles
            de sécurité, accessibilité et conformité nécessitent les politiques,
            rôles, technologies d’assistance et obligations de votre contexte.
            Les scénarios fictifs illustrent une méthode et ne constituent pas
            des références de coût, de délai ou de performance.
          </p>

          <GuideTable
            caption="Portée des principales familles de sources"
            headers={[
              "Source",
              "Ce qu’elle peut établir",
              "Ce qu’elle n’établit pas",
            ]}
            rows={[
              [
                "Page tarifaire",
                "Prix marketing public à une date",
                "Votre prix contractuel ou TCO",
              ],
              [
                "Guide de licences",
                "Cadre général, droits publiés et règle de multiplexing",
                "L’interprétation de votre contrat particulier",
              ],
              [
                "Microsoft Learn",
                "Fonctionnement et limites documentés",
                "La réussite dans votre application",
              ],
              [
                "CNIL",
                "Principes de protection des données dès la conception",
                "La conformité de votre traitement particulier",
              ],
              [
                "Test dans le tenant",
                "Résultat observable dans une configuration",
                "La stabilité future après changement",
              ],
              [
                "Atelier de décision local",
                "Inconnues, contradictions et calculs saisis",
                "Audit, devis ou recommandation professionnelle",
              ],
            ]}
          />

          <p>
            Une source officielle décrit le cadre général ; vos essais montrent
            le comportement obtenu dans votre configuration. Il faut les deux
            pour décider, sans confondre documentation et résultat observé.
          </p>

          <div className="not-prose my-7 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/25">
            <div className="flex gap-3">
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-emerald-700 dark:text-emerald-300"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-100">
                  Conserver Power Apps peut être la bonne décision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-900 dark:text-emerald-100">
                  Ce guide n’est pas un argumentaire contre le low-code,
                  c’est-à-dire le développement avec peu de code. Si les essais
                  réussissent dans votre environnement, si l’équipe sait
                  exploiter et restaurer l’application et si son coût total
                  reste favorable à risque comparable, conserver Power Apps est
                  un choix valable.
                </p>
              </div>
            </div>
          </div>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
