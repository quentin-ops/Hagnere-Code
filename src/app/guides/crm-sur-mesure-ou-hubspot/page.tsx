import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { CrmTcoCalculator } from "@/components/guides/CrmTcoCalculator";
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

const guide = getGuide("crm-sur-mesure-ou-hubspot");

export const metadata = buildGuideMetadata(
  guide,
  "CRM sur mesure ou HubSpot : coûts, limites et choix en 2026",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "CRM sur mesure ou HubSpot",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "HubSpot gratuit suffit-il à une petite entreprise ?",
    answer:
      "Oui, parfois. Il peut suffire si quelques personnes suivent un pipeline simple et n’ont pas besoin des fonctions payantes qui font réellement avancer leurs ventes. Testez vos actions indispensables et vérifiez l’offre en vigueur : une version gratuite utile aujourd’hui ne préjuge ni de vos besoins futurs ni des conditions futures.",
  },
  {
    question: "Peut-on récupérer ses données et, en sur-mesure, son code ?",
    answer:
      "Pas nécessairement sous une forme immédiatement réutilisable ailleurs. Pour HubSpot, testez l’export des contacts, entreprises, affaires, activités, associations et pièces utiles : un fichier obtenu n’est pas encore une migration restaurable. Pour un CRM sur mesure, faites préciser au contrat les droits sur le code, les composants tiers, les dépôts, l’hébergement et la restitution des données.",
  },
  {
    question: "Un outil sur mesure peut-il rester connecté à HubSpot ?",
    answer:
      "Oui. Une solution hybride peut garder HubSpot pour les contacts et les affaires, puis confier à un module spécifique le devis technique, une validation ou une règle métier particulière. Il faut tester l’API, les droits, les limites et la reprise des erreurs sur l’abonnement réellement utilisé.",
  },
  {
    question:
      "À partir de combien d’utilisateurs faut-il passer au CRM sur mesure ?",
    answer:
      "Il n’existe pas de seuil universel. Une grande équipe au processus standard peut être bien servie par HubSpot ; une petite équipe avec une règle métier stable et décisive peut rencontrer une vraie limite. Décidez avec les contournements mesurés, le coût sur trois ans, les intégrations et la stabilité du processus, pas avec le seul nombre de sièges.",
  },
  {
    question: "Faut-il tester un autre CRM standard avant le sur-mesure ?",
    answer:
      "Oui, si votre difficulté vient du modèle ou de l’ergonomie de HubSpot plutôt que d’une règle propre à votre entreprise. Pipedrive peut représenter une option centrée sur la vente ; Odoo, une suite plus large ; un CRM vertical, votre secteur. Présélectionnez au plus deux produits, rejouez les mêmes actions et comparez migration, coût et sortie. Développer sans ce test peut financer une fonction déjà disponible ailleurs.",
  },
  {
    question: "Un CRM sur mesure est-il forcément plus sécurisé ?",
    answer:
      "Non. Il donne davantage de choix, mais il faut encore concevoir les droits, protéger les accès, mettre à jour le logiciel, sauvegarder, surveiller et corriger. Un produit standard bien configuré peut être préférable à un développement spécifique mal entretenu. Comparez les mesures réelles, jamais les étiquettes.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "6 options réelles",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "3 scénarios chiffrés",
    description: "",
    color: "violet",
  },
  {
    number: "03",
    title: "Test en 12 actions",
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
    href: "/guides/combien-coute-un-crm",
    label: "Calculer le coût complet d’un CRM",
  },
  {
    href: "/guides/connecter-erp-crm-logiciel-metier",
    label: "Relier CRM, ERP et logiciel métier",
  },
  {
    href: "/guides/erp-ou-logiciel-sur-mesure",
    label: "Comparer ERP et logiciel spécifique",
  },
  {
    href: "/guides/transformer-excel-en-application",
    label: "Décider si Excel doit être remplacé",
  },
];

const tocItems = [
  { id: "six-options", label: "Choisir parmi six options" },
  { id: "hubspot-2026", label: "Lire l’offre HubSpot en 2026" },
  { id: "alternatives", label: "Présélectionner deux autres CRM" },
  { id: "outils-crm", label: "Télécharger la fiche et calculer le coût" },
  { id: "douze-actions", label: "Rejouer douze actions de vente" },
  { id: "cas-metier", label: "Comparer quatre situations métier" },
  { id: "droits-donnees", label: "Vérifier les droits et la donnée" },
  { id: "integrations", label: "Tester les connexions utiles" },
  { id: "cout-contournements", label: "Chiffrer les contournements" },
  { id: "cout", label: "Comparer le coût sur 36 mois" },
  { id: "sortie", label: "Préparer migration et sortie" },
  { id: "pilotage", label: "Mesurer l’adoption et le résultat" },
  { id: "verdict", label: "Lire notre recommandation" },
  { id: "action", label: "Agir sans lancer un projet trop tôt" },
  { id: "sources", label: "Sources et limites" },
];

