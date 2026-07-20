export const arsenalHtml = `
<!-- ARSENAL AUDIT · 9 outils pros · Analyse statique · Sécurité · Observabilité -->
<section class="at-arsenal" id="arsenal">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Notre arsenal d'audit</div>
        <h2>Neuf outils pros qu'on opère,<br>pas un mur de logos.</h2>
      </div>
      <div class="right">
        Trois familles d'outils, trois missions. Chacun documente, accélère ou vérifie une étape précise de l'audit.
        <b>Outils, licences, mode d'exécution et éventuels transferts sont précisés au devis.</b> Aucun service tiers n'est présumé avant validation du périmètre.
      </div>
    </div>

    <div class="at-arsenal-grid reveal">
      <!-- Column 1 : ANALYSE STATIQUE & QUALITÉ -->
      <div class="at-arsenal-col">
        <div class="at-arsenal-col-head">
          <div class="at-arsenal-col-step">01</div>
          <div class="at-arsenal-col-title">Analyse statique &amp; qualité</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#4E9BCD">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M3 12h18M12 3v18" stroke="#fff" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" fill="#fff"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">SonarQube Enterprise</div>
              <div class="at-arsenal-tool-kind">SAST · coverage · complexité</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Selon le périmètre, une analyse SAST peut relever <b>bugs, smells, vulnérabilités et security hotspots</b>, puis les rapprocher d'une revue manuelle. L'outil, la couverture et la durée de conservation sont définis avant accès.</div>
          <div class="at-arsenal-tool-chip">Outil et licence au devis</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#1B1F23">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="8 6 2 12 8 18" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">Semgrep Pro</div>
              <div class="at-arsenal-tool-kind">Règles custom · anti-patterns</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Des règles adaptées à la stack peuvent compléter les règles standard, par exemple sur Laravel, React ou les accès SQL. La liste réellement utilisée et ses limites figurent dans la méthode d'audit.</div>
          <div class="at-arsenal-tool-chip">Règles adaptées au périmètre</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#777BB4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M8 12h8M12 8v8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">PHPStan / Psalm / TS strict</div>
              <div class="at-arsenal-tool-kind">Typage · niveau 8</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Pour Laravel/Symfony&nbsp;: PHPStan niveau 8. Pour Next.js/Node&nbsp;: TypeScript strict. Détection des <b>erreurs de typage, null-safety, dead branches, retours non explicites</b>. Un des 3 premiers indicateurs de qualité d'un code base.</div>
          <div class="at-arsenal-tool-chip">Niveau 8 benchmarké</div>
        </div>
      </div>

      <!-- Column 2 : SÉCURITÉ (accent mid) -->
      <div class="at-arsenal-col at-arsenal-col-mid">
        <div class="at-arsenal-col-head">
          <div class="at-arsenal-col-step">02</div>
          <div class="at-arsenal-col-title">Sécurité &amp; vulnérabilités</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#4C4A73">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M9 12l2 2 4-4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">Snyk + Dependabot</div>
              <div class="at-arsenal-tool-kind">SCA · CVE dépendances</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Scan complet composer / npm / Docker. <b>Priorisation CVSS</b>, exploit maturity, fix disponible. Rapport détaillé par dépendance avec chemin d'attaque possible. Critique pour la partie SOC2 / ISO 27001 si visée.</div>
          <div class="at-arsenal-tool-chip">Couverture définie au devis</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#00B4D8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <rect x="3" y="11" width="18" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M7 11V7a5 5 0 0110 0v4" fill="none" stroke="#fff" stroke-width="1.8"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">GitGuardian</div>
              <div class="at-arsenal-tool-kind">Secrets leaks · historique git</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Scan de l'historique Git selon les accès accordés, à la recherche de <b>secrets commités</b>&nbsp;: clés API, jetons, clés privées ou secrets JWT. Toute détection doit être vérifiée et les identifiants concernés révoqués.</div>
          <div class="at-arsenal-tool-chip">Historique complet scanné</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#DC2626">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M12 2v10l6 4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">Pentest indépendant en option</div>
              <div class="at-arsenal-tool-kind">Prestataire et budget au devis</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Si un audit offensif indépendant ou une qualification particulière est exigé, le client sélectionne un prestataire adapté. Une qualification PASSI est vérifiée dans l'annuaire ANSSI lorsqu'elle fait partie du cahier des charges. <b>Périmètre, rapport et re-test</b> sont contractualisés avec ce prestataire.</div>
          <div class="at-arsenal-tool-chip">Prestataire vérifié selon le besoin</div>
        </div>
      </div>

      <!-- Column 3 : OBSERVABILITÉ & BENCHMARK -->
      <div class="at-arsenal-col">
        <div class="at-arsenal-col-head">
          <div class="at-arsenal-col-step">03</div>
          <div class="at-arsenal-col-title">Observabilité &amp; benchmark</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#632CA6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M12 2l3 7h7l-6 4 2 8-6-4-6 4 2-8-6-4h7z"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">Datadog APM snapshot</div>
              <div class="at-arsenal-tool-kind">Traces et percentiles · si autorisés</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Une connexion APM temporaire peut être proposée pour examiner <b>les percentiles de latence, requêtes lentes et erreurs disponibles</b>. L'outil, la durée, l'échantillon, les droits d'accès et la révocation sont définis au devis avec votre équipe.</div>
          <div class="at-arsenal-tool-chip">Périmètre et révocation au devis</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#F46800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.8"/>
                <path d="M6 14l3-3 3 3 4-5 2 2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">Grafana Cloud</div>
              <div class="at-arsenal-tool-kind">Dashboards · FinOps · CWV</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Dashboards sur-mesure pour la partie FinOps (breakdown coût AWS/GCP), les Core Web Vitals, les logs structurés. <b>Partageables à votre CTO</b> avant la restitution, permettent d'anticiper les questions du board.</div>
          <div class="at-arsenal-tool-chip">Dashboards sur mesure</div>
        </div>

        <div class="at-arsenal-tool">
          <div class="at-arsenal-tool-top">
            <div class="at-arsenal-tool-logo" style="background:#6D28D9">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#fff" stroke-width="2"/>
                <path d="M9 9l6 6M15 9l-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div class="at-arsenal-tool-name">Grille de scoring documentée</div>
              <div class="at-arsenal-tool-kind">référentiels publics ·</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Votre score n'est pas un chiffre sorti d'un chapeau&nbsp;: chaque dimension est notée contre des <b>référentiels externes vérifiables</b> — DORA pour la livraison, OWASP ASVS pour la sécurité, Core Web Vitals et Web Almanac pour la performance. Vous pouvez refaire le calcul, critère par critère.</div>
          <div class="at-arsenal-tool-chip">Grille remise avec le devis</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
