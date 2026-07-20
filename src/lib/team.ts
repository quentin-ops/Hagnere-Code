/**
 * SOURCE OF TRUTH — équipe Hagnéré Code
 *
 * Toutes les sections du site qui présentent l'équipe doivent consommer ce
 * fichier (et pas hardcoder les noms / rôles / liens). Quand tu changes une
 * info ici, ça se propage partout :
 *  - homepage section EQUIPE
 *  - page /equipe (founder, CTO, dev grid, mosaïque)
 *  - sections team des pages services (publicite-en-ligne, sites-vitrines,
 *    saas-applications, seo-referencement, audit-technique, maintenance-evolution)
 *  - JSON-LD Organization
 *
 * Photos : déposez les fichiers dans /public/team/{id}.webp ou .jpeg, puis
 * mettez `photoAvailable: true`. Tant que c'est false, on affiche les
 * initiales sur fond gradient (avatar fallback propre).
 */

export type TeamStatus = "gerant" | "CDI" | "freelance";

export interface TeamMember {
  /** Identifiant stable (utilisé pour les routes, les fichiers photos, etc.). */
  id: string;
  firstName: string;
  lastName: string;
  /** Pour l'affichage (peut différer de `${firstName} ${lastName}` pour les noms longs). */
  fullName: string;
  /** Initiales pour l'avatar fallback. */
  initials: string;
  /** Rôle court (utilisé en titre de carte). */
  role: string;
  /** Description rôle (sous-titre, ex : "Brief / Design / Front-end"). */
  roleDetail: string;
  /** Bio courte (1-2 phrases). */
  bio?: string;
  /** Spécialité technique (1 phrase, pour les pages services). */
  specialty?: string;
  status: TeamStatus;
  /** Label affiché dans les badges (ex : "Président fondateur", "CDI", "Freelance long-terme"). */
  statusLabel: string;
  basedAt: string;
  yearsExp: string;
  /** Chemin public de la photo. Existe peut-être pas encore (voir photoAvailable). */
  photo: string;
  /** Si true, on affiche l'image. Sinon : avatar initiales sur fond gradient. */
  photoAvailable: boolean;
  /** Gradient de l'avatar fallback. [from, to] en hex. */
  avatarGradient: [string, string];
  linkedin?: string;
  /** Pour les freelances Codeur (Peter). */
  codeur?: string;
  /** Stack technique mise en avant (3-5 tags max). */
  stack: string[];
  /** Citation ("quote") pour les cartes éditoriales (founder, CTO). */
  quote?: string;
  /** Domaines/secteurs de prédilection (founder card uniquement). */
  domains?: string;
}

/** Adresse publique du studio, utilisée dans les cartes et preuves locales. */
export const STUDIO_LOCATION = "Bassens · Savoie";

