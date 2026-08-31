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
  "Le décompte poste par poste qui ramène deux devis au même produit avant de comparer les prix",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse-courte",
    number: "01",
    label: "La même liste de postes",
    shortLabel: "Réponse",
  },
  {
    id: "ecart",
    number: "02",
    label: "Le décompte poste par poste",
    shortLabel: "Décompte",
  },
  {
    id: "exigence",
    number: "03",
    label: "Écrire une exigence testable",
    shortLabel: "Écrire",
  },
  {
    id: "abonnement",
    number: "04",
    label: "Les huit situations d’un abonnement",
    shortLabel: "Abonner",
  },
  {
    id: "sortie",
    number: "05",
    label: "Ce que vous récupérez en partant",
    shortLabel: "Sortir",
  },
  {
    id: "incidents",
    number: "06",
    label: "Ce qui rate, et ce que ça coûte",
    shortLabel: "Incidents",
  },
  {
    id: "depouillement",
    number: "07",
    label: "Dépouiller les réponses",
    shortLabel: "Comparer",
  },
  {
    id: "trame",
    number: "08",
    label: "La trame locale et son exemple",
    shortLabel: "Trame",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "avant",
    num: "01",
    label: "Avant d’écrire",
    items: [
      {
        question:
          "Combien de pages doit faire un cahier des charges SaaS\u00a0?",
        answer:
          "Le nombre de pages ne dit rien de la solidité du document. Comptez plutôt les exigences dont vous savez écrire l’échec\u00a0: chaque exigence numérotée porte-t-elle une situation initiale, une action, un résultat observable, une tentative qui doit être refusée et la personne qui contrôlera\u00a0? Dans l’exemple construit pour ce guide\u00a0— des montants et des volumes choisis pour la démonstration, pas un dossier client\u00a0— quatorze pages laissaient passer une phrase de dix mots que deux sociétés sur trois n’ont pas chiffrée. Une exigence sans refus écrit ne se reçoit pas, quelle que soit la longueur du document qui la contient.",
      },
      {
        question:
          "Faut-il décrire l’architecture technique dans le document\u00a0?",
        answer:
          "Décrivez-la seulement si une contrainte vous l’impose déjà\u00a0: un hébergement en France, une base existante, un annuaire d’entreprise. Sinon, décrivez les utilisateurs, les données, les comportements attendus, les refus et les preuves, puis demandez à chaque société consultée d’exposer sa solution technique et ses hypothèses dans une partie séparée. Vous comparez alors des façons différentes de résoudre le même problème, au lieu de trois lectures d’une solution choisie sans en mesurer le coût.",
      },
      {
        question:
          "Peut-on laisser une décision ouverte dans le document\u00a0?",
        answer:
          "Oui, et c’est souvent plus honnête que de trancher à la hâte. La condition\u00a0: écrire la décision comme ouverte, nommer la personne qui la prendra, donner la date, et demander à chaque candidat de chiffrer les deux branches séparément. Ce qui coûte cher, c’est l’inconnue invisible\u00a0: celle que chaque société tranche dans son coin, sans le dire, et dont vous découvrez l’effet au moment de comparer les totaux.",
      },
    ],
  },
  {
    key: "abonnement-donnees",
    num: "02",
    label: "Abonnement, données et sortie",
    items: [
      {
        question: "Le Data Act me garantit-il de récupérer mes données\u00a0?",
        answer:
          "Partiellement, et pour les seuls services qui entrent dans la définition des services de traitement de données. Le règlement européen applicable depuis le 12\u00a0septembre 2025 encadre le changement de fournisseur\u00a0: son article\u00a025 fixe une période transitoire maximale de 30\u00a0jours calendaires, qui ne part qu’au terme d’un préavis plafonné à deux mois, portée à sept mois au plus si le fournisseur justifie une impossibilité technique dans les 14\u00a0jours ouvrables\u00a0; son article\u00a029 supprime totalement les frais de changement à partir du 12\u00a0janvier 2027. Le texte ne dit rien du code source ni des droits d’exploitation. Faites qualifier votre cas, puis écrivez la clause quand même.",
      },
      {
        question:
          "Suis-je propriétaire du code une fois la facture payée\u00a0?",
        answer:
          "Une facture acquittée ne cède aucun droit. L’article L131-3 du code de la propriété intellectuelle impose que chaque droit cédé fasse l’objet d’une mention distincte, et que l’étendue, la destination, le lieu et la durée de l’exploitation soient délimités. L’article L113-9, qui attribue les droits à l’employeur, vise le logiciel écrit par un salarié\u00a0— pas par une société extérieure. Sans clause écrite, vous avez payé un développement dont vous ne maîtrisez pas l’exploitation.",
      },
      {
        question:
          "Combien d’états d’abonnement faut-il prévoir dans le document\u00a0?",
        answer:
          "Huit, si vous prenez pour repère la documentation publique de Stripe\u00a0: trialing, active, incomplete, incomplete_expired, past_due, canceled, unpaid et paused. Pour chacun, votre document tranche trois choses\u00a0: ce que l’utilisateur peut encore faire, le message qu’il voit, et l’action qui remet la situation en ordre. Cela fait vingt-quatre décisions écrites. Le fournisseur de paiement reste un choix séparé\u00a0: les mêmes huit situations existeront ailleurs.",
      },
    ],
  },
  {
    key: "comparer",
    num: "03",
    label: "Comparer et recevoir",
    items: [
      {
        question: "Comment comparer trois devis SaaS honnêtement\u00a0?",
        answer:
          "Alignez d’abord les postes, ensuite les prix. Reprenez chaque réponse, rangez ses montants dans une ligne par poste, et laissez vide ce qu’elle n’a pas chiffré. Un devis qui laisse quatre lignes vides n’est pas moins cher\u00a0: il est incomplet, et il repart avec ses quatre questions. Ne devinez jamais le prix de ce qu’une société n’a pas chiffré. Une fois les colonnes comparables, l’écart qui subsiste devient une vraie question technique et commerciale.",
      },
      {
        question:
          "Comment vérifier qu’un document est compris de la même façon par tous\u00a0?",
        answer:
          "Donnez-le à deux personnes qui ne l’ont pas écrit, par exemple un utilisateur métier et la personne qui gère l’informatique. Chacune répond seule, par écrit, à cinq questions\u00a0: combien de rôles, qui crée le compte du premier utilisateur d’un client, ce que voit un abonné impayé, avec quoi un client repart s’il résilie, qui prononce la réception. Comptez les divergences\u00a0: chacune est une ligne que vos candidats chiffreraient différemment.",
      },
      {
        question:
          "Le cahier des charges suffit-il à prononcer la réception\u00a0?",
        answer:
          "Non. Il dit ce qui devra être prouvé et par qui\u00a0; le plan de recette dit comment. Le premier contient les scénarios attendus, les refus et les personnes responsables. Le second ajoute les jeux de données, les étapes, les résultats constatés, les anomalies et le nouveau test après correction. Écrire les preuves tôt réduit les interprétations au moment de payer, mais accepter, refuser ou accepter avec réserves reste une décision humaine.",
      },
    ],
  },
];

