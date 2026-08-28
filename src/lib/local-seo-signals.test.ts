import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import {
  CONTACT_ADDRESS,
  CONTACT_GEO,
  OPENING_HOURS,
  OPENING_HOURS_DISPLAY,
} from "./contact-details";
import { PUBLIC_ORGANIZATION_ENTITY } from "./organization-structured-data";

const projectRoot = process.cwd();
const read = (relative: string) =>
  fs.readFileSync(path.join(projectRoot, relative), "utf8");

/**
 * Signaux de référencement local.
 *
 * Google rapproche une entité de sa fiche d'établissement par la cohérence du
 * NAP, des coordonnées et des horaires. Un écart entre ce que la page affiche
 * et ce que le balisage déclare est précisément ce qui casse ce rapprochement :
 * ces invariants existent pour qu'aucune des deux moitiés ne puisse dériver
 * seule.
 */
describe("signaux locaux publiés", () => {
  it("géolocalise le siège sur des coordonnées plausibles pour Bassens", () => {
    const geo = PUBLIC_ORGANIZATION_ENTITY.geo;
    expect(geo["@type"]).toBe("GeoCoordinates");
    expect(geo.latitude).toBe(CONTACT_GEO.latitude);
    expect(geo.longitude).toBe(CONTACT_GEO.longitude);

    // Garde-fou de saisie : une inversion latitude/longitude ou une virgule
    // décimale perdue sortirait de cette boîte, qui encadre largement la Savoie.
    expect(geo.latitude).toBeGreaterThan(45.3);
    expect(geo.latitude).toBeLessThan(45.9);
    expect(geo.longitude).toBeGreaterThan(5.6);
    expect(geo.longitude).toBeLessThan(6.3);
  });

  it("publie des horaires au format attendu par schema.org", () => {
    const [spec] = PUBLIC_ORGANIZATION_ENTITY.openingHoursSpecification;
    expect(spec["@type"]).toBe("OpeningHoursSpecification");
    expect(spec.dayOfWeek).toEqual([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ]);
    for (const time of [spec.opens, spec.closes]) {
      expect(time).toMatch(/^([01]\d|2[0-3]):[0-5]\d$/);
    }
    expect(spec.opens < spec.closes).toBe(true);
  });

  it("affiche exactement les horaires qu'il déclare", () => {
    // Les blocs visibles dérivent de la même constante : on vérifie qu'ils la
    // consomment vraiment, plutôt que de recopier une plage à la main.
    for (const relative of [
      "src/components/contact/body.ts",
      "src/components/rendez-vous/RendezVousPage.tsx",
    ]) {
      const source = read(relative);
      expect(source, relative).toContain("OPENING_HOURS_DISPLAY");
      expect(source, relative).not.toMatch(/\d{1,2}\s*h\s*[–-]\s*\d{1,2}\s*h/);
    }
    expect(OPENING_HOURS_DISPLAY).toContain(
      String(Number(OPENING_HOURS.opens.slice(0, 2))),
    );
    expect(OPENING_HOURS_DISPLAY).toContain(
      String(Number(OPENING_HOURS.closes.slice(0, 2))),
    );
  });

  it("garde le NAP du balisage identique à celui des mentions légales", () => {
    // Source du bloc d'identité des mentions légales.
    const mentions = read("src/components/legal/legal-contact.ts");
    const address = PUBLIC_ORGANIZATION_ENTITY.address;

    expect(address.streetAddress).toBe(CONTACT_ADDRESS.street);
    expect(address.postalCode).toBe(CONTACT_ADDRESS.postalCode);
    expect(address.addressLocality).toBe(CONTACT_ADDRESS.locality);
    // Les mentions légales sont la source opposable : le balisage doit s'y
    // conformer, pas l'inverse.
    expect(mentions).toContain(CONTACT_ADDRESS.locality);
    expect(mentions).toContain(CONTACT_ADDRESS.postalCode);
  });
});
