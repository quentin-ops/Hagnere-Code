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
import { GuideTable, InfoBox } from "@/components/guides/guide-content-blocks";
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
import { SituationDiagnosticTool } from "./situation-diagnostic";

const guide = getGuide("signes-besoin-logiciel-metier");
const pagePath = `/guides/${guide.slug}`;
const breadcrumbName = "Besoin d’un logiciel métier";

export const metadata = buildGuideMetadata(
  guide,
  "Trois situations réelles conduisent à six réponses possibles avant un logiciel métier",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "La réponse immédiate",
    shortLabel: "Réponse",
  },
  {
    id: "urgence",
    number: "02",
    label: "Sécuriser l’activité",
    shortLabel: "Sécuriser",
  },
  {
    id: "trois-situations",
    number: "03",
    label: "Documenter trois situations",
    shortLabel: "Documenter",
  },
  {
    id: "six-reponses",
    number: "04",
    label: "Comparer six réponses",
    shortLabel: "Comparer",
  },
  {
    id: "contre-cas",
    number: "05",
    label: "Savoir ne pas investir",
    shortLabel: "Écarter",
  },
  {
    id: "exemples",
    number: "06",
    label: "Lire trois exemples",
    shortLabel: "Exemples",
  },
  {
    id: "criteres",
    number: "07",
    label: "Départager les options",
    shortLabel: "Critères",
  },
  {
    id: "pilote",
    number: "08",
    label: "Tester sans s’enfermer",
    shortLabel: "Tester",
  },
  {
    id: "cout-complet",
    number: "09",
    label: "Préparer le coût complet",
    shortLabel: "Coût",
  },
  {
    id: "decision",
    number: "10",
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
    next: "Corriger les droits, organiser les sauvegardes, tester régulièrement leur intégrité et leur restauration, puis écrire le fonctionnement dégradé et le retour à la normale.",
    stop: "Ne transformez pas un incident de sécurité en prétexte pour ajouter des fonctions.",
  },
  {
    number: "2",
    title: "Supprimer ou simplifier le processus",
    icon: Trash2,
    when: "L’équipe alimente une étape, un fichier ou une validation dont personne ne sait plus expliquer l’utilité.",
    next: "Retirer l’étape sur un périmètre limité, puis vérifier que le résultat et les contrôles utiles restent intacts.",
    stop: "N’automatisez pas une habitude inutile : vous la rendriez seulement plus rapide et plus difficile à remettre en cause.",
  },
  {
    number: "3",
    title: "Configurer l’outil actuel et former",
    icon: Settings2,
    when: "Le logiciel en place sait peut-être faire le travail, mais la fonction, le paramétrage ou le mode opératoire n’a pas été essayé sur des cas réels.",
    next: "Configurer un essai, documenter les exceptions et vérifier l’usage après une période représentative.",
    stop: "Une démonstration commerciale réussie ne prouve pas que l’équipe maîtrise le travail un jour chargé.",
  },
  {
    number: "4",
    title: "Connecter ou automatiser de façon limitée",
    icon: Link2,
    when: "Chaque outil remplit correctement son rôle, mais une donnée ou un statut est recopié de façon répétitive entre eux.",
    next: "Tester un seul échange traçable, réversible et reprenable à la main, avec alerte en cas d’échec.",
    stop: "Une automatisation sans alerte peut propager une erreur ou créer des doublons. Le contrôle doit rester visible.",
  },
  {
    number: "5",
    title: "Tester avant d’adopter un logiciel standard",
    icon: Store,
    when: "Le besoin est courant et une solution disponible paraît plausible ; elle doit couvrir les trois situations et leurs exceptions avant toute adoption.",
    next: "Faire exécuter les trois situations et les principales exceptions pendant l’essai, vérifier l’export, les accès, le support et le coût au volume réel, puis ne l’adopter que si les résultats couvrent les cas importants.",
    stop: "N’écartez pas le standard parce qu’il demande un changement d’habitude raisonnable ; n’acceptez pas non plus un contournement critique permanent.",
  },
  {
    number: "6",
    title: "Étudier une fonction sur mesure",
    icon: Wrench,
    when: "Le problème est répété, important et stable ; les réponses plus simples ont été raisonnablement testées ; un responsable métier peut décider et arrêter un pilote.",
    next: "Définir la plus petite fonction qui produit un résultat vérifiable, son mode de reprise et les conditions de sortie.",
    stop: "« Notre métier est unique » n’est pas une preuve. Les cas réels et l’échec documenté des options raisonnables le sont davantage.",
  },
] as const;

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "diagnostic",
    num: "01",
    label: "Reconnaître le besoin",
    items: [
      {
        question:
          "Combien de signes faut-il pour avoir besoin d’un logiciel métier ?",
        answer:
          "Il n’existe pas de nombre universel. Un seul risque de continuité peut exiger une sécurisation immédiate, tandis que plusieurs irritations faibles peuvent ne justifier aucun investissement. Documentez la fréquence, la conséquence, les personnes touchées et les essais déjà menés.",
      },
      {
        question: "Excel suffit-il encore pour gérer mon activité ?",
        answer:
          "Oui, s’il reste maîtrisé : propriétaire identifié, droits adaptés, règles compréhensibles, sauvegarde restaurable, volume supportable et contrôle possible. Le nombre d’onglets ne décide rien à lui seul. Le problème apparaît lorsque le fichier devient critique, opaque ou impossible à reprendre.",
      },
      {
        question: "Une double saisie justifie-t-elle un nouvel outil ?",
        answer:
          "Non. Commencez par vérifier si l’étape peut disparaître, si l’outil actuel possède déjà la fonction ou si un échange limité suffit. Un nouvel outil devient une option seulement après cette vérification.",
      },
    ],
  },
  {
    key: "solution",
    num: "02",
    label: "Choisir la réponse",
    items: [
      {
        question:
          "Quand un logiciel standard est-il préférable au sur-mesure ?",
        answer:
          "Un logiciel standard est souvent préférable quand le travail est courant, que les exceptions importantes sont couvertes et que l’export, les droits, le support et le coût restent acceptables. Testez-le avec vos trois situations, pas seulement avec le scénario préparé par l’éditeur.",
      },
      {
        question: "Quand faut-il étudier le sur-mesure ?",
        answer:
          "Étudiez le sur-mesure quand le besoin est répété et stable, que sa conséquence est importante et que les réponses plus simples ont été raisonnablement examinées. Un responsable métier doit aussi pouvoir définir le résultat, accepter les exceptions et arrêter un pilote. Une étude n’est pas encore une décision de développer.",
      },
      {
        question: "Faut-il tout centraliser dans une seule application ?",
        answer:
          "Non. Plusieurs outils bien délimités et reliés proprement peuvent être plus simples à maintenir qu’une application qui veut tout faire. Centralisez seulement ce qui améliore un résultat précis sans élargir inutilement les accès ni la dépendance.",
      },
    ],
  },
  {
    key: "risques",
    num: "03",
    label: "Sécurité, coût et décision",
    items: [
      {
        question: "Que faut-il sécuriser avant de lancer un projet ?",
        answer:
          "Commencez par les comptes et les droits, puis les sauvegardes, leurs tests réguliers d’intégrité et de restauration, les alertes, la continuité, la reprise manuelle et le retour à la normale. Pour les données personnelles, appliquez des mesures proportionnées au risque et impliquez les responsables compétents.",
      },
      {
        question: "Comment estimer le coût sans inventer un budget ?",
        answer:
          "Listez les postes à confirmer sur une même période : cadrage, réalisation ou paramétrage, migration, intégrations, formation, temps interne, licences ou hébergement, support, sécurité, évolutions, double exploitation et sortie. Une inconnue reste à confirmer ; elle ne vaut pas zéro.",
      },
      {
        question: "Peut-on conclure qu’il vaut mieux attendre ?",
        answer:
          "Oui. Si la situation est rare, temporaire, mal décrite ou si les règles changent encore, observer est une décision valable. Fixez la période, les faits à collecter et la date de réexamen afin que l’attente reste active.",
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
                      Point d’arrêt
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
        heroTitleEm="logiciel métier"
        heroTitleSuffix={"\u00a0?"}
        heroDescription="Trois situations réelles suffisent pour ouvrir le bon diagnostic — pas pour imposer du sur-mesure. Sécurisez d’abord ce qui menace l’activité, puis comparez six réponses de la plus simple à la plus spécifique."
        stats={[
          { label: "Situations à noter", value: "3" },
          { label: "Réponses à comparer", value: "6" },
          { label: "Seuil magique", value: "Aucun" },
          { label: "Diagnostic · envoi", value: "Aucun" },
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
            "Apportez le travail attendu, le fait observé, sa fréquence, sa conséquence et ce que vous avez déjà essayé. L’échange peut conclure qu’une solution simple suffit.",
          benefits: [
            "Le problème est décrit avant la technologie",
            "Le standard et l’existant restent de vraies options",
            "Les inconnues sont conservées, pas remplacées par des promesses",
          ],
          primaryCtaLabel: "Faire examiner mes trois situations",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Sommaire du diagnostic"
        mobileCtaLabel="Outils internes"
        sidebarContextCta={{
          eyebrow: "Outils internes",
          title: "Votre problème justifie-t-il un nouvel outil ?",
          description:
            "Décrivez trois situations sans donnée personnelle, information confidentielle, secret d’affaires ni identifiant d’accès. Le premier échange sert à distinguer sécurisation, simplification, configuration, connexion, standard et étude sur mesure.",
          benefits: [
            "Aucun développement présumé",
            "Réponses déjà testées prises en compte",
            "Périmètre minimal et réversible si une étude se justifie",
          ],
          ctaLabel: "Voir le service outils internes",
          ctaHref: "/services/outils-internes-sur-mesure",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
          badgeLabel: "Premier échange sans garantie de faisabilité",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Décider sans",
          titleEm: "sauter trop vite",
          titleEnd: "vers un nouvel outil.",
          subtitle:
            "Des réponses directes sur Excel, le standard, le sur-mesure, la sécurité, le coût et la possibilité d’attendre.",
          ctaTitle: "Vous avez déjà documenté trois situations ?",
          ctaDescription:
            "Présentez les faits et les réponses testées pour clarifier la prochaine vérification utile.",
          ctaLabel: "Faire examiner mes trois situations",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "CNIL · Guide sécurité 2026",
            href: "https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
            description:
              "Version 2024 mise à jour en 2026 : habilitations, comptes, sauvegardes, restauration, continuité et reprise. Périmètre principal : données personnelles ; mesures à proportionner au risque.",
          },
          {
            source: "CNIL · Règles essentielles",
            href: "https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles",
            description:
              "Page du 19 juin 2026 : stratégie de sauvegarde 3-2-1 et tests de restauration, à adapter au contexte de l’organisation.",
          },
          {
            source: "RGESN 2024",
            href: "https://ecoresponsable.numerique.gouv.fr/docs/2024/rgesn-mai2024/referentiel_general_ecoconception_des_services_numeriques_version_2024.pdf",
            description:
              "Deux questions des critères 1.1 et 1.2 sont reprises : nécessité, alternatives non numériques et services existants. Référentiel d’écoconception non contraignant ; ce guide n’en réalise pas l’évaluation complète et n’en déduit aucune rentabilité.",
          },
          {
            source: "DesignGouv",
            href: "https://design.numerique.gouv.fr/bien-concevoir/",
            description:
              "Bonnes pratiques destinées aux services publics : partir des besoins et tester avant de développer. Utilisées ici comme méthode de conception transférable, pas comme doctrine PME ni preuve commerciale.",
          },
          {
            source: "France Num · dossier pratique",
            href: "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution",
            description:
              "Dossier mis à jour le 9 juillet 2026, rédigé par Erwan Kezzar (Contournement) et Marc-Olivier Sercki (Pathta), deux acteurs privés du no-code et du logiciel. Seules les méthodes d’observation, de cartographie, de test et de maintenance sont utilisées ; leurs gains et préférences d’outils ne deviennent pas des règles générales.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title: "Une orientation de préparation, pas un audit",
          description:
            "Ce guide ne diagnostique pas un incident cyber, ne valide pas une conformité, ne fixe ni budget ni retour sur investissement et ne garantit pas la faisabilité d’un outil. En cas d’incident actif, de perte de données, de fraude, de litige ou d’urgence réglementaire, mobilisez d’abord les responsables et professionnels compétents.",
        }}
        relatedGuides={[
          {
            label: "Quel processus métier automatiser en premier ?",
            href: "/guides/automatiser-processus-metier",
          },
          {
            label: "Calculer le ROI d’une application métier",
            href: "/guides/calculer-roi-application-metier",
          },
          {
            label: "Remplacer Microsoft Access sans perdre le métier",
            href: "/guides/remplacer-microsoft-access-application-web",
          },
        ]}
        relatedGuidesLabel="3 étapes suivantes possibles"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse courte"
          readingTime="2 min"
          title="Un blocage répété signifie-t-il qu’il faut lancer un projet ?"
        >
          <p>
            Un devis attend parce que la bonne version du fichier est
            introuvable. Une commande doit être recopiée entre deux outils. Une
            absence bloque une validation que personne d’autre ne sait
            reprendre.{" "}
            <strong>
              Ces situations méritent un diagnostic ; elles ne prouvent pas
              qu’il faut développer un logiciel sur mesure.
            </strong>
          </p>
          <p>
            Si un problème peut compromettre significativement les droits
            d’accès, la restauration, l’intégrité des données ou la continuité
            de l’activité, évaluez le risque et sécurisez ce qui l’exige avant
            de choisir ou de modifier un outil. Pour le reste, notez trois
            situations que votre équipe a vécues. Pour chacune, indiquez le
            travail attendu, ce qui s’est passé, la fréquence, la conséquence,
            les personnes touchées et les corrections déjà essayées.
          </p>
          <p>
            Vous pourrez alors comparer <strong>exactement six réponses</strong>
            : sécuriser, simplifier, mieux configurer l’existant, connecter de
            façon limitée, adopter un standard ou étudier une fonction sur
            mesure.
          </p>
          <p>
            Lorsque les faits manquent, que l’irritation est isolée ou que les
            règles changent encore,{" "}
            <strong>observer est aussi un verdict valable</strong>. Ce n’est pas
            une septième solution à acheter : fixez ce qu’il faut mesurer et la
            date à laquelle vous réexaminerez la situation.
          </p>

          <GuidePremiumMemo
            eyebrow="La question utile"
            title="Ne demandez pas encore « quel logiciel choisir ? »"
          >
            <ul>
              <li>
                Demandez quel travail devait aboutir et ce qui l’a empêché.
              </li>
              <li>
                Regardez combien de fois le fait s’est réellement produit.
              </li>
              <li>Séparez le temps de travail du temps d’attente.</li>
              <li>Écrivez la conséquence et le mode de reprise actuel.</li>
              <li>
                Conservez les inconnues au lieu de les remplacer par zéro.
              </li>
            </ul>
          </GuidePremiumMemo>

          <figure className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-[#f4f1e8] dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={`${pagePath}/article-diagnostic-16x9.svg`}
              width={1600}
              height={900}
              unoptimized
              priority
              alt="Trois fiches de situations concrètes orientées vers six réponses, de la sécurisation à l’étude sur mesure"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 bg-white px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 sm:px-5">
              Le diagnostic part du travail réel. La flèche ne pointe vers le
              sur-mesure qu’après l’examen des réponses plus simples.
            </figcaption>
          </figure>

          <p>
            Avant tout choix d’outil, posez une question de continuité :
            l’équipe peut-elle encore travailler si un accès, une personne ou un
            outil manque ?
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="urgence"
          number="02"
          label="Continuité"
          readingTime="3 min"
          title="Que faut-il sécuriser avant d’ajouter une fonction ?"
        >
          <p>
            Un nouvel outil n’est pas la première réponse lorsqu’un départ, une
            panne ou une erreur d’accès peut rendre les dossiers indisponibles.
            Commencez par demander : qui possède les comptes ? qui peut
            restaurer la dernière version utile ? que fait l’équipe pendant
            l’indisponibilité ? qui reçoit l’alerte ?
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
            exception encadrée. Cela concerne d’abord les données personnelles ;
            la même discipline reste utile pour savoir qui peut agir sur une
            commande, un prix ou une validation.
          </p>

          <GuideTable
            caption="Contrôles à traiter avant la décision d’investissement"
            headers={[
              "Risque observé",
              "Question immédiate",
              "Preuve attendue",
            ]}
            rows={[
              [
                "Compte partagé ou droits trop larges",
                "Qui a réellement besoin de lire, modifier, valider ou administrer ?",
                "Comptes nominatifs, droits revus et suppression testée",
              ],
              [
                "Fichier ou base critique",
                "Existe-t-il plusieurs copies, dont une séparée et une hors ligne ?",
                "Intégrité et restauration testées, puis prochain essai planifié",
              ],
              [
                "Absence d’une personne clé",
                "Qui reprend le travail sans son mot de passe ni sa mémoire ?",
                "Procédure courte jouée par une autre personne",
              ],
              [
                "Panne de l’outil ou de la connexion",
                "Quel fonctionnement dégradé reste possible et pendant combien de temps ?",
                "Liste des actions manuelles, alertes et rattrapage",
              ],
              [
                "Modification importante non traçable",
                "Peut-on relier l’action à une personne, un moment et une version ?",
                "Finalité, actions tracées, accès, durée de conservation et information des utilisateurs définis",
              ],
            ]}
          />

          <p>
            Le{" "}
            <a
              href="https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf"
              target="_blank"
              rel="noreferrer"
            >
              guide de sécurité de la CNIL, version 2024 mise à jour en 2026
            </a>
            , recommande des sauvegardes fréquentes, protégées et séparées, des
            tests réguliers d’intégrité et de restauration ainsi qu’une
            organisation de la continuité et de la reprise. La stratégie exacte
            dépend du risque ; cocher « sauvegarde activée » ne prouve pas que
            l’activité repart. Un fonctionnement dégradé doit préserver un
            niveau de protection adapté et prévoir le rattrapage puis le retour
            au fonctionnement normal.
          </p>

          <InfoBox
            variant="amber"
            title="Sécuriser ne veut pas dire lancer un développement"
          >
            <p>
              Une revue des droits, une sauvegarde restaurable, une procédure
              d’absence et une alerte peuvent corriger l’urgence avec l’outil
              actuel. Revenez ensuite au besoin fonctionnel, lorsque l’équipe
              sait protéger et reprendre le travail. Demandez alors aux
              personnes concernées de raconter un cas précis.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="trois-situations"
          number="03"
          label="Fiche de travail"
          readingTime="5 à 15 min"
          title="Documentez trois situations réelles sans envoyer vos données"
        >
          <p>
            Une impression générale comme « nous perdons beaucoup de temps » est
            difficile à vérifier. Choisissez plutôt trois événements ordinaires
            sur une période connue. Demandez à la personne qui réalise le
            travail de décrire le cas normal, puis ce qui a créé le blocage.
            N’utilisez pas uniquement la version du dirigeant ou du prestataire.
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
            Pathta, deux acteurs privés du no-code et du développement : nous
            retenons la méthode d’observation, pas leurs gains ni leurs
            préférences d’outils comme règles générales.
          </p>

          <SituationDiagnosticTool />

          <p>
            Comparez ensuite les trois fiches. Un problème répété à faible
            conséquence n’appelle pas la même réponse qu’un événement rare mais
            capable d’arrêter les opérations. Une même organisation peut donc
            sécuriser une première situation, simplifier la deuxième et
            continuer d’observer la troisième. Les faits peuvent mener à des
            réponses différentes, sans poser un nouvel outil comme point de
            départ.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="six-reponses"
          number="04"
          label="Options"
          readingTime="5 min"
          title="Comparez exactement six réponses, dans cet ordre"
        >
          <p>
            Suivez cet ordre pour ne pas transformer le diagnostic en argument
            commercial. Traitez d’abord la continuité, puis le travail inutile ;
            gardez la fonction sur mesure pour la fin. Arrêtez-vous dès qu’une
            réponse traite correctement les trois situations et leurs exceptions
            importantes.
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

          <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300">
              Verdict possible · hors décompte
            </p>
            <h3 className="mt-2 text-lg font-bold text-amber-950 dark:text-amber-100">
              OBSERVER : ne pas choisir de solution tant que les faits manquent
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
              Notez la période, la fréquence, la conséquence et la décision à
              revoir. « Observer » n’est pas une septième réponse technique :
              c’est la décision de ne pas investir sur la base d’une impression
              ou d’un processus encore mouvant. Un faux signal ne mérite aucune
              des six réponses : complétez d’abord les faits.
            </p>
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="contre-cas"
          number="05"
          label="Contre-cas"
          readingTime="3 min"
          title="Quand un nouveau logiciel serait-il prématuré ?"
        >
          <p>
            Les signaux visibles sur le terrain ont souvent plusieurs causes. Un
            tableau n’est pas « trop gros » parce qu’il possède un nombre donné
            d’onglets ; il devient risqué lorsqu’il est critique, opaque, mal
            protégé ou impossible à reprendre. À l’inverse, un fichier simple
            peut rester un bon outil pendant des années.
          </p>

          <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Excel ou l’outil actuel suffit",
                text: "Le propriétaire est identifié, les règles sont lisibles, les droits sont adaptés, la sauvegarde est restaurable et le volume reste supportable. Documentez et surveillez ; ne remplacez pas pour moderniser l’apparence.",
              },
              {
                title: "Le standard peut être préférable",
                text: "Le travail est courant, les exceptions importantes sont couvertes et l’export reste possible. Un standard peut être essayé sans développer la fonction elle-même ; son délai total reste à confirmer après le paramétrage, la migration, la formation et l’adoption.",
              },
              {
                title: "La sécurité passe avant",
                text: "Une personne détient tous les accès, personne n’a essayé la restauration ou un compte partagé permet une action sensible. Corrigez ces risques avant de choisir ou de modifier un outil.",
              },
              {
                title: "Il faut attendre",
                text: "Le problème apparaît seulement pendant un pic, la nouvelle organisation n’est pas stabilisée ou les équipes ne décrivent pas le même résultat. Fixez une période d’observation et revenez avec des faits.",
              },
              {
                title: "Le sur-mesure est prématuré",
                text: "Aucun essai sérieux de l’existant ou du standard n’a été mené, personne ne porte les règles et l’équipe souhaite seulement « tout centraliser ». Une étude produirait surtout des hypothèses.",
              },
              {
                title: "Le processus doit disparaître",
                text: "La saisie ou la validation existe uniquement pour alimenter un fichier que personne n’utilise. Supprimez-la sur un périmètre limité, vérifiez le contrôle utile, puis arrêtez-vous si le résultat tient.",
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

          <p>
            Ces contre-cas ne ferment pas la décision pour toujours. Ils
            indiquent seulement ce qu’il faut vérifier en premier.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exemples"
          number="06"
          label="Application"
          readingTime="4 min"
          title="Trois exemples fictifs montrent pourquoi la réponse change"
        >
          <p>
            Les trois scénarios ci-dessous sont fictifs, pas des cas clients.
            Aucun résultat n’y est mesuré et aucun gain n’en est déduit. Ils
            servent à montrer comment choisir la prochaine question.
          </p>

          <GuidePremiumCase
            initial="A"
            eyebrow="Exemple fictif 1 · entreprise de maintenance"
            title="Le planning dépend d’un compte et d’un fichier détenus par une seule personne"
          >
            <p>
              Lorsque la coordinatrice est absente, personne ne peut modifier le
              planning ni retrouver avec certitude la dernière version. La
              première réponse n’est pas une application : l’entreprise crée des
              comptes nominatifs, revoit les droits, protège les copies, essaie
              une restauration et fait jouer la reprise par une autre personne.
              Elle réévalue ensuite les fonctions manquantes.
            </p>
            <p className="mt-3 font-semibold">
              Orientation : 1 · sécuriser. Le choix fonctionnel attend.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="B"
            eyebrow="Exemple fictif 2 · négoce B2B"
            title="Le même identifiant et le même statut sont recopiés entre devis et facturation"
          >
            <p>
              Les deux logiciels conviennent chacun à leur usage. L’équipe a
              vérifié leurs fonctions natives ; la ressaisie reste le point
              précis de rupture. Elle teste un échange limité sur quelques
              statuts, avec journal, alerte, détection des doublons et reprise
              manuelle. Elle ne remplace pas tout le système.
            </p>
            <p className="mt-3 font-semibold">
              Orientation : 4 · connecter de façon limitée.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="C"
            eyebrow="Exemple fictif 3 · société de services"
            title="Chaque chef de projet a inventé sa propre procédure de validation"
          >
            <p>
              Les équipes réclament un portail unique, mais elles ne s’accordent
              ni sur les étapes ni sur le résultat attendu. L’entreprise choisit
              trois dossiers, retire une validation sans usage, décrit les
              exceptions et observe pendant une période définie. Elle comparera
              ensuite l’outil actuel et un standard.
            </p>
            <p className="mt-3 font-semibold">
              Verdict : OBSERVER, puis réponse 2 si la simplification tient. Une
              fonction sur mesure est prématurée.
            </p>
          </GuidePremiumCase>

          <p>
            Dans ces trois cas, le secteur ne décide rien à lui seul. Ce sont
            les faits qui orientent la réponse.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="criteres"
          number="07"
          label="Arbitrage"
          readingTime="4 min"
          title="Quels critères permettent de départager les réponses ?"
        >
          <p>
            Une matrice n’a pas besoin d’un score pour être utile. Pour chaque
            situation, écrivez les réponses ci-dessous et joignez la preuve
            disponible. Si une ligne décisive reste inconnue, elle devient une
            question de l’essai, pas une valeur par défaut.
          </p>

          <GuideTable
            caption="Critères de décision communs aux six réponses"
            headers={[
              "Critère",
              "Question à poser",
              "Ce qui ferait changer la décision",
            ]}
            rows={[
              [
                "Fréquence",
                "Combien de fois sur quelle période réelle ?",
                "Un fait rare ou temporaire peut conduire à observer",
              ],
              [
                "Conséquence",
                "Quel retard, quelle reprise, quelle erreur ou quel risque est constaté ?",
                "Une conséquence critique fait remonter la sécurisation",
              ],
              [
                "Personnes touchées",
                "Qui produit, contrôle, attend, reprend ou subit le résultat ?",
                "Un usage individuel n’appelle pas le même changement collectif",
              ],
              [
                "Stabilité",
                "Le résultat, les règles et les exceptions sont-ils assez stables ?",
                "Des règles mouvantes font reporter le sur-mesure",
              ],
              [
                "Données et droits",
                "Quelles données circulent et qui doit pouvoir les lire ou les modifier ?",
                "Un accès ou une restauration incertaine impose d’abord la sécurité",
              ],
              [
                "Adoption",
                "Les utilisateurs ont-ils essayé le nouveau mode sur leur vrai travail ?",
                "Un contournement parallèle peut annuler le bénéfice attendu",
              ],
              [
                "Maintenance",
                "Qui traite les alertes, les changements de règle et les mises à jour ?",
                "Sans responsable ni budget, réduire le périmètre ou choisir le standard",
              ],
              [
                "Réversibilité",
                "Comment récupérer données, documentation, comptes et configuration ?",
                "Une sortie impraticable peut rendre l’option disproportionnée",
              ],
            ]}
          />

          <p>
            Ne favorisez pas le sur-mesure au seul motif qu’il reproduit les
            habitudes actuelles. Vérifiez aussi l’entretien, la sécurité, la
            reprise, l’adoption et la sortie. Une partie de ces efforts peut
            être mutualisée par l’éditeur standard, sans supprimer les coûts
            internes ni la réversibilité à vérifier. De même, le standard n’est
            pas automatiquement meilleur : ses limites doivent être testées sur
            les exceptions qui comptent.
          </p>
          <p>
            Ces critères ne tranchent pas seuls. Ils servent à construire un
            essai limité, avec une sortie claire si les faits contredisent
            l’orientation de départ.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="pilote"
          number="08"
          label="Réduction du risque"
          readingTime="4 min"
          title="Testez un périmètre petit, réversible et facile à arrêter"
        >
          <p>
            Même avec une orientation claire, ne passez pas directement au
            déploiement. Pour les réponses 3 à 6, transformez l’hypothèse en
            essai : quelques utilisateurs représentatifs, un seul résultat
            métier, des cas normaux et des exceptions, une reprise manuelle et
            une date de décision.
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
            . Ces bonnes pratiques visent les services publics ; nous les
            utilisons seulement comme méthode de conception transférable. Le
            dossier pratique France Num, rédigé par deux prestataires privés,
            conseille lui aussi de commencer petit, cartographier les
            exceptions, tester et prévoir documentation, formation et
            maintenance.
          </p>

          <GuideTable
            caption="Contrat minimal d’un pilote"
            headers={[
              "À écrire avant",
              "Exemple de formulation",
              "Preuve de sortie",
            ]}
            rows={[
              [
                "Résultat",
                "Le dossier validé est disponible sans ressaisie et avec son statut correct",
                "Cas normaux et exceptions rejoués",
              ],
              [
                "Périmètre",
                "Une équipe, un type de dossier et une période définie",
                "Liste exacte des utilisateurs et cas inclus",
              ],
              [
                "Responsable",
                "Une personne tranche les règles et accepte le résultat",
                "Nom, remplaçant et décisions datées",
              ],
              [
                "Reprise",
                "En cas d’échec, l’équipe traite le dossier manuellement sans doublon",
                "Retour au manuel essayé, rattrapage et retour à la normale prévus",
              ],
              [
                "Arrêt",
                "Le pilote s’arrête si une erreur importante échappe au contrôle ou si le processus parallèle persiste",
                "Décision d’arrêt exécutable, accès et données récupérables",
              ],
              [
                "Suite",
                "Continuer, corriger, choisir une autre réponse ou abandonner",
                "Décision écrite, inconnues restantes et prochain propriétaire",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Un pilote doit pouvoir conduire à l’arrêt"
          >
            <p>
              Définissez avant l’essai ce qui oblige à corriger, réduire ou
              arrêter. Testez l’indisponibilité, un droit refusé, une donnée
              manquante, un doublon et le retour au manuel. Le prestataire ne
              doit pas être seul à constater que son outil fonctionne. Si
              l’essai tient, la décision doit encore intégrer son coût complet.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cout-complet"
          number="09"
          label="Économie"
          readingTime="4 min"
          title="Que faut-il compter au-delà du devis ou de l’abonnement ?"
        >
          <p>
            Le coût total de possession, ou <strong>TCO</strong>, regroupe les
            dépenses et le temps interne nécessaires pour mettre en place,
            exploiter, faire évoluer puis quitter une solution sur une même
            période. Le calcul vient après le diagnostic : chiffrer trop tôt
            donne un chiffre précis à une réponse encore incertaine.
          </p>

          <GuideTable
            caption="Douze familles de coût à confirmer pour chaque option"
            headers={["Moment", "Familles à examiner", "Question de contrôle"]}
            rows={[
              [
                "Avant",
                "1. Cadrage · 2. Paramétrage ou réalisation · 3. Migration · 4. Intégrations",
                "Qu’est-ce qui est inclus, exclu, repris à la main ou facturé au volume ?",
              ],
              [
                "Adoption",
                "5. Formation et changement · 6. Temps interne · 7. Double exploitation",
                "Qui prépare, teste, corrige et maintient l’ancien mode pendant la transition ?",
              ],
              [
                "Exploitation",
                "8. Licences ou hébergement · 9. Support et maintenance · 10. Sécurité et conformité",
                "Que se passe-t-il lorsque le volume, les règles, le fournisseur ou une dépendance change ?",
              ],
              [
                "Durée et sortie",
                "11. Évolutions · 12. Sortie et réversibilité",
                "Comment récupérer données, comptes, configuration, documentation et éventuellement code ?",
              ],
            ]}
          />

          <p>
            Laissez chaque poste inconnu « à confirmer ». Zéro signifie qu’un
            poste a été examiné et qu’il ne s’applique pas dans le scénario, pas
            qu’il a été oublié. Comparez aussi le statu quo : temps de reprise,
            erreurs, abonnements conservés et risque accepté.
          </p>
          <p>
            Pour construire ensuite des scénarios de trésorerie et de capacité
            sans compter deux fois le temps, utilisez le guide{" "}
            <Link href="/guides/calculer-roi-application-metier">
              Calculer le ROI d’une application métier
            </Link>
            . Si la réponse retenue est une connexion limitée, le guide{" "}
            <Link href="/guides/automatiser-processus-metier">
              Quel processus métier automatiser en premier ?
            </Link>{" "}
            aide à vérifier le premier candidat.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="10"
          label="Prochaine action"
          readingTime="2 min"
          title="Écrivez ce que vous allez vérifier ensuite"
        >
          <p>
            Reprenez vos trois fiches. Pour chacune, choisissez une réponse ou
            le verdict OBSERVER, puis écrivez pourquoi et ce qui permettra de
            confirmer ou d’abandonner cette orientation. La phrase doit pouvoir
            être comprise par la personne qui fait le travail et par celle qui
            paie.
          </p>

          <div className="not-prose my-7 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 dark:border-indigo-900 dark:bg-indigo-950/30 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
              Phrase de décision
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed text-zinc-950 dark:text-white">
              « Pour la situation ________, nous examinons d’abord ________
              parce que ________. Nous vérifierons ________ avant le ________.
              Nous arrêterons ou changerons de réponse si ________. »
            </p>
          </div>

          <p>
            Votre décision peut être très simple : restaurer une sauvegarde,
            supprimer une validation, former deux personnes, tester un
            connecteur, faire jouer trois dossiers dans un logiciel standard,
            cadrer une fonction sur mesure — ou observer encore. Vous n’avez pas
            forcément un projet à l’arrivée. Vous aurez surtout évité de
            financer une solution qui ne traite pas le problème observé.
          </p>

          <div className="not-prose my-8 rounded-3xl bg-zinc-950 p-6 text-white sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-600">
                <FileSearch className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="mt-0 text-xl font-bold">
                  Vous avez vos trois situations et les réponses déjà testées ?
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  Présentez-les sans donnée personnelle, information
                  confidentielle, secret d’affaires ni identifiant d’accès. Le
                  premier échange sert à décider ce qu’il faut vérifier ensuite,
                  y compris lorsque la meilleure décision est de sécuriser,
                  corriger l’existant, choisir un standard ou attendre.
                </p>
                <Link
                  href="/demarrer-un-projet"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 no-underline transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  Faire examiner mes trois situations
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
