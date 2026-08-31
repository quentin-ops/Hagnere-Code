import { describe, expect, it } from "vitest";
import {
  activeSectionIndex,
  readingProgress,
  WHITE_PAPER_SECTIONS,
} from "./section-progress-nav";

describe("WHITE_PAPER_SECTIONS", () => {
  it("numérote les sections de 1 à N sans trou ni doublon d'ancre", () => {
    expect(WHITE_PAPER_SECTIONS.map((section) => section.number)).toEqual(
      WHITE_PAPER_SECTIONS.map((_, index) => index + 1),
    );
    const ids = WHITE_PAPER_SECTIONS.map((section) => section.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("ne réintroduit pas le numéro dans le libellé", () => {
    for (const section of WHITE_PAPER_SECTIONS) {
      expect(section.label).not.toMatch(/^\d+\./);
    }
  });
});

describe("activeSectionIndex", () => {
  it("ne désigne aucune section tant que la première n'a pas commencé", () => {
    expect(activeSectionIndex([500, 900, 1400], 160)).toBe(-1);
  });

  it("retient la dernière section franchie, pas la première visible", () => {
    expect(activeSectionIndex([-800, -200, 400], 160)).toBe(1);
  });

  it("bascule dès que le titre passe la ligne de lecture", () => {
    expect(activeSectionIndex([100, 161, 900], 160)).toBe(0);
    expect(activeSectionIndex([100, 160, 900], 160)).toBe(1);
  });

  it("désigne la dernière section en bas de page", () => {
    expect(activeSectionIndex([-3000, -2000, -1000], 160)).toBe(2);
  });

  it("ignore une ancre absente du document", () => {
    expect(
      activeSectionIndex([-100, Number.POSITIVE_INFINITY, 4000], 160),
    ).toBe(0);
  });
});

describe("readingProgress", () => {
  it("vaut 0 tant que l'article n'est pas entamé", () => {
    expect(readingProgress(900, 10000, 900)).toBe(0);
  });

  it("vaut 1 quand la fin de l'article est visible", () => {
    expect(readingProgress(-9500, 10000, 900)).toBe(1);
  });

  it("reste borné entre 0 et 1 au-delà de l'article", () => {
    expect(readingProgress(1500, 10000, 900)).toBe(0);
    expect(readingProgress(-20000, 10000, 900)).toBe(1);
  });

  it("rend une progression proportionnelle au milieu de l'article", () => {
    expect(readingProgress(-4100, 10000, 900)).toBeCloseTo(0.5, 5);
  });

  it("ne divise pas par zéro sur un article non mesuré", () => {
    expect(readingProgress(0, 0, 900)).toBe(0);
  });
});
