// Section "preuves" et non "témoignages". Hagnéré Code n'a pas encore de client
// externe : afficher des citations, des notes ou des logos serait un mensonge.
// La preuve réelle, vérifiable par n'importe qui, ce sont les quatre produits du
// groupe Hagnéré que nous avons construits ET que nous exploitons en production.

export const testimonialsHtml = `
<!-- PREUVES · produits en ligne, exploités par nous -->
<section class="sr-proofs">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Preuves vérifiables</div>
        <h2>Aucun témoignage sur<br>cette page. <em>Nos produits<br>sont en ligne, ouvrez-les.</em></h2>
      </div>
      <div class="right">
        Nous n'affichons ni citation, ni note, ni logo emprunté : à ce jour, Hagnéré Code n'a pas de client
        externe. Nos quatre réalisations sont les produits du groupe Hagnéré, que nous avons conçus,
        développés, et <b>que nous exploitons nous-mêmes tous les jours</b>. Sur un sujet comme la sécurité
        et le RGPD, c'est une preuve plus solide qu'un avis anonyme : vous pouvez aller la vérifier maintenant.
      </div>
    </div>

    <div class="sr-proofs-grid">

      <!-- 01 : données fiscales de particuliers -->
      <article class="sr-proofs-card reveal">
        <div class="sr-proofs-step">
          <div class="sr-proofs-step-num">01</div>
          <div class="sr-proofs-step-line" aria-hidden="true"></div>
        </div>
        <div class="sr-proofs-body">
          <div class="sr-proofs-tag">EN LIGNE · DONNÉES FISCALES</div>
          <h3>Deux outils qui traitent<br>des données fiscales.</h3>
          <p>
            LMNP.AI et SCI-AI.app sont deux logiciels de comptabilité ouverts au public. Ils manipulent des
            <b>données d'identité, des relevés et des pièces justificatives</b> de particuliers. Les mettre
            en ligne nous a obligés à trancher, pour de vrai :
          </p>
          <ul class="sr-proofs-feats">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Information et recueil du consentement</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Durée de conservation des documents déposés</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Suppression de compte et export des données</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Contrat avec chaque sous-traitant technique</li>
          </ul>
          <a href="https://lmnp.ai" target="_blank" rel="noopener" class="sr-comp-foot-link">
            lmnp.ai
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="https://sci-ai.app" target="_blank" rel="noopener" class="sr-comp-foot-link">
            sci-ai.app
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>

      <!-- 02 : secteur régulé -->
      <article class="sr-proofs-card sr-proofs-card-mid reveal reveal-d-1">
        <div class="sr-proofs-step">
          <div class="sr-proofs-step-num">02</div>
          <div class="sr-proofs-step-line" aria-hidden="true"></div>
        </div>
        <div class="sr-proofs-body">
          <div class="sr-proofs-tag sr-proofs-tag-mid">EN LIGNE · SECTEUR RÉGULÉ</div>
          <h3>Un cabinet régulé et sa<br>plateforme d'investissement.</h3>
          <p>
            Hagnéré Patrimoine est un cabinet de conseil en investissements financiers ; Hagnéré
            Investissement, une plateforme d'investissement immobilier. Nous avons bâti leurs sites et leur
            CRM, où l'on collecte des <b>informations patrimoniales</b>. Ce que cela impose :
          </p>
          <ul class="sr-proofs-feats">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Base légale et mentions au moment de la collecte</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Cloisonnement des accès aux fiches</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Traçabilité des consultations</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Cookies et mesure d'audience assumés</li>
          </ul>
          <a href="https://hagnere-patrimoine.fr" target="_blank" rel="noopener" class="sr-comp-foot-link">
            hagnere-patrimoine.fr
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="https://hagnere-investissement.fr" target="_blank" rel="noopener" class="sr-comp-foot-link">
            hagnere-investissement.fr
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>

      <!-- 03 : nous exploitons ce que nous construisons -->
      <article class="sr-proofs-card sr-proofs-card-end reveal reveal-d-2">
        <div class="sr-proofs-step">
          <div class="sr-proofs-step-num">03</div>
        </div>
        <div class="sr-proofs-body">
          <div class="sr-proofs-tag sr-proofs-tag-end">TOUS LES JOURS · EXPLOITATION</div>
          <h3>Nous vivons avec ce<br>que nous construisons.</h3>
          <p>
            C'est là notre vraie différence, et presque aucune agence ne peut la revendiquer : nous n'avons
            pas livré ces produits pour ensuite refermer le dossier. <b>Nous les exploitons.</b> Quand un
            incident tombe un dimanche soir, il n'y a personne d'autre. Nous portons donc :
          </p>
          <ul class="sr-proofs-feats">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Les correctifs de sécurité et les dépendances</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Les sauvegardes et leur restauration</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>La dette technique que nous créons nous-mêmes</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Les factures d'hébergement et leurs arbitrages</li>
          </ul>
          <a href="/realisations" class="sr-comp-foot-link">
            Voir nos réalisations
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>

    </div>

    <div class="sr-proofs-foot reveal">
      <div class="sr-proofs-foot-l">
        <div class="sr-proofs-foot-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
        <div class="sr-proofs-foot-text">
          <b>Rien à croire sur parole.</b> Ces quatre produits sont accessibles à tous, sans démonstration ni
          intermédiaire. <b>Nous parlerons de nos choix de sécurité et de conformité dès le premier échange</b>,
          sur votre projet et non sur le nôtre.
        </div>
      </div>
      <a href="#contact" class="btn btn-accent">
        Parler de votre conformité
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
`;
