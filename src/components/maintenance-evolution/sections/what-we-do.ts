export const whatWeDoHtml = `
<!-- WHAT WE DO M&E — 8 services, code-couleur par famille -->
<section class="me-wwd" id="services">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on fait, tous les jours</div>
        <h2>Huit métiers qu'on tient<br>pour que votre app vive<br>3, 5, 10 ans.</h2>
      </div>
      <div class="right">
        Pas un simple "support", pas une régie à la journée. Une équipe nommée qui
        <b>reprend, surveille, patche, fait évoluer</b> votre app — et reste là quand les autres
        ont envoyé la facture finale.
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
        <p>Votre prestataire a disparu, le code est là, mais plus d'équipe. On fait un <b>audit flash en 5 jours</b> (code, infra, sécurité, dette), puis on reprend en main. L'entrée la plus fréquente chez nous — 40 % des nouveaux clients.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Audit flash 5 j</span>
          <span class="me-wwd-tag">Plan de reprise</span>
          <span class="me-wwd-tag">Bascule propre</span>
        </div>
        <div class="me-wwd-flag">Point d'entrée n°1</div>
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
        <p>Bugs, régressions, feature requests métier, refactos ciblés. <b>Tous les jours, pas au trimestre</b>. Vous remontez dans Linear, on shippe dans la semaine. Backlog priorisé ensemble au comité mensuel, pas imposé.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Bug fixes &lt; 48h</span>
          <span class="me-wwd-tag">Features hebdo</span>
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
        <h3>Monitoring &amp; observabilité 24/7</h3>
        <p>Sentry (erreurs), Better Stack (uptime &amp; statuspage), Grafana (métriques), Axiom (logs). <b>Alerte &lt; 5 min</b> sur incident P1, détection proactive. Vous découvrez l'incident par Slack — pas par vos clients.</p>
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
        <p>Dependabot + Snyk + GitGuardian + SAST (PHPStan / Psalm / ESLint). <b>CVE critiques patchés sous 48 h</b>. Pentest annuel optionnel (tier Premium). Prêt pour votre prochain audit SOC2 / ISO27001 client.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Snyk · Dependabot</span>
          <span class="me-wwd-tag">CVE &lt; 48h</span>
          <span class="me-wwd-tag">SOC2-ready</span>
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
        <p>Laravel Forge / Ploi / Vapor / Vercel / Fly.io selon votre stack. <b>Infra sur votre compte cloud</b> (AWS, OVH, Scaleway) — pas de rebilling, pas de lock-in. Backups testés mensuellement, RPO 15 min, RTO 1 h.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Forge · Vercel · Fly</span>
          <span class="me-wwd-tag">Compte cloud client</span>
          <span class="me-wwd-tag">RPO 15 min</span>
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
        <h3>Roadmap produit trimestrielle</h3>
        <p>Pas un exécutant passif. On <b>propose, challenge, priorise</b> au comité mensuel. Roadmap 12 mois partagée, OKRs tech, revue trimestrielle. Votre board voit clair sur les 6 prochains mois — sans attendre votre CTO interne.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">Comité mensuel</span>
          <span class="me-wwd-tag">Roadmap 12 mois</span>
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
        <p>Profiling Laravel Pulse / Chrome DevTools, caching Redis / CDN, DB indexes, query tuning. <b>FinOps cloud</b>&nbsp;: on surveille vos factures AWS / OVH, on coupe le gras. Lighthouse 95+ maintenu, CWV dans le vert.</p>
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
        <p>PagerDuty / incident.io, processus IR documenté, <b>post-mortem sous 72 h</b> sans blame. Astreinte 7j/7 (tier Scale &amp; Premium), MTTR cible &lt; 30 min P1. Statuspage publique, communication client assumée — pas cachée.</p>
        <div class="me-wwd-tags">
          <span class="me-wwd-tag">PagerDuty 7j/7</span>
          <span class="me-wwd-tag">MTTR &lt; 30 min</span>
          <span class="me-wwd-tag">Post-mortem 72 h</span>
        </div>
      </article>

    </div>
  </div>
</section>
`;
