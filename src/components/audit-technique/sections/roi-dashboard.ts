export const roiDashboardHtml = `
<!-- TIMELINE 10 JOURS · frise horizontale + 4 KPIs + 4 piliers méthodologiques -->
<section class="at-roi" id="timeline">
  <div class="at-roi-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Exemple de déroulé Standard</div>
        <h2>Sept jalons possibles,<br>à adapter au périmètre<br>et aux accès disponibles.</h2>
      </div>
      <div class="right">
        Cette frise est illustrative, pas un calendrier universel. Le devis fixe les jalons,
        les restitutions intermédiaires, le rapport final et la procédure à suivre si le périmètre évolue.
      </div>
    </div>

    <!-- Timeline horizontale -->
    <div class="at-timeline reveal reveal-d-1">
      <div class="at-timeline-head">
        <span class="at-timeline-k">DÉROULÉ DE VOTRE AUDIT STANDARD · 10 J OUVRÉS</span>
        <span class="at-timeline-meta">Intervenants nommés au devis</span>
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
            <span class="at-timeline-title">Cadrage &amp; confidentialité</span>
            <span class="at-timeline-body">Périmètre, contrat, NDA éventuel et accès autorisés définis avant l'analyse</span>
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
            <span class="at-timeline-body">Dimensions et échantillons analysés par les intervenants nommés au devis</span>
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
            <span class="at-timeline-body">Matrice impact/effort, scoring /100 par dimension, <b>Tech Debt P&amp;L chiffré</b>, positionnement vs référentiels publics</span>
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
            <span class="at-timeline-milestone">Jalon illustratif · livraison finale</span>
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
        <div class="at-roi-kpi-k">Confidentialité cadrée</div>
        <div class="at-roi-kpi-n">NDA éventuel avant les accès sensibles</div>
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
        <div class="at-roi-kpi-n">Périmètre et critères communiqués avant signature</div>
      </div>
    </div>

    <!-- 4 piliers méthodologiques -->
    <div class="at-roi-how reveal reveal-d-2">
      <div class="at-roi-how-head">
        <span class="at-roi-how-n">/ les 4 piliers qui tiennent la méthode</span>
        <h3>Comment cadrer un audit<br>pour obtenir des constats<br>traçables et exploitables.</h3>
      </div>

      <div class="at-roi-how-grid">
        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">01</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
          </div>
          <h3>Méthodologie documentée</h3>
          <p>La méthode, les critères, les outils et les limites sont communiqués avant signature. Vos devs peuvent les lire, les challenger et proposer des ajustements. Les principes applicables du référentiel ISO 19011 servent de guide, sans revendiquer une certification.</p>
          <div class="at-roi-step-foot">→ Livrable reproductible</div>
        </div>

        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">02</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="17" cy="11" r="3"/></svg>
            </div>
          </div>
          <h3>Équipe adaptée au périmètre</h3>
          <p>Les intervenants, leur rôle et leur niveau d'expérience sont nommés dans le devis à partir des compétences réellement nécessaires. Aucun niveau d'ancienneté supérieur aux profils publics n'est présumé.</p>
          <div class="at-roi-step-foot">→ Composition nommée dans le devis</div>
        </div>

        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">03</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
          </div>
          <h3>Livrables cumulatifs</h3>
          <p>Les restitutions intermédiaires et la procédure de pivot sont inscrites au devis. Leur fréquence dépend de la durée et du périmètre de la mission.</p>
          <div class="at-roi-step-foot">→ Zéro effet tunnel</div>
        </div>

        <div class="at-roi-step">
          <div class="at-roi-step-top">
            <span class="at-roi-step-n">04</span>
            <div class="at-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
          </div>
          <h3>No-blame &amp; board-safe</h3>
          <p>Les règles de citation, les destinataires et l'éventuelle version anonymisée sont convenus avant les entretiens. Aucune confidentialité particulière n'est présumée hors document signé.</p>
          <div class="at-roi-step-foot">→ Protection de vos équipes</div>
        </div>
      </div>

      <div class="at-roi-how-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Exemple de méthode à confirmer au devis. Une analyse juridique ou de propriété intellectuelle relève de vos avocats ou d'un conseil compétent&nbsp;; nous ne fournissons que les éléments techniques convenus.
      </div>
    </div>
  </div>
</section>
`;
