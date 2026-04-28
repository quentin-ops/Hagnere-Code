import type { LegalSection } from "../LegalPageLayout";

export const accessibiliteSections: LegalSection[] = [
  {
    id: "engagement",
    label: "Engagement",
    title: "Engagement d'accessibilité",
    body: (
      <>
        <p>
          HAGNÉRÉ CODE SAS s&apos;efforce de rendre le site hagnere-code.fr
          accessible au plus grand nombre, conformément aux principes des
          référentiels <strong>RGAA 4.1</strong> (Référentiel général
          d&apos;amélioration de l&apos;accessibilité) et{" "}
          <strong>WCAG 2.1 AA</strong>.
        </p>
        <p>
          La présente déclaration s&apos;applique au site
          <strong> hagnere-code.fr </strong>
          (toutes les pages publiques listées dans le sitemap).
        </p>
        <p>
          <em>
            Note : HAGNÉRÉ CODE SAS n&apos;est pas légalement tenue de
            publier une déclaration d&apos;accessibilité (la société ne
            relève pas du périmètre de l&apos;article 47 de la loi n°2005-102
            ni du décret n°2019-768). Cette déclaration est volontaire et
            traduit une démarche de qualité plutôt qu&apos;une obligation
            réglementaire.
          </em>
        </p>
      </>
    ),
  },
  {
    id: "etat",
    label: "État de conformité",
    title: "État de conformité",
    body: (
      <>
        <p>
          Le site hagnere-code.fr est en{" "}
          <strong>conformité partielle</strong> avec le RGAA 4.1.{" "}
          <strong>Aucun audit indépendant n&apos;a encore été réalisé</strong>{" "}
          à la date de publication ; un audit externe est planifié dans les
          12 mois suivant la mise en ligne, et les résultats seront publiés
          sur cette page.
        </p>
        <p>
          Dans l&apos;intervalle, les bonnes pratiques suivantes ont été
          appliquées en interne :
        </p>
        <ul>
          <li>
            structure HTML sémantique (un seul <code>&lt;h1&gt;</code> par
            page, hiérarchie de titres respectée) ;
          </li>
          <li>
            attribut <code>lang=&quot;fr&quot;</code> sur l&apos;ensemble du
            site ;
          </li>
          <li>
            lien d&apos;évitement &quot;Aller au contenu principal&quot; en
            début de page ;
          </li>
          <li>
            contrastes de couleurs vérifiés sur les composants principaux ;
          </li>
          <li>
            attributs <code>alt</code> sur les images informatives,{" "}
            <code>aria-hidden</code> sur les icônes décoratives ;
          </li>
          <li>
            navigation clavier fonctionnelle sur les éléments interactifs ;
          </li>
          <li>
            formulaires avec labels associés et messages d&apos;erreur
            descriptifs.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "non-conformites",
    label: "Non-conformités connues",
    title: "Non-conformités et limitations connues",
    body: (
      <>
        <p>
          Sans audit externe, certaines limitations sont connues et seront
          traitées en priorité :
        </p>
        <ul>
          <li>
            certains composants animés (carrousels, sections révélées au
            scroll) n&apos;offrent pas encore de pause ou de désactivation
            via <code>prefers-reduced-motion</code> ;
          </li>
          <li>
            quelques visuels SVG décoratifs n&apos;ont pas été retestés au
            lecteur d&apos;écran ;
          </li>
          <li>
            la dictée vocale du formulaire <em>/demarrer-un-projet</em> ne
            propose pas encore d&apos;équivalent saisie clavier explicite
            (la saisie clavier reste disponible mais l&apos;équivalence
            n&apos;est pas annoncée aux technologies d&apos;assistance) ;
          </li>
          <li>
            le tableau de tarifs (<em>/tarifs</em>) est dense et son
            comportement responsive sur mobile mériterait une refonte
            accessibilité.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "alternatives",
    label: "Alternatives",
    title: "Alternatives en cas de difficulté d'accès",
    body: (
      <p>
        Si une fonctionnalité du site vous est inaccessible, vous pouvez à
        tout moment nous contacter directement par email à{" "}
        <a href="mailto:hello@hagnere-code.fr">hello@hagnere-code.fr</a> ou
        par téléphone au{" "}
        <a href="tel:+33374472018">+33 3 74 47 20 18</a>. Nous nous
        engageons à fournir une alternative équivalente (PDF accessible,
        échange en visio, transcription textuelle d&apos;une vidéo, etc.)
        sous 5 jours ouvrés.
      </p>
    ),
  },
  {
    id: "amelioration",
    label: "Amélioration",
    title: "Démarche d'amélioration continue",
    body: (
      <>
        <p>Notre plan d&apos;action sur 12 mois :</p>
        <ul>
          <li>audit RGAA externe par un prestataire spécialisé ;</li>
          <li>
            corrections priorisées par sévérité (bloquante &gt; majeure &gt;
            mineure) ;
          </li>
          <li>
            intégration de tests d&apos;accessibilité automatisés
            (Lighthouse + axe-core) dans la chaîne CI ;
          </li>
          <li>
            formation interne des développeurs aux critères RGAA / WCAG ;
          </li>
          <li>
            re-publication de cette déclaration avec le rapport d&apos;audit
            et le taux de conformité.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "voies-recours",
    label: "Voies de recours",
    title: "Défenseur des droits — voies de recours",
    body: (
      <>
        <p>
          Si vous constatez un défaut d&apos;accessibilité vous empêchant
          d&apos;accéder à un contenu ou une fonctionnalité du site, et si
          vous estimez ne pas avoir obtenu de réponse satisfaisante, vous
          pouvez saisir le Défenseur des droits :
        </p>
        <ul>
          <li>
            formulaire en ligne :{" "}
            <a href="https://formulaire.defenseurdesdroits.fr/" target="_blank" rel="noopener noreferrer">
              formulaire.defenseurdesdroits.fr
            </a>
          </li>
          <li>
            par courrier : Défenseur des droits — Libre réponse 71120 — 75342
            Paris CEDEX 07.
          </li>
        </ul>
      </>
    ),
  },
];
