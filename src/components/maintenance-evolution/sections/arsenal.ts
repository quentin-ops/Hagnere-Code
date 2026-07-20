export const arsenalHtml = `
<!-- ARSENAL M&E — 9 outils pros, 3 colonnes -->
<section class="me-arsenal" id="arsenal">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Notre arsenal</div>
        <h2>Des outils mobilisables,<br>selon le périmètre retenu.</h2>
      </div>
      <div class="right">
        Neuf outils, trois missions. Aucun ne fait le travail à notre place —
        chacun surveille, sécurise ou pilote une partie précise de votre app.
        <b>Outils, titulaires des comptes, licences et modalités de facturation sont confirmés au devis.</b>
      </div>
    </div>

    <div class="me-arsenal-grid reveal">
      <!-- Column 1 : OBSERVABILITY -->
      <div class="me-arsenal-col">
        <div class="me-arsenal-col-head">
          <div class="me-arsenal-col-step">01</div>
          <div class="me-arsenal-col-title">Observabilité &amp; monitoring</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#362D59">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M12 2L2 20h7l3-5 3 5h7L12 2z"/>
                <circle cx="12" cy="15" r="1.5" fill="#362D59"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">Sentry</div>
              <div class="me-arsenal-tool-kind">Error tracking front + back</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Capture erreurs avec stack trace complet, context user/tenant/release, breadcrumbs. <b>Alerte Slack sur erreurs nouvelles</b>, issue auto-assignée au dev qui a touché le code.</div>
          <div class="me-arsenal-tool-chip">Couverture définie au contrat</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#2563EB">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="3"/>
                <path d="M8 13l3 3 5-7"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">Better Stack</div>
              <div class="me-arsenal-tool-kind">Uptime + statuspage publique</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Monitoring HTTP, TCP ou SSL, statuspage et escalade peuvent être configurés. <b>Fréquence, régions, historique, canaux et couverture</b> dépendent du plan et du contrat retenus.</div>
          <div class="me-arsenal-tool-chip">Fréquence selon le devis</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#F46800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M6 14l3-3 3 3 4-5 2 2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">Grafana Cloud</div>
              <div class="me-arsenal-tool-kind">Métriques infra + applicatif</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Dashboards adaptés à l'application&nbsp;: CPU, RAM, requêtes lentes, Redis ou queues selon la stack. La corrélation par trace vise à accélérer le diagnostic&nbsp;; aucun délai maximal de cause racine n'est promis.</div>
          <div class="me-arsenal-tool-chip">Dashboards sur mesure</div>
        </div>
      </div>

      <!-- Column 2 : SÉCURITÉ & QUALITÉ (accent) -->
      <div class="me-arsenal-col me-arsenal-col-mid">
        <div class="me-arsenal-col-head">
          <div class="me-arsenal-col-step">02</div>
          <div class="me-arsenal-col-title">Sécurité &amp; qualité code</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#4C4A73">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M9 12l2 2 4-4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">Snyk</div>
              <div class="me-arsenal-tool-kind">SCA dépendances + containers</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Scan de composer, npm, Docker ou IaC selon le périmètre. Priorisation par sévérité, exposition et exploit connu. <b>Délai cible défini au devis</b>.</div>
          <div class="me-arsenal-tool-chip">Licence selon devis</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#0A0A0A">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M8 12l3 3 5-6" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">Dependabot + Renovate</div>
              <div class="me-arsenal-tool-kind">Mises à jour automatisées</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Mises à jour mineures <b>auto-mergées</b> sous CI verte. Majors bumps en PR dédiées avec checklist de régression + tests end-to-end avant merge humain.</div>
          <div class="me-arsenal-tool-chip">Auto-merge sous CI verte</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#00B4D8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <rect x="3" y="11" width="18" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M7 11V7a5 5 0 0110 0v4" fill="none" stroke="#fff" stroke-width="1.8"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">GitGuardian</div>
              <div class="me-arsenal-tool-kind">Secrets scanning</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Le scan pre-commit, CI ou historique peut détecter des secrets. Les canaux d'alerte, responsables, procédures de révocation et rotation sont définis selon le périmètre.</div>
          <div class="me-arsenal-tool-chip">Hooks pre-commit</div>
        </div>
      </div>

      <!-- Column 3 : PILOTAGE & INCIDENTS -->
      <div class="me-arsenal-col">
        <div class="me-arsenal-col-head">
          <div class="me-arsenal-col-step">03</div>
          <div class="me-arsenal-col-title">Pilotage &amp; incidents</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#06AC38">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M12 6v6l4 2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">PagerDuty</div>
              <div class="me-arsenal-tool-kind">Astreinte et escalade au contrat</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Rotation, escalade et runbooks peuvent être configurés par type d'incident. La couverture, les temps cibles et les éventuelles pénalités doivent figurer au contrat.</div>
          <div class="me-arsenal-tool-chip">Option selon couverture retenue</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#5E6AD2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="#fff" stroke-width="1.5"/>
                <circle cx="8" cy="8" r="2"/>
                <circle cx="16" cy="16" r="2"/>
                <path d="M10 8h8M6 16h8" stroke="#fff" stroke-width="1.5"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">Linear</div>
              <div class="me-arsenal-tool-kind">Backlog partagé transparent</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Votre équipe peut accéder aux tickets et participer aux priorités. L'horizon de roadmap, les indicateurs, les habilitations et la conservation des données sont cadrés au devis.</div>
          <div class="me-arsenal-tool-chip">Accès selon rôles convenus</div>
        </div>

        <div class="me-arsenal-tool">
          <div class="me-arsenal-tool-top">
            <div class="me-arsenal-tool-logo" style="background:#4A154B">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <rect x="3" y="3" width="7" height="4" rx="2"/>
                <rect x="3" y="10" width="7" height="4" rx="2"/>
                <rect x="3" y="17" width="7" height="4" rx="2"/>
                <rect x="14" y="3" width="7" height="4" rx="2"/>
                <rect x="14" y="10" width="7" height="4" rx="2"/>
                <rect x="14" y="17" width="7" height="4" rx="2"/>
              </svg>
            </div>
            <div>
              <div class="me-arsenal-tool-name">Slack Connect</div>
              <div class="me-arsenal-tool-kind">Canal dédié · pas d'email tunnel</div>
            </div>
          </div>
          <div class="me-arsenal-tool-body">Un canal partagé peut être retenu pour les sujets de production. <b>Horaires, personnes habilitées et délais cibles</b> sont définis au devis.</div>
          <div class="me-arsenal-tool-chip">Délai au contrat</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
