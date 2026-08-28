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
import {
  assessSaasSchedule,
  createRelaisProExample,
} from "./schedule-planner-engine";
import { SaasSchedulePlannerTool } from "./schedule-planner-tool";

const guide = getGuide("combien-de-temps-developper-saas");
const breadcrumbName = "Temps de développement d’un SaaS";
const relaisPro = assessSaasSchedule(createRelaisProExample());

export const metadata = buildGuideMetadata(
  guide,
  "Calendrier SaaS fondé sur les dépendances et la capacité",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Répondre sans fausse moyenne",
    shortLabel: "Réponse",
  },
  {
    id: "chemin",
    number: "02",
    label: "Calculer la suite de travaux qui fixe la fin",
    shortLabel: "Calcul",
  },
  {
    id: "capacite",
    number: "03",
    label: "Vérifier qui peut travailler quand",
    shortLabel: "Équipe",
  },
  {
    id: "arrivee",
    number: "04",
    label: "Définir ce que « terminé » veut dire",
    shortLabel: "Terminé",
  },
  {
    id: "exemple",
    number: "05",
    label: "Comparer cinq calculs fictifs",
    shortLabel: "Exemple",
  },
  {
    id: "planificateur",
    number: "06",
    label: "Vérifier si les entrées autorisent le calcul",
    shortLabel: "Outil",
  },
  {
    id: "incertitude",
    number: "07",
    label: "Séparer les trois durées de la réserve",
    shortLabel: "Hypothèses",
  },
  {
    id: "raisonnement-inverse",
    number: "08",
    label: "Choisir quoi changer si le délai ne tient pas",
    shortLabel: "Décider",
  },
  {
    id: "production",
    number: "09",
    label: "Planifier la qualité avant l’ouverture",
    shortLabel: "Qualité",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "estimation",
    num: "01",
    label: "Estimation",
    items: [
      {
        question: "Existe-t-il une durée moyenne fiable pour un SaaS ?",
        answer:
          "Non, pas sans viser le même résultat, ordonner les mêmes tâches et savoir qui peut réellement s’en charger. Une durée observée pour un prototype ne répond pas à la question d’un pilote exploitable ou d’un service soutenable. Commencez par nommer ce qui doit être prêt, puis reliez les tâches qui s’attendent.",
      },
      {
        question: "Un nombre de sprints donne-t-il la date de fin ?",
        answer:
          "Non. Le Sprint structure une boucle d’inspection et d’adaptation ; il ne prouve pas la durée totale du produit. Pour estimer la fin, ordonnez aussi les tâches qui attendent un accès externe, une décision, une recette, une reprise ou les conditions d’exploitation.",
      },
      {
        question: "Faut-il additionner toutes les tâches ?",
        answer:
          "Seulement lorsqu’elles sont dépendantes en série. Deux tâches réellement indépendantes, portées par des capacités distinctes et disponibles, peuvent avancer en parallèle. La fin relative vient de la chaîne dépendante la plus longue, pas de la somme de toutes les lignes.",
      },
    ],
  },
  {
    key: "hypotheses",
    num: "02",
    label: "Hypothèses",
    items: [
      {
        question:
          "Ajouter des personnes raccourcit-il automatiquement le délai ?",
        answer:
          "Non. Montrez d’abord quelles tâches peuvent vraiment avancer en même temps, qui tranche aux points où elles se rejoignent et quelle personne ou équipe reste partagée. Sans nouvel ordre explicite, l’outil refuse de supposer ce raccourci.",
      },
      {
        question: "L’IA ou le no-code réduit-il forcément la durée ?",
        answer:
          "Non. Ces moyens peuvent modifier certaines tâches, mais ils ne suppriment pas automatiquement la validation du besoin, les dépendances, la recette, la sécurité, l’accessibilité, les données, la restauration ou le support. Rechiffrez chaque tâche modifiée avec une preuve propre.",
      },
      {
        question: "À quoi sert la réserve en jours ouvrés ?",
        answer:
          "À rendre visible une décision de prudence distincte du travail estimé. Elle ne doit ni masquer une durée inconnue ni être ajoutée une seconde fois dans chaque tâche. Le planificateur l’affiche à part et ne lui attribue aucune probabilité.",
      },
    ],
  },
  {
    key: "decision",
    num: "03",
    label: "Décision",
    items: [
      {
        question: "Que faire lorsqu’une dépendance reste inconnue ?",
        answer:
          "Ne calculez aucune date tant que le résultat, le responsable ou la durée d’une tâche manque : le calcul reste en attente. Si la tâche visée n’existe pas ou si les dépendances forment une boucle, corrigez l’ordre des travaux. Recalculez ensuite depuis les entrées corrigées.",
      },
      {
        question: "Comment passer de J+N à une date réelle ?",
        answer:
          "Après revue humaine, fixez J1 et la convention de jours ouvrés : fuseau, jours non travaillés, disponibilité de chaque capacité et calendriers des tiers. Recalculez ensuite. Aucune date civile n’est fabriquée automatiquement.",
      },
      {
        question: "Que signifie « calendrier prêt à relire » ?",
        answer:
          "C’est un calcul à relire, pas un engagement. Une personne doit encore confirmer ce qui doit être prêt, qui répond de chaque résultat, l’ordre des tâches, les personnes disponibles, les conditions d’exploitation et la décision à prendre si le délai ne tient pas.",
      },
    ],
  },
];

