import fs from "node:fs";
import path from "node:path";
import { unzipSync } from "fflate";
import { describe, expect, it } from "vitest";
import {
  APP_CDC_KIT,
  DOWNLOADABLE_RESOURCES,
  SITE_CDC_KIT,
  resourceKitUrl,
  resourceDownloadPaths,
} from "./resources";

function publicFile(href: string) {
  return path.join(process.cwd(), "public", href.replace(/^\//, ""));
}

const configPaths = new Map([
  [
    SITE_CDC_KIT.id,
    "scripts/resource-kits/cahier-des-charges-site-internet/kit_config.json",
  ],
  [
    APP_CDC_KIT.id,
    "scripts/resource-kits/cahier-des-charges-application-metier/kit_config.json",
  ],
]);

describe("downloadable resources", () => {
  const downloads = DOWNLOADABLE_RESOURCES.flatMap((resource) => [
    resource.primary,
    ...resource.files,
  ]);

  it("stays aligned with every canonical kit version and date", () => {
    for (const resource of DOWNLOADABLE_RESOURCES) {
      const configPath = configPaths.get(resource.id);
      expect(configPath, resource.id).toBeDefined();
      const config = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), configPath!), "utf8"),
      ) as {
        version: string;
        publicationDate: string;
        publicationDateLabel: string;
      };

      expect(resource.version, resource.id).toBe(config.version);
      expect(resource.updatedAt, resource.id).toBe(config.publicationDate);
      expect(resource.updatedLabel, resource.id).toBe(
        config.publicationDateLabel,
      );
    }
  });

  it("publishes a unique, canonical landing page for every kit", () => {
    const paths = DOWNLOADABLE_RESOURCES.map((resource) => resource.path);
    const ids = DOWNLOADABLE_RESOURCES.map((resource) => resource.id);
    expect(new Set(paths).size).toBe(paths.length);
    expect(new Set(ids).size).toBe(ids.length);
    expect(DOWNLOADABLE_RESOURCES).toContain(SITE_CDC_KIT);
    expect(DOWNLOADABLE_RESOURCES).toContain(APP_CDC_KIT);

    for (const resource of DOWNLOADABLE_RESOURCES) {
      expect(resourceKitUrl(resource)).toBe(
        `https://hagnere-code.ai${resource.path}`,
      );
    }
  });

  it("points every public URL to a non-empty file with the declared size", () => {
    for (const download of downloads) {
      const filePath = publicFile(download.href);
      expect(fs.existsSync(filePath), download.href).toBe(true);
      expect(fs.statSync(filePath).size, download.href).toBe(
        download.sizeBytes,
      );
    }
  });

  it("uses stable, unique same-origin paths and matching download names", () => {
    const hrefs = downloads.map((download) => download.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(resourceDownloadPaths).toEqual(hrefs);

    for (const download of downloads) {
      expect(download.href).toMatch(/^\/ressources\//);
      expect(download.href).not.toContain("..");
      expect(path.basename(download.href)).toBe(download.downloadName);
    }
  });

  it("has the expected file signatures", () => {
    for (const download of downloads) {
      const signature = fs
        .readFileSync(publicFile(download.href))
        .subarray(0, 4);

      if (download.format === "pdf") {
        expect(signature.toString("ascii"), download.href).toBe("%PDF");
      } else {
        expect(signature.subarray(0, 2).toString("ascii"), download.href).toBe(
          "PK",
        );
      }
    }
  });

  it("packages every standalone file byte for byte in its ZIP", () => {
    for (const resource of DOWNLOADABLE_RESOURCES) {
      const archive = unzipSync(
        fs.readFileSync(publicFile(resource.primary.href)),
      );
      const expectedNames = resource.files
        .map((file) => file.downloadName)
        .sort();

      expect(Object.keys(archive).sort(), resource.id).toEqual(expectedNames);

      for (const file of resource.files) {
        const archiveBytes = Buffer.from(archive[file.downloadName]);
        const standaloneBytes = fs.readFileSync(publicFile(file.href));
        expect(
          archiveBytes.equals(standaloneBytes),
          `${resource.id}:${file.downloadName}`,
        ).toBe(true);
      }
    }
  }, 15_000);

  it("publishes a 1200 by 630 PNG social preview for every kit", () => {
    for (const resource of DOWNLOADABLE_RESOURCES) {
      const socialImage = fs.readFileSync(
        publicFile(resource.socialImage.href),
      );

      expect(socialImage.subarray(0, 8), resource.id).toEqual(
        Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
      );
      expect(socialImage.readUInt32BE(16), resource.id).toBe(
        resource.socialImage.width,
      );
      expect(socialImage.readUInt32BE(20), resource.id).toBe(
        resource.socialImage.height,
      );
      expect(resource.socialImage.width).toBe(1200);
      expect(resource.socialImage.height).toBe(630);
    }
  });
});
