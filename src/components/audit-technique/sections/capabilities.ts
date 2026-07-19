export const capabilitiesHtml = `
<!-- CAPABILITIES · 21 briques réparties par dimension A-H (audit technique) -->
<section class="caps" id="capabilities">
  <div class="caps-grid-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:56px">
      <div class="left">
        <div class="eyebrow on-dark">— Ce qu'on vérifie concrètement</div>
        <h2 style="color:#fff">21 vérifications concrètes,<br>réparties sur les 8 dimensions.<br>Pas une check-list générique.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.7)">
        Chaque dimension auditée se décline en 2 à 3 vérifications précises, outillées, documentées.
        <b style="color:#fff">Chaque brique a sa méthodologie, son outil, son livrable</b>&nbsp;:
        vous savez exactement ce qu'on regarde, comment, et ce que ça produit dans le rapport final.
      </div>
    </div>

    <!-- Family A : Code quality -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">A</span>
        <span class="at-caps-family-k">CODE QUALITY</span>
        <span class="at-caps-family-count">3 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
        <h4>SAST complet · niveau 8</h4>
        <p>SonarQube Enterprise + Semgrep + PHPStan niveau 8 ou TypeScript strict. Rapport par catégorie (bug / smell / security / vulnerability), priorité CVSS.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg></div>
        <h4>Coverage &amp; complexité par module</h4>
        <p>Test coverage détaillé par module métier critique (billing, auth, core). Complexité cyclomatique moyenne, fonctions &gt; 20 CC flaggées, refactos chiffrées.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z" opacity="0.4"/><path d="M9 9h6v6H9z"/></svg></div>
        <h4>Duplication &amp; dead code</h4>
        <p>Ratio de duplication par module (seuil critique &gt; 5 %), dead code detection via coverage + jscpd. Potentiel de refacto chiffré en j/h.</p>
      </div>
    </div>

    <!-- Family B : Architecture -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">B</span>
        <span class="at-caps-family-k">ARCHITECTURE</span>
        <span class="at-caps-family-count">3 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
        <h4>Diagrammes C4 AS-IS + TO-BE</h4>
        <p>System, container, component. Produits pendant l'audit, livrés en SVG + PDF éditables. AS-IS = état actuel documenté. TO-BE = cible atteignable en 6-12 mois.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h6M9 18h6M6 9v6M18 9v6"/></svg></div>
        <h4>Couplage &amp; cohésion</h4>
        <p>Analyse de dépendances entre modules, identification des god-objects et anti-patterns structurels (Controller obèse, Service anémique, Layer violation).</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        <h4>Data flow &amp; bounded contexts</h4>
        <p>Cartographie du flux de données (API → service → DB → cache → queue). Identification des leaky abstractions et frontières de contexte brouillées.</p>
      </div>
    </div>

    <!-- Family C : Performance -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">C</span>
        <span class="at-caps-family-k">PERFORMANCE</span>
        <span class="at-caps-family-count">3 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg></div>
        <h4>Latence p95 / p99 par endpoint</h4>
        <p>Profiling sur 10 endpoints critiques via Datadog APM snapshot ou Laravel Pulse. Flagging des endpoints &gt; 500 ms p95 avec analyse des goulets (DB / network / CPU).</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
        <h4>N+1, indexes manquants, full scans</h4>
        <p>Audit queries SQL via slow query log + EXPLAIN ANALYZE. Détection N+1 automatisée (Bullet-like), indexes manquants priorisés par impact latence.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
        <h4>Core Web Vitals &amp; bundle size</h4>
        <p>LCP / FID / CLS mesurés via Lighthouse + CrUX si data. Bundle size analysis (webpack-bundle-analyzer), code splitting opportunities, images non optimisées flaggées.</p>
      </div>
    </div>

    <!-- Family D : Sécurité -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">D</span>
        <span class="at-caps-family-k">SÉCURITÉ</span>
        <span class="at-caps-family-count">3 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>OWASP Top 10 2021 + auth/authz</h4>
        <p>Injection, broken auth, sensitive data, XXE, broken access, security misconfiguration, XSS, deserialization, CVE-dependant components, logging. Review IAM + RBAC.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h4>CVE dépendances + secrets leaks</h4>
        <p>Snyk + Dependabot snapshot sur composer / npm / Docker. GitGuardian scan sur historique git (secrets in repo). Priorisation CVSS &gt; 7.0 en P1, CVSS 4-7 en P2.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
        <h4>RGPD &amp; gestion secrets</h4>
        <p>Registre traitements, DPA sous-traitants, base légale, durée rétention, chiffrement at-rest/in-transit, <b>logs sensibles</b> (PII non chiffrée), export/droit à l'oubli testés.</p>
      </div>
    </div>

    <!-- Family E : Infrastructure -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">E</span>
        <span class="at-caps-family-k">INFRASTRUCTURE</span>
        <span class="at-caps-family-count">2 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l4-4 4 4 8-8"/><path d="M16 4h4v4"/></svg></div>
        <h4>IaC + backups testés + DR</h4>
        <p>Terraform / Pulumi couverture (% infra en code), backups existants testés en restauration (RPO/RTO mesurés, pas déclarés), DR plan revu sur papier + simulation.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l3 3 4-8 4 12 3-5h4"/></svg></div>
        <h4>Monitoring &amp; SPOF detection</h4>
        <p>Revue Sentry + Datadog + Grafana existants, identification des <b>single points of failure</b> infra (DB master seul, Redis non clusterisé, single AZ, DNS unique provider).</p>
      </div>
    </div>

    <!-- Family F : DevEx / DORA -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">F</span>
        <span class="at-caps-family-k">DEVEX &amp; DORA METRICS</span>
        <span class="at-caps-family-count">2 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg></div>
        <h4>4 métriques DORA chiffrées</h4>
        <p>Lead time for changes (commit → prod), deploy frequency, change failure rate, MTTR. Benchmark vs. <b>Google DORA elite / high / medium / low</b>. Extrait de GitHub + CI + Sentry.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg></div>
        <h4>Bus factor + onboarding flow</h4>
        <p>Ownership de code via git blame (combien de devs touchent les modules critiques), documentation d'onboarding testée (temps théorique de mise en production d'un nouveau dev).</p>
      </div>
    </div>

    <!-- Family G : FinOps -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">G</span>
        <span class="at-caps-family-k">FINOPS CLOUD</span>
        <span class="at-caps-family-count">2 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
        <h4>Cost per feature / per customer</h4>
        <p>Breakdown facture AWS / OVH / Scaleway par tag + service, imputation aux features et tenants. Ratio coût infra / ARR, identification de vos comptes à marge négative.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
        <h4>Over-provisioning + ressources zombie</h4>
        <p>EC2 / RDS sur-dimensionnées (utilisation &lt; 20 %), snapshots orphelins, EBS non attachés, NAT Gateway idle. <b>Chaque poste est chiffré en euros par mois</b>, avec le risque associé à la coupe.</p>
      </div>
    </div>

    <!-- Family H : Équipe & org -->
    <div class="at-caps-family reveal">
      <div class="at-caps-family-head">
        <span class="at-caps-family-n">H</span>
        <span class="at-caps-family-k">ÉQUIPE &amp; ORGANISATION</span>
        <span class="at-caps-family-count">3 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
        <h4>5 à 8 entretiens no-blame</h4>
        <p>Interviews 45 min off-the-record avec CTO / lead devs / product / DAF. Méthodologie inspirée de SPACE (Satisfaction, Performance, Activity, Communication, Efficiency).</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg></div>
        <h4>Turnover &amp; séniorité de vos équipes</h4>
        <p>Votre turnover sur 12 et 24 mois, replacé face aux repères publics du secteur. Pyramide de séniorité (junior / mid / senior / staff), compétences manquantes identifiées.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg></div>
        <h4>Vélocité mesurée vs. déclarée</h4>
        <p>Story points livrés par trimestre, extraits de Linear ou Jira, comparés au planning annoncé. Sous 0,8 de ratio «&nbsp;planification vs. réalité&nbsp;», l'écart est documenté point par point.</p>
      </div>
    </div>
  </div>
</section>
`;
