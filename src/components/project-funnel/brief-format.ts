/**
 * Formateur de brief : FunnelState → texte structuré.
 *
 * Sert deux usages : l'aperçu "Brief transmis" à l'étape récap, et le
 * message envoyé à l'équipe via /api/project-inquiry. Le prospect et
 * l'équipe voient exactement le même document — pas de transformation
 * cachée entre ce qui est relu et ce qui est reçu.
 */

export interface FunnelStateLike {
  projectKinds: string[];
  objectives: string[];
  description: string;
  currentSituation: string;
  audience: string;
  mustHaves: string[];
  integrations: string[];
  existingAssets: string[];
  openScope: string;
  timeline: string;
  budget: string;
  decisionStage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  siren: string;
  company: string;
  role: string;
  consent: boolean;
  honeypot: string;
}

export function compileBrief(state: FunnelStateLike): string {
  const lines: string[] = [];

  if (state.objectives.length > 0) {
    lines.push(
      state.objectives.length === 1
        ? `Objectif principal : ${state.objectives[0]}.`
        : "Objectifs principaux :",
    );
    if (state.objectives.length > 1) {
      for (const obj of state.objectives) lines.push(`- ${obj}`);
    }
    lines.push("");
  }

  if (state.description.trim()) {
    lines.push("# Description du besoin");
    lines.push(state.description.trim());
    lines.push("");
  }

  if (state.currentSituation.trim()) {
    lines.push("# Situation actuelle / existant");
    lines.push(state.currentSituation.trim());
    lines.push("");
  }

  if (state.audience.trim()) {
    lines.push("# Utilisateurs concernés / audience");
    lines.push(state.audience.trim());
    lines.push("");
  }

  if (state.mustHaves.length > 0) {
    lines.push("# Briques fonctionnelles attendues");
    for (const item of state.mustHaves) lines.push(`- ${item}`);
    lines.push("");
  }

  if (state.integrations.length > 0) {
    lines.push("# Intégrations à prévoir");
    for (const item of state.integrations) lines.push(`- ${item}`);
    lines.push("");
  }

  if (state.existingAssets.length > 0) {
    lines.push("# Existant / actifs disponibles");
    for (const item of state.existingAssets) lines.push(`- ${item}`);
    lines.push("");
  }

  if (state.openScope.trim()) {
    lines.push("# Précisions complémentaires");
    lines.push(state.openScope.trim());
    lines.push("");
  }

  if (state.timeline) {
    lines.push(`Échéance visée : ${state.timeline}.`);
  }
  if (state.budget) {
    lines.push(`Budget annoncé : ${state.budget}.`);
  }
  if (state.decisionStage) {
    lines.push(`Étape de décision : ${state.decisionStage}.`);
  }
  if (state.role.trim()) {
    lines.push(`Rôle du contact : ${state.role.trim()}.`);
  }
  if (state.siren && state.siren.replace(/\D/g, "").length === 9) {
    lines.push(`SIREN : ${state.siren}.`);
  }

  return lines.join("\n").trim().slice(0, 8000);
}
