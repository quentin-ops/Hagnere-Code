export const checklistHtml = `
<!-- CHECKLIST INCLUS / HORS SCOPE -->
<section class="sv-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que "un site Hagnéré" veut dire</div>
        <h2>Douze briques incluses<br>dans chaque livraison.</h2>
      </div>
      <div class="right">
        "On fait un site vitrine" c'est trop vague. Voilà la liste exacte de ce qui rentre dans
        le forfait — et ce qui n'y rentre pas. Pas d'avenant surprise à J+60.
      </div>
    </div>

    <div class="sv-check-grid">
      <!-- INCLUS -->
      <div class="sv-check-col sv-check-in reveal">
        <div class="sv-check-head">
          <div class="sv-check-badge sv-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            INCLUS DANS LE FORFAIT
          </div>
          <h3>Douze briques, à chaque projet.</h3>
        </div>
        <ul class="sv-check-list">
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Design system sur mesure</b> — direction artistique, maquettes Figma validées, composants réutilisables, révisions cadrées incluses.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>CMS headless &amp; édition autonome</b> — Sanity ou Strapi, interface simple pour votre équipe marketing, formation 2 h + guide PDF + vidéo.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Formulaires connectés à votre CRM</b> — HubSpot, Brevo ou Salesforce, anti-spam, notifications, chaque lead atterrit au bon endroit.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>SEO technique complet</b> — schema.org, sitemap, robots.txt, redirections 301, Open Graph, structure Hn et maillage interne propres.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Analytics &amp; tracking propres</b> — GA4 ou Plausible, events de conversion, consentement conforme, tableau de bord lisible.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Pages locales &amp; SEO local</b> — pages villes ou agences, schema LocalBusiness, cohérence Google Business Profile.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Multi-langue prêt à l'emploi</b> — hreflang, URLs localisées, gestion des traductions directement dans le CMS.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Performance mesurée</b> — Next.js statique, Lighthouse ≥ 95 mobile, LCP &lt; 1,5 s, images optimisées, CDN.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Accessibilité RGAA / WCAG 2.1 AA</b> — contrastes, navigation clavier, aria, alternatives textuelles, audit Lighthouse + axe.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Conformité RGPD clé en main</b> — bannière cookies conforme, politique de confidentialité, registre, sous-traitants documentés.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Hébergement 12 mois + monitoring</b> — Vercel ou OVH à votre nom, TLS, uptime monitoring, sauvegardes du CMS.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Documentation + garantie 30 jours</b> — README technique, formation, repo Git chez vous, bugs bloquants pris en charge sous 4 h ouvrées.</div>
          </li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="sv-check-col sv-check-out reveal reveal-d-1">
        <div class="sv-check-head">
          <div class="sv-check-badge sv-check-badge-out">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
            HORS SCOPE (ON VOUS LE DIT TÔT)
          </div>
          <h3>Ce qu'on ne fera pas<br>dans le forfait.</h3>
        </div>
        <ul class="sv-check-list sv-check-list-out">
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Acquisition marketing</b> — SEO éditorial continu, Ads, outbound : c'est nos <b>autres services</b>, pas dans le forfait site.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Rédaction complète des contenus</b> — les textes viennent de vous ; option rédaction SEO à la page si besoin.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Shooting photo / vidéo</b> — on part de vos visuels ou de banques premium ; photographe partenaire sur demande.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Création de logo &amp; identité de marque</b> — on intègre votre charte existante ; la créer est une mission design séparée.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>E-commerce complet</b> — panier, paiement, stock : c'est notre offre e-commerce dédiée, pas le forfait vitrine.</div>
          </li>
          <li>
            <div class="sv-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Garanties business</b> — on livre un site rapide et propre, pas des promesses de leads. Le marché, c'est votre job.</div>
          </li>
        </ul>

        <div class="sv-check-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          Si un de ces points doit rentrer dans le forfait, on en parle au cadrage et on ajuste le périmètre ensemble — pas via avenant surprise.
        </div>
      </div>
    </div>
  </div>
</section>
`;
