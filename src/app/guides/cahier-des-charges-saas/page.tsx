import Image from "next/image";
import Link from "next/link";
import { GuideTable, InfoBox } from "@/components/guides/guide-content-blocks";
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
import {
  assessSaasSpecification,
  createDossierClairExample,
} from "./saas-specification-engine";
import { SaasSpecificationTool } from "./saas-specification-tool";

const guide = getGuide("cahier-des-charges-saas");
const breadcrumbName = "Cahier des charges SaaS";
const dossierClair = assessSaasSpecification(createDossierClairExample());

export const metadata = buildGuideMetadata(
  guide,
  "Cahier des charges SaaS : faire chiffrer le même produit",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse-courte",
    number: "01",
    label: "Définir le document comparable",
    shortLabel: "Commencer",
  },
  {
    id: "frontiere",
    number: "02",
    label: "Fermer le périmètre vendu",
    shortLabel: "Cadrer",
  },
  {
    id: "organisation",
    number: "03",
    label: "Décrire l’organisation cliente",
    shortLabel: "Organiser",
  },
  {
    id: "droits",
    number: "04",
    label: "Écrire rôles, portées et refus",
    shortLabel: "Autoriser",
  },
  {
    id: "abonnement",
    number: "05",
    label: "Relier offre, abonnement et droits",
    shortLabel: "Abonner",
  },
  {
    id: "exploitation",
    number: "06",
    label: "Prévoir échecs, support et données",
    shortLabel: "Exploiter",
  },
  {
    id: "sortie",
    number: "07",
    label: "Prouver restauration et sortie",
    shortLabel: "Sortir",
  },
  {
    id: "exigences",
    number: "08",
    label: "Rendre les exigences testables",
    shortLabel: "Recevoir",
  },
  {
    id: "generateur",
    number: "09",
    label: "Générer la trame locale",
    shortLabel: "Générer",
  },
  {
    id: "exemple",
    number: "10",
    label: "Relire un exemple entièrement fictif",
    shortLabel: "Comparer",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "perimetre",
    num: "01",
    label: "Périmètre",
    items: [
      {
        question: "Quand rédiger le cahier des charges d’un SaaS ?",
        answer:
          "Lorsque le problème, l’acheteur et le premier résultat vendu sont assez observés pour décrire un même parcours à tous les répondants. Si le document doit encore deviner qui achète ou pourquoi le produit serait utilisé, revenez d’abord à la validation de l’idée et du parcours.",
      },
      {
        question: "Faut-il décrire l’architecture technique ?",
        answer:
          "Pas pour obtenir des offres comparables si vous n’avez pas une contrainte d’architecture déjà validée. Décrivez les utilisateurs, les données, les limites, les comportements attendus et les preuves. Demandez ensuite aux prestataires d’expliquer leurs hypothèses et leur solution technique séparément.",
      },
      {
        question: "Peut-on laisser un point à préciser avec le prestataire ?",
        answer:
          "Oui, à condition de le marquer explicitement À décider ou STOP, de nommer la personne qui tranchera et d’indiquer son effet sur le devis. Un répondant ne doit pas transformer silencieusement cette inconnue en fonction, en exclusion ou en hypothèse chiffrée.",
      },
    ],
  },
  {
    key: "abonnement-donnees",
    num: "02",
    label: "Abonnement et données",
    items: [
      {
        question: "Doit-on imposer Stripe dans le cahier des charges ?",
        answer:
          "Non. Une documentation de paiement peut illustrer la variété des états et événements, mais le document doit d’abord décrire les états internes du produit, leurs effets sur les droits, les échecs et les actions de correction. Le fournisseur reste une décision séparée.",
      },
      {
        question:
          "Le Data Act donne-t-il un droit d’export à tout client SaaS ?",
        answer:
          "Non, pas automatiquement. Le chapitre VI du règlement vise le changement de fournisseur pour les services entrant dans la définition des services de traitement de données, avec son champ, ses catégories exportables et ses limites. Prévoyez contractuellement la sortie utile au client, puis faites qualifier l’application du texte au service concerné.",
      },
      {
        question: "Que faut-il écrire sur l’accès du support ?",
        answer:
          "Précisez qui demande et approuve l’intervention, les données et l’organisation accessibles, la durée ou l’événement de fermeture, la trace nécessaire et le test prouvant que l’accès est retiré. Ne promettez pas automatiquement une conformité juridique.",
      },
    ],
  },
  {
    key: "reception",
    num: "03",
    label: "Réception et consultation",
    items: [
      {
        question: "Comment comparer plusieurs devis SaaS ?",
        answer:
          "Remettez la même version du document, les mêmes données fictives et les mêmes cas de réception. Exigez une réponse ligne par ligne : couvert, exclu, hypothèse, variante et preuve prévue. Comparez les écarts de périmètre avant les prix ; un montant plus bas peut simplement couvrir un autre produit.",
      },
      {
        question: "Une checklist WCAG ou OWASP prouve-t-elle la conformité ?",
        answer:
          "Non. Une référence versionnée aide à choisir des exigences, mais la preuve vient de contrôles exécutés sur le périmètre réel, avec environnement, résultats, écarts et nouveaux tests après correction. La réception reste une décision humaine et les qualifications juridiques ou certifications sont distinctes.",
      },
      {
        question: "Qui doit accepter le SaaS à la fin du projet ?",
        answer:
          "Le document doit nommer l’autorité de réception et les responsables des preuves métier, sécurité, accessibilité, données et exploitation. Le prestataire produit des éléments ; il ne se prononce pas seul sur l’acceptation de son propre travail.",
      },
    ],
  },
];

