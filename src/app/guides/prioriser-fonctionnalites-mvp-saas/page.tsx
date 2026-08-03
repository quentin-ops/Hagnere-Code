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
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import {
  assessPriorityWorkshop,
  createPilotFiveRequests,
  createPilotOverCapacity,
  decisionLabels,
  routeLabels,
} from "./priority-workshop-engine";
import { PriorityWorkshopTool } from "./priority-workshop-tool";

const guide = getGuide("prioriser-fonctionnalites-mvp-saas");

const breadcrumbName = guide.cardTitle;
const pilotInput = createPilotFiveRequests();
const pilot = assessPriorityWorkshop(pilotInput);
const overCapacity = assessPriorityWorkshop(createPilotOverCapacity());

export const metadata = buildGuideMetadata(
  guide,
  "Demandes, preuves, dépendances et capacité avant la revue d’un lot SaaS",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Décider sans score magique",
    shortLabel: "Réponse",
  },
  {
    id: "probleme",
    number: "02",
    label: "Passer de la demande au problème",
    shortLabel: "Preuve",
  },
  {
    id: "voies",
    number: "03",
    label: "Séparer les voies critiques",
    shortLabel: "Voies",
  },
  {
    id: "options",
    number: "04",
    label: "Choisir entre cinq décisions",
    shortLabel: "Options",
  },
  {
    id: "capacite",
    number: "05",
    label: "Compter lot et dépendances",
    shortLabel: "Capacité",
  },
  {
    id: "exemple",
    number: "06",
    label: "Rejouer cinq demandes fictives",
    shortLabel: "Exemple",
  },
  {
    id: "atelier",
    number: "07",
    label: "Préparer votre revue locale",
    shortLabel: "Atelier",
  },
  {
    id: "rice",
    number: "08",
    label: "Utiliser RICE à sa juste place",
    shortLabel: "RICE",
  },
  {
    id: "revue",
    number: "09",
    label: "Relire avant d’annoncer le lot",
    shortLabel: "Revue",
  },
];

const requestRows = pilotInput.requests.map((request) => [
  request.id,
  request.rawRequest,
  routeLabels[request.route],
  decisionLabels[request.proposedDecision],
]);

