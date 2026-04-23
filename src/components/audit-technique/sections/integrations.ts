export const integrationsHtml = `
<!-- ÉCOSYSTÈME M&E — 3 stations : Votre stack → Notre observabilité → Pilotage -->
<section class="at-eco" id="ecosysteme">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— L'écosystème connecté</div>
        <h2>Votre stack, notre observabilité,<br>votre pilotage.<br>Une seule chaîne de confiance.</h2>
      </div>
      <div class="right">
        On ne vous impose pas de stack. On s'intègre à <b>la vôtre</b> — Laravel, Next.js, Django, Rails, ce que vous avez —
        on y branche <b>notre stack d'observabilité pro</b>, et on vous rend le tout visible
        dans vos outils de pilotage habituels.
      </div>
    </div>

    <!-- STATION 01 : Votre stack tech -->
    <article class="at-eco-station reveal">
      <div class="at-eco-head">
        <div class="at-eco-num">01</div>
        <div class="at-eco-head-text">
          <div class="at-eco-kind">VOTRE STACK TECH</div>
          <h3>Peu importe le framework,<br>on maintient.</h3>
          <p>Laravel, Next.js, React, Vue, Nuxt, Inertia, Django, Rails, Node. On reprend ce qui existe
             et on le fait vivre. <b>Pas de "rewrite complet obligatoire"</b> — sauf si l'audit dit
             que la dette est structurelle.</p>
        </div>
      </div>

      <div class="at-eco-row">
        <div class="at-eco-tile" data-brand="#FF2D20">
          <div class="at-eco-tile-logo" style="background:#FF2D20">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M22.2 5.9v6.6c0 .2-.1.4-.3.5l-5.5 3.2v6.3c0 .2-.1.4-.3.5l-11.6 6.7c0 0-.1 0-.1.1-.1 0-.2 0-.3 0-.1 0-.2 0-.3 0-.1-.1-.1-.1-.1-.1-.2-.1-.3-.3-.3-.5V12.7c0-.2.1-.4.3-.5l5.5-3.2V2.7c0-.2.1-.4.3-.5l11.6-6.7c.2-.1.4-.1.5 0l11.6 6.7c.2.1.3.3.3.5z"/></svg>
          </div>
          <div class="at-eco-tile-name">Laravel 11 / 12</div>
          <div class="at-eco-tile-sub">Eloquent · Horizon · Pulse · Pennant</div>
        </div>

        <div class="at-eco-tile" data-brand="#0A0A0A">
          <div class="at-eco-tile-logo" style="background:#0A0A0A">
            <svg viewBox="0 0 180 180" fill="#fff"><path d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zM74.5 119V62h14.1v57H74.5zm31.9-26.4v-5.1L79.6 62h13.8l18 27v-9.2l13.9 19.7V119h-13.9V92.6z"/></svg>
          </div>
          <div class="at-eco-tile-name">Next.js 15 / 16</div>
          <div class="at-eco-tile-sub">App Router · RSC · Turbopack · Edge</div>
        </div>

        <div class="at-eco-tile" data-brand="#61DAFB">
          <div class="at-eco-tile-logo" style="background:#61DAFB">
            <svg viewBox="0 0 24 24" fill="#0A0A0A"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#0A0A0A" stroke-width="1"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#0A0A0A" stroke-width="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#0A0A0A" stroke-width="1" transform="rotate(120 12 12)"/></svg>
          </div>
          <div class="at-eco-tile-name">React 19</div>
          <div class="at-eco-tile-sub">Compiler · Server Components · Suspense</div>
        </div>

        <div class="at-eco-tile" data-brand="#42B883">
          <div class="at-eco-tile-logo" style="background:#42B883">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2L2 20h6l4-7 4 7h6L12 2z"/></svg>
          </div>
          <div class="at-eco-tile-name">Vue / Nuxt</div>
          <div class="at-eco-tile-sub">Composition API · Pinia · Nuxt 3</div>
        </div>

        <div class="at-eco-tile" data-brand="#9553E9">
          <div class="at-eco-tile-logo" style="background:#9553E9">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M3 12L9 4h6l6 8-6 8H9l-6-8z" stroke="#fff" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="2.5"/></svg>
          </div>
          <div class="at-eco-tile-name">Inertia / Livewire</div>
          <div class="at-eco-tile-sub">SPA sans API séparée · monolith moderne</div>
        </div>

        <div class="at-eco-tile" data-brand="#3776AB">
          <div class="at-eco-tile-logo" style="background:#3776AB">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2c-2 0-4 1-4 3v3h4v1H5a3 3 0 00-3 3v3a3 3 0 003 3h3v-3a3 3 0 013-3h7a2 2 0 002-2V5a3 3 0 00-3-3h-2z"/><circle cx="9" cy="5" r="1" fill="#3776AB"/></svg>
          </div>
          <div class="at-eco-tile-name">Django / Rails</div>
          <div class="at-eco-tile-sub">Legacy ou polyglotte · on reprend aussi</div>
        </div>

        <div class="at-eco-tile" data-brand="#336791">
          <div class="at-eco-tile-logo" style="background:#336791">
            <svg viewBox="0 0 24 24" fill="#fff"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#fff" stroke-width="1.5"/></svg>
          </div>
          <div class="at-eco-tile-name">PostgreSQL 16</div>
          <div class="at-eco-tile-sub">Partitioning · WAL · read replicas</div>
        </div>
      </div>
    </article>

    <div class="at-eco-flow" aria-hidden="true">
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v24M6 22l6 6 6-6"/></svg>
      <span>instrumenté par</span>
    </div>

    <!-- STATION 02 : Observability & Security (notre stack) -->
    <article class="at-eco-station at-eco-station-core reveal reveal-d-1">
      <div class="at-eco-head">
        <div class="at-eco-num">02</div>
        <div class="at-eco-head-text">
          <div class="at-eco-kind">OBSERVABILITY &amp; SECURITY · <span>notre stack</span></div>
          <h3>6 outils qu'on branche dès J+1<br>— et qu'on opère pour vous.</h3>
          <p>Sentry, Better Stack, Grafana, Axiom, Snyk, PagerDuty. <b>Comptes à votre nom, sur votre facturation si vous préférez</b>.
             Mais c'est nous qui les installons, paramétrons, calibrons et gardons calmes.
             Zéro bruit, alertes utiles.</p>
        </div>
      </div>

      <div class="at-eco-row">
        <div class="at-eco-tile" data-brand="#362D59">
          <div class="at-eco-tile-logo" style="background:#362D59">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2L2 20h7l3-5 3 5h7L12 2z"/><circle cx="12" cy="15" r="1.5" fill="#362D59"/></svg>
          </div>
          <div class="at-eco-tile-name">Sentry</div>
          <div class="at-eco-tile-sub">Error tracking + performance</div>
        </div>

        <div class="at-eco-tile" data-brand="#E3F0FF">
          <div class="at-eco-tile-logo" style="background:#2563EB">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 13l3 3 5-7"/></svg>
          </div>
          <div class="at-eco-tile-name">Better Stack</div>
          <div class="at-eco-tile-sub">Uptime · statuspage · on-call</div>
        </div>

        <div class="at-eco-tile" data-brand="#F46800">
          <div class="at-eco-tile-logo" style="background:#F46800">
            <svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M6 14l3-3 3 3 4-5 2 2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Grafana Cloud</div>
          <div class="at-eco-tile-sub">Métriques infra + applicatif</div>
        </div>

        <div class="at-eco-tile" data-brand="#1C1C1C">
          <div class="at-eco-tile-logo" style="background:#1C1C1C">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M4 6h16M4 12h12M4 18h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Axiom / Logtail</div>
          <div class="at-eco-tile-sub">Logs structurés · search rapide</div>
        </div>

        <div class="at-eco-tile" data-brand="#4C4A73">
          <div class="at-eco-tile-logo" style="background:#4C4A73">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M9 12l2 2 4-4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Snyk + Dependabot</div>
          <div class="at-eco-tile-sub">SCA · CVE · auto-merge mineurs</div>
        </div>

        <div class="at-eco-tile" data-brand="#06AC38">
          <div class="at-eco-tile-logo" style="background:#06AC38">
            <svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M12 6v6l4 2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">PagerDuty</div>
          <div class="at-eco-tile-sub">Astreinte · escalation · runbooks</div>
        </div>
      </div>
    </article>

    <div class="at-eco-flow" aria-hidden="true">
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v24M6 22l6 6 6-6"/></svg>
      <span>piloté et communiqué dans</span>
    </div>

    <!-- STATION 03 : Pilotage & communication -->
    <article class="at-eco-station reveal reveal-d-2">
      <div class="at-eco-head">
        <div class="at-eco-num">03</div>
        <div class="at-eco-head-text">
          <div class="at-eco-kind">PILOTAGE &amp; COMMUNICATION</div>
          <h3>Là où vous voyez tout<br>— même le lundi matin.</h3>
          <p>Slack Connect pour le jour-le-jour, Linear pour le backlog, Notion pour la doc,
             GitHub pour le code, Loom pour les onboardings. <b>Tout est ouvert, consultable,
             récupérable en 1 clic si vous partez</b>. Aucune rétention par l'ignorance.</p>
        </div>
      </div>

      <div class="at-eco-row">
        <div class="at-eco-tile" data-brand="#4A154B">
          <div class="at-eco-tile-logo" style="background:#4A154B">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="3" width="7" height="4" rx="2"/><rect x="3" y="10" width="7" height="4" rx="2"/><rect x="3" y="17" width="7" height="4" rx="2"/><rect x="14" y="3" width="7" height="4" rx="2"/><rect x="14" y="10" width="7" height="4" rx="2"/><rect x="14" y="17" width="7" height="4" rx="2"/></svg>
          </div>
          <div class="at-eco-tile-name">Slack Connect</div>
          <div class="at-eco-tile-sub">Canal dédié · threads · &lt; 2h HO</div>
        </div>

        <div class="at-eco-tile" data-brand="#5E6AD2">
          <div class="at-eco-tile-logo" style="background:#5E6AD2">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M4 4h16v16H4z" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><path d="M10 8h8M6 16h8" stroke="#fff" stroke-width="1.5"/></svg>
          </div>
          <div class="at-eco-tile-name">Linear · backlog</div>
          <div class="at-eco-tile-sub">Tickets partagés · roadmap live</div>
        </div>

        <div class="at-eco-tile" data-brand="#0A0A0A">
          <div class="at-eco-tile-logo" style="background:#0A0A0A">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
          </div>
          <div class="at-eco-tile-name">GitHub · repo chez vous</div>
          <div class="at-eco-tile-sub">Org client · Actions · Advanced Security</div>
        </div>

        <div class="at-eco-tile" data-brand="#000000">
          <div class="at-eco-tile-logo" style="background:#191919">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M10 9v4l4-2z"/></svg>
          </div>
          <div class="at-eco-tile-name">Notion · docs</div>
          <div class="at-eco-tile-sub">Runbooks · ADR · onboarding</div>
        </div>

        <div class="at-eco-tile" data-brand="#625DF5">
          <div class="at-eco-tile-logo" style="background:#625DF5">
            <svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M10 8v8l6-4z"/></svg>
          </div>
          <div class="at-eco-tile-name">Loom · onboarding vidéo</div>
          <div class="at-eco-tile-sub">10-15 vidéos par projet · à vie</div>
        </div>

        <div class="at-eco-tile" data-brand="#2563EB">
          <div class="at-eco-tile-logo" style="background:#2563EB">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="8" cy="8" r="1.5"/><path d="M11 8h8M6 13h12M6 17h8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Statuspage publique</div>
          <div class="at-eco-tile-sub">Incidents · uptime · SLA trimestriel</div>
        </div>

        <div class="at-eco-tile" data-brand="#EA4335">
          <div class="at-eco-tile-logo" style="background:#EA4335">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M3 8h18M8 4v4M16 4v4" stroke="#fff" stroke-width="1.5"/></svg>
          </div>
          <div class="at-eco-tile-name">Rapport mensuel</div>
          <div class="at-eco-tile-sub">PDF board-ready · 15-20 pages</div>
        </div>
      </div>

      <div class="at-eco-foot">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
        Vos outils internes ne sont pas dans la liste ? On s'adapte. <b>En 10 ans de TMA, on a connecté Notion à Jira via Zapier, Linear à ClickUp, Confluence à Slack</b> — on ne rejette jamais votre stack existante.
      </div>
    </article>
  </div>
</section>
`;
