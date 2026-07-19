import fs from "node:fs";
import path from "node:path";
import { unzipSync } from "fflate";
import { describe, expect, it } from "vitest";
import {
  DOWNLOADABLE_RESOURCES,
  SITE_CDC_KIT,
  resourceKitUrl,
} from "./resources";

function publicFile(href: string) {
  return path.join(process.cwd(), "public", href.replace(/^\//, ""));
}

describe("downloadable resources", () => {
  const downloads = [SITE_CDC_KIT.primary, ...SITE_CDC_KIT.files];

  it("stays aligned with the canonical kit version and date", () => {
    const configPath = path.join(
      process.cwd(),
      "scripts/resource-kits/cahier-des-charges-site-internet/kit_config.json",
    );
    const config = JSON.parse(fs.readFileSync(configPath, "utf8")) as {
      version: string;
      publicationDate: string;
      publicationDateLabel: string;
    };

    expect(SITE_CDC_KIT.version).toBe(config.version);
    expect(SITE_CDC_KIT.updatedAt).toBe(config.publicationDate);
    expect(SITE_CDC_KIT.updatedLabel).toBe(config.publicationDateLabel);
  });

  it("publishes a unique, canonical landing page for every kit", () => {
    const paths = DOWNLOADABLE_RESOURCES.map((resource) => resource.path);
    expect(new Set(paths).size).toBe(paths.length);
    expect(DOWNLOADABLE_RESOURCES).toContain(SITE_CDC_KIT);
    expect(SITE_CDC_KIT.path).toBe(
      "/ressources/kit-cahier-des-charges-site-internet",
    );
    expect(resourceKitUrl(SITE_CDC_KIT)).toBe(
      "https://hagnere-code.ai/ressources/kit-cahier-des-charges-site-internet",
    );
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

  it("packages the four standalone files byte for byte in the ZIP", () => {
    const archive = unzipSync(
      fs.readFileSync(publicFile(SITE_CDC_KIT.primary.href)),
    );
    const expectedNames = SITE_CDC_KIT.files
      .map((file) => file.downloadName)
      .sort();

    expect(Object.keys(archive).sort()).toEqual(expectedNames);

    for (const file of SITE_CDC_KIT.files) {
      expect(Buffer.from(archive[file.downloadName]), file.downloadName).toEqual(
        fs.readFileSync(publicFile(file.href)),
      );
    }
  });

  it("publishes a 1200 by 630 PNG social preview", () => {
    const socialImage = fs.readFileSync(publicFile(SITE_CDC_KIT.socialImage.href));

    expect(socialImage.subarray(0, 8)).toEqual(
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    );
    expect(socialImage.readUInt32BE(16)).toBe(SITE_CDC_KIT.socialImage.width);
    expect(socialImage.readUInt32BE(20)).toBe(SITE_CDC_KIT.socialImage.height);
    expect(SITE_CDC_KIT.socialImage.width).toBe(1200);
    expect(SITE_CDC_KIT.socialImage.height).toBe(630);
  });
});
