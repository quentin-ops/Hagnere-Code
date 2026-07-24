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

const guide = getGuide("logiciel-planning-sur-mesure");

export const metadata = buildGuideMetadata(
  guide,
  "Logiciel de planning sur mesure : tester les contraintes avant de développer",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Logiciel de planning sur mesure",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Excel peut-il encore suffire pour gérer un planning ?",
    answer:
      "Oui. Excel peut rester adapté si le planning est simple, peu partagé, contrôlable et si une personne sait vérifier les conflits. Sécurisez les droits, la version publiée, les sauvegardes et les validations. Changez d’outil lorsque les règles, intégrations ou modifications deviennent durablement impossibles à maîtriser.",
  },
  {
    question: "Combien coûte un logiciel de planning sur mesure ?",
    answer:
      "Le coût dépend des ressources, règles, interfaces, rôles, notifications, historique, sécurité et exploitation. Comparez sur 36 mois le standard, son paramétrage, ses licences et ses connexions avec la préparation, le développement, l’hébergement, la maintenance et la sortie du sur-mesure. Une estimation sérieuse exige vos scénarios.",
  },
  {
    question:
      "Un logiciel sur mesure optimise-t-il automatiquement le planning ?",
    answer:
      "Non. Il faut choisir ce que signifie « mieux » : moins de retard, de trajet, d’heures supplémentaires ou de changement tardif, par exemple. Les contraintes, données et arbitrages doivent être explicites. Un logiciel peut appliquer des règles sans garantir le meilleur planning possible.",
  },
  {
    question: "Comment intégrer les règles de temps de travail ?",
    answer:
      "Recensez les règles réellement applicables à l’entreprise, leur source et leurs exceptions, puis faites-les valider par les personnes compétentes en droit social et en ressources humaines. Ne codez pas un délai ou une durée trouvés dans un article comme règle universelle : accords, convention, secteur et situation peuvent modifier l’analyse.",
  },
  {
    question: "Peut-on géolocaliser les salariés dans le planning ?",
    answer:
      "Pas par défaut. Il faut une finalité légitime, une mesure nécessaire et proportionnée, une information adaptée et des garanties. La CNIL exclut notamment certains usages de surveillance permanente ou hors temps de travail. Demandez une analyse DPO ou juridique avant d’ajouter cette fonction.",
  },
  {
    question:
      "Peut-on connecter le planning au logiciel de gestion (ERP), au logiciel RH (SIRH) ou à la paie ?",
    answer:
      "Oui, si les outils proposent des interfaces adaptées. Définissez la source de chaque donnée : commandes dans l’ERP, absences dans le SIRH, affectations dans le planning, temps validés vers la paie. Testez les erreurs, doublons et suppressions ; une API disponible ne garantit pas une intégration simple.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "15 conflits testés",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "Règles ou préférences",
    description: "",
    color: "violet",
  },
  {
    number: "03",
    title: "Standard d’abord",
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
    href: "/guides/transformer-excel-en-application",
    label: "Décider si Excel doit devenir une application",
  },
  {
    href: "/guides/application-gestion-interventions-terrain",
    label: "Organiser toute la gestion des interventions",
  },
  {
    href: "/guides/application-suivi-production-pme",
    label: "Suivre la production d’une PME",
  },
  {
    href: "/guides/connecter-erp-crm-logiciel-metier",
    label: "Relier le planning aux autres logiciels",
  },
];

const tocItems = [
  { id: "absence", label: "Partir d’une absence urgente" },
  { id: "quoi", label: "Définir ce que vous planifiez" },
  { id: "regles", label: "Séparer règles et préférences" },
  { id: "quinze-cas", label: "Écrire quinze conflits" },
  { id: "tester", label: "Tester l’existant et deux standards" },
  { id: "integrations", label: "Vérifier les entrées et sorties" },
  { id: "publication", label: "Distinguer brouillon et planning publié" },
  { id: "droit", label: "Encadrer temps de travail et géolocalisation" },
  { id: "cout", label: "Comparer le coût et l’adoption" },
  { id: "verdict", label: "Choisir parmi cinq verdicts" },
  { id: "sources", label: "Sources et limites" },
];