export const TEAM = {
  quentin: {
    id: "quentin",
    firstName: "Quentin",
    lastName: "Hagnéré",
    fullName: "Quentin Hagnéré",
    initials: "QH",
    role: "Président fondateur codeur",
    roleDetail: "Brief / Design / Front-end / Back-office",
    bio: "Président de Hagnéré Code et interlocuteur de cadrage. Son rôle effectif sur chaque mission — pilotage, design, front-end ou back-office — est précisé dans le devis.",
    specialty: "Cadrage, design produit, intégration front et pilotage selon le périmètre signé.",
    status: "gerant",
    statusLabel: "Président fondateur",
    basedAt: STUDIO_LOCATION,
    yearsExp: "10+",
    photo: "/team/quentin.webp",
    photoAvailable: true,
    avatarGradient: ["#6D28D9", "#A78BFA"],
    linkedin: "https://www.linkedin.com/in/quentin-hagnere",
    stack: ["DESIGN", "REACT", "NEXT.JS", "FIGMA"],
    quote: "Mon rôle est de transformer le besoin métier en décisions vérifiables, puis de faire écrire les responsabilités et les critères de recette.",
    domains: "Patrimoine · Immobilier · SaaS B2B",
  },
  nicolas: {
    id: "nicolas",
    firstName: "Nicolas",
    lastName: "Wallerand",
    fullName: "Nicolas Wallerand",
    initials: "NW",
    role: "CTO",
    roleDetail: "Direction technique · Architecture · Code review",
    bio: "Intervient sur l'architecture, les choix de stack, les jalons techniques et la revue de code selon la mission. Aucune certification SOC 2 ou ISO 27001 n'est revendiquée par cette bio.",
    specialty: "Architecture, choix de stack, jalons techniques et revue de code selon le devis.",
    status: "CDI",
    statusLabel: "CTO · CDI",
    basedAt: "Chambéry",
    yearsExp: "10+",
    photo: "/team/nicolas.webp",
    photoAvailable: true,
    avatarGradient: ["#0EA5E9", "#60A5FA"],
    linkedin: "https://www.linkedin.com/in/nicolas-wallerand-86b0a079/",
    stack: ["ARCHITECTURE", "TYPESCRIPT", "MANAGEMENT"],
    quote: "Mon job, c'est de tenir la barre tech sans qu'un client ait à s'en soucier. Quand l'archi est juste, le reste suit.",
  },
  killian: {
    id: "killian",
    firstName: "Killian",
    lastName: "Hoarau",
    fullName: "Killian Hoarau",
    initials: "KH",
    role: "Senior Dev",
    roleDetail: "Back-end + DevOps · Infrastructure",
    bio: "Intervient sur Docker, CI/CD, supervision, sauvegardes et sécurité selon le périmètre. Les objectifs de capacité, de restauration et leurs tests sont définis au contrat, jamais déduits de cette présentation.",
    specialty: "DevOps, sécurité, capacité, CI/CD et tests automatisés selon la mission.",
    status: "CDI",
    statusLabel: "CDI",
    basedAt: "Chambéry",
    yearsExp: "5+",
    photo: "/team/killian.webp",
    photoAvailable: true,
    avatarGradient: ["#EF4444", "#FCA5A5"],
    linkedin: "https://www.linkedin.com/in/killian-hoarau-960927138/",
    stack: ["TYPESCRIPT", "DOCKER", "AWS", "LARAVEL"],
  },
  frederic: {
    id: "frederic",
    firstName: "Frédéric",
    lastName: "Curinckx",
    fullName: "Frédéric Curinckx",
    initials: "FC",
    role: "Senior Dev",
    roleDetail: "Full-stack · Temps-réel",
    bio: "Intervient sur les interfaces métier, les formulaires complexes et les tableaux de bord. Délais, niveau de performance et critères de recette restent propres à chaque projet.",
    specialty: "Formulaires métier, interfaces temps réel et queues — React Server Components, reprises Laravel/Livewire.",
    status: "CDI",
    statusLabel: "CDI",
    basedAt: "Chambéry",
    yearsExp: "5+",
    photo: "/team/frederic.jpeg",
    photoAvailable: true,
    avatarGradient: ["#F59E0B", "#FCD34D"],
    linkedin: "https://www.linkedin.com/in/frederic-curinckx/",
    stack: ["REACT", "NEXT.JS", "LARAVEL", "LIVEWIRE"],
  },
  arthur: {
    id: "arthur",
    firstName: "Arthur",
    lastName: "Monney",
    fullName: "Arthur Monney",
    initials: "AM",
    role: "Senior Dev Back-end",
    roleDetail: "Paiements · Multi-tenant · Architecture",
    bio: "Intervient sur les architectures multi-tenant, la facturation et les paiements récurrents. Les intégrations, responsabilités et dépendances tierces sont précisées au devis.",
    specialty: "Architecture back-end, paiements, facturation et reprises Laravel selon le périmètre.",
    status: "freelance",
    statusLabel: "Freelance long-terme",
    basedAt: "France",
    yearsExp: "5+",
    photo: "/team/arthur.webp",
    photoAvailable: true,
    avatarGradient: ["#10B981", "#34D399"],
    linkedin: "https://www.linkedin.com/in/arthurmonney/",
    stack: ["TYPESCRIPT", "STRIPE", "LARAVEL", "PENNYLANE"],
  },
  ryan: {
    id: "ryan",
    firstName: "Ryan",
    lastName: "Mazzitelli",
    fullName: "Ryan Mazzitelli",
    initials: "RM",
    role: "Senior Dev",
    roleDetail: "Back-end + IA · Agents Claude",
    bio: "Intervient sur les intégrations LLM, les pipelines d'extraction, le RAG et les agents outillés. Les contrôles humains, données autorisées et limites du modèle sont cadrés par projet.",
    specialty: "Intégrations IA, agents, webhooks, API tierces et reprises Laravel selon la mission.",
    status: "freelance",
    statusLabel: "Freelance long-terme",
    basedAt: "France",
    yearsExp: "5+",
    photo: "/team/ryan.jpeg",
    photoAvailable: true,
    avatarGradient: ["#16A34A", "#4ADE80"],
    linkedin: "https://www.linkedin.com/in/ryan-mazzitelli-907716262/",
    stack: ["TYPESCRIPT", "CLAUDE", "LARAVEL", "PGVECTOR"],
  },
  peter: {
    id: "peter",
    firstName: "Peter",
    lastName: "Sum Sie Kung",
    fullName: "Peter Sum Sie Kung",
    initials: "PS",
    role: "Dev confirmé Full-stack",
    roleDetail: "Full-stack React / Vue.js · PHP (Laravel, Symfony)",
    bio: "Intervient côté API, intégrations, refactorisation et interfaces. Le rôle, la charge et les composants critiques qui lui sont confiés sont confirmés pour chaque mission.",
    specialty: "API, modélisation BDD, intégrations — front React/Vue, back Laravel/Symfony.",
    status: "freelance",
    statusLabel: "Freelance long-terme",
    basedAt: "France",
    yearsExp: "3+",
    photo: "/team/peter.webp",
    photoAvailable: true,
    avatarGradient: ["#831843", "#EC4899"],
    codeur: "https://www.codeur.com/-peterssk",
    stack: ["REACT", "VUE.JS", "LARAVEL", "SYMFONY", "PHP"],
  },
} as const satisfies Record<string, TeamMember>;

