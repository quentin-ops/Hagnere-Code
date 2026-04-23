export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE (e-commerce) -->
<section class="ec-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "une boutique Hagnéré" veut dire</div>
        <h2>Vingt livrables inclus<br>dans chaque boutique.</h2>
      </div>
      <div class="right">
        "Faire un e-commerce" c'est flou. Voilà la liste exacte de ce qui rentre dans le forfait —
        et ce qu'on ne fait pas. Zéro avenant surprise après le devis.
      </div>
    </div>

    <div class="ec-check-grid">
      <!-- INCLUS -->
      <div class="ec-check-col ec-check-in reveal">
        <div class="ec-check-head">
          <div class="ec-check-badge ec-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            INCLUS DANS LE FORFAIT
          </div>
          <h3>Vingt livrables, à chaque projet.</h3>
        </div>
        <ul class="ec-check-list">
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Charte graphique + design system Figma</b> — moodboard, typo, couleurs, composants, déclinaisons web/mobile/email/print.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Catalogue produits complet</b> — variantes, déclinaisons, stock multi-entrepôt, import CSV, édition en masse.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Panier persistant + wishlist</b> — cookie + base, synchro cross-device pour client connecté.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Checkout 1 page</b> — autocomplete API Adresse gouv.fr, wallets Apple/Google Pay en premier, champs minimaux.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Paiement CB 3DS2 + wallets + PayPal + Alma</b> — Stripe ou Mollie par défaut, SystemPay/PayZen possible pour les banques FR.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>3 transporteurs FR au choix</b> — Colissimo, Chronopost, Mondial Relay, DPD, Relais Colis ; étiquettes en masse + tracking.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Comptes clients + OAuth</b> — email, Google, Apple, magic link. Historique commandes, wishlist, adresses.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Gestion commandes + retours</b> — workflows, étiquettes retour prépayées, avoirs, RMA complet.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Factur-X + Chorus Pro 2026-ready</b> — PDF/A-3 + XML CII, dépôt auto sur Plateforme Agréée (Pennylane, Docaposte).</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Intégration 1 ERP au choix</b> — Sage 100/X3, Cegid, EBP, Pennylane, Axonaut ou Sellsy. Commandes + clients + produits synchros.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Recherche sémantique IA</b> — Claude + pgvector, "canapé beige pour petit salon" = résultats pertinents, pas matching de tags.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Fiches produit générées par IA</b> — titre, description SEO, meta, bullets, traductions, déclenché à l'import PIM.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>SEO technique complet</b> — sitemap, hreflang, JSON-LD Product/Offer/Breadcrumb, canonical, robots, rich snippets.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Core Web Vitals verts garantis</b> — LCP &lt; 2,5s, INP &lt; 200ms, CLS &lt; 0,1, accessibilité WCAG 2.2 AA.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Server-side tracking</b> — GA4 + Meta CAPI + Google Ads Enhanced Conversions, contourne ITP iOS et fin cookies tiers 2026.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Email transactionnel + newsletter</b> — Resend/Postmark + Brevo ou Klaviyo, templates responsive brandés, analytics.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Codes promo + bundles + ventes flash</b> — règles complexes (panier min, produits éligibles, cumulable, nominatif).</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Admin Filament + rôles</b> — Spatie permissions, logs audit, impersonation support, multi-utilisateurs.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>RGPD + CMP + consent mode v2</b> — Axeptio ou Didomi, DPA, export/suppression données, registre des traitements.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Hébergement 6 mois + code Git chez vous</b> — Scaleway Paris / OVH, sauvegardes 15 min, repo sur votre orga dès J+1.</div></li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="ec-check-col ec-check-out reveal reveal-d-1">
        <div class="ec-check-head">
          <div class="ec-check-badge ec-check-badge-out">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
            HORS SCOPE (ON VOUS LE DIT TÔT)
          </div>
          <h3>Ce qu'on ne fera pas<br>dans le forfait.</h3>
        </div>
        <ul class="ec-check-list ec-check-list-out">
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Shooting photo produits</b> — on dimensionne le besoin (tailles, formats, fond), vous pilotez le shooting ou on vous oriente vers un studio partenaire.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Rédaction manuelle des fiches produit</b> — l'IA aide à générer les bases, mais un rédacteur spécialisé reste un métier à part si vous avez 2000 produits à écrire.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Gestion quotidienne des pubs Meta / Google Ads</b> — c'est notre <b>autre service</b>, pas dans le forfait dev.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>SAV clients finaux</b> — on livre les outils (tickets, emails, dashboards), c'est vous ou votre équipe qui répondez aux clients.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Négociation de vos tarifs transporteurs</b> — Colissimo / Chronopost : vous signez le contrat commercial, on branche l'API.</div></li>
          <li><div class="ec-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Comptes développeur Apple + Google</b> — vous les ouvrez (99$/an + 25$ one-shot), on publie les apps mobiles dessus.</div></li>
        </ul>
        <div class="ec-check-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          Si un point "hors scope" doit rentrer dans le forfait, on en parle au cadrage et on ajuste le périmètre ensemble — pas par avenant.
        </div>
      </div>
    </div>
  </div>
</section>
`;
