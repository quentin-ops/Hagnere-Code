export const problemsHtml = `
<!-- PROBLEMS · 6 triggers business qui déclenchent un audit technique -->
<section class="at-problems" id="triggers">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Six situations qui déclenchent un audit</div>
        <h2>Six situations typiques<br>à traiter comme des scénarios<br>illustratifs.</h2>
      </div>
      <div class="right">
        Ces exemples ne décrivent pas des dossiers clients Hagnéré Code. Le délai,
        le prix, les risques et les livrables dépendent des accès, du périmètre et
        des critères d&apos;acceptation confirmés au devis.
      </div>
    </div>

    <div class="sap-grid">
      <!-- 01 · Levée de fonds -->
      <article class="sap-card reveal">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <span class="sap-n">01</span>
        </div>
        <h3>« Notre VC demande une tech DD avant de signer le term sheet »</h3>
        <p>Un investisseur demande une due diligence technique. Il faut définir les questions, les accès autorisés, les personnes mobilisées et la date de décision. L&apos;effet éventuel sur l&apos;opération ne peut pas être prédit par l&apos;auditeur.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Périmètre vendeur · calendrier et prix au devis</span>
        </div>
      </article>

      <!-- 02 · M&A -->
      <article class="sap-card reveal reveal-d-1">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M9 12l2 2 4-4M8 3v4h8V3"/></svg>
          </div>
          <span class="sap-n">02</span>
        </div>
        <h3>« On rachète une boîte, il faut auditer le code avant le deal »</h3>
        <p>Une acquisition nécessite d&apos;examiner, dans le périmètre autorisé, les licences, la propriété intellectuelle, les vulnérabilités connues et les hypothèses de remédiation. La décision et la valorisation restent celles des parties et de leurs conseils.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Tech DD M&amp;A · périmètre et prix au devis</span>
        </div>
      </article>

      <!-- 03 · Nouveau CTO -->
      <article class="sap-card reveal reveal-d-2">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
          </div>
          <span class="sap-n">03</span>
        </div>
        <h3>« Notre nouveau CTO arrive, on veut une baseline indépendante »</h3>
        <p>Un nouveau responsable technique peut demander un état des lieux indépendant pour préparer ses priorités. La méthode, les entretiens, la confidentialité et la forme de restitution sont arrêtés avec l&apos;équipe concernée.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Baseline technique · calendrier et prix au devis</span>
        </div>
      </article>

      <!-- 04 · SOC2 / ISO27001 -->
      <article class="sap-card reveal">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <span class="sap-n">04</span>
        </div>
        <h3>« Un client enterprise exige SOC2 ou ISO 27001 avant de signer »</h3>
        <p>Un client demande des éléments de sécurité ou une certification. Une analyse d&apos;écart peut aider à prioriser les travaux, sans constituer une certification ni garantir son obtention. Le référentiel et le recours à un organisme qualifié doivent être définis au devis.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Analyse d&apos;écart · référentiel et prix au devis</span>
        </div>
      </article>

      <!-- 05 · Incident / post-mortem -->
      <article class="sap-card reveal reveal-d-1">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>
          </div>
          <span class="sap-n">05</span>
        </div>
        <h3>« On a eu un incident majeur, besoin d'un post-mortem indépendant »</h3>
        <p>Après un incident, un tiers peut faciliter la collecte des faits et l&apos;analyse des causes dans le cadre autorisé. Le nombre d&apos;actions, le calendrier et l&apos;éventuelle intervention d&apos;experts forensiques ou juridiques sont définis selon le dossier.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Post-incident · urgence, accès et prix au devis</span>
        </div>
      </article>

      <!-- 06 · Go/no-go refonte -->
      <article class="sap-card reveal reveal-d-2">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
          </div>
          <span class="sap-n">06</span>
        </div>
        <h3>« On hésite entre patcher l'existant ou refaire à zéro »</h3>
        <p>Des décideurs hésitent entre maintenir, corriger ou reconstruire. L&apos;audit peut comparer plusieurs scénarios avec hypothèses et incertitudes explicites. Une éventuelle mission de mise en œuvre est distincte et les conflits d&apos;intérêts sont déclarés.</p>
        <div class="sap-foot sap-foot-hot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Go/no-go documenté · calendrier et prix au devis</span>
        </div>
      </article>
    </div>
  </div>
</section>
`;
