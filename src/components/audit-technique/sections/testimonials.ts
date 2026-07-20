// Section "preuves" — Hagnéré Code n'a aucun client externe : pas de témoignage,
// pas de note, pas de référence anonymisée. Les quatre liens publics permettent
// seulement de vérifier la disponibilité des pages et leurs fonctions visibles.
// Classes réutilisées telles quelles depuis sections.css (aucune classe inventée).

export const testimonialsHtml = `
<!-- PREUVES AUDIT · quatre pages publiques consultables -->
<section class="at-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Preuves publiques · aucun témoignage</div>
        <h2>Nous n'affichons aucun avis client.<br>Nous affichons quatre pages<br>à vérifier directement.</h2>
      </div>
      <div class="right">
        Hagnéré Code n'a pas encore de client externe. Publier des témoignages reviendrait donc à les inventer.
        Les adresses ci-dessous permettent de vérifier <b>la disponibilité des pages et les fonctions
        qui y sont présentées</b>. Elles ne prouvent ni conception, ni exploitation, ni sécurité, ni résultat d'audit.
      </div>
    </div>

    <div class="at-testi-grid">
      <!-- PREUVE 01 · LMNP.AI -->
      <article class="at-testi-card reveal">
        <div class="at-testi-role">OFFRE FISCALE LMNP / LMP · PAGE PUBLIQUE</div>
        <div class="at-testi-name">LMNP.AI</div>
        <p class="at-testi-quote">
          La page présente une offre de comptabilité fiscale et certaines fonctions. Le lien permet de
          les consulter, <b>sans prouver le moteur de calcul, les sauvegardes, les corrections,
          l'exploitation quotidienne ou l'existence d'un audit interne</b>.
        </p>
        <div class="at-testi-meta">
          <div class="at-testi-role">
            Pour votre audit, ces sujets doivent être prouvés séparément&nbsp;: <b>règles métier, traçabilité,
            jeux de tests, changements réglementaires et responsabilités</b>.
          </div>
        </div>
        <a class="at-testi-casestudy" href="https://lmnp.ai" target="_blank" rel="noopener noreferrer">
          Ouvrir lmnp.ai
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
      </article>

      <!-- PREUVE 02 · SCI-AI.app -->
      <article class="at-testi-card reveal reveal-d-1">
        <div class="at-testi-role">OFFRE COMPTABLE SCI (IR &amp; IS) · PAGE PUBLIQUE</div>
        <div class="at-testi-name">SCI-AI.app</div>
        <p class="at-testi-quote">
          La page présente les régimes fiscaux couverts et des fonctions comptables. Elle ne permet pas de
          vérifier <b>la base de données, les exports, les migrations, l'infrastructure, les incidents
          ou la tenue du service dans la durée</b>.
        </p>
        <div class="at-testi-meta">
          <div class="at-testi-role">
            Pour votre audit, ces sujets doivent être documentés&nbsp;: <b>schéma de données, coûts tiers,
            migrations, sauvegarde, restauration et protocole de test</b>.
          </div>
        </div>
        <a class="at-testi-casestudy" href="https://sci-ai.app" target="_blank" rel="noopener noreferrer">
          Ouvrir sci-ai.app
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
      </article>

      <!-- PREUVE 03 · Hagnéré Patrimoine & Hagnéré Investissement -->
      <article class="at-testi-card reveal reveal-d-2">
        <div class="at-testi-role">SITE ÉDITORIAL ET PLATEFORME · PAGES PUBLIQUES</div>
        <div class="at-testi-name">Hagnéré Patrimoine &amp; Hagnéré Investissement</div>
        <p class="at-testi-quote">
          Les sites publient des contenus, des offres et des formulaires. On peut observer ces interfaces,
          sans en déduire <b>le CRM, les données traitées, les dépendances internes, la sécurité,
          l'exploitation ou le coût réel des choix techniques</b>.
        </p>
        <div class="at-testi-meta">
          <div class="at-testi-role">
            Pour votre audit, ces sujets demandent des preuves distinctes&nbsp;: <b>mesures de performance,
            données personnelles, dépendances, accès et points de rupture</b>.
          </div>
        </div>
        <a class="at-testi-casestudy" href="https://hagnere-patrimoine.fr" target="_blank" rel="noopener noreferrer">
          Ouvrir hagnere-patrimoine.fr
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
        <a class="at-testi-casestudy" href="https://hagnere-investissement.fr" target="_blank" rel="noopener noreferrer">
          Ouvrir hagnere-investissement.fr
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
      </article>
    </div>

    <p class="at-testi-foot reveal">
      Ouvrez les quatre adresses pour vérifier uniquement les pages et fonctions visibles. Un audit repose
      ensuite sur l'accès au code, aux configurations, aux journaux et aux documents autorisés. Notre objectif
      est de répondre le prochain jour ouvré, sans délai garanti.
    </p>
  </div>
</section>
`;
