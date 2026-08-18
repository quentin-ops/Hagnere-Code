import path from "node:path";
import process from "node:process";
import {
  EDITORIAL_MANIFEST_CURRENT_PATH,
  verifyEditorialManifestRepository,
} from "../src/lib/editorial-manifest";

function usage(): string {
  return [
    "Usage : tsx scripts/verify-editorial-manifests.ts [--root <dépôt>]",
    "",
    "Le contrôle est strictement en lecture seule.",
  ].join("\n");
}

function parseArguments(arguments_: string[]): string {
  if (arguments_.length === 0) return process.cwd();

  if (arguments_.length === 1 && arguments_[0] === "--help") {
    process.stdout.write(`${usage()}\n`);
    process.exit(0);
  }

  if (
    arguments_.length === 2 &&
    arguments_[0] === "--root" &&
    arguments_[1].trim().length > 0
  ) {
    return path.resolve(arguments_[1]);
  }

  process.stderr.write(`${usage()}\n`);
  process.exit(2);
}

function formatLocation(
  sourcePath: string,
  line: number | undefined,
  targetPath: string | undefined,
): string {
  const source = line === undefined ? sourcePath : `${sourcePath}:${line}`;
  return targetPath === undefined ? source : `${source} → ${targetPath}`;
}

const repositoryRoot = parseArguments(process.argv.slice(2));
const result = verifyEditorialManifestRepository(repositoryRoot);

if (result.ok) {
  process.stdout.write(
    [
      "Manifestes éditoriaux V2 valides.",
      `Vague : ${result.waveId}`,
      `Guides : ${result.guideCount}`,
      `Fichiers relus : ${result.checkedFileCount}`,
    ].join("\n") + "\n",
  );
} else {
  const missingCurrent = result.issues.some(
    (entry) => entry.code === "CURRENT_SELECTOR_MISSING",
  );
  const heading = missingCurrent
    ? `Validation impossible : ${EDITORIAL_MANIFEST_CURRENT_PATH} est introuvable.`
    : `Validation V2 échouée : ${result.issues.length} problème(s).`;

  process.stderr.write(`${heading}\n`);
  for (const entry of result.issues) {
    process.stderr.write(
      `- [${entry.code}] ${formatLocation(entry.sourcePath, entry.line, entry.targetPath)} : ${entry.message}\n`,
    );
  }
  process.exitCode = 1;
}
