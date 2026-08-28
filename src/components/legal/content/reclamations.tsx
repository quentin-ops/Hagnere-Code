/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";
import { LEGAL_POSTAL_ADDRESS } from "../legal-contact";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";

export const reclamationsSections: LegalSection[] = [
  {
    id: "premier-contact",
    label: "Premier contact",
    title: "Adresser une réclamation à HAGNERE CODE",
    body: (
      <>
        <p>
          Une difficulté commerciale, technique ou contractuelle doit d'abord
          être portée à la connaissance de <strong>Quentin Hagnéré</strong>,
          président de HAGNERE CODE, afin de permettre une vérification factuelle
          et une proposition de résolution.
        </p>
        <dl className="lp-facts">
          <dt>Courriel</dt>
          <dd>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </dd>
          <dt>Téléphone</dt>
          <dd><a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a></dd>
          <dt>Courrier</dt>
          <dd>HAGNERE CODE, {LEGAL_POSTAL_ADDRESS}</dd>
        </dl>
        <p>
          Le courriel est recommandé pour conserver les pièces et la chronologie.
          Le recours à cette procédure est gratuit, hors coût normal de votre
          connexion ou de votre envoi postal.
        </p>
      </>
    ),
  },
  {
    id: "contenu",
    label: "Préparer le dossier",
    title: "Informations utiles à l'examen",
    body: (
      <>
        <p>Pour accélérer l'analyse, indiquez si possible :</p>
        <ul>
          <li>votre identité, votre société et vos coordonnées de réponse ;</li>
          <li>le numéro du devis, du contrat ou de la facture concernée ;</li>
          <li>une chronologie courte et les faits précis contestés ;</li>
          <li>les pièces strictement nécessaires, sans mot de passe ni secret technique ;</li>
          <li>la solution concrète recherchée.</li>
        </ul>
        <p>
          HAGNERE CODE accuse réception et répond de manière motivée dans un délai
          raisonnable au regard de la complexité. Une demande urgente liée à une
          sécurité, une indisponibilité ou un délai contractuel doit être clairement
          identifiée comme telle, sans que ce libellé crée une garantie de délai
          absente du contrat.
        </p>
      </>
    ),
  },
  {
    id: "amiable-b2b",
    label: "Résolution amiable B2B",
    title: "Échange amiable entre professionnels",
    body: (
      <>
        <p>
          Les offres Hagnéré Code sont actuellement destinées aux professionnels.
          En cas de désaccord persistant, les interlocuteurs habilités des deux
          parties recherchent une solution sur la base du devis, des livrables,
          des validations et des éléments vérifiables.
        </p>
        <p>
          Selon la nature du différend, les parties peuvent convenir d'une réunion
          contradictoire, d'un constat technique indépendant, d'un plan de
          correction, d'un avenant, d'une réversibilité organisée ou d'un accord
          transactionnel écrit. Aucune proposition amiable ne vaut reconnaissance
          de responsabilité si elle n'est pas formalisée comme telle.
        </p>
      </>
    ),
  },
  {
    id: "mediateur-entreprises",
    label: "Médiateur des entreprises",
    title: "Saisir le Médiateur des entreprises",
    body: (
      <>
        <p>
          Si le dialogue direct échoue, un professionnel peut demander la
          médiation gratuite et confidentielle du <strong>Médiateur des
          entreprises</strong>, service public placé auprès du ministère de
          l'Économie.
        </p>
        <p>
          La saisine s'effectue depuis le site officiel :
          <a
            href="https://www.economie.gouv.fr/mediateur-des-entreprises"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}economie.gouv.fr/mediateur-des-entreprises
          </a>.
          Le Médiateur apprécie la recevabilité et organise le processus selon
          ses propres règles. HAGNERE CODE ne le présente pas comme son conseil,
          son mandataire ou un médiateur de la consommation conventionné.
        </p>
      </>
    ),
  },
  {
    id: "consommateurs",
    label: "Consommateurs",
    title: "Médiation de la consommation : situation actuelle",
    body: (
      <>
        <div className="lp-note is-warning">
          Les prestations actuellement proposées sur le site sont réservées aux
          professionnels. La médiation de la consommation ne règle pas les litiges
          entre deux professionnels ; aucun organisme ne doit donc être présenté
          ici comme médiateur de la consommation sans contrat B2C et adhésion
          effective.
        </div>
        <p>
          Si HAGNERE CODE ouvre ultérieurement une offre à des consommateurs, elle
          publiera avant la conclusion du contrat les règles B2C applicables, le
          nom, l'adresse et le site du médiateur de la consommation auquel elle
          aura effectivement adhéré. La plateforme européenne de règlement en
          ligne des litiges, fermée en 2025, n'est pas proposée comme voie de
          recours.
        </p>
        <p>
          Le cas particulier de certains contrats hors établissement conclus par
          une petite entreprise est expliqué dans les
          <a href="/legal/cgv#retractation"> conditions générales de vente</a>.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    label: "Données personnelles",
    title: "Réclamation relative aux données personnelles",
    body: (
      <>
        <p>
          Une demande d'accès, de rectification, d'effacement, de limitation,
          d'opposition ou de portabilité peut être envoyée au même courriel avec
          l'objet « Données personnelles ». Elle est traitée selon la
          <a href="/legal/confidentialite"> politique de confidentialité</a>,
          indépendamment d'un éventuel litige commercial.
        </p>
        <p>
          Vous pouvez saisir directement la
          <a
            href="https://www.cnil.fr/fr/plaintes"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}CNIL
          </a>
          si vous estimez qu'un traitement porte atteinte à vos droits. Le
          Médiateur des entreprises ne remplace pas ce recours.
        </p>
      </>
    ),
  },
  {
    id: "justice",
    label: "Recours juridictionnel",
    title: "Recours et règles contractuelles",
    body: (
      <p>
        L'échange amiable ou la médiation ne prive aucune partie du droit de
        saisir une juridiction, notamment lorsqu'une mesure urgente ou un délai
        de prescription l'exige. Le droit applicable et la juridiction
        éventuellement compétente sont déterminés par le contrat et
        l'article « Litiges » des <a href="/legal/cgv#litiges">CGV</a>, sous
        réserve des règles impératives.
      </p>
    ),
  },
];
