import { describe, expect, it } from "vitest";

import { bodyHtml } from "./body";

/**
 * Le mock de devis du hero de /tarifs additionnait 1 500 + 34 000 + 6 500 et
 * affichait 42 500 € HT (audit 2026-08), tout en se présentant comme un devis
 * SIGNÉ émis pour un client nommé alors que l'agence n'a aucun client externe.
 * Ces invariants verrouillent l'arithmétique et le cadrage « exemple ».
 */
const parseEuros = (value: string) =>
  Number(value.replace(/[^\d]/g, ""));

const quoteMock = (() => {
  const start = bodyHtml.indexOf('<div class="qmock">');
  const end = bodyHtml.indexOf('<div class="qmock-float">');
  if (start < 0 || end <= start) {
    throw new Error("Mock de devis introuvable dans /tarifs");
  }
  return bodyHtml.slice(start, end);
})();

describe("mock de devis de /tarifs", () => {
  it("affiche un total égal à la somme des lignes chiffrées", () => {
    const lineAmounts = [
      ...quoteMock.matchAll(/<div class="qmock-row-r"><b>([^<]+)<\/b>/g),
    ]
      .map((match) => match[1].trim())
      .filter((label) => /\d/.test(label))
      .map(parseEuros);

    const total = quoteMock.match(
      /<div class="qmock-total-val">([^<]+)<\/div>/,
    )?.[1];

    expect(lineAmounts.length).toBeGreaterThan(1);
    expect(total).toBeDefined();
    expect(parseEuros(total as string)).toBe(
      lineAmounts.reduce((sum, amount) => sum + amount, 0),
    );
  });

  it("ne se présente ni comme signé ni comme émis pour un client nommé", () => {
    expect(quoteMock).not.toMatch(/SIGNÉ|Acme|Devis n[oº°]\s*\d|Émis le/i);
    expect(quoteMock).not.toMatch(/Périmètre signé|Cadrage validé/i);
    expect(quoteMock).toContain("Scénario fictif composite");
    expect(quoteMock).toContain("EXEMPLE DE DEVIS");
  });

  it("ne présente aucune inclusion implicite d'hébergement", () => {
    expect(quoteMock).not.toMatch(/h[ée]bergement[^<.]{0,60}(inclus|offert)/i);
  });

  it("ne publie pas d'échéancier chiffré que la FAQ renvoie au devis", () => {
    expect(quoteMock).not.toMatch(/30\s*\/\s*30\s*\/\s*40/);
    expect(bodyHtml).toContain(
      "L'acompte, les jalons, le solde et le délai de paiement sont précisés dans le devis ou le contrat.",
    );
  });
});
