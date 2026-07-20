export const trustBadgesHtml = `
<!-- TRUST BADGES · points à contractualiser (audit technique) -->
<section class="at-trust">
  <div class="wrap">
    <div class="at-trust-head reveal">
      <div class="eyebrow">— Les points à contractualiser</div>
      <h2>Ce que le devis doit écrire<br>avant de démarrer.</h2>
      <p>Les CGV fixent le cadre général. Le devis précise pour chaque mission la confidentialité, l'équipe, les livrables, les critères d'acceptation, les accès, les délais et la réversibilité.</p>
    </div>

    <div class="at-trust-grid">
      <div class="at-trust-card reveal">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        </div>
        <h3>Confidentialité avant les accès</h3>
        <p>Un NDA peut être signé avant tout partage de code ou de documentation sensible. Sa portée, ses destinataires et sa durée figurent dans le document signé.</p>
        <div class="at-trust-foot">— NDA selon le contexte</div>
      </div>

      <div class="at-trust-card reveal reveal-d-1">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
        </div>
        <h3>Diagnostic et remédiation séparés</h3>
        <p>Les preuves et hypothèses sont visibles. Une mission de remédiation reçoit son propre devis ; toute condition commerciale éventuelle y est indiquée explicitement.</p>
        <div class="at-trust-foot">— Aucune remise présumée</div>
      </div>

      <div class="at-trust-card reveal reveal-d-2">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>Critères d'acceptation définis</h3>
        <p>Le devis fixe le nombre, la forme et le niveau de preuve attendus, ainsi que la procédure de correction ou de contestation des livrables.</p>
        <div class="at-trust-foot">— Recette écrite au devis</div>
      </div>

      <div class="at-trust-card reveal reveal-d-3">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
        </div>
        <h3>Version board-safe anonymisée</h3>
        <p>En plus du rapport complet, une version <b>sans noms de devs, sans blame personnel</b>, partageable à votre board / investisseur / acquéreur sans risque de fragiliser l'équipe.</p>
        <div class="at-trust-foot">— Si prévue au devis</div>
      </div>

      <div class="at-trust-card reveal">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        </div>
        <h3>Méthode documentée</h3>
        <p>Dimensions, critères, outils, échantillonnage et limites sont communiqués avant signature. Les principes utiles d'ISO 19011 peuvent guider la méthode sans constituer une certification.</p>
        <div class="at-trust-foot">— Présentée au cadrage</div>
      </div>

      <div class="at-trust-card reveal reveal-d-1">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>Références sous contrôle du client</h3>
        <p>Aucune référence nominative n'est publiée sans accord écrit. Le devis indique si une version anonymisée distincte est nécessaire pour le board ou la data room.</p>
        <div class="at-trust-foot">— Autorisation écrite requise</div>
      </div>

      <div class="at-trust-card reveal reveal-d-2">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
        </div>
        <h3>Exemple interne sur demande</h3>
        <p>Un exemple construit sur un produit interne peut être présenté pendant le cadrage. Il est identifié comme démonstration et non comme un audit client.</p>
        <div class="at-trust-foot">— Présentation pendant l'échange</div>
      </div>

      <div class="at-trust-card reveal reveal-d-3">
        <div class="at-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h3>Droits et réversibilité clarifiés</h3>
        <p>Les livrables spécifiques sont transférés après paiement complet conformément aux CGV. Les composants préexistants, outils génériques et licences tierces restent soumis à leurs droits propres.</p>
        <div class="at-trust-foot">— Règles alignées avec les CGV</div>
      </div>
    </div>
  </div>
</section>
`;
