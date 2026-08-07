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
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { CutoverReadinessTool } from "./cutover-readiness-tool";

const guide = getGuide("migrer-logiciel-metier-sans-interruption");
const breadcrumbName = "Migrer un logiciel métier";

export const metadata = buildGuideMetadata(
  guide,
  "Schéma d’une bascule réversible entre un ancien et un nouveau logiciel métier",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "La réponse courte",
    shortLabel: "Répondre",
  },
  {
    id: "contrat-activite",
    number: "02",
    label: "Le contrat du lundi matin",
    shortLabel: "Nommer",
  },
  {
    id: "source-ecriture",
    number: "03",
    label: "Une seule source d’écriture",
    shortLabel: "Attribuer",
  },
  {
    id: "forme-bascule",
    number: "04",
    label: "Choisir la forme de bascule",
    shortLabel: "Découper",
  },
  {
    id: "repetition",
    number: "05",
    label: "Répéter le périmètre décidé",
    shortLabel: "Répéter",
  },
  {
    id: "outil",
    number: "06",
    label: "Calculer la marge de retour",
    shortLabel: "Calculer",
  },
  {
    id: "cas",
    number: "07",
    label: "Cas fictif chiffré",
    shortLabel: "Vérifier",
  },
  {
    id: "jour-j",
    number: "08",
    label: "Décider le jour J",
    shortLabel: "Décider",
  },
  {
    id: "retour",
    number: "09",
    label: "Exécuter le retour",
    shortLabel: "Revenir",
  },
  {
    id: "apres",
    number: "10",
    label: "Retirer l’ancien outil",
    shortLabel: "Clore",
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
          "Peut-on garantir une migration de logiciel sans aucune interruption ?",
        answer:
          "Non : aucun plan ne peut l’assurer pour tous les systèmes. Vous pouvez viser une continuité sans arrêt visible pour certains parcours, mais les dépendances, les données et les incidents restent propres au système réel. Exigez une bascule répétée, un mode dégradé, des seuils d’arrêt et un retour arrière mesuré.",
      },
      {
        question: "Une migration progressive est-elle toujours préférable ?",
        answer:
          "Non. Elle limite parfois le nombre d’utilisateurs exposés, mais elle suppose que l’architecture, les données, les licences et les dépendances acceptent le découpage. Si plusieurs composants doivent changer ensemble, une bascule coordonnée peut être plus sûre qu’une coexistence artificielle.",
      },
      {
        question:
          "Faire tourner l’ancien et le nouveau logiciel en parallèle supprime-t-il le risque ?",
        answer:
          "Non. Le parallèle ajoute un risque de divergence si les deux logiciels peuvent modifier la même information. Écrivez quelle source fait foi pour chaque opération, comment les écarts sont détectés et quand la coexistence prend fin.",
      },
    ],
  },
  {
    key: "donnees",
    num: "02",
    label: "Données",
    items: [
      {
        question: "Faut-il vérifier chaque ligne après la migration ?",
        answer:
          "Cela dépend du volume, de la criticité et des contrôles disponibles. Le plan peut combiner totaux, contrôles d’intégrité, rapprochements par lots et dossiers témoins choisis avant la répétition. Le responsable métier doit savoir ce qui a été contrôlé, ce qui ne l’a pas été et quels écarts bloquent la bascule.",
      },
      {
        question:
          "Peut-on utiliser une copie des données de production pour répéter ?",
        answer:
          "Pas automatiquement. La CNIL recommande des environnements distincts et des données fictives ou anonymisées autant que possible. Si des données réelles sont nécessaires en préproduction, le besoin, les accès, la sécurité, la durée de conservation et la suppression de la copie doivent être qualifiés par les responsables compétents.",
      },
      {
        question:
          "Que prévoir si le prestataire traite des données personnelles ?",
        answer:
          "Le responsable du traitement doit encadrer la sous-traitance, les garanties de sécurité, les accès, les incidents et le sort des données. Impliquez le délégué à la protection des données (DPO) lorsqu’il est désigné ou que son avis est nécessaire. L’outil de cette page ne conclut pas à la conformité.",
      },
    ],
  },
  {
    key: "retour",
    num: "03",
    label: "Retour et clôture",
    items: [
      {
        question: "Une sauvegarde suffit-elle pour prévoir le retour arrière ?",
        answer:
          "Non. Il faut encore pouvoir la restaurer, retrouver les clés et dépendances, remettre l’ancien système en service, traiter les écritures nées pendant la transition et mesurer le temps nécessaire. La présence d’un fichier de sauvegarde n’est pas une répétition.",
      },
      {
        question: "À quel moment faut-il décider de revenir ?",
        answer:
          "Avant que le temps restant soit inférieur au temps réservé à la décision et au retour. Le seuil doit être calculé avec les durées de la répétition, écrit avant le jour J et appliqué par une personne nommée, même si l’équipe pense pouvoir corriger rapidement.",
      },
      {
        question: "Quand peut-on supprimer l’ancien logiciel ?",
        answer:
          "Seulement après avoir vérifié les dépendances sur un cycle métier pertinent, défini le besoin d’accès à l’historique, appliqué les règles de conservation et démontré que les sauvegardes encore nécessaires restent lisibles. Désactiver ou passer en lecture seule avant suppression aide à révéler un usage oublié.",
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
          { label: "Budget de bascule réversible", variant: "neutral" },
          { label: "GO · STOP · Par lots", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Migrer un logiciel métier"
        heroTitleEm="sans interrompre"
        heroTitleSuffix="l’activité"
        heroDescription="Au moment de la bascule, un seul logiciel doit enregistrer chaque opération. Avant le GO, démontrez les cinq preuves et vérifiez que la fenêtre couvre la copie, le contrôle, la décision et le retour arrière."
        stats={[
          { label: "Preuves critiques", value: "5" },
          { label: "Durées à mesurer", value: "4" },
          { label: "Score moyen", value: "Aucun" },
          { label: "Données envoyées", value: "Aucune" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Projet de migration",
          titleStart: "Préparer",
          titleEm: "une bascule vérifiable",
          description:
            "Décrivez les parcours qui ne peuvent pas s’arrêter, la cible, la fenêtre et les dépendances déjà connues. Les inconnues resteront visibles.",
          benefits: [
            "Un seul logiciel autorisé à enregistrer à chaque étape",
            "Des critères GO/STOP décidés avant la fenêtre",
            "Un retour arrière inclus dans le temps disponible",
          ],
          primaryCtaLabel: "Préparer ma bascule",
          primaryCtaHref: "/demarrer-un-projet",
        }}
        toc={toc}
        tocLabel="Plan de bascule"
        mobileCtaLabel="Préparer ma bascule"
        sidebarContextCta={{
          eyebrow: "Migration métier",
          title: "Préparer les preuves de la décision",
          description:
            "Apportez les parcours critiques, les dépendances, une répétition disponible et la fenêtre imposée par le métier.",
          benefits: [
            "Périmètre et logiciel de référence explicites",
            "Preuves, durées et responsables séparés",
            "STOP conservé si un point reste bloqué",
          ],
          ctaLabel: "Décrire ma migration",
          ctaHref: "/demarrer-un-projet",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions avant",
          titleEm: "la bascule",
          titleEnd: "du logiciel métier.",
          subtitle:
            "Des réponses courtes sur le parallèle, les données, la fenêtre de décision et la fermeture de l’ancien système.",
          ctaTitle: "Vérifier une fenêtre de bascule",
          ctaDescription:
            "Décrivez le périmètre, les opérations critiques et les preuves déjà disponibles, sans transmettre de donnée confidentielle.",
          ctaLabel: "Préparer la bascule",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "ANSSI · Sécuriser une migration numérique",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf",
            description:
              "Version 1.0 datée de janvier 2026 : implication des équipes métier, informatique et sécurité, cartographie, sauvegardes de transition, procédures testées et contrôle post-migration. Ce document « Les Essentiels » expose des bonnes pratiques, pas un référentiel détaillé.",
          },
          {
            source: "ANSSI · Sauvegarde des systèmes d’information",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
            description:
              "Version 1.1 du 27 novembre 2025 : stratégie adaptée à la perte de données et à la durée d’interruption admissibles, protection et capacité de restauration.",
          },
          {
            source: "CNIL · Continuité et reprise d’activité",
            href: "https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite",
            description:
              "Fiche du 14 mars 2024 : mode dégradé sans baisse de protection, restauration et plans testés, exercice avec les parties prenantes et retour à la normale.",
          },
          {
            source: "CNIL · Sauvegarder",
            href: "https://www.cnil.fr/fr/securite-sauvegarder",
            description:
              "Fiche du 14 mars 2024 : sauvegardes protégées, séparées et régulièrement testées en intégrité comme en restauration.",
          },
          {
            source: "CNIL · Encadrer les développements informatiques",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Fiche du 14 mars 2024 : tests complets, environnement distinct et données fictives ou anonymisées autant que possible ; conditions renforcées si des données réelles sont nécessaires en préproduction.",
          },
          {
            source: "CNIL · Gérer la sous-traitance",
            href: "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
            description:
              "Fiche du 14 mars 2024 : contrat, garanties vérifiables, sécurité, incidents et conditions de restitution ou destruction des données.",
          },
          {
            source: "RGPD · texte officiel EUR-Lex",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr",
            description:
              "Articles 5, 28 et 32 : principes applicables aux données, sous-traitance et mesures adaptées au risque, dont disponibilité, restauration et tests réguliers.",
          },
          {
            source: "AWS Prescriptive Guidance · Cutover stage",
            href: "https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html",
            description:
              "Illustration technique d’une bascule : gel, copie finale, synchronisation, redirection, tests, seuils de retour et décideur. Cette documentation fournisseur n’est ni une norme générale ni un choix d’architecture automatique.",
          },
          {
            source: "Microsoft Azure Well-Architected · Safe deployments",
            href: "https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments",
            description:
              "Documentation fournisseur mise à jour le 17 juin 2026 : exposition progressive, contrôles de santé, arrêt ou récupération et désactivation avant suppression. Cette illustration technique doit être adaptée ; elle ne constitue pas une norme générale.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites",
          title:
            "Un outil de préparation, pas une garantie d’absence d’interruption",
          description:
            "La méthode, le calcul et le cas fictif de cette page ne testent pas votre logiciel. Le périmètre, les droits, les contrats, la sécurité, les données personnelles, les dépendances et la continuité doivent être validés par les responsables compétents du système réel. Une durée absente reste non mesurée ; elle ne vaut jamais zéro.",
        }}
        relatedGuides={[
          {
            label: "Reprendre un logiciel métier existant",
            href: "/guides/reprendre-logiciel-metier-existant",
          },
          {
            label: "Choisir le premier processus à automatiser",
            href: "/guides/automatiser-processus-metier",
          },
        ]}
        relatedGuidesLabel="2 guides pour préparer l’existant"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse"
          title="Vous pouvez viser la continuité, à condition de préparer le retour"
        >
          <p className="lead">
            Lundi matin, les équipes doivent encore enregistrer les commandes,
            retrouver les dossiers et émettre les documents attendus. Pour
            migrer sans arrêt subi, commencez par ces opérations avant même de
            fixer la date d’installation du nouveau logiciel. Définissez où
            chacune sera enregistrée pendant la transition, répétez la bascule
            et gardez assez de temps pour vérifier ou revenir.
          </p>

          <p>
            La <strong>bascule</strong> est le moment où le nouveau logiciel
            devient la source de référence pour un périmètre précis. Ce
            périmètre peut être toute l’entreprise, un site, une population ou
            une fonction. La <strong>source d’écriture</strong> est le seul
            logiciel autorisé à enregistrer ou modifier une opération pendant
            une phase donnée. Le périmètre n’est candidat à la bascule que si
            cinq preuves sont démontrées et si la fenêtre contient quatre durées
            : copie et activation, vérification, décision, puis retour arrière.
          </p>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-16x9.webp"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), 760px"
              alt="Passage contrôlé de l’ancien au nouveau logiciel avec une source d’écriture unique, un seuil de décision et un trajet de retour"
              className="h-auto w-full"
              priority
            />
            <figcaption className="border-t border-zinc-200 px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 sm:px-5">
              La trajectoire aller ne suffit pas. Le plan réserve un seuil de
              décision et un chemin de retour avant la fin de la fenêtre.
            </figcaption>
          </figure>

          <GuidePremiumMemo
            eyebrow="Règle de départ"
            title="La durée du retour appartient au budget, même si vous espérez ne pas l’utiliser"
          >
            <p>
              Une équipe qui consomme toute la fenêtre pour réussir n’a plus de
              solution maîtrisée lorsqu’un contrôle échoue. Mesurez le retour
              pendant la répétition et placez la décision assez tôt pour
              l’exécuter.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="contrat-activite"
          number="02"
          label="Périmètre métier"
          title="Écrivez ce qui doit fonctionner le lundi matin"
        >
          <p>
            « Le logiciel doit rester disponible » ne suffit pas pour décider.
            Une page peut encore répondre alors que la création de commandes
            échoue. Une facture peut même être générée sans jamais parvenir à la
            comptabilité. Choisissez quelques parcours dont l’échec bloquerait
            réellement l’activité, puis attribuez un responsable métier à
            chacun.
          </p>

          <GuideTable
            caption="Le contrat de continuité à adapter à votre activité"
            headers={[
              "Parcours à nommer",
              "Preuve avant bascule",
              "Mode dégradé",
              "Limite à écrire",
            ]}
            rows={[
              [
                "Recevoir et confirmer une demande",
                "Un dossier témoin parcourt entrée, contrôle, affectation et confirmation",
                "Canal temporaire identifié, horodaté et attribué",
                "Volume, durée et personne autorisée",
              ],
              [
                "Produire un document engageant",
                "Données, numérotation, droits, génération et envoi vérifiés",
                "Procédure autorisée et trace des documents émis",
                "Ce qui ne peut pas être produit hors logiciel",
              ],
              [
                "Mettre à jour une opération en cours",
                "Modification visible au bon endroit et dans les systèmes dépendants",
                "Journal de transition avec identifiant stable",
                "Délai et contrôle de ressaisie",
              ],
              [
                "Retrouver l’historique utile",
                "Recherche par plusieurs clés et contrôle de pièces jointes",
                "Ancien outil en lecture seule si prévu et autorisé",
                "Durée d’accès et responsable",
              ],
            ]}
          />

          <p>
            Décrivez le mode dégradé comme une procédure. Elle précise qui peut
            l’activer, combien d’opérations elle absorbe, où elles sont
            conservées, comment les accès sont limités et comment le retour à la
            normale sera contrôlé. La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
              target="_blank"
              rel="noreferrer"
            >
              CNIL recommande
            </a>{" "}
            de prévoir la continuité sans réduire la protection des données, de
            tester le plan et de préparer le retour à la normale.
          </p>

          <InfoBox
            variant="amber"
            title="Un fichier temporaire crée lui aussi des obligations"
          >
            <p>
              Une liste partagée, un formulaire de secours ou un cahier contient
              parfois des données personnelles ou sensibles. Définissez ses
              accès, sa durée de conservation, sa protection, sa ressaisie et sa
              destruction. Le mode dégradé ne doit pas devenir une copie
              oubliée.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="source-ecriture"
          number="03"
          label="Données"
          title="N’autorisez qu’un seul logiciel à enregistrer chaque opération"
        >
          <p>
            Deux logiciels actifs en parallèle peuvent diverger. Si un
            utilisateur modifie l’adresse dans l’ancien outil pendant qu’un
            autre valide la commande dans le nouveau, la version qui l’emporte
            doit avoir été décidée avant le jour J.
          </p>

          <GuideTable
            caption="Attribuer la source d’écriture pendant la transition"
            headers={[
              "Phase",
              "Ancien logiciel",
              "Nouveau logiciel",
              "Écritures de transition",
            ]}
            rows={[
              [
                "Avant gel",
                "Source de référence",
                "Essais isolés ou copie contrôlée",
                "Aucune écriture métier réelle dans la cible",
              ],
              [
                "Copie finale",
                "Écritures gelées ou bornées par une règle explicite",
                "Réception et contrôles",
                "Journal temporaire si une opération ne peut attendre",
              ],
              [
                "Après GO",
                "Lecture seule ou accès de secours défini",
                "Source de référence du lot",
                "Rapprochement des entrées du journal",
              ],
              [
                "Après STOP",
                "Reprend le rôle de référence",
                "Écritures arrêtées et conservées pour rapprochement",
                "Reprise contrôlée, sans écrasement automatique",
              ],
            ]}
          />

          <p>
            Une synchronisation technique ne tranche pas automatiquement les
            conflits. Pour chaque type d’objet — client, commande, rendez-vous,
            stock, facture — écrivez la direction du flux, la clé commune, la
            règle de conflit, la fréquence, le délai admissible et le
            responsable d’un écart. Une valeur inconnue reste inconnue.
          </p>

          <FormulaBox>
            {[
              "FICHE D’UNE OPÉRATION DE TRANSITION",
              "",
              "Objet métier :",
              "Lot concerné :",
              "Source d’écriture avant GO :",
              "Source d’écriture après GO :",
              "Clé de rapprochement :",
              "Écritures possibles pendant le gel :",
              "Lieu du journal temporaire :",
              "Règle en cas de conflit :",
              "Responsable de l’écart :",
              "Contrôle et délai de ressaisie :",
            ].join("\n")}
          </FormulaBox>

          <GuidePremiumMemo title="« Les deux écrivent » exige une gestion des conflits démontrée">
            <p>
              Le double enregistrement exige une logique conçue pour les
              conflits, les erreurs partielles et la remise en ordre. Si cette
              logique n’existe pas et n’a pas été testée, choisissez une seule
              source d’écriture et un journal de transition.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="forme-bascule"
          number="04"
          label="Découpage"
          title="Les dépendances montrent ce qui peut migrer séparément"
        >
          <p>
            Partez de ce qui peut être séparé sans casser les données, les
            droits, les intégrations ou le travail des équipes. Ce constat
            permet de choisir entre une bascule coordonnée, des lots et une
            coexistence temporaire. La{" "}
            <a
              href="https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html"
              target="_blank"
              rel="noreferrer"
            >
              documentation de bascule AWS
            </a>{" "}
            illustre ce compromis : une approche progressive peut réduire
            l’exposition et faciliter le retour, mais seulement si l’application
            et ses dépendances supportent le partage. C’est une illustration
            fournisseur, pas une règle universelle.
          </p>

          <GuideTable
            caption="Trois formes de bascule et leurs conditions"
            headers={[
              "Forme",
              "Quand l’étudier",
              "Risque principal",
              "Preuve décisive",
            ]}
            rows={[
              [
                "Bascule coordonnée",
                "Composants fortement liés, identité ou base impossible à séparer",
                "Périmètre large et fenêtre tendue",
                "Répétition complète, performance et retour dans la même fenêtre",
              ],
              [
                "Bascule par lots",
                "Sites, populations ou fonctions réellement séparables",
                "Dépendance oubliée entre lots",
                "Cartographie des flux et rapprochement entre populations",
              ],
              [
                "Coexistence temporaire",
                "Lecture ou fonction répartie avec source d’écriture claire",
                "Divergence et prolongation indéfinie",
                "Règles de synchronisation, conflits, surveillance et date de fin",
              ],
            ]}
          />

          <p>
            Un lot n’est pas forcément un module technique. Il peut être un
            site, un type de commande ou une équipe, si ses données et ses
            dépendances peuvent être isolées. À l’inverse, couper « clients » de
            « commandes » parce que les menus sont séparés peut être impossible
            si les deux partagent les mêmes validations et écritures.
          </p>

          <InfoBox
            variant="blue"
            title="Un lot n’aide que si ses dépendances deviennent vérifiables"
          >
            <p>
              Demandez ce qui devient plus simple à vérifier ou à restaurer
              grâce au découpage. Si le lot conserve toutes les dépendances et
              ajoute une synchronisation fragile, il réduit peut-être le nombre
              d’utilisateurs, tandis que le risque sur les données demeure.
            </p>
          </InfoBox>

          <GuidePremiumMemo title="Avant de financer une coexistence, vérifiez ce que l’existant couvre déjà">
            <p>
              Ouvrez les contrats et testez les fonctions déjà payées :
              environnement d’essai, export complet, lecture seule, journal,
              restauration ou routage progressif. Un intitulé commercial ou un
              droit de licence ne prouve ni la capacité, ni le droit d’usage
              dans votre scénario.
            </p>
            <p>
              Comparez ensuite, sur le même horizon, le nettoyage des données,
              les interfaces, les doubles licences et infrastructures, la
              formation, le support renforcé, la maintenance après migration,
              l’archive et la sortie du prestataire. L’outil de cette page
              budgète du temps, pas ces coûts.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="repetition"
          number="05"
          label="Preuves"
          title="Rejouez un périmètre représentatif et consignez ce qui reste hors test"
        >
          <p>
            Une copie de dix dossiers ne mesure pas une copie de toute la base.
            Vous pouvez aussi réussir le test avec un administrateur tout en
            laissant les droits réels non vérifiés. Et si la restauration exclut
            les pièces jointes, les dossiers restent peut-être inutilisables.
            Notez la version, le volume, les rôles et les dépendances réellement
            couverts.
          </p>

          <p>
            Certaines conditions de production ou dépendances tierces ne sont
            pas reproductibles hors de la fenêtre réelle. Dans ce cas, écrivez
            ce qui n’a pas été testé, comment l’écart sera détecté et quelle
            mesure sera prise s’il apparaît. Une condition critique non observée
            reste inconnue ou partielle ; elle ne devient pas « démontrée » par
            hypothèse.
          </p>

          <p>
            Pour transformer les parcours métier en cas rejouables et conserver
            les états échoué, bloqué ou non exécuté jusqu’à la décision,
            préparez séparément le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette de l’application métier
            </Link>
            . La recette prouve les besoins ; la répétition de migration prouve
            la bascule et son retour.
          </p>

          <GuideTable
            caption="Les cinq preuves avant la revue GO ou STOP"
            headers={["Preuve", "Démonstration attendue", "STOP si…"]}
            rows={[
              [
                "Continuité métier",
                "Les responsables rejouent les parcours critiques, le mode dégradé et le retour à la normale",
                "Un parcours vital ou sa capacité de secours reste inconnu",
              ],
              [
                "Source d’écriture",
                "Chaque opération et chaque lot ont une source de référence et un traitement des écritures de transition",
                "Deux systèmes peuvent modifier la même information sans règle démontrée",
              ],
              [
                "Rapprochement des données",
                "Totaux, contrôles d’intégrité et dossiers témoins produisent un résultat consigné",
                "Un écart critique n’a ni explication ni propriétaire",
              ],
              [
                "Retour arrière",
                "L’ancien système ou une solution de repli est restauré et les écritures de transition sont traitées",
                "La sauvegarde, une clé, une dépendance ou la durée n’a pas été testée",
              ],
              [
                "Décision et équipe",
                "Décideur, responsables, support, surveillance, seuils et communication sont disponibles",
                "Personne ne peut prononcer STOP au moment prévu",
              ],
            ]}
          />

          <p>
            L’
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI
            </a>{" "}
            recommande notamment d’associer les équipes métier, informatique et
            sécurité, de maintenir la cartographie jusqu’au retrait de
            l’ancienne solution, de protéger les exports massifs, de conserver
            l’accès aux anciennes sauvegardes pendant leur durée utile et de ne
            lancer la migration qu’une fois les procédures opérationnelles et de
            sécurité définies et testées. Le document précise qu’il expose des
            bonnes pratiques susceptibles d’évoluer, pas des recommandations
            détaillées applicables sans adaptation.
          </p>

          <h3>Protégez aussi l’environnement de répétition</h3>

          <p>
            La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
              target="_blank"
              rel="noreferrer"
            >
              CNIL recommande
            </a>{" "}
            un environnement distinct de la production et des données fictives
            ou anonymisées autant que possible. Si le test exige des données
            réelles en préproduction, l’environnement doit être protégé au même
            niveau que la production et les tests préalables doivent déjà avoir
            été réalisés. Ce besoin doit être qualifié ; il ne justifie pas une
            copie libre de toute la base.
          </p>

          <InfoBox
            variant="amber"
            title="Alerte de sécurité ou intégrité douteuse : sortez du scénario normal"
          >
            <p>
              Une migration ne doit pas masquer un incident en cours. Si les
              moyens d’administration, les exports, la source ou les sauvegardes
              paraissent compromis, appliquez la procédure d’incident et faites
              intervenir les responsables de sécurité. L’outil ci-dessous n’est
              pas conçu pour autoriser une opération dans ce contexte.
            </p>
          </InfoBox>

          <InfoBox
            variant="blue"
            title="Doublez le volume et simulez une dépendance indisponible"
          >
            <p>
              Ne supposez pas que les durées doublent de façon linéaire :
              rejouez un volume représentatif et les limites de capacité. Puis
              simulez l’indisponibilité d’une identité, d’une interface, d’un
              prestataire ou du support. Nommez qui détecte l’écart, qui
              déclenche le mode dégradé et qui ordonne le retour. Si personne ou
              aucune solution ne prend le relais, la preuve reste partielle ou
              bloquée.
            </p>
          </InfoBox>

          <GuidePremiumMemo
            eyebrow="Mesure"
            title="Chronométrez quatre durées sans retirer les temps d’attente observés"
          >
            <ul>
              <li>copie finale, activation et redirection ;</li>
              <li>vérifications métier, données, droits et intégrations ;</li>
              <li>analyse des écarts et décision par la personne nommée ;</li>
              <li>retour arrière et contrôles de reprise.</li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="06"
          label="Outil local"
          title="Vérifiez les cinq preuves avant de calculer la marge"
        >
          <p>
            Commencez par le statut des cinq preuves. Si la restauration est
            impossible ou la source d’écriture inconnue, arrêtez l’évaluation du
            budget : la formation et la rapidité de copie n’effacent pas le
            problème. L’outil retient d’abord le statut le plus prudent, puis
            calcule le temps disponible uniquement à partir de durées positives
            saisies.
          </p>

          <FormulaBox>
            {[
              "temps requis =",
              "  copie et activation",
              "+ vérification",
              "+ décision",
              "+ retour arrière",
              "",
              "marge = fenêtre disponible - temps requis",
              "",
              "La durée du retour reste incluse même si la bascule réussit.",
            ].join("\n")}
          </FormulaBox>

          <CutoverReadinessTool />

          <p>
            Le taux de marge affiché décrit votre saisie. Il n’existe pas ici de
            seuil universel transformant 5 %, 20 % ou 30 % en feu vert. Le
            contexte métier, la variabilité observée, la criticité et les
            dépendances restent à examiner. Une marge égale à zéro peut être
            calculée comme « candidat », mais elle rend tout aléa visible à la
            revue humaine.
          </p>

          <GuidePremiumMemo title="Le verdict vert reste « candidat »">
            <p>
              L’outil ne connaît ni votre logiciel ni la fiabilité des réponses
              saisies. Joignez les preuves et les mesures au relevé de bascule,
              puis faites prononcer GO ou STOP par la personne mandatée.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas"
          number="07"
          label="Calcul"
          title="Même cinq preuves démontrées peuvent conduire à réduire le lot"
        >
          <GuidePremiumCase
            initial="F"
            eyebrow="Cas entièrement fictif"
            title="Une entreprise de négoce prépare sa migration"
          >
            <p>
              Le périmètre observé compte 680 commandes ouvertes, 74 expéditions
              attendues le lendemain, 12 rôles utilisateurs et 24 dossiers
              témoins choisis avant la répétition. Ces chiffres illustrent le
              calcul ; ils ne décrivent ni un client, ni une moyenne, ni un
              délai conseillé.
            </p>
          </GuidePremiumCase>

          <p>
            La fenêtre disponible est de 240 minutes. Les cinq preuves sont
            déclarées démontrées sur le périmètre global. Pourtant, la première
            répétition produit les durées suivantes :
          </p>

          <FormulaBox>
            {[
              "PÉRIMÈTRE GLOBAL — CAS FICTIF",
              "",
              "92 min  copie et activation",
              "68 min  vérification",
              "25 min  décision",
              "62 min  retour arrière",
              "──────",
              "247 min nécessaires",
              "",
              "240 - 247 = -7 min de marge",
            ].join("\n")}
          </FormulaBox>

          <p>
            Le verdict est <strong>réduire par lots</strong>. La copie et la
            vérification totalisent 160 minutes, mais cette lecture oublierait
            la décision et le retour. En cas d’écart tardif, l’entreprise
            n’aurait plus le temps de reprendre proprement.
          </p>

          <p>
            L’équipe isole ensuite un premier lot dont les dépendances sont
            connues. Elle ne soustrait pas arbitrairement sept minutes : elle
            répète le lot complet.
          </p>

          <FormulaBox>
            {[
              "PREMIER LOT — CAS FICTIF",
              "",
              "61 min  copie et activation",
              "52 min  vérification",
              "20 min  décision",
              "54 min  retour arrière",
              "──────",
              "187 min nécessaires",
              "",
              "240 - 187 = 53 min de marge",
              "53 / 240 × 100 = 22,1 % après arrondi d’affichage",
              "",
              "Contrôle inverse : 187 + 53 = 240",
            ].join("\n")}
          </FormulaBox>

          <p>
            Le lot devient <strong>candidat à une bascule encadrée</strong>. Ce
            statut indique uniquement que les preuves déclarées et les durées
            répétées tiennent dans la fenêtre. Il ne prédit pas le succès. Si le
            volume, les rôles, les intégrations ou la version changent, la
            mesure doit être revue.
          </p>

          <InfoBox
            variant="blue"
            title="Comparez plusieurs répétitions avant de retenir une durée"
          >
            <p>
              Une répétition donne un point de mesure. Lorsque la criticité le
              justifie, conservez les temps de plusieurs répétitions et
              expliquez leurs écarts. Le meilleur essai ne devient une durée de
              référence qu’avec une justification.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="jour-j"
          number="08"
          label="Exécution"
          title="Le jour J, un journal horodaté indique quand continuer ou arrêter"
        >
          <p>
            Le journal de bascule attribue chaque tâche et chaque contrôle. Pour
            une étape donnée, inscrivez l’heure prévue, la personne qui exécute,
            la preuve attendue, la personne qui contrôle et la condition
            d’arrêt. Le décideur consulte cet état avant que la fenêtre ne soit
            consommée.
          </p>

          <GuideTable
            caption="Un déroulé de bascule orienté décision"
            headers={[
              "Repère",
              "Action",
              "Preuve pour continuer",
              "Condition d’arrêt",
            ]}
            rows={[
              [
                "Avant T0",
                "Confirmer équipes, accès, sauvegarde/restauration, support et absence d’alerte non traitée",
                "Revue de préparation signée ou consignée",
                "Responsable absent, accès incomplet ou alerte critique",
              ],
              [
                "T0",
                "Appliquer le gel prévu et ouvrir le journal de transition",
                "Heure, périmètre et source d’écriture confirmés",
                "Écritures non maîtrisées dans la source",
              ],
              [
                "Copie et activation",
                "Exécuter les étapes répétées sans changement improvisé",
                "Versions, volumes et contrôles techniques attendus",
                "Écart hors tolérance ou procédure non suivie",
              ],
              [
                "Vérification",
                "Rejouer parcours, droits, données, intégrations et surveillance",
                "Résultats métier consignés par les responsables",
                "Parcours critique ou rapprochement en échec",
              ],
              [
                "Seuil de décision",
                "Comparer faits, temps restant et seuils écrits",
                "GO ou STOP prononcé par la personne nommée",
                "Temps restant inférieur au budget décision + retour",
              ],
              [
                "Après GO",
                "Ouvrir le lot, renforcer le support et rapprocher le journal",
                "Source d’écriture et surveillance confirmées",
                "Écart critique post-ouverture",
              ],
            ]}
          />

          <FormulaBox>
            {[
              "DERNIER DÉBUT POSSIBLE DE LA DÉCISION",
              "",
              "fenêtre disponible",
              "- durée réservée à la décision",
              "- durée réservée au retour arrière",
              "",
              "La copie et la vérification doivent être terminées avant ce repère.",
            ].join("\n")}
          </FormulaBox>

          <p>
            L’
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI conseille
            </a>{" "}
            aussi d’éviter une modification impactante pendant la phase critique
            et de vérifier les moyens de sécurité avant comme après la
            migration. Une correction improvisée qui change le scénario rend la
            répétition moins probante. Si elle est indispensable, consignez la
            décision, le risque nouveau et l’effet sur le retour.
          </p>

          <GuidePremiumMemo title="Un STOP prononcé à temps protège l’activité">
            <p>
              Le décideur doit pouvoir arrêter sans négocier avec l’optimisme du
              moment. Un retour exécuté à temps protège l’activité et fournit
              les faits nécessaires à la prochaine répétition.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="retour"
          number="09"
          label="Réversibilité"
          title="Le retour arrière doit préserver les écritures nées pendant la transition"
        >
          <p>
            Les écritures nées pendant la transition compliquent le retour. Dès
            qu’une opération réelle a été enregistrée dans la cible ou dans un
            mode dégradé, il faut savoir la conserver, la rapprocher et
            l’intégrer à la source redevenue officielle sans écraser une
            information plus récente.
          </p>

          <ol>
            <li>
              <strong>Prononcer STOP et geler les nouvelles écritures</strong>{" "}
              selon la procédure prévue, sans laisser chaque équipe choisir son
              outil.
            </li>
            <li>
              <strong>Capturer le périmètre de transition</strong> : opérations,
              identifiants, heures, auteurs et statut, sans multiplier les
              copies inutiles.
            </li>
            <li>
              <strong>Remettre la source en service</strong> avec la version,
              les accès, les dépendances et les contrôles réellement répétés.
            </li>
            <li>
              <strong>Rapprocher les opérations</strong> selon les règles
              écrites, avec validation métier pour les conflits.
            </li>
            <li>
              <strong>Informer les utilisateurs</strong> de la source qui fait
              foi, des actions à reprendre et du prochain point de situation.
            </li>
            <li>
              <strong>Conserver les preuves de l’écart</strong> avant de
              corriger et de reprogrammer une répétition.
            </li>
          </ol>

          <p>
            L’
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI rappelle
            </a>{" "}
            qu’une stratégie de sauvegarde doit tenir compte de la perte de
            données et de la durée d’interruption admissibles. La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noreferrer"
            >
              CNIL demande
            </a>{" "}
            de tester régulièrement l’intégrité des sauvegardes et la capacité à
            les restaurer. Ces textes ne donnent pas une durée type : votre
            répétition doit mesurer le cas réel.
          </p>

          <InfoBox
            variant="amber"
            title="Données personnelles : qualifiez la copie et son sort"
          >
            <p>
              Si un prestataire traite des données personnelles, le responsable
              du traitement doit encadrer les garanties, les accès, les
              incidents et la restitution ou destruction. La{" "}
              <a
                href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
                target="_blank"
                rel="noreferrer"
              >
                fiche CNIL sur la sous-traitance
              </a>{" "}
              détaille ces précautions. Impliquez le délégué à la protection des
              données (DPO) lorsqu’il est concerné ; une copie « de secours »
              n’est pas hors du cadre.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="apres"
          number="10"
          label="Clôture"
          title="Désactivez l’ancien logiciel avant de le supprimer"
        >
          <p>
            Après GO, l’équipe rapproche encore les opérations de transition,
            surveille les parcours critiques et traite les écarts. Le support
            renforcé a une date de fin et des critères de sortie. Tant que ce
            contrôle n’est pas terminé, « la page s’ouvre » ne signifie pas que
            la migration est close.
          </p>

          <GuideTable
            caption="Fermer l’ancien système sans détruire une dépendance utile"
            headers={["Étape", "Question", "Preuve avant la suivante"]}
            rows={[
              [
                "Lecture seule",
                "Qui a encore besoin de consulter l’historique et pourquoi ?",
                "Rôles, durée et journaux d’accès définis",
              ],
              [
                "Désactivation",
                "Une intégration, tâche planifiée ou équipe l’utilise-t-elle encore ?",
                "Observation sur un cycle métier pertinent et alertes suivies",
              ],
              [
                "Archivage",
                "Quelles données doivent être conservées, sous quel format et avec quels accès ?",
                "Règles métier, contractuelles et légales qualifiées",
              ],
              [
                "Suppression",
                "Les comptes, copies, secrets, ressources et références résiduelles sont-ils inventoriés ?",
                "Validation des responsables compétents et trace de l’opération",
              ],
            ]}
          />

          <p>
            L’ANSSI recommande de maintenir la cartographie et les inventaires
            avant, pendant et après la migration jusqu’au retrait complet. Elle
            recommande aussi de conserver les infrastructures nécessaires pour
            accéder aux anciennes sauvegardes jusqu’à leur expiration selon la
            politique applicable. Supprimer trop tôt l’ancien environnement ou
            une clé peut rendre une sauvegarde théorique inutilisable.
          </p>

          <FormulaBox>
            {[
              "RELEVÉ DE BASCULE",
              "",
              "Périmètre et version :",
              "Parcours métier à maintenir :",
              "Source d’écriture par phase :",
              "Cinq preuves — résultat / date / responsable / limite :",
              "Fenêtre et quatre durées mesurées :",
              "Seuil de décision :",
              "Décideur GO ou STOP :",
              "Mode dégradé et retour à la normale :",
              "Traitement des écritures de transition :",
              "Données personnelles — rôles et avis requis :",
              "Décision et heure :",
              "Surveillance après GO ou preuve du retour :",
              "Conditions de lecture seule, archivage et suppression :",
            ].join("\n")}
          </FormulaBox>

          <p>
            Si l’entreprise doit d’abord vérifier qu’une nouvelle équipe peut
            comprendre, déployer et restaurer l’existant, commencez par le{" "}
            <Link href="/guides/reprendre-logiciel-metier-existant">
              test de relève du logiciel métier
            </Link>
            . Lorsque l’existant et la cible sont connus, décrivez ensuite les
            parcours, la fenêtre et les dépendances dans la page{" "}
            <Link href="/demarrer-un-projet">démarrer un projet</Link>. Le
            premier échange sert à qualifier la prochaine preuve ou à constater
            qu’un autre chemin est préférable ; il ne vaut pas promesse de
            bascule.
          </p>

          <p>
            Une bascule ne se valide pas sur une impression : les critères
            d’acceptation viennent du{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette
            </Link>{" "}
            et les exigences de la cible du{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges
            </Link>
            . Pendant la coexistence, deux modèles de{" "}
            <Link href="/guides/droits-acces-application-metier">
              droits d’accès
            </Link>{" "}
            se superposent et les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité
            </Link>{" "}
            doivent couvrir les copies temporaires de données.
          </p>

          <p>
            Le point de départ change la méthode. Une base{" "}
            <Link href="/guides/remplacer-microsoft-access-application-web">
              Microsoft Access
            </Link>{" "}
            et un espace{" "}
            <Link href="/guides/airtable-notion-ou-application-metier">
              Airtable ou Notion
            </Link>{" "}
            n’exportent pas les mêmes garanties : leurs guides respectifs
            détaillent ce qui est réellement récupérable. Si la migration est
            confiée à l’extérieur,{" "}
            <Link href="/guides/choisir-prestataire-application-metier">
              choisir un prestataire sur preuves
            </Link>{" "}
            précise les engagements à obtenir sur la reprise de données et le
            retour arrière.
          </p>

          <GuidePremiumMemo
            eyebrow="Dernière consigne"
            title="Chaque équipe doit pouvoir nommer le logiciel qui fait foi"
          >
            <p>
              Les utilisateurs savent où travailler et où signaler un écart. Les
              opérations de transition sont rapprochées ; l’ancien système suit
              une règle explicite de lecture, de conservation ou de suppression.
              Une dépendance encore sans propriétaire maintient la clôture en
              attente.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