const scenarioRows = [
  [
    "Favorable",
    "Hypothèses favorables nommées, sans supprimer de travail",
    "16 j de chaîne + 4 j de réserve séparée = J+20",
  ],
  [
    "Central",
    "Hypothèses de travail retenues pour la revue",
    "25 j de chaîne + 4 j de réserve séparée = J+29",
  ],
  [
    "Prudent",
    "Durées prudentes pour chaque tâche et mêmes dépendances",
    "37 j de chaîne + 4 j de réserve séparée = J+41",
  ],
  [
    "Stress combiné",
    "Attente externe et validation interne se dégradent ensemble",
    "47 j de chaîne + 4 j de réserve séparée = J+51",
  ],
  [
    "Raisonnement inverse",
    "Maximum disponible comparé au prudent, sans inventer de réduction",
    "34 j disponibles face à J+41 : écart de 7 j",
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
          { label: "Jours ouvrés relatifs", variant: "dark" },
          { label: "Dépendances explicites", variant: "neutral" },
          { label: "Planificateur local", variant: "success" },
          {
            label: "Mis à jour le " + formatGuideDate(guide.dateModified),
            variant: "muted",
          },
        ]}
        heroTitle="Combien de temps faut-il"
        heroTitleEm="pour développer"
        heroTitleSuffix="un SaaS ?"
        heroDescription="Il n’existe pas de durée universelle. Définissez ce qui doit être prêt, reliez les travaux qui s’attendent, nommez les personnes réellement disponibles, puis comparez quatre scénarios au temps dont vous disposez."
        stats={[
          { label: "Scénarios sans probabilité", value: "4" },
          { label: "Résultats du contrôle", value: "4" },
          { label: "Date civile générée", value: "Aucune" },
          { label: "Score global", value: "Aucun" },
          { label: "Données envoyées", value: "Aucune" },
          { label: "Lecture", value: guide.readTimeMin + " min" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
        }}
        toc={toc}
        tocLabel="De la ligne d’arrivée à la décision"
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Estimer sans",
          titleEm: "promettre",
          titleEnd: "une date sans hypothèses.",
          subtitle:
            "Des réponses sur les sprints, la capacité, la réserve, les outils d’accélération et le passage de J+N à une date civile.",
          ctaTitle: "Votre calendrier reste bloqué ?",
          ctaDescription:
            "Apportez ce qui doit être prêt, les travaux qui s’attendent encore et les personnes réellement disponibles.",
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
        }}
        strategyCta={{
          titleStart: "Vérifier",
          titleEm: "les blocages avant la date",
          description:
            "Partagez une version sans donnée sensible : ce qui doit être prêt, les résultats attendus, qui en répond et ce qui doit précéder quoi. La revue conserve les inconnues visibles avant toute date civile.",
          badges: [
            "Ligne d’arrivée observable",
            "Inconnues conservées",
            "Option plus simple possible",
          ],
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "U.S. GAO · Schedule Assessment Guide · finale 2015",
            href: "https://www.gao.gov/products/gao-16-89g",
            description:
              "Guide final publié le 22 décembre 2015 : logique horizontale, chemin continu le plus long, ressources et validité d’un calendrier intégré. La transposition à un petit SaaS reste une méthode, pas une durée de référence.",
          },
          {
            source: "GOV.UK · Planning in agile · mise à jour 31 mars 2026",
            href: "https://www.gov.uk/service-manual/agile-delivery/planning-agile",
            description:
              "Vision, objectifs, feuille de route visible et dépendances entre équipes ou organisations. La date citée est celle de cette page, pas une date de projet.",
          },
          {
            source: "GOV.UK · Discovery · mise à jour 21 juin 2021",
            href: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
            description:
              "Comprendre le problème avant de construire, identifier les contraintes, considérer des solutions sans développement et pouvoir arrêter. Aucune durée indicative de cette administration ne sert ici d’estimation.",
          },
          {
            source: "GOV.UK · Live · mise à jour 8 mai 2019",
            href: "https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works",
            description:
              "Exploitation soutenable : recherche, sécurité, accessibilité, supervision, performance et assurance qualité continuent après l’ouverture.",
          },
          {
            source: "Scrum Guide · version officielle novembre 2020",
            href: "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-French.pdf",
            description:
              "Le Sprint est une boucle d’un mois au maximum pour inspecter et adapter ; cette durée ne constitue pas celle d’un SaaS complet.",
          },
          {
            source: "NIST SP 800-218 · SSDF v1.1 finale · février 2022",
            href: "https://csrc.nist.gov/pubs/sp/800/218/final",
            description:
              "Cadre final de pratiques de développement sécurisé à intégrer au cycle de développement, plutôt qu’à reporter après la construction.",
          },
          {
            source:
              "NIST SP 800-218 Rev. 1 · SSDF v1.2 draft · 17 décembre 2025",
            href: "https://csrc.nist.gov/pubs/sp/800/218/r1/ipd",
            description:
              "Initial Public Draft dont la période de commentaires est close ; il ne remplace pas encore la v1.1 finale comme recommandation de référence de ce guide.",
          },
          {
            source:
              "CNIL · guide de la sécurité · version 2024 mise à jour 2026",
            href: "https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles",
            description:
              "Tests avant mise en production, séparation des environnements, données fictives lorsque possible et sécurité prise en compte tout au long du projet.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée de la méthode",
          title: "Un calcul de chaîne, pas une garantie de livraison",
          description:
            "Les durées de RelaisPro sont entièrement fictives et ne constituent ni référence de marché ni engagement. Les sources décrivent des principes de planification, de livraison et de sécurité dans leurs champs propres. La ligne d’arrivée, les obligations, les jours ouvrés, les propriétaires, la capacité et l’acceptation doivent être décidés pour le produit réel.",
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
        ]}
        relatedGuidesLabel="2 étapes à fermer avant le calendrier"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          title="La durée vient de la plus longue suite de travaux qui s’attendent"
        >
          <p>
            Il n’existe pas de durée universelle défendable pour développer un
            SaaS. Définissez d’abord ce qui doit être prêt : prototype, pilote
            privé, ouverture contrôlée ou service soutenable. Pour chaque
            résultat, notez qui en répond, ce qui doit le précéder et qui est
            disponible.
          </p>
          <p>
            Le calcul suit chaque suite de tâches dépendantes en jours ouvrés.
            La plus longue fixe la première fin possible : c’est la chaîne
            déterminante. Si plusieurs chaînes arrivent ensemble, elles restent
            toutes visibles.
          </p>
          <p>
            Renseignez une durée favorable, centrale et prudente par tâche, avec
            la cause de l’écart. Gardez la réserve à part. Une entrée manquante,
            une boucle ou une personne ou équipe partagée entre des tâches sans
            ordre explicite bloque le calcul. Le résultat reste un brouillon à
            faire relire, jamais un engagement.
          </p>

          <GuideTable
            caption="Les huit entrées qui rendent la question calculable"
            headers={["Entrée", "Question de contrôle", "Si elle manque"]}
            rows={[
              [
                "Ligne d’arrivée",
                "Quel résultat, quelles preuves et quelles conditions d’exploitation sont inclus ?",
                "Calcul en attente tant que le résultat visé n’est pas précisé",
              ],
              [
                "Travail",
                "Quel résultat observable produit chaque tâche ?",
                "Calcul en attente tant que ce résultat manque",
              ],
              [
                "Responsable",
                "Qui possède le résultat et répond à une demande de décision ?",
                "Calcul en attente tant que le responsable manque",
              ],
              [
                "Personne ou équipe disponible (capacité dédiée)",
                "Qui peut vraiment travailler sur cette tâche, et quand ?",
                "Disponibilités à clarifier si deux tâches partagent la même personne ou équipe sans ordre",
              ],
              [
                "Dépendances",
                "Quel résultat doit exister avant de commencer ?",
                "Ordre des tâches à corriger si un lien manque ou forme une boucle",
              ],
              [
                "Durées F/C/P",
                "Quelles hypothèses expliquent les trois valeurs ?",
                "Calcul en attente tant qu’une durée ou son explication manque",
              ],
              [
                "Réserve séparée",
                "Combien de jours de prudence la décision ajoute-t-elle explicitement ?",
                "Calcul en attente tant que la réserve n’est pas renseignée",
              ],
              [
                "Maximum disponible",
                "Quel nombre de jours ouvrés impose le raisonnement inverse ?",
                "Calcul en attente tant que le temps disponible n’est pas renseigné",
              ],
            ]}
          />

          <GuidePremiumMemo title="La phrase à garder dans la décision">
            <p>
              « La fin candidate est J+N jours ouvrés selon la chaîne
              déterminante et les hypothèses listées. Ici, J+N signifie N jours
              ouvrés écoulés depuis l’ouverture de J1 : une tâche de 1 jour
              occupe J1 et atteint son jalon à J+1. La réserve reste séparée. Si
              la ligne d’arrivée, une dépendance ou une personne disponible
              change, il faut recalculer et faire relire. »
            </p>
            <p>La première vérification porte sur l’ordre réel des tâches.</p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="chemin"
          number="02"
          label="Ordre des travaux"
          title="Une tâche attend le dernier résultat dont elle dépend"
        >
          <p>
            Représentez une tâche par son résultat, pas par une activité vague.
            Une tâche sans dépendance peut commencer à J1 si sa capacité est
            disponible. Si elle attend plusieurs résultats, son point de
            rencontre — la jonction — attend le dernier. Sa fin devient son
            début relatif plus sa durée. Ce calcul se répète jusqu’aux résultats
            terminaux. Les branches parallèles ne sont pas additionnées. En cas
            d’égalité, aucun chemin déterminant n’est masqué : chaque chaîne ex
            aequo est restituée.
          </p>

          <FormulaBox>
            {
              "début(tâche) = maximum des fins de ses prérequis\nfin(tâche) = début(tâche) + durée du scénario\nfin du réseau = maximum des fins terminales\ntotal de revue = fin du réseau + réserve affichée séparément"
            }
          </FormulaBox>

          <p>
            Le Schedule Assessment Guide du GAO formalise, pour de grands
            programmes publics, l’importance de la logique horizontale, des
            liens complets et du plus long chemin continu vers la fin. Ici, on
            transpose seulement ce principe de calcul à un petit réseau SaaS. La
            source ne fournit ni durée type ni garantie pour ce contexte.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/combien-de-temps-developper-saas/calendrier-saas-16x9.webp"
              alt="Réseau SaaS fictif avec une branche parallèle et une chaîne déterminante mise en évidence"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>

          <GuideTable
            caption="Ce que le calcul additionne, attend ou refuse"
            headers={["Situation", "Traitement", "Pourquoi"]}
            rows={[
              [
                "Tâches en série",
                "Additionner les durées sur leur chemin",
                "Le résultat suivant attend le précédent",
              ],
              [
                "Tâches vraiment parallèles",
                "Conserver leurs fins propres ; ne pas les additionner",
                "Elles ont des capacités distinctes et aucun ordre métier entre elles",
              ],
              [
                "Jonction",
                "Prendre la fin la plus tardive des prérequis",
                "Le résultat aval a besoin de tous",
              ],
              [
                "Cycle ou dépendance absente",
                "Corriger l’ordre des tâches avant tout calcul",
                "Aucun ordre de calcul cohérent n’existe",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Une liste complète peut produire un calendrier faux"
          >
            <p>
              Si les liens manquent, toutes les tâches semblent démarrer à J1.
              Si tout est additionné, le plan ignore le parallélisme réel. Le
              réseau doit donc être relu aux jonctions : accès externe,
              validation métier, données de test, recette, ouverture et retour
              arrière. Relisez ensuite les disponibilités : qui peut réellement
              travailler en parallèle ?
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="capacite"
          number="03"
          label="Responsables disponibles"
          title="Une même personne ou équipe ne travaille pas sur deux tâches à la fois"
        >
          <p>
            Le plan des dépendances dit ce qui doit attendre. La capacité
            désigne la personne ou l’équipe réellement disponible. Ces deux
            informations sont distinctes : deux tâches sans ordre métier peuvent
            pourtant se disputer la même personne ou équipe. Dans ce cas, le
            planificateur demande de clarifier les disponibilités jusqu’à ce
            qu’un ordre soit écrit ou qu’une personne ou équipe distincte soit
            confirmée.
          </p>

          <GuideTable
            caption="Trois configurations de capacité à ne pas confondre"
            headers={["Configuration", "Réseau acceptable", "Preuve attendue"]}
            rows={[
              [
                "Deux équipes distinctes",
                "Parallèle si aucun résultat ne dépend de l’autre",
                "Responsables et disponibilités confirmés",
              ],
              [
                "Une personne partagée",
                "Ordre explicite entre les tâches",
                "Priorité et séquence assumées par le propriétaire",
              ],
              [
                "Intervenant externe",
                "Résultat attendu relié comme dépendance",
                "Responsable de relance, condition d’entrée et réponse attendue",
              ],
            ]}
          />

          <p>
            Le Scrum Guide officiel de novembre 2020 borne un Sprint à un mois
            au maximum et en fait une boucle d’inspection et d’adaptation. Cette
            cadence aide à voir le travail et à apprendre ; elle ne donne pas la
            durée totale du SaaS. Compter des sprints sans relier les décisions,
            les tiers, les validations et l’exploitation change seulement
            l’unité d’une hypothèse incomplète.
          </p>
          <p>
            Ajouter une personne, un outil d’IA ou une plateforme no-code ne
            raccourcit pas automatiquement la chaîne. Il faut montrer la tâche
            supprimée ou modifiée, la capacité réellement nouvelle, les
            jonctions déplacées et les preuves qui restent à produire. La durée
            est ensuite recalculée, jamais décrétée.
          </p>

          <GuidePremiumMemo
            eyebrow="Contrôle de capacité"
            title="Même identifiant de capacité = ordre explicite"
          >
            <ul>
              <li>Nommez une capacité stable pour chaque tâche.</li>
              <li>Reliez les tâches qui mobilisent la même capacité.</li>
              <li>
                Ne confondez pas propriétaire du résultat et disponibilité.
              </li>
              <li>Rejouez le réseau après toute réaffectation.</li>
            </ul>
          </GuidePremiumMemo>
          <p>
            L’ordre des personnes ne suffit pourtant pas : deux calendriers ne
            se comparent que s’ils visent exactement le même résultat final.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="arrivee"
          number="04"
          label="Périmètre observable"
          title="Prototype, pilote et service soutenable ne finissent pas au même endroit"
        >
          <p>
            « SaaS terminé » n’est pas une ligne d’arrivée. Décrivez qui peut
            utiliser le résultat, dans quel environnement, avec quelles données,
            quels contrôles, quel support et quelle possibilité de revenir en
            arrière. Sans cette frontière, deux calendriers peuvent couvrir des
            produits différents tout en employant le même mot.
          </p>

          <GuideTable
            caption="Quatre lignes d’arrivée à distinguer avant d’estimer"
            headers={[
              "Ligne d’arrivée",
              "Résultat inclus",
              "Ce qu’elle ne prouve pas",
            ]}
            rows={[
              [
                "Preuve ciblée",
                "Une hypothèse risquée testée avec une preuve définie",
                "Que le service peut accueillir des utilisateurs réels",
              ],
              [
                "Prototype",
                "Un parcours assez réaliste pour apprendre",
                "Que le code, les données ou l’exploitation sont prêts",
              ],
              [
                "Pilote privé",
                "Un périmètre réel borné, des personnes autorisées, une recette et un support préparé",
                "Que l’ouverture générale est décidée",
              ],
              [
                "Service soutenable",
                "Exploitation, sécurité, accessibilité, données, restauration, supervision et amélioration continues",
                "Que ces conditions resteront vraies sans responsables",
              ],
            ]}
          />

          <p>
            Le Service Manual GOV.UK distingue découverte, alpha, bêta et phase
            live par leur but. Sa page de découverte, mise à jour le 21 juin
            2021, demande de comprendre le problème avant de construire et
            prévoit qu’une équipe puisse arrêter. Sa page live, mise à jour le 8
            mai 2019, maintient recherche, sécurité, accessibilité, supervision
            et qualité dans l’exploitation. Ces pages concernent des services
            publics britanniques : on reprend la distinction des fins, pas leurs
            indications de durée.
          </p>

          <h3>Une option sans nouveau produit peut être préférable</h3>
          <p>
            Avant de planifier le développement, rejouez le résultat attendu
            avec une fonction déjà disponible, une configuration limitée, un
            processus manuel contrôlé, un contenu explicatif, un partenariat ou
            l’option de ne rien construire. Comparez le même utilisateur, le
            même résultat, les mêmes risques et la même preuve. Si l’option plus
            légère tient la ligne d’arrivée, elle devient la décision à revoir.
          </p>

          <InfoBox
            variant="blue"
            title="Ce que la source GOV.UK permet d’affirmer"
          >
            <p>
              La source GOV.UK « Planning in agile » a été mise à jour le 31
              mars 2026. Elle recommande une vision, des objectifs, une feuille
              de route visible et l’exposition des dépendances entre équipes. Le
              31 mars 2026 date la source, pas votre livraison. Une fois la
              ligne d’arrivée choisie, rejouez une hypothèse à la fois et
              regardez si la suite de tâches qui fixe la fin se déplace.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exemple"
          number="05"
          label="Cas entièrement fictif"
          title="Dans RelaisPro, une hypothèse différente change la chaîne qui fixe la fin"
        >
          <GuidePremiumCase
            initial="RP"
            eyebrow="Exemple entièrement fictif · aucune référence de marché"
            title="RelaisPro — pilote privé de suivi de demandes B2B"
          >
            <p>
              Ligne d’arrivée fictive : un pilote privé traite une demande
              fictive de bout en bout, avec accès attribués, recette signée,
              support préparé et retour arrière documenté. Les valeurs servent
              uniquement à rejouer les équations du moteur.
            </p>
          </GuidePremiumCase>

          <GuideTable
            caption="Réseau fictif RelaisPro, en jours ouvrés favorables, centraux et prudents"
            headers={[
              "ID et résultat",
              "Dépend de",
              "Capacité",
              "F/C/P",
              "Incertitude",
            ]}
            rows={[
              [
                "parcours — critères décidés",
                "Aucune",
                "produit-cadrage",
                "3 / 5 / 7",
                "Cas limites à arbitrer",
              ],
              [
                "acces-tiers — accès de test ouvert",
                "Aucune",
                "tiers-acces",
                "2 / 4 / 6",
                "Réponse externe ; +6 en stress",
              ],
              [
                "parcours-construit — parcours testable",
                "parcours + acces-tiers",
                "dev-relaispro",
                "8 / 12 / 17",
                "Écarts aux jonctions",
              ],
              [
                "support-prepare — support et retour arrière prêts",
                "parcours",
                "operations-relaispro",
                "4 / 6 / 9",
                "Cas dégradés à couvrir",
              ],
              [
                "recette — contrôles acceptés",
                "parcours-construit + support-prepare",
                "recette-relaispro",
                "3 / 5 / 8",
                "Validation interne ; +5 en stress",
              ],
              [
                "pilote-ouvert — ligne d’arrivée atteinte",
                "recette",
                "dev-relaispro",
                "2 / 3 / 5",
                "Contrôles d’ouverture",
              ],
            ]}
          />

          <p>
            La tâche support-prepare avance réellement en parallèle du parcours
            construit grâce à une capacité distincte. Elle rejoint le réseau à
            la recette et n’est pas additionnée si elle finit avant l’autre
            prérequis. La capacité dev-relaispro apparaît deux fois, mais les
            tâches sont explicitement ordonnées par la recette : aucun
            parallélisme artificiel n’est supposé.
          </p>

          <GuideTable
            caption="Cinq relectures du même exemple fictif"
            headers={["Cas", "Hypothèse rejouée", "Calcul transparent"]}
            rows={scenarioRows}
          />

          <FormulaBox>
            {
              "favorable : 3 + 8 + 3 + 2 = 16 ; réserve 4 ; revue J+20\ncentral : 5 + 12 + 5 + 3 = 25 ; réserve 4 ; revue J+29\nprudent : 7 + 17 + 8 + 5 = 37 ; réserve 4 ; revue J+41\nstress combiné : (6 + 6) + 17 + (8 + 5) + 5 = 47 ; réserve 4 ; revue J+51\nraisonnement inverse : prudent avec réserve 41 - maximum 34 = écart de 7 jours"
            }
          </FormulaBox>

          <p>
            Le stress combiné dégrade en même temps l’attente externe et la
            validation interne. La chaîne déterminante bascule alors de parcours
            → parcours-construit → recette → pilote-ouvert vers acces-tiers →
            parcours-construit → recette → pilote-ouvert. Le moteur ne conserve
            donc pas un chemin critique figé. Il n’emploie l’étiquette « stress
            combiné » que si ces deux familles portent chacune un effet
            additionnel strictement positif ; avec une seule ou aucune, il le
            dit explicitement.
          </p>

          <GuidePremiumMemo
            eyebrow="Résultat du moteur"
            title={relaisPro.title}
          >
            <p>
              Résultat : <strong>{relaisPro.title}</strong>. Le prudent avec
              réserve séparée atteint J+
              {relaisPro.reverseReasoning?.prudentWithReserveDays}. Face au
              maximum de {relaisPro.reverseReasoning?.maxWorkingDays} jours,
              l’écart est de {relaisPro.reverseReasoning?.gapDays} jours. Cette
              valeur n’autorise aucune réduction automatique.
            </p>
          </GuidePremiumMemo>
          <p>
            Sur votre projet, vérifiez maintenant si les entrées sont assez
            complètes et cohérentes pour autoriser le calcul.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="planificateur"
          number="06"
          label="Outil local"
          title="Le planificateur s’arrête tant que les entrées ne permettent pas un calcul"
        >
          <p>
            Commencez vide ou chargez RelaisPro. Le moteur vérifie les
            identifiants, les responsables, les trois durées, l’ordre des
            tâches, les boucles et les personnes ou équipes partagées. Il ne
            calcule les quatre scénarios qu’après ces contrôles. Le brouillon
            Markdown reste visible et sélectionnable pour être relu.
          </p>
          <p>
            Chaque champ numérique conserve la chaîne saisie avant conversion.
            Le point est le seul séparateur décimal accepté (par exemple 0.5),
            sans exposant, avec au plus six décimales significatives et une
            borne technique de 1 000 000 jours ouvrés. Toute entrée ou somme qui
            dépasse ces règles empêche le calcul des quatre scénarios : elle
            n’est jamais arrondie ni partiellement calculée.
          </p>

          <SaasSchedulePlannerTool />

          <GuidePremiumMemo title="Ce que l’outil ne décide jamais">
            <ul>
              <li>La vérité de la ligne d’arrivée.</li>
              <li>La disponibilité réelle des responsables.</li>
              <li>La pertinence des trois durées renseignées.</li>
              <li>L’acceptation d’un écart au raisonnement inverse.</li>
              <li>
                La transformation de J+N en engagement civil ou contractuel.
              </li>
            </ul>
          </GuidePremiumMemo>
          <p>
            Le calcul peut maintenant démarrer. Avant d’en discuter, expliquez
            ce que couvrent les trois durées et ce qui relève de la réserve.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incertitude"
          number="07"
          label="Hypothèses comparables"
          title="Trois durées expliquent l’écart ; la réserve reste à part"
        >
          <p>
            Écrivez pour chaque tâche une hypothèse favorable, centrale et
            prudente. L’écart doit venir d’une incertitude observable : nombre
            de cas à arbitrer, disponibilité d’une validation, qualité des
            données fictives, temps de réponse d’un tiers ou reprise après un
            contrôle. Une simple étiquette sans cause ne rend pas la valeur
            défendable.
          </p>

          <GuideTable
            caption="Règles de construction des scénarios déterministes"
            headers={["Élément", "Règle", "Contrôle"]}
            rows={[
              [
                "Favorable",
                "Conditions favorables explicites, sans supprimer une tâche nécessaire",
                "Chaque cause est racontable",
              ],
              [
                "Central",
                "Hypothèses de travail retenues pour la discussion",
                "Aucune valeur inconnue n’est remplacée par zéro",
              ],
              [
                "Prudent",
                "Dégradation de chaque durée, mêmes dépendances",
                "Le chemin est recalculé",
              ],
              [
                "Stress combiné",
                "Deux causes identifiées se dégradent ensemble",
                "La chaîne peut changer",
              ],
              [
                "Réserve",
                "Jours ajoutés après le chemin, affichés séparément",
                "Aucune seconde réserve cachée dans chaque tâche",
              ],
            ]}
          />

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/combien-de-temps-developper-saas/calendrier-saas-4x3.webp"
              alt="Quatre scénarios déterministes et une réserve séparée sans score"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>

          <InfoBox variant="amber" title="Éviter la double prudence">
            <p>
              Si chaque durée prudente inclut déjà un coussin implicite et
              qu’une réserve supplémentaire est ajoutée sans l’expliquer, la
              revue ne sait plus ce qui relève du travail, de l’incertitude ou
              de la décision. Documentez les causes dans les tâches, puis une
              seule réserve explicite après la chaîne. Sans cette séparation, un
              dépassement du temps disponible ne dit plus si le problème vient
              du travail estimé ou de la prudence ajoutée.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="raisonnement-inverse"
          number="08"
          label="Contrainte de temps"
          title="Si le prudent dépasse le temps disponible, commencez par mesurer l’écart"
        >
          <p>
            Le raisonnement inverse compare le maximum de jours ouvrés
            réellement disponibles au scénario prudent, réserve séparée
            comprise. S’il manque sept jours, le résultat est un écart de sept
            jours. Le moteur ne réduit aucune tâche, ne déplace aucune preuve et
            ne prétend pas qu’une nouvelle capacité existe.
          </p>

          <div className="not-prose my-8 mx-auto max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/combien-de-temps-developper-saas/calendrier-saas-1x1.webp"
              alt="Quatre résultats possibles : informations à compléter, ordre à corriger, disponibilités à clarifier ou calendrier prêt à relire"
              width={900}
              height={900}
              sizes="(max-width: 640px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <h3>Six décisions possibles, aucune n’est automatique</h3>
          <ol>
            <li>
              <strong>Changer la ligne d’arrivée</strong> : passer d’une
              ouverture générale à un pilote privé, avec ses propres preuves.
            </li>
            <li>
              <strong>Retirer un résultat de la première version</strong> :
              accepter explicitement ce qui est reporté et son effet pour
              l’utilisateur.
            </li>
            <li>
              <strong>Remplacer le développement</strong> : utiliser une
              fonction existante ou un processus manuel contrôlé pour le même
              résultat.
            </li>
            <li>
              <strong>Changer l’ordre</strong> : seulement si la dépendance
              métier le permet et si les nouveaux points de rencontre sont
              testés.
            </li>
            <li>
              <strong>
                Ajouter une personne ou équipe réellement disponible
              </strong>
              : nommer sa disponibilité et les coordinations induites.
            </li>
            <li>
              <strong>Déplacer la date</strong> : après définition de J1 et de
              la convention de jours ouvrés applicable.
            </li>
          </ol>

          <p>
            Après chaque décision, reconstruisez le réseau depuis les entrées.
            Une correction peut déplacer la chaîne déterminante, créer un
            conflit de capacité ou changer le stress combiné. Une capture d’un
            ancien calcul ne constitue pas une preuve du nouveau calendrier.
          </p>

          <GuidePremiumMemo
            eyebrow="Règle de décision"
            title="L’écart n’est pas une invitation à comprimer silencieusement"
          >
            <p>
              Notez la décision, son propriétaire, le résultat retiré ou déplacé
              et la nouvelle preuve d’arrivée. Rejouez ensuite favorable,
              central, prudent et stress combiné, puis le raisonnement inverse.
            </p>
          </GuidePremiumMemo>
          <p>
            Une date ne devient défendable que si le calendrier comprend aussi
            les contrôles et l’exploitation qui rendent le service utilisable.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="production"
          number="09"
          label="Qualité et exploitation"
          title="Qualité, sécurité et support doivent apparaître dans le calendrier"
        >
          <p>
            Ne placez pas les contrôles essentiels dans une tâche finale appelée
            « mise en production ». Reliez chaque contrôle au travail qu’il peut
            bloquer : choix de données fictives, règles d’accès, critères
            d’accessibilité, tests unitaires et d’intégration, sécurité,
            environnement de préproduction, restauration, observabilité,
            support, correction et retour arrière. Un échec arrête ainsi le
            calendrier au bon endroit.
          </p>

          <p>
            Le NIST SP 800-218 SSDF v1.1 est final depuis février 2022. Il
            recommande d’intégrer les pratiques de développement sécurisé tout
            au long du cycle. La v1.2 publiée le 17 décembre 2025 reste une
            Initial Public Draft : elle ne remplace pas la v1.1 finale dans ce
            guide. De son côté, le guide CNIL de sécurité, version 2024 mise à
            jour en 2026, demande notamment des tests avant mise en production,
            la séparation des environnements et l’usage de données fictives
            lorsque possible.
          </p>

          <GuideTable
            caption="Résultats qualité à placer avant leurs jonctions"
            headers={["Résultat", "Responsable à nommer", "Preuve à relier"]}
            rows={[
              [
                "Données de test prêtes",
                "Propriétaire des données et responsable de l’environnement",
                "Jeu fictif, séparation et conditions de nettoyage",
              ],
              [
                "Règles d’accès contrôlées",
                "Propriétaire métier des autorisations",
                "Cas autorisés, refusés et contrôles après retrait",
              ],
              [
                "Parcours accessible",
                "Responsable de la vérification et autorité de réception",
                "Clavier, focus, erreurs, messages et correctifs rejoués",
              ],
              [
                "Restauration et retour arrière prêts",
                "Responsable d’exploitation",
                "Restauration d’un jeu fictif, contrôle d’intégrité et procédure testée",
              ],
              [
                "Support du pilote préparé",
                "Responsable des opérations",
                "Détection, attribution, correction, trace et fermeture",
              ],
            ]}
          />

          <h3>Contrôle autonome avant une date civile</h3>
          <ol>
            <li>Relire la ligne d’arrivée avec son autorité d’acceptation.</li>
            <li>Attribuer chaque résultat, décision et réponse externe.</li>
            <li>
              Vérifier tous les liens, les jonctions et l’absence de cycle.
            </li>
            <li>Ordonner les tâches qui partagent une capacité.</li>
            <li>Expliquer chaque écart favorable, central et prudent.</li>
            <li>
              Rejouer le stress combiné et observer le changement de chemin.
            </li>
            <li>
              Comparer le prudent au maximum disponible sans le comprimer.
            </li>
            <li>
              Fixer J1 et la convention de jours ouvrés seulement après cette
              revue.
            </li>
          </ol>

          <p>
            Une fois ces contrôles terminés, le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges SaaS
            </Link>{" "}
            aide à figer ce qui doit être construit. L’
            <Link href="/guides/plan-recette-application-metier">
              organisation de la recette
            </Link>{" "}
            prépare les preuves d’acceptation. La page{" "}
            <Link href="/services/saas-applications-metier">
              SaaS et applications métier
            </Link>{" "}
            décrit l’accompagnement. Pour demander une relecture, partagez une
            version sans donnée sensible.
          </p>

          <p>
            Un calendrier ne se raccourcit pas en pressant l’équipe, mais en
            réduisant le périmètre : le guide{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              ce qu’un MVP doit contenir
            </Link>{" "}
            explique quelles fonctions peuvent attendre sans vider le produit de
            son intérêt. En amont, la{" "}
            <Link href="/guides/valider-idee-saas-avant-developper">
              validation d’une idée de SaaS
            </Link>{" "}
            évite de planifier un développement dont l’hypothèse principale n’a
            jamais été confrontée à un client.
          </p>

          <p>
            Trois inconnues pèsent plus lourd que les autres sur une date. Le{" "}
            <Link href="/guides/calculer-roi-application-metier">
              calcul du retour sur investissement
            </Link>{" "}
            arbitre ce qui justifie d’allonger le calendrier. La reprise d’un{" "}
            <Link href="/guides/reprendre-logiciel-metier-existant">
              logiciel métier existant
            </Link>{" "}
            et la{" "}
            <Link href="/guides/migrer-logiciel-metier-sans-interruption">
              migration sans interruption de service
            </Link>{" "}
            ajoutent des tâches que les plannings oublient presque toujours :
            inventaire, reprise de données, coexistence et retour arrière.
            Enfin,{" "}
            <Link href="/guides/choisir-prestataire-application-metier">
              choisir un prestataire sur preuves
            </Link>{" "}
            évite d’accepter une date qu’aucun élément ne soutient.
          </p>

          <GuidePremiumMemo
            eyebrow="État du calcul"
            title="Un calendrier prêt à relire reste un brouillon"
          >
            <p>
              Cet état autorise une revue humaine du calendrier relatif. Il ne
              prouve ni disponibilité future, ni acceptation, ni engagement, ni
              mise en ligne. Toute correction substantielle invalide le résultat
              précédent et demande un nouveau contrôle.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
