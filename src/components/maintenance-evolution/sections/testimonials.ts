// TODO: remplacer les 3 placeholders par de vrais témoignages nominatifs
//       (prénom + nom + fonction + société + photo réelle dans /public/testimonials/).
//       Les 3 quotes sont axées M&E : reprise d'app orpheline · SLA tenu · équipe qui reste.

export const testimonialsHtml = `
<!-- TESTIMONIALS M&E -->
<section class="me-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Trois dirigeants · trois apps tenues</div>
        <h2>Ce qu'ils retiennent,<br>après plusieurs années chez nous.</h2>
      </div>
      <div class="right">
        Trois retours à froid sur ce qui change vraiment quand on reprend une app en TMA chez nous&nbsp;:
        <b>la reprise propre d'une app orpheline</b>, <b>le SLA tenu pendant 3 ans</b>, et <b>l'équipe qui ne part pas</b>.
      </div>
    </div>

    <div class="me-testi-grid">
      <article class="me-testi-card reveal">
        <div class="me-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7L9 18l-5-5"/><circle cx="20" cy="7" r="2"/></svg>
          REPRISE D'APP ORPHELINE
        </div>
        <div class="me-testi-stars">★★★★★</div>
        <blockquote class="me-testi-quote">
          « Notre agence avait livré la v1 puis plus rien pendant 4 mois. Ils ont fait l'audit flash
          en 5 jours, repris les accès cloud, branché Sentry + Better Stack en 2 semaines.
          <b>À J+30 notre app était entre des mains adultes</b>, avec un plan de remédiation chiffré
          qu'on a validé au comité. »
        </blockquote>
        <div class="me-testi-meta">
          <div class="me-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="me-testi-who">
            <div class="me-testi-name">[TODO — Prénom Nom]</div>
            <div class="me-testi-role">COO · [TODO — SaaS B2B 30 salariés] · <b>Reprise complète en 30 jours</b></div>
          </div>
        </div>
      </article>

      <article class="me-testi-card reveal reveal-d-1">
        <div class="me-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          SLA TENU · 3 ANS
        </div>
        <div class="me-testi-stars">★★★★★</div>
        <blockquote class="me-testi-quote">
          « Ça fait 3 ans qu'ils gèrent notre plateforme. <b>Uptime réel mesuré 99,97 %</b>, zéro
          incident P1 non-géré sous MTTR 30 min. On a passé deux audits SOC2 clients enterprise
          sans stress grâce à leur stack sécurité de série. <b>Leur forfait s'auto-justifie
          chaque trimestre</b> — jamais eu d'avenant surprise. »
        </blockquote>
        <div class="me-testi-meta">
          <div class="me-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="me-testi-who">
            <div class="me-testi-name">[TODO — Prénom Nom]</div>
            <div class="me-testi-role">CTO · [TODO — Scale-up B2B série B] · <b>SLA 99,97 % sur 3 ans</b></div>
          </div>
        </div>
      </article>

      <article class="me-testi-card reveal reveal-d-2">
        <div class="me-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
          ÉQUIPE QUI RESTE
        </div>
        <div class="me-testi-stars">★★★★★</div>
        <blockquote class="me-testi-quote">
          « Quatre ans qu'on travaille avec eux, <b>toujours les deux mêmes devs dans notre canal Slack</b>.
          Ils connaissent notre code mieux que nos salariés. Quand notre lead dev interne est parti,
          c'est Hagnéré qui a onboardé son remplaçant en 2 semaines avec des vidéos Loom et la
          documentation à jour. Ça vaut sa facture à la minute. »
        </blockquote>
        <div class="me-testi-meta">
          <div class="me-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#171717"/><circle cx="24" cy="20" r="7" fill="#404040"/><rect x="14" y="29" width="20" height="18" fill="#404040" rx="10"/></svg>
          </div>
          <div class="me-testi-who">
            <div class="me-testi-name">[TODO — Prénom Nom]</div>
            <div class="me-testi-role">CEO · [TODO — PME industrielle] · <b>4 ans · 0 rotation équipe</b></div>
          </div>
        </div>
      </article>
    </div>

    <p class="me-testi-foot reveal">
      Références détaillées sur demande — on met en relation directe avec d'anciens clients avant signature.
    </p>
  </div>
</section>
`;
