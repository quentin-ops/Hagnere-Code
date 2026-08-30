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
import { TrackedGuideCtaLink } from "@/components/guides/tracked-guide-cta-link";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { SecurityReadinessTool } from "./security-readiness-tool";

const guide = getGuide("securite-application-metier");
const breadcrumbName = "Sécurité d’une application métier";

export const metadata = buildGuideMetadata(
  guide,
  "Restauration chronométrée, alerte suivie, compte témoin et dépendances triées avant la mise en service",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Répondre",
  },
  {
    id: "consequences",
    number: "02",
    label: "Le prix d’une heure",
    shortLabel: "Chiffrer",
  },
  {
    id: "capacites",
    number: "03",
    label: "Le protocole",
    shortLabel: "Protocole",
  },
  {
    id: "restauration",
    number: "04",
    label: "Mesure 1 · restauration",
    shortLabel: "Restaurer",
  },
  {
    id: "detection",
    number: "05",
    label: "Mesure 2 · alerte",
    shortLabel: "Alerter",
  },
  {
    id: "responsabilites",
    number: "06",
    label: "Mesure 3 · compte témoin",
    shortLabel: "Droits",
  },
  {
    id: "outil",
    number: "07",
    label: "Mesure 4 · dépendances",
    shortLabel: "Dépendances",
  },
  {
    id: "decision",
    number: "08",
    label: "Décider",
    shortLabel: "Décider",
  },
  {
    id: "cas-fictif",
    number: "09",
    label: "Ce qui rate",
    shortLabel: "Incidents",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "mesures",
    num: "01",
    label: "Exécuter les mesures",
    items: [
      {
        question:
          "Combien de temps prennent les quatre mesures\u00a0?",
        answer:
          "La restauration est la seule qui coûte une demi-journée, parce qu’il faut monter un environnement séparé avant de chronométrer. Le test d’alerte demande dix minutes d’exécution, puis l’attente. Les dix rejeux du compte témoin tiennent en une heure une fois les deux sessions ouvertes. La liste des dépendances vulnérables sort en une minute et se relance chaque semaine. Comptez une journée pour la première série complète, deux heures pour les suivantes.",
      },
      {
        question:
          "Peut-on faire ces mesures sans toucher à la production\u00a0?",
        answer:
          "Trois des quatre l’exigent même. La restauration se fait dans un environnement séparé, qui ne partage ni base, ni stockage, ni compte avec la production. Les dix rejeux du compte témoin se font sur ce même environnement restauré, avec des données de test. La liste des dépendances lit le dépôt de code, pas le serveur. Seul le test d’alerte se joue en conditions réelles, avec un événement autorisé, une heure notée et l’accord écrit du propriétaire de l’application.",
      },
      {
        question:
          "Nous n’avons pas d’environnement séparé\u00a0: que faire\u00a0?",
        answer:
          "C’est déjà un résultat. Sans environnement séparé, vous ne pourrez pas non plus restaurer le jour de l’incident sans écraser ce qui reste. Chiffrez son coût avant d’arbitrer\u00a0: une copie de l’hébergement pendant deux jours, plus le temps de la monter. Comparez ce montant à celui d’une heure ouvrée d’arrêt calculé en section\u00a002. La décision devient alors une addition que deux personnes peuvent refaire.",
      },
    ],
  },
  {
    key: "referentiels",
    num: "02",
    label: "Référentiels et obligations",
    items: [
      {
        question: "Le Top\u00a010 OWASP suffit-il à valider l’application\u00a0?",
        answer:
          "C’est un document de sensibilisation, qui donne un consensus large sur les risques les plus critiques\u00a0: utile en début de projet, insuffisant ensuite. Le référentiel ASVS 5.0.0, publié le 30\u00a0mai 2025 par la même organisation, sert à sélectionner des exigences techniques précises et à les tester une par une. Ni l’un ni l’autre ne certifie une application, et aucun des deux ne couvre la sauvegarde, l’alerte, les personnes ou les obligations qui s’appliquent à votre traitement de données.",
      },
      {
        question: "Un test d’intrusion remplace-t-il ces quatre mesures\u00a0?",
        answer:
          "Il cherche des vulnérabilités sur un ensemble d’éléments et à un instant donnés, ce que les quatre mesures ne font pas. Il ne dit rien de la personne qui reçoit une alerte, du temps de restauration, ni du délai entre la publication d’un correctif et son installation. Les deux se complètent\u00a0: commencez par les quatre mesures, qui coûtent une journée, et commandez le test quand elles passent — sinon il trouvera d’abord ce que vous saviez déjà.",
      },
      {
        question: "La directive NIS\u00a02 nous concerne-t-elle\u00a0?",
        answer:
          "La directive (UE) 2022/2555 élargit le champ des entreprises soumises à des obligations de cybersécurité, mais son application dépend de votre secteur d’activité et de votre taille, et les modalités relèvent du texte français de transposition. Cette qualification appartient à un juriste, pas à un article de blog ni à un développeur. Faites-la faire avant d’en déduire quoi que ce soit\u00a0: se croire concerné à tort coûte cher, ne pas l’être à tort coûte davantage.",
      },
    ],
  },
  {
    key: "apres",
    num: "03",
    label: "Après la mise en service",
    items: [
      {
        question: "Combien de temps conserver les journaux\u00a0?",
        answer:
          "Aucune durée universelle n’existe. Pour les données de journalisation destinées à sécuriser un traitement de données personnelles, la CNIL recommande en général six mois à un an, avec des adaptations à justifier. La valeur par défaut d’une offre d’hébergement — sept jours dans le cas construit de ce guide — est un réglage commercial que personne n’a choisi. Confrontez-la aux 72\u00a0heures de l’article\u00a033 du RGPD\u00a0: une violation découverte trois semaines après les faits se notifie sans les traces qui la décriraient.",
      },
      {
        question: "Qui signe la mise en service\u00a0?",
        answer:
          "Une personne autorisée par l’entreprise, à partir des montants et des écarts que ces mesures produisent. Le développeur explique, l’hébergeur documente, mais aucun des deux ne décide combien d’heures d’arrêt l’activité supporte. Dans le cas construit de ce guide, ce nombre appartient à la directrice administrative et financière\u00a0: c’est elle qui accepte quatre heures ouvrées d’arrêt, donc 3\u00a0972\u00a0€. L’outil local de cette page n’autorise aucune mise en production.",
      },
      {
        question:
          "Faut-il refaire ces mesures, et à quel rythme\u00a0?",
        answer:
          "La liste des dépendances vulnérables se relance chaque semaine, parce qu’elle change chaque semaine. Les trois autres se refont après chaque changement d’hébergement, après chaque montée de version majeure, après le départ de quelqu’un qui détenait un accès, et au moins une fois par an. Notez la date de la dernière exécution à côté de chaque nombre\u00a0: une mesure sans date ne prouve rien six mois plus tard.",
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
          { label: "Guide de méthode 2026", variant: "dark" },
          { label: "Avant la mise en service", variant: "neutral" },
          { label: "Outil local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle={"Sécurité d’une application métier\u00a0:"}
        heroTitleEm={"que\u00a0mesurer avant les vraies données\u00a0?"}
        heroDescription={"«\u00a0Est-elle sécurisée\u00a0?\u00a0» n’appelle aucune réponse vérifiable. Quatre choses, en revanche, se mesurent en une journée\u00a0: le temps réel d’une restauration complète, les minutes entre un événement sensible et l’alerte reçue, les codes de réponse rendus au compte le moins privilégié, et le délai entre la publication d’un correctif et son installation. Ce guide donne le protocole de chacune, le seuil qui tranche et ce que l’écart coûte. Les euros et les durées cités viennent d’un cas construit pour ce guide, entreprise et volumes compris\u00a0: rien n’a été relevé chez un client."}
        stats={[
          { label: "Mesures à exécuter", value: "4" },
          { label: "Heure ouvrée · cas construit", value: "993\u00a0€" },
          { label: "Écart mesuré · cas construit", value: "2\u00a0h\u00a040" },
          { label: "Score de sécurité", value: "Aucun" },
          { label: "Réponses de l’outil", value: "Non envoyées" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Audit technique",
          titleStart: "Faire relire",
          titleEm: "vos quatre nombres",
          description:
            "Apportez les résultats des quatre mesures, les écarts et ce qui n’a pas pu être exécuté. Un audit documente une décision\u00a0; il ne rend aucune application sûre.",
          benefits: [
            "Les mesures impossibles séparées des mesures ratées",
            "Vos hypothèses de coût relues avec vos propres chiffres",
            "La suite discutée avant d’engager une reconstruction",
          ],
          primaryCtaLabel: "Découvrir l’audit technique",
          primaryCtaHref: "/services/audit-technique",
        }}
        toc={toc}
        tocLabel="Les quatre mesures avant mise en service"
        mobileCtaLabel="Faire relire mes mesures"
        sidebarContextCta={{
          eyebrow: "Avant les vraies données",
          title: "Vos quatre mesures ne passent pas toutes\u00a0?",
          description:
            "Décrivez ce que vous avez mesuré et ce qui a échoué, sans secret, sans donnée personnelle et sans détail d’incident en cours.",
          benefits: [
            "Restauration chronométrée dans un environnement séparé",
            "Alerte suivie jusqu’à une personne nommée",
            "Dépendances triées par exploitation constatée",
          ],
          ctaLabel: "Voir l’audit technique",
          ctaHref: "/services/audit-technique",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Ce qu’on demande avant",
          titleEm: "d’ouvrir les données",
          titleEnd: "réelles.",
          subtitle:
            "Durée des mesures, environnement séparé, place du test d’intrusion, conservation des journaux, personne qui signe et rythme de réexécution.",
          ctaTitle: "Une mesure impossible à exécuter chez vous\u00a0?",
          ctaDescription:
            "Décrivez ce qui bloque — pas d’environnement séparé, pas d’accès aux journaux, pas de compte de test — sans transmettre de secret.",
          ctaLabel: "Décrire le blocage",
          ctaHref: "/services/audit-technique",
        }}
        legalSources={[
          {
            source: "Règlement (UE) 2016/679 · article 32",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/fra",
            description:
              "Texte officiel\u00a0: pour un traitement de données personnelles, mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque, avec selon le cas confidentialité, intégrité, disponibilité, résilience, restauration et évaluation régulière. Aucune fréquence de sauvegarde ni architecture n’y figure.",
          },
          {
            source: "Règlement (UE) 2016/679 · articles 33 et 34",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/art_33/oj/fra",
            description:
              "Notification d’une violation de données personnelles à l’autorité de contrôle dans les meilleurs délais et, si possible, 72\u00a0heures au plus tard après en avoir pris connaissance. L’article 34 impose d’informer les personnes concernées lorsque le risque pour elles est élevé.",
          },
          {
            source: "Règlement (UE) 2016/679 · article 83",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/art_83/oj/fra",
            description:
              "Le paragraphe 4 couvre les manquements aux articles 25 à 39, dont l’article 32\u00a0: amendes pouvant atteindre 10\u00a0000\u00a0000\u00a0€ ou, pour une entreprise, 2\u00a0% du chiffre d’affaires annuel mondial total de l’exercice précédent, le montant le plus élevé étant retenu. La modulation ne relève pas de ce plafond, mais des paragraphes 1 et 2 du même article, qui veulent des amendes «\u00a0effectives, proportionnées et dissuasives\u00a0» et énumèrent ce dont il est tenu compte dans chaque cas d’espèce.",
          },
          {
            source:
              "Règlement (UE) 2016/679 · article 4, points 1 et 12 (reproduction CNIL)",
            href: "https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre1",
            description:
              "Reproduction officielle du texte par la CNIL, qui sert directement les définitions\u00a0: une donnée à caractère personnel est «\u00a0toute information se rapportant à une personne physique identifiée ou identifiable\u00a0» (point 1), et une violation de données personnelles est une atteinte à la sécurité incluant «\u00a0l’accès non autorisé\u00a0» à de telles données (point 12). Ces deux points qualifient les 480 praticiens libéraux du cas construit et la lecture non autorisée de la mesure\u00a03.",
          },
          {
            source: "CNIL · Guide de la sécurité, mise à jour 2026",
            href: "https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
            description:
              "Le PDF courant porte «\u00a0Version 2024 — mise à jour 2026\u00a0»\u00a0: accès, développement, traçabilité, sauvegarde, continuité, incidents et analyse de risques, dans le champ des données personnelles.",
          },
          {
            source: "CNIL · Règles essentielles de sécurité, 19 juin 2026",
            href: "https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles",
            description:
              "Fiche générale mise à jour le 19 juin 2026\u00a0: les risques numériques touchent aussi bien les données personnelles que les informations financières ou industrielles. Sensibilisation, pas audit de votre contexte.",
          },
          {
            source: "CNIL · Encadrer les développements",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Fiche du 14 mars 2024\u00a0: sécurité dès la conception, séparation des environnements, données fictives ou anonymisées autant que possible, tests, et aucun secret dans le dépôt de code.",
          },
          {
            source: "CNIL · Sauvegarder",
            href: "https://www.cnil.fr/fr/securite-sauvegarder",
            description:
              "Fiche du 14 mars 2024\u00a0: copies fréquentes, protection comparable à la production, séparation géographique, copie hors ligne, et tests d’intégrité et de restauration.",
          },
          {
            source: "CNIL · Tracer les opérations",
            href: "https://www.cnil.fr/fr/securite-tracer-les-operations",
            description:
              "Fiche du 14 mars 2024\u00a0: événements utiles, traces protégées et analysées, aucun mot de passe ni empreinte enregistré. La recommandation de six mois à un an porte sur les données de journalisation qui sécurisent un traitement de données personnelles, avec exceptions à justifier.",
          },
          {
            source: "ANSSI · Fondamentaux de la sauvegarde v1.1",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
            description:
              "ANSSI-BP-100, version 1.1 du 27 novembre 2025\u00a0: stratégie issue des besoins métier, règle 3-2-1 avec copie hors ligne, exercices de restauration, ordre de reprise et isolation. Le document précise que ses recommandations ne sont pas normatives sauf texte contraire et doivent être adaptées.",
          },
          {
            source: "ANSSI · Architecture de journalisation v2.0",
            href: "https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation",
            description:
              "Guide version 2.0 du 28 janvier 2022\u00a0: journalisation prévue dès les spécifications, événements exploitables, protection des traces, détection et analyse après incident. Le document qualifie ses recommandations de non normatives sauf texte contraire et exige leur adaptation au contexte.",
          },
          {
            source: "OWASP · ASVS 5.0.0",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Version stable publiée le 30 mai 2025\u00a0: base volontaire pour sélectionner et référencer des exigences techniques vérifiables. Ce n’est ni une certification, ni une preuve globale de sécurité.",
          },
          {
            source: "OWASP · API Security Project",
            href: "https://owasp.org/www-project-api-security/",
            description:
              "Le Top\u00a010 des risques d’interface de programmation, édition 2023, place en première position le contrôle d’accès rompu au niveau de l’objet\u00a0: un compte authentifié obtient un objet qui ne lui appartient pas en changeant un identifiant.",
          },
          {
            source: "NIST · Cybersecurity Framework 2.0",
            href: "https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20",
            description:
              "CSWP 29 publié le 26 février 2024\u00a0: cadre flexible et non prescriptif autour de Govern, Identify, Protect, Detect, Respond et Recover. Les fonctions n’imposent ni ordre, ni liste de contrôles universelle.",
          },
          {
            source: "FIRST · CVSS v4.0",
            href: "https://www.first.org/cvss/v4-0/specification-document",
            description:
              "L’échelle CVSS classe la gravité potentielle\u00a0: 9,0 à 10,0 critique, 7,0 à 8,9 élevée, 4,0 à 6,9 moyenne, 0,1 à 3,9 faible. La spécification énonce qu’un score dit la gravité d’une vulnérabilité par rapport aux autres\u00a0: une gravité, jamais une probabilité. Elle ne documente pas l’EPSS.",
          },
          {
            source: "FIRST · EPSS",
            href: "https://www.first.org/epss/",
            description:
              "Page officielle du modèle, publiée par le même organisme que le CVSS\u00a0: l’EPSS «\u00a0estimates the probability that a published CVE will be exploited in the wild in the next 30 days\u00a0». Il donne une probabilité d’exploitation, pas une gravité\u00a0; les deux ne mesurent pas la même chose.",
          },
          {
            source: "OWASP · Top 10 des risques applicatifs",
            href: "https://owasp.org/www-project-top-ten/",
            description:
              "Le projet se décrit lui-même comme «\u00a0a standard awareness document for developers and web application security\u00a0» et annonce le Top Ten 2025 comme version courante. Document de sensibilisation, distinct de l’API Security Top 10 et de l’ASVS, et sans valeur de certification.",
          },
          {
            source: "ANSSI · NIS 2, directive (UE) 2022/2555",
            href: "https://messervices.cyber.gouv.fr/nis2",
            description:
              "Portail officiel de l’ANSSI\u00a0: «\u00a0plusieurs milliers d’entités réparties sur 18 secteurs d’activité seront concernés\u00a0», avec des seuils de taille distincts pour les entités essentielles et les entités importantes. La page indique que «\u00a0la transposition de la directive NIS 2 en France est en cours\u00a0».",
          },
          {
            source: "CISA · catalogue des vulnérabilités exploitées",
            href: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
            description:
              "Catalogue public tenu par l’agence américaine de cybersécurité\u00a0: il recense les failles dont l’exploitation est constatée. Il sert ici de critère de tri, et n’impose aucune obligation à une entreprise française.",
          },
          {
            source: "npm · commande audit",
            href: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
            description:
              "Documentation officielle de la commande citée dans la section\u00a007, y compris l’option qui écarte les dépendances de développement. Les équivalents existent dans les autres écosystèmes.",
          },
          {
            source: "Hagnéré Code · tarifs publics",
            href: "/tarifs",
            description:
              "Grille relevée le 30 août 2026\u00a0: audit flash 2\u00a0000\u00a0€ HT, cadrage initial sécurité et RGPD 5\u00a0000\u00a0€ HT, audit technique 8\u00a0000\u00a0€ HT en Express et 18\u00a0000\u00a0€ HT en Standard. Repères publics et indicatifs\u00a0: le devis signé fixe le prix ferme.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title: "Un protocole de mesure, pas un audit de votre installation",
          description:
            "Ces quatre mesures ne voient ni votre architecture, ni vos données, ni vos obligations, et aucune ne rend une application sûre. Une analyse de risques, un audit, un test de sécurité encadré et une qualification juridique restent nécessaires selon le contexte. En cas d’incident en cours, traitez l’incident d’abord.",
        }}
        relatedGuides={[
          {
            label: "Plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
          {
            label: "Comment rédiger un cahier des charges SaaS\u00a0?",
            href: "/guides/cahier-des-charges-saas",
          },
          {
            label: "MVP SaaS\u00a0: quoi inclure avant un premier client\u00a0?",
            href: "/guides/mvp-saas-quoi-inclure",
          },
        ]}
        relatedGuidesLabel="3 guides complémentaires"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          title={"Quatre mesures, un chronomètre, et le coût de l’écart"}
        >
          <p>
            Votre développeur annonce que l’application métier est prête.
            Lundi, vous
            allez y charger le fichier clients, les prix négociés et les
            tournées de la semaine. «&nbsp;Est-elle sécurisée&nbsp;?&nbsp;»
            n’appelle aucune réponse vérifiable&nbsp;: personne ne peut le
            prouver, et vous ne pouvez pas le réfuter.
          </p>
          <p>
            Quatre choses se mesurent, elles. <strong>Restaurez</strong>{" "}
            l’application entière dans un environnement séparé et notez la
            durée. <strong>Déclenchez</strong> un événement sensible et comptez
            les minutes avant qu’une personne nommée reçoive l’alerte.{" "}
            <strong>Rejouez</strong> dix requêtes avec le compte le moins
            privilégié et lisez les codes de réponse.{" "}
            <strong>Listez</strong> les dépendances vulnérables, puis triez-les
            par exploitation constatée plutôt que par score.
          </p>
          <p>
            Chacune sort un nombre, que vous comparez à un seuil fixé par votre
            direction et non par un référentiel. Dans le cas construit
            ci-dessous, une heure ouvrée sans l’application coûte
            993&nbsp;€&nbsp;; la direction accepte quatre heures d’arrêt, soit
            3&nbsp;972&nbsp;€. L’exercice de restauration a duré six heures
            quarante sur une copie&nbsp;: subie un jour ouvré, cette durée
            vaudrait 6&nbsp;620&nbsp;€, dont 2&nbsp;648&nbsp;€ au-dessus du
            seuil. «&nbsp;Sécurisé&nbsp;» ne se discute pas.
          </p>
          <p>
            Ces 2&nbsp;648&nbsp;€, eux, se discutent en comité de direction. Et
            si l’une des quatre mesures ne peut pas être exécutée, notez-le tel
            quel&nbsp;: vous ne saurez pas davantage la faire le jour de
            l’incident.
          </p>

          <GuidePremiumCase
            initial="46"
            eyebrow="Fil rouge du guide · exemple construit"
            title={"Trente-quatre utilisateurs, 3\u00a0100\u00a0clients, une mise en service prévue lundi"}
          >
            <p>
              <em>
                Exemple construit&nbsp;: l’entreprise, ses volumes, ses
                horaires et ses coûts internes sont choisis pour l’exemple et ne
                viennent d’aucune source&nbsp;; seuls les montants de prestation
                sont repris de notre grille publiée. Ce n’est pas un dossier
                client.
              </em>{" "}
              Une société de négoce et d’installation de matériel médical,
              46&nbsp;salariés, 12&nbsp;millions d’euros de chiffre d’affaires.
              Elle remplace un classeur partagé par une application de prise de
              commande et de tournées, écrite en huit mois par un développeur
              indépendant.
            </p>
            <p>
              Trente-quatre personnes s’en serviront&nbsp;: douze commerciaux,
              six préparateurs de commandes, neuf chauffeurs-livreurs sur
              téléphone, quatre à l’administration des ventes, deux au contrôle
              de gestion et le responsable applicatif. La base porte
              3&nbsp;100&nbsp;clients professionnels, dont 480&nbsp;praticiens
              libéraux&nbsp;— des personnes physiques, donc des données
              personnelles.
            </p>
          </GuidePremiumCase>

          <InfoBox
            variant="amber"
            title={"Incident en cours\u00a0: arrêtez cette revue"}
          >
            <p>
              Si une compromission, une fuite ou une indisponibilité est en
              cours ou soupçonnée, appliquez la procédure d’incident et appelez
              les personnes compétentes. Ces quatre mesures préparent une mise en
              service&nbsp;; elles ne remplacent ni un isolement, ni une
              restauration d’urgence.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="consequences"
          number="02"
          label="Le prix d’une heure"
          title={"Combien vous coûte une heure sans l’application\u00a0?"}
        >
          <p>
            Tout le reste dépend de ce nombre. Sans lui, «&nbsp;sauvegarde
            quotidienne&nbsp;» et «&nbsp;reprise en quatre heures&nbsp;» sont
            des mots&nbsp;: rien ne dit ce qu’ils achètent, ni à quel prix.
          </p>

          <h3>Deux lignes suffisent, et vous les avez déjà</h3>
          <p>
            La première&nbsp;: le temps payé qui ne produit rien. Comptez les
            personnes réellement bloquées&nbsp;— pas tous les utilisateurs&nbsp;—
            puis multipliez par leur coût employeur horaire. La seconde&nbsp;: la
            marge qui ne revient pas. Prenez les opérations que l’application
            enregistre par jour ouvré, multipliez par leur marge brute moyenne,
            divisez par la durée d’une journée de travail&nbsp;— huit heures
            ici, de 9&nbsp;h à 17&nbsp;h&nbsp;— et gardez la part que vous ne
            rattraperez pas le lendemain.
          </p>
          <p>
            Le cas construit donne ceci. Vingt et une personnes sur
            trente-quatre sont arrêtées, les treize autres reprennent le carnet
            papier. À
            38&nbsp;€ l’heure chargée, cela fait{" "}
            <strong>798&nbsp;€ l’heure</strong>. L’application enregistre
            62&nbsp;commandes par jour ouvré à 84&nbsp;€ de marge brute, soit
            5&nbsp;208&nbsp;€ par jour et 651&nbsp;€ l’heure sur huit heures&nbsp;;
            la directrice administrative et financière estime que trois
            commandes sur dix ne reviennent jamais, soit{" "}
            <strong>195,30&nbsp;€ l’heure</strong>. Total&nbsp;:
            993,30&nbsp;€ l’heure, arrondi à <strong>993&nbsp;€</strong>&nbsp;:
            tous les montants de ce guide partent de là et non des centimes.
          </p>

          <p>
            Ce montant vaut par heure ouvrée. La nuit et le week-end, personne
            n’est payé à attendre et aucune commande ne se prend&nbsp;: un arrêt
            de vingt-deux heures un samedi ne coûte pas 21&nbsp;846&nbsp;€, mais
            le temps qu’il consomme le lundi matin. Comptez les heures d’arrêt
            tombées entre 9&nbsp;h et 17&nbsp;h, pas celles de l’horloge.
          </p>

          <h3>Les huit hypothèses que nous posons à découvert</h3>
          <p>
            Huit quantités de ce guide ne sortent d’aucune source, en plus des
            volumes et des coûts internes du cas construit, annoncés en
            section&nbsp;01. Deux produisent des euros directement&nbsp;: <strong>38&nbsp;€ l’heure
            chargée</strong> pour le temps interne, que votre expert-comptable ou
            votre contrôleur de gestion calcule à partir du salaire brut et des
            charges patronales, et{" "}
            <strong>500&nbsp;€ la journée de développement</strong> pour les
            corrections chiffrées plus bas, que votre contrat porte.
          </p>
          <p>
            Les six autres sont des durées d’effort, et elles coûtent au même
            titre&nbsp;: six minutes par commande ressaisie, deux jours et demi
            pour corriger trois routes, une heure à cinq personnes pour
            l’exercice sur table, une demi-journée pour l’exercice de
            restauration, deux heures d’attente sur un ticket d’hébergement, une
            journée pour la première série des quatre mesures contre deux heures
            ensuite, dont les dix minutes, l’heure et la minute détaillées en
            questions fréquentes. Remplacez-les par les vôtres, comme les
            volumes du cas.
          </p>
          <p>
            Ce montant donne un sens à deux seuils qui, sans lui, restent des
            sigles. La durée maximale d’interruption admissible&nbsp;— DMIA, ou
            RTO en anglais&nbsp;— est le temps d’arrêt que votre direction
            accepte de payer&nbsp;: quatre heures ouvrées ici, donc
            3&nbsp;972&nbsp;€. La perte de données maximale admissible&nbsp;—
            PDMA, ou RPO&nbsp;— est la saisie que vous acceptez de
            perdre&nbsp;: une heure ici. L’hébergeur n’en décide aucun.
          </p>

          <InfoBox
            variant="blue"
            title={"Le plafond de l’article 83 ne se calcule pas à l’envers"}
          >
            <p>
              L’article 32 du{" "}
              <a
                href="https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/fra"
                target="_blank"
                rel="noreferrer"
              >
                règlement général sur la protection des données (RGPD)
              </a>{" "}
              demande des mesures techniques et organisationnelles
              «&nbsp;appropriées afin de garantir un niveau de sécurité adapté
              au risque&nbsp;». Un manquement relève de l’article 83,
              paragraphe 4&nbsp;: jusqu’à 10&nbsp;millions d’euros ou
              2&nbsp;% du chiffre d’affaires annuel mondial,{" "}
              <strong>le montant le plus élevé étant retenu</strong>. Sur
              12&nbsp;millions d’euros de chiffre d’affaires, 2&nbsp;% font
              240&nbsp;000&nbsp;€&nbsp;: c’est donc le plafond de
              10&nbsp;millions qui s’applique. Un plafond n’est pas une
              sanction&nbsp;: les paragraphes 1 et 2 du même article veulent des
              amendes «&nbsp;effectives, proportionnées et dissuasives&nbsp;»,
              modulées cas par cas. L’idée reçue «&nbsp;une PME risque
              2&nbsp;%&nbsp;» est fausse dans les deux sens.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="capacites"
          number="03"
          label="Le protocole"
          title="Les quatre mesures, et les quatre sujets qui restent à écrire"
        >
          <p>
            Une mesure isolée déplace le problème. Prises une par une, elles
            laissent passer ce qui fait tomber une application métier&nbsp;: un
            accès verrouillé sert peu si les secrets se lisent dans le dépôt de
            code, et un journal que personne ne relève n’a jamais alerté
            personne. Le schéma ci-dessous
            récapitule les quatre mesures, le nombre que chacune rend et le seuil
            qui la tranche.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/securite-application-metier/socle-securite-16x9.webp"
              alt="Les quatre mesures avant la mise en service d’une application métier : restauration chronométrée, alerte suivie, compte témoin rejoué et dépendances triées, chacune avec le nombre qu’elle rend et le seuil qui la tranche"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>

          <GuideTable
            caption="Ce que chaque mesure lance, lit et tranche"
            headers={[
              "La mesure",
              "Ce qu’on lance",
              "Le nombre qu’on lit",
              "Le seuil qui tranche",
            ]}
            rows={[
              [
                "Restauration",
                "Remonter les 5\u00a0objets de l’application dans un environnement séparé, chronomètre en main",
                "Minutes de remise en service, et écart avec le dernier enregistrement restauré",
                "Au-delà des 4\u00a0h ouvrées de DMIA acceptées, chaque heure coûte 993\u00a0€",
              ],
              [
                "Alerte",
                "Un événement sensible autorisé, à une heure notée\u00a0: compte d’administration créé, export massif",
                "Minutes entre l’action et l’alerte, nom de qui l’a reçue, durée de conservation des traces",
                "Aucune alerte reçue par une personne nommée en 15\u00a0minutes\u00a0: il n’y a pas de détection, seulement un journal",
              ],
              [
                "Compte témoin",
                "10 requêtes rejouées avec le compte le moins privilégié, identifiants changés",
                "Les 10 codes de réponse renvoyés par le serveur\u00a0: 200, 403 ou 404",
                "Une seule réponse 200 est bloquante\u00a0; les refus obtenus à côté ne compensent pas",
              ],
              [
                "Dépendances",
                "npm audit, pip-audit ou osv-scanner sur le dépôt livré",
                "Nombre d’alertes par gravité, et jours écoulés depuis la publication du correctif",
                "L’exploitation constatée passe avant le score de gravité",
              ],
            ]}
          />

          <p>
            Rien là-dedans ne demande d’outil payant&nbsp;; le seul poste
            coûteux est l’environnement séparé, sans lequel la première mesure se
            ferait sur la production. Quatre autres sujets s’écrivent au lieu de
            s’exécuter&nbsp;: conséquences métier, conduite d’un incident,
            maintenance, responsabilités.
          </p>

          <h3>Une exigence se cite avec sa version et son résultat de test</h3>
          <p>
            «&nbsp;Nous suivons OWASP&nbsp;» ne désigne rien de vérifiable. Le
            référentiel{" "}
            <a
              href="https://owasp.org/www-project-application-security-verification-standard/"
              target="_blank"
              rel="noreferrer"
            >
              ASVS 5.0.0
            </a>
            , publié le 30&nbsp;mai 2025, se cite exigence par exigence, avec ce
            qui a été testé et avec quel résultat. Le{" "}
            <a
              href="https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20"
              target="_blank"
              rel="noreferrer"
            >
              cadre NIST CSF 2.0
            </a>{" "}
            (CSWP 29, 26&nbsp;février 2024) précise lui-même qu’il n’impose ni
            ordre, ni liste de contrôles universelle. Aucun des deux ne certifie
            quoi que ce soit. La façon
            d’écrire une exigence dont on sait décrire l’échec est détaillée
            dans le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges SaaS
            </Link>
            .
          </p>

          <p>
            Chaque exécution se consigne sur la même fiche. Neuf lignes, et la
            neuvième est celle qu’on oublie.
          </p>

          <FormulaBox>
            {[
              "Mesure\u00a0:",
              "Date et heure d’exécution\u00a0:",
              "Environnement (jamais la production)\u00a0:",
              "Qui l’a exécutée\u00a0:",
              "Le nombre lu\u00a0:",
              "Le seuil comparé, et qui l’a fixé\u00a0:",
              "Tenu / non tenu\u00a0:",
              "Ce qui manquait\u00a0:",
              "Date de la prochaine exécution\u00a0:",
            ].join("\n")}
          </FormulaBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="restauration"
          number="04"
          label="Mesure 1"
          title={"Votre sauvegarde restaure-t-elle l’application entière\u00a0?"}
        >
          <p>
            «&nbsp;Nous avons des sauvegardes quotidiennes&nbsp;» répond à
            côté de la question. Elle porte sur ce qui remonte, dans quel ordre
            et en combien de temps.
          </p>

          <h3>Le protocole, en une demi-journée</h3>
          <ol>
            <li>
              <strong>Choisissez un environnement séparé.</strong> Jamais la
              production, jamais un environnement qui partage une base, un
              stockage ou un compte avec elle.
            </li>
            <li>
              <strong>Notez l’heure de départ, puis restaurez sans appeler le
              développeur.</strong>{" "}
              S’il faut l’appeler, c’est un résultat&nbsp;: votre reprise dépend
              de sa disponibilité.
            </li>
            <li>
              <strong>Remontez les cinq objets.</strong> La base de données,
              les fichiers déposés par les utilisateurs, la configuration, les
              secrets et les comptes. C’est là que ça casse.
            </li>
            <li>
              <strong>Rejouez les parcours métier complets</strong> retenus dans
              le{" "}
              <Link href="/guides/plan-recette-application-metier">
                plan de recette de l’application
              </Link>
              , ceux dont l’échec coûte de l’argent. Un écran d’accueil qui
              s’affiche ne prouve rien.
            </li>
            <li>
              <strong>Notez trois nombres&nbsp;:</strong> la durée totale,
              l’écart entre la dernière écriture et le dernier enregistrement
              restauré, et le nombre de parcours qui repassent.
            </li>
          </ol>

          <GuideTable
            caption="Ce que l’exercice a rendu visible sur le cas construit"
            headers={[
              "Ce qu’on remonte",
              "Ce que l’exercice a donné",
              "Ce que ça change",
            ]}
            rows={[
              [
                "Base de données",
                "Restaurée en 40\u00a0minutes, au point du jour à 2\u00a0h",
                "Quinze heures entre la sauvegarde et une panne de 17\u00a0h\u00a0: la journée de saisie entière, 62\u00a0commandes",
              ],
              [
                "Fichiers déposés par les utilisateurs",
                "Absents\u00a0: 9\u00a0300\u00a0bons signés vivent dans un stockage non couvert",
                "Deux heures d’attente d’un ticket, puis remontée",
              ],
              [
                "Configuration et secrets",
                "Non sauvegardés, reconstitués depuis un ancien courriel",
                "Une clé d’envoi d’e-mails reste invalide trois jours",
              ],
              [
                "Comptes et rôles",
                "Restaurés, mais tous avec le rôle par défaut",
                "Les 9 chauffeurs-livreurs héritent des droits de l’administration des ventes",
              ],
              [
                "Total mesuré",
                "6\u00a0h\u00a040 au lieu des 4\u00a0h acceptées",
                "2\u00a0h\u00a040 de trop, soit 2\u00a0648\u00a0€ si la même durée était subie en heures ouvrées",
              ],
            ]}
          />

          <p>
            L’écart ne vient pas de la base, qui revient en quarante minutes,
            mais des quatre autres objets que personne n’avait listés&nbsp;: il
            faut les ajouter à ce que la sauvegarde couvre, puis recommencer.
          </p>
          <p>
            L’exercice lui-même ne coûte que la demi-journée qu’il mobilise, sur
            une copie&nbsp;: aucune commande n’est perdue, personne n’est bloqué.
            Les 2&nbsp;648&nbsp;€ sont ce que la même durée coûterait le jour
            d’une panne réelle, entre 9&nbsp;h et 17&nbsp;h.
          </p>
          <p>
            La perte de données se lit à part, et une panne de fin de journée
            le montre bien. La sauvegarde tourne à 2&nbsp;h&nbsp;; une panne à
            17&nbsp;h n’interrompt presque rien, la journée est finie, mais elle
            efface les quinze heures qui la séparent de la sauvegarde,
            c’est-à-dire toute la saisie du jour. Soit 62&nbsp;commandes à
            ressaisir, six minutes chacune à l’administration des
            ventes&nbsp;: 372&nbsp;minutes, donc 6&nbsp;h&nbsp;12 pour une
            personne et 235,60&nbsp;€ de temps chargé, sans compter les bons
            signés que personne ne peut reconstituer. La direction avait annoncé
            une perte acceptable d’une heure&nbsp;; entre une heure et quinze, il
            ne s’agit plus d’un réglage mais d’un autre contrat d’hébergement.
          </p>

          <InfoBox
            variant="emerald"
            title={"3-2-1 est un repère, pas une preuve de reprise"}
          >
            <p>
              La règle des trois copies, sur deux supports dont une hors ligne,
              figure dans{" "}
              <a
                href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
                target="_blank"
                rel="noreferrer"
              >
                ANSSI-BP-100, version 1.1 du 27 novembre 2025
              </a>
              , qui précise que ses recommandations ne sont pas normatives sauf
              texte contraire et doivent être adaptées. Trois copies d’une
              sauvegarde incomplète restent incomplètes.
            </p>
          </InfoBox>

          <GuidePremiumMemo title="Une réplication n’est pas une sauvegarde">
            <p>
              Une suppression, une corruption ou un chiffrement malveillant se
              réplique en quelques secondes. La réplication réduit
              l’interruption&nbsp;; seule une copie isolée et versionnée ramène
              un état antérieur.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="detection"
          number="05"
          label="Mesure 2"
          title={"Combien de minutes s’écoulent entre l’action et l’alerte\u00a0?"}
        >
          <p>
            Un journal n’est pas une détection. La différence se mesure en
            minutes.
          </p>
          <p>
            Un mardi à 14&nbsp;h&nbsp;05, le responsable applicatif crée un
            compte d’administration de test, exporte les 3&nbsp;100&nbsp;fiches
            clients, puis supprime le compte à 14&nbsp;h&nbsp;12. Il note l’heure
            de chaque geste et ne prévient que le propriétaire de l’application,
            qui l’a autorisé par écrit&nbsp;: prévenir l’équipe reviendrait à
            mesurer l’attention d’un collègue.
          </p>
          <p>
            L’exercice rend trois nombres. L’événement figure-t-il dans un
            journal, et à quelle heure exactement&nbsp;? Combien de minutes
            avant qu’une alerte parvienne à une personne nommée&nbsp;? Combien
            de temps ces traces restent-elles consultables&nbsp;?
          </p>

          <h3>Les trois réponses tombent mal</h3>
          <p>
            L’export figure bien dans le journal applicatif, horodaté
            12&nbsp;h&nbsp;05&nbsp;: le serveur écrit en temps universel
            coordonné (UTC) pendant que le journal du serveur web écrit en heure de
            Paris, deux heures plus loin en été&nbsp;; une conversion ratée fait
            accuser la mauvaise personne. Aucune alerte n’est partie&nbsp;: la
            règle existait, elle envoyait un courriel à une boîte générique que
            personne ne relève. Et les journaux de l’offre d’hébergement
            souscrite sont conservés sept jours.
          </p>
          <p>
            Ce troisième nombre est le plus coûteux. L’
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/art_33/oj/fra"
              target="_blank"
              rel="noreferrer"
            >
              article 33 du RGPD
            </a>{" "}
            demande de notifier une violation de données personnelles à
            l’autorité de contrôle dans les meilleurs délais et, si possible,
            sous 72&nbsp;heures après en avoir pris connaissance&nbsp;; l’article
            34 impose d’informer les personnes concernées lorsque le risque pour
            elles est élevé. La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noreferrer"
            >
              fiche CNIL du 14 mars 2024
            </a>{" "}
            recommande en général six mois à un an pour les données de
            journalisation destinées à sécuriser un traitement de données
            personnelles, avec des adaptations à justifier. Sept jours est la
            valeur livrée avec l’offre d’hébergement&nbsp;; personne ne l’a
            choisie.
          </p>
          <p>
            Le seuil&nbsp;: si aucune personne nommée n’a reçu l’alerte dans les
            quinze minutes, écrivez «&nbsp;pas de détection&nbsp;». La correction
            tient en trois réglages&nbsp;: une règle qui écrit dans un canal
            relevé par une personne nommée, un suppléant qui a les mêmes accès,
            une horloge synchronisée. L’
            <a
              href="https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI recommande d’ailleurs, dans son guide de journalisation
              version 2.0 du 28 janvier 2022
            </a>
            , de prévoir la journalisation dès les spécifications&nbsp;: ajoutée
            après coup, elle enregistre ce que le code sait déjà dire, quand
            l’enquête demandera autre chose.
          </p>

          <InfoBox
            variant="amber"
            title={"Journaliser davantage crée aussi un risque"}
          >
            <p>
              Les traces contiennent vite des identifiants, des messages
              d’erreur détaillés, des données personnelles ou des secrets. La
              CNIL demande de ne pas enregistrer les mots de passe ni leurs
              empreintes. Journalisez ce qu’une enquête utiliserait, bornez qui
              peut lire, fixez une durée.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="responsabilites"
          number="06"
          label="Mesure 3"
          title="Le compte témoin lit ce que l’écran lui cache"
        >
          <p>
            L’interface montre à chacun ce qu’il a le droit de voir. Le bouton
            disparaît de l’écran&nbsp;; la requête, elle, part quand même et le
            serveur y répond. Posez-lui donc la question directement.
          </p>

          <h3>Le protocole du compte témoin</h3>
          <ol>
            <li>
              <strong>Ouvrez deux sessions</strong> sur l’environnement restauré
              à la mesure&nbsp;1&nbsp;: un compte à droits complets, ici
              l’administration des ventes, et le moins privilégié, ici un
              chauffeur-livreur.
            </li>
            <li>
              <strong>Dans la session privilégiée, ouvrez dix pages
              sensibles&nbsp;:</strong>{" "}
              une fiche client, un tarif négocié, la liste des commandes du
              jour, un bon de livraison signé, un export de la base clients, une
              fiche article avec son prix d’achat, l’historique de commandes
              d’un client, la tournée du lendemain, la liste des utilisateurs et
              le journal d’activité.
            </li>
            <li>
              <strong>Récupérez chaque requête.</strong> Outils de développement
              du navigateur, onglet Réseau, clic droit sur la requête,
              «&nbsp;Copier comme cURL&nbsp;».
            </li>
            <li>
              <strong>Remplacez le jeton par celui du chauffeur-livreur</strong>{" "}
              et rejouez les dix requêtes telles quelles, sans repasser par
              l’interface.
            </li>
            <li>
              <strong>Lisez les dix codes de réponse.</strong> 403 ou 404, le
              contrôle vit côté serveur. 200, il n’existait que dans l’écran.
            </li>
          </ol>

          <p>
            Sur le cas construit, trois réponses sur dix reviennent en 200. Un
            chauffeur-livreur lit la fiche de n’importe lequel des
            3&nbsp;100&nbsp;clients en changeant un nombre dans l’adresse, prix
            négociés compris. L’
            <a
              href="https://owasp.org/www-project-api-security/"
              target="_blank"
              rel="noreferrer"
            >
              OWASP place ce défaut en tête de son Top&nbsp;10 des risques
              d’interface de programmation
            </a>{" "}
            sous le nom de contrôle d’accès rompu au niveau de l’objet.
          </p>
          <p>
            Le seuil est binaire&nbsp;: une seule réponse 200 bloque la mise en
            service, et les sept refus obtenus à côté ne compensent rien.
            Vérifier côté serveur, sur chacune des trois routes, que l’objet
            demandé appartient bien au client connecté a été chiffré à deux jours
            et demi, soit 1&nbsp;250&nbsp;€ à l’hypothèse de 500&nbsp;€ la
            journée.
          </p>
          <p>
            Le prix de l’inaction se compte autrement. Sur les
            3&nbsp;100&nbsp;clients, 480 sont des praticiens libéraux, donc des
            personnes physiques&nbsp;: une lecture non autorisée avérée est une{" "}
            <a
              href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre1"
              target="_blank"
              rel="noreferrer"
            >
              violation de données personnelles
            </a>{" "}
            et, si elle est susceptible
            d’engendrer un risque pour ces personnes, elle se notifie à
            l’autorité de contrôle sous 72&nbsp;heures après en avoir pris
            connaissance. Cette qualification relève de la{" "}
            <Link href="/services/securite-rgpd">
              sécurité et de la protection des données
            </Link>
            , en coordination avec vos conseils juridiques.
          </p>

          <h3>Un droit sans propriétaire, une alerte sans destinataire</h3>
          <p>
            Les mêmes dix requêtes posent une question que l’informatique ne
            tranche pas&nbsp;: qui décide que le chauffeur-livreur ne doit pas
            voir les prix&nbsp;? La directrice administrative et financière
            tranche&nbsp;; le développeur applique.
          </p>
          <p>
            Il faut cinq rôles, qu’une même personne peut cumuler&nbsp;: qui
            signe la mise en service, qui qualifie les
            alertes, qui déclenche une restauration et détient les accès pour le
            faire, qui suit les corrections, qui prévient le délégué à la
            protection des données (DPD, aussi appelé DPO) et, s’il le faut, un
            juriste. Chacun a un suppléant, et le suppléant a les accès.
          </p>
          <p>
            L’exercice sur table&nbsp;— une simulation discutée, sans incident
            réel&nbsp;— dure une heure et mobilise cinq personnes, soit
            190&nbsp;€ de temps chargé au tarif du cas. Une alerte arrive un
            vendredi à 18&nbsp;h, la personne principale est en congés&nbsp;: qui
            décide de couper, qui détient le mot de passe
            d’administration&nbsp;? Chaque question sans réponse est un accès à
            confier à un suppléant avant lundi.
          </p>

          <GuidePremiumMemo title="Une mesure provisoire porte un nom et une date de fin">
            <p>
              Écrivez ce qu’elle empêche, qui la surveille, quand elle expire et
              ce qui déclenche son arrêt. Couper l’accès des chauffeurs-livreurs
              aux tarifs pendant deux semaines est une mesure&nbsp;;
              «&nbsp;nous ferons attention&nbsp;» n’en est pas une.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="07"
          label="Mesure 4"
          title={"Quelle dépendance faut-il corriger cette semaine\u00a0?"}
        >
          <p>
            La quatrième mesure se relance chaque semaine, et produit trop
            d’informations. Le tri compte davantage que l’analyse.
          </p>
          <p>
            Sur le dépôt livré, lancez la commande de votre
            technologie&nbsp;: <code>npm audit</code> pour du JavaScript,{" "}
            <code>pip-audit</code> pour du Python, <code>osv-scanner</code> pour
            un dépôt mixte. Chacune sort les paquets vulnérables, leur gravité et
            la version qui corrige. Sur le cas construit&nbsp;:
            1&nbsp;043&nbsp;paquets installés pour 68&nbsp;dépendances directes,
            et 31&nbsp;alertes&nbsp;— une critique, cinq hautes, quatorze
            moyennes, onze basses.
          </p>
          <p>
            Le tri commence par ce qu’on écarte. Les
            quatorze moyennes et les onze basses rejoignent le lot du mois, où
            elles partent en une montée de version groupée. Restent les six
            alertes critiques ou hautes, que trois questions ramènent à une.
          </p>

          <GuideTable
            caption={"Ramener 6\u00a0alertes critiques ou hautes à celle qu’on corrige cette semaine"}
            headers={["La question posée", "Ce qu’elle écarte", "Ce qui reste"]}
            rows={[
              [
                "Le code vulnérable part-il en production\u00a0?",
                "2 des 6 ne servent qu’à construire le projet\u00a0; l’option --omit=dev de npm audit les écarte d’office",
                "4",
              ],
              [
                "L’application appelle-t-elle la fonction concernée\u00a0?",
                "1 alerte porte sur une fonction que le code n’appelle jamais",
                "3",
              ],
              [
                "La faille figure-t-elle au catalogue des vulnérabilités dont l’exploitation est constatée\u00a0?",
                "2 des 3 restantes n’y figurent pas et rejoignent le lot du mois",
                "1",
              ],
            ]}
          />

          <p>
            Reste une alerte sur trente et une qui justifie de déranger le
            développeur cette semaine. Le nombre qui décrit vraiment votre
            maintenance est ailleurs&nbsp;: le délai entre la publication du
            correctif et son installation chez vous. Sur le cas construit, la
            version corrigée est publiée depuis le 14&nbsp;janvier&nbsp;; au
            26&nbsp;août 2026, cela fait 224&nbsp;jours. Inscrivez ce délai au{" "}
            <Link href="/services/maintenance-evolution">
              contrat de maintenance
            </Link>
            , avec celui que vous acceptez.
          </p>
          <p>
            Sous le mot «&nbsp;score&nbsp;», deux échelles circulent. Le{" "}
            <a
              href="https://www.first.org/cvss/v4-0/specification-document"
              target="_blank"
              rel="noreferrer"
            >
              CVSS, dans sa version 4.0
            </a>
            , mesure la gravité potentielle sur dix&nbsp;: 9,0 à 10,0 critique,
            7,0 à 8,9 élevée, 4,0 à 6,9 moyenne, 0,1 à 3,9 faible. Le{" "}
            <a
              href="https://www.first.org/epss/"
              target="_blank"
              rel="noreferrer"
            >
              score EPSS
            </a>
            , publié par le même organisme, estime la probabilité qu’une faille
            soit exploitée dans les trente jours à venir. Une faille critique que
            personne n’exploite passe après une moyenne activement utilisée, et
            le{" "}
            <a
              href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
              target="_blank"
              rel="noreferrer"
            >
              catalogue public des vulnérabilités exploitées
            </a>{" "}
            tranche gratuitement.
          </p>

          <h3>Les quatre sujets que rien ne mesure</h3>
          <p>
            Restent les conséquences métier, la conduite d’un incident, la
            maintenance après la mise en service et les responsabilités. L’outil
            ci-dessous les remonte dans l’ordre du plus urgent, garde les
            inconnues visibles et ne calcule aucun score.
          </p>

          <SecurityReadinessTool />

          <p>
            Remplissez-le une fois avec la directrice administrative et
            financière, une fois avec le développeur&nbsp;: un désaccord entre
            les deux vaut mieux qu’un accord de façade.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="08"
          label="Décider"
          title={"Que décider quand une mesure dit non\u00a0?"}
        >
          <p>
            Une mesure qui échoue n’interdit pas la mise en service. Elle déplace
            la décision vers quelqu’un qui a le droit de la prendre, et elle lui
            donne un montant à comparer.
          </p>

          <GuideTable
            caption="Cinq suites possibles, et ce que chacune vous engage à écrire"
            headers={[
              "La décision",
              "Quand elle se défend",
              "Ce qu’elle oblige à écrire",
            ]}
            rows={[
              [
                "Mettre en service",
                "Les quatre mesures passent, et les écarts restants sont chiffrés puis acceptés par la direction",
                "Les risques conservés, leur montant, la date de la prochaine série",
              ],
              [
                "Corriger, puis remesurer",
                "La correction se paie une fois, l’écart se paie à chaque incident\u00a0: 1\u00a0250\u00a0€ pour les trois routes qui répondent 200",
                "Qui corrige, sous quel délai, et la date de la nouvelle exécution",
              ],
              [
                "Réduire ce qu’on ouvre",
                "L’organisation ne tient pas les rôles\u00a0: pas de suppléant, pas de journaux conservés",
                "Ce que l’application ne contiendra pas encore\u00a0: données personnelles, accès depuis Internet, montants",
              ],
              [
                "Pilote sur données fictives",
                "L’apprentissage reste utile et l’activité ne dépend pas de l’application",
                "La date de fin du pilote, sinon il devient la production par inertie",
              ],
              [
                "Reporter",
                "Une mesure n’a pas pu être exécutée du tout\u00a0: pas d’environnement séparé, pas d’accès aux journaux",
                "L’action précise qui rendra la mesure possible, et qui la mène",
              ],
            ]}
          />

          <p>
            Sur les cinq issues, trois mettent quelque chose en service, et
            c’est voulu. Reporter est la plus rare&nbsp;: un écart mesuré a une
            correction et un prix, quand une mesure jamais exécutée n’a ni l’un
            ni l’autre. Borner la première
            version coûte d’ailleurs moins cher que repousser la date&nbsp;— le
            guide{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              quoi inclure dans un MVP
            </Link>{" "}
            sert à cela.
          </p>

          <h3>Et dans six mois&nbsp;?</h3>
          <p>
            Ces quatre nombres périment, chacun à son rythme. Vérifiez au
            passage ce que vous récupérez si vous changez d’équipe&nbsp;: une
            sauvegarde exportable hors de la plateforme, les journaux, la liste
            des comptes, les secrets et le code source. Ces clauses s’écrivent
            avant de signer et se testent une fois, en récupérant réellement une
            copie. Un droit de récupération jamais exercé reste une hypothèse.
          </p>
          <p>
            Aucune de ces quatre mesures ne demande de prestation
            extérieure&nbsp;: un environnement séparé, une règle d’alerte, un
            compte de test et une ligne de commande suffisent. Si la restauration
            passe sous votre DMIA, si l’alerte arrive à une personne nommée en
            moins de quinze minutes, si les dix rejeux sont refusés et si la
            seule alerte retenue au tri est corrigée, vous n’avez besoin d’aucun
            audit. Nos repères publics, relevés sur notre page{" "}
            <Link href="/tarifs">tarifs</Link> le 30&nbsp;août 2026, commencent à
            2&nbsp;000&nbsp;€ HT pour un audit flash, 5&nbsp;000&nbsp;€ HT pour
            un cadrage sécurité et RGPD et 8&nbsp;000&nbsp;€ HT pour un audit
            technique en version Express, 18&nbsp;000&nbsp;€ HT en version
            Standard. Ce sont des repères indicatifs&nbsp;; le devis signé fixe
            le prix ferme.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-fictif"
          number="09"
          label="Ce qui rate"
          title="Ce qui rate sur le cas construit, et ce que ça coûte"
        >
          <p>
            Ces trois incidents reprennent le même cas construit et des
            mécanismes documentés par la CNIL, l’ANSSI et l’OWASP&nbsp;— ce ne
            sont pas des dossiers clients. Ils suivent les huit hypothèses de la
            section&nbsp;02 et comptent l’arrêt en heures ouvrées.
          </p>

          <h3>
            La base revient, les bons de livraison non&nbsp;: 2&nbsp;648&nbsp;€
            au-dessus du seuil
          </h3>
          <p>
            Un mardi à 9&nbsp;h&nbsp;20, l’hébergement perd le disque de la base.
            La restauration démarre à 9&nbsp;h&nbsp;40, la base revient en
            quarante minutes. Les 9&nbsp;300&nbsp;bons de livraison signés, eux,
            vivent dans un stockage que la sauvegarde ne couvrait pas&nbsp;:
            ticket, deux heures d’attente, puis trois heures quarante de
            remontée et de vérification des parcours. Service rétabli à
            16&nbsp;h, six heures quarante après l’arrêt contre quatre acceptées,
            et entièrement dans la journée de travail&nbsp;: à 993&nbsp;€ l’heure
            ouvrée, 6&nbsp;620&nbsp;€, dont 2&nbsp;648&nbsp;€ au-dessus du seuil.
            Personne n’a été attaqué&nbsp;: la sauvegarde était incomplète, et
            nul ne l’avait vérifié.
          </p>

          <h3>Un export de 3&nbsp;100&nbsp;fiches, vu 41&nbsp;jours plus tard</h3>
          <p>
            Un compte ouvert pour un développeur extérieur n’est jamais révoqué.
            Six semaines plus tard, il exporte les 3&nbsp;100&nbsp;fiches
            clients. Aucune alerte ne part&nbsp;: la règle envoyait un courriel à
            une boîte générique. Le geste est découvert 41&nbsp;jours après, en
            relisant des journaux conservés sept jours, où il ne reste rien. Il
            faut alors décider,
            sous 72&nbsp;heures, s’il y a lieu de notifier un incident dont on ne
            sait décrire ni l’étendue, ni lesquels des 480&nbsp;praticiens
            libéraux sont concernés. La
            difficulté n’est pas l’amende&nbsp;: c’est de devoir écrire
            «&nbsp;nous ne savons pas&nbsp;».
          </p>

          <h3>Trois réponses 200 sur dix&nbsp;: 1&nbsp;250&nbsp;€ de correction</h3>
          <p>
            Un commercial change d’entreprise et emporte une capture des tarifs
            négociés de 3&nbsp;100&nbsp;clients. Il lui a suffi de modifier un
            nombre dans l’adresse depuis son téléphone&nbsp;: l’application
            répondait 200. Corriger les trois routes vaut 1&nbsp;250&nbsp;€,
            exactement ce que cela aurait coûté avant la mise en service.
          </p>

          <p>
            Si l’application repose sur une plateforme du marché plutôt que sur
            du code à vous, le guide{" "}
            <Link href="/guides/power-apps-ou-application-sur-mesure">
              Power Apps ou application sur mesure
            </Link>{" "}
            montre ce que l’abonnement couvre. Vous pouvez aussi{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire le projet
            </TrackedGuideCtaLink>{" "}
            en indiquant simplement lesquelles des quatre mesures n’ont pas pu
            être exécutées.
          </p>

          <InfoBox variant="emerald" title="Terminez par une date, pas par un badge">
            <p>
              Écrivez l’action qui manque, la personne qui la mène et le jour où
              le point sera repris. Si la sortie de cette revue est un badge ou
              le mot «&nbsp;conforme&nbsp;», rien n’a été documenté.
            </p>
          </InfoBox>

          <p className="text-sm">
            <strong>Transparence.</strong> Hagnéré Code vend des audits
            techniques et un accompagnement sécurité et RGPD, et perçoit des
            honoraires si vous nous les confiez. Les quatre mesures se font sans
            nous. Les huit hypothèses de coût et de durée listées en
            section&nbsp;02 sont annoncées comme telles&nbsp;: aucune n’a été
            relevée chez un client. Nos prix publics ont été
            relevés le 30&nbsp;août 2026 et sont à revérifier tous les douze
            mois. Aucune de ces mesures ne rend une application sûre, et seul un
            devis signé engage.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
