import type { LegalSection } from "../LegalPageLayout";

export const cookiesSections: LegalSection[] = [
  {
    id: "definition",
    label: "Définition",
    title: "Qu'est-ce qu'un cookie ?",
    body: (
      <p>
        Un cookie est un petit fichier enregistré sur votre terminal lors de la
        consultation d&apos;un site. Il peut servir au fonctionnement technique du
        site, à la mesure d&apos;audience, à la personnalisation ou à l&apos;intégration
        de services tiers.
      </p>
    ),
  },
  {
    id: "usage",
    label: "État actuel sur hagnere-code.ai",
    title: "Cookies déposés sur hagnere-code.ai",
    body: (
      <>
        <p>
          <strong>
            À ce jour, hagnere-code.ai ne dépose lui-même aucun cookie de
            mesure d&apos;audience ni de publicité.
          </strong>{" "}
          Aucun outil d&apos;analyse d&apos;audience tiers (Google Analytics, Meta Pixel,
          etc.) n&apos;est intégré, et aucun pixel publicitaire n&apos;est chargé sur le
          site.
        </p>
        <p>
          Les pages <strong>/contact</strong> et <strong>/rendez-vous</strong>{" "}
          proposent le module de prise de rendez-vous <strong>Calendly</strong>.
          Il reste bloqué par défaut : aucun script, iframe ou appel à Calendly
          n&apos;est lancé avant un clic explicite sur « Autoriser et afficher le
          calendrier ». Voir la section « Services tiers » ci-dessous.
        </p>
        <p>
          Seuls des éléments strictement nécessaires au fonctionnement du site
          peuvent être stockés dans votre navigateur (par exemple, le thème
          clair/sombre choisi, le brouillon du formulaire de cadrage). Ces
          éléments ne nécessitent pas de consentement préalable au sens de
          l&apos;article 82 de la loi Informatique et Libertés.
        </p>
        <p>
          Le site transmet à une route du même domaine quelques événements de
          conversion anonymes (par exemple l&apos;ouverture du formulaire ou la
          copie d&apos;une grille). Sont conservés uniquement le nom de l&apos;action, le
          chemin de la page sans paramètres et des propriétés techniques non
          identifiantes. Aucune adresse IP, aucun user-agent et aucun identifiant
          persistant ne sont écrits dans ce jeu de données Cloudflare Analytics
          Engine, conservé trois mois.
        </p>
        <p>
          <em>
            Tout futur service tiers non strictement nécessaire devra rester
            bloqué avant consentement et la présente liste devra être mise à jour.
          </em>
        </p>
      </>
    ),
  },
  {
    id: "tableau",
    label: "Tableau détaillé",
    title: "Liste nominative des stockages",
    body: (
      <>
        <p>
          Conformément aux recommandations CNIL, voici la liste détaillée des
          stockages côté navigateur utilisés par hagnere-code.ai. Aucun n&apos;est
          soumis à consentement (article 82 LCEN — finalité strictement
          nécessaire au service demandé).
        </p>
        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 14,
              border: "1px solid var(--line)",
            }}
          >
            <thead>
              <tr style={{ background: "var(--paper-2)" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                  Nom
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                  Type
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                  Émetteur
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                  Finalité
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                  Durée
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>theme</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>localStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>hagnere-code.ai</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Mémorise le thème (clair/sombre) choisi par l&apos;utilisateur.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Persistant (jusqu&apos;à effacement)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>pf:draft:v2</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>localStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>hagnere-code.ai</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Sauvegarde le brouillon du formulaire de description de projet pour éviter sa perte en cas de rafraîchissement.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Persistant (effacé après envoi)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>hc_consent_v1</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>localStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>hagnere-code.ai</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Mémorise votre choix de consentement exprimé via la bannière cookies.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Persistant (jusqu&apos;à effacement)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>pf:opened</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>sessionStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>hagnere-code.ai</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Évite de comptabiliser plusieurs fois l&apos;ouverture du formulaire projet dans la même session (mesure anonyme, sans identifiant).</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Session (effacé à la fermeture de l&apos;onglet)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>pf:converted</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>sessionStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>hagnere-code.ai</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Évite de comptabiliser deux fois l&apos;envoi d&apos;un même brief dans la même session (mesure anonyme, sans identifiant).</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>Session (effacé à la fermeture de l&apos;onglet)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          En dehors des stockages listés ci-dessus, hagnere-code.ai ne dépose
          lui-même aucun cookie HTTP, aucun pixel de tracking ni aucun outil
          d&apos;analytics tiers. Le module Calendly proposé sur les pages de prise
          de rendez-vous ne peut être chargé qu&apos;après une action explicite
          (voir la section suivante).
        </p>
      </>
    ),
  },
  {
    id: "tiers",
    label: "Services tiers",
    title: "Services tiers : le module Calendly",
    body: (
      <>
        <p>
          Les pages <strong>/contact</strong> et <strong>/rendez-vous</strong>{" "}
          proposent le module de réservation <strong>Calendly</strong>{" "}
          (Calendly, LLC) sous forme de widget embarqué. Le widget est remplacé
          par un écran d&apos;information tant que vous ne cliquez pas sur le bouton
          d&apos;autorisation. Ce clic déclenche alors le chargement depuis les
          serveurs de Calendly, qui peut déposer ses propres cookies. Ceux-ci sont
          régis par la politique de confidentialité de Calendly, que nous vous
          invitons à consulter :{" "}
          <a
            href="https://calendly.com/legal/privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            calendly.com/legal/privacy-notice
          </a>
          .
        </p>
        <p>
          Ces cookies sont émis par Calendly et non par hagnere-code.ai, et
          nous ne les exploitons pas. L&apos;autorisation n&apos;est pas mémorisée : un
          rechargement de la page rebloque le widget. Vous pouvez réserver dans
          un nouvel onglet ou prendre contact sans charger le module, en écrivant à{" "}
          <a href="mailto:quentin@hagnere-patrimoine.fr">
            quentin@hagnere-patrimoine.fr
          </a>
          .
        </p>
        <p>
          Par ailleurs, certains liens du site peuvent vous diriger vers des
          services externes ouverts dans une nouvelle fenêtre — ils peuvent
          déposer leurs propres cookies selon leurs politiques de
          confidentialité que nous vous invitons à consulter directement chez
          ces éditeurs.
        </p>
      </>
    ),
  },
  {
    id: "choix",
    label: "Vos choix",
    title: "Gérer vos choix",
    body: (
      <>
        <p>
          Vous pouvez configurer votre navigateur pour bloquer ou supprimer les
          stockages locaux ci-dessus. Cela peut désactiver certaines
          commodités (mémorisation du thème, sauvegarde du brouillon de
          formulaire) sans empêcher la consultation du site.
        </p>
        <p>
          Pour toute question relative aux cookies ou à{" "}
          <a href="/legal/confidentialite">la protection de vos données</a>,
          contactez{" "}
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>.
        </p>
      </>
    ),
  },
];
