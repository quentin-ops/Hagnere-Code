export const miniAuditHtml = `
<!-- MINI-AUDIT · 5 questions interactives · score + email capture -->
<section class="me-audit" id="mini-audit">
  <div class="me-audit-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Mini-audit gratuit · 90 secondes</div>
        <h2 style="color:#fff">Dans quel état est<br>votre app en prod&nbsp;? <span class="accent">Score en 90 s.</span></h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.65)">
        Cinq questions simples. Un score sur 100 avec les <b style="color:#fff">3 points critiques
        à corriger en priorité</b>. Résultat immédiat à l'écran, optionnel par email.
        Aucune donnée stockée sans votre accord.
      </div>
    </div>

    <div class="me-audit-box reveal reveal-d-1" data-audit-step="0">
      <!-- Progress bar -->
      <div class="me-audit-progress">
        <div class="me-audit-progress-info">
          <span class="me-audit-step-label">Question <b data-audit-current>1</b> / 5</span>
          <span class="me-audit-duration">⏱ 90 s max</span>
        </div>
        <div class="me-audit-progress-bar">
          <div class="me-audit-progress-fill" data-audit-fill style="width: 20%"></div>
        </div>
      </div>

      <!-- Questions panels -->
      <div class="me-audit-qs">

        <div class="me-audit-q is-active" data-audit-q="0">
          <div class="me-audit-q-num">01 · Monitoring</div>
          <h3>Votre app a-t-elle un monitoring d'erreurs actif (Sentry, Rollbar, Bugsnag…) ?</h3>
          <p>Le monitoring d'erreurs, c'est ce qui vous prévient avant vos utilisateurs. Sans ça, vous découvrez les bugs par les plaintes — trop tard.</p>
          <div class="me-audit-options">
            <label class="me-audit-opt">
              <input type="radio" name="audit-q0" value="20" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Oui, branché et actif, alertes Slack configurées</span>
                <span class="me-audit-opt-sub">Vous êtes prévenus &lt; 5 min sur erreurs P1</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q0" value="10" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Partiellement (outil installé mais alerting vague)</span>
                <span class="me-audit-opt-sub">Sentry posé il y a longtemps, personne ne regarde</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q0" value="0" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Non, aucun monitoring externe</span>
                <span class="me-audit-opt-sub">Vous découvrez les bugs par les clients</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="me-audit-q" data-audit-q="1">
          <div class="me-audit-q-num">02 · Sécurité &amp; CVE</div>
          <h3>Vos dépendances (composer, npm) sont-elles mises à jour régulièrement ?</h3>
          <p>Une vulnérabilité critique connue et exploitable doit être priorisée selon son exposition, ses compensations et les tests nécessaires au correctif.</p>
          <div class="me-audit-options">
            <label class="me-audit-opt">
              <input type="radio" name="audit-q1" value="20" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Oui, Dependabot + Snyk actifs, auto-merge mineurs</span>
                <span class="me-audit-opt-sub">Délais définis par criticité</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q1" value="10" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">De temps en temps, quand on a le temps</span>
                <span class="me-audit-opt-sub">Dernière mise à jour il y a 2-6 mois</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q1" value="0" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Jamais touché depuis la mise en prod</span>
                <span class="me-audit-opt-sub">Laravel 8, Node 14, CVE qui s'empilent</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="me-audit-q" data-audit-q="2">
          <div class="me-audit-q-num">03 · Backups &amp; DR</div>
          <h3>Vos backups sont-ils testés en restauration ?</h3>
          <p>Une sauvegarde n'est une preuve de reprise que si sa restauration, son intégrité et sa procédure ont été testées.</p>
          <div class="me-audit-options">
            <label class="me-audit-opt">
              <input type="radio" name="audit-q2" value="20" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Oui, restauration testée chaque trimestre</span>
                <span class="me-audit-opt-sub">RPO / RTO mesurés selon le besoin</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q2" value="10" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Backups en place, restauration jamais testée</span>
                <span class="me-audit-opt-sub">On croise les doigts</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q2" value="0" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Pas sûr qu'il y ait des backups</span>
                <span class="me-audit-opt-sub">Ou pas testés depuis la mise en prod</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="me-audit-q" data-audit-q="3">
          <div class="me-audit-q-num">04 · Incident response</div>
          <h3>Avez-vous une procédure d'incident documentée (runbook) ?</h3>
          <p>Quand un incident P1 arrive, un runbook testé réduit l'improvisation et permet de mesurer le temps réel de reprise.</p>
          <div class="me-audit-options">
            <label class="me-audit-opt">
              <input type="radio" name="audit-q3" value="20" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Oui, runbooks versionnés + astreinte PagerDuty</span>
                <span class="me-audit-opt-sub">Délai de post-mortem convenu</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q3" value="10" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Procédure informelle dans la tête de 1-2 personnes</span>
                <span class="me-audit-opt-sub">Pas écrit, pas partagé</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q3" value="0" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">On improvise à chaque incident</span>
                <span class="me-audit-opt-sub">Aucun runbook, pas d'astreinte définie</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
          </div>
        </div>

        <div class="me-audit-q" data-audit-q="4">
          <div class="me-audit-q-num">05 · Bus factor</div>
          <h3>Combien de personnes connaissent votre codebase en profondeur ?</h3>
          <p>Si votre unique dev part, combien de mois avant qu'un remplaçant soit opérationnel ? La réponse dit tout sur la fragilité de votre run.</p>
          <div class="me-audit-options">
            <label class="me-audit-opt">
              <input type="radio" name="audit-q4" value="20" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">3 personnes ou plus, avec documentation à jour</span>
                <span class="me-audit-opt-sub">Bus factor ≥ 3, onboarding en &lt; 2 sem.</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q4" value="10" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">2 personnes, documentation partielle</span>
                <span class="me-audit-opt-sub">Bus factor = 2, risque modéré</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q4" value="5" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Une seule personne (freelance ou dev interne unique)</span>
                <span class="me-audit-opt-sub">Bus factor = 1, fragilité critique</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
            <label class="me-audit-opt">
              <input type="radio" name="audit-q4" value="0" data-audit-answer>
              <span class="me-audit-opt-body">
                <span class="me-audit-opt-title">Le dev qui a fait l'app n'est plus là</span>
                <span class="me-audit-opt-sub">App orpheline · remédiation urgente</span>
              </span>
              <span class="me-audit-opt-check"></span>
            </label>
          </div>
        </div>

      </div>

      <!-- Navigation -->
      <div class="me-audit-nav">
        <button type="button" class="me-audit-prev" data-audit-prev disabled>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Précédent
        </button>
        <button type="button" class="me-audit-next" data-audit-next disabled>
          Question suivante
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>

    <!-- RESULT PANEL (hidden until computed) -->
    <div class="me-audit-result reveal" data-audit-result hidden>
      <div class="me-audit-result-head">
        <div class="me-audit-result-badge" data-audit-badge>Healthy</div>
        <h3>Votre score&nbsp;: <span data-audit-score>0</span> / 100</h3>
        <p data-audit-verdict>Votre app est globalement en bonne santé. Quelques points à consolider.</p>
      </div>

      <!-- KPI cards -->
      <div class="me-audit-result-grid">
        <div class="me-audit-result-gauge">
          <svg viewBox="0 0 200 120" aria-hidden="true">
            <defs>
              <linearGradient id="me-audit-grad-r" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#EF4444"/>
                <stop offset="40%" stop-color="#F59E0B"/>
                <stop offset="70%" stop-color="#34D399"/>
                <stop offset="100%" stop-color="#10B981"/>
              </linearGradient>
            </defs>
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="12" stroke-linecap="round"/>
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#me-audit-grad-r)" stroke-width="12" stroke-linecap="round" stroke-dasharray="251" stroke-dashoffset="251" data-audit-arc/>
            <circle cx="20" cy="100" r="5" fill="#fff" stroke="#6D28D9" stroke-width="2" data-audit-needle/>
            <text x="100" y="80" text-anchor="middle" font-family="Geist" font-weight="700" font-size="36" fill="#fff" data-audit-score-big>0</text>
            <text x="100" y="102" text-anchor="middle" font-family="Geist Mono" font-size="10" fill="rgba(255,255,255,0.55)" letter-spacing="1">/ 100</text>
          </svg>
        </div>

        <div class="me-audit-result-priorities">
          <div class="me-audit-priorities-label">🎯 Les 3 priorités de remédiation</div>
          <ol class="me-audit-priorities-list" data-audit-priorities></ol>
        </div>
      </div>

      <!-- Result explanation + CTA -->
      <div class="me-audit-result-cta">
        <div class="me-audit-email-form">
          <div class="me-audit-email-label">Résultat indicatif, calculé uniquement dans votre navigateur</div>
          <p>Ce mini-audit ne transmet aucune donnée et ne génère pas de rapport par e-mail. Un audit complet nécessite des preuves et un périmètre validé avec vous.</p>
        </div>

        <div class="me-audit-or">puis</div>

        <a href="#contact" class="btn btn-accent btn-lg me-audit-cta">
          Cadrer un audit complet
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>

      <button type="button" class="me-audit-restart" data-audit-restart>
        ↺ Refaire l'audit
      </button>
    </div>
  </div>
</section>
`;
