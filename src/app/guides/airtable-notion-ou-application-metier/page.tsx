import Image from "next/image";
import Link from "next/link";
import { Boxes, Database, FileText, ShieldCheck, Wrench } from "lucide-react";
import { GuideTable, InfoBox } from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { TrackedGuideCtaLink } from "@/components/guides/tracked-guide-cta-link";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { AirtableNotionDecisionWorkbench } from "./airtable-notion-decision-workbench";
import {
  AIRTABLE_NOTION_IMAGES,
  airtableNotionGuide,
  structuredData,
} from "./guide-data";

export { metadata } from "./guide-data";

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Réponse",
  },
  {
    id: "trois-systemes",
    number: "02",
    label: "Comparer trois systèmes",
    shortLabel: "Systèmes",
  },
  {
    id: "journee-test",
    number: "03",
    label: "Rejouer une journée réelle",
    shortLabel: "Test",
  },
  {
    id: "droits-donnees",
    number: "04",
    label: "Droits et données",
    shortLabel: "Données",
  },
  {
    id: "automatisations-api",
    number: "05",
    label: "Automatisations et API",
    shortLabel: "API",
  },
  {
    id: "securite-sortie",
    number: "06",
    label: "Sécurité et sortie",
    shortLabel: "Sortie",
  },
  {
    id: "cas",
    number: "07",
    label: "Cinq cas contradictoires",
    shortLabel: "Cas",
  },
  {
    id: "hybride-sortie",
    number: "08",
    label: "Hybride et migration",
    shortLabel: "Migration",
  },
  { id: "lundi", number: "09", label: "Commencer lundi", shortLabel: "Action" },
];

const outcomes = [
  {
    status: "STOP",
    title: "Produire la preuve manquante",
    trigger:
      "Une donnée susceptible de changer la décision reste inconnue : arrêt tolérable, droits, volume, quota, export, restauration ou propriétaire.",
    next: "Rejouer le cas concerné dans l’espace, le plan et le contrat réels. Une inconnue ne vaut ni zéro ni échec.",
  },
  {
    status: "CONSERVER",
    title: "Garder Airtable ou Notion",
    trigger:
      "Les cas difficiles ont été testés avec succès, les droits sont compris, l’exploitation est tenue et vous avez vérifié qu’une sortie était possible.",
    next: "Archivez les preuves et refaites le test après un changement d’équipe, de plan, de volume, d’intégration ou d’importance du processus.",
  },
  {
    status: "RENFORCER",
    title: "Corriger sans remplacer",
    trigger:
      "Le produit couvre le besoin, mais l’organisation, les rôles, les alertes, la documentation ou la restauration sont insuffisants.",
    next: "Fermer le défaut mesuré, nommer une relève et rejouer le test avant d’étudier une migration.",
  },
  {
    status: "HYBRIDE",
    title: "Extraire une seule contrainte",
    trigger:
      "Une limite structurelle est reproduite, mais elle peut être isolée derrière une interface et un propriétaire explicites.",
    next: "Conserver le socle utile, tester les échecs de synchronisation et éviter que deux systèmes fassent foi en même temps.",
  },
  {
    status: "SORTIR PROGRESSIVEMENT",
    title: "Préparer une application métier",
    trigger:
      "Plusieurs limites structurelles sont reproduites ou la contrainte centrale ne peut pas être isolée proprement.",
    next: "Migrer objet par objet avec tests d’acceptation, coexistence, critères de bascule et retour arrière réellement joué.",
  },
] as const;

