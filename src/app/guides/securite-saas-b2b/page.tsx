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
import { SaasSecurityDecisionTool } from "@/components/guides/SaasSecurityDecisionTool";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide, guideRobots } from "@/lib/guides";

const guide = getGuide("securite-saas-b2b");

export const metadata = {
  ...buildGuideMetadata(
    guide,
    "Sécurité SaaS B2B : décider quoi prouver, corriger ou refuser avant une vente",
  ),
  robots: guideRobots(guide),
};

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Sécurité SaaS B2B avant une vente",
);

const faqItems: GuideFAQItem[] = [
  {
    question:
      "Peut-on signer si une exigence de sécurité n’est pas encore satisfaite ?",
    answer:
      "Parfois, mais seulement si l’exigence est légalement reportable, non critique pour le périmètre vendu et couverte par une mesure temporaire vérifiable. Le risque restant doit être qualifié et accepté par une autorité interne compétente ; le plan doit être financé, attribué, daté et assorti d’un critère de validation. L’accord écrit de l’acheteur s’ajoute à cette décision : il ne répare ni un contrôle essentiel défaillant ni une obligation applicable. L’atelier de ce guide ne décide jamais qu’une obligation légale ou sectorielle applicable peut attendre après la signature : faites-la qualifier par la personne compétente.",
  },
  {
    question:
      "Une certification ISO 27001 ou un rapport SOC 2 prouve-t-il que le SaaS est sécurisé ?",
    answer:
      "Non. ISO 27001 porte sur un système de management dans un périmètre certifié. Un rapport SOC 2 porte sur un système, des critères, des contrôles et, selon le type, une date ou une période définie. Il faut lire l’entité, le produit, les exclusions, la conclusion, les exceptions et les contrôles qui restent à la charge du client. Aucun logo ne garantit l’absence future d’incident.",
  },
  {
    question: "Le fournisseur cloud sécurise-t-il tout le SaaS ?",
    answer:
      "Non. Il protège les couches et services décrits dans son offre. L’éditeur reste notamment responsable de son code, de ses configurations, de ses comptes, de la séparation entre clients, de ses secrets, de ses procédures et des fonctions qu’il promet. Le client conserve aussi des responsabilités, par exemple sur ses utilisateurs, ses terminaux et ses propres réglages. Cette répartition doit être écrite service par service.",
  },
  {
    question: "Une sauvegarde automatique suffit-elle à prouver la reprise ?",
    answer:
      "Non. Il faut d’abord faire décider par le métier la perte de données et la durée d’interruption acceptables, puis restaurer un périmètre représentatif, chronométrer la reprise et vérifier que les utilisateurs peuvent réellement retravailler. Une console technique verte n’est pas une validation métier.",
  },
  {
    question: "Tout incident doit-il être déclaré à la CNIL sous 72 heures ?",
    answer:
      "Non. Le responsable de traitement notifie à la CNIL une violation de données personnelles présentant un risque, si possible dans les 72 heures après en avoir pris connaissance ; le sous-traitant informe le responsable dans les meilleurs délais. Toute violation doit être documentée. Un incident technique n’est pas automatiquement une violation à notifier, et les délais contractuels ou sectoriels peuvent être différents.",
  },
  {
    question:
      "Peut-on transmettre un test d’intrusion ou un rapport d’audit au prospect ?",
    answer:
      "Pas automatiquement. Vérifiez le droit de diffusion, les destinataires, le périmètre, la date, les faiblesses encore ouvertes et les informations exploitables. Une synthèse datée, une consultation encadrée ou un accès révocable peut être préférable. Ne partagez ni secret, ni donnée personnelle inutile, ni information concernant un autre client.",
  },
  {
    question:
      "Faut-il acheter une plateforme de conformité dès le premier grand compte ?",
    answer:
      "Pas forcément. Si les contrôles critiques sont inconnus ou défaillants, une plateforme centralisera surtout des réponses fragiles. Un registre simple et des corrections ciblées peuvent suffire pour quelques ventes. Une plateforme devient plus intéressante lorsque les questionnaires se répètent, que les contrôles sont déjà exploités et qu’une personne maintient réellement les pièces.",
  },
  {
    question:
      "Le Data Act rend-il déjà toute sortie d’un SaaS gratuite et réalisable en 30 jours ?",
    answer:
      "Non. Le chapitre VI du Data Act encadre le changement de fournisseur pour les services de traitement de données qui entrent dans son champ, y compris des services logiciels. Au 25 juillet 2026, des frais de changement réduits et directement liés au processus peuvent encore subsister jusqu’au 12 janvier 2027. La période transitoire maximale normale de 30 jours prévue par l’article 25 ne garantit pas qu’une migration complète sera techniquement réussie en 30 jours. Le service, le contrat, les données exportables, le préavis, les exceptions et le cas réel doivent être vérifiés.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "01",
    title: "Le risque avant le logo",
    description: "",
    color: "blue",
  },
  {
    number: "02",
    title: "5 blocages à tester",
    description: "",
    color: "violet",
  },
  {
    number: "03",
    title: "Capacité avant promesse",
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
    href: "/guides/rgpd-saas-b2b",
    label: "Préparer le dossier RGPD du SaaS",
  },
  {
    href: "/guides/cahier-des-charges-saas",
    label: "Inscrire les exigences dans le cahier des charges",
  },
  {
    href: "/guides/contrat-tma-application",
    label: "Encadrer la maintenance et les responsabilités",
  },
  {
    href: "/services/securite-rgpd",
    label: "Voir l’accompagnement sécurité et RGPD",
  },
];

const tocItems = [
  { id: "verdict", label: "Choisir entre cinq décisions honnêtes" },
  { id: "notions", label: "Séparer sécurité, conformité et assurance" },
  { id: "blocages", label: "Repérer ce qui suspend la signature" },
  { id: "risque", label: "Relier risque, contrôle, résultat et décideur" },
  { id: "responsabilites", label: "Répartir les responsabilités du cloud" },
  { id: "preuves", label: "Juger la force d’un élément fourni" },
  { id: "acces", label: "Contrôler accès et séparation entre clients" },
  { id: "logiciel", label: "Suivre secrets, dépendances et vulnérabilités" },
  { id: "restauration", label: "Tester jusqu’au retour au travail" },
  { id: "sortie", label: "Tester la sortie et le transfert des données" },
  { id: "incident", label: "Distinguer les quatre chronologies d’incident" },
  { id: "capacite", label: "Vérifier si la date de vente est tenable" },
  {
    id: "comparatif",
    label: "Comparer dossier, tests et assurances formelles",
  },
  { id: "atelier-decision", label: "Produire une décision locale" },
  { id: "partage", label: "Partager les documents sans créer un risque" },
  { id: "pilotage", label: "Maintenir le dossier après la vente" },
  { id: "sources", label: "Sources, dates et limites" },
];

