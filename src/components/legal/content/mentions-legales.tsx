/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";
import { LEGAL_POSTAL_ADDRESS } from "../legal-contact";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";

export const mentionsLegalesSections: LegalSection[] = [
  {
    id: "editeur",
    label: "Éditeur",
    title: "Éditeur du site",
    body: (
      <>
        <p>
          Le site <strong>hagnere-code.ai</strong> est édité par la société
          <strong> HAGNERE CODE</strong>, société par actions simplifiée
          unipersonnelle (SASU), qui utilise le nom commercial
          <strong> Hagnéré Code</strong>.
        </p>
        <dl className="lp-facts">
          <dt>Dénomination sociale</dt>
          <dd>HAGNERE CODE</dd>
          <dt>Forme et capital</dt>
          <dd>SASU au capital social de 10 €</dd>
          <dt>SIREN</dt>
          <dd>993 672 856</dd>
          <dt>RCS</dt>
          <dd>RCS Chambéry 993 672 856</dd>
          <dt>TVA intracommunautaire</dt>
          <dd>FR30 993 672 856</dd>
          <dt>Code APE</dt>
          <dd>62.01Z — Programmation informatique</dd>
          <dt>Siège social et adresse de correspondance</dt>
          <dd>{LEGAL_POSTAL_ADDRESS}</dd>
          <dt>Téléphone</dt>
          <dd><a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a></dd>
          <dt>Courriel</dt>
          <dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
        </dl>
      </>
    ),
  },
  {
    id: "publication",
    label: "Publication",
    title: "Direction de la publication",
    body: (
      <>
        <p>
          Le directeur de la publication est <strong>Quentin Hagnéré</strong>,
          président de HAGNERE CODE. Il est joignable aux coordonnées indiquées
          ci-dessus.
        </p>
        <p>
          HAGNERE CODE demeure la personne morale responsable de l'édition du
          site et, pour les traitements qu'elle détermine, le responsable de
          traitement. Quentin Hagnéré est le contact opérationnel ; il n'est pas
          présenté comme délégué à la protection des données (DPO).
        </p>
      </>
    ),
  },
  {
    id: "hebergement",
    label: "Hébergement",
    title: "Hébergement du site",
    body: (
      <>
        <p>
          La version publique actuellement accessible de ce site est hébergée
          par <strong>Vercel Inc.</strong>
        </p>
        <dl className="lp-facts">
          <dt>Hébergeur</dt>
          <dd>Vercel Inc.</dd>
          <dt>Adresse</dt>
          <dd>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</dd>
          <dt>Téléphone</dt>
          <dd><a href="tel:+15592887060">+1 559 288 7060</a></dd>
          <dt>Assistance</dt>
          <dd><a href="https://vercel.com/help" target="_blank" rel="noopener noreferrer">vercel.com/help</a></dd>
          <dt>Signalement d'un abus</dt>
          <dd><a href="https://vercel.com/abuse" target="_blank" rel="noopener noreferrer">vercel.com/abuse</a></dd>
        </dl>
        <p>
          Les autres prestataires qui peuvent intervenir pour la base de
          données, la messagerie, la mesure d'audience, la transcription ou la
          prise de rendez-vous sont présentés, avec leur rôle, dans la <a href="/legal/confidentialite">politique de confidentialité</a>.
          Le tableau des destinataires de cette politique fait foi sur la liste
          complète et à jour.
        </p>
        <p>
          L'hébergeur mentionné ci-dessus est celui de la version publique en
          ligne à la date de mise à jour de cette page. Un changement
          d'hébergeur est répercuté ici et dans le tableau des destinataires de
          la politique de confidentialité avant la mise en ligne de la version
          concernée.
        </p>
      </>
    ),
  },
  {
    id: "contenu",
    label: "Contenu du site",
    title: "Nature des informations publiées",
    body: (
      <>
        <p>
          Le site présente l'activité de développement informatique de Hagnéré
          Code, ses méthodes, ses contenus pédagogiques et des outils
          indicatifs. Ces informations générales ne constituent ni un devis,
          ni un engagement de délai, de prix, de résultat ou de disponibilité.
        </p>
        <p>
          Une prestation n'est engagée qu'après acceptation d'un devis ou d'un
          contrat précisant le périmètre, les livrables, le calendrier, le prix
          et les éventuelles conditions particulières. En cas de contradiction,
          le document contractuel accepté prévaut sur le contenu du site puis,
          à défaut, les <a href="/legal/cgv">conditions générales de vente</a>.
        </p>
      </>
    ),
  },
  {
    id: "propriete",
    label: "Propriété intellectuelle",
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>
          Les textes, créations graphiques, signes distinctifs, structures de
          pages, outils et codes publiés sur le site sont protégés lorsqu'ils
          remplissent les conditions prévues par la loi. Ils appartiennent à
          HAGNERE CODE ou sont utilisés avec l'autorisation de leurs titulaires.
          Les marques, logiciels, bibliothèques et contenus de tiers restent la
          propriété de leurs auteurs respectifs et soumis à leurs licences.
        </p>
        <p>
          La consultation pour les besoins propres du visiteur, sans
          exploitation commerciale autonome, est autorisée. Toute reproduction,
          adaptation, extraction substantielle,
          exploitation commerciale ou republication nécessite une autorisation
          écrite préalable, sauf exception légale ou licence expressément
          affichée sur la ressource concernée.
        </p>
        <p>
          Pour signaler une atteinte à un droit, écrivez à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
          en identifiant l'URL, le contenu et le droit invoqué.
        </p>
      </>
    ),
  },
  {
    id: "responsabilite",
    label: "Responsabilité",
    title: "Responsabilité et liens externes",
    body: (
      <>
        <p>
          HAGNERE CODE veille à l'exactitude et à l'actualisation des
          informations publiées, sans pouvoir garantir l'absence permanente
          d'erreur, d'interruption ou d'indisponibilité. Une erreur signalée est
          examinée et corrigée lorsque cela est justifié.
        </p>
        <p>
          Les outils de calcul et exemples servent à éclairer une décision :
          leurs résultats dépendent des hypothèses saisies et doivent être
          vérifiés au regard de votre situation. Les liens externes sont fournis
          pour faciliter la consultation ; HAGNERE CODE n'édite pas les sites
          tiers et ne contrôle pas leurs évolutions.
        </p>
        <p>
          Aucune clause de cette page n'exclut une responsabilité qui ne peut
          légalement être limitée ou exclue.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    label: "Données et cookies",
    title: "Données personnelles et traceurs",
    body: (
      <>
        <p>
          Les finalités, bases légales, destinataires, durées de conservation,
          transferts éventuels et modalités d'exercice des droits sont détaillés
          dans la <a href="/legal/confidentialite">politique de confidentialité</a>.
          Les stockages navigateur et services tiers activables sont recensés
          dans la <a href="/legal/cookies">politique cookies</a>.
        </p>
        <p>
          Pour une demande liée à vos données :{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          Vous pouvez également saisir la CNIL dans les conditions précisées sur
          la page de confidentialité.
        </p>
      </>
    ),
  },
  {
    id: "reclamations",
    label: "Réclamations",
    title: "Réclamations et règlement des différends",
    body: (
      <>
        <p>
          Les offres présentées par Hagnéré Code sont actuellement destinées
          aux <strong>clients professionnels</strong>. Une réclamation peut
          d'abord être adressée à Quentin Hagnéré par courriel ou courrier. La
          procédure complète figure sur la page
          <a href="/legal/reclamations"> Réclamations et médiation</a>.
        </p>
        <p>
          En cas d'échec d'un échange amiable entre professionnels, les parties
          peuvent solliciter gratuitement le
          <a href="https://www.economie.gouv.fr/mediateur-des-entreprises" target="_blank" rel="noopener noreferrer"> Médiateur des entreprises</a>.
          Ce service public n'est pas présenté comme un médiateur de la
          consommation auquel HAGNERE CODE aurait adhéré.
        </p>
        <div className="lp-note is-warning">
          Aucun médiateur de la consommation n'est nommé tant qu'aucune offre
          n'est conclue avec un consommateur et qu'aucune convention de médiation
          correspondante n'a été souscrite. Si une offre B2C est ouverte, les
          documents applicables et les coordonnées du médiateur effectivement
          désigné seront publiés avant la conclusion du contrat.
        </div>
        <p>
          Le droit français s'applique sous réserve des règles impératives. Les
          règles de compétence juridictionnelle des CGV ne concernent que les
          relations entre professionnels.
        </p>
      </>
    ),
  },
];
