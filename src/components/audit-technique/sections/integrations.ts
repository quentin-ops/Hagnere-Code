export const integrationsHtml = `
<!-- METHODOLOGY ECOSYSTEM · 3 stations : Inputs → Toolkit → Outputs (audit tech) -->
<section class="at-eco" id="methodologie">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Notre méthodologie</div>
        <h2>Vos inputs, notre toolkit,<br>vos livrables.<br>Une chaîne documentée.</h2>
      </div>
      <div class="right">
        Un audit n'est pas un jugement subjectif. C'est une <b>transformation documentée</b> de vos artefacts
        (code, infra, entretiens) en livrables board-ready (rapport, deck, Tech Debt P&amp;L) via <b>un toolkit d'analyse outillé</b>
        conforme ISO 19011. Aucune étape cachée.
      </div>
    </div>

    <!-- STATION 01 : INPUTS -->
    <article class="at-eco-station reveal">
      <div class="at-eco-head">
        <div class="at-eco-num">01</div>
        <div class="at-eco-head-text">
          <div class="at-eco-kind">INPUTS · CE QU'ON INGÈRE</div>
          <h3>Ce qu'on vous demande<br>dès la signature du NDA.</h3>
          <p>Read-only access sur 6 artefacts. <b>Aucune modification, aucun commit, aucun déploiement</b> de notre part pendant l'audit.
             Les accès sont révoqués à J+11. Tout est journalisé.</p>
        </div>
      </div>

      <div class="at-eco-row">
        <div class="at-eco-tile" data-brand="#0A0A0A">
          <div class="at-eco-tile-logo" style="background:#0A0A0A">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
          </div>
          <div class="at-eco-tile-name">GitHub / GitLab</div>
          <div class="at-eco-tile-sub">Read-only sur repos · main branch</div>
        </div>

        <div class="at-eco-tile" data-brand="#FF9900">
          <div class="at-eco-tile-logo" style="background:#FF9900">
            <svg viewBox="0 0 24 24" fill="#fff"><ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" stroke="#fff" stroke-width="1.8"/></svg>
          </div>
          <div class="at-eco-tile-name">Cloud · AWS / OVH / GCP</div>
          <div class="at-eco-tile-sub">Read-only IAM · console + billing</div>
        </div>

        <div class="at-eco-tile" data-brand="#362D59">
          <div class="at-eco-tile-logo" style="background:#362D59">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2L2 20h7l3-5 3 5h7L12 2z"/><circle cx="12" cy="15" r="1.5" fill="#362D59"/></svg>
          </div>
          <div class="at-eco-tile-name">Sentry / Datadog</div>
          <div class="at-eco-tile-sub">Observability snapshot 30 j</div>
        </div>

        <div class="at-eco-tile" data-brand="#000000">
          <div class="at-eco-tile-logo" style="background:#0A0A0A">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M3 8h18M7 4v4M17 4v4" stroke="#fff" stroke-width="1.5"/></svg>
          </div>
          <div class="at-eco-tile-name">Notion / Confluence</div>
          <div class="at-eco-tile-sub">Docs internes · ADR · runbooks</div>
        </div>

        <div class="at-eco-tile" data-brand="#5E6AD2">
          <div class="at-eco-tile-logo" style="background:#5E6AD2">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><path d="M10 8h8M6 16h8" stroke="#fff" stroke-width="1.5"/></svg>
          </div>
          <div class="at-eco-tile-name">Linear / Jira</div>
          <div class="at-eco-tile-sub">Backlog · velocity · tickets</div>
        </div>

        <div class="at-eco-tile" data-brand="#4A154B">
          <div class="at-eco-tile-logo" style="background:#4A154B">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="3" width="7" height="4" rx="2"/><rect x="3" y="10" width="7" height="4" rx="2"/><rect x="3" y="17" width="7" height="4" rx="2"/><rect x="14" y="3" width="7" height="4" rx="2"/><rect x="14" y="10" width="7" height="4" rx="2"/><rect x="14" y="17" width="7" height="4" rx="2"/></svg>
          </div>
          <div class="at-eco-tile-name">Entretiens équipe</div>
          <div class="at-eco-tile-sub">5-8 interviews 45 min · no-blame</div>
        </div>
      </div>
    </article>

    <div class="at-eco-flow" aria-hidden="true">
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v24M6 22l6 6 6-6"/></svg>
      <span>analysé via notre</span>
    </div>

    <!-- STATION 02 : TOOLKIT (notre stack) -->
    <article class="at-eco-station at-eco-station-core reveal reveal-d-1">
      <div class="at-eco-head">
        <div class="at-eco-num">02</div>
        <div class="at-eco-head-text">
          <div class="at-eco-kind">TOOLKIT D'ANALYSE · <span>notre stack</span></div>
          <h3>7 outils pro qu'on opère<br>pendant les 10 jours.</h3>
          <p>Les outils et licences réellement nécessaires sont <b>identifiés dans le devis</b>, avec leur coût éventuel et leur mode d'exécution.
             L'environnement utilisé, les transferts, la conservation et la suppression des données sont validés avant toute analyse.</p>
        </div>
      </div>

      <div class="at-eco-row">
        <div class="at-eco-tile" data-brand="#4E9BCD">
          <div class="at-eco-tile-logo" style="background:#4E9BCD">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M3 12h18M12 3v18" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="#fff"/></svg>
          </div>
          <div class="at-eco-tile-name">SonarQube Enterprise</div>
          <div class="at-eco-tile-sub">SAST · coverage · complexité</div>
        </div>

        <div class="at-eco-tile" data-brand="#1B1F23">
          <div class="at-eco-tile-logo" style="background:#1B1F23">
            <svg viewBox="0 0 24 24" fill="#fff"><polyline points="16 18 22 12 16 6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8 6 2 12 8 18" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Semgrep Pro</div>
          <div class="at-eco-tile-sub">Règles custom · security</div>
        </div>

        <div class="at-eco-tile" data-brand="#4C4A73">
          <div class="at-eco-tile-logo" style="background:#4C4A73">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M9 12l2 2 4-4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Snyk + Dependabot</div>
          <div class="at-eco-tile-sub">SCA · CVE dépendances</div>
        </div>

        <div class="at-eco-tile" data-brand="#00B4D8">
          <div class="at-eco-tile-logo" style="background:#00B4D8">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="11" width="18" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M7 11V7a5 5 0 0110 0v4" fill="none" stroke="#fff" stroke-width="1.8"/></svg>
          </div>
          <div class="at-eco-tile-name">GitGuardian</div>
          <div class="at-eco-tile-sub">Secrets leak · historique git</div>
        </div>

        <div class="at-eco-tile" data-brand="#632CA6">
          <div class="at-eco-tile-logo" style="background:#632CA6">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2l3 7h7l-6 4 2 8-6-4-6 4 2-8-6-4h7z"/></svg>
          </div>
          <div class="at-eco-tile-name">Datadog snapshot</div>
          <div class="at-eco-tile-sub">APM · traces · métriques 30 j</div>
        </div>

        <div class="at-eco-tile" data-brand="#F46800">
          <div class="at-eco-tile-logo" style="background:#F46800">
            <svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M6 14l3-3 3 3 4-5 2 2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Grafana Cloud</div>
          <div class="at-eco-tile-sub">Dashboards infra · FinOps</div>
        </div>

        <div class="at-eco-tile" data-brand="#0A0A0A">
          <div class="at-eco-tile-logo" style="background:#0A0A0A">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#fff" stroke-width="2"/><path d="M8 12h8M12 8v8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Méthodologie propriétaire</div>
          <div class="at-eco-tile-sub">9 dimensions auditées · grille ouverte</div>
        </div>
      </div>
    </article>

    <div class="at-eco-flow" aria-hidden="true">
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v24M6 22l6 6 6-6"/></svg>
      <span>synthétisé en livrables</span>
    </div>

    <!-- STATION 03 : OUTPUTS -->
    <article class="at-eco-station reveal reveal-d-2">
      <div class="at-eco-head">
        <div class="at-eco-num">03</div>
        <div class="at-eco-head-text">
          <div class="at-eco-kind">OUTPUTS · VOS LIVRABLES</div>
          <h3>Ce qu'on vous remet<br>à J+10.</h3>
          <p>Les artefacts et formats réellement livrés sont listés au devis. Les droits d'utilisation et le transfert des livrables
             spécifiques suivent les CGV après paiement complet, sous réserve des éléments préexistants et licences tierces. Un NDA peut être signé avant les accès sensibles.</p>
        </div>
      </div>

      <div class="at-eco-row">
        <div class="at-eco-tile" data-brand="#EF4444">
          <div class="at-eco-tile-logo" style="background:#EF4444">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M14 2v6h6" fill="none" stroke="#fff" stroke-width="1.8"/></svg>
          </div>
          <div class="at-eco-tile-name">Rapport PDF 40-70 p.</div>
          <div class="at-eco-tile-sub">Board-safe + version complète</div>
        </div>

        <div class="at-eco-tile" data-brand="#6D28D9">
          <div class="at-eco-tile-logo" style="background:#6D28D9">
            <svg viewBox="0 0 24 24" fill="#fff"><line x1="12" y1="1" x2="12" y2="23" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Tech Debt P&amp;L</div>
          <div class="at-eco-tile-sub">Dette chiffrée € · livrable signature</div>
        </div>

        <div class="at-eco-tile" data-brand="#F59E0B">
          <div class="at-eco-tile-logo" style="background:#F59E0B">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#fff" stroke-width="1.8"/><line x1="9" y1="21" x2="9" y2="9" stroke="#fff" stroke-width="1.8"/><path d="M3 9h18" stroke="#fff" stroke-width="1.8"/></svg>
          </div>
          <div class="at-eco-tile-name">Deck exécutif 12-18 sl.</div>
          <div class="at-eco-tile-sub">Keynote · Google Slides éditable</div>
        </div>

        <div class="at-eco-tile" data-brand="#5E6AD2">
          <div class="at-eco-tile-logo" style="background:#5E6AD2">
            <svg viewBox="0 0 24 24" fill="#fff"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><path d="M10 8h8M6 16h8" stroke="#fff" stroke-width="1.5"/></svg>
          </div>
          <div class="at-eco-tile-name">Backlog Notion / Linear</div>
          <div class="at-eco-tile-sub">20-30 tickets chiffrés</div>
        </div>

        <div class="at-eco-tile" data-brand="#0EA5E9">
          <div class="at-eco-tile-logo" style="background:#0EA5E9">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="#fff" stroke-width="1.8"/></svg>
          </div>
          <div class="at-eco-tile-name">Diagrammes C4 SVG</div>
          <div class="at-eco-tile-sub">AS-IS + TO-BE · éditables</div>
        </div>

        <div class="at-eco-tile" data-brand="#625DF5">
          <div class="at-eco-tile-logo" style="background:#625DF5">
            <svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M10 8v8l6-4z"/></svg>
          </div>
          <div class="at-eco-tile-name">Loom restitution 20-30 min</div>
          <div class="at-eco-tile-sub">Asynchrone · archive à vie</div>
        </div>

        <div class="at-eco-tile" data-brand="#10B981">
          <div class="at-eco-tile-logo" style="background:#10B981">
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M3 3v18h18" fill="none" stroke="#fff" stroke-width="2"/><path d="M7 15l4-6 4 3 5-8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
          </div>
          <div class="at-eco-tile-name">Roadmap 6/12/18 mois</div>
          <div class="at-eco-tile-sub">3 scenarios chiffrés j/h + capex</div>
        </div>
      </div>

      <div class="at-eco-foot">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
        Le devis précise les livrables, formats et droits de diffusion. <b>Le transfert des livrables spécifiques intervient après paiement complet</b>, conformément aux CGV et sous réserve des composants préexistants et licences tierces.
      </div>
    </article>
  </div>
</section>
`;
