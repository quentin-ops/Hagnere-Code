export const ownershipHtml = `
<!-- OWNERSHIP CHECKLIST -->
<section class="mob-ownership">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Accès et livrables</div>
        <h2>9 actifs à inventorier<br>dans votre contrat.</h2>
      </div>
      <div class="right">
        La dépendance au prestataire se prévient par un inventaire écrit.
        Cette <b>checklist est à adapter au devis</b>&nbsp;: titulaire des comptes, accès, coûts, livrables,
        droits transférés après paiement complet, composants préexistants et licences tierces.
      </div>
    </div>

    <div class="mob-ownership-grid">
      <div class="mob-ownership-card reveal">
        <div class="mob-ownership-num">01</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
        </div>
        <h3>Repo Git GitHub</h3>
        <p>Le dépôt peut être placé sous <b>votre organisation GitHub</b>. Le devis précise les rôles, l'historique remis, la gestion des secrets et la révocation des accès.</p>
      </div>

      <div class="mob-ownership-card reveal reveal-d-1">
        <div class="mob-ownership-num">02</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" style="fill:var(--ink)" stroke="none"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.1zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
        </div>
        <h3>Compte Apple Developer</h3>
        <p>Lorsque vous êtes l'éditeur, le compte peut être créé sur votre identifiant d'entreprise et facturé directement par Apple. Les rôles, accès et modalités de révocation sont inventoriés au devis.</p>
      </div>

      <div class="mob-ownership-card reveal reveal-d-2">
        <div class="mob-ownership-num">03</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.6 1.2c-.4.4-.6 1-.6 1.8v18c0 .8.2 1.4.6 1.8l11-11-11-10.6z"/><path d="M16.6 8.4l-3-3-9.4 9.2 3 3 9.4-9.2z"/></svg>
        </div>
        <h3>Compte Google Play Console</h3>
        <p>Lorsque vous êtes l'éditeur, le compte peut être créé sur votre environnement Google et facturé directement par Google. Le titulaire, les rôles et la gestion de la clé de signature sont précisés au devis.</p>
      </div>

      <div class="mob-ownership-card reveal reveal-d-3">
        <div class="mob-ownership-num">04</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
        </div>
        <h3>Fichiers Figma source</h3>
        <p>Bibliothèque de composants et maquettes peuvent être partagées sur votre espace Figma. Le devis liste les fichiers remis, les droits applicables et les éventuelles licences d'assets ou de polices.</p>
      </div>

      <div class="mob-ownership-card reveal">
        <div class="mob-ownership-num">05</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        </div>
        <h3>Certificats &amp; clés API</h3>
        <p>APNs, FCM, Stripe, Firebase, EAS et certificats de distribution sont gérés dans le coffre ou les secrets convenus. Le périmètre de l'inventaire et de la passation figure au devis.</p>
      </div>

      <div class="mob-ownership-card reveal reveal-d-1">
        <div class="mob-ownership-num">06</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
        </div>
        <h3>Documentation technique &amp; runbook</h3>
        <p>README, schéma de données, flux API, runbook de release et décisions d'architecture peuvent faire partie des livrables. Leur contenu et leur niveau de détail sont définis au devis.</p>
      </div>

      <div class="mob-ownership-card reveal reveal-d-2">
        <div class="mob-ownership-num">07</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>
        </div>
        <h3>Hébergement back-end</h3>
        <p>Le compte Scaleway, OVH, Vercel ou équivalent peut être ouvert au nom du client et facturé directement. Le devis précise le titulaire, les rôles, les coûts tiers et les accès effectivement nécessaires.</p>
      </div>

      <div class="mob-ownership-card reveal reveal-d-3">
        <div class="mob-ownership-num">08</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
        </div>
        <h3>Domaine &amp; emails</h3>
        <p>Le titulaire du domaine, des sous-domaines et de la messagerie est identifié avant le projet. Les modalités d'achat, de facturation, d'administration et de transfert sont écrites au devis.</p>
      </div>

      <div class="mob-ownership-card reveal">
        <div class="mob-ownership-num">09</div>
        <div class="mob-ownership-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <h3>Dépôt APP (Agence Protection Programmes)</h3>
        <p>Un dépôt facultatif auprès de l'<b>APP</b> peut être étudié avec votre conseil. Son objet, son coût, la personne qui le réalise et les éléments déposés doivent être expressément prévus.</p>
      </div>
    </div>

    <div class="mob-ownership-foot reveal reveal-d-1">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      <span>
        Les <b>livrables spécifiques</b> sont transférés après paiement complet selon les CGV,
        sous réserve des composants préexistants, outils génériques et licences tierces. Le devis détaille les éléments concernés.
      </span>
    </div>
  </div>
</section>
`;
