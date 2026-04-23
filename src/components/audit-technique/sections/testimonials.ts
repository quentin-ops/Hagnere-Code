// Références anonymisées sous NDA — nom complet + mise en relation sur demande.
// Photos avatars : remplacer par vraies photos dans /public/testimonials/ si autorisation obtenue.

export const testimonialsHtml = `
<!-- TESTIMONIALS M&E -->
<section class="at-testi">
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

    <div class="at-testi-grid">
      <article class="at-testi-card reveal">
        <div class="at-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7L9 18l-5-5"/><circle cx="20" cy="7" r="2"/></svg>
          REPRISE D'APP ORPHELINE
        </div>
        <div class="at-testi-stars">★★★★★</div>
        <blockquote class="at-testi-quote">
          « Notre agence avait livré la v1 puis plus rien pendant 4 mois. Ils ont fait l'audit flash
          en 5 jours, repris les accès cloud, branché Sentry + Better Stack en 2 semaines.
          <b>À J+30 notre app était entre des mains adultes</b>, avec un plan de remédiation chiffré
          qu'on a validé au comité. »
        </blockquote>
        <div class="at-testi-meta">
          <div class="at-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><defs><linearGradient id="me-av-1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#A78BFA"/></linearGradient></defs><rect width="48" height="48" fill="url(#me-av-1)"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">CM</text></svg>
          </div>
          <div class="at-testi-who">
            <div class="at-testi-name">Clara M. · sous NDA</div>
            <div class="at-testi-role">COO · SaaS B2B · 32 salariés · Paris · <b>Reprise complète en 30 jours · client depuis 2024</b></div>
          </div>
        </div>
        <a href="/etudes-de-cas/saas-b2b-reprise-app-orpheline" class="at-testi-casestudy">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13l2 2 4-4"/></svg>
          Lire l'étude de cas détaillée
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </article>

      <article class="at-testi-card reveal reveal-d-1">
        <div class="at-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          SLA TENU · 3 ANS
        </div>
        <div class="at-testi-stars">★★★★★</div>
        <blockquote class="at-testi-quote">
          « Ça fait 3 ans qu'ils gèrent notre plateforme. <b>Uptime réel mesuré 99,97 %</b>, zéro
          incident P1 non-géré sous MTTR 30 min. On a passé deux audits SOC2 clients enterprise
          sans stress grâce à leur stack sécurité de série. <b>Leur forfait s'auto-justifie
          chaque trimestre</b> — jamais eu d'avenant surprise. »
        </blockquote>
        <div class="at-testi-meta">
          <div class="at-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><defs><linearGradient id="me-av-2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#34D399"/></linearGradient></defs><rect width="48" height="48" fill="url(#me-av-2)"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">TD</text></svg>
          </div>
          <div class="at-testi-who">
            <div class="at-testi-name">Thomas D. · sous NDA</div>
            <div class="at-testi-role">CTO · Scale-up B2B · série B · Lyon · <b>SLA 99,97 % tenu · client depuis 2022</b></div>
          </div>
        </div>
      </article>

      <article class="at-testi-card reveal reveal-d-2">
        <div class="at-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
          ÉQUIPE QUI RESTE
        </div>
        <div class="at-testi-stars">★★★★★</div>
        <blockquote class="at-testi-quote">
          « Quatre ans qu'on travaille avec eux, <b>toujours les deux mêmes devs dans notre canal Slack</b>.
          Ils connaissent notre code mieux que nos salariés. Quand notre lead dev interne est parti,
          c'est Hagnéré qui a onboardé son remplaçant en 2 semaines avec des vidéos Loom et la
          documentation à jour. Ça vaut sa facture à la minute. »
        </blockquote>
        <div class="at-testi-meta">
          <div class="at-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><defs><linearGradient id="me-av-3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0EA5E9"/><stop offset="100%" stop-color="#60A5FA"/></linearGradient></defs><rect width="48" height="48" fill="url(#me-av-3)"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">JR</text></svg>
          </div>
          <div class="at-testi-who">
            <div class="at-testi-name">Julien R. · sous NDA</div>
            <div class="at-testi-role">CEO · PME industrielle · 85 salariés · Annecy · <b>4 ans · 0 rotation équipe</b></div>
          </div>
        </div>
      </article>
    </div>

    <p class="at-testi-foot reveal">
      Références détaillées sur demande — on met en relation directe avec d'anciens clients avant signature.
    </p>
  </div>
</section>
`;
