// Logo-wall sécurité/RGPD : pas de logos clients affichés tant que les accords écrits
// ne sont pas signés. Les signaux de confiance affichés ici sont vérifiables et factuels.

export const logoWallHtml = `
<!-- LOGO WALL · trust signals factuels uniquement -->
<section class="sr-logos">
  <div class="wrap">
    <div class="sr-logos-inner reveal">
      <div class="sr-logos-label">
        <span>Comment on travaille la conformité</span>
        <span class="sr-logos-disclaimer">Pas de logos clients sans autorisation : voici les points contractuels à vérifier pour chaque mission.</span>
      </div>

      <!-- Trust strip : preuves dures, écritures discrètes -->
      <div class="sr-trust-strip">
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4" stroke-width="2"/>
          </svg>
          <span><b>Confidentialité cadrée</b> · NDA si nécessaire avant accès sensible</span>
        </div>
        <div class="sr-trust-sep" aria-hidden="true"></div>
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/>
          </svg>
          <span><b>Article 28 RGPD</b> · clauses prévues lorsque nous agissons comme sous-traitant</span>
        </div>
        <div class="sr-trust-sep" aria-hidden="true"></div>
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="9"/>
            <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/>
          </svg>
          <span><b>Prestataires et transferts</b> · région, sous-traitants ultérieurs et garanties au devis</span>
        </div>
        <div class="sr-trust-sep" aria-hidden="true"></div>
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          <span><b>Référentiels publics</b> · critères sélectionnés selon le risque, sans certification revendiquée</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
