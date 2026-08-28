import Image from "next/image";
import Link from "next/link";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { RepriseReadinessTool } from "./reprise-readiness-tool";

const guide = getGuide("reprendre-logiciel-metier-existant");
const breadcrumbName = "Reprendre un logiciel métier";

export const metadata = buildGuideMetadata(
  guide,
  "Le test de relève avant de changer d’équipe",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "La réponse courte",
    shortLabel: "Décider",
  },
  {
    id: "preserver",
    number: "02",
    label: "Garder l’état initial",
    shortLabel: "Préserver",
  },
  {
    id: "preuves",
    number: "03",
    label: "Prouver chaque capacité",
    shortLabel: "Prouver",
  },
  {
    id: "coffre",
    number: "04",
    label: "Tenir un dossier transmissible",
    shortLabel: "Inventorier",
  },
  {
    id: "outil",
    number: "05",
    label: "Faire le test",
    shortLabel: "Tester",
  },
  {
    id: "demonstration",
    number: "06",
    label: "Ordre des démonstrations",
    shortLabel: "Démontrer",
  },
  {
    id: "droits-donnees",
    number: "07",
    label: "Droits et données",
    shortLabel: "Sécuriser",
  },
  {
    id: "options",
    number: "08",
    label: "Quatre issues possibles",
    shortLabel: "Choisir",
  },
  {
    id: "decision",
    number: "09",
    label: "Consigner le verdict",
    shortLabel: "Transmettre",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "decider",
    num: "01",
    label: "Décider",
    items: [
      {
        question:
          "Un dépôt de code complet suffit-il pour reprendre un logiciel ?",
        answer:
          "Non. Le dépôt est une pièce du dossier, pas une preuve de maîtrise. La nouvelle équipe doit encore produire une version installable depuis un environnement propre, comprendre les dépendances, observer le système, déployer de façon contrôlée, restaurer les données et organiser la sortie.",
      },
      {
        question: "Faut-il arrêter immédiatement le logiciel pendant l’audit ?",
        answer:
          "Pas automatiquement. Préservez d’abord les preuves et limitez les changements non nécessaires. L’arrêt, le maintien ou le mode dégradé dépendent des risques métier, de sécurité et de données observés. Cette décision appartient aux responsables compétents du système réel.",
      },
      {
        question:
          "Peut-on signer une maintenance durable si une preuve manque ?",
        answer:
          "Non, tant qu’une preuve critique reste bloquée ou non renseignée. Une mission limitée d’investigation ou de stabilisation peut néanmoins être utile sur un périmètre autorisé, réversible et clairement borné. Elle ne doit ni masquer l’inconnue par un score moyen, ni autoriser une modification lorsque le droit reste incertain.",
      },
    ],
  },
  {
    key: "prouver",
    num: "02",
    label: "Prouver",
    items: [
      {
        question: "Comment prouver qu’une sauvegarde est exploitable ?",
        answer:
          "Restaurez une copie dans un environnement isolé, puis consignez la source, la date, le périmètre récupéré, les contrôles exécutés, les écarts et le responsable. La présence d’un fichier ou le succès d’une tâche planifiée ne démontre pas à lui seul que les données sont restaurables.",
      },
      {
        question: "Que doit montrer un essai de déploiement ?",
        answer:
          "Il doit rendre visibles la version installée, l’environnement, les contrôles avant et après, la personne qui autorise l’étape, les journaux utiles et le retour arrière. Commencez hors production et avec une modification à faible portée.",
      },
      {
        question: "Pourquoi ne pas calculer un score de reprise ?",
        answer:
          "Parce qu’une moyenne pourrait laisser une bonne documentation compenser une restauration impossible ou un droit de modification incertain. Les cinq capacités sont non compensables : un blocage critique reste un STOP.",
      },
    ],
  },
  {
    key: "contrat-donnees",
    num: "03",
    label: "Contrat et données",
    items: [
      {
        question:
          "Avoir payé le développement donne-t-il tous les droits sur le code ?",
        answer:
          "Pas automatiquement. Le paiement, la possession des fichiers, le droit d’utiliser et le droit de modifier sont des questions distinctes. L’identité et le statut des auteurs, les clauses et la chaîne de cession doivent être examinés par un juriste.",
      },
      {
        question:
          "Que faut-il prévoir lorsque le prestataire traite des données personnelles ?",
        answer:
          "Le contrat doit notamment encadrer les obligations applicables au sous-traitant, les garanties vérifiables, la sécurité et le sort des données à la fin de la prestation. Le responsable du traitement doit qualifier le cas réel, avec le délégué à la protection des données (DPO) lorsqu’il est désigné ou que son avis est requis.",
      },
      {
        question:
          "L’article L122-6-1 autorise-t-il toujours la nouvelle équipe à corriger le logiciel ?",
        answer:
          "Non. Il ne constitue pas un droit universel de reprise ou de modification. Son application dépend notamment du droit d’utiliser le logiciel, des actes nécessaires à son usage selon sa destination et du contrat. Une conclusion sur un dossier concret exige une analyse juridique.",
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
          { label: "Test de relève", variant: "neutral" },
          { label: "Procès-verbal de reprise", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Reprendre un logiciel métier existant"
        heroTitleEm="sans signer"
        heroTitleSuffix="à l’aveugle"
        heroDescription="Faites passer le test de relève avant toute reprise durable : la nouvelle équipe doit démontrer cinq capacités — observer, construire, déployer, restaurer et organiser la sortie. Une preuve bloquée impose un STOP ; une preuve non renseignée reporte la décision."
        stats={[
          { label: "Capacités critiques", value: "5" },
          { label: "Score moyen", value: "Aucun" },
          { label: "Réponses envoyées", value: "Aucune" },
          { label: "Décision", value: "Traçable" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Premier échange",
          titleStart: "Décider",
          titleEm: "par quoi commencer",
          description:
            "Décrivez l’application, le changement d’équipe et les preuves déjà disponibles. Les inconnues resteront visibles.",
          benefits: [
            "Les accès remis ne démontrent pas encore la capacité de reprise",
            "Les blocages apparaissent avant l’engagement durable",
            "Une première étape qui reste réversible",
          ],
          primaryCtaLabel: "Décrire la reprise",
          primaryCtaHref: "/demarrer-un-projet",
        }}
        toc={toc}
        tocLabel="Sommaire du guide"
        mobileCtaLabel="Décrire la reprise"
        sidebarContextCta={{
          eyebrow: "Logiciel existant",
          title: "Décider par quoi commencer",
          description:
            "Apportez la liste des environnements, les derniers incidents, les contrats disponibles et les propriétaires des accès.",
          benefits: [
            "Un état des faits avant d’envisager la maintenance",
            "Les démonstrations à organiser en premier",
            "Les doutes juridiques et données restent des STOP",
          ],
          ctaLabel: "Décrire mon contexte",
          ctaHref: "/demarrer-un-projet",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions avant",
          titleEm: "la reprise",
          titleEnd: "d’un logiciel existant.",
          subtitle:
            "Des réponses courtes sur les preuves techniques, le contrat, les données et les situations où il faut reporter.",
          ctaTitle: "Vous devez décider avant de changer d’équipe ?",
          ctaDescription:
            "Décrivez le logiciel, le changement attendu et les pièces disponibles, sans transmettre de secret.",
          ctaLabel: "Décrire la situation",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Légifrance · article L122-6 du CPI",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919",
            description:
              "Sous réserve des exceptions de l’article L122-6-1, le droit d’exploitation comprend notamment reproduction, adaptation et modification. Version en vigueur depuis le 11 mai 1994, vérifiée le 30 juillet 2026.",
          },
          {
            source: "Légifrance · article L122-6-1 du CPI",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278920/",
            description:
              "Version en vigueur depuis le 26 novembre 2021, vérifiée le 30 juillet 2026 : actes nécessaires à l’usage selon sa destination et réserve contractuelle relative à la correction. Ce texte ne crée pas un droit universel de reprise.",
          },
          {
            source: "Légifrance · article L113-9 du CPI",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818",
            description:
              "Régime des logiciels créés par des employés dans l’exercice de leurs fonctions ou d’après les instructions de leur employeur. Version en vigueur depuis le 1er janvier 2020, vérifiée le 30 juillet 2026.",
          },
          {
            source: "Légifrance · article L131-3 du CPI",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
            description:
              "Délimitation distincte des droits transmis et de leur étendue, destination, lieu et durée. Version en vigueur depuis le 3 juillet 1992, vérifiée le 30 juillet 2026.",
          },
          {
            source: "RGPD · EUR-Lex",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr",
            description:
              "Articles 28 et 32 : encadrement du sous-traitant et mesures de sécurité adaptées au risque.",
          },
          {
            source: "CNIL · gérer la sous-traitance",
            href: "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
            description:
              "Fiche du 14 mars 2024 : contrat, garanties vérifiables et sort des données au terme de la prestation.",
          },
          {
            source: "CNIL · sauvegarder",
            href: "https://www.cnil.fr/fr/securite-sauvegarder",
            description:
              "Recommandations de protection des sauvegardes et de vérification de leur restauration.",
          },
          {
            source: "ANSSI · fondamentaux de la sauvegarde",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
            description:
              "Version 1.1 du 27 novembre 2025 : stratégie de sauvegarde, protection et restauration.",
          },
          {
            source: "NIST SP 800-218 · SSDF v1.1",
            href: "https://csrc.nist.gov/pubs/sp/800/218/final",
            description:
              "Version finale publiée en février 2022 et toujours finale au 30 juillet 2026.",
          },
          {
            source: "NIST SP 800-218 Rev.1 · SSDF v1.2",
            href: "https://csrc.nist.gov/pubs/sp/800/218/r1/ipd",
            description:
              "Initial Public Draft publié le 17 décembre 2025 ; cette version n’est pas finale au 30 juillet 2026.",
          },
          {
            source: "OWASP · gestion des secrets",
            href: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
            description:
              "Repères pour inventorier, limiter, renouveler et révoquer les secrets sans les exposer dans la documentation.",
          },
        ]}
        disclaimer={{
          eyebrow: "Périmètre",
          title:
            "Une méthode de décision, pas une certification ni un avis juridique",
          description:
            "L’outil et les exemples de cette page n’évaluent pas votre logiciel à distance. Les droits, les contrats, les données personnelles, la sécurité et la continuité doivent être validés par les responsables compétents du dossier réel. Une inconnue reste inconnue ; elle n’est jamais remplacée par zéro ou par une supposition.",
        }}
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Décision"
          title="Un dépôt livré ne prouve pas que la reprise est possible"
        >
          <p className="lead">
            Situation fictive : lundi matin, le logiciel de commandes
            fonctionne, mais la personne qui le maintenait quitte le projet. La
            nouvelle équipe reçoit une archive du code et propose déjà une
            correction. Ne commencez pas par demander une date de livraison :
            demandez ce qu’elle peut démontrer sans dépendre de l’ancienne
            équipe.
          </p>

          <p>
            Avant un engagement durable, la nouvelle équipe doit pouvoir{" "}
            <strong>observer</strong> le système, <strong>construire</strong>{" "}
            une version installable, <strong>déployer</strong> de façon
            contrôlée, <strong>restaurer</strong> les données et{" "}
            <strong>organiser la sortie</strong>. Si une preuve est bloquée, les
            quatre autres ne la compensent pas.
          </p>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/guides/reprendre-logiciel-metier-existant/reprise-logiciel-16x9.webp"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), 760px"
              alt="Schéma du test de relève d’un logiciel métier : observer, construire, déployer, restaurer et organiser la sortie avant le procès-verbal de reprise"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 sm:px-5">
              Chaque capacité exige une preuve datée et reproductible. Une
              déclaration ou une capture isolée ne suffit pas à conclure.
            </figcaption>
          </figure>

          <GuidePremiumMemo
            eyebrow="Règle de décision"
            title="Le rôle d’une mission courte"
          >
            <p>
              Une mission courte peut servir à réunir les preuves. Elle doit
              alors être bornée, réversible et distincte d’un engagement de
              maintenance durable. Écrivez ce qui ferait arrêter ou limiter la
              mission avant le premier changement.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="preserver"
          number="02"
          label="Point de départ"
          title="L’état initial doit survivre à la première correction"
        >
          <p>
            Une correction urgente peut modifier les journaux, les versions ou
            la base qui auraient permis de comprendre l’état initial. Sans
            immobiliser automatiquement l’activité, conservez les éléments
            utiles et nommez la personne qui autorise les changements.
          </p>

          <GuideTable
            caption="Le premier relevé de reprise"
            headers={["À préserver", "Preuve minimale", "Question de contrôle"]}
            rows={[
              [
                "Code et versions installables",
                "Dépôts, branches, repères de version, fichiers de livraison et identifiants accessibles",
                "La version en production correspond-elle à une version identifiée ?",
              ],
              [
                "Environnements",
                "Schéma des serveurs, services et flux, versions, domaines, certificats et responsables",
                "Qui possède réellement chaque compte ?",
              ],
              [
                "Données",
                "Bases, fichiers, flux, sauvegardes et politiques de conservation",
                "Quelle source fait foi et que peut-on restaurer ?",
              ],
              [
                "Exploitation",
                "Journaux, alertes, incidents récents et procédures existantes",
                "Qui reçoit une alerte et qui décide ?",
              ],
              [
                "Contrats et droits",
                "Contrats, avenants, livrables, licences et liste des auteurs",
                "Quel droit est établi, pour quel usage et quelle durée ?",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="N’échangez pas les secrets dans le dossier"
          >
            <p>
              Inventoriez le propriétaire, l’usage, l’emplacement de gestion et
              la procédure de rotation. Transférez les secrets par un canal
              adapté, puis révoquez les accès devenus inutiles. Un tableau de
              reprise ne doit contenir ni mot de passe ni clé privée.
            </p>
          </InfoBox>

          <p>
            Marquez chaque ligne <strong>observé</strong>,{" "}
            <strong>déclaré</strong> ou <strong>inconnu</strong>. Cette
            distinction évite qu’une phrase de l’ancien prestataire devienne,
            par recopie, un fait prétendument vérifié.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="preuves"
          number="03"
          label="Preuves"
          title="Le test de relève vérifie cinq capacités séparément"
        >
          <p>
            Nous appelons <strong>test de relève</strong> cette méthode propre
            au guide : pour chaque capacité, elle demande ce qui a été produit
            ou observé, dans quel environnement, par qui et à quelle date. Une
            autre personne doit pouvoir relire ou rejouer la démonstration.
          </p>

          <GuideTable
            caption="Cinq capacités à démontrer avant une reprise durable"
            headers={["Capacité", "À démontrer", "Signal d’arrêt"]}
            rows={[
              [
                "1. Observer",
                "Retrouver versions, dépendances, métriques, journaux, alertes et responsables dans un environnement représentatif",
                "Compte personnel unique, production opaque ou journaux indisponibles",
              ],
              [
                "2. Construire",
                "Créer la version installable depuis une copie neuve du dépôt, avec la version d’exécution et les dépendances identifiées",
                "Fichier exécutable introuvable, dépôt de dépendances inaccessible ou étape manuelle détenue par une seule personne",
              ],
              [
                "3. Déployer",
                "Exécuter hors production la procédure, les contrôles après changement et le retour arrière",
                "Accès direct non tracé, procédure non rejouable ou absence de retour arrière adapté",
              ],
              [
                "4. Restaurer",
                "Restaurer une copie isolée et consigner le périmètre récupéré, les contrôles et les écarts",
                "Sauvegarde illisible, clé absente ou restauration jamais testée",
              ],
              [
                "5. Organiser la sortie",
                "Attribuer droits, comptes, secrets, données, livrables, révocations et restitution de fin de mission",
                "Droit de modification incertain, données captives ou accès non révocable",
              ],
            ]}
          />

          <InfoBox variant="amber" title="Chaque preuve a un périmètre">
            <p>
              Notez la version, l’environnement, le volume et les dépendances
              réellement testés. Si la charge double, si un service tiers tombe
              ou si l’architecture change, ce nouveau cas redevient inconnu
              jusqu’à ce qu’il soit testé.
            </p>
          </InfoBox>

          <GuidePremiumMemo title="Une capacité démontrée n’en valide pas une autre">
            <p>
              « Construire » ne prouve pas « restaurer ». « Déployer » ne prouve
              pas que le contrat autorise la modification. Conservez un verdict
              séparé pour chaque capacité et une date de validité adaptée à
              l’évolution du système.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="coffre"
          number="04"
          label="Inventaire"
          title="Un dossier utile doit pouvoir changer de mains"
        >
          <p>
            Il ne suffit pas d’empiler les fichiers. Pour chaque pièce, le
            dossier indique qui en répond, où se trouve la version de référence
            et comment vérifier qu’elle fonctionne encore.
          </p>

          <GuideTable
            caption="Contenu utile du dossier de reprise"
            headers={["Élément", "Pièce utile", "Contrôle de sortie"]}
            rows={[
              [
                "Dépôts et livrables logiciels",
                "Adresses, droits, historique, repères de version, dépôts de dépendances, licences et versions",
                "Un second administrateur peut-il retirer l’accès du prestataire ?",
              ],
              [
                "Construction",
                "Version d’exécution, liste exacte des dépendances, commande, chaîne automatique de construction et identifiant de la version installable",
                "Le test repart-il d’un environnement propre ?",
              ],
              [
                "Hébergement",
                "Compte contractuel, configuration, domaines, certificats et facturation",
                "L’entreprise contrôle-t-elle le compte principal d’administration sans compte privé ?",
              ],
              [
                "Données",
                "Schémas, volumes, flux, exports, sauvegardes et clés associées",
                "Restitution et destruction sont-elles attribuées ?",
              ],
              [
                "Exploitation",
                "Tableaux de bord, alertes, journaux, incidents et procédures",
                "Les alertes survivent-elles au départ d’une personne ?",
              ],
              [
                "Secrets",
                "Inventaire sans valeur secrète, coffre, rôles, rotation et révocation",
                "Chaque accès peut-il être renouvelé ou supprimé ?",
              ],
              [
                "Droits",
                "Auteurs, statuts, contrats, cessions, licences et usages prévus",
                "Un juriste peut-il suivre la chaîne sans supposer ?",
              ],
              [
                "Réversibilité",
                "Formats d’export, livrables, calendrier contractuel et procès-verbal",
                "Une autre équipe peut-elle reprendre sans dépendance cachée ?",
              ],
            ]}
          />

          <FormulaBox>
            {[
              "FICHE D’UNE PREUVE",
              "",
              "Capacité concernée :",
              "Version produite ou action observée :",
              "Environnement et version :",
              "Date et personne ayant exécuté :",
              "Personne ayant relu ou reproduit :",
              "Résultat attendu et résultat obtenu :",
              "Écarts et inconnues :",
              "Propriétaire de la prochaine action :",
              "Condition d’arrêt ou de réexamen :",
            ].join("\n")}
          </FormulaBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="05"
          label="Outil local"
          title="Le test de relève retient l’issue la plus prudente"
        >
          <p>
            Le test de relève est un choix éditorial de ce guide, pas une norme
            ni une certification. Répondez d’après les démonstrations réellement
            observées. « Partiel » signifie qu’un élément existe mais que la
            preuve reste incomplète. « Bloqué » signifie qu’un accès, un droit
            ou une dépendance empêche la démonstration.
          </p>

          <RepriseReadinessTool />

          <p>
            Même lorsque tout est déclaré démontré, le test répond seulement «
            candidat à une bascule encadrée ». La décision de production,
            l’audit et les validations juridique, sécurité et données restent
            séparés. Le test ne transmet pas vos réponses et ne demande aucune
            information confidentielle.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="demonstration"
          number="06"
          label="Séquence"
          title="La démonstration avance par étapes réversibles"
        >
          <p>
            Il n’existe pas de délai universel : la séquence dépend de la
            criticité, des données, de l’architecture et de l’état des preuves.
            L’ordre ci-dessous évite surtout de modifier le système avant
            d’avoir montré comment le restaurer.
          </p>

          <GuideTable
            caption="Une séquence conditionnelle de reprise"
            headers={["Étape", "Sortie attendue", "Ne pas franchir si…"]}
            rows={[
              [
                "1. Préserver et inventorier",
                "État initial, propriétaires, inconnues et changements gelés",
                "Les responsables ou le périmètre critique restent inconnus",
              ],
              [
                "2. Construire en environnement propre",
                "Version installable identifiée et journal reproductible",
                "Une dépendance ou une licence essentielle manque",
              ],
              [
                "3. Observer un environnement représentatif",
                "Schéma des serveurs, services et flux, journaux, alertes et contrôles compris",
                "L’accès exige de contourner les règles de sécurité",
              ],
              [
                "4. Restaurer une copie isolée",
                "Compte rendu de restauration et écarts connus",
                "La sauvegarde ou sa clé ne peut pas être testée",
              ],
              [
                "5. Déployer un changement à faible portée",
                "Contrôles réussis et retour arrière démontré",
                "L’autorisation, la surveillance ou le retour arrière manque",
              ],
              [
                "6. Simuler la sortie",
                "Exports, remise, rotations et révocations attribués",
                "Les données, droits ou comptes restent captifs",
              ],
              [
                "7. Tenir la revue de décision",
                "Procès-verbal de reprise, limites, propriétaires et conditions d’arrêt signés",
                "Une inconnue critique a été transformée en hypothèse",
              ],
            ]}
          />

          <InfoBox variant="emerald" title="Commencez hors production">
            <p>
              Une démonstration hors production ne supprime pas le risque, mais
              permet d’observer la procédure, les contrôles et les écarts avant
              d’autoriser un changement réel. La bascule de production exige sa
              propre décision.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="droits-donnees"
          number="07"
          label="Droits et données"
          title="Séparez possession, droit d’usage et droit de modification"
        >
          <p>
            Avoir payé une prestation ou reçu les fichiers ne répond pas à
            toutes les questions de propriété intellectuelle. L’article{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919"
              target="_blank"
              rel="noreferrer"
            >
              L122-6 du Code de la propriété intellectuelle
            </a>{" "}
            prévoit, sous réserve des exceptions de l’article L122-6-1, que le
            droit d’exploitation comprend notamment la reproduction,
            l’adaptation et la modification.
          </p>

          <p>
            L’
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278920/"
              target="_blank"
              rel="noreferrer"
            >
              article L122-6-1
            </a>{" "}
            ne crée pas un droit universel de reprise. Il traite, dans des
            conditions précises, de la personne ayant le droit d’utiliser le
            logiciel et des actes nécessaires à cet usage selon sa destination ;
            l’auteur peut se réserver par contrat le droit de corriger les
            erreurs et fixer certaines modalités de ces actes. L’article{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
              target="_blank"
              rel="noreferrer"
            >
              L113-9
            </a>{" "}
            vise les logiciels créés par des employés dans l’exercice de leurs
            fonctions ou d’après les instructions de l’employeur : il ne
            s’applique pas automatiquement à une agence ou à un freelance.
          </p>

          <p>
            L’article{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noreferrer"
            >
              L131-3
            </a>{" "}
            impose de délimiter distinctement les droits transmis et d’en
            préciser l’étendue, la destination, le lieu et la durée.
          </p>

          <InfoBox variant="amber" title="STOP juriste">
            <p>
              Ces articles ne permettent pas de conclure automatiquement sur
              votre contrat. Faites examiner l’identité et le statut des
              auteurs, les cessions successives, les licences des dépendances,
              l’usage prévu et les clauses de correction avant toute
              modification contestable.
            </p>
          </InfoBox>

          <h3>Le changement de prestataire ne fait pas disparaître le RGPD</h3>
          <p>
            Si le prestataire traite des données personnelles pour le compte de
            l’entreprise, l’article 28 du{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr"
              target="_blank"
              rel="noreferrer"
            >
              règlement général sur la protection des données
            </a>{" "}
            encadre la relation de sous-traitance. La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noreferrer"
            >
              fiche CNIL du 14 mars 2024
            </a>{" "}
            rappelle notamment le contrat, les garanties vérifiables et les
            conditions de restitution ou de destruction au terme de la
            prestation. L’article 28 prévoit, au choix du responsable du
            traitement, l’effacement ou le renvoi des données après la
            prestation, sous réserve d’une obligation légale de conservation.
            L’article 32 impose des mesures adaptées au risque, pas une recette
            identique pour tous les logiciels.
          </p>

          <InfoBox
            variant="amber"
            title="STOP responsable du traitement · délégué à la protection des données si concerné"
          >
            <p>
              Cartographiez les données, les rôles, les sous-traitants, les
              transferts, les durées de conservation et la procédure de fin de
              prestation. Une case cochée dans l’outil ne constitue jamais une
              preuve de conformité.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="options"
          number="08"
          label="Issues"
          title="Reprendre, limiter, reporter ou refuser : quatre issues distinctes"
        >
          <p>
            La reprise n’est pas toujours la bonne décision. L’issue dépend de
            la capacité la plus faible et de la possibilité de réduire le risque
            sans rendre l’entreprise plus captive.
          </p>

          <GuideTable
            caption="Quatre décisions défendables"
            headers={["État des preuves", "Décision possible", "Cadre minimal"]}
            rows={[
              [
                "Cinq capacités démontrées",
                "Candidat à une bascule encadrée",
                "Revue humaine, conditions d’arrêt et décision de production séparée",
              ],
              [
                "Une preuve partielle, aucun blocage",
                "Mission limitée d’investigation ou de stabilisation",
                "Périmètre réversible, livrables explicites, pas d’engagement durable présumé",
              ],
              [
                "Une preuve non renseignée",
                "Reporter la décision",
                "Démonstration attribuée, date de revue et inconnue conservée comme telle",
              ],
              [
                "Une preuve bloquée",
                "STOP ou refus de reprise durable",
                "Résoudre le blocage, choisir une autre stratégie ou maintenir un mode transitoire maîtrisé",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Cinq capacités démontrées ne valident pas le devis"
          >
            <p>
              Ces démonstrations qualifient la capacité de reprise, pas le coût
              du contrat. Faites vérifier séparément le périmètre, les licences,
              l’intégration, les tests de restauration, l’éventuelle
              coexistence, la formation, le support, la maintenance et la
              sortie. Un coût inconnu ne vaut jamais zéro.
            </p>
          </InfoBox>

          <p>
            Si la reprise est possible mais que le système ne peut pas évoluer
            sans risque acceptable, une migration par lots ou une réécriture
            ultérieure peut être étudiée. Ce choix demande son propre dossier de
            bascule ; il ne doit pas être déduit automatiquement du présent
            guide. Lorsque la cible est décidée, commencez par{" "}
            <Link href="/guides/migrer-logiciel-metier-sans-interruption">
              préparer la bascule vers un nouveau logiciel
            </Link>
            .
          </p>

          <GuidePremiumMemo title="Le périmètre doit aussi dire ce qui reste exclu">
            <p>
              Notez ce que la nouvelle équipe peut prendre en charge maintenant,
              qui possède chaque inconnue et quel événement déclenchera une
              nouvelle décision.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="09"
          label="Transmission"
          title="Le procès-verbal de reprise rend le verdict transmissible"
        >
          <p>
            Le procès-verbal de reprise rassemble les faits issus du test de
            relève pour la direction, l’équipe métier, le responsable technique,
            le délégué à la protection des données (DPO) lorsqu’il est concerné
            et le conseil juridique. Aucun d’eux ne devrait avoir à relire tout
            l’audit pour comprendre la décision.
          </p>

          <FormulaBox>
            {[
              "PROCÈS-VERBAL DE REPRISE",
              "",
              "Méthode : test de relève — choix éditorial, pas une norme",
              "Logiciel, périmètre et version observée :",
              "Responsable de la décision :",
              "Motif du changement d’équipe :",
              "Observer — preuve / date / propriétaire / limite :",
              "Construire — preuve / date / propriétaire / limite :",
              "Déployer — preuve / date / propriétaire / limite :",
              "Restaurer — preuve / date / propriétaire / limite :",
              "Sortir — preuve / date / propriétaire / limite :",
              "Droits, contrat et licences — avis requis / obtenu :",
              "Données personnelles — responsable / délégué à la protection des données si concerné / inconnues :",
              "Décision : bascule encadrée / mission limitée / report / STOP :",
              "Condition d’arrêt :",
              "Prochaine démonstration et propriétaire :",
            ].join("\n")}
          </FormulaBox>

          <p>
            Si les faits manquent encore, un{" "}
            <Link href="/services/audit-technique">audit technique</Link> peut
            servir à cadrer les constats et les livrables à obtenir. Une fois la
            capacité de reprise établie, la page{" "}
            <Link href="/services/maintenance-evolution">
              maintenance et évolution
            </Link>{" "}
            décrit le type de continuité qui peut être étudié. Dans les deux
            cas, le périmètre réel, les responsabilités et les conditions
            contractuelles restent à définir.
          </p>

          <p>
            La relève établie, trois vérifications viennent immédiatement après.
            La{" "}
            <Link href="/guides/droits-acces-application-metier">
              reprise en main des droits d’accès
            </Link>{" "}
            traite des comptes hérités dont plus personne ne connaît le
            périmètre. Les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité d’une application métier
            </Link>{" "}
            fixent ce qu’il faut prouver avant d’engager sa responsabilité sur
            l’existant. Et le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette
            </Link>{" "}
            transforme la connaissance acquise en scénarios opposables.
          </p>

          <p>
            Si la reprise débouche sur un remplacement plutôt que sur une
            continuité, deux dossiers prennent le relais : le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges
            </Link>{" "}
            pour figer ce qui doit être reconstruit, et le{" "}
            <Link href="/guides/calculer-roi-application-metier">
              calcul du retour sur investissement
            </Link>{" "}
            pour comparer honnêtement maintenir et refaire. Le cas particulier
            d’une base{" "}
            <Link href="/guides/remplacer-microsoft-access-application-web">
              Microsoft Access héritée
            </Link>{" "}
            est traité à part. Enfin,{" "}
            <Link href="/guides/choisir-prestataire-application-metier">
              choisir un prestataire sur preuves
            </Link>{" "}
            évite de confier un existant mal documenté sur une simple promesse.
          </p>

          <GuidePremiumMemo
            eyebrow="Dernier contrôle"
            title="La prochaine équipe doit aussi pouvoir partir"
          >
            <p>
              Une reprise réussie ne remplace pas une dépendance opaque par une
              autre. La documentation, les comptes, les secrets, les données et
              les droits doivent rester transmissibles selon les règles
              convenues.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
