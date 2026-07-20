export const storesHtml = `
<!-- STORES -->
<section class="mob-stores">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— App Store + Google Play</div>
        <h2>On gère la soumission<br>de A à Z, sous votre nom.</h2>
      </div>
      <div class="right">
        Apple et Google décident de l'acceptation et du délai de review. Le devis précise <b>les tests,
        la préparation de la fiche et le nombre d'itérations incluses</b>. Les comptes développeur peuvent être créés à votre nom.
      </div>
    </div>

    <div class="mob-stores-grid">
      <!-- Apple App Store -->
      <div class="mob-store-block reveal">
        <div class="mob-store-block-head">
          <div class="mob-store-block-logo mob-store-block-logo-apple">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.1zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          </div>
          <div>
            <div class="mob-store-block-kicker">iOS · Apple App Store</div>
            <div class="mob-store-block-name">App Store Connect</div>
          </div>
        </div>

        <ul class="mob-store-block-list">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Création compte Apple Developer à votre nom, facturé directement par Apple</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Génération certificats, profils provisioning, push APNs</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Fiche store : nom, description, mots-clés, captures iPhone + iPad</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Build EAS Submit · upload TestFlight beta</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Soumission App Review · itérations définies au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Réponse aux questions du reviewer selon le délai convenu</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>ASO (App Store Optimization) : titre, sous-titre, 100 mots-clés</li>
        </ul>

        <div class="mob-store-block-foot">
          <span class="mob-store-block-pill">Délai décidé par Apple</span>
          <span class="mob-store-block-pill">Règles vérifiées au cadrage</span>
          <span class="mob-store-block-pill">Compte au nom du client</span>
        </div>
      </div>

      <!-- Google Play -->
      <div class="mob-store-block reveal reveal-d-1">
        <div class="mob-store-block-head">
          <div class="mob-store-block-logo mob-store-block-logo-google">
            <svg width="28" height="28" viewBox="0 0 24 24"><path d="M3.6 1.2c-.4.4-.6 1-.6 1.8v18c0 .8.2 1.4.6 1.8l11-11-11-10.6z" fill="#34A853"/><path d="M16.6 8.4l-3-3-9.4 9.2 3 3 9.4-9.2z" fill="#4285F4"/><path d="M21 11l-4.4-2.6-3.4 3.6 3.4 3.6L21 13c1-.6 1-1.4 0-2z" fill="#FBBC04"/><path d="M14 14.6l-9.4 9.2 11-11L14 14.6z" fill="#EA4335"/></svg>
          </div>
          <div>
            <div class="mob-store-block-kicker">Android · Google Play</div>
            <div class="mob-store-block-name">Google Play Console</div>
          </div>
        </div>

        <ul class="mob-store-block-list">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Création compte Google Play à votre nom, facturé directement par Google</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Configuration Firebase Cloud Messaging pour push Android</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Fiche store : feature graphic, captures phone + tablet, vidéo</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Build AAB signé · upload Play Console</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Internal Testing → Closed Testing → Production track</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Data Safety form, Privacy Policy URL, target API 35+</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Questionnaire contenu (âge, publicités, achats in-app)</li>
        </ul>

        <div class="mob-store-block-foot">
          <span class="mob-store-block-pill">Délai décidé par Google</span>
          <span class="mob-store-block-pill">Règles vérifiées au cadrage</span>
          <span class="mob-store-block-pill">Extensions selon périmètre</span>
        </div>
      </div>
    </div>

    <div class="mob-stores-bonus reveal reveal-d-2">
      <div class="mob-stores-bonus-ic">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3l18 18M21 3l-9 9-9-9M3 21l9-9 9 9"/></svg>
      </div>
      <div>
        <div class="mob-stores-bonus-title">Option à cadrer : <b>mises à jour OTA via EAS</b></div>
        <div class="mob-stores-bonus-sub">
          Certaines mises à jour compatibles peuvent être diffusées sans nouvelle review. Les règles des stores,
          la configuration EAS, la recette et la procédure de retour arrière sont documentées dans le devis.
        </div>
      </div>
    </div>
  </div>
</section>
`;
