export const whatWeDoHtml = `
<!-- WHAT WE AUDIT · 8 dimensions color-codées (audit technique) -->
<section class="at-wwd" id="dimensions">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on audite</div>
        <h2>Huit dimensions couvertes,<br>chacune scorée /100,<br>chiffrée en euros de dette.</h2>
      </div>
      <div class="right">
        Un audit technique ne se limite pas au code. Le périmètre peut couvrir <b>8 dimensions
        qui influencent la maintenabilité, les coûts et la sécurité</b>.
        Le devis précise les dimensions analysées, la méthode de score, les recommandations et le chiffrage éventuel.
      </div>
    </div>

    <div class="at-wwd-grid">

      <!-- 01 · CODE QUALITY -->
      <article class="at-wwd-card reveal" data-family="handover">
        <div class="at-wwd-top">
          <span class="at-wwd-num">01</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-handover">Code</span>
        </div>
        <h3>Code quality</h3>
        <p>SAST (SonarQube Enterprise, Semgrep, PHPStan niveau 8), test coverage par module, complexité cyclomatique, duplication, dead code, linter adherence. <b>On ne se contente pas du score SonarQube</b> — on explique ce qu'il cache.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">SAST · Sonar / Semgrep</span>
          <span class="at-wwd-tag">Coverage par module</span>
          <span class="at-wwd-tag">Complexité CC</span>
        </div>
      </article>

      <!-- 02 · ARCHITECTURE -->
      <article class="at-wwd-card reveal reveal-d-1" data-family="maintenance">
        <div class="at-wwd-top">
          <span class="at-wwd-num">02</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-maintenance">Archi</span>
        </div>
        <h3>Architecture</h3>
        <p>Couplage, cohésion, separation of concerns, data flow, gestion d'états, modularité. Diagrammes <b>C4 AS-IS + TO-BE</b> produits pendant l'audit, livrés avec le rapport. Identification des bottlenecks structurels cachés.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">Diagrammes C4</span>
          <span class="at-wwd-tag">Data flow</span>
          <span class="at-wwd-tag">AS-IS / TO-BE</span>
        </div>
      </article>

      <!-- 03 · PERFORMANCE -->
      <article class="at-wwd-card reveal reveal-d-2" data-family="observability">
        <div class="at-wwd-top">
          <span class="at-wwd-num">03</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-observability">Perf</span>
        </div>
        <h3>Performance</h3>
        <p>Latence p95/p99 API, requêtes DB (N+1, index manquants, full scans), Core Web Vitals front, bundle size, stratégie de cache, Redis eviction. <b>Comparaison aux seuils publics de référence</b>, pas à une moyenne maison invérifiable.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">p95 / p99</span>
          <span class="at-wwd-tag">N+1 &amp; index</span>
          <span class="at-wwd-tag">CWV · bundle</span>
        </div>
      </article>

      <!-- 04 · SÉCURITÉ -->
      <article class="at-wwd-card at-wwd-card-flag reveal" data-family="security">
        <div class="at-wwd-top">
          <span class="at-wwd-num">04</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-security">Sécurité</span>
        </div>
        <h3>Sécurité</h3>
        <p>Revue OWASP Top 10, dépendances, secrets, auth/authz, logs sensibles et chiffrement selon le périmètre. Un <b>pentest indépendant</b> peut être confié à un prestataire qualifié PASSI sélectionné par le client lorsque cette qualification est requise.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">OWASP · CVE</span>
          <span class="at-wwd-tag">SAST · secrets</span>
          <span class="at-wwd-tag">Pentest en option</span>
        </div>
        <div class="at-wwd-flag">Dimension critique</div>
      </article>

      <!-- 05 · INFRASTRUCTURE -->
      <article class="at-wwd-card reveal reveal-d-1" data-family="infra">
        <div class="at-wwd-top">
          <span class="at-wwd-num">05</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-infra">Infra</span>
        </div>
        <h3>Infrastructure</h3>
        <p>IaC (Terraform/Pulumi), backups testés, DR plan, monitoring (Sentry, Datadog, Grafana snapshot), autoscaling, multi-AZ, vendor lock-in cloud. <b>RTO/RPO mesurés, pas déclarés</b>. Identification des single points of failure.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">IaC &amp; DR</span>
          <span class="at-wwd-tag">RTO / RPO testés</span>
          <span class="at-wwd-tag">SPOF</span>
        </div>
      </article>

      <!-- 06 · DEVEX & DORA -->
      <article class="at-wwd-card reveal reveal-d-2" data-family="roadmap">
        <div class="at-wwd-top">
          <span class="at-wwd-num">06</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-roadmap">DevEx</span>
        </div>
        <h3>DevEx &amp; DORA metrics</h3>
        <p>CI/CD (lead time, change failure rate, MTTR, deploy freq), PR review flow, documentation, onboarding, <b>bus factor</b>, feature flags, revue de deploys. <b>4 métriques DORA chiffrées vs. benchmark elite</b> Google SPACE.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">4 DORA metrics</span>
          <span class="at-wwd-tag">Bus factor</span>
          <span class="at-wwd-tag">Onboarding flow</span>
        </div>
      </article>

      <!-- 07 · FINOPS -->
      <article class="at-wwd-card reveal" data-family="performance">
        <div class="at-wwd-top">
          <span class="at-wwd-num">07</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-performance">FinOps</span>
        </div>
        <h3>FinOps cloud</h3>
        <p>Coût cloud <b>par feature et par client</b>, over-provisioning, reserved instances, egress data transfer, ressources zombie. Chaque gisement d'économie est <b>chiffré en euros par mois</b> sur AWS / OVH / Scaleway, avec le risque associé à chaque coupe.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">Cost per feature</span>
          <span class="at-wwd-tag">Over-provisioning</span>
          <span class="at-wwd-tag">Économies chiffrées en €</span>
        </div>
      </article>

      <!-- 08 · ÉQUIPE & ORG -->
      <article class="at-wwd-card reveal reveal-d-1" data-family="incident">
        <div class="at-wwd-top">
          <span class="at-wwd-num">08</span>
          <div class="at-wwd-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="17" cy="11" r="3"/></svg>
          </div>
          <span class="at-wwd-badge at-wwd-badge-incident">Équipe</span>
        </div>
        <h3>Équipe &amp; organisation</h3>
        <p>Séniorité de votre équipe, turnover sur 12 mois, compétences manquantes, vélocité mesurée, maturité agile, documentation tribale. <b>5 à 8 entretiens no-blame avec vos devs</b> pour identifier les blocages vécus vs. déclarés.</p>
        <div class="at-wwd-tags">
          <span class="at-wwd-tag">5-8 entretiens</span>
          <span class="at-wwd-tag">Turnover · vélocité</span>
          <span class="at-wwd-tag">No-blame</span>
        </div>
      </article>

    </div>
  </div>
</section>
`;
