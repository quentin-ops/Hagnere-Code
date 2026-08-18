import fs from "node:fs/promises";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

function resolveFrom(nodeModulesPath) {
  const require = createRequire(
    path.join(nodeModulesPath, "artifact-tool-loader.cjs"),
  );
  return require.resolve("@oai/artifact-tool");
}

export async function loadArtifactTool() {
  const normalRequire = createRequire(
    path.join(process.cwd(), "artifact-tool-loader.cjs"),
  );
  try {
    return await import(pathToFileURL(normalRequire.resolve("@oai/artifact-tool")).href);
  } catch {
    // Le runtime d’artefacts Codex peut être extérieur au dépôt.
  }

  const explicitRoots = (process.env.NODE_PATH ?? "")
    .split(path.delimiter)
    .filter(Boolean);
  for (const root of explicitRoots) {
    try {
      return await import(pathToFileURL(resolveFrom(root)).href);
    } catch {
      // Essayer le candidat suivant.
    }
  }

  const runtimesRoot = path.join(os.homedir(), ".cache", "codex-runtimes");
  let runtimeNames = [];
  try {
    runtimeNames = await fs.readdir(runtimesRoot);
  } catch {
    runtimeNames = [];
  }
  const discoveredRoots = runtimeNames
    .map((name) =>
      path.join(
        runtimesRoot,
        name,
        "dependencies",
        "node",
        "node_modules",
      ),
    )
    .sort((left, right) =>
      left.includes("primary-runtime") === right.includes("primary-runtime")
        ? left.localeCompare(right)
        : left.includes("primary-runtime")
          ? -1
          : 1,
    );
  for (const root of discoveredRoots) {
    try {
      return await import(pathToFileURL(resolveFrom(root)).href);
    } catch {
      // Essayer le candidat suivant.
    }
  }

  throw new Error(
    "Impossible de charger @oai/artifact-tool. Installez le runtime d’artefacts Codex ou exposez son node_modules via NODE_PATH.",
  );
}
