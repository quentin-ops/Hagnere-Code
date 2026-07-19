export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE — M&E -->
<section class="me-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "TMA Hagnéré" veut dire</div>
        <h2>Douze briques à cadrer<br>dans votre forfait mensuel.</h2>
      </div>
      <div class="right">
        "On fait de la maintenance" est trop vague. Cette liste sert à composer le périmètre&nbsp;:
        <b>seules les briques retenues et chiffrées dans le devis sont incluses</b>.
      </div>
    </div>

    <div class="me-check-grid">
      <!-- INCLUS -->
      <div class="me-check-col me-check-in reveal">
        <div class="me-check-head">
          <div class="me-check-badge me-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            À DÉFINIR AU DEVIS
          </div>
          <h3>Douze briques possibles.</h3>
        </div>
        <ul class="me-check-list">
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Équipe et continuité</b> — personnes mobilisées, rôles, statut et modalités de remplacement précisés au devis.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Supervision</b> — erreurs, disponibilité, métriques, logs, alertes et plages de couverture sélectionnés selon l'architecture.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Patches sécurité automatisés</b> — Dependabot + Renovate en mode merge-auto pour les mises à jour non-breaking, revue humaine pour les major bumps.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Traitement des vulnérabilités</b> — seuils, priorité, délai cible, validation et communication définis au contrat.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Stratégie de déploiement</b> — blue-green, migrations progressives ou fenêtre de maintenance selon les capacités réelles de la stack.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Sauvegarde et reprise</b> — fréquence, rétention, RPO/RTO cibles et tests de restauration définis selon le fournisseur et le budget.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Support</b> — canal, horaires, catégories d'urgence et délais cibles écrits au devis.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Astreinte optionnelle</b> — plage, outil d'escalade, temps de prise en charge et éventuelles pénalités explicitement contractualisés.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Roadmap trimestrielle partagée</b> — Linear ou Notion ouvert, OKRs tech alignés sur vos OKRs produit. Comité produit/tech mensuel 1 h.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Retour d'incident</b> — délai, format, destinataires et suivi des actions adaptés à la criticité convenue.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Rapport mensuel business-ready</b> — uptime, incidents, deploys, patches, velocity, consommation jours. Chiffres bruts, pas de marketing.</div>
          </li>
          <li>
            <div class="me-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Passation de fin de contrat</b> — éléments remis selon les CGV ; durée, participants et éventuel coût de la passation précisés au devis.</div>
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
