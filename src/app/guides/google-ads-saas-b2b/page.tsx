import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GoogleAdsSaasPilotCalculator } from "@/components/guides/GoogleAdsSaasPilotCalculator";
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

const guide = getGuide("google-ads-saas-b2b");

export const metadata = buildGuideMetadata(
  guide,
  "Google Ads pour un SaaS B2B : calculer le vrai CAC",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Google Ads pour SaaS B2B : du clic au client rentable",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Google Ads fonctionne-t-il pour tous les SaaS B2B ?",
    answer:
      "Non. Google Search est surtout pertinent lorsque des entreprises cherchent déjà le problème ou une catégorie de solution proche, que l’offre se comprend vite et que l’équipe commerciale traite les demandes. Un produit qui crée une nouvelle catégorie peut avoir besoin de contenu, de prospection ciblée, de partenaires ou de démonstrations menées directement avant d’acheter des clics.",
  },
  {
    question:
      "Une demande de démonstration est-elle une conversion suffisante ?",
    answer:
      "Non. Elle constitue une étape, pas le résultat économique. Suivez au minimum la demande, son acceptation par l’équipe commerciale, le rendez-vous réellement tenu, l’opportunité, le contrat, l’activation et, lorsque le recul le permet, le renouvellement. Pour un SaaS en libre-service, remplacez la démonstration par l’essai, l’action d’activation et le passage au paiement.",
  },
  {
    question: "Quel budget faut-il prévoir pour tester Google Ads ?",
    answer:
      "Il n’existe pas de minimum universel sérieux. Le budget dépend du coût réel des recherches, du volume disponible, du nombre de contacts nécessaire pour atteindre une étape commerciale interprétable, du temps de vente et de la perte maximale acceptable. Écrivez d’abord la question du test, sa durée, son plafond et la décision qui suivra.",
  },
  {
    question: "Comment suivre une vente conclue plusieurs mois après le clic ?",
    answer:
      "Gardez le CRM ou un registre commercial comme source complète, puis importez dans Google les étapes stables qui restent éligibles dans les délais de la méthode utilisée. La documentation Google consultée le 24 juillet 2026 indique notamment 90 jours après le dernier clic pour certaines importations hors ligne et 63 jours pour les conversions avancées pour prospects. Un contrat plus tardif reste dans votre analyse commerciale même s’il n’est plus importable.",
  },
  {
    question:
      "Les données hachées peuvent-elles être envoyées sans autre vérification ?",
    answer:
      "Non. Le hachage est une mesure technique, pas une dispense de gouvernance. Google demande des données de première partie, une information sur le partage, le consentement lorsqu’il est juridiquement requis et le respect des règles applicables. Faites valider finalité, information, consentement ou autre fondement, conservation, accès et prestataires selon votre situation.",
  },
  {
    question: "Comment savoir si Google Ads a réellement créé les ventes ?",
    answer:
      "Une vente attribuée n’est pas forcément une vente incrémentale. Séparez au minimum marque et hors marque, examinez les autres contacts avant la vente et comparez des groupes ou périodes réellement comparables. Lorsque le compte est éligible et que le volume le permet, un test contrôlé ou Conversion Lift peut estimer l’effet causal ; Google précise que cette fonction n’est pas disponible pour tous les comptes.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "Du contrat au clic",
    description: "",
    color: "violet",
  },
  {
    number: "02",
    title: "CAC complet",
    description: "",
    color: "blue",
  },
  {
    number: "03",
    title: "Cycle et trésorerie",
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
    href: "/guides/calculer-cout-par-lead-google-ads",
    label: "Calculer le coût réel d’un lead Google Ads",
  },
  {
    href: "/guides/suivi-conversions-google-ads",
    label: "Fiabiliser le suivi des conversions",
  },
  {
    href: "/guides/google-search-ads-ou-performance-max",
    label: "Comparer Search et Performance Max",
  },
  {
    href: "/guides/seo-saas-b2b",
    label: "Construire le SEO d’un SaaS B2B",
  },
];

const tocItems = [
  { id: "verdict-rapide", label: "Vérifier si le canal mérite un test" },
  { id: "contrat", label: "Remonter du contrat jusqu’au clic" },
  { id: "client-ideal", label: "Définir le client et le comité d’achat" },
  { id: "parcours", label: "Suivre démo, essai, activation et renouvellement" },
  {
    id: "recherches",
    label: "Trier les recherches sans mélanger les intentions",
  },
  { id: "campagnes", label: "Choisir Search, Performance Max ou Demand Gen" },
  { id: "page", label: "Faire passer la page et la vente au même test" },
  { id: "mesure", label: "Relier Ads, site et suivi commercial" },
  { id: "donnees", label: "Encadrer les données et le consentement" },
  { id: "cas-chiffre", label: "Calculer une cohorte fictive de bout en bout" },
  { id: "economie", label: "Lire CAC, payback, marge et coût total" },
  { id: "cycle", label: "Gérer cycle long, attribution et incrémentalité" },
  {
    id: "exploitation",
    label: "Traiter les faux leads et la capacité de vente",
  },
  { id: "alternatives", label: "Comparer les autres canaux au même résultat" },
  { id: "kit-pilotage", label: "Télécharger le kit de pilotage" },
  { id: "decision", label: "Décider : lancer, corriger, élargir ou arrêter" },
  { id: "glossaire", label: "Comprendre les principaux termes" },
  { id: "sources", label: "Sources officielles et limites" },
];

const reversePath = [
  {
    title: "Contrat signé",
    question:
      "Quel client a signé, pour quelle offre, avec quelle remise et quelle marge attendue ?",
  },
  {
    title: "Proposition",
    question:
      "Une offre commerciale a-t-elle été envoyée à un interlocuteur capable de faire avancer l’achat ?",
  },
  {
    title: "Opportunité",
    question:
      "Le problème, l’échéance, les personnes impliquées et la prochaine action sont-ils identifiés ?",
  },
  {
    title: "Prospect accepté",
    question:
      "L’entreprise correspond-elle au client visé et le commercial accepte-t-il de la traiter ?",
  },
  {
    title: "Démonstration ou essai",
    question:
      "Le rendez-vous a-t-il eu lieu ou l’utilisateur a-t-il accompli l’action utile dans le produit ?",
  },
  {
    title: "Recherche et clic",
    question:
      "Quelle recherche, quelle annonce et quelle page ont précédé ce parcours ?",
  },
];

const funnelStages = [
  {
    title: "Lead",
    plain:
      "Une personne a laissé des coordonnées. Vous ne savez pas encore si son entreprise peut acheter.",
    exit: "Coordonnées exploitables, origine conservée et doublon traité.",
  },
  {
    title: "MQL",
    plain:
      "Le marketing voit un intérêt et une ressemblance avec la cible. Cette étape peut rester facultative dans une petite équipe.",
    exit: "Critères écrits : secteur, taille, usage, pays ou autre élément observable.",
  },
  {
    title: "SQL",
    plain:
      "Le commercial accepte de travailler le contact après une première vérification.",
    exit: "Problème couvert, entreprise dans la cible et prochaine action décidée.",
  },
  {
    title: "Opportunité",
    plain:
      "Un achat possible est ouvert, avec un besoin, des acteurs, une échéance et une étape suivante.",
    exit: "Montant ou fourchette, décideurs, risques et date de prochaine revue.",
  },
  {
    title: "Signé",
    plain:
      "Le contrat est conclu. Le revenu n’est pas encore forcément encaissé ni le client rendu autonome.",
    exit: "Prix, remise, durée, coûts de mise en route et origine commerciale confirmés.",
  },
  {
    title: "Activé",
    plain:
      "Le client a atteint le premier résultat qui justifie l’achat, pas seulement créé son compte.",
    exit: "Action utile nommée, date observée et coûts de service enregistrés.",
  },
  {
    title: "Renouvelé",
    plain:
      "Le client continue après la première période significative. C’est là que les hypothèses de durée commencent à rencontrer les faits.",
    exit: "Revenu encaissé, marge, expansion, réduction ou départ documentés.",
  },
];

