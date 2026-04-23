// TODO: remplacer les 3 placeholders par de vrais témoignages nominatifs
//       (prénom + nom + fonction + société + photo réelle dans /public/testimonials/).
//       Les 3 quotes sont délibérément axées : vitesse MVP · forfait fixe · IA native.

export const testimonialsHtml = `
<!-- TESTIMONIALS -->
<section class="seo-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Trois founders, trois site en prod</div>
        <h2>Ce qu'ils retiennent,<br>plusieurs mois après.</h2>
      </div>
      <div class="right">
        Trois retours à froid sur ce qui change vraiment quand on fait construire son site chez nous :
        <b>la vitesse du MVP</b>, <b>le forfait fixe tenu</b>, et <b>l'IA vraiment dans le produit</b>.
      </div>
    </div>

    <div class="seo-testi-grid">
      <article class="seo-testi-card reveal">
        <div class="seo-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          VITESSE DE MVP
        </div>
        <div class="seo-testi-stars">★★★★★</div>
        <blockquote class="seo-testi-quote">
          « Brief le lundi, première démo le vendredi. MVP live à J+35 avec Stripe, Auth,
          multi-tenant, back-office — exactement ce qu'on avait dessiné. On a signé les premiers
          clients avant même d'avoir fini la stratégie SEO marketing. »
        </blockquote>
        <div class="seo-testi-meta">
          <div class="seo-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="seo-testi-who">
            <div class="seo-testi-name">[TODO — Prénom Nom]</div>
            <div class="seo-testi-role">Founder · [TODO — site B2B] · <b>MVP livré en 5 semaines</b></div>
          </div>
        </div>
      </article>

      <article class="seo-testi-card reveal reveal-d-1">
        <div class="seo-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
          FORFAIT FIXE TENU
        </div>
        <div class="seo-testi-stars">★★★★★</div>
        <blockquote class="seo-testi-quote">
          « J'avais cramé 40 k€ chez une autre agence avant, avec trois avenants. Ici,
          prix connu, délai connu, périmètre gravé. Zéro avenant. Je sais ce que je peux
          annoncer à mon board sans mentir. Plus jamais autrement. »
        </blockquote>
        <div class="seo-testi-meta">
          <div class="seo-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="seo-testi-who">
            <div class="seo-testi-name">[TODO — Prénom Nom]</div>
            <div class="seo-testi-role">CEO · [TODO — site B2B] · <b>Refonte 60 k€ forfait</b></div>
          </div>
        </div>
      </article>

      <article class="seo-testi-card reveal reveal-d-2">
        <div class="seo-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
          IA VRAIMENT DANS LE PRODUIT
        </div>
        <div class="seo-testi-stars">★★★★★</div>
        <blockquote class="seo-testi-quote">
          « L'IA est dans le produit, pas sur la landing. Les agents Claude classent les tickets
          la nuit, extraient les factures, relancent les impayés. On a divisé le support par trois
          et gagné 2 employés en productivité. Retour sur invest en 4 mois. »
        </blockquote>
        <div class="seo-testi-meta">
          <div class="seo-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="seo-testi-who">
            <div class="seo-testi-name">[TODO — Prénom Nom]</div>
            <div class="seo-testi-role">CTO · [TODO — site B2B] · <b>Agents IA intégrés en 4 sem.</b></div>
          </div>
        </div>
      </article>
    </div>

    <p class="seo-testi-foot reveal">
      Références détaillées sur demande — on met en relation directe avec d'anciens clients avant signature.
    </p>
  </div>
</section>
`;