const quoteRows = [
  [
    "Onze écrans du parcours principal",
    "26\u00a0000\u00a0€",
    "27\u00a0500\u00a0€",
    "33\u00a0000\u00a0€",
  ],
  [
    "Portail multi-organisation\u00a0: comptes, rôles, invitations",
    "5\u00a0000\u00a0€",
    "9\u00a0000\u00a0€",
    "12\u00a0000\u00a0€",
  ],
  [
    "Reprise des 12\u00a0000 dossiers existants",
    "Non chiffré",
    "6\u00a0000\u00a0€",
    "9\u00a0000\u00a0€",
  ],
  [
    "Abonnement et facturation récurrente",
    "Non chiffré",
    "7\u00a0500\u00a0€",
    "11\u00a0000\u00a0€",
  ],
  [
    "Saisie sur le terrain sans réseau",
    "Non chiffré",
    "Non chiffré",
    "44\u00a0000\u00a0€",
  ],
  [
    "Recette et corrections",
    "3\u00a0000\u00a0€",
    "5\u00a0000\u00a0€",
    "12\u00a0000\u00a0€",
  ],
  [
    "Hébergement et maintenance, douze premiers mois",
    "Non chiffré",
    "3\u00a0000\u00a0€",
    "8\u00a0000\u00a0€",
  ],
  [
    "Total annoncé",
    "34\u00a0000\u00a0€",
    "58\u00a0000\u00a0€",
    "129\u00a0000\u00a0€",
  ],
];

const subscriptionRows = [
  [
    "trialing",
    "Période d’essai\u00a0; le passage à active est automatique au premier paiement",
    "Ce que l’essai ouvre, et le message envoyé trois jours avant sa fin",
  ],
  [
    "active",
    "L’abonnement est en règle, sans garantir que les factures antérieures ont été réglées",
    "Si une facture ancienne restée ouverte suffit à restreindre l’accès",
  ],
  [
    "incomplete",
    "Paiement non effectué dans les 23\u00a0heures, action requise comme l’authentification, ou paiement en attente à l’état processing",
    "Ce que le client voit et peut faire pendant ces 23\u00a0heures",
  ],
  [
    "incomplete_expired",
    "Les 23\u00a0heures sont passées sans paiement abouti",
    "Si le compte est conservé, relancé ou effacé, et au bout de combien de temps",
  ],
  [
    "past_due",
    "Le paiement d’une facture a échoué\u00a0; les factures continuent d’être émises",
    "Le jour exact où l’accès se restreint, et ce qui reste possible avant",
  ],
  [
    "unpaid",
    "Les tentatives sont épuisées\u00a0; la documentation recommande de retirer l’accès",
    "Ce qu’on retire\u00a0: l’écriture, la lecture, l’export, ou tout",
  ],
  [
    "canceled",
    "Résiliation effective\u00a0; état définitif qui ne bouge plus",
    "Combien de temps les données restent récupérables avant effacement",
  ],
  [
    "paused",
    "Essai terminé sans moyen de paiement, et fin d’essai réglée sur pause\u00a0; plus aucune facture n’est créée",
    "Si cet état existe chez vous, ce qu’il autorise et comment on en sort",
  ],
];

const exitRows = [
  [
    "Les données de vos clients",
    "Le règlement européen sur les données, applicable depuis le 12\u00a0septembre 2025, pour les seuls services de traitement de données\u00a0: période transitoire de 30\u00a0jours calendaires à l’article\u00a025, ouverte au terme d’un préavis de deux mois au plus, portée à sept mois au plus en cas d’impossibilité technique, frais de changement supprimés au 12\u00a0janvier 2027 à l’article\u00a029",
    "Le format, les données incluses, la fréquence, la personne qui vérifie l’export et le jeu fictif sur lequel il est rejoué avant la mise en service",
  ],
  [
    "Le code source et le droit de le faire évoluer",
    "L’article L131-3 du code de la propriété intellectuelle\u00a0: mention distincte de chaque droit cédé, étendue, destination, lieu et durée délimités. L’article L113-9 ne vaut que pour un salarié",
    "La liste des droits cédés, leur durée, leur territoire, et le dépôt où le code est poussé à chaque livraison",
  ],
  [
    "Les accès, les secrets et l’hébergement",
    "Aucun texte général\u00a0: tout dépend de qui a ouvert les comptes",
    "Comptes d’hébergement, de paiement et d’envoi d’e-mails ouverts au nom de votre société dès le premier jour, inventaire des secrets et date de leur remplacement",
  ],
  [
    "La documentation d’exploitation",
    "Aucun texte général",
    "Ce que votre équipe doit savoir faire seule\u00a0: redéployer, restaurer une sauvegarde, ajouter un compte, lire les journaux",
  ],
];

