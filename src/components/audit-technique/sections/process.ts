export const processHtml = `
<!-- PROCESS · 7 étapes / 4 phases (audit technique) -->
<section class="at-proc" id="process">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Notre process</div>
        <h2>Du kickoff au rapport<br>board-ready, en 7 étapes<br>documentées.</h2>
      </div>
      <div class="right">
        Pas d'improvisation. Pas de "on va voir". Chaque étape a ses <b>entrants, ses livrables intermédiaires
        et son timing</b>. Vous savez à tout moment où on en est et ce qui arrive le lendemain —
        chaque recommandation arrive avec sa charge estimée et son rang de priorité, pour que vous puissiez l'exécuter sans nous.
      </div>
    </div>

    <!-- PHASE 1 : PRÉPARATION -->
    <div class="at-proc-phase reveal">
      <div class="at-proc-phase-head" data-phase="setup">
        <span class="at-proc-phase-k">PHASE 01 · PRÉPARATION</span>
        <span class="at-proc-phase-d">Jour -5 → Jour 0</span>
        <span class="at-proc-phase-n">1 étape</span>
      </div>
    </div>
    <div class="at-proc-grid at-proc-grid-1 reveal reveal-d-1">
      <article class="at-proc-step at-proc-step-wide" data-phase="setup">
        <div class="at-proc-step-top">
          <span class="at-proc-step-n">01</span>
          <div class="at-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
          </div>
        </div>
        <div class="at-proc-step-wide-body">
          <h4>Cadrage &amp; NDA mutuel</h4>
          <p>Brief technique 90 min en visio avec votre CTO (ou équivalent). Validation du scope, identification des 10 endpoints critiques à profiler, liste des personnes à interviewer. <b>NDA mutuel + clause de non-conflit d'intérêt</b> signés. Accès read-only configurés (GitHub, cloud, Sentry, Linear, Notion).</p>
          <div class="at-proc-step-wide-grid">
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Entrants</span>
              <span class="at-proc-step-wide-v">Brief 90 min · liste interlocuteurs</span>
            </div>
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Livrables</span>
              <span class="at-proc-step-wide-v">NDA + CGV + CoI signés</span>
            </div>
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Timing</span>
              <span class="at-proc-step-wide-v">J-5 à J0 · 2 h de votre côté</span>
            </div>
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Jalon</span>
              <span class="at-proc-step-wide-v">Accès read-only opérationnels</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- PHASE 2 : ANALYSE -->
    <div class="at-proc-phase reveal">
      <div class="at-proc-phase-head" data-phase="launch">
        <span class="at-proc-phase-k">PHASE 02 · ANALYSE</span>
        <span class="at-proc-phase-d">Jour 1 → Jour 5</span>
        <span class="at-proc-phase-n">3 étapes</span>
      </div>
    </div>
    <div class="at-proc-grid reveal reveal-d-1" style="grid-template-columns:repeat(3,1fr)">
      <article class="at-proc-step" data-phase="launch">
        <div class="at-proc-step-top">
          <span class="at-proc-step-n">02</span>
          <div class="at-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
        </div>
        <h4>Snapshot &amp; code review</h4>
        <p>Clone du repo, branchement SonarQube Enterprise + Semgrep + Snyk. Revue manuelle des 5 modules métier critiques (billing, auth, core, integrations, data).</p>
        <div class="at-proc-step-foot">J1 → J2 · 2 devs seniors</div>
      </article>

      <article class="at-proc-step" data-phase="launch">
        <div class="at-proc-step-top">
          <span class="at-proc-step-n">03</span>
          <div class="at-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
        </div>
        <h4>8 dimensions en parallèle</h4>
        <p>Perf (p95/p99, N+1), sécu (OWASP, CVE, secrets), infra (IaC, DR), archi (C4, couplage), DevEx (DORA), FinOps (cost breakdown), équipe (git blame, ownership). Exports bruts produits.</p>
        <div class="at-proc-step-foot">J3 → J5 · outillage parallélisé</div>
      </article>

      <article class="at-proc-step" data-phase="launch">
        <div class="at-proc-step-top">
          <span class="at-proc-step-n">04</span>
          <div class="at-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          </div>
        </div>
        <h4>Premiers insights &amp; hypothèses</h4>
        <p>Note de synthèse intermédiaire de 3-4 pages envoyée au CTO à J+5, avec les 5 findings les plus critiques et les hypothèses à valider en entretien. <b>Vous pouvez arrêter ici</b> si le scope doit pivoter.</p>
        <div class="at-proc-step-foot">J+5 · livrable intermédiaire</div>
      </article>
    </div>

    <!-- PHASE 3 : TERRAIN -->
    <div class="at-proc-phase reveal">
      <div class="at-proc-phase-head" data-phase="launch">
        <span class="at-proc-phase-k">PHASE 03 · TERRAIN</span>
        <span class="at-proc-phase-d">Jour 6 → Jour 7</span>
        <span class="at-proc-phase-n">1 étape</span>
      </div>
    </div>
    <div class="at-proc-grid at-proc-grid-1 reveal reveal-d-1">
      <article class="at-proc-step at-proc-step-wide" data-phase="launch">
        <div class="at-proc-step-top">
          <span class="at-proc-step-n">05</span>
          <div class="at-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="17" cy="11" r="3"/></svg>
          </div>
        </div>
        <div class="at-proc-step-wide-body">
          <h4>Entretiens équipe no-blame</h4>
          <p>5 à 8 interviews de 45 min, <b>off-the-record</b>, avec le CTO, les lead devs, le PM, parfois le DAF. Structurées selon SPACE (Satisfaction, Performance, Activity, Communication, Efficiency). On valide / infirme les hypothèses formulées en phase 02. Pas de retranscription nominative dans le rapport final.</p>
          <div class="at-proc-step-wide-grid">
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Format</span>
              <span class="at-proc-step-wide-v">45 min · off-the-record · visio</span>
            </div>
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Méthodologie</span>
              <span class="at-proc-step-wide-v">SPACE framework (Google)</span>
            </div>
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Timing</span>
              <span class="at-proc-step-wide-v">J6 → J7 · 2 jours répartis</span>
            </div>
            <div class="at-proc-step-wide-item">
              <span class="at-proc-step-wide-k">Garantie</span>
              <span class="at-proc-step-wide-v">Zéro nom dans rapport final</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- PHASE 4 : SYNTHÈSE -->
    <div class="at-proc-phase reveal">
      <div class="at-proc-phase-head" data-phase="pilot">
        <span class="at-proc-phase-k">PHASE 04 · SYNTHÈSE &amp; RESTITUTION</span>
        <span class="at-proc-phase-d">Jour 8 → Jour 10</span>
        <span class="at-proc-phase-n">2 étapes</span>
      </div>
    </div>
    <div class="at-proc-grid at-proc-grid-2 reveal reveal-d-1">
      <article class="at-proc-step" data-phase="pilot">
        <div class="at-proc-step-top">
          <span class="at-proc-step-n">06</span>
          <div class="at-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
          </div>
        </div>
        <h4>Scoring, Tech Debt P&amp;L &amp; rédaction</h4>
        <p>Consolidation&nbsp;: score /100 par dimension pondéré, positionnement vs référentiels publics (DORA, OWASP ASVS, Web Almanac), <b>Tech Debt P&amp;L chiffré en euros</b>, matrice impact × effort, roadmap 6/12/18 mois. Rédaction du PDF 40-70 p. + deck 12-18 slides board-ready + version board-safe anonymisée. Revue interne par le lead.</p>
        <div class="at-proc-step-foot">J8 → J9 · 2 devs + lead</div>
      </article>

      <article class="at-proc-step" data-phase="pilot">
        <div class="at-proc-step-top">
          <span class="at-proc-step-n">07</span>
          <div class="at-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
        <h4>Restitution Loom + livraison</h4>
        <p>Visio 90 min avec votre direction + CTO (option&nbsp;: board physique en +). <b>Loom de restitution 20-30 min</b> archivable, partageable à vos VC / acquéreur / CA. Tous les livrables remis sur un espace Notion dédié en propriété client. Projet clos à J+10.</p>
        <div class="at-proc-step-foot">J10 · visio + Loom + Notion livrés</div>
      </article>
    </div>

    <!-- Footer note -->
    <div class="at-roi-how-note reveal reveal-d-2" style="margin-top:40px;background:var(--paper-2);border-color:var(--line);color:var(--ink-3)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent)"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      Les 7 étapes sont <b style="color:var(--ink)">adaptables</b>&nbsp;: format Express 3-5 j (étapes 1-2-6-7 compressées), Deep 15-20 j (phase 02 &amp; 03 allongées), Tech DD M&amp;A 20-30 j (ajout phase d'analyse IP / licences open source avec vos avocats). Le reste de la méthode ne change pas.
    </div>
  </div>
</section>
`;
