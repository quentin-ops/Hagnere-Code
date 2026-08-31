/*
 * Les sept vignettes décoratives `.vt-mini` ont été retirées.
 *
 * Cinq d'entre elles n'étaient que des <span> vides colorés — douze carrés pour
 * la carte 01, des barres pour les autres. À l'écran, elles ne se lisaient pas
 * comme une illustration mais comme une interface qui n'a pas fini de charger,
 * juste sous une description qui, elle, dit quelque chose. Les deux qui
 * portaient des mots (« Doc → IA → Action », les notes A / B+ / A-) disaient
 * moins que la rangée d'étiquettes placée immédiatement en dessous.
 *
 * Les sept cartes ont désormais la même anatomie : titre, description,
 * étiquettes, objectif mesurable.
 */
export const verticalsHtml = `
<!-- SITUATIONS -->
<section class="verticals" id="metiers">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pas une agence sectorielle</div>
        <h2>Les situations où<br>on est vraiment utile.</h2>
      </div>
      <div class="right">
        On ne prétend pas avoir déjà travaillé dans tous les secteurs. Nos preuves
        les plus fortes viennent du patrimoine, de l'immobilier et de la comptabilité.
        Notre rôle est de transformer un problème métier en périmètre produit, puis
        d'écrire les critères de recette, de maintenance et d'exploitation adaptés.
      </div>
    </div>

    <div class="vt-proof-panel reveal">
      <div class="vt-proof-copy">
        <span class="vt-proof-kicker">Positionnement honnête</span>
        <p>
          Vous n'avez pas besoin d'être dans notre secteur historique. Vous devez surtout
          avoir un process important, répétitif, coûteux ou impossible à scaler proprement.
        </p>
      </div>
      <div class="vt-proof-tags" aria-label="Preuves actuelles du studio">
        <span><b>4</b> pages produit publiques à consulter</span>
        <span>Patrimoine</span>
        <span>Immobilier</span>
        <span>Comptabilité IA</span>
      </div>
    </div>

    <div class="vt-grid vt-grid-situations">
      <a class="vt-card vt-card-situation vt-card--wide reveal" data-accent="violet" href="/services/outils-internes-sur-mesure">
        <div class="vt-head">
          <div class="vt-ic">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4 5h16M4 12h16M4 19h16"/>
              <path d="M8 5v14M16 5v14"/>
            </svg>
          </div>
          <span class="vt-tag vt-tag-live"><span class="vt-dot"></span>Cas à cadrer</span>
        </div>
        <div class="vt-index">01</div>
        <h3>Votre activité tourne encore sur Excel, Notion ou des copier-coller.</h3>
        <p>
          On remplace le fichier fragile par un outil interne : rôles utilisateurs,
          historique, exports, validations, alertes, dashboards et intégrations avec
          vos logiciels existants.
        </p>
        <div class="vt-feats">
          <span>Back-office</span>
          <span>Workflows</span>
          <span>Automatisation</span>
        </div>
        <div class="vt-outcome">Objectif à mesurer : réduire la ressaisie et rendre le process traçable.</div>
      </a>

      <a class="vt-card vt-card-situation reveal reveal-d-1" data-accent="blue" href="/services/saas-applications-metier">
        <div class="vt-head">
          <div class="vt-ic">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="4" width="18" height="16" rx="2"/>
              <path d="M7 9h10M7 13h6M15 17h2"/>
            </svg>
          </div>
          <span class="vt-tag">Portail client</span>
        </div>
        <div class="vt-index">02</div>
        <h3>Vos clients vous demandent un espace en ligne.</h3>
        <p>
          Portail sécurisé, documents, suivi de dossiers, paiements, notifications,
          messagerie, signature électronique et espace admin pour vos équipes.
        </p>
        <div class="vt-feats">
          <span>Espace client</span>
          <span>Documents</span>
          <span>Paiement</span>
        </div>
        <div class="vt-outcome">Objectif à mesurer : centraliser les échanges et les actions accessibles au client.</div>
      </a>

      <a class="vt-card vt-card-situation reveal reveal-d-2" data-accent="emerald" href="#contact">
        <div class="vt-head">
          <div class="vt-ic">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <span class="vt-tag vt-tag-expertise">IA utile</span>
        </div>
        <div class="vt-index">03</div>
        <h3>Vos équipes répètent les mêmes tâches chaque semaine.</h3>
        <p>
          Agents IA, extraction documentaire, génération de réponses, relances,
          synthèses, contrôles, routage de demandes et synchronisation entre outils.
        </p>
        <div class="vt-feats">
          <span>Extraction IA</span>
          <span>RAG</span>
          <span>Tool calling</span>
        </div>
        <div class="vt-outcome">Périmètre possible : intégrer l'IA à un workflow testé, avec validation humaine selon le risque.</div>
      </a>

      <a class="vt-card vt-card-situation reveal" data-accent="gold" href="/services/saas-applications-metier">
        <div class="vt-head">
          <div class="vt-ic">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4.5 16.5L3 21l4.5-1.5M14 4l6 6-9 9H5v-6l9-9z"/>
              <path d="M13 5l6 6"/>
            </svg>
          </div>
          <span class="vt-tag">SaaS métier</span>
        </div>
        <div class="vt-index">04</div>
        <h3>Vous voulez lancer un logiciel métier sans monter une équipe tech.</h3>
        <p>
          MVP propre, authentification, abonnements, rôles, back-office, analytics,
          emails transactionnels et socle technique prêt à évoluer.
        </p>
        <div class="vt-feats">
          <span>MVP</span>
          <span>Stripe</span>
          <span>Back-office</span>
        </div>
        <div class="vt-outcome">Livrable à définir : un socle recetté pour le périmètre du lancement.</div>
      </a>

      <a class="vt-card vt-card-situation reveal reveal-d-1" data-accent="pink" href="/services/sites-vitrines">
        <div class="vt-head">
          <div class="vt-ic">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4 19V5a2 2 0 012-2h12a2 2 0 012 2v14"/>
              <path d="M8 9h8M8 13h5M7 19h10"/>
            </svg>
          </div>
          <span class="vt-tag">Acquisition</span>
        </div>
        <div class="vt-index">05</div>
        <h3>Votre site existe, mais il ne génère pas assez de demandes qualifiées.</h3>
        <p>
          Refonte orientée conversion, landing pages, SEO technique, tracking,
          prise de rendez-vous, contenus et campagnes branchées sur de vrais objectifs.
        </p>
        <div class="vt-feats">
          <span>Conversion</span>
          <span>SEO</span>
          <span>Tracking</span>
        </div>
        <div class="vt-outcome">Objectif à mesurer : rendre l'offre compréhensible et les actions de conversion traçables.</div>
      </a>

      <a class="vt-card vt-card-situation reveal reveal-d-2" data-accent="orange" href="/services/audit-technique">
        <div class="vt-head">
          <div class="vt-ic">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <span class="vt-tag">Reprise produit</span>
        </div>
        <div class="vt-index">06</div>
        <h3>Vous avez déjà un produit, mais il devient fragile.</h3>
        <p>
          Audit, dette technique, sécurité, performance, refonte progressive,
          tests, CI/CD, monitoring et plan de reprise sans tout recoder.
        </p>
        <div class="vt-feats">
          <span>Audit</span>
          <span>Sécurité</span>
          <span>Maintenance</span>
        </div>
        <div class="vt-outcome">Livrable attendu : une trajectoire priorisée, avec risques et dépendances explicités.</div>
      </a>

      <!-- Élargie comme la première : sept cartes dans une grille de trois laissaient
           une case vide en bas à droite. La rangée du bas répond maintenant à celle du haut. -->
      <a class="vt-card vt-card-situation vt-card--wide reveal" data-accent="violet" href="/services/application-mobile">
        <div class="vt-head">
          <div class="vt-ic">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="5" y="2" width="14" height="20" rx="2.5"/>
              <path d="M11 18h2"/>
            </svg>
          </div>
          <span class="vt-tag">iOS + Android</span>
        </div>
        <div class="vt-index">07</div>
        <h3>Vos clients fidèles vous demandent une vraie app sur leur téléphone.</h3>
        <p>
          App native iOS + Android (React Native + Expo), publiée sous vos comptes
          App Store + Google Play, paiement Apple Pay, push géolocalisée, fidélité,
          mode hors-ligne.
        </p>
        <div class="vt-feats">
          <span>iOS + Android</span>
          <span>App Store + Play Store</span>
          <span>OTA EAS</span>
        </div>
        <div class="vt-outcome">Objectif à mesurer : installer l'app sur l'écran d'accueil et suivre la récurrence d'usage sur votre audience.</div>
      </a>
    </div>

    <div class="vt-disclaimer reveal">
      Vous êtes dans un autre secteur ? <a href="#contact">On regarde le problème métier</a>,
      pas l'étiquette de votre marché. Si ce n'est pas pour nous, on vous le dira avant le devis.
    </div>
  </div>
</section>
`;
