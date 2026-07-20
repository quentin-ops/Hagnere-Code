import { TEAM_PUBLIC_COMPOSITION, TEAM_TOTAL_COUNT } from "@/lib/team";

export const teamHtml = `
<!-- TEAM · Profils mobilisables et équipe nommée dans le contrat -->
<section class="me-team-dedi" id="equipe">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Profils mobilisables</div>
        <h2>Les personnes réellement<br>affectées sont nommées<br>avant la signature.</h2>
      </div>
      <div class="right">
        Voici les profils publics susceptibles d'intervenir — prénom, rôle, statut et lien public lorsqu'il existe.
        <b>${TEAM_PUBLIC_COMPOSITION}</b>. Le devis nomme les intervenants réellement mobilisés,
        leurs responsabilités et les modalités de remplacement ou de recouvrement.
      </div>
    </div>

    <div class="me-tm-grid reveal reveal-d-1">
      <!-- Quentin Hagnéré -->
      <article class="me-tm-card me-tm-card-founder">
        <div class="me-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="me-tm-qh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#A78BFA"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#me-tm-qh)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">QH</text>
          </svg>
          <span class="me-tm-badge">Fondateur</span>
        </div>
        <div class="me-tm-body">
          <h3>Quentin Hagnéré</h3>
          <p class="me-tm-role">Front-end · Design · Brief client</p>
          <p class="me-tm-bio">Peut assurer le cadrage et le lien avec vos équipes lorsque le devis le nomme comme interlocuteur et en précise la durée.</p>
          <div class="me-tm-meta">
            <span class="me-tm-chip">📍 Bassens</span>
            <span class="me-tm-chip">👤 Fondateur</span>
          </div>
          <a href="https://www.linkedin.com/in/quentin-hagnere" target="_blank" rel="noopener" class="me-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Nicolas Wallerand -->
      <article class="me-tm-card">
        <div class="me-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="me-tm-nw" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0EA5E9"/><stop offset="100%" stop-color="#60A5FA"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#me-tm-nw)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">NW</text>
          </svg>
          <span class="me-tm-badge me-tm-badge-cto">CTO</span>
        </div>
        <div class="me-tm-body">
          <h3>Nicolas Wallerand</h3>
          <p class="me-tm-role">CTO · direction technique transverse</p>
          <p class="me-tm-bio">Architecture, choix de stack et jalons techniques selon le rôle confirmé au devis. Toute revue avec votre CTO et tout référentiel SOC 2 ou ISO sont cadrés séparément.</p>
          <div class="me-tm-meta">
            <span class="me-tm-chip">📍 Bassens</span>
            <span class="me-tm-chip">🏆 CTO managérial</span>
          </div>
          <a href="https://www.linkedin.com/in/nicolas-wallerand-86b0a079/" target="_blank" rel="noopener" class="me-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Arthur Monney -->
      <article class="me-tm-card">
        <div class="me-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="me-tm-am" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#34D399"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#me-tm-am)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">AM</text>
          </svg>
          <span class="me-tm-badge">Senior</span>
        </div>
        <div class="me-tm-body">
          <h3>Arthur Monney</h3>
          <p class="me-tm-role">Senior Dev · Back-end Laravel</p>
          <p class="me-tm-bio">Compétences déclarées en Laravel, API REST et bases de données. L'intervention, le rôle de référent et les responsabilités sont confirmés par projet.</p>
          <div class="me-tm-meta">
            <span class="me-tm-chip">⚙️ Laravel / PHP</span>
            <span class="me-tm-chip">🗄️ PostgreSQL</span>
          </div>
          <a href="https://www.linkedin.com/in/arthurmonney/" target="_blank" rel="noopener" class="me-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Frédéric Curinckx -->
      <article class="me-tm-card">
        <div class="me-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="me-tm-fc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#FCD34D"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#me-tm-fc)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">FC</text>
          </svg>
          <span class="me-tm-badge">Senior</span>
        </div>
        <div class="me-tm-body">
          <h3>Frédéric Curinckx</h3>
          <p class="me-tm-role">Senior Dev · Back-end Laravel</p>
          <p class="me-tm-bio">Compétences déclarées en architecture multi-tenant, facturation Stripe et intégrations. L'intervention et le rôle de référent sont confirmés par projet.</p>
          <div class="me-tm-meta">
            <span class="me-tm-chip">💳 Stripe</span>
            <span class="me-tm-chip">🏢 Multi-tenant</span>
          </div>
          <a href="https://www.linkedin.com/in/frederic-curinckx/" target="_blank" rel="noopener" class="me-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Ryan Mazzitelli -->
      <article class="me-tm-card">
        <div class="me-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="me-tm-rm" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#EC4899"/><stop offset="100%" stop-color="#F9A8D4"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#me-tm-rm)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">RM</text>
          </svg>
          <span class="me-tm-badge">Senior</span>
        </div>
        <div class="me-tm-body">
          <h3>Ryan Mazzitelli</h3>
          <p class="me-tm-role">Senior Dev · Back-end Laravel + IA</p>
          <p class="me-tm-bio">Compétences déclarées en intégration IA, fonctions métier, refactorisation et architectures événementielles. Le rôle exact est confirmé par projet.</p>
          <div class="me-tm-meta">
            <span class="me-tm-chip">🤖 IA / agents Claude</span>
            <span class="me-tm-chip">⚡ Event-driven</span>
          </div>
          <a href="https://www.linkedin.com/in/ryan-mazzitelli-907716262/" target="_blank" rel="noopener" class="me-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Killian Hoarau -->
      <article class="me-tm-card">
        <div class="me-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="me-tm-kh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#EF4444"/><stop offset="100%" stop-color="#FCA5A5"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#me-tm-kh)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">KH</text>
          </svg>
          <span class="me-tm-badge">Senior</span>
        </div>
        <div class="me-tm-body">
          <h3>Killian Hoarau</h3>
          <p class="me-tm-role">Senior Dev · Back-end Laravel + DevOps</p>
          <p class="me-tm-bio">Infrastructure, CI/CD, Terraform et supervision selon le périmètre. Les responsabilités d'astreinte, de gestion d'incident et les objectifs de service sont définis au contrat.</p>
          <div class="me-tm-meta">
            <span class="me-tm-chip">☁️ DevOps / Terraform</span>
            <span class="me-tm-chip">🚨 PagerDuty</span>
          </div>
          <a href="https://www.linkedin.com/in/killian-hoarau-960927138/" target="_blank" rel="noopener" class="me-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Peter Sum Sie Kung -->
      <article class="me-tm-card">
        <div class="me-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="me-tm-ps" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0EA5E9"/><stop offset="100%" stop-color="#7DD3FC"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#me-tm-ps)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">PS</text>
          </svg>
          <span class="me-tm-badge">Confirmé</span>
        </div>
        <div class="me-tm-body">
          <h3>Peter Sum Sie Kung</h3>
          <p class="me-tm-role">Dev confirmé · Laravel + front</p>
          <p class="me-tm-bio">Intervient sur le suivi applicatif, les intégrations CMS, le diagnostic et le support selon le périmètre. La continuité et les relais sont définis par projet.</p>
          <div class="me-tm-meta">
            <span class="me-tm-chip">🛠️ TMA Laravel</span>
            <span class="me-tm-chip">📦 Intégrations CMS</span>
          </div>
          <span class="me-tm-li me-tm-li-nda">Profil sur demande sous NDA</span>
        </div>
      </article>
    </div>

    <div class="me-tm-note reveal reveal-d-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      <div>
        <b>${TEAM_TOTAL_COUNT} profils présentés au total.</b> ${TEAM_PUBLIC_COMPOSITION}.
        Les personnes réellement mobilisées, leur statut et les modalités de continuité figurent au devis.
      </div>
    </div>
  </div>
</section>
`;
