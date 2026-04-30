export const comparisonHtml = `
<!-- COMPARISON : APP NATIVE vs SITE MOBILE vs PWA -->
<section class="mob-compar">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Et si une app n'est pas la bonne réponse ?</div>
        <h2>App native, site mobile,<br>PWA : on dit la vérité.</h2>
      </div>
      <div class="right">
        Trois outils, trois usages distincts. On vous orientera vers le moins cher
        qui résout votre besoin — pas vers le plus rentable pour nous.
        <b>Si une app native n'apporte rien à votre business, on vous le dira</b>.
      </div>
    </div>

    <div class="mob-compar-table reveal reveal-d-1">
      <div class="mob-compar-row mob-compar-head">
        <div class="mob-compar-cell mob-compar-cell-label"></div>
        <div class="mob-compar-cell">
          <div class="mob-compar-cell-title">Site mobile responsive</div>
          <div class="mob-compar-cell-sub">HTML / Next.js sur smartphone</div>
        </div>
        <div class="mob-compar-cell mob-compar-cell-mid">
          <div class="mob-compar-cell-title">PWA</div>
          <div class="mob-compar-cell-sub">Progressive Web App</div>
        </div>
        <div class="mob-compar-cell mob-compar-cell-best">
          <span class="mob-compar-cell-badge">★ Vraie app</span>
          <div class="mob-compar-cell-title">App native React Native</div>
          <div class="mob-compar-cell-sub">iOS + Android stores</div>
        </div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Coût</div>
        <div class="mob-compar-cell">Sur devis</div>
        <div class="mob-compar-cell mob-compar-cell-mid">Sur devis</div>
        <div class="mob-compar-cell mob-compar-cell-best">Sur devis</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Présence sur écran d'accueil</div>
        <div class="mob-compar-cell mob-compar-cell-no">— Inexistante</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-mid-yes">~ Optionnelle (rare)</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-yes">✓ Garantie sur 2 stores</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Push notifications iOS</div>
        <div class="mob-compar-cell mob-compar-cell-no">— Non</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-mid-yes">~ Limitées (Safari 16.4+)</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-yes">✓ Natives APNs</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Mode hors-ligne</div>
        <div class="mob-compar-cell mob-compar-cell-no">— Non</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-mid-yes">~ Cache simple</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-yes">✓ Offline-first complet</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Apple Pay / Google Pay</div>
        <div class="mob-compar-cell mob-compar-cell-no">~ Stripe Web</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-mid-yes">~ Stripe Web</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-yes">✓ Natif 1-tap</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Biométrie Face ID / empreinte</div>
        <div class="mob-compar-cell mob-compar-cell-no">— Non</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-mid-yes">~ Limité (WebAuthn)</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-yes">✓ Keychain / Keystore</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Caméra, BLE, NFC, scan QR</div>
        <div class="mob-compar-cell mob-compar-cell-no">~ Très limité</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-mid-yes">~ Caméra OK, BLE non</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-yes">✓ Tous accès natifs</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Crédibilité (présence stores)</div>
        <div class="mob-compar-cell mob-compar-cell-no">— Aucune</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-mid-yes">— Aucune</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-yes">✓ Avis &amp; ranking publics</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Conversion mobile (secteur retail)</div>
        <div class="mob-compar-cell">Référence</div>
        <div class="mob-compar-cell mob-compar-cell-mid">Légèrement supérieur</div>
        <div class="mob-compar-cell mob-compar-cell-best">Nettement supérieur (études secteur)</div>
      </div>

      <div class="mob-compar-row">
        <div class="mob-compar-cell mob-compar-cell-label">Quand c'est le bon choix</div>
        <div class="mob-compar-cell mob-compar-cell-quote">Visite ponctuelle, info, contact, achat one-shot.</div>
        <div class="mob-compar-cell mob-compar-cell-mid mob-compar-cell-quote">Outil métier interne, audience tech, budget serré.</div>
        <div class="mob-compar-cell mob-compar-cell-best mob-compar-cell-quote">Usage récurrent, fidélité, push, paiement, terrain offline.</div>
      </div>
    </div>

    <div class="mob-compar-foot reveal reveal-d-2">
      Notre règle : <b>si vos clients reviennent moins de 1 fois / mois</b>, un site mobile responsive premium suffit.
      <b>Si une PWA correspond à votre besoin (B2B interne, audience tech)</b>, on vous le dira et on la fera — moins cher qu'une app native.
      <b>Si vous visez la rétention, le push, le paiement biométrique, l'écran d'accueil</b> — alors une vraie app native vaut son investissement.
    </div>
  </div>
</section>
`;
