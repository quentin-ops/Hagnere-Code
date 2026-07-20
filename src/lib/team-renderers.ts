/**
 * Renderers HTML partagés pour les sections équipe des pages services.
 *
 * Chaque page service (publicite-en-ligne, sites-vitrines, saas-applications,
 * seo-referencement) a sa propre section équipe avec un préfixe CSS unique
 * (ads-, sv-, sa-, seo-) — mais le contenu est strictement le même. On
 * factorise ici pour que la modif d'un membre dans team.ts se reflète
 * partout sans toucher 4 fichiers.
 *
 * NOTE : on ne touche pas aux noms de classes CSS existantes — chaque page
 * conserve son préfixe pour préserver son design propre.
 */

import { DEVS, FOUNDER, STUDIO_LOCATION, type TeamMember } from "./team";

const LINKEDIN_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

interface ServiceTeamConfig {
  /** Préfixe CSS de la page (ads, sv, sa, seo). Utilisé pour les classes. */
  prefix: string;
  /** Titre de la section. */
  heading: string;
  /** Sous-titre / description. */
  description: string;
  /** Phrase d'intro de la grille devs (ex : "Six devs seniors, augmentés par Claude Code."). */
  devsIntroTitle: string;
  /** Phrase d'intro suite. */
  devsIntroBody: string;
  /** Titre footer fondateur. */
  founderRoleTitle?: string;
  /** Pour le bloc "domaines" du founder card (ex : "Patrimoine · Immobilier · SaaS B2B"). */
  founderDomains?: string;
  /** Pour le bloc "rôle projet" (ex : "Brief · cadrage · suivi client"). */
  founderRoleProject?: string;
}

/** Avatar 36px utilisé dans la grille devs des services. */
function devAvatar(member: TeamMember, prefix: string): string {
  if (member.photoAvailable) {
    return `<div class="${prefix}-team-dev-av ${prefix}-team-dev-av-photo"><img src="${member.photo}" alt="${member.fullName}" width="72" height="72" loading="lazy" decoding="async" /></div>`;
  }
  return `<div class="${prefix}-team-dev-av">${member.initials}</div>`;
}

/** Carte dev compacte (utilisée dans les pages services). */
function renderServiceDevCard(member: TeamMember, prefix: string): string {
  // On affiche le domaine d'intervention, jamais le statut contractuel.
  const mainDomain = member.id === "nicolas"
    ? "Direction technique"
    : member.roleDetail.split(" · ")[0];

  return `
          <div class="${prefix}-team-dev">
            ${devAvatar(member, prefix)}
            <div class="${prefix}-team-dev-name">${member.fullName}</div>
            <div class="${prefix}-team-dev-role">${member.role} · ${mainDomain}</div>
            <div class="${prefix}-team-dev-tags">${member.stack.slice(0, 3).map((s) => `<span>${s}</span>`).join("")}</div>
          </div>`;
}

/** Photo founder ou SVG fallback abstrait (utilisé sur toutes les pages services). */
function renderFounderImage(prefix: string): string {
  if (FOUNDER.photoAvailable) {
    return `<img src="${FOUNDER.photo}" alt="${FOUNDER.fullName}" width="740" height="926" loading="lazy" decoding="async" />`;
  }
  // Si pas de photo, on tombe sur les initiales sur fond sombre (cohérent avec les autres avatars).
  return `<div class="${prefix}-team-founder-photo-fallback" style="background:linear-gradient(135deg,${FOUNDER.avatarGradient[0]},${FOUNDER.avatarGradient[1]});display:grid;place-items:center;font-family:var(--font-geist);font-weight:700;font-size:96px;color:#fff;letter-spacing:-0.04em;width:100%;height:100%">${FOUNDER.initials}</div>`;
}

/** Construit le HTML complet d'une section équipe pour une page service. */
export function buildServiceTeamHtml(config: ServiceTeamConfig): string {
  const { prefix, heading, description, devsIntroTitle, devsIntroBody } = config;
  const founderDomains = config.founderDomains ?? FOUNDER.domains ?? "Patrimoine · Immobilier · SaaS B2B";
  const founderRoleProject = config.founderRoleProject ?? "Brief · cadrage · suivi client";
  const founderRoleTitle = config.founderRoleTitle ?? `${FOUNDER.role} · Vision produit & cadrage`;

  const devsHtml = DEVS.map((m) => renderServiceDevCard(m, prefix)).join("\n");

  return `
<!-- TEAM COMPACT (généré depuis src/lib/team.ts) -->
<section class="${prefix}-team">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Qui code votre projet</div>
        <h2>${heading}</h2>
      </div>
      <div class="right">
        ${description}
      </div>
    </div>

    <div class="${prefix}-team-grid">
      <!-- Founder -->
      <div class="${prefix}-team-founder reveal">
        <div class="${prefix}-team-founder-photo">
          ${renderFounderImage(prefix)}
          <div class="${prefix}-team-founder-tag"><span class="dot"></span> PRÉSIDENT FONDATEUR</div>
        </div>
        <div class="${prefix}-team-founder-body">
          <div class="${prefix}-team-founder-name">${FOUNDER.fullName}</div>
          <div class="${prefix}-team-founder-role">${founderRoleTitle}</div>
          <div class="${prefix}-team-founder-quote">
            « ${FOUNDER.quote} »
          </div>
          <div class="${prefix}-team-founder-meta">
            <div><span class="k">Domaines</span><span class="v">${founderDomains}</span></div>
            <div><span class="k">Rôle projet</span><span class="v">${founderRoleProject}</span></div>
            <div><span class="k">Rôle</span><span class="v">Président fondateur · cadrage</span></div>
            <div><span class="k">Studio</span><span class="v">${STUDIO_LOCATION}</span></div>
          </div>
          <a class="${prefix}-team-founder-li" href="${FOUNDER.linkedin}" target="_blank" rel="noopener noreferrer">
            ${LINKEDIN_SVG}
            Voir le profil LinkedIn
          </a>
        </div>
      </div>

      <!-- Team grid -->
      <div class="${prefix}-team-devs reveal reveal-d-1">
        <div class="${prefix}-team-devs-head">
          <h3>${devsIntroTitle}</h3>
          <p>${devsIntroBody}</p>
        </div>

        <div class="${prefix}-team-dev-grid">${devsHtml}
        </div>

        <div class="${prefix}-team-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          L'équipe proposée, ses rôles et les éventuels renforts sont identifiés au cadrage puis confirmés au devis. Toute sous-traitance ou modification d'intervenant suit les modalités d'information prévues au contrat.
        </div>
      </div>
    </div>
  </div>
</section>
`;
}
