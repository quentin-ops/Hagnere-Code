/**
 * Section ÉQUIPE de la homepage.
 *
 * Source de vérité : src/lib/team.ts. Quand on change un nom, un statut ou
 * une photo dans team.ts, ce module se régénère automatiquement et toutes
 * les pages qui consomment ce HTML reflètent la modif.
 *
 * Préserve les classes CSS existantes (.eq-*) — pas de migration CSS nécessaire.
 */

import {
  CTO,
  DEVS,
  FOUNDER,
  STUDIO_LOCATION,
  TEAM,
  TEAM_OTHER_DEVELOPERS_COUNT,
  TEAM_PUBLIC_COMPOSITION,
  TEAM_TOTAL_COUNT,
  type TeamMember,
} from "@/lib/team";

const LINKEDIN_SVG = `<svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

const CODEUR_SVG = `<svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`;

/** Avatar 36px : photo si dispo, sinon initiales sur fond gradient (variant numéroté). */
function devAvatar(member: TeamMember, variantClass: string): string {
  if (member.photoAvailable) {
    return `<div class="eq-dev-avatar eq-dev-avatar-photo"><img src="${member.photo}" alt="${member.fullName}" width="72" height="72" loading="lazy" decoding="async" /></div>`;
  }
  return `<div class="eq-dev-avatar ${variantClass}">${member.initials}</div>`;
}

/** Lien profil (LinkedIn ou Codeur) en bas de l'avatar. */
function devProfileLink(member: TeamMember): string {
  if (member.linkedin) {
    return `<a class="eq-li-link" href="${member.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ${member.fullName}" title="LinkedIn ${member.fullName}">${LINKEDIN_SVG}</a>`;
  }
  if (member.codeur) {
    return `<a class="eq-li-link" href="${member.codeur}" target="_blank" rel="noopener noreferrer" aria-label="Profil Codeur ${member.fullName}" title="Profil Codeur ${member.fullName}">${CODEUR_SVG}</a>`;
  }
  return "";
}

/** Tag à droite du nom : CTO uniquement (aucun statut contractuel affiché). */
function devNameTag(member: TeamMember): string {
  if (member.id === "nicolas") return `<span class="eq-dev-tag">CTO</span>`;
  return "";
}

/** Sous-titre : rôle + domaine principal. */
function devYears(member: TeamMember): string {
  if (member.id === "nicolas") return "CTO · Direction technique";
  const mainDomain = member.roleDetail.split(" · ")[0];
  return `${member.role} · ${mainDomain}`;
}

function renderDevCard(member: TeamMember, variantClass: string): string {
  return `
          <div class="eq-dev">
            <div class="eq-dev-head">
              <div class="eq-dev-avatar-wrap">${devAvatar(member, variantClass)}${devProfileLink(member)}</div>
              <div class="eq-dev-meta">
                <div class="eq-dev-name">${member.fullName}${devNameTag(member)}</div>
                <div class="eq-dev-years">${devYears(member)}</div>
              </div>
            </div>
            <div class="eq-dev-spec">${member.specialty || ""}</div>
            <div class="eq-dev-stack">${member.stack.slice(0, 3).map((s) => `<span>${s}</span>`).join("")}</div>
          </div>`;
}

/** Photo / placeholder du fondateur (grand format à gauche). */
function renderFounderPhoto(): string {
  if (FOUNDER.photoAvailable) {
    return `<img src="${FOUNDER.photo}" alt="${FOUNDER.fullName}, ${FOUNDER.role.toLowerCase()} de Hagnéré Code" width="740" height="926" loading="lazy" decoding="async" />`;
  }
  // Fallback : SVG initiales géantes sur fond dégradé violet (état historique).
  return `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="photoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1a1a1a"/>
                <stop offset="55%" stop-color="#0f0f0f"/>
                <stop offset="100%" stop-color="#1e1b3a"/>
              </linearGradient>
              <radialGradient id="photoGlow" cx="30%" cy="25%" r="70%">
                <stop offset="0%" stop-color="#6D28D9" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#6D28D9" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="400" height="500" fill="url(#photoGrad)"/>
            <rect width="400" height="500" fill="url(#photoGlow)"/>
            <text x="200" y="295" text-anchor="middle" font-family="Geist" font-weight="700" font-size="180" fill="#ffffff" letter-spacing="-8">${FOUNDER.initials}</text>
          </svg>`;
}

// Variants visuels d'avatar par dev (gradient / accent unique par carte).
// On garde la convention historique v1..v6 pour ne rien casser au CSS.
const DEV_VARIANT_BY_ID: Record<string, string> = {
  nicolas: "v1",
  killian: "v5",
  frederic: "v3",
  arthur: "v2",
  ryan: "v4",
  peter: "v6",
};

// Ordre d'affichage : CTO en premier, puis les développeurs par domaine.
const DISPLAY_ORDER = ["nicolas", "killian", "frederic", "arthur", "ryan", "peter"] as const;

const devCardsHtml = DISPLAY_ORDER
  .map((id) => {
    const member = TEAM[id];
    const variant = DEV_VARIANT_BY_ID[id] || "";
    return renderDevCard(member, `eq-dev-avatar-${variant} ${variant}`);
  })
  .join("\n");

void CTO;
void DEVS; // exposed for future iterations (filtered grids)

export const equipeHtml = `
<!-- EQUIPE -->
<section class="equipe" id="equipe">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— L'équipe</div>
        <h2>${TEAM_TOTAL_COUNT} personnes :<br>un président, un CTO et ${TEAM_OTHER_DEVELOPERS_COUNT} autres développeurs.</h2>
      </div>
      <div class="right">
        Pas de pool anonyme, pas d'offshore, pas de white-label.
        <b>${TEAM_PUBLIC_COMPOSITION}</b>, présentés ici avec leur rôle et leur profil public.
        Les personnes affectées à votre projet sont <b>nommées au devis</b>, avant la première
        ligne de code.
      </div>
    </div>

    <div class="eq-grid">
      <!-- FONDATEUR -->
      <div class="eq-founder reveal">
        <div class="eq-founder-photo">
          <div class="eq-founder-tag">
            <span class="dot"></span>
            PRÉSIDENT FONDATEUR
          </div>
          ${renderFounderPhoto()}
        </div>
        <div class="eq-founder-body">
          <div>
            <div class="eq-founder-name">${FOUNDER.fullName}</div>
            <span class="eq-founder-role">${FOUNDER.role} · ${FOUNDER.roleDetail}</span>
            <a class="eq-founder-li" href="${FOUNDER.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn de ${FOUNDER.fullName}">${LINKEDIN_SVG} Voir le profil</a>
          </div>
          <div class="eq-founder-quote">
            « ${FOUNDER.quote} »
          </div>
          <div class="eq-founder-meta">
            <div class="eq-fm">
              <span class="k">Domaine</span>
              <span class="v">${FOUNDER.domains}</span>
            </div>
            <div class="eq-fm">
              <span class="k">Rôle projet</span>
              <span class="v">Brief · cadrage · design · intégration front</span>
            </div>
            <div class="eq-fm">
              <span class="k">Profil public</span>
              <span class="v">Parcours détaillé sur LinkedIn</span>
            </div>
            <div class="eq-fm">
              <span class="k">Studio</span>
              <span class="v">${STUDIO_LOCATION}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- EQUIPE TECH -->
      <div class="eq-team">
        <div class="eq-team-intro reveal">
          <h3>Un CTO et des développeurs<br>nommés,<br>assistés par <em>Claude Code</em>.</h3>
          <p>
            Nicolas au CTO, puis Killian, Frédéric, Arthur, Ryan et Peter sur l'exécution —
            avec les rôles et spécialités déclarés sur chaque carte. La composition réellement
            mobilisée et les responsabilités de chacun sont écrites avant la signature.
            Claude Code peut assister la recherche, l'exploration technique et les plans d'implémentation&nbsp;:
            <b>ses sorties restent relues, testées et validées par un intervenant humain</b>.
          </p>
        </div>

        <div class="eq-devs reveal reveal-d-1">${devCardsHtml}
        </div>

        <!-- Claude Code highlight -->
        <div class="eq-claude reveal reveal-d-2">
          <div class="eq-claude-icon">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true"><path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z"/></svg>
          </div>
          <div class="eq-claude-body">
            <span class="tag">Méthode · Claude Code</span>
            <h4>Vous décrivez le besoin. On gère le reste.</h4>
            <p>Claude Code peut aider à explorer une base de code, documenter des hypothèses et préparer un plan d'implémentation. Il ne remplace ni la validation métier, ni les tests, ni un conseil juridique qualifié.</p>
          </div>
        </div>

        <!-- Stats -->
        <div class="eq-stats reveal reveal-d-3">
          <div class="eqs">
            <div class="n">${TEAM_TOTAL_COUNT}</div>
            <div class="l">personnes dans l'équipe, président et CTO compris</div>
          </div>
          <div class="eqs">
            <div class="n">${TEAM_OTHER_DEVELOPERS_COUNT}</div>
            <div class="l">développeurs en plus du président et du CTO</div>
          </div>
          <div class="eqs">
            <div class="n">0</div>
            <div class="l">offshore, white-label ou pool anonyme</div>
          </div>
          <div class="eqs">
            <div class="n">1</div>
            <div class="l">interlocuteur senior, du premier appel au devis</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