const faqItems = [
  {
    question: "Faut-il développer la demande du plus gros client en premier ?",
    answer: (
      <p>
        Non, pas automatiquement. Son importance commerciale mérite une décision
        explicite, mais elle ne remplace ni le problème observé, ni l’effet sur
        le produit commun, ni les dépendances, ni le travail complet. Un
        engagement contractuel déjà pris quitte le classement ordinaire et doit
        être instruit avec son propriétaire.
      </p>
    ),
  },
  {
    question: "Le nombre de votes suffit-il pour choisir une fonctionnalité ?",
    answer: (
      <p>
        Non. Un vote signale un intérêt, mais ne prouve pas la situation, le
        résultat recherché ni l’usage après livraison. Conservez le nombre et la
        période comme une preuve parmi d’autres, puis documentez qui rencontre
        le problème, quand et avec quelle conséquence.
      </p>
    ),
  },
  {
    question: "Que faire lorsqu’on manque de données ?",
    answer: (
      <p>
        Ne remplacez pas le manque par zéro. Rédigez le plus petit test qui peut
        changer la décision, sa mesure et son seuil. Si le seuil ou la source de
        preuve manque encore, maintenez le STOP au lieu de produire une priorité
        artificielle.
      </p>
    ),
  },
  {
    question:
      "Une intégration existante est-elle toujours préférable au code ?",
    answer: (
      <p>
        Non. Comparez l’adéquation fonctionnelle, les états d’erreur, la
        sécurité, la réversibilité, l’exploitation et le coût réel dans votre
        contexte. Ici, « acheter ou intégrer » reste une option à instruire,
        jamais un résultat automatique.
      </p>
    ),
  },
  {
    question: "Un statut candidat autorise-t-il l’équipe à commencer ?",
    answer: (
      <p>
        Non. Il indique seulement que les champs nécessaires au calcul local
        sont renseignés et que la capacité déclarée n’est pas dépassée. Une
        personne doit encore vérifier la preuve, les dépendances, les risques,
        l’effort, le socle opérationnel et la décision proposée.
      </p>
    ),
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
          { label: "Décision humaine", variant: "dark" },
          { label: "Dépendances comptées", variant: "neutral" },
          { label: "Atelier local", variant: "success" },
          {
            label: "Mis à jour le " + formatGuideDate(guide.dateModified),
            variant: "muted",
          },
        ]}
        heroTitle="Quelles fonctionnalités"
        heroTitleEm="développer maintenant"
        heroTitleSuffix="dans votre SaaS ?"
        heroDescription="Un score ne choisit pas à votre place. Une demande incomplète devient d’abord un test. Un incident, une obligation, un engagement ou une dépendance critique suit une voie séparée. Le prochain lot candidat est le plus petit ensemble cohérent dont le problème, la preuve, le résultat vérifiable, les dépendances et l’effort sont assez explicites pour une revue humaine."
        stats={[
          { label: "Demandes par atelier", value: "5 max." },
          { label: "Voies critiques", value: "5" },
          { label: "Statuts", value: "7" },
          { label: "Score arbitre", value: "Aucun" },
          { label: "Données envoyées", value: "Aucune" },
          { label: "Lecture", value: guide.readTimeMin + " min" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        toc={toc}
        tocLabel="De la demande brute au lot candidat"
        faqTitle="Questions fréquentes sur la priorisation SaaS"
        faqItems={faqItems}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Décider sans",
          titleEm: "cacher les inconnues",
          titleEnd: "derrière une note.",
          subtitle:
            "Cinq réponses directes sur les votes, les grands comptes, les intégrations, les preuves faibles et le statut candidat.",
        }}
        strategyCta={{
          titleStart: "Faire relire",
          titleEm: "le prochain lot avant de le promettre",
          description:
            "Apportez une version sans donnée sensible : demandes brutes, preuves et limites, voies critiques, décisions proposées, dépendances, effort complet et capacité sur une période nommée. La revue peut maintenir un STOP ou recommander un test, une intégration ou un lot plus petit.",
          badges: [
            "Voies critiques séparées",
            "Inconnues conservées",
            "Aucune date automatique",
          ],
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={[
          {
            source:
              "GOV.UK Service Manual · Learning about users and their needs · mise à jour 23 mars 2017",
            href: "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs",
            description:
              "Demande de partir d’utilisateurs réels, de traiter les suggestions non issues d’utilisateurs comme des hypothèses et de centrer le besoin sur le problème. La méthode vient des services publics britanniques ; elle n’impose pas un processus à un SaaS privé.",
          },
          {
            source:
              "GOV.UK Service Manual · User research for government services · mise à jour 23 mars 2017",
            href: "https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design",
            description:
              "Demande de chercher ce qui fonctionne pour les différents utilisateurs plutôt que de mesurer seulement leurs préférences ou ce qui est populaire. La portée reste celle des services publics britanniques : un vote SaaS peut être un signal, mais cette source ne fixe aucun seuil privé.",
          },
          {
            source:
              "Sean McBride · Intercom · RICE · article du 5 janvier 2018",
            href: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/",
            description:
              "Définit portée, effet, confiance et effort, ainsi que la formule. L’auteur précise que le score n’est pas une règle stricte et que dépendances ou fonctions attendues peuvent justifier un ordre différent. Intercom est l’éditeur de la méthode présentée.",
          },
          {
            source:
              "Productboard Support · Formules de priorisation · mise à jour 30 juin 2026",
            href: "https://support.productboard.com/hc/en-us/articles/32511614274323-Create-your-own-prioritization-formulas",
            description:
              "Documente que les valeurs nulles de ses champs de critères (« drivers »), numériques et d’effort sont automatiquement traitées comme zéro dans les formules. Ce comportement propre au produit justifie de vérifier la convention d’un outil avant tout tri ; il ne prouve ni une erreur universelle des scores, ni la priorité d’une fonction.",
          },
          {
            source: "Alex Osterwalder · Strategyzer · Test Card · 5 mars 2015",
            href: "https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card",
            description:
              "Rend explicites l’hypothèse, le test, la mesure et le seuil de succès. C’est une ressource méthodologique commerciale et auto-attribuée ; elle n’établit aucun seuil universel.",
          },
          {
            source:
              "Home Office Engineering · Design from evidence · mise à jour 9 août 2023",
            href: "https://engineering.homeoffice.gov.uk/principles/design-from-evidence/",
            description:
              "Relie besoins, preuves datées, exigences fonctionnelles ou non fonctionnelles, décisions documentées et tests. Sa portée est celle d’une administration britannique, transposée ici comme discipline de traçabilité.",
          },
          {
            source:
              "DORA · Working in small batches · mise à jour 8 décembre 2025",
            href: "https://dora.dev/capabilities/working-in-small-batches/",
            description:
              "Relie petits lots, retour rapide, correction de trajectoire et travail testable. La page met en garde contre le regroupement tardif des lots ; les durées illustratives citées ne constituent pas un délai universel de développement.",
          },
          {
            source:
              "NIST · SP 800-218 SSDF 1.1 · publication finale février 2022",
            href: "https://csrc.nist.gov/pubs/sp/800/218/final",
            description:
              "Cadre de pratiques de développement sécurisé à intégrer au cycle de vie pour réduire les vulnérabilités. Recommandation américaine de haut niveau : elle ne classe pas une vulnérabilité et ne constitue pas une norme française générale.",
          },
          {
            source:
              "GOV.UK · Technology Code of Practice · mise à jour 7 juillet 2025",
            href: "https://www.gov.uk/service-manual/technology/code-of-practice.html",
            description:
              "Demande de considérer partage, réutilisation, intégration et stratégie d’achat dans les projets publics. Cette portée justifie seulement l’examen d’une option existante, pas sa supériorité automatique pour un SaaS B2B.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée et provenance",
          title: "Une préparation de décision, pas une priorité automatique",
          description:
            "Les cinq demandes, personnes, preuves, dates, efforts et résultats de l’exemple sont entièrement fictifs. Les sources soutiennent des principes dans leurs champs propres ; elles ne prouvent ni conformité, ni sécurité, ni résultat commercial. La date de publication affichée reprend la première trace Git de cette URL ; elle décrit l’historique du code, pas sa disponibilité publique. La présence du contenu dans le code, son intégration ou un build réussi ne prouvent pas à eux seuls l’existence d’une page servie, d’un déploiement, d’une publication ou d’une indexation.",
        }}
        relatedGuides={[
          {
            label: "Définir le socle du premier test SaaS",
            href: "/guides/mvp-saas-quoi-inclure",
          },
          {
            label: "Rédiger le cahier des charges du lot choisi",
            href: "/guides/cahier-des-charges-saas",
          },
          {
            label: "Calculer le calendrier par dépendances",
            href: "/guides/combien-de-temps-developper-saas",
          },
        ]}
        relatedGuidesLabel="3 décisions voisines, sans chevauchement"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          title="Le score organise une discussion ; il ne prend pas la décision"
        >
          <p>
            Commencez par écrire, pour chaque demande, la personne concernée, la
            situation, le travail bloqué, la preuve disponible et sa limite. Une
            demande encore fondée sur une opinion devient un test avec une
            mesure et un seuil. Un incident, un sujet de sécurité, une
            obligation applicable, un engagement contractuel ou un prérequis
            fondateur quitte la comparaison générale et reçoit un responsable.
          </p>
          <p>
            Proposez ensuite une décision humaine : construire un petit lot,
            tester, traiter d’abord, acheter ou intégrer, ou différer avec un
            événement de réouverture. Un lot est seulement candidat lorsque son
            problème, sa preuve, son résultat, sa mesure, son seuil, son
            responsable, son effort complet et ses dépendances sont explicites,
            puis tiennent dans la capacité déclarée sur la même période.
          </p>

          <GuidePremiumMemo title="Avant de nommer un lot candidat">
            <ul>
              <li>Transformer la solution demandée en problème observable.</li>
              <li>Sortir les voies critiques du classement ordinaire.</li>
              <li>Choisir une action humaine et vérifier ses dépendances.</li>
              <li>Compter le lot complet avant de l’annoncer.</li>
            </ul>
          </GuidePremiumMemo>

          <InfoBox
            variant="amber"
            title="Le socle opérationnel du MVP reste un prérequis"
          >
            <p>
              Le guide sur{" "}
              <Link href="/guides/mvp-saas-quoi-inclure">
                ce qu’un MVP SaaS doit inclure
              </Link>{" "}
              attribue comptes, accès, données, vente, support, administration
              et mesure. Séparez ce socle de la comparaison ; vous pourrez
              ensuite revenir à chaque demande pour chercher le problème qu’elle
              recouvre.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="probleme"
          number="02"
          label="Qualification"
          title="Conservez la phrase brute, puis cherchez le travail empêché"
        >
          <p>
            « Ajoutez un tableau de bord » décrit une solution. Elle ne dit pas
            qui décide, dans quelle situation, avec quelles données ni ce qui
            échoue aujourd’hui. Gardez cette phrase pour la traçabilité, puis
            reformulez le problème sans effacer la source : « une responsable
            prépare sa revue hebdomadaire dans un tableur ; nous ignorons quelle
            décision exige réellement une nouvelle vue ».
          </p>
          <p>
            Le GOV.UK Service Manual recommande de traiter comme hypothèses les
            suggestions qui ne viennent pas d’utilisateurs et de formuler le
            besoin autour du problème plutôt que d’une solution. Cette règle
            vient des services publics britanniques ; ici, elle sert de
            discipline de preuve, pas d’obligation pour un SaaS privé.
          </p>

          <Image
            src="/guides/prioriser-fonctionnalites-mvp-saas/demandes-preuves-voies-16x9.webp"
            alt="Une demande brute passe par une preuve datée avant d’être orientée vers construire, tester ou une voie critique"
            width={1600}
            height={900}
            sizes="(max-width: 1024px) 100vw, 760px"
            className="not-prose my-8 h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
            priority
          />

          <GuideTable
            caption="Les champs qui rendent deux demandes réellement comparables"
            headers={["Champ", "Question", "Trace minimale"]}
            rows={[
              [
                "Personne et situation",
                "Qui essaie de faire quoi, et quand ?",
                "Rôle, contexte et tâche observée.",
              ],
              [
                "Problème",
                "Quel travail est empêché ou dégradé ?",
                "Conséquence observable, sans promettre une solution.",
              ],
              [
                "Preuve",
                "Quelle observation soutient le problème ?",
                "Source, période et limite ; une opinion reste une hypothèse.",
              ],
              [
                "Résultat",
                "Qu’est-ce qui devra changer ?",
                "Mesure et seuil définis avant la construction.",
              ],
              [
                "Travail complet",
                "Que faut-il concevoir, développer, tester et exploiter ?",
                "Effort dans une unité commune, dépendances incluses.",
              ],
            ]}
          />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="voies"
          number="03"
          label="Non-comparables"
          title="Un incident ou une obligation ne doit pas gagner un concours de points"
        >
          <p>
            La qualification terminée, vérifiez d’abord si la demande peut
            réellement entrer dans la comparaison. Cinq voies demandent une
            instruction séparée : incident actif, sécurité, droit ou conformité,
            engagement contractuel et dépendance fondatrice. Les sortir du
            classement ne signifie ni « faire tout de suite » ni « ignorer ».
            Cela signifie nommer un responsable, la prochaine action et la revue
            qualifiée qui décidera du traitement.
          </p>

          <GuideTable
            caption="Voies séparées de la comparaison ordinaire"
            headers={["Voie", "Pourquoi elle sort", "Trace exigée"]}
            rows={[
              [
                "Incident",
                "Le service observé est déjà dégradé.",
                "Responsable, confinement, diagnostic et prochaine revue.",
              ],
              [
                "Sécurité",
                "Le risque doit être qualifié, pas compensé par une valeur métier.",
                "Propriétaire, scénario de risque et décision proportionnée.",
              ],
              [
                "Droit / conformité",
                "L’applicabilité précède toute note de priorité.",
                "Texte ou exigence, périmètre, spécialiste et action.",
              ],
              [
                "Engagement contractuel",
                "Une promesse existante exige une décision commerciale et contractuelle.",
                "Clause, portée, responsable et option de renégociation.",
              ],
              [
                "Dépendance fondatrice",
                "Le lot ne peut pas fonctionner sans elle.",
                "Lien explicite, effort et responsable ; comptage une seule fois.",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="La sécurité reste fondée sur le risque"
          >
            <p>
              Le NIST SSDF propose des pratiques de développement sécurisé à
              intégrer au cycle de vie. Il ne fournit pas un score universel de
              backlog et ne constitue pas une norme française générale. Pour
              définir les exigences et preuves d’un cas concret, utilisez le{" "}
              <Link href="/guides/securite-application-metier">
                guide de sécurité d’une application métier
              </Link>
              .
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="options"
          number="04"
          label="Décision proposée"
          title="Construire n’est qu’une option parmi cinq"
        >
          <GuideTable
            caption="Cinq décisions humaines possibles après qualification"
            headers={["Décision", "Quand la proposer", "Condition de sortie"]}
            rows={[
              [
                "Construire",
                "Problème et preuve assez solides, résultat vérifiable, lot cohérent.",
                "Responsable, effort complet, dépendances, mesure et seuil connus.",
              ],
              [
                "Tester",
                "La demande reste une hypothèse ou une solution trop précise.",
                "Petit test, mesure, seuil et décision qui suivra le résultat.",
              ],
              [
                "Traiter d’abord",
                "La demande suit une voie critique séparée.",
                "Responsable et prochaine action ; pas de classement automatique.",
              ],
              [
                "Acheter ou intégrer",
                "Une capacité générique existe peut-être déjà.",
                "Adéquation, erreurs, sécurité, exploitation et sortie à vérifier.",
              ],
              [
                "Différer",
                "La preuve ou le résultat ne justifie pas le prochain lot.",
                "Motif et événement observable qui rouvrira la demande.",
              ],
            ]}
          />

          <p>
            Cette grille empêche le faux choix « maintenant ou jamais ». Un test
            peut battre un développement, une intégration peut éviter de
            reconstruire une capacité générique et un report peut être une
            décision contrôlée. Si aucun résultat ne changerait votre décision,
            ne développez pas encore.
          </p>
          <p>
            Une matrice stricte s’applique : « traiter d’abord » reste réservé
            aux cinq voies critiques. Seules les décisions construire, tester et
            acheter ou intégrer peuvent entrer dans le calcul du lot complet et
            de sa capacité ; une demande différée en reste exclue.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="capacite"
          number="05"
          label="Calcul reproductible"
          title="Additionnez le lot et ses dépendances une seule fois"
        >
          <p>
            Choisissez une période nommée et une seule unité : ici, le
            jour-personne. Additionnez chaque demande sélectionnée et toutes ses
            dépendances nécessaires, en dédupliquant les identifiants partagés.
            Comparez ce total à la capacité totale déclarée pour la même
            période. L’unité ne transforme pas l’effort en date et ne promet
            aucune livraison.
          </p>

          <Image
            src="/guides/prioriser-fonctionnalites-mvp-saas/lot-dependances-capacite-4x3.webp"
            alt="Exemple fictif : un lot de six jours-personne et une dépendance de trois jours-personne tiennent dans une capacité de dix"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 720px"
            className="not-prose my-8 h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
          />

          <FormulaBox>
            {[
              "EXEMPLE FICTIF, SUR UNE SEULE PÉRIODE",
              "",
              "lot complet = Σ demandes sélectionnées + Σ dépendances nécessaires dédupliquées",
              "REQ-BUILD (6 j-p) + REQ-INTEGRATE (3 j-p) = 9 j-p ; capacité 10 j-p ; reste 1 j-p",
            ].join("\n")}
          </FormulaBox>

          <p>
            Si l’effort passe de 6 à 8 jours-personne, le même ensemble vaut 8 +
            3 = 11 jours-personne : il dépasse la capacité de 10 de 1
            jour-personne. Le moteur maintient{" "}
            <code className="break-all">
              STOP_SELECTED_LOT_EXCEEDS_CAPACITY
            </code>{" "}
            et ne réduit pas silencieusement le lot.
          </p>
          <p>
            Une capacité inconnue laisse le sous-total de 9 visible mais le
            reste inconnu. Un effort inconnu rend le total global inconnu. Une
            dépendance absente, dupliquée, auto-référente ou cyclique interdit
            un total exploitable. Vide, inconnu et zéro restent trois états
            distincts.
          </p>
          <p>
            Une dépendance nécessaire proposée au report ou placée sur une voie
            critique n’est jamais additionnée comme si elle était prête : le
            total reste inconnu jusqu’à correction de sa voie d’instruction et
            de sa décision.
          </p>
          <p>
            Chaque action nécessaire au lot doit aussi avoir un responsable. Une
            intégration ou un test sans responsable maintient un STOP, même
            lorsque son effort est connu et que le total tient dans la capacité.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exemple"
          number="06"
          label="Cas entièrement fictif"
          title="Cinq demandes, cinq voies, un seul lot candidat"
        >
          <p>
            L’exemple suivant ne décrit ni un client ni une mission Hagnéré
            Code. Tous les noms, dates, preuves, efforts et résultats sont
            inventés pour rendre les calculs rejouables. Il illustre un atelier
            du 3 au 14 août 2026 avec une capacité déclarée de 10
            jours-personne.
          </p>

          <GuideTable
            caption="Cinq demandes fictives suivies jusqu’à une décision humaine"
            headers={["ID", "Phrase reçue", "Voie", "Décision proposée"]}
            rows={requestRows}
          />

          <GuidePremiumCase
            initial="F"
            eyebrow="Exemple fictif · résultat du moteur"
            title="REQ-BUILD dépend de REQ-INTEGRATE"
          >
            <p>
              La validation groupée demande 6 jours-personne ; sa notification
              nécessaire en demande 3. La dépendance n’est comptée qu’une fois :
              total 9, capacité 10, reste 1. Le statut{" "}
              <code className="break-all">{pilot.status}</code> signifie
              uniquement que ce petit lot peut être relu par une personne.
            </p>
          </GuidePremiumCase>

          <GuideTable
            caption="Contre-cas rejouables du même exemple fictif"
            headers={["Modification", "Résultat", "Décision"]}
            rows={[
              [
                "Effort du lot porté à 8, dépendance maintenue à 3",
                "11 / 10 ; dépassement " +
                  overCapacity.overrunPersonDays +
                  " j-p",
                "STOP ; réduire, déplacer ou augmenter la capacité par décision humaine.",
              ],
              [
                "Preuve faible, test et mesure présents, seuil absent",
                "Contexte requis encore inconnu",
                "STOP ; compléter le seuil avant de lancer le test.",
              ],
              [
                "Incident sans responsable",
                "Voie critique non attribuée",
                "STOP ; nommer responsable et prochaine action.",
              ],
              [
                "Demande de couleurs sans preuve suffisante",
                "Report avec deux blocages documentés comme déclencheur",
                "Différer et rouvrir seulement si l’événement arrive.",
              ],
            ]}
          />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="atelier"
          number="07"
          label="Action autonome"
          title="Préparez un brouillon local, copiable et contestable"
        >
          <p>
            Chargez l’exemple fictif, remplacez chaque champ par vos éléments
            non sensibles, puis relisez les STOP. Le moteur conserve chaque
            nombre exactement tel que vous l’avez saisi, contrôle trois
            décimales au maximum entre 0 et 10&nbsp;000 jours-personne, détecte
            les identifiants et dépendances incohérents, calcule le lot avec
            toutes ses dépendances et produit un brouillon Markdown copiable.
          </p>
          <p>
            Rien n’est envoyé ni conservé. La copie dans le presse-papiers a un
            repli sélectionnable ; aucun tableur ni téléchargement n’est généré.
            Réinitialiser supprime l’état de l’atelier. Le résultat documente
            votre proposition, il ne remplace pas la revue.
          </p>
          <p>
            Vous avez plus de cinq demandes ? Préparez plusieurs brouillons avec
            la même période et les mêmes règles, puis relisez-les ensemble. Le
            premier groupe saisi ne gagne pas : l’outil ne consolide ni ne
            classe automatiquement plusieurs sessions.
          </p>

          <PriorityWorkshopTool />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="rice"
          number="08"
          label="Cadre secondaire"
          title="RICE peut comparer des idées homogènes, pas absorber les exceptions"
        >
          <p>
            La méthode RICE, présentée par Sean McBride chez Intercom, compare
            quatre éléments : portée, effet, confiance et effort. La portée doit
            employer une période commune et autant que possible des mesures
            réelles ; l’effort couvre toute l’équipe. L’article précise aussi
            que le score n’est pas une règle stricte : une dépendance ou une
            capacité attendue peut justifier un autre ordre.
          </p>

          <FormulaBox>
            {[
              "FORMULE RICE, SANS L’UTILISER DANS LE MOTEUR PRINCIPAL",
              "",
              "RICE = portée sur une même période × effet estimé par personne × confiance ÷ effort total dans une même unité",
              "Aucun exemple chiffré ici : une échelle d’effet choisie ou une confiance estimée ne devient pas objective parce qu’elle entre dans une formule.",
            ].join("\n")}
          </FormulaBox>

          <p>
            Vérifiez aussi la convention de votre outil avant de trier. La
            documentation Productboard mise à jour le 30 juin 2026 indique que
            ses formules traitent automatiquement comme zéro les valeurs nulles
            des champs de critères (« drivers »), des champs numériques et de
            l’effort. Cet atelier fait volontairement l’inverse : une valeur
            absente reste inconnue. Ce contre-exemple ne rend pas Productboard
            incorrect ; il montre que deux outils peuvent donner un sens
            différent au même champ vide.
          </p>

          <p>
            Utilisez éventuellement RICE après avoir séparé les voies critiques,
            harmonisé périodes et unités, documenté l’échelle d’effet et
            conservé la provenance de chaque hypothèse. Le nombre de votes ou le
            revenu d’un compte peut nourrir la discussion ; il ne suffit pas à
            prouver le problème ni à décider automatiquement.
          </p>
          <p>
            Un petit lot reste utile seulement s’il est autonome, testable et
            envoyé assez tôt pour obtenir du retour. DORA signale le piège qui
            consiste à découper le travail, puis à regrouper tous les morceaux
            avant test ou livraison : le retour reste alors tardif.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="revue"
          number="09"
          label="Contrôle humain"
          title="Annoncez le lot seulement après une revue des preuves et responsabilités"
        >
          <Image
            src="/guides/prioriser-fonctionnalites-mvp-saas/revue-humaine-decisions-1x1.webp"
            alt="Une revue humaine au centre de cinq décisions : construire, tester, traiter, acheter ou intégrer, et reporter"
            width={900}
            height={900}
            sizes="(max-width: 640px) 100vw, 560px"
            className="not-prose mx-auto my-8 h-auto w-full max-w-xl rounded-2xl border border-zinc-200 dark:border-zinc-800"
          />

          <p>
            Faites relire la demande brute, la preuve et sa limite par les rôles
            concernés. Confirmez que chaque voie critique a un propriétaire, que
            le lot apporte un résultat vérifiable, que ses dépendances sont
            complètes et que l’effort tient dans une capacité réellement
            disponible. Vérifiez aussi que le socle opérationnel du test ne
            s’est pas caché dans le score.
          </p>

          <GuidePremiumMemo
            eyebrow="Avant toute annonce"
            title="Le statut candidat ouvre une conversation, pas un chantier"
          >
            <ul>
              <li>
                La période, l’unité, les inclusions et exclusions sont écrites.
              </li>
              <li>
                Chaque inconnue reste visible avec un responsable ou un test.
              </li>
              <li>
                Le lot peut être refusé, réduit, testé ou remplacé par une
                intégration.
              </li>
              <li>
                Une date éventuelle relève ensuite du guide de calendrier.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Une fois le lot décidé, formalisez ses responsabilités dans le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges SaaS
            </Link>{" "}
            puis ordonnez les travaux avec le{" "}
            <Link href="/guides/combien-de-temps-developper-saas">
              calcul de calendrier par dépendances
            </Link>
            . Ces deux étapes n’ajoutent aucune promesse de délai.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
