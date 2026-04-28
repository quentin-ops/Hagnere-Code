import type { LegalSection } from "../LegalPageLayout";

export const confidentialiteSections: LegalSection[] = [
  {
    id: "responsable",
    label: "Responsable",
    title: "Responsable du traitement",
    body: (
      <>
        <p>
          Les données personnelles collectées via le site hagnere-code.fr sont
          traitées par <strong>HAGNÉRÉ CODE SAS</strong>, 7 rue Ernest Filliard,
          73000 Chambéry, France. Pour toute question, vous pouvez écrire à{" "}
          <a href="mailto:hello@hagnere-code.fr">hello@hagnere-code.fr</a>.
        </p>
        <p>
          <strong>Délégué à la protection des données (DPO).</strong>{" "}
          HAGNÉRÉ CODE SAS n&apos;est pas tenue par l&apos;article 37 du RGPD de
          désigner un DPO (la société compte moins de 250 salariés, ne traite
          pas de données sensibles à grande échelle et n&apos;effectue pas de
          suivi régulier et systématique des personnes à grande échelle). Les
          demandes RGPD et toute question relative à la protection des données
          sont traitées directement par le président de HAGNÉRÉ CODE SAS,
          joignable à{" "}
          <a href="mailto:hello@hagnere-code.fr">hello@hagnere-code.fr</a>.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    label: "Données traitées",
    title: "Données personnelles traitées",
    body: (
      <>
        <p>Nous pouvons traiter les catégories de données suivantes :</p>
        <ul>
          <li>
            <strong>Identité et coordonnées professionnelles</strong> : nom,
            prénom, email, téléphone, fonction, société, SIREN.
          </li>
          <li>
            <strong>Informations transmises dans les formulaires</strong> :
            description du projet, contraintes, budget, échéance, contexte
            métier, contenu volontairement partagé.
          </li>
          <li>
            <strong>Captures vocales (optionnel)</strong> : si vous utilisez la
            dictée vocale du formulaire <a href="/demarrer-un-projet">/demarrer-un-projet</a>,
            l&apos;audio enregistré est transmis à notre prestataire de
            transcription Groq pour conversion en texte (cf. section{" "}
            <a href="#sous-traitants">Sous-traitants</a>). L&apos;enregistrement
            audio brut n&apos;est pas conservé après la transcription.
          </li>
          <li>
            <strong>Données relatives à un projet, devis ou relation client</strong>{" "}
            : échanges contractuels, factures, livrables.
          </li>
          <li>
            <strong>Données techniques</strong> nécessaires à la sécurité et
            au fonctionnement du site : adresse IP, user-agent, logs de
            sécurité, données de rate-limiting.
          </li>
        </ul>
        <p>
          Aucune donnée sensible au sens de l&apos;article 9 du RGPD (santé,
          opinions politiques, religion, orientation sexuelle, biométrie,
          etc.) n&apos;est collectée par le site.
        </p>
      </>
    ),
  },
  {
    id: "finalites",
    label: "Finalités",
    title: "Finalités et bases légales",
    body: (
      <>
        <p>
          Les données sont utilisées pour les finalités suivantes, chacune
          reposant sur la base légale précisée :
        </p>
        <ul>
          <li>
            <strong>Répondre aux demandes de contact et qualifier les projets</strong>{" "}
            — base légale : exécution de mesures précontractuelles à votre
            demande (article 6.1.b RGPD) et consentement (article 6.1.a) pour
            les champs facultatifs.
          </li>
          <li>
            <strong>Préparer des devis, contrats et propositions commerciales</strong>{" "}
            — base légale : exécution de mesures précontractuelles (article 6.1.b).
          </li>
          <li>
            <strong>Exécuter les prestations confiées par les clients</strong>{" "}
            — base légale : exécution du contrat (article 6.1.b).
          </li>
          <li>
            <strong>Assurer la sécurité, la maintenance et l&apos;amélioration du site</strong>{" "}
            — base légale : intérêt légitime (article 6.1.f), tel que la
            prévention des abus, du spam et des attaques.
          </li>
          <li>
            <strong>Respecter nos obligations légales, comptables et fiscales</strong>{" "}
            — base légale : obligation légale (article 6.1.c).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ia",
    label: "Usage de l'IA",
    title: "Usage de l'intelligence artificielle (transparence AI Act)",
    body: (
      <>
        <p>
          Conformément à l&apos;esprit du règlement européen sur l&apos;IA
          (AI Act, règlement (UE) 2024/1689) et au principe de transparence
          posé par les articles 13 et 14 du RGPD, HAGNÉRÉ CODE SAS vous
          informe explicitement des traitements assistés par une intelligence
          artificielle sur ce site.
        </p>
        <h3>Traitements concernés</h3>
        <ul>
          <li>
            <strong>Estimation de projet</strong>{" "}
            (<a href="/demarrer-un-projet">/demarrer-un-projet</a>) : la
            description de projet que vous saisissez est analysée par le
            modèle Claude (Opus 4.7) édité par Anthropic, PBC, afin de
            produire une fourchette budgétaire et un calendrier indicatifs.
            Cette estimation reste un <strong>outil d&apos;aide au cadrage</strong>{" "}
            — elle n&apos;a aucune valeur contractuelle et toute proposition
            commerciale finale est validée par un humain (associé HAGNÉRÉ CODE).
          </li>
          <li>
            <strong>Transcription audio</strong> : si vous utilisez la dictée
            vocale, l&apos;audio est transmis au modèle Whisper (large-v3)
            opéré par Groq, Inc. pour conversion automatique en texte. Le
            texte transcrit est ensuite traité comme du texte saisi
            classiquement.
          </li>
          <li>
            <strong>Production interne</strong> : nos équipes utilisent
            Claude Code (Anthropic) comme assistant de génération de code et
            de documentation. Aucune donnée client n&apos;est utilisée pour
            entraîner ces modèles (voir clauses <a href="/legal/mentions">
            mentions légales</a>).
          </li>
        </ul>
        <h3>Décisions automatisées</h3>
        <p>
          Les estimations IA produites par le site <strong>ne constituent pas
          des décisions automatisées au sens de l&apos;article 22 du RGPD</strong>{" "}
          : elles n&apos;entraînent aucune conséquence juridique ni effet
          significatif vous concernant. Aucun refus, score, classement ou
          décision contraignante n&apos;est pris par un algorithme à votre
          égard sur ce site. Tout devis, refus ou recommandation finale fait
          l&apos;objet d&apos;une décision humaine.
        </p>
        <h3>Vos droits spécifiques IA</h3>
        <p>
          Vous pouvez à tout moment :
        </p>
        <ul>
          <li>
            demander à ce que votre brief soit étudié uniquement par un
            humain (sans passage par l&apos;IA d&apos;estimation) — il suffit
            de nous écrire à{" "}
            <a href="mailto:hello@hagnere-code.fr">hello@hagnere-code.fr</a>{" "}
            avant ou pendant la soumission ;
          </li>
          <li>
            demander la suppression de la session IA stockée (estimation et
            brief) ;
          </li>
          <li>
            connaître les fournisseurs et catégories de modèles utilisés —
            cf. ci-dessus.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "decisions-automatisees",
    label: "Décisions automatisées",
    title: "Décisions individuelles automatisées (article 22 RGPD)",
    body: (
      <p>
        Le site n&apos;effectue <strong>aucune décision individuelle
        automatisée</strong> produisant des effets juridiques ou affectant
        de manière significative la personne concernée. Les estimations
        produites par les outils IA sont des fourchettes indicatives sans
        valeur contractuelle, et les éventuels refus de mission, propositions
        commerciales ou recommandations sont systématiquement validés par un
        associé humain de HAGNÉRÉ CODE SAS avant communication.
      </p>
    ),
  },
  {
    id: "sous-traitants",
    label: "Sous-traitants",
    title: "Destinataires et sous-traitants",
    body: (
      <>
        <p>
          Les données sont accessibles uniquement aux personnes habilitées au
          sein de HAGNÉRÉ CODE SAS et, lorsque nécessaire, aux sous-traitants
          listés ci-dessous. Tous agissent sur instructions documentées de
          HAGNÉRÉ CODE et dans le cadre d&apos;un accord de sous-traitance
          conforme à l&apos;article 28 du RGPD.
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
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Sous-traitant</th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Finalité</th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Localisation</th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Encadrement transferts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Neon (Neon Inc.)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Hébergement de la base PostgreSQL applicative.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Région UE (Frankfurt)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Aucun transfert hors UE par défaut</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Cloudflare, Inc.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Hébergement Workers + CDN + protection DDoS.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Edge mondial (UE prioritaire)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>DPF + clauses contractuelles types (UE → US)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Resend (Resend Inc.)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Envoi des emails transactionnels (confirmation, notification).</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>États-Unis</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>DPF + SCC. Conservation 30 j.</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Anthropic, PBC</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Modèle Claude (Opus 4.7) pour estimation projet.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>États-Unis</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>DPF + SCC. <strong>Pas d&apos;entraînement</strong> (Anthropic Commercial Terms). Conservation 30 j max.</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Groq, Inc.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Transcription audio Whisper large-v3.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>États-Unis</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>SCC. Audio non conservé, transcription en temps réel.</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Calendly, LLC</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Prise de rendez-vous (lien externe ouvert volontairement).</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>États-Unis</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>DPF + SCC. Politique propre Calendly.</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>API Recherche Entreprises (DINUM)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Vérification SIREN entreprises lors du formulaire.</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>France (service public)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Aucun transfert hors UE.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Toute évolution de cette liste fait l&apos;objet d&apos;une mise à
          jour de cette page. Les clients sous contrat de prestation reçoivent
          en outre, dans leur DPA, la liste à jour des sous-traitants
          ultérieurs et peuvent s&apos;y opposer pour motifs légitimes
          (article 28.2 RGPD).
        </p>
      </>
    ),
  },
  {
    id: "transferts",
    label: "Transferts hors UE",
    title: "Transferts de données hors Union européenne",
    body: (
      <>
        <p>
          Certains des sous-traitants listés ci-dessus sont établis aux
          États-Unis. Ces transferts sont encadrés par :
        </p>
        <ul>
          <li>
            l&apos;adhésion du sous-traitant au <strong>EU-US Data Privacy
            Framework</strong> (DPF) lorsque celle-ci est en vigueur et
            valide ;
          </li>
          <li>
            les <strong>clauses contractuelles types</strong> (SCC) adoptées
            par la Commission européenne (décision 2021/914), intégrées
            contractuellement avec chaque sous-traitant ;
          </li>
          <li>
            des engagements complémentaires (chiffrement en transit,
            contrôle d&apos;accès, durée de conservation limitée, interdiction
            d&apos;entraînement de modèles sur vos données pour les
            fournisseurs IA).
          </li>
        </ul>
        <p>
          Vous pouvez obtenir une copie des garanties applicables sur simple
          demande à <a href="mailto:hello@hagnere-code.fr">hello@hagnere-code.fr</a>.
        </p>
      </>
    ),
  },
  {
    id: "conservation",
    label: "Conservation",
    title: "Durées de conservation",
    body: (
      <>
        <p>
          Conformément aux recommandations CNIL, les données ne sont
          conservées que le temps strictement nécessaire aux finalités. Les
          durées appliquées sont les suivantes :
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
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Catégorie</th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Durée active</th>
                <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Archivage légal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Prospects et briefs sans suite</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>3 ans à compter du dernier contact</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Clients (relation contractuelle)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Durée de la relation + 3 ans</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>10 ans pour les pièces comptables</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Factures et pièces comptables</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>10 ans (Code de commerce art. L123-22)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Logs serveur et sécurité</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>12 mois maximum</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Données IA (briefs + estimations)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>3 ans (alignée sur prospects), suppressible sur demande</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Audio brut (dictée vocale)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Non conservé (transcription en temps réel)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Stockages côté navigateur (localStorage)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Persistant côté utilisateur, effaçable à tout moment</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>—</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>Eventuel consentement cookies (lorsque applicable)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>13 mois maximum (recommandation CNIL)</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e5e5e5" }}>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "droits",
    label: "Vos droits",
    title: "Vos droits",
    body: (
      <>
        <p>
          Conformément aux articles 15 à 22 du RGPD, vous disposez des droits
          suivants :
        </p>
        <ul>
          <li>
            <strong>Droit d&apos;accès</strong> : obtenir une copie des
            données vous concernant.
          </li>
          <li>
            <strong>Droit de rectification</strong> : faire corriger des
            données inexactes.
          </li>
          <li>
            <strong>Droit à l&apos;effacement</strong> (« droit à
            l&apos;oubli ») : faire supprimer vos données, sous réserve des
            obligations légales de conservation.
          </li>
          <li>
            <strong>Droit à la limitation</strong> du traitement.
          </li>
          <li>
            <strong>Droit d&apos;opposition</strong> aux traitements fondés
            sur l&apos;intérêt légitime.
          </li>
          <li>
            <strong>Droit à la portabilité</strong> de vos données dans un
            format structuré.
          </li>
          <li>
            <strong>Droit de retirer votre consentement</strong> à tout
            moment, sans que cela n&apos;affecte la licéité des traitements
            antérieurs.
          </li>
          <li>
            <strong>Droit de définir des directives post-mortem</strong>{" "}
            relatives à la conservation, à l&apos;effacement et à la
            communication de vos données après votre décès.
          </li>
        </ul>
        <p>
          Pour exercer vos droits, contactez{" "}
          <a href="mailto:hello@hagnere-code.fr">hello@hagnere-code.fr</a>.
          Nous répondons sous un mois (article 12.3 RGPD), prolongeable de
          deux mois en cas de demande complexe. Vous pouvez aussi adresser
          une réclamation à la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">CNIL</a> si
          vous estimez que vos droits ne sont pas respectés.
        </p>
      </>
    ),
  },
  {
    id: "incidents",
    label: "Incidents de sécurité",
    title: "Notification d'incident de sécurité",
    body: (
      <p>
        En cas de violation de données à caractère personnel susceptible
        d&apos;engendrer un risque pour vos droits et libertés, HAGNÉRÉ CODE
        SAS notifie l&apos;incident à la CNIL dans les 72 heures (article 33
        RGPD) et, lorsque le risque est élevé, communique l&apos;incident
        aux personnes concernées dans les meilleurs délais (article 34 RGPD).
        Une procédure interne documentée est en place.
      </p>
    ),
  },
];
