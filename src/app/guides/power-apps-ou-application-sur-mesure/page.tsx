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
  createIncarnatedCaseDecisionInputs,
  createIncarnatedCaseTcoOptions,
} from "./power-apps-decision-model";
import { PowerAppsDecisionWorkbench } from "./power-apps-decision-workbench";

const powerAppsGuide = getGuide("power-apps-ou-application-sur-mesure");

const breadcrumbName = "Power Apps ou sur mesure";

export const metadata = buildGuideMetadata(
  powerAppsGuide,
  "Règle du connecteur premium, seuils de délégation et décompte à cinq ans entre Power Apps et une application dédiée",
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
    id: "power-apps",
    number: "02",
    label: "Ce qu’on peut en faire",
    shortLabel: "Le produit",
  },
  {
    id: "connecteur",
    number: "03",
    label: "La règle du connecteur",
    shortLabel: "Licence",
  },
  {
    id: "limites",
    number: "04",
    label: "Les seuils réels",
    shortLabel: "Seuils",
  },
  {
    id: "cout",
    number: "05",
    label: "Le point de bascule",
    shortLabel: "Bascule",
  },
  {
    id: "incidents",
    number: "06",
    label: "Ce qui rate",
    shortLabel: "Incidents",
  },
  {
    id: "remediation",
    number: "07",
    label: "Réparer avant de reconstruire",
    shortLabel: "Réparer",
  },
  {
    id: "audit",
    number: "08",
    label: "Garder la porte ouverte",
    shortLabel: "Sortie",
  },
];