const conflictScenarios = [
  [
    "Deux tâches au même horaire",
    "Le même salarié ou équipement est affecté deux fois.",
  ],
  ["Absence", "Une absence validée rend une affectation impossible."],
  [
    "Compétence obligatoire",
    "La mission exige une habilitation détenue par peu de personnes.",
  ],
  ["Équipement indisponible", "Le véhicule ou la machine est en maintenance."],
  [
    "Capacité dépassée",
    "Le nombre d’heures ou de places dépasse la limite définie.",
  ],
  [
    "Urgence après publication",
    "Une mission prioritaire doit être insérée sans cacher les conséquences.",
  ],
  [
    "Trajet impossible",
    "Deux sites sont trop éloignés pour l’enchaînement prévu.",
  ],
  [
    "Préférence contrariée",
    "Un souhait de l’équipe entre en conflit avec une règle obligatoire.",
  ],
  [
    "Demande de changement",
    "Une personne propose un échange qui doit être validé.",
  ],
  [
    "Brouillon visible",
    "Une version non validée ne doit pas devenir la consigne de l’équipe.",
  ],
  [
    "Notification manquante",
    "Une modification publiée n’est pas reçue par la personne concernée.",
  ],
  [
    "Absence modifiée dans le SIRH",
    "Le planning doit détecter une donnée source devenue différente.",
  ],
  [
    "Commande annulée dans l’ERP",
    "L’affectation liée doit être revue sans perdre l’historique.",
  ],
  [
    "Export et historique",
    "Une seconde personne doit comprendre qui a changé quoi et quand.",
  ],
  [
    "Retour à la version précédente",
    "Une publication erronée doit pouvoir être retirée proprement.",
  ],
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
          { label: "Logiciel de planning sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Une absence peut obliger à refaire le planning, rappeler l’équipe et vérifier les véhicules. Avant de commander un développement, faites passer quinze conflits à votre outil actuel et à deux solutions standard."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes sur les logiciels de planning"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Exemple illustratif fictif : imaginez que, lundi à 7 h 30, un
          technicien soit absent. Vous ouvrez Excel, appelez quatre personnes,
          déplacez un véhicule et découvrez qu’une ancienne version du planning
          circule encore. Faut-il acheter un logiciel ou créer le vôtre ? Une
          contrainte est une règle que le planning doit respecter, comme une
          compétence obligatoire, une absence ou un équipement indisponible.
          Écrivez quinze conflits que l’outil doit détecter. Gardez Excel si le
          planning reste maîtrisé et peu partagé. Choisissez un standard s’il
          traite vos règles sans contournement majeur. Connectez-le aux autres
          logiciels si le problème vient de données dispersées. Ne développez
          que si des règles métier stables et décisives restent impossibles à
          exprimer. Reportez le projet si personne ne distingue une règle
          obligatoire d’une préférence. Le sur-mesure peut appliquer vos
          décisions ; il ne peut pas définir un bon planning à votre place.
        </p>

        <InfoBox variant="emerald" title="La réponse en une phrase">
          Testez quinze conflits identiques dans l’outil actuel et dans deux
          standards ; ne financez un développement que pour les règles stables
          qui restent réellement bloquantes après ce test.
        </InfoBox>

        <GuideToc items={tocItems} />

        <h2 id="absence">
          Une absence révèle trois problèmes, pas forcément un manque de
          logiciel
        </h2>
        <p>
          Reprenez l’incident du lundi. L’absence était-elle connue dans le
          logiciel RH ? Le planning savait-il qu’elle rendait l’affectation
          impossible ? Une personne pouvait-elle modifier puis publier une
          nouvelle version ? L’équipe a-t-elle reçu cette version ? Les réponses
          orientent vers des solutions différentes.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          <section className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
              Donnée
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              L’absence n’arrive pas au planning
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Une intégration ou une procédure de synchronisation peut suffire.
            </p>
          </section>
          <section className="rounded-2xl border border-violet-200 bg-violet-50/50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
              Règle
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              L’outil accepte une affectation impossible
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Il faut paramétrer ou développer une règle de conflit testable.
            </p>
          </section>
          <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
              Organisation
            </p>
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Trois versions sont envoyées
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              La validation, la publication et la notification doivent être
              clarifiées avant une refonte.
            </p>
          </section>
        </div>

        <p>
          En traitant ces problèmes séparément, vous évitez de commander « un
          planning intelligent » alors qu’une seule connexion ou une règle de
          publication répond à l’essentiel de la douleur.
        </p>

        <h2 id="quoi">Définissez ce que vous planifiez réellement</h2>
        <p>
          Le mot planning est trop large pour devenir un cahier des charges. Une
          entreprise planifie peut-être des horaires de salariés, une autre des
          interventions chez des clients, une troisième des ordres sur des
          machines et une quatrième des salles. Choisissez une unité principale
          et nommez le résultat attendu.
        </p>

        <GuideTable
          caption="Quatre familles de planning à ne pas mélanger"
          headers={[
            "Famille et objet",
            "Question de décision",
            "Point de départ",
          ]}
          rows={[
            [
              "Équipe — horaires, postes ou équipes, absences et compétences.",
              "Qui peut travailler, quand et selon quelles règles ?",
              "Ce guide, avec revue RH/juridique selon les règles.",
            ],
            [
              "Interventions — techniciens, clients, véhicules, tournées et comptes rendus.",
              "Qui intervient où, puis que se passe-t-il sur le terrain ?",
              "Application de gestion des interventions terrain.",
            ],
            [
              "Production — ordres, machines, capacité, matières et étapes.",
              "Quand produire et comment suivre l’avancement ?",
              "Application de suivi de production PME.",
            ],
            [
              "Projet ou ressource — personnes, salles, équipements ou budgets.",
              "Quelle ressource est disponible pour quelle tâche ?",
              "À définir selon le processus réel.",
            ],
          ]}
        />

        <p>
          Si votre besoin inclut navigation hors ligne, photos, signature,
          compte rendu et facturation, le sujet dépasse le moteur de planning :
          consultez le guide de l’{" "}
          <Link href="/guides/application-gestion-interventions-terrain">
            application de gestion des interventions terrain
          </Link>
          . Si le problème principal est l’avancement des ordres et les rejets,
          partez de l’{" "}
          <Link href="/guides/application-suivi-production-pme">
            application de suivi de production
          </Link>
          .
        </p>

        <h2 id="regles">Séparez les règles obligatoires des préférences</h2>
        <p>
          Une règle obligatoire rend une affectation impossible : une personne
          absente ne peut pas être planifiée, un contrôle exige une
          habilitation, deux tâches ne peuvent pas utiliser le même véhicule au
          même moment. Une préférence améliore le résultat mais peut céder :
          limiter un trajet, conserver une équipe habituelle ou respecter un
          souhait de créneau.
        </p>

        <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <section>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-300">
                Règle obligatoire
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                « Cette intervention exige l’habilitation H2V et le véhicule V3
                doit être disponible. » Si l’une manque, l’outil bloque ou exige
                une décision autorisée et tracée.
              </p>
            </section>
            <section>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                Préférence
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                « Si possible, confier la mission à l’équipe qui connaît déjà le
                site. » L’outil peut proposer un autre choix si l’urgence ou les
                contraintes l’exigent.
              </p>
            </section>
          </div>
        </div>

        <p>
          Pour chaque règle, ajoutez un exemple qui doit passer, un exemple qui
          doit être bloqué, une exception éventuelle et la personne autorisée à
          la valider. Une règle que l’équipe ne sait pas expliquer ne doit pas
          devenir du code. Commencez par la clarifier ou la laisser manuelle.
        </p>

        <h2 id="quinze-cas">
          Écrivez quinze conflits avant de regarder une démonstration
        </h2>
        <p>
          Utilisez des noms, clients et horaires entièrement fictifs. Chaque
          scénario contient l’état de départ, l’action, le résultat attendu et
          la manière de le vérifier. Une solution peut réussir quatorze cas et être écartée si
          le quinzième correspond à une règle quotidienne et bloquante ; le
          résultat n’est donc pas une simple note sur quinze.
        </p>

        <div className="not-prose my-8 grid gap-3 sm:grid-cols-2">
          {conflictScenarios.map(([title, description], index) => (
            <section
              key={title}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-xs font-bold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mb-0 mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="Ne transformez pas le test en appel d’offres de cent pages"
        >
          Commencez avec les conflits qui ont réellement créé des appels, des
          retards ou des erreurs. Si une fonction ne change aucune décision,
          retirez-la du premier test.
        </InfoBox>

        <h2 id="tester">
          Faites passer les mêmes cas à l’outil actuel et à deux standards
        </h2>
        <p>
          Testez d’abord Excel, l’agenda ou le logiciel déjà utilisé. Vous
          découvrirez parfois qu’une validation, une protection de cellules et
          une vraie version publiée suffisent. Choisissez ensuite deux solutions
          standards adaptées à votre famille de planning. Configurez-les avec
          les données fictives et exigez que la démonstration utilise vos quinze
          scénarios, pas le parcours parfait du vendeur.
        </p>

        <p>
          Des outils du marché annoncent déjà de nombreuses fonctions.
          PlanningPME présente un{" "}
          <a
            href="https://www.planningpme.fr/logiciel-planning.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            logiciel de planning de ressources
          </a>
          . Visual Planning couvre plusieurs usages et publie une{" "}
          <a
            href="https://www.visual-planning.com/fr/interfaces/api-visual-planning"
            target="_blank"
            rel="noopener noreferrer"
          >
            interface de programmation pour ressources et événements
          </a>
          . Odoo propose une{" "}
          <a
            href="https://www.odoo.com/fr_FR/app/planning"
            target="_blank"
            rel="noopener noreferrer"
          >
            application Planning intégrée à sa suite
          </a>
          . Ces pages sont des sources primaires sur les fonctions annoncées,
          pas des preuves indépendantes d’adéquation à votre métier.
        </p>

        <GuideTable
          caption="Lire le résultat du test sans favoriser une option"
          headers={["Résultat", "Interprétation", "Prochaine action"]}
          rows={[
            [
              "L’outil actuel réussit les cas importants.",
              "Le problème venait surtout de la méthode ou des versions.",
              "Le sécuriser et ne pas investir davantage.",
            ],
            [
              "Un standard réussit les règles mais demande des ressaisies.",
              "Le moteur convient ; les données sont dispersées.",
              "Étudier l’intégration avant le sur-mesure.",
            ],
            [
              "Un standard nécessite une configuration raisonnable.",
              "La fonction existe mais la démonstration par défaut ne suffisait pas.",
              "Chiffrer paramétrage, formation et maintenance.",
            ],
            [
              "Plusieurs règles stables et critiques restent impossibles.",
              "Un spécifique peut être justifié.",
              "Décrire et chiffrer seulement ces règles et leur exploitation.",
            ],
          ]}
        />

        <h2 id="integrations">
          Vérifiez d’où arrivent les données et où repart le planning
        </h2>
        <p>
          Une absence peut naître dans le logiciel RH (SIRH), une commande dans
          le logiciel de gestion (ERP), une maintenance dans le logiciel de
          maintenance (GMAO) et une disponibilité dans le planning. Pour
          chaque donnée, nommez une seule source de vérité et le sens de
          synchronisation. Testez aussi une annulation, une donnée incomplète et
          un second passage du même événement.
        </p>

        <p>
          Visual Planning annonce par exemple des API REST et SOAP permettant de
          lire, créer, modifier ou supprimer des ressources et événements et
          d’interfacer ERP, CRM ou SIRH. Avant de retenir cette option, demandez
          la documentation applicable à l’offre réelle, les droits, les limites,
          le coût, le support et un test avec votre scénario. « Une API existe »
          ne veut pas dire « l’intégration est immédiate ».
        </p>

        <p>
          Lorsque plusieurs systèmes échangent déjà des données, utilisez le
          guide{" "}
          <Link href="/guides/connecter-erp-crm-logiciel-metier">
            connecter ERP, CRM et logiciel métier
          </Link>{" "}
          pour décider qui crée, modifie et corrige chaque information.
        </p>

        <h2 id="publication">
          Distinguez le brouillon, le planning validé et la modification urgente
        </h2>
        <p>
          Beaucoup de conflits humains ne viennent pas du calcul, mais de la
          version. Définissez trois états visibles :
        </p>
        <ol>
          <li>
            <strong>brouillon</strong> : le planificateur prépare et teste, sans
            donner de consigne à l’équipe ;
          </li>
          <li>
            <strong>validé</strong> : une personne autorisée confirme que les
            règles et arbitrages sont acceptés ;
          </li>
          <li>
            <strong>publié</strong> : les personnes concernées reçoivent la
            version et peuvent confirmer qu’elles l’ont vue.
          </li>
        </ol>

        <p>
          Une urgence après publication crée une nouvelle version, conserve
          l’ancienne et explique ce qui change. L’outil doit montrer qui a
          décidé, quand et pourquoi. Cette trace ne sert pas à surveiller chaque
          geste ; elle permet de comprendre la consigne en cas de désaccord ou
          d’incident.
        </p>

        <h2 id="droit">
          Ne codez pas le droit du travail ou la géolocalisation à partir d’un
          résumé
        </h2>
        <p>
          Les horaires, repos, délais de prévenance et exceptions dépendent de
          la situation, du droit applicable, des accords et parfois de la
          convention collective.{" "}
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F75"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service-Public détaille l’aménagement des horaires
          </a>{" "}
          et expose des règles propres à certains cas. Sa page sur la{" "}
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1911"
            target="_blank"
            rel="noopener noreferrer"
          >
            durée du travail d’un salarié majeur à temps plein du secteur privé
          </a>{" "}
          rappelle également durées, repos et dérogations pour les cas qu’elle traite.
          Utilisez ces sources pour identifier les questions, puis faites
          valider les règles propres à l’entreprise.
        </p>

        <InfoBox
          variant="amber"
          title="La géolocalisation n’est pas une fonction par défaut"
        >
          La{" "}
          <a
            href="https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL encadre la géolocalisation des véhicules des salariés
          </a>{" "}
          : finalité légitime, nécessité, proportionnalité, accès, information
          et conservation doivent être examinés ; certains usages de
          surveillance permanente ou hors temps de travail ne sont pas admis. Si
          votre besoin exige cette fonction, demandez une revue DPO ou juridique
          avant de la concevoir.
        </InfoBox>

        <p>
          La CNIL complète cette fiche par sa page générale du 9 juillet 2026
          sur le{" "}
          <a
            href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
            target="_blank"
            rel="noopener noreferrer"
          >
            contrôle de l’activité des personnes employées
          </a>
          . Elle rappelle que tout dispositif doit avoir un objectif légitime,
          rester proportionné et être porté à la connaissance des personnes
          concernées. Vérifiez ces principes avant de transformer un besoin
          d’organisation en outil de surveillance.
        </p>

        <p>
          La meilleure réponse peut être de ne pas suivre la position. Une zone,
          un statut saisi par le technicien, un horaire de départ prévu ou une
          confirmation d’arrivée peuvent parfois répondre au besoin avec moins
          de données. Testez cette alternative avant d’ajouter une carte en
          temps réel.
        </p>

        <h2 id="cout">Comparez le coût sur 36 mois et l’effort d’adoption</h2>
        <p>
          Pour un standard, comptez licences, paramétrage, migration,
          intégrations, formation, administration et sortie. Pour le sur-mesure,
          ajoutez préparation, conception, développement, hébergement, sécurité,
          tests, support, maintenance, évolutions et transfert. Dans les deux
          cas, mesurez aussi le temps que le planificateur et l’équipe passent à
          corriger ou confirmer.
        </p>

        <FormulaBox>
          {`Coût estimé sur 36 mois =
licences ou développement initial
+ paramétrage et migration
+ intégrations
+ formation et conduite du changement
+ hébergement, maintenance et support
+ temps de planification et correction
+ sortie ou transfert`}
        </FormulaBox>

        <p>
          Mesurez quatre semaines ordinaires et une période tendue. Distinguez
          création du planning, modification, appels de confirmation et
          correction d’erreurs. Si vous valorisez du temps gagné, précisez s’il
          est réellement supprimé, réaffecté ou économisé. Ne promettez pas un
          retour sur investissement à partir d’une démonstration.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.francenum.gouv.fr/files/2026-03/guide-numerique-des-entreprises_edition-2026_mars-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guide numérique des entreprises 2026 de France Num
          </a>{" "}
          rappelle plus largement l’importance de la démarche, du choix, de la
          conduite du changement et de la sécurité. Un outil techniquement
          capable peut échouer si les personnes ne comprennent ni les règles ni
          la version qu’elles doivent suivre.
        </p>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          L’entreprise, les personnes et les résultats ci-dessous sont inventés.
          Cet exemple ne décrit ni un client ni un projet réalisé par Hagnéré
          Code.
        </InfoBox>

        <p>
          Une société fictive de contrôle affecte des techniciens et des
          véhicules. Un logiciel standard réussit treize scénarios sur quinze.
          Il gère les absences, conflits et versions, mais ne traite pas une
          règle rare de double habilitation et ne reçoit pas les commandes de
          l’ERP dans le format attendu.
        </p>
        <p>
          La direction ne lance pas une application complète. Elle vérifie
          d’abord si la double habilitation peut être configurée. Si ce n’est
          pas le cas, elle étudie un petit contrôle relié à l’API et une
          intégration des commandes. Le standard reste le moteur du planning.
          Aucun gain, coût, délai ni résultat d’optimisation n’est déduit de cet
          exemple.
        </p>

        <h2 id="verdict">Cinq verdicts, dont garder Excel ou reporter</h2>
        <div className="not-prose my-8 grid gap-4">
          {[
            {
              title: "Sécuriser l’outil actuel",
              text: "Les cas importants passent. Clarifiez droits, sauvegarde, validation et version publiée ; aucun nouveau logiciel n’est nécessaire.",
              color:
                "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20",
            },
            {
              title: "Acheter un standard",
              text: "Les règles sont communes, les quinze cas réussissent et le coût d’adoption reste acceptable.",
              color:
                "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20",
            },
            {
              title: "Standard + intégration",
              text: "Le planning fonctionne, mais les absences, commandes ou affectations doivent circuler sans ressaisie.",
              color:
                "border-violet-200 bg-violet-50/50 dark:border-violet-900 dark:bg-violet-950/20",
            },
            {
              title: "Développer un planning spécifique",
              text: "Plusieurs règles stables, fréquentes et critiques restent impossibles, et l’entreprise finance l’exploitation du produit.",
              color:
                "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20",
            },
            {
              title: "Reporter",
              text: "Les règles changent, les responsabilités sont floues ou le problème principal se situe après l’affectation. Stabilisez le processus d’abord.",
              color:
                "border-rose-200 bg-rose-50/50 dark:border-rose-900 dark:bg-rose-950/20",
            },
          ].map((item) => (
            <section
              key={item.title}
              className={`rounded-2xl border p-5 sm:p-6 ${item.color}`}
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        <p>
          Votre action cette semaine ne demande aucun devis : écrivez les quinze
          scénarios avec un planificateur et une personne qui reçoit le
          planning. Exécutez-les dans l’outil actuel. Vous verrez si le besoin
          est une règle, une donnée, une publication ou un produit plus large.
          Une aide extérieure devient utile pour écrire les règles, tester les
          standards, concevoir l’intégration ou estimer un développement. Elle
          est inutile si le planning reste simple ou si l’équipe n’a pas encore
          décidé qui arbitre.
        </p>

        <GuideInlineCTA
          title="Clarifier les règles que votre planning doit vraiment gérer"
          description="Apportez vos quinze scénarios, vos sources de données et les conflits les plus coûteux. Nous pouvons comparer outil actuel, standard, intégration et sur-mesure — y compris recommander de ne rien développer."
          tags={[
            "Standard testé d’abord",
            "Règles explicites",
            "Alternative simple possible",
          ]}
          ctaLabel="Décrire mon planning"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources, portée et limites</h2>
        <p>
          Les fonctions de logiciels standards citées proviennent des pages
          officielles de{" "}
          <a
            href="https://www.planningpme.fr/logiciel-planning.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            PlanningPME
          </a>
          ,{" "}
          <a
            href="https://www.visual-planning.com/fr/interfaces/api-visual-planning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Planning
          </a>{" "}
          et{" "}
          <a
            href="https://www.odoo.com/fr_FR/app/planning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odoo Planning
          </a>
          , consultées le 23 juillet 2026. Elles décrivent les offres de leurs
          éditeurs ; elles ne prouvent ni l’adéquation à votre entreprise, ni un
          gain, ni une intégration sans effort.
        </p>
        <p>
          Les repères sur le temps de travail viennent de{" "}
          <a
            href="https://www.service-public.gouv.fr/particuliers/vosdroits/F75"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service-Public
          </a>{" "}
          et ceux sur la géolocalisation de la{" "}
          <a
            href="https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL
          </a>
          , complétés par sa page générale sur le{" "}
          <a
            href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
            target="_blank"
            rel="noopener noreferrer"
          >
            contrôle de l’activité des personnes employées
          </a>
          . Ce guide ne remplace pas un conseil en droit social, une analyse de
          protection des données ou une analyse propre à votre secteur. Les règles applicables
          doivent être confirmées avant d’être automatisées.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
