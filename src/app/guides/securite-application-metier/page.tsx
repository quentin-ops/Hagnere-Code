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
  "Menaces, restauration, détection et responsables avant la mise en service",
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
    id: "consequences",
    number: "02",
    label: "Partir des conséquences",
    shortLabel: "Qualifier",
  },
  {
    id: "capacites",
    number: "03",
    label: "Construire quatre capacités",
    shortLabel: "Construire",
  },
  {
    id: "restauration",
    number: "04",
    label: "Prouver la restauration",
    shortLabel: "Restaurer",
  },
  {
    id: "detection",
    number: "05",
    label: "Détecter et alerter",
    shortLabel: "Détecter",
  },
  {
    id: "responsabilites",
    number: "06",
    label: "Attribuer les responsabilités",
    shortLabel: "Attribuer",
  },
  {
    id: "outil",
    number: "07",
    label: "Préparer la revue",
    shortLabel: "Relire",
  },
  {
    id: "decision",
    number: "08",
    label: "Décider ou reporter",
    shortLabel: "Décider",
  },
  {
    id: "cas-fictif",
    number: "09",
    label: "Cas fictif",
    shortLabel: "Appliquer",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "socle",
    num: "01",
    label: "Socle",
    items: [
      {
        question:
          "Existe-t-il une liste minimale valable pour toute application métier ?",
        answer:
          "Non. Les conséquences, les données, l’exposition, les utilisateurs, les dépendances et les obligations sectorielles changent le besoin. La méthode rassemble huit sujets pour organiser la vérification ; ils ne forment pas une checklist universelle.",
      },
      {
        question: "Le Top 10 OWASP suffit-il pour valider l’application ?",
        answer:
          "Non. Le Top 10 sensibilise à des catégories de risques fréquentes. Le référentiel ASVS 5.0.0 de l’OWASP aide à sélectionner et tester des exigences techniques plus précises, mais aucun des deux ne certifie l’application ou ne couvre seul son exploitation, ses sauvegardes, ses personnes et ses obligations.",
      },
      {
        question: "Faut-il une authentification multifacteur partout ?",
        answer:
          "La force d’authentification doit être adaptée au risque, aux comptes, à l’exposition et aux conséquences. Les accès externes, administrateurs ou à fort impact demandent une attention particulière. La solution exacte doit être qualifiée et testée ; aucune technologie n’est imposée par défaut.",
      },
    ],
  },
  {
    key: "preuves",
    num: "02",
    label: "Preuves",
    items: [
      {
        question: "Une sauvegarde quotidienne est-elle suffisante ?",
        answer:
          "Impossible à conclure sans connaître la perte de données et l’interruption acceptables. Vérifiez le périmètre, l’isolement, les dépendances et l’ordre de reprise, puis restaurez réellement dans un environnement isolé. La fréquence seule ne démontre pas le redémarrage utile au métier.",
      },
      {
        question: "Combien de temps conserver les journaux ?",
        answer:
          "Il n’existe pas de durée universelle. Pour les données de journalisation destinées à sécuriser un traitement de données personnelles, la CNIL recommande en général six mois à un an, avec des adaptations possibles ou nécessaires selon la finalité, le contrôle interne, une obligation ou un besoin documenté. Les autres journaux techniques, métier ou de sécurité ont chacun une finalité, un accès, une protection et une durée à justifier.",
      },
      {
        question: "Un test d’intrusion remplace-t-il cette revue ?",
        answer:
          "Non. Il peut révéler des vulnérabilités sur un périmètre et à un instant donnés. Son résultat ne dit rien, à lui seul, sur la personne qui reçoit une alerte, la restauration, la maintenance des dépendances ou l’acceptation des risques qui restent. Il entre dans un dossier plus large.",
      },
    ],
  },
  {
    key: "decision",
    num: "03",
    label: "Décision",
    items: [
      {
        question: "Qui décide de la mise en service ?",
        answer:
          "Une personne autorisée par l’organisation décide à partir des conséquences métier, des preuves, des écarts et des avis compétents. Le développeur ou l’hébergeur peut documenter et conseiller, mais l’outil de cette page ne donne aucune autorisation de production.",
      },
      {
        question:
          "Que faire si l’application est déjà en production et qu’un incident est soupçonné ?",
        answer:
          "Arrêtez la revue générique et appliquez la procédure d’incident : alertez les responsables, limitez l’aggravation sans détruire les éléments utiles et sollicitez une expertise adaptée. Ne saisissez aucun détail sensible dans l’outil local de cette page.",
      },
      {
        question: "Peut-on continuer un pilote malgré des preuves manquantes ?",
        answer:
          "Seulement si son périmètre est réellement limité, que les conséquences sont acceptables et qu’il n’utilise pas implicitement la production. Des données fictives, des accès restreints et une sortie simple peuvent permettre d’apprendre. Dès que de vraies données ou l’activité en dépendent, le mot pilote ne réduit plus le risque.",
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
          { label: "Mise en service d’une application", variant: "neutral" },
          { label: "Aucun score de sécurité", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Quel socle de sécurité exiger"
        heroTitleEm="pour une application métier"
        heroTitleSuffix="?"
        heroDescription="L’application va accueillir de vraies données ? Partez des conséquences métier, exigez des preuves sur la prévention, la détection, la restauration et la réponse, puis nommez les responsables. Une inconnue critique conduit à limiter ou reporter, jamais à déclarer l’application « sûre »."
        stats={[
          { label: "Contrôles à documenter", value: "8" },
          { label: "Capacités à relier", value: "4" },
          { label: "Score global", value: "Aucun" },
          { label: "Réponses de l’outil", value: "Non envoyées" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Audit technique",
          titleStart: "Faire examiner",
          titleEm: "les preuves réelles",
          description:
            "Apportez l’architecture, les contrôles, les résultats d’exercice et les inconnues. L’audit documente une décision ; il ne promet pas le risque zéro.",
          benefits: [
            "Périmètre et hypothèses explicités",
            "Écarts reliés à des preuves",
            "Priorités et responsabilités documentées",
          ],
          primaryCtaLabel: "Découvrir l’audit technique",
          primaryCtaHref: "/services/audit-technique",
        }}
        toc={toc}
        tocLabel="Revue avant mise en service"
        mobileCtaLabel="Faire auditer le socle"
        sidebarContextCta={{
          eyebrow: "Avant les vraies données",
          title: "Documenter les contrôles, les exercices et leurs limites",
          description:
            "Préparez les conséquences métier, l’architecture, le dernier exercice de restauration et un exemple d’alerte autorisé.",
          benefits: [
            "Sauvegarde séparée de la restauration",
            "Journal séparé de la détection",
            "Responsable et suppléant identifiés",
          ],
          ctaLabel: "Voir l’audit technique",
          ctaHref: "/services/audit-technique",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions avant",
          titleEm: "la mise en service",
          titleEnd: "de l’application.",
          subtitle:
            "Des réponses bornées sur OWASP, les sauvegardes, les journaux, les pilotes et la personne qui décide.",
          ctaTitle: "Faire examiner un socle concret",
          ctaDescription:
            "Décrivez le périmètre et les preuves disponibles sans transmettre de secret, de donnée personnelle ou de détail d’incident.",
          ctaLabel: "Découvrir l’audit",
          ctaHref: "/services/audit-technique",
        }}
        legalSources={[
          {
            source: "Règlement (UE) 2016/679 · article 32",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/fra",
            description:
              "Texte officiel : pour les traitements de données personnelles, mesures techniques et organisationnelles appropriées au risque pour les droits et libertés des personnes, avec notamment selon le cas confidentialité, intégrité, disponibilité, résilience, restauration et évaluation régulière.",
          },
          {
            source: "CNIL · Guide de la sécurité, mise à jour 2026",
            href: "https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
            description:
              "Le PDF courant porte « Version 2024 — mise à jour 2026 » : gouvernance, accès, développement, traçabilité, sauvegarde, continuité, incidents et analyse de risques dans le périmètre des données personnelles.",
          },
          {
            source: "CNIL · Règles essentielles de sécurité, 19 juin 2026",
            href: "https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles",
            description:
              "Fiche générale mise à jour le 19 juin 2026 pour les entreprises : les risques numériques concernent aussi bien les données personnelles que les informations financières ou industrielles. Elle reste une sensibilisation, pas un audit du contexte.",
          },
          {
            source: "CNIL · Encadrer les développements",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Fiche du 14 mars 2024 : intégrer la sécurité dès la conception, séparer les environnements, utiliser autant que possible des données fictives ou anonymisées, tester et éviter les secrets dans le dépôt de code.",
          },
          {
            source: "CNIL · Sauvegarder",
            href: "https://www.cnil.fr/fr/securite-sauvegarder",
            description:
              "Fiche du 14 mars 2024 : copies fréquentes, protection comparable à la production, séparation géographique, copie hors ligne et tests d’intégrité et de restauration. Le repère 3-2-1 n’est pas présenté ici comme une loi universelle.",
          },
          {
            source: "CNIL · Tracer les opérations",
            href: "https://www.cnil.fr/fr/securite-tracer-les-operations",
            description:
              "Fiche du 14 mars 2024 : événements utiles, journaux protégés et analysés. La recommandation de six mois à un an porte ici sur les données de journalisation qui sécurisent un traitement de données personnelles, avec exceptions à justifier.",
          },
          {
            source: "ANSSI · Fondamentaux de la sauvegarde v1.1",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
            description:
              "ANSSI-BP-100, version 1.1 du 27 novembre 2025 : stratégie issue des besoins métier, règle 3-2-1 avec copie hors ligne, exercices de restauration, ordre de reprise et isolation. Le document précise que ses recommandations ne sont pas normatives sauf texte contraire et doivent être adaptées.",
          },
          {
            source: "ANSSI · Architecture de journalisation v2.0",
            href: "https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation",
            description:
              "Guide version 2.0 du 28 janvier 2022 : journalisation prévue dès les spécifications, événements exploitables, protection des traces et usages de détection ou d’analyse après incident. Le document qualifie ses recommandations de non normatives sauf texte contraire et exige leur adaptation au contexte.",
          },
          {
            source: "OWASP · ASVS 5.0.0",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Version stable publiée le 30 mai 2025 : base volontaire pour sélectionner et référencer des exigences techniques vérifiables. Ce n’est ni une certification, ni une preuve globale de sécurité.",
          },
          {
            source: "NIST · Cybersecurity Framework 2.0",
            href: "https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20",
            description:
              "CSWP 29 publié le 26 février 2024 : cadre flexible et non prescriptif autour de Govern, Identify, Protect, Detect, Respond et Recover. Les fonctions n’imposent ni ordre, ni checklist universelle.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites",
          title: "Votre application reste à tester dans son propre contexte",
          description:
            "Les exemples, tableaux et l’outil local ne voient ni votre architecture, ni vos données, ni vos obligations. Une analyse de risques, un audit, un test de sécurité, une qualification RGPD ou sectorielle et une décision humaine restent nécessaires selon le contexte.",
        }}
        relatedGuides={[
          {
            label: "Plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
          {
            label: "Comment rédiger un cahier des charges SaaS ?",
            href: "/guides/cahier-des-charges-saas",
          },
          {
            label: "MVP SaaS : quoi inclure avant un premier client ?",
            href: "/guides/mvp-saas-quoi-inclure",
          },
        ]}
        relatedGuidesLabel="Compléter la décision"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse courte"
          title="Les faits observables valent mieux qu’une promesse de sécurité"
        >
          <p>
            Avant de charger de vraies données, posez une question plus utile
            que « l’application est-elle sécurisée ? » : qui pourrait voir,
            modifier, bloquer ou perdre quoi, et quel serait l’effet sur
            l’activité ?
          </p>

          <p>
            Attribuez un responsable à chaque mesure et demandez des traces
            observables sur quatre capacités : <strong>prévenir</strong>,
            <strong> détecter</strong>, <strong>reprendre</strong> et{" "}
            <strong>répondre</strong>. Une procédure écrite compte, mais un
            contrôle critique doit aussi être exercé.
          </p>

          <p>
            Restaurez l’application dans un environnement isolé. Déclenchez un
            événement autorisé et vérifiez que l’alerte arrive à la bonne
            personne. Rejouez la première heure d’un incident.
          </p>

          <p>
            Si l’impact, la preuve ou le responsable d’un point décisif reste
            inconnu, limitez le pilote ou reportez la mise en service avec de
            vraies données.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/securite-application-metier/socle-securite-16x9.webp"
              alt="Chaîne de preuves autour d’une application métier reliant prévenir, détecter, reprendre et répondre"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>

          <GuidePremiumMemo title="Une inconnue reste une question ouverte">
            <p>
              Notez-la telle quelle, puis identifiez la personne ou le document
              capable de répondre. Un bon point ne compense pas une condition
              bloquante sur la restauration, la détection ou la responsabilité.
            </p>
          </GuidePremiumMemo>

          <InfoBox
            variant="amber"
            title="Incident actif : quittez la revue générique"
          >
            <p>
              Si une compromission, une fuite, une altération ou une
              indisponibilité est en cours ou soupçonnée, appliquez la procédure
              d’incident et contactez les responsables compétents. Ne documentez
              aucun secret ni détail opérationnel dans l’outil de cette page.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="consequences"
          number="02"
          label="Menaces utiles"
          title="Une menace prend sens par ses conséquences sur l’activité"
        >
          <p>
            « Cyberattaque » est trop large pour décider. Décrivez plutôt ce
            qu’une personne, une erreur, un composant ou une panne pourrait
            provoquer. Cette formulation aide le métier à fixer les priorités et
            l’équipe technique à proposer des contrôles vérifiables.
          </p>

          <GuideTable
            caption="Passer d’une menace vague à une question vérifiable"
            headers={["Conséquence", "Question métier", "Élément à rechercher"]}
            rows={[
              [
                "Divulgation",
                "Quelles informations seraient exposées et à qui ne doivent-elles jamais l’être ?",
                "Données minimisées, accès testé, traces et procédure d’incident",
              ],
              [
                "Modification",
                "Quelle règle, décision ou valeur pourrait être changée sans autorisation ?",
                "Contrôle d’accès, validation, journal et alerte sur action sensible",
              ],
              [
                "Indisponibilité",
                "Quel travail s’arrête et comment continuer sans l’application (mode dégradé) ?",
                "Dépendances inventoriées, objectif métier et exercice de reprise",
              ],
              [
                "Perte ou corruption",
                "Quelle perte de données est acceptable et comment la détecter ?",
                "Sauvegarde isolée, contrôle d’intégrité et restauration observée",
              ],
              [
                "Action non attribuable",
                "Quelle opération doit pouvoir être reliée à un compte et un instant ?",
                "Événement journalisé sans secret, horodatage, protection et accès borné",
              ],
              [
                "Composant vulnérable",
                "Qui surveille, qualifie, teste puis installe la correction ?",
                "Inventaire, alerte de vulnérabilité, décision et preuve de mise à jour",
              ],
            ]}
          />

          <p>
            Pour rendre la ligne « contrôle d’accès » testable,{" "}
            <Link href="/guides/securite-application-metier">
              définissez qui peut voir et modifier quoi
            </Link>{" "}
            objet par objet, puis associez à chaque autorisation critique un cas
            autorisé et un cas refusé.
          </p>

          <p>
            Pour un traitement de données personnelles, l’
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/fra"
              target="_blank"
              rel="noreferrer"
            >
              article 32 du règlement général sur la protection des données
              (RGPD)
            </a>{" "}
            demande au responsable du traitement et au sous-traitant des mesures
            techniques et organisationnelles appropriées au risque pour les
            droits et libertés des personnes. Il cite, selon le cas,
            confidentialité, intégrité, disponibilité, résilience, restauration
            et évaluation régulière. Il ne fournit pas une fréquence de
            sauvegarde ou une architecture universelle.
          </p>

          <InfoBox
            variant="blue"
            title="Le périmètre juridique vient après les faits"
          >
            <p>
              « Pas de données sensibles » ne signifie pas « pas de données
              personnelles ». Faites qualifier les finalités, les catégories,
              les rôles et les obligations réelles. Pour une application sans
              données personnelles, les pratiques CNIL peuvent éclairer la
              démarche, mais l’article 32 du RGPD n’est pas présenté comme la
              base de toute la sécurité du logiciel.
            </p>
          </InfoBox>

          <p>
            Une fois ces conséquences décrites, reliez chaque mesure à ce
            qu’elle doit empêcher, révéler ou permettre de reprendre. Vous
            pourrez alors demander l’élément précis qui l’étaye.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="capacites"
          number="03"
          label="Architecture de décision"
          title="Prévention, détection, reprise et réponse se tiennent ensemble"
        >
          <p>
            Une mesure isolée déplace parfois le problème. Un accès bloqué aide
            peu si les secrets fuient ailleurs. Des journaux sans alerte
            laissent l’événement dormir. Et restaurer uniquement la base échoue
            dès que l’identité, les fichiers ou la configuration manquent. Les
            quatre capacités doivent donc fonctionner ensemble.
          </p>

          <GuideTable
            caption="Quatre capacités à relier sans produire de score"
            headers={[
              "Capacité",
              "Question de revue",
              "Trace possible",
              "Limite",
            ]}
            rows={[
              [
                "Prévenir",
                "Qu’est-ce qui réduit la probabilité ou l’impact d’un accès, d’une erreur ou d’une vulnérabilité ?",
                "Exigence, revue, test et responsable de correction",
                "Aucun contrôle ne supprime toutes les causes",
              ],
              [
                "Détecter",
                "Quel événement produit quelle alerte, pour qui ?",
                "Scénario déclenché et alerte effectivement reçue",
                "Un journal jamais analysé n’est pas une alerte",
              ],
              [
                "Reprendre",
                "Que restaure-t-on, dans quel ordre et avec quelle perte constatée ?",
                "Exercice isolé et limites consignées",
                "Une copie n’est pas une restauration",
              ],
              [
                "Répondre",
                "Qui décide, isole, corrige, conserve les éléments utiles et informe ?",
                "Exercice sur table et contacts confirmés",
                "Le prestataire ne porte pas seul la décision métier",
              ],
            ]}
          />

          <p>
            Le{" "}
            <a
              href="https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20"
              target="_blank"
              rel="noreferrer"
            >
              NIST Cybersecurity Framework 2.0
            </a>{" "}
            présente six fonctions — Govern (gouverner), Identify (identifier),
            Protect (protéger), Detect (détecter), Respond (répondre) et Recover
            (rétablir) — comme un cadre flexible et non prescriptif. Pour la
            revue de mise en service, ces questions sont regroupées en quatre
            capacités. Ce raccourci n’attribue aucun niveau et ne reproduit pas
            le cadre.
          </p>

          <h3>Une exigence technique doit citer sa version et son test</h3>
          <p>
            Pour une application web,{" "}
            <a
              href="https://owasp.org/www-project-application-security-verification-standard/"
              target="_blank"
              rel="noreferrer"
            >
              le référentiel ASVS 5.0.0 de l’OWASP
            </a>{" "}
            — <em>Application Security Verification Standard</em> — peut servir
            de base versionnée pour sélectionner des exigences et des tests.
            Référencez la version et les exigences retenues, leur périmètre,
            leur résultat et leurs exceptions. « Nous suivons OWASP » ou « le
            Top 10 est couvert » ne constitue pas une certification.
          </p>

          <FormulaBox>
            {[
              "Contrôle :",
              "Conséquence métier réduite :",
              "Exigence versionnée :",
              "Périmètre et environnement :",
              "Responsable :",
              "Test autorisé :",
              "Résultat observé :",
              "Écart, limite ou exception :",
              "Action et date de prochaine revue :",
            ].join("\n")}
          </FormulaBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="restauration"
          number="04"
          label="Sauvegarde et reprise"
          title="La restauration révèle ce que la sauvegarde permet vraiment"
        >
          <p>
            Le métier doit d’abord préciser la perte de données et
            l’interruption qu’il peut accepter.
          </p>

          <p>
            L’
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI-BP-100 version 1.1 du 27 novembre 2025
            </a>{" "}
            relie la stratégie de sauvegarde à ces besoins. La perte de données
            maximale admissible est appelée PDMA, ou RPO en anglais. La durée
            maximale d’interruption admissible est appelée DMIA, ou RTO en
            anglais. Aucune valeur par défaut ne convient automatiquement à
            votre activité.
          </p>

          <GuideTable
            caption="Ce qu’un exercice de restauration doit rendre visible"
            headers={["Étape", "Question", "Résultat à conserver"]}
            rows={[
              [
                "Périmètre",
                "Données, fichiers, configuration, secrets et dépendances sont-ils couverts ?",
                "Inventaire sauvegardé et exclusions",
              ],
              [
                "Isolement",
                "La copie reste-t-elle disponible si la production ou les comptes sont compromis ?",
                "Architecture, accès et copie hors ligne ou séparation justifiée",
              ],
              [
                "Déclenchement",
                "Qui décide et obtient les accès nécessaires ?",
                "Responsable, suppléant et procédure",
              ],
              [
                "Ordre",
                "Quelles dépendances doivent revenir avant l’application ?",
                "Séquence testée et point de contrôle",
              ],
              [
                "Intégrité",
                "Les données restaurées sont-elles complètes et cohérentes ?",
                "Contrôles observés et écarts",
              ],
              [
                "Métier",
                "Un utilisateur autorisé peut-il reprendre le parcours critique ?",
                "Cas métier exécuté après restauration",
              ],
            ]}
          />

          <InfoBox
            variant="emerald"
            title="Le repère 3-2-1 ne démontre pas la reprise"
          >
            <p>
              Trois copies sur deux supports, dont une hors ligne, forment le
              repère 3-2-1 recommandé par l’ANSSI et conseillé par la CNIL. La
              règle doit être adaptée : elle ne décrit ni les données incluses,
              ni la protection, ni l’ordre de reprise, ni le résultat d’un
              exercice.
            </p>
          </InfoBox>

          <GuidePremiumMemo title="Réplication et sauvegarde ne jouent pas le même rôle">
            <p>
              Une suppression, une corruption ou un chiffrement malveillant peut
              être répliqué. La réplication peut réduire l’interruption lorsque
              le métier ne tolère presque aucune perte, mais la sauvegarde
              isolée, les versions et l’exercice gardent une fonction distincte.
            </p>
          </GuidePremiumMemo>

          <p>
            La reprise répond à la perte ou à l’arrêt. Il faut encore savoir
            assez tôt qu’un événement anormal se produit : c’est le rôle de la
            chaîne de détection.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="detection"
          number="05"
          label="Journaux et alertes"
          title="Un journal utile mène d’un événement à une action"
        >
          <p>
            L’
            <a
              href="https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI, dans son guide de journalisation version 2.0 du 28 janvier
              2022
            </a>
            , recommande de prévoir la journalisation des applications métier
            dès les spécifications. Les événements servent à détecter pendant
            l’activité ou à reconstituer le chemin et l’impact après un
            incident. Cela suppose des formats exploitables, une protection, une
            horloge cohérente et une analyse.
          </p>

          <GuideTable
            caption="Transformer une trace en capacité de détection"
            headers={["Maillon", "Question", "STOP fréquent"]}
            rows={[
              [
                "Événement",
                "Quelle action sensible, erreur ou anomalie doit être visible ?",
                "Tout collecter sans finalité",
              ],
              [
                "Contenu",
                "L’auteur, l’instant, la nature et la cible sont-ils identifiables sans copier inutilement les données ?",
                "Mot de passe, secret ou donnée complète dans le journal",
              ],
              [
                "Protection",
                "Qui peut lire, modifier ou supprimer la trace ?",
                "Même compte d’administration sans séparation",
              ],
              [
                "Alerte",
                "Quelle condition déclenche un signal exploitable ?",
                "Tableau de bord jamais consulté",
              ],
              [
                "Destinataire",
                "Qui reçoit, qualifie puis alerte le niveau responsable, y compris en cas d’absence ?",
                "Boîte générique sans propriétaire",
              ],
              [
                "Exercice",
                "Un scénario autorisé a-t-il parcouru la chaîne complète ?",
                "Présumer que l’outil alerte",
              ],
            ]}
          />

          <p>
            La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noreferrer"
            >
              fiche CNIL « Tracer les opérations » du 14 mars 2024
            </a>{" "}
            demande notamment de ne pas enregistrer les mots de passe ou leurs
            empreintes et de protéger les traces. Sa recommandation usuelle de
            six mois à un an concerne les données de journalisation destinées à
            sécuriser un traitement de données personnelles, avec des
            adaptations à justifier. Elle ne crée pas une durée universelle pour
            tous les journaux.
          </p>

          <InfoBox
            variant="amber"
            title="Journaliser plus peut aussi créer un risque"
          >
            <p>
              Les traces peuvent contenir des données personnelles, des
              identifiants, des erreurs détaillées ou des secrets. Minimisez,
              contrôlez les accès, fixez une durée par finalité et vérifiez la
              suppression. La détection ne justifie pas une collecte sans
              limite.
            </p>
          </InfoBox>

          <p>
            Une alerte n’a de valeur que si quelqu’un peut la qualifier et agir.
            La section suivante attribue cette décision, son remplacement en cas
            d’absence et les autres responsabilités de reprise.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="responsabilites"
          number="06"
          label="Gouvernance opérationnelle"
          title="Les responsabilités doivent tenir même en cas d’absence"
        >
          <p>
            « Le prestataire gère » ne suffit pas. Un contrat peut confier
            l’hébergement, les alertes ou la maintenance ; l’organisation doit
            encore fixer les conséquences acceptables, autoriser les actions,
            qualifier les obligations et vérifier les preuves.
          </p>

          <p>
            Une même personne peut cumuler plusieurs rôles. Chacun doit
            néanmoins être accepté, compris et confié à un remplaçant en cas
            d’absence. Selon le contexte, associez le délégué à la protection
            des données (DPD, aussi appelé DPO), le responsable de la sécurité
            des systèmes d’information (RSSI), un juriste ou un autre
            spécialiste.
          </p>

          <GuideTable
            caption="Responsabilités à attribuer avant la mise en service"
            headers={["Rôle", "Décision ou action", "Preuve"]}
            rows={[
              [
                "Propriétaire métier",
                "Fixe les conséquences, le mode dégradé et soumet la décision",
                "Hypothèses et décision datées",
              ],
              [
                "Responsable applicatif",
                "Tient les dépendances, changements, contacts et documents",
                "Registre à jour et accès vérifié",
              ],
              [
                "Responsable technique",
                "Met en œuvre, teste, corrige et explique les limites",
                "Résultats, écarts et plan de traitement",
              ],
              [
                "Responsable des alertes",
                "Reçoit, qualifie puis alerte le niveau responsable",
                "Alerte testée et suppléance",
              ],
              [
                "Responsable de restauration",
                "Déclenche et dirige l’exercice",
                "Compte rendu et ordre de reprise",
              ],
              [
                "DPD/DPO, RSSI, juriste ou spécialiste",
                "Qualifie les enjeux selon données, exposition, secteur et criticité",
                "Avis contextualisé, sans validation fictive",
              ],
            ]}
          />

          <h3>
            L’absence d’une personne clé met déjà l’organisation à l’épreuve
          </h3>
          <p>
            Un exercice sur table — une simulation discutée sans provoquer
            d’incident réel — peut rester court : une alerte arrive, la personne
            principale est absente, un compte doit être suspendu, une sauvegarde
            doit rester isolée et un décideur doit accepter le mode dégradé.
            Observez les appels, les accès manquants, les ambiguïtés et les
            décisions. Conservez les limites ; ne transformez pas l’exercice en
            attestation.
          </p>

          <FormulaBox>
            {[
              "Événement fictif autorisé :",
              "Personne alertée :",
              "Suppléant :",
              "Première décision :",
              "Action d’isolement :",
              "Responsable de la restauration :",
              "Éléments utiles à conserver :",
              "Information métier / données / juridique :",
              "Écart observé et action :",
            ].join("\n")}
          </FormulaBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="07"
          label="Outil local"
          title="L’outil fait remonter le premier point à traiter"
        >
          <p>
            L’outil ci-dessous relit huit contrôles en traitant d’abord le plus
            urgent. Il garde les inconnues, donne la priorité aux incidents et
            aux blocages, puis demande les écrits, les responsables, la
            restauration, la détection et les autres exercices. Il ne mesure ni
            probabilité, ni impact, ni conformité.
          </p>

          <SecurityReadinessTool />

          <p>
            Une fois les exigences minimales documentées ou exercées, le
            contexte reste décisionnel. Un impact matériel ou critique, des
            données personnelles ou une exposition Internet conduisent à une
            revue qui tient compte du contexte. Elle mobilise, selon les raisons
            signalées, les compétences en métier et continuité, en protection
            des données ou en sécurité applicative et exploitation. Ces
            compétences peuvent être internes ; aucun intervenant extérieur
            n’est imposé par défaut. Seul le contexte déclaré limité, sans
            données personnelles et sans exposition Internet, aboutit à la revue
            métier limitée.
          </p>

          <p>
            Utilisez-le une première fois avec le propriétaire métier, puis avec
            le responsable technique. Un désaccord est une information utile :
            recherchez la preuve au lieu de choisir la réponse la plus
            rassurante. Quand l’outil affiche « dossier présentable », il
            indique seulement qu’une revue humaine peut commencer.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="08"
          label="Arbitrage"
          title="Une décision écrite garde ses limites visibles"
        >
          <p>
            La décision dépend des conséquences, du résultat des contrôles, des
            écarts et des personnes autorisées. Aucun seuil de réussite ne se
            déduit de cette revue. Écrivez la décision, les limites, les mesures
            temporaires, les risques qui restent, le propriétaire et la
            prochaine échéance.
          </p>

          <GuideTable
            caption="Décisions possibles après la revue"
            headers={["Décision", "Quand l’envisager", "Condition honnête"]}
            rows={[
              [
                "Soumettre à mise en service",
                "Contexte qualifié, contrôles essentiels exercés, écarts acceptés par les responsables",
                "Ne pas écrire « sécurisé » ; conserver les risques qui restent et les avis",
              ],
              [
                "Pilote limité",
                "Apprentissage encore utile avec données fictives, accès bornés et sortie simple",
                "Empêcher que le pilote devienne la production par inertie",
              ],
              [
                "Simplifier",
                "L’organisation ne peut pas porter les responsabilités du périmètre prévu",
                "Réduire données, exposition, fonctions ou dépendances",
              ],
              [
                "Reporter",
                "Restauration, détection, responsable ou conséquence critique inconnus",
                "Nommer l’action qui permettra une nouvelle revue",
              ],
              [
                "Faire intervenir",
                "Incident, donnée sensible, forte exposition, contrainte sectorielle ou vulnérabilité critique",
                "Mobiliser la compétence adaptée en données, sécurité, droit ou réponse à incident",
              ],
              [
                "Choisir un outil existant",
                "Une solution standard couvre le besoin et réduit les responsabilités spécifiques",
                "Vérifier tout de même données, accès, sortie et preuves du fournisseur",
              ],
            ]}
          />

          <GuidePremiumMemo title="Une mesure temporaire a un propriétaire et une fin">
            <p>
              Si une limitation compense provisoirement un écart, écrivez ce
              qu’elle empêche, qui la surveille, quand elle expire et ce qui
              déclenche l’arrêt. « Nous ferons attention » n’est pas une mesure
              vérifiable.
            </p>
          </GuidePremiumMemo>

          <p>
            Pour faire examiner l’architecture, les preuves et les inconnues,
            consultez le{" "}
            <Link href="/services/audit-technique">
              service d’audit technique
            </Link>
            . Lorsque la question porte sur les données personnelles plutôt que
            sur l’architecture, la page{" "}
            <Link href="/services/securite-rgpd">sécurité et RGPD</Link> décrit
            le périmètre technique que nous prenons en charge, en coordination
            avec les responsables juridiques du client — la qualification
            juridique, elle, ne relève pas de ce guide. Si vous avez déjà réuni
            le contexte et souhaitez le transmettre
            sans secret ni détail d’incident, vous pouvez ensuite{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire le projet
            </TrackedGuideCtaLink>
            .
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-fictif"
          number="09"
          label="Mise en situation"
          title="Les vraies données attendront la restauration et l’alerte"
        >
          <GuidePremiumCase
            initial="FI"
            eyebrow="Scénario entièrement fictif"
            title="Application de planification pour une équipe de douze personnes"
          >
            <p>
              Aucun client, système, incident ou résultat réel n’est représenté.
              L’application doit importer les coordonnées des clients, planifier
              les interventions et conserver les comptes rendus terrain.
            </p>
          </GuidePremiumCase>

          <p>
            L’hébergement annonce des sauvegardes quotidiennes, sans exercice de
            restauration. Les modifications administrateur produisent des
            journaux, mais aucune alerte n’est adressée et personne n’est
            responsable de leur lecture. En cas d’incident, la consigne est
            seulement « appeler le développeur », sans suppléant ni accès
            vérifié.
          </p>

          <GuideTable
            caption="Décision du cas fictif sans score"
            headers={["Point", "État", "Action avant vraies données"]}
            rows={[
              [
                "Conséquences",
                "Interruption et modification de planning matérielles",
                "Fixer comment continuer sans l’application et les objectifs métier",
              ],
              [
                "Restauration",
                "Affirmée, non exercée",
                "Restaurer données, configuration et accès dans un environnement isolé",
              ],
              [
                "Détection",
                "Traces présentes, chaîne d’alerte absente",
                "Déclencher une modification autorisée et suivre l’alerte",
              ],
              [
                "Responsabilité",
                "Développeur cité, aucun propriétaire ni suppléant",
                "Attribuer la décision, l’alerte, la restauration et la transmission au niveau responsable",
              ],
              [
                "Décision",
                "Preuves critiques manquantes",
                "Reporter la mise en service avec de vraies données",
              ],
            ]}
          />

          <p>
            Un pilote peut continuer avec des données fictives, des accès
            limités et une sortie simple si cet environnement ne devient pas
            implicitement la production. Après la restauration, l’alerte et
            l’exercice de responsabilité, les résultats reviennent devant une
            personne autorisée. Ils ne produisent toujours pas une déclaration
            automatique de sécurité.
          </p>

          <p>
            Ces contrôles ne vivent pas isolément. Ils commencent par les{" "}
            <Link href="/guides/securite-application-metier">
              droits d’accès
            </Link>
            , se rédigent comme exigences dans le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges
            </Link>{" "}
            et se prouvent par le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette
            </Link>
            , restauration et journalisation comprises. Un prestataire se juge
            aussi là-dessus, comme le détaille{" "}
            <Link href="/guides/cahier-des-charges-saas">
              le choix d’un prestataire sur preuves
            </Link>
            .
          </p>

          <p>
            Deux situations imposent une vigilance supplémentaire. Reprendre un{" "}
            <Link href="/services/outils-internes-sur-mesure">
              logiciel métier existant
            </Link>{" "}
            oblige à inventorier des accès dont plus personne ne connaît le
            périmètre, et une{" "}
            <Link href="/services/outils-internes-sur-mesure">
              migration sans interruption de service
            </Link>{" "}
            multiplie temporairement les copies de données. Sur une plateforme
            partagée, enfin, les guides{" "}
            <Link href="/guides/power-apps-ou-application-sur-mesure">
              Airtable ou Notion face à une application métier
            </Link>{" "}
            et{" "}
            <Link href="/guides/power-apps-ou-application-sur-mesure">
              Power Apps face à une application sur mesure
            </Link>{" "}
            précisent ce que le plan souscrit couvre réellement.
          </p>

          <InfoBox variant="emerald" title="Terminez par une action datée">
            <p>
              Inscrivez l’action qui manque, la personne qui la mène et la date
              à laquelle le point sera réexaminé. Si la seule sortie est un
              badge ou un score, la décision n’est pas assez documentée.
            </p>
          </InfoBox>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
