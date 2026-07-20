/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";

export const cgvSections: LegalSection[] = [
  {
    id: "champ",
    label: "Champ d'application",
    title: "Objet et clients concernés",
    body: (
      <>
        <p>
          Les présentes conditions générales de vente (CGV) encadrent les
          prestations informatiques fournies par <strong>HAGNERE CODE</strong>,
          SASU au capital de 10 €, SIREN 993 672 856, à des clients agissant pour
          les besoins de leur activité professionnelle.
        </p>
        <p>
          Elles couvrent notamment le conseil, le cadrage, la conception, le
          développement, l'intégration, l'audit, la maintenance, l'hébergement
          géré, la création de contenus et l'accompagnement numérique. Elles ne
          créent aucune obligation de fournir un service non décrit dans le devis.
        </p>
        <p>
          Le devis, le bon de commande, le contrat ou les conditions particulières
          acceptés prévalent sur ces CGV. Les éventuelles conditions d'achat du
          client ne s'appliquent qu'après acceptation écrite de HAGNERE CODE.
        </p>
      </>
    ),
  },
  {
    id: "commande",
    label: "Commande",
    title: "Devis, commande et démarrage",
    body: (
      <>
        <p>
          Une proposition précise le périmètre, les livrables, les hypothèses,
          le calendrier estimatif, le prix, les échéances de paiement et sa durée
          de validité. La commande devient ferme à la réception de l'acceptation
          non équivoque du client et, lorsqu'il est prévu, du premier acompte.
        </p>
        <p>
          Le démarrage opérationnel suppose également la remise des informations,
          accès, contenus et validations nécessaires. Une demande formulée pendant
          l'exécution qui modifie le périmètre, une hypothèse ou un livrable fait
          l'objet d'un chiffrage, d'un arbitrage ou d'un avenant avant réalisation.
        </p>
        <p>
          HAGNERE CODE peut refuser une demande illicite, techniquement
          irréalisable, contraire aux droits d'un tiers ou incompatible avec ses
          obligations de sécurité et de protection des données.
        </p>
      </>
    ),
  },
  {
    id: "collaboration",
    label: "Collaboration",
    title: "Obligations des parties",
    body: (
      <>
        <h3>HAGNERE CODE</h3>
        <p>
          HAGNERE CODE est tenu d'une obligation de moyens : mobiliser les
          compétences et diligences raisonnablement nécessaires pour réaliser le
          périmètre convenu, informer le client d'un blocage significatif et
          respecter les règles professionnelles applicables.
        </p>
        <h3>Le client</h3>
        <p>Le client s'engage notamment à :</p>
        <ul>
          <li>désigner un interlocuteur capable de valider les décisions ;</li>
          <li>fournir en temps utile des informations exactes, accès fonctionnels, contenus et retours consolidés ;</li>
          <li>vérifier qu'il dispose des droits sur les données, marques, textes, images, logiciels et comptes remis ;</li>
          <li>tester les livrables dans son contexte et signaler précisément les écarts au périmètre accepté ;</li>
          <li>maintenir ses propres sauvegardes et règles d'accès lorsque l'infrastructure relève de lui.</li>
        </ul>
      </>
    ),
  },
  {
    id: "prix",
    label: "Prix et paiement",
    title: "Prix, facturation et retard",
    body: (
      <>
        <p>
          Les prix sont indiqués en euros hors taxes ; la TVA et les taxes
          applicables sont ajoutées sur la facture. Sauf mention contraire, les
          frais de déplacement, licences, achats médias, services tiers et
          consommations d'infrastructure ne sont pas inclus.
        </p>
        <p>
          Les échéances prévues au devis s'appliquent. À défaut de délai convenu,
          le paiement intervient dans les 30 jours suivant l'exécution de la
          prestation ou la réception des marchandises, conformément aux règles
          entre professionnels. Aucun escompte pour paiement anticipé n'est accordé
          sauf indication écrite contraire.
        </p>
        <div className="lp-note is-warning">
          Tout retard entraîne, dès le lendemain de l'échéance et sans rappel,
          des pénalités calculées au taux de refinancement le plus récent de la
          Banque centrale européenne majoré de 10 points, sans pouvoir être
          inférieur à trois fois le taux d'intérêt légal, ainsi qu'une indemnité
          forfaitaire de 40 € par facture pour frais de recouvrement. Une
          indemnisation complémentaire peut être demandée sur justificatifs si
          les frais exposés dépassent 40 €.
        </div>
        <p>
          En cas de non-paiement, HAGNERE CODE peut, après information du client,
          suspendre la prestation et les accès qu'elle administre, sans supprimer
          les données ni compromettre une obligation impérative de sécurité.
        </p>
      </>
    ),
  },
  {
    id: "delais",
    label: "Délais",
    title: "Calendrier et dépendances",
    body: (
      <>
        <p>
          Les délais sont ceux du devis et commencent lorsque les prérequis de
          démarrage sont réunis. Sauf engagement qualifié expressément de ferme,
          un planning constitue une estimation établie à partir des informations
          disponibles.
        </p>
        <p>
          Un retard de validation, un accès manquant, une modification de périmètre,
          une indisponibilité d'un service tiers ou un événement hors du contrôle
          raisonnable de HAGNERE CODE peut décaler le calendrier. L'impact est
          signalé et les parties recherchent un nouvel ordre de priorité ou un
          calendrier adapté.
        </p>
      </>
    ),
  },
  {
    id: "recette",
    label: "Recette et corrections",
    title: "Livraison, vérification et corrections",
    body: (
      <>
        <p>
          Le mode de livraison et la procédure de recette figurent dans le devis.
          Le client vérifie les livrables dans un délai raisonnable et décrit les
          non-conformités de façon reproductible, avec l'environnement et les
          étapes qui permettent de les constater.
        </p>
        <p>
          HAGNERE CODE corrige les écarts démontrés entre le livrable et le
          périmètre accepté. Une évolution, un changement d'avis, une incompatibilité
          apparue après modification par un tiers ou un dysfonctionnement d'un
          service externe n'est pas une non-conformité et peut faire l'objet d'une
          prestation distincte.
        </p>
        <p>
          Les garanties légales impératives restent applicables. Aucune promesse
          générale d'absence absolue d'erreur, de disponibilité continue ou de
          compatibilité avec une évolution future non connue n'est consentie.
        </p>
      </>
    ),
  },
  {
    id: "propriete",
    label: "Propriété intellectuelle",
    title: "Droits sur les livrables et composants",
    body: (
      <>
        <p>
          Sous réserve du paiement intégral, HAGNERE CODE cède au client, pour les
          seuls éléments originaux développés spécifiquement et identifiés comme
          livrables, les droits patrimoniaux nécessaires à l'usage convenu :
          reproduction, représentation, adaptation, correction, traduction,
          intégration, maintenance et évolution. La cession vaut pour les
          destinations définies au devis, pour le monde entier et pendant la durée
          légale de protection.
        </p>
        <p>
          Restent exclus de la cession : savoir-faire, méthodes, modèles génériques,
          bibliothèques et briques préexistantes de HAGNERE CODE, éléments de tiers,
          logiciels open source, polices, médias et services soumis à leur propre
          licence. Le client reçoit sur ces éléments les droits prévus par la
          licence ou, pour une brique HAGNERE CODE incorporée, un droit d'usage
          suffisant pour exploiter le livrable dans sa destination contractuelle.
        </p>
        <p>
          Les droits moraux des auteurs restent régis par la loi. Les fichiers
          sources, dépôts, données, accès, documentation et modalités de
          réversibilité remis au client sont ceux expressément prévus au devis.
          HAGNERE CODE ne publie pas un projet confidentiel comme référence sans
          autorisation.
        </p>
      </>
    ),
  },
  {
    id: "confidentialite",
    label: "Confidentialité",
    title: "Confidentialité et contenus du client",
    body: (
      <>
        <p>
          Chaque partie protège les informations non publiques reçues de l'autre,
          ne les utilise que pour le contrat et ne les communique qu'aux personnes
          qui doivent en connaître. Cette obligation ne couvre pas une information
          déjà publique sans faute, légitimement détenue, reçue d'un tiers autorisé
          ou dont la communication est imposée par la loi.
        </p>
        <p>
          Le client garantit qu'il peut confier les contenus et données nécessaires
          à la mission. Il reste responsable de leur licéité, de l'information des
          personnes et des décisions métier prises à partir du livrable. HAGNERE
          CODE informe le client lorsqu'un contenu manifestement illicite ou risqué
          est détecté et peut suspendre son traitement.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    label: "Données personnelles",
    title: "Protection des données et sécurité",
    body: (
      <>
        <p>
          Chaque partie respecte les obligations qui lui incombent au titre du
          RGPD. Lorsque HAGNERE CODE traite des données personnelles exclusivement
          sur instruction du client, un accord conforme à l'article 28 précise
          l'objet, la durée, les catégories de données, les mesures, les
          sous-traitants, l'assistance et la restitution ou suppression. Les
          présentes CGV ne remplacent pas cet accord lorsqu'il est requis.
        </p>
        <p>
          Les mesures de sécurité sont adaptées au risque, au périmètre et à
          l'architecture retenue. Les responsabilités relatives aux comptes, aux
          sauvegardes, aux secrets, aux mises à jour et à la réponse aux incidents
          sont réparties dans le devis ou l'annexe de sécurité ; aucune technologie
          précise n'est garantie si elle n'y figure pas.
        </p>
        <p>
          Pour les données collectées directement par le site, consultez la
          <a href="/legal/confidentialite"> politique de confidentialité</a>.
        </p>
      </>
    ),
  },
  {
    id: "sous-traitance",
    label: "Sous-traitance",
    title: "Prestataires et sous-traitance",
    body: (
      <p>
        HAGNERE CODE peut recourir à des collaborateurs et prestataires qualifiés
        pour une partie de la mission tout en restant responsable de sa bonne
        exécution vis-à-vis du client. Lorsque des données personnelles sont
        concernées, l'information, l'autorisation générale ou spécifique et le
        droit d'opposition légitime suivent l'accord de sous-traitance applicable.
      </p>
    ),
  },
  {
    id: "responsabilite",
    label: "Responsabilité",
    title: "Responsabilité et assurance du risque",
    body: (
      <>
        <p>
          Chaque partie répond des dommages directs, prévisibles et prouvés causés
          par son manquement. Dans la mesure permise entre professionnels, HAGNERE
          CODE ne répond pas des pertes indirectes telles que perte d'opportunité,
          de marge, d'image ou de données dont le client devait assurer la sauvegarde.
        </p>
        <p>
          Sauf disposition impérative ou faute lourde/dolosive, le montant cumulé
          de la responsabilité de HAGNERE CODE au titre d'une mission est limité
          aux sommes hors taxes effectivement payées pour la prestation à l'origine
          du dommage au cours des douze mois précédant le fait générateur. Cette
          limite ne s'applique pas aux dommages corporels, à une atteinte frauduleuse
          aux droits d'un tiers ou aux cas dans lesquels la loi interdit une limitation.
        </p>
        <p>
          Le client apprécie l'adéquation du livrable à son activité, teste avant
          mise en production et maintient un plan de continuité proportionné à ses
          risques. HAGNERE CODE n'est pas responsable d'une modification non
          autorisée, d'un accès client compromis ou d'un service tiers choisi par
          le client hors de son contrôle raisonnable.
        </p>
      </>
    ),
  },
  {
    id: "fin",
    label: "Fin du contrat",
    title: "Suspension, résiliation et force majeure",
    body: (
      <>
        <p>
          En cas de manquement sérieux, l'autre partie peut demander sa correction
          par écrit. Si le manquement persiste quinze jours calendaires après une
          mise en demeure suffisamment précise, elle peut résilier la prestation,
          sans préjudice des droits déjà acquis. Une urgence de sécurité, une
          illicéité ou un impayé peut justifier une suspension immédiate et
          proportionnée après information lorsque celle-ci est possible.
        </p>
        <p>
          À la fin du contrat, le client règle les prestations réalisées, frais
          engagés et éléments spécifiquement commandés. HAGNERE CODE remet les
          éléments de réversibilité prévus et payés. Une assistance supplémentaire
          de migration est facturée si elle n'était pas incluse.
        </p>
        <p>
          Aucune partie n'est responsable d'un empêchement répondant aux conditions
          de la force majeure de l'article 1218 du Code civil. Elle informe l'autre
          partie et limite les conséquences. Si l'empêchement durable prive le
          contrat de son utilité, les règles légales de suspension ou résolution
          s'appliquent.
        </p>
      </>
    ),
  },
  {
    id: "retractation",
    label: "Petites entreprises",
    title: "Cas particulier du droit de rétractation",
    body: (
      <>
        <p>
          Ces CGV sont B2B. Toutefois, l'article L. 221-3 du Code de la
          consommation peut étendre certaines protections à un professionnel
          lorsqu'un contrat est conclu hors établissement, que son objet n'entre
          pas dans son activité principale et qu'il emploie au plus cinq salariés.
          Si ces trois conditions sont réunies, le client peut notamment bénéficier
          d'un délai de rétractation de quatorze jours.
        </p>
        <p>
          Le professionnel concerné peut notifier sans ambiguïté sa décision à
          HAGNERE CODE aux coordonnées des <a href="/legal/mentions">mentions légales</a>.
          Une exécution avant la fin du délai n'est engagée que sur demande expresse
          dans les conditions légales ; les conséquences financières de la
          rétractation sont alors celles prévues par la loi.
        </p>
      </>
    ),
  },
  {
    id: "litiges",
    label: "Litiges",
    title: "Réclamations, droit applicable et juridiction",
    body: (
      <>
        <p>
          Le contrat est régi par le droit français. Avant toute procédure, les
          parties s'efforcent de résoudre le différend à partir d'une réclamation
          écrite et documentée. Elles peuvent solliciter le
          <a href="https://www.economie.gouv.fr/mediateur-des-entreprises" target="_blank" rel="noopener noreferrer"> Médiateur des entreprises</a>.
          Les modalités figurent sur la page <a href="/legal/reclamations">Réclamations et médiation</a>.
        </p>
        <p>
          <strong>
            ENTRE PARTIES AYANT TOUTES LA QUALITÉ DE COMMERÇANT, TOUT LITIGE NON
            RÉSOLU À L'AMIABLE RELÈVE DE LA COMPÉTENCE DU TRIBUNAL DE COMMERCE DE
            CHAMBÉRY, Y COMPRIS EN CAS DE PLURALITÉ DE DÉFENDEURS, SOUS RÉSERVE
            D'UNE RÈGLE IMPÉRATIVE CONTRAIRE.
          </strong>
        </p>
        <p>
          Si l'une des parties n'a pas la qualité de commerçant ou si la clause
          attributive n'est pas opposable, les règles légales de compétence
          territoriale et matérielle s'appliquent.
        </p>
      </>
    ),
  },
];
