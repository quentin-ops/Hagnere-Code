import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { RgpdSaasPreparationKit } from "@/components/guides/RgpdSaasPreparationKit";
import {
  GuideLayout,
  type GuideFAQItem,
  type GuideSidebarKeyPoint,
  type GuideSidebarLink,
} from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("rgpd-saas-b2b");

export const metadata = buildGuideMetadata(
  guide,
  "RGPD SaaS B2B : rôles, DPA, transferts et fonctions",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "RGPD SaaS B2B : le dossier à préparer avant de signer",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Un SaaS B2B est-il toujours sous-traitant ?",
    answer:
      "Non. Le rôle dépend du traitement réel. Le SaaS peut traiter certaines données sur instruction de son client et agir comme sous-traitant, tout en décidant lui-même d’autres traitements, par exemple pour sa propre facturation ou prospection. Documentez chaque finalité et faites confirmer les cas ambigus.",
  },
  {
    question: "Un hébergement en Europe suffit-il pour respecter le RGPD ?",
    answer:
      "Non. Demandez les pays précis dans l’Union européenne ou l’Espace économique européen, mais aussi les accès à distance, les sous-traitants ultérieurs et les services annexes. Un transfert hors EEE peut exiger une décision d’adéquation ou des garanties de l’article 46, puis une analyse du transfert et, si nécessaire, des mesures supplémentaires. La localisation ne remplace ni la base juridique, ni les droits, ni la sécurité.",
  },
  {
    question:
      "Faut-il obligatoirement nommer un délégué à la protection des données (DPO) pour un SaaS B2B ?",
    answer:
      "Pas dans tous les cas. L’article 37 vise notamment les organismes publics et les activités de base qui impliquent un suivi régulier et systématique à grande échelle, ou un traitement à grande échelle de données relevant des articles 9 ou 10 ; d’autres règles de l’Union, nationales ou sectorielles peuvent aussi imposer une désignation. Une désignation volontaire reste possible. Un conseil externe ponctuel ne devient pas pour autant le DPO de l’entreprise : les missions, l’indépendance, les moyens, les coordonnées publiées, la formalité auprès de la CNIL et les conflits d’intérêts doivent être clarifiés.",
  },
  {
    question:
      "Faut-il un accord de sous-traitance des données (DPA) avec chaque client ?",
    answer:
      "Lorsqu’un traitement relève d’une relation responsable de traitement–sous-traitant, l’article 28 exige un contrat ou un autre acte juridique comportant les éléments applicables. Le document doit notamment traiter les instructions, la confidentialité, la sécurité, l’assistance, les sous-traitants ultérieurs, les audits et le sort des données. Un modèle signé ne prouve pas que le produit sait exécuter ces engagements.",
  },
  {
    question:
      "Peut-on utiliser les données d’un client pour améliorer une IA ?",
    answer:
      "Pas automatiquement. Lorsque le fournisseur réutilise les données confiées pour une finalité propre, la CNIL demande notamment une autorisation écrite du responsable initial après analyse de compatibilité ; le fournisseur devient responsable du traitement ultérieur. Il faut aussi examiner la base juridique, l’information, les droits, les données sensibles, le fournisseur IA, les transferts, l’éventuelle AIPD et la possibilité de désactiver cette fonction. Une clause vague ne suffit pas.",
  },
  {
    question:
      "Qui doit prévenir la CNIL en cas de fuite et que signifie le délai de 72 heures ?",
    answer:
      "Le responsable de traitement notifie l’autorité compétente sauf si la violation est peu susceptible d’engendrer un risque pour les droits et libertés. Il agit, si possible, dans les 72 heures après en avoir pris connaissance et motive tout retard ; les informations peuvent être fournies par étapes. Le sous-traitant l’informe dans les meilleurs délais. Toutes les violations doivent être documentées. Les personnes sont informées lorsque le risque est élevé, sous réserve des exceptions de l’article 34.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "Un dossier avant le DPA",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "Rôle par finalité",
    description: "",
    color: "violet",
  },
  {
    number: "03",
    title: "Produit, contrat, preuve",
    description: "",
    color: "emerald",
  },
  {
    number: "04",
    title: `Lecture : ${guide.readTimeMin} min`,
    description: "",
    color: "amber",
  },
];

const relatedLinks: GuideSidebarLink[] = [
  {
    href: "/guides/securite-saas-b2b",
    label: "Préparer les preuves de sécurité d’un SaaS",
  },
  {
    href: "/guides/cahier-des-charges-saas",
    label: "Rédiger le cahier des charges du SaaS",
  },
  {
    href: "/guides/choisir-prestataire-application-metier",
    label: "Choisir le prestataire de l’application",
  },
  {
    href: "/services/securite-rgpd",
    label: "Voir l’accompagnement sécurité et RGPD",
  },
];

const tocItems = [
  { id: "cinq-questions", label: "Savoir ce qu’un client attend vraiment" },
  { id: "casquettes", label: "Qualifier le rôle pour chaque finalité" },
  { id: "donnee", label: "Suivre une donnée de bout en bout" },
  {
    id: "finalite-base",
    label: "Relier finalité, base, registre et information",
  },
  { id: "prestataires", label: "Vérifier prestataires et transferts hors EEE" },
  { id: "fonctions", label: "Transformer droits et sécurité en tests" },
  { id: "contrat", label: "Contrôler le DPA ligne par ligne" },
  {
    id: "cookies-ia",
    label: "Traiter séparément cookies et intelligence artificielle",
  },
  { id: "aipd-dpo", label: "Ouvrir les portes AIPD et DPO" },
  { id: "sortie", label: "Préparer la sortie et le changement de fournisseur" },
  { id: "budget", label: "Budgéter trois situations sans faux tarif" },
  {
    id: "kit-preparation",
    label: "Télécharger et remplir le dossier de préparation",
  },
  { id: "incident", label: "Simuler un incident sans faux délai" },
  { id: "decision", label: "Décider : avancer, limiter ou arrêter" },
  { id: "sources", label: "Sources et limites juridiques" },
];

const dataJourney = [
  {
    step: "Collecte",
    question:
      "Qui saisit la donnée, à quel moment et avec quelle information donnée à la personne ?",
    proof:
      "Un formulaire réel ou une importation testée, avec la source et la finalité nommées.",
  },
  {
    step: "Utilisation",
    question:
      "Quelle action du produit a besoin de cette donnée et qui peut la consulter ?",
    proof:
      "Un rôle utilisateur et un scénario métier précis, pas « cela pourra servir plus tard ».",
  },
  {
    step: "Transmission",
    question:
      "Quel prestataire ou service reçoit la donnée, dans quel pays et pour quoi faire ?",
    proof:
      "Une liste reliée aux services réellement activés et aux contrats applicables.",
  },
  {
    step: "Conservation",
    question:
      "Combien de temps la donnée reste-t-elle active, archivée puis supprimée ?",
    proof:
      "Une règle exécutable, une exception justifiée et la personne qui la maintient.",
  },
  {
    step: "Droit ou fin de contrat",
    question:
      "Comment retrouver, corriger, exporter, effacer ou restituer la donnée ?",
    proof:
      "Une demande fictive réalisée jusqu’au résultat final, sauvegardes incluses dans le périmètre expliqué.",
  },
];