const decisionCards = [
  {
    number: "01",
    title: "Répondre sur le périmètre prouvé",
    text: "Les contrôles demandés existent, les pièces couvrent le produit vendu et aucun risque élevé connu ne reste sans traitement.",
    className:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    number: "02",
    title: "Corriger avant de signer",
    text: "Un contrôle indispensable est incomplet ou a échoué, mais sa correction et son contre-test tiennent dans la capacité disponible.",
    className:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    number: "03",
    title: "Signer sous conditions limitées",
    text: "Le seul écart restant est non critique, reportable, couvert temporairement, financé, daté et accepté d’abord par l’autorité interne compétente.",
    className:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    number: "04",
    title: "Faire intervenir un tiers",
    text: "L’acheteur exige une assurance indépendante, le secteur impose une qualification particulière ou l’équipe ne sait pas évaluer le risque.",
    className:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    number: "05",
    title: "Reporter, réduire ou refuser",
    text: "Une condition formelle manque, un risque critique reste inconnu ou la charge ne tient pas avant la date commerciale.",
    className:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
];

const evidenceLevels = [
  {
    level: "1",
    title: "Affirmé",
    example: "« Nous sécurisons les accès. »",
    use: "Point de départ d’une recherche, jamais preuve suffisante.",
  },
  {
    level: "2",
    title: "Documenté",
    example: "Une politique, une architecture ou une procédure datée.",
    use: "Montre l’intention et la conception, pas l’exécution.",
  },
  {
    level: "3",
    title: "Observé",
    example: "Configuration, journal ou trace d’une action réelle.",
    use: "Montre un état à une date, dans un périmètre précis.",
  },
  {
    level: "4",
    title: "Testé",
    example: "Scénario exécuté, résultat, échec et contre-test conservés.",
    use: "Montre que le contrôle a produit un résultat dans les conditions du test.",
  },
  {
    level: "5",
    title: "Examiné indépendamment",
    example: "Audit, certification ou rapport avec périmètre et conclusion.",
    use: "Ajoute une assurance externe ; ne rend pas le produit infaillible.",
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
          { label: "Sécurité d’un SaaS B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre acheteur demande des éléments concrets sur la sécurité avant de signer. Voici comment distinguer ce qui est vérifié, ce qui doit être corrigé, ce qui peut être planifié et ce qu’il faut honnêtement refuser."
        heroAction={{
          href: "#atelier-decision",
          label: "Tester la décision",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes avant une vente SaaS B2B"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous êtes à quelques jours de signer un grand compte, mais sa
          direction informatique demande des éléments concrets sur les accès, la
          séparation des données, les sauvegardes ou les incidents. Ne répondez
          ni par un « oui » de convenance, ni par un logo. Pour chaque exigence,
          établissez le produit et les fonctions vendus, le risque, le contrôle,
          le résultat récent et la personne qui décide. Un point absent ne peut
          attendre après la signature que si la loi et le contrat le permettent,
          s’il est non critique, couvert temporairement, financé et accepté par
          une autorité interne compétente. L’accord du client vient en plus : il
          ne répare jamais un isolement défaillant, un accès critique inconnu,
          une restauration non démontrée ou une obligation applicable. Dans ces
          cas, corrigez, réduisez ce que vous vendez ou reportez la vente.
        </p>

        <InfoBox
          variant="amber"
          title="La règle qui protège à la fois la vente et l’entreprise"
        >
          <p className="m-0">
            Une exigence absente n’est pas automatiquement « planifiée après la
            vente ». Le plan doit nommer la mesure temporaire, le propriétaire,
            la charge, l’échéance et le résultat qui fermera l’écart. Si le
            risque restant est inacceptable ou l’obligation non reportable,
            aucune signature commerciale ne transforme ce défaut en décision
            sûre.
          </p>
        </InfoBox>

        <p>
          Ce guide aide un dirigeant à préparer une décision et une discussion
          avec son acheteur. Il ne constitue ni un audit de sécurité, ni un test
          d’intrusion, ni une certification, ni un avis juridique ou sectoriel.
          Pour la santé, la finance, la défense, un service essentiel ou toute
          activité réglementée, faites confirmer le périmètre et les obligations
          par les spécialistes compétents.
        </p>

        <GuideToc items={tocItems} />

        <h2 id="verdict">
          La bonne réponse n’est pas toujours « oui » : choisissez entre cinq
          décisions
        </h2>
        <p>
          Un questionnaire de sécurité mélange souvent une condition d’achat,
          une préférence de la direction informatique, une obligation applicable
          et une demande de preuve. Les traiter comme une seule liste de
          contrôle conduit soit à surinvestir, soit à promettre l’impossible.
          Commencez par demander : « Cette exigence bloque-t-elle réellement le
          contrat, et quel risque cherche-t-elle à réduire sur le produit vendu
          ? »
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {decisionCards.map((decision) => (
            <article
              key={decision.number}
              className={`rounded-2xl border p-5 ${decision.className}`}
            >
              <p className="m-0 text-xs font-bold tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                DÉCISION {decision.number}
              </p>
              <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
                {decision.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {decision.text}
              </p>
            </article>
          ))}
        </div>

        <p>
          Notre position est volontairement conservatrice : vérifiez et corrigez
          les contrôles critiques avant d’acheter un badge ou une plateforme de
          conformité. Le contre-cas existe. Si un appel d’offres exige
          formellement une certification ou si vos acheteurs réclament tous le
          même rapport indépendant, cette démarche peut devenir un
          investissement commercial et de gouvernance pertinent.
        </p>

        <h2 id="notions">
          Sécurité, conformité, résilience et assurance ne répondent pas à la
          même question
        </h2>
        <p>
          Une grande partie des malentendus vient d’un vocabulaire trop vague. «
          Nous sommes conformes » ne dit pas à quel texte, sur quel périmètre ni
          avec quelle preuve. « Nous sommes certifiés » ne dit pas si la
          fonction utilisée par l’acheteur entre dans le certificat. Séparez les
          six notions suivantes avant de répondre.
        </p>

        <GuideTable
          caption="Six notions à ne pas remplacer les unes par les autres"
          headers={["Notion et question utile", "Élément adapté", "Limite"]}
          rows={[
            [
              "Sécurité — le contrôle réduit-il réellement le risque ?",
              "Configuration, journal, exercice, test et contre-test.",
              "L’absence future d’incident.",
            ],
            [
              "Conformité — une exigence applicable est-elle respectée pour l’offre vendue ?",
              "Texte, rôle, contrat, cartographie et contrôle selon le cas.",
              "La sécurité absolue du produit.",
            ],
            [
              "Résilience — le service redevient-il utilisable dans les limites du métier ?",
              "Objectifs métier, restauration chronométrée et validation fonctionnelle.",
              "La confidentialité ou la conformité globale.",
            ],
            [
              "Assurance indépendante — un tiers a-t-il examiné des critères et un champ définis ?",
              "Audit, test d’intrusion, certification ou rapport avec conclusion.",
              "L’exhaustivité de toutes les fonctions.",
            ],
            [
              "Assurance cyber — quelles conséquences financières sont transférées ?",
              "Police, garanties, exclusions, plafonds et obligations.",
              "La prévention ou la disparition de la responsabilité.",
            ],
            [
              "Responsabilité contractuelle — qui promet quoi, quand et avec quel recours ?",
              "Contrat, annexe sécurité, accord sur le traitement des données personnelles et niveau de service.",
              "L’effacement d’un défaut technique ou d’une obligation légale.",
            ],
          ]}
        />

        <h3>
          Un badge d’entreprise ne répond pas à une question sur le logiciel
          livré
        </h3>
        <p>
          Une entreprise peut avoir une organisation documentée tandis qu’une
          fonction précise du produit reste mal isolée, non maintenue ou jamais
          testée. Le{" "}
          <a
            href="https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice"
            target="_blank"
            rel="noopener noreferrer"
          >
            code britannique volontaire de sécurité du logiciel
          </a>{" "}
          vise explicitement les logiciels vendus à des organisations, dont les
          fournisseurs SaaS, et regroupe 14 principes de base. Le{" "}
          <a
            href="https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide américain Secure by Demand de la CISA et du FBI
          </a>{" "}
          apporte un autre regard d’acheteur. Ce sont des repères internationaux
          volontaires, pas des obligations françaises ni des labels.
        </p>
        <p>
          Pour chaque réponse institutionnelle, revenez donc au produit :
          quelles versions sont maintenues et jusqu’à quand, quelles fonctions
          sont incluses, quels réglages sont sûrs dès l’installation, comment
          l’environnement de construction et les mises à jour sont protégés,
          comment une vulnérabilité peut être signalée puis corrigée, quels
          journaux le client peut utiliser et quel dirigeant répond de ces
          engagements ? Demandez enfin un résultat récent qui couvre exactement
          l’offre vendue.
        </p>

        <h2 id="blocages">
          Cinq familles de défauts doivent pouvoir arrêter la signature
        </h2>
        <p>
          Un faible score moyen n’a aucun sens ici : dix contrôles satisfaits ne
          compensent pas une séparation entre clients défaillante. Concentrez la
          première revue sur les scénarios capables de compromettre plusieurs
          clients, d’empêcher la reprise ou de rendre une réaction impossible.
        </p>

        <div className="not-prose my-8 space-y-4">
          {[
            {
              title: "Accès privilégiés, techniques et d’urgence",
              test: "Pouvez-vous nommer chaque identité, son propriétaire, son usage, ses droits, son mode d’authentification, la dernière utilisation et le moyen de la révoquer en urgence ?",
              stop: "Compte partagé, secret permanent sans propriétaire, ancien intervenant actif ou accès d’urgence jamais essayé.",
            },
            {
              title: "Séparation entre entreprises clientes",
              test: "Un utilisateur, une interface de programmation (API), un export, une recherche, une pièce jointe, une tâche asynchrone, un cache ou le support peuvent-ils lire ou modifier les données d’un autre client ?",
              stop: "L’expression « multi-tenant », c’est-à-dire plusieurs clients dans le même service, est la seule justification, ou le refus d’accès n’a jamais été testé sur un environnement représentatif.",
            },
            {
              title: "Restauration réellement utilisable",
              test: "La dernière copie exploitable, la durée de reprise technique et la validation métier respectent-elles les limites décidées par l’activité ?",
              stop: "Une sauvegarde existe, mais personne n’a restauré les données et rejoué les actions indispensables.",
            },
            {
              title: "Secrets, dépendances et vulnérabilités",
              test: "Existe-t-il un inventaire utile, un canal de signalement, une qualification initiale, un propriétaire, une correction, un contre-test et une décision sur les versions en fin de vie ?",
              stop: "Une vulnérabilité critique ouverte, une clé exposée, une dépendance non maintenue ou aucune capacité de correction.",
            },
            {
              title: "Détection et réaction à incident",
              test: "Qui est joignable, qui qualifie, qui limite l’impact, qui conserve la chronologie et qui décide des informations contractuelles ou réglementaires ?",
              stop: "Aucun responsable, aucun canal testé, aucune horloge commune ou une promesse de notification que l’équipe ne peut pas tenir.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <strong>À tester :</strong> {item.test}
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-rose-800 dark:text-rose-300">
                    <strong>Suspendez si :</strong> {item.stop}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p>
          Le{" "}
          <a
            href="https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/technically-enforced-separation-in-the-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCSC décrit la séparation dans le cloud comme une propriété
            techniquement imposée
          </a>
          , et non comme un simple nom de compte. Ce guide britannique n’est pas
          une obligation française : il apporte ici un cadre technique utile à
          confronter à votre architecture.
        </p>

        <h2 id="risque">
          Une réponse crédible relie le risque, le contrôle, le résultat et la
          personne qui accepte ce qui reste
        </h2>
        <p>
          Ne commencez pas par « avons-nous une authentification multifacteur
          (MFA) ? ». Commencez par la situation redoutée. Le MFA peut réduire le
          risque de compromission d’un compte ; il ne corrige ni un droit
          excessif, ni un compte technique oublié, ni une séparation défaillante
          dans le code. La matrice suivante force une décision complète.
        </p>

        <GuideTable
          caption="Exemples fictifs de chaîne de décision, à remplacer par vos faits"
          headers={[
            "Scénario et impact",
            "Contrôle et résultat",
            "Risque restant et décision",
          ]}
          rows={[
            [
              "Un ancien prestataire conserve un accès administrateur — lecture, export ou modification de plusieurs clients.",
              "Revue des comptes : un accès retrouvé et fermé ; journaux relus.",
              "Risque réduit mais révocation tardive à analyser ; direction technique propriétaire.",
            ],
            [
              "Un identifiant de client est changé dans une URL d’API — accès aux données d’une autre entreprise.",
              "Test négatif interface et API : refus ; export asynchrone pas encore testé.",
              "Risque critique encore inconnu sur l’export : signature suspendue.",
            ],
            [
              "Une base de production est perdue — arrêt des opérations et perte de saisies.",
              "Restauration terminée en 3 h 45, objectif métier fixé à 3 h.",
              "Objectif manqué : correction puis nouvel exercice avant engagement.",
            ],
            [
              "Une dépendance critique devient vulnérable — exploitation possible ou indisponibilité.",
              "Version inventoriée, exposition qualifiée, correctif déployé et contre-testé.",
              "Risque résiduel documenté ; surveillance et cause de récidive attribuées.",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Le risque résiduel doit avoir un propriétaire et une autorité"
        >
          <p className="m-0">
            Le développeur peut décrire un défaut ; il ne doit pas accepter seul
            un risque commercial, juridique et opérationnel pour l’entreprise.
            Nommez la fonction qui décide, les informations qu’elle a reçues et
            la date. L’acheteur accepte ensuite la réserve contractuelle le cas
            échéant : il ne remplace pas cette décision interne.
          </p>
        </InfoBox>

        <h2 id="responsabilites">
          « Notre cloud s’en occupe » est une réponse incomplète
        </h2>
        <p>
          Un service SaaS assemble une infrastructure, du code, des
          configurations, des sous-traitants et les usages du client. Pour le
          RGPD, la qualification dépend en outre des traitements et du contrôle
          effectif des finalités : la{" "}
          <a
            href="https://cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle depuis le 28 mai 2026 que les rôles des acteurs du
            cloud s’analysent au cas par cas
          </a>
          . Un contrat ne suffit pas à rendre vraie une qualification qui ne
          correspond pas aux faits.
        </p>

        <GuideTable
          caption="Répartition à adapter service par service et non à copier comme une règle universelle"
          headers={[
            "Acteur et responsabilités",
            "Éléments à demander",
            "Erreur fréquente",
          ]}
          rows={[
            [
              "Fournisseur cloud — sécurité des couches et services décrits dans son offre.",
              "Documentation, périmètre, configuration attendue, incidents et rapports applicables.",
              "Hériter automatiquement de son badge ou de sa qualification.",
            ],
            [
              "Éditeur SaaS — code, configuration, accès, séparation, secrets, reprise, support et sous-traitants activés.",
              "Tests produit, journaux, revues, exercices, registre et contrats cohérents.",
              "Répondre uniquement avec le nom de l’hébergeur.",
            ],
            [
              "Entreprise cliente — utilisateurs, terminaux, rôles attribués, intégrations et réglages qui lui reviennent.",
              "Matrice des responsabilités et contrôles attendus du client.",
              "Promettre le résultat d’une configuration que l’éditeur ne contrôle pas.",
            ],
            [
              "Autres sous-traitants — service fourni, données reçues, lieux, accès, sous-traitance ultérieure et sortie.",
              "Liste par service, rôle, pays, transfert, dernière revue et notification de changement.",
              "Publier une liste de logos sans usage ni flux.",
            ],
          ]}
        />

        <p>
          Pour les traitements en sous-traitance, l’
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD
          </a>{" "}
          encadre notamment le contenu du contrat et le recours à d’autres
          sous-traitants. Le registre opérationnel doit donc relier chaque
          fournisseur au service, à la finalité, aux données, au rôle, au lieu,
          aux éventuels transferts, au mécanisme de changement et à sa dernière
          revue. Pour approfondir ce point, utilisez le{" "}
          <Link href="/guides/rgpd-saas-b2b">
            guide de préparation RGPD d’un SaaS B2B
          </Link>
          .
        </p>

        <h3>
          Prouvez le chiffrement, la gestion des clés et les journaux sans les
          confondre avec l’isolement
        </h3>
        <p>
          « Les données sont chiffrées » reste trop vague. La réponse doit
          distinguer les données en transit, les données stockées et les copies
          de sauvegarde, puis nommer les flux et les stockages réellement
          couverts. Le{" "}
          <a
            href="https://csrc.nist.gov/projects/key-management/key-management-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-57
          </a>{" "}
          fournit un repère international pour le cycle de vie des clés, tandis
          que le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-53
          </a>{" "}
          structure notamment la protection des transmissions, des données
          stockées et des journaux. Ces références américaines ne créent pas une
          obligation française universelle : elles servent ici à ne pas oublier
          les questions décisives.
        </p>
        <GuideTable
          caption="Quatre réponses acheteur à démontrer séparément"
          headers={[
            "Question exacte",
            "Éléments vérifiables",
            "Limite à écrire",
          ]}
          rows={[
            [
              "Quels flux sont protégés pendant le transport ?",
              "Inventaire des entrées, sorties et flux internes ; configuration observée, certificat, test et date de renouvellement.",
              "Une connexion chiffrée ne prouve ni l’identité autorisée ni la séparation entre clients.",
            ],
            [
              "Quels stockages et quelles copies sont protégés ?",
              "Bases, fichiers, index, files de messages, journaux et sauvegardes ; configuration, portée, restauration et exception connues.",
              "« Chiffré au repos » ne dit pas qui peut déchiffrer ni ce qui reste hors du mécanisme.",
            ],
            [
              "Qui maîtrise les clés pendant tout leur cycle de vie ?",
              "Propriétaire, génération, stockage, droits, séparation des rôles, rotation, révocation, récupération et destruction ; accès journalisés.",
              "Une clé gérée par le fournisseur peut convenir, mais ne vaut pas automatiquement clé propre au client ou contrôle exclusif.",
            ],
            [
              "Les journaux permettent-ils réellement d’enquêter ?",
              "Événements retenus, identité et entreprise concernées, horodatage, résultat, rétention, intégrité, export et alerte exercée.",
              "Ne consignez pas inutilement secrets ou données personnelles ; un journal non consulté ne prouve pas la détection.",
            ],
          ]}
        />
        <p>
          Demandez un exemple non sensible : un accès administrateur refusé, une
          rotation de clé ou une alerte rejouée. La pièce doit montrer le
          résultat, l’heure, le produit et la limite du test. Elle ne doit
          jamais exposer la clé, le secret, le contenu d’un autre client ou un
          détail d’architecture directement exploitable.
        </p>

        <h2 id="preuves">
          Un élément utile doit être assez fort, actuel et rattaché au produit
          vendu
        </h2>
        <p>
          La question n’est pas seulement « avons-nous un document ? ». Notez
          qui l’a produit, ce qu’il couvre, la date ou la période observée, le
          résultat, les exceptions, les corrections encore ouvertes et
          l’événement qui l’invaliderait. Une preuve peut devenir obsolète dès
          qu’un flux, un fournisseur, une version ou une architecture change.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {evidenceLevels.map((level) => (
            <article
              key={level.level}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-800 dark:bg-violet-950 dark:text-violet-200">
                {level.level}
              </span>
              <h3 className="mb-0 mt-3 text-base font-bold text-zinc-950 dark:text-white">
                {level.title}
              </h3>
              <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {level.example}
              </p>
              <p className="mb-0 mt-3 text-xs font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                {level.use}
              </p>
            </article>
          ))}
        </div>

        <p>
          Le niveau attendu dépend du risque et de la demande. Une politique
          peut suffire pour expliquer une gouvernance ; un accès critique ou une
          restauration nécessite plutôt une trace ou un test. Un rapport
          indépendant ajoute de l’assurance, mais uniquement sur l’entité, le
          système, les critères et la période qu’il décrit.
        </p>

        <h3>
          Transformez une promesse en affirmation que l’on peut contredire
        </h3>
        <p>
          Le{" "}
          <a
            href="https://www.ncsc.gov.uk/information/principles-based-assurance"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCSC britannique
          </a>{" "}
          structure l’assurance en trois éléments : une affirmation vraie ou
          fausse sur un objet précis, un raisonnement qui la décompose, puis des
          faits qui soutiennent ou contredisent chaque étape. Cette méthode ne
          certifie rien ; elle empêche surtout une collection de documents de
          masquer un saut logique.
        </p>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "1. Affirmation",
              text: "« Une entreprise cliente ne peut pas lire les données d’une autre par les fonctions vendues. »",
            },
            {
              title: "2. Raisonnement",
              text: "Interface, API, recherche, fichiers, exports, tâches et support appliquent tous l’identité et l’entreprise autorisées.",
            },
            {
              title: "3. Faits et limite",
              text: "Les essais A vers B échouent sur chaque porte. Si l’export asynchrone manque, l’affirmation globale reste trop large.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {item.title}
              </h4>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <h2 id="acces">
          Contrôlez les identités humaines et techniques, puis essayez de
          franchir la frontière entre deux clients
        </h2>
        <p>
          Les comptes utilisateurs visibles ne sont qu’une partie du sujet.
          Listez aussi les administrateurs, le support, les prestataires, les
          comptes de déploiement, les intégrations, les clés d’API, les tâches
          planifiées et l’accès « bris de glace » utilisé en urgence. Pour
          chaque identité technique, consignez au minimum :
        </p>
        <ul>
          <li>un propriétaire et un objectif métier ou technique précis ;</li>
          <li>les droits minimaux et le périmètre de données accessible ;</li>
          <li>
            le mécanisme d’authentification et le cycle de vie du secret ;
          </li>
          <li>la dernière utilisation, les alertes et la prochaine revue ;</li>
          <li>la procédure de rotation et de révocation d’urgence ;</li>
          <li>
            la dépendance qui casserait si le compte était immédiatement
            désactivé.
          </li>
        </ul>
        <p>
          Le{" "}
          <a
            href="https://www.ncsc.gov.uk/collection/cloud/using-cloud-services-securely/using-saas-securely"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide du NCSC sur l’usage sûr des SaaS
          </a>{" "}
          insiste notamment sur la visibilité, l’autorisation, la limitation et
          la surveillance des identités utilisées par les intégrations. C’est
          une recommandation britannique, pas une qualification réglementaire
          française.
        </p>

        <h3>Le test d’isolement doit traverser toutes les portes du produit</h3>
        <p>
          Créez deux entreprises entièrement fictives, A et B, dans un
          environnement représentatif. Depuis A, tentez d’accéder à un objet de
          B par l’interface, l’URL directe, l’API, la recherche, les pièces
          jointes, l’export, une notification, une tâche asynchrone, un cache et
          une action du support. Utilisez des données fictives : un test de
          sécurité ne justifie pas de recopier les données réelles d’un client.
        </p>
        <InfoBox
          variant="amber"
          title="Un refus visuel ne suffit pas si l’API ou l’export répond encore"
        >
          <p className="m-0">
            Conservez le scénario, les identités, les objets, le résultat
            attendu, le résultat observé, les journaux et le contre-test après
            correction. Un test sur une seule page ne permet pas d’affirmer que
            « les données de chaque client sont isolées ».
          </p>
        </InfoBox>

        <h2 id="logiciel">
          La sécurité du logiciel continue après la mise en production
        </h2>
        <p>
          Une revue ponctuelle ne suffit pas si de nouvelles versions arrivent
          chaque semaine. Reliez la conception, le code, les dépendances, le
          déploiement, la détection et la correction dans une même chaîne. Le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SSDF 1.1
          </a>{" "}
          organise des pratiques destinées à réduire le nombre de
          vulnérabilités, limiter l’impact de celles qui restent et traiter
          leurs causes. Au 25 juillet 2026, la version 1.1 reste la publication
          finale ; une évolution doit être revalidée avant de citer un nouveau
          numéro.
        </p>

        <GuideTable
          caption="La boucle minimale de gestion des vulnérabilités"
          headers={["Étape", "Question de direction", "Trace utile"]}
          rows={[
            [
              "Prévenir",
              "Quelles règles s’appliquent aux secrets, API, données de test et dépendances ?",
              "Exigences versionnées, revues et contrôles automatisés ou manuels.",
            ],
            [
              "Découvrir",
              "Comment une équipe, un outil, un chercheur ou un client signale-t-il un défaut ?",
              "Canal de signalement, accusé de réception et responsable de la qualification initiale.",
            ],
            [
              "Qualifier",
              "Le composant est-il réellement exposé et quel scénario métier est possible ?",
              "Version, périmètre, exploitabilité, impact et décision datée.",
            ],
            [
              "Corriger",
              "Qui finance, développe, déploie et informe si nécessaire ?",
              "Propriétaire, échéance, changement et limite temporaire.",
            ],
            [
              "Contre-tester",
              "Le scénario échoue-t-il désormais sans casser le métier ?",
              "Résultat indépendant du correctif, régression et risque restant.",
            ],
            [
              "Éviter la récidive",
              "Pourquoi le défaut est-il entré et comment l’empêcher ailleurs ?",
              "Cause, nouvelle règle, recherche de variantes et prochaine revue.",
            ],
          ]}
        />

        <p>
          L’
          <a
            href="https://owasp.org/www-project-application-security-verification-standard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OWASP ASVS 5.0.0
          </a>{" "}
          peut fournir des exigences vérifiables pour une application web.
          N’écrivez pas « conforme OWASP » après avoir sélectionné quelques
          contrôles : notez la version, les exigences retenues, les exclusions,
          le périmètre, le résultat et la personne qui a vérifié.
        </p>

        <h3>Un inventaire de composants ne suffit pas à décider</h3>
        <p>
          Le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/1326/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 1326, finalisé le 8 juillet 2026
          </a>
          , propose une recherche sur le fournisseur et le produit qui couvre
          notamment la provenance, la résilience, les pratiques cyber de base et
          les différents étages de la chaîne d’approvisionnement. Son contexte
          est américain : utilisez ses questions comme une méthode de vigilance,
          pas comme une obligation automatique pour un éditeur français.
        </p>
        <ul>
          <li>
            quelle version tourne réellement, d’où viennent le composant, le
            paquet et ses mises à jour, et comment leur intégrité est vérifiée ;
          </li>
          <li>
            qui maintient la dépendance, jusqu’à quelle date et avec quelle
            solution si elle devient inutilisable ;
          </li>
          <li>
            quels fournisseurs indirects sont indispensables et si plusieurs
            services dépendent en réalité du même acteur ;
          </li>
          <li>
            quelles vulnérabilités sont pertinentes pour la version exploitée,
            avec quel délai de décision, de correction et de contre-test ;
          </li>
          <li>
            si une nomenclature des composants logiciels, souvent appelée SBOM,
            est fournie, ce qu’elle couvre et qui traite ses écarts.
          </li>
        </ul>
        <p>
          Une liste de composants sans version en production, propriétaire,
          obsolescence, exposition et action ne démontre pas la sûreté du
          logiciel. Elle rend seulement une partie de l’enquête possible.
        </p>

        <h2 id="restauration">
          Une restauration se termine quand les utilisateurs peuvent
          retravailler
        </h2>
        <p>
          La perte maximale de données et la durée maximale d’interruption ne
          viennent pas d’un modèle de contrat : elles viennent du métier. Le{" "}
          <a
            href="https://monservicesecurise.cyber.gouv.fr/referentiel-mesures"
            target="_blank"
            rel="noopener noreferrer"
          >
            référentiel de mesures de l’ANSSI
          </a>{" "}
          relie notamment la durée maximale d’interruption admissible et la
          perte de données maximale admissible aux besoins de l’activité. Ces
          objectifs doivent ensuite être confrontés à un exercice.
        </p>

        <FormulaBox>
          {`EXEMPLE ENTIÈREMENT FICTIF

Perte maximale acceptée par le métier : 2 h
Interruption maximale acceptée : 3 h après détection

Incident détecté : 14 h 00
Dernière copie exploitable : 11 h 30
Perte observée : 2 h 30  → objectif manqué de 30 min

Service techniquement relevé : 17 h 05
Validation fonctionnelle terminée : 17 h 45
Interruption métier : 3 h 45  → objectif manqué de 45 min`}
        </FormulaBox>

        <p>
          La console était peut-être verte à 17 h 05 ; le service n’était pas
          encore utilisable. Le rapport doit séparer détection, récupération des
          données, reprise technique, contrôles d’intégrité, connexion des
          dépendances et validation par un utilisateur métier. Il décrit le
          résultat de cet exercice dans ces conditions, pas une garantie
          universelle.
        </p>

        <h2 id="sortie">
          Une sortie se teste comme une restauration : export, reprise et
          effacement
        </h2>
        <p>
          Le{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement européen Data Act
          </a>{" "}
          s’applique depuis le 12 septembre 2025. Son chapitre VI encadre le
          changement de fournisseur pour les services de traitement de données
          qui entrent dans son champ. La{" "}
          <a
            href="https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commission européenne
          </a>{" "}
          précise que les services logiciels sont concernés et que les offres de
          plateforme et de logiciel en ligne doivent notamment proposer des
          interfaces ouvertes et, au minimum, un export dans un format
          structuré, courant et lisible par machine lorsque ces règles
          s’appliquent.
        </p>
        <p>
          L’article 25 prévoit normalement une période transitoire maximale de
          30 jours calendaires après le préavis contractuel. Ce délai n’est pas
          une promesse qu’une migration complète réussira en 30 jours. Au 25
          juillet 2026, l’article 29 permet encore des frais de changement
          réduits, plafonnés aux coûts directement liés au changement, jusqu’au
          12 janvier 2027. Cela ne rend pas automatiquement gratuits le travail
          du client, le fournisseur d’arrivée, les transformations de données,
          la résiliation anticipée ou les services hors du processus visé.
        </p>

        <ol>
          <li>
            choisissez un client fictif représentatif, avec pièces jointes,
            historiques, utilisateurs, droits, paramètres et volumes réalistes ;
          </li>
          <li>
            figez la liste des données et éléments numériques attendus, les
            exclusions, les formats, les interfaces et les responsabilités ;
          </li>
          <li>
            exportez, contrôlez les comptes et empreintes, puis importez dans un
            environnement de destination sans utiliser de données réelles ;
          </li>
          <li>
            faites exécuter les opérations métier indispensables et mesurez les
            pertes, transformations manuelles, erreurs et durée
            d’indisponibilité ;
          </li>
          <li>
            testez la récupération tardive, la révocation des accès et
            l’effacement convenu, puis attribuez chaque écart et son nouvel
            essai.
          </li>
        </ol>

        <FormulaBox>
          {`COÛT COMPLET D’UN EXERCICE DE SORTIE

heures du fournisseur de départ
+ heures du client
+ heures du fournisseur d’arrivée
+ coûts techniques et transformations
+ coût de l’indisponibilité observée

Ce total interne n’est pas synonyme de « frais de changement » au sens juridique.`}
        </FormulaBox>

        <InfoBox
          variant="amber"
          title="Le Data Act ne s’applique pas par slogan"
        >
          <p className="m-0">
            Le service, les parties, le contrat, sa date, les données
            exportables, les secrets d’affaires, les exceptions et les règles
            sectorielles doivent être qualifiés. Faites valider un cas réel par
            le conseil compétent avant de transformer ce résumé en clause ou en
            engagement commercial.
          </p>
        </InfoBox>

        <h2 id="incident">
          Délai interne, contrat, RGPD et NIS 2 sont quatre horloges différentes
        </h2>
        <p>
          Détecter un incident à temps pour le contenir n’est pas la même chose
          que notifier une violation de données personnelles. La procédure doit
          d’abord permettre de rassembler les faits, limiter l’impact, préserver
          les traces et saisir les personnes habilitées à décider.
        </p>

        <GuideTable
          caption="Chronologies à qualifier séparément avant de promettre un délai"
          headers={["Horloge et déclencheur", "Qui agit", "Précaution"]}
          rows={[
            [
              "Interne — alerte ou fait technique défini par l’entreprise.",
              "Astreinte, exploitation, sécurité, direction et métier selon la gravité.",
              "Testez les coordonnées, l’escalade et le moyen de travailler en mode dégradé.",
            ],
            [
              "Contractuelle — événement et délai écrits dans le contrat.",
              "Fonctions nommées dans la procédure et la matrice de responsabilités.",
              "Ne promettez pas un délai plus court que la capacité de qualification réelle.",
            ],
            [
              "RGPD — violation de données personnelles ; risque et rôles à qualifier.",
              "Le sous-traitant alerte le responsable ; celui-ci évalue notification et information.",
              "72 h n’est ni un délai universel pour tout incident ni le délai du sous-traitant.",
            ],
            [
              "NIS 2, si applicable — incident significatif d’une entité effectivement assujettie.",
              "Entité et autorités compétentes selon le cadre applicable.",
              "Vérifiez l’assujettissement, la transposition française et les règles sectorielles à la date de décision.",
            ],
          ]}
        />

        <p>
          La{" "}
          <a
            href="https://cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL précise les règles relatives aux violations de données
            personnelles
          </a>{" "}
          : toutes sont documentées ; le responsable notifie celles qui
          présentent un risque dans les meilleurs délais et, si possible, sous
          72 heures après en avoir pris connaissance ; le sous-traitant informe
          le responsable dans les meilleurs délais.
        </p>
        <p>
          Au 25 juillet 2026, l’
          <a
            href="https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/directive-nis-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANSSI présente encore NIS 2 dans le contexte de sa transposition en
            droit français
          </a>
          . Un SaaS n’est donc pas assujetti simplement parce qu’il est un SaaS.
          Pour une entité réellement concernée et un incident significatif, l’
          <a
            href="https://eur-lex.europa.eu/eli/dir/2022/2555/oj?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 23 de la directive
          </a>{" "}
          prévoit notamment une alerte précoce sous 24 heures, une notification
          sous 72 heures et un rapport final au plus tard un mois après. Faites
          confirmer le régime français, le secteur et le cas précis avant de
          reprendre ces délais dans un engagement.
        </p>

        <h2 id="capacite">
          Une date commerciale n’est tenable que si la correction et le
          contre-test entrent dans la capacité disponible
        </h2>
        <p>
          Additionnez la charge de chaque écart, puis ajoutez la production des
          pièces, les revues et les contre-tests. Comparez ce total aux heures
          nettes réellement disponibles après le travail déjà engagé. Une
          inconnue reste inconnue : elle ne vaut jamais zéro.
        </p>

        <FormulaBox>
          {`EXEMPLE ENTIÈREMENT FICTIF

4 écarts critiques × 12 h = 48 h
6 écarts importants × 8 h = 48 h
8 écarts mineurs × 3 h = 24 h
Travail initial = 120 h

Marge preuves et contre-tests = 120 h × 25 % = 30 h
Charge prudente = 120 h + 30 h = 150 h

Capacité nette = 20 h/semaine × 4 semaines = 80 h
Déficit = 150 h − 80 h = 70 h`}
        </FormulaBox>

        <p>
          La moyenne ne permet pas de déplacer les quatre écarts critiques après
          la signature. Les sorties honnêtes sont de réduire le périmètre vendu,
          ajouter une capacité compétente réellement confirmée, corriger avant
          la vente ou décaler la date. Une marge de 25 % est seulement une
          hypothèse illustrative : remplacez-la par votre incertitude réelle.
        </p>

        <h2 id="comparatif">
          Comparez le dossier ciblé, les tests et les assurances formelles sur
          la même offre
        </h2>
        <p>
          Comparez la même entité, le même produit, les mêmes environnements et
          un horizon identique, par exemple 36 mois. Ajoutez diagnostic,
          corrections, temps interne, exploitation, exercices, tests,
          remédiations, audit ou certification, renouvellements et sortie. Le
          prix d’un outil ne représente pas le coût total.
        </p>

        <GuideTable
          caption="Ce que chaque démarche apporte et ce qu’elle ne remplace pas"
          headers={[
            "Démarche et situation utile",
            "Ce qu’elle apporte",
            "Ce qu’elle ne remplace pas",
          ]}
          rows={[
            [
              "Dossier ciblé et corrections critiques — premières ventes entreprise et demande précise.",
              "Réponses, pièces, responsables, limites et décisions.",
              "Un contrôle technique absent ou une assurance indépendante exigée.",
            ],
            [
              "Test d’intrusion ciblé — une surface produit doit être observée à une date donnée.",
              "Défauts constatés, gravité, périmètre et contre-test.",
              "Gouvernance, résilience ou sécurité continue de tout le SaaS.",
            ],
            [
              "Programme continu interne ou managé — le produit change souvent et les demandes se répètent.",
              "Propriétaires, contrôles, exercices et pièces maintenus.",
              "Une assurance indépendante si l’acheteur l’exige.",
            ],
            [
              "ISO/IEC 27001 — le marché demande régulièrement un système de management de la sécurité de l’information certifié.",
              "Assurance sur un système de management dans le périmètre certifié.",
              "Un test exhaustif de toutes les fonctions du produit.",
            ],
            [
              "SOC 2 type 1 ou type 2 — des acheteurs demandent un rapport selon les critères de confiance.",
              "Conception à une date pour le type 1 ; conception et fonctionnement sur une période pour le type 2.",
              "Une garantie absolue ou une conformité européenne générale.",
            ],
            [
              "Questionnaire d’auto-évaluation et registre cloud — un langage commun facilite les réponses.",
              "Auto-évaluation structurée des contrôles déclarés.",
              "Un audit indépendant ou une certification.",
            ],
            [
              "Report ou refus de la vente — un contrôle critique échoue ou une condition formelle manque.",
              "Évite une promesse intenable et protège le périmètre restant.",
              "La correction ou la qualification à réaliser.",
            ],
          ]}
        />

        <p>
          L’
          <a
            href="https://www.iso.org/fr/standard/27001"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO/IEC 27001:2022
          </a>{" "}
          définit les exigences d’un système de management de la sécurité de
          l’information. Les{" "}
          <a
            href="https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            ressources SOC de l’AICPA &amp; CIMA
          </a>{" "}
          décrivent les services de rapport et d’assurance associés aux critères
          de confiance. La{" "}
          <a
            href="https://cloudsecurityalliance.org/artifacts/cloud-controls-matrix-v4-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            matrice Cloud Controls Matrix (CCM) 4.1 et son questionnaire CAIQ
            4.1, publiés le 27 janvier 2026
          </a>{" "}
          fournissent un cadre de contrôles et de réponses. Le CAIQ alimente une
          auto-évaluation du niveau 1 de STAR ; ni la matrice ni le
          questionnaire ne constituent une assurance indépendante.
        </p>
        <p>
          Trois compléments répondent à des questions différentes. L’
          <a
            href="https://www.iso.org/standard/43757.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO/IEC 27017:2015
          </a>{" "}
          précise des contrôles et responsabilités propres aux services
          d’informatique en nuage. L’
          <a
            href="https://www.iso.org/standard/27018"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO/IEC 27018:2025
          </a>{" "}
          traite de la protection des informations personnelles dans un nuage
          public lorsque le fournisseur agit comme sous-traitant. L’
          <a
            href="https://www.iso.org/standard/27701"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO/IEC 27701:2025
          </a>{" "}
          porte sur le système de management de la protection de la vie privée.
          Leur simple mention ne prouve ni leur inclusion dans le périmètre
          certifié, ni leur mise en œuvre sur le service vendu, ni la conformité
          au RGPD. Au 25 juillet 2026, la{" "}
          <a
            href="https://www.iso.org/standard/82878.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            deuxième édition d’ISO/IEC 27017
          </a>{" "}
          est encore indiquée « sous publication » par l’ISO : ne la présentez
          pas comme une édition déjà publiée.
        </p>

        <h3>Lisez le document avant de compter le logo</h3>
        <p>
          L’ordre de lecture change la décision. Pour un rapport SOC 2,
          commencez par l’entité et le système décrits, le type, la date ou la
          période et l’opinion. Relevez ensuite les exceptions, les contrôles
          que le client doit lui-même exécuter, les contrôles attendus des
          sous-traitants et la façon dont ces derniers sont inclus ou exclus.
          Enfin, cherchez les changements intervenus depuis la fin de la
          période.
        </p>
        <p>
          L’
          <a
            href="https://www.aicpa-cima.com/cpe-learning/webcast/soc-2-report-walkthrough"
            target="_blank"
            rel="noopener noreferrer"
          >
            AICPA &amp; CIMA
          </a>{" "}
          identifie notamment, pour la lecture d’un SOC 2, les contrôles
          complémentaires dus par l’entreprise cliente, les sous-traitants, les
          exceptions, les types d’opinion et les lettres couvrant l’intervalle
          depuis le rapport. Une telle lettre peut décrire une période non
          couverte ; elle n’est pas un nouvel audit. Pour un certificat ISO ou
          une inscription au programme Security, Trust, Assurance and Risk
          (STAR), appliquez la même discipline : entité, service, version,
          lieux, exclusions, dates, niveau d’indépendance et contrôles restant
          au client.
        </p>
        <p>
          La{" "}
          <a
            href="https://cloudsecurityalliance.org/star/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloud Security Alliance
          </a>{" "}
          distingue le niveau 1, qui repose sur une auto-évaluation, du niveau
          2, qui ajoute une certification ou une attestation par un tiers. Aucun
          de ces niveaux ne dispense de vérifier l’offre réellement vendue.
        </p>

        <h3>Comparez le coût complet, pas seulement le devis du tiers</h3>
        <p>
          Pour chaque voie — dossier ciblé, test d’intrusion, programme continu,
          ISO 27001, SOC 2, STAR ou report — demandez les mêmes données et le
          même horizon, par exemple 36 mois. Une valeur inconnue reste «
          inconnue » jusqu’au devis ou à l’estimation responsable ; elle ne
          devient pas zéro.
        </p>
        <FormulaBox>
          {`COÛT COMPLET SUR 36 MOIS

préparation interne
+ corrections et contre-tests
+ frais d’audit, de test ou d’outillage
+ exploitation, revues et renouvellements
+ coût du délai commercial réellement attribuable
+ coût de remplacement ou de sortie

Comparer aussi : date de disponibilité, champ couvert, indépendance et réutilisation par les acheteurs.`}
        </FormulaBox>
        <GuideTable
          caption="Les mêmes variables à recueillir pour chaque option"
          headers={["Bloc", "Données à demander", "Erreur à éviter"]}
          rows={[
            [
              "Préparer",
              "Personnes, heures nettes, documents manquants et délai dépendant d’un tiers.",
              "Compter seulement les jours facturés par l’auditeur.",
            ],
            [
              "Corriger",
              "Écarts connus, inconnues à rechercher, contre-tests et marge de prudence.",
              "Supposer que l’assurance formelle répare le produit.",
            ],
            [
              "Exploiter",
              "Abonnement, collecte, revues, exercices, exceptions et renouvellements.",
              "Traiter l’année 1 comme un coût unique.",
            ],
            [
              "Attendre",
              "Ventes réellement bloquées, probabilité, marge attribuable et date de déblocage.",
              "Transformer tout le chiffre d’affaires espéré en perte certaine.",
            ],
            [
              "Sortir",
              "Export, transfert, remplacement, archives, retrait des accès et fin de contrat.",
              "Présumer qu’un changement de fournisseur ne coûtera aucun travail.",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Même SecNumCloud ne se transmet pas par héritage"
        >
          <p className="m-0">
            L’
            <a
              href="https://cyber.gouv.fr/enjeux-technologiques/cloud/faq-qualification-secnumcloud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI rappelle qu’utiliser une offre qualifiée SecNumCloud
            </a>{" "}
            ne rend pas automatiquement le service du client sécurisé ou
            qualifié. Vérifiez l’offre, le périmètre exact et les
            responsabilités qui restent à l’éditeur.
          </p>
        </InfoBox>

        <h3>
          Le dossier vivant peut libérer du temps, pas créer une économie tout
          seul
        </h3>
        <FormulaBox>
          {`EXEMPLE ENTIÈREMENT FICTIF SUR 36 MOIS

Traitement manuel = 8 questionnaires/an × 28 h × 3 ans = 672 h
Construction du dossier vivant = 80 h
Maintenance = 4 h/mois × 36 mois = 144 h
Total structuré = 224 h

Capacité libérée = 672 h − 224 h = 448 h
Valeur brute illustrative = 448 h × 70 €/h = 31 360 €`}
        </FormulaBox>
        <p>
          Les 31 360 € ne sont pas une économie automatique. Ils ne deviennent
          un gain que si les 448 heures sont réellement évitées ou réaffectées à
          une activité utile. Les corrections, outils, audits, certifications,
          exercices et renouvellements doivent être ajoutés séparément.
        </p>

        <h2 id="atelier-decision">
          Atelier : pouvez-vous signer sans promettre l’impossible ?
        </h2>
        <p>
          L’outil ci-dessous reste dans votre navigateur et produit un fichier
          texte local. Utilisez seulement des références internes et des
          formulations non sensibles. Il ne donne aucun score de sécurité et ne
          prononce aucune conformité : il applique une règle de décision
          conservatrice aux cinq contrôles essentiels, aux autres conditions
          d’achat, aux éléments déclarés et à la capacité disponible. Les cinq
          contrôles ne peuvent être ni reclassés comme non critiques, ni écartés
          comme non applicables.
        </p>
        <p>
          Recensez toutes les demandes, placez toute autre exigence dans la
          sixième famille et additionnez toutes les corrections encore ouvertes.
          Cette famille couvre les exigences produit, contractuelle, sectorielle
          ou d’assurance : elle peut être critique et son dossier distinct ne la
          rend pas optionnelle. La fraîcheur est jugée à la date locale de
          décision. Un plan après signature exige une mesure temporaire, une
          charge financée et des accords datés et référencés. L’atelier
          n’autorise jamais lui-même le report d’une obligation légale ou
          sectorielle applicable : faites-la qualifier, satisfaites-la ou
          renégociez/refusez le périmètre. L’outil ne mémorise pas votre saisie
          : téléchargez ou imprimez le brouillon avant de quitter la page.
        </p>
        <InfoBox
          variant="amber"
          title="Une condition distincte exige un dossier distinct"
        >
          <p className="m-0">
            La sixième famille ne porte qu’une seule décision. Vous pouvez y
            regrouper plusieurs exigences uniquement si elles ont la même
            nature, le même état, le même risque et la même échéance. Sinon,
            exportez un dossier par exigence, puis retenez la décision la plus
            restrictive. Ne compensez jamais une condition formelle non
            satisfaite par une autre exigence déjà couverte.
          </p>
        </InfoBox>

        <SaasSecurityDecisionTool />

        <h2 id="partage">
          Partagez les documents par étapes, sans transformer la transparence en
          nouvelle faille
        </h2>
        <p>
          Préparez un dossier transmissible distinct des documents
          opérationnels. Commencez par la réponse, le périmètre, la date, le
          propriétaire et une synthèse de la preuve. N’ouvrez le rapport
          détaillé que si l’acheteur en a besoin, que sa diffusion est autorisée
          et que les destinataires sont encadrés.
        </p>

        <GuideTable
          caption="Trois niveaux de partage progressif"
          headers={["Niveau", "Contenu possible", "Protection à conserver"]}
          rows={[
            [
              "Réponse initiale",
              "Fait, périmètre, date, statut, limite et prochaine action.",
              "Aucun secret, nom nominatif, donnée client ou détail exploitable.",
            ],
            [
              "Dossier contrôlé",
              "Politique synthétique, liste des sous-traitants, sommaire de tests et exceptions.",
              "Accès expirant ou révocable, destinataires, version et droit de diffusion.",
            ],
            [
              "Examen approfondi",
              "Rapport, architecture ou preuve technique nécessaire à la diligence.",
              "Cadre contractuel, consultation plutôt que copie si utile, journal d’accès et retrait des données inutiles.",
            ],
          ]}
        />
        <p>
          Un ancien rapport doit être marqué « archive — preuve invalidée » si
          le périmètre, l’architecture ou le contrôle a changé. Ne laissez pas
          deux versions contradictoires circuler sans statut. Pour un lien
          sensible, prévoyez expiration et révocation ; pour un document,
          inscrivez version, propriétaire, destinataires et date de prochaine
          revue.
        </p>

        <h2 id="pilotage">
          Après la vente, mesurez les contrôles et rejouez les scénarios qui
          comptent
        </h2>
        <p>
          Le dossier n’est utile que s’il suit le produit. Attribuez chaque
          famille à une fonction et choisissez un événement de révision :
          changement d’hébergeur, nouveau sous-traitant, nouveau flux, nouvelle
          authentification, incident, dépendance majeure ou évolution
          d’architecture. Une date fixe seule ne suffit pas.
        </p>

        <GuideTable
          caption="Exemples de résultats à piloter sans fabriquer un score global"
          headers={["Famille", "Résultat observable", "Décision déclenchée"]}
          rows={[
            [
              "Accès",
              "Comptes sans propriétaire, révocations tardives et accès d’urgence testés.",
              "Fermer, attribuer, réduire les droits ou rejouer l’exercice.",
            ],
            [
              "Isolement",
              "Scénarios inter-clients exécutés et refus observés sur chaque porte critique.",
              "Suspendre une mise en production ou corriger puis contre-tester.",
            ],
            [
              "Restauration",
              "Perte de données et durée jusqu’à validation métier.",
              "Adapter objectifs, architecture, procédure ou capacité.",
            ],
            [
              "Vulnérabilités",
              "Délai de qualification, exposition, corrections et contre-tests ouverts.",
              "Prioriser, informer, isoler ou accepter formellement le risque.",
            ],
            [
              "Incident",
              "Temps de détection, d’escalade et de décision lors d’un exercice.",
              "Corriger la procédure, les contacts et les engagements irréalistes.",
            ],
          ]}
        />

        <p>
          Une relecture technique externe est utile si vous disposez déjà du
          périmètre, du questionnaire, des données, des accès et des pièces
          existantes. Un test d’intrusion indépendant est préférable lorsqu’une
          surface doit être éprouvée. Une certification ou un rapport formel
          devient prioritaire lorsqu’il s’agit d’une condition d’achat répétée.
          Et si l’obligation est juridique ou sectorielle, faites intervenir le
          conseil compétent avant de signer.
        </p>

        <GuideInlineCTA
          title="Décider ce qui doit être corrigé avant la vente"
          description="Partagez le questionnaire, le périmètre non sensible du SaaS et les preuves déjà disponibles. Nous pouvons vous aider à distinguer les corrections techniques, les pièces à produire et les points qui exigent un test d’intrusion, un auditeur ou un conseil spécialisé. Nous vous dirons aussi si reporter la vente est la réponse responsable."
          tags={[
            "Contrôles avant badges",
            "Décision chiffrée",
            "Report possible",
          ]}
          ctaLabel="Faire relire mon dossier"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources, date de vérification et limites</h2>
        <p>
          Sources officielles ou institutionnelles revérifiées le 25 juillet
          2026. Leur présence ne prouve ni la sécurité ni la conformité de votre
          SaaS. Les textes, versions, qualifications et règles françaises de
          transposition peuvent évoluer ; revalidez-les avant un engagement
          contractuel ou une publication substantielle.
        </p>
        <ul>
          <li>
            CNIL —{" "}
            <a
              href="https://cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              qualifications des acteurs du cloud
            </a>
            , 28 mai 2026 : analyse des rôles selon les faits et finalités.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre"
              target="_blank"
              rel="noopener noreferrer"
            >
              règles relatives aux violations de données
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
              target="_blank"
              rel="noopener noreferrer"
            >
              articles 28 et 32 à 36 du RGPD
            </a>
            .
          </li>
          <li>
            ANSSI —{" "}
            <a
              href="https://monservicesecurise.cyber.gouv.fr/referentiel-mesures"
              target="_blank"
              rel="noopener noreferrer"
            >
              référentiel de mesures DMIA et PDMA
            </a>
            ,{" "}
            <a
              href="https://cyber.gouv.fr/enjeux-technologiques/cloud/faq-qualification-secnumcloud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ SecNumCloud
            </a>{" "}
            et{" "}
            <a
              href="https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/directive-nis-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              état de la directive NIS 2
            </a>
            .
          </li>
          <li>
            Union européenne —{" "}
            <a
              href="https://eur-lex.europa.eu/eli/dir/2022/2555/oj?locale=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              directive (UE) 2022/2555, notamment article 23
            </a>
            .
          </li>
          <li>
            Union européenne —{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              règlement (UE) 2023/2854, chapitre VI
            </a>
            , et Commission européenne —{" "}
            <a
              href="https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained"
              target="_blank"
              rel="noopener noreferrer"
            >
              présentation officielle du Data Act
            </a>
            .
          </li>
          <li>
            NIST —{" "}
            <a
              href="https://csrc.nist.gov/pubs/sp/800/218/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secure Software Development Framework 1.1
            </a>
            , et{" "}
            <a
              href="https://csrc.nist.gov/pubs/sp/1326/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              SP 1326 sur la vigilance fournisseur et la chaîne
              d’approvisionnement
            </a>
            ,{" "}
            <a
              href="https://csrc.nist.gov/projects/key-management/key-management-guidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              SP 800-57 sur la gestion des clés
            </a>{" "}
            et{" "}
            <a
              href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              SP 800-53 sur les contrôles de sécurité
            </a>
            , publications finales utilisées au jour de la vérification.
          </li>
          <li>
            OWASP —{" "}
            <a
              href="https://owasp.org/www-project-application-security-verification-standard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Security Verification Standard 5.0.0
            </a>
            , référentiel volontaire d’exigences vérifiables.
          </li>
          <li>
            NCSC —{" "}
            <a
              href="https://www.ncsc.gov.uk/collection/cloud/using-cloud-services-securely/using-saas-securely"
              target="_blank"
              rel="noopener noreferrer"
            >
              utiliser un SaaS de façon sûre
            </a>{" "}
            et{" "}
            <a
              href="https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/technically-enforced-separation-in-the-cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              séparation techniquement imposée
            </a>
            , et{" "}
            <a
              href="https://www.ncsc.gov.uk/information/principles-based-assurance"
              target="_blank"
              rel="noopener noreferrer"
            >
              méthode Principles Based Assurance
            </a>
            , repères britanniques sans valeur de certification française.
          </li>
          <li>
            Royaume-Uni —{" "}
            <a
              href="https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Security Code of Practice
            </a>
            ; CISA et FBI —{" "}
            <a
              href="https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secure by Demand Guide
            </a>
            , cadres volontaires de sécurité produit.
          </li>
          <li>
            ISO —{" "}
            <a
              href="https://www.iso.org/fr/standard/27001"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISO/IEC 27001:2022
            </a>
            ,{" "}
            <a
              href="https://www.iso.org/standard/43757.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISO/IEC 27017:2015
            </a>
            ,{" "}
            <a
              href="https://www.iso.org/standard/27018"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISO/IEC 27018:2025
            </a>{" "}
            et{" "}
            <a
              href="https://www.iso.org/standard/27701"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISO/IEC 27701:2025
            </a>
            ; AICPA &amp; CIMA —{" "}
            <a
              href="https://www.aicpa-cima.com/cpe-learning/webcast/soc-2-report-walkthrough"
              target="_blank"
              rel="noopener noreferrer"
            >
              parcours de lecture d’un rapport SOC 2
            </a>
            ; Cloud Security Alliance —{" "}
            <a
              href="https://cloudsecurityalliance.org/artifacts/star-level-1-security-questionnaire-caiq-v4-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              CAIQ 4.1
            </a>{" "}
            et{" "}
            <a
              href="https://cloudsecurityalliance.org/star/"
              target="_blank"
              rel="noopener noreferrer"
            >
              niveaux du programme STAR
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
