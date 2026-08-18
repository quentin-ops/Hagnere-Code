import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { TmaTcoCalculator } from "@/components/guides/TmaTcoCalculator";
import { formatGuideDate, getGuide } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("tma-ou-regie");

export const metadata = buildGuideMetadata(
  guide,
  "TMA ou régie : coûts renseignés, seuils et couverture sur douze mois",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "TMA ou régie",
);

const faqItems = [
  {
    question: "Une TMA est-elle forcément facturée au forfait ?",
    answer:
      "Non. La TMA décrit la maintenance confiée à un tiers ; elle n’impose pas à elle seule un prix fixe. Le contrat peut prévoir une capacité récurrente, du temps consommé, des lots clairement définis ou une combinaison. Il faut lire les règles de priorité, de consommation et d’acceptation, pas seulement le titre de l’offre.",
  },
  {
    question: "La régie signifie-t-elle qu’il n’y a aucun engagement ?",
    answer:
      "Non. Une prestation payée au temps doit tout de même préciser les personnes autorisées à demander du travail, le suivi du temps, les points d’arrêt, les accès, la sécurité, les résultats à remettre et les conditions de sortie. « Régie » ne dispense pas d’un contrat compréhensible.",
  },
  {
    question: "Quel modèle coûte le moins cher ?",
    answer:
      "Aucun modèle n’est toujours le moins cher. Une capacité mal dimensionnée peut laisser du temps inutilisé ; du temps mal piloté peut dériver ; un lot fixé trop tôt peut accumuler les changements. Comparez les offres sur les mêmes demandes et comptez aussi le temps de décision et de validation de votre équipe.",
  },
  {
    question: "Trois mois de demandes suffisent-ils pour décider ?",
    answer:
      "Trois mois constituent un point de départ pratique, pas une règle universelle. Ajoutez une période plus longue si votre activité est saisonnière, si une migration récente a créé des incidents inhabituels ou si les demandes importantes sont rares. Le but est de représenter le fonctionnement normal de l’application.",
  },
  {
    question: "Peut-on utiliser plusieurs modèles pour la même application ?",
    answer:
      "Oui. Une capacité récurrente peut couvrir les corrections et l’entretien, du temps piloté peut servir à explorer une demande incertaine, et un lot séparé peut livrer une évolution clairement définie. La facture et les responsabilités doivent distinguer ces familles.",
  },
  {
    question: "Comment contrôler une prestation payée au temps ?",
    answer:
      "Demandez une demande identifiée, une estimation ou un point d’arrêt, le temps réellement mobilisé, ce qui a été fait, ce qui reste incertain et la décision suivante. Le nombre d’heures seul ne dit pas si l’entreprise a obtenu une correction, une explication ou seulement de nouvelles questions.",
  },
  {
    question:
      "Faut-il signer si personne dans l’entreprise ne peut prioriser les demandes ?",
    answer:
      "Mieux vaut d’abord nommer une personne responsable ou limiter la mission à un diagnostic court, avec un point d’arrêt. Sans interlocuteur capable d’expliquer le besoin, de choisir l’ordre et d’accepter le résultat, une prestation au temps comme un forfait risque de produire des attentes contradictoires.",
  },
];

const requestFields = [
  {
    field: "Demande",
    question:
      "Que veut la personne, ou quel dysfonctionnement rencontre-t-elle ?",
    entry: "Une phrase par correction ou évolution réellement reçue.",
  },
  {
    field: "Fréquence",
    question:
      "Cette demande est-elle isolée, mensuelle, hebdomadaire ou continue ?",
    entry:
      "Conservez les répétitions, mais ne décidez pas sur ce nombre seul : une demande rare peut arrêter l’activité et dix demandes mineures rester faciles à planifier.",
  },
  {
    field: "Impact et continuité",
    question:
      "Que se passe-t-il pour l’entreprise, combien de temps l’interruption peut-elle durer et pendant quelles plages faut-il être couvert ?",
    entry:
      "Décrivez le blocage, la durée acceptable et les horaires utiles ; ne recopiez pas seulement « urgent ».",
  },
  {
    field: "Résultat vérifiable",
    question: "Que faudra-t-il observer pour accepter le travail ?",
    entry: "Un comportement, un document produit ou un scénario réussi.",
  },
  {
    field: "Taille connue",
    question:
      "Le travail est-il suffisamment défini, encore à explorer ou dépendant d’un tiers ?",
    entry: "Écrivez « à explorer » lorsque vous ne savez pas encore.",
  },
  {
    field: "Dépendances",
    question:
      "Un éditeur, un hébergeur, une API ou une validation bloque-t-il le travail ?",
    entry: "Nommez le tiers et la décision qu’il doit fournir.",
  },
  {
    field: "Responsable interne",
    question: "Qui choisit la priorité et qui accepte le résultat ?",
    entry: "Une personne nommée par rôle, disponible aux moments nécessaires.",
  },
  {
    field: "Première façon de payer à vérifier",
    question:
      "Jours réservés, temps réellement utilisé, prix pour un résultat défini ou report ?",
    entry:
      "Une première hypothèse à discuter, jamais une étiquette automatique.",
  },
];

const sampleRequests = [
  [
    "Anomalies d’export PDF qui reviennent",
    "Capacité récurrente",
    "Le besoin de correction et de prévention revient, même si l’ordre change. À la fin, le document s’ouvre, contient les données convenues et peut être utilisé par l’équipe.",
  ],
  [
    "Recherche parfois lente, cause inconnue",
    "Diagnostic limité — prix fixe ou temps utilisé jusqu’à un plafond convenu",
    "Il faut acheter une conclusion limitée avant de promettre une correction. Une note remet les mesures, les faits confirmés, les causes écartées, les inconnues restantes et la décision d’arrêter ou de préparer la suite.",
  ],
  [
    "Validation d’un responsable avant l’envoi",
    "Lot clairement défini",
    "Le parcours, les rôles et les cas d’acceptation sont descriptibles : les profils autorisés valident ou refusent, et l’envoi reste bloqué tant que la décision manque.",
  ],
  [
    "Refaire un tableau de bord sans utilisateur ni décision identifiés",
    "Report",
    "L’entreprise ne sait pas qui utilisera l’écran ni quelle action il doit faciliter. Elle interroge d’abord les utilisateurs et choisit la décision à soutenir avant d’acheter du développement.",
  ],
];

