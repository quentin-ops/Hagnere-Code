export const comparisonHtml = `
<!-- COMPARATIF : SUR-MESURE vs ALTERNATIVES -->
<section class="oi-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pourquoi pas no-code, SaaS ou ESN classique ?</div>
        <h2>On décline l'excuse la plus courante<br>point par point.</h2>
      </div>
      <div class="right">
        Chaque alternative peut être la bonne. Cette grille liste les questions à vérifier dans
        les offres et contrats&nbsp;; elle ne décrit pas tous les éditeurs, outils no-code ou ESN.
      </div>
    </div>

    <div class="oi-compare-table reveal">
      <div class="oi-compare-row oi-compare-head">
        <div class="oi-compare-cell oi-compare-cell-k">— CRITÈRE</div>
        <div class="oi-compare-cell oi-compare-cell-us">
          <div class="oi-compare-us-tag">NOUS</div>
          <div class="oi-compare-us-title">Sur mesure Hagnéré</div>
        </div>
        <div class="oi-compare-cell">
          <div class="oi-compare-other-tag">ALTERNATIVE 1</div>
          <div class="oi-compare-other-title">No-code (Airtable, Notion, Softr)</div>
        </div>
        <div class="oi-compare-cell">
          <div class="oi-compare-other-tag">ALTERNATIVE 2</div>
          <div class="oi-compare-other-title">SaaS du marché (HubSpot, Monday)</div>
        </div>
        <div class="oi-compare-cell">
          <div class="oi-compare-other-tag">ALTERNATIVE 3</div>
          <div class="oi-compare-other-title">ESN classique (régie, TJM)</div>
        </div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Adapté à votre vrai process</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Périmètre et utilisateurs consultés au devis</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Tester limites, gouvernance et montée en charge</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Réaliser un fit-gap sur les processus clés</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier méthode, équipe nommée et gouvernance</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Intègre Sage, Cegid, AD, ERP legacy</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Flux, droits et reprise sur erreur au devis</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier connecteurs, quotas et supervision</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier API, plan tarifaire et limitations</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier expérience et coût de chaque interface</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Propriété du code &amp; portabilité</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Droits, dépôt et passation écrits au devis</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Tester export, formats et dépendances plateforme</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Lire clauses de sortie et récupération des données</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier droits, dépôt, documentation et licences</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Coût total sur 3 ans</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Devis + hébergement + maintenance + évolution</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Licences + réalisation + exploitation</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Licences + options + intégration + sortie</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Forfait/régie + pilotage + exploitation</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Délai de livraison</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Jalons, dépendances et recette au devis</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Dépend du périmètre et des intégrations</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Dépend de la configuration et de la migration</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Dépend du dispositif et de la gouvernance</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Risque DSI / RSSI</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Contrôles et preuves propres au projet</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier données, accès, logs et sous-traitants</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier certifications, options et responsabilité</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Vérifier preuves, accès et responsabilité partagée</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Verdict honnête</div>
        <div class="oi-compare-cell oi-compare-cell-us oi-compare-verdict">À retenir si le <b>besoin différenciant</b> justifie le coût de possession.</div>
        <div class="oi-compare-cell oi-compare-verdict">À retenir si la plateforme couvre durablement le risque et la gouvernance.</div>
        <div class="oi-compare-cell oi-compare-verdict">À retenir si le produit couvre le besoin sans adaptations disproportionnées.</div>
        <div class="oi-compare-cell oi-compare-verdict">À retenir si l'organisation et les compétences correspondent à la mission.</div>
      </div>
    </div>

    <div class="oi-compare-foot reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      Si vous hésitez entre ces 4 options, l'Audit processus 1 jour à 990 € vous sort de l'hésitation avec des chiffres sur votre cas précis.
    </div>
  </div>
</section>
`;
