// Section "preuves" plutôt que témoignages anonymes (qui sont peu crédibles
// avec des `[TODO]` visibles ou des avatars génériques). Approche : on raconte
// COMMENT on prouve les résultats, pas de placeholders qui sentent le faux.

export const testimonialsHtml = `
<!-- PREUVES · process de références concrètes -->
<section class="sr-proofs">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Preuves & références</div>
        <h2>On ne met pas de faux<br>témoignages. <em>On vous met<br>en relation directe.</em></h2>
      </div>
      <div class="right">
        Beaucoup de pages "Sécurité &amp; RGPD" affichent des quotes anonymes ou des chiffres sans source.
        Pas nous. <b>Notre process de référence</b> en 3 étapes : NDA mutuel, accès au case study chiffré,
        appel direct avec l'ancien client. Pas de témoignage 5 étoiles fabriqué.
      </div>
    </div>

    <div class="sr-proofs-grid">

      <!-- Étape 01 : NDA -->
      <article class="sr-proofs-card reveal">
        <div class="sr-proofs-step">
          <div class="sr-proofs-step-num">01</div>
          <div class="sr-proofs-step-line" aria-hidden="true"></div>
        </div>
        <div class="sr-proofs-body">
          <div class="sr-proofs-tag">SOUS NDA · J+1</div>
          <h3>NDA mutuel signé.</h3>
          <p>
            Sous NDA mutuel (que vous pouvez nous proposer ou qu'on vous fournit en 24 h), on vous transmet
            <b>3 case studies anonymisés détaillés</b> :
          </p>
          <ul class="sr-proofs-feats">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Périmètre &amp; secteur du client</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Délais réels (devis → livraison)</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Findings d'audit + remédiations</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Coût total &amp; ce qui a été débloqué</li>
          </ul>
        </div>
      </article>

      <!-- Étape 02 : appel direct -->
      <article class="sr-proofs-card sr-proofs-card-mid reveal reveal-d-1">
        <div class="sr-proofs-step">
          <div class="sr-proofs-step-num">02</div>
          <div class="sr-proofs-step-line" aria-hidden="true"></div>
        </div>
        <div class="sr-proofs-body">
          <div class="sr-proofs-tag sr-proofs-tag-mid">APPEL CLIENT · J+5</div>
          <h3>Appel direct avec un<br>ancien client.</h3>
          <p>
            On vous met en relation avec <b>un ou deux anciens clients</b> dans votre vertical (SaaS B2B,
            DTC, scale-up, ETI). Sans nous au milieu. Vous leur posez les questions qui fâchent :
          </p>
          <ul class="sr-proofs-feats">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Comment ils sont vraiment ?</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Délais tenus ou pas ?</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Qualité des PR remédiées ?</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Recommanderaient ou pas ?</li>
          </ul>
        </div>
      </article>

      <!-- Étape 03 : code -->
      <article class="sr-proofs-card sr-proofs-card-end reveal reveal-d-2">
        <div class="sr-proofs-step">
          <div class="sr-proofs-step-num">03</div>
        </div>
        <div class="sr-proofs-body">
          <div class="sr-proofs-tag sr-proofs-tag-end">CODE · J+7</div>
          <h3>PR de remédiation<br>réelles montrées.</h3>
          <p>
            Sous NDA, on vous montre <b>3 à 5 vraies PR</b> qu'on a ouvertes chez d'anciens clients
            (anonymisées : noms de variables et logique métier masqués, mais le code de remédiation est
            réel) :
          </p>
          <ul class="sr-proofs-feats">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Chiffrement at-rest ajouté</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Logs IA structurés (AI Act)</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Anonymisation pipeline GA4</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Consent Mode v2 server-side</li>
          </ul>
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
          <b>Vraies preuves, pas de marketing.</b> Si après ces 3 étapes vous n'êtes pas convaincu, on vous
          remboursera votre temps de cadrage. <b>1 semaine, et vous décidez.</b>
        </div>
      </div>
      <a href="#contact" class="btn btn-accent">
        Démarrer le process · NDA
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
`;
