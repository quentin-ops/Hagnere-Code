/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";

export const accessibiliteSections: LegalSection[] = [
  {
    id: "demarche",
    label: "Démarche",
    title: "Une démarche d'amélioration continue",
    body: (
      <>
        <p>
          HAGNERE CODE souhaite rendre <strong>hagnere-code.ai</strong>
          utilisable par le plus grand nombre, quels que soient le matériel, le
          logiciel, la connexion ou les capacités de la personne. Le RGAA et les
          WCAG servent de référentiel de travail pour la conception et les
          corrections.
        </p>
        <p>
          Cette page décrit honnêtement l'état connu du site. Elle ne vaut pas
          attestation de conformité et n'affirme pas qu'un audit réglementaire a
          été réalisé.
        </p>
      </>
    ),
  },
  {
    id: "etat",
    label: "État de conformité",
    title: "État de conformité : non évalué",
    body: (
      <div className="lp-note is-warning">
        <strong>Le niveau de conformité n'est pas encore évalué.</strong> Aucun
        audit RGAA complet, réalisé sur un échantillon représentatif selon la
        méthodologie officielle, n'a été achevé à la date de mise à jour. Il serait
        donc inexact de déclarer le site conforme, partiellement conforme ou de
        publier un pourcentage.
      </div>
    ),
  },
  {
    id: "mesures",
    label: "Mesures intégrées",
    title: "Mesures déjà intégrées à la conception",
    body: (
      <>
        <p>Le site met notamment en œuvre :</p>
        <ul>
          <li>une structure HTML sémantique et des titres hiérarchisés ;</li>
          <li>des liens et contrôles utilisables au clavier sur les parcours principaux ;</li>
          <li>des styles de focus visibles et la restitution du focus après la fermeture des menus ;</li>
          <li>des libellés de formulaire, messages d'erreur et zones de statut ;</li>
          <li>une mise en page responsive testée sur plusieurs largeurs ;</li>
          <li>la prise en compte de la préférence de réduction des animations pour plusieurs effets ;</li>
          <li>des textes alternatifs ou un marquage décoratif sur les images et icônes lorsque cela est prévu par leur usage.</li>
        </ul>
        <p>
          Ces mesures améliorent l'usage mais ne remplacent pas un audit sur les
          106 critères du RGAA ni des tests avec technologies d'assistance.
        </p>
      </>
    ),
  },
  {
    id: "limites",
    label: "Limites connues",
    title: "Points restant à vérifier",
    body: (
      <>
        <p>Faute d'audit complet, des difficultés peuvent subsister, notamment :</p>
        <ul>
          <li>dans les tableaux très larges, calculateurs et formulaires à plusieurs étapes ;</li>
          <li>dans certains documents PDF ou fichiers bureautiques téléchargeables ;</li>
          <li>dans le rendu de contenus riches avec un lecteur d'écran ou un fort agrandissement ;</li>
          <li>après le chargement volontaire de services externes, notamment Calendly, dont l'interface dépend de son éditeur.</li>
        </ul>
        <p>
          Cette liste décrit des zones de vigilance et non un inventaire exhaustif
          de non-conformités. Tout problème reproductible signalé permet de la
          préciser et de prioriser une correction.
        </p>
      </>
    ),
  },
  {
    id: "assistance",
    label: "Assistance",
    title: "Demander une information dans un format accessible",
    body: (
      <>
        <p>
          Si un contenu, un formulaire ou un document vous est inaccessible,
          contactez Quentin Hagnéré en indiquant l'URL, l'action souhaitée, votre
          matériel ou technologie d'assistance si vous acceptez de le préciser,
          et le format qui vous conviendrait.
        </p>
        <dl className="lp-facts">
          <dt>Courriel</dt>
          <dd><a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a></dd>
          <dt>Téléphone</dt>
          <dd><a href="tel:+33374472018">+33 3 74 47 20 18</a></dd>
          <dt>Courrier</dt>
          <dd>82 impasse de Bellevue, 73000 Bassens, France</dd>
        </dl>
        <p>
          La demande est examinée au regard de son urgence et de sa complexité.
          HAGNERE CODE recherchera une alternative raisonnable sans promettre un
          délai uniforme qui ne pourrait pas être garanti pour tous les formats.
        </p>
      </>
    ),
  },
  {
    id: "signalement",
    label: "Signaler un problème",
    title: "Retour d'information et recours",
    body: (
      <>
        <p>
          Un signalement doit idéalement préciser la page, le contrôle ou le
          document concerné, le navigateur, la technologie d'assistance et le
          résultat attendu. Aucune information de santé n'est nécessaire pour
          demander une correction.
        </p>
        <p>
          En l'absence de solution satisfaisante, vous pouvez vous rapprocher du
          <a href="https://www.defenseurdesdroits.fr" target="_blank" rel="noopener noreferrer"> Défenseur des droits</a>
          pour les situations relevant de ses compétences. Cette voie ne vous
          prive d'aucun autre recours prévu par la loi.
        </p>
      </>
    ),
  },
  {
    id: "evolution",
    label: "Évolution",
    title: "Mise à jour de cette déclaration",
    body: (
      <p>
        La déclaration est révisée après une évolution substantielle, un audit ou
        l'identification d'un nouveau problème. Une future déclaration de
        conformité indiquera la méthode, l'échantillon, la date et le résultat de
        l'audit plutôt qu'un engagement anticipé non vérifiable.
      </p>
    ),
  },
];
