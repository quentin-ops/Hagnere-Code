export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE -->
<section class="sa-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "un SaaS Hagnéré" veut dire</div>
        <h2>Douze briques incluses<br>dans chaque livraison.</h2>
      </div>
      <div class="right">
        "On fait un SaaS" c'est trop vague. Voilà la liste exacte de ce qui rentre dans
        le forfait — et ce qui n'y rentre pas. Pas d'avenant surprise à J+60.
      </div>
    </div>

    <div class="sa-check-grid">
      <!-- INCLUS -->
      <div class="sa-check-col sa-check-in reveal">
        <div class="sa-check-head">
          <div class="sa-check-badge sa-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            INCLUS DANS LE FORFAIT
          </div>
          <h3>Douze briques, à chaque projet.</h3>
        </div>
        <ul class="sa-check-list">
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Architecture multi-tenant</b> — plusieurs clients finaux sur un seul code, isolation des données, déploiement par sous-domaine ou custom domain.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Auth complète + SSO</b> — email, Google, Microsoft, Apple, SAML entreprise, invitations, récupération de mot de passe, 2FA.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Facturation SaaS Stripe</b> — plans, essais gratuits, proratas up/downgrade, webhooks, relances, portail client Stripe, factures PDF.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Permissions RBAC</b> — équipes, rôles, droits par ressource, délégation, audit log horodaté.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Onboarding guidé</b> — tunnel d'inscription, données de démo, checklist premier usage, emails de démarrage.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Back-office admin sur mesure (React)</b> — impersonation support, stats de santé, gestion utilisateurs, feature flags, overrides.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Emails transactionnels</b> — templates versionnés, analytics d'ouverture, DKIM/SPF/DMARC, anti-bounce.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Conformité RGPD clé en main</b> — DPA, registre, cookies, export &amp; droit à l'oubli, sous-traitants.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Observabilité</b> — Sentry erreurs, monitoring perfs, queues Redis instrumentées, logs structurés, alertes 24/7.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Infra hébergée en France</b> — Scaleway/OVH, chiffrement AES-256, sauvegardes toutes les 15 min, TLS 1.3.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>CI/CD + tests + Docker</b> — GitHub Actions, tests unitaires &amp; end-to-end, déploiement zéro-downtime, rollback 1 clic.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Documentation + formation</b> — README technique, guides d'exploitation, journée de passation, repo Git livré chez vous.</div>
          </li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="sa-check-col sa-check-out reveal reveal-d-1">
        <div class="sa-check-head">
          <div class="sa-check-badge sa-check-badge-out">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
            HORS SCOPE (ON VOUS LE DIT TÔT)
          </div>
          <h3>Ce qu'on ne fera pas<br>dans le forfait.</h3>
        </div>
        <ul class="sa-check-list sa-check-list-out">
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Acquisition marketing</b> — SEO, Ads, outbound, cold emails : c'est nos <b>autres services</b>, pas dans le dev.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Comptes développeur Apple / Google</b> — vous les ouvrez (c'est rapide), on publie les apps mobiles dessus.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Support utilisateur final</b> — c'est vous (ou une équipe dédiée). On livre un back-office support, pas des agents humains.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Migrations massives de données tierces</b> — scoping séparé si &gt; 100k enregistrements ou structure exotique.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Certifications lourdes</b> — SOC2, ISO 27001, HDS : on prépare le terrain, l'audit officiel est chez un tiers habilité.</div>
          </li>
          <li>
            <div class="sa-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Garanties business</b> — on livre un produit solide, pas des promesses d'ARR. Le marché, c'est votre job.</div>
          </li>
        </ul>

        <div class="sa-check-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          Si un de ces points doit rentrer dans le forfait, on en parle au cadrage et on ajuste le périmètre ensemble — pas via avenant surprise.
        </div>
      </div>
    </div>
  </div>
</section>
`;