export type TeamMemberId = keyof typeof TEAM;

// =====================================================================
// Helpers — collections + tri
// =====================================================================

export const TEAM_LIST: TeamMember[] = Object.values(TEAM);

export const FOUNDER = TEAM.quentin;

export const CTO = TEAM.nicolas;

/** Devs (toutes catégories : CDI + freelances long-terme), hors fondateur et CTO. */
export const DEVS: TeamMember[] = [
  TEAM.killian,
  TEAM.frederic,
  TEAM.arthur,
  TEAM.ryan,
  TEAM.peter,
];

/** Effectif public : 1 fondateur, 1 CTO et les développeurs ci-dessus. */
export const TEAM_TOTAL_COUNT = TEAM_LIST.length;
export const TEAM_OTHER_DEVELOPERS_COUNT = DEVS.length;
export const TEAM_PUBLIC_COMPOSITION = `${TEAM_TOTAL_COUNT} personnes au total : 1 président fondateur, 1 CTO et ${TEAM_OTHER_DEVELOPERS_COUNT} autres développeurs`;

export const CDI_MEMBERS: TeamMember[] = TEAM_LIST.filter((m) => m.status === "CDI");
export const FREELANCE_MEMBERS: TeamMember[] = TEAM_LIST.filter((m) => m.status === "freelance");

// =====================================================================
// Helpers — rendu HTML
// =====================================================================

interface AvatarOptions {
  /** Size in pixels (square). Default 36. */
  size?: number;
  /** CSS classes additionnelles. */
  className?: string;
  /** Forme : "circle" (default) ou "square" (rounded corners). */
  shape?: "circle" | "square";
}

/**
 * Avatar inline : si photo dispo → élément `img`, sinon initiales sur fond gradient.
 * Retourne du HTML brut (pour insertion dans un template string).
 */
export function renderAvatar(member: TeamMember, options: AvatarOptions = {}): string {
  const size = options.size ?? 36;
  const cls = options.className ?? "";
  const radius = options.shape === "square" ? "16px" : "50%";
  const fontSize = Math.round(size * 0.36);

  if (member.photoAvailable) {
    return `<div class="${cls}" style="width:${size}px;height:${size}px;border-radius:${radius};overflow:hidden;flex-shrink:0;background:#171717"><img src="${member.photo}" alt="${member.fullName}" width="${size}" height="${size}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" /></div>`;
  }

  const [from, to] = member.avatarGradient;
  return `<div class="${cls}" style="width:${size}px;height:${size}px;border-radius:${radius};background:linear-gradient(135deg,${from},${to});color:#fff;display:grid;place-items:center;font-family:var(--font-geist);font-weight:600;font-size:${fontSize}px;letter-spacing:-0.01em;flex-shrink:0">${member.initials}</div>`;
}

/** Lien LinkedIn ou Codeur selon le profil. Utilisé par tous les rendus de cartes. */
export function getProfileLink(member: TeamMember): { url: string; label: string } | null {
  if (member.linkedin) return { url: member.linkedin, label: "LinkedIn" };
  if (member.codeur) return { url: member.codeur, label: "Codeur" };
  return null;
}

/** Status badge rendu en HTML. Utilisé dans les cartes équipe. */
export function renderStatusBadge(member: TeamMember): string {
  if (member.status === "freelance") {
    return `<span class="team-status-badge team-status-freelance">FREELANCE</span>`;
  }
  if (member.status === "gerant") {
    return `<span class="team-status-badge team-status-gerant">ASSOCIÉ</span>`;
  }
  return ""; // pas de badge pour CDI (par défaut)
}
