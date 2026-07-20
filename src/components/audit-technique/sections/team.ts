import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const teamHtml = `
<!-- TEAM · profils mobilisables, intervenants nommés dans le devis -->
<section class="at-team-dedi" id="equipe">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Profils mobilisables</div>
        <h2>Chaque intervenant réel<br>est nommé avec son rôle<br>avant la signature.</h2>
      </div>
      <div class="right">
        Pas de "notre équipe d'experts" anonyme. Les intervenants effectivement mobilisés, leur statut et leurs rôles
        sont nommés dans le devis selon le périmètre. Le devis précise aussi la responsabilité de revue
        et les modalités de continuité en cas d'indisponibilité.
      </div>
    </div>

    <div class="at-tm-grid reveal reveal-d-1">
      <!-- Quentin Hagnéré · Fondateur · Lead auditor -->
      <article class="at-tm-card at-tm-card-founder">
        <div class="at-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="at-tm-qh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#A78BFA"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#at-tm-qh)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">QH</text>
          </svg>
          <span class="at-tm-badge">Associé-lead</span>
        </div>
        <div class="at-tm-body">
          <h4>Quentin Hagnéré</h4>
          <p class="at-tm-role">Fondateur · Lead auditor · Restitution client</p>
          <p class="at-tm-bio">Peut intervenir sur le cadrage, la synthèse et la restitution selon l'équipe nommée au devis. Les règles de prévention des conflits d'intérêts sont précisées pour la mission.</p>
          <div class="at-tm-meta">
            <span class="at-tm-chip">🎯 Cadrage · restitution</span>
            <span class="at-tm-chip">⚖️ Signataire CoI</span>
          </div>
          <a href="https://www.linkedin.com/in/quentin-hagnere" target="_blank" rel="noopener" class="at-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Nicolas Wallerand · CTO -->
      <article class="at-tm-card">
        <div class="at-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="at-tm-nw" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0EA5E9"/><stop offset="100%" stop-color="#60A5FA"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#at-tm-nw)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">NW</text>
          </svg>
          <span class="at-tm-badge at-tm-badge-cto">CTO · CDI</span>
        </div>
        <div class="at-tm-body">
          <h4>Nicolas Wallerand</h4>
          <p class="at-tm-role">Direction technique · Architecture · Code review</p>
          <p class="at-tm-bio">Peut contribuer au cadrage d'architecture et à la revue de code selon le devis. Son rôle exact, les dimensions couvertes et les éventuels spécialistes tiers sont confirmés avant signature.</p>
          <div class="at-tm-meta">
            <span class="at-tm-chip">📐 Archi · C4</span>
            <span class="at-tm-chip">🔎 Revue de code</span>
          </div>
          <a href="https://www.linkedin.com/in/nicolas-wallerand-86b0a079/" target="_blank" rel="noopener" class="at-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Arthur Monney · Senior Dev Back-end -->
      <article class="at-tm-card">
        <div class="at-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="at-tm-am" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#34D399"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#at-tm-am)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">AM</text>
          </svg>
          <span class="at-tm-badge">Freelance long-terme</span>
        </div>
        <div class="at-tm-body">
          <h4>Arthur Monney</h4>
          <p class="at-tm-role">Senior Dev Back-end · Paiements · Architecture</p>
          <p class="at-tm-bio">Peut contribuer à une revue back-end, de facturation ou d'architecture selon le périmètre. Sa mobilisation et les outils autorisés sont confirmés au devis.</p>
          <div class="at-tm-meta">
            <span class="at-tm-chip">🏗️ Architecture back-end</span>
            <span class="at-tm-chip">💳 Paiements · facturation</span>
          </div>
          <a href="https://www.linkedin.com/in/arthurmonney/" target="_blank" rel="noopener" class="at-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Frédéric Curinckx · Senior Dev Full-stack -->
      <article class="at-tm-card">
        <div class="at-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="at-tm-fc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#FCD34D"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#at-tm-fc)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">FC</text>
          </svg>
          <span class="at-tm-badge">CDI</span>
        </div>
        <div class="at-tm-body">
          <h4>Frédéric Curinckx</h4>
          <p class="at-tm-role">Senior Dev · Full-stack · Temps-réel</p>
          <p class="at-tm-bio">Peut contribuer à la revue d'interfaces métier, de flux temps-réel ou d'une reprise Laravel selon le périmètre et la disponibilité confirmés au devis.</p>
          <div class="at-tm-meta">
            <span class="at-tm-chip">⚛️ React · Next.js</span>
            <span class="at-tm-chip">🔄 Laravel · temps-réel</span>
          </div>
          <a href="https://www.linkedin.com/in/frederic-curinckx/" target="_blank" rel="noopener" class="at-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Ryan Mazzitelli · Senior Dev Back-end + IA -->
      <article class="at-tm-card">
        <div class="at-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="at-tm-rm" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#EC4899"/><stop offset="100%" stop-color="#F9A8D4"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#at-tm-rm)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">RM</text>
          </svg>
          <span class="at-tm-badge">Freelance long-terme</span>
        </div>
        <div class="at-tm-body">
          <h4>Ryan Mazzitelli</h4>
          <p class="at-tm-role">Senior Dev · Back-end + IA · Agents Claude</p>
          <p class="at-tm-bio">Peut contribuer à la revue d'intégrations IA, d'API et de pipelines d'extraction selon le périmètre. Aucune qualification d'auditeur sécurité n'est présumée par cette présentation.</p>
          <div class="at-tm-meta">
            <span class="at-tm-chip">🤖 IA · LLM</span>
            <span class="at-tm-chip">🔌 API · webhooks</span>
          </div>
          <a href="https://www.linkedin.com/in/ryan-mazzitelli-907716262/" target="_blank" rel="noopener" class="at-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>

      <!-- Killian Hoarau · Senior Dev Back-end + DevOps -->
      <article class="at-tm-card">
        <div class="at-tm-avatar">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <defs><linearGradient id="at-tm-kh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#EF4444"/><stop offset="100%" stop-color="#FCA5A5"/></linearGradient></defs>
            <rect width="80" height="80" rx="16" fill="url(#at-tm-kh)"/>
            <text x="40" y="50" text-anchor="middle" font-family="Geist" font-weight="600" font-size="28" fill="#fff">KH</text>
          </svg>
          <span class="at-tm-badge">CDI</span>
        </div>
        <div class="at-tm-body">
          <h4>Killian Hoarau</h4>
          <p class="at-tm-role">Senior Dev · Back-end + DevOps · Infrastructure</p>
          <p class="at-tm-bio">Peut contribuer à la revue d'infrastructure, de CI/CD et de tests selon le périmètre. Le rôle d'auditeur, les entretiens et les responsabilités sont ceux nommés au devis.</p>
          <div class="at-tm-meta">
            <span class="at-tm-chip">🐳 Docker · CI/CD</span>
            <span class="at-tm-chip">🧪 Tests · infrastructure</span>
          </div>
          <a href="https://www.linkedin.com/in/killian-hoarau-960927138/" target="_blank" rel="noopener" class="at-tm-li">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18H5.7V9.8h2.6V18zM7 8.6c-.85 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.85 0 1.5.68 1.5 1.5S7.85 8.6 7 8.6zM18.4 18h-2.6v-4.2c0-1.1-.45-1.7-1.35-1.7-.97 0-1.55.65-1.55 1.7V18h-2.6V9.8h2.5v1.13s.75-1.38 2.52-1.38c1.77 0 3.08 1.09 3.08 3.35V18z"/></svg>
            LinkedIn
          </a>
        </div>
      </article>
    </div>

    <div class="at-tm-note reveal reveal-d-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      <div>
        <b>${TEAM_PUBLIC_COMPOSITION}</b>. La composition dépend des dimensions critiques et de la disponibilité confirmée.
        Le devis nomme les intervenants, leur statut, la responsabilité de synthèse et les modalités de continuité.
      </div>
    </div>
  </div>
</section>
`;
