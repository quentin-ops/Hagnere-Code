// Références anonymisées sous NDA — nom complet + mise en relation sur demande.
// Photos avatars : remplacer par vraies photos dans /public/testimonials/ si autorisation obtenue.

export const testimonialsHtml = `
<!-- TESTIMONIALS AUDIT · 3 audits anonymisés avec métrique signature -->
<section class="at-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Trois dirigeants · trois décisions prises</div>
        <h2>Ce que l'audit leur a<br>concrètement permis de décider.</h2>
      </div>
      <div class="right">
        Trois retours à froid après l'audit&nbsp;: une <b>DD pré-Série B avec dette chiffrée à 420 k€</b>,
        une <b>Tech DD M&amp;A où un deal-breaker IP a fait baisser la valo de 1,2 M€</b>, et un <b>CTO entrant
        qui a convaincu son board de ne pas faire la refonte</b> — économie 600 k€. Mises en relation directes sur demande.
      </div>
    </div>

    <div class="at-testi-grid">
      <!-- TESTI 01 · DD pré-Série B -->
      <article class="at-testi-card reveal">
        <div class="at-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          DD PRÉ-SÉRIE B · SAAS B2B
        </div>
        <div class="at-testi-stars">★★★★★</div>
        <blockquote class="at-testi-quote">
          « On closait une Série B de 12 M€. Elaia voulait une tech DD externe avant le term sheet final.
          Hagnéré a livré un rapport 68 pages + Tech Debt P&amp;L chiffré à <b>420 k€ de dette</b>. Elaia a accepté
          leur rapport comme base de DD, ce qui nous a économisé une <b>DD OCTO à 45 k€</b> — et surtout,
          on avait pré-rédigé nos réponses aux findings. <b>Term sheet signé avec une valo &amp; un closing accélérés de 3 semaines.</b> »
        </blockquote>
        <div class="at-testi-meta">
          <div class="at-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><defs><linearGradient id="at-av-1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#A78BFA"/></linearGradient></defs><rect width="48" height="48" fill="url(#at-av-1)"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">LP</text></svg>
          </div>
          <div class="at-testi-who">
            <div class="at-testi-name">Louis P. · sous NDA</div>
            <div class="at-testi-role">CEO · SaaS B2B vertical retail · 45 salariés · Paris · <b>Dette chiffrée 420 k€ · closing +3 sem.</b></div>
          </div>
        </div>
      </article>

      <!-- TESTI 02 · Tech DD M&A acheteur -->
      <article class="at-testi-card reveal reveal-d-1">
        <div class="at-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M9 12l2 2 4-4M8 3v4h8V3"/></svg>
          TECH DD M&amp;A · CÔTÉ ACHETEUR
        </div>
        <div class="at-testi-stars">★★★★★</div>
        <blockquote class="at-testi-quote">
          « Notre groupe rachetait une scale-up edtech à 8 M€. Hagnéré a fait la Tech DD en 25 jours.
          Ils ont détecté que <b>leur moteur de recommandation utilisait une licence GPL incompatible</b>
          avec notre modèle de distribution B2B. Seul ce finding aurait justifié d'arrêter le deal&nbsp;;
          on a obtenu une re-négo du prix de <b>−1,2 M€ + clause de remédiation 6 mois</b> financée côté vendeur. L'audit s'est remboursé 18 fois. »
        </blockquote>
        <div class="at-testi-meta">
          <div class="at-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><defs><linearGradient id="at-av-2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#FCD34D"/></linearGradient></defs><rect width="48" height="48" fill="url(#at-av-2)"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">SV</text></svg>
          </div>
          <div class="at-testi-who">
            <div class="at-testi-name">Sophie V. · sous NDA</div>
            <div class="at-testi-role">Head of M&amp;A · Corporate FR coté · Lyon · <b>Re-négo −1,2 M€ · ROI audit ×18</b></div>
          </div>
        </div>
      </article>

      <!-- TESTI 03 · Baseline CTO · go/no-go refonte -->
      <article class="at-testi-card reveal reveal-d-2">
        <div class="at-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
          BASELINE CTO · GO/NO-GO REFONTE
        </div>
        <div class="at-testi-stars">★★★★★</div>
        <blockquote class="at-testi-quote">
          « Je venais d'arriver comme CTO d'une scale-up fintech. L'équipe poussait pour une refonte complète
          à 600 k€. Hagnéré a livré un audit Deep qui montrait que <b>la dette chiffrée à 140 k€ était patchable
          en 4 mois à 2 devs</b> — pas une refonte. Le board a validé ce scenario, <b>économie directe 460 k€</b>
          sur l'année. L'équipe a co-signé le plan, ça a complètement désamorcé la tension interne. »
        </blockquote>
        <div class="at-testi-meta">
          <div class="at-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><defs><linearGradient id="at-av-3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#34D399"/></linearGradient></defs><rect width="48" height="48" fill="url(#at-av-3)"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">AM</text></svg>
          </div>
          <div class="at-testi-who">
            <div class="at-testi-name">Antoine M. · sous NDA</div>
            <div class="at-testi-role">CTO · Fintech régulée · 80 salariés · Nantes · <b>Refonte évitée · économie 460 k€</b></div>
          </div>
        </div>
      </article>
    </div>

    <p class="at-testi-foot reveal">
      Références détaillées sur demande — on met en relation directe avec ces 3 dirigeants <b>avant signature</b>.
      Nos missions couvrent SaaS B2B / E-commerce / Marketplace / Edtech / HealthTech / Fintech · FR &amp; UE.
    </p>
  </div>
</section>
`;
