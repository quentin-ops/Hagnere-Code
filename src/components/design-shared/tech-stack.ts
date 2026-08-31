/**
 * Section « Notre stack » — module partagé.
 *
 * Elle vivait dans le HTML de maquette de la page d'accueil. La passe UX du
 * 28/08/2026 l'en a sortie : le choix des technologies rassure une DSI ou un
 * CTO, pas le dirigeant de PME qui découvre le studio, et elle coûtait
 * 1,26 écran sur une accueil qui en demandait déjà 23.
 *
 * Elle est déplacée sur /methode, où elle répond à une question que la page
 * pose déjà — « comment vous travaillez » — plutôt qu'à une question que
 * personne ne se pose en arrivant sur un site d'agence.
 *
 * Le HTML est sorti en module plutôt que recopié : une seconde copie aurait
 * divergé à la première mise à jour de version (le bloc annonce « Next.js 16 »
 * et « React 19 », qui bougent à chaque montée de version).
 *
 * Styles : `tech-stack.css`, à importer par toute page qui rend cette section.
 * Les règles responsive vivent, elles, dans `responsive.css` (`.lb-inner` et
 * `.lb-stack` y sont effondrées en une colonne avec les autres grilles) —
 * cette feuille-là est déjà importée par toutes les pages.
 */
export const techStackHtml = `<!-- STACK TECHNIQUE -->
<section class="logobar" id="stack" style="background-color: rgb(247, 247, 247)">
  <div class="wrap">
    <div class="lb-inner">
      <div class="lb-side">
        <div class="lb-kicker">Notre stack</div>
        <h2>Une stack <em>moderne</em>, choisie, maîtrisée.</h2>
        <p>Pas de framework choisi pour faire joli. Un socle standard, maintenable et lisible par d'autres équipes : Next.js/React, TypeScript, bases SQL, CI/CD, observabilité et agents IA modernes. Chaque brique a un rôle clair.</p>
        <div class="lb-note">— Versions revues trimestriellement · sécurité et dépendances surveillées</div>
      </div>

      <div class="lb-stack">
        <div class="lb-row">
          <div class="lb-row-label">Back-end</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/nextjs.svg" alt="Next.js" width="18" height="18" loading="lazy" decoding="async" />
              Next.js 16 <span class="lb-chip-dim">React 19 · Node</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/typescript.svg" alt="TypeScript" width="18" height="18" loading="lazy" decoding="async" />
              TypeScript <span class="lb-chip-dim">bout en bout</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/postgresql.svg" alt="PostgreSQL" width="18" height="18" loading="lazy" decoding="async" />
              PostgreSQL <span class="lb-chip-dim">Neon / Supabase</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/redis.svg" alt="Redis" width="18" height="18" loading="lazy" decoding="async" />
              Redis <span class="lb-chip-dim">cache + queues</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/drizzle.svg" alt="Drizzle ORM" width="18" height="18" loading="lazy" decoding="async" />
              Drizzle ORM <span class="lb-chip-dim">migrations typées</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/authjs-64.webp" alt="Auth.js" width="18" height="18" loading="lazy" decoding="async" />
              Auth.js <span class="lb-chip-dim">SSO / sessions</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/mysql.svg" alt="MySQL" width="18" height="18" loading="lazy" decoding="async" />
              MySQL 8 <span class="lb-chip-dim">legacy &amp; métier</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/laravel.svg" alt="Laravel" width="18" height="18" loading="lazy" decoding="async" />
              Laravel <span class="lb-chip-dim">reprises d'existant</span>
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">Front-end web</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/react.svg" alt="React" width="18" height="18" loading="lazy" decoding="async" />
              React 19.2
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/nextjs.svg" alt="Next.js" width="18" height="18" loading="lazy" decoding="async" />
              Next.js 16
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/react.svg" alt="React Server Components" width="18" height="18" loading="lazy" decoding="async" />
              React Server Components
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/tailwindcss.svg" alt="Tailwind CSS" width="18" height="18" loading="lazy" decoding="async" />
              Tailwind v4
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/typescript.svg" alt="TypeScript" width="18" height="18" loading="lazy" decoding="async" />
              TypeScript 5 <span class="lb-chip-dim">strict</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/radixui.svg" alt="Radix UI" width="18" height="18" loading="lazy" decoding="async" />
              Radix UI <span class="lb-chip-dim">accessibilité</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/motion.png" alt="Motion" width="18" height="18" loading="lazy" decoding="async" />
              Motion <span class="lb-chip-dim">interactions</span>
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">Mobile iOS/Android</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/react.svg" alt="React Native" width="18" height="18" loading="lazy" decoding="async" />
              React Native
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/expo.svg" alt="Expo" width="18" height="18" loading="lazy" decoding="async" />
              Expo SDK
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/apple.svg" alt="iOS" width="18" height="18" loading="lazy" decoding="async" />
              <img src="/logos/stack/android.svg" alt="Android" width="18" height="18" loading="lazy" decoding="async" />
              iOS &amp; Android
            </span>
            <span class="lb-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="stroke:var(--ink)" stroke-width="1.6" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="18" r="0.5" style="fill:var(--ink)"/></svg>
              Push · Offline · Caméra
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">IA &amp; agents</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/anthropic.svg" alt="Anthropic Claude" width="18" height="18" loading="lazy" decoding="async" />
              Claude <span class="lb-chip-dim">agents &amp; code</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/openai.svg" alt="OpenAI" width="18" height="18" loading="lazy" decoding="async" />
              GPT <span class="lb-chip-dim">raisonnement &amp; code</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/prism.webp" alt="Prism PHP" width="18" height="18" loading="lazy" decoding="async" />
              Prism <span class="lb-chip-dim">LLM abstraction</span>
            </span>
            <span class="lb-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3" style="fill:var(--ink)"/><path d="M8 10h8M8 14h5" style="stroke:var(--paper)" stroke-width="1.5" stroke-linecap="round"/></svg>
              RAG <span class="lb-chip-dim">embeddings + citations</span>
            </span>
            <span class="lb-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#6D28D9"/><path d="M8 12h8M12 8v8" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>
              Tool calling <span class="lb-chip-dim">agents métier</span>
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">Infra &amp; ops</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/vercel.svg" alt="Vercel" width="18" height="18" loading="lazy" decoding="async" />
              Vercel <span class="lb-chip-dim">edge</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/cloudflare.svg" alt="Cloudflare" width="18" height="18" loading="lazy" decoding="async" />
              Cloudflare <span class="lb-chip-dim">OpenNext</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/aws.svg" alt="AWS" width="18" height="18" loading="lazy" decoding="async" />
              AWS S3 + SES
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/docker.svg" alt="Docker" width="18" height="18" loading="lazy" decoding="async" />
              Docker <span class="lb-chip-dim">Coolify</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/githubactions.svg" alt="GitHub Actions" width="18" height="18" loading="lazy" decoding="async" />
              GitHub Actions
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/sentry.svg" alt="Sentry" width="18" height="18" loading="lazy" decoding="async" />
              Sentry <span class="lb-chip-dim">erreurs</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/betterstack.svg" alt="Better Stack" width="18" height="18" loading="lazy" decoding="async" />
              Better Stack <span class="lb-chip-dim">uptime</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/dependabot.svg" alt="Dependabot" width="18" height="18" loading="lazy" decoding="async" />
              Dependabot <span class="lb-chip-dim">CVE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
