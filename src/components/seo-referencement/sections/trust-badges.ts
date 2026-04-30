// Trust badges : engagements contractuels factuels (forfait fixe, propriété code,
// garantie bugs, hébergement FR, audit de sortie). Pas de revendication de certifications
// non détenues — les options de financement sont présentées comme éligibilité à étudier.

export const trustBadgesHtml = `
<!-- TRUST BADGES -->
<section class="seo-trust">
  <div class="wrap">
    <div class="seo-trust-head reveal">
      <div class="eyebrow">— Engagements &amp; garanties</div>
      <h2>Ce qu'on signe<br>avant de commencer.</h2>
      <p>Des promesses écrites dans le devis, pas des slogans de landing. Si l'une n'est pas tenue, vous le voyez et vous nous le reprochez.</p>
    </div>

    <div class="seo-trust-grid">
      <div class="seo-trust-card reveal">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <h4>R&amp;D documentée pour le CIR</h4>
        <p>Sur les projets à composante R&amp;D ou IA, on fournit un livrable de documentation technique adapté pour <b>l'instruction d'un dossier CIR</b> par votre conseil. L'éligibilité reste à valider par votre expert-comptable.</p>
        <div class="seo-trust-foot">— Dossier type fourni à la livraison</div>
      </div>

      <div class="seo-trust-card reveal reveal-d-1">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg>
        </div>
        <h4>Données hébergées en France</h4>
        <p>Par défaut : <b>Scaleway Paris</b> ou <b>OVH Roubaix</b>. Chiffrement AES-256 at-rest, TLS 1.3 in-transit, sauvegardes toutes les 15 minutes.</p>
        <div class="seo-trust-foot">— Sous-traitants RGPD documentés</div>
      </div>

      <div class="seo-trust-card reveal reveal-d-2">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
        </div>
        <h4>Forfait fixe contractuel</h4>
        <p>Le prix du devis est le prix final. <b>Aucun avenant</b> sur le périmètre validé au cadrage. Pénalité de 7 % du forfait par semaine de retard au-delà de J+14.</p>
        <div class="seo-trust-foot">— Clause de pénalité dans le contrat</div>
      </div>

      <div class="seo-trust-card reveal reveal-d-3">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h4>Propriété totale du code</h4>
        <p>Repo Git <b>chez vous dès J+1</b>. Aucune licence, aucun royalties, aucune clé de chiffrement côté studio. Vous partez quand vous voulez.</p>
        <div class="seo-trust-foot">— Cession écrite au CGV</div>
      </div>

      <div class="seo-trust-card reveal">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <h4>30 jours de garantie bugs</h4>
        <p>Sur tout bug critique, écriture de tests de non-régression incluse. Après, maintenance mensuelle optionnelle, sans engagement de durée.</p>
        <div class="seo-trust-foot">— SLA 4 h ouvrées sur bugs bloquants</div>
      </div>

      <div class="seo-trust-card reveal reveal-d-1">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h4>Propriété du code &amp; Git à vous</h4>
        <p>Votre repo Git est sur <b>votre organisation</b> dès J1. Aucun lock-in. Documentation, CI/CD, Docker compose — tout livré pour qu'une autre équipe puisse reprendre si besoin.</p>
        <div class="seo-trust-foot">— Clause contractuelle explicite</div>
      </div>

      <div class="seo-trust-card reveal reveal-d-2">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg>
        </div>
        <h4>Partenaire techno vérifié</h4>
        <p>Stack : <b>Laravel 13</b>, <b>React / Next.js</b>, <b>Stripe</b>, <b>Claude Opus 4.7</b>, <b>OVH / Scaleway</b>. Équipe formée aux dernières versions stables.</p>
        <div class="seo-trust-foot">— Mise à jour trimestrielle</div>
      </div>

      <div class="seo-trust-card reveal reveal-d-3">
        <div class="seo-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
        </div>
        <h4>Formation post-livraison incluse</h4>
        <p>1 à 2 jours de formation à votre équipe sont inclus dans chaque projet, plus une documentation utilisateur. Pas de surcoût caché, pas de "module premium" à acheter ensuite.</p>
        <div class="seo-trust-foot">— Prise en charge partielle fréquente</div>
      </div>
    </div>
  </div>
</section>
`;
