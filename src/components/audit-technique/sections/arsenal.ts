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
        Trois familles d'outils, trois missions. Chacun documente, accélère ou vérifie une étape précise des 10 jours.
        <b>Licences enterprise incluses dans le prix fixe · 0 rebilling.</b> Vos données n'entrent jamais dans des outils dont vous ne maîtrisez pas le cycle de vie.
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
          <div class="at-arsenal-tool-body">Branché sur votre repo pendant 10 jours. <b>Bugs, smells, vulnérabilités, security hotspots</b> priorisés CVSS. Analyse de complexité cyclomatique, détection de god-classes, ratio de duplication. Licence enterprise incluse, révoquée à J+11.</div>
          <div class="at-arsenal-tool-chip">Licence pro · incluse</div>
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
          <div class="at-arsenal-tool-body">Règles custom que SonarQube ne détecte pas. <b>Patterns spécifiques à votre stack</b> (Laravel ActiveRecord leaks, React hooks stale closures, SQL injection complexes). Bibliothèque propriétaire de 200+ règles accumulée sur nos audits.</div>
          <div class="at-arsenal-tool-chip">Règles propriétaires</div>
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
          <div class="at-arsenal-tool-chip">Licence enterprise · incluse</div>
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
          <div class="at-arsenal-tool-body">Scan complet de l'historique git à la recherche de <b>secrets commités</b>&nbsp;: API keys, tokens, private keys, JWT secrets. Une majorité des audits que nous faisons révèle au moins 1 secret encore actif dans l'historique.</div>
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
              <div class="at-arsenal-tool-name">Partenaire pentest CERT-FR</div>
              <div class="at-arsenal-tool-kind">Option · +8-15 k€</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Pentest externe via partenaire agréé CERT-FR pour les audits qui visent SOC2 / ISO 27001 / clients enterprise exigeants. <b>OWASP top 10 complet, rapport CVSS</b>, dashboard de follow-up, re-test après remédiation. Chiffré à l'avance dans le devis initial.</div>
          <div class="at-arsenal-tool-chip">Partenaire externe · transparent</div>
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
              <div class="at-arsenal-tool-kind">Traces 30 jours · p95/p99</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Branchement APM temporaire (trial enterprise) pour capturer <b>30 jours de traces, p95/p99 latence, DB slow queries, erreurs en cascade</b>. Vue exhaustive du comportement réel de votre app en production, sans se baser sur du déclaratif.</div>
          <div class="at-arsenal-tool-chip">30 j traces live · révoqué J+11</div>
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
              <div class="at-arsenal-tool-name">Méthodologie propriétaire</div>
              <div class="at-arsenal-tool-kind">benchmark percentile ·</div>
            </div>
          </div>
          <div class="at-arsenal-tool-body">Votre score n'est pas absolu, il est <b>comparé à notre base d.audits</b> SaaS B2B / e-commerce / edtech français comparables. « Vous êtes au 42e percentile sur la sécurité » est plus utile que « Votre score est 54 / 100 ». Base propriétaire qui grossit à chaque audit.</div>
          <div class="at-arsenal-tool-chip">Benchmark percentile</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