const buyingCommittee = [
  [
    "Utilisateur",
    "Le produit simplifie-t-il réellement son travail ?",
    "Usage réel, objections, temps gagné ou erreur évitée.",
  ],
  [
    "Responsable métier",
    "Le problème est-il prioritaire et le changement acceptable ?",
    "Résultat attendu, calendrier, personnes concernées et coût de l’inaction.",
  ],
  [
    "Décideur économique",
    "La dépense est-elle justifiée et finançable ?",
    "Coût total, marge ou économie, délai de retour et risque.",
  ],
  [
    "Informatique ou sécurité",
    "L’outil peut-il entrer dans l’environnement de l’entreprise ?",
    "Intégrations, accès, sécurité, hébergement, support et sortie.",
  ],
  [
    "Juridique ou achats",
    "Les engagements et responsabilités sont-ils acceptables ?",
    "Contrat, données personnelles, assurance, sous-traitants et réversibilité.",
  ],
  [
    "Direction ou finance",
    "Qui assume le choix et quelle autre dépense est abandonnée ?",
    "Sponsor, budget, arbitrage et condition de décision finale.",
  ],
];

const channelChoices = [
  [
    "Search hors marque",
    "Une personne formule déjà le problème ou la catégorie de solution.",
    "Lire recherches, page, SQL puis contrat ; surveiller les requêtes trop larges et les formulaires faibles.",
  ],
  [
    "Search marque",
    "Une personne vous connaît déjà et veut vous retrouver.",
    "Mesurer séparément ; ne pas lui attribuer une découverte venue du SEO, du direct ou d’une recommandation.",
  ],
  [
    "Search avec AI Max",
    "Une campagne Search possède déjà un signal de conversion fiable et l’équipe veut tester un élargissement des requêtes, textes ou pages.",
    "Comparer au Search standard sur une cohorte séparée ; borner marques, zones et URL, puis contrôler les termes, textes et pages réellement choisis.",
  ],
  [
    "Performance Max",
    "Le signal commercial, les créations, la géographie et les exclusions sont déjà suffisamment solides.",
    "Lire la valeur importée et la cohorte ; surveiller la perte de lisibilité si l’offre ou le suivi bougent encore.",
  ],
  [
    "Demand Gen et vidéo",
    "La cible doit d’abord comprendre ou envisager le problème, avec des créations capables de l’expliquer.",
    "Suivre l’audience exposée et la progression ; ne pas comparer une vue à un SQL Search comme s’il s’agissait du même résultat.",
  ],
  [
    "Remarketing",
    "Des visiteurs ou comptes connus ont besoin de revenir dans un cycle long.",
    "Suivre le retour utile et l’étape commerciale ; ne pas compter une audience déjà acquise comme une nouvelle demande créée.",
  ],
];

const queryFamilies = [
  [
    "Votre marque — « atelierflow connexion »",
    "Navigation ou retour après un autre contact.",
    "Campagne et rapport séparés ; ne pas additionner au hors-marque sans distinction.",
  ],
  [
    "Problème — « réduire retards interventions techniciens »",
    "L’entreprise reconnaît une difficulté, sans forcément connaître la solution.",
    "Page de diagnostic, cas d’usage et qualification.",
  ],
  [
    "Catégorie — « logiciel planning interventions b2b »",
    "Comparaison active d’outils ou de prestataires.",
    "Produit, différences, intégrations, limites et prochaine étape.",
  ],
  [
    "Concurrent — « alternative à [outil] »",
    "Besoin possible, mais attente façonnée par un autre produit.",
    "Comparer honnêtement les usages ; isoler budget, marque et résultats.",
  ],
  [
    "Information — « définition gestion des interventions »",
    "Apprentissage, recherche scolaire ou début de réflexion.",
    "Contenu ou exclusion selon la page et le résultat observé.",
  ],
  [
    "Hors cible — « gratuit », « emploi », « formation », « modèle excel »",
    "Budget, rôle ou intention souvent incompatibles avec l’offre.",
    "Liste d’exclusions à confirmer à partir des vraies recherches, jamais copiée aveuglément.",
  ],
];

const dataFlowRows = [
  [
    "Clic",
    "Identifiant publicitaire disponible, campagne, groupe, recherche ou terme accessible",
    "Conserver l’identifiant sans le transformer en identité commerciale.",
  ],
  [
    "Formulaire ou inscription",
    "Identifiant interne du lead, date, fuseau, page et action demandée",
    "Un identifiant stable ; dédupliquer formulaire, appel et nouvelle tentative.",
  ],
  [
    "Qualification",
    "ICP oui/non, motif, MQL éventuel, SQL accepté/refusé",
    "Définitions communes entre marketing et vente.",
  ],
  [
    "Opportunité",
    "Date, montant ou fourchette, étape, prochaine action et motif de perte",
    "Ne pas créer une opportunité uniquement pour embellir le taux.",
  ],
  [
    "Vente",
    "Contrat, montant, remise, devise, date, revenu encaissé",
    "Séparer signé, facturé et encaissé.",
  ],
  [
    "Produit",
    "Activation, première valeur, usage, support, réduction, départ et renouvellement",
    "Rattacher l’économie au service réellement fourni.",
  ],
  [
    "Import vers Google",
    "Nom de conversion, date, valeur, identifiants autorisés, diagnostic et erreurs",
    "Google reçoit un signal utile ; le CRM conserve l’histoire complète.",
  ],
];

const cadenceRows = [
  [
    "Chaque jour ouvré",
    "Dépense anormale, annonces refusées, suivi interrompu, formulaires inutilisables et demandes non rappelées.",
    "Éviter une fuite immédiate de budget ou une perte commerciale.",
  ],
  [
    "Chaque semaine",
    "Recherches, exclusions, leads refusés, délai de réponse, no-show, changements et erreurs d’import.",
    "Corriger la qualité sans attendre la fin du cycle.",
  ],
  [
    "Chaque mois",
    "Cohorte, SQL, opportunités, pipeline, contrats, activation et capacité disponible.",
    "Comparer les mêmes personnes à des étapes différentes.",
  ],
  [
    "Chaque trimestre ou cycle mûr",
    "CAC complet, marge, payback, renouvellement, incrémentalité possible et répartition des canaux.",
    "Décider du prochain palier de dépense sur une économie plus complète.",
  ],
];

