import { describe, expect, it } from "vitest";

import {
  isValidAdsId,
  isValidGa4Id,
  isGoogleMeasurementConfigured,
  leadConversionTarget,
  measurementIds,
} from "./google-measurement";

/**
 * Ces trois fonctions décident si un script tiers est chargé et si un hit de
 * conversion part vers Google Ads. Rien ne les couvrait : la CSP, elle, avait
 * son contrat (src/app/api/csp-report/policy-contract.test.ts), ce qui donnait
 * l'illusion que le sujet l'était aussi.
 *
 * Les identifiants utilisés ici sont des formes, pas des comptes : aucun
 * identifiant réel du site n'apparaît dans ce dépôt.
 */

describe("format des identifiants de mesure", () => {
  it("n'accepte qu'un identifiant Ads réellement au format AW-…", () => {
    expect(isValidAdsId("AW-1234567890")).toBe(true);
    // Un préfixe seul, une casse différente ou un identifiant GA4 posé dans la
    // mauvaise variable produiraient une URL gtag inexploitable.
    expect(isValidAdsId("AW-")).toBe(false);
    expect(isValidAdsId("aw-1234567890")).toBe(false);
    expect(isValidAdsId("G-ABCDEF1234")).toBe(false);
    expect(isValidAdsId("")).toBe(false);
    // Le libellé de conversion ne fait pas partie de l'identifiant : le laisser
    // passer enverrait `AW-123/label/label` dans `send_to`.
    expect(isValidAdsId("AW-1234567890/AbC-D_efg")).toBe(false);
    // Une valeur d'environnement mal recopiée ne doit pas ouvrir d'URL.
    expect(isValidAdsId("AW-123 456")).toBe(false);
    expect(isValidAdsId("https://evil.example/AW-1")).toBe(false);
  });

  it("n'accepte qu'un identifiant GA4 réellement au format G-…", () => {
    expect(isValidGa4Id("G-ABCDEF1234")).toBe(true);
    expect(isValidGa4Id("G-")).toBe(false);
    expect(isValidGa4Id("AW-1234567890")).toBe(false);
    expect(isValidGa4Id("")).toBe(false);
  });
});

describe("measurementIds", () => {
  it("configure GA4 avant Ads", () => {
    // gtag.js est chargé avec le PREMIER identifiant de la liste : GA4 en tête
    // parce que c'est le flux qui porte les événements nommés (dont les
    // rendez-vous Calendly), Ads ensuite pour les conversions.
    expect(measurementIds("AW-1234567890", "G-ABCDEF1234")).toEqual([
      "G-ABCDEF1234",
      "AW-1234567890",
    ]);
  });

  it("ignore un identifiant malformé au lieu de le configurer", () => {
    expect(measurementIds("AW-1234567890", "pas-un-flux")).toEqual([
      "AW-1234567890",
    ]);
    expect(measurementIds("", "G-ABCDEF1234")).toEqual(["G-ABCDEF1234"]);
    expect(measurementIds("AW-", "G-")).toEqual([]);
  });

  it("ne déclare la mesure configurée que s'il reste un identifiant", () => {
    expect(isGoogleMeasurementConfigured("", "")).toBe(false);
    expect(isGoogleMeasurementConfigured("AW-", "G-")).toBe(false);
    expect(isGoogleMeasurementConfigured("AW-1234567890", "")).toBe(true);
    expect(isGoogleMeasurementConfigured("", "G-ABCDEF1234")).toBe(true);
  });
});

describe("leadConversionTarget", () => {
  it("assemble identifiant et libellé pour send_to", () => {
    expect(leadConversionTarget("AW-1234567890", "AbC-D_efg")).toBe(
      "AW-1234567890/AbC-D_efg",
    );
    // Une variable d'environnement recopiée avec un retour à la ligne ne doit
    // pas produire une cible avec des espaces.
    expect(leadConversionTarget("AW-1234567890", "  AbC-D_efg \n")).toBe(
      "AW-1234567890/AbC-D_efg",
    );
  });

  it("ne renvoie aucune cible tant qu'il manque une moitié", () => {
    // Sans cible, `reportToGoogleAds` sort avant d'appeler gtag : mieux vaut
    // aucune conversion qu'une conversion envoyée à un `send_to` inventé.
    expect(leadConversionTarget("AW-1234567890", "")).toBeNull();
    expect(leadConversionTarget("AW-1234567890", "   ")).toBeNull();
    expect(leadConversionTarget("", "AbC-D_efg")).toBeNull();
    expect(leadConversionTarget("AW-", "AbC-D_efg")).toBeNull();
    expect(leadConversionTarget("G-ABCDEF1234", "AbC-D_efg")).toBeNull();
  });
});
