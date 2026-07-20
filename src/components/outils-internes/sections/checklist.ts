export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE -->
<section class="oi-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "un outil interne Hagnéré" veut dire</div>
        <h2>Douze points à écrire<br>dans chaque devis.</h2>
      </div>
      <div class="right">
        "Faire un outil interne" est trop flou. Cette grille sert à décider ce qui entre dans le forfait,
        ce qui reste hors périmètre et comment une demande nouvelle sera chiffrée et acceptée.
      </div>
    </div>

    <div class="oi-check-grid">
      <!-- INCLUS -->
      <div class="oi-check-col oi-check-in reveal">
        <div class="oi-check-head">
          <div class="oi-check-badge oi-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            À PRÉCISER DANS LE FORFAIT
          </div>
          <h3>Douze décisions à ne pas laisser implicites.</h3>
        </div>
        <ul class="oi-check-list">
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Analyse des processus actuels</b> — personnes consultées, observations, preuves et format de cartographie définis selon le projet.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Identité et SSO</b> — annuaire, protocole, MFA, cycle de vie des comptes et licences à vérifier avant engagement.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Permissions</b> — rôles, ressources, séparation des tâches et éventuel accès support décrits puis testés.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Piste d'audit</b> — événements, contenu, rétention, accès et export définis d'après les risques et obligations.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Intégrations au SI existant</b> — systèmes, sens des flux, API, droits, quotas et reprise sur erreur inventoriés au devis.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Migration Excel / Access / ancien outil</b> — scripts d'import, nettoyage, réconciliation, vérification manuelle avec vos équipes.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Automatisations assistées par IA</b> — cas d'usage, échantillon de test, seuils, validation humaine, coûts et solution de repli documentés.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Formation et onboarding</b> — publics, durée, supports, environnement et critères d'autonomie précisés au devis.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Suivi d'adoption</b> — dates, indicateurs, participants et éventuels ajustements inclus sont écrits avant signature.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Socle de confidentialité</b> — mesures techniques et inventaire des sous-traitants selon le périmètre. La validation juridique reste celle du responsable de traitement et de son conseil.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Hébergement et sauvegardes</b> — fournisseur, compte, région, fréquence, rétention et tests de restauration détaillés au devis.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Code source, documentation et runbook</b> — contenu du dépôt, accès, droits et éléments de passation inventoriés dans le devis et les CGV.</div>
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
            <div><b>Reprise historique étendue</b> — volume, période, qualité, rapprochement et responsabilité de validation font l'objet d'un lot dédié.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Intervention hardware sur site</b> — câblage, imprimantes étiquettes, lecteurs code-barres, terminaux durcis : on dimensionne, vous posez (ou votre prestataire hardware).</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Conduite du changement étendue</b> — si le risque d'adoption dépasse la formation produit, le besoin est cadré séparément ou confié à un spécialiste.</div>
          </li>
          <li>
            <div class="oi-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Certification ou attestation réglementée</b> — nous fournissons les éléments techniques prévus, mais l'évaluation et la certification relèvent d'un tiers compétent.</div>
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
