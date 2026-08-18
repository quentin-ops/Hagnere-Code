import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const EDITORIAL_MANIFEST_V2_ROOT = "docs/research/manifests/v2" as const;
export const EDITORIAL_MANIFEST_CURRENT_PATH =
  `${EDITORIAL_MANIFEST_V2_ROOT}/current.json` as const;
export const EDITORIAL_MANIFEST_GUIDES_ROOT =
  `${EDITORIAL_MANIFEST_V2_ROOT}/guides` as const;
export const EDITORIAL_MANIFEST_WAVES_ROOT =
  `${EDITORIAL_MANIFEST_V2_ROOT}/waves` as const;

export const REQUIRED_COMMON_PATHS = [
  "docs/research/manifests/v2/README.md",
  "package.json",
  "scripts/verify-editorial-manifests.ts",
  "src/lib/editorial-governance.test.ts",
  "src/lib/editorial-manifest.test.ts",
  "src/lib/editorial-manifest.ts",
  "src/lib/guide-human-language.test.ts",
  "src/lib/guides.ts",
] as const;

export type EditorialManifestIssueCode =
  | "COMMON_CURRENT_SELECTOR_FORBIDDEN"
  | "COMMON_DESCRIPTOR_MISSING"
  | "COMMON_DIRECT_GUIDE_ARTIFACT"
  | "COMMON_GUIDE_MANIFEST_EXTRA"
  | "COMMON_GUIDE_MANIFEST_MISSING"
  | "COMMON_GUIDE_IDENTITY_INTERSECTION"
  | "COMMON_LEGACY_MANIFEST_FORBIDDEN"
  | "COMMON_WAVE_ARTIFACT_EXTRA"
  | "CURRENT_SELECTOR_MISSING"
  | "DESCRIPTOR_GUIDES_INVALID"
  | "DESCRIPTOR_GUIDE_DUPLICATE"
  | "DESCRIPTOR_GUIDE_INVALID"
  | "DESCRIPTOR_GUIDE_MANIFEST_DUPLICATE"
  | "DESCRIPTOR_GUIDE_MANIFEST_INVALID"
  | "DESCRIPTOR_GUIDE_MANIFEST_PATH_MISMATCH"
  | "DESCRIPTOR_GUIDE_ORDER"
  | "DESCRIPTOR_INVALID"
  | "DESCRIPTOR_PATH_MISMATCH"
  | "EMPTY_MANIFEST"
  | "FILE_CHANGED_DURING_VALIDATION"
  | "FILE_READ_ERROR"
  | "GUIDE_FOREIGN_ARTIFACT"
  | "GUIDE_GLOBAL_PATH_FORBIDDEN"
  | "GUIDE_IDENTITY_INTERSECTION"
  | "GUIDE_MANIFEST_MISSING"
  | "GUIDE_NESTED_MANIFEST_FORBIDDEN"
  | "GUIDE_REQUIRED_PATH_MISSING"
  | "HARDLINK_FORBIDDEN"
  | "HASH_MISMATCH"
  | "INVALID_JSON"
  | "INVALID_MANIFEST_LINE"
  | "INVALID_PATH"
  | "MANIFEST_DUPLICATE_IDENTITY"
  | "MANIFEST_DUPLICATE_PATH"
  | "MANIFEST_NOT_SORTED"
  | "MISSING_FINAL_NEWLINE"
  | "NON_LF_NEWLINE"
  | "PARENT_CHANGED_DURING_VALIDATION"
  | "REQUIRED_COMMON_PATH_MISSING"
  | "ROOT_INVALID"
  | "SCHEMA_VERSION_INVALID"
  | "SELF_REFERENCE"
  | "SELECTOR_ACTIVE_WAVE_INVALID"
  | "SYMLINK_FORBIDDEN"
  | "TARGET_MISSING"
  | "TARGET_NOT_FILE"
  | "TARGET_OUTSIDE_ROOT"
  | "UNEXPECTED_FIELD"
  | "WAVE_COMMON_MANIFEST_INVALID"
  | "WAVE_COMMON_PATH_MISMATCH"
  | "WAVE_ID_INVALID";

export interface EditorialManifestIssue {
  code: EditorialManifestIssueCode;
  message: string;
  sourcePath: string;
  line?: number;
  targetPath?: string;
}

export interface Sha256ManifestEntry {
  expectedHash: string;
  relativePath: string;
  line: number;
}

export interface ParsedSha256Manifest {
  entries: Sha256ManifestEntry[];
  issues: EditorialManifestIssue[];
}

export interface EditorialManifestCurrentSelector {
  schemaVersion: 2;
  activeWave: string;
}

export interface EditorialManifestGuideReference {
  slug: string;
  manifest: string;
  descriptorIndex: number;
}

export interface EditorialManifestWaveDescriptor {
  schemaVersion: 2;
  waveId: string;
  commonManifest: string;
  guides: EditorialManifestGuideReference[];
}

export interface ParsedJsonDocument<T> {
  value?: T;
  issues: EditorialManifestIssue[];
}

export interface EditorialManifestVerificationResult {
  ok: boolean;
  issues: EditorialManifestIssue[];
  activeWavePath?: string;
  waveId?: string;
  guideCount: number;
  checkedFileCount: number;
}

type JsonRecord = Record<string, unknown>;

interface RepositoryFileSnapshot {
  content: Buffer;
  device: number;
  inode: number;
  linkCount: number;
  realPath: string;
  relativePath: string;
}

interface RepositoryDirectorySnapshot {
  device: number;
  inode: number;
  realPath: string;
  relativePath: string;
}

interface ManifestIdentityReference {
  descriptorIndex?: number;
  identity: string;
  line: number;
  owner: "common" | "guide";
  ownerId: string;
  sourcePath: string;
  targetPath: string;
}

