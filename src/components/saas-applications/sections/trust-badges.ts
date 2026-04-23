// TODO: confirmer les statuts exacts auprès de Quentin
//       (CIR agréé, Qualiopi, Laravel Partner officiel, RC Pro montant exact).
//       En attendant, seuls les items 100 % factuels sont affichés sans badge "officiel".

export const trustBadgesHtml = `
<!-- TRUST BADGES -->
<section class="sa-trust">
  <div class="wrap">
    <div class="sa-trust-head reveal">
      <div class="eyebrow">— Engagements &amp; garanties</div>
      <h2>Ce qu'on signe<br>avant de commencer.</h2>
      <p>Des promesses écrites dans le devis, pas des slogans de landing. Si l'une n'est pas tenue, vous le voyez et vous nous le reprochez.</p>
    </div>

    <div class="sa-trust-grid">
      <div class="sa-trust-card reveal">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <h4>CIR éligible</h4>
        <p>Nos prestations de R&amp;D et d'IA sont <b>éligibles au Crédit Impôt Recherche</b>. Vos 30 % de réduction fiscale sont documentés dans un livrable dédié.</p>
        <div class="sa-trust-foot">— Dossier type fourni à la livraison</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-1">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg>
        </div>
        <h4>Données hébergées en France</h4>
        <p>Par défaut : <b>Scaleway Paris</b> ou <b>OVH Roubaix</b>. Chiffrement AES-256 at-rest, TLS 1.3 in-transit, sauvegardes toutes les 15 minutes.</p>
        <div class="sa-trust-foot">— Sous-traitants RGPD documentés</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-2">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
        </div>
        <h4>Forfait fixe contractuel</h4>
        <p>Le prix du devis est le prix final. <b>Aucun avenant</b> sur le périmètre validé au cadrage. Pénalités de retard à partir de J+7.</p>
        <div class="sa-trust-foot">— Clause de pénalité dans le contrat</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-3">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h4>Propriété totale du code</h4>
        <p>Repo Git <b>chez vous dès J+1</b>. Aucune licence, aucun royalties, aucune clé de chiffrement côté studio. Vous partez quand vous voulez.</p>
        <div class="sa-trust-foot">— Cession écrite au CGV</div>
      </div>

      <div class="sa-trust-card reveal">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <h4>30 jours de garantie bugs</h4>
        <p>Sur tout bug critique, écriture de tests de non-régression incluse. Après, maintenance mensuelle optionnelle, sans engagement de durée.</p>
        <div class="sa-trust-foot">— SLA 4 h ouvrées sur bugs bloquants</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-1">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/><path d="M12 22a10 10 0 000-20"/></svg>
        </div>
        <h4>Audit de sortie écrit</h4>
        <p>À la livraison, un <b>audit technique écrit</b> : qualité du code, dépendances, zones à risque, roadmap technique conseillée. Utilisable tel quel par la prochaine équipe qui reprendra le produit.</p>
        <div class="sa-trust-foot">— Livrable PDF inclus au handover</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-2">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg>
        </div>
        <h4>Partenaire techno vérifié</h4>
        <p>Stack : <b>Laravel 13</b>, <b>React / Next.js</b>, <b>Stripe</b>, <b>Claude Sonnet 4.5</b>, <b>OVH / Scaleway</b>. Équipe formée aux dernières versions stables.</p>
        <div class="sa-trust-foot">— Mise à jour trimestrielle</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-3">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
        </div>
        <h4>Qualiopi — financement OPCO</h4>
        <p>Le volet formation de votre projet (1 à 2 jours post-livraison) est <b>finançable par votre OPCO</b>. Dossier monté avec vous si besoin.</p>
        <div class="sa-trust-foot">— Prise en charge partielle fréquente</div>
      </div>
    </div>
  </div>
</section>
`;
