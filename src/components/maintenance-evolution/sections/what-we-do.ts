export const whatWeDoHtml = `
<!-- WHAT WE DO M&E — 8 services, code-couleur par famille -->
<section class="me-wwd" id="services">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on fait, tous les jours</div>
        <h2>Huit métiers à combiner<br>pour maintenir et faire évoluer<br>votre application.</h2>
      </div>
      <div class="right">
        Le diagnostic permet de sélectionner les activités utiles. Le devis nomme les intervenants,
        la capacité et les responsabilités pour <b>reprendre, surveiller, corriger et faire évoluer</b> l'application.
      </div>
    </div>

    <div class="me-wwd-grid">

      <!-- 01 · HANDOVER / REPRISE -->
      <article class="me-wwd-card me-wwd-card-flag reveal" data-family="handover">
        <div class="me-wwd-top">
          <span class="me-wwd-num">01</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7L9 18l-5-5"/><circle cx="20" cy="7" r="2"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-handover">Reprise</span>
        </div>
        <h3>Reprise d'app orpheline</h3>
        <p>Votre prestataire a disparu, le code est là, mais plus d'équipe. Commencez par le <a href="/guides/reprendre-logiciel-metier-existant"><b>test de relève avant engagement durable</b></a>, puis utilisez un <a href="/services/audit-technique"><b>diagnostic initial</b></a> pour examiner le code, l'infrastructure, la sécurité et la dette avant de définir une reprise progressive.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Diagnostic chiffré</span>
          <span class="me-wwd-tag">Plan de reprise</span>
          <span class="me-wwd-tag">Bascule propre</span>
        </div>
        <div class="me-wwd-flag">Cas de reprise à diagnostiquer</div>
      </article>

      <!-- 02 · MAINTENANCE APPLICATIVE -->
      <article class="me-wwd-card reveal reveal-d-1" data-family="maintenance">
        <div class="me-wwd-top">
          <span class="me-wwd-num">02</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-maintenance">Maintenance</span>
        </div>
        <h3>Maintenance corrective &amp; évolutive</h3>
        <p>Bugs, régressions, demandes métier et refactorisations ciblées. Le canal, la cadence de traitement et le rythme de priorisation sont convenus selon la capacité réservée.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Délais par sévérité</span>
          <span class="me-wwd-tag">Cadence convenue</span>
          <span class="me-wwd-tag">Refactos ciblés</span>
        </div>
      </article>

      <!-- 03 · OBSERVABILITY -->
      <article class="me-wwd-card reveal reveal-d-2" data-family="observability">
        <div class="me-wwd-top">
          <span class="me-wwd-num">03</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l3 3 4-8 4 12 3-5h4"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-observability">Observabilité</span>
        </div>
        <h3>Monitoring &amp; observabilité selon couverture</h3>
        <p>Sentry, Better Stack, Grafana, Axiom ou des équivalents peuvent couvrir erreurs, disponibilité, métriques et logs. <b>Seuils, canaux et horaires de surveillance</b> sont définis au devis.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Sentry</span>
          <span class="me-wwd-tag">Better Stack</span>
          <span class="me-wwd-tag">Grafana</span>
        </div>
      </article>

      <!-- 04 · SÉCURITÉ CONTINUE -->
      <article class="me-wwd-card reveal" data-family="security">
        <div class="me-wwd-top">
          <span class="me-wwd-num">04</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-security">Sécurité</span>
        </div>
        <h3>Sécurité continue &amp; CVE patchés</h3>
        <p>Dependabot, Snyk, GitGuardian et analyses statiques peuvent alimenter le suivi. <b>Le délai cible dépend de la criticité, de l'exposition et des tests requis</b>. Un pentest ou un accompagnement d'audit n'est inclus que s'il figure au devis.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Snyk · Dependabot</span>
          <span class="me-wwd-tag">Priorités CVE</span>
          <span class="me-wwd-tag">Preuves au périmètre</span>
        </div>
      </article>

      <!-- 05 · INFRA & HÉBERGEMENT -->
      <article class="me-wwd-card reveal reveal-d-1" data-family="infra">
        <div class="me-wwd-top">
          <span class="me-wwd-num">05</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-infra">Infra</span>
        </div>
        <h3>Hébergement &amp; infra ops</h3>
        <p>Laravel Forge, Ploi, Vapor, Vercel, Fly.io ou une autre plateforme sont retenus selon la stack. Le devis précise le titulaire des comptes, la facturation, la sauvegarde, les tests de restauration et les objectifs RPO/RTO.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Forge · Vercel · Fly</span>
          <span class="me-wwd-tag">Titulaire explicite</span>
          <span class="me-wwd-tag">RPO / RTO cadrés</span>
        </div>
      </article>

      <!-- 06 · ROADMAP PRODUIT -->
      <article class="me-wwd-card reveal reveal-d-2" data-family="roadmap">
        <div class="me-wwd-top">
          <span class="me-wwd-num">06</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l3-3 3 3M3 12l4-4 5 5 5-5 4 4"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-roadmap">Roadmap</span>
        </div>
        <h3>Roadmap produit et revues</h3>
        <p>Les propositions, arbitrages, indicateurs et horizons de roadmap sont partagés avec les responsables nommés. Le devis fixe la périodicité des comités et le format de décision.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Comité au devis</span>
          <span class="me-wwd-tag">Horizon partagé</span>
          <span class="me-wwd-tag">OKRs partagés</span>
        </div>
      </article>

      <!-- 07 · PERFORMANCE & SCALING -->
      <article class="me-wwd-card reveal" data-family="performance">
        <div class="me-wwd-top">
          <span class="me-wwd-num">07</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-performance">Performance</span>
        </div>
        <h3>Performance, scaling &amp; FinOps</h3>
        <p>Profiling Laravel Pulse / Chrome DevTools, cache, index et requêtes selon la stack. <b>FinOps cloud</b>&nbsp;: les coûts et indicateurs de performance suivis sont ceux définis au devis, sans score universel garanti.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Laravel Pulse</span>
          <span class="me-wwd-tag">CDN &amp; cache</span>
          <span class="me-wwd-tag">FinOps cloud</span>
        </div>
      </article>

      <!-- 08 · INCIDENT RESPONSE -->
      <article class="me-wwd-card reveal reveal-d-1" data-family="incident">
        <div class="me-wwd-top">
          <span class="me-wwd-num">08</span>
          <div class="me-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          </div>
          <span class="me-wwd-badge me-wwd-badge-incident">Astreinte</span>
        </div>
        <h3>Incident response &amp; astreinte</h3>
        <p>PagerDuty, incident.io ou un dispositif équivalent peut soutenir un processus d'incident documenté. Astreinte, horaires, délai cible, post-mortem, page de statut et communication sont chiffrés selon la criticité.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Couverture au devis</span>
          <span class="me-wwd-tag">MTTR cible</span>
          <span class="me-wwd-tag">Post-mortem cadré</span>
        </div>
      </article>

    </div>
  </div>
</section>
`;
