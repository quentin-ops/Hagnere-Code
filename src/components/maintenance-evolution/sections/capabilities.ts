export const capabilitiesHtml = `
<!-- CAPABILITIES M&E (dark) — 21 briques, 5 familles -->
<section class="caps" id="capabilities">
  <div class="caps-grid-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:56px">
      <div class="left">
        <div class="eyebrow on-dark">— Ce qu'on met par défaut</div>
        <h2 style="color:#fff">21 briques ops,<br>dans chaque forfait.<br>Pas à la carte.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.7)">
        Monitoring, sécurité, qualité code, infra, pilotage. Tout ce qu'une équipe tech sérieuse
        doit avoir de série en 2026 — <b style="color:#fff">vous n'avez pas à demander, c'est dedans</b>.
      </div>
    </div>

    <!-- Family 1 : Observability & Monitoring -->
    <div class="me-caps-family reveal">
      <div class="me-caps-family-head">
        <span class="me-caps-family-n">A</span>
        <span class="me-caps-family-k">OBSERVABILITY &amp; MONITORING</span>
        <span class="me-caps-family-count">5 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
        <h4>Sentry · error tracking</h4>
        <p>Front + back + mobile avec context riche (user, tenant, release). Alerte Slack sur erreurs nouvelles / régressions, issue auto-assigné au bon dev.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l3 3 4-8 4 12 3-5h4"/></svg></div>
        <h4>Better Stack · uptime + statuspage</h4>
        <p>Monitoring HTTP + TCP + SSL toutes les 30 s depuis 6 régions, statuspage publique avec historique, incident communication automatique.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 11v6M12 7v10M17 14v3"/></svg></div>
        <h4>Grafana · métriques infra</h4>
        <p>CPU, RAM, disk, network, PostgreSQL slow queries, Redis eviction. Dashboards custom par environnement, alerting sur seuils métier.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h12M4 18h8"/></svg></div>
        <h4>Axiom · logs centralisés</h4>
        <p>Logs structurés JSON, search full-text, corrélation trace ID. Rétention 30 jours, export S3 pour compliance. Root cause analysis &lt; 10 min.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h4>PagerDuty · astreinte 7j/7</h4>
        <p>Rotation on-call documentée, escalation auto, runbooks versionnés. Pénalité SLA auto-appliquée si MTTR dépassé. Post-mortem sous 72 h.</p>
      </div>
    </div>

    <!-- Family 2 : Sécurité -->
    <div class="me-caps-family reveal">
      <div class="me-caps-family-head">
        <span class="me-caps-family-n">B</span>
        <span class="me-caps-family-k">SÉCURITÉ</span>
        <span class="me-caps-family-count">5 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Snyk · SCA dépendances</h4>
        <p>Scan continu des vulnérabilités composer/npm/docker. Priorisation CVSS + exploit actif. <b>CVE critiques patchés sous 48 h</b>, majeures sous 7 j.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg></div>
        <h4>Dependabot / Renovate</h4>
        <p>Mises à jour auto des dépendances non-breaking, mergées sous tests verts. Majors bumps en PR dédiées avec checklist de régression.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
        <h4>GitGuardian · secrets scanning</h4>
        <p>Scan pre-commit + CI + historique git. Alerte immédiate sur API key, token, private key leaks. Rotation automatique déclenchée.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h10M2 6h10M2 18h10M22 6l-6 6 6 6"/></svg></div>
        <h4>Cloudflare · WAF + DDoS</h4>
        <p>Protection applicative (OWASP top 10), rate limiting par IP/user, bot detection, DDoS mitigation L3/L4/L7. CDN edge inclus de série.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8a2 2 0 00-2-2h-2l-4-4-4 4H6a2 2 0 00-2 2v4M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6"/><path d="M4 12h16"/></svg></div>
        <h4>SAST · PHPStan / ESLint</h4>
        <p>PHPStan niveau 8 sur Laravel, Psalm en secours, ESLint strict + Biome sur TypeScript. Bloque le merge si régression introduit des erreurs critiques.</p>
      </div>
    </div>

    <!-- Family 3 : Qualité code -->
    <div class="me-caps-family reveal">
      <div class="me-caps-family-head">
        <span class="me-caps-family-n">C</span>
        <span class="me-caps-family-k">QUALITÉ CODE &amp; TESTS</span>
        <span class="me-caps-family-count">4 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 10l3 3 5-5"/></svg></div>
        <h4>Pest / PHPUnit</h4>
        <p>Unit tests sur la logique métier, feature tests sur chaque route critique (billing, auth, permissions). Couverture &gt; 70 % sur modules critiques.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg></div>
        <h4>Playwright / Vitest</h4>
        <p>End-to-end sur les 5 parcours utilisateurs principaux (auth, billing, onboarding, core feature, export), Vitest unitaire sur front critique.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M9 9h6v6H9z"/></svg></div>
        <h4>CodeRabbit · AI PR review</h4>
        <p>Revue automatique des PR par IA (Claude Sonnet 4.6) avant revue humaine&nbsp;: bugs latents, sécurité, style, patterns. <b>2&times; moins de back-and-forth</b>.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg></div>
        <h4>CI GitHub Actions bloquante</h4>
        <p>Tests + SAST + lint + couverture sur chaque PR. <b>Aucun merge sans CI verte</b>. Deploy main → prod automatisé avec validation humaine.</p>
      </div>
    </div>

    <!-- Family 4 : Infra & CI/CD -->
    <div class="me-caps-family reveal">
      <div class="me-caps-family-head">
        <span class="me-caps-family-n">D</span>
        <span class="me-caps-family-k">INFRA &amp; CI/CD</span>
        <span class="me-caps-family-count">4 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div>
        <h4>Forge / Vercel / Fly.io</h4>
        <p>Laravel Forge pour Laravel, Vercel pour Next.js, Fly.io pour workers custom. <b>Infra sur votre compte cloud</b>, pas chez nous. Zéro lock-in.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l4-4 4 4 8-8"/><path d="M16 4h4v4"/></svg></div>
        <h4>Terraform · IaC</h4>
        <p>Infrastructure as code versionnée dans votre repo. Provisioning DNS, CDN, DB, storage reproductible. <b>Disaster recovery en 1 h</b>, même région différente.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12c0 5-4 9-9 9-5 0-9-4-9-9m18 0c0-5-4-9-9-9-5 0-9 4-9 9"/><path d="M12 3v18M3 12h18"/></svg></div>
        <h4>Backups + DR trimestrielle</h4>
        <p>PostgreSQL WAL continu, stockage chiffré <b>second provider</b> (3-2-1). Restauration testée chaque trimestre sur env isolé. <b>RTO 1 h · RPO 15 min</b>.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg></div>
        <h4>Deploys zero-downtime</h4>
        <p>Blue-green ou canary, migrations expand/migrate/contract, feature flags Laravel Pennant. Rollback 1-clic testé. <b>0 rollback/trimestre en moyenne</b>.</p>
      </div>
    </div>

    <!-- Family 5 : Pilotage & Rituels -->
    <div class="me-caps-family reveal">
      <div class="me-caps-family-head">
        <span class="me-caps-family-n">E</span>
        <span class="me-caps-family-k">PILOTAGE &amp; RITUELS</span>
        <span class="me-caps-family-count">3 briques</span>
      </div>
    </div>
    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l3-3 3 3M3 12l4-4 5 5 5-5 4 4"/></svg></div>
        <h4>Linear · backlog partagé</h4>
        <p>Votre équipe métier voit nos tickets en temps réel, peut prioriser avec nous. Roadmap trimestrielle visible. <b>Zéro opacité, zéro jargon technique inaccessible</b>.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9 8.5 8.5 0 018.5 8.5z"/></svg></div>
        <h4>Slack Connect · canal dédié</h4>
        <p>Canal partagé avec votre équipe (pas un email tunnel), threads par sujet, ping non-intrusifs. <b>Réponse &lt; 2 h HO · &lt; 30 min urgence</b>.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
        <h4>Rapport mensuel business-ready</h4>
        <p>Uptime réel, incidents, deploys, CVE patchés, tickets fermés, consommation jours. <b>Chiffres bruts</b>, pas de marketing. Exportable PDF pour board.</p>
      </div>
    </div>
  </div>
</section>
`;
