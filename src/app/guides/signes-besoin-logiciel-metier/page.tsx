import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Link2,
  Settings2,
  ShieldCheck,
  Store,
  Trash2,
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
import { SituationDiagnosticTool } from "./situation-diagnostic";

const guide = getGuide("signes-besoin-logiciel-metier");
const pagePath = `/guides/${guide.slug}`;
const breadcrumbName = "Besoin d’un logiciel métier";

export const metadata = buildGuideMetadata(
  guide,
  "Le coût annuel du fonctionnement actuel, puis six réponses chiffrées avant d’acheter un logiciel métier",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

/**
 * Les durées par section somment exactement à `guide.readTimeMin` (21).
 *
 * L’audit du 28/08/2026 a relevé un bandeau à 21 min face à dix sections
 * annonçant 36 à 46 min : un lecteur qui additionnait trouvait le double de la
 * promesse. Les deux valeurs vivent maintenant sur la même base, et le temps
 * de REMPLISSAGE des trois fiches — qui n’est pas du temps de lecture — est
 * annoncé séparément dans la section 04.
 */
const SECTION_READING_MINUTES = {
  definition: 2,
  coutActuel: 3,
  securiser: 2,
  troisSituations: 1,
  sixReponses: 3,
  contreCas: 2,
  cas: 2,
  ceQuiRate: 2,
  pilote: 1,
  coutComplet: 1,
  anneeTrois: 1,
  decision: 1,
} as const;

const toc = [
  {
    id: "definition",
    number: "01",
    label: "Définir le logiciel métier",
    shortLabel: "Définir",
  },
  {
    id: "cout-actuel",
    number: "02",
    label: "Chiffrer la situation actuelle",
    shortLabel: "Chiffrer",
  },
  {
    id: "securiser",
    number: "03",
    label: "Sécuriser avant d’acheter",
    shortLabel: "Sécuriser",
  },
  {
    id: "trois-situations",
    number: "04",
    label: "Documenter trois situations",
    shortLabel: "Documenter",
  },
  {
    id: "six-reponses",
    number: "05",
    label: "Comparer six réponses",
    shortLabel: "Comparer",
  },
  {
    id: "contre-cas",
    number: "06",
    label: "Savoir ne pas investir",
    shortLabel: "Écarter",
  },
  {
    id: "cas-construit",
    number: "07",
    label: "Suivre un cas construit",
    shortLabel: "Cas",
  },
  {
    id: "ce-qui-rate",
    number: "08",
    label: "Ce qui rate et son coût",
    shortLabel: "Échecs",
  },
  {
    id: "pilote",
    number: "09",
    label: "Tester sans s’enfermer",
    shortLabel: "Tester",
  },
  {
    id: "cout-complet",
    number: "10",
    label: "Additionner trois ans",
    shortLabel: "Additionner",
  },
  {
    id: "annee-trois",
    number: "11",
    label: "Année 3 et sortie",
    shortLabel: "Sortir",
  },
  {
    id: "decision",
    number: "12",
    label: "Écrire la prochaine action",
    shortLabel: "Décider",
  },
];

const responses = [
  {
    number: "1",
    title: "Sécuriser la continuité et les accès",
    icon: ShieldCheck,
    when: "Une absence, une panne, un compte partagé, une perte de fichier ou une restauration incertaine menace le travail ou les données.",
    next: "Corriger les droits, appliquer la règle du 3-2-1, tester une restauration réelle, puis écrire le fonctionnement dégradé et le retour à la normale.",
    stop: "Ne transformez pas un incident de sécurité en prétexte pour ajouter des fonctions.",
  },
  {
    number: "2",
    title: "Supprimer ou simplifier le processus",
    icon: Trash2,
    when: "L’équipe alimente une étape, un fichier ou une validation dont personne ne sait plus expliquer l’utilité.",
    next: "Retirer l’étape sur une seule équipe et un seul type de dossier, puis vérifier pendant un mois complet que le résultat et les contrôles utiles restent intacts.",
    stop: "N’automatisez pas une habitude inutile\u00a0: vous la rendriez seulement plus rapide et plus difficile à remettre en cause.",
  },
  {
    number: "3",
    title: "Configurer l’outil actuel et former",
    icon: Settings2,
    when: "Le logiciel en place sait peut-être faire le travail, mais la fonction, le paramétrage ou le mode opératoire n’a jamais été essayé sur des cas réels.",
    next: "Configurer un essai, écrire les exceptions rencontrées et regarder l’usage après un mois complet, clôture comprise.",
    stop: "Une démonstration commerciale réussie ne prouve pas que l’équipe tient le rythme un jour chargé.",
  },
  {
    number: "4",
    title: "Connecter ou automatiser de façon limitée",
    icon: Link2,
    when: "Chaque outil remplit correctement son rôle, mais une donnée ou un statut est recopié de façon répétitive entre eux.",
    next: "Tester un seul échange, réversible et reprenable à la main, avec une alerte à chaque échec et un journal lisible par la comptable.",
    stop: "Une connexion sans alerte fabrique des doublons que personne ne voit. Le contrôle doit rester visible.",
  },
  {
    number: "5",
    title: "Tester avant d’adopter un logiciel standard",
    icon: Store,
    when: "Le besoin est courant et un progiciel du secteur paraît plausible\u00a0; il doit couvrir vos trois situations et leurs exceptions avant toute signature.",
    next: "Faire rejouer les trois situations et les exceptions pendant l’essai, vérifier l’export, les droits, le support et le prix au nombre réel de postes, puis n’adopter que si les cas importants passent.",
    stop: "N’écartez pas le standard parce qu’il demande un changement d’habitude raisonnable\u00a0; n’acceptez pas non plus un contournement permanent sur un cas important.",
  },
  {
    number: "6",
    title: "Étudier une fonction sur mesure",
    icon: Wrench,
    when: "Le problème est répété, important et stable\u00a0; les réponses plus simples ont été essayées et ont échoué par écrit\u00a0; un responsable métier peut décider et arrêter un essai.",
    next: "Définir la plus petite fonction qui produit un résultat vérifiable, son mode de reprise à la main et les conditions de sortie.",
    stop: "«\u00a0Notre métier est unique\u00a0» n’est pas une preuve. Trois situations écrites et l’échec documenté des options simples en sont une.",
  },
] as const;

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "definir",
    num: "01",
    label: "Savoir de quoi on parle",
    items: [
      {
        question: "Quelle différence entre un logiciel métier et un ERP\u00a0?",
        answer:
          "Un progiciel de gestion intégré partage un tronc commun entre services\u00a0: achats, stocks, comptabilité, paie. Il gère la ressource. Un logiciel métier porte la règle du geste\u00a0: le délai contractuel d’une intervention, la date limite d’un lot, la pièce qui manque à un dossier. Les deux cohabitent souvent — l’ERP tient la facturation, le logiciel métier tient le terrain, et une connexion relie les deux. Si votre blocage porte sur une règle que seul votre métier applique, l’ERP ne le traitera pas, quel que soit son prix.",
      },
      {
        question:
          "À partir de quel volume un tableur devient-il vraiment risqué\u00a0?",
        answer:
          "Le nombre d’onglets ne décide rien. Trois faits décident\u00a0: deux personnes ouvrent le fichier en même temps, plus personne ne sait expliquer une formule, et aucune restauration n’a été testée depuis plus de douze mois. Ces trois repères sont des règles de travail, pas des normes. Le volume compte au second rang\u00a0: au-delà de quelques milliers de lignes, un tri malheureux devient difficile à annuler. Le calculateur de coût Excel du site chiffre ce que ce fonctionnement vous prend chaque année, avec vos propres heures.",
      },
      {
        question:
          "Combien de signes faut-il pour avoir besoin d’un logiciel métier\u00a0?",
        answer:
          "Il n’existe pas de nombre magique. Un seul risque de continuité — une personne détient tous les accès — justifie une action immédiate, alors que cinq irritations faibles ne justifient aucun achat. Le repère utile est la répétition\u00a0: un fait vu trois fois sur un mois complet cesse d’être une anecdote. Notez la fréquence, la conséquence, les personnes touchées et les corrections déjà essayées, puis chiffrez\u00a0: sur le cas construit de ce guide, 5 heures perdues par semaine et par personne, pour 4 personnes, coûtent 28\u00a0800\u00a0€ par an.",
      },
    ],
  },
  {
    key: "choisir",
    num: "02",
    label: "Choisir la réponse",
    items: [
      {
        question: "Excel suffit-il encore pour gérer mon activité\u00a0?",
        answer:
          "Oui, tant qu’il reste maîtrisé\u00a0: un propriétaire identifié, des droits adaptés, des règles lisibles, une sauvegarde déjà restaurée pour de vrai, et un volume supportable. Beaucoup d’entreprises tiennent ainsi pendant des années sans rien acheter. Le problème apparaît quand le fichier devient critique, opaque ou impossible à reprendre en cas d’absence. Avant de conclure, faites l’addition\u00a0: heures perdues par semaine × 48 semaines × personnes × coût horaire chargé. Le calculateur de coût Excel du site applique cette formule et affiche ses hypothèses.",
      },
      {
        question: "Une double saisie justifie-t-elle un nouvel outil\u00a0?",
        answer:
          "Rarement à elle seule. Vérifiez d’abord si l’étape peut disparaître, si l’outil en place possède déjà la fonction, ou si un seul échange automatisé suffit. Chiffrez ensuite\u00a0: une ressaisie de 5 minutes, 20 fois par semaine, coûte 80 heures par an, soit 2\u00a0400\u00a0€ à un coût horaire chargé de 30\u00a0€. Ce montant se compare au prix d’une connexion, pas au prix d’un logiciel complet. Un nouvel outil ne devient une option qu’après cette vérification, écrite.",
      },
      {
        question:
          "Quand un logiciel standard est-il préférable au sur-mesure\u00a0?",
        answer:
          "Quand le travail est courant, que les exceptions importantes sont couvertes, et que l’export, les droits, le support et le prix au volume réel restent acceptables. Faites-lui rejouer vos trois situations, pas la démonstration préparée par l’éditeur. Le prix se calcule sur votre nombre de postes\u00a0: 12 postes à 19,50\u00a0€ par mois représentent 8\u00a0424\u00a0€ sur trois ans, avant paramétrage, migration et formation. Un progiciel vertical coûte généralement davantage, et son tarif ne s’obtient qu’en le demandant.",
      },
    ],
  },
  {
    key: "durer",
    num: "03",
    label: "Tenir dans le temps",
    items: [
      {
        question: "Combien de temps faut-il compter pour une migration\u00a0?",
        answer:
          "La question à poser n’est pas «\u00a0combien de temps\u00a0» mais «\u00a0quelles données\u00a0». Comptez vos enregistrements, décidez combien d’années vous reprenez, et faites écrire la liste au devis. Sur le cas construit de ce guide, reprendre 300 contrats et 1\u00a0200 équipements à la main représente 300 heures, soit 9\u00a0000\u00a0€ au coût horaire chargé de 30\u00a0€. Une reprise automatisée coûte moins cher, mais seulement si les formats se correspondent. Aucun éditeur sérieux ne donne de délai avant d’avoir vu vos fichiers.",
      },
      {
        question: "Que récupère-t-on exactement quand on quitte un éditeur\u00a0?",
        answer:
          "Ce que le contrat dit, et rien d’autre. Trois questions à poser avant de signer\u00a0: dans quel format, sous quel délai, et à quel prix. Un export en PDF n’est pas une reprise de données\u00a0: il oblige à ressaisir. Un export en CSV ou par interface de programmation permet de repartir. Demandez aussi les pièces jointes, les droits des comptes et la configuration. Sur le cas construit, un export non exploitable transformait la sortie en 300 heures de saisie, soit 9\u00a0000\u00a0€.",
      },
      {
        question: "Faut-il tout centraliser dans une seule application\u00a0?",
        answer:
          "Non. Plusieurs outils bien délimités et reliés proprement se maintiennent souvent mieux qu’une application qui veut tout faire. Centraliser élargit les accès, augmente la dépendance à un seul éditeur et rend la sortie plus coûteuse. Centralisez ce qui améliore un résultat précis et mesurable, laissez le reste où il est. La règle pratique\u00a0: si vous ne savez pas nommer le résultat qu’un regroupement améliore, ce regroupement n’a pas encore de raison d’être.",
      },
    ],
  },
];

