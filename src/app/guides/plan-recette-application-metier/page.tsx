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
import { AcceptanceReadinessTool } from "./acceptance-readiness-tool";

const guide = getGuide("plan-recette-application-metier");
const breadcrumbName = "Plan de recette d’une application métier";

export const metadata = buildGuideMetadata(
  guide,
  "Chaîne de preuve d’une recette : besoin métier, cas rejouable, preuve et décision",
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
    id: "ouvrir",
    number: "02",
    label: "Ouvrir la campagne",
    shortLabel: "Ouvrir",
  },
  {
    id: "cas-rejouable",
    number: "03",
    label: "Écrire un cas rejouable",
    shortLabel: "Écrire",
  },
  {
    id: "donnees-roles",
    number: "04",
    label: "Préparer données et rôles",
    shortLabel: "Préparer",
  },
  {
    id: "couverture",
    number: "05",
    label: "Couvrir les vrais risques",
    shortLabel: "Couvrir",
  },
  {
    id: "outil",
    number: "06",
    label: "Relire le dossier",
    shortLabel: "Relire",
  },
  {
    id: "anomalies",
    number: "07",
    label: "Qualifier les anomalies",
    shortLabel: "Qualifier",
  },
  {
    id: "cas-fictif",
    number: "08",
    label: "Cas fictif complet",
    shortLabel: "Rejouer",
  },
  {
    id: "decision",
    number: "09",
    label: "Décider et conserver",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "preparer",
    num: "01",
    label: "Préparer",
    items: [
      {
        question:
          "Quelle est la différence entre un plan de test et un plan de recette ?",
        answer:
          "La différence tient surtout à l’objectif, même si les noms varient selon les organisations. Dans ce guide, la recette désigne le test d’acceptation centré sur les besoins métier et la décision de mise à disposition. Les tests unitaires, d’intégration, système, de sécurité ou de performance gardent leurs objectifs propres.",
      },
      {
        question: "Qui doit rédiger les cas de recette ?",
        answer:
          "Le métier apporte les règles, les parcours et les impacts. L’équipe chargée des tests aide à rendre les cas rejouables. L’équipe technique identifie la version, l’environnement et les traces qui permettront de constater le résultat. Une personne nommée fixe le périmètre ; les responsabilités exactes dépendent du projet.",
      },
      {
        question: "Quand faut-il écrire le plan de recette ?",
        answer:
          "Avant la livraison soumise à recette. Écrire les cas assez tôt révèle les besoins vagues, les données manquantes et les critères impossibles à observer. La version, les données finales et le calendrier peuvent ensuite être ajustés sans attendre le premier jour d’exécution.",
      },
    ],
  },
  {
    key: "executer",
    num: "02",
    label: "Exécuter",
    items: [
      {
        question:
          "Combien de cas de test faut-il pour une application métier ?",
        answer:
          "Il n’existe pas de nombre universel. Partez des parcours critiques, règles métier, rôles, interfaces, erreurs et qualités pertinentes. Priorisez par risque et rendez visible ce qui reste hors périmètre : le volume seul ne prouve pas la couverture utile.",
      },
      {
        question: "Peut-on utiliser des données copiées depuis la production ?",
        answer:
          "Non, pas pour des données personnelles dans un environnement de développement ou de test : la CNIL demande des environnements distincts et des données fictives ou anonymisées. Si une vérification en production ou un traitement exceptionnel paraît indispensable, arrêtez la copie. Les responsables compétents doivent alors qualifier la finalité, la base juridique, la minimisation, les accès, la conservation et la suppression. Ce guide ne crée aucune dérogation.",
      },
      {
        question: "Un cas bloqué compte-t-il comme un échec ?",
        answer:
          "Non. Gardez-le identifié comme bloqué : le résultat fonctionnel n’a pas été observé, contrairement à un cas exécuté dont l’attendu n’est pas atteint. Corrigez la condition de blocage puis rejouez ; ne transformez ni l’un ni l’autre en réussite.",
      },
    ],
  },
  {
    key: "decider",
    num: "03",
    label: "Décider",
    items: [
      {
        question: "Quel taux de réussite autorise l’acceptation ?",
        answer:
          "Aucun taux universel. Un score élevé peut encore masquer un parcours critique non exécuté, un échec non classé, une réserve ou une anomalie bloquante. Décidez avec les critères convenus, les résultats par risque, les écarts, les preuves et les limites de la campagne.",
      },
      {
        question:
          "Quelle différence entre gravité et priorité d’une anomalie ?",
        answer:
          "La gravité décrit l’impact observé sur le métier, les utilisateurs ou les exigences. La priorité indique l’ordre de traitement décidé. Elles peuvent diverger : conservez les deux champs et la justification au lieu de les fusionner.",
      },
      {
        question:
          "Une recette réussie vaut-elle automatiquement acceptation juridique ?",
        answer:
          "Non, pas à partir de ce guide. Les effets d’une réception, d’une réserve, d’un paiement ou d’un délai dépendent des documents signés et du contexte. Relisez le contrat, le devis et la procédure prévue ; demandez un conseil juridique en cas de désaccord ou d’enjeu important.",
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
          { label: "Guide pratique 2026", variant: "dark" },
          { label: "Chaîne de preuve de recette", variant: "neutral" },
          { label: "Aucun taux automatique", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Plan de recette d’une application métier :"
        heroTitleEm="prouver avant"
        heroTitleSuffix="d’accepter"
        heroDescription="Transformez chaque besoin métier en cas rejouable : version, acteur, données, action, résultat attendu, résultat obtenu et preuve. Puis décidez sans cacher les tests critiques non exécutés derrière un pourcentage."
        stats={[
          { label: "Points à relire", value: "8" },
          { label: "Verdicts possibles", value: "7" },
          { label: "Seuil universel", value: "Aucun" },
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
          eyebrow: "Projet d’application métier",
          titleStart: "Cadrer",
          titleEm: "une recette vérifiable",
          description:
            "Apportez le périmètre, les parcours critiques, les rôles disponibles et les critères déjà convenus. Les inconnues resteront visibles.",
          benefits: [
            "Un besoin relié à chaque cas",
            "Données, attendu et preuve explicites",
            "Décision confiée à la personne autorisée",
          ],
          primaryCtaLabel: "Faire cadrer mon plan",
          primaryCtaHref: "/demarrer-un-projet",
        }}
        toc={toc}
        tocLabel="Chaîne de recette"
        mobileCtaLabel="Faire cadrer mon plan"
        sidebarContextCta={{
          eyebrow: "Recette métier",
          title: "Préparer les preuves avant la livraison",
          description:
            "Décrivez la version, les parcours critiques, les personnes capables de tester et les interfaces concernées.",
          benefits: [
            "Critères d’entrée et de sortie séparés",
            "Cas bloqués et non exécutés visibles",
            "Décideur et procédure réelle identifiés",
          ],
          ctaLabel: "Décrire mon besoin",
          ctaHref: "/demarrer-un-projet",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions avant",
          titleEm: "la recette",
          titleEnd: "de l’application.",
          subtitle:
            "Des réponses courtes sur les rôles, les données, les cas bloqués, les anomalies et la portée de la décision.",
          ctaTitle: "Rendre une recette rejouable",
          ctaDescription:
            "Décrivez le périmètre et les preuves déjà disponibles, sans transmettre de données personnelles ni de contenu confidentiel.",
          ctaLabel: "Préparer la recette",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "ISTQB · CTFL v4.0.1",
            href: "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf",
            description:
              "Syllabus du 15 septembre 2024 : niveaux et activités de test, acceptation centrée sur les besoins métier, plan, critères d’entrée et de sortie, traçabilité, priorisation et rapports d’anomalie. Référence pédagogique, pas certification du projet.",
          },
          {
            source: "ISO/IEC/IEEE 29119-2:2021",
            href: "https://www.iso.org/standard/79428.html",
            description:
              "Présentation publique de processus génériques de test applicables aux différents cycles de développement. Le texte complet de la norme n’est pas reproduit.",
          },
          {
            source: "ISO/IEC/IEEE 29119-3:2021",
            href: "https://www.iso.org/standard/79429.html",
            description:
              "Présentation publique de modèles de documentation de test utilisables dans différents projets et organisations. Aucun champ détaillé non public n’est attribué à la norme.",
          },
          {
            source: "ISO/IEC 25010:2023",
            href: "https://www.iso.org/standard/78176.html",
            description:
              "Modèle de qualité produit à neuf caractéristiques, utilisable pour identifier des objectifs de test et des critères d’acceptation au-delà des seules fonctions.",
          },
          {
            source: "CNIL · Tester vos applications",
            href: "https://www.cnil.fr/fr/tester-vos-applications",
            description:
              "Fiche du 27 janvier 2020 : métriques définies avec les parties prenantes ; données personnelles de production à ne pas utiliser en développement ou test ; jeu fictif représentatif et anonymisation des configurations importées.",
          },
          {
            source: "CNIL · Encadrer les développements",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Fiche du 14 mars 2024 : tests complets, environnement distinct, données fictives ou anonymisées et non-régression ou revue avant mise en production d’une mise à jour.",
          },
          {
            source: "W3C WAI · Évaluer l’accessibilité",
            href: "https://www.w3.org/WAI/test-evaluate/",
            description:
              "Ressources d’évaluation : agir tôt, combiner outils et évaluation humaine compétente ; aucun outil seul ne détermine la conformité d’accessibilité.",
          },
          {
            source: "OWASP · ASVS 5.0.0",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Exemple de base versionnée pour vérifier les contrôles techniques de sécurité d’une application web. À sélectionner avec des spécialistes ; ce n’est pas une obligation générale.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites",
          title:
            "Ce plan prépare la recette ; il ne l’exécute pas et ne donne pas d’avis juridique",
          description:
            "Le guide, l’exemple fictif et l’outil local ne testent pas votre application. Les exigences, la sécurité, l’accessibilité, les données personnelles, les interfaces et les effets contractuels doivent être qualifiés sur le système et les documents réels par les personnes compétentes.",
        }}
        relatedGuides={[
          {
            label: "Reprendre un logiciel métier existant",
            href: "/guides/reprendre-logiciel-metier-existant",
          },
          {
            label: "Migrer un logiciel métier sans interruption",
            href: "/guides/migrer-logiciel-metier-sans-interruption",
          },
          {
            label: "Choisir un prestataire d’application métier",
            href: "/guides/choisir-prestataire-application-metier",
          },
        ]}
        relatedGuidesLabel="À lire avant ou après la recette"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse courte"
          title="Une recette relie un besoin à une preuve exploitable"
        >
          <p>
            Écrivez le plan avant la livraison. Pour chaque cas, nommez le
            besoin vérifié, la version, l’acteur et ses droits, l’état de
            départ, les données, les actions, le résultat attendu observable, le
            résultat obtenu et la preuve. Ajoutez la personne qui exécute et
            celle qui décide.
          </p>

          <p>
            Exécutez d’abord les parcours dont l’échec aurait le plus d’impact.
            Gardez séparés quatre états : réussi, échoué, bloqué et non exécuté.
            Un cas critique absent reste absent, même si 99 autres cas sont
            verts. La campagne se termine par une décision documentée, jamais
            par un pourcentage isolé.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/plan-recette-application-metier/recette-preuve-16x9.webp"
              alt="Chaîne de preuve reliant besoin métier, cas rejouable, résultat, preuve et décision avec une branche STOP"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>

          <GuidePremiumMemo title="Résolvez le désaccord sur l’attendu avant l’exécution">
            <p>
              Si le métier et le prestataire ne donnent pas le même résultat
              attendu à un cas, ils ne testeront pas la même règle. Le plan
              permet de repérer cette ambiguïté. Corrigez l’attendu avant
              d’exécuter le cas.
            </p>
          </GuidePremiumMemo>

          <InfoBox
            variant="blue"
            title="La recette métier ne remplace pas tous les tests"
          >
            <p>
              Le{" "}
              <a
                href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                syllabus Foundation Level de l’ISTQB
              </a>{" "}
              distingue notamment les tests de composants, d’intégration, de
              système et d’acceptation. La recette valide les besoins des
              utilisateurs ; elle ne transforme pas une vérification métier en
              audit de sécurité, de performance ou d’accessibilité.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="ouvrir"
          number="02"
          label="Préconditions"
          title="N’ouvrez pas la campagne sans version précise ni décideur nommé"
        >
          <p>
            Commencez par identifier exactement ce qui sera testé. « La dernière
            version » ne suffit pas : consignez l’identifiant de livraison,
            l’environnement, les données chargées, les interfaces disponibles et
            les configurations qui influencent le résultat. Une correction
            installée pendant la recette crée une nouvelle base de comparaison.
            Notez son impact et les cas à rejouer.
          </p>

          <GuideTable
            caption="Conditions à vérifier avant d’exécuter la recette"
            headers={["Condition", "Question concrète", "Preuve d’ouverture"]}
            rows={[
              [
                "Périmètre",
                "Quelles fonctions, interfaces, rôles et qualités sont inclus ou exclus ?",
                "Liste versionnée et exclusions justifiées",
              ],
              [
                "Version",
                "Quel artefact exact est soumis aux tests ?",
                "Identifiant de livraison et configuration",
              ],
              [
                "Environnement",
                "Les services, droits, appareils et dépendances nécessaires répondent-ils ?",
                "Contrôle de démarrage consigné",
              ],
              [
                "Données",
                "Les cas normaux, limites et erreurs peuvent-ils être joués sans exposer inutilement des personnes ?",
                "Jeu fictif ou anonymisé préparé",
              ],
              [
                "Responsabilités",
                "Qui exécute, qualifie, corrige, reteste et décide ?",
                "Noms ou rôles et disponibilités confirmés",
              ],
              [
                "Sortie",
                "Quelles conditions permettent d’arrêter les tests et de soumettre la décision ?",
                "Critères écrits avant l’exécution",
              ],
            ]}
          />

          <p>
            Les{" "}
            <a
              href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              critères d’entrée et de sortie présentés par l’ISTQB
            </a>{" "}
            répondent à deux questions différentes : que faut-il avoir pour
            commencer, puis qu’est-ce qui doit être atteint pour déclarer
            l’activité terminée ? Arriver au bout du temps prévu n’efface pas
            les critères manquants. Si les parties prenantes décident néanmoins
            de s’arrêter, le risque résiduel reste à examiner et à consigner.
          </p>

          <GuidePremiumMemo title="Le décideur ne doit pas apparaître le dernier jour">
            <p>
              Nommez avant la campagne la personne qui peut accepter, refuser,
              demander une correction ou appliquer la procédure prévue. Le
              testeur constate ; il ne reçoit pas automatiquement le pouvoir
              contractuel de décider.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-rejouable"
          number="03"
          label="Conception"
          title="Écrivez un cas qu’une autre personne peut rejouer sans vous appeler"
        >
          <p>
            « Vérifier la facturation » ne constitue pas encore un cas. Il
            manque l’acteur, le dossier de départ, la règle appliquée et le
            résultat qui permettra de conclure. Écrivez une suite courte :
            besoin, état de départ, données, actions, résultat attendu
            observable et preuve.
          </p>

          <GuideTable
            caption="Du besoin vague au cas de recette rejouable"
            headers={["Champ", "Question", "Formulation utile"]}
            rows={[
              [
                "Référence",
                "Quelle règle ou quel risque est couvert ?",
                "R-FAC-04 — une intervention validée crée un seul brouillon de facture",
              ],
              [
                "Version",
                "Qu’est-ce qui est testé ?",
                "Version et environnement identifiables",
              ],
              [
                "Acteur",
                "Qui agit avec quels droits ?",
                "Responsable d’agence autorisé à valider",
              ],
              [
                "État de départ",
                "Que doit-il déjà être vrai ?",
                "Intervention clôturée, non facturée, lignes de temps présentes",
              ],
              [
                "Données",
                "Quelles valeurs font fonctionner la règle ?",
                "Déplacement, temps et pièce fictifs, plus limites prévues",
              ],
              [
                "Action",
                "Quelles étapes exactes sont réalisées ?",
                "Ouvrir, relire, valider une fois, consulter le brouillon",
              ],
              [
                "Attendu",
                "Quel résultat permet de conclure ?",
                "Un brouillon unique, lignes et total exacts, statut modifié",
              ],
              [
                "Preuve",
                "Que faut-il garder pour relire ?",
                "Identifiant du cas, journal et capture contextualisée si utile",
              ],
            ]}
          />

          <p>
            « L’écran est rapide », « le résultat paraît correct » ou «
            l’interface est intuitive » ne sont pas encore des attendus
            testables. Fixez la mesure, le contexte et le seuil quand une
            qualité non fonctionnelle compte. La{" "}
            <a
              href="https://www.iso.org/standard/78176.html"
              target="_blank"
              rel="noreferrer"
            >
              présentation publique d’ISO/IEC 25010:2023
            </a>{" "}
            indique que son modèle de qualité peut aider à identifier des
            objectifs de test et des critères d’acceptation. Elle ne fournit pas
            un seuil universel pour votre produit.
          </p>

          <FormulaBox>
            {[
              "CAS DE RECETTE",
              "",
              "Identifiant et besoin couvert :",
              "Version et environnement :",
              "Acteur et droits :",
              "État de départ :",
              "Données de test et règle de construction :",
              "Actions exactes :",
              "Résultat attendu observable :",
              "Résultat obtenu :",
              "Statut — réussi / échoué / bloqué / non exécuté :",
              "Preuve et emplacement :",
              "Testeur et date :",
              "Anomalie liée, retest et limite connue :",
            ].join("\n")}
          </FormulaBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="donnees-roles"
          number="04"
          label="Jeux d’essai"
          title="Testez la règle avec le bon rôle et les données qui la mettent en difficulté"
        >
          <p>
            Un seul dossier « propre » prouve peu. Pour chaque règle importante,
            préparez la situation courante, les limites qui changent le
            comportement, une valeur absente et une action interdite lorsque ces
            situations peuvent réellement se produire. Ajoutez les doublons,
            dates, arrondis, volumes et interfaces seulement lorsqu’ils
            correspondent à un risque du projet.
          </p>

          <GuideTable
            caption="Familles de données à choisir selon la règle testée"
            headers={["Famille", "Question", "Exemple fictif"]}
            rows={[
              [
                "Nominale",
                "La situation courante aboutit-elle au résultat prévu ?",
                "Temps, déplacement et une pièce",
              ],
              [
                "Limite",
                "Que se passe-t-il juste au seuil ou à zéro ?",
                "Aucune pièce, durée minimale autorisée",
              ],
              [
                "Absente",
                "Le champ facultatif ou requis manque-t-il proprement ?",
                "Commentaire vide, référence obligatoire absente",
              ],
              [
                "Interdite",
                "Un rôle non autorisé peut-il agir ?",
                "Technicien tentant de modifier un tarif validé",
              ],
              [
                "Répétée",
                "La même action crée-t-elle un doublon ?",
                "Double clic ou relance de l’interface",
              ],
              [
                "Dépendance",
                "L’échec d’un service externe reste-t-il visible et récupérable ?",
                "Service de facturation indisponible",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Ne copiez pas la production pour gagner une matinée"
          >
            <p>
              La{" "}
              <a
                href="https://www.cnil.fr/fr/tester-vos-applications"
                target="_blank"
                rel="noreferrer"
              >
                CNIL recommande des données fictives représentatives
              </a>{" "}
              et l’anonymisation des données personnelles présentes dans les
              configurations importées. Sa fiche plus récente sur{" "}
              <a
                href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
                target="_blank"
                rel="noreferrer"
              >
                l’encadrement des développements
              </a>{" "}
              demande aussi de séparer développement, test et production et de
              travailler sur des données fictives ou anonymisées.
            </p>
            <p>
              Ces fiches ne fournissent pas d’exception prête à l’emploi. Si une
              vérification en production ou un traitement exceptionnel de
              données personnelles paraît indispensable, suspendez la copie. Les
              responsables compétents doivent qualifier la finalité, la base
              juridique, la minimisation, les accès, la conservation et la
              suppression.
            </p>
          </InfoBox>

          <p>
            Faites tester par les personnes qui connaissent la règle et
            utiliseront le parcours, sans leur demander de couvrir seules les
            risques techniques. L’ISTQB place idéalement les utilisateurs visés
            dans les tests d’acceptation. Une personne métier sait reconnaître
            une facture incohérente ; elle n’est pas pour autant chargée de
            démontrer une protection contre les injections ou une conformité
            d’accessibilité.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="couverture"
          number="05"
          label="Priorisation"
          title="Couvrez les parcours critiques avant de multiplier les variantes faciles"
        >
          <p>
            Vous ne testerez presque jamais toutes les combinaisons possibles.
            Commencez par ce qui ferait le plus de tort : perte ou corruption de
            données, erreur de montant, droit d’accès incorrect, blocage du
            travail, doublon, rupture d’interface ou dossier impossible à
            reprendre. Reliez chaque risque aux cas qui le couvrent et gardez la
            liste de ce qui reste exclu.
          </p>

          <GuideTable
            caption="Ordre de couverture d’une application métier"
            headers={["Couche", "À prouver", "Question de sortie"]}
            rows={[
              [
                "Parcours critique",
                "Une opération complète produit le résultat métier attendu",
                "Le métier peut-il travailler et contrôler l’issue ?",
              ],
              [
                "Règles et calculs",
                "Seuils, arrondis, états, dates et autorisations",
                "Chaque règle importante a-t-elle un attendu précis ?",
              ],
              [
                "Erreurs et reprise",
                "Refus propre, message utile, absence de doublon, reprise possible",
                "L’utilisateur sait-il quoi faire après l’erreur ?",
              ],
              [
                "Interfaces",
                "Entrées, sorties, rejets, synchronisation et traçabilité",
                "Un écart externe est-il détecté et attribué ?",
              ],
              [
                "Qualités pertinentes",
                "Performance, compatibilité, accessibilité, sécurité ou fiabilité selon le risque",
                "Le seuil, le contexte et la compétence sont-ils définis ?",
              ],
            ]}
          />

          <p>
            L’ISTQB présente plusieurs stratégies de priorisation : par risque,
            par couverture ou par priorité des exigences. Les dépendances et la
            disponibilité des personnes ou environnements peuvent modifier
            l’ordre. Documentez la raison : « facile à exécuter » n’est pas une
            priorité métier.
          </p>

          <InfoBox
            variant="blue"
            title="Accessibilité et sécurité demandent leurs propres preuves"
          >
            <p>
              Pour une application web, le{" "}
              <a
                href="https://www.w3.org/WAI/test-evaluate/"
                target="_blank"
                rel="noreferrer"
              >
                W3C rappelle qu’aucun outil automatique ne détermine seul la
                conformité d’accessibilité
              </a>
              . Une évaluation humaine compétente reste nécessaire. Pour la
              sécurité technique web, l’
              <a
                href="https://owasp.org/www-project-application-security-verification-standard/"
                target="_blank"
                rel="noreferrer"
              >
                OWASP ASVS 5.0.0
              </a>{" "}
              peut servir de base versionnée à des exigences sélectionnées par
              les spécialistes. Un clic métier réussi ne remplace ni l’une ni
              l’autre.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="06"
          label="Outil local"
          title="Relisez un cas, puis regardez ce que la campagne ne prouve pas encore"
        >
          <p>
            Vous ne saisissez aucun contenu métier dans l’outil ci-dessous.
            Relisez d’abord les six maillons du cas, puis les critères de sortie
            et l’autorité de décision. Reportez enfin les nombres issus du même
            relevé de campagne. Laissez la réponse à « non renseigné » si vous
            l’ignorez. Conservez les cas échoués, bloqués, non exécutés ou sans
            preuve dans leur état, ainsi que les réserves en attente.
          </p>

          <AcceptanceReadinessTool />

          <p>
            L’outil ne calcule aucune moyenne. Il traite les problèmes dans cet
            ordre : préparation bloquée, information absente ou partielle,
            compteurs incohérents, cas critique non prouvé, puis anomalie
            bloquante. Lorsque ces obstacles sont levés, il signale encore le
            risque résiduel, notamment un échec non classé ou une dérogation en
            attente. Le dossier n’est candidat que si les deux garde-fous de
            campagne sont prêts. Même dans ce cas, l’acceptation reste une
            décision humaine.
          </p>

          <GuidePremiumMemo title="Refaites le test après chaque correction">
            <p>
              Une correction peut résoudre l’anomalie et en créer une autre.
              Rejouez le cas concerné, puis la non-régression pertinente. La
              fiche conserve la version corrigée, le résultat et la nouvelle
              preuve.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="anomalies"
          number="07"
          label="Écarts"
          title="Décrivez le constat avant de négocier sa priorité"
        >
          <p>
            Une anomalie utile commence par un fait reproductible. Évitez «
            facturation cassée » ou « bug urgent ». Identifiez la fonction
            concernée, la version, l’environnement, le cas et les données.
            Donnez les étapes, le résultat attendu, le résultat obtenu et les
            pièces disponibles. L’équipe peut alors analyser l’écart, le
            corriger, constater qu’il n’est pas reproductible ou le reclasser
            comme demande d’évolution.
          </p>

          <GuideTable
            caption="Champs d’une anomalie exploitable"
            headers={["Champ", "Ce qu’il répond", "Erreur à éviter"]}
            rows={[
              [
                "Identifiant et titre",
                "Quel écart suivons-nous ?",
                "Plusieurs problèmes dans une seule fiche",
              ],
              [
                "Contexte",
                "Version, environnement, rôle, cas et données",
                "« Sur la dernière version »",
              ],
              [
                "Reproduction",
                "Quelles étapes produisent le constat ?",
                "Interprétation sans étapes",
              ],
              [
                "Attendu / obtenu",
                "Quelle différence observable existe ?",
                "Attendu absent ou subjectif",
              ],
              [
                "Preuve",
                "Quelle trace aide à relire ou résoudre ?",
                "Capture sans date, objet ni contexte",
              ],
              [
                "Gravité",
                "Quel est le degré d’impact ?",
                "La confondre avec l’ordre de correction",
              ],
              [
                "Priorité",
                "Quand l’équipe décide-t-elle de traiter ?",
                "La déduire automatiquement de la gravité",
              ],
              [
                "Statut et retest",
                "Où en est le traitement et la confirmation ?",
                "Fermer dès que le code est modifié",
              ],
            ]}
          />

          <p>
            Le syllabus ISTQB distingue la gravité — degré d’impact — de la
            priorité de correction et propose aussi de conserver le statut et la
            référence du cas. Cette distinction évite deux raccourcis : une
            anomalie très visible n’est pas forcément la plus grave ; une
            anomalie grave ne disparaît pas parce qu’elle sera corrigée plus
            tard.
          </p>

          <p>
            L’étiquette « mineure » ne protège aucune décision. Si l’écart
            touche fortement le métier, une obligation, un montant, des
            utilisateurs ou une exigence, revoyez d’abord sa gravité : il a
            peut-être été mal classé. S’il reste réellement d’impact limité, sa
            priorité peut néanmoins être élevée à cause d’une échéance ou d’une
            démonstration proche. Conservez les deux justifications.
          </p>

          <GuidePremiumMemo title="« Bloqué » décrit le test, pas le comportement fonctionnel">
            <p>
              Si l’interface de test ne répond pas, le cas n’a pas démontré que
              la fonction réussit ou échoue. Corrigez le blocage, puis exécutez
              le cas. Sans cette séparation, le relevé peut présenter à tort un
              cas bloqué comme réussi ou échoué.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-fictif"
          number="08"
          label="Exemple"
          title="Du besoin de facturation au résultat que le métier peut constater"
        >
          <GuidePremiumCase
            initial="AN"
            eyebrow="Cas entièrement fictif"
            title="Atelier Nord · société fictive de maintenance de pompes"
          >
            <p>
              Après une intervention, un responsable d’agence valide le temps,
              le déplacement et les pièces. L’application fictive doit créer un
              seul brouillon de facture, calculer ses lignes et changer le
              statut du dossier. Aucun nom, tarif ou dossier réel n’est utilisé.
            </p>
          </GuidePremiumCase>

          <h3>1. La règle</h3>

          <p>
            Une intervention clôturée et non facturée crée un unique brouillon
            quand un responsable autorisé la valide. Le technicien ne peut plus
            modifier le tarif après cette validation.
          </p>

          <h3>2. Le cas nominal</h3>

          <GuideTable
            caption="Cas fictif de validation d’une intervention"
            headers={["Élément", "Valeur fictive", "Attendu observable"]}
            rows={[
              [
                "État de départ",
                "Intervention clôturée, non facturée",
                "Le bouton de validation est disponible au responsable",
              ],
              ["Déplacement", "40,00 €", "Une ligne à 40,00 €"],
              ["Temps", "2 heures × 70,00 €", "Une ligne à 140,00 €"],
              ["Pièce", "1 × 25,00 €", "Une ligne à 25,00 €"],
              ["Action", "Valider une fois", "Un seul brouillon est créé"],
              [
                "Résultat",
                "40 + 140 + 25",
                "Total hors taxes affiché : 205,00 €",
              ],
              ["Statut", "Après création", "Intervention « prête à facturer »"],
            ]}
          />

          <FormulaBox>
            {[
              "CALCUL FICTIF",
              "",
              "Déplacement : 40,00 €",
              "Temps : 2 × 70,00 € = 140,00 €",
              "Pièce : 1 × 25,00 € = 25,00 €",
              "Total hors taxes attendu : 40,00 + 140,00 + 25,00 = 205,00 €",
            ].join("\n")}
          </FormulaBox>

          <h3>3. Les cas qui mettent la règle en difficulté</h3>

          <ul>
            <li>
              aucune pièce : la ligne absente ne doit pas produire un montant
              fantôme ;
            </li>
            <li>
              technicien sans droit : la modification du tarif doit être refusée
              et expliquée ;
            </li>
            <li>
              double validation : un second brouillon ne doit pas apparaître ;
            </li>
            <li>
              service de facturation indisponible : l’intervention ne doit pas
              être déclarée facturée sans brouillon traçable ;
            </li>
            <li>
              correction après anomalie : le cas nominal et les variantes
              pertinentes sont rejoués sur la nouvelle version.
            </li>
          </ul>

          <p>
            La preuve dépend du résultat : lignes et identifiant du brouillon,
            statut du dossier, journal de l’appel ou message de refus. Une
            capture peut aider, mais elle ne suffit pas si elle ne montre ni la
            version, ni le contexte, ni la donnée qui établit l’unicité.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="09"
          label="Clôture"
          title="Donnez au décideur le périmètre testé, les écarts et les limites"
        >
          <p>
            Le relevé final rassemble la version, le périmètre, les critères de
            sortie, les cas exécutés et non exécutés, les résultats par risque,
            les cas échoués, les anomalies non closes, les réserves ou
            dérogations en attente, les preuves, les écarts au plan et le risque
            résiduel. Le décideur peut alors distinguer ce qui a été vérifié de
            ce que la campagne n’a pas démontré.
          </p>

          <GuideTable
            caption="Sorties possibles d’une campagne de recette"
            headers={["État observé", "Sortie prudente", "Étape suivante"]}
            rows={[
              [
                "Version, données ou cas impossibles à préparer",
                "STOP de préparation",
                "Attribuer le blocage et restaurer les conditions",
              ],
              [
                "Cas critique non prouvé ou anomalie bloquante ouverte",
                "Corriger avant décision",
                "Corriger, retester et rejouer la non-régression utile",
              ],
              [
                "Cas critiques prouvés, mais échec, écart, réserve ou preuve manquante ailleurs",
                "Revue du risque résiduel",
                "Documenter impact, priorité, échéance et responsable",
              ],
              [
                "Critères atteints et aucun échec, écart ou réserve en attente renseigné",
                "Dossier candidat à la décision",
                "Le décideur applique les documents convenus",
              ],
            ]}
          />

          <p>
            Les modèles de documentation existent, notamment dans la{" "}
            <a
              href="https://www.iso.org/standard/79429.html"
              target="_blank"
              rel="noreferrer"
            >
              présentation publique d’ISO/IEC/IEEE 29119-3:2021
            </a>
            . Ce guide n’en reproduit pas le contenu payant et ne prétend pas
            qu’un formulaire unique convient à tout projet. Gardez le dossier
            proportionné, mais assez précis pour expliquer la décision plusieurs
            mois plus tard.
          </p>

          <FormulaBox>
            {[
              "RELEVÉ DE RECETTE",
              "",
              "Produit, version et environnement :",
              "Périmètre inclus et exclusions :",
              "Critères d’entrée et de sortie :",
              "Parcours et risques critiques :",
              "Cas — réussi / échoué / bloqué / non exécuté :",
              "Anomalies ouvertes — gravité / priorité / statut / responsable :",
              "Réserves ou dérogations en attente :",
              "Retests et non-régression :",
              "Preuves et emplacement :",
              "Écarts au plan et limites :",
              "Risque résiduel :",
              "Décideur, décision, date et éventuelles conditions prévues :",
            ].join("\n")}
          </FormulaBox>

          <InfoBox
            variant="amber"
            title="La portée contractuelle ne se déduit pas de cette page"
          >
            <p>
              Une réception, une réserve, un paiement, une garantie ou un délai
              dépend des documents signés et du contexte. Vérifiez le contrat,
              le devis, les conditions applicables et la procédure de recette.
              En cas de désaccord ou d’enjeu important, demandez un conseil
              juridique au lieu de transformer ce modèle éditorial en règle de
              droit.
            </p>
          </InfoBox>

          <p>
            Le{" "}
            <Link href="/guides/reprendre-logiciel-metier-existant">
              test de relève du logiciel métier
            </Link>{" "}
            intervient en amont lorsqu’une nouvelle équipe doit comprendre,
            déployer et restaurer l’existant. Une recette qui prépare un
            changement de système doit aussi rester distincte de la{" "}
            <Link href="/guides/migrer-logiciel-metier-sans-interruption">
              bascule et son retour arrière
            </Link>
            . Pour faire cadrer le périmètre, les rôles et les preuves de votre
            projet, vous pouvez en{" "}
            <Link href="/demarrer-un-projet">décrire le contexte</Link>.
          </p>

          <GuidePremiumMemo title="Gardez les quatre statuts séparés dans le relevé">
            <p>
              Réussi, échoué, bloqué et non exécuté décrivent quatre situations
              différentes. Les fusionner retirerait au décideur l’information
              nécessaire pour statuer.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
