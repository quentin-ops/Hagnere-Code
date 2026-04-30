/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";

export const mentionsLegalesSections: LegalSection[] = [
  {
    id: "editeur",
    label: "Éditeur du site",
    title: "Éditeur du site",
    body: (
      <>
        <p>
          Le présent site <strong>hagnere-code.fr</strong> (ci-après « le Site »)
          est édité par la société <strong>HAGNÉRÉ CODE</strong>, société par
          actions simplifiée (SAS) au capital social variable, immatriculée au
          Registre du Commerce et des Sociétés de Chambéry.
        </p>
        <dl className="lp-facts">
          <dt>Dénomination</dt>
          <dd>HAGNÉRÉ CODE SAS</dd>

          <dt>Forme juridique</dt>
          <dd>Société par actions simplifiée (SAS)</dd>

          <dt>Siège social</dt>
          <dd>7 rue Ernest Filliard, 73000 Chambéry, France</dd>

          <dt>SIREN</dt>
          <dd>993 672 856</dd>

          <dt>SIRET (siège)</dt>
          <dd>993 672 856 00016</dd>

          <dt>RCS</dt>
          <dd>Chambéry 993 672 856</dd>

          <dt>TVA intracommunautaire</dt>
          <dd>FR30 993 672 856</dd>

          <dt>Code NAF / APE</dt>
          <dd>62.01Z — Programmation informatique</dd>

          <dt>Date d'immatriculation</dt>
          <dd>30 septembre 2025</dd>

          <dt>Convention collective</dt>
          <dd>IDCC 2098 — Syntec / bureaux d'études techniques</dd>

          <dt>Téléphone</dt>
          <dd>
            <a href="tel:+33374472018">+33 3 74 47 20 18</a>
          </dd>

          <dt>Courriel</dt>
          <dd>
            <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>
          </dd>
        </dl>
      </>
    ),
  },

  {
    id: "directeur-publication",
    label: "Directeur de la publication",
    title: "Directeur de la publication",
    body: (
      <>
        <p>
          Le directeur de la publication du Site est{" "}
          <strong>Monsieur Quentin Hagnéré</strong>, en sa qualité de président
          de la société HAGNÉRÉ CODE SAS.
        </p>
        <p>
          Toute demande relative au contenu éditorial du Site peut lui être
          adressée par courrier postal au siège social de la société, ou par
          courriel à l'adresse{" "}
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>.
        </p>
      </>
    ),
  },

  {
    id: "hebergeur",
    label: "Hébergeur",
    title: "Hébergeur du site",
    body: (
      <>
        <p>
          Le Site est hébergé par la société{" "}
          <strong>Cloudflare, Inc.</strong>, qui fournit les services
          d'infrastructure et de distribution de contenu (Workers, R2, CDN)
          utilisés par le Site.
        </p>
        <dl className="lp-facts">
          <dt>Hébergeur</dt>
          <dd>Cloudflare, Inc.</dd>

          <dt>Adresse</dt>
          <dd>101 Townsend Street, San Francisco, CA 94107, États-Unis</dd>

          <dt>Site web</dt>
          <dd>
            <a
              href="https://www.cloudflare.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cloudflare.com
            </a>
          </dd>

          <dt>Contact abus</dt>
          <dd>
            <a href="mailto:abuse@cloudflare.com">abuse@cloudflare.com</a>
          </dd>
        </dl>
        <p>
          Les bases de données applicatives et les sauvegardes associées sont
          hébergées en France, chez des prestataires certifiés{" "}
          <strong>OVHcloud</strong> (roubaix.fr) et{" "}
          <strong>Scaleway</strong> (Paris), afin de garantir la localisation
          européenne des données personnelles traitées par nos soins.
        </p>
      </>
    ),
  },

  {
    id: "propriete-intellectuelle",
    label: "Propriété intellectuelle",
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>
          L'ensemble des éléments composant le Site (textes, visuels,
          illustrations, photographies, arborescences, mises en forme, logos,
          marques, nom de domaine, logiciels, bases de données) est la
          propriété exclusive de HAGNÉRÉ CODE SAS ou de ses partenaires, et est
          protégé par les lois françaises et internationales relatives à la
          propriété intellectuelle.
        </p>
        <p>
          Toute représentation, reproduction, modification, publication,
          adaptation ou exploitation de tout ou partie des éléments du Site,
          quel que soit le moyen ou le procédé utilisé, est interdite sans
          l'autorisation écrite préalable de HAGNÉRÉ CODE SAS, sous peine de
          constituer une contrefaçon sanctionnée par les articles L.335-2 et
          suivants du Code de la propriété intellectuelle.
        </p>

        <h3>Réalisations clients</h3>
        <p>
          Les logos, marques et captures d'écran présentés dans la section
          « Réalisations » appartiennent à leurs propriétaires respectifs et
          sont utilisés dans le cadre d'accords commerciaux avec ces derniers.
          Toute exploitation de ces éléments par un tiers est soumise à
          l'autorisation du propriétaire concerné.
        </p>
      </>
    ),
  },

  {
    id: "donnees-personnelles",
    label: "Données personnelles",
    title: "Protection des données personnelles (RGPD)",
    body: (
      <>
        <p>
          HAGNÉRÉ CODE SAS attache une importance particulière au respect de la
          vie privée de ses utilisateurs et à la protection des données à
          caractère personnel, conformément au Règlement Général sur la
          Protection des Données (RGPD — Règlement UE 2016/679) et à la loi
          « Informatique et Libertés » modifiée.
        </p>

        <h3>Responsable du traitement</h3>
        <p>
          Le responsable du traitement des données collectées via le Site est
          HAGNÉRÉ CODE SAS, représentée par son président M. Quentin Hagnéré,
          dont les coordonnées figurent à la section « Éditeur du site ».
        </p>

        <h3>Finalités des traitements</h3>
        <p>Les données collectées sur le Site sont traitées aux fins de :</p>
        <ul>
          <li>
            répondre aux demandes de contact et qualifier les opportunités
            commerciales (formulaire projet, calculateur Excel) ;
          </li>
          <li>
            gérer la relation client et les projets sous contrat (devis,
            facturation, livraison, support) ;
          </li>
          <li>
            améliorer l'expérience de navigation et mesurer l'audience du Site
            via des outils respectueux de la vie privée ;
          </li>
          <li>
            satisfaire aux obligations légales, comptables et fiscales
            applicables à notre activité.
          </li>
        </ul>

        <h3>Bases légales</h3>
        <p>
          Les traitements reposent, selon les cas, sur <strong>votre consentement</strong> (formulaires
          de contact, newsletter), sur <strong>l'exécution d'un contrat</strong> (projets clients), ou
          sur <strong>l'intérêt légitime</strong> (amélioration du Site, sécurité).
        </p>

        <h3>Durées de conservation</h3>
        <ul>
          <li>Contacts commerciaux non aboutis : 3 ans après le dernier échange.</li>
          <li>Clients actifs : durée de la relation + 5 ans (obligations comptables).</li>
          <li>Cookies de mesure : 13 mois maximum.</li>
          <li>Données d'inscription à la newsletter : jusqu'à désabonnement.</li>
        </ul>

        <h3>Vos droits</h3>
        <p>
          Conformément à la réglementation applicable, vous disposez d'un droit
          d'accès, de rectification, d'effacement, de limitation, d'opposition
          et de portabilité de vos données, ainsi que du droit de retirer votre
          consentement à tout moment. Vous pouvez exercer ces droits par
          courriel à{" "}
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>, ou
          par courrier postal à l'adresse du siège social.
        </p>

        <div className="lp-callout">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <div>
            <b>Réclamation auprès de la CNIL.</b> Si vous estimez, après nous
            avoir contactés, que vos droits ne sont pas respectés, vous pouvez
            adresser une réclamation à la Commission Nationale de l'Informatique
            et des Libertés (CNIL), 3 Place de Fontenoy, TSA 80715, 75334 Paris
            Cedex 07 — ou en ligne sur{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>
            .
          </div>
        </div>
      </>
    ),
  },

  {
    id: "calculateur-ia",
    label: "Calculateur IA",
    title: "Calculateur d'estimation IA — sous-traitance et flux de données",
    body: (
      <>
        <p>
          Le Site propose un outil d&apos;estimation de projet intitulé{" "}
          <a href="/demarrer-un-projet">« Démarrer un projet »</a> qui repose sur
          le service <strong>Claude (modèle Opus 4.7)</strong> fourni par la
          société <strong>Anthropic, PBC</strong>. Conformément à l&apos;article 28
          du RGPD, Anthropic agit en qualité de <strong>sous-traitant</strong>{" "}
          de HAGNÉRÉ CODE SAS pour le traitement automatisé de la description
          de projet saisie par l&apos;utilisateur.
        </p>

        <h3>Données transmises à Anthropic</h3>
        <ul>
          <li>
            <strong>La description libre du projet</strong> saisie par
            l&apos;utilisateur dans le formulaire (champ texte de 50 à 4 000
            caractères).
          </li>
          <li>
            <strong>Les réponses structurées</strong> aux questionnaires par
            service (cases cochées, niveaux d&apos;urgence, périmètres
            sélectionnés) — ces données sont anonymes et ne contiennent
            aucune donnée personnelle.
          </li>
          <li>
            <strong>Aucune donnée de contact</strong> (nom, prénom, email,
            entreprise) n&apos;est transmise à Anthropic. Les coordonnées
            facultatives saisies à la dernière étape du calculateur sont
            traitées séparément, uniquement par HAGNÉRÉ CODE SAS, et ne
            transitent jamais par l&apos;API d&apos;Anthropic.
          </li>
        </ul>

        <h3>Localisation et garanties</h3>
        <p>
          Les serveurs d&apos;Anthropic sont situés aux <strong>États-Unis</strong>.
          Anthropic, PBC est certifiée au titre du{" "}
          <strong>EU-US Data Privacy Framework (DPF)</strong> depuis 2024, ce
          qui constitue, au sens des articles 44 et suivants du RGPD, une
          décision d&apos;adéquation valide pour le transfert de données
          personnelles depuis l&apos;Union européenne. La politique de
          confidentialité d&apos;Anthropic est consultable à l&apos;adresse{" "}
          <a
            href="https://www.anthropic.com/legal/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            anthropic.com/legal/privacy
          </a>
          .
        </p>
        <p>
          Conformément aux conditions commerciales d&apos;Anthropic applicables aux
          appels API, <strong>les données transmises ne sont pas utilisées
          pour entraîner les modèles</strong> et sont conservées au maximum 30
          jours pour des raisons de conformité (détection d&apos;usages abusifs).
        </p>

        <h3>Conservation côté HAGNÉRÉ CODE</h3>
        <p>
          La description du projet et l&apos;estimation générée{" "}
          <strong>ne sont pas stockées sur nos serveurs</strong>. Elles
          transitent en flux entre votre navigateur, l&apos;API d&apos;Anthropic et le
          rendu affiché à l&apos;écran, puis sont effacées à la fermeture de
          l&apos;onglet. Seules les coordonnées de contact que vous choisissez de
          nous communiquer sont conservées (3 ans après le dernier échange,
          cf. section « Données personnelles »).
        </p>

        <h3>Vos droits spécifiques au calculateur</h3>
        <ul>
          <li>
            <strong>Utilisation anonyme</strong> : vous pouvez utiliser le
            calculateur sans laisser aucune coordonnée. Le résultat s&apos;affiche
            à l&apos;écran et reste sur votre appareil uniquement.
          </li>
          <li>
            <strong>Droit d&apos;opposition</strong> : vous pouvez à tout moment
            refuser cette sous-traitance et nous contacter directement par les
            canaux classiques (téléphone, email, formulaire de contact) pour
            obtenir un devis manuel.
          </li>
          <li>
            <strong>Droit à l&apos;effacement</strong> : si vous avez fourni vos
            coordonnées et souhaitez en demander la suppression, écrivez-nous
            à{" "}
            <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>{" "}
            (suppression sous 30 jours).
          </li>
        </ul>

        <div className="lp-callout">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <div>
            <b>Caractère indicatif des estimations.</b> Les fourchettes
            tarifaires renvoyées par le calculateur IA sont une simulation
            statistique fondée sur nos barèmes internes et nos projets
            antérieurs. Elles n&apos;engagent en aucun cas HAGNÉRÉ CODE SAS sur un
            chiffrage définitif, qui fait toujours l&apos;objet d&apos;un{" "}
            <strong>Discovery Sprint payant</strong> (1 500 € HT, déduits du
            devis final en cas de signature) débouchant sur un devis nominatif
            ferme.
          </div>
        </div>
      </>
    ),
  },

  {
    id: "cookies",
    label: "Cookies",
    title: "Cookies et traceurs",
    body: (
      <>
        <p>
          Le Site utilise des cookies strictement nécessaires à son bon
          fonctionnement (préférences d'affichage, session, sécurité), qui ne
          requièrent pas votre consentement préalable, ainsi que des cookies
          de mesure d'audience respectueux de la vie privée (statistiques
          agrégées, pas de profilage individuel).
        </p>
        <p>
          Vous pouvez à tout moment paramétrer l'utilisation des cookies via
          les réglages de votre navigateur (Chrome, Safari, Firefox, Edge).
          Les modalités détaillées de gestion des cookies figurent dans notre
          politique dédiée, accessible via la page{" "}
          <a href="/legal/cookies">Gestion des cookies</a>.
        </p>
      </>
    ),
  },

  {
    id: "responsabilite",
    label: "Responsabilité",
    title: "Limitation de responsabilité",
    body: (
      <>
        <p>
          HAGNÉRÉ CODE SAS s'efforce d'assurer au mieux de ses possibilités
          l'exactitude et la mise à jour des informations diffusées sur le
          Site. Néanmoins, la société ne saurait garantir l'exactitude, la
          précision ou l'exhaustivité des informations mises à disposition.
        </p>
        <p>
          En conséquence, la société décline toute responsabilité pour toute
          imprécision, inexactitude ou omission portant sur des informations
          disponibles sur le Site, ainsi que pour tout dommage, direct ou
          indirect, résultant de l'accès à ce dernier.
        </p>
        <p>
          Les simulations présentées (calculateur du coût Excel, fourchettes
          tarifaires, ROI estimé) ont une valeur <strong>purement indicative</strong> et ne
          sauraient en aucun cas engager la société sur un chiffrage définitif,
          qui fait toujours l'objet d'un devis nominatif distinct.
        </p>
      </>
    ),
  },

  {
    id: "liens",
    label: "Liens hypertextes",
    title: "Liens hypertextes",
    body: (
      <>
        <p>
          Le Site peut contenir des liens hypertextes renvoyant vers des sites
          tiers. HAGNÉRÉ CODE SAS n'exerce aucun contrôle sur ces sites et
          décline toute responsabilité quant à leur contenu, à leur politique
          de confidentialité ou à leurs pratiques commerciales.
        </p>
        <p>
          Toute création de lien hypertexte pointant vers une page du Site doit
          faire l'objet d'une autorisation écrite préalable, qui pourra être
          retirée à tout moment sans justification.
        </p>
      </>
    ),
  },

  {
    id: "droit-applicable",
    label: "Droit applicable",
    title: "Droit applicable et juridiction compétente",
    body: (
      <>
        <p>
          Les présentes mentions légales sont régies par le <strong>droit français</strong>.
          Tout litige relatif à leur application, à leur interprétation ou à
          l'utilisation du Site relève de la compétence exclusive des{" "}
          <strong>tribunaux de Chambéry</strong>, sauf disposition d'ordre
          public contraire.
        </p>
        <p>
          Préalablement à toute action contentieuse, les parties s'efforceront
          de trouver une solution amiable. Pour toute contestation relative à
          un contrat conclu par voie électronique, le consommateur peut
          recourir au médiateur de la consommation compétent ou à la plateforme
          européenne de règlement en ligne des litiges disponible à l'adresse{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </>
    ),
  },

  {
    id: "credits",
    label: "Crédits",
    title: "Crédits",
    body: (
      <>
        <p>
          Le Site a été conçu et développé en interne par l'équipe HAGNÉRÉ CODE,
          avec les technologies suivantes :
        </p>
        <ul>
          <li>
            <strong>Next.js</strong> (framework React) et <strong>Tailwind
            CSS v4</strong> pour la partie front-end.
          </li>
          <li>
            <strong>Claude Code</strong> (Anthropic) comme agent IA
            d'assistance au développement, intégré au flux quotidien de
            l'équipe.
          </li>
          <li>
            Typographies <strong>Geist</strong> et <strong>Geist Mono</strong>{" "}
            de Vercel, distribuées via Google Fonts.
          </li>
        </ul>
        <p>
          Les illustrations isométriques, visuels produits et maquettes
          présentés sur le Site sont des créations originales de l'équipe
          HAGNÉRÉ CODE. Les logos clients affichés en section « Réalisations »
          appartiennent à leurs propriétaires respectifs et sont utilisés avec
          leur autorisation.
        </p>
      </>
    ),
  },
];
