export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE -->
<section class="oi-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "un outil interne Hagnéré" veut dire</div>
        <h2>Douze livrables inclus<br>dans chaque mission.</h2>
      </div>
      <div class="right">
        "Faire un outil interne" c'est trop flou. Voilà ce qui rentre dans le forfait — et ce qui n'y rentre pas.
        Pas d'avenant surprise à J+60, pas de rallonge "formation" à ajouter au dernier moment.
      </div>
    </div>

    <div class="oi-check-grid">
      <!-- INCLUS -->
      <div class="oi-check-col oi-check-in reveal">
        <div class="oi-check-head">
          <div class="oi-check-badge oi-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            INCLUS DANS LE FORFAIT
          </div>
          <h3>Douze livrables, à chaque projet.</h3>
        </div>
        <ul class="oi-check-list">
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Audit terrain des processus actuels</b> — interviews avec 3 à 5 utilisateurs finaux, observation de leur quotidien, cartographie Figma du workflow à digitaliser.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>SSO / Active Directory / Azure AD</b> — connexion automatique depuis le SI existant, pas de nouveau mot de passe pour vos équipes.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Permissions RBAC granulaires</b> — rôles fins (DAF, compta, commercial, opérateur), visibilité par entité/site, impersonation support.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Audit trail complet</b> — chaque action horodatée (qui, quoi, quand, ancienne valeur, nouvelle valeur). Exigence DAF + conformité interne.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Intégrations à votre SI existant</b> — 2 à 4 connecteurs (Sage, Cegid, Pennylane, Salesforce, Active Directory) pensés dès la v1, pas en option.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Migration Excel / Access / ancien outil</b> — scripts d'import, nettoyage, réconciliation, vérification manuelle avec vos équipes.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Agents IA ciblés</b> — 1 à 2 automatisations intelligentes (extraction de factures, relances auto, classification de tickets) qui remplacent 5 à 15 h/semaine de tâches manuelles.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Formation équipe &amp; onboarding</b> — 1 journée sur site (ou visio), vidéo Loom de 10 min, guide PDF imprimable, super-users formés pour prendre le relais.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Sessions Q&amp;A à J+30 et J+90</b> — retour sur l'adoption réelle, ajustements gratuits inclus, mesure du temps gagné en chair et en os.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Conformité RGPD clé en main</b> — DPA, registre des traitements, droits d'accès/suppression, sous-traitants documentés.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Hébergement France + backups 15 min</b> — Scaleway / OVH par défaut, option cloud client (AWS/Azure) ou on-premise si votre DSI l'exige.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Code source + doc + runbook chez vous</b> — repo Git J+1, documentation technique, runbook d'exploitation. Reprise possible par votre DSI interne ou une autre ESN, quand vous voulez.</div>
          </li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="oi-check-col oi-check-out reveal reveal-d-1">
        <div class="oi-check-head">
          <div class="oi-check-badge oi-check-badge-out">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
            HORS SCOPE (ON VOUS LE DIT TÔT)
          </div>
          <h3>Ce qu'on ne fera pas<br>dans le forfait.</h3>
        </div>
        <ul class="oi-check-list oi-check-list-out">
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Refonte complète d'un ERP groupe</b> — Sage X3, SAP, Oracle : on s'y branche, on ne les remplace pas. Si c'est votre besoin, allez voir un intégrateur spécialisé.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Reprise de compta historique complète</b> — sur 5 ans de données Sage, c'est un projet dédié. On reprend l'historique utile (12-24 mois) par défaut.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Intervention hardware sur site</b> — câblage, imprimantes étiquettes, lecteurs code-barres, terminaux durcis : on dimensionne, vous posez (ou votre prestataire hardware).</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Conduite du changement lourde</b> — si votre équipe résiste au projet avant même qu'il commence, nos 3 sessions ne suffiront pas. On oriente vers un cabinet RH spécialisé en amont.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Certifications enterprise lourdes</b> — SOC 2, ISO 27001, HDS : on prépare le terrain et la conformité technique, l'audit officiel est chez un tiers habilité, pas nous.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Engagement sur l'adoption à 100 %</b> — on met tout en œuvre (co-design, super-users, formation, sessions Q&amp;A) mais l'adoption finale dépend aussi de votre management interne. C'est honnête.</div>
          </li>
        </ul>

        <div class="oi-check-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          Si un point "hors scope" doit rentrer, on en parle au cadrage et on ajuste le forfait ensemble — pas via avenant surprise à J+45.
        </div>
      </div>
    </div>
  </div>
</section>
`;
