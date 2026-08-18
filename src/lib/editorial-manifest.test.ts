import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  EDITORIAL_MANIFEST_CURRENT_PATH,
  EDITORIAL_MANIFEST_GUIDES_ROOT,
  EDITORIAL_MANIFEST_WAVES_ROOT,
  parseEditorialManifestCurrentSelector,
  parseEditorialManifestWaveDescriptor,
  parseSha256Manifest,
  REQUIRED_COMMON_PATHS,
  verifyEditorialManifestRepository,
} from "./editorial-manifest";

interface Fixture {
  root: string;
  waveId: string;
  descriptorPath: string;
  commonManifestPath: string;
  slugs: string[];
  guideManifests: Map<string, string>;
}

const temporaryPaths: string[] = [];

afterEach(() => {
  vi.restoreAllMocks();
  for (const temporaryPath of temporaryPaths.splice(0)) {
    fs.rmSync(temporaryPath, { force: true, recursive: true });
  }
});

function makeTemporaryDirectory(prefix = "editorial-manifest-"): string {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  const physicalDirectory = fs.realpathSync(directory);
  temporaryPaths.push(physicalDirectory);
  return physicalDirectory;
}

function absolutePath(root: string, relativePath: string): string {
  return path.join(root, ...relativePath.split("/"));
}

function writeFile(
  root: string,
  relativePath: string,
  content: string | Buffer,
): void {
  const destination = absolutePath(root, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, content);
}

function readFile(root: string, relativePath: string): Buffer {
  return fs.readFileSync(absolutePath(root, relativePath));
}

function fileHash(root: string, relativePath: string): string {
  return createHash("sha256")
    .update(readFile(root, relativePath))
    .digest("hex");
}

function manifestSource(
  root: string,
  relativePaths: readonly string[],
): string {
  return [...relativePaths]
    .sort()
    .map((relativePath) => `${fileHash(root, relativePath)}  ${relativePath}`)
    .join("\n")
    .concat("\n");
}