const SHA256_LINE = /^([a-f0-9]{64}) {2}(.+)$/;
const WAVE_ID = /^[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?$/;
const GUIDE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const GUIDE_MANIFEST_NAME = /^p4-(\d{4})-(\d{2})-(\d{2})-r[1-9]\d*\.sha256$/;

const STATIC_GUIDE_GLOBAL_PATHS = new Set<string>([
  ...REQUIRED_COMMON_PATHS,
  "docs/charte-qualite-guides.md",
  "docs/roadmap-guides-seo.md",
  "docs/workflow-maitre-guides-4-passes.md",
  "package-lock.json",
  "src/components/guides/guide-og-image.tsx",
  "src/lib/guide-page-seo.ts",
]);

function issue(
  code: EditorialManifestIssueCode,
  sourcePath: string,
  message: string,
  options: Pick<EditorialManifestIssue, "line" | "targetPath"> = {},
): EditorialManifestIssue {
  return { code, sourcePath, message, ...options };
}

function isPlainObject(value: unknown): value is JsonRecord {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

function lexicalCompare(left: string, right: string): number {
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
}

function unexpectedFields(
  record: JsonRecord,
  allowedFields: readonly string[],
  sourcePath: string,
): EditorialManifestIssue[] {
  const allowed = new Set(allowedFields);

  return Object.keys(record)
    .filter((field) => !allowed.has(field))
    .sort(lexicalCompare)
    .map((field) =>
      issue(
        "UNEXPECTED_FIELD",
        sourcePath,
        `Le champ « ${field} » n'est pas autorisé par le schéma V2.`,
      ),
    );
}

function pathProblem(relativePath: string): string | undefined {
  if (relativePath.length === 0) return "le chemin est vide";
  if (relativePath !== relativePath.trim())
    return "le chemin contient des espaces en bordure";
  if (relativePath.includes("\0")) return "le chemin contient un octet nul";
  if (relativePath.includes("\\"))
    return "le chemin doit utiliser des séparateurs POSIX";
  if (
    path.posix.isAbsolute(relativePath) ||
    /^[a-zA-Z]:\//.test(relativePath)
  ) {
    return "le chemin doit être relatif au dépôt";
  }

  const segments = relativePath.split("/");
  if (segments.some((segment) => segment === "")) {
    return "le chemin contient un segment vide";
  }
  if (segments.some((segment) => segment === "." || segment === "..")) {
    return "les segments « . » et « .. » sont interdits";
  }
  if (path.posix.normalize(relativePath) !== relativePath) {
    return "le chemin n'est pas normalisé";
  }

  return undefined;
}

export function isSafeRepositoryRelativePath(relativePath: string): boolean {
  return pathProblem(relativePath) === undefined;
}

export function parseSha256Manifest(
  source: string,
  sourcePath = "<manifest>",
): ParsedSha256Manifest {
  const issues: EditorialManifestIssue[] = [];
  const entries: Sha256ManifestEntry[] = [];

  if (source.length === 0) {
    issues.push(
      issue("EMPTY_MANIFEST", sourcePath, "Le manifeste SHA-256 est vide."),
    );
    return { entries, issues };
  }

  if (source.includes("\r")) {
    issues.push(
      issue(
        "NON_LF_NEWLINE",
        sourcePath,
        "Le manifeste doit utiliser uniquement des fins de ligne LF.",
      ),
    );
  }

  if (!source.endsWith("\n")) {
    issues.push(
      issue(
        "MISSING_FINAL_NEWLINE",
        sourcePath,
        "Le manifeste doit se terminer par une fin de ligne.",
      ),
    );
  }

  const lines = (source.endsWith("\n") ? source.slice(0, -1) : source).split(
    "\n",
  );
  const seenPaths = new Map<string, number>();
  let previousPath: string | undefined;

  for (const [index, line] of lines.entries()) {
    const lineNumber = index + 1;
    const match = line.match(SHA256_LINE);

    if (!match) {
      issues.push(
        issue(
          "INVALID_MANIFEST_LINE",
          sourcePath,
          "La ligne doit contenir 64 caractères hexadécimaux minuscules, deux espaces, puis un chemin.",
          { line: lineNumber },
        ),
      );
      continue;
    }

    const relativePath = match[2];
    const problem = pathProblem(relativePath);
    if (problem) {
      issues.push(
        issue("INVALID_PATH", sourcePath, `Chemin invalide : ${problem}.`, {
          line: lineNumber,
          targetPath: relativePath,
        }),
      );
    }

    const firstLine = seenPaths.get(relativePath);
    if (firstLine !== undefined) {
      issues.push(
        issue(
          "MANIFEST_DUPLICATE_PATH",
          sourcePath,
          `Le chemin est déjà déclaré à la ligne ${firstLine}.`,
          { line: lineNumber, targetPath: relativePath },
        ),
      );
    } else {
      seenPaths.set(relativePath, lineNumber);
    }

    if (
      previousPath !== undefined &&
      lexicalCompare(relativePath, previousPath) < 0
    ) {
      issues.push(
        issue(
          "MANIFEST_NOT_SORTED",
          sourcePath,
          "Les chemins du manifeste doivent être triés par ordre lexical.",
          { line: lineNumber, targetPath: relativePath },
        ),
      );
    }
    previousPath = relativePath;

    entries.push({
      expectedHash: match[1],
      relativePath,
      line: lineNumber,
    });
  }

  return { entries, issues };
}

function parseJsonRecord(
  source: string,
  sourcePath: string,
): ParsedJsonDocument<JsonRecord> {
  let value: unknown;

  try {
    value = JSON.parse(source);
  } catch (error) {
    const detail = error instanceof Error ? ` ${error.message}` : "";
    return {
      issues: [
        issue(
          "INVALID_JSON",
          sourcePath,
          `Le document JSON est illisible.${detail}`,
        ),
      ],
    };
  }

  if (!isPlainObject(value)) {
    return {
      issues: [
        issue(
          "INVALID_JSON",
          sourcePath,
          "Le document JSON doit contenir un objet à sa racine.",
        ),
      ],
    };
  }

  return { value, issues: [] };
}

export function parseEditorialManifestCurrentSelector(
  source: string,
  sourcePath = EDITORIAL_MANIFEST_CURRENT_PATH,
): ParsedJsonDocument<EditorialManifestCurrentSelector> {
  const parsed = parseJsonRecord(source, sourcePath);
  if (!parsed.value) return { issues: parsed.issues };

  const issues = unexpectedFields(
    parsed.value,
    ["schemaVersion", "activeWave"],
    sourcePath,
  );

  if (parsed.value.schemaVersion !== 2) {
    issues.push(
      issue(
        "SCHEMA_VERSION_INVALID",
        sourcePath,
        "Le sélecteur actif doit déclarer schemaVersion: 2.",
      ),
    );
  }

  const activeWave = parsed.value.activeWave;
  if (typeof activeWave !== "string") {
    issues.push(
      issue(
        "SELECTOR_ACTIVE_WAVE_INVALID",
        sourcePath,
        "Le champ activeWave doit être un chemin relatif.",
      ),
    );
    return { issues };
  }

  const problem = pathProblem(activeWave);
  if (problem) {
    issues.push(
      issue(
        "SELECTOR_ACTIVE_WAVE_INVALID",
        sourcePath,
        `Le chemin activeWave est invalide : ${problem}.`,
        { targetPath: activeWave },
      ),
    );
  }

  return {
    value: { schemaVersion: 2, activeWave },
    issues,
  };
}

export function parseEditorialManifestWaveDescriptor(
  source: string,
  sourcePath = "<wave>",
): ParsedJsonDocument<EditorialManifestWaveDescriptor> {
  const parsed = parseJsonRecord(source, sourcePath);
  if (!parsed.value) return { issues: parsed.issues };

  const issues = unexpectedFields(
    parsed.value,
    ["schemaVersion", "waveId", "commonManifest", "guides"],
    sourcePath,
  );

  if (parsed.value.schemaVersion !== 2) {
    issues.push(
      issue(
        "SCHEMA_VERSION_INVALID",
        sourcePath,
        "Le descripteur de vague doit déclarer schemaVersion: 2.",
      ),
    );
  }

  const waveId = parsed.value.waveId;
  if (typeof waveId !== "string" || !WAVE_ID.test(waveId)) {
    issues.push(
      issue(
        "WAVE_ID_INVALID",
        sourcePath,
        "Le champ waveId doit être un identifiant stable en minuscules.",
      ),
    );
  }

  const commonManifest = parsed.value.commonManifest;
  if (typeof commonManifest !== "string") {
    issues.push(
      issue(
        "WAVE_COMMON_MANIFEST_INVALID",
        sourcePath,
        "Le champ commonManifest doit être un chemin relatif.",
      ),
    );
  } else {
    const problem = pathProblem(commonManifest);
    if (problem) {
      issues.push(
        issue(
          "WAVE_COMMON_MANIFEST_INVALID",
          sourcePath,
          `Le chemin commonManifest est invalide : ${problem}.`,
          { targetPath: commonManifest },
        ),
      );
    }
  }

  const guidesValue = parsed.value.guides;
  if (!Array.isArray(guidesValue)) {
    issues.push(
      issue(
        "DESCRIPTOR_GUIDES_INVALID",
        sourcePath,
        "Le champ guides doit être une liste non vide.",
      ),
    );
    return { issues };
  }
  if (guidesValue.length === 0) {
    issues.push(
      issue(
        "DESCRIPTOR_GUIDES_INVALID",
        sourcePath,
        "Le champ guides doit contenir au moins un guide.",
      ),
    );
  }

  const guides: EditorialManifestGuideReference[] = [];
  const seenSlugs = new Map<string, number>();
  const seenManifests = new Map<string, number>();
  let previousSlug: string | undefined;

  for (const [index, guideValue] of guidesValue.entries()) {
    const position = index + 1;
    if (!isPlainObject(guideValue)) {
      issues.push(
        issue(
          "DESCRIPTOR_GUIDE_INVALID",
          sourcePath,
          `L'entrée guides[${index}] doit être un objet.`,
        ),
      );
      continue;
    }

    issues.push(
      ...unexpectedFields(
        guideValue,
        ["slug", "manifest"],
        `${sourcePath}#guides[${index}]`,
      ),
    );

    const slug = guideValue.slug;
    const manifest = guideValue.manifest;
    let valid = true;

    if (typeof slug !== "string" || !GUIDE_SLUG.test(slug)) {
      issues.push(
        issue(
          "DESCRIPTOR_GUIDE_INVALID",
          sourcePath,
          `Le slug du guide ${position} est invalide.`,
        ),
      );
      valid = false;
    }

    if (typeof manifest !== "string") {
      issues.push(
        issue(
          "DESCRIPTOR_GUIDE_MANIFEST_INVALID",
          sourcePath,
          `Le manifeste du guide ${position} doit être un chemin relatif.`,
        ),
      );
      valid = false;
    } else {
      const problem = pathProblem(manifest);
      if (problem) {
        issues.push(
          issue(
            "DESCRIPTOR_GUIDE_MANIFEST_INVALID",
            sourcePath,
            `Le manifeste du guide ${position} est invalide : ${problem}.`,
            { targetPath: manifest },
          ),
        );
        valid = false;
      }
    }

    if (!valid || typeof slug !== "string" || typeof manifest !== "string") {
      continue;
    }

    const firstSlugIndex = seenSlugs.get(slug);
    if (firstSlugIndex !== undefined) {
      issues.push(
        issue(
          "DESCRIPTOR_GUIDE_DUPLICATE",
          sourcePath,
          `Le slug « ${slug} » est déjà déclaré dans guides[${firstSlugIndex}].`,
          { targetPath: manifest },
        ),
      );
    } else {
      seenSlugs.set(slug, index);
    }

    const firstManifestIndex = seenManifests.get(manifest);
    if (firstManifestIndex !== undefined) {
      issues.push(
        issue(
          "DESCRIPTOR_GUIDE_MANIFEST_DUPLICATE",
          sourcePath,
          `Le manifeste est déjà déclaré dans guides[${firstManifestIndex}].`,
          { targetPath: manifest },
        ),
      );
    } else {
      seenManifests.set(manifest, index);
    }

    if (previousSlug !== undefined && lexicalCompare(slug, previousSlug) < 0) {
      issues.push(
        issue(
          "DESCRIPTOR_GUIDE_ORDER",
          sourcePath,
          "Les guides doivent être triés par slug.",
          { targetPath: manifest },
        ),
      );
    }
    previousSlug = slug;
    guides.push({ slug, manifest, descriptorIndex: index });
  }

  if (typeof waveId !== "string" || typeof commonManifest !== "string") {
    return { issues };
  }

  return {
    value: { schemaVersion: 2, waveId, commonManifest, guides },
    issues,
  };
}

function isPathInsideRoot(rootPath: string, targetPath: string): boolean {
  const relative = path.relative(rootPath, targetPath);
  return (
    relative === "" ||
    (!relative.startsWith(`..${path.sep}`) &&
      relative !== ".." &&
      !path.isAbsolute(relative))
  );
}

function sortIssues(
  issues: EditorialManifestIssue[],
): EditorialManifestIssue[] {
  return [...issues].sort((left, right) => {
    const leftKey = [
      left.sourcePath,
      String(left.line ?? 0).padStart(8, "0"),
      left.code,
      left.targetPath ?? "",
      left.message,
    ].join("\0");
    const rightKey = [
      right.sourcePath,
      String(right.line ?? 0).padStart(8, "0"),
      right.code,
      right.targetPath ?? "",
      right.message,
    ].join("\0");
    return lexicalCompare(leftKey, rightKey);
  });
}

function guideManifestPathMatches(slug: string, manifestPath: string): boolean {
  const expectedDirectory = `${EDITORIAL_MANIFEST_GUIDES_ROOT}/${slug}`;
  const nameMatch = path.posix
    .basename(manifestPath)
    .match(GUIDE_MANIFEST_NAME);
  if (!nameMatch) return false;

  const year = Number(nameMatch[1]);
  const month = Number(nameMatch[2]);
  const day = Number(nameMatch[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  const validDate =
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day;

  return path.posix.dirname(manifestPath) === expectedDirectory && validDate;
}

function guidePathIsGlobal(relativePath: string): boolean {
  return (
    STATIC_GUIDE_GLOBAL_PATHS.has(relativePath) ||
    relativePath.startsWith(`${EDITORIAL_MANIFEST_V2_ROOT}/`) ||
    /^src\/lib\/batch[^/]*-guide-quality\.test\.ts$/.test(relativePath) ||
    /^docs\/audits\/.+\/(?:README|registre-maitre[^/]*|plan-corrections[^/]*)\.md$/.test(
      relativePath,
    )
  );
}

function guidePathBelongsToAnotherGuide(
  relativePath: string,
  slug: string,
): boolean {
  const routeMatch = relativePath.match(/^src\/app\/guides\/([^/]+)\//);
  if (routeMatch && routeMatch[1] !== slug) return true;

  const researchMatch = relativePath.match(/^docs\/research\/([^/]+)\.md$/);
  return Boolean(researchMatch && researchMatch[1] !== slug);
}

export function verifyEditorialManifestRepository(
  repositoryRoot: string,
): EditorialManifestVerificationResult {
  const issues: EditorialManifestIssue[] = [];
  const directorySnapshots = new Map<string, RepositoryDirectorySnapshot>();
  const fileSnapshots = new Map<string, RepositoryFileSnapshot>();
  const identityReferences: ManifestIdentityReference[] = [];
  const requestedRootPath = path.resolve(repositoryRoot);
  let rootPath: string;
  let rootStatus: fs.Stats;

  try {
    rootPath = fs.realpathSync(requestedRootPath);
    rootStatus = fs.lstatSync(rootPath);
    if (!rootStatus.isDirectory()) {
      throw new Error("le chemin n'est pas un dossier");
    }
  } catch (error) {
    const detail = error instanceof Error ? ` ${error.message}` : "";
    const rootIssue = issue(
      "ROOT_INVALID",
      repositoryRoot,
      `La racine du dépôt est inaccessible.${detail}`,
    );
    return {
      ok: false,
      issues: [rootIssue],
      guideCount: 0,
      checkedFileCount: 0,
    };
  }

  directorySnapshots.set(".", {
    device: rootStatus.dev,
    inode: rootStatus.ino,
    realPath: rootPath,
    relativePath: ".",
  });

  if (rootPath !== requestedRootPath) {
    const rootIssue = issue(
      "SYMLINK_FORBIDDEN",
      repositoryRoot,
      "La racine de validation doit être son chemin physique canonique, sans lien symbolique.",
      { targetPath: repositoryRoot },
    );
    return {
      ok: false,
      issues: [rootIssue],
      guideCount: 0,
      checkedFileCount: 0,
    };
  }

  const readRepositoryFile = (
    relativePath: string,
    sourcePath: string,
    missingCode: EditorialManifestIssueCode = "TARGET_MISSING",
  ): RepositoryFileSnapshot | undefined => {
    const problem = pathProblem(relativePath);
    if (problem) {
      issues.push(
        issue("INVALID_PATH", sourcePath, `Chemin invalide : ${problem}.`, {
          targetPath: relativePath,
        }),
      );
      return undefined;
    }

    const existingSnapshot = fileSnapshots.get(relativePath);
    if (existingSnapshot) return existingSnapshot;

    const absolutePath = path.resolve(rootPath, ...relativePath.split("/"));
    if (!isPathInsideRoot(rootPath, absolutePath)) {
      issues.push(
        issue(
          "TARGET_OUTSIDE_ROOT",
          sourcePath,
          "La cible sort lexicalement de la racine du dépôt.",
          { targetPath: relativePath },
        ),
      );
      return undefined;
    }

    try {
      let inspectedPath = rootPath;
      const segments = relativePath.split("/");
      for (const [index, segment] of segments.entries()) {
        inspectedPath = path.join(inspectedPath, segment);
        const status = fs.lstatSync(inspectedPath);
        if (status.isSymbolicLink()) {
          issues.push(
            issue(
              "SYMLINK_FORBIDDEN",
              sourcePath,
              "Les fichiers et dossiers parents référencés doivent être physiques, sans lien symbolique.",
              { targetPath: relativePath },
            ),
          );
          return undefined;
        }

        if (index === segments.length - 1) continue;
        if (!status.isDirectory()) {
          issues.push(
            issue(
              "TARGET_NOT_FILE",
              sourcePath,
              "Chaque parent de la cible doit rester un dossier physique.",
              { targetPath: relativePath },
            ),
          );
          return undefined;
        }

        const parentRelativePath = segments.slice(0, index + 1).join("/");
        const parentRealPath = fs.realpathSync(inspectedPath);
        if (parentRealPath !== inspectedPath) {
          issues.push(
            issue(
              "SYMLINK_FORBIDDEN",
              sourcePath,
              "Chaque dossier parent doit conserver son chemin physique canonique.",
              { targetPath: parentRelativePath },
            ),
          );
          return undefined;
        }

        const previousParent = directorySnapshots.get(parentRelativePath);
        if (
          previousParent &&
          (previousParent.realPath !== parentRealPath ||
            previousParent.device !== status.dev ||
            previousParent.inode !== status.ino)
        ) {
          issues.push(
            issue(
              "PARENT_CHANGED_DURING_VALIDATION",
              sourcePath,
              "L'identité physique d'un dossier parent a changé entre deux lectures.",
              { targetPath: parentRelativePath },
            ),
          );
          return undefined;
        }

        if (!previousParent) {
          directorySnapshots.set(parentRelativePath, {
            device: status.dev,
            inode: status.ino,
            realPath: parentRealPath,
            relativePath: parentRelativePath,
          });
        }
      }
    } catch (error) {
      const errorCode =
        error instanceof Error && "code" in error
          ? String((error as NodeJS.ErrnoException).code)
          : "";
      issues.push(
        issue(
          missingCode,
          sourcePath,
          errorCode === "ENOENT" || errorCode === "ENOTDIR"
            ? "Le fichier attendu est introuvable."
            : "La cible ne peut pas être inspectée.",
          { targetPath: relativePath },
        ),
      );
      return undefined;
    }

    let realTargetPath: string;
    try {
      realTargetPath = fs.realpathSync(absolutePath);
    } catch (error) {
      const errorCode =
        error instanceof Error && "code" in error
          ? String((error as NodeJS.ErrnoException).code)
          : "";
      issues.push(
        issue(
          missingCode,
          sourcePath,
          errorCode === "ENOENT"
            ? "Le fichier attendu est introuvable."
            : "La cible ne peut pas être résolue.",
          { targetPath: relativePath },
        ),
      );
      return undefined;
    }

    if (realTargetPath !== absolutePath) {
      issues.push(
        issue(
          "SYMLINK_FORBIDDEN",
          sourcePath,
          "La cible doit conserver exactement son identité de chemin physique.",
          { targetPath: relativePath },
        ),
      );
      return undefined;
    }

    if (!isPathInsideRoot(rootPath, realTargetPath)) {
      issues.push(
        issue(
          "TARGET_OUTSIDE_ROOT",
          sourcePath,
          "La cible réelle sort de la racine du dépôt.",
          { targetPath: relativePath },
        ),
      );
      return undefined;
    }

    try {
      const terminalStatus = fs.lstatSync(realTargetPath);
      if (!terminalStatus.isFile()) {
        issues.push(
          issue(
            "TARGET_NOT_FILE",
            sourcePath,
            "La cible doit être un fichier ordinaire.",
            { targetPath: relativePath },
          ),
        );
        return undefined;
      }
      if (terminalStatus.nlink !== 1) {
        issues.push(
          issue(
            "HARDLINK_FORBIDDEN",
            sourcePath,
            `La cible possède ${terminalStatus.nlink} liens physiques ; un fichier contrôlé doit avoir exactement une identité de chemin.`,
            { targetPath: relativePath },
          ),
        );
        return undefined;
      }
      const content = fs.readFileSync(realTargetPath);
      const snapshot: RepositoryFileSnapshot = {
        content,
        device: terminalStatus.dev,
        inode: terminalStatus.ino,
        linkCount: terminalStatus.nlink,
        realPath: realTargetPath,
        relativePath,
      };
      fileSnapshots.set(relativePath, snapshot);
      return snapshot;
    } catch (error) {
      const detail = error instanceof Error ? ` ${error.message}` : "";
      issues.push(
        issue(
          "FILE_READ_ERROR",
          sourcePath,
          `Le fichier ne peut pas être lu.${detail}`,
          { targetPath: relativePath },
        ),
      );
      return undefined;
    }
  };

  const readText = (
    relativePath: string,
    sourcePath: string,
    missingCode?: EditorialManifestIssueCode,
  ): string | undefined => {
    const snapshot = readRepositoryFile(relativePath, sourcePath, missingCode);
    return snapshot?.content.toString("utf8");
  };

  const verifySnapshotStability = (): void => {
    for (const snapshot of [...directorySnapshots.values()].sort(
      (left, right) => lexicalCompare(left.relativePath, right.relativePath),
    )) {
      const absolutePath =
        snapshot.relativePath === "."
          ? rootPath
          : path.resolve(rootPath, ...snapshot.relativePath.split("/"));
      let changed = false;
      let detail = "";

      try {
        const status = fs.lstatSync(absolutePath);
        if (status.isSymbolicLink()) {
          issues.push(
            issue(
              "SYMLINK_FORBIDDEN",
              snapshot.relativePath,
              "Un dossier parent est devenu un lien symbolique pendant la validation.",
              { targetPath: snapshot.relativePath },
            ),
          );
          changed = true;
        }

        const realPath = fs.realpathSync(absolutePath);
        if (
          !status.isDirectory() ||
          realPath !== snapshot.realPath ||
          realPath !== absolutePath ||
          status.dev !== snapshot.device ||
          status.ino !== snapshot.inode
        ) {
          changed = true;
        }
      } catch (error) {
        changed = true;
        detail = error instanceof Error ? ` ${error.message}` : "";
      }

      if (changed) {
        issues.push(
          issue(
            "PARENT_CHANGED_DURING_VALIDATION",
            snapshot.relativePath,
            `Le chemin réel, le périphérique ou l'inode de ce dossier a changé pendant le contrôle.${detail}`,
            { targetPath: snapshot.relativePath },
          ),
        );
      }
    }

    for (const snapshot of [...fileSnapshots.values()].sort((left, right) =>
      lexicalCompare(left.relativePath, right.relativePath),
    )) {
      const absolutePath = path.resolve(
        rootPath,
        ...snapshot.relativePath.split("/"),
      );
      let changed = false;
      let detail = "";

      try {
        let inspectedPath = rootPath;
        for (const segment of snapshot.relativePath.split("/")) {
          inspectedPath = path.join(inspectedPath, segment);
          const status = fs.lstatSync(inspectedPath);
          if (status.isSymbolicLink()) {
            issues.push(
              issue(
                "SYMLINK_FORBIDDEN",
                snapshot.relativePath,
                "Un lien symbolique est apparu pendant la validation.",
                { targetPath: snapshot.relativePath },
              ),
            );
            changed = true;
            break;
          }
        }

        const realTargetPath = fs.realpathSync(absolutePath);
        const terminalStatus = fs.lstatSync(realTargetPath);
        const currentContent = fs.readFileSync(realTargetPath);
        if (terminalStatus.nlink !== 1) {
          issues.push(
            issue(
              "HARDLINK_FORBIDDEN",
              snapshot.relativePath,
              `La cible possède désormais ${terminalStatus.nlink} liens physiques.`,
              { targetPath: snapshot.relativePath },
            ),
          );
          changed = true;
        }
        if (
          realTargetPath !== snapshot.realPath ||
          realTargetPath !== absolutePath ||
          !terminalStatus.isFile() ||
          terminalStatus.dev !== snapshot.device ||
          terminalStatus.ino !== snapshot.inode ||
          terminalStatus.nlink !== snapshot.linkCount ||
          !currentContent.equals(snapshot.content)
        ) {
          changed = true;
        }
      } catch (error) {
        changed = true;
        detail = error instanceof Error ? ` ${error.message}` : "";
      }

      if (changed) {
        issues.push(
          issue(
            "FILE_CHANGED_DURING_VALIDATION",
            snapshot.relativePath,
            `Le fichier, son identité physique ou l'un de ses parents a changé pendant le contrôle.${detail}`,
            { targetPath: snapshot.relativePath },
          ),
        );
      }
    }
  };

  const finalize = (
    options: Pick<
      EditorialManifestVerificationResult,
      "activeWavePath" | "waveId" | "guideCount"
    > & { guideCount: number },
  ): EditorialManifestVerificationResult => {
    verifySnapshotStability();
    const sortedIssues = sortIssues(issues);
    return {
      ok: sortedIssues.length === 0,
      issues: sortedIssues,
      ...options,
      checkedFileCount: fileSnapshots.size,
    };
  };

  const selectorSource = readText(
    EDITORIAL_MANIFEST_CURRENT_PATH,
    EDITORIAL_MANIFEST_CURRENT_PATH,
    "CURRENT_SELECTOR_MISSING",
  );
  if (selectorSource === undefined) {
    return finalize({ guideCount: 0 });
  }

  const parsedSelector = parseEditorialManifestCurrentSelector(
    selectorSource,
    EDITORIAL_MANIFEST_CURRENT_PATH,
  );
  issues.push(...parsedSelector.issues);
  const selector = parsedSelector.value;
  if (!selector) {
    return finalize({ guideCount: 0 });
  }

  if (
    path.posix.dirname(selector.activeWave) !== EDITORIAL_MANIFEST_WAVES_ROOT ||
    path.posix.extname(selector.activeWave) !== ".json"
  ) {
    issues.push(
      issue(
        "SELECTOR_ACTIVE_WAVE_INVALID",
        EDITORIAL_MANIFEST_CURRENT_PATH,
        "activeWave doit pointer directement vers un descripteur JSON du dossier waves.",
        { targetPath: selector.activeWave },
      ),
    );
  }

  const descriptorSource = readText(
    selector.activeWave,
    EDITORIAL_MANIFEST_CURRENT_PATH,
    "DESCRIPTOR_INVALID",
  );
  if (descriptorSource === undefined) {
    return finalize({
      activeWavePath: selector.activeWave,
      guideCount: 0,
    });
  }

  const parsedDescriptor = parseEditorialManifestWaveDescriptor(
    descriptorSource,
    selector.activeWave,
  );
  issues.push(...parsedDescriptor.issues);
  const descriptor = parsedDescriptor.value;
  if (!descriptor) {
    return finalize({
      activeWavePath: selector.activeWave,
      guideCount: 0,
    });
  }

  const expectedDescriptorPath = `${EDITORIAL_MANIFEST_WAVES_ROOT}/${descriptor.waveId}.json`;
  if (selector.activeWave !== expectedDescriptorPath) {
    issues.push(
      issue(
        "DESCRIPTOR_PATH_MISMATCH",
        selector.activeWave,
        "Le nom du descripteur doit correspondre exactement à waveId.",
        { targetPath: expectedDescriptorPath },
      ),
    );
  }

  const expectedCommonManifestPath = `${EDITORIAL_MANIFEST_WAVES_ROOT}/${descriptor.waveId}-common.sha256`;
  if (descriptor.commonManifest !== expectedCommonManifestPath) {
    issues.push(
      issue(
        "WAVE_COMMON_PATH_MISMATCH",
        selector.activeWave,
        "Le manifeste commun doit porter le nom canonique de la vague.",
        { targetPath: expectedCommonManifestPath },
      ),
    );
  }

  for (const guide of descriptor.guides) {
    if (!guideManifestPathMatches(guide.slug, guide.manifest)) {
      issues.push(
        issue(
          "DESCRIPTOR_GUIDE_MANIFEST_PATH_MISMATCH",
          selector.activeWave,
          `Le manifeste de « ${guide.slug} » ne respecte pas le chemin V2 canonique.`,
          { targetPath: guide.manifest },
        ),
      );
    }
  }

  const commonSource = readText(
    descriptor.commonManifest,
    selector.activeWave,
    "WAVE_COMMON_MANIFEST_INVALID",
  );
  const parsedCommon =
    commonSource === undefined
      ? undefined
      : parseSha256Manifest(commonSource, descriptor.commonManifest);
  if (parsedCommon) issues.push(...parsedCommon.issues);

  const parsedGuideManifests: Array<{
    guide: EditorialManifestGuideReference;
    parsed: ParsedSha256Manifest;
    sourcePath: string;
  }> = [];

  for (const guide of descriptor.guides) {
    const sourcePath = `${guide.manifest}#guides[${guide.descriptorIndex}]`;
    const source = readText(
      guide.manifest,
      sourcePath,
      "GUIDE_MANIFEST_MISSING",
    );
    if (source === undefined) continue;

    const parsed = parseSha256Manifest(source, sourcePath);
    issues.push(...parsed.issues);
    parsedGuideManifests.push({ guide, parsed, sourcePath });
  }

  const verifyEntries = (
    physicalManifestPath: string,
    sourcePath: string,
    parsed: ParsedSha256Manifest,
    owner: ManifestIdentityReference["owner"],
    ownerId: string,
    descriptorIndex?: number,
  ) => {
    for (const entry of parsed.entries) {
      if (!isSafeRepositoryRelativePath(entry.relativePath)) continue;
      if (entry.relativePath === physicalManifestPath) {
        issues.push(
          issue(
            "SELF_REFERENCE",
            sourcePath,
            "Un manifeste ne peut pas contenir sa propre empreinte.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
        continue;
      }

      const snapshot = readRepositoryFile(entry.relativePath, sourcePath);
      if (!snapshot) continue;

      const manifestSnapshot = fileSnapshots.get(physicalManifestPath);
      if (
        manifestSnapshot &&
        manifestSnapshot.device === snapshot.device &&
        manifestSnapshot.inode === snapshot.inode
      ) {
        issues.push(
          issue(
            "SELF_REFERENCE",
            sourcePath,
            "Un manifeste ne peut pas se référencer par un autre chemin vers le même fichier physique.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
        continue;
      }

      identityReferences.push({
        descriptorIndex,
        identity: `${snapshot.device}:${snapshot.inode}`,
        line: entry.line,
        owner,
        ownerId,
        sourcePath,
        targetPath: entry.relativePath,
      });

      const actualHash = createHash("sha256")
        .update(snapshot.content)
        .digest("hex");
      if (actualHash !== entry.expectedHash) {
        issues.push(
          issue(
            "HASH_MISMATCH",
            sourcePath,
            `Empreinte attendue ${entry.expectedHash}, empreinte obtenue ${actualHash}.`,
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }
    }
  };

  if (parsedCommon) {
    verifyEntries(
      descriptor.commonManifest,
      descriptor.commonManifest,
      parsedCommon,
      "common",
      descriptor.commonManifest,
    );
  }
  for (const { guide, parsed, sourcePath } of parsedGuideManifests) {
    verifyEntries(
      guide.manifest,
      sourcePath,
      parsed,
      "guide",
      `${guide.slug}#guides[${guide.descriptorIndex}]`,
      guide.descriptorIndex,
    );
  }

  const referencesByIdentity = new Map<string, ManifestIdentityReference[]>();
  for (const reference of identityReferences) {
    const references = referencesByIdentity.get(reference.identity) ?? [];
    references.push(reference);
    referencesByIdentity.set(reference.identity, references);
  }

  for (const references of referencesByIdentity.values()) {
    const referencesByOwner = new Map<string, ManifestIdentityReference[]>();
    for (const reference of references) {
      const ownerKey = `${reference.owner}:${reference.ownerId}`;
      const ownerReferences = referencesByOwner.get(ownerKey) ?? [];
      ownerReferences.push(reference);
      referencesByOwner.set(ownerKey, ownerReferences);
    }

    for (const ownerReferences of referencesByOwner.values()) {
      if (ownerReferences.length < 2) continue;
      for (const reference of ownerReferences) {
        issues.push(
          issue(
            "MANIFEST_DUPLICATE_IDENTITY",
            reference.sourcePath,
            "Plusieurs chemins de ce manifeste désignent le même fichier physique.",
            { line: reference.line, targetPath: reference.targetPath },
          ),
        );
      }
    }

    const commonReferences = references.filter(
      (reference) => reference.owner === "common",
    );
    const guideReferences = references.filter(
      (reference) => reference.owner === "guide",
    );

    if (commonReferences.length > 0 && guideReferences.length > 0) {
      for (const reference of references) {
        issues.push(
          issue(
            "COMMON_GUIDE_IDENTITY_INTERSECTION",
            reference.sourcePath,
            "Ce fichier physique appartient à la fois au manifeste commun et à au moins un reçu de guide.",
            { line: reference.line, targetPath: reference.targetPath },
          ),
        );
      }
    }

    const guideOwners = new Set(
      guideReferences.map((reference) => reference.ownerId),
    );
    if (guideOwners.size > 1) {
      for (const reference of guideReferences) {
        issues.push(
          issue(
            "GUIDE_IDENTITY_INTERSECTION",
            reference.sourcePath,
            "Ce fichier physique est revendiqué par plusieurs entrées de guide du descripteur.",
            { line: reference.line, targetPath: reference.targetPath },
          ),
        );
      }
    }
  }

  for (const { guide, parsed, sourcePath } of parsedGuideManifests) {
    const paths = new Set(parsed.entries.map((entry) => entry.relativePath));
    const requiredPaths = [
      `docs/research/${guide.slug}.md`,
      `src/app/guides/${guide.slug}/opengraph-image.tsx`,
      `src/app/guides/${guide.slug}/page.tsx`,
    ];

    for (const requiredPath of requiredPaths) {
      if (!paths.has(requiredPath)) {
        issues.push(
          issue(
            "GUIDE_REQUIRED_PATH_MISSING",
            sourcePath,
            `Le manifeste doit contenir l'artefact obligatoire de « ${guide.slug} ».`,
            { targetPath: requiredPath },
          ),
        );
      }
    }

    for (const entry of parsed.entries) {
      if (entry.relativePath.endsWith(".sha256")) {
        issues.push(
          issue(
            "GUIDE_NESTED_MANIFEST_FORBIDDEN",
            sourcePath,
            "Un manifeste propre à un guide ne peut référencer aucun autre manifeste.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }
      if (guidePathIsGlobal(entry.relativePath)) {
        issues.push(
          issue(
            "GUIDE_GLOBAL_PATH_FORBIDDEN",
            sourcePath,
            "Cette dépendance appartient au manifeste commun de la vague.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }
      if (guidePathBelongsToAnotherGuide(entry.relativePath, guide.slug)) {
        issues.push(
          issue(
            "GUIDE_FOREIGN_ARTIFACT",
            sourcePath,
            "Un manifeste propre ne peut pas absorber l'artefact d'un autre guide.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }
    }
  }

  if (parsedCommon) {
    const commonPaths = new Set(
      parsedCommon.entries.map((entry) => entry.relativePath),
    );
    const expectedGuideManifests = new Set(
      descriptor.guides.map((guide) => guide.manifest),
    );

    for (const requiredPath of [
      selector.activeWave,
      ...REQUIRED_COMMON_PATHS,
    ]) {
      if (!commonPaths.has(requiredPath)) {
        issues.push(
          issue(
            requiredPath === selector.activeWave
              ? "COMMON_DESCRIPTOR_MISSING"
              : "REQUIRED_COMMON_PATH_MISSING",
            descriptor.commonManifest,
            "Le manifeste commun ne contient pas une dépendance obligatoire.",
            { targetPath: requiredPath },
          ),
        );
      }
    }

    for (const guideManifest of expectedGuideManifests) {
      if (!commonPaths.has(guideManifest)) {
        issues.push(
          issue(
            "COMMON_GUIDE_MANIFEST_MISSING",
            descriptor.commonManifest,
            "Le manifeste commun ne lie pas un guide annoncé par la vague.",
            { targetPath: guideManifest },
          ),
        );
      }
    }

    for (const entry of parsedCommon.entries) {
      if (entry.relativePath === EDITORIAL_MANIFEST_CURRENT_PATH) {
        issues.push(
          issue(
            "COMMON_CURRENT_SELECTOR_FORBIDDEN",
            descriptor.commonManifest,
            "Le sélecteur mutable current.json ne doit jamais être gelé dans une vague.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }

      if (
        entry.relativePath.endsWith(".sha256") &&
        !expectedGuideManifests.has(entry.relativePath)
      ) {
        issues.push(
          issue(
            "COMMON_LEGACY_MANIFEST_FORBIDDEN",
            descriptor.commonManifest,
            "Le manifeste commun ne peut référencer que les reçus V2 propres annoncés.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }

      if (
        entry.relativePath.startsWith(`${EDITORIAL_MANIFEST_GUIDES_ROOT}/`) &&
        !expectedGuideManifests.has(entry.relativePath)
      ) {
        issues.push(
          issue(
            "COMMON_GUIDE_MANIFEST_EXTRA",
            descriptor.commonManifest,
            "Ce reçu de guide n'est pas annoncé par le descripteur de vague.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }

      if (
        entry.relativePath.startsWith(`${EDITORIAL_MANIFEST_WAVES_ROOT}/`) &&
        entry.relativePath !== selector.activeWave &&
        entry.relativePath !== descriptor.commonManifest
      ) {
        issues.push(
          issue(
            "COMMON_WAVE_ARTIFACT_EXTRA",
            descriptor.commonManifest,
            "Une vague ne peut pas absorber le descripteur ou le reçu d'une autre vague.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }

      if (
        entry.relativePath.startsWith("src/app/guides/") ||
        /^docs\/research\/[^/]+\.md$/.test(entry.relativePath)
      ) {
        issues.push(
          issue(
            "COMMON_DIRECT_GUIDE_ARTIFACT",
            descriptor.commonManifest,
            "Le manifeste commun doit référencer le reçu du guide, pas ses artefacts directement.",
            { line: entry.line, targetPath: entry.relativePath },
          ),
        );
      }
    }
  }

  return finalize({
    activeWavePath: selector.activeWave,
    waveId: descriptor.waveId,
    guideCount: descriptor.guides.length,
  });
}