const outcomes = [
  {
    status: "DÉCISION EN ATTENTE",
    title: "Réunir la preuve manquante",
    trigger:
      "Une donnée capable de changer l’architecture manque\u00a0: audience, requête réelle, licence, politique de données, hors-ligne, restauration ou exploitation.",
    next: "Obtenir la première preuve manquante. Ne pas remplacer l’inconnu par zéro, par un avis ou par une démonstration commerciale.",
  },
  {
    status: "CONSERVER",
    title: "Garder Power Apps",
    trigger:
      "Les cas difficiles passent, le coût contractuel est compris, les droits sont maîtrisés et l’équipe sait déployer, restaurer et soutenir l’application.",
    next: "Archiver les preuves et définir les événements qui déclencheront une nouvelle revue\u00a0: volume, audience, licence, politique du tenant ou criticité.",
  },
  {
    status: "RENFORCER",
    title: "Corriger l’architecture Power Platform",
    trigger:
      "Le besoin convient à la plateforme, mais données, formules, environnements, rôles, propriétaires ou supervision sont insuffisants.",
    next: "Traiter le défaut mesuré, rejouer le test et recalculer le coût total avant de financer une reconstruction.",
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
    key: "demarrer",
    num: "01",
    label: "Démarrer avec Power Apps",
    items: [
      {
        question:
          "Peut-on faire une application Power Apps sans licence supplémentaire\u00a0?",
        answer:
          "Oui, tant que l’application ne touche que des connecteurs standard\u00a0: SharePoint, Outlook, Excel, Teams, Planner. Le tableau «\u00a0Power Apps pour Microsoft 365\u00a0» de Microsoft Learn coche «\u00a0se connecter aux services Cloud avec les connecteurs standard\u00a0» et laisse vide «\u00a0accéder aux données locales ou utiliser les connecteurs Premium ou personnalisés\u00a0». Un formulaire de congés adossé à une liste SharePoint coûte donc 0\u00a0€ de licence en plus. Ouvrez la fiche de chaque connecteur envisagé et lisez sa classe avant de promettre la gratuité.",
      },
      {
        question:
          "Combien de temps faut-il pour construire une Power App\u00a0?",
        answer:
          "Aucune durée honnête ne se donne sans compter. La méthode\u00a0: listez les écrans, les règles de gestion, les cas d’exception et les rôles, puis chiffrez chaque écran séparément. Chez nous, deux repères publics encadrent l’amont plutôt que la construction — l’audit des processus internes tient en 1 jour pour 990\u00a0€ HT, le Discovery Sprint en 2 jours pour 1\u00a0500\u00a0€ HT et ressort avec un prototype, un plan écrit et un devis ferme. La durée de construction, elle, se lit sur ce devis.",
      },
      {
        question:
          "Power Apps peut-il remplacer un fichier Excel partagé\u00a0?",
        answer:
          "Pour un tableau que six personnes s’envoient par courriel, oui, et c’est un des meilleurs usages de la plateforme\u00a0: saisie contrôlée, un seul enregistrement à la fois, historique. La bascule se paie ailleurs. Un classeur Excel accepte n’importe quelle formule sur n’importe quel volume\u00a0; une application canevas ne ramène que 500 lignes — réglables de 1 à 2\u00a0000 — quand la formule n’est pas déléguée. Vérifiez d’abord vos calculs les plus longs.",
      },
    ],
  },
  {
    key: "plateforme",
    num: "02",
    label: "Données, audience et limites",
    items: [
      {
        question: "SharePoint ou Dataverse\u00a0: lequel choisir\u00a0?",
        answer:
          "SharePoint tient les listes simples et les usages documentaires, et il reste dans les connecteurs standard, donc sans licence Power Apps en plus. Dataverse apporte un modèle relationnel, des rôles fins et le mode hors-ligne documenté, mais il compte parmi les accès premium\u00a0: 17,30\u00a0€ HT par utilisateur et par mois, plus 34,70\u00a0€ HT par Go et par mois au-delà de la capacité incluse. Le volume ne tranche pas\u00a0: ce sont les relations entre tables et les droits par ligne qui tranchent.",
      },
      {
        question:
          "Peut-on ouvrir une Power App à des clients ou à des fournisseurs\u00a0?",
        answer:
          "Trois chemins existent, et ils ne se valent pas. Un partage à des invités Microsoft Entra B2B suppose que chacun ait la licence Power Apps requise et les droits sur les sources sous-jacentes — une licence dans un tenant n’en donne aucune dans un autre. Power Pages porte un vrai site externe, avec sa propre tarification par utilisateur authentifié ou anonyme. Une application dédiée gère l’identité elle-même. Comparez inscription, récupération de compte et révocation, pas seulement l’écran d’accueil.",
      },
      {
        question: "Power Apps fonctionne-t-il hors ligne\u00a0?",
        answer:
          "Le mode hors-ligne intégré et documenté repose sur Dataverse et l’application mobile Power Apps. Pour une application canevas autonome activée hors ligne, la documentation exclut les connecteurs autres que Dataverse — SharePoint compris — et les flux Power Automate. Un technicien de maintenance qui saisit ses interventions dans un sous-sol sans réseau relève donc de Dataverse, donc du plan premium à 17,30\u00a0€ HT par personne et par mois. Reproduisez coupure, reprise et conflit sur les appareils réels avant de vous engager.",
      },
    ],
  },
  {
    key: "duree",
    num: "03",
    label: "Reprise, coût et sortie",
    items: [
      {
        question:
          "Que devient l’application si le salarié qui l’a créée quitte l’entreprise\u00a0?",
        answer:
          "Elle continue de tourner, et c’est le piège. Les connexions restent attachées à un compte qui va être désactivé, et personne ne peut plus publier une correction. Le coût réel se mesure en jours\u00a0: retrouver le propriétaire de chaque connexion, recréer les références, exporter la solution et la redéployer dans un environnement dédié demande plusieurs jours d’un administrateur Microsoft 365. Nommez un suppléant et sortez l’application de l’environnement par défaut avant le départ, pas après.",
      },
      {
        question:
          "Combien coûte une application métier construite sur mesure\u00a0?",
        answer:
          "Notre grille publique, relevée sur /tarifs le 28 août 2026, situe un outil interne à 8\u00a0000\u00a0€ HT pour un processus ciblé sur une équipe, 25\u00a0000\u00a0€ HT pour un CRM ou ERP léger avec intégrations, 80\u00a0000\u00a0€ HT pour un outil multi-services avec authentification unique. Au-delà de 8\u00a0000\u00a0€ HT de projet, un cadrage payé précède systématiquement le devis. La maintenance se contracte à part, avec un repère indicatif de 2\u00a0500\u00a0€ HT par mois sur le scénario le plus léger.",
      },
      {
        question:
          "Quand une application sur mesure devient-elle vraiment défendable\u00a0?",
        answer:
          "Quand un usage précis ne passe pas et qu’une correction bornée a échoué — pas quand la facture de licence irrite. Sur le décompte de ce guide, il faudrait 141 utilisateurs en plan premium pour que Power Apps rattrape le coût d’une application dédiée maintenue au forfait publié. Les vraies raisons de partir sont ailleurs\u00a0: un parcours externe que Power Pages ne couvre pas, un travail hors ligne incompatible, une règle métier que Power Fx n’exprime pas, une contrainte d’hébergement.",
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
        heroDescription={"Tout se joue le jour où votre application branche autre chose que SharePoint. Tant qu’elle reste sur les connecteurs standard, elle ne coûte aucune licence en plus. Dès qu’elle interroge SQL Server, Dataverse ou une passerelle locale, chaque utilisateur passe à 17,30\u00a0€ HT par mois. Ce guide résout le décompte à cinq ans sur un cas chiffré et dit à partir de combien d’utilisateurs l’écart s’inverse."}
        stats={[
          { label: "Point de bascule", value: "141 utilisateurs" },
          { label: "Licence premium", value: "17,30\u00a0€ HT/mois" },
          { label: "Horizons résolus", value: "1 · 3 · 5 ans" },
          { label: "Score opaque", value: "Aucun" },
          { label: "Prix maison publiés", value: "Oui" },
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
            "Licence incluse ou premium, durée de construction, SharePoint contre Dataverse, ouverture à des externes, hors-ligne, départ du créateur, prix d’un outil interne et conditions d’une reconstruction.",
          ctaTitle: "Un point encore ouvert sur votre outil interne\u00a0?",
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
              "Page française consultée le 28 août 2026\u00a0: Premium à 17,30\u00a0€ HT/utilisateur/mois, paiement annuel\u00a0; 10,40\u00a0€ HT à partir de 2\u00a0000 licences\u00a0; capacité Dataverse supplémentaire à 34,70\u00a0€ HT/Go/mois\u00a0; plan Developer gratuit, réservé au développement et au test.",
          },
          {
            source:
              "Microsoft Learn · vue d’ensemble des licences Power Platform",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/pricing-billing-skus",
            description:
              "Consultée le 28 août 2026. Le tableau «\u00a0Power Apps pour Microsoft 365\u00a0» coche «\u00a0se connecter aux services Cloud avec les connecteurs standard\u00a0» et laisse vide «\u00a0accéder aux données locales ou utiliser les connecteurs Premium ou personnalisés\u00a0». C’est la source de la règle du connecteur.",
          },
          {
            source: "Microsoft Learn · compteurs de paiement à l’utilisation",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/pay-as-you-go-meters",
            description:
              "Consultée le 28 août 2026. Compteur Power Apps à 10 USD par utilisateur actif unique, par application et par mois\u00a0; les ouvertures répétées ne recomptent pas l’utilisateur. Le tableau des types de licence confirme qu’un utilisateur Microsoft 365 n’est pas compté sur connecteurs standard, et l’est sur connecteurs premium.",
          },
          {
            source: "Microsoft Learn · connecteur SQL Server",
            href: "https://learn.microsoft.com/fr-fr/connectors/sql/",
            description:
              "Consultée le 28 août 2026. Le tableau de disponibilité classe le connecteur SQL Server en «\u00a0Premium\u00a0» pour Power Apps, Power Automate et Copilot Studio. C’est cette ligne qui fait basculer la facture du cas construit de ce guide.",
          },
          {
            source:
              "Microsoft · guide de licences Power Platform, juillet 2026",
            href: "https://go.microsoft.com/fwlink/?LinkId=2085130",
            description:
              "La page 25 décrit le multiplexing et les accès directs ou indirects\u00a0: une personne ou un appareil qui saisit, interroge ou consulte doit être correctement licencié. Le guide précise qu’il ne remplace ni les documents contractuels ni la validation du scénario exact.",
          },
          {
            source:
              "Microsoft Learn · délégation dans les applications canevas",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/delegation-overview",
            description:
              "Consultée le 28 août 2026. Liste les fonctions déléguables (=, <>, >, >=, <, <=, StartsWith, EndsWith, TrimEnds, IsBlank, And, Or, Not) et celles qui ne le sont jamais (Lower, Upper, Left, Mid, Len, Concatenate, If, Text, Value). Limite locale de 500 enregistrements, réglable de 1 à 2\u00a0000.",
          },
          {
            source: "Microsoft Support · grandes listes SharePoint",
            href: "https://support.microsoft.com/fr-fr/office/seuil-d-affichage-de-liste-pour-les-biblioth%C3%A8ques-et-les-grandes-listes-e2ea4d5d-ec23-4171-95c4-c7f5b5dbfd8a",
            description:
              "Une liste ou bibliothèque peut contenir jusqu’à 30 millions d’éléments\u00a0; le seuil d’affichage de liste est de 5\u00a0000 éléments par opération de base de données. La page décrit le rôle des colonnes indexées dans les vues filtrées\u00a0; elle ne promet pas qu’elles lèvent le seuil.",
          },
          {
            source: "Microsoft Learn · offline-first Power Apps Mobile",
            href: "https://learn.microsoft.com/fr-fr/power-apps/mobile/mobile-offline-works-overview",
            description:
              "Architecture hors-ligne intégrée, adossée à Dataverse et à l’application mobile Power Apps. Profils, filtres, synchronisations et conflits restent à tester sur les appareils réellement utilisés.",
          },
          {
            source:
              "Microsoft Learn · limites hors ligne des applications canevas",
            href: "https://learn.microsoft.com/en-us/power-apps/mobile/limitations-canvas-apps",
            description:
              "Pour une application canevas autonome activée hors ligne, les connecteurs autres que Dataverse — dont SharePoint — et les flux Power Automate ne sont pas pris en charge.",
          },
          {
            source: "Microsoft Learn · politiques de données DLP",
            href: "https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention",
            description:
              "Les politiques classent et combinent les connecteurs\u00a0; selon les règles effectives, applications et flux peuvent être bloqués, suspendus ou mis en quarantaine. C’est le mécanisme du deuxième incident raconté en section 06.",
          },
          {
            source: "Microsoft Learn · environnements Power Platform",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/environments-overview",
            description:
              "Rôle des environnements dans la séparation des applications, flux, connexions et données. Une application importante ne devrait pas dépendre tacitement de l’environnement par défaut.",
          },
          {
            source:
              "Microsoft Learn · fichiers de solution et contrôle de version",
            href: "https://learn.microsoft.com/fr-fr/power-platform/alm/use-source-control-solution-files",
            description:
              "Extraction des fichiers de solution pour audit et contrôle de version dans Power Platform. Ces fichiers ne constituent pas un export en code web portable\u00a0: quitter la plateforme suppose de reconstruire l’interface et la logique.",
          },
          {
            source: "Microsoft Learn · vérificateur d’accessibilité",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessibility-checker",
            description:
              "Outil d’aide qui repère certains problèmes. Il ne constitue une preuve de conformité ni aux Web Content Accessibility Guidelines (WCAG) ni au Référentiel général d’amélioration de l’accessibilité (RGAA).",
          },
          {
            source: "Hagnéré Code · tarifs publics",
            href: "/tarifs",
            description:
              "Grille relevée le 28 août 2026\u00a0: audit des processus internes 990\u00a0€ HT (1 jour), Discovery Sprint 1\u00a0500\u00a0€ HT (2 jours, déduit si la phase 2 est lancée), outils internes 8\u00a0000 / 25\u00a0000 / 80\u00a0000\u00a0€ HT, forfaits de maintenance avec un repère indicatif à partir de 2\u00a0500\u00a0€ HT par mois. Repères publics et indicatifs\u00a0: le devis signé fixe le prix ferme.",
          },
          {
            source: "CNIL · encadrer les développements informatiques",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Protection des données dès la conception, minimisation et exigences intégrées au cycle de développement. Choisir Power Apps ou le sur-mesure ne certifie à soi seul la conformité d’aucun traitement.",
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
            label: "Besoin d’un logiciel métier\u00a0: le diagnostic en 6 réponses",
            href: "/guides/signes-besoin-logiciel-metier",
          },
          {
            label: "Quel processus métier automatiser en premier\u00a0?",
            href: "/guides/automatiser-processus-metier",
          },
          {
            label: "Comment rédiger un cahier des charges SaaS\u00a0?",
            href: "/guides/cahier-des-charges-saas",
          },
        ]}
        relatedGuidesLabel="3 guides complémentaires"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="2 min"
          title="Le jour où l’application branche autre chose que SharePoint"
        >
          <p>
            Une responsable administrative saisit ses demandes d’achat dans un
            formulaire SharePoint depuis dix-huit mois. Tout tient, jusqu’au
            matin où le service achats veut voir le stock disponible, qui vit
            dans l’ERP. Ce matin-là, la facture change de nature.
          </p>
          <p>
            <strong>
              Tant que votre application ne touche que SharePoint, Outlook,
              Excel ou Teams, elle tourne sur les droits Power Apps déjà inclus
              dans Microsoft&nbsp;365&nbsp;: 0&nbsp;€ de licence en plus.
            </strong>{" "}
            Dès qu’elle interroge SQL Server, Dataverse, un connecteur
            personnalisé, une passerelle vers un serveur local ou une adresse
            HTTP, chaque utilisateur passe au plan Premium, affiché
            17,30&nbsp;€ hors taxes (HT) par utilisateur et par mois avec
            paiement annuel sur la page française de Microsoft, consultée le
            28&nbsp;août 2026.
          </p>
          <p>
            En face, notre grille publique situe un outil interne sur mesure à
            partir de 8&nbsp;000&nbsp;€ HT. Neuf utilisateurs en Premium
            coûtent 1&nbsp;868&nbsp;€ HT par an. La section&nbsp;05 résout le
            décompte complet aux trois horizons&nbsp;: sur le seul terrain du
            prix, il faudrait 141&nbsp;utilisateurs pour que l’écart s’inverse.
          </p>

          <GuidePremiumCase
            initial="9"
            eyebrow="Fil rouge du guide · exemple construit"
            title={"Neuf personnes, 3\u00a0200 demandes d’achat, un connecteur qui change tout"}
          >
            <p>
              <em>
                Exemple construit à partir des fourchettes citées dans ce
                guide&nbsp;— ce n’est pas un dossier client.
              </em>{" "}
              Une entreprise de menuiserie industrielle de 34&nbsp;salariés à
              Besançon. Sabine, responsable administrative, a monté elle-même
              une application canevas de demandes d’achat sur une liste
              SharePoint. Neuf personnes s’en servent&nbsp;: elle, six chefs
              d’atelier, le contrôleur de gestion et le DSI. La liste porte
              3&nbsp;200&nbsp;lignes après dix-huit mois.
            </p>
            <p>
              Le service achats demande maintenant d’afficher le stock
              disponible, qui vit dans l’ERP sur SQL Server. L’administrateur
              Microsoft&nbsp;365 ouvre la fiche du connecteur et lit&nbsp;:
              <em> Premium</em>. Nous suivrons ce dossier jusqu’au décompte à
              cinq ans.
            </p>
          </GuidePremiumCase>

          <InfoBox variant="amber" title={"Incident actif\u00a0: arrêtez l’arbitrage"}>
            <p>
              Si l’application est indisponible, si des données semblent
              perdues, si un compte est compromis ou si une politique vient de
              suspendre un flux, traitez d’abord l’incident et organisez le
              fonctionnement en mode dégradé. La refonte viendra ensuite&nbsp;:
              elle ne remplace ni une restauration ni une procédure de réponse
              à incident.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="power-apps"
          number="02"
          label="Le produit"
          readingTime="2 min"
          title={"Power Apps, qu’est-ce qu’on peut vraiment en faire\u00a0?"}
        >
          <p>
            Le nom recouvre trois produits qui ne se ressemblent pas, et la
            confusion entre eux coûte plus cher que n’importe quelle limite
            technique.
          </p>
          <p>
            <strong>L’application canevas</strong> est celle que tout le monde
            appelle «&nbsp;une Power App&nbsp;». Vous dessinez l’écran comme
            une diapositive, puis vous écrivez la logique en{" "}
            <strong>Power&nbsp;Fx</strong>, le langage de formules de la
            plateforme, très proche de celui d’Excel&nbsp;:{" "}
            <code>Filter</code>, <code>LookUp</code>, <code>If</code>. C’est
            l’outil du formulaire de demande d’achat de Sabine, du relevé de
            présence, du constat de chantier photographié sur téléphone.
          </p>
          <p>
            <strong>L’application pilotée par modèle</strong> part de l’autre
            bout. Vous décrivez d’abord les tables dans{" "}
            <strong>Dataverse</strong>, la base relationnelle de Power
            Platform, avec leurs relations et leurs droits par ligne&nbsp;; les
            écrans se génèrent ensuite. C’est ce qu’il faut pour un suivi
            d’interventions où un technicien de maintenance relie un client, un
            contrat, un équipement et un bon de travail.
          </p>
          <p>
            <strong>Power Pages</strong>, enfin, produit un site web adossé à
            Dataverse pour des gens absents de votre annuaire interne&nbsp;: un
            portail où un fournisseur dépose ses factures.
          </p>
          <p>
            Ces trois familles n’ont pas le même régime de licence, et c’est là
            que se joue la facture. Une application canevas sur connecteurs
            standard passe avec les droits déjà inclus dans
            Microsoft&nbsp;365. Une application pilotée par modèle suppose
            Dataverse, donc un accès premium. Power Pages a sa propre
            tarification, comptée par utilisateur et par site.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="connecteur"
          number="03"
          label="Licence"
          readingTime="3 min"
          title={"Ce que Power Apps coûte vraiment\u00a0: la règle du connecteur"}
        >
          <p>
            Microsoft publie la règle dans un tableau que presque personne ne
            lit. Sur la page de vue d’ensemble des licences Power Platform,
            consultée le 28&nbsp;août 2026, la colonne «&nbsp;Power Apps pour
            Microsoft&nbsp;365&nbsp;» coche «&nbsp;se connecter aux services
            Cloud avec les connecteurs standard&nbsp;» et laisse vide
            «&nbsp;accéder aux données locales ou utiliser les connecteurs
            Premium ou personnalisés&nbsp;». La page des compteurs de paiement
            à l’usage confirme la même frontière côté facturation&nbsp;: un
            utilisateur sous plan Microsoft&nbsp;365 n’est pas compté sur une
            application à connecteurs standard, et l’est sur une application à
            connecteurs premium.
          </p>

          <GuideTable
            caption="Ce qui fait basculer la facture d’une Power App"
            headers={[
              "Ce que l’application touche",
              "Classe du connecteur",
              "Ce que ça change sur la facture",
            ]}
            rows={[
              [
                "SharePoint, Outlook, Excel, Teams, Planner, OneDrive",
                "Standard",
                "0\u00a0€ de licence en plus\u00a0: les droits inclus dans Microsoft 365 suffisent",
              ],
              [
                "SQL Server, Dataverse, connecteur personnalisé, passerelle vers un serveur local, HTTP",
                "Premium",
                "17,30\u00a0€ HT par utilisateur et par mois, soit 207,60\u00a0€ HT par personne et par an",
              ],
              [
                "Application pilotée par modèle, quelle que soit la source",
                "Dataverse obligatoire",
                "Même bascule, plus 34,70\u00a0€ HT par Go et par mois au-delà de la capacité incluse",
              ],
              [
                "Compte de service qui relaie les accès de plusieurs personnes",
                "Multiplexing",
                "Aucune économie\u00a0: la personne qui consulte doit être licenciée, accès direct ou indirect",
              ],
            ]}
          />

          <p>
            Appliquons la ligne 2 au dossier de Sabine. Le connecteur SQL
            Server est classé <em>Premium</em> sur sa fiche Microsoft
            Learn&nbsp;: les neuf utilisateurs basculent ensemble. Le calcul
            tient sur une ligne&nbsp;: 9&nbsp;×&nbsp;17,30&nbsp;€&nbsp;×&nbsp;12
            = <strong>1&nbsp;868,40&nbsp;€ HT par an</strong>, soit
            9&nbsp;342&nbsp;€ sur cinq ans. Refaites-le avec votre nombre de
            personnes&nbsp;: chaque utilisateur supplémentaire pèse
            1&nbsp;038&nbsp;€ HT sur cinq ans.
          </p>

          <h3>Les autres repères publics, et leurs pièges</h3>
          <p>
            À partir de 2&nbsp;000&nbsp;licences, la même page affiche
            10,40&nbsp;€ HT par utilisateur et par mois, avec paiement annuel
            et passage par un commercial. Le plan Developer reste gratuit, mais
            il est réservé au développement et au test&nbsp;— jamais à la
            production. L’ancien abonnement «&nbsp;par application&nbsp;» n’est
            plus commercialisé depuis janvier 2026&nbsp;: un budget bâti sur le
            repère à 5&nbsp;USD qui circule encore est faux. Le paiement à
            l’usage se compte, lui, à 10&nbsp;USD par utilisateur actif unique,
            par application et par mois&nbsp;— les ouvertures répétées dans le
            mois ne recomptent pas la personne. Ce montant reste en dollars, et
            aucune conversion automatique ne remplace votre facture Azure.
          </p>

          <h3>Une connexion mutualisée réduit-elle le nombre de licences&nbsp;?</h3>
          <p>
            Non, pas automatiquement. Microsoft appelle{" "}
            <em>multiplexing</em> le fait de mutualiser ou de réacheminer des
            connexions, d’interposer une couche technique ou d’automatiser un
            processus pour réduire le nombre d’utilisateurs qui accèdent
            directement au service. La page 25 de son guide de licences précise
            qu’une personne ou un appareil qui saisit, interroge, consulte ou
            accède autrement à Power Apps doit être correctement licencié, que
            l’accès soit direct ou indirect. Ajouter des couches
            intermédiaires ne change pas ce principe.
          </p>
          <p>
            Sur le dossier de Sabine, la tentation existe&nbsp;: faire lire
            l’ERP par un compte de service unique et rediffuser le stock dans
            la liste SharePoint. Un budget limité au compte de service ou à la
            connexion partagée serait donc incomplet. La page 25 ne choisit
            pourtant pas la référence commerciale applicable&nbsp;: identifiez
            qui accède réellement, puis faites confirmer le scénario exact par
            votre équipe Microsoft ou un partenaire certifié Microsoft. Le guide
            de licences ne remplace pas votre contrat.
          </p>

          <InfoBox variant="blue" title="Prix public ≠ prix contractuel ≠ coût total">
            <p>
              Confirmez pays, devise, taxes, engagement, remise, seuil, droit
              Microsoft&nbsp;365, connecteurs, Dataverse, flux, capacité,
              utilisateurs externes et canal d’achat. Un droit inclus dans un
              scénario ne signifie pas «&nbsp;Power Apps gratuit pour
              tout&nbsp;».
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="limites"
          number="04"
          label="Seuils réels"
          readingTime="3 min"
          title="Où Power Apps s’arrête, et où la rumeur se trompe"
        >
          <p>
            «&nbsp;Power Apps est limité à 2&nbsp;000&nbsp;lignes&nbsp;»&nbsp;:
            la phrase circule dans toutes les réunions de décision, et elle
            mélange trois nombres qui ne mesurent pas la même chose.
          </p>

          <GuideTable
            caption="Trois nombres qu’on confond tout le temps"
            headers={[
              "Le nombre",
              "Ce qu’il limite réellement",
              "Ce qu’il ne limite pas",
              "Comment on vit avec",
            ]}
            rows={[
              [
                "30 millions",
                "Le nombre d’éléments qu’une liste ou bibliothèque SharePoint peut contenir",
                "Rien d’autre\u00a0: ce n’est pas un plafond d’application",
                "Aucune action\u00a0; c’est le toit, pas la porte",
              ],
              [
                "5\u00a0000",
                "Le nombre d’éléments qu’une seule opération de base de données traite d’un coup — le seuil d’affichage de liste",
                "Le nombre de lignes stockées dans la liste",
                "Vues filtrées sur colonne indexée, découpage par dossier ou par année",
              ],
              [
                "500, réglable de 1 à 2\u00a0000",
                "Le nombre d’enregistrements ramenés sur l’appareil quand une formule n’est pas déléguée",
                "Ce qu’une formule déléguée peut interroger, qui n’a pas cette limite",
                "Réécrire la formule avec des fonctions déléguables",
              ],
            ]}
          />

          <p>
            La ligne du milieu mérite une nuance que la plupart des articles
            escamotent&nbsp;: la page de support Microsoft décrit le rôle des
            colonnes indexées dans les vues filtrées, sans promettre qu’elles
            lèvent le seuil de 5&nbsp;000.
          </p>

          <h3>Reconnaître une formule non délégable sur votre propre écran</h3>
          <p>
            La ligne du bas est la seule vraiment dangereuse, parce qu’elle ne
            plante pas&nbsp;: elle répond faux. Sur les 3&nbsp;200&nbsp;lignes
            de Sabine, cette formule ne regarde que les 500&nbsp;premières.
          </p>

          <FormulaBox>
            {`// Non délégable : Lower() n’est déléguée à aucune source de données
Filter(DemandesAchat; Lower(Statut) = "en attente")

// Délégable sur SharePoint : comparaison directe sur la colonne
Filter(DemandesAchat; Statut = "En attente")`}
          </FormulaBox>

          <p>
            Power Fx ne vous laisse pas sans signal. La partie non déléguée est
            soulignée d’une ligne bleue ondulée, et un triangle jaune apparaît
            à côté de la galerie concernée. La documentation Microsoft nomme
            les fonctions qui passent&nbsp;— <code>=</code>, <code>&lt;&gt;</code>,{" "}
            <code>&gt;</code>, <code>&lt;</code>, <code>StartsWith</code>,{" "}
            <code>EndsWith</code>, <code>TrimEnds</code>, <code>IsBlank</code>,{" "}
            <code>And</code>, <code>Or</code>, <code>Not</code>&nbsp;— et
            celles qui ne passent jamais&nbsp;: <code>Lower</code>,{" "}
            <code>Upper</code>, <code>Left</code>, <code>Mid</code>,{" "}
            <code>Len</code>, <code>If</code>, <code>Text</code>,{" "}
            <code>Value</code>, la concaténation.
          </p>

          <GuidePremiumMemo
            eyebrow="Le test qui prend dix minutes"
            title="Passez la limite de lignes à 1, et regardez ce qui casse"
          >
            <ul>
              <li>
                Dans le studio, ouvrez <strong>Paramètres</strong>, puis{" "}
                <strong>Général</strong>, et réglez la{" "}
                <strong>limite de lignes de données</strong> sur 1.
              </li>
              <li>
                Rejouez vos trois écrans les plus utilisés&nbsp;: toute liste
                qui n’affiche plus qu’un enregistrement repose sur une formule
                non déléguée.
              </li>
              <li>
                Corrigez, remettez la valeur d’origine, et conservez la capture
                avant et après.
              </li>
              <li>
                Ce test coûte une demi-journée à un développeur et se refait à
                chaque évolution.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Deux autres limites tranchent réellement des dossiers. Le mode
            hors-ligne intégré repose sur Dataverse et l’application mobile
            Power Apps&nbsp;: pour une application canevas autonome activée
            hors ligne, la documentation exclut les connecteurs autres que
            Dataverse&nbsp;— SharePoint compris&nbsp;— et les flux Power
            Automate. Et le vérificateur d’accessibilité repère des alertes
            utiles, sans démontrer le respect des WCAG ni du RGAA&nbsp;:
            parcourez chaque tâche au clavier, à 200&nbsp;% de zoom et au
            lecteur d’écran avant de promettre quoi que ce soit à un service
            public.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cout"
          number="05"
          label="Point de bascule"
          readingTime="4 min"
          title={"À partir de combien d’utilisateurs le sur-mesure devient-il moins cher\u00a0?"}
        >
          <p>
            «&nbsp;Power Apps ou application sur mesure&nbsp;»&nbsp;: la moitié
            Microsoft de cette comparaison se chiffre en trois minutes, l’autre
            reste presque toujours vide, et c’est ce trou qui fait prendre de
            mauvaises décisions. Voici donc nos propres montants, relevés sur
            notre page{" "}
            <Link href="/tarifs">tarifs</Link> le 28&nbsp;août 2026&nbsp;: un
            outil interne sur mesure à <strong>8&nbsp;000&nbsp;€ HT</strong>{" "}
            pour un processus ciblé sur une équipe,{" "}
            <strong>25&nbsp;000&nbsp;€ HT</strong> pour un CRM ou ERP léger
            avec intégrations, <strong>80&nbsp;000&nbsp;€ HT</strong> pour un
            outil multi-services avec authentification unique. Au-delà de
            8&nbsp;000&nbsp;€ HT de projet, un cadrage payé précède
            systématiquement le devis&nbsp;: le Discovery Sprint,
            1&nbsp;500&nbsp;€ HT et 2&nbsp;jours, déduit si la phase suivante
            est lancée. La maintenance se contracte à part, avec un repère
            indicatif de 2&nbsp;500&nbsp;€ HT par mois sur le scénario le plus
            léger. Ce sont des repères publics et indicatifs&nbsp;; le devis
            signé fixe le prix ferme.
          </p>

          <h3>Les deux hypothèses que nous posons, et comment les remplacer</h3>
          <p>
            Deux montants ne se lisent nulle part et doivent donc être posés à
            découvert. Le premier&nbsp;: <strong>350&nbsp;€ le jour chargé</strong>{" "}
            pour le temps interne de l’administrateur Microsoft&nbsp;365 et de
            la responsable administrative. Remplacez-le par le vôtre&nbsp;;
            votre expert-comptable ou votre contrôleur de gestion le sort en
            cinq minutes à partir du salaire brut, des charges patronales et du
            nombre de jours réellement travaillés. Le second&nbsp;:{" "}
            <strong>six semaines de double exploitation</strong> après une
            bascule, à raison de vingt minutes de ressaisie par jour ouvré,
            soit dix heures. Aucun des deux ne sort d’une source&nbsp;: ce sont
            des hypothèses, elles sont écrites ici pour que vous puissiez les
            contester.
          </p>

          <GuideTable
            caption="Le décompte sur cinq ans du cas construit, poste par poste"
            headers={[
              "Poste",
              "Power Apps avec connecteur premium",
              "Application dédiée",
            ]}
            rows={[
              [
                "Cadrage payé avant construction",
                "—",
                "Discovery Sprint 1\u00a0500\u00a0€, déduit au lancement\u00a0: 0\u00a0€",
              ],
              [
                "Construction ou adaptation",
                "4\u00a0j × 350\u00a0€ = 1\u00a0400\u00a0€ (connecteur SQL, passerelle, formules reprises)",
                "8\u00a0000\u00a0€ (repère Starter publié)",
              ],
              [
                "Reprise des 3\u00a0200 lignes et six semaines de double exploitation",
                "—",
                "3\u00a0j × 350\u00a0€ + 10\u00a0h de ressaisie = 1\u00a0490\u00a0€",
              ],
              [
                "Licences éditeur sur 60 mois",
                "9 × 17,30\u00a0€ × 60 = 9\u00a0342\u00a0€",
                "0\u00a0€",
              ],
              [
                "Hébergement et maintenance sur 60 mois",
                "0\u00a0€ au-delà de l’abonnement Microsoft 365 déjà payé",
                "2\u00a0500\u00a0€ × 60 = 150\u00a0000\u00a0€",
              ],
              [
                "Administration interne sur 60 mois",
                "0,5\u00a0j/mois × 350\u00a0€ × 60 = 10\u00a0500\u00a0€",
                "0,25\u00a0j/mois × 350\u00a0€ × 60 = 5\u00a0250\u00a0€",
              ],
              [
                "Sortie prévue au terme des cinq ans",
                "Reconstruire ailleurs\u00a0: 8\u00a0000\u00a0€ + 1\u00a0490\u00a0€ = 9\u00a0490\u00a0€",
                "Transfert à une autre équipe\u00a0: 6\u00a0j × 350\u00a0€ = 2\u00a0100\u00a0€",
              ],
              ["Total sur cinq ans", "30\u00a0732\u00a0€", "166\u00a0840\u00a0€"],
            ]}
          />

          <p>
            Aux deux horizons plus courts, en comptant la sortie une seule fois
            quelle que soit la durée&nbsp;: 14&nbsp;858&nbsp;€ contre
            42&nbsp;640&nbsp;€ à un an, 22&nbsp;795&nbsp;€ contre
            104&nbsp;740&nbsp;€ à trois ans. L’écart ne se referme jamais.
          </p>

          <h3>Le point de bascule, et les trois variables qui le déplacent</h3>
          <p>
            Posons l’équation avec N&nbsp;utilisateurs. La colonne Power Apps
            vaut 21&nbsp;390&nbsp;€ de coûts fixes plus
            1&nbsp;038&nbsp;€&nbsp;×&nbsp;N de licences sur cinq ans. Elle
            rattrape les 166&nbsp;840&nbsp;€ de la colonne dédiée à{" "}
            <strong>141&nbsp;utilisateurs</strong>. Avec neuf, la réponse est
            nette&nbsp;: sur le seul terrain du prix, garder Power Apps gagne
            de très loin.
          </p>
          <p>
            Ce seuil n’est pourtant pas piloté par le nombre d’utilisateurs. Il
            est piloté par la façon dont l’application dédiée est maintenue.
            Divisez le forfait de maintenance par deux, à 1&nbsp;250&nbsp;€ HT
            par mois, et la bascule tombe à <strong>68&nbsp;utilisateurs</strong>.
            Renoncez au forfait, confiez la maintenance à un développeur
            interne à raison d’un jour par mois, et elle tombe à{" "}
            <strong>11&nbsp;utilisateurs</strong>&nbsp;— hébergement à chiffrer
            en plus. La troisième variable est binaire&nbsp;: sans connecteur
            premium, la colonne licence vaut 0&nbsp;€ et aucun nombre
            d’utilisateurs ne fait basculer quoi que ce soit.
          </p>

          <InfoBox
            variant="emerald"
            title="Ce que ce décompte dit, et ce qu’il ne dit pas"
          >
            <p>
              Il dit qu’on ne quitte pas Power Apps pour économiser sur la
              licence. Il ne dit rien des raisons qui font réellement partir
              une équipe&nbsp;: un parcours externe que Power Pages ne couvre
              pas, un travail hors ligne incompatible, une règle métier que
              Power&nbsp;Fx n’exprime pas, une contrainte d’hébergement. Ces
              raisons-là se démontrent sur un cas réel, pas sur un tableur.
            </p>
          </InfoBox>

          <p>
            L’atelier ci-dessous s’ouvre sur ce même dossier, déjà résolu. Les
            deux colonnes centrales restent volontairement vides&nbsp;: à vous
            de les remplir. Le bouton{" "}
            <em>Repartir d’une feuille vierge</em> efface tout si vous
            préférez démarrer de zéro. Rien ne quitte votre navigateur.
          </p>

          <PowerAppsDecisionWorkbench
            initialDecisionInputs={createIncarnatedCaseDecisionInputs()}
            initialTcoOptions={createIncarnatedCaseTcoOptions()}
          />

          <p>
            Une heure gagnée n’est pas une économie de trésorerie tant
            qu’aucune dépense n’est évitée&nbsp;: gardez séparés l’argent
            sorti, la capacité réaffectée et le confort. Si le besoin lui-même
            n’est pas encore établi, le{" "}
            <Link href="/guides/signes-besoin-logiciel-metier">
              diagnostic en 6 réponses
            </Link>{" "}
            évite d’acheter une solution avant d’avoir nommé le problème, et le
            guide{" "}
            <Link href="/guides/automatiser-processus-metier">
              quel processus automatiser en premier
            </Link>{" "}
            aide à choisir sur quel flux commencer.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incidents"
          number="06"
          label="Ce qui rate"
          readingTime="3 min"
          title="Ce qui rate, et ce que ça coûte"
        >
          <p>
            Les trois incidents ci-dessous sont construits sur le dossier de
            Sabine à partir de mécanismes documentés par Microsoft&nbsp;— ce ne
            sont pas des dossiers clients. Les montants suivent les hypothèses
            posées en section&nbsp;05.
          </p>

          <h3>Une commande passée deux fois&nbsp;: 4&nbsp;180&nbsp;€ et 2&nbsp;jours perdus</h3>
          <p>
            L’écran «&nbsp;demandes déjà commandées&nbsp;» filtre la liste avec
            une formule non déléguée. Sur 3&nbsp;200&nbsp;lignes, il n’en
            examine que 500&nbsp;: la demande de profilés aluminium saisie en
            mars n’apparaît plus. Un chef d’atelier la ressaisit, le
            fournisseur livre deux fois. La commande porte sur
            4&nbsp;180&nbsp;€ HT, le retour coûte des frais de reprise, et la
            régularisation mobilise deux jours de la responsable administrative
            et du contrôleur de gestion, soit 700&nbsp;€ de temps interne. Rien
            n’a planté&nbsp;: l’application a simplement répondu faux.
          </p>

          <h3>Un flux mis en quarantaine&nbsp;: 23&nbsp;demandes bloquées 4&nbsp;jours</h3>
          <p>
            L’administrateur durcit la politique de prévention de la perte de
            données pour séparer les connecteurs métier des connecteurs grand
            public. La règle prend effet le vendredi&nbsp;; le flux qui envoie
            les demandes en validation se retrouve suspendu. Personne ne
            regarde le centre d’administration avant le mardi. Bilan&nbsp;:
            quatre jours ouvrés de validations à l’arrêt,
            23&nbsp;demandes en attente, six heures de rattrapage manuel, deux
            livraisons décalées d’une semaine. La parade tient en un mot&nbsp;:
            simuler la règle avant de l’enregistrer.
          </p>

          <h3>Le créateur est parti&nbsp;: 6&nbsp;jours-homme pour reprendre la main</h3>
          <p>
            L’application vit dans l’environnement par défaut, et les
            connexions sont attachées au compte personnel de Sabine. Elle
            change de poste. L’application continue de tourner, mais plus
            personne ne peut publier une correction. Retrouver le propriétaire
            de chaque connexion, recréer les références, exporter la solution
            et la redéployer dans un environnement dédié occupe six jours de
            l’administrateur Microsoft&nbsp;365, soit 2&nbsp;100&nbsp;€, et
            gèle trois semaines d’évolutions. Le coût du blocage dépasse
            largement celui de la reprise.
          </p>

          <GuidePremiumMemo
            eyebrow="Les cinq conclusions possibles"
            title="Aucune décision ne se prend sans sa preuve, et aucune n’est décidée d’avance"
          >
            <ul>
              {outcomes.map((outcome) => (
                <li key={outcome.status}>
                  <strong>
                    {outcome.status} — {outcome.title}.
                  </strong>{" "}
                  {outcome.trigger}
                </li>
              ))}
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="remediation"
          number="07"
          label="Avant la refonte"
          readingTime="2 min"
          title={"Faut-il réparer avant de reconstruire\u00a0?"}
        >
          <p>
            Trois des quatre symptômes qui déclenchent un projet de refonte se
            corrigent sans changer de plateforme. Le tableau ci-dessous chiffre
            la correction et l’inaction, parce qu’un dossier de décision se
            tranche sur des montants, pas sur une gêne.
          </p>

          <GuideTable
            caption="Quatre corrections, leur coût et le coût de ne pas les faire"
            headers={[
              "Symptôme",
              "Correction à tenter",
              "Ce que la correction coûte",
              "Ce que coûte l’inaction",
            ]}
            rows={[
              [
                "Résultats incomplets",
                "Réécrire les formules avec des fonctions déléguables, indexer la colonne filtrée",
                "1 à 3\u00a0j de développeur, soit 350 à 1\u00a0050\u00a0€",
                "Une décision fausse par écran non corrigé\u00a0: 4\u00a0180\u00a0€ sur le cas raconté plus haut",
              ],
              [
                "Droits incohérents",
                "Revoir groupes, rôles cumulatifs et autorisations sur la source",
                "1\u00a0j, plus une demi-journée de tests avec comptes réels",
                "Une lecture de salaires ou de marges par un compte qui ne devrait pas la voir",
              ],
              [
                "Déploiement fragile",
                "Sortir de l’environnement par défaut, passer en solutions avec variables et références de connexion",
                "3 à 5\u00a0j, soit 1\u00a0050 à 1\u00a0750\u00a0€",
                "Chaque correction devient un risque de production, et le retour arrière n’existe pas",
              ],
              [
                "Dépendance au créateur",
                "Nommer un suppléant, transférer les connexions vers des comptes appropriés, inventorier",
                "2\u00a0j de reprise documentée",
                "6\u00a0j en urgence après un départ, plus trois semaines sans évolution possible",
              ],
            ]}
          />

          <p>
            Additionnez la colonne des corrections&nbsp;: entre sept et onze
            jours, soit 2&nbsp;450 à 3&nbsp;850&nbsp;€ de temps interne. C’est
            le tiers du seul cadrage d’une reconstruction, et cela se décide en
            une réunion. Si le résultat reste insatisfaisant après ces
            corrections, le dossier de reconstruction se défend enfin sur des
            faits. Le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette d’une application métier
            </Link>{" "}
            donne la forme des cas à rejouer avant et après, et les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité d’une application métier
            </Link>{" "}
            listent ce qu’il faut prouver avant d’élargir l’audience.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="audit"
          number="08"
          label="Sortie"
          readingTime="3 min"
          title={"Si vous partez, comment garder la porte ouverte\u00a0?"}
        >
          <p>
            Le mot «&nbsp;migration&nbsp;» masque quatre travaux distincts&nbsp;:
            comprendre l’existant, construire la cible, déplacer les données et
            faire changer l’organisation. Aucun export de solution n’en réalise
            un seul. Cinq étapes, dans cet ordre.
          </p>

          <ol>
            <li>
              <strong>Consigner l’existant.</strong> Version de l’application,
              solutions, flux, connecteurs, environnements, propriétaires,
              sources, comptes, licences et politiques de données.
            </li>
            <li>
              <strong>Écrire la recette avant les écrans.</strong> Trois cas
              normaux, les exceptions, les erreurs, les droits, les documents
              produits et les temps de réponse attendus. Une capture d’écran ne
              tient pas lieu de référence métier.
            </li>
            <li>
              <strong>Rendre le transfert reproductible.</strong> Doublons,
              clés, valeurs manquantes, pièces jointes et historiques reçoivent
              un propriétaire, puis le transfert passe par un script versionné,
              un journal des rejets et un rapprochement des comptes. Une copie
              manuelle unique ne suffit pas.
            </li>
            <li>
              <strong>Jouer le retour arrière avant la bascule.</strong>{" "}
              Déclencheur, décideur, dernière donnée fiable, durée maximale et
              procédure de réactivation de l’ancien outil. Un document non
              testé reste une hypothèse.
            </li>
            <li>
              <strong>Éteindre après stabilité mesurée.</strong> Retirer les
              accès, archiver, révoquer les secrets, arrêter les flux et les
              licences, fixer la durée de conservation.
            </li>
          </ol>

          <p>
            L’étape 4 a un prix, et il est temps de le donner. Six semaines de
            double exploitation à vingt minutes de ressaisie par jour ouvré
            coûtent dix heures de la responsable administrative, soit environ
            440&nbsp;€&nbsp;— et pendant ces six semaines, les licences Premium
            courent toujours, à 155,70&nbsp;€ par mois pour neuf personnes. Une
            extinction prématurée coûte beaucoup plus&nbsp;: sans la liste
            SharePoint d’origine, le retour arrière n’existe plus.
          </p>

          <h3>Et si vous quittez l’application sur mesure&nbsp;?</h3>
          <p>
            La question se pose dans les deux sens, et c’est la première
            objection d’un DSI. Quitter Power Apps suppose de reconstruire
            l’interface et la logique&nbsp;: les fichiers de solution extraits
            servent à l’audit et au contrôle de version dans Power Platform,
            ils ne produisent pas de code web portable. Sur le cas construit,
            cette sortie vaut les 9&nbsp;490&nbsp;€ de la colonne dédiée.
          </p>
          <p>
            Quitter une application sur mesure coûte moins cher, et autre
            chose. Le code et la base restent lisibles par n’importe quelle
            équipe de développement&nbsp;: nous chiffrons six jours de
            transfert, soit 2&nbsp;100&nbsp;€, pour remettre dépôt, accès,
            documentation d’exploitation et procédure de déploiement. Restent
            deux charges permanentes que Power Apps porte à votre place&nbsp;:
            l’hébergement, facturé tous les mois, et les montées de version des
            bibliothèques, qui ne se reportent pas indéfiniment. Le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges SaaS
            </Link>{" "}
            détaille les clauses de réversibilité à écrire avant de signer, et
            le guide{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              quoi inclure dans un MVP
            </Link>{" "}
            aide à borner une première version au lieu de reconstruire tous les
            écrans d’un coup.
          </p>

          <p>
            Si votre équipe ne peut pas réunir ces éléments, ne commandez pas
            de réécriture. Commencez par l’inventaire et un prototype du cas le
            plus risqué. Vous pouvez ensuite{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire votre projet
            </TrackedGuideCtaLink>{" "}
            à Hagnéré Code, en indiquant que conserver Power Apps reste une
            issue acceptable.
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

          <p className="text-sm">
            <strong>Transparence.</strong> Hagnéré Code développe des
            applications métier sur mesure et perçoit des honoraires si vous
            retenez cette option&nbsp;— l’une des deux que ce guide arbitre.
            Rien ici n’exige de passer par nous&nbsp;: la règle du connecteur,
            les trois seuils, le test de la limite de lignes à 1 et le décompte
            à cinq ans se refont avec vos propres nombres. Les prix Microsoft
            et notre grille ont été relevés le 28&nbsp;août 2026 et sont à
            revérifier tous les douze mois. Aucun coût, aucun délai et aucun
            résultat ne sont garantis par cette page&nbsp;: seul un devis signé
            engage.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
