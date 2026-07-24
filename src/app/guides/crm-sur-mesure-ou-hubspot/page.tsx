import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
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
  "CRM sur mesure ou HubSpot : comparer le processus, le coût et la sortie",
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
    question: "Peut-on exporter toutes ses données HubSpot ?",
    answer:
      "Pas nécessairement sous une forme immédiatement réutilisable ailleurs. HubSpot documente l’export des fiches, propriétés et associations selon les objets et options concernés. Faites un essai avec contacts, entreprises, affaires, activités et pièces utiles : un fichier obtenu n’est pas encore une migration restaurable.",
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
      "Il n’existe pas de seuil universel. Dix personnes avec un processus standard peuvent être très bien servies par HubSpot ; trois personnes avec une règle métier décisive peuvent rencontrer une vraie limite. Décidez avec les contournements, le coût sur trois ans, les intégrations et la stabilité du processus, pas avec le seul nombre de sièges.",
  },
  {
    question: "Un CRM sur mesure est-il forcément plus sécurisé ?",
    answer:
      "Non. Il donne davantage de choix, mais il faut encore concevoir les droits, protéger les accès, mettre à jour le logiciel, sauvegarder, surveiller et corriger. Un produit standard bien configuré peut être préférable à un développement spécifique mal entretenu. Comparez les mesures réelles, jamais les étiquettes.",
  },
  {
    question: "Qui possède les données et le code d’un CRM sur mesure ?",
    answer:
      "Cela dépend des contrats et des comptes mis en place. Faites préciser les droits sur le code, les composants tiers, l’hébergement, le domaine, les dépôts, les données et leur restitution. Pour HubSpot comme pour un développement, testez aussi qui peut administrer, exporter et fermer les accès.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "12 actions réelles",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "Coût sur 36 mois",
    description: "",
    color: "violet",
  },
  {
    number: "03",
    title: "Sortie testée",
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
  { id: "douze-actions", label: "Rejouer douze actions de vente" },
  { id: "quatre-voies", label: "Comparer quatre voies réalistes" },
  { id: "droits-donnees", label: "Vérifier les droits et la donnée" },
  { id: "integrations", label: "Tester les connexions utiles" },
  { id: "cout", label: "Comparer le coût sur 36 mois" },
  { id: "sortie", label: "Faire un véritable essai de sortie" },
  { id: "verdict", label: "Prendre une décision sans seuil magique" },
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
        heroDescription="HubSpot suit vos prospects, mais vos commerciaux gardent Excel ouvert et les licences augmentent. Comparez les mêmes actions de vente, le coût sur trois ans et la sortie avant de décider de garder, régler, compléter ou remplacer le CRM."
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
          l’équipe qui réalisera la mission. Faut-il mieux configurer HubSpot ou
          créer votre propre CRM ? Dans ce guide, le CRM commercial désigne
          l’outil qui suit un prospect du premier échange jusqu’à la vente et
          aux actions qui suivent. La réponse n’oppose pas deux camps. Gardez
          HubSpot s’il exécute vos actions essentielles sans détour coûteux.
          Réglez-le si le problème vient des champs, des droits ou des
          habitudes. Complétez-le si une seule étape métier reste spécifique. Ne
          le remplacez que si le test du processus, le coût sur 36 mois et un
          essai de sortie justifient ensemble ce projet. Et si personne ne sait
          encore expliquer comment l’entreprise vend, commencez par stabiliser
          le processus : aucun logiciel ne corrigera une règle qui change chaque
          semaine.
        </p>

        <InfoBox variant="emerald" title="La réponse courte">
          Ne choisissez pas avec une liste de fonctions. Demandez à deux
          commerciaux de rejouer les mêmes actions dans chaque option, puis
          comparez les contournements, le coût complet et ce que vous récupérez
          en cas de départ.
        </InfoBox>

        <GuideToc items={tocItems} />

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

        <h2 id="quatre-voies">
          Comparez quatre voies réalistes, pas seulement deux devis
        </h2>
        <p>
          Un CRM sur mesure n’est pas le seul concurrent de HubSpot.
          L’entreprise peut conserver l’existant, mieux le configurer, lui
          ajouter un module ou le remplacer. Le tableau ci-dessous n’annonce
          aucun vainqueur : il montre ce que chaque décision vous oblige à
          prouver.
        </p>

        <GuideTable
          caption="Quatre décisions possibles après le test du processus commercial"
          headers={[
            "Voie",
            "Elle convient si…",
            "Ce qu’il faut prouver et budgéter",
          ]}
          rows={[
            [
              "Garder HubSpot",
              "Les actions importantes fonctionnent et les détours restent rares ou acceptables.",
              "Deux commerciaux réussissent le test avec la même source de vérité. Budgétez encore l’administration, le nettoyage et la formation continue.",
            ],
            [
              "Reconfigurer HubSpot",
              "Le processus est standard, mais les champs, droits, pipelines ou automatismes sont mal réglés.",
              "Une copie ou un environnement maîtrisé montre l’amélioration avant déploiement. Budgétez le temps de décision et le maintien de la configuration.",
            ],
            [
              "HubSpot + module spécifique",
              "Contacts et affaires sont bien couverts, mais une étape métier stable reste particulière.",
              "Le module échange les bonnes données, gère les erreurs et peut être désactivé. Budgétez sa surveillance et les changements d’API.",
            ],
            [
              "CRM sur mesure",
              "Plusieurs règles stables et décisives résistent aux options précédentes.",
              "Un premier lot testable, des comptes maîtrisés et une sortie sont démontrés. Budgétez développement, exploitation, sécurité, évolution, hébergement et reprise.",
            ],
          ]}
        />

        <p>
          Il existe aussi une cinquième décision :{" "}
          <strong>ne rien changer maintenant</strong>. Si les commerciaux ne
          s’accordent pas sur les étapes de vente, si la direction ne sait pas
          quels chiffres elle veut croire ou si le CRM n’a jamais eu de
          responsable, formalisez ces points avant de financer une migration.
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
          détaille ces postes ; ici, l’objectif est de les appliquer aux quatre
          voies avec les mêmes hypothèses.
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
          Tous les montants ci-dessous sont inventés pour expliquer le calcul.
          Ils ne correspondent ni aux tarifs actuels de HubSpot, ni à un devis
          de Hagnéré Code, ni à une moyenne de marché.
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
              "Licences : 21 600 €. Test et remise à niveau : 1 260 €. Administration : 6 480 €. Sortie : 1 260 €. Migration, intégration, développement et hébergement additionnels : 0 € dans cette hypothèse.",
              "30 600 € HT. 30 600 / 36 = 850 € par mois ; 850 × 36 = 30 600 €.",
            ],
            [
              "Reconfigurer HubSpot",
              "Licences : 21 600 €. Configuration externe : 6 400 €. Ateliers, tests et formation : 2 520 €. Administration : 4 860 €. Sortie : 1 260 €. Migration, développement et hébergement additionnels : 0 € dans cette hypothèse.",
              "36 640 € HT. 36 640 / 36 ≈ 1 017,78 € par mois ; 1 017,78 × 36 ≈ 36 640 € après arrondi.",
            ],
            [
              "HubSpot + module spécifique",
              "Licences : 21 600 €. Ateliers de préparation et développement : 24 000 €. Intégration : 8 000 €. Participation interne : 3 780 €. Administration : 4 860 €. Hébergement, maintenance et surveillance : 21 600 €. Sortie : 5 890 €. Migration : 0 € dans cette hypothèse.",
              "89 730 € HT. 89 730 / 36 = 2 492,50 € par mois ; 2 492,50 × 36 = 89 730 €.",
            ],
            [
              "CRM sur mesure",
              "Ateliers de préparation et développement : 80 000 €. Migration : 12 000 €. Intégrations : 16 000 €. Participation interne : 6 300 €. Administration : 12 960 €. Hébergement, maintenance et support : 64 800 €. Sortie : 11 150 €. Licence CRM : 0 € dans cette hypothèse.",
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

        <InfoBox variant="blue" title="Les prix HubSpot sont une photographie">
          La page officielle du{" "}
          <a
            href="https://www.hubspot.fr/products/sales"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sales Hub
          </a>{" "}
          affiche des éditions gratuites et payantes. Tarifs, promotions,
          engagements, taxes, sièges et fonctions peuvent changer. Relevez votre
          devis daté et les seules fonctions nécessaires ; ne construisez pas un
          projet sur un prix d’appel mémorisé.
        </InfoBox>

        <h2 id="sortie">
          Faites un essai de sortie avant d’avoir besoin de partir
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

        <h2 id="verdict">Prenez une décision sans seuil magique</h2>
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

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          Le cas suivant sert uniquement à expliquer la décision. Il ne décrit
          ni un client de Hagnéré Code, ni une mission réelle, ni un résultat
          commercial obtenu.
        </InfoBox>

        <p>
          Une PME fictive de maintenance emploie six commerciaux. HubSpot suit
          correctement les contacts, les rendez-vous et les affaires. Le test
          révèle cependant que le devis technique dépend de la disponibilité de
          certaines compétences et oblige à recopier les mêmes informations dans
          Excel. Les dix autres actions passent sans difficulté notable.
        </p>
        <p>
          Le verdict n’est pas « refaire le CRM ». L’entreprise garde HubSpot
          comme source des contacts et affaires. Elle étudie un module limité au
          devis technique, qui renvoie seulement son statut et son montant.
          Avant de le développer, elle teste aussi si un paramétrage ou une
          application standard existante couvre ce besoin. Aucun gain de temps,
          coût ou délai n’est supposé : ils devront être mesurés sur ce
          processus.
        </p>

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
          documentation officielle consultée le 23 juillet 2026 :{" "}
          <a
            href="https://www.hubspot.fr/products/sales"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sales Hub
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
          Les offres peuvent changer. Le guide ne recommande aucun abonnement,
          ne promet aucune économie et ne remplace pas un examen des contrats,
          données et règles propres à l’entreprise. Pour approfondir la partie
          budgétaire, consultez{" "}
          <Link href="/guides/combien-coute-un-crm">
            combien coûte réellement un CRM
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