const fieldRows = [
  [
    "Décision",
    "Ce que le produit doit faire dans une situation précise",
    "Le sponsor produit ou métier qui peut trancher",
    "Un scénario observable avec résultat attendu",
  ],
  [
    "Responsable",
    "Qui décide, exécute, contrôle ou accepte",
    "Une personne ou une fonction nommée",
    "Une validation ou une trace attribuable",
  ],
  [
    "Preuve de réception",
    "Données initiales, action, attendu, refus et trace",
    "Le responsable du contrôle",
    "Un résultat rejouable, pas une promesse",
  ],
  [
    "Exclusion",
    "Ce qui ne fait pas partie du lot ni du prix principal",
    "Le propriétaire du périmètre",
    "Une variante séparée si elle devient nécessaire",
  ],
  [
    "Inconnue bloquante",
    "À décider ou STOP, avec effet sur périmètre et devis",
    "La personne qui pourra lever le STOP",
    "Une décision datée avant comparaison finale",
  ],
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
          { label: "Même produit, mêmes preuves", variant: "dark" },
          { label: "SaaS B2B", variant: "neutral" },
          { label: "Générateur local", variant: "success" },
          {
            label: "Mis à jour le " + formatGuideDate(guide.dateModified),
            variant: "muted",
          },
        ]}
        heroTitle="Cahier des charges SaaS :"
        heroTitleEm="faire chiffrer"
        heroTitleSuffix="le même produit"
        heroDescription="Une trame locale de neuf blocs pour décrire le parcours vendu, l’organisation cliente, les droits, l’abonnement, les échecs, les données et la sortie. Chaque bloc sépare décision, responsable, preuve, exclusion et inconnue bloquante."
        stats={[
          { label: "Blocs à renseigner", value: "9" },
          { label: "Champs par bloc", value: "5" },
          { label: "Score global", value: "Aucun" },
          { label: "Données envoyées", value: "Aucune" },
          { label: "Exemple", value: "Fictif" },
          { label: "Lecture", value: guide.readTimeMin + " min" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
        }}
        sidebarHeroCta={{
          eyebrow: "Avant les devis",
          titleStart: "Fermer",
          titleEm: "les inconnues critiques",
          description:
            "Apportez le premier parcours vendu, les rôles connus et les points encore marqués STOP. L’échange sert à distinguer le lot chiffrable des décisions qui restent au client.",
          benefits: [
            "Un même périmètre remis à chaque candidat",
            "Des exclusions et variantes visibles",
            "Des preuves prévues avant la réception",
          ],
          primaryCtaLabel: "Décrire mon projet SaaS",
          primaryCtaHref: "/demarrer-un-projet",
        }}
        toc={toc}
        tocLabel="Du produit vendu à la sortie"
        mobileCtaLabel="Faire relire mon cadrage SaaS"
        sidebarContextCta={{
          eyebrow: "Consultation SaaS",
          title: "Faire relire le périmètre avant chiffrage",
          description:
            "Partagez une version sans données sensibles, les responsables déjà identifiés et les STOP qui empêchent encore une comparaison loyale.",
          benefits: [
            "Séparer produit, contrat et architecture",
            "Relier chaque décision à une preuve",
            "Détecter les périmètres incomparables",
          ],
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Cadrer un SaaS",
          titleEm: "sans décider",
          titleEnd: "à la place du client.",
          subtitle:
            "Des réponses sur le périmètre, les abonnements, les données, les preuves et la comparaison des offres.",
          ctaTitle:
            "Votre cahier des charges produit encore des devis différents ?",
          ctaDescription:
            "Apportez les écarts de compréhension, les décisions en attente et le parcours que chaque répondant doit chiffrer.",
          ctaLabel: "Faire relire mon cadrage",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "CNIL · guide sécurité 2026",
            href: "https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
            description:
              "Habilitations, encadrement de la maintenance, sous-traitance, sauvegardes et tests de restauration pour les traitements de données personnelles.",
          },
          {
            source: "OWASP ASVS 5.0.0",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Référentiel de spécification et de vérification ; les identifiants listés sont attachés à la version stable 5.0.0.",
          },
          {
            source: "W3C · WCAG 2.2",
            href: "https://www.w3.org/TR/WCAG22/",
            description:
              "Critères testables pour le clavier, le focus visible, les erreurs, les instructions et les messages de statut.",
          },
          {
            source: "Stripe Docs · abonnements",
            href: "https://docs.stripe.com/billing/subscriptions/webhooks",
            description:
              "Illustration officielle de la variété des événements d’abonnement ; cette source ne constitue pas une recommandation de fournisseur.",
          },
          {
            source: "Stripe Docs · livraison des webhooks",
            href: "https://docs.stripe.com/webhooks",
            description:
              "Illustration officielle des doublons et de l’absence de garantie d’ordre ; ces comportements servent de contre-cas, sans imposer Stripe.",
          },
          {
            source: "EUR-Lex · règlement 2023/2854",
            href: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr",
            description:
              "Texte du Data Act, notamment son champ, ses définitions et les articles 23 à 25 relatifs au changement de fournisseur de services de traitement de données.",
          },
          {
            source: "Commission européenne · Data Act",
            href: "https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained",
            description:
              "Explication institutionnelle du règlement et de ses différentes catégories de règles, sans extension automatique à tout abonnement SaaS.",
          },
          {
            source: "Légifrance · article L131-3",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
            description:
              "Délimitation des droits cédés ; utile pour ne pas confondre export des données, remise des livrables et droits sur le code.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée du guide",
          title: "Une méthode de spécification, pas une conformité automatique",
          description:
            "Les décisions, rôles, seuils, durées et obligations dépendent de votre produit, de vos contrats, de vos données et de vos risques. L’exemple DossierClair est entièrement fictif. Les références CNIL, OWASP, W3C, paiement, Data Act et propriété intellectuelle aident à écrire des questions et des preuves ; elles ne remplacent pas les validations métier, juridiques, sécurité, accessibilité ou comptables compétentes.",
        }}
        relatedGuides={[
          {
            label: "Valider une idée SaaS avant de développer",
            href: "/guides/valider-idee-saas-avant-developper",
          },
          {
            label: "Droits d’accès d’une application métier",
            href: "/guides/droits-acces-application-metier",
          },
        ]}
        relatedGuidesLabel="2 prolongements utiles"
      >
        <GuidePremiumSection
          id="reponse-courte"
          number="01"
          label="Réponse directe"
          title="Le cahier des charges fixe le même SaaS pour tous les répondants"
        >
          <p>
            Un cahier des charges SaaS utile ne commence ni par une
            architecture, ni par une liste d’écrans. Il fixe le produit que
            l’entreprise achète : qui crée l’organisation cliente, qui peut
            agir, quel parcours justifie l’abonnement, quels droits naissent de
            l’offre et ce qui se passe en cas d’échec. Il précise aussi comment
            les données sont récupérées à la sortie. Pour chaque règle, il nomme
            un responsable, une preuve de réception et une exclusion.
          </p>

          <p>
            Le document est comparable lorsque chaque candidat peut reprendre
            les mêmes situations initiales, produire les mêmes résultats
            attendus et déclarer séparément ses hypothèses. Une inconnue
            structurante reste écrite <strong>STOP</strong> ou{" "}
            <strong>À décider</strong>. Un prix ou une fonction bien détaillée
            ailleurs ne la compense pas.
          </p>

          <GuideTable
            caption="Les cinq natures d’information qui empêchent un périmètre implicite"
            headers={["Nature", "Contenu", "Propriétaire", "Preuve attendue"]}
            rows={fieldRows}
          />

          <InfoBox
            variant="amber"
            title="STOP si le problème, l’acheteur ou le premier parcours vendu restent inconnus"
          >
            <p>
              Dans ce cas, le cahier des charges transforme encore une hypothèse
              de marché en commande de logiciel. Revenez au guide pour{" "}
              <Link href="/guides/valider-idee-saas-avant-developper">
                valider une idée SaaS avant de développer
              </Link>
              , puis reprenez ici lorsque le premier résultat vendu peut être
              raconté de bout en bout.
            </p>
          </InfoBox>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/cahier-des-charges-saas/cahier-saas-16x9.webp"
              alt="Chaîne d’un cahier des charges SaaS, de l’organisation cliente à la sortie"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
              priority
            />
          </div>

          <GuidePremiumMemo title="La phrase de contrôle à mettre en tête du document">
            <p>
              « Chaque répondant chiffre les décisions ci-dessous, conserve les
              STOP, liste les hypothèses qu’il ajoute, isole les variantes et
              décrit la preuve qui permettra au client de recevoir chaque
              comportement. »
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="frontiere"
          number="02"
          label="Périmètre produit"
          title="Le résultat vendu fixe la frontière des fonctions"
        >
          <p>
            Écrivez d’abord une histoire courte : une organisation cliente part
            d’un état initial, une personne autorisée accomplit le premier
            parcours et obtient le résultat vendu. Nommez le déclencheur, les
            données nécessaires, le début, la fin et les cas où ce résultat ne
            doit pas être promis. Cette histoire devient le fil rouge des rôles,
            de l’abonnement, de l’exploitation et de la recette.
          </p>

          <h3>Les neuf réponses minimales avant une consultation</h3>
          <ol>
            <li>Quelle entreprise achète et qui peut engager la décision ?</li>
            <li>
              Qui utilise le produit et dans quelle organisation cliente ?
            </li>
            <li>Quel événement déclenche le premier parcours ?</li>
            <li>Quel résultat observable met fin à ce parcours ?</li>
            <li>Quelles données entrent, changent et sortent ?</li>
            <li>
              Quels rôles peuvent agir, sur quels objets et dans quelle portée ?
            </li>
            <li>Quel droit d’usage l’offre ouvre-t-elle ou retire-t-elle ?</li>
            <li>
              Que voit le client lorsque le parcours ou l’abonnement échoue ?
            </li>
            <li>
              Quelle preuve permettra d’accepter ou de refuser la livraison ?
            </li>
          </ol>

          <p>
            Si une réponse manque, indiquez l’inconnue, son responsable et la
            date ou la condition de décision. Ne laissez pas « à voir avec le
            prestataire » sans effet explicite : selon le sujet, cela peut
            changer le produit, la charge d’exploitation, le contrat et le prix.
          </p>

          <h3>Le développement se compare d’abord à l’option la plus simple</h3>
          <p>
            Avant de consulter des développeurs, rejouez le même résultat avec
            une fonction déjà payée, une configuration légère, un processus
            manuel maîtrisé et l’option de ne pas développer. Comparez les mêmes
            préconditions, données, refus, preuves et responsabilités. Si une
            option plus simple couvre le résultat sans déplacer un risque
            inacceptable, gardez-la : un cahier des charges n’est pas une raison
            de commander du code.
          </p>

          <GuideTable
            caption="Le contre-cas à documenter avant de retenir un développement"
            headers={["Option", "Même base de comparaison", "Décision"]}
            rows={[
              [
                "Fonction déjà payée",
                "Rejouer le parcours et les refus avec la licence et les droits existants",
                "Configurer si le résultat et les preuves sont couverts",
              ],
              [
                "Processus plus léger",
                "Tester formulaire, automatisation bornée ou contrôle manuel avec les mêmes données",
                "Conserver si la charge et le risque restent acceptés",
              ],
              [
                "Développement",
                "Joindre les écarts décisifs que les options simples ne couvrent pas",
                "Consulter seulement sur ces écarts et le parcours vendu",
              ],
              [
                "Ne pas développer",
                "Vérifier si le résultat, son propriétaire ou sa preuve restent inconnus",
                "STOP tant que le logiciel servirait à masquer l’inconnue",
              ],
            ]}
          />

          <GuideTable
            caption="Séparer les couches pour ne pas faire choisir le produit par la solution technique"
            headers={["Couche", "À écrire ici", "À garder séparé"]}
            rows={[
              [
                "Produit",
                "Utilisateurs, organisation, parcours, états, règles, messages, sorties",
                "Choix d’architecture ou de fournisseur",
              ],
              [
                "Preuve",
                "Préconditions, action, attendu, refus, trace, personne qui reçoit",
                "Démonstration libre sans attendu écrit",
              ],
              [
                "Contrat",
                "Responsabilités à arbitrer, livrables, sortie, inconnues juridiques",
                "Avis juridique ou engagement non validé",
              ],
              [
                "Réponse prestataire",
                "Hypothèses, exclusions, variantes, méthode, risques et preuves",
                "Réécriture silencieuse du besoin",
              ],
            ]}
          />

          <InfoBox
            variant="blue"
            title="Le prix, le délai et le niveau de service restent des décisions du projet"
          >
            <p>
              Aucun montant, aucune durée ni aucun niveau de service contractuel
              (SLA) universel ne s’applique ici. Demandez aux candidats de
              chiffrer le même lot, de lister ce qui fait varier leur estimation
              et de séparer les options. Les responsables du client arbitrent
              ensuite avec les informations réellement disponibles.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="organisation"
          number="03"
          label="Cycle de vie client"
          title="L’organisation cliente possède son propre cycle de vie"
        >
          <p>
            Un SaaS B2B ne gère pas seulement des comptes individuels. Il doit
            savoir à quelle entreprise appartiennent les utilisateurs, les
            données, les droits d’usage et la facturation. Le cahier des charges
            doit donc décrire la création de l’organisation, son premier
            propriétaire, ses administrateurs, le transfert de responsabilité,
            la suspension, la fermeture et la séparation avec les autres
            organisations.
          </p>

          <h3>Chaque changement d’état mérite sa propre règle</h3>
          <GuideTable
            caption="Cycle de vie minimal d’une organisation cliente"
            headers={[
              "Situation",
              "Décision à écrire",
              "Cas de preuve",
              "Refus utile",
            ]}
            rows={[
              [
                "Création",
                "Qui peut créer, avec quelles données et qui devient propriétaire",
                "Organisation créée une seule fois avec un premier administrateur",
                "Création incomplète ou doublon non autorisé",
              ],
              [
                "Administration",
                "Qui invite, change les rôles et voit l’état de l’organisation",
                "Invitation attribuée et journalisée dans la bonne organisation",
                "Administration d’une autre organisation",
              ],
              [
                "Transfert",
                "Qui demande, valide et reçoit la propriété",
                "Anciennes et nouvelles responsabilités visibles",
                "Transfert sans approbation prévue",
              ],
              [
                "Suspension",
                "Effets sur accès, données, abonnement et correction",
                "Une organisation suspendue sans effet sur une autre",
                "Action interdite pendant la suspension",
              ],
              [
                "Fermeture",
                "Export, annulation, récupération, suppression et trace finale",
                "Parcours de sortie rejoué sur des données fictives",
                "Nouvel accès après la suppression prévue",
              ],
            ]}
          />

          <p>
            Utilisez au moins deux organisations fictives dans les cas de
            réception. Un test qui montre seulement qu’une personne autorisée
            voit ses données ne prouve pas que la même requête est refusée dans
            l’organisation voisine. Cette séparation est une règle produit ; la
            manière technique de l’obtenir reste à expliquer par le prestataire.
          </p>

          <InfoBox
            variant="emerald"
            title="Une adhésion relie une personne, une organisation, un rôle et une portée"
          >
            <p>
              Évitez « l’utilisateur est administrateur » sans contexte. Une
              même personne peut avoir des responsabilités différentes selon
              l’organisation, le dossier ou l’action. La règle doit rester vraie
              après une invitation, une modification de rôle et une révocation.
            </p>
          </InfoBox>

          <p>
            Le cycle de l’organisation fixe le périmètre. Les rôles peuvent
            alors être testés sur des actions permises et des refus attendus.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="droits"
          number="04"
          label="Autorisation"
          title="Un droit se vérifie par son objet, son action, sa portée et son refus"
        >
          <p>
            « Gestion des rôles » est une fonction, pas une exigence vérifiable.
            Décrivez qui peut lire, créer, modifier, valider, exporter ou
            supprimer quel objet et dans quel périmètre — organisation, dossier
            ou donnée concernée. Ajoutez un cas autorisé, un cas refusé et le
            comportement attendu après retrait du droit.
          </p>

          <GuideTable
            caption="Exemple de formulation d’un droit sans décider l’implémentation"
            headers={["Élément", "Question", "Formulation observable"]}
            rows={[
              [
                "Rôle",
                "Au nom de quelle responsabilité agit la personne ?",
                "Une administratrice d’Atelier Nord invite une contributrice",
              ],
              [
                "Objet",
                "Sur quelle ressource porte l’action ?",
                "L’adhésion à Atelier Nord, pas le profil global de la personne",
              ],
              [
                "Action",
                "Que peut-elle réellement faire ?",
                "Créer l’invitation et choisir un rôle autorisé",
              ],
              [
                "Portée",
                "Dans quelle organisation ou quel dossier ?",
                "Uniquement Atelier Nord",
              ],
              [
                "Refus",
                "Quelle tentative doit échouer ?",
                "Modifier une adhésion de Studio Rivage",
              ],
              [
                "Révocation",
                "Que deviennent les accès déjà ouverts ?",
                "La requête suivante sur la portée retirée est refusée ; toutes les sessions prennent fin si le compte entier est désactivé ou supprimé",
              ],
            ]}
          />

          <p>
            Le guide sécurité de la CNIL relie les habilitations aux besoins
            d’accès, à leur validation et à la suppression des permissions
            devenues inutiles. Le référentiel OWASP ASVS 5.0.0 permet de
            versionner les contrôles retenus :
          </p>

          <ul>
            <li>
              <strong>v5.0.0-8.1.1</strong> pour documenter les règles
              fonctionnelles ;
            </li>
            <li>
              <strong>v5.0.0-8.2.2</strong> pour les restrictions sur les
              données ;
            </li>
            <li>
              <strong>v5.0.0-8.3.1</strong> pour les vérifications côté service
              ;
            </li>
            <li>
              <strong>v5.0.0-8.3.2</strong> pour l’effet immédiat d’un
              changement d’autorisation ou ses mesures compensatoires ;
            </li>
            <li>
              <strong>v5.0.0-8.4.1</strong> pour les opérations entre
              organisations ;
            </li>
            <li>
              <strong>v5.0.0-7.4.2</strong> pour terminer les sessions d’un
              compte désactivé ou supprimé.
            </li>
          </ul>

          <p>Cette sélection ne vaut ni audit exhaustif, ni certification.</p>

          <p>
            Si votre matrice devient volumineuse, conservez ici les règles
            critiques et renvoyez vers une annexe versionnée. Le guide sur les{" "}
            <Link href="/guides/droits-acces-application-metier">
              droits d’accès d’une application métier
            </Link>{" "}
            aide à construire cette matrice sans score compensatoire.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/cahier-des-charges-saas/cahier-saas-4x3.webp"
              alt="Cycle SaaS reliant événements, états internes, droits, messages et actions de correction"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>

          <p>
            Une fois les droits décrits, chaque offre doit préciser ceux qu’elle
            ouvre, modifie ou retire.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="abonnement"
          number="05"
          label="Offre et facturation"
          title="Une offre ouvre des droits ; l’abonnement les fait évoluer"
        >
          <p>
            Une offre commerciale ne doit pas rester un nom affiché sur une page
            de prix. Écrivez la table qui relie chaque offre aux droits d’usage
            : fonctions ouvertes, limites, rôles autorisés, consommation
            éventuelle et comportement lors d’un changement. Puis décrivez les
            états internes de l’abonnement et leur effet sur ces droits.
          </p>

          <h3>La table de décision à demander</h3>
          <GuideTable
            caption="Relier chaque événement d’abonnement à une décision du produit"
            headers={[
              "Événement observé",
              "État interne",
              "Effet sur le droit",
              "Message client",
              "Action et responsable",
            ]}
            rows={[
              [
                "Souscription confirmée",
                "À définir",
                "À définir",
                "À définir",
                "À attribuer",
              ],
              [
                "Renouvellement confirmé",
                "À définir",
                "À définir",
                "À définir",
                "À attribuer",
              ],
              [
                "Paiement non abouti",
                "À définir",
                "À définir",
                "À définir",
                "À attribuer",
              ],
              [
                "Action du client requise",
                "À définir",
                "À définir",
                "À définir",
                "À attribuer",
              ],
              [
                "Changement d’offre",
                "À définir",
                "À définir",
                "À définir",
                "À attribuer",
              ],
              [
                "Résiliation demandée",
                "À définir",
                "À définir",
                "À définir",
                "À attribuer",
              ],
              [
                "Événement reçu deux fois",
                "État inchangé attendu",
                "Aucun doublon",
                "Selon décision",
                "Exploitation",
              ],
            ]}
          />

          <p>
            La documentation officielle de Stripe illustre pourquoi un
            abonnement ne se réduit pas à « payé » ou « impayé » : des
            événements peuvent être traités plus tard et plusieurs états doivent
            être coordonnés avec l’accès au service. Cette documentation reste
            un exemple de fournisseur. Le cahier des charges ne choisit pas
            Stripe, ne copie pas ses statuts comme modèle universel et ne lui
            délègue pas la décision produit.
          </p>

          <h3>Les événements imparfaits font partie du test</h3>
          <ul>
            <li>le même événement est reçu plusieurs fois ;</li>
            <li>deux événements arrivent dans un ordre différent ;</li>
            <li>
              une confirmation manque ou arrive après une action du client ;
            </li>
            <li>une correction manuelle remet l’état en cohérence ;</li>
            <li>
              un changement d’offre ne supprime pas silencieusement les données
              ;
            </li>
            <li>une résiliation déclenche le parcours de sortie décidé.</li>
          </ul>

          <InfoBox
            variant="amber"
            title="Ne confondez pas état de paiement, état produit et droit d’usage"
          >
            <p>
              Le prestataire de paiement observe une partie du processus. Le
              SaaS doit conserver un état produit explicable, décider de
              l’accès, afficher une prochaine action et permettre une
              correction. Le responsable de chaque changement d’état doit être
              nommé avant la réception.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exploitation"
          number="06"
          label="Vie réelle"
          title="Chaque échec appelle une action, un responsable et une trace"
        >
          <p>
            Un parcours nominal ne suffit pas à exploiter un SaaS. Pour chaque
            étape critique, demandez ce que voit le client, ce qui est conservé,
            qui reçoit l’alerte, qui peut corriger l’état, quelle action permet
            de reprendre et quelle trace restera. Une « gestion des erreurs »
            sans scénario ni responsable n’est pas réceptionnable.
          </p>

          <GuideTable
            caption="Transformer les situations d’exploitation en exigences observables"
            headers={[
              "Situation",
              "Question produit",
              "Pouvoir d’exploitation",
              "Preuve",
            ]}
            rows={[
              [
                "Action échouée",
                "Quel message, quelles données préservées, quelle prochaine action ?",
                "Relancer, corriger ou escalader selon un rôle défini",
                "Échec rejoué puis retour à un état cohérent",
              ],
              [
                "Événement manquant",
                "Comment l’écart devient-il visible ?",
                "Remettre l’état en cohérence sans créer de doublon",
                "État avant/après et trace de la correction",
              ],
              [
                "Tiers indisponible",
                "Que reste-t-il possible sans paiement, notification ou autre dépendance critique ?",
                "Détecter, mettre en attente, informer, reprendre ou revenir en arrière selon la règle",
                "Indisponibilité simulée, aucune perte ni double droit, reprise attribuée",
              ],
              [
                "Incident",
                "Qui est affecté et que peut encore faire le client ?",
                "Qualifier, communiquer et restaurer selon le cadre décidé",
                "Chronologie et décisions attribuées",
              ],
              [
                "Accès support",
                "Qui demande, approuve, limite et ferme l’accès ?",
                "Intervenir sur un périmètre borné",
                "Ouverture, intervention, fermeture, puis refus",
              ],
              [
                "Correction manuelle",
                "Quels champs ou états peuvent changer et pourquoi ?",
                "Action réservée, contrôlée et tracée",
                "Ancienne valeur, nouvelle valeur, motif et auteur",
              ],
            ]}
          />

          <p>
            Pour chaque échec, nommez qui le détecte, qui choisit le mode
            dégradé, qui peut remettre l’état en cohérence ou revenir en arrière
            et qui vérifie le résultat. Une dépendance indisponible ne doit ni
            ouvrir un droit par défaut, ni supprimer des données, ni laisser une
            correction sans auteur.
          </p>

          <p>
            Pour des données personnelles, le guide sécurité de la CNIL
            recommande notamment de borner les accès de maintenance :
            intervention demandée, accès limité, traçabilité et fermeture.
            Écrivez cette exigence dans le contexte réel du produit. Ne déduisez
            pas d’un écran de journalisation une conformité générale au RGPD.
          </p>

          <h3>L’inventaire de données doit servir une décision</h3>
          <p>
            Pour chaque catégorie, notez la finalité produit, l’organisation à
            laquelle elle appartient, les rôles qui y accèdent, sa provenance,
            ses sorties, la règle de conservation à valider et le responsable.
            Gardez distincts les fichiers clients, les métadonnées, les
            journaux, les données de facturation et les données de support. Une
            durée inconnue reste « à décider » ; aucun chiffre ne doit la
            remplacer.
          </p>

          <GuidePremiumMemo
            eyebrow="Contrat et produit"
            title="Séparez l’exigence produit de la qualification juridique"
          >
            <p>
              Le cahier des charges peut exiger un inventaire, une restriction
              d’accès, une restitution, une suppression et une preuve. La base
              légale, les durées finales, les rôles RGPD, les obligations de
              sous-traitance et les clauses applicables doivent être validés par
              les personnes compétentes sur le traitement et le contrat réels.
            </p>
          </GuidePremiumMemo>

          <p>
            Lorsqu’un incident rend le service ou ses données indisponibles, le
            dossier précise ce qui sera restauré et comment le client pourra
            sortir.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="sortie"
          number="07"
          label="Sauvegarde et sortie"
          title="Une sauvegarde n’est prouvée que lorsqu’un scénario est restauré"
        >
          <p>
            « Sauvegardes incluses » ne précise ni ce qui est sauvegardé, ni ce
            qui peut être perdu, ni comment la restauration est vérifiée.
            Décrivez les données et configurations concernées, l’environnement
            de restauration, le contrôle d’intégrité, la personne qui observe le
            résultat et la décision prise en cas d’échec. Les objectifs chiffrés
            de perte et de reprise restent à décider selon les risques ; aucun
            seuil universel n’est fourni ici.
          </p>

          <GuideTable
            caption="Distinguer les preuves de résilience et de sortie"
            headers={[
              "Capacité",
              "Question à trancher",
              "Preuve de réception",
              "Inconnue à ne pas masquer",
            ]}
            rows={[
              [
                "Sauvegarder",
                "Quelles données et configurations sont couvertes ?",
                "Inventaire et trace de sauvegarde sur le périmètre choisi",
                "Fréquence ou conservation non décidée",
              ],
              [
                "Restaurer",
                "Dans quel environnement et avec quel contrôle d’intégrité ?",
                "Jeu fictif restauré, relu et utilisable",
                "Objectif de reprise non arbitré",
              ],
              [
                "Fonctionner avec un service réduit (mode dégradé)",
                "Quelle action reste possible et quel message est affiché ?",
                "Scénario d’indisponibilité rejoué",
                "SLA ou promesse de continuité non signée",
              ],
              [
                "Exporter",
                "Quelles données, métadonnées et relations sont utiles au client ?",
                "Export documenté, relu et rattachable",
                "Format ou périmètre contractuel à décider",
              ],
              [
                "Supprimer",
                "Quel déclencheur, quelles exceptions et quelle preuve ?",
                "Accès refusé après l’étape de suppression prévue",
                "Durée légale ou contractuelle non qualifiée",
              ],
            ]}
          />

          <p>
            Le chapitre VI du règlement européen 2023/2854 encadre le changement
            de fournisseur pour les services qui entrent dans la définition des
            <em> services de traitement de données</em>. Ses articles 23 à 25 et
            ses définitions déterminent le champ, les données exportables et les
            actifs numériques concernés, avec des limites.
          </p>

          <p>
            Il serait donc inexact d’écrire que tout abonnement appelé SaaS
            donne automatiquement le même droit d’export. Décrivez malgré tout
            la sortie nécessaire au client dans le produit et le contrat, puis
            faites qualifier l’application du Data Act au service concerné.
          </p>

          <p>
            Ne mélangez pas trois objets : l’export des données de
            l’organisation cliente, la remise des livrables du projet et les
            droits d’exploitation sur le code. Si une cession de droits est
            négociée sous droit français, l’article L131-3 du Code de la
            propriété intellectuelle exige de distinguer les droits cédés et de
            délimiter leur exploitation. Le contrat applicable doit être relu au
            cas par cas.
          </p>

          <p>
            Sauvegarde, restauration et sortie ne deviennent comparables que si
            leurs conditions de contrôle sont écrites. La même règle s’applique
            maintenant aux exigences non fonctionnelles.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exigences"
          number="08"
          label="Non fonctionnel"
          title="« Rapide », « sécurisé » et « accessible » exigent des contrôles"
        >
          <p>
            Une exigence non fonctionnelle devient comparable lorsqu’elle
            indique le parcours concerné, les conditions, l’environnement, le
            seuil décidé, la méthode, la preuve et le propriétaire. Si le seuil
            manque, marquez-le « à décider » et demandez aux répondants
            d’expliquer l’effet de leurs hypothèses. N’utilisez pas une note
            globale : une bonne performance ne compense pas un défaut
            d’autorisation ou une restauration impossible.
          </p>

          <GuideTable
            caption="Passer d’un adjectif invérifiable à une exigence réceptionnable"
            headers={[
              "Sujet",
              "Formulation insuffisante",
              "Questions à compléter",
              "Preuve",
            ]}
            rows={[
              [
                "Accessibilité",
                "Interface accessible",
                "Parcours, critères WCAG 2.2 retenus, technologies et responsable",
                "Clavier, focus, erreurs, labels et messages de statut contrôlés",
              ],
              [
                "Performance",
                "Pages rapides",
                "Action, jeu de données, terminal, réseau, seuil et répétitions",
                "Mesure datée dans l’environnement documenté",
              ],
              [
                "Capacité et coût",
                "Le produit tient la charge",
                "Volume de référence fourni, passage au double, limites et postes de coût concernés",
                "Même parcours au volume déclaré puis à son double, mesures et variation de coût séparées",
              ],
              [
                "Sécurité",
                "Application sécurisée",
                "Menaces, données, exigences ASVS versionnées, tests autorisés/refusés",
                "Résultats, écarts, corrections et nouveaux tests",
              ],
              [
                "Mobile",
                "Responsive",
                "Largeur, contenu, ordre, actions et orientation concernés",
                "Parcours principal sans perte à 320 px selon le cas prévu",
              ],
              [
                "Exploitation",
                "Facile à maintenir",
                "Diagnostic, alertes, rôles, sauvegarde, restauration et correction",
                "Incident fictif expliqué puis résolu avec trace",
              ],
            ]}
          />

          <p>
            Pour un parcours Web, le standard WCAG 2.2 fournit des critères
            directement transformables en cas de réception :
          </p>

          <ul>
            <li>
              <strong>2.1.1</strong> pour l’usage au clavier ;
            </li>
            <li>
              <strong>2.4.7</strong> pour le focus visible ;
            </li>
            <li>
              <strong>3.3.1</strong> pour l’identification textuelle des erreurs
              ;
            </li>
            <li>
              <strong>3.3.2</strong> pour les labels ou instructions ;
            </li>
            <li>
              <strong>4.1.3</strong> pour les messages de statut perceptibles.
            </li>
          </ul>

          <p>
            Citer ces numéros ne prouve pas la conformité : le périmètre, les
            tests et les éventuels écarts doivent être examinés.
          </p>

          <h3>La réception se prépare avant le développement</h3>
          <ul>
            <li>un identifiant stable relie chaque exigence à ses cas ;</li>
            <li>
              les données de test sont fictives, préparées et reproductibles ;
            </li>
            <li>les résultats attendus incluent les refus et les erreurs ;</li>
            <li>
              la preuve précise son auteur, sa date, son environnement et sa
              version ;
            </li>
            <li>
              les écarts restent visibles jusqu’au nouveau test après correction
              ou à une décision explicite ;
            </li>
            <li>
              la personne habilitée prononce l’acceptation, le refus ou les
              réserves.
            </li>
          </ul>

          <InfoBox
            variant="blue"
            title="Préparez le futur plan de recette sans confondre les deux documents"
          >
            <p>
              Le cahier des charges décrit ce qui devra être prouvé et par qui.
              Le plan de recette — le document qui détaille les tests de
              réception — précisera ensuite les jeux de données, les étapes, les
              résultats, les anomalies, les nouveaux tests et la décision. Une
              preuve prévue tôt réduit les interprétations sans garantir à elle
              seule la qualité finale.
            </p>
          </InfoBox>

          <p>
            Une fois chaque responsable et chaque preuve nommés, la trame de
            consultation peut être remplie sans inventer les choix manquants.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="generateur"
          number="09"
          label="Outil local"
          title="La trame se construit localement puis se copie en Markdown"
        >
          <p>
            L’outil ci-dessous fonctionne dans votre navigateur. Il ne fait
            aucun appel réseau et n’enregistre pas vos réponses. Utilisez
            uniquement des formulations génériques : ne saisissez pas de données
            personnelles, de secrets, de conditions commerciales sensibles ou
            d’informations de sécurité. La sortie reste lisible, sélectionnable
            et copiable en Markdown ; aucun fichier XLS, XLSX ou CSV n’est
            proposé.
          </p>

          <p>
            Le moteur présente 45 zones de texte : cinq champs séparés dans
            chacun des neuf blocs. Une décision vide ou marquée STOP, TBD,
            inconnue, à confirmer ou à décider bloque le document. Un
            responsable, une preuve ou une exclusion manquante exige une
            clarification.
          </p>

          <p>
            Pour l’inconnue bloquante, un champ vide force un STOP. La
            déclaration explicite « Aucune identifiée » signifie qu’aucun
            blocage n’est déclaré ; toute autre formulation décrit un blocage et
            force elle aussi un STOP.
          </p>

          <p>
            Aucun score ne compense ces défauts. L’outil ne vérifie pas la
            vérité de ce que vous écrivez.
          </p>

          <SaasSpecificationTool />

          <GuidePremiumMemo
            eyebrow="Avant envoi"
            title="La relecture croisée réunit les personnes nommées"
          >
            <ul>
              <li>le métier relit le parcours et les résultats vendus ;</li>
              <li>
                le produit relit les états, droits, exclusions et variantes ;
              </li>
              <li>
                les opérations relisent les échecs, corrections et restaurations
                ;
              </li>
              <li>
                les compétences juridiques, données, sécurité et accessibilité
                valident leur périmètre ;
              </li>
              <li>
                l’autorité de réception confirme les preuves qu’elle utilisera.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exemple"
          number="10"
          label="Exemple rempli"
          title="DossierClair sert uniquement d’exemple de structure"
        >
          <GuidePremiumCase
            initial="DC"
            eyebrow="Exemple entièrement fictif"
            title="DossierClair · suivi de pièces pour de petits cabinets de conseil"
          >
            <p>
              Atelier Nord et Studio Rivage sont deux organisations inventées.
              Claire, Léa, l’offre Équipe, les rôles, les états et toutes les
              décisions ci-dessous servent uniquement à montrer un cahier des
              charges rempli. Ils ne constituent ni une recommandation d’offre,
              ni un prix, ni un délai, ni un SLA, ni une architecture.
            </p>
            <p>
              Les volumes de 20 puis 40 organisations, 100 puis 200 personnes
              internes et 2 000 puis 4 000 dossiers sont eux aussi des
              hypothèses fictives de consultation. Ils illustrent un test au
              double d’une référence déclarée ; ils ne constituent aucune norme
              ni cible pour un autre produit.
            </p>
          </GuidePremiumCase>

          <div className="not-prose my-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <pre
              tabIndex={0}
              aria-label="Exemple fictif complet de cahier des charges SaaS en Markdown"
              className="max-h-[760px] overflow-auto whitespace-pre-wrap rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-xs leading-relaxed text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-zinc-800 sm:p-6"
            >
              {dossierClair.markdown}
            </pre>
            <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                Comment le relire
              </p>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                <li>
                  1. Rejouez le premier parcours avec des données fictives.
                </li>
                <li>
                  2. Vérifiez un refus entre Atelier Nord et Studio Rivage.
                </li>
                <li>3. Rejouez une révocation sur une session ouverte.</li>
                <li>4. Simulez échec, doublon et correction d’abonnement.</li>
                <li>5. Restaurez, exportez puis testez la sortie prévue.</li>
                <li>
                  6. Remplacez chaque décision par celle de votre produit.
                </li>
              </ol>
            </aside>
          </div>

          <div className="not-prose my-8 mx-auto max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/cahier-des-charges-saas/cahier-saas-1x1.webp"
              alt="Carte de décision, responsable, preuve, exclusion et STOP sans score"
              width={900}
              height={900}
              sizes="(max-width: 640px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <p>
            Si le premier lot n’est pas encore délimité, commencez par le{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              contrat de test du MVP SaaS
            </Link>
            . Il distingue les décisions indispensables, le travail manuel
            borné, les intégrations et les reports avant de demander un prix sur
            un périmètre encore ambigu.
          </p>

          <h3>Le coût complet garde le même périmètre</h3>
          <p>
            Le prix initial ne suffit pas à comparer les réponses. Demandez à
            chaque candidat d’isoler les mêmes familles, sans transformer une
            inconnue en zéro : ce qui est inclus, exclu, récurrent, facturé à
            l’usage ou laissé en variante doit rester visible.
          </p>

          <GuideTable
            caption="Postes à rendre comparables sans inventer de montant"
            headers={[
              "Famille",
              "À faire isoler dans la réponse",
              "Risque de comparaison",
            ]}
            rows={[
              [
                "Cadrage et reprise",
                "Ateliers, clarification, conception, reprise d’un existant et données de test",
                "Travail indispensable absent du prix principal",
              ],
              [
                "Intégrations et licences",
                "Abonnements tiers, consommation, connecteurs et dépendances déjà payées",
                "Même fonction comptée deux fois ou coût variable masqué",
              ],
              [
                "Migration et adoption",
                "Nettoyage, import, contrôles, formation et accompagnement au changement",
                "Charge déplacée vers les équipes du client",
              ],
              [
                "Exploitation et maintenance",
                "Supervision, support, maintenance corrective et évolutive, mises à jour et nouveaux tests après correction",
                "Produit livré mais non exploitable dans la durée",
              ],
              [
                "Sortie",
                "Export, documentation, assistance au changement, récupération, suppression et preuve",
                "Coût de sortie ou dépendance découverts après signature",
              ],
            ]}
          />

          <h3>Chaque répondant reçoit la même version figée</h3>
          <ol>
            <li>
              Attribuez un numéro et une date à la version de consultation.
            </li>
            <li>Joignez les mêmes annexes et les mêmes données fictives.</li>
            <li>
              Demandez une réponse pour chaque décision, preuve et exclusion.
            </li>
            <li>
              Faites isoler les hypothèses ajoutées et les variantes de prix.
            </li>
            <li>
              Centralisez les questions puis partagez les mêmes réponses à tous.
            </li>
            <li>
              Comparez d’abord les écarts de produit, ensuite les modalités et
              le prix.
            </li>
          </ol>

          <p>
            Si les réponses montrent encore plusieurs produits, réduisez le
            premier lot ou levez les STOP avant de choisir. Si le périmètre est
            comparable et que vous souhaitez confronter la trame à une
            réalisation, consultez notre{" "}
            <Link href="/services/saas-applications-metier">
              accompagnement SaaS et applications métier
            </Link>
            , puis utilisez la page{" "}
            <Link href="/demarrer-un-projet">démarrer un projet</Link> en
            joignant une version sans données sensibles. Le{" "}
            <Link href="/guides">répertoire des guides Hagnéré Code</Link>{" "}
            permet de retrouver les méthodes complémentaires.
          </p>

          <p>
            Le même document devient l’entrée du calendrier. Pour comprendre{" "}
            <Link href="/guides/combien-de-temps-developper-saas">
              combien de temps il faut pour développer un SaaS
            </Link>
            , reliez alors les tâches qui s’attendent, les capacités réellement
            disponibles et les inconnues qui interdisent encore une date.
          </p>

          <GuidePremiumMemo
            eyebrow="Décision finale"
            title="Comparable ne veut pas dire prêt à signer"
          >
            <p>
              Un document complet autorise une comparaison conditionnelle. Il
              reste à contrôler la faisabilité, le contrat, le prix, le
              calendrier, les compétences, les risques et les preuves proposées.
              Toute correction substantielle du produit doit être renvoyée aux
              répondants concernés avant une décision loyale.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
