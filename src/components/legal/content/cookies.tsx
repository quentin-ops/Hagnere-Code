/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";

export const cookiesSections: LegalSection[] = [
  {
    id: "definition",
    label: "Comprendre",
    title: "Cookies et stockages navigateur",
    body: (
      <>
        <p>
          Un cookie est une information enregistrée ou lue sur votre terminal
          pendant la consultation d'un service en ligne. Des mécanismes voisins,
          comme <code>localStorage</code> et <code>sessionStorage</code>, sont
          soumis aux mêmes principes lorsqu'ils permettent de stocker ou lire une
          information dans votre navigateur.
        </p>
        <p>
          Les opérations strictement nécessaires au service demandé peuvent être
          exemptées de consentement. Les opérations facultatives, notamment de
          mesure d'audience, ne sont activées qu'après un choix positif lorsqu'elles
          sont proposées.
        </p>
      </>
    ),
  },
  {
    id: "etat-actuel",
    label: "État actuel",
    title: "Ce que fait actuellement hagnere-code.ai",
    body: (
      <>
        <div className="lp-note is-info">
          <strong>Aucun cookie publicitaire.</strong> Le code du site ne dépose
          pas de cookie HTTP propriétaire et ne charge ni Google Analytics, ni
          Meta Pixel, ni régie publicitaire.
        </div>
        <p>
          Le site utilise quelques stockages locaux pour conserver votre thème,
          et, uniquement si vous activez le bouton prévu dans le formulaire,
          éviter la perte d'un brouillon de projet dans l'onglet courant. Si une bannière de choix est active, il peut aussi
          mémoriser votre décision. Les événements de mesure internes ne sont pas
          envoyés lorsque la bannière est désactivée et nécessitent un choix
          « analytics » positif lorsqu'elle est affichée.
        </p>
        <p>
          Le calendrier Calendly reste bloqué derrière un écran d'information.
          Aucun composant Calendly n'est chargé avant votre clic explicite. Les
          liens WhatsApp ou vers d'autres services externes ne les activent qu'une
          fois que vous quittez volontairement le site.
        </p>
      </>
    ),
  },
  {
    id: "inventaire",
    label: "Inventaire",
    title: "Stockages utilisés par le site",
    body: (
      <div className="lp-table-wrap">
        <table className="lp-table">
          <thead>
            <tr><th>Nom</th><th>Support</th><th>Finalité</th><th>Durée</th><th>Régime</th></tr>
          </thead>
          <tbody>
            <tr><td><code>theme</code></td><td>localStorage</td><td>Mémoriser le thème clair ou sombre demandé</td><td>Jusqu'à modification ou suppression par l'utilisateur</td><td>Fonctionnel</td></tr>
            <tr><td><code>pf:draft:v3</code></td><td>sessionStorage</td><td>Après activation volontaire du bouton, conserver dans l'onglet le brouillon des seules informations de projet ; nom, courriel, téléphone, SIREN, société, rôle et validation juridique en sont exclus</td><td>24 heures au plus après la dernière sauvegarde, sans dépasser la session de l'onglet ; effacé après envoi, retrait du choix ou remise à zéro</td><td>Fonction expressément demandée par l'utilisateur</td></tr>
            <tr><td><code>hc_consent_v1</code></td><td>localStorage</td><td>Mémoriser la version de la politique et le choix nécessaire/analytics lorsque la bannière est activée</td><td>183 jours</td><td>Preuve du choix</td></tr>
            <tr><td><code>pf:opened</code></td><td>sessionStorage</td><td>Éviter de compter deux fois l'ouverture du formulaire dans un même onglet</td><td>Session</td><td>Analytics facultatif, après choix positif</td></tr>
            <tr><td><code>pf:converted</code></td><td>sessionStorage</td><td>Éviter de compter deux fois une confirmation dans un même onglet</td><td>Session</td><td>Analytics facultatif, après choix positif</td></tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "mesure",
    label: "Mesure facultative",
    title: "Mesure de parcours interne",
    body: (
      <>
        <p>
          Lorsqu'elle est autorisée et techniquement disponible, la mesure interne
          transmet à une route du même domaine un nom d'action, le chemin de la
          page sans paramètres et quelques propriétés primitives liées à l'étape.
          Le navigateur n'ajoute aucun identifiant publicitaire ou identifiant
          persistant au message.
        </p>
        <p>
          Comme toute requête web, l'hébergeur peut traiter l'adresse IP et le
          user-agent dans ses journaux techniques. Le collecteur applicatif n'a
          pas vocation à les ajouter au jeu de données de mesure. Si la bannière
          n'est pas configurée, la mesure reste désactivée plutôt que de partir
          sans choix.
        </p>
      </>
    ),
  },
  {
    id: "calendly",
    label: "Calendly",
    title: "Calendly et services externes",
    body: (
      <>
        <p>
          Sur les pages de contact et de rendez-vous, le widget Calendly n'est
          téléchargé qu'après votre autorisation explicite. À partir de ce clic,
          Calendly peut lire ou déposer ses propres traceurs et recevoir des
          données techniques ; les informations que vous saisissez ensuite sont
          traitées selon sa
          <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer"> politique de confidentialité</a>.
        </p>
        <p>
          L'autorisation n'est pas conservée après rechargement. Vous pouvez
          prendre contact sans Calendly par courriel, téléphone ou formulaire.
          L'ouverture volontaire d'un lien WhatsApp, GitHub ou autre service tiers
          vous place de la même manière dans l'environnement de cet éditeur.
        </p>
      </>
    ),
  },
  {
    id: "choix",
    label: "Gérer mes choix",
    title: "Accepter, refuser ou retirer un choix",
    body: (
      <>
        <p>
          Lorsqu'elle est affichée, la bannière permet d'accepter ou de refuser
          l'analytics facultatif avec la même facilité. L'absence de réponse vaut
          refus : aucun événement facultatif ne doit partir. Vous pouvez rouvrir
          le panneau « Gérer mes cookies » depuis le pied de page et modifier
          votre décision pour l'avenir.
        </p>
        <p>
          Vous pouvez aussi supprimer les données de site depuis les réglages de
          votre navigateur. Cela efface le choix, le thème et tout brouillon de l'onglet.
          Le site reste consultable, mais certaines commodités sont perdues. La
          suppression de données déjà envoyées à HAGNERE CODE relève de la
          <a href="/legal/confidentialite"> politique de confidentialité</a>.
        </p>
      </>
    ),
  },
  {
    id: "mise-a-jour",
    label: "Contact",
    title: "Question ou mise à jour",
    body: (
      <p>
        L'inventaire est actualisé lorsqu'un stockage ou un service tiers change.
        Pour signaler un écart ou poser une question, écrivez à
        <a href="mailto:quentin@hagnere-patrimoine.fr"> quentin@hagnere-patrimoine.fr</a>.
      </p>
    ),
  },
];