const article28Checks = [
  {
    contract:
      "Objet, durée, nature, finalité, types de données et catégories de personnes",
    reality:
      "La fiche de traitement et les fonctions activées racontent exactement le même périmètre.",
  },
  {
    contract:
      "Instructions documentées et alerte si une instruction paraît illicite",
    reality:
      "Le support sait reconnaître une demande hors périmètre et la faire arbitrer avant d’agir.",
  },
  {
    contract:
      "Confidentialité des personnes autorisées et sécurité adaptée au risque",
    reality:
      "Accès nominatifs, retrait des droits, journaux, restauration et tests disposent de preuves datées.",
  },
  {
    contract:
      "Sous-traitants ultérieurs : autorisation, changements et obligations en cascade",
    reality:
      "La liste correspond aux services actifs ; le client peut recevoir l’information et exercer le droit convenu.",
  },
  {
    contract:
      "Assistance pour les droits, la sécurité, les violations et les analyses d’impact",
    reality:
      "Un canal, des responsables, les informations attendues et des délais contractuels réalistes sont testés.",
  },
  {
    contract:
      "Retour ou suppression des données, informations d’audit et contribution aux contrôles",
    reality:
      "Un compte fictif peut être exporté, fermé, supprimé selon la règle convenue et expliqué jusque dans les sauvegardes.",
  },
];