function jsonSource(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function guideRequiredPaths(slug: string): string[] {
  return [
    `docs/research/${slug}.md`,
    `src/app/guides/${slug}/opengraph-image.tsx`,
    `src/app/guides/${slug}/page.tsx`,
  ];
}

function writeGuideManifest(
  fixture: Fixture,
  slug: string,
  extraPaths: readonly string[] = [],
): void {
  const manifestPath = fixture.guideManifests.get(slug);
  if (!manifestPath) throw new Error(`Guide de fixture inconnu : ${slug}`);
  writeFile(
    fixture.root,
    manifestPath,
    manifestSource(fixture.root, [...guideRequiredPaths(slug), ...extraPaths]),
  );
}

function writeCommonManifest(fixture: Fixture): void {
  writeFile(
    fixture.root,
    fixture.commonManifestPath,
    manifestSource(fixture.root, [
      fixture.descriptorPath,
      ...REQUIRED_COMMON_PATHS,
      ...fixture.guideManifests.values(),
    ]),
  );
}

function createValidFixture(slugs = ["alpha-guide", "beta-guide"]): Fixture {
  const root = makeTemporaryDirectory();
  const waveId = "2026-07-24-test-r1";
  const descriptorPath = `${EDITORIAL_MANIFEST_WAVES_ROOT}/${waveId}.json`;
  const commonManifestPath = `${EDITORIAL_MANIFEST_WAVES_ROOT}/${waveId}-common.sha256`;
  const sortedSlugs = [...slugs].sort();
  const guideManifests = new Map(
    sortedSlugs.map((slug) => [
      slug,
      `${EDITORIAL_MANIFEST_GUIDES_ROOT}/${slug}/p4-2026-07-24-r1.sha256`,
    ]),
  );
  const fixture: Fixture = {
    root,
    waveId,
    descriptorPath,
    commonManifestPath,
    slugs: sortedSlugs,
    guideManifests,
  };

  for (const commonPath of REQUIRED_COMMON_PATHS) {
    writeFile(root, commonPath, `fixture commune : ${commonPath}\n`);
  }

  for (const slug of sortedSlugs) {
    for (const requiredPath of guideRequiredPaths(slug)) {
      writeFile(root, requiredPath, `fixture propre : ${requiredPath}\n`);
    }
    writeGuideManifest(fixture, slug);
  }

  writeFile(
    root,
    descriptorPath,
    jsonSource({
      schemaVersion: 2,
      waveId,
      commonManifest: commonManifestPath,
      guides: sortedSlugs.map((slug) => ({
        slug,
        manifest: guideManifests.get(slug),
      })),
    }),
  );
  writeCommonManifest(fixture);
  writeFile(
    root,
    EDITORIAL_MANIFEST_CURRENT_PATH,
    jsonSource({ schemaVersion: 2, activeWave: descriptorPath }),
  );

  return fixture;
}

function issueCodes(
  result: ReturnType<typeof verifyEditorialManifestRepository>,
): string[] {
  return result.issues.map((entry) => entry.code);
}

function fileTreeSnapshot(root: string): Map<string, string> {
  const snapshot = new Map<string, string>();

  const visit = (directory: string) => {
    for (const name of fs.readdirSync(directory).sort()) {
      const absolute = path.join(directory, name);
      const relative = path.relative(root, absolute).split(path.sep).join("/");
      const status = fs.lstatSync(absolute);
      if (status.isDirectory()) {
        visit(absolute);
      } else if (status.isSymbolicLink()) {
        snapshot.set(relative, `symlink:${fs.readlinkSync(absolute)}`);
      } else {
        snapshot.set(
          relative,
          createHash("sha256").update(fs.readFileSync(absolute)).digest("hex"),
        );
      }
    }
  };

  visit(root);
  return snapshot;
}

describe("pure editorial manifest parsers", () => {
  it("parses a canonical SHA-256 manifest without touching the filesystem", () => {
    const hash = "a".repeat(64);
    const source = `${hash}  alpha/file.md\n${hash}  beta/file.ts\n`;

    expect(parseSha256Manifest(source, "fixture.sha256")).toEqual({
      entries: [
        {
          expectedHash: hash,
          relativePath: "alpha/file.md",
          line: 1,
        },
        {
          expectedHash: hash,
          relativePath: "beta/file.ts",
          line: 2,
        },
      ],
      issues: [],
    });
  });

  it("collects format, path, order and duplicate errors exhaustively", () => {
    const hash = "b".repeat(64);
    const parsed = parseSha256Manifest(
      [
        `${hash}  zeta/file.ts`,
        `${hash}  ../escape.txt`,
        `${hash}  zeta/file.ts`,
        "ligne invalide\r",
      ].join("\n"),
      "broken.sha256",
    );

    expect(parsed.issues.map((entry) => entry.code)).toEqual(
      expect.arrayContaining([
        "NON_LF_NEWLINE",
        "MISSING_FINAL_NEWLINE",
        "INVALID_PATH",
        "MANIFEST_NOT_SORTED",
        "MANIFEST_DUPLICATE_PATH",
        "INVALID_MANIFEST_LINE",
      ]),
    );
  });

  it("validates selector and descriptor schemas without filesystem access", () => {
    const selector = parseEditorialManifestCurrentSelector(
      jsonSource({
        schemaVersion: 1,
        activeWave: "../wave.json",
        unexpected: true,
      }),
    );
    expect(selector.issues.map((entry) => entry.code)).toEqual(
      expect.arrayContaining([
        "SCHEMA_VERSION_INVALID",
        "SELECTOR_ACTIVE_WAVE_INVALID",
        "UNEXPECTED_FIELD",
      ]),
    );

    const descriptor = parseEditorialManifestWaveDescriptor(
      jsonSource({
        schemaVersion: 2,
        waveId: "valid-wave",
        commonManifest:
          "docs/research/manifests/v2/waves/valid-wave-common.sha256",
        guides: [
          {
            slug: "zeta-guide",
            manifest:
              "docs/research/manifests/v2/guides/zeta-guide/p4-2026-07-24-r1.sha256",
          },
          {
            slug: "alpha-guide",
            manifest:
              "docs/research/manifests/v2/guides/alpha-guide/p4-2026-07-24-r1.sha256",
          },
          {
            slug: "alpha-guide",
            manifest:
              "docs/research/manifests/v2/guides/alpha-guide/p4-2026-07-24-r1.sha256",
          },
        ],
      }),
    );
    expect(descriptor.issues.map((entry) => entry.code)).toEqual(
      expect.arrayContaining([
        "DESCRIPTOR_GUIDE_ORDER",
        "DESCRIPTOR_GUIDE_DUPLICATE",
        "DESCRIPTOR_GUIDE_MANIFEST_DUPLICATE",
      ]),
    );
    expect(descriptor.value?.guides).toHaveLength(3);
  });
});

describe("editorial manifest V2 repository verification", () => {
  it("accepts a complete two-level wave", () => {
    const fixture = createValidFixture();
    const before = fileTreeSnapshot(fixture.root);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result).toMatchObject({
      ok: true,
      issues: [],
      activeWavePath: fixture.descriptorPath,
      waveId: fixture.waveId,
      guideCount: 2,
    });
    expect(result.checkedFileCount).toBeGreaterThanOrEqual(18);
    expect(fileTreeSnapshot(fixture.root)).toEqual(before);
  });

  it("fails cleanly and without writing when current.json is absent", () => {
    const root = makeTemporaryDirectory();
    const before = fileTreeSnapshot(root);

    const result = verifyEditorialManifestRepository(root);

    expect(result.ok).toBe(false);
    expect(issueCodes(result)).toEqual(["CURRENT_SELECTOR_MISSING"]);
    expect(result.issues[0].targetPath).toBe(EDITORIAL_MANIFEST_CURRENT_PATH);
    expect(fileTreeSnapshot(root)).toEqual(before);
  });

  it("reports every independent stale file instead of stopping at the first", () => {
    const fixture = createValidFixture();
    writeFile(fixture.root, "src/lib/guides.ts", "registre modifié\n");
    writeFile(
      fixture.root,
      "src/app/guides/alpha-guide/page.tsx",
      "page alpha modifiée\n",
    );
    writeFile(
      fixture.root,
      "docs/research/beta-guide.md",
      "recherche beta modifiée\n",
    );

    const result = verifyEditorialManifestRepository(fixture.root);
    const mismatches = result.issues.filter(
      (entry) => entry.code === "HASH_MISMATCH",
    );

    expect(result.ok).toBe(false);
    expect(mismatches.map((entry) => entry.targetPath)).toEqual(
      expect.arrayContaining([
        "src/lib/guides.ts",
        "src/app/guides/alpha-guide/page.tsx",
        "docs/research/beta-guide.md",
      ]),
    );
    expect(mismatches).toHaveLength(3);
  });

  it("reports an empty common receipt instead of silently skipping it", () => {
    const fixture = createValidFixture();
    writeFile(fixture.root, fixture.commonManifestPath, "");

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(issueCodes(result)).toContain("EMPTY_MANIFEST");
    expect(issueCodes(result)).toContain("COMMON_DESCRIPTOR_MISSING");
    expect(issueCodes(result)).toContain("COMMON_GUIDE_MANIFEST_MISSING");
  });

  it("keeps a global-only change out of every guide receipt", () => {
    const fixture = createValidFixture();
    writeFile(fixture.root, "src/lib/guides.ts", "registre modifié\n");

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.ok).toBe(false);
    expect(result.issues).toEqual([
      expect.objectContaining({
        code: "HASH_MISMATCH",
        sourcePath: fixture.commonManifestPath,
        targetPath: "src/lib/guides.ts",
      }),
    ]);
  });

  it("invalidates one guide, then the common wave when its receipt is renewed", () => {
    const fixture = createValidFixture();
    const alphaPage = "src/app/guides/alpha-guide/page.tsx";
    const alphaManifest = fixture.guideManifests.get("alpha-guide");
    writeFile(fixture.root, alphaPage, "nouvelle page alpha\n");

    const staleGuideResult = verifyEditorialManifestRepository(fixture.root);
    expect(staleGuideResult.issues).toEqual([
      expect.objectContaining({
        code: "HASH_MISMATCH",
        sourcePath: `${alphaManifest}#guides[0]`,
        targetPath: alphaPage,
      }),
    ]);

    writeGuideManifest(fixture, "alpha-guide");
    const staleWaveResult = verifyEditorialManifestRepository(fixture.root);
    expect(staleWaveResult.issues).toEqual([
      expect.objectContaining({
        code: "HASH_MISMATCH",
        sourcePath: fixture.commonManifestPath,
        targetPath: alphaManifest,
      }),
    ]);

    writeCommonManifest(fixture);
    expect(verifyEditorialManifestRepository(fixture.root).ok).toBe(true);
  });

  it("rejects global dependencies and another guide's artefacts", () => {
    const fixture = createValidFixture();
    writeGuideManifest(fixture, "alpha-guide", [
      EDITORIAL_MANIFEST_CURRENT_PATH,
      "src/lib/guides.ts",
      "src/app/guides/beta-guide/page.tsx",
    ]);
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(issueCodes(result)).toEqual(
      expect.arrayContaining([
        "GUIDE_GLOBAL_PATH_FORBIDDEN",
        "GUIDE_FOREIGN_ARTIFACT",
      ]),
    );
  });

  it("rejects mutable, legacy and direct guide artefacts in the common receipt", () => {
    const fixture = createValidFixture();
    const legacyManifest = "docs/research/manifests/legacy-guide-p4.sha256";
    writeFile(
      fixture.root,
      legacyManifest,
      `${"0".repeat(64)}  ancien-fichier.txt\n`,
    );
    writeFile(
      fixture.root,
      fixture.commonManifestPath,
      manifestSource(fixture.root, [
        fixture.descriptorPath,
        ...REQUIRED_COMMON_PATHS,
        ...fixture.guideManifests.values(),
        EDITORIAL_MANIFEST_CURRENT_PATH,
        legacyManifest,
        "src/app/guides/alpha-guide/page.tsx",
      ]),
    );

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(issueCodes(result)).toEqual(
      expect.arrayContaining([
        "COMMON_CURRENT_SELECTOR_FORBIDDEN",
        "COMMON_LEGACY_MANIFEST_FORBIDDEN",
        "COMMON_DIRECT_GUIDE_ARTIFACT",
      ]),
    );
  });

  it("rejects a nested historical manifest even when its own bytes match", () => {
    const fixture = createValidFixture();
    const nestedManifest = "docs/research/manifests/legacy-guide-p4.sha256";
    writeFile(
      fixture.root,
      nestedManifest,
      `${"0".repeat(64)}  fichier-historique-modifie.txt\n`,
    );
    writeGuideManifest(fixture, "alpha-guide", [nestedManifest]);
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "GUIDE_NESTED_MANIFEST_FORBIDDEN",
        targetPath: nestedManifest,
      }),
    );
  });

  it("rejects symlinks whose real target leaves the repository", () => {
    const fixture = createValidFixture();
    const externalDirectory = makeTemporaryDirectory("editorial-external-");
    const externalFile = path.join(externalDirectory, "secret.txt");
    fs.writeFileSync(externalFile, "hors dépôt\n");
    const symlinkPath = "guide-extra.txt";
    fs.symlinkSync(externalFile, absolutePath(fixture.root, symlinkPath));
    writeGuideManifest(fixture, "alpha-guide", [symlinkPath]);
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "SYMLINK_FORBIDDEN",
        targetPath: symlinkPath,
      }),
    );
  });

  it("rejects a file symlink even when its target remains inside the repository", () => {
    const fixture = createValidFixture();
    const physicalPath = "guide-physical-extra.txt";
    const symlinkPath = "guide-internal-alias.txt";
    writeFile(fixture.root, physicalPath, "contenu physique\n");
    fs.symlinkSync(
      absolutePath(fixture.root, physicalPath),
      absolutePath(fixture.root, symlinkPath),
    );
    writeGuideManifest(fixture, "alpha-guide", [symlinkPath]);
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "SYMLINK_FORBIDDEN",
        targetPath: symlinkPath,
      }),
    );
  });

  it("rejects a symlink in any parent directory of a referenced file", () => {
    const fixture = createValidFixture();
    const physicalDirectory = absolutePath(
      fixture.root,
      "physical-guide-directory",
    );
    const linkedDirectory = absolutePath(
      fixture.root,
      "linked-guide-directory",
    );
    fs.mkdirSync(physicalDirectory);
    fs.writeFileSync(path.join(physicalDirectory, "extra.txt"), "contenu\n");
    fs.symlinkSync(physicalDirectory, linkedDirectory, "dir");
    const linkedPath = "linked-guide-directory/extra.txt";
    writeGuideManifest(fixture, "alpha-guide", [linkedPath]);
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "SYMLINK_FORBIDDEN",
        targetPath: linkedPath,
      }),
    );
  });

  it("rejects a repository root supplied through a symlink", () => {
    const fixture = createValidFixture();
    const aliasContainer = makeTemporaryDirectory("editorial-root-alias-");
    const aliasPath = path.join(aliasContainer, "repository");
    fs.symlinkSync(fixture.root, aliasPath, "dir");

    const result = verifyEditorialManifestRepository(aliasPath);

    expect(result.issues).toEqual([
      expect.objectContaining({
        code: "SYMLINK_FORBIDDEN",
        targetPath: aliasPath,
      }),
    ]);
    expect(result.checkedFileCount).toBe(0);
  });

  it("rejects current.json when an unreferenced hard link exists", () => {
    const fixture = createValidFixture();
    const aliasContainer = makeTemporaryDirectory("editorial-current-alias-");
    fs.linkSync(
      absolutePath(fixture.root, EDITORIAL_MANIFEST_CURRENT_PATH),
      path.join(aliasContainer, "current-alias.json"),
    );

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "HARDLINK_FORBIDDEN",
        targetPath: EDITORIAL_MANIFEST_CURRENT_PATH,
      }),
    );
    expect(result.checkedFileCount).toBe(0);
  });

  it("rejects a file with hard-link aliases absent from the graph and outside the root", () => {
    const fixture = createValidFixture();
    const targetPath = "src/app/guides/alpha-guide/page.tsx";
    const internalAlias = "unreferenced-alpha-page-alias.tsx";
    const externalDirectory = makeTemporaryDirectory(
      "editorial-hardlink-outside-",
    );
    fs.linkSync(
      absolutePath(fixture.root, targetPath),
      absolutePath(fixture.root, internalAlias),
    );
    fs.linkSync(
      absolutePath(fixture.root, targetPath),
      path.join(externalDirectory, "outside-alpha-page-alias.tsx"),
    );

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "HARDLINK_FORBIDDEN",
        targetPath,
      }),
    );
  });

  it("rejects the same physical file in the common and a guide receipt", () => {
    const fixture = createValidFixture();
    const sharedPath = "src/components/guides/alpha-private-helper.tsx";
    writeFile(fixture.root, sharedPath, "export const helper = true;\n");
    writeGuideManifest(fixture, "alpha-guide", [sharedPath]);
    writeFile(
      fixture.root,
      fixture.commonManifestPath,
      manifestSource(fixture.root, [
        fixture.descriptorPath,
        ...REQUIRED_COMMON_PATHS,
        ...fixture.guideManifests.values(),
        sharedPath,
      ]),
    );

    const result = verifyEditorialManifestRepository(fixture.root);
    const intersections = result.issues.filter(
      (entry) =>
        entry.code === "COMMON_GUIDE_IDENTITY_INTERSECTION" &&
        entry.targetPath === sharedPath,
    );

    expect(intersections).toHaveLength(2);
    expect(intersections.map((entry) => entry.sourcePath)).toEqual(
      expect.arrayContaining([
        fixture.commonManifestPath,
        `${fixture.guideManifests.get("alpha-guide")}#guides[0]`,
      ]),
    );
  });

  it("rejects the same physical file claimed by two guide receipts", () => {
    const fixture = createValidFixture();
    const sharedPath = "src/components/guides/shared-physical-helper.tsx";
    writeFile(fixture.root, sharedPath, "export const shared = true;\n");
    writeGuideManifest(fixture, "alpha-guide", [sharedPath]);
    writeGuideManifest(fixture, "beta-guide", [sharedPath]);
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);
    const intersections = result.issues.filter(
      (entry) => entry.code === "GUIDE_IDENTITY_INTERSECTION",
    );

    expect(intersections).toHaveLength(2);
    expect(intersections.map((entry) => entry.targetPath)).toEqual([
      sharedPath,
      sharedPath,
    ]);
  });

  it("reports both textual and physical duplicates inside one manifest", () => {
    const fixture = createValidFixture();
    const physicalPath = "src/components/guides/alpha-physical.tsx";
    writeFile(fixture.root, physicalPath, "export const local = true;\n");
    writeGuideManifest(fixture, "alpha-guide", [physicalPath, physicalPath]);
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);
    const duplicateIdentities = result.issues.filter(
      (entry) => entry.code === "MANIFEST_DUPLICATE_IDENTITY",
    );

    expect(duplicateIdentities).toHaveLength(2);
    expect(duplicateIdentities.map((entry) => entry.targetPath)).toEqual([
      physicalPath,
      physicalPath,
    ]);
    expect(issueCodes(result)).toContain("MANIFEST_DUPLICATE_PATH");
  });

  it("rejects a manifest hard-linked to a physical self-alias", () => {
    const fixture = createValidFixture();
    const alphaManifest = fixture.guideManifests.get("alpha-guide");
    if (!alphaManifest) throw new Error("Fixture alpha absente");
    const aliasPath = "alpha-manifest-hardlink-alias.txt";
    const entries = [
      ...guideRequiredPaths("alpha-guide").map((relativePath) => ({
        hash: fileHash(fixture.root, relativePath),
        relativePath,
      })),
      { hash: "0".repeat(64), relativePath: aliasPath },
    ].sort((left, right) =>
      left.relativePath < right.relativePath
        ? -1
        : left.relativePath > right.relativePath
          ? 1
          : 0,
    );
    writeFile(
      fixture.root,
      alphaManifest,
      `${entries
        .map(({ hash, relativePath }) => `${hash}  ${relativePath}`)
        .join("\n")}\n`,
    );
    fs.linkSync(
      absolutePath(fixture.root, alphaManifest),
      absolutePath(fixture.root, aliasPath),
    );
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "HARDLINK_FORBIDDEN",
        targetPath: alphaManifest,
      }),
    );
  });

  it("keeps every duplicate descriptor entry and reports each stale hash", () => {
    const fixture = createValidFixture();
    const alphaManifest = fixture.guideManifests.get("alpha-guide");
    const betaManifest = fixture.guideManifests.get("beta-guide");
    if (!alphaManifest || !betaManifest) {
      throw new Error("Fixture guide incomplète");
    }
    writeFile(
      fixture.root,
      fixture.descriptorPath,
      jsonSource({
        schemaVersion: 2,
        waveId: fixture.waveId,
        commonManifest: fixture.commonManifestPath,
        guides: [
          { slug: "alpha-guide", manifest: alphaManifest },
          { slug: "alpha-guide", manifest: alphaManifest },
          { slug: "beta-guide", manifest: betaManifest },
        ],
      }),
    );
    writeCommonManifest(fixture);
    const stalePath = "src/app/guides/alpha-guide/page.tsx";
    writeFile(fixture.root, stalePath, "page devenue obsolète\n");

    const result = verifyEditorialManifestRepository(fixture.root);
    const staleDiagnostics = result.issues.filter(
      (entry) =>
        entry.code === "HASH_MISMATCH" && entry.targetPath === stalePath,
    );

    expect(issueCodes(result)).toEqual(
      expect.arrayContaining([
        "DESCRIPTOR_GUIDE_DUPLICATE",
        "DESCRIPTOR_GUIDE_MANIFEST_DUPLICATE",
      ]),
    );
    expect(staleDiagnostics).toHaveLength(2);
    expect(staleDiagnostics.map((entry) => entry.sourcePath)).toEqual([
      `${alphaManifest}#guides[0]`,
      `${alphaManifest}#guides[1]`,
    ]);
  });

  it("detects a file changed after its exact parsed buffer was cached", () => {
    const fixture = createValidFixture();
    const alphaManifest = fixture.guideManifests.get("alpha-guide");
    if (!alphaManifest) throw new Error("Fixture alpha absente");
    const alphaManifestAbsolute = absolutePath(fixture.root, alphaManifest);
    const originalReadFileSync = fs.readFileSync;
    let mutated = false;

    vi.spyOn(fs, "readFileSync").mockImplementation(((
      ...arguments_: unknown[]
    ) => {
      const content = Reflect.apply(originalReadFileSync, fs, arguments_) as
        Buffer | string;
      if (!mutated && String(arguments_[0]) === alphaManifestAbsolute) {
        mutated = true;
        fs.appendFileSync(alphaManifestAbsolute, "\n");
      }
      return content;
    }) as typeof fs.readFileSync);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "FILE_CHANGED_DURING_VALIDATION",
        targetPath: alphaManifest,
      }),
    );
    expect(result.issues).not.toContainEqual(
      expect.objectContaining({
        code: "HASH_MISMATCH",
        targetPath: alphaManifest,
      }),
    );
  });

  it("detects a hard link created after the first file snapshot", () => {
    const fixture = createValidFixture();
    const targetPath = "src/app/guides/alpha-guide/page.tsx";
    const targetAbsolute = absolutePath(fixture.root, targetPath);
    const aliasDirectory = makeTemporaryDirectory(
      "editorial-late-hardlink-alias-",
    );
    const aliasAbsolute = path.join(aliasDirectory, "late-alias.tsx");
    const originalReadFileSync = fs.readFileSync;
    let linked = false;

    vi.spyOn(fs, "readFileSync").mockImplementation(((
      ...arguments_: unknown[]
    ) => {
      const content = Reflect.apply(originalReadFileSync, fs, arguments_) as
        Buffer | string;
      if (!linked && String(arguments_[0]) === targetAbsolute) {
        linked = true;
        fs.linkSync(targetAbsolute, aliasAbsolute);
      }
      return content;
    }) as typeof fs.readFileSync);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "HARDLINK_FORBIDDEN",
          targetPath,
        }),
        expect.objectContaining({
          code: "FILE_CHANGED_DURING_VALIDATION",
          targetPath,
        }),
      ]),
    );
  });

  it("detects a parent directory replaced after a child snapshot", () => {
    const fixture = createValidFixture();
    const parentPath = "src/components/guides/swapped-parent";
    const retiredParentPath = "src/components/guides/swapped-parent-retired";
    const targetPath = `${parentPath}/extra.ts`;
    writeFile(fixture.root, targetPath, "export const stable = true;\n");
    writeGuideManifest(fixture, "alpha-guide", [targetPath]);
    writeCommonManifest(fixture);
    const parentAbsolute = absolutePath(fixture.root, parentPath);
    const retiredParentAbsolute = absolutePath(fixture.root, retiredParentPath);
    const targetAbsolute = absolutePath(fixture.root, targetPath);
    const originalReadFileSync = fs.readFileSync;
    let swapped = false;

    vi.spyOn(fs, "readFileSync").mockImplementation(((
      ...arguments_: unknown[]
    ) => {
      const content = Reflect.apply(originalReadFileSync, fs, arguments_) as
        Buffer | string;
      if (!swapped && String(arguments_[0]) === targetAbsolute) {
        swapped = true;
        fs.renameSync(parentAbsolute, retiredParentAbsolute);
        fs.mkdirSync(parentAbsolute);
        fs.writeFileSync(targetAbsolute, content);
      }
      return content;
    }) as typeof fs.readFileSync);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: "PARENT_CHANGED_DURING_VALIDATION",
          targetPath: parentPath,
        }),
        expect.objectContaining({
          code: "FILE_CHANGED_DURING_VALIDATION",
          targetPath,
        }),
      ]),
    );
  });

  it("reports a missing target, a directory and a self-reference together", () => {
    const fixture = createValidFixture();
    const alphaManifest = fixture.guideManifests.get("alpha-guide");
    if (!alphaManifest) throw new Error("Fixture alpha absente");
    const directoryPath = "alpha-target-directory";
    fs.mkdirSync(absolutePath(fixture.root, directoryPath));
    const specialEntries = [
      ...guideRequiredPaths("alpha-guide").map((relativePath) => ({
        hash: fileHash(fixture.root, relativePath),
        relativePath,
      })),
      { hash: "0".repeat(64), relativePath: "alpha-missing-target.txt" },
      { hash: "0".repeat(64), relativePath: directoryPath },
      { hash: "0".repeat(64), relativePath: alphaManifest },
    ].sort((left, right) =>
      left.relativePath.localeCompare(right.relativePath),
    );
    writeFile(
      fixture.root,
      alphaManifest,
      `${specialEntries
        .map(({ hash, relativePath }) => `${hash}  ${relativePath}`)
        .join("\n")}\n`,
    );
    writeCommonManifest(fixture);

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(issueCodes(result)).toEqual(
      expect.arrayContaining([
        "TARGET_MISSING",
        "TARGET_NOT_FILE",
        "SELF_REFERENCE",
      ]),
    );
  });

  it("requires exact guide membership between descriptor and common receipt", () => {
    const fixture = createValidFixture();
    const betaManifest = fixture.guideManifests.get("beta-guide");
    if (!betaManifest) throw new Error("Fixture beta absente");

    const commonPaths = [
      fixture.descriptorPath,
      ...REQUIRED_COMMON_PATHS,
      fixture.guideManifests.get("alpha-guide"),
    ].filter((entry): entry is string => entry !== undefined);
    writeFile(
      fixture.root,
      fixture.commonManifestPath,
      manifestSource(fixture.root, commonPaths),
    );

    const result = verifyEditorialManifestRepository(fixture.root);

    expect(result.issues).toContainEqual(
      expect.objectContaining({
        code: "COMMON_GUIDE_MANIFEST_MISSING",
        targetPath: betaManifest,
      }),
    );
  });
});

