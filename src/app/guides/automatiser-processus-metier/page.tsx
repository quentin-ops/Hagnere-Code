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
import { ProcessPriorityTool } from "./process-priority-tool";

const guide = getGuide("automatiser-processus-metier");
const breadcrumbName = "Automatiser un processus métier";

export const metadata = buildGuideMetadata(
  guide,
  "Mesurer quatre processus, écarter les mauvais candidats et lire le décompte complet sur douze mois",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Réponse",
  },
  {
    id: "mesurer",
    number: "02",
    label: "Mesurer en une semaine",
    shortLabel: "Mesurer",
  },
  {
    id: "eliminer",
    number: "03",
    label: "Écarter les candidats",
    shortLabel: "Écarter",
  },
  {
    id: "facture",
    number: "04",
    label: "Ce que la plateforme facture",
    shortLabel: "Facture",
  },
  {
    id: "decompte",
    number: "05",
    label: "Le décompte à douze mois",
    shortLabel: "Décompte",
  },
  {
    id: "tresorerie",
    number: "06",
    label: "Quand le temps ne paie pas",
    shortLabel: "Trésorerie",
  },
  {
    id: "incidents",
    number: "07",
    label: "Ce qui rate",
    shortLabel: "Incidents",
  },
  {
    id: "decision",
    number: "08",
    label: "Lancer, reporter ou renoncer",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "choix",
    num: "01",
    label: "Choisir le processus",
    items: [
      {
        question:
          "Combien de dossiers faut-il chronométrer pour obtenir une mesure utilisable\u00a0?",
        answer:
          "Vingt dossiers consécutifs donnent une moyenne solide, à condition qu’ils se suivent vraiment\u00a0: choisir les vingt dossiers les plus propres fausse tout. Le neuvième décile qu’on en tire est un ordre de grandeur, pas une statistique\u00a0: sur vingt valeurs triées, c’est la dix-huitième, et deux dossiers atypiques la déplacent. Cela suffit à dimensionner l’exception, pas à promettre un délai. Le volume, lui, se compte sur douze mois glissants dans un export, pas sur la semaine du chronométrage\u00a0: un processus saisonnier mesuré en juillet dimensionne un flux qui cassera en octobre.",
      },
      {
        question:
          "Faut-il commencer par la tâche que l’équipe déteste le plus\u00a0?",
        answer:
          "L’agacement signale une friction réelle, il ne mesure ni le volume ni le risque. Dans le cas construit de ce guide, la tâche la plus détestée pèse 32\u00a0heures par mois et se révèle le pire premier essai\u00a0: deux personnes n’en tirent pas le même résultat sur les mêmes dossiers. Chronométrez-la quand même, puis comparez-la aux autres sur les cinq mêmes questions.",
      },
      {
        question:
          "Un processus rare mais risqué mérite-t-il d’être automatisé\u00a0?",
        answer:
          "Rarement en premier. Un processus rare offre peu d’occasions d’apprendre\u00a0: si l’erreur se produit une fois par trimestre, il faut trois trimestres pour savoir si le flux tient. La réponse utile est souvent un contrôle plutôt qu’une automatisation\u00a0— une alerte, une double signature, une liste de vérification\u00a0—, financée comme une dépense de maîtrise du risque et non comme un gain de temps.",
      },
    ],
  },
  {
    key: "solution",
    num: "02",
    label: "Choisir la solution",
    items: [
      {
        question:
          "Faut-il un outil sans code ou un développement pour un premier flux\u00a0?",
        answer:
          "Prenez le moyen le moins cher à défaire. Un flux monté sur l’abonnement déjà payé se démonte sans projet\u00a0; un développement se démonte au prix d’un projet. Sur notre propre grille publique, le premier palier d’un outil interne s’affiche à 8\u00a0000\u00a0€ HT\u00a0: un processus qui rend 39,78\u00a0heures sur douze mois ne le justifie pas. Le développement se défend quand le besoin engage durablement plusieurs services et survit au changement de logiciel.",
      },
      {
        question:
          "Quand un robot d’interface reste-t-il une réponse raisonnable\u00a0?",
        answer:
          "Quand aucune interface d’échange documentée n’existe et que l’écran ne bouge pas. Un robot d’interface repère les champs par des sélecteurs, et ces sélecteurs cassent à la première mise à jour, à la première fenêtre inattendue et à la première session expirée. Comptez le retest à chaque version du logiciel piloté dans le coût annuel, sinon la comparaison avec une interface d’échange est faussée dès la première année.",
      },
      {
        question:
          "Que peut-on demander à une intelligence artificielle dans un processus\u00a0?",
        answer:
          "Traiter une entrée qui varie\u00a0: classer un message, extraire des champs d’un document scanné, rapprocher deux libellés. Constituez d’abord un jeu de cas dont vous connaissez la bonne réponse, mesurez le taux d’erreur dessus, puis décidez du contrôle humain à partir de la conséquence d’une erreur. Une erreur qui change un prix, écarte une personne ou déclenche un paiement demande une validation avant l’action, pas après.",
      },
    ],
  },
  {
    key: "suite",
    num: "03",
    label: "Coût, propriété et suite",
    items: [
      {
        question:
          "Quel coût horaire chargé faut-il retenir dans le calcul\u00a0?",
        answer:
          "Le vôtre, pas une moyenne. L’INSEE publie 44,70\u00a0€ pour l’ensemble des secteurs marchands en 2025, mais son champ ne couvre que les entreprises de dix salariés ou plus, apprentis inclus. Votre expert-comptable sort le vôtre de la déclaration sociale nominative. Retenez qu’il ne change jamais le signe d’un calcul dont tous les postes sont du temps interne\u00a0: il ne fait qu’en changer l’échelle.",
      },
      {
        question:
          "Que devient le flux quand la personne qui l’a créé quitte l’entreprise\u00a0?",
        answer:
          "Un flux automatisé ou planifié utilise toujours les limites de son propriétaire, quel que soit l’événement qui le déclenche. L’éditeur décrit ensuite un flux devenu «\u00a0orphelin\u00a0», qui peut échouer si ses connexions tiennent au compte parti, et demande de lui assigner un co-propriétaire. L’arrêt discret, sans exécution donc sans erreur, est le cas que sa documentation ne couvre pas. Nommez un suppléant, transférez les connexions vers un compte de service et surveillez l’absence d’exécution, pas seulement les exécutions en erreur.",
      },
      {
        question:
          "Quand faut-il une analyse d’impact avant de lancer le flux\u00a0?",
        answer:
          "Une analyse d’impact relative à la protection des données est requise lorsqu’un traitement de données personnelles est susceptible d’engendrer un risque élevé pour les droits et libertés, et cette question se tranche avant la mise en œuvre. L’usage d’une automatisation ou d’une intelligence artificielle ne suffit ni à conclure qu’elle est requise, ni à l’écarter. Posez la question au responsable du traitement et au délégué à la protection des données avant l’essai, pas après.",
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
          { label: "Guide décisionnel 2026", variant: "dark" },
          {
            label: "Exemple construit, pas un dossier client",
            variant: "neutral",
          },
          { label: "Dirigeants et DSI de PME", variant: "neutral" },
          { label: "Calcul local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Quel processus métier"
        heroTitleEm="automatiser"
        heroTitleSuffix={"en premier\u00a0?"}
        heroDescription={"Le plus gros gisement d’heures peut être le plus mauvais endroit où commencer. Ce guide le montre sur un exemple construit\u00a0— volumes, durées, effectif et facture moyenne choisis pour la démonstration, rien de relevé chez un client\u00a0: sur quatre processus, celui qui pèse 32\u00a0heures par mois est à écarter, et celui qui n’en pèse que 12 est le seul dont on saura prouver le résultat. Son décompte sort à −546\u00a0€ sur douze mois, et ne repasse au-dessus de zéro qu’au bout de 21,3\u00a0mois."}
        stats={[
          { label: "Exemple construit · processus", value: "4" },
          { label: "Coût horaire retenu (INSEE)", value: "44,70\u00a0€" },
          { label: "Écart à douze mois", value: "−546\u00a0€" },
          { label: "Équilibre du même flux", value: "21,3\u00a0mois" },
          { label: "Seuil de bascule mensuel", value: "118\u00a0relances" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Cadrage sans solution imposée",
          titleStart: "Faire relire",
          titleEm: "vos quatre mesures",
          description:
            "Apportez le volume compté sur douze mois, le chronométrage de vingt dossiers et vos réponses aux cinq questions. Le premier échange peut conclure qu’il ne faut rien automatiser cette année.",
          benefits: [
            "Le volume et le temps sont vérifiés avant l’outil",
            "Les fonctions déjà payées restent une réponse valable",
            "Le décompte se refait avec vos propres nombres",
          ],
          primaryCtaLabel: "Voir le service outils internes",
          primaryCtaHref: "/services/outils-internes-sur-mesure",
        }}
        toc={toc}
        tocLabel="Sommaire de la décision"
        mobileCtaLabel="Faire relire mes mesures"
        sidebarContextCta={{
          eyebrow: "Outils internes sur mesure",
          title: "Vous hésitez entre un flux monté en interne et un projet\u00a0?",
          description:
            "Décrivez le déclencheur, le volume mensuel, les logiciels concernés et trois dossiers qui sortent de l’ordinaire, sans donnée personnelle.",
          benefits: [
            "Aucune solution décidée d’avance",
            "Les cas difficiles sont chiffrés avant l’architecture",
            "Le coût de sortie est écrit dès le devis",
          ],
          ctaLabel: "Décrire mon processus",
          ctaHref: "/demarrer-un-projet",
          badgeLabel: "Premier échange sans engagement de faisabilité",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Ce qu’on demande avant",
          titleEm: "d’automatiser",
          titleEnd: "un processus.",
          subtitle:
            "Nombre de dossiers à chronométrer, tâche la plus détestée, processus rares, outils sans code, robots d’interface, intelligence artificielle, coût horaire, propriété du flux et analyse d’impact.",
          ctaTitle: "Un point encore ouvert sur votre premier processus\u00a0?",
          ctaDescription:
            "Décrivez le volume compté, le temps chronométré et les logiciels concernés, sans transmettre de donnée sensible.",
          ctaLabel: "Décrire mon processus",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "INSEE · coût horaire du travail selon l’activité",
            href: "https://www.insee.fr/fr/statistiques/2381340",
            description:
              "Chiffres-clés parus le 2 juillet 2026, consultés le 30 août 2026\u00a0: 44,70\u00a0€ en 2025 pour l’ensemble des secteurs marchands (secteurs B à N de la Nace), entreprises de 10\u00a0salariés ou plus, apprentis inclus\u00a0; 47,70\u00a0€ dans l’industrie, 39,90\u00a0€ dans la construction, 44,20\u00a0€ dans les services marchands. Source\u00a0: Eurostat (extraction du 12 juin 2026), coûts annuels de la main-d’œuvre. La note de la page précise que les coûts horaires «\u00a0entre deux années d’enquête européenne sur le coût de la main-d’œuvre sont estimés par les États membres puis révisés\u00a0»\u00a0: le chiffre de 2025 est une estimation révisable, pas un résultat d’enquête définitif.",
          },
          {
            source:
              "Banque de France · Observatoire des délais de paiement, rapport 2024",
            href: "https://www.banque-france.fr/system/files/2025-07/ODP-2024.pdf",
            description:
              "Publié en juillet 2025, consulté le 30 août 2026\u00a0: retard de paiement moyen de 13,6\u00a0jours au quatrième trimestre 2024 pour les entreprises françaises, contre 13,4\u00a0jours en moyenne européenne, en hausse d’environ un jour sur un an.",
          },
          {
            source:
              "Microsoft Learn · limites et allocations de requêtes Power Platform",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/api-request-limits-allocations",
            description:
              "Page du 14 août 2026, consultée le 30 août 2026\u00a0: 6\u00a0000\u00a0requêtes par utilisateur et par 24\u00a0heures sous licence Microsoft\u00a0365, 40\u00a0000 avec Power Automate Premium, 250\u00a0000 pour la licence «\u00a0Processus Power Automate\u00a0» (250k par licence), +50\u00a0000 par module complémentaire de capacité. Les actions en échec, les nouvelles tentatives et la pagination sont comptabilisées\u00a0; les quotas ne se reportent pas d’un jour sur l’autre\u00a0; un flux automatisé utilise les limites de son propriétaire.",
          },
          {
            source: "Microsoft Learn · FAQ sur les licences Power Automate",
            href: "https://learn.microsoft.com/fr-fr/power-platform/admin/power-automate-licensing/faqs",
            description:
              "Page du 14 août 2026, consultée le 30 août 2026\u00a0: «\u00a0Dans Power Automate, chaque exécution de déclencheur et d’action compte comme une seule action\u00a0»\u00a0; «\u00a0Un flux simple avec un déclencheur et une action entraîne deux actions chaque fois que le flux s’exécute\u00a0»\u00a0; «\u00a0Chaque action compte comme un, y compris l’action de boucle elle-même\u00a0». C’est cette page, et non celle des limites, qui range le déclencheur parmi les requêtes comptées\u00a0: elle fonde les neuf étapes du flux de relance.",
          },
          {
            source: "Zapier · comment l’usage des tâches est mesuré",
            href: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier",
            description:
              "Page mise à jour le 21 août 2026, consultée le 30 août 2026\u00a0: seules les actions réussies comptent, les déclencheurs, filtres et chemins ne comptent pas, les actions en erreur non plus\u00a0; rejouer une exécution entière refait tourner les étapes déjà réussies et les recompte.",
          },
          {
            source: "Zapier · grille tarifaire",
            href: "https://zapier.com/pricing",
            description:
              "Relevée le 30 août 2026, plan Professional en facturation annuelle\u00a0: 19,99\u00a0$ pour 750\u00a0tâches par mois, 49\u00a0$ pour 2\u00a0000, 89\u00a0$ pour 5\u00a0000, 489\u00a0$ pour 100\u00a0000. Montants en dollars, hors conversion et hors taxes locales\u00a0; un seul éditeur, cité comme échantillon daté et non comme prix de marché.",
          },
          {
            source: "France Num · l’automatisation, une solution",
            href: "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution",
            description:
              "Dossier public mis à jour le 9 juillet 2026\u00a0: inventorier les tâches répétitives, mesurer fréquence et durée, tenir compte de la complexité, de l’impact d’une erreur, des tests et de la maintenance. Les recommandations d’outils et de prix qu’il contient ne sont pas reprises ici.",
          },
          {
            source: "CNIL · guide de la sécurité des données personnelles",
            href: "https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf",
            description:
              "Édition 2024\u00a0: tests avec des données fictives ou anonymisées, habilitations, journalisation, sauvegardes testées et continuité. Guide horizontal, à adapter au risque réel du traitement.",
          },
          {
            source: "CNIL · analyse d’impact relative à la protection des données",
            href: "https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd",
            description:
              "Une analyse d’impact est requise lorsqu’un traitement est susceptible d’engendrer un risque élevé pour les droits et libertés des personnes\u00a0; le besoin s’apprécie avant la mise en œuvre. Le recours à une automatisation ne permet ni de conclure, ni d’écarter.",
          },
          {
            source: "Microsoft Learn · éléments d’interface des flux de bureau",
            href: "https://learn.microsoft.com/fr-fr/power-automate/desktop-flows/ui-elements",
            description:
              "Documentation éditeur sur les sélecteurs qui repèrent les champs d’un écran piloté par un robot d’interface\u00a0: ils dépendent de la structure de l’application et doivent être retestés après chaque évolution.",
          },
          {
            source:
              "Microsoft Learn · gérer les flux orphelins lorsque le propriétaire quitte l’organisation",
            href: "https://learn.microsoft.com/fr-fr/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org",
            description:
              "Page du 11 juin 2026, consultée le 30 août 2026\u00a0: «\u00a0Un flux orphelin est un flux qui n’a plus de propriétaire valide. Ces flux peuvent échouer s’ils utilisent des connexions liées à ce compte d’utilisateur.\u00a0» La remédiation décrite est d’attribuer un nouveau co-propriétaire. L’éditeur documente donc des échecs\u00a0: l’arrêt sans aucune exécution en erreur du troisième incident de la section\u00a007 est une hypothèse du cas construit, et la section le dit.",
          },
          {
            source: "Hagnéré Code · tarifs publics",
            href: "/tarifs",
            description:
              "Grille relevée le 30 août 2026\u00a0: audit des processus internes 990\u00a0€ HT (1\u00a0jour), Discovery Sprint 1\u00a0500\u00a0€ HT (2\u00a0jours, déduit si la phase suivante est lancée), outils internes 8\u00a0000 / 25\u00a0000 / 80\u00a0000\u00a0€ HT, maintenance avec un repère indicatif de 2\u00a0500\u00a0€ HT par mois. Repères publics et indicatifs\u00a0: le devis signé fixe le prix ferme.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title: "Une méthode de mesure, pas un audit de votre système",
          description:
            "Ce guide ne valide ni licence, ni conformité, ni sécurité, ni faisabilité. Les prix des éditeurs, les quotas de plateforme et les données publiques citées évoluent\u00a0: revérifiez-les à votre date de lecture. Un traitement de données personnelles, une décision automatisée à effet important ou un système critique appelle votre délégué à la protection des données, votre responsable sécurité ou un conseil juridique.",
        }}
        relatedGuides={[
          {
            label: "Besoin d’un logiciel métier\u00a0: le diagnostic en 6 réponses",
            href: "/guides/signes-besoin-logiciel-metier",
          },
          {
            label: "Power Apps ou application sur mesure\u00a0?",
            href: "/guides/power-apps-ou-application-sur-mesure",
          },
          {
            label: "Le plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
        ]}
        relatedGuidesLabel="3 guides complémentaires"
      >
        {/*
          Durées de section : la somme fait exactement le readTimeMin du
          registre, seule valeur que lisent le hub, les données structurées et
          le bandeau. Le hub affichait 21 minutes et la page en totalisait 24 ;
          le lecteur comptait l'écart lui-même en descendant.

          Mesure de référence : `npx tsx scripts/measure-guide-readtime.mjs
          automatiser-processus-metier` sur l'article rendu, blocs exclus et
          `sr-only` retirés — mesure refaite le 30/08/2026 à 23 h 33, après la
          correction des écarts de sourçage : 4 195 mots, soit 20,975 minutes à
          200 mots par minute, donc 21. Décompte par section, au même débit :
            01 réponse      373 mots  1,865
            02 mesurer      353 mots  1,765
            03 écarter      495 mots  2,475
            04 facture      523 mots  2,615
            05 décompte     783 mots  3,915
            06 trésorerie   449 mots  2,245
            07 incidents    801 mots  4,005
            08 décision     418 mots  2,090
                          4 195 mots 20,975
          Les 21 minutes sont réparties au plus fort reste : parties entières
          1+1+2+2+3+2+4+2 = 17, puis les quatre minutes restantes vont aux
          quatre plus fortes décimales (0,915 · 0,865 · 0,765 · 0,615), soit
          décompte, réponse, mesurer et facture. Résultat 2+2+2+3+4+2+4+2 = 21,
          la même répartition qu'avant correction : la section 07 a franchi les
          quatre minutes pleines, et ce qu'elle ne prend plus au reste, elle le
          prenait déjà par sa décimale. Toute réécriture qui déplace des
          paragraphes d'une section à l'autre demande de relancer le script et
          de refaire cette répartition, pas d'ajuster un chiffre au jugé.
        */}
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="2 min"
          title="Commencez par le processus dont vous prouverez le résultat en un mois"
        >
          <p>
            La ressaisie la plus visible attire l’œil et absorbe le budget. Ce
            guide le montre sur un exemple construit&nbsp;: un négoce de
            matériel électrique dont les volumes, les durées et l’effectif sont
            choisis pour la démonstration, non relevés chez un client. Les
            commandes y arrivent en PDF par courriel&nbsp;: 320&nbsp;par mois,
            32&nbsp;heures de saisie. C’est le plus gros tas, et le plus mauvais
            endroit où commencer.
          </p>
          <p>
            <strong>
              Prenez en premier le processus dont vous pourrez prouver le
              résultat en un mois&nbsp;: une règle qui n’a pas bougé depuis un
              an, une source qui fait foi, une erreur qui se répare pour rien,
              et deux noms écrits en face du flux.
            </strong>{" "}
            Le nombre d’heures arbitre en dernier.
          </p>
          <p>
            Sur les quatre processus chronométrés ici, le classement par heures
            donne 32, 25, 21 et 12&nbsp;heures par mois. Celui qui passe les
            cinq questions de la section&nbsp;03 est le dernier. Son décompte
            sur douze mois sort à <strong>−546&nbsp;€</strong>&nbsp;: il ne se
            paie pas en temps gagné dans l’année. Il s’équilibre à
            21,3&nbsp;mois, et se paie plus tôt&nbsp;— ou jamais&nbsp;— sur
            l’encaissement, que la section&nbsp;06 apprend à mesurer.
          </p>

          <GuidePremiumCase
            initial="90"
            eyebrow="Fil rouge du guide · exemple construit"
            title={"Quatre processus, 90\u00a0heures par mois, un seul qu’on saura prouver"}
          >
            <p>
              <em>
                Exemple construit&nbsp;: les volumes, les durées, l’effectif, la
                ville et la facture moyenne sont choisis pour la démonstration
                et ne viennent d’aucune source&nbsp;; seuls le coût horaire de
                l’INSEE, les quotas des éditeurs et les montants de notre grille
                publiée sont repris de sources citées. Ce n’est pas un dossier
                client.
              </em>{" "}
              Un négoce de matériel électrique de 26&nbsp;salariés à Nancy.
              Nadia, responsable administration des ventes, travaille avec un
              comptable, deux chargés d’affaires et un magasinier. Quatre
              processus y sont comptés sur douze mois puis chronométrés trois
              semaines&nbsp;: 320&nbsp;commandes clients, 60&nbsp;devis de
              dépannage, 140&nbsp;fiches d’intervention et 90&nbsp;relances de
              factures échues par mois.
            </p>
            <p>
              Ensemble, ces quatre lignes consomment 90&nbsp;heures par mois.
              Nous les suivrons jusqu’au décompte à douze mois, puis jusqu’aux
              trois incidents que ce choix rend bon marché.
            </p>
          </GuidePremiumCase>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/guides/automatiser-processus-metier/article-processus-16x9.webp"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), 760px"
              alt="Un flux part d’une pile de documents, franchit un contrôle, puis se divise en trois chemins — un traitement automatique, une alerte reprise par une personne et une validation humaine avant le document final"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 sm:px-5">
              Un premier flux contrôlable garde une voie manuelle et une
              validation identifiable avant la sortie.
            </figcaption>
          </figure>

        </GuidePremiumSection>

        <GuidePremiumSection
          id="mesurer"
          number="02"
          label="Mesure"
          readingTime="2 min"
          title={"Comment mesurer un processus en une semaine, sans consultant\u00a0?"}
        >
          <p>
            Le volume réel d’un processus se lit dans un export, pas dans une
            estimation de réunion. Comptez d’abord, chronométrez ensuite&nbsp;:
            une semaine, aucun outil que vous n’ayez déjà.
          </p>

          <h3>Compter le volume sur douze mois glissants</h3>
          <p>
            Trois exports suffisent&nbsp;: la balance âgée du logiciel
            comptable, une ligne par facture avec sa date d’échéance et sa date
            de règlement&nbsp;; l’export CSV de la boîte partagée&nbsp;; la
            table des commandes de l’ERP. Un tableau croisé qui compte les
            lignes par mois donne la courbe. Prenez douze mois
            glissants&nbsp;: une mesure faite en juillet dimensionne un flux qui
            cassera en octobre.
          </p>

          <h3>Chronométrer vingt dossiers consécutifs</h3>
          <p>
            Vingt dossiers consécutifs, deux colonnes tenues par la personne
            qui fait le travail&nbsp;: heure de début, heure de fin. Ni minuteur
            imposé, ni observateur derrière l’épaule. Trois valeurs en
            sortent&nbsp;: la moyenne, utile pour additionner. La médiane décrit
            le cas courant. Le neuvième décile décrit le dossier anormal, celui
            qui déclenche le coup de téléphone.
          </p>
          <p>
            Dix dossiers suffisent à le montrer. Huit passent en
            3&nbsp;minutes, deux s’enlisent 30&nbsp;minutes&nbsp;:
            84&nbsp;minutes au total, 8,4&nbsp;minutes de moyenne,
            3&nbsp;minutes de médiane. Automatisez parfaitement les huit cas
            simples et vous retirez 24&nbsp;minutes sur 84, soit
            28,6&nbsp;%. «&nbsp;80&nbsp;% des dossiers&nbsp;» ne veut pas dire
            «&nbsp;80&nbsp;% du temps&nbsp;»&nbsp;: seule la seconde formulation
            se convertit en heures.
          </p>

          <GuideTable
            caption="Les quatre processus du cas construit, comptés sur douze mois et chronométrés sur trois semaines"
            headers={[
              "Processus",
              "Cas par mois",
              "Temps moyen",
              "Neuvième décile",
              "Heures par mois",
            ]}
            rows={[
              [
                "Commandes clients reçues par courriel",
                "320",
                "6\u00a0min",
                "22\u00a0min",
                "32\u00a0h",
              ],
              [
                "Devis de dépannage",
                "60",
                "25\u00a0min",
                "70\u00a0min",
                "25\u00a0h",
              ],
              [
                "Fiches d’intervention",
                "140",
                "9\u00a0min",
                "26\u00a0min",
                "21\u00a0h",
              ],
              [
                "Relances de factures échues",
                "90",
                "8\u00a0min",
                "15\u00a0min",
                "12\u00a0h",
              ],
            ]}
          />

          <p>
            La colonne des heures se calcule avec le temps moyen&nbsp;: c’est la
            seule des trois valeurs qui s’additionne. Une médiane multipliée par
            un volume ne donne rien d’exploitable. Le neuvième décile, lui, sert
            à dimensionner l’exception&nbsp;: sur les commandes, 22&nbsp;minutes
            contre 6 en moyenne, près de quatre fois plus. C’est dans cet écart
            que se logent les cas particuliers, ceux qu’un flux devra renvoyer
            vers une personne.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="eliminer"
          number="03"
          label="Sélection"
          readingTime="2 min"
          title={"Quelles conditions éliminent un candidat avant tout calcul\u00a0?"}
        >
          <p>
            Une grille de notation additionne gain, fréquence et complexité, et
            laisse un gain élevé racheter une erreur irrattrapable. Les cinq
            questions ci-dessous ne s’additionnent pas&nbsp;: une seule réponse
            négative écarte le candidat.
          </p>

          <GuideTable
            caption={"Cinq questions qui ne se compensent pas\u00a0: une seule réponse négative suffit à écarter"}
            headers={[
              "La question",
              "Le test qui y répond",
              "Ce qu’on fait si la réponse est non",
            ]}
            rows={[
              [
                "Deux personnes produisent-elles le même résultat sur les mêmes dossiers\u00a0?",
                "Faire retraiter 10\u00a0dossiers déjà clos, séparément, par deux personnes, puis comparer les sorties",
                "Écrire la règle et la faire valider avant de parler d’outil",
              ],
              [
                "La règle a-t-elle tenu douze mois sans exception nouvelle\u00a0?",
                "Relire 12\u00a0mois de messages qui ont modifié la procédure, et dater la dernière exception",
                "Observer six semaines de plus, ou n’automatiser que la partie stable",
              ],
              [
                "Une seule source fait-elle foi, et se lit-elle autrement qu’à l’écran\u00a0?",
                "Demander un export ou une interface d’échange documentée, puis ouvrir soi-même les 20\u00a0premières lignes",
                "Nettoyer les données, ou accepter le coût de retest d’un robot d’interface",
              ],
              [
                "Une erreur se voit-elle le jour même et se répare-t-elle sans doublon\u00a0?",
                "Provoquer un échec au milieu du flux, le rejouer, puis compter les sorties produites\u00a0: 1, jamais 2",
                "Concevoir l’état d’attente et la reprise avant d’écrire la première action",
              ],
              [
                "Deux noms sont-ils écrits, celui qui tient la règle et celui qui reçoit l’alerte\u00a0?",
                "Ouvrir la fiche de décision et y chercher 2\u00a0prénoms",
                "Nommer les deux, ou renoncer\u00a0: un flux sans propriétaire s’arrête sans témoin",
              ],
            ]}
          />

          <p>
            Reprenons les quatre lignes du cas. Les commandes échouent à la
            première&nbsp;: sur dix commandes rejouées séparément, le comptable
            et le magasinier retiennent une référence différente trois fois,
            parce que quarante clients envoient quarante mises en page. Les
            devis échouent à la deuxième&nbsp;: la remise dépend de la marge et
            de l’historique commercial, règle qui a bougé deux fois dans
            l’année. Les fiches d’intervention échouent à la troisième&nbsp;:
            l’ERP n’expose aucune interface documentée. Restent les relances de
            factures échues, dernières au classement des heures et seules à
            passer les cinq questions.
          </p>

          <InfoBox
            variant="blue"
            title="Écarter un candidat ne veut pas dire ne rien faire"
          >
            <p>
              Sur les devis, le logiciel peut préparer le document, chercher
              les prix et signaler que la remise dépasse le seuil. Il n’accorde
              pas la remise&nbsp;: la frontière passe entre préparer une
              décision et la prendre.
            </p>
          </InfoBox>

          <GuidePremiumMemo
            eyebrow="Sept réponses au même processus"
            title="L’automatisation n’est que la quatrième de la liste"
          >
            <ul>
              <li>
                <strong>Supprimer l’étape.</strong> Une validation que personne
                ne lit, une double saisie née d’un ancien logiciel.
              </li>
              <li>
                <strong>Activer une fonction déjà payée.</strong> Le module de
                relance de votre logiciel comptable existe peut-être déjà.
              </li>
              <li>
                <strong>Brancher une interface d’échange documentée.</strong>{" "}
                Moins de pièces à surveiller qu’un flux, quand elle existe.
              </li>
              <li>
                <strong>Monter un flux sans code.</strong> Le bon choix pour un
                premier essai&nbsp;: il se démonte sans projet.
              </li>
              <li>
                <strong>Piloter un écran par un robot d’interface.</strong>{" "}
                Quand aucune interface n’existe, avec son coût de retest.
              </li>
              <li>
                <strong>Développer.</strong> Quand plusieurs équipes, plusieurs
                règles et plusieurs logiciels sont en jeu durablement.
              </li>
              <li>
                <strong>Garder la décision humaine.</strong> Une réponse
                complète, pas un échec.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="facture"
          number="04"
          label="Coût de la plateforme"
          readingTime="3 min"
          title="Ce que votre plateforme facture derrière chaque dossier"
        >
          <p>
            Le budget dérape sur un décalage d’unité&nbsp;: vous comptez des
            dossiers, la plateforme compte des actions. Un dossier qui traverse
            six étapes consomme six unités. Deux devis restent incomparables
            tant qu’on n’a pas lu leur règle de comptage.
          </p>

          <GuideTable
            caption="Deux façons de facturer le même flux, relevées le 30 août 2026"
            headers={[
              "Ce qui est compté",
              "Zapier, plan Professional",
              "Power Automate compris dans Microsoft\u00a0365",
            ]}
            rows={[
              [
                "L’unité comptée",
                "Une action qui réussit. Le déclencheur, les filtres et les chemins ne comptent pas, les actions en erreur non plus.",
                "Une requête vers un connecteur. Les actions en échec comptent, les nouvelles tentatives et la pagination aussi.",
              ],
              [
                "Ce qui est inclus",
                "750\u00a0tâches par mois pour 19,99\u00a0$, 2\u00a0000 pour 49\u00a0$, 5\u00a0000 pour 89\u00a0$, 100\u00a0000 pour 489\u00a0$, en facturation annuelle",
                "6\u00a0000\u00a0requêtes par utilisateur et par 24\u00a0heures, comprises dans la licence",
              ],
              [
                "Ce qui se passe au-delà",
                "Vous changez de palier et la facture suit",
                "Le flux est ralenti, et le quota ne se reporte pas au lendemain",
              ],
              [
                "Le piège",
                "Rejouer une exécution entière refait tourner les étapes déjà réussies, et les recompte",
                "Un flux automatisé consomme le quota de son propriétaire, pas celui de la personne qui le déclenche",
              ],
            ]}
          />

          <p>
            Appliquons la grille au flux de relance. Il compte un déclencheur,
            deux filtres et six actions. Sur 90&nbsp;relances, cela fait
            540&nbsp;actions réussies par mois chez Zapier, sous le premier
            palier de 750&nbsp;tâches affiché 19,99&nbsp;$ en facturation
            annuelle. Côté Microsoft, l’éditeur compte le déclencheur comme une
            action&nbsp;: les neuf étapes valent 810&nbsp;requêtes par mois,
            soit 27 par jour au rythme de trois relances quotidiennes, contre
            6&nbsp;000 par utilisateur et par 24&nbsp;heures. Ici l’abonnement
            du flux retenu vaut 0&nbsp;€ de plus.
          </p>

          <p>
            Ce n’est pas toujours le cas, et le franchissement est brutal. Une
            boucle qui parcourt les 320&nbsp;commandes du mois avec quatre
            actions à l’intérieur consomme 1&nbsp;280&nbsp;requêtes pour ces
            seules actions&nbsp;; quatre passages par jour font
            5&nbsp;120&nbsp;requêtes, et les nouvelles tentatives d’un
            connecteur en défaut finissent le quota. Une boucle écrite ainsi
            est d’abord un défaut à corriger&nbsp;: la filtrer sur les commandes
            du jour ramène le compteur à quelques dizaines de requêtes. Si le
            volume est réellement là, il faut une licence Power Automate
            Premium, qui monte à 40&nbsp;000&nbsp;requêtes par utilisateur et
            par jour, une licence Processus à 250&nbsp;000&nbsp;requêtes par
            flux, ou un module de capacité à 50&nbsp;000&nbsp;requêtes.
          </p>

          <p>
            Une précision que donne la page Microsoft&nbsp;: toutes les
            organisations sont encore dans une période de transition, où les
            limites appliquées sont plus larges que les officielles ci-dessus.
            Dimensionnez sur les officielles, comme l’éditeur le
            recommande&nbsp;: un flux calibré sur la tolérance du moment tombera
            le jour où elle disparaîtra. Cette section et l’incident du quota en
            section&nbsp;07 décrivent le régime officiel, pas un abonnement
            d’aujourd’hui.
          </p>

          <InfoBox
            variant="blue"
            title="Prix affiché, prix contractuel et coût complet sont trois choses"
          >
            <p>
              Les montants ci-dessus sont un échantillon daté d’un seul éditeur,
              en dollars, hors taxes locales&nbsp;: ils montrent la mécanique
              des paliers, pas un prix de marché. Relevez la grille applicable à
              votre pays le jour où vous décidez.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decompte"
          number="05"
          label="Décompte"
          readingTime="4 min"
          title="Le décompte sur douze mois, poste par poste"
        >
          <p>
            Le temps retiré d’une tâche automatisée n’est pas de l’argent
            gagné&nbsp;: une partie des cas reste manuelle, une partie contourne
            l’outil, et les minutes libérées sont parfois trop éparpillées pour
            servir. Quatre quantités se suivent, chacune retirant à la
            précédente.
          </p>

          <FormulaBox>
            {[
              "Heures actuelles   = cas par mois × minutes par cas ÷ 60 × mois",
              "Heures retirables  = heures actuelles × part techniquement retirable",
              "Heures retirées    = heures retirables × adoption moyenne",
              "Heures réaffectées = heures retirées × part réellement réemployée",
              "",
              "Valeur de capacité = heures réaffectées × coût horaire chargé",
              "Coût renseigné     = temps interne × coût horaire + abonnements × mois",
              "Écart              = valeur de capacité − coût renseigné",
            ].join("\n")}
          </FormulaBox>

          <h3>Une seule des six hypothèses vient d’une source publique</h3>
          <p>
            Un seul nombre de ce décompte vient d’une source publique. L’INSEE
            publie un coût horaire du travail de 44,70&nbsp;€ pour 2025, sur
            l’ensemble des secteurs marchands, dans les entreprises de dix
            salariés ou plus, apprentis inclus. Si vous êtes plus petit,
            remplacez-le par le vôtre, que votre expert-comptable sort de la
            déclaration sociale nominative.
          </p>
          <p>
            Les cinq autres hypothèses ne sortent d’aucune source&nbsp;:
            65&nbsp;% de temps techniquement retirable, 85&nbsp;% d’adoption
            moyenne sur douze mois, 50&nbsp;% des heures libérées confiées à un
            travail identifié, quatre jours de sept heures pour construire le
            flux, deux heures de suivi par mois. Contestez-les une par une.
            L’adoption se saisit en moyenne sur toute la période&nbsp;: en
            cible de fin, elle gonfle le résultat sans que rien ne le
            signale.
          </p>
          <p>
            Cette liste couvre le décompte à douze mois. La section&nbsp;06 en
            ajoutera quatre autres, aussi peu sourcées, et ce sont elles qui
            renversent le verdict.
          </p>

          <GuideTable
            caption={"Le décompte du flux de relance sur douze mois, au coût horaire de 44,70\u00a0€"}
            headers={["Poste", "Calcul", "Heures", "Euros"]}
            rows={[
              [
                "Temps consommé aujourd’hui",
                "90 × 8\u00a0min × 12\u00a0mois",
                "144\u00a0h",
                "—",
              ],
              [
                "Part techniquement retirable",
                "144 × 65\u00a0%",
                "93,60\u00a0h",
                "—",
              ],
              [
                "Après adoption moyenne",
                "93,60 × 85\u00a0%",
                "79,56\u00a0h",
                "—",
              ],
              [
                "Réaffecté à un travail identifié",
                "79,56 × 50\u00a0%",
                "39,78\u00a0h",
                "1\u00a0778,17\u00a0€",
              ],
              [
                "Construction du flux, en interne",
                "4\u00a0jours de 7\u00a0heures",
                "28\u00a0h",
                "1\u00a0251,60\u00a0€",
              ],
              [
                "Suivi et corrections",
                "2\u00a0h × 12\u00a0mois",
                "24\u00a0h",
                "1\u00a0072,80\u00a0€",
              ],
              [
                "Abonnement de la plateforme",
                "Compris dans Microsoft\u00a0365, sous le quota",
                "—",
                "0\u00a0€",
              ],
              [
                "Écart sur douze mois",
                "39,78\u00a0h rendues contre 52\u00a0h dépensées",
                "−12,22\u00a0h",
                "−546,23\u00a0€",
              ],
            ]}
          />

          <h3>Les trois leviers qui déplacent vraiment l’écart</h3>
          <p>
            Quand tous les postes sont du temps interne, le calcul se réduit à
            une comparaison d’heures&nbsp;: 39,78&nbsp;heures rendues contre
            52&nbsp;heures dépensées. Le coût horaire multiplie les deux côtés à
            l’identique&nbsp;— il ne change jamais le signe du résultat, il n’en
            change que l’ampleur. Discuter du taux en comité ne déplacera rien.
          </p>
          <p>
            Le volume d’abord&nbsp;: il faudrait 118&nbsp;relances par mois,
            soit 28 de plus qu’aujourd’hui, pour que le flux s’équilibre sur
            douze mois. Le suivi ensuite&nbsp;: ramenez les deux heures
            mensuelles à une seule et l’écart remonte de −546,23&nbsp;€ à
            −9,83&nbsp;€. Le flux ne se paie toujours pas, il arrête simplement
            de coûter.
          </p>
          <p>
            L’horizon enfin, et c’est le levier que vous choisissez. Douze mois
            est une durée de comparaison, pas une propriété du flux&nbsp;: les
            heures rendues s’accumulent, la construction ne se paie qu’une fois.
            Aux mêmes hypothèses, le flux rend 79,56&nbsp;heures en vingt-quatre
            mois contre 76&nbsp;dépensées, soit <strong>+159&nbsp;€</strong>,
            puis 119,34&nbsp;heures contre 100 en trente-six mois, soit{" "}
            <strong>+864&nbsp;€</strong>. L’équilibre tombe à
            21,3&nbsp;mois&nbsp;— le délai que le calculateur ci-dessous affiche
            déjà. Le «&nbsp;−546&nbsp;€&nbsp;» du bandeau est donc un verdict
            d’horizon&nbsp;: ce flux ne se rembourse pas en un an, ce qui ne
            veut pas dire jamais. Calez la période sur la durée pendant laquelle
            la règle du processus a des chances de tenir.
          </p>

          <InfoBox
            variant="emerald"
            title="Ce que notre propre grille dit contre nous"
          >
            <p>
              Un flux qui rend 39,78&nbsp;heures sur douze mois ne justifie pas
              le premier palier de notre grille d’outils internes, affiché{" "}
              <Link href="/tarifs">8&nbsp;000&nbsp;€ HT</Link>&nbsp;— et
              allonger l’horizon n’y change rien, puisqu’il dégage 864&nbsp;€
              sur trois ans. Il se monte en interne, sur l’abonnement déjà payé.
              Le développement se défend quand le besoin dépasse durablement un
              service et un logiciel, et notre grille impose alors un cadrage
              payé au-delà de 8&nbsp;000&nbsp;€ HT de projet&nbsp;:
              1&nbsp;500&nbsp;€ HT et deux jours, déduits si la phase suivante
              est lancée. Ce sont des repères publics et indicatifs&nbsp;; le
              devis signé fixe le prix ferme.
            </p>
          </InfoBox>

          <p>
            Le calculateur ci-dessous applique ces formules et s’ouvre sur le
            dossier déjà résolu, suivi compris&nbsp;— deux heures par mois, soit
            89,40&nbsp;€. Remplacez chaque champ par vos mesures.
          </p>

          <ProcessPriorityTool />

          <p>
            Une limite avant de vous fier à son verdict&nbsp;: cet outil ne
            compte que des heures. L’argent encaissé plus tôt, objet de la
            section suivante, n’y entre pas&nbsp;— d’où le «&nbsp;à simplifier,
            reporter ou traiter autrement&nbsp;» qu’il affiche, quand la
            section&nbsp;06 remonte le même flux à +768&nbsp;€.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="tresorerie"
          number="06"
          label="Autre mesure"
          readingTime="2 min"
          title={"Quand le temps ne paie pas, que reste-t-il à mesurer\u00a0?"}
        >
          <p>
            Un écart de −546&nbsp;€ à douze mois ne clôt pas le dossier&nbsp;:
            il dit que ce flux ne se rembourse pas en heures dans l’année. Sur
            une relance de factures, une seconde grandeur se mesure et n’oblige
            pas à attendre&nbsp;— l’argent qui rentre plus tôt.
          </p>
          <p>
            Quatre nombres entrent ici sans venir d’une source&nbsp;: la facture
            moyenne de 1&nbsp;850&nbsp;€ TTC, les quatre jours gagnés sur le
            retard et les deux taux essayés plus bas, tous choisis pour
            l’exemple. Seul le retard de paiement moyen est publié.
          </p>
          <p>
            Le rapport 2024 de l’Observatoire des délais de paiement, publié
            par la Banque de France en juillet&nbsp;2025, mesure un retard de
            paiement moyen de 13,6&nbsp;jours au quatrième trimestre&nbsp;2024
            en France, contre 13,4&nbsp;jours en moyenne européenne, en hausse
            d’environ un jour sur un an. Une relance partie le jour de
            l’échéance agit exactement sur ce retard.
          </p>
          <p>
            Trois lignes suffisent. Les 90&nbsp;factures relancées
            chaque mois pèsent 1&nbsp;850&nbsp;€ TTC en moyenne, soit
            166&nbsp;500&nbsp;€ par mois et 1&nbsp;998&nbsp;000&nbsp;€ sur
            l’année. Divisé par 365, chaque jour de décalage immobilise
            5&nbsp;474&nbsp;€. Gagner quatre jours sur le retard moyen libère
            donc <strong>21&nbsp;896&nbsp;€</strong> de trésorerie, une fois.
          </p>
          <p>
            Ce montant n’est pas un profit&nbsp;: c’est un besoin de financement
            qui disparaît, et sa valeur annuelle vaut le taux auquel vous
            financez ce besoin&nbsp;— découvert autorisé ou affacturage, écrit
            sur votre convention de compte. À 6&nbsp;%, elle vaut
            1&nbsp;314&nbsp;€ par an et l’écart passe de −546&nbsp;€ à
            +768&nbsp;€. À 3&nbsp;%, elle vaut 657&nbsp;€ et l’écart tombe à
            +111&nbsp;€. Si votre trésorerie dort sur un compte non rémunéré,
            elle ne vaut rien et l’écart reste à −546&nbsp;€. La section&nbsp;07
            chiffre ses incidents à 6&nbsp;% avec la même formule&nbsp;: montant
            décalé × taux annuel × jours de retard ÷ 365.
          </p>

          <h3>Où lire les quatre jours dans la balance âgée</h3>
          <p>
            Le retard moyen se lit dans la balance âgée&nbsp;: pour chaque
            facture encaissée, le nombre de jours entre l’échéance et le
            règlement, pondéré par les montants. Le comptable en sort deux
            extractions&nbsp;: douze mois avant le flux, six mois après. Si
            l’écart n’apparaît pas, le flux ne vaut que ses heures, et la
            décision honnête est de le réduire à la préparation de la liste, ou
            de l’arrêter.
          </p>

          <InfoBox
            variant="amber"
            title="Deux gains qui s’additionnent, un qui fait doublon"
          >
            <p>
              Le temps rendu et l’argent encaissé plus tôt sont de nature
              différente&nbsp;: ils s’additionnent. Le temps rendu et une
              dépense évitée, non. Si la relance évite un intérimaire, comptez
              l’intérimaire ou les heures, jamais les deux&nbsp;: ce double
              compte fait passer un décompte du rouge au vert sans qu’une heure
              ait bougé.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incidents"
          number="07"
          label="Ce qui rate"
          readingTime="4 min"
          title="Ce qui rate, et ce que ça coûte"
        >
          <p>
            Les trois incidents ci-dessous sont construits sur le même
            dossier&nbsp;— ce ne sont pas des dossiers clients. Les deux
            premiers appliquent une règle écrite par l’éditeur&nbsp;; le
            troisième la prolonge par une hypothèse, signalée sur place. Leur
            point commun n’est pas un hasard&nbsp;: ils coûtent peu, conséquence
            directe du choix fait en section&nbsp;03.
          </p>

          <FormulaBox>
            {[
              "UNITÉS TENUES DANS TOUTE CETTE SECTION",
              "",
              "Une relance = une facture de 1\u00a0850\u00a0€ TTC, trois par jour.",
              "Deux journées coexistent dans ce guide\u00a0: ici, trois relances",
              "entières font 5\u00a0550\u00a0€\u00a0; en section\u00a006, 1\u00a0998\u00a0000 ÷ 365",
              "fait 5\u00a0474\u00a0€. Les 76\u00a0€ d’écart tiennent au mois de trente jours.",
              "Coût de financement = montant décalé × taux × jours ÷ 365, à 6\u00a0%.",
              "",
              "Un envoi suspendu N jours ne sort pas avec N jours de retard\u00a0:",
              "tout sort à la reprise, du plus ancien à N jours au dernier à un",
              "jour, soit (N + 1) ÷ 2 jours de retard en moyenne.",
            ].join("\n")}
          </FormulaBox>

          <h3>
            Le quota épuisé un mardi&nbsp;: 5&nbsp;550&nbsp;€ décalés d’un jour
          </h3>
          <p>
            Un second flux a été branché sur la même licence&nbsp;: la boucle
            chiffrée en section&nbsp;04, à elle seule 5&nbsp;120&nbsp;requêtes
            par jour. Les nouvelles tentatives d’un connecteur en défaut
            achèvent les 6&nbsp;000 de la licence. Le flux de relance, exécuté
            ensuite, n’est plus servi, et le quota ne se reporte pas au
            lendemain. Trois relances&nbsp;— le volume d’une journée&nbsp;—
            partent avec vingt-quatre heures de retard, soit
            5&nbsp;550&nbsp;€ décalés d’un jour. Chiffrez ce décalage au lieu de
            l’invoquer&nbsp;: 5&nbsp;550 × 6&nbsp;% ÷ 365 vaut{" "}
            <strong>0,91&nbsp;€</strong>. Le coût réel, c’est l’heure passée à
            comprendre&nbsp;— 44,70&nbsp;€&nbsp;— et le fait que rien n’a
            planté.
          </p>
          <p>
            Il décrit le régime officiel&nbsp;: tant que dure la période de
            transition rappelée en section&nbsp;04, les limites appliquées sont
            plus larges et les deux flux ne se disputent pas ce quota. C’est un
            incident à préparer, pas un incident d’aujourd’hui.
          </p>

          <h3>
            Le rejeu qui écrit deux fois&nbsp;: 23&nbsp;relances en double,
            199&nbsp;€ mesurables
          </h3>
          <p>
            Une panne de connecteur laisse 23&nbsp;exécutions en erreur, et
            l’administrateur les rejoue en masse. Chez Zapier, rejouer une
            exécution entière refait tourner les étapes déjà réussies&nbsp;— la
            documentation précise qu’elles sont alors recomptées. Vingt-trois
            clients reçoivent une seconde relance pour une facture réglée la
            veille. Deux heures du comptable, soit 89,40&nbsp;€. La campagne est
            ensuite suspendue quinze jours par prudence&nbsp;:
            45&nbsp;relances s’accumulent, soit 83&nbsp;250&nbsp;€, et repartent
            à la reprise avec huit jours de retard en moyenne, ce qui vaut
            109,48&nbsp;€. Total mesurable&nbsp;:{" "}
            <strong>198,88&nbsp;€</strong>. Ce qui ne se mesure pas, c’est
            l’appel du client qui demande s’il doit payer deux fois.
          </p>

          <h3>
            Le propriétaire du flux change de poste&nbsp;: 48&nbsp;relances
            jamais parties
          </h3>
          <p>
            Un flux automatisé ou planifié utilise toujours les limites de son
            propriétaire&nbsp;: il est adossé à un compte, pas à un service.
            L’éditeur ne va pas plus loin&nbsp;: il décrit un flux devenu
            orphelin qui «&nbsp;peut échouer&nbsp;» si ses connexions tiennent
            au compte parti, et demande de lui assigner un
            co-propriétaire&nbsp;— un échec se voit. La suite est une hypothèse,
            et c’est elle qui coûte cher.
            Nadia change de poste, le flux ne s’exécute plus du tout, donc rien
            n’échoue&nbsp;— et la surveillance ne regardait que les exécutions
            en erreur. Seize jours passent avant qu’un client s’étonne&nbsp;:
            48&nbsp;relances non parties, soit
            88&nbsp;800&nbsp;€ qui repartent ensemble avec 8,5&nbsp;jours de
            retard en moyenne, ce qui vaut 124,08&nbsp;€ de financement. Six
            heures pour republier le flux sous un compte de service, soit
            268,20&nbsp;€. Le montant est petit&nbsp;; les seize jours sans
            témoin ne le sont pas.
          </p>

          <p>
            Comparez avec les 320&nbsp;commandes écartées en
            section&nbsp;03&nbsp;: là, une erreur se lit en marchandise livrée
            deux fois, en avoir et en stock à reprendre. Un premier essai bien
            choisi est un essai dont les incidents sont bon marché&nbsp;— la
            vraie raison de commencer par les relances.
          </p>

          <InfoBox
            variant="blue"
            title={"L’analyse d’impact se tranche avant la mise en œuvre"}
          >
            <p>
              Si le flux traite des données personnelles, posez la question au
              responsable du traitement et au délégué à la protection des
              données la semaine du chronométrage&nbsp;: elle ne se rattrape pas
              après la mise en œuvre. La FAQ en donne le critère exact.
            </p>
          </InfoBox>

          <GuidePremiumMemo
            eyebrow="Les six situations à provoquer avant la mise en service"
            title="Un test qui n’a pas échoué en répétition échouera en production"
          >
            <ul>
              <li>
                <strong>Le même dossier reçu deux fois.</strong> La seconde
                réception ne crée pas de doublon, et la trace le montre.
              </li>
              <li>
                <strong>Un champ obligatoire absent.</strong> Le dossier attend
                dans un état visible, avec un message clair.
              </li>
              <li>
                <strong>Un accès expiré.</strong> L’action s’arrête et la bonne
                personne reçoit la cause.
              </li>
              <li>
                <strong>Un échec après une action partielle.</strong> La reprise
                n’envoie rien une seconde fois.
              </li>
              <li>
                <strong>Une absence d’exécution.</strong> Le silence déclenche
                une alerte en vingt-quatre heures.
              </li>
              <li>
                <strong>Le retour au manuel.</strong> L’équipe poursuit sans
                mélanger les dossiers.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="08"
          label="Décision"
          readingTime="2 min"
          title={"Faut-il lancer, reporter ou renoncer\u00a0?"}
        >
          <p>
            Quatre sorties sont légitimes, et une seule est un projet. Écrivez
            celle que vous retenez, avec la mesure qui la révisera.
          </p>

          <ol>
            <li>
              <strong>Lancer un essai borné.</strong> Volume limité, traitement
              manuel maintenu, date de bilan fixée, et l’indicateur qui
              tranchera écrit avant le premier cas.
            </li>
            <li>
              <strong>Réduire avant d’automatiser.</strong> Retirer une
              validation, désigner une source unique, activer une fonction déjà
              payée, puis remesurer. Si le problème disparaît, il n’y a plus
              rien à maintenir.
            </li>
            <li>
              <strong>Reporter et continuer de mesurer.</strong> Six semaines
              d’observation coûtent moins qu’un flux réécrit deux fois.
            </li>
            <li>
              <strong>Renoncer.</strong> Le décompte reste négatif sur
              l’horizon que vous vous donnez, aucune autre grandeur ne le
              compense, et personne ne veut porter l’alerte. C’est une décision,
              pas un échec.
            </li>
          </ol>

          <FormulaBox>
            {[
              "FICHE DE DÉCISION\u00a0— UNE PAGE",
              "",
              "Processus retenu et résultat qui prouve qu’il est terminé\u00a0:",
              "Volume sur douze mois, moyenne, médiane et neuvième décile\u00a0:",
              "Les cinq questions\u00a0: réponse et test qui la fonde\u00a0:",
              "Réponse retenue parmi les sept, et celles écartées\u00a0:",
              "Étapes du flux, unités facturées, heures réaffectées\u00a0:",
              "Coût horaire retenu et sa source\u00a0:",
              "Période comparée, et raison de cette durée\u00a0:",
              "Écart sur cette période, et postes encore à confirmer\u00a0:",
              "Autre grandeur mesurée, et qui tient la règle\u00a0:",
              "Date du bilan et indicateur qui tranchera\u00a0:",
            ].join("\n")}
          </FormulaBox>

          <p>
            Si vous n’êtes pas certain que le blocage justifie un outil, le{" "}
            <Link href="/guides/signes-besoin-logiciel-metier">
              diagnostic en trois situations
            </Link>{" "}
            écarte d’abord une étape inutile ou une fonction déjà payée. Après
            la fiche, trois dossiers cadrent l’exécution&nbsp;: le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges
            </Link>{" "}
            pour figer les règles et les exceptions, les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité
            </Link>{" "}
            pour décider qui voit quoi, et le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette
            </Link>{" "}
            pour rejouer les six situations de la section&nbsp;07. Si l’équipe a
            déjà monté quelque chose côté Microsoft, la comparaison porte sur{" "}
            <Link href="/guides/power-apps-ou-application-sur-mesure">
              Power Apps face à une application sur mesure
            </Link>
            . Vous pouvez aussi{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire votre processus
            </TrackedGuideCtaLink>{" "}
            à Hagnéré Code, en précisant que «&nbsp;ne rien automatiser cette
            année&nbsp;» reste une conclusion acceptable.
          </p>

          <p className="text-sm">
            <strong>Transparence.</strong> Hagnéré Code construit des outils
            internes sur mesure et perçoit des honoraires si vous retenez cette
            option&nbsp;— la sixième des sept réponses comparées ici, et celle
            que le décompte écarte sur son propre cas, à douze mois comme à
            trente-six. Rien n’exige de passer par nous&nbsp;: tout le décompte
            se refait avec vos nombres. Les données publiques, les quotas de
            plateforme et les grilles tarifaires citées ont été relevés le
            30&nbsp;août 2026 et sont à revérifier tous les douze mois. Aucun
            coût, aucun délai et aucun résultat ne sont garantis par cette
            page&nbsp;: seul un devis signé engage.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
