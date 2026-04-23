export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE — M&E -->
<section class="me-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "TMA Hagnéré" veut dire</div>
        <h2>Douze briques incluses<br>dans chaque forfait mensuel.</h2>
      </div>
      <div class="right">
        "On fait de la maintenance" c'est trop vague. Voilà la liste exacte de ce qui rentre
        dans le forfait — et ce qui n'y rentre pas. <b>Pas d'avenant surprise à J+60.</b>
      </div>
    </div>

    <div class="me-check-grid">
      <!-- INCLUS -->
      <div class="me-check-col me-check-in reveal">
        <div class="me-check-head">
          <div class="me-check-badge me-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            INCLUS DANS LE FORFAIT
          </div>
          <h3>Douze briques, tous les mois.</h3>
        </div>
        <ul class="me-check-list">
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Équipe nommée dans le contrat</b> — photo, prénom, rôle des 2 à 4 personnes qui gèrent votre compte. Remplacement garanti sous préavis, overlap 2 semaines.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Monitoring 24/7</b> — Sentry (erreurs), Better Stack (uptime + statuspage), Grafana (métriques), Axiom (logs). Alerte Slack &lt; 5 min sur incident P1.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Patches sécurité automatisés</b> — Dependabot + Renovate en mode merge-auto pour les mises à jour non-breaking, revue humaine pour les major bumps.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>CVE critiques patchés sous 48 h</b> — CVSS ≥ 7, on patche en priorité absolue. Hotfix + déploiement + communication client documentée.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Déploiements zero-downtime</b> — blue-green deploy, migrations Laravel en expand/migrate/contract, rollback 1-clic. Jamais de maintenance planifiée visible.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Backups continus &amp; DR testée</b> — PostgreSQL WAL continu, rétention 30 jours + snapshot hebdo 1 an. <b>RPO 15 min · RTO 1 h</b>. Restauration testée tous les trimestres.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Support prioritaire Slack Connect</b> — canal partagé avec votre équipe. Réponse &lt; 2 h en heures ouvrées, &lt; 30 min pour les urgences.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Astreinte contractuelle</b> — PagerDuty, MTTR cible &lt; 30 min P1. Pénalités SLA chiffrées et auto-appliquées en avoir si SLA manqué.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Roadmap trimestrielle partagée</b> — Linear ou Notion ouvert, OKRs tech alignés sur vos OKRs produit. Comité produit/tech mensuel 1 h.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Post-mortem sous 72 h</b> — pour chaque incident P1/P2, rapport documenté sans blame, action items trackés dans le backlog. Culture d'apprentissage.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Rapport mensuel business-ready</b> — uptime, incidents, deploys, patches, velocity, consommation jours. Chiffres bruts, pas de marketing.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Passation de fin de contrat</b> — si vous partez, 5 jours offerts pour former votre équipe suivante, docs exhaustives, Loom d'onboarding. <b>Pas de rétention par l'ignorance</b>.</div>
          </li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="me-check-col me-check-out reveal reveal-d-1">
        <div class="me-check-head">
          <div class="me-check-badge me-check-badge-out">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
            HORS SCOPE (ON VOUS LE DIT TÔT)
          </div>
          <h3>Ce qu'on ne fera pas<br>dans le forfait.</h3>
        </div>
        <ul class="me-check-list me-check-list-out">
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Refonte complète ou v2 from scratch</b> — si votre app doit repartir de zéro, c'est notre <b>service SaaS &amp; applications métier</b>, scoping et facturation séparés.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Factures cloud</b> — AWS / OVH / Scaleway / Vercel restent sur <b>votre compte</b>, facturés directement par le provider. Pas de rebilling, pas de margeage, pas de lock-in.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Licences SaaS tiers</b> — Stripe, Intercom, HubSpot, Sentry enterprise : ces abonnements sont à votre nom. On les paramètre et les opère, mais les factures sont chez vous.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Support end-user</b> — vos utilisateurs finaux, c'est votre équipe ou une solution dédiée (Crisp, Intercom, CS). On livre un back-office solide, pas des agents humains.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Applications mobiles natives</b> — Swift, Kotlin, React Native gros volume&nbsp;: scoping séparé. On sait maintenir des webviews + PWA, pas remplacer une équipe mobile dédiée.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Certifications officielles lourdes</b> — SOC2 Type 2, ISO 27001, HDS. <b>On prépare le terrain</b>, on monte le dossier, mais l'audit officiel est mené par un tiers habilité (Vanta, Drata, puis auditeur).</div>
          </li>
        </ul>

        <div class="me-check-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          Si un de ces points doit rentrer dans le forfait, on en parle au cadrage et on ajuste le périmètre ensemble — pas via avenant surprise.
        </div>
      </div>
    </div>
  </div>
</section>
`;