describe("read-only manifest verifier command", () => {
  it("accepts a valid fixture and keeps every byte unchanged", () => {
    const fixture = createValidFixture();
    const before = fileTreeSnapshot(fixture.root);
    const executable = path.join(process.cwd(), "node_modules", ".bin", "tsx");
    const script = path.join(
      process.cwd(),
      "scripts",
      "verify-editorial-manifests.ts",
    );

    const result = spawnSync(executable, [script, "--root", fixture.root], {
      cwd: process.cwd(),
      encoding: "utf8",
    });

    expect(result.status).toBe(0);
    expect(result.error).toBeUndefined();
    expect(result.stderr).toBe("");
    expect(result.stdout).toContain("Manifestes éditoriaux V2 valides");
    expect(result.stdout).toContain(`Vague : ${fixture.waveId}`);
    expect(fileTreeSnapshot(fixture.root)).toEqual(before);
  });

  it("returns a controlled failure and creates nothing without current.json", () => {
    const root = makeTemporaryDirectory();
    const before = fileTreeSnapshot(root);
    const executable = path.join(process.cwd(), "node_modules", ".bin", "tsx");
    const script = path.join(
      process.cwd(),
      "scripts",
      "verify-editorial-manifests.ts",
    );

    const result = spawnSync(executable, [script, "--root", root], {
      cwd: process.cwd(),
      encoding: "utf8",
    });

    expect(result.status).toBe(1);
    expect(result.error).toBeUndefined();
    expect(result.stderr).toContain(
      `${EDITORIAL_MANIFEST_CURRENT_PATH} est introuvable`,
    );
    expect(result.stderr).toContain("[CURRENT_SELECTOR_MISSING]");
    expect(fileTreeSnapshot(root)).toEqual(before);
  });
});
