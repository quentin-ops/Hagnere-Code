export const roiDashboardHtml = `
<!-- TIMELINE 10 JOURS · frise horizontale + 4 KPIs + 4 piliers méthodologiques -->
<section class="at-roi" id="timeline">
  <div class="at-roi-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— La méthode sur 10 jours ouvrés</div>
        <h2>Chaque audit suit les mêmes<br>7 jalons. Documentés, livrables<br>cumulatifs, <b>pas de big-bang J10</b>.</h2>
      </div>
      <div class="right">
        Pas un "rapport qui arrive par surprise le dernier jour". Vous recevez <b>des livrables cumulatifs chaque jour</b>&nbsp;:
        premiers insights à J+5, matrice impact/effort à J+7, rapport &amp; deck à J+10. Aucun effet tunnel,
        aucune mauvaise surprise — et vous pouvez arrêter en cours si le scope évolue.
      </div>
    </div>

    <!-- Timeline horizontale -->
    <div class="at-timeline reveal reveal-d-1">
      <div class="at-timeline-head">
        <span class="at-timeline-k">DÉROULÉ DE VOTRE AUDIT STANDARD · 10 J OUVRÉS</span>
        <span class="at-timeline-meta">2 devs seniors + 1 lead</span>
      </div>

      <div class="at-timeline-rail">
        <!-- Background rail -->
        <div class="at-timeline-bar"></div>
        <div class="at-timeline-fill"></div>

        <!-- 7 milestones -->
        <div class="at-timeline-step is-done">
          <div class="at-timeline-dot"></div>
          <div class="at-timeline-label">
            <span class="at-timeline-day">J−5 → J0</span>
            <span class="at-timeline-title">Cadrage &amp; NDA</span>
            <span class="at-timeline-body">Brief 90 min · NDA mutuel signé · accès code &amp; infra &amp; CRM donnés</span>
          </div>
        </div>

        <div class="at-timeline-step is-done">
          <div class="at-timeline-dot"></div>
          <div class="at-timeline-label">
            <span class="at-timeline-day">J1 → J2</span>
            <span class="at-timeline-title">Snapshot &amp; code review</span>
            <span class="at-timeline-body">Clone repo, SAST automatisé, revue manuelle des zones chaudes, branchement SonarQube Enterprise</span>
          </div>
        </div>

        <div class="at-timeline-step is-done">
          <div class="at-timeline-dot"></div>
          <div class="at-timeline-label">
            <span class="at-timeline-day">J3 → J5</span>
            <span class="at-timeline-title">8 dimensions techniques</span>
            <span class="at-timeline-body">Perf · sécu · infra · archi · FinOps · DevEx explorées en parallèle par 2 devs, exports bruts produits</span>
          </div>
        </div>

        <div class="at-timeline-step is-active">
          <div class="at-timeline-dot"></div>
          <div class="at-timeline-label">
            <span class="at-timeline-day">J6 → J7</span>
            <span class="at-timeline-title">Entretiens équipe</span>
            <span class="at-timeline-body">5-8 interviews no-blame (CTO, lead devs, product). 45 min chacune, off-the-record</span>
            <span class="at-timeline-milestone">📧 Premiers insights transmis</span>
          </div>
        </div>

        <div class="at-timeline-step">
          <div class="at-timeline-dot"></div>
          <div class="at-timeline-label">
            <span class="at-timeline-day">J8</span>
            <span class="at-timeline-title">Synthèse &amp; scoring</span>
            <span class="at-timeline-body">Matrice impact/effort, scoring /100 par dimension, <b>Tech Debt P&amp;L chiffré</b>, benchmark percentile</span>
          </div>
        </div>

        <div class="at-timeline-step">
          <div class="at-timeline-dot"></div>
          <div class="at-timeline-label">
            <span class="at-timeline-day">J9</span>
            <span class="at-timeline-title">Rédaction rapport + deck</span>
            <span class="at-timeline-body">PDF 40-70 pages, deck 12-18 slides board-ready, backlog Notion chiffré, version board-safe</span>
          </div>
        </div>

        <div class="at-timeline-step is-end">
          <div class="at-timeline-dot"></div>
          <div class="at-timeline-label">
            <span class="at-timeline-day">J10</span>
            <span class="at-timeline-title">Restitution Loom + livrables</span>
            <span class="at-timeline-body">Visio 90 min · Loom 20-30 min archivable · tous livrables remis sur Notion client</span>
            <span class="at-timeline-milestone">✅ Audit livré &amp; facturé</span>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="at-timeline-legend">
        <span class="at-timeline-legend-item"><span class="at-timeline-legend-dot is-done"></span> Phase planifiée</span>
        <span class="at-timeline-legend-item"><span class="at-timeline-legend-dot is-active"></span> Livrable intermédiaire</span>
        <span class="at-timeline-legend-item"><span class="at-timeline-legend-dot is-end"></span> Livraison finale</span>
      </div>
    </div>

    <!-- 4 KPIs du process -->
    <div class="at-roi-kpis reveal reveal-d-2" style="margin-top:48px;grid-template-columns:repeat(4,1fr)">
      <div class="at-roi-kpi">
        <div class="at-roi-kpi-delta">J0</div>
        <div class="at-roi-kpi-k">NDA mutuel signé</div>
        <div class="at-roi-kpi-n">Avant tout partage de code, de doc, d'accès</div>
      </div>
      <div class="at-roi-kpi at-roi-kpi-hot">
        <div class="at-roi-kpi-delta">J+5</div>
        <div class="at-roi-kpi-k">Premiers insights transmis</div>
        <div class="at-roi-kpi-n">Pas de surprise "tunnel" en fin d'audit</div>
      </div>
      <div class="at-roi-kpi">
        <div class="at-roi-kpi-delta">J+10</div>
        <div class="at-roi-kpi-k">Rapport + deck livrés</div>
        <div class="at-roi-kpi-n">Tech Debt P&amp;L, backlog, C4, Loom, board-safe</div>
      </div>
      <div class="at-roi-kpi">
        <div class="at-roi-kpi-delta">ISO<span>19011</span></div>
        <div class="at-roi-kpi-k">Méthodologie d'audit</div>
        <div class="at-roi-kpi-n">Téléchargeable en PDF avant signature</div>
      </div>
    </div>

    <!-- 4 piliers méthodologiques -->
    <div class="at-roi-how reveal reveal-d-2">
      <div class="at-roi-how-head">
        <span class="at-roi-how-n">/ les 4 piliers qui tiennent la méthode</span>
        <h3>Pourquoi 10 jours suffisent<br>pour un rapport défendable<br>en board et en levée.</h3>
      </div>

      <div class="at-roi-how-grid">
        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">01</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
          </div>
          <h4>Méthodologie documentée</h4>
          <p>Pas d'improvisation&nbsp;: <b>PDF de 15 pages "comment on audite"</b> téléchargeable avant signature. Vos devs peuvent le lire, le challenger, proposer des ajustements. Conforme <b>ISO 19011</b>.</p>
          <div class="at-roi-step-foot">→ Livrable reproductible</div>
        </div>

        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">02</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="17" cy="11" r="3"/></svg>
            </div>
          </div>
          <h4>2 devs seniors par audit</h4>
          <p>Pas de stagiaire, pas de junior "qui apprend". <b>2 devs seniors 10+ ans</b> assignés sur votre mission, plus un lead qui valide chaque livrable. Photos &amp; LinkedIn visibles dès le kickoff.</p>
          <div class="at-roi-step-foot">→ Équipe nommée dans le devis</div>
        </div>

        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">03</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
          </div>
          <h4>Livrables cumulatifs</h4>
          <p>Vous ne découvrez pas votre rapport le matin de J+10. <b>Premiers insights à J+5, matrice à J+7, deck draft à J+9</b>. Vous pouvez arrêter ou pivoter sans avoir perdu 10 jours.</p>
          <div class="at-roi-step-foot">→ Zéro effet tunnel</div>
        </div>

        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">04</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
          </div>
          <h4>No-blame &amp; board-safe</h4>
          <p>Entretiens équipe <b>off-the-record</b>, pas de noms de devs dans le rapport. Version board-safe <b>anonymisée</b> pour éviter que le rapport se retourne en négo salariale ou en M&amp;A.</p>
          <div class="at-roi-step-foot">→ Protection de vos équipes</div>
        </div>
      </div>

      <div class="at-roi-how-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Méthodologie mesurée sur audits livrés. Adaptable au format Express (3-5 j) ou Deep (15-20 j). Pour les Tech DD M&amp;A à 20-30 j, <b>ajout d'une phase d'analyse légale / IP</b> en coordination avec vos avocats.
      </div>
    </div>
  </div>
</section>
`;
