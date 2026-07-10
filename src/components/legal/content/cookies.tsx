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
    label: "État actuel sur hagnere-code.fr",
    title: "Cookies déposés sur hagnere-code.fr",
    body: (
      <>
        <p>
          <strong>
            À ce jour, le site hagnere-code.fr ne dépose aucun cookie soumis à
            consentement.
          </strong>{" "}
          Aucun outil d&apos;analyse d&apos;audience non exempté (Google Analytics, Meta
          Pixel, etc.) n&apos;est intégré, et aucun pixel publicitaire n&apos;est chargé
          sur le site.
        </p>
        <p>
          Seuls des éléments strictement nécessaires au fonctionnement du site
          peuvent être stockés dans votre navigateur (par exemple, le thème
          clair/sombre choisi, le brouillon du formulaire de cadrage). Ces
          éléments ne nécessitent pas de consentement préalable au sens de
          l&apos;article 82 de la loi Informatique et Libertés.
        </p>
        <p>
          <em>
            Lorsqu&apos;un outil de mesure d&apos;audience ou un service tiers déposant
            des cookies sera ajouté au site, une bannière de consentement sera
            mise en place et la liste exhaustive ci-dessous sera complétée.
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
          stockages côté navigateur utilisés par hagnere-code.fr. Aucun n&apos;est
          soumis à consentement (article 82 LCEN — finalité strictement
          nécessaire au service demandé).
        </p>
        <div style={{ overflowX: "auto", margin: "16px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 14,
              border: "1px solid #e5e5e5",
            }}
          >
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>
                  Nom
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>
                  Type
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>
                  Émetteur
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>
                  Finalité
                </th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>
                  Durée
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>theme</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>localStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>hagnere-code.fr</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Mémorise le thème (clair/sombre) choisi par l&apos;utilisateur.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Persistant (jusqu&apos;à effacement)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>pf:draft:v2</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>localStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>hagnere-code.fr</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Sauvegarde le brouillon du formulaire de description de projet pour éviter sa perte en cas de rafraîchissement.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Persistant (effacé après envoi)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>hc_consent_v1</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>localStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>hagnere-code.fr</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Mémorise votre choix de consentement exprimé via la bannière cookies.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Persistant (jusqu&apos;à effacement)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>pf:opened</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>sessionStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>hagnere-code.fr</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Évite de comptabiliser plusieurs fois l&apos;ouverture du formulaire projet dans la même session (mesure anonyme, sans identifiant).</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Session (effacé à la fermeture de l&apos;onglet)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>pf:converted</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>sessionStorage</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>hagnere-code.fr</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Évite de comptabiliser deux fois l&apos;envoi d&apos;un même brief dans la même session (mesure anonyme, sans identifiant).</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Session (effacé à la fermeture de l&apos;onglet)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Aucun cookie HTTP, aucun pixel de tracking et aucun outil d&apos;analytics
          tiers n&apos;est actuellement déposé.
        </p>
      </>
    ),
  },
  {
    id: "tiers",
    label: "Services tiers",
    title: "Services tiers (ouverts volontairement)",
    body: (
      <p>
        Certains liens peuvent vous diriger vers des services externes, par
        exemple <strong>Calendly</strong> pour réserver un rendez-vous. Ces
        services sont ouverts dans une nouvelle fenêtre via un lien classique
        (pas de widget embarqué côté hagnere-code.fr) — ils peuvent déposer
        leurs propres cookies selon leurs politiques de confidentialité que
        nous vous invitons à consulter directement chez ces éditeurs.
      </p>
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
          Pour toute question relative aux cookies ou à la protection de vos
          données, contactez{" "}
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>.
        </p>
      </>
    ),
  },
];