const budgetScenarios = [
  {
    label: "PME · exemple de construction budgétaire sur 12 mois",
    context:
      "Hypothèse fictive : un SaaS simple, sans donnée sensible identifiée dans le périmètre étudié, veut préparer ses premiers questionnaires clients.",
    lines: [
      "3 900 € supposés pour le travail produit : droits, durées et export",
      "2 500 € supposés pour la cartographie et la préparation contractuelle",
      "2 000 € supposés pour les tests de sécurité et de restauration",
      "3 000 € supposés pour maintenir les preuves pendant l’année",
    ],
    total:
      "Sous-total fictif renseigné : 3 900 + 2 500 + 2 000 + 3 000 = 11 400 €. Ce n’est pas un coût complet.",
  },
  {
    label: "Vente entreprise · exemple de construction sur 36 mois",
    context:
      "Hypothèse fictive : le produit doit prouver l’isolation entre clients, organiser le support et maintenir un dossier revu chaque année.",
    lines: [
      "20 000 € supposés pour l’isolation, les droits d’accès et les fonctions",
      "12 000 € supposés pour les journaux, le support et la procédure d’incident",
      "8 000 € supposés pour les registres et la préparation contractuelle",
      "54 000 € supposés pour un accompagnement DPO externe : 1 500 € × 36 mois",
      "27 000 € supposés pour trois tests externes : 9 000 € × 3",
      "14 400 € supposés pour la maintenance : 15 % de 32 000 € × 3 ans",
    ],
    total:
      "Sous-total fictif renseigné : 20 000 + 12 000 + 8 000 + 54 000 + 27 000 + 14 400 = 135 400 €. Ce n’est pas un devis.",
  },
  {
    label: "Chaîne internationale · exemple de construction sur 60 mois",
    context:
      "Hypothèse fictive : le SaaS utilise plusieurs fournisseurs et doit pouvoir réexaminer les transferts et remplacer un service.",
    lines: [
      "35 000 € supposés pour l’architecture et le chiffrement",
      "20 000 € supposés pour préparer l’AITD et les clauses initiales",
      "120 000 € supposés pour l’accompagnement DPO et sécurité : 2 000 € × 60 mois",
      "15 000 € supposés pour le plan de retrait et l’exercice de sortie",
    ],
    total:
      "Sous-total fictif renseigné : 190 000 € ; sensibilité à 220 000 € si un remplacement fournisseur supposé à 30 000 € devient nécessaire.",
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "RGPD pour un SaaS B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre client demande un DPA, la liste des prestataires, les pays d’accès et la procédure en cas de fuite. Voici comment préparer un dossier cohérent entre le produit, les contrats et les preuves, sans prétendre certifier votre conformité."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes sur le RGPD d’un SaaS B2B"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous êtes sur le point de signer un client. Il vous renvoie un
          questionnaire : qui décide de l’usage des données, quels prestataires
          peuvent y accéder, dans quels pays, pendant combien de temps et que se
          passe-t-il en cas de fuite ? La mauvaise réponse consiste à envoyer
          immédiatement un accord de sous-traitance générique — souvent appelé
          DPA — en espérant que le document suffira. La bonne réponse consiste à
          suivre une donnée de sa collecte à sa suppression, puis à vérifier que
          le rôle déclaré, le produit, les prestataires, le contrat et les tests
          racontent la même histoire. Ce guide vous aide à construire ce
          dossier, à repérer ce que votre équipe peut corriger et à savoir quand
          limiter une fonction ou demander l’avis d’un DPO ou d’un juriste. Il
          fournit une méthode de préparation, pas un avis juridique ni un
          certificat de conformité.
        </p>

        <InfoBox variant="emerald" title="La réponse en une phrase">
          Ne signez pas une promesse que le produit ne sait pas tenir : reliez
          chaque usage à une finalité, un rôle supposé, une base à confirmer,
          des destinataires, une durée, une fonction et une preuve ; faites
          trancher les qualifications et les transferts qui restent incertains.
        </InfoBox>

        <GuideToc items={tocItems} />

        <h2 id="cinq-questions">
          Votre prospect pose cinq questions : répondez avec des faits
        </h2>
        <p>
          Un questionnaire de sécurité ou de protection des données peut
          contenir des dizaines de lignes. Pour un dirigeant, cinq questions
          suffisent à révéler les principales zones de travail :
        </p>

        <div className="not-prose my-8 grid gap-4">
          {[
            {
              question: "Quelles données traitez-vous, et pourquoi ?",
              evidence:
                "Une carte des champs et fichiers reliés à une finalité précise.",
            },
            {
              question: "Qui décide, et pour le compte de qui ?",
              evidence:
                "Une qualification argumentée pour chaque usage, pas un rôle unique appliqué à tout le SaaS.",
            },
            {
              question: "Qui d’autre reçoit les données ?",
              evidence:
                "Une liste à jour des services activés, données, lieux et engagements.",
            },
            {
              question:
                "Comment les droits et la fin de contrat fonctionnent-ils ?",
              evidence:
                "Une demande fictive exécutée, un export compris et une règle de suppression testée.",
            },
            {
              question: "Que faites-vous lors d’un incident ?",
              evidence:
                "Un canal, des personnes nommées, les faits conservés et une escalade adaptée au rôle.",
            },
          ].map((item, index) => (
            <section
              key={item.question}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-200">
                      Preuve utile :
                    </strong>{" "}
                    {item.evidence}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          Si une réponse repose sur « notre hébergeur est européen » ou « notre
          avocat nous a donné un modèle », considérez-la comme incomplète. Elle
          peut être vraie et utile, mais elle ne décrit ni les usages du
          produit, ni tous les destinataires, ni la manière d’exécuter une
          demande.
        </p>

        <h2 id="casquettes">
          Votre SaaS peut porter deux casquettes dans la même journée
        </h2>
        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle que la qualification dépend des activités réelles
          </a>{" "}
          et non du seul titre écrit dans le contrat. Elle recommande de
          documenter le raisonnement. Le{" "}
          <a
            href="https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comité européen de la protection des données
          </a>{" "}
          approfondit ces notions dans ses lignes directrices 07/2020.
        </p>

        <GuideTable
          caption="Deux casquettes possibles d’un même fournisseur SaaS"
          headers={[
            "Usage",
            "Qui décide et rôle à examiner",
            "Question de contrôle",
          ]}
          rows={[
            [
              "Le client charge la liste de ses salariés pour organiser une formation.",
              "Le client définit généralement l’objectif et donne des instructions : sous-traitant possible pour ce traitement, à confirmer selon les faits.",
              "Le fournisseur utilise-t-il les données pour une finalité propre non prévue ?",
            ],
            [
              "Le fournisseur conserve les contacts de facturation de ses clients.",
              "Le fournisseur décide de sa gestion contractuelle et comptable : responsable possible pour cette finalité propre.",
              "La donnée et sa durée sont-elles limitées à ce besoin ?",
            ],
            [
              "Le produit mutualise des données pour entraîner un modèle ou créer un nouveau service.",
              "La décision peut dépasser les instructions initiales du client : qualification et licéité à réexaminer impérativement.",
              "Contrat, information et droits autorisent-ils réellement ce nouvel usage ?",
            ],
          ]}
        />

        <p>
          Le tableau ne qualifie pas votre service à distance. Il montre
          pourquoi « nous sommes seulement sous-traitants » est une réponse trop
          large. Pour chaque finalité, notez qui choisit les données, la raison,
          la durée et les moyens essentiels. Le choix d’un hébergeur ou d’un
          format peut rester un moyen technique laissé au sous-traitant ;
          décider de réutiliser les données pour un nouveau produit touche à la
          finalité et change l’analyse. Si un sous-traitant détermine lui-même
          les finalités et moyens d’un traitement, l’article 28, paragraphe 10,
          prévoit qu’il est considéré comme responsable pour ce traitement.
        </p>

        <InfoBox
          variant="blue"
          title="Si la décision est réellement partagée, n’effacez pas le problème"
        >
          Lorsque deux organisations déterminent conjointement les finalités et
          moyens d’un traitement, l’
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 26 du RGPD
          </a>{" "}
          prévoit un accord transparent qui répartit les obligations. Les
          grandes lignes de cet accord doivent être accessibles aux personnes,
          qui peuvent exercer leurs droits à l’égard de chacun des responsables
          conjoints. Ce n’est pas une troisième case pratique à cocher : faites
          confirmer les faits, puis rendez visibles l’information, les droits,
          la sécurité et la gestion des incidents.
        </InfoBox>

        <h2 id="donnee">Suivez une donnée de bout en bout</h2>
        <p>
          Choisissez une donnée ordinaire du produit — par exemple l’adresse
          professionnelle d’un utilisateur — et refusez de passer à la suivante
          tant que son parcours reste flou. Cette méthode évite de remplir un
          registre abstrait sans voir les fonctions manquantes.
        </p>

        <div className="not-prose my-8 space-y-4">
          {dataJourney.map((item, index) => (
            <section
              key={item.step}
              className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-800 dark:bg-violet-950 dark:text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.step}
                  </h3>
                  <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {item.question}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong>Preuve :</strong> {item.proof}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL propose un guide RGPD destiné aux équipes de développement
          </a>{" "}
          qui relie notamment architecture, minimisation, gestion des
          utilisateurs, tests, information, droits et conservation. C’est une
          première approche, pas une validation de votre SaaS. Utilisez-la pour
          transformer les choix en tâches vérifiables.
        </p>

        <h2 id="finalite-base">
          Avant la technique, écrivez pourquoi la donnée existe et qui doit le
          justifier
        </h2>
        <p>
          Pour chaque champ, posez une question très simple : « quelle action
          utile devient impossible si nous ne le collectons pas ? » Si personne
          ne sait répondre, retirez-le du formulaire de test. La{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle le principe de minimisation
          </a>{" "}
          : les données doivent être adéquates, pertinentes et limitées à ce qui
          est nécessaire au regard de la finalité.
        </p>

        <p>
          Cette question ne choisit pas la base juridique. Elle évite seulement
          de collecter « au cas où ». Pour un SaaS de planification, la date de
          naissance d’un salarié n’a pas à être demandée si aucune règle du
          service ne l’utilise. Ensuite, le responsable du traitement doit faire
          confirmer la base de l’article 6 adaptée aux faits. Le consentement,
          le contrat et l’intérêt légitime ne sont pas trois formulations
          interchangeables.
        </p>

        <p>
          Ce travail doit aussi entrer dans la conception du produit. L’
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 25 du RGPD
          </a>{" "}
          demande au responsable de prévoir des mesures adaptées dès la
          détermination des moyens et de limiter, par défaut, la quantité de
          données, l’étendue du traitement, la durée et l’accessibilité. En
          pratique, un écran d’administration ne devrait donc pas ouvrir tous
          les champs, tous les historiques et tous les utilisateurs « par
          commodité ». Commencez avec le minimum, puis justifiez chaque accès ou
          conservation supplémentaire.
        </p>

        <GuideTable
          caption="La ligne minimale à documenter pour chaque finalité"
          headers={[
            "Question du dirigeant",
            "Réponse attendue",
            "Signal d’arrêt",
          ]}
          rows={[
            [
              "Pourquoi utilisons-nous ces données ?",
              "Une finalité précise reliée à une action du produit.",
              "« Améliorer le service » sans usage défini.",
            ],
            [
              "Quelle base faut-il examiner ?",
              "Une hypothèse d’article 6 attribuée à un responsable et à faire confirmer.",
              "Une case « consentement » choisie par défaut ou une base copiée d’un autre usage.",
            ],
            [
              "Quelles personnes et données sont concernées ?",
              "Catégories, source, destinataires et données réellement utilisées.",
              "Des données sensibles, pénales, de mineurs ou de salariés non signalées.",
            ],
            [
              "Combien de temps et pourquoi ?",
              "Durée active, archive éventuelle, déclencheur et règle de suppression.",
              "« Tant que le compte existe » pour des données qui n’en ont plus besoin.",
            ],
            [
              "Comment la personne est-elle informée ?",
              "Notice accessible, responsable, finalités, droits, destinataires, transferts et durées adaptés au cas.",
              "Une politique générale qui ne correspond pas aux écrans ni aux rôles.",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Données importées : le client ne remplace pas toujours l’information des personnes"
        >
          Lorsqu’une personne renseigne elle-même le formulaire, l’information
          intervient au moment de la collecte. Lorsqu’un client importe les
          coordonnées de salariés, prospects ou partenaires, examinez séparément
          l’article 14 : le responsable doit en principe informer la personne
          dès que possible et au plus tard dans un mois, sous réserve des
          événements plus précoces et des exceptions prévues par le texte. La{" "}
          <a
            href="https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL détaille la collecte indirecte
          </a>
          . Le SaaS doit au minimum savoir qui fournit l’information, avec quel
          support et quelle preuve ; il ne doit pas promettre qu’une politique
          générique couvre automatiquement tous les imports.
        </InfoBox>

        <InfoBox
          variant="amber"
          title="Données sensibles : deux portes, pas une autorisation implicite"
        >
          Les catégories particulières de l’article 9 — santé, opinions
          politiques, convictions, biométrie utilisée pour identifier, par
          exemple — sont interdites par principe sauf exception applicable. Il
          faut examiner à la fois une base de l’article 6 et une exception de
          l’article 9. Les données relatives aux condamnations et infractions
          relèvent d’un régime distinct à l’article 10. N’ouvrez pas ces
          catégories en production tant que le besoin, le rôle et le cadre n’ont
          pas été confirmés.
        </InfoBox>

        <p>
          Consignez ensuite le résultat dans les bons registres. Une entreprise
          qui agit à la fois pour ses propres finalités et pour le compte de
          clients peut avoir un registre de responsable et un registre de
          sous-traitant distincts. La{" "}
          <a
            href="https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL fournit des modèles de registre
          </a>{" "}
          et rappelle que l’exception visant certaines organisations de moins de
          250 salariés est étroite : elle ne couvre notamment pas les
          traitements non occasionnels, risqués ou portant sur les articles 9 et
          10. Pour un SaaS qui traite chaque jour les données de ses clients, «
          nous sommes moins de 250 » n’est donc pas une conclusion suffisante.
        </p>

        <h2 id="prestataires">
          Nommez chaque prestataire, les données reçues et le pays concerné
        </h2>
        <p>
          Hébergement, e-mails, paiement, support, mesure d’audience, journaux
          techniques et intelligence artificielle peuvent chacun recevoir une
          partie des données. Ne copiez pas la liste de tous les fournisseurs
          que l’entreprise a un jour testés. Partez des services activés en
          production et notez :
        </p>
        <ul>
          <li>le service et sa fonction précise ;</li>
          <li>les catégories de données qu’il reçoit ;</li>
          <li>les pays de traitement ou d’accès connus ;</li>
          <li>le contrat, les garanties et les sous-traitants ultérieurs ;</li>
          <li>
            la manière de le désactiver, remplacer ou supprimer les données ;
          </li>
          <li>la personne qui met cette ligne à jour.</li>
        </ul>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL demande de choisir des sous-traitants présentant des garanties
            suffisantes
          </a>
          , d’encadrer la relation et de contrôler les mesures pertinentes. Une
          certification affichée par un prestataire peut faire partie du dossier
          ; elle ne remplace pas la compréhension des données, du service et du
          contrat réellement achetés.
        </p>

        <p>
          « Hébergé en Europe » ne clôt donc pas la question. Écrivez les pays
          précis dans l’Union européenne ou l’Espace économique européen (EEE),
          puis cherchez aussi les accès de support à distance, les
          sous-traitants ultérieurs et les services annexes. Les clauses
          contractuelles types entre responsable et sous-traitant présentées par
          la{" "}
          <a
            href="https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL au titre de l’article 28
          </a>{" "}
          ne sont pas, à elles seules, les clauses dédiées aux transferts hors
          de l’Union. Ne mélangez pas les deux sujets.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "1. Le service reste-t-il réellement dans l’EEE ?",
              text: "Vérifiez stockage, sauvegardes, support, administration, télémétrie et sous-traitants ultérieurs. Un accès depuis un pays tiers peut compter dans l’analyse même si le serveur principal est situé en France.",
            },
            {
              title: "2. Une décision d’adéquation couvre-t-elle le pays ?",
              text: "Identifiez la décision applicable, son périmètre et l’entité concernée. Ne transformez pas le nom d’un mécanisme en conclusion universelle.",
            },
            {
              title: "3. Sinon, quelles garanties de l’article 46 ?",
              text: "Les clauses contractuelles types ou un autre mécanisme doivent correspondre aux parties et au transfert. Le DPA de l’article 28 ne les remplace pas.",
            },
            {
              title: "4. Que montre l’analyse d’impact du transfert ?",
              text: "L’AITD — parfois appelée TIA — examine le transfert concret, le droit et les pratiques du pays, puis les mesures supplémentaires éventuelles. Elle doit être réévaluée lorsque la chaîne change.",
            },
          ].map((item) => (
            <section
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/analyse-dimpact-des-transferts-des-donnees-la-cnil-publie-la-version-finale-de-son-guide-aitd"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL a publié son guide final sur l’AITD
          </a>{" "}
          en juillet 2025 et propose une méthode en six étapes. Les{" "}
          <a
            href="https://www.edpb.europa.eu/documents/recommendation/recommendations-012020-on-measures-that-supplement-transfer-tools-to_en"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations 01/2020 du CEPD
          </a>{" "}
          restent la référence européenne finale sur les mesures
          supplémentaires. L’article 49 traite de dérogations pour des
          situations particulières ; il ne doit pas devenir le fonctionnement
          ordinaire d’un SaaS. Si le pays, l’accès ou le mécanisme reste
          inconnu, marquez « transfert à examiner » au lieu de « conforme ».
        </p>

        <h2 id="fonctions">
          Transformez les droits et les durées en fonctions testables
        </h2>
        <p>
          Une clause « nous aidons le client à répondre aux demandes » reste
          théorique si le support ne sait pas retrouver toutes les occurrences
          d’une personne. Créez un utilisateur fictif, placez ses données dans
          les fonctions réellement utilisées, puis exécutez une demande de bout
          en bout. L’article 12 prévoit en principe une réponse dans un délai
          d’un mois, avec une prolongation possible de deux mois selon la
          complexité et le nombre de demandes, sous réserve d’en informer la
          personne dans le premier mois. Un refus doit lui aussi être motivé et
          accompagné des voies de recours.
        </p>

        <GuideTable
          caption="Du principe RGPD à une preuve dans le produit"
          headers={["Besoin", "Fonction ou procédure", "Test à réaliser"]}
          rows={[
            [
              "Retrouver une personne",
              "Recherche par identifiants connus et rapprochement des sources.",
              "Le support retrouve les données du compte, activités et fichiers dans le périmètre annoncé.",
            ],
            [
              "Corriger",
              "Modification contrôlée et propagation vers la source de vérité.",
              "Une correction n’est pas réécrasée par une synchronisation.",
            ],
            [
              "Exporter ou restituer",
              "Format documenté, relations compréhensibles et responsable nommé. La portabilité de l’article 20 doit être examinée séparément.",
              "Une seconde personne comprend l’échantillon exporté et aucune donnée d’une autre entreprise n’y apparaît.",
            ],
            [
              "Effacer ou rendre irréversiblement anonyme",
              "Règle par type de donnée, exceptions et effet sur le produit.",
              "La donnée disparaît des espaces prévus sans casser les obligations à conserver.",
            ],
            [
              "Limiter ou traiter une opposition",
              "État qui suspend l’usage concerné sans effacer les preuves nécessaires ; motif et arbitrage documentés.",
              "La limitation survit à une synchronisation et l’opposition atteint tous les traitements visés.",
            ],
            [
              "Décision automatisée",
              "Repérage des décisions produisant un effet juridique ou significatif, information et intervention humaine selon le cas.",
              "L’équipe sait expliquer la logique utile et déclencher la procédure prévue.",
            ],
            [
              "Appliquer une durée",
              "Expiration automatique ou revue planifiée avec journal.",
              "Une donnée fictive arrivée à échéance suit réellement le chemin prévu.",
            ],
            [
              "Terminer un contrat",
              "Restitution, suppression, fermeture des accès et preuve.",
              "Un compte client de test est clôturé sans laisser d’accès actif oublié.",
            ],
          ]}
        />

        <p>
          Le droit à la portabilité n’est pas synonyme de « migration B2B
          universelle ». Il concerne, sous conditions, les données personnelles
          fournies par la personne lorsque le traitement automatisé repose sur
          le consentement ou le contrat. Votre export de fin de contrat peut
          être plus large pour des raisons commerciales ou au titre d’autres
          textes, mais ne présentez pas ces trois mécanismes comme un seul
          droit.
        </p>

        <p>
          Une donnée pseudonymisée reste une donnée personnelle lorsqu’elle peut
          être reliée à une personne à l’aide d’informations conservées
          séparément. Elle reste donc soumise au RGPD. Une anonymisation, elle,
          doit rendre l’identification irréversible en pratique. La{" "}
          <a
            href="https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL explique cette différence entre anonymisation et
            pseudonymisation
          </a>
          . N’utilisez pas le mot « anonyme » pour une simple suppression du nom
          ou le remplacement d’un identifiant.
        </p>

        <p>
          Les sauvegardes demandent une explication honnête : une suppression
          instantanée dans chaque copie peut être impossible ou nuire à la
          sécurité de restauration. Documentez le cycle, les protections et le
          délai de disparition prévu au lieu de promettre un résultat que
          l’architecture ne sait pas tenir.
        </p>

        <h3>La sécurité ne se résume pas à « données chiffrées »</h3>
        <p>
          L’article 32 demande des mesures adaptées au risque et cite notamment
          la confidentialité, l’intégrité, la disponibilité, la résilience, la
          restauration et des tests réguliers. Pour un SaaS B2B, traduisez ces
          mots dans des scénarios que l’équipe et le client peuvent comprendre :
        </p>

        <GuideTable
          caption="Preuves de sécurité à relier au risque réel du SaaS"
          headers={["Risque concret", "Preuve produit", "Test dirigeant"]}
          rows={[
            [
              "Un client voit les données d’un autre.",
              "Isolation entre entreprises, contrôles d’autorisation côté serveur et journaux.",
              "Tenter les mêmes accès avec deux comptes de test et conserver le résultat.",
            ],
            [
              "Un ancien salarié ou le support garde trop de droits.",
              "Comptes nominatifs, authentification renforcée selon le risque, accès temporaires et révocation.",
              "Retirer un droit pendant une session ouverte et vérifier l’effet réel.",
            ],
            [
              "Une erreur détruit ou corrompt les données.",
              "Sauvegardes protégées, objectif de perte maximale, temps de reprise et procédure de restauration.",
              "Restaurer un jeu fictif, mesurer le temps et rapprocher les données.",
            ],
            [
              "L’équipe ne comprend pas l’incident.",
              "Journaux utiles, horodatage, responsables et procédure d’escalade.",
              "Rejouer un scénario sans consulter la personne qui a écrit la procédure.",
            ],
          ]}
        />

        <p>
          Le guide{" "}
          <Link href="/guides/securite-saas-b2b">sécurité d’un SaaS B2B</Link>{" "}
          approfondit les preuves techniques. Ici, la règle de gestion reste la
          plus importante : le contrat ne doit pas annoncer une restauration,
          une suppression ou un contrôle d’accès que personne n’a jamais testé.
        </p>

        <h2 id="contrat">
          Faites correspondre le contrat à ce que le SaaS fait
        </h2>
        <p>
          L’
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD
          </a>{" "}
          encadre la relation entre responsable de traitement et sous-traitant
          et prévoit des éléments contractuels applicables. La{" "}
          <a
            href="https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL présente les clauses contractuelles types
          </a>{" "}
          comme un support possible ; leur usage ne dispense pas de remplir les
          annexes et de décrire la réalité.
        </p>

        <p>
          Le contrôle utile ne consiste pas à compter les pages du DPA. Prenez
          chaque engagement et placez en face la fonction, la procédure ou la
          preuve qui permettra de l’exécuter.
        </p>

        <div className="not-prose my-8 space-y-4">
          {article28Checks.map((item, index) => (
            <section
              key={item.contract}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                    {item.contract}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-200">
                      Dans la réalité :
                    </strong>{" "}
                    {item.reality}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          Pour un nouveau sous-traitant ultérieur, l’article 28 prévoit une
          autorisation écrite préalable, spécifique ou générale. En cas
          d’autorisation générale, le sous-traitant informe le responsable des
          ajouts ou remplacements envisagés pour lui permettre de s’y opposer.
          Les mêmes obligations pertinentes doivent descendre dans la chaîne, et
          le sous-traitant initial reste responsable vis-à-vis du client de
          l’exécution des obligations de son propre sous-traitant.
        </p>

        <InfoBox
          variant="amber"
          title="Une contradiction produit–contrat est un défaut à corriger"
        >
          Si le DPA promet une suppression immédiate mais que les sauvegardes
          restaurent la donnée pendant 90 jours, n’ajoutez pas une phrase vague.
          Écrivez le comportement réel, bornez le délai, empêchez autant que
          possible une réutilisation après restauration et faites valider la
          rédaction. Si le produit ne sait pas tenir l’engagement, limitez la
          fonction, corrigez l’architecture ou reportez la signature.
        </InfoBox>

        <h2 id="cookies-ia">
          Cookies et intelligence artificielle : ouvrez deux dossiers séparés
        </h2>
        <p>
          Le DPA n’absorbe pas toutes les règles numériques. Un outil de mesure
          d’audience, un chat, une vidéo intégrée ou un test publicitaire peut
          déposer ou lire des traceurs. En France, l’article 82 de la loi
          Informatique et Libertés distingue notamment les opérations
          strictement nécessaires de celles qui exigent un consentement
          préalable. Le contexte B2B n’accorde pas d’exemption générale.
        </p>

        <GuideTable
          caption="Deux décisions produit à ne pas cacher dans le DPA"
          headers={["Sujet", "Question à faire trancher", "Preuve à conserver"]}
          rows={[
            [
              "Cookies et traceurs",
              "Ce traceur est-il strictement nécessaire ou faut-il un consentement préalable ? Une exemption de mesure d’audience remplit-elle toutes les conditions CNIL ?",
              "Inventaire réel, finalité, durée, consentement/refus aussi simple, retrait et test avant/après choix.",
            ],
            [
              "IA fournie par un tiers",
              "Quelles données partent vers quelle entité, pour quelle finalité, avec quelle conservation, quel transfert et quelle option de désactivation ?",
              "Configuration, contrat, sous-traitants, pays, tests avec données fictives et absence de réutilisation non prévue.",
            ],
            [
              "Réutilisation pour votre propre modèle",
              "La nouvelle finalité est-elle compatible, autorisée par écrit par le responsable initial et couverte par une base, une information et des droits adaptés ?",
              "Décision documentée, qualification de responsable pour le traitement ultérieur et revue spécialisée.",
            ],
          ]}
        />

        <p>
          La{" "}
          <a
            href="https://cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL détaille les règles applicables aux cookies et traceurs
          </a>{" "}
          ainsi que les conditions particulières d’une éventuelle exemption de
          mesure d’audience. Pour l’IA, sa fiche sur la{" "}
          <a
            href="https://www.cnil.fr/fr/sous-traitants-la-reutilisation-de-donnees-confiees-par-un-responsable-de-traitement"
            target="_blank"
            rel="noopener noreferrer"
          >
            réutilisation de données confiées à un sous-traitant
          </a>{" "}
          exige notamment une autorisation écrite du responsable initial après
          analyse de compatibilité. Le règlement européen sur l’intelligence
          artificielle forme un autre cadre : RGPD et règlement IA peuvent
          s’appliquer ensemble. Son calendrier et les textes d’application
          doivent être revérifiés au jour de votre décision.
        </p>

        <h2 id="aipd-dpo">
          Une AIPD ou un DPO ne se décide ni par peur ni par automatisme
        </h2>
        <p>
          Une analyse d’impact relative à la protection des données (AIPD) est
          requise avant un traitement susceptible d’engendrer un risque élevé
          pour les droits et libertés. L’article 35 cite notamment l’évaluation
          systématique et approfondie produisant des effets significatifs,
          certains traitements à grande échelle de données des articles 9 ou 10,
          et la surveillance systématique à grande échelle d’une zone accessible
          au public. Toute fonction d’IA n’impose donc pas automatiquement une
          AIPD ; tout projet étiqueté « B2B » n’en est pas automatiquement
          dispensé.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20 sm:p-6">
            <h3 className="m-0 text-base font-bold text-violet-950 dark:text-violet-200">
              Porte AIPD
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-violet-950/80 dark:text-violet-200/80">
              Décrivez le traitement et sa nécessité, évaluez les risques,
              prévoyez les mesures, recueillez l’avis du DPO s’il existe et
              consultez l’autorité avant le traitement si un risque résiduel
              élevé ne peut pas être atténué. La{" "}
              <a
                href="https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                méthode AIPD de la CNIL
              </a>{" "}
              sert de point de départ, pas de conclusion préremplie.
            </p>
          </section>
          <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20 sm:p-6">
            <h3 className="m-0 text-base font-bold text-blue-950 dark:text-blue-200">
              Porte DPO
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-blue-950/80 dark:text-blue-200/80">
              Vérifiez les trois déclencheurs de l’article 37 : organisme public
              ; activités de base nécessitant un suivi régulier et systématique
              à grande échelle ; activités de base portant à grande échelle sur
              les articles 9 ou 10. Vérifiez aussi le droit de l’Union, le droit
              national et les règles sectorielles qui pourraient imposer une
              désignation dans un autre cas. « Nous sommes une PME » ou « nous
              vendons uniquement à des entreprises » ne permet pas de conclure.
            </p>
          </section>
        </div>

        <p>
          Si la désignation est obligatoire ou volontaire, le titre ne suffit
          pas. Le DPO peut être interne, externe ou mutualisé, à condition de
          disposer des connaissances, du temps, des ressources et de l’accès aux
          traitements nécessaires. Ses coordonnées doivent être publiées et
          communiquées à l’autorité de contrôle. Il conseille, contrôle,
          accompagne l’AIPD, coopère avec l’autorité et sert de point de contact
          ; la direction reste responsable de ses décisions. L’article 38 exige
          qu’il soit associé assez tôt, qu’il agisse sans instruction sur ses
          missions, qu’il rende compte au plus haut niveau et qu’il ne soit ni
          sanctionné ni placé en conflit d’intérêts.
        </p>

        <p>
          Un cabinet qui donne un avis ponctuel n’est donc pas automatiquement
          votre DPO. À l’inverse, une désignation volontaire ne doit pas être
          décorative. Une personne qui décide elle-même des finalités et moyens
          — par exemple selon les faits un membre de la direction, le
          responsable marketing, RH, finance ou informatique — peut être en
          conflit d’intérêts si elle devient aussi DPO. La{" "}
          <a
            href="https://www.cnil.fr/fr/le-guide-du-delegue-la-protection-des-donnees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL consacre un guide pratique à la fonction
          </a>
          . Dans le dossier de préparation, marquez séparément : « déclencheur à
          examiner », « DPO obligatoire confirmé », « DPO volontaire » ou «
          conseil ponctuel », puis consignez l’auteur de la décision, les faits,
          la date, la publication des coordonnées et l’éventuelle désignation
          auprès de la CNIL.
        </p>

        <h2 id="sortie">
          Préparez la sortie avant que le premier client en ait besoin
        </h2>
        <p>
          Trois règles différentes sont souvent mélangées. L’article 28,
          paragraphe 3, point g, prévoit qu’au choix du responsable le
          sous-traitant supprime ou renvoie les données après la fin des
          services, et détruit les copies existantes sauf obligation légale de
          conservation. L’article 20 organise, sous conditions, le droit
          individuel à la portabilité. Enfin, le{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement européen sur les données, dit Data Act
          </a>
          , est applicable depuis le 12 septembre 2025 et prévoit, pour les
          services de traitement de données entrant dans son champ — y compris
          des modèles SaaS selon les cas — des obligations de changement de
          fournisseur aux articles 23 à 30.
        </p>

        <p>
          L’article 31 prévoit un régime précis, et non une exemption générale.
          Pour un service dont la majorité des caractéristiques principales est
          conçue sur mesure pour un client — ou dont tous les composants le sont
          — et qui n’est pas proposé à grande échelle dans le catalogue, seules
          les obligations citées par l’article 31, paragraphe 1, sont écartées :
          article 23, point d, article 29 et article 30, paragraphes 1 et 3. Les
          autres obligations du chapitre ne disparaissent pas par cette phrase.
          Le paragraphe 2 écarte, lui, le chapitre pour une version hors
          production fournie pendant une durée limitée à des fins d’essai et
          d’évaluation. Le paragraphe 3 impose d’informer le prospect des
          obligations qui ne s’appliquent pas. Voilà pourquoi « notre produit
          est un SaaS » ouvre l’analyse, mais ne la termine pas.
        </p>

        <p>
          Votre plan de sortie doit donc dire ce que le client récupère, dans
          quel format, avec quelles métadonnées, pendant quelle période, qui
          l’assiste, comment la continuité est organisée et quand les données et
          copies sont effacées. Le contrat doit également décrire les obstacles,
          délais et frais autorisés au moment considéré. Au 24 juillet 2026,
          l’article 29 permet encore, jusqu’au 12 janvier 2027, des frais de
          changement réduits qui ne dépassent pas les coûts directement liés au
          processus ; à compter du 12 janvier 2027, le fournisseur ne pourra
          plus imposer de frais de changement pour ce processus. Cela n’efface
          pas les frais de service standard ni les pénalités proportionnées de
          résiliation anticipée, et l’article 31 peut écarter l’article 29 pour
          les services sur mesure répondant à ses conditions. Faites donc
          revérifier le contrat et le champ le jour de la décision. Ne promettez
          pas une migration « en un clic » si les pièces jointes, les relations
          ou les journaux deviennent illisibles hors du produit.
        </p>

        <InfoBox variant="emerald" title="Le test de sortie le plus honnête">
          Créez deux entreprises fictives. Exportez la première, faites lire les
          fichiers par une personne qui ne connaît pas la base, vérifiez
          qu’aucune donnée de la seconde n’apparaît, fermez les accès, puis
          restaurez une sauvegarde de test. Si le compte supprimé redevient
          actif ou si l’export est incompréhensible, la sortie n’est pas prête.
        </InfoBox>

        <h2 id="budget">
          Combien prévoir ? Trois scénarios fictifs, pas un tarif de conformité
        </h2>
        <p>
          Il n’existe pas de prix universel du « RGPD d’un SaaS ». Le coût
          dépend du produit existant, des données, des pays, des preuves déjà
          disponibles et du niveau d’assurance demandé par les clients. Les
          montants suivants sont des hypothèses entièrement fictives destinées à
          montrer comment construire un budget. Ce ne sont ni des tarifs de
          marché, ni des devis Hagnéré Code, ni la valeur d’une amende évitée.
          Les trois situations n’ont pas le même périmètre et ne doivent pas
          être comparées comme des offres concurrentes. Les postes ont été
          choisis uniquement pour rendre l’addition vérifiable : ils n’affirment
          ni le nombre de jours nécessaire, ni le prix d’un DPO, d’un juriste,
          d’un développeur ou d’un test externe. Licences, temps interne, taxes,
          inflation, dette technique, aléas et actions encore inconnues peuvent
          manquer.
        </p>

        <div className="not-prose my-8 grid gap-5">
          {budgetScenarios.map((scenario) => (
            <section
              key={scenario.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <h3 className="m-0 text-lg font-bold text-zinc-950 dark:text-white">
                {scenario.label}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {scenario.context}
              </p>
              <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {scenario.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mb-0 mt-4 rounded-xl bg-zinc-100 px-4 py-3 text-sm font-bold text-zinc-950 dark:bg-zinc-900 dark:text-white">
                {scenario.total}
              </p>
            </section>
          ))}
        </div>

        <p>
          Gardez quatre colonnes séparées : dépense externe, temps interne
          valorisé, coût récurrent et montant inconnu. Une action qui corrige
          trois écarts ne doit être comptée qu’une fois. Un coût inconnu ne vaut
          jamais zéro : affichez seulement le sous-total renseigné et la
          décision nécessaire pour fermer l’inconnue.
        </p>

        <h2 id="kit-preparation">
          Remplissez un dossier de préparation, sans donner votre adresse e-mail
        </h2>
        <p>
          Le kit accompagne la discussion entre direction, produit, technique,
          DPO et juriste. Il sépare les registres de responsable et de
          sous-traitant, les rôles supposés, les prestataires et pays, les
          exigences de l’article 28, les tests de droits et de sortie,
          l’exercice d’incident et le triage AIPD/DPO. L’exemple Orbia est
          fictif. Aucun fichier ne choisit une base, ne rédige un DPA prêt à
          signer et ne produit de score de conformité. Le questionnaire
          interactif télécharge un seul relevé Markdown (`.md`), c’est-à-dire un
          document texte ouvrable dans un éditeur ou copiable dans Word, Google
          Docs ou Notion. Le ZIP séparé contient neuf tableaux CSV et trois
          documents Markdown modifiables.
        </p>

        <RgpdSaasPreparationKit />

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <a
            href="/ressources/kit-preparation-rgpd-saas-b2b.zip"
            download
            className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950 no-underline transition hover:border-emerald-500 dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-200"
          >
            <span className="block text-xs font-bold uppercase tracking-widest">
              Kit complet · ZIP
            </span>
            <strong className="mt-2 block text-lg">
              Télécharger les matrices modifiables
            </strong>
            <span className="mt-2 block text-sm leading-relaxed opacity-80">
              9 tableaux CSV et 3 documents Markdown : mode d’emploi, exemple
              fictif et relevé de décision. Aucun formulaire commercial.
            </span>
          </a>
          <a
            href="/ressources/kit-preparation-rgpd-saas-b2b/00-mode-emploi.md"
            className="rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-950 no-underline transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          >
            <span className="block text-xs font-bold uppercase tracking-widest text-zinc-500">
              Avant de commencer
            </span>
            <strong className="mt-2 block text-lg">
              Lire le mode d’emploi
            </strong>
            <span className="mt-2 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ordre de travail, limites, identifiants et informations à ne
              jamais saisir dans un kit de préparation.
            </span>
          </a>
        </div>

        <h2 id="incident">
          Simulez un incident et distinguez correctement les rôles
        </h2>
        <p>
          Imaginez qu’un utilisateur accède au document d’une autre entreprise.
          Sans utiliser de donnée réelle, faites jouer la chronologie suivante.
        </p>

        <ol>
          <li>
            déclenchez la procédure, notez l’heure de découverte et l’heure à
            laquelle l’organisation dispose d’assez de certitude pour considérer
            qu’une violation de données personnelles s’est produite ;
          </li>
          <li>
            contenez l’accès sans attendre, tout en préservant les journaux,
            captures expurgées, versions et décisions nécessaires à l’enquête ;
          </li>
          <li>
            identifiez les systèmes, catégories de données, catégories et nombre
            approximatif de personnes et d’enregistrements concernés ;
          </li>
          <li>
            distinguez confidentialité, intégrité et disponibilité, puis
            documentez les conséquences probables et les mesures déjà prises ;
          </li>
          <li>
            confirmez le rôle pour le traitement touché : le sous-traitant
            alerte le responsable dans les meilleurs délais et transmet les
            faits disponibles sans attendre une enquête parfaite ;
          </li>
          <li>
            le responsable évalue le risque, décide de la notification à
            l’autorité et, si le risque est élevé, de l’information des
            personnes avec les exceptions de l’article 34 ;
          </li>
          <li>
            conservez le raisonnement, les heures, les compléments échelonnés,
            les motifs d’un retard ou d’une absence de notification, puis suivez
            les actions correctives jusqu’à leur preuve de clôture.
          </li>
        </ol>

        <p>
          La préservation des preuves ne justifie jamais de laisser une fuite
          ouverte. Si une action de confinement peut modifier un journal, notez
          d’abord ce que vous pouvez sans retarder la protection des personnes,
          puis consignez précisément ce qui a changé.
        </p>

        <InfoBox
          variant="blue"
          title="Le délai de 72 heures n’est pas un slogan"
        >
          L’
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 33 du RGPD
          </a>{" "}
          prévoit que le responsable notifie l’autorité compétente, sauf si la
          violation est peu susceptible d’engendrer un risque pour les droits et
          libertés. Il le fait, si possible, dans les 72 heures après en avoir
          pris connaissance et joint les motifs du retard lorsque ce délai est
          dépassé. Lorsque toutes les informations ne sont pas disponibles,
          elles peuvent être communiquées de manière échelonnée. Le responsable
          documente toutes les violations, y compris les faits, les effets et
          les mesures prises. Le sous-traitant informe le responsable dans les
          meilleurs délais. L’article 34 prévoit d’informer les personnes
          concernées lorsque le risque est élevé, avec des exceptions notamment
          si des mesures rendent les données incompréhensibles, si le risque
          élevé n’est plus susceptible de se matérialiser ou si l’effort serait
          disproportionné et une communication publique est utilisée. Votre
          procédure doit refléter votre rôle et le contrat ; n’inventez ni
          notification automatique par le SaaS ni délai universel d’une heure.
        </InfoBox>

        <p>
          Un exercice utile ne se termine pas à l’envoi d’un e-mail. Il vérifie
          que l’adresse est surveillée, que les journaux nécessaires existent,
          que les personnes d’astreinte comprennent le produit et que le client
          reçoit assez de faits pour décider. Un sous-traitant peut être chargé,
          contractuellement et avec l’autorisation du responsable, de préparer
          ou transmettre une notification en son nom ; cela ne lui transfère ni
          la décision ni la responsabilité du responsable de traitement.
        </p>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          « Orbia » et toutes les données ci-dessous sont inventées. Cet exemple
          ne décrit ni un client, ni une qualification juridique réelle, ni une
          validation de conformité par Hagnéré Code.
        </InfoBox>

        <p>
          Orbia vend un SaaS fictif de suivi de formations. Une entreprise
          cliente y charge les noms et adresses professionnelles de ses salariés
          pour organiser ses sessions. Pour ce traitement, les faits peuvent
          orienter vers un rôle de sous-traitant d’Orbia, à confirmer avec le
          contrat et les décisions réellement prises. Orbia conserve aussi les
          coordonnées de ses interlocuteurs de facturation pour sa propre
          gestion : cette finalité peut relever d’une autre casquette.
        </p>
        <p>
          Le questionnaire interactif suit l’import et l’inscription à une
          session. Le fichier d’exemple du ZIP relie ce même parcours à
          l’hébergement, à l’envoi d’e-mails, à la sortie, puis sépare la
          facturation propre d’Orbia et une fonction IA maintenue désactivée.
          L’équipe suit une adresse de test, trouve une copie inutile dans un
          outil d’assistance, retire ce flux, ajoute une règle de durée et teste
          l’export d’un compte. Elle demande ensuite à un spécialiste de
          confirmer les rôles, le cadre contractuel et les points liés aux
          salariés. L’exemple ne permet pas d’affirmer qu’Orbia est conforme ;
          il montre comment voir concrètement ce qui manque.
        </p>

        <h2 id="decision">
          À la fin du dossier, choisissez franchement : avancer, limiter ou
          arrêter
        </h2>
        <p>
          Le but n’est pas d’obtenir cent cases vertes. Il est de savoir ce qui
          peut raisonnablement entrer en production, ce qui doit rester en
          données fictives et quelle décision dépasse les compétences du projet.
          Utilisez quatre portes simples :
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Avancer avec le périmètre prévu",
              text: "Les finalités et rôles supposés sont documentés, les inconnues critiques ont un responsable, les fonctions et preuves correspondent au contrat, et les validations spécialisées requises sont obtenues.",
              color:
                "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20",
            },
            {
              title: "Limiter la fonction ou le pilote",
              text: "Les données sensibles, l’IA, un transfert ou une surveillance ne sont pas encore cadrés. Restez sur des données fictives ou désactivez la branche concernée sans bloquer tout le produit.",
              color:
                "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20",
            },
            {
              title: "Faire revoir avant de signer",
              text: "Le rôle, la base, l’article 9, les responsables conjoints, l’AIPD, le DPO, les transferts ou la rédaction contractuelle exigent un DPO, un juriste ou un autre spécialiste compétent.",
              color:
                "border-blue-300 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20",
            },
            {
              title: "Arrêter ou reporter",
              text: "Le produit ne sait pas isoler les clients, exécuter les droits, restaurer, sortir les données ou tenir une promesse contractuelle essentielle. Une signature commerciale ne répare pas ce défaut.",
              color:
                "border-red-300 bg-red-50 dark:border-red-900 dark:bg-red-950/20",
            },
          ].map((item) => (
            <section
              key={item.title}
              className={`rounded-2xl border p-5 ${item.color}`}
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        <p>
          La solution la plus simple peut être de ne pas collecter une donnée,
          de désactiver temporairement une fonction, de limiter le pilote à des
          données fictives ou de choisir un service standard déjà validé par le
          client. Développer davantage n’est pas une réponse automatique au
          RGPD.
        </p>

        <GuideInlineCTA
          title="Transformer votre dossier RGPD en fonctions réellement testables"
          description="Hagnéré Code peut cartographier les parcours, corriger les accès, exports, durées, journaux, sauvegardes et sorties, puis produire les preuves techniques correspondantes. Nous ne vendons ni avis juridique ni certification : la qualification des rôles, bases, transferts et clauses reste à faire confirmer par votre DPO ou votre juriste."
          tags={[
            "Cartographie produit",
            "Fonctions testables",
            "Frontière juridique explicite",
          ]}
          ctaLabel="Décrire le dossier de mon SaaS"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites juridiques</h2>
        <p>
          Revue factuelle effectuée le 24 juillet 2026. Le propriétaire
          éditorial doit rouvrir les sources sensibles à chaque changement de
          finalité, de fournisseur, de pays, de fonction IA, de cadre
          contractuel ou de texte applicable — et au minimum lors de la revue
          annuelle du guide.
        </p>
        <ul>
          <li>
            texte du{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
              target="_blank"
              rel="noopener noreferrer"
            >
              règlement général sur la protection des données
            </a>
            , notamment articles 6, 9, 10, 12 à 14, 15 à 22, 25, 26, 28, 30, 32
            à 39 et chapitre V ;
          </li>
          <li>
            {" "}
            <a
              href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role"
              target="_blank"
              rel="noopener noreferrer"
            >
              fiche CNIL sur les rôles
            </a>
            ,{" "}
            <a
              href="https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              lignes directrices finales 07/2020 du CEPD
            </a>{" "}
            et clauses types de l’article 28 ;
          </li>
          <li>
            {" "}
            <a
              href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide RGPD du développeur
            </a>
            , information en cas de collecte directe ou indirecte, guide du DPO,
            registres, AIPD, sécurité, violations, minimisation et{" "}
            <a
              href="https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles"
              target="_blank"
              rel="noopener noreferrer"
            >
              différence entre anonymisation et pseudonymisation
            </a>{" "}
            ;
          </li>
          <li>
            pages CNIL sur la{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              sous-traitance
            </a>{" "}
            et la réutilisation de données confiées, règles cookies/traceurs et
            mesure d’audience ;
          </li>
          <li>
            {" "}
            <a
              href="https://www.cnil.fr/fr/analyse-dimpact-des-transferts-des-donnees-la-cnil-publie-la-version-finale-de-son-guide-aitd"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide final AITD de la CNIL
            </a>
            , recommandations finales 01/2020 du CEPD et chapitre V du RGPD ;
          </li>
          <li>
            {" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data Act
            </a>
            , notamment la définition des services de traitement de données, les
            articles 23 à 31, son application depuis le 12 septembre 2025 et la
            suppression des frais de changement visés à l’article 29 à compter
            du 12 janvier 2027.
          </li>
        </ul>
        <p>
          Les textes, recommandations et services peuvent évoluer. Ce contenu
          est une information générale destinée à préparer un travail de produit
          ; il ne qualifie pas votre rôle, ne choisit pas votre base juridique,
          ne valide pas un transfert et ne certifie pas la conformité de votre
          SaaS. Faites intervenir un professionnel compétent lorsque les faits,
          le secteur ou le risque l’exigent.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
