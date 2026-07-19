export const trustHtml = `
<!-- TRUST BADGES -->
<section class="trust" id="confiance">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Confiance &amp; conformité</div>
        <h2>Ce sur quoi<br>vous pouvez vraiment compter.</h2>
      </div>
      <div class="right">
        Pas d'awards obscurs, pas de faux avis, pas de logos inventés. Voici les
        engagements que l'on peut réellement tenir aujourd'hui : propriété du code,
        forfait clair, équipe identifiée et produits déjà opérés en production.
      </div>
    </div>

    <!-- Rangée 1 : engagements tenus (réels) -->
    <div class="tr-grid reveal">
      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Code &amp; données à vous dès J1</div>
          <div class="tr-sub">Repo Git sur votre organisation, hébergement à votre nom, aucun lock-in.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M2 12h20"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">100% équipe France</div>
          <div class="tr-sub">Aucune sous-traitance offshore. Bassens + télétravail hexagone.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M3 10h18M7 20h10"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Hébergement en France disponible</div>
          <div class="tr-sub">OVHcloud ou Scaleway selon le projet. Traitements et sous-traitants documentés ; contact RGPD identifié.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Forfait fixe, pilotage visible</div>
          <div class="tr-sub">Prix annoncé = prix payé. Démo régulière, arbitrages écrits, aucun dépassement non validé.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">30 jours de garantie</div>
          <div class="tr-sub">Bugs bloquants post-livraison pris en charge sous 4 h ouvrées, corrigés gratuitement sous 48 h ouvrées.</div>
        </div>
      </div>
    </div>

    <!-- Rangée 2 : stack + spécialités avancées -->
    <div class="tr-partners reveal reveal-d-1">
      <div class="tr-partners-kicker">Stack &amp; spécialités avancées</div>
      <div class="tr-partners-row">
        <div class="tr-partner">
          <img class="tr-partner-logo" src="/logos/stack/nextjs.svg" width="22" height="22" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <span>Next.js / React — stack principale du studio</span>
        </div>
        <div class="tr-partner">
          <img class="tr-partner-logo" src="/logos/stack/laravel.svg" width="22" height="22" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <span>Laravel / PHP — reprises &amp; audits d'existant</span>
        </div>
        <div class="tr-partner">
          <svg class="tr-partner-logo" width="22" height="22" viewBox="0 0 24 24" fill="#D97757" aria-hidden="true"><path d="m4.709 15.955 4.72-2.647.079-.23-.079-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.571-.122L0 11.784l.055-.352.48-.321.686.061 1.52.103 2.278.158 1.652.097 2.449.255h.389l.054-.158-.133-.096-.103-.097-2.349-1.595-2.543-1.683-1.331-.967-.72-.49-.362-.46-.158-1.005.654-.72.881.06.225.061.892.687 1.908 1.477 2.491 1.835.365.304.146-.103.018-.073-.164-.273-1.355-2.446-1.446-2.49-.644-1.034-.17-.62a2.97 2.97 0 0 1-.103-.74L2.661.27 3.034 0l.901.121.38.328.559 1.276.91 2.024 1.408 2.746.413.815.219.755.084.226h.146V8.28l.116-1.555.219-1.913.207-2.461.072-.694.34-.815.679-.445.529.255.435.62-.06.4-.26 1.689-.51 2.643-.331 1.768h.193l.226-.226.917-1.215 1.534-1.92.677-.762.79-.84.508-.401h.964l.71 1.054-.317 1.087-.99 1.252-.823 1.066-1.179 1.583-.732 1.262.067.102.175-.018 2.66-.566 1.438-.26 1.711-.296.776.36.085.371-.31.76-1.857.456-2.176.435-3.243.766-.04.029.046.06 1.461.138.624.034h1.529l2.847.213.741.49.444.6-.073.453-1.143.582-1.546-.367-3.612-.86-1.235-.31h-.17v.107l1.027 1.012 1.882 1.704 2.357 2.193.118.535-.299.428-.317-.04-2.052-1.547-.79-.692-1.793-1.51h-.118v.16l.41.604 2.184 3.286.115 1.014-.158.328-.566.207-.62-.115-1.276-1.797-1.32-2.024-1.063-1.815-.13.072-.62 6.696-.292.34-.668.255-.555-.426-.292-.69.292-1.347.353-1.755.286-1.396.26-1.738.151-.575-.012-.04-.13.018-1.342 1.847-2.04 2.766-1.617 1.728-.388.151-.674-.346.06-.625.388-.566 2.295-2.92 1.379-1.794.892-1.045-.012-.15h-.054l-6.245 4.063-1.118.145-.48-.45.06-.74.226-.236 1.853-1.27z"/></svg>
          <span>Claude Code — agent IA quotidien</span>
        </div>
        <div class="tr-partner">
          <svg class="tr-partner-logo" width="22" height="22" viewBox="0 0 24 24" fill="#635BFF" aria-hidden="true"><path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-.977 1.423-.977 1.667 0 3.379.642 4.558 1.221l.666-4.111c-.935-.446-2.847-1.193-5.49-1.193-1.87 0-3.425.491-4.536 1.402-1.155.953-1.757 2.323-1.757 3.978 0 3.005 1.847 4.296 4.847 5.388 1.927.69 2.578 1.18 2.578 1.927 0 .727-.628 1.144-1.762 1.144-1.422 0-3.778-.711-5.323-1.622L5.5 18.038c1.331.738 3.797 1.486 6.353 1.486 1.978 0 3.629-.467 4.747-1.351 1.249-.985 1.892-2.443 1.892-4.331 0-3.077-1.881-4.354-4.713-5.379l-.299-.107z"/></svg>
          <span>Stripe — paiements &amp; abonnements</span>
        </div>
        <div class="tr-partner">
          <img class="tr-partner-logo" src="/logos/stack/react.svg" width="22" height="22" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <span>React 19 + Server Components — interfaces temps réel</span>
        </div>
        <div class="tr-partner">
          <img class="tr-partner-logo" src="/logos/stack/typescript.svg" width="22" height="22" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <span>TypeScript — typé de bout en bout</span>
        </div>
      </div>
    </div>

    <!-- Rangée 3 : preuves honnêtes, chiffres vérifiables -->
    <div class="tr-ratings reveal reveal-d-2">
      <div class="tr-rating">
        <div class="tr-rating-value">4</div>
        <div class="tr-rating-kind">Produits en production</div>
        <div class="tr-rating-source">Preuves internes assumées</div>
        <div class="tr-rating-meta">Deux SaaS IA et deux sites métier du groupe Hagnéré, visibles et opérés par nous.</div>
      </div>

      <div class="tr-rating">
        <div class="tr-rating-value">100<span>%</span></div>
        <div class="tr-rating-kind">Forfait fixe tenu</div>
        <div class="tr-rating-source">Prix annoncé = prix payé</div>
        <div class="tr-rating-meta">Notre modèle commercial : un périmètre cadré, un prix écrit, pas de régie masquée.</div>
      </div>

      <div class="tr-rating">
        <div class="tr-rating-value">0</div>
        <div class="tr-rating-kind">Sous-traitance cachée</div>
        <div class="tr-rating-source">Vous parlez aux personnes qui codent</div>
        <div class="tr-rating-meta">Pas de commercial qui vend une équipe que vous ne verrez jamais.</div>
      </div>
    </div>
  </div>
</section>
`;