const scoringRows = [
  [
    "Couvert · Exclu · Variante",
    "Un seul de ces trois mots, en face de chaque exigence numérotée",
    "Le poste qu’une réponse a silencieusement laissé de côté",
  ],
  [
    "Hypothèse ajoutée",
    "La phrase du document qui a été interprétée, et la lecture retenue",
    "La divergence de compréhension, avant qu’elle ne devienne un avenant",
  ],
  [
    "Montant isolé",
    "Le prix de cette exigence seule, hors forfait global",
    "Le devis dont on ne peut pas retirer une ligne pour le comparer",
  ],
  [
    "Preuve prévue",
    "Le scénario qui sera rejoué devant vous au moment de recevoir",
    "La fonction annoncée que personne ne saura vérifier",
  ],
  [
    "Question posée",
    "Ce que la société n’a pas pu trancher seule",
    "Ce que vous devrez renvoyer aux trois candidats, jamais à un seul",
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
          { label: "Méthode de consultation", variant: "dark" },
          { label: "SaaS B2B", variant: "neutral" },
          { label: "Trame locale · aucun envoi", variant: "success" },
          {
            label: "Exemple construit · aucun dossier client",
            variant: "neutral",
          },
          {
            label: "Mis à jour le " + formatGuideDate(guide.dateModified),
            variant: "muted",
          },
        ]}
        heroTitle={"Cahier des charges SaaS\u00a0: écrire les exigences"}
        heroTitleEm="avant de comparer"
        heroTitleSuffix="les prix"
        heroDescription={
          "Exemple construit pour ce guide, et non un dossier client\u00a0: trois sociétés y chiffrent le même document de quatorze pages à 34\u00a0000, 58\u00a0000 et 129\u00a0000\u00a0€ HT. Ces montants, les volumes et l’effectif sont choisis pour la démonstration et ne viennent d’aucun relevé de marché. Le décompte poste par poste isole un poste qui tenait dans une phrase de dix mots, vaut 44\u00a0000\u00a0€ HT, et ramène l’écart entre les deux seuls devis comparables de 2,2 à 1,5 pour 1. Vous y trouverez la relecture à faire sur votre propre document, la façon d’écrire une exigence qu’on ne peut pas lire de deux façons, et la grille à joindre aux candidats."
        }
        stats={[
          { label: "Exemple construit", value: "3 devis" },
          { label: "Postes à aligner", value: "7" },
          { label: "Phrase de dix mots", value: "44\u00a0000\u00a0€ HT" },
          { label: "États d’abonnement", value: "8" },
          { label: "Trame locale", value: "9 blocs · 45 champs" },
          { label: "Score global", value: "Aucun" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Avant d’envoyer aux candidats",
          titleStart: "Faire relire",
          titleEm: "votre cahier des charges",
          description:
            "Apportez le document tel qu’il est, les devis déjà reçus s’il y en a, et les décisions encore ouvertes. L’échange peut conclure que votre document est bon et qu’il n’y a rien à ajouter.",
          benefits: [
            "Les postes qu’un devis a laissés vides, rendus visibles",
            "Les phrases lues de deux façons, réécrites avec vous",
            "La grille de dépouillement à joindre aux candidats",
          ],
          primaryCtaLabel: "Voir le service SaaS et applis métier",
          primaryCtaHref: "/services/saas-applications-metier",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="De la phrase floue au dépouillement"
        mobileCtaLabel="Faire relire mon cahier des charges"
        sidebarContextCta={{
          eyebrow: "SaaS et applications métier",
          title: "Vos trois devis ne portent pas sur le même produit\u00a0?",
          description:
            "Décrivez le parcours vendu, les utilisateurs, les données et les points restés ouverts, sans donnée personnelle ni condition commerciale sensible.",
          benefits: [
            "Le décompte poste par poste refait sur vos devis",
            "Les exigences réécrites avec leur refus attendu",
            "Sortie, droits et secrets traités avant signature",
          ],
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
          badgeLabel: "Premier échange sans engagement de faisabilité",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Aligner trois réponses",
          titleEm: "sur le même produit",
          titleEnd: "avant de comparer les prix.",
          subtitle:
            "Longueur du document, architecture, décisions laissées ouvertes, portée du Data Act, propriété du code, états d’abonnement, dépouillement et réception.",
          ctaTitle: "Un point encore ouvert sur votre consultation\u00a0?",
          ctaDescription:
            "Envoyez le poste qui vous bloque et la formulation dont vous doutez, sans transmettre de donnée sensible.",
          ctaLabel: "Faire relire mon cadrage",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "EUR-Lex · règlement (UE) 2023/2854, dit Data Act",
            href: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr",
            description:
              "Consulté le 30\u00a0août 2026, texte des articles compris\u00a0: l’adresse ci-dessus sert bien le règlement en entier. Chapitre\u00a0VI, articles\u00a023 à 31\u00a0: changement de fournisseur de services de traitement de données. L’article\u00a025, paragraphe\u00a02, point\u00a0a), fixe une «\u00a0période transitoire maximale obligatoire de trente jours calendaires prenant effet au terme du délai de préavis maximal visé au point\u00a0d)\u00a0», et ce point\u00a0d) impose «\u00a0un délai de préavis maximal pour le lancement du processus de changement de fournisseur, qui ne dépasse pas deux mois\u00a0»\u00a0: deux mois de préavis au plus, puis trente jours. Le paragraphe\u00a04 prévoit, lorsque cette période est techniquement impossible à respecter, une autre période «\u00a0qui ne peut excéder sept mois\u00a0», le fournisseur devant en informer le client dans les quatorze jours ouvrables et motiver l’impossibilité. L’article\u00a029 interdit tout frais de changement «\u00a0à compter du 12\u00a0janvier 2027\u00a0», après des frais réduits du 11\u00a0janvier 2024 à cette date. L’article\u00a050\u00a0: «\u00a0Il est applicable à partir du 12\u00a0septembre 2025.\u00a0» Recherche plein texte sur cette même page le 30\u00a0août 2026\u00a0: zéro occurrence de «\u00a0code source\u00a0».",
          },
          {
            source:
              "EUR-Lex · règlement (UE) 2016/679, dit RGPD, article\u00a033",
            href: "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679",
            description:
              "Consulté le 30\u00a0août 2026. Article\u00a033, paragraphe\u00a01\u00a0: le responsable du traitement «\u00a0en notifie la violation en question à l’autorité de contrôle compétente conformément à l’article 55, dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance, à moins que la violation en question ne soit pas susceptible d’engendrer un risque pour les droits et libertés des personnes physiques\u00a0». Au-delà de 72\u00a0heures, la notification est accompagnée des motifs du retard. C’est cet article, et non la page pratique de la CNIL, qui porte la formulation reprise en section\u00a006.",
          },
          {
            source:
              "Légifrance · code de la propriété intellectuelle, article L131-3",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
            description:
              "Consulté le 30\u00a0août 2026, version en vigueur depuis le 3\u00a0juillet 1992, au livre\u00a0Ier, titre\u00a0III «\u00a0Exploitation des droits\u00a0», chapitre\u00a0Ier «\u00a0Dispositions générales\u00a0»\u00a0— et non parmi les articles qui visent le logiciel. Premier alinéa\u00a0: «\u00a0La transmission des droits de l’auteur est subordonnée à la condition que chacun des droits cédés fasse l’objet d’une mention distincte dans l’acte de cession et que le domaine d’exploitation des droits cédés soit délimité quant à son étendue et à sa destination, quant au lieu et quant à la durée.\u00a0»",
          },
          {
            source:
              "Légifrance · code de la propriété intellectuelle, article L113-9",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818",
            description:
              "Consulté le 30\u00a0août 2026, version en vigueur depuis le 1er\u00a0janvier 2020. Premier alinéa\u00a0: les droits patrimoniaux sur les logiciels et leur documentation créés «\u00a0par un ou plusieurs employés dans l’exercice de leurs fonctions ou d’après les instructions de leur employeur\u00a0» sont dévolus à l’employeur. Le texte vise le salarié, et le troisième alinéa l’étend aux agents publics\u00a0; il ne s’applique pas à une société extérieure.",
          },
          {
            source: "Stripe Docs · réception des événements",
            href: "https://docs.stripe.com/webhooks",
            description:
              "Page en français consultée le 30\u00a0août 2026. Ordre de remise non garanti, doublons possibles à reconnaître par l’identifiant de l’objet et le type d’événement, nouvelles tentatives pendant trois jours au maximum en production et trois tentatives en quelques heures en environnement de test.",
          },
          {
            source: "Stripe Docs · webhooks et abonnements",
            href: "https://docs.stripe.com/billing/subscriptions/webhooks",
            description:
              "Page en français consultée le 30\u00a0août 2026. Source des huit états d’abonnement cités, de l’avertissement trois jours avant la fin d’essai, et de la précision selon laquelle l’état active ne signifie pas que toutes les factures ont été réglées. Elle donne trois causes à l’état incomplete, pas une\u00a0: «\u00a0Le client doit effectuer un paiement dans les 23 heures suivant la création de l’abonnement pour l’activer. Ou une action est requise pour le paiement, telle que l’authentification du client. Les abonnements peuvent également être à l’état incomplete si un paiement est en attente et que l’état du PaymentIntent est défini sur processing.\u00a0» Et elle conditionne l’état paused à un réglage\u00a0: l’abonnement «\u00a0a terminé sa période d’essai sans moyen de paiement par défaut et le paramètre trial_settings.end_behavior.missing_payment_method est défini sur pause\u00a0». Citée comme repère de dénombrement, pas comme choix de fournisseur.",
          },
          {
            source: "W3C · Web Content Accessibility Guidelines 2.2",
            href: "https://www.w3.org/TR/WCAG22/",
            description:
              "Recommandation du W3C datée du 12\u00a0décembre 2024, consultée le 30\u00a0août 2026. Neuf critères ajoutés par rapport à la version\u00a02.1, dont six aux niveaux A et AA\u00a0; le critère 4.1.1 est déclaré obsolète. Le critère 2.5.8 fixe la taille minimale d’une cible à 24\u00a0×\u00a024\u00a0pixels CSS.",
          },
          {
            source: "OWASP · Application Security Verification Standard 5.0.0",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Page projet consultée le 30\u00a0août 2026. Elle date la version\u00a0— «\u00a0[30 May 2025] ASVS Version 5.0.0 is released LIVE at Global AppSec EU Barcelona 2025!\u00a0»\u00a0— et donne le format des identifiants, mais elle ne porte aucun décompte\u00a0: le nombre d’exigences et de chapitres cité par ce guide vient du fichier officiel de la version figée, référencé à la ligne suivante. Référentiel de spécification et de vérification\u00a0: en citer un sous-ensemble versionné ne vaut ni audit, ni certification.",
          },
          {
            source:
              "OWASP · ASVS 5.0.0, fichier officiel de la version figée v5.0.0",
            href: "https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.json",
            description:
              "Téléchargé et compté le 30\u00a0août 2026 depuis la branche figée v5.0.0\u00a0: 17 chapitres, de V1 à V17, et 345 exigences au total. L’export tabulé de la même version, dans le même dossier du dépôt, donne le même décompte. C’est le seul localisateur qui porte le chiffre publié en section\u00a003.",
          },
          {
            source: "CNIL · guide de la sécurité des données personnelles",
            href: "https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
            description:
              "Version 2024, mise à jour 2026, consultée le 30\u00a0août 2026. Fiche\u00a0n°\u00a05 «\u00a0Gérer les habilitations\u00a0», page\u00a014\u00a0: «\u00a0Limiter les accès aux seules données dont un utilisateur a besoin\u00a0» et revue des habilitations «\u00a0au moins annuelle\u00a0». Fiche\u00a0n°\u00a015 «\u00a0Encadrer la maintenance et la fin de vie des matériels et logiciels\u00a0», page\u00a035\u00a0: accès de télémaintenance ouverts «\u00a0pour une durée adaptée à l’intervention et définie à l’avance\u00a0», refermés à l’issue. Fiche\u00a0n°\u00a017 «\u00a0Sauvegarder\u00a0», page\u00a040\u00a0: «\u00a0Tester régulièrement l’intégrité des sauvegardes et la capacité de les restaurer.\u00a0» Utile pour rédiger des exigences\u00a0; ne vaut pas qualification juridique d’un traitement.",
          },
          {
            source: "CNIL · notifier une violation de données personnelles",
            href: "https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles",
            description:
              "Consulté le 30\u00a0août 2026, page datée du 24\u00a0mai 2018. Elle écrit «\u00a0Une notification initiale dans un délai de 72 heures si possible à la suite de la constatation de la violation\u00a0» et renvoie elle-même à son fondement\u00a0: «\u00a0L’obligation de notifier à la CNIL les violations de données à caractère personnel est prévue à l’article 33 du règlement général sur la protection des données (RGPD).\u00a0» Le point de départ et la réserve de risque publiés en section\u00a006 sont ceux de cet article\u00a033, cité à part.",
          },
          {
            source: "Hagnéré Code · tarifs publics",
            href: "/tarifs",
            description:
              "Grille relevée le 30\u00a0août 2026\u00a0: SaaS et applications métier à 15\u00a0000\u00a0€ HT pour un premier produit de trois à cinq écrans, 30\u00a0000 à 60\u00a0000\u00a0€ HT pour dix à quinze écrans, Discovery Sprint à 1\u00a0500\u00a0€ HT sur deux jours, cadrage payé systématique au-delà de 8\u00a0000\u00a0€ HT de projet. La seconde bande y est libellée «\u00a010–15 écrans + IA\u00a0»\u00a0: elle ne se compare pas telle quelle à un portail sans intelligence artificielle. Repères publics et indicatifs\u00a0: le devis signé fixe le prix ferme.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée du guide",
          title:
            "Une méthode de consultation, sans valeur de conseil juridique",
          description:
            "Les décisions, seuils, durées et clauses dépendent de votre produit, de vos contrats, de vos données et de vos risques. Le cas suivi est construit pour ce guide\u00a0: ses montants, ses volumes et son effectif sont choisis pour la démonstration et ne viennent d’aucune source. Les références Data Act, propriété intellectuelle, CNIL, OWASP, W3C et paiement aident à écrire des questions et des preuves\u00a0; elles ne remplacent ni un avocat, ni un délégué à la protection des données, ni un expert-comptable.",
        }}
        relatedGuides={[
          {
            label:
              "MVP SaaS\u00a0: quoi inclure avant un premier client\u00a0?",
            href: "/guides/mvp-saas-quoi-inclure",
          },
          {
            label: "Plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
          {
            label:
              "Quel socle de sécurité exiger avant la mise en service\u00a0?",
            href: "/guides/securite-application-metier",
          },
          {
            label:
              "Power Apps ou application sur mesure\u00a0: comment choisir\u00a0?",
            href: "/guides/power-apps-ou-application-sur-mesure",
          },
        ]}
        relatedGuidesLabel="4 prolongements utiles"
      >
        <GuidePremiumSection
          id="reponse-courte"
          number="01"
          label="Réponse directe"
          readingTime={"2\u00a0min"}
          title="Deux devis ne se comparent que s’ils portent la même liste de postes"
        >
          <p>
            Vous devez écrire le document qui servira à faire chiffrer votre
            logiciel, ou vous venez de recevoir des devis qui ne se ressemblent
            pas. Les deux situations tiennent au même point&nbsp;:{" "}
            <strong>
              un cahier des charges SaaS n’est utile que si deux sociétés qui le
              lisent chiffrent la même liste de postes.
            </strong>{" "}
            Tant que ce n’est pas le cas, la différence de prix entre leurs
            réponses ne mesure rien.
          </p>
          <p>
            Ce guide part d’un exemple construit pour la démonstration&nbsp;:
            trois devis à 34&nbsp;000, 58&nbsp;000 et 129&nbsp;000&nbsp;€ hors
            taxes (HT) pour le même document de quatorze pages. Aucun de ces
            montants ne vient d’un dossier client ni d’un relevé de marché. Le
            décompte de la section&nbsp;02 isole un poste, tenu dans une phrase
            de dix mots page&nbsp;6, qui vaut 44&nbsp;000&nbsp;€ HT.
          </p>
          <p>
            Vous y trouverez la relecture à faire sur votre propre document, la
            façon d’écrire une exigence qu’on ne peut pas lire de deux façons,
            les huit états d’abonnement à trancher et la grille de dépouillement
            à joindre aux candidats.
          </p>

          <GuidePremiumCase
            initial="3"
            eyebrow="Fil rouge du guide · exemple construit"
            title={
              "Un portail client, 12\u00a0000 dossiers, une phrase à deux lectures"
            }
          >
            <p>
              <em>
                Exemple construit&nbsp;: les montants des devis, les volumes,
                l’effectif et le prix de l’abonnement sont choisis pour la
                démonstration et ne viennent d’aucune source&nbsp;; seuls les
                repères de prix rappelés en section&nbsp;02 sont repris de notre
                grille publiée. Ce n’est pas un dossier client.
              </em>{" "}
              Un bureau de contrôle technique de bâtiments, 46&nbsp;salariés à
              Nantes. Sonia, sa directrice générale, veut vendre à ses clients
              bailleurs un portail où ils déposent leurs demandes et récupèrent
              les rapports. Chaque organisation cliente paie un abonnement
              annuel de 1&nbsp;490&nbsp;€ HT.
            </p>
            <p>
              Karim, qui gère l’informatique, a écrit le document&nbsp;: onze
              écrans, six rôles, 12&nbsp;000&nbsp;dossiers à reprendre. Il l’a
              envoyé le même jour aux sociétés A, B et C. Nous suivrons ce
              dossier jusqu’au dépouillement.
            </p>
          </GuidePremiumCase>

          <InfoBox
            variant="amber"
            title={"Quand un autre document vous servira mieux"}
          >
            <p>
              Si le premier parcours vendu n’est pas encore raconté de bout en
              bout, commencez par{" "}
              <Link href="/guides/mvp-saas-quoi-inclure">
                délimiter un MVP SaaS
              </Link>
              . Si le problème lui-même n’est pas nommé, le{" "}
              <Link href="/guides/signes-besoin-logiciel-metier">
                diagnostic du besoin de logiciel métier
              </Link>{" "}
              évite d’acheter avant de savoir quoi. Et si l’outil vise vos
              équipes plutôt que vos clients, le guide{" "}
              <Link href="/guides/power-apps-ou-application-sur-mesure">
                Power Apps ou application sur mesure
              </Link>{" "}
              chiffre la bascule vers une plateforme déjà payée.
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
            />
          </div>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="ecart"
          number="02"
          label="Décompte"
          readingTime={"4\u00a0min"}
          title={
            "Combien votre cahier des charges coûte-t-il en écart de devis\u00a0?"
          }
        >
          <p>
            Le tableau ci-dessous range les trois réponses sur une même liste de
            sept postes&nbsp;— la réunion de ce que chacune nomme&nbsp;— et
            laisse écrit <em>non chiffré </em>partout où une société n’a rien
            mis. Les montants sont choisis pour ce guide&nbsp;: ils ne viennent
            d’aucun relevé de marché, et le plus élevé des trois totaux sort de
            la bande que notre propre grille publie. Refaites la colonne avec
            vos devis réels&nbsp;— la méthode ne dépend pas des nombres.
          </p>

          <GuideTable
            caption="Les trois devis de l’exemple construit, rangés poste par poste"
            headers={["Poste", "Société A", "Société B", "Société C"]}
            rows={quoteRows}
          />

          <h3>Ce que la colonne A ne dit pas encore</h3>
          <p>
            Quatre postes sur sept ne portent aucun montant chez la société
            A&nbsp;: la reprise des dossiers, l’abonnement, la saisie sans
            réseau et l’hébergement. La reprise, l’abonnement et l’hébergement
            devront être payés à quelqu’un, tôt ou tard&nbsp;; la saisie sans
            réseau, elle, attend un arbitrage que personne n’a encore rendu. On
            ne devine pas le prix de ce qu’un devis n’a pas chiffré&nbsp;: on
            lui renvoie les quatre lignes, et on range ses montants à leur
            retour.
          </p>

          <h3>Un seul poste porte l’essentiel de l’écart</h3>
          <p>
            La saisie sur le terrain sans réseau vaut 44&nbsp;000&nbsp;€ HT chez
            la société C, et n’apparaît ni chez A ni chez B. Les trois totaux
            vont de 34&nbsp;000 à 129&nbsp;000&nbsp;€ HT, soit 3,8 pour 1&nbsp;:
            un rapport calculé sur trois listes de postes différentes. Seules B
            et C deviennent comparables une fois cette ligne retirée,
            puisqu’elle est la seule qui manque à B, quand quatre lignes
            manquent à A. Sur ce couple B&nbsp;et&nbsp;C, l’écart annoncé vaut
            129&nbsp;000 contre 58&nbsp;000&nbsp;€ HT, soit 2,2 pour 1&nbsp;; la
            saisie sans réseau retirée, la société C tombe à 85&nbsp;000&nbsp;€
            HT et l’écart devient <strong>1,5 pour 1</strong>. Il subsiste
            27&nbsp;000&nbsp;€ entre deux propositions qui portent enfin sur le
            même produit, et la phrase non tranchée pèse 1,6&nbsp;fois cette
            somme.
          </p>
          <p>
            Cette phrase tient sur une ligne, page&nbsp;6&nbsp;: «&nbsp;Les
            inspecteurs doivent pouvoir saisir leur rapport depuis le
            terrain.&nbsp;» Les sociétés A et B ont lu «&nbsp;un écran qui
            s’affiche correctement sur téléphone&nbsp;», compris dans les onze
            écrans. La société C a lu «&nbsp;une application qui fonctionne dans
            un local technique sans réseau, avec synchronisation ensuite&nbsp;».
            Les deux lectures se défendent. L’une coûte 44&nbsp;000&nbsp;€ HT,
            soit 34&nbsp;% du devis le plus élevé.
          </p>

          <h3>
            Ce que notre propre grille situe, et ce qu’elle ne compare pas
          </h3>
          <p>
            Le repère qui suit est le nôtre, relevé sur notre{" "}
            <Link href="/tarifs">grille publique</Link> le 30{"\u00a0"}août
            2026, et non une observation du marché{"\u00a0"}: nous vendons ce
            type de projet. Elle situe un premier SaaS de trois à cinq écrans à
            15{"\u00a0"}000{"\u00a0"}€ HT, et un produit standard de dix à
            quinze écrans entre 30{"\u00a0"}000 et 60{"\u00a0"}000{"\u00a0"}€
            HT. Deux réserves. Cette seconde bande est libellée «{"\u00a0"}10–15
            écrans + IA{"\u00a0"}», quand le portail de l’exemple ne comporte
            aucune fonction d’intelligence artificielle{"\u00a0"}: la
            comparaison ne porte pas sur les mêmes fonctions. Et les montants de
            l’exemple ont été choisis pour la démonstration{"\u00a0"}: le total
            C de 129{"\u00a0"}000{"\u00a0"}€ HT vaut plus du double de sa borne
            haute, et ramené à 85{"\u00a0"}000{"\u00a0"}€ il reste 25{"\u00a0"}
            000{"\u00a0"}€ au-dessus. Ces montants restent des repères publics
            et indicatifs{"\u00a0"}; seul un devis signé fixe un prix ferme.
          </p>

          <GuidePremiumMemo
            eyebrow="Le contrôle qui précède l’envoi"
            title="Faites lire le document par deux personnes qui ne l’ont pas écrit"
          >
            <ul>
              <li>
                Un utilisateur métier et la personne qui gère l’informatique. Ni
                l’auteur du document, ni son commanditaire.
              </li>
              <li>
                Chacune répond seule et par écrit à cinq questions&nbsp;:
                combien de rôles distincts&nbsp;? qui crée le compte du premier
                utilisateur d’un nouveau client&nbsp;? que voit un abonné dont
                le paiement vient d’échouer&nbsp;? avec quoi un client repart-il
                s’il résilie&nbsp;? qui prononce la réception&nbsp;?
              </li>
              <li>
                Comptez les réponses divergentes. Chacune est une ligne que vos
                candidats chiffreront différemment.
              </li>
              <li>
                Sur le dossier de Sonia, il manquait une sixième question&nbsp;:
                où l’inspecteur saisit-il son rapport&nbsp;?
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exigence"
          number="03"
          label="Rédaction"
          readingTime={"3\u00a0min"}
          title={
            "Comment écrire une exigence qu’on ne peut pas lire de deux façons\u00a0?"
          }
        >
          <p>
            Une exigence est testable quand vous savez écrire son échec. Si
            personne ne peut dire quelle tentative doit être refusée, personne
            ne saura recevoir la fonction, et le jour de la livraison se réglera
            à la discussion.
          </p>
          <p>
            Reprenons la phrase de la page&nbsp;6. Voici ce qu’elle devient une
            fois écrite pour qu’un devis puisse l’isoler et la chiffrer seule.
          </p>

          <FormulaBox>
            {`EXIGENCE R-14 — Saisir un rapport sans réseau

Situation initiale\u00a0: un inspecteur connecté, affecté au dossier 2\u00a0481
de l’organisation Bailleur Nord, dans un local technique sans réseau
mobile ni Wi-Fi.

Action\u00a0: il ouvre le dossier, renseigne douze champs, joint trois photos,
valide.

Résultat attendu\u00a0: le rapport est conservé sur l’appareil. Dès le retour
du réseau, il apparaît côté serveur avec ses trois photos, au plus tard
quatre heures après la validation.

Refus attendu\u00a0: un inspecteur non affecté au dossier 2\u00a0481 ne peut pas
l’ouvrir, avec ou sans réseau.

Preuve de réception\u00a0: mode avion activé, saisie complète, mode avion
coupé, capture du rapport côté serveur avec ses trois photos.

Hors de cette exigence\u00a0: la consultation sans réseau des rapports des
autres dossiers.

Décision encore ouverte\u00a0: deux inspecteurs modifient le même rapport sans
réseau, lequel gagne\u00a0? Tranché par Sonia avant le 15\u00a0septembre.
Chiffrer les deux branches séparément.`}
          </FormulaBox>

          <p>
            Sept blocs au lieu d’une ligne, et aucun ne nomme une
            technologie&nbsp;: ni le langage, ni la base de données, ni le
            mécanisme de synchronisation. Chaque société reste libre de sa
            solution, et aucune ne peut plus se tromper de produit. Le seul
            ajout coûteux, l’arbitrage sur le conflit d’écriture, est déclaré
            ouvert et sera chiffré deux fois.
          </p>

          <h3>La mesure à faire sur votre propre document</h3>
          <p>
            Exportez votre cahier des charges en texte, puis comptez les mots
            qui repoussent une décision. Cette commande fonctionne dans un
            terminal macOS ou Linux, et sous Windows depuis le sous-système
            Linux&nbsp;:
          </p>

          <FormulaBox>
            {`grep -onEi 'etc\\.|notamment|le cas échéant|si nécessaire|si besoin|idéalement|ergonomique|intuitif|convivial|performant|moderne|standard du marché|à définir avec' cahier-des-charges.txt`}
          </FormulaBox>

          <p>
            Chaque ligne renvoyée porte son numéro et devient une entrée de
            votre liste de travail&nbsp;: soit une exigence écrite comme
            ci-dessus, soit une décision déclarée ouverte, avec son nom et sa
            date. Nous ne publions aucun seuil pour cette densité, et en
            inventer un serait pire que de s’en passer. Le repère utile reste
            interne à votre texte&nbsp;: relancez la commande après réécriture,
            puis reprenez une par une les occurrences qui subsistent. Chacune
            est soit une décision que personne n’a voulu prendre, soit un mot
            que vous gardez sciemment&nbsp;: écrivez lequel.
          </p>

          <h3>Les deux exigences qu’un adjectif ne remplace jamais</h3>
          <p>
            <strong>«&nbsp;Interface accessible&nbsp;» </strong>ne se reçoit
            pas. Les règles WCAG&nbsp;2.2, recommandation du W3C datée du
            12&nbsp;décembre 2024, ajoutent neuf critères à la version
            précédente, dont six aux niveaux A et AA, et déclarent obsolète
            l’ancien critère 4.1.1. Le critère 2.5.8 fixe par exemple la taille
            minimale d’une cible tactile à 24&nbsp;×&nbsp;24&nbsp;pixels CSS,
            vérifiable sur une maquette. Écrivez les critères que vous retenez,
            le parcours concerné et la personne qui les contrôle.
          </p>
          <p>
            <strong>«&nbsp;Application sécurisée&nbsp;» </strong>non plus. Le
            référentiel OWASP ASVS, version 5.0.0 publiée le 30&nbsp;mai 2025,
            compte 345&nbsp;exigences réparties en dix-sept chapitres, comptées
            sur le fichier officiel de la version figée. Vous en choisissez
            quelques-unes, vous les citez avec leur numéro de version, et vous
            dites lesquelles seront testées et par qui. Le{" "}
            <Link href="/guides/securite-application-metier">
              socle de sécurité à exiger avant la mise en service
            </Link>{" "}
            détaille ce tri, et le{" "}
            <Link href="/guides/plan-recette-application-metier">
              plan de recette d’une application métier
            </Link>{" "}
            donne la forme des scénarios à rejouer.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="abonnement"
          number="04"
          label="Abonnement"
          readingTime={"3\u00a0min"}
          title="Les huit situations qu’un abonnement traverse"
        >
          <p>
            Un cahier des charges qui s’arrête à «&nbsp;l’accès s’ouvre à la
            souscription et se ferme à la résiliation&nbsp;» décrit deux états.
            La documentation publique de Stripe en décrit huit. Les six autres
            sont laissées à l’appréciation de la personne qui code, et trois
            d’entre elles décrivent une situation où le paiement n’a pas abouti
            sans que l’accès se ferme de lui-même&nbsp;: <em>incomplete</em>,{" "}
            <em>past_due </em>et <em>unpaid</em>.
          </p>

          <GuideTable
            caption="Les huit états d’abonnement et la décision que chacun impose au document"
            headers={[
              "État",
              "Ce que dit la documentation",
              "Ce que votre document doit trancher",
            ]}
            rows={subscriptionRows}
          />

          <p>
            Ces huit lignes viennent de la documentation Stripe, consultée le
            30&nbsp;août 2026 et citée ici comme repère de dénombrement&nbsp;:
            que vous reteniez Stripe, un prélèvement SEPA ou une facturation
            manuelle, les mêmes huit situations existeront, sous d’autres noms.
            Trois décisions par état, cela fait vingt-quatre&nbsp;lignes à
            écrire&nbsp;— exactement le travail qu’un devis chiffre différemment
            selon qu’il l’a vu ou non.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/cahier-des-charges-saas/cahier-saas-4x3.webp"
              alt="Cycle d’abonnement reliant événement, état interne, droit, message et action de correction"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>

          <h3>Ce qu’il faut écrire même si vous changez de fournisseur</h3>
          <p>
            Les notifications de paiement n’arrivent ni dans l’ordre, ni une
            seule fois, ni forcément tout de suite. La documentation le dit
            explicitement, et chacun de ces faits produit une exigence.
          </p>
          <ul>
            <li>
              <strong>L’ordre n’est pas garanti. </strong>Votre produit doit
              rester juste si la confirmation de paiement arrive avant la
              création de l’abonnement. L’exigence&nbsp;: rejouer les deux
              ordres et obtenir le même état final.
            </li>
            <li>
              <strong>Le même événement peut arriver deux fois. </strong>Il se
              reconnaît à l’identifiant de l’objet et au type d’événement.
              L’exigence&nbsp;: le second passage ne change rien et ne crée
              aucun deuxième droit.
            </li>
            <li>
              <strong>
                Une notification perdue est réessayée jusqu’à trois jours
              </strong>{" "}
              en production, avec des délais croissants&nbsp;; trois tentatives
              en quelques heures en environnement de test. L’exigence&nbsp;: un
              écran qui liste les événements non traités, et une reprise
              manuelle attribuée à quelqu’un.
            </li>
          </ul>

          <InfoBox variant="blue" title={"Actif ne veut pas dire payé"}>
            <p>
              La documentation précise que l’état <em>active </em>ne signifie
              pas que toutes les factures rattachées à l’abonnement ont été
              réglées. Un abonnement peut redevenir actif en laissant une
              facture ouverte. Une règle d’accès résumée à «&nbsp;actif donc
              autorisé&nbsp;» laisse courir cette facture sans que rien ne se
              ferme, et cela se lit ensuite sur votre trésorerie.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="sortie"
          number="05"
          label="Réversibilité"
          readingTime={"3\u00a0min"}
          title={"Que récupérez-vous exactement si vous partez\u00a0?"}
        >
          <p>
            Le mot «&nbsp;réversibilité&nbsp;» recouvre quatre objets qui
            n’obéissent pas aux mêmes règles. Deux d’entre eux sont adossés à un
            texte&nbsp;: vos données au règlement européen, le code source au
            code de la propriété intellectuelle. Les deux autres ne tiennent
            qu’à ce que votre contrat prévoit. Une clause unique ne les couvre
            donc pas.
          </p>

          <GuideTable
            caption="Quatre objets à récupérer, et la clause à écrire pour chacun"
            headers={[
              "Ce que vous voulez récupérer",
              "Ce qui l’encadre aujourd’hui",
              "La clause à écrire quand même",
            ]}
            rows={exitRows}
          />

          <p>
            Le règlement européen sur les données mérite une lecture précise,
            parce qu’il est souvent résumé en un droit d’export universel qui
            n’existe pas. Il vise les <em>services de traitement de données</em>
            , au sens de sa propre définition, et non tout abonnement qu’on
            appelle SaaS. Sur ce champ, il est net&nbsp;: applicable depuis le
            12&nbsp;septembre 2025, période transitoire maximale de
            30&nbsp;jours calendaires à l’article&nbsp;25, frais de changement
            supprimés au 12&nbsp;janvier 2027 à l’article&nbsp;29. Ce délai ne
            part qu’au terme du préavis de changement, plafonné à deux mois par
            le même article. Ces 30&nbsp;jours ne sont pas un plancher
            ferme&nbsp;: l’article prévoit aussi que, si ce délai est
            techniquement impossible à tenir, le fournisseur informe le client
            dans les 14&nbsp;jours ouvrables, justifie l’impossibilité et
            propose une période alternative «&nbsp;qui ne peut excéder sept
            mois&nbsp;». Écrivez donc dans le contrat la date que vous visez. Il
            ne dit rien du code source, rien des droits d’exploitation, rien de
            la documentation de déploiement.
          </p>

          <h3>Payer un développement ne vous en rend pas propriétaire</h3>
          <p>
            Cette clause se renégocie une fois le développement payé,
            c’est-à-dire au moment où vous avez le moins de prise. L’article
            L131-3 du code de la propriété intellectuelle demande que chacun des
            droits cédés fasse l’objet d’une mention distincte, et que
            l’étendue, la destination, le lieu et la durée de l’exploitation
            soient délimités. Une facture acquittée n’énumère aucun de ces
            éléments. Ce formalisme figure aux dispositions générales du code,
            et non parmi les articles qui visent le logiciel&nbsp;: raison de
            plus d’écrire la clause.
          </p>
          <p>
            L’article L113-9, celui qui attribue à l’employeur les droits sur un
            logiciel, vise le salarié dans l’exercice de ses fonctions. Une
            société de développement extérieure n’est pas votre salariée&nbsp;:
            confondre les deux articles se paie le jour où votre équipe veut
            reprendre le produit ailleurs.
          </p>

          <GuidePremiumMemo
            eyebrow="À ajouter au contrat"
            title="Une sortie possible se prépare dès la première semaine"
          >
            <ul>
              <li>
                Le code est poussé sur un dépôt{" "}
                <strong>que vous possédez </strong>à chaque livraison.
              </li>
              <li>
                Les comptes d’hébergement, de paiement et d’envoi d’e-mails sont
                ouverts au nom de votre société dès la première semaine,
                l’équipe de développement y étant invitée.
              </li>
              <li>
                La procédure de redéploiement est exécutée une fois par une
                personne de chez vous, avant la réception&nbsp;: tant que
                personne ne l’a jouée, elle n’est qu’un document.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incidents"
          number="06"
          label="Ce qui rate"
          readingTime={"2\u00a0min"}
          title="Ce qui rate, et ce que ça coûte"
        >
          <p>
            Les situations ci-dessous sont construites sur le dossier de Sonia,
            à partir des mécanismes décrits par les sources citées en bas de
            page. Leurs montants et leurs volumes sont ceux de l’exemple&nbsp;:
            ce ne sont pas des dossiers clients. Chacune vient d’une ligne qui
            manquait au cahier des charges.
          </p>

          <h3>
            La phrase à deux lectures&nbsp;: 44&nbsp;000&nbsp;€ HT d’écart
          </h3>
          <p>
            Dix mots page&nbsp;6, deux lectures défendables, un poste que deux
            sociétés sur trois n’ont pas chiffré. Si Sonia retient la société B
            sans avoir tranché, la saisie sans réseau reviendra en avenant, le
            jour où les inspecteurs se plaindront&nbsp;— et un avenant se
            négocie sans concurrent en face. Une sixième question, en
            section&nbsp;02, aurait sorti le sujet.
          </p>

          <h3>
            L’abonnement câblé sur un seul événement&nbsp;: 11&nbsp;accès
            ouverts, 16&nbsp;390&nbsp;€ HT non facturés
          </h3>
          <p>
            Le document disait «&nbsp;l’accès s’ouvre à la souscription&nbsp;».
            L’équipe a écouté l’événement de première souscription, et rien
            d’autre. Dix-huit mois plus tard, quarante-trois organisations sont
            abonnées&nbsp;; onze d’entre elles, soit 26&nbsp;%, ont vu leur
            prélèvement annuel échouer sans que rien ne se ferme. À
            1&nbsp;490&nbsp;€ HT l’abonnement, cela fait 16&nbsp;390&nbsp;€ HT à
            rattraper, plus la conversation avec onze clients à qui l’on va
            demander de payer un service qu’ils utilisaient gratuitement. Les
            vingt-quatre lignes de la section&nbsp;04 nomment cette situation
            avant la première ligne de code.
          </p>

          <h3>
            La séparation entre clients jamais testée&nbsp;: 72&nbsp;heures pour
            reconstituer qui a vu quoi
          </h3>
          <p>
            Le document exigeait que chaque bailleur ne voie que ses dossiers.
            Il ne demandait pas de le prouver. La recette a montré qu’une
            utilisatrice autorisée voyait bien ses rapports&nbsp;; personne n’a
            vérifié qu’une autre se voyait refuser l’accès. Le jour où un
            rapport apparaît chez le mauvais bailleur, l’article&nbsp;33 du RGPD
            impose une notification à la CNIL dans les meilleurs délais et, si
            possible, 72&nbsp;heures au plus tard après en avoir pris
            connaissance&nbsp;— et non après la survenance&nbsp;— sauf si cette
            violation n’est pas susceptible d’engendrer un risque pour les
            droits et libertés des personnes physiques. Ces 72&nbsp;heures
            partent d’abord à établir qui a vu quoi parmi
            12&nbsp;000&nbsp;dossiers et quarante-trois organisations&nbsp;— une
            reconstitution qui mobilise la responsable informatique et le
            délégué à la protection des données, et que rien n’a préparée. Le
            test qui l’aurait évitée s’écrit avant la mise en service&nbsp;:
            deux organisations fictives, une requête qui doit être refusée, le
            résultat attendu au plan de recette.
          </p>

          <InfoBox
            variant="emerald"
            title="Le cas où ce guide conclut contre nous"
          >
            <p>
              Si vos trois devis, une fois rangés poste par poste, portent les
              mêmes lignes et que chaque société sait décrire la preuve qu’elle
              rejouera à la réception, votre document est bon. Un échange avec
              nous ne vous apprendra rien de plus&nbsp;: prenez la moins chère
              des deux qui savent expliquer leur recette.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="depouillement"
          number="07"
          label="Dépouillement"
          readingTime={"2\u00a0min"}
          title={
            "Comment comparer trois réponses sans se faire piéger par le prix\u00a0?"
          }
        >
          <p>
            Les postes, les hypothèses et les preuves se regardent avant les
            prix. Joignez au cahier des charges une grille à cinq colonnes, la
            même pour tous, et demandez une ligne par exigence numérotée. Une
            réponse qui arrive sans cette grille se renvoie.
          </p>

          <GuideTable
            caption="La grille de dépouillement à joindre au document, et ce que chaque colonne attrape"
            headers={[
              "Colonne à remplir",
              "Ce qu’elle doit contenir",
              "Ce qu’elle attrape",
            ]}
            rows={scoringRows}
          />

          <p>Quatre règles de consultation rendent cette grille exploitable.</p>
          <ol>
            <li>
              <strong>Une version figée, datée et numérotée. </strong>Toute
              correction postérieure repart aux trois candidats avec un nouveau
              numéro, faute de quoi vous comparerez des réponses à des documents
              différents.
            </li>
            <li>
              <strong>Les mêmes données fictives pour tous. </strong>Deux
              organisations, six rôles, une centaine de dossiers, qui serviront
              ensuite à recevoir.
            </li>
            <li>
              <strong>Les questions centralisées. </strong>Une question posée
              par une société reçoit une réponse envoyée aux trois, le même
              jour.
            </li>
            <li>
              <strong>Les écarts de produit avant les écarts de prix.</strong>{" "}
              Alignez les postes, repérez les non chiffrés, puis seulement
              regardez les totaux.
            </li>
          </ol>

          <p>
            Sur le dossier de Sonia, ce dépouillement fait apparaître trois
            décisions, dont une seule est financière&nbsp;: trancher la saisie
            sans réseau, obtenir de la société A ses quatre postes manquants,
            demander à la société C ce qu’elle a vu de plus.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="trame"
          number="08"
          label="Trame locale"
          readingTime={"2\u00a0min"}
          title="La trame à remplir, et ce qu’elle refuse de faire"
        >
          <p>
            L’outil ci-dessous fonctionne dans votre navigateur. Il n’envoie
            rien, n’enregistre rien et ne produit aucun fichier&nbsp;: la sortie
            se copie en Markdown. Neuf blocs, cinq champs par bloc,
            quarante-cinq zones de texte. Chaque bloc sépare la décision, la
            personne qui la porte, la preuve attendue, ce qui est exclu et
            l’inconnue qui bloque.
          </p>
          <p>
            Une décision laissée vide, ou remplie d’un mot d’attente, arrête le
            document. La trame emploie deux mots pour le dire&nbsp;:{" "}
            <strong>STOP </strong>marque une décision à prendre avant l’envoi,
            une ligne «&nbsp;à décider&nbsp;» marque une question qui peut
            partir aux candidats telle quelle, à condition qu’ils en chiffrent
            les deux branches. Aucun score ne compense un blocage, et l’outil ne
            vérifie jamais si ce que vous écrivez est vrai&nbsp;— seulement si
            une réponse manque à un endroit qui empêcherait deux sociétés de
            chiffrer la même chose.
          </p>

          <div data-read-time-exclude="true">
            <SaasSpecificationTool />
          </div>

          <h3>Un exemple rempli de bout en bout</h3>
          <p>
            Le document ci-dessous sort de la même trame, sur un cas entièrement
            fictif&nbsp;: DossierClair, un suivi de pièces pour de petits
            cabinets de conseil. Atelier Nord et Studio Rivage sont deux
            organisations inventées, comme les rôles, les états et les volumes
            de 20 puis 40&nbsp;organisations qui servent à tester un doublement
            de charge. Rien là-dedans n’est un prix, un délai ni un engagement
            de service.
          </p>

          <div
            data-read-time-exclude="true"
            className="not-prose my-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start"
          >
            <pre
              tabIndex={0}
              aria-label="Exemple fictif complet de cahier des charges SaaS en Markdown"
              className="max-h-[760px] overflow-auto whitespace-pre-wrap rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-xs leading-relaxed text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-zinc-800 sm:p-6"
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
              alt="Carte d’une décision de cahier des charges avec sa décision, son responsable, sa preuve, son exclusion et son inconnue bloquante"
              width={900}
              height={900}
              sizes="(max-width: 640px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <p>
            Une fois la trame remplie et les trois réponses dépouillées, vous
            pouvez{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire votre projet
            </TrackedGuideCtaLink>{" "}
            à Hagnéré Code en joignant une version sans donnée sensible, ou lire
            comment nous travaillons sur la page{" "}
            <Link href="/services/saas-applications-metier">
              SaaS et applications métier
            </Link>
            .
          </p>

          <p className="text-sm">
            <strong>Transparence. </strong>Hagnéré Code développe des SaaS et
            des applications métier sur mesure, et fait partie des sociétés
            qu’un cahier des charges comme celui-ci met en concurrence&nbsp;:
            nous percevons des honoraires si vous nous retenez. Rien ici
            n’oblige à passer par nous&nbsp;— le décompte poste par poste, la
            mesure des mots flous, les huit états d’abonnement et la grille de
            dépouillement se refont avec vos propres documents, y compris pour
            nous écarter. Nos prix et les références citées ont été relevés le
            30&nbsp;août 2026, à revérifier tous les douze mois. Aucun coût,
            aucun délai et aucun résultat ne sont garantis par cette page&nbsp;:
            seul un devis signé engage.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
