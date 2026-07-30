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
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { ProviderEvidenceTool } from "./provider-evidence-tool";

const guide = getGuide("choisir-prestataire-application-metier");
const breadcrumbName = "Choisir un prestataire d’application métier";

export const metadata = buildGuideMetadata(
  guide,
  "Même cas métier, huit points documentés et coûts comparés sur une base commune",
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
    id: "terrain-commun",
    number: "02",
    label: "Créer un terrain commun",
    shortLabel: "Préparer",
  },
  {
    id: "formes-equipe",
    number: "03",
    label: "Comparer les formes d’équipe",
    shortLabel: "Situer",
  },
  {
    id: "cas-commun",
    number: "04",
    label: "Faire vivre le même cas",
    shortLabel: "Observer",
  },
  {
    id: "preuves",
    number: "05",
    label: "Demander huit preuves",
    shortLabel: "Prouver",
  },
  {
    id: "couts",
    number: "06",
    label: "Normaliser les coûts",
    shortLabel: "Chiffrer",
  },
  {
    id: "outil",
    number: "07",
    label: "Relire chaque dossier",
    shortLabel: "Relire",
  },
  {
    id: "donnees-droits",
    number: "08",
    label: "Sécuriser données et droits",
    shortLabel: "Encadrer",
  },
  {
    id: "apres",
    number: "09",
    label: "Tester l’après-livraison",
    shortLabel: "Anticiper",
  },
  {
    id: "decider",
    number: "10",
    label: "Choisir, préciser ou reporter",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "candidats",
    num: "01",
    label: "Candidats",
    items: [
      {
        question: "Faut-il préférer une agence ou un freelance ?",
        answer:
          "Non, pas par principe. Comparez les personnes réellement mobilisées, leur disponibilité, la continuité prévue, les responsabilités et les preuves écrites. Une agence peut dépendre d’une seule personne ; un freelance peut organiser une relève. Une équipe interne peut aussi gagner si vous avez déjà les compétences et la capacité de pilotage.",
      },
      {
        question: "Combien de prestataires faut-il rencontrer ?",
        answer:
          "Il n’existe pas de nombre universel. Gardez seulement le nombre de candidats que votre équipe peut soumettre au même cas et relire sérieusement. Si vous ne pouvez pas conduire des entretiens comparables, réduisez ce nombre au lieu d’accumuler des devis superficiels.",
      },
      {
        question: "Une référence client suffit-elle pour rassurer ?",
        answer:
          "Non. Avec l’accord de la référence, demandez quel périmètre a réellement été livré, qui travaillait sur le projet, comment les écarts ont été gérés et depuis quand le logiciel est maintenu. Cette réponse éclaire un contexte passé ; elle ne garantit pas le vôtre.",
      },
    ],
  },
  {
    key: "proposition",
    num: "02",
    label: "Proposition",
    items: [
      {
        question: "Comment comparer deux devis qui n’ont pas le même prix ?",
        answer:
          "Remettez-les sur le même résultat, la même période et les mêmes options. Séparez prix initial, récurrent, options retenues, exclusions, travail interne et préparation de la sortie. Si un poste reste inconnu, gardez-le inconnu : ne l’inscrivez pas à zéro.",
      },
      {
        question: "Faut-il demander un prototype gratuit ?",
        answer:
          "Non. Demandez une reformulation, des questions, un découpage et un exemple de validation sur un cas fictif limité. Une exploration plus longue, une maquette exploitable ou une étude détaillée peut constituer une courte mission de cadrage rémunérée.",
      },
      {
        question: "Qui doit écrire le cahier des charges ?",
        answer:
          "Votre entreprise reste responsable d’exprimer le problème, les utilisateurs, les règles et les contraintes qu’elle connaît. Un prestataire peut aider à rendre ce besoin testable. Si les inconnues sont trop nombreuses pour produire des propositions comparables, financez d’abord un cadrage court et réutilisable.",
      },
    ],
  },
  {
    key: "contrat",
    num: "03",
    label: "Contrat et suite",
    items: [
      {
        question: "Le paiement du développement donne-t-il tout le code ?",
        answer:
          "Ne le supposez pas. Le contrat doit distinguer code spécifique, composants tiers, documentation, droits d’exploitation, accès aux dépôts et conditions de restitution. En droit français, une cession de droits doit être délimitée ; faites relire les clauses sensibles par un juriste.",
      },
      {
        question:
          "Le prestataire est-il toujours sous-traitant au sens du RGPD ?",
        answer:
          "Non. Le rôle dépend des décisions et traitements réels. Lorsqu’il traite des données personnelles pour votre compte, l’article 28 du RGPD impose un cadre contractuel précis. Faites qualifier les rôles, les données, les accès, les sous-traitants ultérieurs et les transferts au cas par cas.",
      },
      {
        question: "Que faire si aucun dossier n’est comparable ?",
        answer:
          "Ne choisissez personne dans l’état. Renvoyez les mêmes questions, réduisez le périmètre ou commandez un cadrage court dont les livrables pourront être remis à plusieurs candidats. Reporter évite de transformer des hypothèses différentes en faux classement.",
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
          { label: "Guide de décision 2026", variant: "dark" },
          { label: "Décision sans score global", variant: "neutral" },
          { label: "Ne retenir personne reste possible", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Comment choisir le prestataire"
        heroTitleEm="de votre application métier"
        heroTitleSuffix="?"
        heroDescription="Remettez à chaque candidat le même cas métier, puis écoutez ses questions. La proposition doit documenter huit points : compréhension, périmètre, validation, coûts, données, droits, maintenance et sortie. Une inconnue reste une inconnue ; une condition inacceptable ne se compense pas."
        stats={[
          { label: "Points à documenter", value: "8" },
          { label: "Verdicts de l’outil", value: "6" },
          { label: "Cas commun", value: "1" },
          { label: "Données envoyées", value: "Aucune" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Propositions reçues",
          titleStart: "Faire relire",
          titleEm: "ce qui change le choix",
          description:
            "Apportez le besoin, les propositions avec leur date et leur version, ainsi que vos questions. Les hypothèses non écrites resteront visibles.",
          benefits: [
            "Prix alignés sur le même résultat et la même période",
            "Exclusions, droits et responsabilités visibles",
            "Un cadrage ou un report si rien n’est comparable",
          ],
          primaryCtaLabel: "Faire relire mes propositions",
          primaryCtaHref: "/demarrer-un-projet",
        }}
        toc={toc}
        tocLabel="Chemin de sélection"
        mobileCtaLabel="Faire relire mes propositions"
        sidebarContextCta={{
          eyebrow: "Choix du prestataire",
          title: "Comparer ce qui sera réellement livré et repris",
          description:
            "Décrivez le problème, les utilisateurs concernés, les propositions reçues et les décisions qui restent ouvertes.",
          benefits: [
            "Aucun palmarès agence ou freelance",
            "Coûts inconnus conservés comme inconnus",
            "Les clauses sensibles restent à faire relire",
          ],
          ctaLabel: "Décrire mon projet",
          ctaHref: "/demarrer-un-projet",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions avant",
          titleEm: "de choisir",
          titleEnd: "une équipe.",
          subtitle:
            "Des réponses directes sur les formes d’équipe, les devis, les références, les droits, les données et le report du choix.",
          ctaTitle: "Comparer des propositions réelles",
          ctaDescription:
            "Décrivez les écarts sans transmettre de donnée personnelle, de secret métier ni de document confidentiel dans le premier message.",
          ctaLabel: "Faire relire mes propositions",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "Direction des achats de l’État · Sourçage 2025",
            href: "https://www.economie.gouv.fr/files/files/directions_services/dae/media-document/Guide_sourcage_operationnel.pdf",
            description:
              "Guide de décembre 2025. L’annexe dédiée aux logiciels questionne modèle d’accès et de licence, support, disponibilité, façon de calculer le prix, composants, données, personnalisation et sortie. Référentiel de commande publique : son transfert au privé reste une méthode éditoriale, pas une obligation générale.",
          },
          {
            source: "CNIL · Article 28 du RGPD",
            href: "https://cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4",
            description:
              "Lorsque le prestataire traite des données personnelles pour le compte du responsable, le traitement doit être régi par un contrat ou un autre acte juridique écrit couvrant notamment objet, durée, instructions, sécurité, sous-traitants ultérieurs, assistance, restitution ou suppression et audits.",
          },
          {
            source: "CNIL · Identifier le rôle de chaque acteur",
            href: "https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role",
            description:
              "Fiche du 6 juin 2025 : responsable, responsable conjoint et sous-traitant se qualifient au cas par cas selon les faits, les décisions et l’exécution réelle, pas par la seule étiquette du contrat.",
          },
          {
            source: "CNIL · Gérer la sous-traitance",
            href: "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
            description:
              "Fiche du 14 mars 2024 : garanties suffisantes, mesures de sécurité, incidents, restitution, destruction, audits et chaîne de sous-traitance à examiner selon le risque.",
          },
          {
            source: "Commission européenne · Clauses article 28",
            href: "https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_fr",
            description:
              "Décision du 4 juin 2021 établissant des clauses contractuelles types entre responsables et sous-traitants dans l’UE/EEE. Le modèle doit être adapté aux rôles, traitements et annexes réels.",
          },
          {
            source: "ANSSI · MonServiceSécurisé",
            href: "https://aide.monservicesecurise.cyber.gouv.fr/fr/article/mon-fournisseur-de-service-me-dit-que-cest-securise-8ldkcu/",
            description:
              "Aide officielle : définir les mesures de sécurité attendues et obtenir les garanties avant le choix du fournisseur, plutôt que retenir une déclaration générale de sécurité.",
          },
          {
            source: "Code de la propriété intellectuelle · L131-3",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
            description:
              "Le texte exige que chaque droit cédé soit mentionné distinctement et que le domaine d’exploitation soit délimité. Son application à un contrat précis relève d’une analyse juridique.",
          },
          {
            source: "Code de la propriété intellectuelle · L113-9",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818",
            description:
              "Régime particulier des droits patrimoniaux sur les logiciels créés par des employés dans leurs fonctions. Il ne permet pas de déduire automatiquement les droits du client sur tous les intervenants ou composants.",
          },
          {
            source: "ANSSI · Risques de l’externalisation",
            href: "https://messervices.cyber.gouv.fr/guides/externalisation-et-securite-des-systemes-dinformation-un-guide-pour-maitriser-les",
            description:
              "Guide publié en 2010 sur la perte de maîtrise, les interventions à distance et l’hébergement mutualisé. Son âge impose une revalidation technique, mais la démarche de risque et d’engagements contextualisés reste utile.",
          },
          {
            source: "Service Public · Justificatif RNE",
            href: "https://entreprendre.service-public.gouv.fr/vosdroits/R19859",
            description:
              "Démarche vérifiée le 25 août 2025 pour obtenir gratuitement un extrait d’immatriculation au RNE auprès de l’INPI. Cette pièce renseigne l’immatriculation et les informations légales diffusables, pas une compétence ni une qualité future.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites",
          title:
            "Cette méthode prépare une sélection ; elle ne certifie ni le candidat ni le contrat",
          description:
            "Le guide, le cas fictif et l’outil local ne vérifient pas une compétence, une solvabilité, une assurance, un niveau de sécurité ou un droit de propriété. Faites qualifier les enjeux juridiques, données, sécurité, accessibilité et sectoriels sur vos documents et votre système réels.",
        }}
        relatedGuides={[
          {
            label: "Plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
          {
            label: "Reprendre un logiciel métier existant",
            href: "/guides/reprendre-logiciel-metier-existant",
          },
          {
            label: "Migrer un logiciel métier sans interruption",
            href: "/guides/migrer-logiciel-metier-sans-interruption",
          },
        ]}
        relatedGuidesLabel="Préparer la livraison et la reprise"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse courte"
          title="Le choix commence quand les dossiers décrivent le même projet"
        >
          <p>
            Vous avez reçu plusieurs propositions sérieuses, mais chacune
            découpe le projet autrement. Le prix le plus bas peut couvrir moins
            de travail ; le plus élevé peut intégrer des options dont vous
            n’avez pas besoin. Avant de classer les candidats, remettez leurs
            réponses sur le même terrain.
          </p>

          <p>
            Le point de départ est une même situation métier fictive,
            accompagnée des mêmes contraintes et questions. Pendant l’échange,
            écoutez comment chaque candidat reformule le problème, cherche les
            exceptions et signale ce qu’il ignore. Sa proposition doit ensuite
            couvrir huit points par écrit : compréhension, périmètre,
            validation, coûts, données, droits, maintenance et sortie.
          </p>

          <p>
            Le statut de l’équipe ne tranche rien à lui seul. Agence, freelance
            ou équipe interne peuvent convenir. Une condition inacceptable ne se
            compense pas par un statut rassurant. Si le besoin reste trop flou,
            financez un cadrage court, réduisez le projet ou ne retenez personne
            pour le moment.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/choisir-prestataire-application-metier/comparaison-preuves-16x9.webp"
              alt="Chemin de comparaison d’un prestataire : même cas métier, huit preuves, coûts connus et décision avec une branche STOP"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>

          <GuidePremiumMemo title="La présentation ne suffit pas à rendre les devis comparables">
            <p>
              La comparaison commence lorsque les candidats répondent au même
              résultat attendu, sur la même période, avec les mêmes exclusions
              visibles. Avant cela, vous comparez surtout leur manière de
              raconter des périmètres différents.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="terrain-commun"
          number="02"
          label="Préparation"
          title="Chaque candidat doit recevoir la même page de contexte"
        >
          <p>
            Écrivez le problème avant de décrire la technologie. Nommez les
            personnes concernées, l’action qu’elles essaient d’accomplir, la
            règle qui change le résultat, les systèmes déjà utilisés et la
            conséquence d’une erreur. Ajoutez les contraintes déjà certaines :
            échéance externe, appareils, pays, données sensibles, interface
            obligatoire ou continuité d’activité.
          </p>

          <GuideTable
            caption="Terrain commun remis à chaque candidat"
            headers={["Élément", "Question concrète", "Trace commune"]}
            rows={[
              [
                "Problème",
                "Quelle tâche échoue, ralentit ou produit une erreur vérifiable ?",
                "Situation en langage métier, sans solution imposée",
              ],
              [
                "Utilisateurs",
                "Qui agit, qui contrôle et qui décide ?",
                "Rôles et contraintes d’usage",
              ],
              [
                "Résultat",
                "Que doit-on pouvoir constater dans une première version ?",
                "Parcours indispensable et limites",
              ],
              [
                "Existant",
                "Quelles données, applications et interfaces sont concernées ?",
                "Inventaire provisoire et propriétaires",
              ],
              [
                "Risques",
                "Quelle erreur aurait le plus d’impact ?",
                "Cas critiques, personne à prévenir et décision attendue",
              ],
              [
                "Inconnues",
                "Quelles décisions ou informations manquent encore ?",
                "Liste datée, responsable et effet possible",
              ],
            ]}
          />

          <p>
            Vous n’avez pas besoin de tout résoudre pour commencer les échanges.
            En revanche, chaque candidat doit recevoir les mêmes inconnues. S’il
            remplace une hypothèse par une certitude, demandez d’où elle vient
            et comment elle modifie son prix ou son calendrier.
          </p>

          <InfoBox
            variant="blue"
            title="Ce que le justificatif RNE permet de vérifier"
          >
            <p>
              Le{" "}
              <a
                href="https://entreprendre.service-public.gouv.fr/vosdroits/R19859"
                target="_blank"
                rel="noreferrer"
              >
                service public d’accès au justificatif RNE
              </a>{" "}
              permet de vérifier gratuitement l’immatriculation et certaines
              informations légales du prestataire pressenti. Ne transformez pas
              cette vérification en preuve de compétence, de solvabilité ou de
              qualité future.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="formes-equipe"
          number="03"
          label="Organisation"
          title="Qui travaillera vraiment, et comment le relais est-il prévu ?"
        >
          <p>
            Vous venez de fixer le contexte. Regardez maintenant l’organisation
            réelle. Une agence peut réunir plusieurs compétences, mais la
            proposition doit dire qui interviendra. Un freelance peut raccourcir
            les échanges, mais sa relève et sa disponibilité doivent être
            préparées. Une équipe interne conserve davantage de maîtrise si elle
            dispose du temps, des compétences et d’une personne chargée de
            suivre les décisions. Une équipe mixte peut fonctionner si les
            responsabilités sont clairement réparties.
          </p>

          <GuideTable
            caption="Questions à poser selon la forme d’équipe, sans hiérarchie générale"
            headers={[
              "Forme",
              "Dans quel cas elle peut gagner",
              "Preuve à demander",
            ]}
            rows={[
              [
                "Agence",
                "Plusieurs disciplines doivent réellement intervenir et être coordonnées",
                "Noms ou rôles, disponibilité, sous-traitance et personne responsable",
              ],
              [
                "Freelance",
                "Périmètre resserré, communication directe et compétence adaptée",
                "Capacité, indisponibilité, relève, partenaires et transmission",
              ],
              [
                "Équipe interne",
                "Connaissance métier forte et capacité durable à concevoir puis maintenir",
                "Temps réservé, compétences, responsable des décisions et budget d’exploitation",
              ],
              [
                "Équipe mixte",
                "Votre équipe porte le métier et le prestataire apporte une capacité précise",
                "Répartition des décisions, accès, documentation et transfert",
              ],
              [
                "Cadrage court",
                "Le besoin est trop flou pour comparer honnêtement des réalisations",
                "Livrables réutilisables, hypothèses, décisions et propriété des documents",
              ],
            ]}
          />

          <p>
            Demandez aussi ce qui se passe si la personne présentée à
            l’entretien n’est pas celle qui réalise le projet. Le dossier doit
            relier les compétences promises aux personnes mobilisées, sans
            inventer une garantie de disponibilité.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-commun"
          number="04"
          label="Mise en situation"
          title="Le cas fictif commun montre quelles questions le candidat pose"
        >
          <GuidePremiumCase
            initial="AL"
            eyebrow="Scénario entièrement fictif"
            title="Atelier Lumen · distributeur fictif de fournitures"
          >
            <p>
              Une personne saisit une commande reçue par téléphone. Avant
              validation, l’application doit vérifier le stock disponible et la
              limite de crédit du client. Si l’une des conditions échoue, la
              commande reste visible dans un état à examiner. Une personne
              autorisée voit la cause, décide de la suite et laisse une trace.
              Aucun client, volume, prix ou système réel n’est représenté.
            </p>
          </GuidePremiumCase>

          <p>
            L’organisation annoncée ne montre pas encore comment le candidat
            raisonne. Donnez-lui seulement cette situation et le contexte
            commun. Ne demandez ni écran fini, ni architecture gratuite. Écoutez
            ses questions : que signifie « disponible » lorsqu’un stock est
            réservé ? Qui fixe la limite de crédit ? Que se passe-t-il si le
            service qui fournit cette limite ne répond pas ? Qui peut forcer la
            décision ? Quelle trace devra être conservée ?
          </p>

          <GuideTable
            caption="Ce que le cas commun permet d’observer pendant l’entretien"
            headers={[
              "Observation",
              "Réponse utile",
              "Signal à faire préciser",
            ]}
            rows={[
              [
                "Reformulation",
                "Le candidat distingue commande, contrôle, exception et décision humaine",
                "Il saute directement vers un écran ou une technologie",
              ],
              [
                "Hypothèses",
                "Il nomme les définitions et dépendances à confirmer",
                "Il transforme une inconnue en règle certaine",
              ],
              [
                "Première version",
                "Il conserve le parcours complet et repousse le secondaire",
                "Il retire la trace ou l’exception qui rend le parcours contrôlable",
              ],
              [
                "Validation",
                "Il propose un résultat observable et un cas d’erreur",
                "Il parle de qualité sans expliquer comment la constater",
              ],
              [
                "Responsabilités",
                "Il sépare décision métier, réalisation et exploitation",
                "Il attribue tout au client ou promet de tout prendre en charge",
              ],
            ]}
          />

          <GuidePremiumMemo title="Le candidat peut dire qu’il ne sait pas encore">
            <p>
              Vous cherchez une manière de travailler : questions, hypothèses,
              décision et preuve. Répondre « je ne sais pas encore » est
              acceptable si le candidat propose une façon proportionnée de lever
              l’inconnue.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="preuves"
          number="05"
          label="Dossier de preuve"
          title="Huit points à faire documenter avant de choisir"
        >
          <p>
            Les questions posées pendant l’entretien donnent un aperçu de la
            méthode. Pour savoir ce qui sera livré, retrouvez chaque réponse
            dans une proposition datée et versionnée, une annexe, un exemple de
            livrable ou une procédure identifiée. La{" "}
            <a
              href="https://www.economie.gouv.fr/files/files/directions_services/dae/media-document/Guide_sourcage_operationnel.pdf"
              target="_blank"
              rel="noreferrer"
            >
              grille « achat de logiciels » de la Direction des achats de l’État
            </a>{" "}
            couvre notamment accès, licences, support, maintien en conditions
            opérationnelles (le fonctionnement du service dans la durée), façon
            de calculer le prix, liste des composants, données, personnalisation
            et ce que l’acheteur conserve. Elle vise la commande publique ; ce
            guide en transpose seulement les questions utiles à une décision
            privée.
          </p>

          <GuideTable
            caption="Huit sujets qui ne se compensent pas entre eux"
            headers={["Sujet", "Question décisive", "Preuve minimale"]}
            rows={[
              [
                "Compréhension",
                "Le candidat a-t-il compris le travail, les utilisateurs et les exceptions ?",
                "Restitution du cas commun et inconnues",
              ],
              [
                "Périmètre",
                "Qu’est-ce qui sera livré, reporté ou exclu ?",
                "Inclusions, exclusions, dépendances et travail client",
              ],
              [
                "Validation",
                "Comment constatera-t-on le résultat et qui décidera ?",
                "Cas de vérification (recette), anomalies et critères de décision",
              ],
              [
                "Coûts",
                "Quels montants portent sur le même résultat et la même période ?",
                "Initial, récurrent, options, exclusions et sortie",
              ],
              [
                "Données",
                "Qui traite quoi, où, avec quels accès et sous-traitants ?",
                "Document sur les données, mesures et incidents",
              ],
              [
                "Droits et comptes",
                "Que pouvez-vous utiliser, modifier et récupérer ?",
                "Clauses, composants tiers, dépôts et comptes",
              ],
              [
                "Maintenance",
                "Qui surveille, répond, corrige et met à jour ?",
                "Périmètre, canal, priorités, horaires et prix",
              ],
              [
                "Sortie",
                "Une autre équipe peut-elle reprendre sans reconstruire à l’aveugle ?",
                "Inventaire, formats, documentation et test de reprise",
              ],
            ]}
          />

          <p>
            Une certification, une attestation d’assurance ou une référence peut
            compléter ce dossier. Vérifiez son titulaire, sa période, son
            périmètre et ses exclusions. Aucune de ces pièces ne remplace les
            preuves propres à votre projet.
          </p>

          <p>
            L’aide officielle{" "}
            <a
              href="https://aide.monservicesecurise.cyber.gouv.fr/fr/article/mon-fournisseur-de-service-me-dit-que-cest-securise-8ldkcu/"
              target="_blank"
              rel="noreferrer"
            >
              MonServiceSécurisé de l’ANSSI
            </a>{" "}
            recommande de définir les mesures attendues et d’obtenir les
            garanties du fournisseur avant de le choisir. « C’est sécurisé »
            reste donc une déclaration ; le dossier doit montrer les mesures
            adaptées à votre contexte et la façon de les vérifier.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="couts"
          number="06"
          label="Comparaison financière"
          title="Pour comparer les coûts, fixez la période et le résultat attendu"
        >
          <p>
            Passez aux montants une fois les huit points documentés. Choisissez
            une période commune et un même résultat. Additionnez le prix
            initial, les coûts récurrents sur cette période, les options
            réellement nécessaires et la préparation de la sortie. Gardez
            séparés le temps de votre équipe, les risques non chiffrés et les
            fonctions exclues.
          </p>

          <FormulaBox>
            {[
              "TOTAL DES POSTES CONNUS SUR UNE PÉRIODE COMMUNE",
              "",
              "Prix initial hors taxes",
              "+ coûts récurrents hors taxes sur la période",
              "+ options nécessaires retenues",
              "+ préparation de la sortie",
              "= total connu hors taxes",
              "",
              "À conserver séparément : temps interne, fonction exclue, aléa,",
              "dépassement non convenu et tout montant encore inconnu.",
              "Une inconnue ne vaut jamais zéro.",
            ].join("\n")}
          </FormulaBox>

          <p>
            Demandez le déclencheur de chaque prix : utilisateur, site, entité,
            volume, consommation, jour travaillé ou forfait. La grille DAE de
            décembre 2025 questionne précisément ces règles de calcul ainsi que
            la durée mensuelle, annuelle ou perpétuelle. Une hausse de volume
            peut alors être recalculée au lieu d’être découverte après
            signature.
          </p>

          <GuideTable
            caption="Aligner les postes avant de comparer les totaux"
            headers={["Poste", "Inclus possible", "Question de contrôle"]}
            rows={[
              [
                "Initial",
                "Cadrage, conception, développement, intégration, migration, formation",
                "Les livrables et paiements correspondent-ils aux mêmes étapes ?",
              ],
              [
                "Récurrent",
                "Hébergement, licences, support, maintenance, services tiers",
                "Même période, même volume et même niveau de service ?",
              ],
              [
                "Options",
                "Fonction ou accompagnement non inclus dans la base",
                "Est-il nécessaire au résultat commun ou réellement facultatif ?",
              ],
              [
                "Exclusions",
                "Donnée à nettoyer, interface, matériel, contenu, conformité spécialisée",
                "Qui fera ce travail et avec quel budget ?",
              ],
              [
                "Sortie",
                "Export, documentation, transfert, assistance, test de reprise",
                "Le coût et les formats sont-ils écrits avant l’engagement ?",
              ],
            ]}
          />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="07"
          label="Outil local"
          title="L’outil relit un dossier sans le réduire à une note"
        >
          <p>
            L’outil reprend les huit points du dossier et les quatre postes de
            coût. Utilisez-le sur un dossier, réinitialisez-le, puis recommencez
            avec le suivant. Il suit toujours le même ordre : STOP, inconnue,
            réponse seulement orale, cas commun non observé, coûts incomplets,
            puis dossier candidat à la décision. Un bon point ne rachète jamais
            un droit absent ou une sortie impossible.
          </p>

          <ProviderEvidenceTool />

          <p>
            « Candidat à la décision » ne signifie pas « gagnant ». Comparez les
            traces côte à côte. Si deux candidats proposent des choix
            différents, écrivez ce que chaque écart change pour le métier et
            demandez une précision avant de trancher.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="donnees-droits"
          number="08"
          label="Cadre sensible"
          title="Données, droits et comptes : ce qui doit être écrit avant de signer"
        >
          <p>
            Commencez par les faits : quelles catégories de données entrent dans
            l’application, qui en décide l’usage, qui y accède, où elles sont
            hébergées et quels tiers interviennent ? Un prestataire n’est pas
            automatiquement sous-traitant au sens du règlement général sur la
            protection des données (RGPD).{" "}
            <a
              href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role"
              target="_blank"
              rel="noreferrer"
            >
              La CNIL rappelle que la qualification dépend des faits
            </a>
            {" : "}qui décide de quoi et qui exécute quoi. Le nom donné dans le
            contrat ne suffit pas à fixer les responsabilités.
          </p>

          <InfoBox
            variant="amber"
            title="Quand l’article 28 du RGPD s’applique, l’accord doit être précis"
          >
            <p>
              Lorsqu’un prestataire traite des données personnelles pour le
              compte du responsable,{" "}
              <a
                href="https://cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
                target="_blank"
                rel="noreferrer"
              >
                l’article 28 du RGPD
              </a>{" "}
              prévoit notamment que le traitement soit régi par un contrat ou un
              autre acte juridique écrit couvrant objet, durée, nature,
              finalité, données, personnes concernées, instructions,
              confidentialité, sécurité, sous-traitants ultérieurs, assistance,
              restitution ou suppression et audit.
            </p>
            <p>
              Ce guide ne qualifie pas votre situation ; associez la personne
              compétente.
            </p>
            <p>
              La{" "}
              <a
                href="https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_fr"
                target="_blank"
                rel="noreferrer"
              >
                Commission européenne publie des clauses contractuelles types
              </a>{" "}
              pour les relations entre responsables et sous-traitants dans
              l’Union européenne et l’Espace économique européen. Ce modèle peut
              servir de base ; il ne remplace ni la qualification des rôles, ni
              les annexes décrivant vos traitements et mesures.
            </p>
          </InfoBox>

          <p>
            La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noreferrer"
            >
              fiche sécurité de la CNIL sur la sous-traitance
            </a>{" "}
            demande de connaître les mesures réellement mises en œuvre et cite
            notamment authentification, incidents, restitution, destruction,
            vérification des garanties et chaîne de sous-traitance. Une
            certification est un premier indice ; un mécanisme approuvé au sens
            du RGPD peut aussi servir d’élément pour démontrer des garanties
            suffisantes. Vérifiez son titulaire, sa validité et son périmètre :
            elle ne diminue pas les responsabilités et ne garantit pas l’absence
            de faille.
          </p>

          <p>
            Pour le code, ne déduisez pas les droits du paiement.{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noreferrer"
            >
              L’article L131-3 du Code de la propriété intellectuelle
            </a>{" "}
            exige que les droits cédés soient mentionnés distinctement et que
            leur domaine d’exploitation soit délimité.
          </p>

          <p>
            Un autre texte vise un cas particulier :{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
              target="_blank"
              rel="noreferrer"
            >
              L’article L113-9
            </a>{" "}
            prévoit un régime particulier pour les logiciels créés par des
            employés dans leurs fonctions ; il ne règle pas à lui seul les
            freelances, sous-traitants, bibliothèques ou logiciels tiers. Faites
            relire les clauses sensibles.
          </p>

          <GuidePremiumMemo title="Des comptes ouverts au bon nom facilitent la reprise">
            <p>
              Domaine, hébergement, dépôt de code, services d’envoi, boutique
              mobile et supervision doivent avoir un titulaire, des
              administrateurs et une procédure de récupération écrits. Obtenir
              une archive de code sans les comptes ni la procédure de
              déploiement ne suffit pas toujours à reprendre le service.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="apres"
          number="09"
          label="Exploitation"
          title="Incident ou panne : qui intervient, et dans quelles limites ?"
        >
          <p>
            La livraison ne supprime ni les incidents, ni les mises à jour, ni
            les changements de règles métier. Faites écrire ce qui relève de la
            correction, de l’assistance, de l’exploitation et d’une évolution
            facturée séparément. N’utilisez un mot comme « support » qu’avec un
            canal, des horaires, des priorités, des responsabilités et un prix.
          </p>

          <GuideTable
            caption="Chronologie à faire préciser avant l’engagement"
            headers={["Moment", "Question", "Trace à obtenir"]}
            rows={[
              [
                "Détection",
                "Qui remarque l’erreur ou l’indisponibilité ?",
                "Supervision, alerte, personne de contact et limites",
              ],
              [
                "Qualification",
                "Qui mesure l’impact et fixe la priorité ?",
                "Échelle compréhensible et informations à fournir",
              ],
              [
                "Contournement",
                "Comment le métier continue-t-il si la correction attend ?",
                "Procédure proportionnée et responsable",
              ],
              [
                "Correction",
                "Qu’est-ce qui est inclus et comment le résultat est-il retesté ?",
                "Périmètre de maintenance et preuve de validation",
              ],
              [
                "Évolution",
                "Qui décide du changement et de son coût ?",
                "Demande versionnée, estimation et acceptation",
              ],
              [
                "Sortie",
                "Comment une autre équipe reprend-elle ?",
                "Export, code, accès, documentation et exercice de reprise",
              ],
            ]}
          />

          <p>
            L’ANSSI identifie depuis son guide sur l’externalisation des risques
            de perte de maîtrise, d’intervention à distance et d’hébergement
            mutualisé. Ce document date de 2010 : ne lui attribuez pas un état
            technique actuel. Servez-vous-en uniquement pour poser la question
            des risques propres à votre contexte et des engagements adaptés ; la
            technique doit être revalidée aujourd’hui.
          </p>

          <p>
            Pour un produit déjà en service, le{" "}
            <Link href="/guides/reprendre-logiciel-metier-existant">
              test de relève d’un logiciel métier
            </Link>{" "}
            vérifie concrètement code, accès, déploiement, sauvegarde et
            données. Si le choix prépare un remplacement, distinguez aussi la
            sélection du prestataire du{" "}
            <Link href="/guides/migrer-logiciel-metier-sans-interruption">
              plan de migration et de retour arrière
            </Link>
            .
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decider"
          number="10"
          label="Arbitrage"
          title="Une décision utile indique aussi ce qui reste inconnu"
        >
          <p>
            La personne qui décide doit pouvoir expliquer le choix sans réciter
            une note sur 100. Écrivez le besoin compris, les hypothèses encore
            ouvertes, le résultat de la première version, la manière de le
            valider, le coût connu sur la période, les responsabilités après
            mise en service et ce qui sera récupéré en cas de changement
            d’équipe.
          </p>

          <GuideTable
            caption="Six issues possibles après les entretiens"
            headers={["État observé", "Décision possible", "Prochaine action"]}
            rows={[
              [
                "Condition inacceptable sur données, droits ou sortie",
                "Ne pas retenir dans l’état",
                "Corriger, faire valider par un spécialiste ou écarter",
              ],
              [
                "Inconnues déterminantes",
                "Reporter le classement",
                "Attribuer les questions et fixer une date de réponse",
              ],
              [
                "Réponses seulement orales",
                "Demander une proposition révisée",
                "Faire écrire hypothèses, exclusions et responsabilités",
              ],
              [
                "Besoin trop flou",
                "Financer un cadrage court",
                "Exiger des livrables réutilisables avec d’autres candidats",
              ],
              [
                "Périmètre trop large",
                "Réduire la première version",
                "Conserver un parcours complet et testable",
              ],
              [
                "Dossiers comparables",
                "Choisir ou ne retenir personne",
                "Consigner raisons, conditions, risques et décideur",
              ],
            ]}
          />

          <FormulaBox>
            {[
              "FICHE DE DÉCISION — SANS SCORE GLOBAL",
              "",
              "Le candidat a compris que…",
              "Il suppose encore que…",
              "La première version permettrait de…",
              "Nous vérifierions le résultat en…",
              "Le total connu sur notre période est… ; restent inconnus…",
              "Après la mise en service, il prend en charge…",
              "Si nous changeons d’équipe, nous récupérons…",
              "Conditions de choix, risque accepté, décideur et date :",
            ].join("\n")}
          </FormulaBox>

          <p>
            Si vous voulez faire relire les écarts entre votre besoin et les
            propositions, vous pouvez{" "}
            <Link href="/demarrer-un-projet">
              décrire votre projet et les décisions encore ouvertes
            </Link>
            . Le formulaire recueille un premier contexte ; il ne produit ni
            devis automatique, ni certification du prestataire, ni avis
            juridique.
          </p>

          <GuidePremiumMemo title="Ne retenir personne reste une décision valide">
            <p>
              Un choix reporté est préférable à un contrat fondé sur des coûts,
              des droits ou des responsabilités que personne ne peut encore
              expliquer. Réduisez le périmètre ou clarifiez le besoin, puis
              recommencez la comparaison sur le même terrain.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
