// TODO: remplacer les 3 placeholders par de vrais témoignages nominatifs
//       (prénom + nom + fonction + société + photo réelle dans /public/testimonials/).
//       Les 3 quotes sont axées Ads : tracking récupéré · CAC divisé · sortie d'agence au %.

export const testimonialsHtml = `
<!-- TESTIMONIALS ADS -->
<section class="ads-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Trois dirigeants · trois comptes Ads repris</div>
        <h2>Ce qu'ils retiennent,<br>plusieurs mois après.</h2>
      </div>
      <div class="right">
        Trois retours à froid sur ce qui change vraiment quand on reprend un compte Ads chez nous&nbsp;:
        <b>le tracking enfin propre</b>, <b>le CAC qui baisse réellement</b>, et <b>la facture claire sans % du media</b>.
      </div>
    </div>

    <div class="ads-testi-grid">
      <article class="ads-testi-card reveal">
        <div class="ads-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          TRACKING RÉCUPÉRÉ
        </div>
        <div class="ads-testi-stars">★★★★★</div>
        <blockquote class="ads-testi-quote">
          « Depuis iOS 14, Meta nous remontait 2 fois plus de conversions que ce qu'on voyait
          dans HubSpot. Leur GTM Server branché, les doublons ont sauté, les campagnes se sont
          auto-calibrées en 3 semaines. <b>On a enfin piloté sur des chiffres qui collent</b>
          au rapport commercial hebdo. »
        </blockquote>
        <div class="ads-testi-meta">
          <div class="ads-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="ads-testi-who">
            <div class="ads-testi-name">[TODO — Prénom Nom]</div>
            <div class="ads-testi-role">Head of Marketing · [TODO — SaaS B2B 50 salariés] · <b>Signaux +38&nbsp;%</b></div>
          </div>
        </div>
      </article>

      <article class="ads-testi-card reveal reveal-d-1">
        <div class="ads-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
          CAC DIVISÉ
        </div>
        <div class="ads-testi-stars">★★★★★</div>
        <blockquote class="ads-testi-quote">
          « Notre CAC avait doublé en 18 mois, on ne savait plus si c'était PMax, iOS 14 ou la concurrence.
          Ils ont fait le diagnostic en 10 jours&nbsp;: les trois combinés. Tracking réparé, PMax restructuré
          avec signaux d'audience propres, exclusions brand appliquées. <b>CAC divisé par 2,1 en 4 mois</b>,
          sans avoir touché au budget media. »
        </blockquote>
        <div class="ads-testi-meta">
          <div class="ads-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="ads-testi-who">
            <div class="ads-testi-name">[TODO — Prénom Nom]</div>
            <div class="ads-testi-role">CEO · [TODO — E-commerce DTC] · <b>CAC ÷ 2,1 en 4 mois</b></div>
          </div>
        </div>
      </article>

      <article class="ads-testi-card reveal reveal-d-2">
        <div class="ads-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 14h4"/></svg>
          SORTIE D'AGENCE AU %
        </div>
        <div class="ads-testi-stars">★★★★★</div>
        <blockquote class="ads-testi-quote">
          « On payait 12 % de 55 k€/mois, soit 6 600 €/mois à notre agence précédente, qui
          nous poussait toujours à dépenser plus. Transition en 2 semaines, forfait fixe à
          4 500 €/mois, comptes récupérés et même des creatives qu'on n'avait jamais vues.
          <b>Économie immédiate, CAC qui baisse en prime.</b> »
        </blockquote>
        <div class="ads-testi-meta">
          <div class="ads-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="ads-testi-who">
            <div class="ads-testi-name">[TODO — Prénom Nom]</div>
            <div class="ads-testi-role">CMO · [TODO — ETI services] · <b>–2 100 €/mois vs. % agence</b></div>
          </div>
        </div>
      </article>
    </div>

    <p class="ads-testi-foot reveal">
      Références détaillées sur demande — on met en relation directe avec d'anciens clients avant signature.
    </p>
  </div>
</section>
`;
