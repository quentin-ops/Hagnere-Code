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
  /** Label affiché dans les badges (ex : "Associé dirigeant", "CDI", "Freelance long-terme"). */
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

export const TEAM = {
  quentin: {
    id: "quentin",
    firstName: "Quentin",
    lastName: "Hagnéré",
    fullName: "Quentin Hagnéré",
    initials: "QH",
    role: "Gérant associé codeur",
    roleDetail: "Brief / Design / Front-end / Back-office",
    bio: "Interlocuteur principal du brief à la livraison. Vient du terrain métier (3 entreprises fondées, 2 cabinets actifs), pas du conseil — c'est ce qui fait la différence sur les premiers cadrages.",
    specialty: "Brief client, cadrage, design produit, intégration front, suivi client de A à Z.",
    status: "gerant",
    statusLabel: "Associé dirigeant",
    basedAt: "Chambéry · Savoie",
    yearsExp: "10+",
    photo: "/team/quentin.webp",
    photoAvailable: true,
    avatarGradient: ["#6D28D9", "#A78BFA"],
    linkedin: "https://www.linkedin.com/in/quentin-hagnere",
    stack: ["DESIGN", "REACT", "NEXT.JS", "FIGMA"],
    quote: "Je viens du terrain. Je sais ce qu'un métier attend vraiment d'un outil, pas ce qu'un brief en parle. C'est ça que j'apporte à chaque projet.",
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
    bio: "Vision architecture, management transverse, cadrage des projets complexes et revue de code senior. Compliance SOC2 / ISO 27001 sur les audits.",
    specialty: "Architecture, choix de stack, jalons techniques, revue de code, compliance.",
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
    bio: "Le gardien de l'infra. Docker, CI/CD, monitoring, backups, sécurité. C'est lui qui s'assure que vos serveurs tiennent un pic de charge à 3 h du matin et que vos données sont restaurables en moins de 15 minutes.",
    specialty: "DevOps, sécurité, scalabilité, CI/CD et tests automatisés.",
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
    bio: "Le maestro du Livewire / Flux UI. Construit des interfaces métier riches en quelques jours là où d'autres mettent des semaines. Spécialiste des formulaires complexes et des dashboards temps-réel.",
    specialty: "Formulaires métier, interfaces temps-réel et queues — React Server Components, reprises Laravel/Livewire.",
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
    bio: "Architecte des systèmes complexes : multi-tenant, facturation, paiements récurrents. Le go-to de l'équipe quand un client dit « il nous faut Stripe + Pennylane + comptabilité ».",
    specialty: "Architecture back-end, systèmes complexes, paiements et facturation. Reprises Laravel.",
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
    bio: "Le pont entre Laravel et l'IA. Construit les agents Claude, les RAG, les pipelines d'extraction et les intégrations LLM. Notre spécialiste pour transformer un dossier PDF en données structurées exploitables.",
    specialty: "Intégrations IA, agents Claude, webhooks et APIs tierces. Reprises Laravel.",
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
    bio: "Le couteau suisse back + front. Quand il faut produire vite et propre — endpoints API, intégrations, refactor — Peter livre. Bilingue PHP (Laravel, Symfony) et JS moderne (React, Vue.js), il enchaîne backend critique et UI sans rupture de tempo.",
    specialty: "Renforts API, modélisation BDD, intégrations — front React/Vue, back Laravel/Symfony.",
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
 * Avatar inline : si photo dispo → <img>, sinon initiales sur fond gradient.
 * Retourne du HTML brut (pour insertion dans un template string).
 */
export function renderAvatar(member: TeamMember, options: AvatarOptions = {}): string {
  const size = options.size ?? 36;
  const cls = options.className ?? "";
  const radius = options.shape === "square" ? "16px" : "50%";
  const fontSize = Math.round(size * 0.36);

  if (member.photoAvailable) {
    return `<div class="${cls}" style="width:${size}px;height:${size}px;border-radius:${radius};overflow:hidden;flex-shrink:0;background:#171717"><img src="${member.photo}" alt="${member.fullName}" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" /></div>`;
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