function SixResponses() {
  return (
    <ol className="not-prose my-8 grid gap-4">
      {responses.map((response) => {
        const Icon = response.icon;
        return (
          <li
            key={response.number}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="grid sm:grid-cols-[88px_1fr]">
              <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-900 sm:flex-col sm:justify-center sm:border-b-0 sm:border-r">
                <span className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-base font-bold text-white">
                  {response.number}
                </span>
                <Icon
                  className="size-5 text-indigo-700 dark:text-indigo-300"
                  aria-hidden="true"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="mt-0 text-lg font-bold text-zinc-950 dark:text-white">
                  {response.title}
                </h3>
                <dl className="mt-4 grid gap-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-white">
                      Quand l’examiner
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                      {response.when}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-white">
                      Ce qu’il faut vérifier
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                      {response.next}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-white">
                      Ce qui doit vous arrêter
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                      {response.stop}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

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
          { label: "Dirigeants TPE · PME", variant: "neutral" },
          { label: "Diagnostic local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Votre entreprise a‑t‑elle besoin d’un"
        heroTitleEm="logiciel métier&nbsp;?"
        heroDescription="Un logiciel métier porte une règle que ni un tableur, ni un CRM, ni un ERP généraliste ne connaît. Avant d’en acheter un, chiffrez ce que vous coûte le fonctionnement actuel — sur le cas construit de ce guide, 31&nbsp;800&nbsp;€ par an — puis comparez six réponses, de la revue des droits au développement d’une fonction."
        stats={[
          { label: "Situations à noter", value: "3" },
          { label: "Réponses à comparer", value: "6" },
          { label: "Coût annuel du cas", value: "31\u00a0800\u00a0€" },
          { label: "Point mort du cas", value: "9,4\u00a0mois" },
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
          titleStart: "Faire examiner",
          titleEm: "trois situations réelles",
          description:
            "Apportez le travail attendu, le fait observé, sa fréquence, sa conséquence en euros et ce que vous avez déjà essayé. L’échange peut conclure qu’une solution simple suffit.",
          benefits: [
            "Le problème est chiffré avant la technologie",
            "Le standard et l’existant restent de vraies options",
            "Les inconnues sont conservées, pas remplacées par zéro",
          ],
          primaryCtaLabel: "Faire examiner mes trois situations",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "06 60 08 83 51",
          phoneHref: "tel:+33660088351",
        }}
        toc={toc}
        tocLabel="Sommaire du diagnostic"
        mobileCtaLabel="Outils internes"
        sidebarContextCta={{
          eyebrow: "Outils internes",
          title: "Votre problème justifie-t-il un nouvel outil\u00a0?",
          description:
            "Décrivez trois situations sans donnée personnelle, information confidentielle, secret d’affaires ni identifiant d’accès. Le premier échange sert à distinguer sécurisation, simplification, configuration, connexion, standard et étude sur mesure.",
          benefits: [
            "Aucun développement présumé",
            "Réponses déjà testées prises en compte",
            "Une étude commence petit et reste réversible",
          ],
          ctaLabel: "Voir le service outils internes",
          ctaHref: "/services/outils-internes-sur-mesure",
          secondaryLabel: "06 60 08 83 51",
          secondaryHref: "tel:+33660088351",
          badgeLabel: "Premier échange sans garantie de faisabilité",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Décider sans",
          titleEm: "sauter trop vite",
          titleEnd: "vers un nouvel outil.",
          subtitle:
            "Des réponses chiffrées sur la différence avec un ERP, le volume où un tableur devient risqué, la durée d’une migration et ce qu’on récupère en partant.",
          ctaTitle: "Vous avez déjà documenté trois situations\u00a0?",
          ctaDescription:
            "Présentez les faits, leur coût annuel et les réponses testées pour clarifier la prochaine vérification utile.",
          ctaLabel: "Faire examiner mes trois situations",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "CNIL · Règles essentielles",
            href: "https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles",
            description:
              "Page consultée le 28 août 2026. Source de la règle du 3-2-1 citée mot pour mot dans la section 03\u00a0: «\u00a03 copies, sur 2 supports différents, dont 1 déconnectée du réseau\u00a0». La page recommande aussi des tests de restauration réguliers, sans en fixer la fréquence.",
          },
          {
            source: "CNIL · Guide sécurité 2026",
            href: "https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
            description:
              "Version 2024 mise à jour en 2026, fichier consulté le 28 août 2026\u00a0: habilitations, comptes, sauvegardes, tests d’intégrité et de restauration, continuité et reprise. Champ principal\u00a0: données personnelles\u00a0; mesures à proportionner au risque.",
          },
          {
            source: "ANSSI · Sauvegarde, les fondamentaux",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
            description:
              "ANSSI-BP-100, version 1.1 du 27 novembre 2025, consultée le 28 août 2026. Source de la perte de données maximale admissible (PDMA) et de la durée maximale d’interruption admissible (DMIA), du seuil des 24 heures et de la recommandation R22 sur les tests de restauration.",
          },
          {
            source: "INSEE · Coût horaire du travail",
            href: "https://www.insee.fr/fr/statistiques/2381340",
            description:
              "Données 2025 parues le 2 juillet 2026, source Eurostat, consultées le 28 août 2026. Champ\u00a0: France, secteurs marchands B à N de la Nace, entreprises de 10 salariés ou plus. Utilisé comme point de comparaison du coût horaire chargé, pas comme valeur à recopier.",
          },
          {
            source: "impots.gouv.fr · Facturation électronique",
            href: "https://www.impots.gouv.fr/professionnel/questions/partir-de-quand-suis-je-concerne-par-la-reforme-de-la-facturation",
            description:
              "Page modifiée le 16 janvier 2026, consultée le 28 août 2026. Réception obligatoire pour toutes les entreprises au 1ᵉʳ\u00a0septembre 2026\u00a0; émission obligatoire pour les PME et micro-entreprises au 1ᵉʳ\u00a0septembre 2027. Citée comme exemple de règle qui oblige un outil à changer.",
          },
          {
            source: "Notion · tarifs France",
            href: "https://www.notion.com/fr/pricing",
            description:
              "Page tarifaire française relevée le 28 août 2026\u00a0: 0\u00a0€, 9,50\u00a0€ et 19,50\u00a0€ par membre et par mois selon le forfait. Reprise comme repère de prix d’un outil générique par poste\u00a0; le mode de facturation et la TVA restent à confirmer à la commande.",
          },
          {
            source: "RGESN 2024",
            href: "https://ecoresponsable.numerique.gouv.fr/docs/2024/rgesn-mai2024/referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf",
            description:
              "Référentiel consulté le 28 août 2026. Deux questions des critères 1.1 et 1.2 sont reprises\u00a0: nécessité, alternatives non numériques et services existants. Référentiel d’écoconception non contraignant\u00a0; ce guide n’en réalise pas l’évaluation complète et n’en déduit aucune rentabilité.",
          },
          {
            source: "DesignGouv",
            href: "https://design.numerique.gouv.fr/bien-concevoir/",
            description:
              "Page consultée le 28 août 2026. Bonnes pratiques destinées aux services publics\u00a0: partir des besoins et tester avant de développer. Utilisées ici comme méthode de conception transférable, pas comme doctrine PME ni preuve commerciale.",
          },
          {
            source: "France Num · dossier pratique",
            href: "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution",
            description:
              "Dossier mis à jour le 9 juillet 2026, rédigé par Erwan Kezzar (Contournement) et Marc-Olivier Sercki (Pathta), deux acteurs privés du no-code et du logiciel. Seules les méthodes d’observation, de cartographie, de test et de maintenance sont utilisées\u00a0; leurs gains et préférences d’outils ne deviennent pas des règles générales.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title: "Une méthode de chiffrage, pas un audit ni un devis",
          description:
            "Les montants de ce guide sont soit des prix publics de Hagnéré Code, soit des calculs faits sur un cas construit annoncé comme tel. Aucun n’est un devis, aucun n’est une norme de marché. Ce guide ne diagnostique pas un incident cyber, ne valide aucune conformité et ne garantit la faisabilité d’aucun outil. En cas d’incident actif, de perte de données, de fraude, de litige ou d’urgence réglementaire, mobilisez d’abord les responsables et professionnels compétents.",
        }}
        relatedGuides={[
          {
            label: "Quel processus métier automatiser en premier\u00a0?",
            href: "/guides/automatiser-processus-metier",
          },
          {
            label: "Power Apps ou application sur mesure\u00a0: comment choisir\u00a0?",
            href: "/guides/power-apps-ou-application-sur-mesure",
          },
          {
            label: "Rédiger le cahier des charges de votre logiciel",
            href: "/guides/cahier-des-charges-saas",
          },
          {
            label: "MVP\u00a0: quoi inclure dans une première version\u00a0?",
            href: "/guides/mvp-saas-quoi-inclure",
          },
        ]}
        relatedGuidesLabel="4 étapes suivantes possibles"
      >
        <GuidePremiumSection
          id="definition"
          number="01"
          label="Définition"
          readingTime={`${SECTION_READING_MINUTES.definition} min`}
          title="Qu’est-ce qu’un logiciel métier, et qu’est-ce que ce n’est pas&nbsp;?"
        >
          <p>
            Un technicien arrive chez un client avec la mauvaise pièce&nbsp;: la
            chaudière installée n’est pas celle que le fichier indique. Un devis
            part avec un tarif remplacé il y a trois mois. Une facture attend
            qu’on retrouve le bon compte rendu d’intervention. Ces trois faits
            ont un point commun&nbsp;: une règle du métier existe, une personne
            la connaît, et aucun outil ne la porte.
          </p>

          <GuidePremiumMemo
            eyebrow="La réponse en trente secondes"
            title="Chiffrez d’abord, choisissez ensuite"
          >
            <p>
              Un <strong>logiciel métier</strong> porte une règle que votre
              métier applique et qu’aucun outil général ne connaît&nbsp;: le
              délai contractuel d’une intervention, la date limite d’un lot, la
              pièce qui manque à un dossier. Un tableur, un CRM ou un progiciel
              de gestion intégré ne la portent pas — ils la laissent dans la
              tête de quelqu’un. Avant d’en acheter un, chiffrez ce que vous
              coûte votre fonctionnement actuel&nbsp;: heures perdues ×
              coût horaire chargé, plus incidents × coût de reprise. Sur le cas
              construit de ce guide, l’addition donne{" "}
              <strong>31&nbsp;800&nbsp;€ par an</strong>, dont
              28&nbsp;800&nbsp;€ de temps. Ce montant décide de la suite&nbsp;:
              il dit si un budget de 25&nbsp;000&nbsp;€ HT se rembourse en neuf
              mois ou jamais. Comparez ensuite six réponses, de la revue des
              droits d’accès au développement d’une fonction. La septième issue
              est d’attendre, et elle est valable.
            </p>
          </GuidePremiumMemo>

          <p>
            La définition tient en une phrase&nbsp;: un logiciel métier encode
            une règle propre à une activité, au point qu’il refuse ce que la
            règle interdit. Pas une règle de gestion générale — une facture se
            paie à trente jours, un client a une adresse — mais celle que vous
            seriez incapable de retrouver dans un manuel générique. Voici ce
            avec quoi on le confond, et pourquoi.
          </p>

          <ul>
            <li>
              <strong>Le tableur</strong> enregistre&nbsp;; il n’interdit rien.
              Il accepte sans broncher une date de recontrôle dépassée.
            </li>
            <li>
              <strong>Le no-code</strong> — Airtable, Notion, Power Apps —
              construit vite un formulaire et une base. Il tient tant que la
              règle reste simple et que la personne qui l’a montée est encore
              là. Si votre environnement est déjà Microsoft, la comparaison
              entre{" "}
              <Link href="/guides/power-apps-ou-application-sur-mesure">
                Power Apps et une application sur mesure
              </Link>{" "}
              est traitée à part, avec ses limites vérifiées et ses coûts à un,
              trois et cinq ans.
            </li>
            <li>
              <strong>Le CRM</strong> suit la relation commerciale&nbsp;:
              contacts, opportunités, relances. Il ignore si l’intervention
              respecte le délai contractuel.
            </li>
            <li>
              <strong>Le progiciel de gestion intégré</strong>, ou ERP, partage
              un tronc commun entre services&nbsp;: achats, stocks,
              comptabilité. Il gère la ressource, pas le geste.
            </li>
            <li>
              <strong>Le progiciel vertical</strong> est un logiciel métier déjà
              écrit pour un secteur et vendu par abonnement. C’est souvent la
              bonne réponse, et c’est la cinquième de ce guide.
            </li>
            <li>
              <strong>Le développement sur mesure</strong> écrit la règle pour
              vous seul. C’est la réponse la plus chère, et la dernière à
              examiner.
            </li>
          </ul>

          <p>
            Quatre exemples, dans quatre secteurs différents, pour ancrer la
            notion. En <strong>maintenance et installation</strong> — chauffage,
            ascenseurs, sécurité incendie —, la fonction centrale est la
            planification d’interventions&nbsp;: affecter un technicien qualifié
            à une intervention en tenant compte de sa position et du délai
            contractuel. En <strong>agroalimentaire et pharmacie</strong>, c’est
            le suivi de lots&nbsp;: relier un produit fini à ses matières et à
            leurs dates limites, pour rappeler un lot précis en une heure. En{" "}
            <strong>cabinet juridique, comptable ou de courtage</strong>, c’est
            la gestion de dossiers avec pièces et délais&nbsp;: savoir quelle
            pièce manque et quelle échéance tombe la semaine prochaine. En{" "}
            <strong>formation, régie ou location de matériel</strong>, c’est la
            facturation à l’usage&nbsp;: transformer des heures, des kilomètres
            ou des jours de location en lignes de facture justes.
          </p>

          <p>
            Aucun de ces quatre besoins ne se déduit d’un nombre d’onglets ni
            d’une impression de désordre. Ils se déduisent d’un montant. C’est
            l’objet de la section suivante.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cout-actuel"
          number="02"
          label="Arithmétique"
          readingTime={`${SECTION_READING_MINUTES.coutActuel} min`}
          title="Combien vous coûte, en euros, la situation actuelle&nbsp;?"
        >
          <p>
            La plupart des dossiers logiciels commencent par le prix de la
            solution. C’est l’ordre inverse du bon. Le seul montant que vous
            pouvez établir seul, aujourd’hui, sans demander un devis à personne,
            c’est celui de votre fonctionnement actuel. Il sert de dénominateur
            à toutes les comparaisons qui suivent.
          </p>

          <FormulaBox>{`Coût horaire chargé     = coût annuel employeur ÷ 1\u00a0600 h productives
Heures perdues par an   = heures par semaine × 48 semaines × personnes concernées
Coût annuel du temps    = heures perdues × coût horaire chargé
Coût annuel des erreurs = incidents par an × coût de reprise d’un incident
Point mort (en mois)    = budget envisagé ÷ coût annuel total × 12`}</FormulaBox>

          <p>
            Deux nombres de cette formule sont des{" "}
            <strong>hypothèses de travail</strong>, pas des constantes légales,
            et elles sont annoncées comme telles. Les{" "}
            <strong>1&nbsp;600 heures productives</strong> approchent les
            1&nbsp;607 heures de la durée annuelle de référence d’un temps plein
            à 35&nbsp;heures&nbsp;; on ne retranche donc pas les congés une
            seconde fois. Les <strong>48&nbsp;semaines</strong> sont
            52&nbsp;semaines moins cinq de congés et de jours fériés, arrondies.
            Si ces deux valeurs ne correspondent pas à votre entreprise,
            remplacez-les&nbsp;: le reste du calcul ne bouge pas.
          </p>

          <p>
            Déroulons-le sur le cas construit que ce guide suit du début à la
            fin. Quatre personnes sont touchées&nbsp;: la coordinatrice de
            planning, la comptable et deux chargés d’affaires. Le coût annuel
            employeur retenu est de <strong>48&nbsp;000&nbsp;€</strong> par
            personne — c’est le chiffre que vous lisez sur votre compte de
            résultat, salaire brut et cotisations patronales comprises, pas un
            salaire net.
          </p>

          <ul>
            <li>
              Coût horaire chargé&nbsp;: 48&nbsp;000&nbsp;€ ÷ 1&nbsp;600&nbsp;h
              = <strong>30&nbsp;€ de l’heure</strong>.
            </li>
            <li>
              Heures perdues&nbsp;: 5&nbsp;h par semaine et par personne —
              ressaisie, recherche de la bonne version, relances — ×
              48&nbsp;semaines × 4&nbsp;personnes ={" "}
              <strong>960&nbsp;heures par an</strong>.
            </li>
            <li>
              Coût annuel du temps&nbsp;: 960&nbsp;h × 30&nbsp;€ ={" "}
              <strong>28&nbsp;800&nbsp;€</strong>.
            </li>
            <li>
              Coût annuel des erreurs&nbsp;: 12&nbsp;incidents × 250&nbsp;€ de
              reprise = <strong>3&nbsp;000&nbsp;€</strong>.
            </li>
            <li>
              Total&nbsp;: <strong>31&nbsp;800&nbsp;€ par an</strong>, soit
              95&nbsp;400&nbsp;€ sur trois ans.
            </li>
            <li>
              Point mort face à un budget de 25&nbsp;000&nbsp;€ HT&nbsp;:
              25&nbsp;000 ÷ 31&nbsp;800 × 12 = <strong>9,4&nbsp;mois</strong>.
            </li>
          </ul>

          <p>
            Le coût horaire de 30&nbsp;€ mérite une vérification extérieure.
            L’INSEE publie un coût horaire du travail de{" "}
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              44,7&nbsp;€ en 2025 pour l’ensemble des secteurs marchands
            </a>
            , 47,7&nbsp;€ dans l’industrie et 39,9&nbsp;€ dans la construction,
            sur le champ des entreprises de 10&nbsp;salariés ou plus. Nos
            30&nbsp;€ sont en dessous, ce qui est cohérent pour des fonctions
            non-cadres d’une PME de services. Si vos cinq heures hebdomadaires
            sont celles d’un chef de projet, d’un DSI ou d’un expert-comptable,
            remontez le coût horaire — et le total avec lui.
          </p>

          <InfoBox
            variant="amber"
            title="28&nbsp;800&nbsp;€ de temps ne sont pas 28&nbsp;800&nbsp;€ de trésorerie"
          >
            <p>
              Ces 960&nbsp;heures ne redeviennent de l’argent que si vous
              supprimez un poste, renoncez à une embauche ou vendez ces heures à
              un client. Sinon, ce que vous récupérez est de la{" "}
              <strong>capacité</strong>, pas de la trésorerie. Confondre les
              deux est la première erreur du dossier qu’on présente à son
              expert-comptable ou à son contrôleur de gestion, et c’est celle
              qui fait tomber un budget en réunion. Écrivez les deux lignes
              séparément.
            </p>
          </InfoBox>

          <p>
            Refaites l’opération avec vos propres nombres&nbsp;: elle prend
            trois minutes. Le{" "}
            <Link href="/outils/calculateur-cout-excel">
              calculateur de coût Excel du site
            </Link>{" "}
            applique exactement cette formule, affiche ses hypothèses et compare
            le résultat sur trois ans. Il ne remplace pas le diagnostic&nbsp;:
            il en fournit le dénominateur.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="securiser"
          number="03"
          label="Continuité"
          readingTime={`${SECTION_READING_MINUTES.securiser} min`}
          title="Que faut-il sécuriser avant d’ajouter une fonction&nbsp;?"
        >
          <p>
            Un montant annuel ne sert à rien si un départ ou une panne rend les
            dossiers indisponibles la semaine prochaine. Avant tout achat,
            quatre questions&nbsp;: qui possède les comptes&nbsp;? qui sait
            restaurer la dernière version utile&nbsp;? que fait l’équipe pendant
            l’indisponibilité&nbsp;? qui reçoit l’alerte&nbsp;? Ces réponses
            appartiennent à des personnes nommées — l’administrateur des
            comptes, l’hébergeur, l’intégrateur, et le délégué à la protection
            des données quand il y en a un.
          </p>

          <p>
            Pour les traitements de données personnelles, la{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noreferrer"
            >
              CNIL recommande de limiter les habilitations au besoin d’en
              connaître
            </a>
            , de réexaminer les droits et d’éviter les comptes partagés sauf
            exception encadrée. Cela vise d’abord les données personnelles&nbsp;;
            la même discipline reste utile pour savoir qui peut modifier une
            commande, un prix ou une validation.
          </p>

          <GuideTable
            caption="Cinq contrôles à traiter avant la décision d’investissement"
            headers={["Risque observé", "Question immédiate", "Preuve attendue"]}
            rows={[
              [
                "Compte partagé ou droits trop larges",
                "Qui a réellement besoin de lire, modifier, valider ou administrer\u00a0?",
                "Comptes nominatifs, droits revus et suppression testée",
              ],
              [
                "Fichier ou base critique",
                "Existe-t-il 3 copies, sur 2 supports, dont 1 déconnectée\u00a0?",
                "Intégrité vérifiée, restauration réussie, prochain essai daté",
              ],
              [
                "Absence d’une personne clé",
                "Qui reprend le travail sans son mot de passe ni sa mémoire\u00a0?",
                "Procédure courte jouée par une autre personne",
              ],
              [
                "Panne de l’outil ou de la connexion",
                "Combien d’heures l’activité tient-elle sans lui\u00a0?",
                "Durée écrite, actions manuelles listées, rattrapage prévu",
              ],
              [
                "Modification importante impossible à rattacher",
                "Peut-on relier l’action à une personne, un moment et une version\u00a0?",
                "Finalité, actions journalisées, accès, durée de conservation et information des utilisateurs définis",
              ],
            ]}
          />

          <p>
            La deuxième ligne cite une règle que la plupart des dossiers
            oublient d’écrire. La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles"
              target="_blank"
              rel="noreferrer"
            >
              CNIL la formule ainsi
            </a>
            , sur sa page consultée le 28&nbsp;août 2026&nbsp;:{" "}
            <strong>
              «&nbsp;Appliquez la règle du 3-2-1&nbsp;: 3&nbsp;copies, sur
              2&nbsp;supports différents, dont 1&nbsp;déconnectée du réseau.&nbsp;»
            </strong>{" "}
            Le{" "}
            <a
              href="https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf"
              target="_blank"
              rel="noreferrer"
            >
              guide de sécurité de la CNIL
            </a>{" "}
            y ajoute des tests réguliers d’intégrité et de restauration. Ni l’un
            ni l’autre ne donne de fréquence chiffrée. Nous appliquons donc
            une règle de travail interne, qui n’est pas une norme&nbsp;:{" "}
            <strong>une restauration réellement rejouée tous les six mois</strong>,
            plus une après chaque changement d’outil ou d’hébergeur.
          </p>

          <p>
            Deux durées se fixent avant tout achat, et l’ANSSI leur donne un
            nom. La{" "}
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              perte de données maximale admissible et la durée maximale
              d’interruption admissible
            </a>{" "}
            répondent à deux questions de dirigeant&nbsp;: quelle quantité de
            travail acceptez-vous de reperdre, et combien de temps l’activité
            tient-elle sans l’outil&nbsp;? Le guide ANSSI-BP-100 du
            27&nbsp;novembre 2025 précise qu’en dessous de{" "}
            <strong>24&nbsp;heures</strong> de perte admissible, la sauvegarde
            ne suffit plus et qu’il faut regarder du côté de la réplication. Sur
            le cas construit, la direction a fixé <strong>4&nbsp;heures</strong>{" "}
            d’interruption maximale — au-delà, les neuf techniciens partent sans
            leur tournée — et <strong>24&nbsp;heures</strong> de perte
            admissible, soit une journée de comptes rendus rattrapable à la
            main.
          </p>

          <InfoBox
            variant="amber"
            title="Sécuriser ne veut pas dire lancer un développement"
          >
            <p>
              Une revue des droits, une sauvegarde réellement restaurée, une
              procédure d’absence et une alerte corrigent l’urgence avec l’outil
              actuel, pour quelques jours de travail interne. Comptez 2 à
              4&nbsp;jours d’administrateur à 8&nbsp;heures, soit 480 à
              960&nbsp;€ au coût
              horaire chargé de 30&nbsp;€ du cas ci-dessus. Le socle plus
              complet à exiger avant une mise en service — journaux, alertes,
              responsables nommés — est détaillé dans le guide{" "}
              <Link href="/guides/securite-application-metier">
                sécurité d’une application métier
              </Link>
              .
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="trois-situations"
          number="04"
          label="Fiche de travail"
          readingTime={`${SECTION_READING_MINUTES.troisSituations} min`}
          title="Documentez trois situations réelles sans envoyer vos données"
        >
          <p>
            «&nbsp;Nous perdons beaucoup de temps&nbsp;» ne se vérifie pas.
            Choisissez trois événements ordinaires sur{" "}
            <strong>un mois complet</strong>, clôture ou pic d’activité compris
            — un mois tronqué produit une moyenne fausse. Demandez à la personne
            qui fait le travail de décrire le cas normal, puis ce qui a créé le
            blocage. La version du dirigeant ne suffit pas, et celle du
            développeur encore moins.
          </p>

          <p>
            Un fait vu <strong>trois fois</strong> sur ce mois cesse d’être une
            anecdote&nbsp;: il devient un motif. Vu une seule fois, il reste un
            incident à noter, pas une preuve. Comptez 30 à 45&nbsp;minutes pour
            remplir les trois fiches ci-dessous — c’est du temps de travail, pas
            du temps de lecture.
          </p>

          <p>
            Un{" "}
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noreferrer"
            >
              dossier pratique hébergé par France Num
            </a>{" "}
            propose d’observer les ressaisies, la fréquence, la durée, le nombre
            de personnes, la complexité et l’impact d’une erreur. Ce dossier est
            rédigé par Erwan Kezzar de Contournement et Marc-Olivier Sercki de
            Pathta, deux acteurs privés du no-code et du développement&nbsp;:
            nous retenons la méthode d’observation, pas leurs gains ni leurs
            préférences d’outils comme règles générales.
          </p>

          <SituationDiagnosticTool />

          <p>
            Chaque fiche remplie donne les entrées du calcul de la section
            02&nbsp;: le nombre de personnes touchées, les heures par semaine et
            le nombre d’incidents. Comparez ensuite les trois. Un problème
            répété à faible conséquence n’appelle pas la même réponse qu’un
            événement rare capable d’arrêter les opérations. Une même entreprise
            peut donc sécuriser la première situation, simplifier la deuxième et
            continuer d’observer la troisième.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="six-reponses"
          number="05"
          label="Options"
          readingTime={`${SECTION_READING_MINUTES.sixReponses} min`}
          title="Six réponses, leur coût et leur délai"
        >
          <p>
            Suivez cet ordre pour ne pas transformer le diagnostic en argument
            commercial. Traitez d’abord la continuité, puis le travail
            inutile&nbsp;; gardez la fonction sur mesure pour la fin.
            Arrêtez-vous dès qu’une réponse traite correctement les trois
            situations et leurs exceptions importantes.
          </p>

          <p>
            Le{" "}
            <a
              href="https://ecoresponsable.numerique.gouv.fr/docs/2024/rgesn-mai2024/referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Référentiel général d’écoconception des services numériques
              (RGESN) 2024
            </a>{" "}
            demande d’examiner la nécessité, les alternatives non numériques et
            les services existants. C’est ici un garde-fou de conception, pas
            une évaluation complète du RGESN, une preuve de rentabilité ni une
            obligation générale de renoncer à développer.
          </p>

          <SixResponses />

          <figure className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-[#f4f1e8] dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={`${pagePath}/article-diagnostic-16x9.svg`}
              width={1600}
              height={900}
              unoptimized
              alt="Trois fiches de situations concrètes orientées vers six réponses, de la sécurisation à l’étude sur mesure"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 bg-white px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 sm:px-5">
              Le diagnostic part du travail réel. La flèche ne pointe vers le
              sur-mesure qu’après l’examen des réponses plus simples.
            </figcaption>
          </figure>

          <GuideTable
            caption="Ordre de grandeur du coût et durée d’observation avant un résultat vérifiable"
            headers={[
              "Réponse",
              "Ordre de grandeur du coût",
              "Délai avant un résultat vérifiable",
            ]}
            rows={[
              [
                "1 · Sécuriser",
                "Surtout du temps interne\u00a0: 2 à 4 jours d’administrateur à 8\u00a0heures, soit 480 à 960\u00a0€ au coût horaire de 30\u00a0€ du cas. Le cadrage Sécurité & RGPD de Hagnéré Code est publié à 5\u00a0000\u00a0€ HT (page /tarifs, 28 août 2026).",
                "2 à 4 semaines\u00a0: le repère est la première restauration réussie, pas la date d’achat.",
              ],
              [
                "2 · Supprimer l’étape",
                "0\u00a0€ d’achat. Le coût est celui de la décision et du contrôle\u00a0: quelques heures de chef de projet.",
                "1 mois complet après le retrait, pour vérifier que rien d’utile n’est tombé avec.",
              ],
              [
                "3 · Configurer et former",
                "0\u00a0€ de licence si la fonction est déjà comprise dans votre abonnement. L’audit de processus de Hagnéré Code est publié à 990\u00a0€ HT pour 1 jour (page /tarifs, 28 août 2026).",
                "1 à 2 mois d’usage réel, clôture comprise, avant de conclure.",
              ],
              [
                "4 · Connecter",
                "Cadrage payé à partir de 1\u00a0500\u00a0€ HT (Discovery Sprint, 2 jours). Un workflow automatisé est publié entre 8\u00a0000 et 15\u00a0000\u00a0€ HT.",
                "Un mois d’échanges réels avec alertes actives\u00a0; les doublons se voient à la clôture, pas le premier jour.",
              ],
              [
                "5 · Standard",
                "Prix affiché par poste × postes × 12. Repère générique relevé le 28 août 2026\u00a0: 9,50 à 19,50\u00a0€ par membre et par mois. Un progiciel vertical se situe au-dessus et ne publie pas son tarif.",
                "Un essai couvrant vos trois situations et leurs exceptions, puis un mois complet avant signature.",
              ],
              [
                "6 · Sur mesure",
                "Au-delà de 8\u00a0000\u00a0€ HT de projet, cadrage payé systématique. Forfaits publiés\u00a0: 8\u00a0000\u00a0€ HT pour un processus ciblé sur une équipe, 25\u00a0000\u00a0€ HT pour un CRM ou ERP léger avec intégrations, 80\u00a0000\u00a0€ HT pour un outil multi-services avec authentification unique.",
                "Le premier résultat vérifiable est la plus petite fonction livrée, pas la mise en service complète.",
              ],
            ]}
          />

          <p>
            Une précision s’impose sur la troisième colonne. Elle donne{" "}
            <strong>la durée d’observation que vous imposez</strong>, celle que
            vous contrôlez — pas un délai de livraison. Le délai de livraison
            dépend de vos données, de vos exceptions et de la disponibilité de
            vos équipes, et c’est pour cette raison que la{" "}
            <Link href="/tarifs">grille tarifaire de Hagnéré Code</Link> publie
            des prix mais écrit «&nbsp;planning confirmé après cadrage&nbsp;».
            Un fournisseur qui vous annonce une date avant d’avoir vu vos
            fichiers vous annonce un souhait. Faites écrire la date au devis,
            après le cadrage, avec ce qui la conditionne. Si la réponse retenue
            est la quatrième, le choix du premier candidat est traité dans le
            guide{" "}
            <Link href="/guides/automatiser-processus-metier">
              quel processus métier automatiser en premier
            </Link>
            .
          </p>

          <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">
              Verdict possible · hors décompte
            </p>
            <h3 className="mt-2 text-lg font-bold text-amber-950 dark:text-amber-100">
              OBSERVER&nbsp;: ne pas choisir de solution tant que les faits manquent
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
              Notez la période, la fréquence, la conséquence et la date de
              réexamen. «&nbsp;Observer&nbsp;» n’est pas une septième réponse
              technique&nbsp;: c’est la décision de ne pas investir sur la base
              d’une impression ou d’un processus encore mouvant. Ce n’est pas
              une septième solution à acheter&nbsp;: un faux signal ne mérite
              aucune des six réponses, il mérite un mois d’observation de plus.
            </p>
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="contre-cas"
          number="06"
          label="Contre-cas"
          readingTime={`${SECTION_READING_MINUTES.contreCas} min`}
          title="Quand un nouveau logiciel serait-il prématuré&nbsp;?"
        >
          <p>
            Les signaux visibles sur le terrain ont souvent plusieurs causes. Un
            tableau n’est pas «&nbsp;trop gros&nbsp;» parce qu’il possède un
            nombre donné d’onglets&nbsp;; il devient risqué lorsqu’il est
            critique, opaque, mal protégé ou impossible à reprendre. Les six
            situations ci-dessous portent chacune le fait chiffré qui les
            déclenche. Ces repères sont des règles de travail, pas des normes.
          </p>

          <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Excel ou l’outil actuel suffit",
                text: "Un propriétaire identifié, une seule personne à la fois dans le fichier, moins de 5\u00a0000 lignes et une restauration réussie dans les 6 derniers mois. Documentez et surveillez\u00a0; ne remplacez pas pour moderniser l’apparence.",
              },
              {
                title: "Le standard peut être préférable",
                text: "Vos exceptions représentent moins de 1 dossier sur 20 et l’export reste possible. Un progiciel du secteur s’essaie sans rien développer\u00a0; son délai de mise en service reste à confirmer après paramétrage, migration et formation.",
              },
              {
                title: "La sécurité passe avant",
                text: "Une seule personne détient tous les accès, ou aucune restauration n’a été testée depuis plus de 12 mois, ou un compte partagé permet de modifier un prix. Corrigez cela avant de choisir un outil.",
              },
              {
                title: "Il faut attendre",
                text: "Le problème n’apparaît que pendant un pic, 2 mois sur 12, ou l’organisation a moins de 6 mois. Fixez une période d’observation d’un mois complet et une date de réexamen, puis revenez avec des faits.",
              },
              {
                title: "Le sur-mesure est prématuré",
                text: "Aucun essai de plus de 4 semaines n’a été mené sur l’existant ou sur un standard, personne ne porte les règles, et la demande se résume à «\u00a0tout centraliser\u00a0». Une étude produirait surtout des hypothèses.",
              },
              {
                title: "Le processus doit disparaître",
                text: "Le fichier alimenté par cette saisie n’a pas été ouvert depuis 90 jours. Retirez l’étape sur une équipe et un type de dossier, vérifiez le contrôle utile pendant un mois, puis arrêtez-vous si le résultat tient.",
              },
            ].map((counterCase) => (
              <div
                key={counterCase.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white">
                  <CheckCircle2
                    className="size-4 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  {counterCase.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {counterCase.text}
                </p>
              </div>
            ))}
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-construit"
          number="07"
          label="Application"
          readingTime={`${SECTION_READING_MINUTES.cas} min`}
          title="Le cas de Nadia&nbsp;: de la fiche à la décision"
        >
          <p>
            Nadia dirige une entreprise de maintenance de chauffage et de
            climatisation à Besançon. Quatorze salariés&nbsp;: neuf techniciens
            itinérants, une coordinatrice de planning, une comptable, deux
            chargés d’affaires. Environ <strong>700 interventions par mois</strong>
            , 300 contrats d’entretien en cours et 1&nbsp;200 équipements suivis.{" "}
            <em>
              Exemple construit à partir des fourchettes citées dans ce guide —
              ce n’est pas un dossier client.
            </em>{" "}
            Aucun résultat n’y est mesuré et aucun gain n’en est déduit.
          </p>

          <p>
            Ses trois fiches, remplies sur le mois d’avril, clôture comprise, ne
            racontent pas la même histoire.
          </p>

          <ul>
            <li>
              <strong>Situation 1 · le planning.</strong> Quand la coordinatrice
              est absente, personne ne peut modifier la tournée ni retrouver la
              dernière version du fichier. Vu 2 fois en un mois, avec 9
              techniciens à l’arrêt une demi-journée.
            </li>
            <li>
              <strong>Situation 2 · la facture.</strong> Le compte rendu
              d’intervention est ressaisi dans l’outil de facturation. Vu tous
              les jours&nbsp;: c’est l’essentiel des 5 heures hebdomadaires par
              personne du calcul de la section 02.
            </li>
            <li>
              <strong>Situation 3 · la validation.</strong> Chaque chargé
              d’affaires valide les devis à sa façon. Vu 4 fois, sans
              conséquence chiffrable&nbsp;: verdict OBSERVER.
            </li>
          </ul>

          <p>
            L’addition de la section 02 donne{" "}
            <strong>31&nbsp;800&nbsp;€ par an</strong>, dont 28&nbsp;800&nbsp;€ de
            temps sur 960&nbsp;heures et 3&nbsp;000&nbsp;€ de reprises d’erreurs.
            La première situation relève de la réponse&nbsp;1, la deuxième des
            réponses 4 ou 5, la troisième d’aucune.
          </p>

          <p>
            Ce total est un <strong>plancher</strong>, et il faut le dire ainsi.
            Il ne compte que la situation&nbsp;2 et ses quatre personnes. Les
            deux demi-journées où neuf techniciens attendent leur tournée,
            soit 36&nbsp;heures, n’y figurent pas. Les ajouter ferait monter le
            total, jamais descendre&nbsp;: c’est ce qui rend un chiffrage
            partiel utilisable en réunion, à condition d’écrire ce qu’il laisse
            dehors.
          </p>

          <GuidePremiumCase
            initial="N"
            eyebrow="Exemple construit · le moment où la réponse évidente tombe"
            title="Le progiciel du secteur traite deux situations sur trois, et pas la plus chère"
          >
            <p>
              Nadia part sur la réponse&nbsp;5&nbsp;: un progiciel de gestion
              d’interventions, essayé six semaines avec quatre personnes. Le
              planning partagé règle la situation 1. Les comptes rendus se
              saisissent sur mobile&nbsp;: bon point. Puis la comptable rejoue
              la situation 2 et l’essai s’arrête net —{" "}
              <strong>
                le progiciel exporte un bon d’intervention en PDF, pas les
                lignes de main-d’œuvre et de pièces
              </strong>
              . La ressaisie qui coûtait le plus cher reste entière. Deux
              situations sur trois traitées, et pas celle qui portait les
              28&nbsp;800&nbsp;€.
            </p>
            <p className="mt-3">
              La décision n’est pas d’abandonner le progiciel. Elle est de le
              retenir pour le planning, et de traiter la facturation par une
              connexion limitée entre les deux outils — réponse&nbsp;4 —, avec
              une alerte à chaque échec d’échange. L’ordre des six réponses
              n’avait pas été suivi&nbsp;; l’essai l’a rétabli en six semaines
              et pour le prix de l’essai.
            </p>
          </GuidePremiumCase>

          <p>
            Ce qui a sauvé le dossier n’est pas la qualité du progiciel, c’est
            d’avoir fait rejouer les trois situations pendant l’essai plutôt que
            la démonstration commerciale. Trois quarts d’heure de préparation
            ont évité un contrat annuel de 2&nbsp;808&nbsp;€ sur douze postes
            qui laissait le problème principal intact.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="ce-qui-rate"
          number="08"
          label="Échecs"
          readingTime={`${SECTION_READING_MINUTES.ceQuiRate} min`}
          title="Ce qui rate, et ce que ça coûte"
        >
          <p>
            Les trois incidents ci-dessous sont chiffrés sur le cas construit de
            Nadia, avec ses propres nombres&nbsp;: 4 personnes, 30&nbsp;€ de
            coût horaire chargé, 700 interventions par mois. Aucun n’est repris
            d’un dossier client. Ce sont les trois manières les plus banales de
            transformer un bon diagnostic en mauvaise dépense.
          </p>

          <ol className="guide-checklist">
            <li>
              <strong>
                L’adoption ne vient pas et le fichier parallèle survit.
              </strong>{" "}
              Deux des quatre personnes continuent de tenir leur tableur
              «&nbsp;le temps que ça se stabilise&nbsp;». Le gain tombe de
              960&nbsp;à 480&nbsp;heures, soit 14&nbsp;400&nbsp;€ au lieu de
              28&nbsp;800&nbsp;€. Le coût annuel évité passe de
              31&nbsp;800&nbsp;€ à 17&nbsp;400&nbsp;€, et le point mort d’un
              budget de 25&nbsp;000&nbsp;€ HT recule de{" "}
              <strong>9,4 à 17,2&nbsp;mois</strong>. Le signal se voit en trois
              semaines&nbsp;: demandez qui ouvre encore l’ancien fichier.
            </li>
            <li>
              <strong>La reprise de l’historique n’était pas au devis.</strong>{" "}
              Le devis dit «&nbsp;migration des données&nbsp;» sans dire
              lesquelles. À la mise en service, la base clients est reprise, pas
              les 18&nbsp;mois de comptes rendus dont les techniciens ont besoin
              sur place. L’ancien outil reste ouvert en lecture&nbsp;: deux
              personnes font l’aller-retour une heure par semaine pendant
              18&nbsp;mois, soit 1&nbsp;×&nbsp;48&nbsp;×&nbsp;2&nbsp;×&nbsp;1,5
              = <strong>144&nbsp;heures</strong>, ou{" "}
              <strong>4&nbsp;320&nbsp;€</strong>, auxquels s’ajoute
              l’abonnement de l’ancien outil, dû tant qu’il reste ouvert. C’est
              exactement le poste «&nbsp;double exploitation&nbsp;» du tableau
              de la section 10.
            </li>
            <li>
              <strong>La connexion silencieuse fabrique des doublons.</strong>{" "}
              L’échange entre planification et facturation recopie un statut
              sans alerte. Une intervention sur vingt crée un doublon&nbsp;:
              1&nbsp;050 interventions en six semaines donnent{" "}
              <strong>52&nbsp;doublons</strong> découverts à la clôture. Environ
              22&nbsp;heures de correction, soit <strong>660&nbsp;€</strong>,
              9&nbsp;factures parties en double chez des clients et une clôture
              mensuelle décalée de 4&nbsp;jours. Une alerte par échec d’échange
              est une ligne de devis&nbsp;; sa reprise est un projet.
            </li>
          </ol>

          <InfoBox variant="blue" title="Le point commun des trois">
            <p>
              Aucun de ces trois incidents n’est technique. Le premier est un
              problème d’adoption, le deuxième un problème de rédaction de
              devis, le troisième un problème de contrôle visible. Ils se
              préviennent au moment où l’on écrit ce qu’on achète, pas au moment
              où l’on développe. C’est la raison d’être du pilote décrit à la
              section suivante.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="pilote"
          number="09"
          label="Réduction du risque"
          readingTime={`${SECTION_READING_MINUTES.pilote} min`}
          title="Testez sur un cas restreint, réversible et facile à arrêter"
        >
          <p>
            Même avec une orientation claire, ne passez pas directement au
            déploiement. Pour les réponses 3 à 6, transformez l’hypothèse en
            essai&nbsp;: <strong>6 à 8&nbsp;semaines</strong> incluant une
            clôture, <strong>3 à 5&nbsp;utilisateurs représentatifs</strong>{" "}
            dont au moins un qui n’a rien demandé, un seul résultat métier, des
            cas normaux et des exceptions, une reprise à la main et une date de
            décision.
          </p>

          <p>
            Un pilote a un prix, que les dossiers oublient de compter. Trois
            personnes mobilisées deux heures par semaine pendant huit semaines
            font 48&nbsp;heures, soit <strong>1&nbsp;440&nbsp;€</strong> au coût
            horaire chargé de 30&nbsp;€ du cas construit. Ajoutez le cadrage
            payé s’il y en a un — 1&nbsp;500&nbsp;€ HT pour un Discovery Sprint
            de deux jours, prix publié. Trois mille euros dépensés pour écarter un
            engagement de 25&nbsp;000&nbsp;€ restent la meilleure ligne du
            dossier.
          </p>

          <p>
            La page{" "}
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noreferrer"
            >
              DesignGouv recommande de partir des besoins et de tester avant de
              développer
            </a>
            . Ces bonnes pratiques visent les services publics&nbsp;; nous les
            utilisons seulement comme méthode de conception transférable.
          </p>

          <GuideTable
            caption="Contrat minimal d’un pilote"
            headers={["À écrire avant", "Exemple de formulation", "Preuve de sortie"]}
            rows={[
              [
                "Résultat",
                "Le dossier validé est disponible sans ressaisie et avec son statut correct",
                "Cas normaux et exceptions rejoués",
              ],
              [
                "Cadre",
                "Une équipe, un type de dossier, 6 à 8 semaines dont une clôture",
                "Liste exacte des utilisateurs et cas inclus",
              ],
              [
                "Responsable",
                "Une personne tranche les règles et accepte le résultat",
                "Nom, remplaçant et décisions datées",
              ],
              [
                "Reprise",
                "En cas d’échec, l’équipe traite le dossier à la main sans doublon",
                "Retour au manuel essayé, rattrapage et retour à la normale prévus",
              ],
              [
                "Arrêt",
                "Le pilote s’arrête si une erreur importante échappe au contrôle ou si le fichier parallèle persiste",
                "Décision d’arrêt exécutable, accès et données récupérables",
              ],
              [
                "Suite",
                "Continuer, corriger, choisir une autre réponse ou abandonner",
                "Décision écrite, inconnues restantes et prochain responsable",
              ],
            ]}
          />

          <p>
            Ce tableau se remplit avant de commencer, jamais pendant. La ligne
            «&nbsp;Arrêt&nbsp;» est celle qui coûte le plus cher quand elle est
            vide&nbsp;: sans elle, le pilote devient un déploiement par inertie.
            Testez aussi l’indisponibilité, un droit refusé, une donnée
            manquante, un doublon et le retour au manuel. Le développeur ne doit
            pas être seul à constater que son outil fonctionne&nbsp;; pour
            transformer ces vérifications en preuves reprises dans la recette, le
            guide{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette d’une application métier
            </Link>{" "}
            en donne la chaîne complète.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cout-complet"
          number="10"
          label="Économie"
          readingTime={`${SECTION_READING_MINUTES.coutComplet} min`}
          title="Que faut-il compter au-delà du devis ou de l’abonnement&nbsp;?"
        >
          <p>
            Le coût total de possession regroupe les dépenses et le temps
            interne nécessaires pour mettre en place, exploiter, faire évoluer
            puis quitter une solution sur une même durée. Douze familles le
            composent. Le tableau ci-dessous les remplit sur trois ans, pour le
            cas de Nadia, dans les trois colonnes qui l’intéressent. Chaque case
            porte l’un de trois états&nbsp;: un montant connu, «&nbsp;sans
            objet&nbsp;» quand la famille a été examinée et ne s’applique pas,
            «&nbsp;inconnu&nbsp;» quand la réponse doit être demandée. Un
            inconnu ne vaut jamais zéro.
          </p>

          <GuideTable
            caption="Coût total de possession à 3 ans du cas construit, par famille et par option"
            headers={[
              "Famille (36 mois)",
              "Statu quo",
              "Standard, 12 postes",
              "Sur mesure",
            ]}
            rows={[
              [
                "1 · Cadrage",
                "Sans objet",
                "Inconnu",
                "1\u00a0500\u00a0€ (Discovery Sprint publié)",
              ],
              [
                "2 · Paramétrage ou réalisation",
                "Sans objet",
                "Inconnu",
                "25\u00a0000 à 80\u00a0000\u00a0€ (repères publiés)",
              ],
              [
                "3 · Migration",
                "Sans objet",
                "Inconnu\u00a0: exiger la liste de ce qui est repris",
                "Inconnu\u00a0: même exigence",
              ],
              ["4 · Intégrations", "Sans objet", "Inconnu", "Inconnu"],
              ["5 · Formation et changement", "Sans objet", "Inconnu", "Inconnu"],
              [
                "6 · Temps interne",
                "95\u00a0400\u00a0€ (86\u00a0400\u00a0€ de temps + 9\u00a0000\u00a0€ d’erreurs)",
                "Inconnu",
                "Inconnu",
              ],
              [
                "7 · Double exploitation",
                "Sans objet",
                "4\u00a0320\u00a0€ si l’historique n’est pas repris sur 18 mois",
                "4\u00a0320\u00a0€ dans le même cas",
              ],
              [
                "8 · Licences ou hébergement",
                "Vos abonnements actuels, que vous seul connaissez",
                "8\u00a0424\u00a0€ (12 × 19,50\u00a0€ × 36)",
                "Inconnu\u00a0: hébergement à confirmer",
              ],
              ["9 · Support et maintenance", "Sans objet", "Inconnu", "Inconnu"],
              [
                "10 · Sécurité et conformité",
                "0\u00a0€ engagé à ce jour, ce qui est précisément le problème",
                "Inconnu",
                "Inconnu",
              ],
              ["11 · Évolutions", "Sans objet", "Inconnu", "Inconnu"],
              [
                "12 · Sortie et réversibilité",
                "Sans objet",
                "Inconnu\u00a0: 9\u00a0000\u00a0€ si l’export ne rend que des PDF",
                "Inconnu\u00a0: dépend du dépôt de code et des droits",
              ],
            ]}
          />

          <p>
            Lisez d’abord les totaux partiels, ils disent l’essentiel. Le statu
            quo totalise <strong>95&nbsp;400&nbsp;€ sur trois ans</strong> avec
            une seule inconnue, vos abonnements actuels — que vous pouvez lire
            ce soir sur vos factures. Le standard totalise{" "}
            <strong>8&nbsp;424&nbsp;€ de lignes connues sur douze familles</strong>
            , dont neuf restent à demander. Le sur-mesure totalise{" "}
            <strong>26&nbsp;500 à 51&nbsp;500&nbsp;€ de lignes connues</strong>,
            dont neuf restent à demander. Autrement dit&nbsp;: la seule colonne
            que vous pouvez additionner sans appeler personne est celle que vous
            payez déjà. C’est ce qui en fait la référence, et c’est aussi ce qui
            explique pourquoi tant de dossiers comparent un devis complet à un
            statu quo estimé à zéro.
          </p>

          <p>
            Neuf inconnues par colonne ne sont pas un échec de la méthode&nbsp;:
            ce sont neuf questions à poser avant de signer, chacune formulée. Un
            fournisseur qui refuse d’en chiffrer une vous a déjà renseigné.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="annee-trois"
          number="11"
          label="Durée"
          readingTime={`${SECTION_READING_MINUTES.anneeTrois} min`}
          title="Que devient l’outil en année 3, et comment en sortir&nbsp;?"
        >
          <p>
            L’horizon retenu dans ce guide est de <strong>trois ans</strong>,
            pour une raison précise&nbsp;: c’est la durée au bout de laquelle,
            en général, une règle du métier ou une obligation a bougé, et c’est
            aussi celle qu’applique le calculateur de coût du site. Un an est
            trop court pour voir un renouvellement&nbsp;; cinq ans supposent une
            stabilité que peu de PME connaissent. Quatre choses arrivent en
            année 3.
          </p>

          <ol className="guide-checklist">
            <li>
              <strong>Le tarif monte au renouvellement.</strong> Une hausse de
              10&nbsp;% sur 12 postes à 19,50&nbsp;€ par mois ajoute
              281&nbsp;€ par an&nbsp;: négligeable. La même hausse sur
              120&nbsp;postes, soit 28&nbsp;080&nbsp;€ d’abonnement annuel, en
              ajoute 2&nbsp;808&nbsp;€. Le risque
              tarifaire n’existe qu’à partir d’une certaine taille&nbsp;;
              calculez-le sur votre nombre de postes plutôt que de le craindre
              en général.
            </li>
            <li>
              <strong>La personne qui portait le paramétrage part.</strong> Sur
              le cas construit, c’est la coordinatrice de planning. Reconstituer
              des règles jamais écrites représente environ 4&nbsp;jours de
              travail à deux, soit 64&nbsp;heures et 1&nbsp;920&nbsp;€ — et
              surtout quatre jours pendant lesquels personne ne tranche. La
              prévention coûte une page écrite le jour du paramétrage.
            </li>
            <li>
              <strong>Une règle change et l’outil doit suivre.</strong>{" "}
              L’exemple est daté&nbsp;: selon{" "}
              <a
                href="https://www.impots.gouv.fr/professionnel/questions/partir-de-quand-suis-je-concerne-par-la-reforme-de-la-facturation"
                target="_blank"
                rel="noreferrer"
              >
                impots.gouv.fr
              </a>
              , toutes les entreprises doivent pouvoir recevoir une facture
              électronique au 1<sup>er</sup>&nbsp;septembre 2026, et les PME et
              micro-entreprises doivent l’émettre au format électronique au
              1<sup>er</sup>&nbsp;septembre 2027. Question à poser avant de
              signer&nbsp;: cette évolution est-elle comprise dans
              l’abonnement, ou facturée&nbsp;?
            </li>
            <li>
              <strong>Vous partez.</strong> Trois questions au contrat&nbsp;:
              dans quel format, sous quel délai, à quel prix. Un export en PDF
              n’est pas une reprise de données. Sur le cas construit, un export
              non exploitable oblige à ressaisir 300 contrats et
              1&nbsp;200 équipements&nbsp;: à 12&nbsp;minutes l’unité, cela fait{" "}
              <strong>300&nbsp;heures</strong>, soit{" "}
              <strong>9&nbsp;000&nbsp;€</strong>. C’est plus que le cadrage et
              la moitié du paramétrage réunis.
            </li>
          </ol>

          <p>
            Ces quatre points se traitent au moment où l’on écrit ce qu’on
            achète, pas trois ans plus tard. Le format d’export, le délai de
            restitution, la maintenance et le sort du paramétrage sont des
            clauses, pas des options&nbsp;; le guide{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges SaaS
            </Link>{" "}
            détaille comment les écrire pour que plusieurs fournisseurs chiffrent
            le même produit.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="12"
          label="Prochaine action"
          readingTime={`${SECTION_READING_MINUTES.decision} min`}
          title="Écrivez ce que vous allez vérifier ensuite"
        >
          <p>
            Reprenez vos trois fiches et le montant annuel de la section 02.
            Pour chaque situation, choisissez une réponse ou le verdict OBSERVER,
            puis écrivez pourquoi et ce qui permettra de confirmer ou
            d’abandonner cette orientation. La phrase doit être comprise par la
            personne qui fait le travail comme par celle qui paie.
          </p>

          <div className="not-prose my-7 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 dark:border-indigo-900 dark:bg-indigo-950/30 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
              Phrase de décision
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed text-zinc-950 dark:text-white">
              «&nbsp;Pour la situation ________, qui nous coûte ________ € par
              an, nous examinons d’abord ________ parce que ________. Nous
              vérifierons ________ avant le ________. Nous arrêterons ou
              changerons de réponse si ________.&nbsp;»
            </p>
          </div>

          <p>
            Votre décision peut être très simple&nbsp;: restaurer une
            sauvegarde, supprimer une validation, former deux personnes, tester
            une connexion, faire rejouer trois dossiers dans un progiciel du
            secteur, cadrer une fonction sur mesure — ou observer encore un
            mois. <strong>Vous n’avez pas forcément un projet à l’arrivée.</strong>{" "}
            Vous aurez surtout évité de financer une solution qui ne traite pas
            le problème observé. Sur le cas construit, la réponse la plus chère
            aurait laissé intacts les 28&nbsp;800&nbsp;€ qui posaient problème.
          </p>

          <div className="not-prose my-8 rounded-3xl bg-zinc-950 p-6 text-white sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-600">
                <FileSearch className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="mt-0 text-xl font-bold">
                  Vous avez vos trois situations et leur coût annuel&nbsp;?
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  Présentez-les sans donnée personnelle, information
                  confidentielle, secret d’affaires ni identifiant d’accès. Le
                  premier échange sert à décider ce qu’il faut vérifier ensuite,
                  y compris lorsque la meilleure décision est de sécuriser,
                  corriger l’existant, choisir un standard ou attendre. Le
                  détail de ce que couvre un{" "}
                  <Link
                    href="/services/outils-internes-sur-mesure"
                    className="text-white underline underline-offset-2"
                  >
                    outil interne sur mesure
                  </Link>{" "}
                  est publié avec ses prix.
                </p>
                <TrackedGuideCtaLink
                  href="/demarrer-un-projet"
                  placement="article_end_inline"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 no-underline transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  Faire examiner mes trois situations
                  <ArrowRight className="size-4" aria-hidden="true" />
                </TrackedGuideCtaLink>
              </div>
            </div>
          </div>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