const sharedControls = [
  {
    title: "Une entrée claire",
    body: "Chaque intervention part d’une demande identifiable, d’un demandeur et d’un résultat attendu ou d’une question à explorer.",
  },
  {
    title: "Une personne qui décide",
    body: "L’entreprise nomme qui fixe l’ordre, autorise le travail et accepte ou refuse ce qui est remis.",
  },
  {
    title: "Un suivi compréhensible",
    body: "Le prestataire relie le temps, la correction ou le lot à la demande concernée et explique la décision suivante.",
  },
  {
    title: "Des accès maîtrisés",
    body: "Les comptes sont nominatifs, ouverts pour le besoin réel, retirés lorsqu’ils ne sont plus nécessaires et les interventions importantes sont tracées.",
  },
  {
    title: "Une fin observable",
    body: "Une correction ou une évolution produit un résultat vérifiable. Un diagnostic remet les faits établis, les inconnues restantes et la décision d’arrêter, de continuer ou de préparer une livraison.",
  },
  {
    title: "Une sortie possible",
    body: "L’entreprise sait récupérer ses informations, ses accès et les éléments utiles pour continuer avec une autre organisation.",
  },
];

const alternatives = [
  {
    title: "Intervenir seulement au besoin",
    fit: "Quelques demandes rares, contournables et sans besoin de réponse immédiate.",
    warning:
      "Vous acceptez le délai pour retrouver une personne disponible, lui redonner le contexte et rouvrir les accès.",
  },
  {
    title: "Garder ou recruter la compétence en interne",
    fit: "Le travail revient assez souvent pour occuper une compétence et l’entreprise sait l’encadrer.",
    warning:
      "Comparez le coût chargé, les congés, les spécialités manquantes, la documentation et le risque de dépendre d’une seule personne.",
  },
  {
    title: "Remplacer ou retirer l’application",
    fit: "La fin de support, l’obsolescence, le coût cumulé ou l’absence d’usage rendent la maintenance peu défendable.",
    warning:
      "Comparez la migration, la continuité, l’archivage, les données, les obligations et le coût de sortie avant d’arrêter.",
  },
];

const downtimeScenarios = [
  [
    "Simple",
    "5 personnes × 35 €/h × 2 h × 50 % ; aucune contribution perdue.",
    "175 €",
  ],
  [
    "Central",
    "15 personnes × 45 €/h × 4 h × 60 % + 2 000 € de contribution non récupérée.",
    "3 620 €",
  ],
  [
    "Exigeant",
    "50 personnes × 55 €/h × 8 h × 70 % + 20 000 € de contribution non récupérée.",
    "35 400 €",
  ],
];

const monthlyCapacityRows = [
  ["Janvier", "5 j", "5 utilisés · 3 perdus · 0 en dépassement"],
  ["Février", "7 j", "7 utilisés · 1 perdu · 0 en dépassement"],
  ["Mars", "6 j", "6 utilisés · 2 perdus · 0 en dépassement"],
  ["Avril", "9 j", "8 utilisés · 0 perdu · 1 en dépassement"],
  ["Mai", "6 j", "6 utilisés · 2 perdus · 0 en dépassement"],
  ["Juin", "7 j", "7 utilisés · 1 perdu · 0 en dépassement"],
  ["Juillet", "5 j", "5 utilisés · 3 perdus · 0 en dépassement"],
  ["Août", "7 j", "7 utilisés · 1 perdu · 0 en dépassement"],
  ["Septembre", "10 j", "8 utilisés · 0 perdu · 2 en dépassement"],
  ["Octobre", "6 j", "6 utilisés · 2 perdus · 0 en dépassement"],
  ["Novembre", "10 j", "8 utilisés · 0 perdu · 2 en dépassement"],
  ["Décembre", "12 j", "8 utilisés · 0 perdu · 4 en dépassement"],
  ["Total", "90 j", "81 utilisés · 15 perdus · 9 en dépassement"],
];

const quarterlyCapacityRows = [
  ["Janvier à mars", "18 j", "18 utilisés · 6 perdus · 0 en dépassement"],
  ["Avril à juin", "22 j", "21 utilisés · 3 perdus · 1 en dépassement"],
  ["Juillet à septembre", "22 j", "20 utilisés · 4 perdus · 2 en dépassement"],
  ["Octobre à décembre", "28 j", "22 utilisés · 2 perdus · 6 en dépassement"],
  ["Total", "90 j", "81 utilisés · 15 perdus · 9 en dépassement"],
];

const tcoComparisonRows = [
  [
    "Formule hybride",
    "74 100 € de prestataire + 6 240 € de temps consacré par votre équipe.",
    "80 340 €",
  ],
  [
    "Capacité de 8 j/mois avec report annuel",
    "72 000 € de jours réservés + 9 360 € de temps interne. Les 90 jours utiles peuvent être répartis sur l’année.",
    "81 360 €",
  ],
  [
    "Temps réellement mobilisé",
    "90 j × 800 € = 72 000 € ; 5 h internes/semaine × 52 × 60 € = 15 600 €.",
    "87 600 €",
  ],
  [
    "Capacité de 8 j/mois sans report",
    "72 000 € de jours réservés + 9 j de dépassement × 850 € + 9 360 € de temps interne.",
    "89 010 €",
  ],
  [
    "Lots clairement définis",
    "79 800 € pour les trois familles de travaux + 12 480 € de temps interne.",
    "92 280 €",
  ],
  [
    "Interventions ponctuelles",
    "90 j utiles + 6 j de remise en contexte à 850 € + 21 840 € de temps consacré par votre équipe.",
    "103 440 €",
  ],
  [
    "Compétence internalisée",
    "102 000 € de coût chargé, outils et relais + 6 240 € de temps d’encadrement.",
    "108 240 € de trésorerie",
  ],
];

