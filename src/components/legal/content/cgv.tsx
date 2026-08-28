/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";
import { LEGAL_POSTAL_ADDRESS } from "../legal-contact";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/contact-details";

export const cgvSections: LegalSection[] = [
  {
    id: "champ",
    label: "Champ d'application",
    title: "Objet, version et clients concernés",
    body: (
      <>
        <p>
          Les présentes conditions générales de vente (CGV) encadrent les
          prestations informatiques fournies par <strong>HAGNERE CODE</strong>,
          SASU au capital de 10 €, SIREN 993 672 856, à des clients agissant pour
          les besoins de leur activité professionnelle.
        </p>
        <p>
          La présente version est celle du <strong>20 juillet 2026</strong>. La
          version applicable à une commande est celle identifiée dans le devis ou
          le contrat accepté, et non une version publiée postérieurement.
        </p>
        <p>
          Elles couvrent notamment le conseil, le cadrage, la conception, le
          développement, l'intégration, l'audit, la maintenance, l'hébergement
          géré, la création de contenus et l'accompagnement numérique. Elles ne
          créent aucune obligation de fournir un service non décrit dans le devis.
        </p>
        <p>
          Le devis, le bon de commande, le contrat ou les conditions particulières
          acceptés prévalent sur ces CGV. Les conditions d'achat du client ne
          s'appliquent qu'après acceptation écrite de HAGNERE CODE. Si les parties
          invoquent des conditions générales incompatibles, les clauses
          incompatibles sont sans effet, conformément à l'article 1119 du Code
          civil.
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
          Les CGV applicables sont remises avec le devis par courriel ou dans un
          document permettant au client de les conserver et de les reproduire à
          l'identique (support durable). La signature du devis ou du contrat
          comporte leur acceptation expresse. HAGNERE CODE conserve la version
          acceptée et la preuve de sa remise. La seule mise en ligne des CGV ne
          vaut pas acceptation.
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
          HAGNERE CODE est tenue d'une obligation de moyens pour les prestations
          de conseil, d'audit, d'optimisation et pour les résultats qui dépendent
          notamment d'une audience, d'une plateforme ou d'une décision de tiers.
          Elle mobilise les compétences et diligences raisonnablement nécessaires,
          informe le client d'un blocage significatif et respecte les règles
          professionnelles applicables.
        </p>
        <p>
          Cette qualification ne dispense pas HAGNERE CODE de remettre les
          livrables identifiés conformément aux spécifications acceptées. Une
          obligation de résultat supplémentaire ne peut résulter que d'un
          engagement écrit et précisément défini dans le devis ou le contrat.
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
          Les prestations étant adaptées à chaque mission, le prix est déterminé
          dans le devis selon le périmètre, la complexité fonctionnelle et
          technique, la charge estimée, le calendrier, les risques identifiés, les
          ressources mobilisées et les frais de tiers. Toute réduction ou remise
          est expressément portée au devis ; aucune autre réduction n'est présumée.
        </p>
        <p>
          Le moyen de paiement et les échéances sont ceux du devis ou de la facture.
          À défaut de délai convenu, le paiement intervient dans les 30 jours
          suivant l'exécution de la prestation demandée. Tout délai convenu respecte
          les plafonds légaux entre professionnels. Aucun escompte pour paiement
          anticipé n'est accordé sauf indication écrite contraire.
        </p>
        <div className="lp-note is-warning">
          Tout retard entraîne, dès le lendemain de l'échéance et sans rappel,
          des pénalités calculées au taux d'intérêt appliqué par la Banque centrale
          européenne à son opération de refinancement la plus récente, retenu au
          1er janvier pour le premier semestre ou au 1er juillet pour le second
          semestre, et majoré de 10 points de pourcentage, sans pouvoir être
          inférieur à trois fois le taux d'intérêt légal. S'ajoute une indemnité
          forfaitaire de 40 € par facture pour frais de recouvrement. Une
          indemnisation complémentaire peut être demandée sur justificatifs lorsque
          les frais exposés dépassent 40 €. Ces indemnités de recouvrement ne sont
          pas réclamées lorsqu'une procédure de sauvegarde, de redressement ou de
          liquidation judiciaire interdit le paiement de la créance à son échéance.
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
          À défaut de délai particulier, le client dispose de quinze jours
          calendaires à compter de la mise à disposition du livrable pour le
          vérifier et notifier des réserves précises. La procédure de recette ne
          peut pas retarder les délais de paiement ni excéder trente jours, sauf
          stipulation expresse qui ne constitue pas une pratique abusive.
        </p>
        <p>
          Les réserves décrivent les non-conformités de façon reproductible, avec
          l'environnement et les étapes qui permettent de les constater. À défaut
          de réserve dans le délai applicable, le livrable est réputé accepté, sans
          préjudice d'un défaut qui ne pouvait raisonnablement être décelé lors de
          la recette ni d'une garantie impérative.
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
          Chaque devis ou annexe identifie les éléments originaux créés
          spécifiquement pour la mission et destinés à être cédés. Aucune cession
          globale d'une création future indéterminée n'est consentie. Sous réserve
          du paiement intégral du prix correspondant, HAGNERE CODE cède au client,
          sauf stipulation contraire du devis, à titre exclusif, les droits
          patrimoniaux suivants sur ces seuls éléments :
        </p>
        <ul>
          <li>
            le droit de reproduction, c'est-à-dire de fixer et reproduire le
            livrable, sans limitation de nombre, sur les supports nécessaires aux
            destinations contractuelles ;
          </li>
          <li>
            le droit de représentation, c'est-à-dire de communiquer, afficher et
            mettre à disposition le livrable sur les réseaux et supports nécessaires
            aux destinations contractuelles ;
          </li>
          <li>
            les droits d'adaptation, de correction, de traduction, d'arrangement,
            d'intégration, de maintenance et d'évolution, ainsi que de reproduction
            et de représentation des versions qui en résultent ;
          </li>
          <li>
            lorsque la nature du livrable le permet, le droit de distribution et de
            mise sur le marché dans les conditions définies au devis.
          </li>
        </ul>
        <p>
          Le domaine d'exploitation est limité aux finalités et destinations
          décrites dans le devis, pour le monde entier et pendant toute la durée
          légale de protection. Le client peut exercer ces droits lui-même ou par
          l'intermédiaire d'un prestataire agissant pour son compte, notamment pour
          maintenir ou faire évoluer le livrable. Le devis identifie la rémunération
          de la cession lorsqu'une ventilation distincte est requise.
        </p>
        <p>
          Restent exclus de la cession : savoir-faire, méthodes, modèles génériques,
          bibliothèques et briques préexistantes de HAGNERE CODE, éléments de tiers,
          logiciels open source, polices, médias et services soumis à leur propre
          licence. Leur inventaire et, lorsqu'elles imposent une contrainte
          significative, leurs licences sont communiqués dans le devis, une annexe
          ou la documentation de livraison. Le client reçoit les droits prévus par
          ces licences ou, pour une brique HAGNERE CODE incorporée, un droit d'usage
          non exclusif, mondial, valable pendant toute la durée légale de protection
          et limité aux destinations contractuelles du livrable.
        </p>
        <p>
          HAGNERE CODE garantit disposer ou obtenir de ses salariés, collaborateurs
          et sous-traitants les droits écrits nécessaires à la cession ainsi définie,
          sous réserve des éléments fournis par le client et des licences de tiers
          inventoriées. Les droits moraux des auteurs restent régis par la loi.
          Jusqu'au paiement intégral, le client bénéficie uniquement d'un droit
          provisoire, non exclusif et non transférable permettant la recette du
          livrable.
        </p>
        <p>
          Les fichiers sources, dépôts, données, accès, documentation et modalités
          de réversibilité remis au client sont ceux expressément prévus au devis.
          Le nom, les marques, logos, captures, résultats et témoignages du client
          ne peuvent être utilisés comme référence commerciale sans son autorisation
          écrite préalable, qui en précise les supports et peut être retirée pour
          l'avenir.
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
          qu'elles soient signalées comme confidentielles ou que leur nature et les
          circonstances de leur communication imposent raisonnablement de les
          considérer comme telles. Elle ne les utilise que pour le contrat et ne
          les communique qu'aux personnes qui doivent en connaître et sont tenues à
          une obligation de confidentialité appropriée.
        </p>
        <p>
          Cette obligation ne couvre pas une information déjà publique sans faute,
          légitimement détenue avant sa communication, développée indépendamment,
          reçue d'un tiers autorisé ou dont la communication est imposée par la loi.
          Dans ce dernier cas, la partie concernée en informe l'autre préalablement
          lorsque la loi le permet.
        </p>
        <p>
          À la fin du contrat ou sur demande légitime, chaque partie restitue ou
          supprime les informations confidentielles de l'autre, sous réserve des
          obligations légales de conservation et des sauvegardes protégées qui ne
          sont pas réutilisées. L'obligation subsiste pendant cinq ans après la fin
          du contrat et aussi longtemps que nécessaire pour les secrets d'affaires,
          identifiants de sécurité et données protégées par une obligation légale ou
          contractuelle plus longue.
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
    title: "Responsabilité et répartition des risques",
    body: (
      <>
        <p>
          Chaque partie répond des dommages directs, prévisibles et prouvés causés
          par son manquement, sous réserve du régime applicable à la faute lourde ou
          dolosive. Dans la mesure permise entre professionnels, HAGNERE CODE ne
          répond pas des dommages indirects, notamment d'une perte d'opportunité,
          de marge ou d'image lorsqu'elle ne constitue pas la suite immédiate et
          directe du manquement. Elle ne répond pas non plus d'une perte résultant
          exclusivement de l'absence d'une sauvegarde que le devis plaçait
          expressément sous la responsabilité du client.
        </p>
        <p>
          Sauf disposition impérative, faute lourde ou dolosive, le montant cumulé
          de la responsabilité de HAGNERE CODE est limité, pour une mission
          ponctuelle, aux sommes hors taxes payées ou payables au titre de la
          prestation à l'origine du dommage et, pour une prestation récurrente, aux
          sommes hors taxes payées ou payables au titre de cette prestation pendant
          les douze mois précédant le fait générateur.
        </p>
        <p>
          Ce plafond ne s'applique pas aux dommages corporels, à la violation par
          HAGNERE CODE des droits de propriété intellectuelle d'un tiers sur un
          élément qu'elle a fourni, à un manquement à son obligation de
          confidentialité ni aux cas dans lesquels la loi interdit une limitation.
          Aucune stipulation ne prive de sa substance une obligation essentielle.
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
          En cas d'inexécution d'une obligation essentielle, notamment une
          obligation de paiement, de confidentialité, de respect des droits de
          tiers, de licéité des contenus ou de fourniture des informations et accès
          indispensables, l'autre partie peut résoudre le contrat ou le résilier
          pour l'avenir si le manquement n'est pas réparé dans les quinze jours
          calendaires suivant une mise en demeure restée infructueuse. La mise en
          demeure décrit le manquement et mentionne expressément la présente clause
          ainsi que la résolution ou résiliation encourue.
        </p>
        <p>
          Une urgence de sécurité, une illicéité, une atteinte aux droits d'un tiers
          ou un impayé peut justifier une suspension immédiate et proportionnée,
          après information lorsque celle-ci est possible. Les droits prévus par
          les articles 1224 à 1226 du Code civil en cas d'inexécution suffisamment
          grave restent applicables, aux risques et conditions prévus par la loi.
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
          Ces CGV sont B2B. Toutefois, les protections visées à l'article L. 221-3
          du Code de la consommation s'appliquent lorsqu'un contrat est conclu hors
          établissement entre professionnels, que son objet n'entre pas dans le
          champ de l'activité principale du professionnel sollicité et que celui-ci
          emploie au plus cinq salariés. Si ces trois conditions sont réunies, le
          client dispose notamment d'un délai de rétractation de quatorze jours à
          compter de la conclusion du contrat.
        </p>
        <p>
          Avant la signature d'une commande remplissant ces conditions, HAGNERE
          CODE remet les informations précontractuelles requises, puis un exemplaire
          daté du contrat sur papier signé par les parties ou, avec l'accord du
          client, sur un autre support durable. Cet exemplaire confirme l'engagement
          exprès des parties et est accompagné du formulaire type ci-dessous. Sauf
          exception légale, HAGNERE CODE ne reçoit aucun paiement ni contrepartie
          avant l'expiration de sept jours à compter de la conclusion du contrat
          hors établissement.
        </p>
        <p>
          Le client peut exercer son droit en adressant le formulaire ou toute
          déclaration dénuée d'ambiguïté à HAGNERE CODE, {LEGAL_POSTAL_ADDRESS},
          ou à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, avant
          l'expiration du délai.
        </p>
        <div className="lp-note is-info">
          <strong>Formulaire type de rétractation</strong>
          <p>
            À l'attention de HAGNERE CODE, {LEGAL_POSTAL_ADDRESS} — téléphone :{" "}
            {CONTACT_PHONE_DISPLAY} — courriel : {CONTACT_EMAIL}
          </p>
          <p>
            Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*)
            rétractation du contrat portant sur la prestation de services
            ci-dessous :
          </p>
          <p>
            Numéro et objet du devis ou contrat : […]<br />
            Contrat conclu le : […]<br />
            Nom du ou des clients : […]<br />
            Adresse du ou des clients : […]<br />
            Date : […]<br />
            Signature, uniquement en cas d'envoi sur papier : […]
          </p>
          <p>(*) Rayez les mentions inutiles.</p>
        </div>
        <p>
          L'exécution avant la fin du délai ne commence qu'à la demande expresse du
          client, recueillie sur papier ou sur support durable pour un contrat hors
          établissement, après l'information requise. S'il se rétracte après ce
          commencement, il règle un montant proportionné au service fourni jusqu'à
          la notification de sa décision. Aucune somme n'est due si la demande
          expresse ou l'information exigée n'a pas été recueillie. HAGNERE CODE
          rembourse les autres sommes reçues, sans retard injustifié et au plus tard
          dans les quatorze jours de cette notification, selon les modalités légales.
          Pour une prestation de services, le droit ne disparaît après exécution
          complète avant l'expiration du délai que si l'accord préalable et exprès
          ainsi que la reconnaissance de cette perte ont été recueillis.
        </p>
        <p>
          Lorsqu'une commande porte juridiquement sur la fourniture d'un contenu
          numérique sans support matériel avant la fin du délai, le devis ou le
          contrat recueille séparément l'accord préalable et exprès du client, sa
          reconnaissance de la perte du droit de rétractation dès le commencement
          de l'exécution et lui remet une confirmation de son accord sur support
          durable, lorsque ces formalités sont requises.
        </p>
      </>
    ),
  },
  {
    id: "dispositions-finales",
    label: "Dispositions finales",
    title: "Preuve, évolution et maintien du contrat",
    body: (
      <>
        <p>
          Les échanges électroniques, validations, journaux de livraison et
          signatures peuvent servir de preuve lorsqu'ils permettent d'identifier
          leur auteur et sont conservés dans des conditions garantissant leur
          intégrité. Chaque partie conserve un exemplaire du devis, du contrat et
          des CGV acceptés.
        </p>
        <p>
          Si une stipulation est déclarée nulle, inapplicable ou réputée non écrite,
          les autres stipulations restent en vigueur dès lors que l'économie du
          contrat peut être maintenue. Le fait de ne pas exercer immédiatement un
          droit ne vaut pas renonciation à ce droit.
        </p>
        <p>
          Une modification des CGV ne s'applique pas rétroactivement. Elle ne régit
          une mission en cours qu'après un avenant ou une acceptation expresse sur
          support durable. Les stipulations relatives au paiement, à la propriété
          intellectuelle, à la confidentialité, aux données, à la responsabilité et
          aux litiges survivent à la fin du contrat pour la durée qui leur est propre.
        </p>
        <p>
          Une notification contractuelle est envoyée aux coordonnées indiquées dans
          le devis par un moyen permettant d'en établir l'envoi ou la réception. En
          cas de traduction, seule la version française acceptée fait foi.
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
          Cette démarche volontaire n'empêche pas une mesure urgente ou
          conservatoire et ne doit pas faire perdre un délai de prescription ou de
          recours.
        </p>
        <div className="lp-note is-warning">
          <strong>
            ENTRE PERSONNES AYANT TOUTES CONTRACTÉ EN QUALITÉ DE COMMERÇANT, TOUT
            LITIGE NON RÉSOLU À L'AMIABLE RELÈVE DE LA COMPÉTENCE DU TRIBUNAL DE
            COMMERCE DE CHAMBÉRY, Y COMPRIS EN CAS DE PLURALITÉ DE DÉFENDEURS,
            SOUS RÉSERVE D'UNE RÈGLE IMPÉRATIVE CONTRAIRE.
          </strong>
        </div>
        <p>
          Si l'une des parties n'a pas la qualité de commerçant ou si la clause
          attributive n'est pas opposable, les règles légales de compétence
          territoriale et matérielle s'appliquent.
        </p>
      </>
    ),
  },
];