const glossary = [
  [
    "ICP",
    "Ideal Customer Profile : description observable des entreprises que le SaaS sert réellement bien.",
  ],
  [
    "MQL",
    "Contact considéré comme intéressant par le marketing selon des critères écrits.",
  ],
  ["SQL", "Contact accepté par l’équipe commerciale pour être travaillé."],
  [
    "Opportunité",
    "Achat potentiel ouvert avec un besoin, des personnes, une échéance et une prochaine action.",
  ],
  [
    "Pipeline",
    "Montant et état des opportunités en cours ; il ne vaut pas chiffre d’affaires signé.",
  ],
  ["CPC", "Coût moyen d’un clic publicitaire."],
  [
    "CPL",
    "Coût par lead. Il dépend du coût inclus et de la définition du lead.",
  ],
  [
    "CAC",
    "Coût d’acquisition d’un client. Dans ce guide, le CAC complet inclut les coûts directement attribuables au test.",
  ],
  [
    "Payback",
    "Nombre de mois nécessaires pour récupérer le CAC grâce à la marge de contribution du client.",
  ],
  [
    "LTV",
    "Valeur économique sur la durée de vie. Une hypothèse de durée n’est pas une durée observée.",
  ],
  [
    "PMax",
    "Performance Max : type de campagne Google piloté par un objectif et diffusé sur plusieurs inventaires.",
  ],
  [
    "Conversion hors ligne",
    "Étape issue du suivi commercial ou du produit, renvoyée à la plateforme après l’interaction publicitaire.",
  ],
  [
    "Incrémentalité",
    "Part des résultats qui n’aurait probablement pas existé sans la publicité, estimée par comparaison contrôlée.",
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
          { label: "Google Ads pour SaaS B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous voulez savoir si Google Ads peut apporter des clients rentables à votre SaaS — pas seulement des clics ou des demandes de démonstration. Voici comment suivre le même groupe jusqu’au contrat, calculer le coût complet et décider sans confondre attribution et résultat réel."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes sur Google Ads pour un SaaS B2B"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous avez peut-être déjà vécu cette réunion : Google Ads affiche
          quatre-vingts demandes, le tableau commercial montre quatre contrats,
          et personne ne sait combien de ces clients utilisent encore le SaaS
          douze mois plus tard. Le marketing parle du coût par formulaire. Le
          commercial répond que la moitié des contacts n’étaient pas dans la
          cible. La direction voit surtout les factures de média et d’agence.
          Dans cette situation, demander « quel est notre coût par lead ? » ne
          suffit pas. La question utile est :{" "}
          <strong>
            combien avons-nous réellement dépensé pour obtenir un client activé
            et rentable, dans quel délai, et que se passera-t-il si le taux de
            conversion baisse ?
          </strong>{" "}
          Ce guide répond à cette question avec un exemple fictif complet. Il
          vous aide aussi à choisir ce qu’il faut suivre, ce qu’il vaut mieux
          reporter et dans quels cas Google Ads n’est pas le bon premier canal.
        </p>

        <InfoBox variant="emerald" title="Notre avis, clairement">
          Pour un SaaS B2B qui capte une demande déjà formulée, nous
          commencerions généralement par une campagne Search hors marque
          étroite, une page dédiée et un suivi jusqu’au client activé. Nous ne
          lancerions pas Performance Max en premier si l’offre, la qualification
          ou les conversions importées sont encore instables. Ce choix
          privilégie l’apprentissage lisible avant la diffusion large ; il ne
          constitue pas une promesse de rentabilité.
        </InfoBox>

        <p>
          Les montants et taux utilisés plus bas appartiennent à{" "}
          <strong>AtelierFlow, un SaaS entièrement fictif</strong>. Ils servent
          à expliquer les calculs ; ce ne sont ni des tarifs Hagnéré Code, ni
          des moyennes de marché, ni des résultats attendus. Vos décisions
          doivent partir de vos recherches, de votre cycle de vente, de votre
          marge et de votre capacité commerciale. Cet exemple ne décrit ni un
          client ni un cas Hagnéré Code.
        </p>

        <p>
          Trois mots reviendront souvent. Une <strong>cohorte</strong> est un
          groupe de clics ou de prospects entrés pendant la même période et
          suivis avec les mêmes règles. L’<strong>ICP</strong> décrit le type
          d’entreprise réellement visé, avec des critères observables. Le{" "}
          <strong>CAC</strong> est le coût d’acquisition rapporté au nombre de
          clients obtenus ; ici, nous préciserons toujours quels coûts et quel
          stade client sont utilisés.
        </p>

        <GuideToc items={tocItems} />

        <h2 id="verdict-rapide">
          Avant de lancer : cinq conditions doivent être suffisamment vraies
        </h2>
        <p>
          Google Ads n’est pas un médicament contre une offre floue. Le canal
          accélère la rencontre entre une recherche et une proposition. S’il
          manque une pièce importante, davantage de trafic rend souvent le
          problème plus coûteux, pas plus clair.
        </p>

        <GuideTable
          caption="Les cinq conditions d’un test interprétable"
          headers={["Question", "Signe favorable", "Si la réponse est non"]}
          rows={[
            [
              "Des entreprises cherchent-elles déjà ce problème ?",
              "Des recherches précises décrivent le besoin, la catégorie ou une alternative.",
              "Interroger le marché, tester la prospection ou produire du contenu avant d’acheter du volume.",
            ],
            [
              "L’offre se comprend-elle en moins d’une minute ?",
              "Le client visé, le problème, le résultat et la prochaine étape sont immédiatement visibles.",
              "Clarifier l’offre et la page avant la campagne.",
            ],
            [
              "Un bon prospect est-il défini ?",
              "Deux personnes qualifient le même dossier de la même façon.",
              "Écrire les critères et les motifs de refus.",
            ],
            [
              "Le parcours peut-il être suivi jusqu’au produit ?",
              "Origine, SQL, opportunité, contrat et activation restent reliés.",
              "Réparer les identifiants, statuts et responsabilités.",
            ],
            [
              "L’équipe peut-elle traiter les demandes ?",
              "Un responsable rappelle, renseigne le résultat et dispose de créneaux.",
              "Réduire le volume ou renforcer le processus commercial.",
            ],
          ]}
        />

        <p>
          Il n’est pas nécessaire que tout soit parfait. En revanche, chaque
          faiblesse doit être connue et le test doit pouvoir l’isoler. Si la
          campagne, la page et la méthode de vente changent en même temps, vous
          ne saurez pas ce qui a produit le résultat.
        </p>

        <h2 id="contrat">Commencez par le contrat que vous voulez obtenir</h2>
        <p>
          La plupart des tableaux publicitaires se lisent de gauche à droite :
          impressions, clics, formulaires, puis conversions. Un dirigeant a
          intérêt à faire le chemin inverse. Prenez un client signé et remontez
          chaque étape. Dès qu’une réponse manque, vous avez trouvé une rupture
          de mesure ou de processus.
        </p>

        <div className="not-prose my-8 grid gap-3">
          {reversePath.map((step, index) => (
            <section
              key={step.title}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                {index + 1}
              </span>
              <div>
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.question}
                </p>
              </div>
            </section>
          ))}
        </div>

        <p>
          Cette lecture évite une erreur classique : déclarer une campagne
          rentable parce qu’elle produit des demandes moins chères. Une campagne
          peut diviser le coût du formulaire et doubler le coût du client si
          elle attire davantage d’étudiants, de très petites entreprises, de
          curieux ou de personnes sans pouvoir d’achat.
        </p>

        <InfoBox variant="amber" title="Le contrat n’est pas encore la fin">
          Un contrat signé peut être remisé, payé en retard, coûteux à déployer
          ou résilié avant d’avoir remboursé son acquisition. Pour un SaaS,
          ajoutez au minimum l’activation, la première valeur obtenue et le
          premier renouvellement que votre recul permet réellement d’observer.
        </InfoBox>

        <h2 id="client-ideal">
          Décrivez le client idéal et les personnes capables de bloquer l’achat
        </h2>
        <p>
          « PME intéressée par la digitalisation » ne définit pas une cible.
          Écrivez des critères que l’équipe peut constater : secteur, pays,
          taille, nombre d’utilisateurs, système existant, volume traité,
          problème, échéance, budget possible et contraintes d’intégration. Un
          critère n’est utile que s’il change une décision : accepter, refuser,
          orienter vers une autre offre ou attendre.
        </p>

        <p>
          Pour AtelierFlow, la cible fictive est une entreprise française de
          maintenance terrain comptant 20 à 150 techniciens, qui planifie encore
          une partie de ses interventions par tableur, souhaite déployer dans
          les six mois et peut mobiliser un responsable d’exploitation. Le
          produit n’est pas vendu aux indépendants seuls ni aux groupes exigeant
          immédiatement une intégration ERP non disponible. Cette précision
          réduit le volume apparent, mais rend chaque résultat plus utile.
        </p>

        <GuideTable
          caption="Un contact peut convaincre l’utilisateur et échouer devant le comité d’achat"
          headers={[
            "Personne",
            "Question qu’elle se pose",
            "Ce qu’il faut comprendre",
          ]}
          rows={buyingCommittee}
        />

        <p>
          Vous n’avez pas toujours six personnes distinctes. Dans une PME, le
          dirigeant peut cumuler finance, achats et décision économique. Dans un
          grand compte, plusieurs équipes peuvent intervenir à des mois
          différents. Le suivi doit au moins indiquer le rôle du premier
          contact, le sponsor interne, le décideur économique et le blocage
          actuel. Sans cela, vous risquez d’acheter beaucoup de demandes venant
          d’utilisateurs convaincus mais incapables de faire signer
          l’entreprise.
        </p>

        <h2 id="parcours">
          Une démo et un essai libre ne racontent pas le même parcours
        </h2>
        <p>
          Un SaaS vendu par démonstration avance grâce à l’équipe commerciale.
          Un SaaS en libre-service avance grâce au produit. Beaucoup
          d’entreprises mélangent les deux et choisissent comme « conversion
          principale » le premier événement facile à compter. Il faut au
          contraire suivre la chaîne qui correspond à la manière réelle
          d’acheter.
        </p>

        <GuideTable
          caption="Deux parcours à mesurer séparément"
          headers={[
            "Modèle",
            "Étapes minimales",
            "Événement trompeur s’il reste seul",
          ]}
          rows={[
            [
              "Vente avec démonstration",
              "Demande → SQL → démo tenue → opportunité → proposition → signé → activé → renouvelé",
              "Rendez-vous réservé : il peut être hors cible, annulé ou jamais tenu.",
            ],
            [
              "Essai en libre-service",
              "Inscription → première action → activation → invitation d’équipe → paiement → usage → renouvellement",
              "Compte créé : il peut rester vide et n’avoir jamais rencontré la valeur du produit.",
            ],
            [
              "Parcours hybride",
              "Origine → essai ou démo → assistance commerciale → paiement → activation",
              "Dernier contact : il peut masquer le rôle du contenu, de la marque ou de l’essai.",
            ],
          ]}
        />

        <p>
          Définissez l’activation avec un comportement, pas avec une émotion.
          Par exemple : « le responsable a importé une équipe, planifié cinq
          interventions et envoyé le premier compte rendu ». « Le client a
          compris la valeur » ne peut pas être testé automatiquement. La
          première valeur peut ensuite être confirmée lors d’un échange : une
          intervention a été réellement coordonnée avec moins de ressaisie.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {funnelStages.map((stage) => (
            <section
              key={stage.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {stage.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {stage.plain}
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Pour passer à la suite :</strong> {stage.exit}
              </p>
            </section>
          ))}
        </div>

        <p>
          Les sigles MQL et SQL ne sont pas obligatoires. Une petite équipe peut
          utiliser « à examiner », « accepté par la vente » et « opportunité
          ouverte ». Ce qui compte est que chaque mot ait une définition et une
          personne responsable. Un statut prestigieux mais rempli au hasard
          dégrade la campagne.
        </p>

        <h2 id="recherches">
          Triez les recherches : la marque, le problème et le concurrent ne se
          valent pas
        </h2>
        <p>
          Search capte une demande exprimée. Cela ne signifie pas que toutes les
          recherches ont la même intention. Avant de lancer, écrivez une
          vingtaine de formulations possibles. Après le lancement, examinez les
          termes réellement observés et classez-les sans juger uniquement le
          clic.
        </p>

        <GuideTable
          caption="Taxonomie de recherches pour un SaaS B2B fictif"
          headers={[
            "Famille et exemple fictif",
            "Interprétation",
            "Traitement",
          ]}
          rows={queryFamilies}
        />

        <p>
          Ajoutez le pays, la langue, le fuseau, la devise et la capacité de
          support. Une requête française lancée depuis un pays non vendu peut
          sembler pertinente dans le rapport et rester commercialement inutile.
          De même, une campagne multilingue n’est pas seulement une traduction :
          la page, la démo, le contrat, le support et le suivi doivent
          fonctionner dans chaque marché.
        </p>

        <p>
          Les mots-clés négatifs servent à réduire les situations clairement
          incompatibles. Ils ne doivent pas être copiés depuis une liste
          générique sans contrôle : un mot comme « gratuit » peut signaler une
          recherche sans budget, mais aussi une comparaison d’essais avant un
          achat sérieux. Conservez la recherche, la décision, la date et la
          personne qui a ajouté l’exclusion. Vous pourrez revenir en arrière si
          le raisonnement était mauvais.
        </p>

        <h2 id="campagnes">
          Search, Performance Max, Demand Gen : choisissez selon la question
        </h2>
        <p>
          Le nom du type de campagne ne décide pas de la rentabilité. Il décide
          surtout de la manière dont Google peut diffuser et optimiser. Votre
          premier test doit donc correspondre à la question la plus importante.
          Si vous voulez savoir quelles recherches amènent des SQL, Search offre
          généralement une lecture plus directe. Si vous disposez déjà d’un
          signal fiable, de plusieurs créations et d’un marché connu,
          Performance Max peut tester une diffusion plus large.
        </p>

        <GuideTable
          caption="Choisir un format selon le niveau de connaissance"
          headers={[
            "Approche",
            "Quand elle devient testable",
            "À mesurer et surveiller",
          ]}
          rows={channelChoices}
        />

        <p>
          AI Max n’est pas un nouveau type de campagne : Google le présente
          comme une couche d’optimisation à l’intérieur de Search. Elle peut
          élargir la correspondance des recherches, adapter des textes et
          choisir d’autres pages du domaine selon les options activées. Pour un
          SaaS B2B, testez-la seulement avec un signal métier stable, des
          contrôles de marque, de zone et d’URL, puis comparez-la à un Search
          standard sur des périodes et résultats équivalents.
        </p>

        <InfoBox
          variant="blue"
          title="Notre position : ne demandez pas à l’automatisation de découvrir votre métier à votre place"
        >
          Performance Max est une campagne orientée objectif, diffusée sur
          plusieurs inventaires Google. Nous l’envisagerions après avoir défini
          la cible, la valeur des étapes, les zones, la marque et les
          exclusions. Google permet notamment des exclusions de marque et des
          mots-clés négatifs applicables à certaines parties de l’inventaire.
          Ces contrôles réduisent un risque ; ils ne rendent pas un signal
          faible fiable.
        </InfoBox>

        <p>
          Vous entendrez parfois qu’il faut « 30 conversions » avant de pouvoir
          décider ou automatiser. N’en faites pas une loi générale. Le besoin de
          données dépend de la fonction utilisée, du type de conversion, de sa
          fréquence et de sa stabilité. Trente formulaires hétérogènes peuvent
          être moins utiles que quelques SQL renseignés avec la même définition.
          Consultez la documentation de la stratégie réellement choisie et
          affichez l’incertitude lorsque le volume reste faible.
        </p>

        <p>
          En 2026, Google fait aussi évoluer le périmètre historique de Display
          vers Demand Gen pour les annonceurs éligibles. N’organisez donc pas
          votre stratégie autour d’un ancien nom d’interface. Décrivez plutôt
          l’objectif : capter une recherche, faire comprendre un problème,
          réexposer une audience connue ou tester une création. Vérifiez ensuite
          les fonctions disponibles dans votre compte au moment du lancement.
        </p>

        <h2 id="page">
          La page et l’équipe commerciale doivent tenir la même promesse
        </h2>
        <p>
          Une bonne requête peut produire un mauvais lead si la page parle à
          tout le monde. À l’inverse, une page très sélective peut réduire les
          formulaires tout en augmentant les SQL. Le taux de conversion de la
          page n’est donc jamais un objectif isolé.
        </p>

        <GuideTable
          caption="Test simple de la page avant d’augmenter le budget"
          headers={["Zone", "Question à poser", "Échec fréquent"]}
          rows={[
            [
              "Premier écran",
              "Le client visé, le problème et le résultat sont-ils compris sans faire défiler ?",
              "« Transformez votre entreprise » sans métier, situation ni limite.",
            ],
            [
              "Cas d’usage",
              "La page décrit-elle le travail réellement concerné ?",
              "Catalogue de fonctions sans journée ni résultat concret.",
            ],
            [
              "Différences",
              "Pourquoi choisir ce SaaS plutôt qu’un tableur, un outil existant ou un projet sur mesure ?",
              "Superlatifs sans comparaison de périmètre.",
            ],
            [
              "Confiance",
              "Les intégrations, la sécurité, le support et les limites utiles sont-ils visibles ?",
              "Logos ou promesses impossibles à relier au service vendu.",
            ],
            [
              "Prix ou qualification",
              "Le visiteur comprend-il l’ordre de grandeur, le modèle ou les conditions d’accès ?",
              "Formulaire ouvert à tous alors que la vente exclut la majorité.",
            ],
            [
              "Action",
              "La démo ou l’essai explique-t-il ce qui va se passer ensuite ?",
              "Bouton « Commencer » sans durée, interlocuteur ni résultat attendu.",
            ],
            [
              "Mobile et confirmation",
              "Le formulaire fonctionne-t-il à 390 px et la suite est-elle mesurée ?",
              "Champs inutiles, calendrier cassé ou double comptage au rechargement.",
            ],
          ]}
        />

        <p>
          Jouez vous-même le parcours sur mobile, puis demandez à une personne
          qui ne connaît pas le produit de vous dire à qui il s’adresse, ce
          qu’il résout, ce qui se passe après le bouton et pourquoi elle
          pourrait ne pas être concernée. Cette lecture humaine révèle souvent
          plus qu’un changement de couleur de bouton.
        </p>

        <p>
          Le commercial doit ensuite reprendre les mêmes mots. Si la page vend
          un déploiement en deux semaines mais que la démonstration annonce deux
          mois, la campagne ne peut pas corriger la déception. Enregistrez les
          objections récurrentes et modifiez soit la page, soit l’offre — pas
          seulement l’annonce.
        </p>

        <h2 id="mesure">
          Reliez Google Ads, le site, le suivi commercial et le produit
        </h2>
        <p>
          Vous pouvez commencer avec un tableur. Vous ne pouvez pas commencer
          sans identifiant stable ni définition commune. Une ligne doit survivre
          au passage entre le clic, le formulaire, l’appel, la proposition et le
          produit. Si un nouveau contact est créé à chaque outil sans lien entre
          eux, le reporting donnera des histoires incompatibles.
        </p>

        <GuideTable
          caption="Le fil minimal à conserver de l’annonce au renouvellement"
          headers={["Moment", "Informations utiles", "Règle de qualité"]}
          rows={dataFlowRows}
        />

        <p>
          Selon le parcours, les identifiants disponibles peuvent inclure GCLID,
          GBRAID ou WBRAID, ainsi que des données de première partie pour les
          conversions avancées pour prospects. Ne collectez pas tout « au cas où
          ». Conservez ce qui répond au besoin de mesure, limitez les accès et
          définissez la durée. Un identifiant publicitaire aide au rapprochement
          ; il ne remplace pas l’identifiant interne du lead ou de
          l’opportunité.
        </p>

        <p>
          Chaque événement importé doit avoir un dictionnaire court : nom,
          définition, déclencheur, responsable, date, valeur éventuelle, source
          et règle de déduplication. « Qualified lead » doit signifier la même
          chose lundi, vendredi, dans le CRM et dans Google. Si la définition
          change, datez la nouvelle version au lieu de comparer les périodes
          comme si rien n’avait changé.
        </p>

        <InfoBox
          variant="blue"
          title="Cycle long : importez une étape assez tôt, mais pas une étape artificielle"
        >
          La documentation Google consultée le 24 juillet 2026 indique que
          certaines conversions hors ligne envoyées plus de 90 jours après le
          dernier clic ne sont pas importées, et que la limite indiquée pour les
          conversions avancées pour prospects est de 63 jours. Si la vente prend
          six mois, choisissez éventuellement une étape intermédiaire stable —
          SQL accepté ou opportunité réelle — puis gardez le contrat dans votre
          analyse commerciale. Ne déclarez pas un lead faible « qualifié »
          uniquement pour nourrir l’algorithme.
        </InfoBox>

        <p>
          Google documente depuis le 15 juin 2026 une restriction de l’API
          Google Ads pour certains jetons développeur n’ayant pas envoyé
          d’import pendant la période précisée, et recommande alors la migration
          vers l’API Data Manager. Ce n’est pas une bascule universelle de tous
          les comptes. Vérifiez la méthode réellement disponible, l’éligibilité,
          les délais et le journal d’erreurs avant de modifier une intégration
          qui fonctionne.
        </p>

        <h2 id="donnees">
          Le hachage des coordonnées ne remplace ni l’information ni le choix
          juridique
        </h2>
        <p>
          Les conversions avancées pour prospects peuvent utiliser des données
          fournies par l’utilisateur, comme une adresse électronique, afin
          d’améliorer le rapprochement. Google explique que ces données sont
          hachées avant l’envoi selon la configuration. Cela ne transforme pas
          le traitement en zone sans règles.
        </p>

        <p>
          Les règles Google relatives aux données clients demandent notamment
          d’utiliser des données de première partie, d’informer les clients du
          partage avec des tiers pour la mesure publicitaire, d’obtenir le
          consentement lorsque la loi l’exige, de respecter les règles
          applicables et d’encadrer l’éventuel prestataire qui charge les
          données. Pour l’Europe, examinez aussi les traceurs déposés avant le
          consentement, le retrait, les finalités, les durées et les rôles avec
          votre DPO ou votre conseil selon le risque.
        </p>

        <p>
          Consent Mode indique aux balises Google comment se comporter à partir
          du choix transmis par votre dispositif de consentement. Il ne recueille
          pas ce choix à votre place : ce n’est ni une CMP, ni une preuve que
          l’information, le consentement éventuel et le retrait ont été
          correctement gérés. Testez séparément l’état par défaut, l’acceptation,
          le refus et le changement de choix.
        </p>

        <InfoBox
          variant="amber"
          title="Certaines conversions ne doivent pas être importées"
        >
          Google interdit notamment l’envoi d’informations de conversion liées à
          des catégories sensibles dans les fonctions couvertes par ses règles
          relatives aux données clients. Ses règles publicitaires ajoutent aussi
          des protections pour les enfants et les adolescents. Le hachage ne
          rend pas un envoi interdit acceptable. Avant toute mesure fondée sur
          des coordonnées, vérifiez le secteur, la nature de l’événement, l’âge
          potentiel des personnes, les règles Google et le droit applicable.
        </InfoBox>

        <GuideTable
          caption="Contrôles avant d’envoyer une étape commerciale à une plateforme"
          headers={["Sujet", "Question concrète", "Réponse insuffisante"]}
          rows={[
            [
              "Origine des données",
              "La personne les a-t-elle communiquées directement à l’entreprise dans ce parcours ?",
              "« Elles sont déjà dans notre CRM. »",
            ],
            [
              "Information et choix",
              "Le partage et l’usage publicitaire sont-ils expliqués, et le consentement obtenu lorsqu’il est requis ?",
              "« Les données sont hachées. »",
            ],
            [
              "Finalité et minimisation",
              "Chaque champ envoyé est-il nécessaire au résultat poursuivi ?",
              "« Plus nous envoyons de données, mieux c’est. »",
            ],
            [
              "Accès et prestataires",
              "Qui configure, charge, dépanne et peut télécharger les données ?",
              "« L’agence gère tout. »",
            ],
            [
              "Conservation et retrait",
              "Combien de temps les données restent-elles dans chaque système et comment arrêter le flux ?",
              "« La plateforme s’en occupe. »",
            ],
            [
              "Diagnostic",
              "Les erreurs, doublons et baisses de rapprochement sont-ils suivis sans exposer les données ?",
              "« Le statut est vert, donc le dispositif est conforme. »",
            ],
          ]}
        />

        <p>
          Un paramétrage techniquement accepté ne vaut pas validation juridique.
          À l’inverse, un texte juridique sans test du flux ne prouve pas que le
          système respecte les choix annoncés. Faites correspondre la page
          d’information, le gestionnaire de consentement, les balises, le CRM,
          l’import et les accès du prestataire. Le guide{" "}
          <Link href="/guides/rgpd-saas-b2b">RGPD pour un SaaS B2B</Link>{" "}
          détaille la manière de préparer ce dossier sans prétendre certifier la
          conformité.
        </p>

        <h2 id="cas-chiffre">
          Cas AtelierFlow : 24 000 € dépensés, quatre contrats, trois clients
          activés
        </h2>
        <p>
          AtelierFlow est un exemple inventé pour montrer le passage du clic à
          l’économie. La cohorte couvre trois mois d’acquisition et est suivie
          assez longtemps pour observer M12, défini ici comme douze mois après
          l’activation de chaque compte. La cohorte n’est donc déclarée mûre
          qu’après la dernière date d’activation plus douze mois. Les taux
          intermédiaires ne sont pas des références de marché.
        </p>

        <GuideTable
          caption="Coût directement attribué à la cohorte fictive"
          headers={["Poste", "Montant", "Ce qui est inclus"]}
          rows={[
            [
              "Média Google Ads",
              "12 000 €",
              "Dépense publicitaire de la cohorte.",
            ],
            [
              "Pilotage",
              "4 500 €",
              "Gestion et analyse directement rattachées au test.",
            ],
            [
              "Page et configuration initiale",
              "2 000 €",
              "Part affectée au test, non totalité du site.",
            ],
            [
              "Créations",
              "1 500 €",
              "Textes, visuels ou vidéos utilisés pendant la cohorte.",
            ],
            [
              "Données et diagnostics",
              "1 000 €",
              "Paramétrage, contrôle et résolution d’erreurs attribuables.",
            ],
            [
              "Temps commercial",
              "3 000 €",
              "60 heures valorisées fictivement à 50 €.",
            ],
            [
              "Total",
              "24 000 €",
              "Coût d’acquisition complet retenu dans l’exemple.",
            ],
          ]}
        />

        <FormulaBox>{`Dépense média : 12 000 €
CPC moyen observé : 6 €
Clics = 12 000 / 6 = 2 000

Taux clic → lead : 4 %
Leads = 2 000 × 4 % = 80

40 % correspondent à l’ICP : 80 × 40 % = 32
50 % deviennent SQL : 32 × 50 % = 16
50 % deviennent opportunités : 16 × 50 % = 8
50 % signent : 8 × 50 % = 4
75 % sont activés : 4 × 75 % = 3
2 clients sont encore présents à douze mois`}</FormulaBox>

        <p>
          Le tableau publicitaire peut afficher 80 conversions si le formulaire
          est l’objectif. L’entreprise, elle, a obtenu quatre contrats, trois
          activations et deux clients encore présents à douze mois. Aucun de ces
          nombres n’est « le bon » tout seul : ils répondent à des questions
          différentes.
        </p>

        <GuideTable
          caption="Ce que raconte chaque dénominateur"
          headers={["Indicateur", "Calcul fictif", "Ce qu’il permet de dire"]}
          rows={[
            [
              "CPL média",
              "12 000 / 80 = 150 €",
              "Prix publicitaire d’un formulaire, hors autres coûts.",
            ],
            [
              "CPL complet",
              "24 000 / 80 = 300 €",
              "Coût complet attribué à chaque lead de cette cohorte.",
            ],
            [
              "Coût par SQL",
              "24 000 / 16 = 1 500 €",
              "Coût d’un contact accepté par la vente selon la définition écrite.",
            ],
            [
              "Coût par opportunité",
              "24 000 / 8 = 3 000 €",
              "Coût d’un achat potentiel réellement ouvert.",
            ],
            [
              "CAC signé",
              "24 000 / 4 = 6 000 €",
              "Coût par contrat signé, avant activation.",
            ],
            [
              "CAC activé",
              "24 000 / 3 = 8 000 €",
              "Coût par client ayant atteint la première valeur.",
            ],
            [
              "Coût par client présent à M12",
              "24 000 / 2 = 12 000 €",
              "Lecture rétrospective, pas un CAC prédictif universel.",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Zéro vente ne donne jamais un CAC de 0 €"
        >
          Si une cohorte n’a encore signé aucun client, le CAC observé est non
          calculable, tandis que la dépense est bien réelle. Affichez « aucune
          vente à ce stade », le coût engagé et la maturité du cycle. Un zéro
          transformerait un échec ou une attente en résultat artificiellement
          favorable.
        </InfoBox>

        <h2 id="economie">
          Le CAC n’a de sens qu’en face de la marge et du délai de récupération
        </h2>
        <p>
          AtelierFlow facture fictivement 1 500 € par mois. Le service,
          l’hébergement et le support variables représentent 600 € par mois. La
          marge de contribution retenue est donc de 900 € par mois et par
          compte. Cette marge n’est ni le chiffre d’affaires ni le bénéfice
          final de l’entreprise : elle sert ici à voir combien de mois de
          service sont nécessaires pour récupérer l’acquisition.
        </p>

        <FormulaBox>{`Abonnement mensuel : 1 500 €
Coûts variables de service et support : 600 €
Marge de contribution mensuelle : 1 500 - 600 = 900 €

CAC par client activé : 8 000 €
Payback après activation = 8 000 / 900 = 8,9 mois

Cycle commercial fictif : 3 mois
Mise en route avant première valeur : 1 mois
Délai depuis le premier clic ≈ 3 + 1 + 8,9 = 12,9 mois`}</FormulaBox>

        <p>
          C’est le point que masque souvent un bon CAC : la trésorerie paie
          maintenant et récupère plus tard. Si la direction exige un retour
          douze mois après le premier clic, elle ne dispose que de huit mois de
          marge après trois mois de vente et un mois de mise en route. Le
          plafond correspondant serait alors 8 × 900 = 7 200 € par client
          activé. Le CAC fictif de 8 000 € dépasse ce plafond, même s’il paraît
          inférieur à une valeur vie optimiste.
        </p>

        <p>
          Le payback de 8,9 mois suppose aussi que les 900 € de marge
          contributive restent constants jusqu’au remboursement. Ce calcul
          simplifié ne modélise ni montée en charge, ni résiliation, ni impayé,
          ni décalage d’encaissement. Faites varier ces éléments si leur effet
          peut changer la décision.
        </p>

        <p>
          Ne multipliez pas automatiquement la marge mensuelle par une durée
          espérée de cinq ans. Utilisez d’abord la durée observée sur des
          clients comparables, puis montrez séparément les scénarios. Si vous
          n’avez pas encore de recul, écrivez « durée inconnue » et utilisez un
          plafond de payback supportable. Une inconnue n’est jamais égale à
          zéro, mais elle ne devient pas non plus une hypothèse favorable par
          défaut.
        </p>

        <GuideTable
          caption="Sensibilité du même exemple — valeurs attendues, pas personnes fractionnées"
          headers={["Changement isolé", "Activations et CAC", "Payback"]}
          rows={[
            [
              "Scénario central : page à 4 %",
              "3 activations · CAC 8 000 €",
              "8,9 mois",
            ],
            [
              "Page à 3 %, autres taux inchangés",
              "2,25 activations attendues · CAC 10 667 €",
              "11,9 mois",
            ],
            [
              "Passage SQL → opportunité divisé par deux",
              "1,5 activation attendue · CAC 16 000 €",
              "17,8 mois",
            ],
            [
              "CPC supérieur de 25 %, budget inchangé",
              "2,4 activations attendues · CAC 10 000 €",
              "11,1 mois",
            ],
          ]}
        />

        <p>
          Les nombres 2,25 ou 1,5 ne décrivent pas des fractions de client. Ils
          représentent une espérance mathématique appliquée aux mêmes taux pour
          comparer les scénarios. Dans une petite cohorte réelle, vous
          observerez deux ou trois clients et une incertitude beaucoup plus
          forte. Cette incertitude doit empêcher les conclusions trop rapides,
          pas empêcher tout apprentissage.
        </p>

        <h3>Regardez aussi le coût total sur plusieurs années</h3>
        <p>
          Un pilote de trois mois ne décrit pas le coût d’un programme maintenu.
          L’exemple suivant suppose un fonctionnement identique chaque année,
          sans inflation et sans changement de volume. Il sert à montrer
          l’engagement financier, pas à recommander un budget.
        </p>

        <GuideTable
          caption="Coût total fictif d’un dispositif maintenu à périmètre constant"
          headers={["Poste", "Démarrage", "Chaque année"]}
          rows={[
            ["Page, architecture de mesure et lancement", "8 000 €", "—"],
            ["Média", "—", "48 000 €"],
            ["Pilotage", "—", "18 000 €"],
            ["Créations", "—", "6 000 €"],
            ["Données et diagnostics", "—", "4 000 €"],
            ["Temps commercial attribué", "—", "12 000 €"],
            ["Total", "8 000 €", "88 000 € par an"],
          ]}
        />

        <FormulaBox>{`TCO 12 mois = 8 000 + 88 000 = 96 000 €
TCO 36 mois = 8 000 + (3 × 88 000) = 272 000 €
TCO 60 mois = 8 000 + (5 × 88 000) = 448 000 €`}</FormulaBox>

        <p>
          Ces montants fictifs sont hors TVA, inflation, CRM commun à
          l’entreprise, développement général du produit, coûts fixes non
          attribuables et évolution de périmètre. Pour comparer deux offres,
          utilisez les mêmes postes, la même durée et les mêmes responsabilités.
          Un poste « à définir » reste visible ; il ne vaut pas zéro.
        </p>

        <h2 id="cycle">
          Cycle long : séparez la vérité du CRM, l’attribution et l’effet causal
        </h2>
        <p>
          Trois mesures différentes sont souvent réunies dans une seule phrase :
          « Google a généré ce client ». Elles doivent être séparées.
        </p>

        <GuideTable
          caption="Trois questions, trois réponses différentes"
          headers={["Question", "Outil principal", "Limite"]}
          rows={[
            [
              "Que s’est-il passé dans la vente ?",
              "CRM ou registre : échanges, étape, montant, contrat, activation.",
              "L’origine peut être incomplète si les identifiants ont été perdus.",
            ],
            [
              "À quelle interaction la plateforme attribue-t-elle la vente ?",
              "Google Ads ou Analytics selon leurs réglages, fenêtres et modèles.",
              "Attribuer du crédit ne prouve pas que la vente n’aurait pas existé autrement.",
            ],
            [
              "Combien de ventes supplémentaires la publicité a-t-elle réellement causées ?",
              "Expérience contrôlée ou méthode d’incrémentalité adaptée.",
              "Le volume, le budget, l’éligibilité et les autres changements peuvent empêcher une conclusion solide.",
            ],
          ]}
        />

        <p>
          Une campagne marque illustre la différence. Une personne découvre
          AtelierFlow dans un article, reçoit une recommandation, puis cherche
          le nom et clique sur l’annonce. Google peut attribuer la vente au clic
          selon les paramètres. Cela ne signifie pas que l’annonce a créé toute
          la demande. Séparez marque et hors marque, demandez comment le
          prospect vous a connu et conservez les contacts antérieurs utiles.
        </p>

        <p>
          Pour une décision importante, un test contrôlé est préférable à un
          simple avant/après. Google présente Conversion Lift comme un outil
          d’incrémentalité comparant un groupe exposé et un groupe témoin, mais
          précise qu’il n’est pas accessible à tous les comptes. Un test
          géographique ou une expérience de campagne peut aussi être envisagé
          lorsque les zones, budgets et volumes le permettent. Pour un petit
          SaaS avec trois ventes, dites honnêtement que l’incrémentalité reste
          incertaine.
        </p>

        <GuideTable
          caption="Cadence de pilotage sans attendre aveuglément la vente finale"
          headers={["Rythme", "Ce que l’équipe examine", "But"]}
          rows={cadenceRows}
        />

        <p>
          Une campagne n’a pas besoin d’attendre six mois pour corriger un
          formulaire cassé, des requêtes d’emploi ou des prospects rappelés en
          cinq jours. Elle a besoin d’attendre la maturité commerciale avant de
          conclure définitivement sur le CAC et la rétention. Ces deux idées
          sont compatibles : corriger tôt ce qui est observable, juger tard ce
          qui dépend du cycle.
        </p>

        <h2 id="exploitation">
          Les faux leads et la saturation commerciale coûtent aussi de l’argent
        </h2>
        <p>
          « Lead non qualifié » est trop vague pour agir. Distinguez au moins :
          particulier, étudiant, emploi, concurrent, spam ou robot, coordonnées
          invalides, doublon, pays non vendu, taille incompatible, besoin absent
          du produit, projet trop tôt, budget incompatible, absence au
          rendez-vous et refus interne après analyse.
        </p>

        <p>
          Chaque motif pointe vers une correction différente. Le spam peut
          demander une protection technique et un contrôle du formulaire. Les
          étudiants peuvent venir d’une requête informationnelle. Les no-show
          peuvent révéler une promesse trop vague, un délai trop long ou un
          calendrier mal configuré. Les demandes « trop petites » peuvent
          justifier une offre en libre-service plutôt qu’une simple exclusion.
        </p>

        <GuideTable
          caption="La campagne peut être correcte et l’exploitation défaillante"
          headers={["Symptôme", "Question", "Action possible"]}
          rows={[
            [
              "Rappel après 48 heures",
              "Combien de SQL auraient répondu le jour même ?",
              "Alerte, propriétaire et délai de prise en charge réaliste.",
            ],
            [
              "Agenda de démo saturé",
              "Le budget achète-t-il des demandes que personne ne peut recevoir ?",
              "Réduire la diffusion ou ouvrir une capacité avant d’augmenter.",
            ],
            [
              "No-show élevé",
              "La personne comprend-elle qui elle va rencontrer et pourquoi ?",
              "Confirmation claire, rappel utile et qualification adaptée.",
            ],
            [
              "Doublons formulaire, appel et chat",
              "Le même projet est-il compté trois fois ?",
              "Identifiant et règle de rapprochement avant le reporting.",
            ],
            [
              "Beaucoup de refus sans motif",
              "Le problème vient-il de la campagne ou d’une vente trop sélective ?",
              "Échantillon relu ensemble par marketing et commercial.",
            ],
          ]}
        />

        <p>
          Mesurez le temps commercial dans le coût complet. Si 80 leads
          mobilisent 60 heures, une campagne qui double le volume peut
          nécessiter un recrutement ou dégrader les réponses. Le meilleur budget
          publicitaire n’est pas celui que la plateforme peut dépenser, mais
          celui que l’entreprise peut convertir sans abandonner ses clients
          actuels.
        </p>

        <h2 id="alternatives">
          Comparez Google Ads aux autres canaux sur le même résultat commercial
        </h2>
        <p>
          Comparer un CPL Google Ads à un coût d’impression LinkedIn ou à une
          visite SEO ne permet aucune décision. Choisissez un résultat commun —
          par exemple le SQL, le client activé ou la marge après douze mois — et
          incluez le temps, les créations, les outils et le délai.
        </p>

        <GuideTable
          caption="Ce que chaque canal sait surtout faire"
          headers={[
            "Canal",
            "Ce qu’il peut apporter et sa limite",
            "Même critère de décision",
          ]}
          rows={[
            [
              "Google Search",
              "Capter une demande formulée ; le volume, la concurrence, la marque et l’intention limitent la lecture.",
              "SQL hors marque, CAC activé et payback.",
            ],
            [
              "SEO",
              "Construire des pages retrouvables dans la durée ; intégrer production, délai, maintenance et absence de garantie.",
              "SQL et marge par cohorte organique, avec coût éditorial complet.",
            ],
            [
              "LinkedIn Ads",
              "Cibler fonctions et entreprises sans recherche immédiate ; intégrer création, attention, volume et coût commercial.",
              "SQL accepté et opportunité, pas formulaire prérempli seul.",
            ],
            [
              "Meta ou Demand Gen",
              "Faire émerger un problème ; intégrer créations fréquentes, intention moins explicite et attribution assistée.",
              "Cohorte exposée, progression et effet incrémental lorsque mesurable.",
            ],
            [
              "Prospection directe",
              "Choisir les comptes et apprendre leurs objections ; intégrer temps humain, liste, délivrabilité et règles.",
              "Réponses utiles, SQL, opportunités et coût commercial.",
            ],
            [
              "Partenaires et recommandations",
              "Transférer de la confiance ; intégrer dépendance, partage de valeur et volume moins contrôlable.",
              "Client activé, marge nette du partage et rétention.",
            ],
          ]}
        />

        <p>
          Notre opinion est qu’un SaaS jeune ne doit pas chercher immédiatement
          « le canal gagnant ». Il doit chercher une combinaison qui répond à
          deux besoins : apprendre pourquoi les bons comptes achètent et créer
          assez de demande sans dépasser la trésorerie. Search peut capter les
          entreprises déjà en recherche ; la prospection et les entretiens
          révèlent les mots absents ; le SEO construit les réponses durables.
          Les rôles sont différents.
        </p>

        <h2 id="kit-pilotage">
          Utilisez un dossier commun au dirigeant, au marketing et au commercial
        </h2>
        <p>
          Le kit de pilotage associé à ce guide doit vous permettre de
          renseigner la cible, les recherches, les événements, les coûts, les
          cohortes et les décisions sans reconstruire les fichiers à chaque
          revue. Il ne contient aucune donnée réelle et ne doit pas être rempli
          avec des informations personnelles tant que les accès, la conservation
          et le partage n’ont pas été définis.
        </p>

        <GoogleAdsSaasPilotCalculator />

        <p>
          Le calculateur fonctionne localement dans votre navigateur : aucune
          valeur n’est envoyée ou stockée par cet outil. Il bloque le verdict
          lorsqu’une donnée nécessaire reste inconnue, distingue le média du
          coût complet et exporte une note Markdown. Son verdict applique les
          seuils que vous saisissez ; il ne transforme pas ces seuils en
          recommandation financière ni les ventes attribuées en ventes créées
          par Google Ads.
        </p>

        <p>
          Les trois confirmations opérationnelles sont volontairement décochées
          dans l’exemple initial : ses nombres sont complets, mais le kit laisse
          encore la ventilation des campagnes, la mesure, le consentement et
          l’incrémentalité à vérifier. Cochez une porte seulement lorsqu’une
          preuve propre à votre entreprise permet de la confirmer.
        </p>

        <GuideTable
          caption="Ce que le kit doit produire avant le prochain palier"
          headers={["Fichier", "Utilité", "Résultat attendu"]}
          rows={[
            [
              "Mode d’emploi et dictionnaire",
              "Aligner les mots, les responsables et les règles.",
              "Une même définition de lead, SQL, opportunité, activation et coût.",
            ],
            [
              "ICP et comité d’achat",
              "Décrire les entreprises et personnes visées.",
              "Critères d’acceptation, de refus et blocages d’achat.",
            ],
            [
              "Recherches et exclusions",
              "Classer marque, problème, catégorie, concurrent et hors cible.",
              "Décisions datées plutôt qu’une liste copiée.",
            ],
            [
              "Dictionnaire d’événements",
              "Relier le site, le CRM et le produit.",
              "Déclencheurs, identifiants, valeurs et déduplication.",
            ],
            [
              "Cohorte commerciale",
              "Suivre le même groupe jusqu’au résultat.",
              "SQL, opportunités, contrats, activation et maturité visibles.",
            ],
            [
              "Coût complet et sensibilité",
              "Calculer CAC, payback et effet d’une hypothèse.",
              "Décision compréhensible même si le scénario se dégrade.",
            ],
            [
              "Journal de pilotage",
              "Conserver changement, motif et résultat.",
              "Éviter de réécrire l’histoire après la campagne.",
            ],
          ]}
        />

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <a
            href="/ressources/kit-pilotage-google-ads-saas-b2b.zip"
            download
            className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950 no-underline transition hover:border-emerald-500 dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-200"
          >
            <span className="block text-xs font-bold uppercase tracking-widest">
              Kit complet · ZIP
            </span>
            <strong className="mt-2 block text-lg">
              Télécharger les 11 fichiers de pilotage
            </strong>
            <span className="mt-2 block text-sm leading-relaxed opacity-80">
              Matrices CSV et documents Markdown, exemple AtelierFlow fictif,
              calculs vérifiables et relevé de décision. Aucun formulaire
              commercial.
            </span>
          </a>
          <a
            href="/ressources/kit-pilotage-google-ads-saas-b2b/00-mode-emploi.md"
            className="rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-950 no-underline transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          >
            <span className="block text-xs font-bold uppercase tracking-widest text-zinc-500">
              Avant de remplir les matrices
            </span>
            <strong className="mt-2 block text-lg">
              Lire le mode d’emploi
            </strong>
            <span className="mt-2 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ordre de travail, identifiants, déduplication, limites des calculs
              et données à ne pas saisir.
            </span>
          </a>
        </div>

        <p>
          Gardez un fichier brut non modifié et une copie datée pour chaque
          revue. Les taux historiques doivent pouvoir être recalculés avec la
          définition utilisée à l’époque. Le kit ne doit contenir aucune donnée
          personnelle réelle tant que ses accès, sa durée de conservation et son
          partage n’ont pas été définis.
        </p>

        <h2 id="decision">
          Décidez avec quatre portes : lancer, corriger, élargir ou arrêter
        </h2>
        <p>
          Une revue utile se termine par une action et un responsable, pas par «
          continuons à observer ». Utilisez les portes suivantes dans l’ordre.
        </p>

        <GuideTable
          caption="Décision de direction après la revue de cohorte"
          headers={[
            "Décision",
            "Quand elle est raisonnable",
            "Condition écrite",
          ]}
          rows={[
            [
              "Lancer un pilote limité",
              "Demande visible, offre claire, cible définie, page testée, suivi et capacité disponibles.",
              "Question, budget maximal, durée, cohorte et date de décision.",
            ],
            [
              "Corriger avant de dépenser plus",
              "Les recherches semblent utiles mais la page, le rappel, la qualification, le consentement ou les imports sont défaillants.",
              "Une seule cause principale corrigée et un test de bon fonctionnement.",
            ],
            [
              "Élargir par palier",
              "Une cohorte mûre produit des SQL et clients activés sous le plafond, sans saturer la vente.",
              "Nouveau plafond, hypothèse, capacité et seuil de retour en arrière.",
            ],
            [
              "Arrêter ou déplacer le budget",
              "Le marché ne cherche pas, le CAC mature dépasse la marge, la trésorerie ne supporte pas le délai ou aucune cause corrigeable n’est identifiée.",
              "Export des données, propriété des comptes, retrait des accès et enseignements conservés.",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Quatre arrêts immédiats">
          N’augmentez pas le budget si les conversions sont dupliquées, si
          personne ne traite les demandes, si les données sont partagées sans
          cadre vérifié ou si la page promet ce que le produit ne fournit pas.
          Ces problèmes ne nécessitent pas davantage de volume pour être
          compris.
        </InfoBox>

        <p>
          Lorsqu’une agence ou un prestataire intervient, l’entreprise doit
          conserver l’accès administrateur à ses comptes, balises, audiences,
          pages, créations et données utiles. Écrivez qui exporte quoi, sous
          quel format, qui retire les accès et comment le suivi continue après
          la fin du contrat. Une campagne rentable mais impossible à reprendre
          crée une dépendance qui appartient au coût total.
        </p>

        <GuideInlineCTA
          title="Relier votre budget Google Ads aux clients réellement activés"
          description="Décrivez votre SaaS, la cible, le cycle commercial, les outils déjà utilisés et la marge que vous pouvez documenter. Nous pouvons préparer un pilote, remettre à plat la mesure ou conclure que Google Ads n’est pas le bon prochain investissement."
          tags={[
            "Cohorte jusqu’au client",
            "CAC et payback",
            "Décision sans faux benchmark",
          ]}
          ctaLabel="Faire examiner mon acquisition"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="glossaire">
          Glossaire pour décider sans parler entre spécialistes
        </h2>
        <p>
          Vous pouvez remplacer ces sigles dans vos propres tableaux. Leur seule
          utilité est de donner le même sens aux chiffres lus par la direction,
          le marketing, la vente et le produit.
        </p>

        <GuideTable
          caption="Les mots utilisés dans ce guide"
          headers={["Terme", "Définition simple"]}
          rows={glossary}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources produit et réglementaires vérifiées le 24 juillet 2026. Les
          écrans, noms de campagnes, méthodes d’import, restrictions, délais et
          conditions d’éligibilité peuvent évoluer. Vérifiez la documentation et
          le compte utilisés avant toute mise en œuvre. Les calculs sont
          illustratifs et ne remplacent ni vos données, ni un avis juridique, ni
          une prévision financière.
        </p>
        <ul>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/9510373?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement des campagnes sur le Réseau de Recherche
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/10724817?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              présentation de Performance Max
            </a>
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/16669487?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              exclusions de marque
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/15726455?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              mots-clés négatifs dans Performance Max
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/13695777?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              campagnes Demand Gen
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/17051545?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              évolution de Google Display Ads vers Demand Gen
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/15910187?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement d’AI Max dans les campagnes Search
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/15081888?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              délais et bonnes pratiques des importations hors ligne
            </a>
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/10029210?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              questions fréquentes
            </a>{" "}
            et{" "}
            <a
              href="https://developers.google.com/google-ads/api/docs/deprecations"
              target="_blank"
              rel="noopener noreferrer"
            >
              restrictions et évolutions de l’API Google Ads
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/7475709?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              règles relatives à l’utilisation des données clients
            </a>
            , notamment les restrictions de mesure associées aux catégories
            sensibles.
          </li>
          <li>
            Google Ads — protections publicitaires pour{" "}
            <a
              href="https://support.google.com/adspolicy/answer/14170968?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              les enfants
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/adspolicy/answer/12205906?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              les adolescents
            </a>
            .
          </li>
          <li>
            Google Tag Platform —{" "}
            <a
              href="https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement de Consent Mode
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/12003020?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversion Lift et mesure de l’incrémentalité
            </a>
            .
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi"
              target="_blank"
              rel="noopener noreferrer"
            >
              règles applicables aux cookies et autres traceurs
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