const capacityCarryRows = [
  [
    "Aucun report entre les mois",
    "81 jours utilisés · 15 perdus · 9 jours de dépassement à 850 €",
    "89 010 €",
  ],
  [
    "Report à l’intérieur de chaque trimestre",
    "86 jours utilisés · 10 perdus · 4 jours de dépassement à 850 €",
    "84 760 €",
  ],
  [
    "Mutualisation sur toute l’année",
    "90 jours utilisés · 6 inutilisés · aucun dépassement",
    "81 360 €",
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
          { label: "TMA ou régie" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Forfait mensuel, jours consommés ou formule mixte ? Comparez le même flux sur douze mois, le temps de votre équipe et le prix d’une panne."
        heroAction={{
          href: "#comparatif-couts",
          label: "Comparer les coûts",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "7",
            title: "options chiffrées",
            description: "",
            color: "blue",
          },
          {
            number: "2",
            title: "seuils de bascule",
            description: "",
            color: "violet",
          },
          {
            number: "3",
            title: "coûts de panne",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/contrat-tma-application",
            label: "Vérifier un contrat TMA d’application",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Construire le budget annuel de maintenance",
          },
          {
            href: "/guides/reprendre-maintenance-site-autre-agence",
            label: "Préparer la reprise depuis un autre prestataire",
          },
        ]}
        faqTitle="Questions fréquentes sur la TMA et la régie"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Vous comparez un forfait mensuel avec une offre facturée au jour.
            Laquelle coûtera le moins cher sans laisser votre application sans
            suivi ?
          </strong>{" "}
          La <strong>TMA</strong> — la maintenance confiée à un prestataire —
          peut être facturée au forfait, au temps, par lot ou avec plusieurs
          règles. La « régie » désigne généralement du temps réellement utilisé
          : ce n’est donc pas l’opposé d’une TMA. Pour choisir, partez de vos
          demandes réelles : bugs récurrents, évolutions, temps de votre équipe
          et coût d’une panne. Notre avis : réservez quelques jours chaque mois
          pour les corrections qui reviennent ; faites chiffrer séparément les
          évolutions bien définies ; payez seulement le temps utilisé, jusqu’au
          plafond convenu, quand la demande est rare ou encore incertaine. Le
          guide compare sept options sur le même exemple fictif de 90 jours et
          vous montre quand le verdict change.
        </p>

        <InfoBox variant="emerald" title="La réponse courte">
          <p className="m-0">
            Une TMA peut être payée au forfait, au temps, par lot ou avec
            plusieurs règles. Comparez sur le même historique le prestataire, le
            temps passé par votre équipe à trier, décider et vérifier, la mise
            en route, la sortie et ce qui reste à votre risque. Ne réservez pas
            des jours chaque mois uniquement parce que le mot « maintenance »
            figure sur le devis. Et gardez ouvertes les options moins
            commerciales : intervention au besoin, compétence interne,
            remplacement ou retrait de l’application.
          </p>
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "definitions",
              label: "1. TMA et régie ne désignent pas la même chose",
            },
            {
              id: "options",
              label:
                "2. Vérifiez d’abord si un contrat récurrent est nécessaire",
            },
            {
              id: "historique",
              label: "3. Commencez par trois mois de demandes réelles",
            },
            {
              id: "choisir",
              label: "4. Choisissez comment payer chaque demande",
            },
            {
              id: "hybride",
              label: "5. Combinez les règles lorsque les demandes diffèrent",
            },
            {
              id: "tco",
              label: "6. Comparez sept options sur douze mois",
            },
            {
              id: "seuils",
              label: "7. Testez les seuils qui renversent le verdict",
            },
            {
              id: "panne",
              label: "8. Chiffrez ce que vaut réellement une couverture",
            },
            {
              id: "controles",
              label:
                "9. Gardez les mêmes règles de contrôle dans chaque modèle",
            },
            {
              id: "reclassement",
              label: "10. Reclassez maintenant vos demandes de maintenance",
            },
            {
              id: "comparer",
              label: "11. Comparez les propositions sur le même historique",
            },
            {
              id: "signer",
              label: "12. Décidez s’il faut signer, remplacer ou attendre",
            },
            {
              id: "accompagnement",
              label: "13. Quand Hagnéré Code peut réellement vous aider",
            },
            {
              id: "sources",
              label: "Sources et limites",
            },
          ]}
        />

        <h2 id="definitions">1. TMA et régie ne désignent pas la même chose</h2>

        <p>
          La TMA répond d’abord à la question{" "}
          <strong>« quels travaux confions-nous à un prestataire ? »</strong>.
          Le{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
            target="_blank"
            rel="noopener noreferrer"
          >
            CCAG-TIC publié sur Légifrance
          </a>{" "}
          décrit la tierce maintenance applicative comme les prestations qui
          maintiennent un système d’information en état de remplir sa fonction.
          Il cite la prévention, la correction et, selon le contrat,
          l’adaptation ou l’évolution du logiciel. Cette définition appartient
          au cadre des marchés publics qui utilisent ce cahier : elle aide à
          comprendre le vocabulaire, mais elle ne s’applique pas automatiquement
          à votre contrat privé.
        </p>

        <p>
          La régie répond à une autre question :{" "}
          <strong>
            « comment le travail sera-t-il commandé et facturé ? »
          </strong>
          . Dans de nombreuses propositions, le mot signifie que l’entreprise
          achète du temps réellement mobilisé. Mais ce mot ne définit pas à lui
          seul les responsabilités, les livraisons, le suivi des heures ou le
          droit d’arrêter. Le contrat réel doit les préciser.
        </p>

        <GuideTable
          caption="Les trois questions à séparer avant de comparer deux offres"
          headers={[
            "Question",
            "Ce que vous devez obtenir",
            "Exemple de réponse",
          ]}
          rows={[
            [
              "Quel service est confié ?",
              "Les corrections, l’entretien, l’assistance et les évolutions réellement couverts.",
              "L’équipe traite les anomalies de production et les petites évolutions autorisées.",
            ],
            [
              "Comment le travail est-il acheté ?",
              "Jours réservés, temps réellement utilisé, prix pour un résultat défini ou combinaison, avec les règles de consommation.",
              "Les demandes courantes utilisent les jours réservés ; une évolution importante reçoit un devis séparé.",
            ],
            [
              "Qui décide que le travail commence et se termine ?",
              "Les personnes autorisées, les points d’arrêt et la manière d’accepter le résultat.",
              "Le responsable métier fixe l’ordre et valide les scénarios convenus.",
            ],
          ]}
        />

        <p>
          Séparez surtout <strong>ce que vous achetez</strong> de{" "}
          <strong>la manière dont vous le payez</strong>. Par « continuité »,
          nous entendons ici un suivi régulier qui évite de rechercher un
          prestataire à chaque correction ; cela ne garantit ni une astreinte ni
          un délai de remise en service. Ce suivi peut être facturé par une
          somme récurrente, des jours réservés ou du temps réellement utilisé.
          Un diagnostic court peut recevoir un prix fixe ou un plafond de temps.
          Une livraison définie peut être payée comme un ensemble de travaux à
          prix convenu ou selon le temps mobilisé. Le prix ne transforme donc
          pas, à lui seul, un diagnostic en livraison ni des jours de
          développement en engagement de support.
        </p>

        <InfoBox variant="amber" title="Le titre commercial ne suffit pas">
          <p className="m-0">
            « TMA au forfait », « régie souple » ou « pack de jours » peuvent
            cacher des fonctionnements très différents. Demandez ce qui est
            inclus, qui commande le travail, comment il est suivi et ce qui
            permet de le fermer. Le contrat et les faits priment toujours sur
            l’étiquette.
          </p>
        </InfoBox>

        <h2 id="options">
          2. Vérifiez d’abord si un contrat récurrent est nécessaire
        </h2>

        <p>
          Le choix ne se limite pas à un forfait ou à des jours facturés. Avec
          quelques demandes rares, vous pouvez intervenir seulement au besoin.
          Si le travail occupe durablement une personne et que vous savez
          l’encadrer, une compétence interne peut devenir plus rationnelle. Si
          le logiciel n’est plus supporté, peu utilisé ou trop coûteux à
          maintenir, comparez son remplacement ou son retrait avant d’ajouter un
          abonnement.
        </p>

        <div className="not-prose my-7 grid gap-3 md:grid-cols-2">
          {alternatives.map((option, index) => (
            <article
              key={option.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {option.title}
                  </h3>
                  <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <strong>Bon contexte :</strong> {option.fit}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <strong>À vérifier :</strong> {option.warning}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <InfoBox
          variant="blue"
          title="Notre avis : ne contractualisez pas un abonnement pour compenser une application sans avenir"
        >
          <p className="m-0">
            Si le produit n’est plus supporté, ne peut pas être sécurisé, ne
            possède plus d’utilisateur responsable ou coûte chaque année presque
            autant qu’une solution de remplacement crédible, comparez la
            migration et le retrait. Une maintenance bien vendue ne transforme
            pas une impasse technique ou métier en actif durable.
          </p>
        </InfoBox>

        <h2 id="historique">3. Commencez par trois mois de demandes réelles</h2>

        <p>
          Un prestataire peut présenter son modèle préféré, mais votre
          application possède déjà un historique. Rassemblez les demandes reçues
          pendant les trois derniers mois : e-mails, tickets, messages d’équipe,
          comptes rendus d’incident, devis et petites évolutions demandées
          oralement puis confirmées. Gardez une ligne par demande, même lorsque
          plusieurs lignes se ressemblent. La répétition est précisément ce que
          vous cherchez à voir.
        </p>

        <p>
          Trois mois ne forment pas une durée magique. Étendez la période si
          votre activité est saisonnière, si une mise en ligne récente a produit
          un nombre inhabituel de corrections ou si les demandes importantes
          apparaissent rarement. Vous cherchez une période qui représente le
          fonctionnement habituel, pas celle qui rend une option
          artificiellement attractive.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Ce qui est revenu",
              body: "Même anomalie, entretien régulier, assistance récurrente ou petites évolutions comparables.",
              result:
                "Ce groupe peut justifier une disponibilité organisée dans la durée.",
            },
            {
              title: "Ce qui a changé en cours de route",
              body: "Priorité déplacée, cause inconnue, dépendance externe ou besoin précisé après une première analyse.",
              result:
                "Ce groupe demande de décider progressivement et de contrôler le temps.",
            },
            {
              title: "Ce qui possédait une fin claire",
              body: "Fonction attendue, utilisateurs connus, règles stables et scénarios permettant de vérifier le résultat.",
              result:
                "Ce groupe peut devenir un lot séparé, avec une acceptation explicite.",
            },
            {
              title: "Ce qui n’aurait pas dû démarrer",
              body: "Idée sans utilisateur, urgence sans conséquence, demande sans responsable ou travail bloqué par un accès absent.",
              result:
                "Ce groupe doit être précisé, préparé ou reporté avant de consommer du budget.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
              <p className="mb-0 mt-3 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-200">
                {item.result}
              </p>
            </article>
          ))}
        </div>

        <p>
          Ce relevé empêche deux erreurs. La première consiste à acheter un
          forfait global parce que « la maintenance revient chaque mois », alors
          que l’essentiel du travail est une évolution unique. La seconde
          consiste à payer tout au temps alors que les mêmes corrections
          reviennent et pourraient être suivies avec une continuité plus
          lisible.
        </p>

        <h2 id="choisir">
          4. Pour chaque demande, choisissez comment payer le travail
        </h2>

        <h3>Réservez des jours pour le travail qui revient réellement</h3>

        <p>
          Une capacité récurrente devient pertinente lorsque l’application
          demande une attention régulière : anomalies, mises à jour nécessaires,
          assistance aux utilisateurs ou petites évolutions fréquentes.
          L’entreprise achète alors une continuité organisée, pas la certitude
          qu’un nombre fixe de demandes sera fermé chaque mois.
        </p>

        <p>
          Vérifiez toutefois que cette continuité correspond à un besoin
          observable. Si deux demandes isolées sont apparues en un an et que
          l’éditeur du logiciel couvre déjà les corrections, une intervention
          ponctuelle peut rester plus simple. À l’inverse, si les demandes
          reviennent mais que personne ne les classe, réserver du temps ne
          résoudra pas le problème de décision.
        </p>

        <p>
          La fréquence ne suffit pas. Un incident rare qui bloque les ventes
          peut justifier une plage de couverture et un délai de prise en charge
          convenus. Dix petites demandes sans effet immédiat peuvent, au
          contraire, attendre un point planifié. Distinguez donc la{" "}
          <strong>capacité de production</strong> — le volume de travail que le
          prestataire peut réaliser — de l’
          <strong>engagement de support</strong> — les plages couvertes, la
          manière d’alerter et le délai convenu pour commencer à traiter un
          incident. L’un n’implique pas automatiquement l’autre.
        </p>

        <h3>
          Payez le temps réellement utilisé lorsque la cause reste inconnue
        </h3>

        <p>
          Le temps réellement mobilisé convient à une recherche de cause, à une
          intégration dépendante d’un tiers ou à des priorités qui peuvent
          changer. Vous ne demandez pas au prestataire de promettre trop tôt une
          fin qu’il ne peut pas connaître. En échange, votre entreprise doit
          décider plus souvent.
        </p>

        <p>
          Ce fonctionnement possède des limites. Avant de commencer, écrivez le
          problème, la personne autorisée à engager du travail, le plafond et le
          premier point d’arrêt. À ce point, le prestataire remet ce qu’il a
          confirmé, écarté ou appris, le temps mobilisé et les options
          suivantes. Vous décidez alors de continuer, de demander un prix pour
          une suite bien définie ou de reporter.
        </p>

        <h3>Demandez un lot lorsque la fin peut être vérifiée</h3>

        <p>
          Un lot clairement défini convient à une évolution dont l’entreprise
          connaît les utilisateurs, les règles essentielles et les scénarios
          d’acceptation. Le sujet n’a pas besoin d’être décrit par cent pages :
          il doit être assez clair pour que les deux parties reconnaissent ce
          qui est inclus, ce qui ne l’est pas et ce qui montrera que la fonction
          marche.
        </p>

        <p>
          Ne forcez pas un lot sur une inconnue majeure. Si la cause du problème
          n’est pas observée, si l’API d’un tiers n’est pas documentée ou si les
          équipes ne s’accordent pas sur le résultat, achetez d’abord une
          exploration avec un point d’arrêt. Le lot viendra lorsque ses
          hypothèses seront défendables.
        </p>

        <InfoBox
          variant="blue"
          title="Le mode suit chaque famille de demandes, pas toute l’application"
        >
          <p className="m-0">
            Une même application peut recevoir un suivi récurrent, une
            exploration ponctuelle et une évolution clairement définie. Exiger
            un modèle unique pour tout simplifie parfois la facture, mais peut
            rendre les responsabilités et les résultats beaucoup moins clairs.
          </p>
        </InfoBox>

        <h2 id="hybride">
          5. Combinez les règles lorsque les demandes sont différentes
        </h2>

        <p>
          <strong>Exemple illustratif fictif :</strong> une PME utilise une
          application pour préparer des documents commerciaux et les faire
          valider. Son historique des trois derniers mois mélange des anomalies
          récurrentes, une lenteur encore inexpliquée, une évolution bien
          définie et une idée de tableau de bord sans utilisateur identifié.
          Mettre ces quatre demandes dans le même forfait masquerait leur
          nature.
        </p>

        <GuideTable
          caption="Exemple illustratif fictif — reclassement de quatre demandes"
          headers={["Demande", "Mode candidat", "Pourquoi et résultat attendu"]}
          rows={sampleRequests}
        />

        <p>
          Dans cet exemple fictif, la solution n’est ni « tout au forfait » ni «
          tout en régie ». Une capacité récurrente suit les anomalies d’export.
          La lenteur reçoit d’abord un diagnostic limité : il se termine par les
          mesures, les faits établis, les causes écartées, les inconnues et une
          décision d’arrêt ou de suite. Ce diagnostic pourrait être facturé à
          prix fixe ou selon le temps utilisé, jusqu’à un plafond convenu, sans
          changer ce résultat attendu. La validation avant envoi devient une
          livraison séparée. Le tableau de bord reste en attente tant que
          personne ne sait quelle décision il doit faciliter.
        </p>

        <p>
          Cette séparation rend la facture plus lisible : chaque dépense répond
          à un besoin différent. Elle rend aussi les désaccords plus faciles à
          traiter. Une correction récurrente ne change pas silencieusement le
          prix d’une évolution, et une exploration ne se transforme pas en
          promesse de livraison avant que sa cause soit comprise.
        </p>

        <h2 id="tco">
          6. Comparez le même flux sur douze mois, temps de votre équipe compris
        </h2>

        <p>
          Comparons maintenant les sept options avec le même besoin et le même
          coût horaire interne. Le cas est entièrement fictif : 48 jours de
          travaux récurrents, 18 jours de diagnostic et 24 jours d’évolutions
          définies, soit 90 jours sur un an. Une heure de votre équipe est
          valorisée à 60 €. Les montants ne sont ni des tarifs Hagnéré Code ni
          une moyenne de marché. Ils servent uniquement à rendre la méthode
          vérifiable.
        </p>

        <p>
          <strong>
            Les montants ci-dessous ne sont pas encore des coûts complets.
          </strong>{" "}
          Ils additionnent uniquement le prestataire — ou le coût annuel de la
          personne recrutée — et le temps de votre équipe pour décider et
          vérifier. La reprise initiale, les outils, la sortie et le dommage
          éventuel d’une panne restent inconnus dans l’exemple. Ils ne valent
          pas zéro : ajoutez-les ou marquez-les « à confirmer » avant d’utiliser
          le classement pour signer.
        </p>

        <div id="comparatif-couts" className="scroll-mt-24">
          <GuideTable
            caption="Coûts renseignés dans l’exemple fictif — sept options sur douze mois"
            headers={["Option", "Calcul annoncé", "Coût renseigné"]}
            rows={tcoComparisonRows}
          />
        </div>

        <FormulaBox>
          {
            "Coût complet sur la période\n= prestataire ou équipe interne\n+ temps de votre équipe pour décider et vérifier\n+ reprise initiale et outils\n+ coût de changement ou de sortie\n+ pertes restant à votre charge\n\nTant qu’un poste est inconnu, le résultat reste un coût partiel à compléter."
          }
        </FormulaBox>

        <p>
          Sur les seuls coûts renseignés, l’hybride est le plus bas. Son avance
          sur les jours réservés avec report annuel n’est toutefois que de 1 020
          €, soit 1,3 %. Ce n’est pas un verdict robuste : deux jours variables
          supplémentaires suffisent à changer l’ordre. Les postes inconnus
          peuvent aussi dépasser cet écart. En revanche, les mêmes jours
          réservés sans report coûtent déjà 8 670 € de plus parce que quinze
          jours expirent alors que neuf autres doivent être rachetés. Oublier
          cinq heures de travail interne par semaine donnerait enfin au temps
          passé une économie artificielle de 15 600 €.
        </p>

        <p>
          Le classement est la réponse rapide ; la répartition du travail
          explique maintenant pourquoi il change. Avec huit jours non
          reportables par mois, les périodes calmes laissent expirer quinze
          jours tandis que les pointes obligent à en racheter neuf.
        </p>

        <div className="hidden md:block">
          <GuideTable
            caption="Le besoin réel mois par mois face à huit jours réservés sans report"
            headers={[
              "Mois",
              "Besoin de maintenance",
              "Ce que deviennent les huit jours réservés",
            ]}
            rows={monthlyCapacityRows}
          />
        </div>

        <div className="md:hidden">
          <GuideTable
            caption="Le même besoin regroupé par trimestre pour la lecture mobile"
            headers={[
              "Trimestre",
              "Besoin de maintenance",
              "Effet des jours non reportables",
            ]}
            rows={quarterlyCapacityRows}
          />
        </div>

        <p>
          Le total annuel masque ici le problème. L’entreprise achète 96 jours
          mais n’en utilise que 81 dans le mois où ils sont disponibles. Quinze
          jours expirent et les pointes d’avril, septembre, novembre et décembre
          créent neuf jours de dépassement. Dire simplement « 90 jours
          nécessaires face à 96 jours achetés » sous-estimerait donc la facture
          si le contrat interdit tout report.
        </p>

        <InfoBox variant="emerald" title="Notre position professionnelle">
          <p className="m-0">
            Pour un flux mixte comme celui-ci, nous commencerions souvent par
            quelques jours réservés aux corrections qui reviennent, un plafond
            pour rechercher une cause encore inconnue et un prix séparé pour
            chaque évolution bien définie. Mais nous déconseillons ce montage si
            l’historique montre peu de demandes ou si le temps réellement
            utilisé, correctement contrôlé, reste moins cher. La bonne
            recommandation doit pouvoir conclure à moins de récurrence, pas
            seulement à un abonnement.
          </p>
        </InfoBox>

        <TmaTcoCalculator />

        <p>
          Vous pouvez aussi{" "}
          <a
            href="/ressources/comparateur-tma-regie-tco.csv"
            download
            className="font-semibold"
          >
            télécharger le comparateur TMA/régie au format CSV
          </a>
          . Il contient les sept options fictives, les formules, un statut pour
          les postes à confirmer et quatre lignes vierges. Le calcul s’effectue
          dans votre tableur ; aucune donnée n’est transmise à Hagnéré Code.
        </p>

        <h2 id="seuils">7. Testez les seuils qui renversent le verdict</h2>

        <p>
          Un total isolé donne une fausse certitude. Faites varier les trois
          éléments que votre entreprise connaît le moins : le volume de travail,
          la règle de report et le temps nécessaire pour trier, répondre,
          décider et vérifier. Dans l’exemple, la partie fixe de l’hybride vaut
          38 400 € par an, les 42 jours variables coûtent 850 € chacun et ce
          temps interne vaut 6 240 €.
        </p>

        <h3>Le report des jours change la facture sans changer le besoin</h3>

        <GuideTable
          caption="Même flux de 90 jours, trois règles fictives de report"
          headers={[
            "Règle du contrat",
            "Effet sur les jours",
            "Coût renseigné",
          ]}
          rows={capacityCarryRows}
        />

        <p>
          Un report trimestriel réduit le dépassement à quatre jours et le coût
          renseigné à 84 760 €. Une mutualisation annuelle permet d’absorber les
          90 jours utiles dans les 96 jours achetés et ramène les coûts
          renseignés à 81 360 €. Cela ne vaut que si les jours reportés restent
          réellement disponibles au moment des pointes : un droit de report
          inutilisable dans le planning du prestataire ne vaut pas un report
          effectif.
        </p>

        <h3>Deux seuils montrent quand le classement peut s’inverser</h3>

        <FormulaBox>
          {`Seuil hybride contre capacité
= (81 360 € - 38 400 € - 6 240 €) ÷ 850 €
= 43,2 jours variables

Seuil du temps de votre équipe pour le temps passé contre l’hybride
= (80 340 € - 72 000 €) ÷ (52 semaines × 60 €/h)
= 2,67 heures internes par semaine`}
        </FormulaBox>

        <p>
          Le cas central contient 42 jours variables. Avec un report annuel
          réellement utilisable, deux jours supplémentaires rendent donc la
          capacité moins chère que l’hybride dans ces hypothèses. De l’autre
          côté, si votre responsable pilote le temps passé en moins de 2 h 40
          par semaine, cette option devient moins chère que l’hybride. Ces
          frontières comptent davantage que l’écart initial de 1 020 €.
        </p>

        <p>
          Testez aussi ce que le prix ne dit pas. Les compétences sont-elles
          réellement les mêmes ? La mise en route, l’outillage et la sortie
          sont-ils inclus ? Le plafond autorise-t-il tout le flux ou arrête-t-il
          simplement les dépenses avant la fin du travail ? Une comparaison
          reste fausse si le montant change mais que le service ou la charge
          restant à votre entreprise change avec lui.
        </p>

        <h2 id="panne">
          8. Chiffrez ce que vaut réellement une couverture renforcée
        </h2>

        <p>
          Une capacité de développement ne garantit ni une réponse immédiate, ni
          une astreinte, ni un rétablissement. Pour décider si une couverture
          plus chère est rationnelle, partez de l’impact d’une interruption :
          personnes bloquées, coût horaire, durée, part du temps réellement
          perdue et contribution commerciale qui ne sera pas récupérée. Ne
          comptez pas le chiffre d’affaires brut si la vente est seulement
          décalée.
        </p>

        <GuideTable
          caption="Trois impacts de panne entièrement fictifs"
          headers={["Scénario", "Hypothèses", "Impact"]}
          rows={downtimeScenarios}
        />

        <FormulaBox>
          {`Impact central
= 15 personnes × 45 €/h × 4 h × 60 %
+ 2 000 € de contribution non récupérée
= 3 620 €

Surcoût annuel fictif de couverture : 12 000 €
Seuil maximal si chaque panne était entièrement évitée
= 12 000 € ÷ 3 620 € = 3,31 pannes centrales par an`}
        </FormulaBox>

        <p>
          Ce dernier seuil est volontairement exigeant : aucun contrat ne prouve
          qu’il supprimera totalement chaque incident. Si la couverture réduit
          seulement de moitié la perte moyenne, il faudrait environ 6,63 pannes
          centrales par an pour compenser 12 000 €. Mesurez donc la fréquence,
          la durée et l’effet réellement évité. Une promesse de « priorité »
          sans plage couverte, moyen d’alerte et mesure de rétablissement n’a
          pas de valeur économique calculable.
        </p>

        <h2 id="controles">
          9. Gardez les mêmes règles de contrôle dans chaque modèle
        </h2>

        <p>
          Le mode de paiement ne remplace ni l’organisation ni la sécurité. Que
          vous achetiez une capacité, du temps ou un lot, chaque intervention
          doit avoir une entrée, une personne qui décide, une trace et une fin
          observable.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sharedControls.map((control) => (
            <article
              key={control.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {control.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {control.body}
              </p>
            </article>
          ))}
        </div>

        <p>
          Pour les accès de maintenance à distance, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande d’enregistrer les interventions, d’ouvrir les accès
            nécessaires pour une durée définie à l’avance et de les refermer à
            l’issue
          </a>
          . Payer au temps ne justifie donc pas un compte permanent partagé.
          Payer un forfait ne dispense pas non plus de savoir qui est intervenu.
        </p>

        <p>
          Si le prestataire traite des données personnelles pour votre compte,
          les règles de sous-traitance doivent être adaptées aux opérations
          réelles. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche de la CNIL sur la sous-traitance
          </a>{" "}
          demande notamment de répartir les responsabilités, d’encadrer
          l’authentification, la restitution ou la destruction des données, les
          incidents et la vérification des mesures de sécurité. Ces sujets
          dépendent du contexte et méritent une revue contractuelle appropriée.
        </p>

        <p>
          Ce guide reste volontairement centré sur le choix du fonctionnement.
          Une fois ce choix fait, utilisez le guide dédié pour{" "}
          <Link href="/guides/contrat-tma-application">
            vérifier le contenu d’un contrat TMA
          </Link>
          , notamment les demandes couvertes, les délais convenus, la sécurité,
          l’acceptation et la sortie.
        </p>

        <h2 id="reclassement">
          10. Reclassez maintenant vos demandes de maintenance
        </h2>

        <p>
          Ouvrez un tableur ou l’outil déjà utilisé par votre équipe. Copiez les
          demandes des trois derniers mois sans essayer de les rendre plus
          propres qu’elles ne le sont. Une formulation ambiguë fait partie du
          diagnostic : elle montre où l’entreprise et le prestataire risquent de
          ne pas se comprendre.
        </p>

        <GuideTable
          caption="Les huit champs à copier dans votre tableau"
          headers={["Champ", "Question à poser", "Ce qu’il faut noter"]}
          rows={requestFields.map((item) => [
            item.field,
            item.question,
            item.entry,
          ])}
        />

        <ol className="space-y-4">
          <li>
            <strong>Rassemblez les demandes.</strong> Incluez les corrections,
            questions, accès, petites évolutions et interventions urgentes
            réellement demandées.
          </li>
          <li>
            <strong>Décrivez la conséquence.</strong> Remplacez « urgent » par
            ce qui se bloque, se retarde ou devient faux pour l’entreprise.
          </li>
          <li>
            <strong>Écrivez le résultat attendu.</strong> Si personne ne sait
            comment reconnaître la fin, marquez la demande « à explorer ».
          </li>
          <li>
            <strong>Nommez qui décidera.</strong> Une personne choisit la
            priorité ; une personne autorisée accepte le résultat. Elles peuvent
            être la même.
          </li>
          <li>
            <strong>Notez une première façon de payer à vérifier.</strong> Jours
            réservés, temps réellement utilisé, prix pour un résultat défini ou
            report. Vous pourrez la corriger après discussion.
          </li>
          <li>
            <strong>Regroupez les lignes semblables.</strong> Le volume et la
            répétition apparaissent alors sans inventer de moyenne.
          </li>
        </ol>

        <InfoBox
          variant="amber"
          title="Deux contrôles inverses évitent un mauvais achat"
        >
          <ul className="m-0 space-y-2 pl-5">
            <li>
              Si aucune personne côté entreprise ne peut prioriser et accepter,
              du temps acheté au fil de l’eau restera difficile à contrôler.
            </li>
            <li>
              Si le résultat et ses dépendances ne peuvent pas encore être
              suffisamment définis, un prix fermé reposera sur des hypothèses
              fragiles.
            </li>
          </ul>
        </InfoBox>

        <p>
          Le résultat de cet exercice n’est pas nécessairement un contrat. Vous
          pouvez conclure qu’un accès manque, qu’un éditeur doit répondre, qu’un
          besoin doit être expliqué aux utilisateurs ou qu’une évolution peut
          attendre. Éviter une dépense mal préparée est déjà une décision utile.
        </p>

        <h2 id="comparer">
          11. Comparez les propositions sur le même historique
        </h2>

        <p>
          Préparez le même tableau pour les prestataires consultés, mais ne leur
          envoyez pas l’historique brut. Retirez systématiquement les noms,
          identifiants, secrets, données personnelles et informations de
          sécurité qui ne sont pas nécessaires à la comparaison. Transmettez
          ensuite le document par un canal contrôlé, aux seuls destinataires
          prévus. Cette précaution prolonge les{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations de la CNIL sur la sous-traitance
          </a>
          . Les prestataires peuvent proposer des organisations différentes,
          mais ils répondent alors au même ensemble de demandes assaini. Une
          comparaison limitée au prix mensuel oppose souvent des choses qui ne
          couvrent ni les mêmes demandes ni le même travail côté client.
        </p>

        <GuideTable
          caption="Ce que chaque proposition doit rendre comparable"
          headers={["Sujet", "Question à poser", "Réponse exploitable"]}
          rows={[
            [
              "Demandes couvertes",
              "Quelles familles entrent dans la proposition et lesquelles exigent un accord séparé ?",
              "Une liste reliée à votre historique, avec exclusions et demandes à préciser.",
            ],
            [
              "Façon de payer",
              "Quelle règle s’applique à chaque famille ?",
              "Jours réservés, temps utilisé, prix défini ou report clairement associés aux demandes.",
            ],
            [
              "Continuité de service",
              "Quelles plages sont couvertes, comment alerter et quel délai de prise en charge est réellement convenu ?",
              "Un engagement de support distinct de la capacité disponible pour produire des corrections ou évolutions.",
            ],
            [
              "Décision",
              "Qui peut engager du travail, déplacer une priorité et arrêter une exploration ?",
              "Des rôles nommés et des points de décision observables.",
            ],
            [
              "Suivi",
              "Que recevrez-vous pour comprendre le temps et le résultat ?",
              "Demande concernée, action réalisée, inconnues restantes et prochaine décision.",
            ],
            [
              "Acceptation",
              "Comment une correction, une analyse ou une évolution sera-t-elle fermée ?",
              "Un comportement vérifié, une conclusion remise ou un refus motivé.",
            ],
            [
              "Accès et données",
              "Qui ouvre, utilise et ferme les accès, et comment les interventions sont-elles tracées ?",
              "Comptes nominatifs, durée utile, journal et responsabilités adaptées aux données.",
            ],
          ]}
        />

        <p>
          Ajoutez ensuite le prix selon la règle réellement proposée : somme
          récurrente, temps consommé, prix du lot, mise en route et dépenses
          séparées. Utilisez le comparateur de cette page sans transformer les
          inconnues en zéro ; cochez « à confirmer » ou testez plusieurs
          scénarios. Le guide{" "}
          <Link href="/guides/cout-maintenance-application-metier">
            consacré au coût de maintenance d’une application métier
          </Link>{" "}
          élargit ensuite le budget à l’infrastructure, aux mises à jour, à la
          sécurité et aux autres postes techniques.
        </p>

        <h2 id="signer">12. Décidez s’il faut signer, remplacer ou attendre</h2>

        <p>
          Vous pouvez signer un dispositif de maintenance lorsque les demandes
          principales sont visibles, les accès disponibles et les personnes
          capables de décider et d’accepter identifiées. Il restera toujours des
          inconnues ; elles doivent apparaître comme telles et recevoir une
          manière de les explorer ou de les arrêter.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-emerald-950 dark:text-emerald-200">
              Signez un fonctionnement récurrent
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-emerald-900/80 dark:text-emerald-300">
              Les demandes reviennent, l’application doit rester suivie et votre
              entreprise sait fixer les priorités. Si une interruption rare est
              critique, les plages et le délai de prise en charge sont écrits
              séparément de la capacité de travail.
            </p>
          </article>
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <h3 className="m-0 text-base font-semibold text-blue-950 dark:text-blue-200">
              Commencez par une exploration limitée
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-blue-900/80 dark:text-blue-300">
              Les accès existent, mais la cause, la taille ou les dépendances
              restent inconnues. Achetez un diagnostic limité qui remet les
              faits établis, les inconnues et une décision d’arrêt avant de
              choisir la suite.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-amber-950 dark:text-amber-200">
              Reportez la signature
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-amber-900/80 dark:text-amber-300">
              Personne ne peut décider, les accès sont absents ou le résultat
              n’a aucun utilisateur identifié. Corrigez d’abord ce manque.
            </p>
          </article>
          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <h3 className="m-0 text-base font-semibold text-violet-950 dark:text-violet-200">
              Comparez un remplacement ou un retrait
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-violet-900/80 dark:text-violet-300">
              Le support s’arrête, les incidents reviennent, l’usage baisse ou
              le coût annuel approche une alternative crédible. Chiffrez
              migration, continuité, archivage et sortie avant d’ajouter un
              abonnement de maintenance.
            </p>
          </article>
        </div>

        <p>
          Si vous changez de prestataire et ne savez pas encore si le code, les
          données, l’hébergement et la documentation sont récupérables, ne
          mélangez pas cette reprise avec le fonctionnement courant. Commencez
          par{" "}
          <Link href="/guides/reprendre-maintenance-site-autre-agence">
            organiser la reprise de maintenance et tester les accès
          </Link>
          . Vous choisirez ensuite le mode d’achat sur un terrain réellement
          maîtrisable.
        </p>

        <h2 id="accompagnement">
          13. Quand Hagnéré Code peut réellement vous aider
        </h2>

        <p>
          Un échange devient utile lorsque votre application existe, que des
          demandes peuvent être retrouvées et que votre entreprise accepte de
          nommer une personne pour les expliquer, les prioriser et vérifier le
          résultat. Le premier travail consiste alors à séparer le récurrent,
          l’incertain et ce qui peut être clairement défini avant de parler de
          jours ou de forfait.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code peut être pertinent si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>
                l’application existe et ses demandes peuvent être listées ;
              </li>
              <li>les accès peuvent être transmis et contrôlés ;</li>
              <li>un interlocuteur métier peut choisir les priorités ;</li>
              <li>
                vous voulez distinguer continuité, exploration et évolutions
                clairement définies ;
              </li>
              <li>vous acceptez de vérifier les résultats avant de fermer.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code ne sera pas le bon interlocuteur si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>
                vous attendez une responsabilité illimitée pour un prix minimal
                ;
              </li>
              <li>personne ne peut donner accès à l’application ;</li>
              <li>personne ne peut expliquer ni accepter le travail ;</li>
              <li>
                vous demandez un prix fermé malgré des inconnues majeures ;
              </li>
              <li>
                vous refusez toute trace des demandes et des interventions.
              </li>
            </ul>
          </article>
        </div>

        <p>
          Le bon choix ne porte donc pas sur un mot. Il porte sur la manière
          dont votre entreprise transforme une demande en décision, en travail
          puis en résultat vérifié. Réservez quelques jours pour ce qui revient,
          achetez un diagnostic limité lorsque la cause reste inconnue, convenez
          d’un prix lorsque la fin est claire et reportez ce que personne n’est
          prêt à décider. Le diagnostic peut être facturé à prix fixe ou selon
          le temps utilisé, jusqu’à un plafond convenu : son résultat attendu
          reste le même.
        </p>

        <GuideInlineCTA
          title="Faites comparer vos offres de maintenance avant de signer"
          description="Apportez vos offres et trois à douze mois de demandes. Nous relevons ce que chacune couvre, les jours qui peuvent être perdus, les dépassements, le temps demandé à votre équipe et les coûts qui restent à confirmer. Vous obtenez une liste de questions à renvoyer aux prestataires et une recommandation conditionnelle : signer, plafonner, négocier, attendre ou remplacer l’application."
          tags={[
            "Deux offres comparées sur les mêmes demandes",
            "Les coûts inconnus restent visibles",
            "Signer n’est pas obligatoire",
          ]}
          ctaLabel="Faire comparer mes offres"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Sources consultées ou rouvertes le 24 juillet 2026. Les définitions et
          recommandations officielles peuvent évoluer ; le contrat réel, les
          données traitées et l’organisation de votre entreprise restent
          déterminants.
        </p>

        <ul>
          <li>
            Légifrance —{" "}
            <a
              href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 38 du CCAG-TIC sur la maintenance et la tierce maintenance
              applicative
            </a>
            . Ce texte concerne les marchés publics qui s’y réfèrent ; il sert
            ici à éclairer les familles de maintenance, pas à imposer un contrat
            privé.
          </li>
          <li>
            Cigref–Syntec informatique —{" "}
            <a
              href="https://www.cigref.fr/cigref_publications/RapportsContainer/Parus2004/2004_-_Charte_CIGREF_Syntec_informatique_-_infogerance_et_TMA_web.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              charte « Infogérance et TMA »
            </a>{" "}
            de 2004. Elle apporte un repère historique de vocabulaire, pas une
            preuve des tarifs ou usages commerciaux actuels.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              encadrer les accès et les traces de maintenance
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer la sous-traitance
            </a>
            .
          </li>
          <li>
            Gouvernement britannique —{" "}
            <a
              href="https://assets.publishing.service.gov.uk/media/67b485cbb56d8b0856c2fe08/Buyer_Guidance_-_MSC_v2.2_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Model Services Contract Guidance, version 2.2(A)
            </a>
            . Ce guide mis à jour en 2025 distingue notamment temps et moyens,
            prix ferme, volume, coût cible et prix maximal. Il concerne de
            grands contrats publics britanniques : il inspire ici les questions
            de plafond et de contrôle, mais serait disproportionné à recopier
            pour une PME française.
          </li>
          <li>
            Gouvernement du Canada —{" "}
            <a
              href="https://canadabuys.canada.ca/en/buyer-s-portal/buyer-s-guide/plan/basis-payment/types-basis-payment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Types of basis of payment
            </a>
            . Ce guide fédéral actuel présente plusieurs mécanismes de prix et
            l’intérêt d’une limite de dépenses pour le temps ou les unités. Il
            n’impose aucune règle à un contrat privé français et ne fournit
            aucun tarif de marché.
          </li>
          <li>
            Acquisition.gov —{" "}
            <a
              href="https://www.acquisition.gov/far/16.601"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAR 16.601 sur les contrats en temps et moyens
            </a>
            . Le cadre fédéral américain réserve ce mécanisme aux situations où
            l’étendue ou la durée ne peut pas être estimée avec confiance et
            exige surveillance et plafond. Il étaye ici des garde-fous de suivi,
            pas une obligation applicable en France.
          </li>
          <li>
            NIST —{" "}
            <a
              href="https://csrc.nist.gov/pubs/ir/8286/d/upd1/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              IR 8286D sur l’analyse d’impact métier
            </a>
            . Cette publication américaine invite à partir des fonctions
            essentielles, des scénarios de perte et de la tolérance au risque.
            Elle ne donne ni coût universel d’une panne ni prix de maintenance.
          </li>
        </ul>

        <p>
          Les catégories « capacité récurrente », « temps piloté », « lot
          clairement défini » et « hybride » sont une grille opérationnelle
          Hagnéré Code. Elles ne constituent ni des qualifications juridiques
          universelles ni une recommandation automatique. Tous les montants,
          volumes, taux, pannes et seuils chiffrés de cette page sont fictifs :
          ils ne sont ni des prix de marché, ni un devis Hagnéré Code, ni un
          résultat client. Le guide ne promet aucun minimum mensuel, délai
          d’intervention, engagement de disponibilité ou avis juridique
          personnalisé. Faites adapter les responsabilités, la sécurité, les
          données, les pénalités et la sortie à votre contrat réel.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
