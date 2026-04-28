import type { LegalSection } from "../LegalPageLayout";

export const cgvSections: LegalSection[] = [
  {
    id: "application",
    label: "Champ d'application",
    title: "Champ d'application",
    body: (
      <>
        <p>
          Les présentes conditions générales encadrent les prestations de
          conseil, conception, développement, audit, maintenance et évolution
          réalisées par <strong>HAGNÉRÉ CODE SAS</strong> pour ses clients
          professionnels.
        </p>
        <p>
          Elles s&apos;appliquent sauf conditions particulières contraires prévues
          dans un devis, une proposition commerciale, un bon de commande ou un
          contrat signé. En cas de contradiction, le document contractuel signé
          entre les parties prévaut.
        </p>
      </>
    ),
  },
  {
    id: "commande",
    label: "Commande",
    title: "Devis, commande et cadrage",
    body: (
      <>
        <p>
          Toute prestation fait l&apos;objet d&apos;un cadrage préalable permettant de
          préciser le périmètre, les livrables, les délais, les responsabilités
          respectives et les conditions financières.
        </p>
        <p>
          La commande devient ferme après acceptation écrite du devis ou de la
          proposition commerciale par le client, selon les modalités indiquées
          dans le document transmis.
        </p>
      </>
    ),
  },
  {
    id: "prix-paiement",
    label: "Prix et paiement",
    title: "Prix, facturation et paiement",
    body: (
      <>
        <p>
          Les prix sont exprimés hors taxes, sauf mention contraire. Les taxes
          applicables sont ajoutées conformément à la réglementation en vigueur
          à la date de facturation.
        </p>
        <p>
          Les échéances de paiement sont précisées dans le devis ou le contrat.
          À défaut de précision, les factures sont payables à réception. Tout
          retard de paiement peut entraîner l&apos;application des pénalités légales
          et de l&apos;indemnité forfaitaire pour frais de recouvrement.
        </p>
      </>
    ),
  },
  {
    id: "execution",
    label: "Exécution",
    title: "Exécution des prestations",
    body: (
      <>
        <p>
          HAGNÉRÉ CODE SAS s&apos;engage à exécuter les prestations avec diligence,
          selon les règles de l&apos;art et dans le respect du périmètre validé.
        </p>
        <p>
          Le client s&apos;engage à fournir les accès, contenus, validations et
          informations nécessaires au bon déroulement du projet. Tout retard de
          validation ou élément manquant peut entraîner un décalage du planning.
        </p>
      </>
    ),
  },
  {
    id: "propriete",
    label: "Propriété",
    title: "Propriété intellectuelle et livrables",
    body: (
      <>
        <p>
          Sauf stipulation contraire, les livrables spécifiques développés pour
          le client sont transférés après paiement complet des sommes dues.
        </p>
        <p>
          Les éléments préexistants, bibliothèques open source, outils internes,
          composants génériques, méthodes, savoir-faire et environnements de
          développement restent la propriété de leurs titulaires respectifs ou
          de HAGNÉRÉ CODE SAS lorsqu&apos;ils lui appartiennent.
        </p>
      </>
    ),
  },
  {
    id: "responsabilite",
    label: "Responsabilité",
    title: "Responsabilité",
    body: (
      <>
        <p>
          HAGNÉRÉ CODE SAS ne peut être tenue responsable des dommages indirects,
          pertes d&apos;exploitation, pertes de chiffre d&apos;affaires, pertes de données
          non imputables à une faute directe, ou conséquences liées à une
          mauvaise utilisation des livrables par le client.
        </p>
        <p>
          La responsabilité totale de HAGNÉRÉ CODE SAS, toutes causes confondues,
          est limitée aux montants effectivement payés par le client au titre de
          la prestation concernée, sauf disposition impérative contraire.
        </p>
      </>
    ),
  },
  {
    id: "sous-traitance-rgpd",
    label: "Sous-traitance RGPD",
    title: "Sous-traitance de données personnelles (article 28 RGPD)",
    body: (
      <>
        <p>
          Lorsque l&apos;exécution d&apos;une prestation conduit HAGNÉRÉ CODE SAS à
          traiter des données à caractère personnel pour le compte du client,
          le client agit en qualité de <strong>responsable de traitement</strong>{" "}
          et HAGNÉRÉ CODE SAS en qualité de <strong>sous-traitant</strong> au
          sens de l&apos;article 4.8 du RGPD.
        </p>
        <p>
          <strong>Objet, durée, nature et finalité du traitement.</strong>{" "}
          Le traitement consiste en la conception, le développement, la
          maintenance ou l&apos;hébergement applicatif des solutions livrées au
          client. Sa durée correspond à la durée d&apos;exécution de la prestation
          telle que définie au devis ou au contrat. La nature et les finalités
          sont précisées dans la documentation de la prestation (registre de
          traitement, schéma de flux de données ou clause spécifique annexée).
        </p>
        <p>
          <strong>Catégories de données et de personnes concernées.</strong>{" "}
          HAGNÉRÉ CODE SAS traite uniquement les catégories de données et
          personnes nécessaires à la prestation (typiquement : données
          d&apos;identification professionnelle, données techniques de
          connexion, contenus utilisateurs, données métier strictement
          requises). Aucune donnée sensible au sens de l&apos;article 9 du RGPD
          n&apos;est traitée sans accord exprès et instructions documentées du
          client.
        </p>
        <p>
          <strong>Obligations du sous-traitant.</strong> HAGNÉRÉ CODE SAS
          s&apos;engage à :
        </p>
        <ul>
          <li>
            ne traiter les données que sur instructions documentées du client,
            y compris pour les transferts hors Union européenne ;
          </li>
          <li>
            mettre en œuvre les mesures techniques et organisationnelles
            appropriées (chiffrement at-rest et in-transit, contrôle d&apos;accès,
            journalisation, sauvegardes testées) ;
          </li>
          <li>
            garantir que les personnes autorisées à traiter les données sont
            soumises à un engagement de confidentialité ;
          </li>
          <li>
            assister le client dans le respect de ses obligations (réponse aux
            demandes d&apos;exercice de droits, AIPD, notification de violations
            sous 24 h ouvrées) ;
          </li>
          <li>
            tenir un registre des traitements et des sous-traitants ultérieurs
            mis à disposition sur demande ;
          </li>
          <li>
            à la fin de la prestation, restituer ou supprimer les données
            personnelles selon le choix du client.
          </li>
        </ul>
        <p>
          <strong>Sous-traitants ultérieurs.</strong> Les sous-traitants
          actuels (notamment les prestataires d&apos;hébergement, d&apos;envoi d&apos;email
          transactionnel et d&apos;intelligence artificielle) sont listés dans la
          page <a href="/legal/mentions">Mentions légales</a>. Le client est
          informé préalablement de tout changement et peut s&apos;y opposer pour
          motifs légitimes.
        </p>
      </>
    ),
  },
  {
    id: "confidentialite",
    label: "Confidentialité",
    title: "Confidentialité",
    body: (
      <>
        <p>
          Chaque partie s&apos;engage à conserver confidentielles les informations
          de l&apos;autre partie portées à sa connaissance dans le cadre de la
          mission, et à ne les utiliser qu&apos;aux fins d&apos;exécution du contrat.
          Cette obligation reste applicable pendant trois ans après la fin de
          la mission.
        </p>
        <p>
          Un accord de confidentialité (NDA) spécifique peut être signé à la
          demande du client avant échange de tout document sensible.
        </p>
      </>
    ),
  },
  {
    id: "force-majeure",
    label: "Force majeure",
    title: "Force majeure",
    body: (
      <p>
        Aucune des parties n&apos;est responsable de l&apos;inexécution d&apos;une
        obligation due à un cas de force majeure au sens de l&apos;article 1218
        du Code civil. La partie concernée informe l&apos;autre partie sans délai
        et les obligations contractuelles sont suspendues le temps de
        l&apos;événement.
      </p>
    ),
  },
  {
    id: "reversibilite",
    label: "Réversibilité",
    title: "Réversibilité et fin de contrat",
    body: (
      <p>
        En fin de contrat, HAGNÉRÉ CODE SAS remet au client les éléments
        nécessaires à la reprise des prestations par un tiers : code source
        documenté, accès aux dépôts Git, comptes d&apos;hébergement, runbooks et
        documentation d&apos;exploitation. Une période de passation peut être
        contractualisée selon le périmètre.
      </p>
    ),
  },
  {
    id: "litiges",
    label: "Litiges",
    title: "Droit applicable et litiges",
    body: (
      <>
        <p>
          Les présentes conditions sont soumises au droit français. En cas de
          difficulté, les parties s&apos;efforcent de rechercher une solution amiable
          avant toute action contentieuse.
        </p>
        <p>
          À défaut d&apos;accord amiable, les juridictions compétentes sont celles
          du ressort du siège social de HAGNÉRÉ CODE SAS, sous réserve des
          règles impératives applicables.
        </p>
      </>
    ),
  },
];