const salesActions = [
  {
    action: "Créer un prospect",
    proof:
      "Un commercial saisit les informations réellement connues, sans champ artificiel.",
    warning:
      "Il note une double saisie ou un champ obligatoire qu’il invente pour continuer.",
  },
  {
    action: "Qualifier la demande",
    proof:
      "Les critères utilisés en réunion commerciale se retrouvent dans l’outil.",
    warning:
      "La qualification reste dans un commentaire, un e-mail ou une feuille parallèle.",
  },
  {
    action: "Planifier la relance",
    proof:
      "Le vendeur et son responsable voient la prochaine action et son échéance.",
    warning:
      "La relance dépend de la mémoire d’une personne ou d’un agenda non partagé.",
  },
  {
    action: "Préparer un devis",
    proof:
      "Les informations nécessaires arrivent au bon outil sans nouvelle ressaisie.",
    warning:
      "Le commercial recopie les mêmes données dans Word, Excel ou la facturation.",
  },
  {
    action: "Faire valider une exception",
    proof:
      "La personne autorisée reçoit le contexte, décide et laisse une trace.",
    warning: "La décision passe par un message privé impossible à retrouver.",
  },
  {
    action: "Transmettre après la vente",
    proof:
      "L’équipe qui réalise ou facture reçoit ce qui a réellement été vendu.",
    warning:
      "Le client doit répéter son besoin parce que le CRM ne transmet qu’un statut.",
  },
  {
    action: "Retrouver un ancien échange",
    proof:
      "Depuis la fiche concernée, un commercial retrouve la décision, sa date, son auteur et le prochain engagement.",
    warning:
      "L’information n’existe que dans une boîte e-mail personnelle, un document isolé ou une note impossible à relier à l’affaire.",
  },
  {
    action: "Réattribuer un dossier",
    proof:
      "Le nouveau responsable récupère le contexte, les tâches, les échéances et les droits nécessaires sans perdre l’historique.",
    warning:
      "Le propriétaire change, mais des relances, validations ou notifications restent attribuées à l’ancienne personne.",
  },
  {
    action: "Corriger un doublon",
    proof:
      "Une personne autorisée rapproche deux fiches en conservant l’historique, les associations et les données utiles aux outils connectés.",
    warning:
      "La correction efface une partie de l’histoire ou l’intégration recrée le doublon quelques minutes plus tard.",
  },
  {
    action: "Contrôler un objectif commercial",
    proof:
      "Le responsable retrouve les affaires qui composent le chiffre et explique la période, les étapes et les exclusions retenues.",
    warning:
      "Le tableau de bord affiche un résultat que personne ne parvient à rapprocher du pipeline ou d’un export.",
  },
  {
    action: "Exporter une affaire complète",
    proof:
      "Une autre personne relie le contact, l’entreprise, l’affaire, son propriétaire, son étape et les éléments d’historique conservés.",
    warning:
      "Un fichier est produit, mais il casse les associations ou omet les activités indispensables à la compréhension.",
  },
  {
    action: "Fermer l’accès d’un collaborateur",
    proof:
      "L’administrateur désactive le compte, transfère les dossiers et les tâches, révoque les accès actifs et conserve une trace.",
    warning:
      "Le compte semble fermé, mais des dossiers deviennent orphelins ou une connexion technique reste utilisable.",
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
          { label: "CRM sur mesure ou HubSpot" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vos commerciaux utilisent HubSpot, mais gardent Excel ouvert ? Comparez six options, les fonctions réellement disponibles, les contournements et le budget sur trois ou cinq ans avant de remplacer votre CRM."
        heroAction={{
          href: "#outils-crm",
          label: "Télécharger la fiche de test",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes sur HubSpot et le CRM sur mesure"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous payez HubSpot, mais vos commerciaux ouvrent encore Excel pour
          préparer un devis, noter une exception ou transmettre le dossier à
          l’équipe qui réalisera la mission. Faut-il mieux régler HubSpot,
          choisir un autre CRM du marché ou développer votre propre outil ?
          Notre recommandation est simple :{" "}
          <strong>
            gardez une solution standard tant que votre vente reste standard
          </strong>
          . Le sur-mesure devient raisonnable lorsque plusieurs règles propres à
          votre entreprise sont stables, créent des contournements mesurables et
          justifient le coût de création puis d’entretien. Entre ces deux choix,
          une solution hybride — HubSpot pour les contacts et les affaires, un
          module spécifique pour le devis ou la production — est souvent la
          meilleure réponse. Ce guide compare six options, les fonctions HubSpot
          affichées en juillet 2026, plusieurs coûts de contournement, une
          migration et les mesures à suivre après la décision.
        </p>

        <InfoBox variant="emerald" title="Notre position professionnelle">
          Ne reconstruisez pas HubSpot pour supprimer quelques champs pénibles
          ou corriger un pipeline mal réglé. Commencez par reconfigurer, puis
          testez un autre CRM standard. Ne financez du code que pour la partie
          stable de votre métier qui résiste à ces deux essais — et seulement si
          son coût actuel est mesuré.
        </InfoBox>

        <p>
          Hagnéré Code conçoit des outils internes sur mesure : nous avons donc
          un intérêt commercial dans cette comparaison. C’est précisément
          pourquoi le guide inclut les cas où il vaut mieux garder HubSpot,
          changer de CRM standard ou reporter le projet.
        </p>

        <GuideToc items={tocItems} />

        <h2 id="six-options">
          Vous avez six options — le sur-mesure n’est que l’une d’elles
        </h2>
        <p>
          Le faux duel « HubSpot ou développement » fait disparaître des
          solutions moins risquées. Décidez dans cet ordre : corriger
          l’existant, vérifier l’offre et les sièges réellement nécessaires,
          essayer un autre produit, isoler une fonction spécifique, puis
          seulement étudier un remplacement complet.
        </p>

        <GuideTable
          caption="Six décisions possibles lorsque HubSpot ne suffit plus ou paraît trop coûteux"
          headers={["Option", "Elle convient si…", "Ce qui doit être prouvé"]}
          rows={[
            [
              "Garder HubSpot",
              "Les actions importantes fonctionnent et les détours restent rares.",
              "Deux commerciaux réussissent le même test ; les données utiles sont fiables et exportables.",
            ],
            [
              "Reconfigurer HubSpot",
              "Le processus est standard, mais les champs, droits, pipelines ou automatismes sont mal réglés.",
              "Un essai limité réduit réellement les ressaisies sans ajouter une administration disproportionnée.",
            ],
            [
              "Adapter l’édition et les sièges",
              "Une fonction utile existe, mais pas dans l’offre ou pour les utilisateurs actuels.",
              "Le devis daté inclut tous les sièges et Hubs nécessaires ; le coût sur 36 mois reste acceptable.",
            ],
            [
              "Choisir un autre CRM standard ou vertical",
              "Le modèle de HubSpot convient mal, mais le besoin existe déjà dans votre secteur.",
              "Le même jeu d’essai fonctionne mieux et la migration reste moins risquée qu’un développement.",
            ],
            [
              "Garder HubSpot et ajouter un module",
              "Contacts et affaires sont bien couverts, mais une étape métier stable reste particulière.",
              "La source de chaque donnée, les erreurs, la désactivation et la maintenance sont testées.",
            ],
            [
              "Construire un CRM métier",
              "Plusieurs règles stables et décisives résistent aux options précédentes.",
              "Le gain mesuré finance création, exploitation, sécurité, évolution, migration et sortie.",
            ],
          ]}
        />

        <p>
          Il existe aussi une décision préalable : <strong>reporter</strong>. Si
          les commerciaux ne s’accordent pas sur les étapes de vente, si
          personne ne sait quel chiffre fait foi ou si le processus change
          chaque mois, un nouveau logiciel figera surtout le désaccord.
        </p>

        <h2 id="hubspot-2026">
          Ce que les prix HubSpot affichés en juillet 2026 veulent vraiment dire
        </h2>
        <p>
          La page française du{" "}
          <a
            href="https://www.hubspot.fr/products/crm/ai-crm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smart CRM de HubSpot
          </a>{" "}
          affichait le 24 juillet 2026 quatre prix d’appel par licence
          utilisateur. Ils montrent une progression de l’offre ; ils ne
          constituent pas le devis complet de votre dispositif commercial. Sales
          Hub, Marketing Hub, Service Hub, options, minimums, engagement,
          promotion et taxes peuvent modifier la facture.
        </p>

        <GuideTable
          caption="Photographie de la page officielle Smart CRM consultée le 24 juillet 2026"
          headers={[
            "Édition",
            "Prix d’appel affiché",
            "Exemples mis en avant par HubSpot",
          ]}
          rows={[
            [
              "Outils gratuits",
              "0 € par mois",
              "Contacts, entreprises, transactions, pipeline et synchronisation de données.",
            ],
            [
              "Starter",
              "À partir de 15 € par mois et par licence, prix promotionnel affiché",
              "Suppression du marquage HubSpot, autorisations et enrichissement automatique.",
            ],
            [
              "Pro",
              "À partir de 49 € par mois et par licence",
              "Apparence du CRM, fusion des doublons et organisation des utilisateurs en équipes.",
            ],
            [
              "Entreprise",
              "À partir de 75 € par mois et par licence",
              "Objets personnalisés, authentification unique et analyses supplémentaires.",
            ],
          ]}
        />

        <p>
          Un <strong>objet personnalisé</strong> sert par exemple à représenter
          un chantier, un équipement ou une mission, au lieu de tout forcer dans
          « contact », « entreprise » ou « affaire ». La{" "}
          <a
            href="https://knowledge.hubspot.com/object-settings/create-custom-objects"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation HubSpot mise à jour le 12 juin 2026
          </a>{" "}
          réserve actuellement cette possibilité à des éditions Enterprise
          éligibles. Cela ne signifie pas qu’il faut acheter Enterprise : un
          autre CRM, un module séparé ou une organisation plus simple peut
          rester préférable.
        </p>

        <InfoBox variant="blue" title="Un siège n’est pas seulement un accès">
          HubSpot distingue notamment les sièges en lecture seule, Core, Sales,
          Service et Revenue. Selon sa documentation, le siège en lecture seule
          peut consulter des données sur les abonnements payants concernés, mais
          ne peut ni modifier les fiches ni journaliser des e-mails. Les anciens
          comptes peuvent aussi relever d’un modèle antérieur au 5 mars 2024,
          comme l’explique le{" "}
          <a
            href="https://knowledge.hubspot.com/account-management/manage-seats"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide officiel des sièges HubSpot
          </a>
          . Listez donc qui doit seulement lire, qui doit modifier et qui
          utilise des fonctions commerciales avancées avant de multiplier un
          prix d’appel par le nombre de salariés.
        </InfoBox>

        <h2 id="alternatives">
          Avant de développer, présélectionnez au moins un autre CRM
        </h2>
        <p>
          HubSpot peut être mal adapté à votre entreprise sans que le sur-mesure
          soit la bonne réponse. Deux alternatives illustrent des directions
          très différentes : <strong>Pipedrive</strong> reste centré sur le
          travail commercial ; <strong>Odoo</strong> rapproche le CRM des devis,
          du stock, des projets et de la comptabilité. Il existe aussi des CRM
          propres à certains secteurs. Le bon concurrent n’est donc pas le plus
          connu : c’est celui qui couvre déjà votre difficulté principale.
        </p>

        <GuideTable
          caption="Photographie documentaire de deux alternatives, consultée le 24 juillet 2026"
          headers={[
            "Solution à présélectionner",
            "Ce que l’offre officielle permet d’envisager",
            "Ce qu’il faut réellement rejouer",
          ]}
          rows={[
            [
              "Pipedrive",
              "La page française affichait Lite à 14 $US, Growth à 39 $US, Premium à 59 $US et Ultimate à 79 $US par poste et par mois avec facturation annuelle. Le pipeline, les relances et les e-mails sont au centre ; le bac à sable est annoncé dans Ultimate.",
              "Qualifier une affaire, planifier la prochaine action, préparer un devis, faire valider une exception, transmettre après la vente et exporter une affaire complète.",
            ],
            [
              "Odoo CRM",
              "La page française affichait une application gratuite, Standard à 24,90 $US et Personnalisé à 49 $US par utilisateur et par mois avec facturation annuelle. Les applications de vente, facturation, stock et projet sont réunies ; les API externes sont annoncées dans Personnalisé.",
              "Créer l’affaire, produire le document commercial, vérifier les droits, transmettre au stock ou au projet, corriger une donnée et récupérer les objets liés sans reconstruire toute la suite.",
            ],
            [
              "CRM vertical de votre secteur",
              "Il peut déjà représenter un candidat, un chantier, un bien, un contrat ou une intervention sans détourner les objets d’un CRM généraliste.",
              "Exécuter les mêmes six actions avec vos termes métier, puis vérifier l’export, les connexions, le coût de sortie et la pérennité de l’éditeur.",
            ],
          ]}
        />

        <p>
          Ces prix sont des <strong>photographies en dollars américains</strong>
          , avec périodicité et promotions propres à chaque éditeur. Ils ne se
          comparent ni entre eux ni à HubSpot sans devis complet. Les fonctions
          ci-dessus viennent des{" "}
          <a
            href="https://www.pipedrive.com/fr/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs officiels Pipedrive
          </a>{" "}
          et des{" "}
          <a
            href="https://www.odoo.com/fr_FR/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs officiels Odoo
          </a>
          . Hagnéré Code n’a pas exécuté ces essais dans vos comptes : ce
          tableau sert à choisir les deux produits que votre équipe testera, pas
          à leur attribuer un vainqueur imaginaire.
        </p>

        <InfoBox
          variant="amber"
          title="Une liste de fonctions ne remplace pas l’essai"
        >
          Créez le même prospect fictif dans HubSpot et dans l’alternative.
          Demandez à deux commerciaux d’accomplir les six actions du tableau,
          sans aide du vendeur de logiciel. Notez le temps, les détours, le plan
          requis et ce qui manque à l’export. Tant que cet essai n’est pas
          réalisé, « un autre CRM conviendra mieux » reste une hypothèse.
        </InfoBox>

        <section
          id="outils-crm"
          aria-labelledby="outils-crm-title"
          className="not-prose scroll-mt-24 my-8 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 shadow-sm sm:p-7 dark:border-violet-900/70 dark:from-violet-950/50 dark:via-zinc-950 dark:to-blue-950/30"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Gratuit
                </span>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700">
                  Sans formulaire ni e-mail
                </span>
              </div>
              <h2
                id="outils-crm-title"
                className="m-0 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-white"
              >
                Emportez la fiche des douze actions
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Le fichier contient les douze tests, le résultat attendu et des
                colonnes pour noter durée, détour, donnée recopiée, risque,
                preuve et décision. Utilisez des données fictives ou
                anonymisées, puis faites tester deux profils différents.
              </p>
            </div>
            <a
              href="/ressources/fiche-test-crm-12-actions.csv"
              download="fiche-test-crm-12-actions.csv"
              className="inline-flex min-h-11 w-full shrink-0 flex-col items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <span>Télécharger la fiche de test</span>
              <span className="text-xs font-normal opacity-70">
                CSV UTF-8 · 12 actions · 2 Ko
              </span>
            </a>
          </div>
          <p className="mb-0 mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Le fichier utilise le point-virgule pour s’ouvrir facilement dans
            les tableurs en français. Il ne contient aucune macro et n’envoie
            aucune donnée.
          </p>
        </section>

        <CrmTcoCalculator />

        <h2 id="douze-actions">
          Commencez par douze actions que vos commerciaux font vraiment
        </h2>
        <p>
          La question n’est pas « HubSpot propose-t-il des workflows ? ». Elle
          est : « Julie peut-elle qualifier ce prospect, faire valider la remise
          et transmettre la bonne promesse sans recopier trois fois les mêmes
          informations ? » Prenez deux commerciaux qui travaillent différemment.
          Demandez-leur d’exécuter douze tâches sur un jeu de données fictif,
          pendant que vous notez chaque détour.
        </p>

        <div className="not-prose my-8 grid gap-4">
          {salesActions.map((item, index) => (
            <section
              key={item.action}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.action}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-zinc-200">
                      Résultat attendu :
                    </strong>{" "}
                    {item.proof}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-amber-800 dark:text-amber-300">
                    <strong>À noter :</strong> {item.warning}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <p>
          Pour chaque action, notez la fréquence, le temps nécessaire, le risque
          d’erreur et l’information qui quitte le CRM. Faites rejouer une action
          qui échoue après avoir corrigé un réglage simple. Vous séparerez ainsi
          un défaut du logiciel d’un problème de configuration ou d’usage, avec
          un diagnostic compréhensible par la direction.
        </p>

        <InfoBox
          variant="amber"
          title="Ne confondez pas gêne et besoin de développement"
        >
          Un champ mal nommé, une permission oubliée ou une formation manquante
          peuvent rendre le CRM pénible sans justifier sa réécriture. Corrigez
          d’abord ce qui est réversible et peu coûteux, puis rejouez le test.
        </InfoBox>

        <h2 id="cas-metier">
          Quatre situations métier peuvent mener à quatre réponses différentes
        </h2>
        <p>
          Les exemples suivants sont <strong>entièrement fictifs</strong>. Ils
          ne décrivent ni des clients ni des résultats de Hagnéré Code. Leur
          intérêt est de montrer pourquoi le nombre d’utilisateurs ne suffit pas
          à choisir.
        </p>

        <GuideTable
          caption="Exemples illustratifs : la décision dépend du travail réel, pas du nombre de sièges"
          headers={[
            "Situation",
            "Problème dominant",
            "Première option à tester",
          ]}
          rows={[
            [
              "Petite société de services",
              "Contacts, relances et affaires sont standards ; l’équipe se plaint surtout de trop de champs.",
              "Simplifier et reconfigurer HubSpot. Un développement serait disproportionné.",
            ],
            [
              "Entreprise de maintenance",
              "Le devis dépend des compétences disponibles et le dossier doit ensuite alimenter la planification.",
              "Garder le CRM commercial et tester un module de devis ou un logiciel métier connecté.",
            ],
            [
              "Cabinet de recrutement",
              "Candidats, missions, viviers et placements s’emboîtent mal dans un simple pipeline de vente.",
              "Comparer un CRM de recrutement, une édition capable de représenter ces objets et une solution spécifique.",
            ],
            [
              "Négoce avec devis complexe",
              "Marge, stock, remise et validation dépendent de l’ERP ; les commerciaux recopient des données sensibles.",
              "Connecter correctement CRM et ERP avant d’envisager un CRM sur mesure complet.",
            ],
          ]}
        />

        <p>
          Notre avis : lorsqu’une seule étape est spécifique, codez au plus
          cette étape. Un remplacement complet devient défendable seulement si
          plusieurs règles stables traversent la vente, la production et la
          facturation, et si aucune solution standard ou verticale ne les couvre
          proprement.
        </p>

        <h2 id="droits-donnees">
          Vérifiez qui voit et modifie chaque donnée — et laquelle fait foi
        </h2>
        <p>
          Un CRM devient vite la mémoire commerciale de l’entreprise. Testez-le
          avec trois profils : un commercial, son responsable et
          l’administrateur. Qui peut consulter un prospect, corriger une
          affaire, exporter un fichier ou supprimer en masse ? HubSpot documente
          des autorisations distinctes pour la consultation, la modification,
          l’import, l’export, la suppression et certains objets selon
          l’abonnement dans son{" "}
          <a
            href="https://knowledge.hubspot.com/fr/user-management/hubspot-user-permissions-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide officiel des autorisations
          </a>
          . Utilisez cette documentation pour vérifier votre compte, pas pour
          supposer que chaque option est disponible dans chaque offre.
        </p>

        <p>
          Pour les données qui décident d’une vente, écrivez quatre réponses :
        </p>
        <ol>
          <li>dans quel outil la donnée naît-elle ?</li>
          <li>qui a le droit de la corriger ?</li>
          <li>quel autre outil en reçoit une copie ?</li>
          <li>qui traite le doublon ou la donnée devenue fausse ?</li>
        </ol>

        <p>
          Les données commerciales restent des données personnelles lorsqu’elles
          concernent une personne. Le{" "}
          <a
            href="https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            référentiel de la CNIL sur la gestion commerciale
          </a>{" "}
          donne des repères sur finalités, catégories, destinataires et durées.
          Il ne remplace pas l’analyse propre à votre entreprise. Une migration
          n’est pas une raison pour recopier automatiquement toutes les
          anciennes données « au cas où ».
        </p>

        <h2 id="integrations">
          Testez les connexions qui évitent vraiment une double saisie
        </h2>
        <p>
          Listez seulement les échanges utiles : le formulaire crée un prospect,
          une vente validée ouvre le dossier de production, un devis signé
          alimente la facturation, un incident client revient vers le bon
          commercial. Pour chaque échange, provoquez une donnée invalide, une
          absence de réponse et un second passage du même événement. Vous devez
          savoir où l’erreur apparaît et qui peut la reprendre sans créer de
          doublon.
        </p>

        <p>
          HubSpot publie des{" "}
          <a
            href="https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            limites d’utilisation de ses API
          </a>{" "}
          qui dépendent notamment du type d’application, de l’authentification
          et de l’abonnement. Sa{" "}
          <a
            href="https://developers.hubspot.com/docs/api-reference/latest/crm/limits-tracking/guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation de suivi des limites CRM
          </a>{" "}
          couvre aussi certaines limites de fiches, associations, propriétés ou
          pipelines. Ne recopiez pas un chiffre trouvé dans un article : testez
          le compte, l’intégration et le volume qui vous concernent.
        </p>

        <h2 id="cout-contournements">
          Trois scénarios montrent ce que peut coûter la double saisie
        </h2>
        <p>
          Avant de comparer des logiciels, mesurez le problème pendant dix
          journées représentatives. Les montants ci-dessous sont des{" "}
          <strong>exemples illustratifs fictifs</strong>, pas des moyennes de
          marché. Ils montrent à quel point le nombre de personnes, les minutes
          perdues et le coût du temps peuvent changer la décision.
        </p>

        <GuideTable
          caption="Exemples fictifs : coût annuel du seul temps de ressaisie"
          headers={[
            "Scénario",
            "Hypothèses",
            "Calcul et coût annuel théorique",
          ]}
          rows={[
            [
              "Simple",
              "4 commerciaux, 8 minutes par jour, 220 jours, 45 € par heure.",
              "4 × (8 / 60) × 220 × 45 = 5 280 €.",
            ],
            [
              "Central",
              "6 commerciaux, 18 minutes par jour, 220 jours, 45 € par heure.",
              "6 × (18 / 60) × 220 × 45 = 17 820 €.",
            ],
            [
              "Exigeant",
              "12 commerciaux, 25 minutes par jour, 220 jours, 50 € par heure.",
              "12 × (25 / 60) × 220 × 50 = 55 000 €.",
            ],
          ]}
        />

        <h3>
          Ajoutez les erreurs, validations et recherches qui ne sont pas déjà
          comptées
        </h3>
        <p>
          La double saisie n’est qu’un contournement. Un devis corrigé, une
          remise validée dans une messagerie privée ou une information cherchée
          dans trois outils consomment aussi du temps. Les exemples suivants
          sont entièrement fictifs et ne décrivent ni un client ni un résultat
          de Hagnéré Code.
        </p>

        <GuideTable
          caption="Trois autres coûts annuels fictifs à remplacer par vos observations"
          headers={["Contournement", "Hypothèses", "Calcul annuel"]}
          rows={[
            [
              "Corriger une erreur de devis",
              "14 corrections par mois, 22 minutes chacune, 45 € par heure.",
              "14 × (22 / 60) × 45 × 12 = 2 772 €.",
            ],
            [
              "Faire valider manuellement une exception",
              "35 validations par mois, 9 minutes chacune, 55 € par heure.",
              "35 × (9 / 60) × 55 × 12 = 3 465 €.",
            ],
            [
              "Rechercher une information dispersée",
              "18 dossiers par mois, 16 minutes chacun, 45 € par heure.",
              "18 × (16 / 60) × 45 × 12 = 2 592 €.",
            ],
          ]}
        />

        <FormulaBox>
          {`Coût annuel d’un contournement =
nombre de cas par mois
× minutes par cas / 60
× coût horaire chargé
× 12`}
        </FormulaBox>

        <p>
          Dans le scénario central, additionner 17 820 € de ressaisie, 2 772 €
          de corrections, 3 465 € de validations et 2 592 € de recherches donne{" "}
          <strong>26 649 € par an</strong>. Ne faites cette addition que si les
          temps ne se recouvrent pas. Ce montant reste un coût théorique : il ne
          devient pas automatiquement une économie, et une erreur de devis n’est
          pas assimilée à une vente perdue.
        </p>

        <FormulaBox>
          {`Coût annuel théorique de la ressaisie =
nombre de personnes
× minutes perdues par jour / 60
× jours travaillés
× coût horaire chargé`}
        </FormulaBox>

        <p>
          Ce total n’est pas automatiquement une économie. Si les 18 minutes
          libérées restent dispersées et ne permettent ni de traiter davantage
          de dossiers, ni d’éviter une embauche, ni de réduire des heures
          supplémentaires, le gain financier réel peut être bien plus faible. À
          l’inverse, ces exemples ne comptent ni les erreurs de devis, ni les
          relances oubliées, ni le délai de validation. Mesurez ces effets
          séparément au lieu de les ajouter au hasard.
        </p>

        <InfoBox
          variant="amber"
          title="Le signal utile n’est pas « Excel est pénible »"
        >
          Le signal utile ressemble à ceci : « six personnes recopient chaque
          jour les mêmes données pendant une médiane de 18 minutes ; deux
          erreurs de montant ont été corrigées ce mois-ci ». Cette phrase peut
          être vérifiée, recalculée et comparée au coût d’une correction.
        </InfoBox>

        <h2 id="cout">Comparez le coût sur 36 mois avec les mêmes postes</h2>
        <p>
          Un abonnement mensuel et un devis de développement ne sont pas
          comparables tels quels. Le premier n’inclut pas toujours le temps
          d’administration, les intégrations et la migration. Le second ne dit
          pas toujours ce que coûteront hébergement, surveillance, corrections
          et évolutions. Le{" "}
          <Link href="/guides/combien-coute-un-crm">
            guide du coût d’un CRM
          </Link>{" "}
          détaille ces postes ; ici, l’objectif est de les appliquer aux options
          avec les mêmes hypothèses.
        </p>

        <FormulaBox>
          {`Coût estimé sur 36 mois =
licences ou abonnements
+ préparation et configuration
+ migration et nettoyage
+ intégrations
+ développement ou adaptation spécifique
+ formation et administration interne
+ hébergement, maintenance et support
+ coût d’une sortie testée`}
        </FormulaBox>

        <p>
          Pour le temps interne, utilisez les heures réellement observées et un
          coût horaire choisi par l’entreprise. Ne transformez pas toute minute
          évitée en économie : elle ne devient un gain que si elle est
          supprimée, réaffectée à une tâche utile ou évite un coût réel. Faites
          trois scénarios et marquez les tarifs, volumes et prestations futures
          « à confirmer ».
        </p>

        <InfoBox
          variant="blue"
          title="Exemple illustratif fictif : quatre voies sur la même base"
        >
          Cet exemple fictif ne décrit ni un client ni un cas réel de Hagnéré
          Code. Tous les montants sont inventés pour expliquer le calcul. Ils ne
          correspondent ni aux tarifs actuels de HubSpot, ni à un devis de
          Hagnéré Code, ni à une moyenne de marché.
        </InfoBox>

        <p>
          Une PME fictive emploie six commerciaux. Pour pouvoir refaire les
          opérations, elle retient un abonnement CRM fictif de{" "}
          <strong>600 € HT par mois</strong>, un coût interne chargé de{" "}
          <strong>45 € par heure</strong>, des journées de sept heures et une
          prestation externe fictive de <strong>800 € HT par jour</strong>. Ces
          valeurs devront être remplacées par le devis daté de l’éditeur, les
          coûts de l’entreprise et les propositions réellement reçues.
        </p>

        <GuideTable
          caption="Exemple fictif : quatre voies comparées avec les mêmes catégories de coût"
          headers={["Voie", "Calcul sur 36 mois", "Total et contrôle"]}
          rows={[
            [
              "Garder HubSpot",
              "Licences : 600 € × 36 = 21 600 €. Test : 28 h × 45 € = 1 260 €. Administration : 4 h × 45 € × 36 = 6 480 €. Sortie : 28 h × 45 € = 1 260 €. Les autres postes restent à 0 € dans cette hypothèse.",
              "30 600 € HT. 30 600 / 36 = 850 € par mois ; 850 × 36 = 30 600 €.",
            ],
            [
              "Reconfigurer HubSpot",
              "Licences : 600 € × 36 = 21 600 €. Configuration : 8 jours × 800 € = 6 400 €. Ateliers, tests et formation : 56 h × 45 € = 2 520 €. Administration : 3 h × 45 € × 36 = 4 860 €. Sortie : 28 h × 45 € = 1 260 €.",
              "36 640 € HT. 36 640 / 36 ≈ 1 017,78 € par mois ; 1 017,78 × 36 ≈ 36 640 € après arrondi.",
            ],
            [
              "HubSpot + module spécifique",
              "Licences : 600 € × 36 = 21 600 €. Module : 30 jours × 800 € = 24 000 €. Intégration : 10 jours × 800 € = 8 000 €. Participation interne : 84 h × 45 € = 3 780 €. Administration : 3 h × 45 € × 36 = 4 860 €. Exploitation : 600 € × 36 = 21 600 €. Sortie : 5 jours × 800 € + 42 h × 45 € = 5 890 €.",
              "89 730 € HT. 89 730 / 36 = 2 492,50 € par mois ; 2 492,50 × 36 = 89 730 €.",
            ],
            [
              "CRM sur mesure",
              "Développement : 100 jours × 800 € = 80 000 €. Migration : 15 jours × 800 € = 12 000 €. Intégrations : 20 jours × 800 € = 16 000 €. Participation interne : 140 h × 45 € = 6 300 €. Administration : 8 h × 45 € × 36 = 12 960 €. Exploitation : 1 800 € × 36 = 64 800 €. Sortie : 10 jours × 800 € + 70 h × 45 € = 11 150 €.",
              "203 210 € HT. 203 210 / 36 ≈ 5 644,72 € par mois ; 5 644,72 × 36 ≈ 203 210 € après arrondi.",
            ],
          ]}
        />

        <FormulaBox>
          {`Contrôle détaillé de la voie « reconfigurer » :

21 600 € de licences
+ 6 400 € de configuration
+ 2 520 € de travail interne initial
+ 4 860 € d’administration
+ 1 260 € de sortie
= 36 640 € sur 36 mois

36 640 € / 36 = 1 017,777… € par mois
1 017,777… € × 36 = 36 640 €`}
        </FormulaBox>

        <p>
          Le total le plus faible ne désigne pas automatiquement la bonne
          solution. Rapprochez l’écart des problèmes réellement observés pendant
          les douze actions : erreur évitée, délai réduit, vente mieux transmise
          ou risque mieux maîtrisé. Dans cet exemple, aucun bénéfice n’est
          transformé en euros faute de mesure ; il ne doit donc pas être
          soustrait artificiellement du budget.
        </p>

        <InfoBox variant="amber" title="Ce que l’exemple n’inclut pas">
          La TVA, l’inflation, les remises, le financement, les changements de
          tarif, les options facturées à l’usage, l’interruption liée à une
          migration et la valeur commerciale d’un meilleur processus sont
          exclus. Un poste à 0 € signifie seulement qu’il n’est pas déclenché
          dans cette hypothèse ; il ne prouve jamais qu’il sera gratuit dans
          votre entreprise.
        </InfoBox>

        <h3>Testez les variables qui peuvent inverser votre choix</h3>
        <p>
          Une seule estimation centrale donne une fausse impression de
          précision. Le tableau suivant ne compare pas des fournisseurs : il
          montre, avec des valeurs fictives, l’effet de trois variables sur un
          horizon identique de 36 mois.
        </p>

        <GuideTable
          caption="Analyse de sensibilité fictive sur 36 mois"
          headers={["Variable", "Scénario", "Hypothèse et coût sur 36 mois"]}
          rows={[
            ["Abonnements et options", "Bas", "400 € / mois = 14 400 €"],
            ["Abonnements et options", "Central", "950 € / mois = 34 200 €"],
            ["Abonnements et options", "Haut", "2 000 € / mois = 72 000 €"],
            [
              "Administration interne à 55 € / h",
              "Bas",
              "4 h / mois = 7 920 €",
            ],
            [
              "Administration interne à 55 € / h",
              "Central",
              "12 h / mois = 23 760 €",
            ],
            [
              "Administration interne à 55 € / h",
              "Haut",
              "24 h / mois = 47 520 €",
            ],
            [
              "Exploitation et maintenance du spécifique",
              "Bas",
              "1 200 € / mois = 43 200 €",
            ],
            [
              "Exploitation et maintenance du spécifique",
              "Central",
              "2 400 € / mois = 86 400 €",
            ],
            [
              "Exploitation et maintenance du spécifique",
              "Haut",
              "3 600 € / mois = 129 600 €",
            ],
          ]}
        />

        <p>
          Si le verdict change dès qu’un abonnement ou une maintenance varie de
          quelques centaines d’euros, la décision est fragile : exigez un devis
          plus précis et testez un horizon de 60 mois. S’il ne change jamais,
          vérifiez que vous n’avez pas sous-estimé la migration, le travail
          interne ou le risque du spécifique.
        </p>

        <h3>Prolongez le même exemple jusqu’à 60 mois</h3>
        <p>
          Un développement supporte davantage de coûts au départ ; un abonnement
          et une maintenance se répètent. Pour rendre l’horizon de cinq ans
          contrôlable, le tableau conserve les coûts initiaux et de sortie
          ci-dessus, puis prolonge uniquement les postes explicitement mensuels.
          Il n’intègre ni inflation, ni nouvelle fonctionnalité, ni changement
          de tarif.
        </p>

        <GuideTable
          caption="Prolongation fictive des quatre voies sur 60 mois"
          headers={[
            "Voie",
            "Coûts fixes conservés et coûts mensuels prolongés",
            "Total sur 60 mois",
          ]}
          rows={[
            [
              "Garder HubSpot",
              "Test et sortie : 2 520 €. Licences et administration : (600 € + 180 €) × 60 = 46 800 €.",
              "49 320 € HT.",
            ],
            [
              "Reconfigurer HubSpot",
              "Configuration, ateliers et sortie : 10 180 €. Licences et administration : (600 € + 135 €) × 60 = 44 100 €.",
              "54 280 € HT.",
            ],
            [
              "HubSpot + module spécifique",
              "Module, intégration, participation et sortie : 41 670 €. Licences, administration et exploitation : (600 € + 135 € + 600 €) × 60 = 80 100 €.",
              "121 770 € HT.",
            ],
            [
              "CRM sur mesure",
              "Développement, migration, intégrations, participation et sortie : 125 450 €. Administration et exploitation : (360 € + 1 800 €) × 60 = 129 600 €.",
              "255 050 € HT.",
            ],
          ]}
        />

        <p>
          Cette prolongation n’annonce pas le prix d’un projet réel. Elle montre
          surtout quels postes doivent être marqués « initial », « mensuel », «
          annuel » ou « à la sortie ». Si une maintenance inclut des évolutions
          ou si un abonnement augmente avec les contacts, reprenez le calcul au
          lieu de prolonger mécaniquement la valeur centrale.
        </p>

        <h2 id="sortie">
          Préparez la migration et la sortie avant d’avoir besoin de partir
        </h2>
        <p>
          Une sortie ne se résume pas à cliquer sur « exporter ». Choisissez dix
          contacts fictifs reliés à des entreprises, affaires et activités.
          Ajoutez un propriétaire, une étape de pipeline, une note et une pièce
          représentative. Exportez ce que votre abonnement permet, puis demandez
          à une personne qui ne connaît pas le CRM de reconstituer l’histoire
          commerciale.
        </p>

        <p>
          HubSpot explique dans son{" "}
          <a
            href="https://knowledge.hubspot.com/fr/import-and-export/export-records"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide officielle sur l’export des fiches
          </a>{" "}
          comment exporter des propriétés et, selon les choix, des associations.
          Cette fonction est utile, mais elle ne prouve pas à elle seule que les
          e-mails, pièces, automatismes, droits et connexions seront repris dans
          un autre système. Notez ce qui sort, ce qui manque et le travail
          nécessaire pour le rendre compréhensible.
        </p>

        <p>
          La documentation officielle précise aussi que l’export principal
          fournit les valeurs actuelles et les associations choisies ; les
          activités comme les appels ou les notes suivent d’autres mécanismes.
          Une migration sérieuse traite donc séparément :
        </p>
        <ol>
          <li>
            l’inventaire des contacts, entreprises, affaires, objets,
            propriétés, activités et fichiers ;
          </li>
          <li>
            les doublons, champs vides et données qu’il n’est plus utile ou
            légitime de conserver ;
          </li>
          <li>
            la correspondance entre les anciens et les nouveaux identifiants ;
          </li>
          <li>
            la reprise d’un échantillon, puis la vérification par les personnes
            qui utilisent réellement le CRM ;
          </li>
          <li>
            une période de coexistence pendant laquelle les nouvelles
            modifications ne se perdent pas ;
          </li>
          <li>
            la bascule, le retour arrière et la fermeture contrôlée des accès.
          </li>
        </ol>

        <InfoBox
          variant="blue"
          title="Exemple fictif : un coût de migration visible avant le développement"
        >
          Cet exemple ne décrit ni un client ni un cas réel de Hagnéré Code. Une
          base fictive de 12 000 contacts contient, dans cette hypothèse, 8 % de
          doublons à examiner. À quatre minutes par doublon et 38 € de coût
          horaire, le nettoyage vaut 12 000 × 8 % × 4 / 60 × 38 ={" "}
          <strong>2 432 €</strong>. Trois mois de coexistence à 1 100 € par mois
          ajoutent <strong>3 300 €</strong>. Le minimum déjà visible atteint{" "}
          <strong>5 732 €</strong>, avant même les imports, les activités, les
          fichiers, les tests et la formation.
        </InfoBox>

        <div className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
          <p className="mb-4 text-sm font-semibold text-zinc-950 dark:text-white">
            Une sortie est démontrée lorsque…
          </p>
          <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
            {[
              "les comptes d’administration appartiennent à l’entreprise ;",
              "les objets et leurs relations restent compréhensibles ;",
              "les pièces et historiques hors export sont identifiés ;",
              "la fréquence et la responsabilité des exports sont écrites ;",
              "un outil cible ou un format d’archive a été essayé ;",
              "la fermeture des accès et la conservation sont prévues.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-200 bg-white p-3 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 id="pilotage">
          Après le changement, mesurez le résultat commercial — pas la livraison
          du logiciel
        </h2>
        <p>
          Un projet CRM n’est pas réussi parce que les écrans ont été livrés.
          Pendant quatre semaines avant le changement, relevez une situation de
          départ. Reprenez ensuite les mêmes mesures après une période
          d’adoption suffisante. Aucun objectif universel n’est imposé : le
          progrès doit être défini à partir de vos propres données.
        </p>

        <GuideTable
          caption="Six mesures qui relient le CRM au travail quotidien"
          headers={["Mesure", "Comment la calculer", "Ce qu’elle peut révéler"]}
          rows={[
            [
              "Affaires avec une prochaine action",
              "Affaires ouvertes ayant une action datée / affaires ouvertes.",
              "Le CRM aide-t-il réellement à préparer la relance ?",
            ],
            [
              "Délai avant premier contact",
              "Médiane entre réception de la demande et première réponse.",
              "Les prospects attendent-ils moins longtemps ?",
            ],
            [
              "Taux de doublons",
              "Fiches en double confirmées / fiches contrôlées.",
              "Les imports et intégrations créent-ils une base peu fiable ?",
            ],
            [
              "Temps de préparation d’un devis",
              "Médiane sur un échantillon comparable.",
              "La connexion au métier supprime-t-elle un vrai détour ?",
            ],
            [
              "Dossiers transmis sans information manquante",
              "Transmissions complètes / transmissions contrôlées.",
              "La vente et la production partagent-elles la même promesse ?",
            ],
            [
              "Utilisateurs actifs sur les actions attendues",
              "Personnes ayant réalisé l’action utile / personnes concernées.",
              "Le problème vient-il de l’outil, de la formation ou du management ?",
            ],
          ]}
        />

        <p>
          Nommez un propriétaire métier du CRM. Il décide des champs, surveille
          les doublons, organise la formation et arbitre les demandes
          d’évolution. Sans ce rôle, un CRM standard s’encombre ; un CRM sur
          mesure accumule la même dette, simplement à un coût différent.
        </p>

        <h2 id="verdict">
          Notre recommandation : standard d’abord, spécifique seulement sur la
          partie qui fait la différence
        </h2>
        <p>
          Ne demandez pas « à partir de combien de commerciaux le sur-mesure est
          rentable ? ». Demandez quel problème reste après une configuration
          correcte, combien de fois il survient, quel risque il crée et quelle
          responsabilité l’entreprise accepte de financer.
        </p>

        <GuideTable
          caption="Transformer les résultats du test en décision"
          headers={["Constat", "Décision probable", "Condition avant d’agir"]}
          rows={[
            [
              "Les douze actions réussissent ; les écarts viennent surtout de l’usage.",
              "Garder HubSpot.",
              "Nommer un responsable, simplifier les champs et former l’équipe.",
            ],
            [
              "Les actions sont couvertes, mais champs, droits ou pipelines gênent.",
              "Reconfigurer.",
              "Tester les changements sur un échantillon et mesurer l’adoption.",
            ],
            [
              "Le modèle de HubSpot gêne, mais le besoin est courant dans votre secteur.",
              "Tester un autre CRM standard ou vertical.",
              "Rejouer les mêmes actions et budgéter la migration et la sortie.",
            ],
            [
              "Une étape spécifique et stable crée l’essentiel des doubles saisies.",
              "Solution hybride.",
              "Définir source de vérité, erreurs, désactivation et maintenance.",
            ],
            [
              "Plusieurs règles stables et critiques restent impossibles à couvrir.",
              "Étudier un CRM sur mesure.",
              "Fonctions, budget sur 36 mois, exploitation et sortie validés.",
            ],
            [
              "Le processus change, les rôles sont flous ou aucune donnée n’est fiable.",
              "Reporter le projet.",
              "Stabiliser la vente avant de choisir le logiciel.",
            ],
          ]}
        />

        <InfoBox variant="emerald" title="La décision que nous défendons">
          Pour une vente classique, un CRM standard bien réglé reste notre
          premier choix. Si une seule étape — par exemple le devis technique —
          est propre à votre activité, conservez le socle standard et isolez
          cette étape. Nous déconseillons un remplacement complet tant que vous
          n’avez pas mesuré les contournements, testé un autre produit et prévu
          trois ans d’exploitation. Le verdict doit être réexaminé si le
          processus change, si une édition couvre enfin le besoin ou si le coût
          de maintenance dépasse la valeur observée.
        </InfoBox>

        <h2 id="action">
          Votre prochaine action ne demande aucun nouveau logiciel
        </h2>
        <p>
          Cette semaine, réunissez deux commerciaux pendant une heure. Préparez
          un prospect fictif et faites-le avancer du premier contact jusqu’à la
          transmission après-vente. Notez chaque ressaisie, document parallèle,
          autorisation manquante et information introuvable. Corrigez d’abord
          une gêne simple, puis rejouez l’action. Vous saurez si le sujet est un
          problème d’usage, de configuration, d’intégration ou de produit.
        </p>

        <p>
          Une aide extérieure devient pertinente si plusieurs règles stables
          restent spécifiques, si les connexions échouent sans être vues, si la
          migration doit préserver un historique important ou si personne ne
          sait comparer les coûts et les responsabilités. Elle est mal adaptée à
          un simple besoin de formation, à un processus qui change encore ou à
          une recherche d’économie garantie.
        </p>

        <GuideInlineCTA
          title="Vérifier si votre CRM doit être réglé, complété ou remplacé"
          description="Apportez votre processus de vente et les contournements observés. Nous pouvons comparer les options, y compris conclure qu’une configuration ou un outil standard suffit."
          tags={[
            "Comparaison sur le même processus",
            "Solution simple possible",
            "Aucune migration imposée",
          ]}
          ctaLabel="Décrire mon besoin CRM"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources, date et limites de cette comparaison</h2>
        <p>
          Les fonctions et limites HubSpot citées proviennent de la
          documentation officielle consultée le 24 juillet 2026 :{" "}
          <a
            href="https://www.hubspot.fr/products/crm/ai-crm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smart CRM et prix d’appel
          </a>
          ,{" "}
          <a
            href="https://knowledge.hubspot.com/account-management/manage-seats"
            target="_blank"
            rel="noopener noreferrer"
          >
            types de sièges
          </a>
          ,{" "}
          <a
            href="https://knowledge.hubspot.com/object-settings/create-custom-objects"
            target="_blank"
            rel="noopener noreferrer"
          >
            objets personnalisés
          </a>
          ,{" "}
          <a
            href="https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles d’utilisation des API
          </a>
          ,{" "}
          <a
            href="https://knowledge.hubspot.com/fr/user-management/hubspot-user-permissions-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            autorisations
          </a>{" "}
          et{" "}
          <a
            href="https://knowledge.hubspot.com/fr/import-and-export/export-records"
            target="_blank"
            rel="noopener noreferrer"
          >
            exports
          </a>
          . Ce sont des sources primaires sur le produit, pas des preuves
          indépendantes de performance ou de rentabilité.
        </p>
        <p>
          La présélection des alternatives s’appuie sur les pages officielles{" "}
          <a
            href="https://www.pipedrive.com/fr/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pipedrive
          </a>{" "}
          et{" "}
          <a
            href="https://www.odoo.com/fr_FR/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odoo
          </a>{" "}
          consultées le même jour. Elles décrivent des offres et des fonctions ;
          elles ne prouvent pas qu’un produit convient à votre processus. Aucun
          résultat d’essai de compte n’est inventé dans ce guide.
        </p>
        <p>
          Le référentiel de la{" "}
          <a
            href="https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL sur la gestion commerciale
          </a>{" "}
          apporte un cadre général pour les données personnelles ; il ne décide
          pas à la place de l’entreprise de chaque finalité et durée. Les offres
          peuvent changer. Le guide ne recommande aucun abonnement, ne promet
          aucune économie et ne remplace pas un examen des contrats, données et
          règles propres à l’entreprise. Pour approfondir la partie budgétaire,
          consultez{" "}
          <Link href="/guides/combien-coute-un-crm">
            combien coûte réellement un CRM
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