const comparisonRows = [
  [
    "Nature dominante",
    "Enregistrements structurés, vues, formulaires, interfaces et automatisations autour de bases.",
    "Pages, connaissances, documents collaboratifs et bases liées à ces contenus.",
    "Parcours, règles et interfaces conçus pour un métier précis.",
  ],
  [
    "Bon signal",
    "L’équipe raisonne en objets, statuts, affectations et vues, avec des exceptions encore maîtrisables.",
    "L’équipe doit écrire, expliquer, relier et retrouver l’information avant de piloter quelques états simples.",
    "Le travail dépend de règles fortes, de concurrence, d’intégrations, d’un usage terrain ou d’une expérience très encadrée.",
  ],
  [
    "Risque fréquent",
    "Transformer chaque exception en champ, vue, script ou synchronisation jusqu’à rendre la base illisible.",
    "Transformer une base documentaire en système transactionnel sans intégrité ni responsabilité d’exploitation suffisantes.",
    "Reconstruire trop tôt, puis assumer développement, sécurité, supervision, support, migrations et continuité.",
  ],
  [
    "À vérifier avant de choisir",
    "Un dossier difficile, des droits représentatifs, une automatisation en erreur et un export relu.",
    "Une recherche réelle, des droits page par page, un usage hors connexion et une relation exportée puis comprise.",
    "Un prototype du cas le plus contraignant, son coût d’exploitation et une reprise testée.",
  ],
] as const;

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "choix",
    num: "01",
    label: "Choisir sans classement abstrait",
    items: [
      {
        question:
          "Airtable est-il meilleur que Notion pour gérer un processus ?",
        answer:
          "Non, aucun n’est meilleur dans l’absolu. Airtable part d’enregistrements structurés et de vues ; Notion part davantage des pages, de la connaissance et de la collaboration. Le meilleur choix est celui qui passe vos cas difficiles avec des droits, une exploitation et une sortie acceptables.",
      },
      {
        question: "Notion peut-il remplacer une application métier ?",
        answer:
          "Oui pour certains processus légers, surtout lorsque l’explication et la collaboration priment. Non dès qu’une règle d’intégrité, une écriture concurrente, une expérience terrain, une intégration ou une séparation de droits importante échoue lors d’un test représentatif.",
      },
      {
        question: "À partir de combien d’utilisateurs faut-il du sur-mesure ?",
        answer:
          "Il n’existe pas de seuil universel. Deux utilisateurs peuvent porter un processus critique et deux cents lecteurs peuvent rester compatibles avec un outil standard. Mesurez rôles, écritures, objets actifs, exceptions, charge de support et coût d’un arrêt.",
      },
      {
        question: "Faut-il migrer parce que le créateur de la base part ?",
        answer:
          "Non, pas automatiquement. Commencez par transférer les comptes, secrets, droits d’administration, automatisations et procédures à une autre personne. Si elle ne peut pas comprendre ou tester la logique sans l’aide du créateur, vous avez alors un risque précis à traiter.",
      },
    ],
  },
  {
    key: "limites",
    num: "02",
    label: "Droits, quotas et continuité",
    items: [
      {
        question: "Les permissions Airtable masquent-elles un champ sensible ?",
        answer:
          "Pas nécessairement. Sur les plans Team, Business et Enterprise Scale, la documentation Airtable précise que les permissions de champ ou de table restreignent certaines modifications, pas la visibilité des données. Testez donc la lecture, les vues partagées, les interfaces, les exports et les synchronisations avec chaque rôle réel.",
      },
      {
        question: "Notion permet-il des droits différents par ligne de base ?",
        answer:
          "Sur les plans Business et Enterprise, Notion documente des règles d’accès aux pages d’une base à partir de propriétés de type personne ou créateur. Ces règles coexistent avec les accès aux pages et espaces d’équipe, et l’accès le plus large peut l’emporter. Testez donc chaque profil, y compris invités et administrateurs.",
      },
      {
        question: "Airtable et Notion fonctionnent-ils hors connexion ?",
        answer:
          "Ils ne proposent pas le même fonctionnement. Airtable exige une connexion internet. Notion propose le hors-ligne dans ses applications de bureau et mobiles, pas dans le navigateur. Une base téléchargée n’emporte automatiquement que les 50 premières lignes de sa première vue ; les sous-pages doivent être téléchargées séparément. Rejouez une coupure, une modification concurrente et la resynchronisation sur l’appareil visé.",
      },
      {
        question:
          "Une API disponible suffit-elle à garantir une intégration fiable ?",
        answer:
          "Non. Selon la plateforme et votre plan, l’intégration doit gérer les quotas ou limites de débit, les codes d’erreur — dont 429 ou 529 —, les délais, les reprises, les doublons, l’identité technique et l’alerte humaine. Une API donne accès aux données ; elle ne garantit pas que le processus continuera après un incident.",
      },
    ],
  },
  {
    key: "sortie",
    num: "03",
    label: "Export, RGPD et migration",
    items: [
      {
        question: "Exporter en CSV suffit-il pour quitter Airtable ?",
        answer:
          "Non. Airtable exporte chaque table séparément et les pièces jointes à part ; commentaires, extensions, descriptions de champs et guide de base ne sont pas tous emportés par le CSV. Il faut relire relations, fichiers, règles, historiques, identités et automatisations dans la cible.",
      },
      {
        question:
          "Un export Notion permet-il de recréer immédiatement l’espace de travail ?",
        answer:
          "Non. Notion permet plusieurs formats, mais les relations de bases peuvent être exportées comme URL textuelles et ne se reconstituent pas automatiquement à la réimportation. Un export est une matière de reprise, pas une restauration complète prouvée.",
      },
      {
        question:
          "La résidence européenne rend-elle l’outil conforme au RGPD ?",
        answer:
          "Non. La localisation de certaines données au repos ne règle ni la finalité, ni la minimisation, ni les droits, la sécurité, les durées, les sous-traitants, les transferts, les incidents ou la réversibilité. Vérifiez aussi le périmètre exact de la résidence, le contrat de sous-traitance et les données qui restent hors région.",
      },
      {
        question: "Comment éviter une migration en une seule fois ?",
        answer:
          "Découpez la sortie par objets et responsabilités. Pour chacun, précisez quel système fait foi, comment il se synchronise, qui valide le résultat, combien de temps les deux outils coexistent et comment revenir en arrière. La première migration doit être répétable avant de devenir irréversible.",
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
          { label: "Airtable, Notion ou application métier" },
        ]}
        badges={[
          { label: "Recherche produits · 5 août 2026", variant: "dark" },
          { label: "12 contrôles organisationnels", variant: "neutral" },
          { label: "Atelier local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(airtableNotionGuide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Airtable, Notion ou"
        heroTitleEm="application métier :"
        heroTitleSuffix="comment choisir ?"
        heroDescription="Ne migrez pas parce qu’une base devient agaçante et ne restez pas parce qu’elle fonctionne encore. Rejouez une journée difficile, vérifiez droits, données, automatisations, continuité et sortie, puis choisissez entre conserver, renforcer, hybrider ou sortir progressivement. Une preuve critique manque ? La décision reste en suspens."
        stats={[
          { label: "Options comparées", value: "3" },
          { label: "Contrôles", value: "12" },
          { label: "Issues possibles", value: "5" },
          { label: "Atelier · envoi", value: "Aucun" },
          { label: "Lecture", value: `${airtableNotionGuide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Diagnostic sans migration imposée",
          titleStart: "Faire examiner",
          titleEm: "votre processus",
          description:
            "Apportez un dossier difficile, les erreurs observées et votre inventaire de sortie. Le premier échange peut conclure qu’il faut garder Airtable ou Notion.",
          benefits: [
            "Limite du produit et défaut d’organisation distingués",
            "Droits, intégrations et reprise rendus visibles",
            "Les preuves doivent aussi pouvoir écarter le sur-mesure",
          ],
          primaryCtaLabel: "Décrire mon processus",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Sommaire de la décision Airtable, Notion ou application métier"
        mobileCtaLabel="Décrire mon processus"
        sidebarContextCta={{
          eyebrow: "Outils internes sur mesure",
          title: "Votre base tient-elle encore le travail réel ?",
          description:
            "Décrivez une tâche, un incident et une sortie attendue, sans donnée personnelle ni secret. Nous cherchons d’abord ce qui invaliderait chaque option.",
          benefits: [
            "Aucun remplacement décidé d’avance",
            "Cas difficile testé avant architecture",
            "Coexistence et retour arrière écrits",
          ],
          ctaLabel: "Voir le service outils internes",
          ctaHref: "/services/outils-internes-sur-mesure",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
          badgeLabel: "Le maintien peut être la conclusion",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Choisir entre",
          titleEm: "Airtable, Notion",
          titleEnd: "et une application métier.",
          subtitle:
            "Usage, permissions, hors-ligne, API, export, résidence des données, RGPD et migration progressive.",
          ctaTitle: "Une question qui reste ouverte sur votre base ?",
          ctaDescription:
            "Décrivez l’usage réel, les droits attendus et ce que la sortie doit restituer, sans donnée personnelle ni identifiant d’accès.",
          ctaLabel: "Décrire ma situation Airtable ou Notion",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Airtable · plans",
            href: "https://support.airtable.com/v1/docs/airtable-plans",
            description:
              "Limites de lignes, stockage, appels mensuels et historique par plan, consultées le 5 août 2026. Cette vue d’ensemble indique un an d’historique Business alors que la page détaillée des copies instantanées en indique deux : vérifier l’espace de travail et le contrat réels.",
          },
          {
            source: "Airtable · permissions de champs et tables",
            href: "https://support.airtable.com/using-field-and-table-editing-permissions",
            description:
              "Fonction disponible sur Team, Business et Enterprise Scale. Les restrictions portent sur la modification, la création ou la suppression ; elles ne masquent pas à elles seules les données et ne verrouillent pas la configuration d’un champ.",
          },
          {
            source: "Airtable · automatisations",
            href: "https://support.airtable.com/getting-started-with-airtable-automations",
            description:
              "Limites mensuelles et historique par plan, page mise à jour le 16 juin 2026. Un déclenchement compte comme exécution même si ses actions échouent.",
          },
          {
            source: "Airtable · limites API",
            href: "https://support.airtable.com/managing-api-call-limits-in-airtable",
            description:
              "Limites de 5 requêtes par seconde et par base et de 50 requêtes par seconde pour le trafic utilisant les jetons d’accès personnels d’un utilisateur ou compte de service. Quotas mensuels Free et Team, réponses 429 et attente documentée de 30 secondes, consultés le 5 août 2026.",
          },
          {
            source: "Airtable · résidence des données",
            href: "https://support.airtable.com/docs/data-residency-at-airtable",
            description:
              "Option et périmètre de résidence sur Enterprise Scale. Certaines métadonnées d’authentification, de support ou d’espace de travail restent hors région annoncée.",
          },
          {
            source: "Airtable · exigences, export et hors-ligne",
            href: "https://support.airtable.com/docs/what-are-the-technical-requirements-for-using-airtable",
            description:
              "Export table par table, pièces jointes séparées et éléments non inclus. Airtable indique ne pas prendre en charge un fonctionnement hors connexion.",
          },
          {
            source: "Airtable · copies instantanées",
            href: "https://support.airtable.com/docs/taking-and-restoring-base-snapshots",
            description:
              "La restauration crée une nouvelle base et donc un nouvel identifiant d’application ; la base restaurée n’emporte pas son historique de révision. Page mise à jour le 24 juillet 2026.",
          },
          {
            source: "Airtable · DPA",
            href: "https://www.airtable.com/company/dpa",
            description:
              "Version publique mise à jour le 5 décembre 2025. Le texte précise qu’il ne devient opposable qu’après exécution valable par les parties ; la version effectivement signée ou acceptée reste donc à conserver.",
          },
          {
            source: "Airtable · sous-traitants ultérieurs",
            href: "https://www.airtable.com/company/subprocessors",
            description:
              "Liste publique et inscription aux notifications de changement. Le périmètre, le préavis et les voies d’objection applicables dépendent du DPA et du contrat réellement conclus.",
          },
          {
            source: "Notion · partage et permissions",
            href: "https://www.notion.com/help/sharing-and-permissions",
            description:
              "Droits de pages, espaces d’équipe, invités et publication web. Les règles d’accès au niveau des pages d’une base sont réservées aux plans Business et Enterprise ; l’accès le plus large reste déterminant.",
          },
          {
            source: "Notion · automatisations de base",
            href: "https://www.notion.com/help/database-automations",
            description:
              "Disponibilité, déclencheurs, actions et limites. Une automatisation de base ne peut pas en déclencher une autre, et les pages restreintes peuvent être exclues.",
          },
          {
            source: "Notion API · limites",
            href: "https://developers.notion.com/reference/request-limits",
            description:
              "Moyenne de trois requêtes par seconde et par connexion, plus une limite par espace de travail partagée entre ses connexions et ajustée au plan, sans valeur publique chiffrée. Conduite à tenir après 429 ou 529 et limites de charge utile.",
          },
          {
            source: "Notion API · codes d’erreur",
            href: "https://developers.notion.com/reference/status-codes",
            description:
              "Erreurs structurées, dont autorisation, conflit, débit et indisponibilité. Une intégration fiable doit les journaliser et les reprendre explicitement.",
          },
          {
            source: "Notion · résidence des données",
            href: "https://www.notion.com/help/data-residency",
            description:
              "Option Enterprise, régions et catégories de données couvertes. Données de compte, d’usage, de support ou certains sous-traitants peuvent rester hors du périmètre de résidence.",
          },
          {
            source: "Notion · export",
            href: "https://www.notion.com/help/export-your-content",
            description:
              "Formats d’export HTML, PDF ou Markdown et CSV, avec leurs conditions d’accès et leurs périmètres respectifs.",
          },
          {
            source: "Notion · relations et agrégations",
            href: "https://www.notion.com/fr/help/relations-and-rollups",
            description:
              "La FAQ officielle précise que les propriétés de relation exportées en CSV deviennent des URL en texte brut et que ce CSV ne rétablit pas les relations à la réimportation.",
          },
          {
            source: "Notion · historique",
            href: "https://www.notion.com/help/duplicate-delete-and-restore-content",
            description:
              "Fenêtres d’historique par plan et limites de restauration. Restaurer une base ne restaure pas automatiquement le contenu de chaque page qu’elle contient.",
          },
          {
            source: "Notion · mode hors connexion",
            href: "https://www.notion.com/help/use-pages-offline",
            description:
              "Fonctionnement dans les applications de bureau et mobiles, pas dans le navigateur. Les sous-pages ne sont pas téléchargées automatiquement ; une base emporte d’abord les 50 premières lignes de sa première vue, et les conflits non textuels restent à contrôler.",
          },
          {
            source: "Notion · DPA",
            href: "https://www.notion.so/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99",
            description:
              "Addendum public de traitement des données. Vérifier la version incorporée au contrat, les rôles, transferts, mesures, assistance, audit et conditions de retour ou suppression effectivement applicables.",
          },
          {
            source: "Notion · sous-traitants ultérieurs",
            href: "https://www.notion.so/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734?pvs=24",
            description:
              "Liste publique et mécanisme de notification. Elle doit être rapprochée du DPA accepté, des services activés et des données réellement confiées.",
          },
          {
            source: "CNIL · sécurité du cloud",
            href: "https://www.cnil.fr/fr/securite-cloud-informatique-en-nuage",
            description:
              "Cartographier le service, analyser les risques, encadrer les accès, sauvegardes, localisation, continuité et reprise. Le client conserve ses propres responsabilités.",
          },
          {
            source: "CNIL · sauvegardes",
            href: "https://www.cnil.fr/fr/securite-sauvegarder",
            description:
              "Sauvegardes fréquentes, isolées et restaurations testées. Une sauvegarde annoncée par un éditeur ne prouve pas que l’organisation peut reprendre son processus.",
          },
          {
            source: "CNIL · sous-traitance",
            href: "https://www.cnil.fr/fr/sous-traitant",
            description:
              "Responsabilités, contrat, sécurité, sous-traitants ultérieurs, assistance, incidents, restitution ou destruction et localisation effective à vérifier.",
          },
          {
            source: "EUR-Lex · RGPD, article 28",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/art_28/oj?locale=fr",
            description:
              "Garanties suffisantes, instructions documentées, sous-traitants ultérieurs, contrat écrit, retour ou suppression des données et mise à disposition des informations d’audit.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title:
            "Une méthode de décision, pas une certification de votre outil",
          description:
            "Ce guide ne valide ni capacité, ni sécurité, ni licence, ni conformité RGPD. Les fonctions, plans et limites évoluent. Vérifiez l’espace de travail, le contrat, la région, les rôles et les résultats avec des comptes et des données représentatifs. En cas d’incident, sécurisez d’abord les accès, les données et le mode dégradé avant toute migration.",
        }}
        relatedGuides={[
          {
            label: "Reconnaître les signes d’un besoin de logiciel métier",
            href: "/guides/signes-besoin-logiciel-metier",
          },
          {
            label: "Calculer le ROI d’une application métier",
            href: "/guides/calculer-roi-application-metier",
          },
          {
            label: "Choisir entre Power Apps et une application sur mesure",
            href: "/guides/power-apps-ou-application-sur-mesure",
          },
        ]}
        relatedGuidesLabel="3 guides complémentaires"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="4 min"
          title="Gardez l’outil qui passe vos cas difficiles — pas celui qui gagne un comparatif"
        >
          <p>
            <strong>
              Commencez par conserver Airtable ou Notion tant que le travail
              réel, les droits, les données, l’exploitation et la sortie restent
              prouvés.
            </strong>{" "}
            Si le produit convient mais dépend d’une personne, d’un compte ou
            d’une automatisation non surveillée, renforcez l’organisation. Une
            contrainte isolable peut partir dans un module hybride. Préparez une
            application métier seulement lorsque les tests confirment plusieurs
            limites propres à la plateforme, ou lorsque la contrainte centrale
            ne peut pas être isolée proprement.
          </p>
          <p>
            Reconstruire dès que la base devient désordonnée ne résout pas le
            problème : le désordre suit la migration. À l’autre extrême, «
            l’écran s’ouvre encore » ne prouve pas que le processus est
            maîtrisé. Un outil peut sembler fonctionner tout en dépendant du
            compte d’un ancien salarié, en masquant des échecs d’automatisation
            ou en rendant sa sortie impossible à relire.
          </p>
          <p>
            La décision n’est donc pas Airtable contre Notion contre code. Elle
            porte sur la <strong>charge organisationnelle</strong> : tout ce que
            l’équipe doit comprendre, contrôler, soutenir et reprendre pour que
            le service reste utile. Le sur-mesure peut supprimer certaines
            contorsions du produit standard. En contrepartie, votre organisation
            ou son prestataire doit prendre en charge le développement, la
            sécurité, la supervision, le support et les évolutions.
          </p>

          <GuideTable
            caption="Les cinq issues possibles après un test représentatif"
            headers={["Issue", "Quand elle est défendable", "Étape suivante"]}
            rows={outcomes.map((outcome) => [
              `${outcome.status} — ${outcome.title}`,
              outcome.trigger,
              outcome.next,
            ])}
          />

          <GuidePremiumMemo
            eyebrow="Règle d’arrêt"
            title="Une inconnue capable de changer l’architecture suspend la conclusion"
          >
            <ul>
              <li>Un volume non relevé n’est pas égal à zéro.</li>
              <li>
                Un export jamais réimporté ne prouve pas que vous pourrez
                repartir ailleurs : c’est le test de réversibilité.
              </li>
              <li>
                Une permission vue par un administrateur n’est pas un test de
                rôle.
              </li>
              <li>
                Une automatisation verte aujourd’hui n’est pas une reprise
                prouvée.
              </li>
            </ul>
          </GuidePremiumMemo>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src={AIRTABLE_NOTION_IMAGES[0]}
              alt="Chemin de décision fondé sur les preuves, de l’usage observé à la conservation, au renforcement, à l’hybride ou à la sortie"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
              L’ordre compte : observer, tester, documenter, puis choisir. Le
              nom du produit ne remplace aucune de ces étapes.
            </figcaption>
          </figure>

          <InfoBox
            variant="amber"
            title="Incident actif : ne lancez pas une refonte"
          >
            <p>
              Si un accès est compromis, si des données semblent perdues, si une
              synchronisation écrit au mauvais endroit ou si l’outil est
              indisponible, traitez d’abord l’incident. Nommez le responsable,
              stoppez l’écriture dangereuse, préservez les preuves, restaurez un
              service minimum et informez les personnes concernées. La migration
              vient après la continuité.
            </p>
          </InfoBox>

          <p>
            Une fois l’urgence écartée, comparez ce que chaque système organise
            naturellement. C’est le moyen le plus simple d’éviter de forcer un
            outil à jouer un rôle qui n’est pas le sien.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="trois-systemes"
          number="02"
          label="Comparer trois systèmes"
          readingTime="5 min"
          title="Airtable, Notion et le sur-mesure ne partent pas du même problème"
        >
          <p>
            Airtable organise naturellement des enregistrements, des champs, des
            vues, des formulaires, des interfaces et des automatisations. Notion
            organise d’abord des pages, des blocs, des connaissances et leur
            collaboration, puis y ajoute des bases. Une application métier part
            du parcours et des règles que vous décidez de construire. Cette
            différence de centre de gravité est plus utile qu’une liste de
            fonctionnalités cochées.
          </p>
          <p>
            Prenez une demande de recrutement. Airtable peut bien convenir si
            chaque candidature suit des statuts, responsables et vues claires.
            Notion peut être préférable si le besoin central est de réunir
            briefs, comptes rendus, modèles d’entretien et décisions
            argumentées. Une application dédiée devient envisageable si les
            droits fins, les intégrations de ressources humaines, les
            contraintes de conservation, l’expérience des candidats et les
            règles de décision ne tiennent plus dans une combinaison
            maîtrisable.
          </p>

          <GuideTable
            caption="Comparer le centre de gravité et la preuve attendue"
            headers={["Angle", "Airtable", "Notion", "Application métier"]}
            rows={comparisonRows.map((row) => [...row])}
          />

          <p>
            Forcer l’outil à devenir un autre système brouille les
            responsabilités. Une base Airtable couverte de champs techniques, de
            scripts et de synchronisations peut devenir un logiciel sans les
            disciplines d’un logiciel. Un espace Notion rempli de statuts et de
            formules peut devenir un système transactionnel sans contrôle
            d’intégrité suffisant. À l’inverse, une application dédiée peut
            répliquer des fonctions standard, à un coût plus élevé et avec
            davantage de maintenance.
          </p>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src={AIRTABLE_NOTION_IMAGES[1]}
              alt="Comparaison des centres de gravité d’Airtable, de Notion et d’une application métier"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
              Choisissez un centre de gravité, puis vérifiez les frontières que
              votre processus lui impose réellement.
            </figcaption>
          </figure>

          <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Objets et états",
                text: "Airtable peut convenir ici. Reste à tester l’intégrité, le volume, les droits et les automatisations.",
              },
              {
                icon: FileText,
                title: "Connaissance et contexte",
                text: "Avec Notion, vérifiez surtout les permissions, la recherche, les relations, le hors-ligne et l’export.",
              },
              {
                icon: Boxes,
                title: "Parcours contraint",
                text: "Pour le sur-mesure, chiffrez la construction, l’exploitation, le support et la réversibilité avant de conclure.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <Icon className="size-6 text-indigo-600" aria-hidden="true" />
                <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <h3>Comparez un coût total, pas une licence à un devis</h3>
          <p>
            Un tarif mensuel public et un devis de construction ne couvrent pas
            le même périmètre. Choisissez un horizon identique et calculez, pour
            chaque option, les abonnements et services, la mise en place,
            l’administration, l’exploitation, les incidents, les évolutions et
            la sortie. Chaque montant doit avoir une quantité, une unité, une
            période et une source. Une ligne inconnue reste « à vérifier » ;
            elle ne vaut jamais zéro.
          </p>
          <GuideTable
            caption="Périmètre minimal d’un coût total comparable"
            headers={["Famille", "Airtable ou Notion", "Application métier"]}
            rows={[
              [
                "Accès et capacité",
                "Sièges payants, plan, stockage, automatisations, interface de programmation (API), modules et connecteurs",
                "Utilisateurs, hébergement, stockage, services tiers et environnements",
              ],
              [
                "Mise en place",
                "Modèle, nettoyage, import, paramétrage, droits, formation et documentation",
                "Définition du besoin, conception, développement, reprise de données, tests d’acceptation et formation",
              ],
              [
                "Exploitation",
                "Administration, alertes, support, erreurs manuelles, audits et changements de plan",
                "Supervision, sécurité, sauvegardes, maintenance, support et évolutions techniques",
              ],
              [
                "Incident et sortie",
                "Temps d’arrêt, correction, exports, reconstruction des relations et migration",
                "Temps d’arrêt, correction, portabilité, transfert de compétences et extinction",
              ],
            ]}
          />
          <p>
            Ajoutez séparément le coût d’un arrêt et le temps métier perdu : ils
            dépendent de votre processus, pas du produit. Comparez ensuite des
            scénarios de volume et de charge documentés. Cette grille peut
            défendre le maintien d’un logiciel fourni comme un service en ligne
            (SaaS), mais aussi invalider un sur-mesure dont l’exploitation n’a
            pas été financée.
          </p>
          <p>
            Pour renseigner ces coûts sans les deviner, partez maintenant d’une
            journée réelle et gardez un cas difficile dans le test.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="journee-test"
          number="03"
          label="Test terrain"
          readingTime="7 min"
          title="Rejouez une journée difficile avant de remplir une matrice de fonctionnalités"
        >
          <p>
            Choisissez une période représentative : clôture mensuelle, arrivée
            d’un collaborateur, campagne commerciale, traitement d’un litige ou
            pic de commandes. Listez les personnes présentes, les objets
            manipulés, les écritures humaines et automatiques, les systèmes
            appelés et le coût d’un arrêt. Gardez au moins un dossier contenant
            une exception ; le scénario nominal favorise artificiellement toutes
            les solutions.
          </p>
          <p>
            Rejouez ensuite les douze dimensions ci-dessous. « Contrôlé » exige
            une preuve datée : capture, export relu, journal d’erreur, compte de
            test, procédure jouée ou résultat signé par le métier.
          </p>
          <p>
            « Échec » signifie seulement que le résultat attendu n’a pas été
            obtenu. Cherchez ensuite la cause : organisation et règles de
            fonctionnement à corriger — la gouvernance — ou limite de plateforme
            reproduite ? Tant que vous ne pouvez pas répondre, la décision reste
            suspendue. Un défaut de droits ou d’export peut appartenir à l’une
            comme à l’autre. Le diagnostic ne calcule pas une moyenne : un échec
            de droit d’accès ne peut pas être compensé par onze réponses
            confortables.
          </p>

          <GuideTable
            caption="Les douze dimensions de charge organisationnelle"
            headers={["Dimension", "Question à prouver", "Trace minimale"]}
            rows={[
              [
                "Criticité et arrêt",
                "Combien coûte et dure un arrêt tolérable ?",
                "Chronologie d’un incident ou exercice de mode dégradé",
              ],
              [
                "Rôles et droits",
                "Chaque rôle voit-il et modifie-t-il seulement le nécessaire ?",
                "Comptes représentatifs et résultats attendus/obtenus",
              ],
              [
                "Données et intégrité",
                "Relations, unicités, statuts et règles tiennent-ils ?",
                "Dossier difficile rejoué",
              ],
              [
                "Écritures concurrentes",
                "Deux acteurs peuvent-ils écrire sans perte ni doublon ?",
                "Test simultané et journal",
              ],
              [
                "Volume et archive",
                "Charge actuelle et croissance passent-elles le plan réel ?",
                "Mesure datée, pièces jointes incluses",
              ],
              [
                "Automatisations",
                "Chaque flux a-t-il propriétaire, alerte et reprise ?",
                "Erreur provoquée puis corrigée",
              ],
              [
                "Intégrations et API",
                "Quotas, délais et échecs sont-ils gérés ?",
                "Réponse de limitation de débit (429) ou indisponibilité simulée, puis reprise",
              ],
              [
                "Mobile et mode dégradé",
                "La tâche se termine-t-elle sur le terrain ?",
                "Essai sur appareil et réseau visés",
              ],
              [
                "Audit et conformité",
                "Les traces et contrats requis existent-ils ?",
                "Échantillon d’accès, journal et clause",
              ],
              [
                "Propriété et relève",
                "Une seconde personne peut-elle administrer ?",
                "Reprise sans le créateur",
              ],
              [
                "Export et sortie",
                "Tout ce qui compte est-il récupéré et relu ?",
                "Inventaire et import de contrôle",
              ],
              [
                "Support et restauration",
                "L’escalade et le retour en service sont-ils joués ?",
                "Exercice horodaté et responsable",
              ],
            ]}
          />

          <AirtableNotionDecisionWorkbench />

          <InfoBox variant="blue" title="Ce que l’atelier ne décide pas">
            <p>
              L’atelier ne mesure ni votre performance technique, ni votre coût
              total, ni votre conformité. Son rôle est plus simple : transformer
              les inconnues en tests. Un échec n’oriente vers une option qu’une
              fois sa cause identifiée : organisation à renforcer, limite de
              plateforme à isoler ou sortie progressive à préparer. Faites
              ensuite relire le dossier par le métier, la personne qui
              administre l’outil et celle qui devra le reprendre, en leur
              demandant de chercher ce qui pourrait le contredire.
            </p>
          </InfoBox>
          <p>
            Examinez d’abord séparément les droits et les données. Vous verrez
            alors si l’écart vient de l’outil ou de son organisation avant de
            choisir une architecture.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="droits-donnees"
          number="04"
          label="Droits et données"
          readingTime="6 min"
          title="Les droits affichés et les règles visibles ne prouvent pas l’intégrité du processus"
        >
          <p>
            Commencez par un tableau simple : rôle, objet, action, condition et
            preuve obtenue. Pour chaque profil — lecteur, opérateur, manager,
            administrateur, invité, intégration — testez lecture, création,
            modification, suppression, export et partage. Utilisez des comptes
            représentatifs. Un propriétaire de l’espace de travail (workspace)
            voit souvent davantage que l’utilisateur dont il prétend valider le
            parcours.
          </p>
          <p>
            Dans Airtable, les permissions de champ et de table peuvent limiter
            qui modifie, crée ou supprime sur les plans Team, Business et
            Enterprise Scale. La documentation précise toutefois qu’elles ne
            changent pas à elles seules la visibilité des données et ne
            verrouillent pas la configuration du champ. Une donnée à ne pas
            montrer exige donc un test de lecture couvrant base, interface, vue
            partagée, synchronisation, API, copie et export — pas seulement un
            champ que l’on ne peut pas éditer.
          </p>
          <p>
            Dans Notion, le droit réel dépend de plusieurs niveaux : la page,
            l’espace d’équipe, l’espace de travail, le statut d’invité et les
            règles appliquées aux pages d’une base. L’accès le plus large peut
            rendre une restriction locale inopérante. Les règles d’accès au
            niveau des pages d’une base sont disponibles uniquement sur les
            plans Business et Enterprise.
          </p>
          <p>
            Elles peuvent, par exemple, s’appuyer sur une propriété de personne
            ou de créateur. Testez-les lorsqu’un utilisateur change d’équipe,
            lorsqu’une page est déplacée, lorsqu’un modèle crée un contenu ou
            lorsqu’une connexion agit avec ses propres autorisations.
          </p>

          <GuidePremiumMemo title="Séparez quatre couches souvent confondues">
            <ul>
              <li>Le schéma : quels objets, relations et statuts existent ?</li>
              <li>
                La règle : quelles transitions et exceptions sont autorisées ?
              </li>
              <li>
                Le droit : qui peut voir, écrire, partager, exporter ou
                administrer ?
              </li>
              <li>
                La preuve : quel journal permet de comprendre et corriger une
                action ?
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Testez aussi les écritures simultanées. Deux personnes peuvent
            modifier la même fiche ; une automatisation peut écrire entre leur
            lecture et leur validation ; une synchronisation peut arriver en
            retard. Notez la règle attendue : rejet, fusion, dernière écriture,
            version ou intervention humaine. Si personne ne peut expliquer ce
            qui se passe, ne cochez pas « contrôlé » même si vous n’avez encore
            observé aucune perte.
          </p>
          <p>
            Distinguez aussi volume total et charge active. Comptez les objets
            utilisés, les archives, les pièces jointes, les écritures
            mensuelles, les lectures API et les pics. Airtable publie des
            limites de lignes et de stockage par plan ; ces nombres ne prédisent
            pas à eux seuls l’ergonomie ni la fiabilité. Notion et une
            application dédiée ont eux aussi des limites pratiques. Seul un
            essai représentatif mesure votre parcours.
          </p>
          <p>
            Testez aussi le réseau réellement disponible. Airtable indique
            qu’une connexion internet est nécessaire et ne prend pas en charge
            un fonctionnement hors ligne.
          </p>
          <p>
            Notion permet de télécharger des pages dans ses applications de
            bureau et mobiles, mais pas dans le navigateur. Les sous-pages ne
            suivent pas automatiquement ; pour une base, seules les 50 premières
            lignes de la première vue sont téléchargées par défaut. Certaines
            actions restent indisponibles et des modifications non textuelles
            concurrentes peuvent demander une résolution. Le mot « hors-ligne »
            ne remplace donc pas un essai sur le terrain.
          </p>

          <InfoBox
            variant="amber"
            title="Donnée personnelle : le nom du produit ne tranche rien"
          >
            <p>
              Documentez finalité, catégories, base légale, durée,
              destinataires, droits, sous-traitants, transferts, sécurité et
              réponse à incident. Ni une région européenne, ni un plan
              Enterprise, ni une application dédiée ne certifie à lui seul la
              conformité du traitement.
            </p>
          </InfoBox>
          <p>
            Après les accès et les données, provoquez un échec d’automatisation.
            Sans journal ni alerte, il peut durer avant que quelqu’un ne s’en
            aperçoive.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="automatisations-api"
          number="05"
          label="Automatisations et API"
          readingTime="6 min"
          title="Testez l’échec d’une automatisation avant de la déclarer fiable"
        >
          <p>
            Pour chaque automatisation, relevez ce qui la déclenche et ce
            qu’elle exécute. Notez aussi le compte et la clé d’accès utilisés,
            les limites de volume et de délai, l’endroit où les erreurs sont
            enregistrées, l’alerte prévue, la procédure de reprise et son
            responsable. Ajoutez les flux natifs, scripts, notifications
            automatiques entre services (webhooks), connecteurs, outils
            d’intégration et tâches manuelles qui prennent le relais.
          </p>
          <p>
            Disposer d’une API ne suffit pas. Le point critique est de détecter
            un échec et de savoir le rejouer sans créer de doublon.
          </p>
          <p>
            Au 5 août 2026, Airtable documente cinq requêtes par seconde et par
            base, ainsi que cinquante requêtes par seconde pour tout le trafic
            utilisant les jetons d’accès personnels d’un même utilisateur ou
            compte de service. Les plans Free et Team ont aussi des quotas
            mensuels, distincts de ces limites de débit ; Business et Enterprise
            Scale restent soumis au débit même sans plafond mensuel annoncé.
            Après dépassement du débit, Airtable indique qu’une réponse 429
            impose d’attendre trente secondes avant qu’une nouvelle requête
            puisse réussir.
          </p>
          <p>
            Pour les automatisations natives, un déclenchement compte comme
            exécution même lorsque les actions échouent. Dimensionnez sur les
            déclenchements et les reprises, pas seulement sur les succès.
          </p>
          <p>
            L’API Notion annonce une moyenne de trois requêtes par seconde et
            par connexion. Une seconde limite s’applique à l’espace de travail :
            elle est partagée entre toutes ses connexions et ajustée à son plan,
            sans plafond chiffré publié sur la page consultée.
          </p>
          <p>
            Après une réponse 429 ou 529, les connexions doivent respecter le
            délai indiqué par le service dans l’instruction Retry-After et
            borner leurs tentatives. Elles doivent aussi allonger
            progressivement cette attente et lui ajouter un léger décalage pour
            éviter que toutes les reprises aient lieu simultanément.
          </p>
          <p>
            Les erreurs 5xx ne doivent pas provoquer le rejeu aveugle d’une
            écriture sans protection contre les doublons. Une charge utile est
            en outre limitée à 1 000 éléments de bloc et 500 Ko au total.
          </p>
          <p>
            Les automatisations de bases Notion ont leurs propres règles : elles
            sont liées aux plans payants, ne se déclenchent pas mutuellement et
            peuvent ignorer des pages auxquelles l’automatisation n’a pas accès.
          </p>

          <GuideTable
            caption="Protocole minimal d’échec et de reprise"
            headers={[
              "Test",
              "Ce que vous provoquez",
              "Ce que vous devez observer",
            ]}
            rows={[
              [
                "Débit",
                "Une rafale dépassant la limite documentée",
                "Temporisation, mise en file d’attente, délai Retry-After et absence de perte",
              ],
              [
                "Autorisation",
                "Retrait du droit ou expiration du secret",
                "Alerte utile, arrêt contrôlé et procédure de renouvellement",
              ],
              [
                "Indisponibilité",
                "Réponse 5xx ou service tiers coupé",
                "Nouvelle tentative bornée, statut visible et reprise manuelle",
              ],
              [
                "Doublon",
                "Même événement livré deux fois",
                "Rejouer la même demande ne produit pas un second effet ; sinon, le doublon est détecté explicitement",
              ],
              [
                "Ordre",
                "Événements reçus dans un ordre différent",
                "Règle de version, rejet ou réconciliation",
              ],
              [
                "Rejeu",
                "Correction puis relance de l’échec",
                "Traçabilité, responsable et résultat sans double écriture",
              ],
            ]}
          />

          <p>
            Le propriétaire d’une automatisation doit pouvoir répondre à quatre
            questions sans enquête improvisée : qu’est-ce qui n’a pas été
            traité, depuis quand, avec quel impact et comment le rejouer ? Si la
            réponse exige d’ouvrir plusieurs comptes personnels ou de demander
            au créateur absent, le défaut est d’abord organisationnel. Corrigez
            comptes techniques, alertes, journal et relève avant d’attribuer le
            problème à la plateforme.
          </p>

          <GuidePremiumMemo
            eyebrow="Frontière hybride"
            title="Dans un système hybride, chaque côté doit avoir un rôle explicite"
          >
            <ul>
              <li>Nommez le système qui fait foi pour chaque objet.</li>
              <li>
                Versionnez le contrat de données et les erreurs attendues.
              </li>
              <li>
                Évitez les écritures bidirectionnelles sans règle de conflit.
              </li>
              <li>
                Prévoyez un mode manuel et un rapprochement après reprise.
              </li>
            </ul>
          </GuidePremiumMemo>
          <p>
            Quand ce mode de reprise est maîtrisé, vérifiez encore que vous
            savez récupérer les données, restaurer le service et faire appliquer
            les bons contrats.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="securite-sortie"
          number="06"
          label="Sécurité et sortie"
          readingTime="7 min"
          title="Exporter ne suffit pas : testez la restauration et la reprise"
        >
          <p>
            Une sortie réussie ne se résume pas à récupérer des lignes. Elle
            exige les objets, identifiants, relations, pièces jointes, règles,
            commentaires utiles, historiques requis, automatisations,
            intégrations, secrets, rôles, procédures et critères d’acceptation.
            Construisez cet inventaire pendant que l’outil fonctionne : en cas
            de crise ou de fin de contrat, vous n’aurez ni le temps ni les mêmes
            accès.
          </p>
          <p>
            Dans Airtable, l’export en fichier tabulaire de données brutes (CSV)
            se fait table par table. Les pièces jointes se récupèrent séparément
            et plusieurs éléments — commentaires, extensions, descriptions de
            champs ou guide de base — ne sont pas compris dans un simple CSV.
            Les copies instantanées (snapshots) couvrent davantage la base, mais
            leur restauration crée une nouvelle base avec un nouvel identifiant
            d’application, et la base restaurée n’emporte pas son historique de
            révision.
          </p>
          <p>
            Au 5 août 2026, la vue d’ensemble des plans et la page détaillée des
            copies instantanées divergent sur la durée Business : l’une indique
            un an, l’autre deux. Inscrivez « à vérifier sur notre espace de
            travail et notre contrat » au lieu de choisir la valeur favorable.
          </p>
          <p>
            Notion permet d’exporter en HTML, PDF, Markdown et CSV selon le
            contenu et les droits. Une relation de base peut devenir une URL
            textuelle dans l’export et ne pas se recréer automatiquement à la
            réimportation. La restauration a aussi ses limites : restaurer une
            base ne restaure pas automatiquement le contenu de toutes les pages
            qu’elle contient. Testez donc l’import vers un environnement
            distinct et faites valider le résultat par un utilisateur métier.
          </p>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src={AIRTABLE_NOTION_IMAGES[2]}
              alt="Inventaire de sortie reliant objets, données, droits, automatisations, tests d’acceptation, coexistence et retour arrière"
              width={1000}
              height={1000}
              className="mx-auto h-auto w-full max-w-2xl"
            />
            <figcaption className="px-5 py-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
              La sortie dépend de plusieurs responsables. Une étape encore
              inconnue doit suspendre la bascule si elle peut changer la
              décision.
            </figcaption>
          </figure>

          <h3>Résidence des données : vérifier le périmètre, pas le drapeau</h3>
          <p>
            Airtable et Notion documentent des options de résidence pour
            certains plans Enterprise. Leur périmètre n’est pas « toutes les
            données et tous les traitements en Europe ». Authentification,
            compte, usage, support, métadonnées ou sous-traitants peuvent suivre
            d’autres circuits selon le service. Demandez la région, les
            catégories couvertes, les exclusions, les transferts, la chaîne de
            sous-traitance et la procédure de sortie applicables à votre
            contrat.
          </p>
          <p>
            Pour des données personnelles, l’article 28 du règlement général sur
            la protection des données (RGPD) exige notamment un contrat écrit,
            des garanties suffisantes, des instructions documentées, un
            encadrement des sous-traitants ultérieurs, une aide au responsable
            de traitement et le retour ou la suppression des données en fin de
            prestation. La CNIL rappelle aussi que le client garde un rôle actif
            : analyse de risque, contrôle des accès, sauvegardes, localisation,
            continuité et réversibilité ne sont pas délégués par le seul achat
            d’un SaaS.
          </p>
          <h3>
            Un addendum contractuel de traitement des données (Data Processing
            Addendum, ou DPA) public n’est pas encore votre preuve contractuelle
          </h3>
          <p>
            Ouvrez la version réellement applicable du contrat et de son
            addendum de traitement. Le DPA public d’Airtable, mis à jour le 5
            décembre 2025, précise qu’il ne devient opposable qu’après exécution
            valable par les parties.
          </p>
          <p>
            Notion publie aussi un addendum et une liste de sous-traitants ;
            vérifiez la version incorporée à votre accord, les services activés
            et les données confiées. Archivez la preuve d’acceptation, les
            rôles, instructions, transferts, sous-traitants ultérieurs, préavis,
            mesures de sécurité, assistance, audit, retour ou suppression et
            sort des sauvegardes. Une page publique prouve des conditions
            proposées, pas celles que votre organisation a effectivement
            acceptées.
          </p>
          <p>
            Séparez aussi sauvegarde fournisseur et capacité de reprise métier.
            Une copie interne chez l’éditeur protège son service ; elle ne
            prouve pas que vous saurez restaurer le bon état, dans le bon délai,
            avec les bonnes identités et les intégrations compatibles. Exportez,
            isolez une copie, contrôlez son intégrité et rejouez une
            restauration à une fréquence proportionnée au coût de perte.
          </p>
          <p>
            Ces vérifications peuvent conduire au maintien comme à la sortie.
            Les cinq situations suivantes montrent pourquoi des symptômes
            proches ne suffisent pas à annoncer la même décision.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas"
          number="07"
          label="Cas contradictoires"
          readingTime="8 min"
          title="Les mêmes symptômes peuvent mener à des décisions opposées"
        >
          <p>
            Les cinq scénarios ci-dessous sont{" "}
            <strong>entièrement fictifs</strong> et ne décrivent aucun client de
            Hagnéré Code. Leurs volumes et faits servent uniquement à montrer la
            méthode ; aucun gain, délai ou résultat commercial n’en est déduit.
          </p>

          <GuidePremiumCase
            initial="A"
            eyebrow="Exemple fictif 1 · CONSERVER AIRTABLE"
            title="Une équipe achats confond désordre visuel et limite de plateforme"
          >
            <p>
              Huit personnes suivent fournisseurs, demandes et validations. La
              base paraît confuse, mais le test révèle surtout des vues
              personnelles devenues publiques et des champs sans définition. Les
              droits, la concurrence, le volume, les automatisations et un
              export relu passent. L’équipe nettoie le schéma, nomme un
              propriétaire et documente trois vues de référence. Comme aucune
              limite structurelle n’a été reproduite, construire une application
              ajouterait du coût sans corriger le problème observé.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="N"
            eyebrow="Exemple fictif 2 · CONSERVER NOTION"
            title="Un cabinet veut surtout transmettre du contexte, pas exécuter des transactions"
          >
            <p>
              Douze personnes maintiennent procédures, décisions et dossiers de
              réunion. Une petite base indique le responsable et la date de
              revue. Les recherches représentatives, les droits, l’usage hors
              connexion et l’export relu conviennent. Le besoin central reste la
              connaissance, et les écritures concurrentes ne portent pas de
              règle financière critique. Notion reste ici plus simple à
              expliquer et à reprendre qu’une application dédiée.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="R"
            eyebrow="Exemple fictif 3 · RENFORCER"
            title="Une base commerciale fonctionne, mais appartient encore à son créateur"
          >
            <p>
              Le test ne reproduit aucune limite de données ou d’API. Il échoue
              pourtant sur la relève : automatisations, secret d’intégration et
              alertes dépendent d’un compte personnel. L’entreprise transfère
              les accès, crée une identité technique adaptée, documente la
              reprise et fait rejouer un incident par une seconde personne. Le
              produit reste à surveiller, mais la migration n’était pas la
              première action.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="H"
            eyebrow="Exemple fictif 4 · HYBRIDE"
            title="Le socle documentaire tient, la prise de commande terrain ne tient pas"
          >
            <p>
              Notion reste satisfaisant pour les procédures, fiches produit et
              comptes rendus. En revanche, le test terrain échoue sur trois
              besoins : une saisie contrôlée, des règles de stock fiables et un
              fonctionnement dégradé. L’équipe construit un module de commande
              dédié et garde Notion comme base de connaissance. Un seul système
              porte le catalogue de référence ; les erreurs de synchronisation,
              la reprise manuelle et le retour arrière sont testés avant la
              bascule.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="S"
            eyebrow="Exemple fictif 5 · SORTIR PROGRESSIVEMENT"
            title="Plusieurs frontières d’une base opérations ont déjà cédé"
          >
            <p>
              Les tests reproduisent des conflits d’écriture, des règles métier
              non garanties, des droits insuffisamment séparés et des échecs
              d’intégration difficiles à reprendre. Aucune frontière unique ne
              permet d’isoler le défaut. L’équipe ne remplace pourtant pas tout
              en un week-end : elle migre d’abord un objet autonome, maintient
              l’ancien système en lecture, compare les résultats, joue un retour
              arrière et n’éteint la base qu’après la validation du métier.
            </p>
          </GuidePremiumCase>

          <InfoBox
            variant="emerald"
            title="Le contre-exemple à garder dans chaque réunion"
          >
            <p>
              Si votre méthode ne peut jamais conclure « conserver Airtable » ou
              « conserver Notion », elle ne teste pas une décision : elle
              prépare une vente. Exigez une preuve qui pourrait aussi invalider
              le sur-mesure, par exemple un prototype dont le gain ne justifie
              pas le coût de construction et d’exploitation.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="hybride-sortie"
          number="08"
          label="Hybride et migration"
          readingTime="7 min"
          title="Découpez la sortie par objets, responsabilités et preuves de retour"
        >
          <p>
            Vous pouvez défendre une architecture hybride si sa frontière se
            nomme sans ambiguïté. « Notion garde la connaissance et
            l’application gère les commandes » est testable. « Les deux systèmes
            contiennent un peu tout et se synchronisent dans les deux sens » ne
            l’est pas. Pour chaque objet, écrivez qui crée, qui modifie, qui
            fait foi — autrement dit, quel système porte la donnée de référence
            —, qui corrige et qui répond lors d’un échec.
          </p>
          <p>
            Construisez ensuite la grille de sortie en douze lignes : objets,
            propriétaires, données, pièces jointes, droits, automatisations,
            intégrations, règles, historique, tests d’acceptation par les
            utilisateurs — la « recette » —, coexistence et retour arrière.
            Chaque ligne doit contenir un responsable, un format ou un
            mécanisme, une preuve et une date. Vous pouvez continuer à explorer
            avec une case vide. Si cette inconnue peut changer la décision, ne
            rendez pas encore la bascule irréversible.
          </p>

          <GuideTable
            caption="Exemple de grille de coexistence et de bascule"
            headers={[
              "Élément",
              "Pendant la coexistence",
              "Critère avant extinction",
            ]}
            rows={[
              [
                "Objets et données",
                "Système faisant foi nommé, identifiants conservés, synchronisation surveillée",
                "Rapprochement signé sans écart inexpliqué",
              ],
              [
                "Droits",
                "Matrice appliquée dans les deux systèmes, comptes de test actifs",
                "Parcours sensibles validés par rôle",
              ],
              [
                "Automatisations",
                "Un seul système écrit chaque effet métier",
                "Erreurs, doublons et rejeu exercés",
              ],
              [
                "Utilisateurs",
                "Cohorte limitée, support et canal de retour nommés",
                "Tests des tâches et exceptions acceptés",
              ],
              [
                "Retour arrière",
                "Ancien outil consultable ou restaurable, modifications intervenues pendant la coexistence conservées",
                "Retour arrière réussi dans le délai d’arrêt accepté et consigné dans la grille",
              ],
              [
                "Extinction",
                "Date conditionnelle, export final, accès et contrats recensés",
                "Propriétaire métier signe la fermeture",
              ],
            ]}
          />

          <h3>Répétez la migration avant de lui faire confiance</h3>
          <p>
            Un script exécuté une fois sur une copie n’est pas une migration
            maîtrisée. Écrivez la migration pour que les mêmes données d’entrée
            produisent le même résultat à chaque essai. Gardez aussi la trace
            des rejets et la correspondance des identifiants, puis comparez la
            source et la cible. Répétez sur une copie instantanée plus récente.
            Mesurez durée, indisponibilité et charge humaine. Une bascule n’est
            prête que si l’équipe sait aussi l’arrêter et revenir au point de
            départ sans improviser. La méthode complète, avec ses fenêtres de
            bascule et son plan de retour arrière, est détaillée dans le guide
            sur la{" "}
            <Link href="/guides/migrer-logiciel-metier-sans-interruption">
              migration sans interruption de service
            </Link>
            .
          </p>
          <p>
            Les tests d’acceptation par les utilisateurs — souvent appelés «
            recette » — doivent couvrir des tâches, pas seulement des écrans.
            Demandez à des profils représentatifs de créer, corriger,
            rechercher, partager, exporter, travailler en réseau dégradé et
            reprendre après erreur. Incluez l’exception rare qui a motivé le
            projet. Une nouvelle interface agréable ne compense pas une règle
            métier perdue ou un historique devenu inutilisable. Pour construire
            ces scénarios et leurs critères d’acceptation, appuyez-vous sur le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette d’une application métier
            </Link>
            .
          </p>

          <GuidePremiumMemo
            eyebrow="Décision de bascule"
            title="Quatre validations précises valent mieux qu’un accord collectif flou"
          >
            <ul>
              <li>Le métier accepte tâches, exceptions et données.</li>
              <li>
                L’exploitation accepte alertes, support, restauration et coût.
              </li>
              <li>
                La sécurité et la protection des données acceptent accès et
                contrats.
              </li>
              <li>
                Le propriétaire accepte le risque résiduel et le retour arrière.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="lundi"
          number="09"
          label="Plan d’action"
          readingTime="4 min"
          title="Lundi, ne demandez pas un devis : organisez d’abord une journée de preuve"
        >
          <ol>
            <li>
              <strong>Choisissez un dossier difficile.</strong> Prenez une
              exception réelle, pas une démonstration propre créée pour la
              réunion.
            </li>
            <li>
              <strong>Réunissez trois points de vue.</strong> Le métier exécute,
              la personne qui administre explique, et une relève tente de
              reprendre sans aide.
            </li>
            <li>
              <strong>Mesurez la charge.</strong> Relevez utilisateurs actifs,
              objets actifs, écritures humaines et automatiques, pièces jointes,
              pics et coût d’arrêt.
            </li>
            <li>
              <strong>Rejouez les douze contrôles.</strong> Conservez les
              preuves, les échecs et les inconnues au même endroit.
            </li>
            <li>
              <strong>Provoquez une erreur.</strong> Coupez un droit, dépassez
              une limite dans un environnement sûr ou simulez un service tiers
              indisponible ; observez alerte et reprise.
            </li>
            <li>
              <strong>Exportez puis relisez.</strong> Vérifiez relations,
              fichiers, règles, historiques et identités dans un espace
              distinct.
            </li>
            <li>
              <strong>Consignez une seule issue.</strong> STOP, conserver,
              renforcer, hybride ou sortir progressivement, avec la prochaine
              preuve et son responsable.
            </li>
          </ol>

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <ShieldCheck
                className="size-6 text-emerald-600"
                aria-hidden="true"
              />
              <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                Dossier minimum à conserver
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Contexte, comptes de test, résultats attendus et obtenus,
                captures ou journaux, export de contrôle, incidents,
                responsables, inconnues, décision et date de prochain examen.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <Wrench className="size-6 text-indigo-600" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold text-zinc-950 dark:text-white">
                Quand demander une étude technique
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Demandez une étude quand vous avez reproduit l’échec, identifié
                ce que l’outil actuel peut encore corriger et qu’il reste à
                comparer une solution hybride, un prototype dédié, leur coût
                total, la coexistence et le retour arrière.
              </p>
            </div>
          </div>

          <p>
            Selon ce que votre inventaire révèle, la suite du parcours n’est pas
            la même. Si le doute porte encore sur l’opportunité même d’un outil
            dédié, reprenez le{" "}
            <Link href="/guides/signes-besoin-logiciel-metier">
              diagnostic en trois situations
            </Link>{" "}
            avant toute comparaison. Si la contrainte vient de l’écosystème
            Microsoft de votre entreprise, la comparaison utile est celle entre{" "}
            <Link href="/guides/power-apps-ou-application-sur-mesure">
              Power Apps et une application sur mesure
            </Link>
            ; si elle vient d’une base Access héritée, lisez plutôt comment{" "}
            <Link href="/guides/remplacer-microsoft-access-application-web">
              remplacer Microsoft Access par une application web
            </Link>
            .
          </p>
          <p>
            Trois vérifications conditionnent la suite. Le{" "}
            <Link href="/guides/calculer-roi-application-metier">
              calcul du retour sur investissement
            </Link>{" "}
            dit si l’écart de coût total justifie une reconstruction. La{" "}
            <Link href="/guides/droits-acces-application-metier">
              gestion des droits d’accès
            </Link>{" "}
            met à l’épreuve ce que votre base partagée autorise réellement. Les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité d’une application métier
            </Link>{" "}
            précisent ce qu’un plan gratuit ou intermédiaire ne couvre pas.
          </p>
          <p>
            Si vous souhaitez un regard extérieur, transmettez le dossier sans
            donnée personnelle ni secret via la page{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              démarrer un projet
            </TrackedGuideCtaLink>
            . Le
            premier échange doit pouvoir conclure que l’outil actuel reste
            préférable. Demandez une proposition de développement seulement
            lorsque la limite, la valeur attendue, les responsabilités et la
            sortie sont suffisamment précises pour être contestées.
          </p>

          <GuidePremiumMemo
            eyebrow="Dernière question"
            title="Quelle preuve pourriez-vous obtenir cette semaine qui changerait réellement votre choix ?"
          >
            <p>
              Si aucune réponse n’émerge, le problème est encore formulé trop
              largement. Revenez à une tâche, une exception, un rôle, une erreur
              ou une restauration. Une décision solide commence par un fait qui
              peut lui donner tort.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
