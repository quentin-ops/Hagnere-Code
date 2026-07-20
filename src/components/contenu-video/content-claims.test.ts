import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";
import { problemsHtml } from "./sections/problems";
import { whatWeProduceHtml } from "./sections/what-we-produce";

const servicePageSource = readFileSync(
  new URL("../../app/services/contenu-video/page.tsx", import.meta.url),
  "utf8",
);

describe("contenu video public claims", () => {
  it("ne présente pas des métiers créatifs non établis comme salariés internes", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(/studio interne|deux monteurs permanents/i);
    expect(publishedContent).not.toMatch(/(?:DA|media buyer)[^<.]{0,40}interne/i);
    expect(publishedContent).toContain("statut interne ou externe");
  });

  it("ne renvoie pas vers une charte IA inexistante et conserve une validation humaine", () => {
    expect(composedBodyHtml).not.toContain("/charte-ia");
    expect(composedBodyHtml).toContain("validation finale reste humaine");
  });

  it("présente chaque situation comme un scénario fictif, jamais comme un témoignage client", () => {
    expect(problemsHtml).toContain(
      "Scénarios d'illustration fictifs : ni clients, ni témoignages réels.",
    );
    expect(
      problemsHtml.match(
        /Scénario fictif — ni client ni témoignage réel/g,
      ),
    ).toHaveLength(6);
    expect(problemsHtml).not.toContain("<blockquote");
    expect(problemsHtml).not.toMatch(/pas de cas inventé|on entend vraiment/i);
    expect(problemsHtml).not.toMatch(/\b(?:CMO|Head of Growth|GMV|ARR)\b/i);
    expect(problemsHtml).not.toMatch(/(?:Founder|DG)\s*·/i);
  });

  it("n'affiche aucune métrique de performance fictive dans les maquettes", () => {
    const auditedSections = `${problemsHtml}\n${whatWeProduceHtml}`;

    expect(whatWeProduceHtml).toContain(
      "illustrations fictives : ni clients, ni témoignages, ni résultats réels",
    );
    expect(auditedSections).not.toMatch(/\b(?:GMV|ARR|CTR|CPM)\b/i);
    expect(auditedSections).not.toMatch(
      /(?:48K|2,1K|1\.2M|487K|842K|800 abonnés)/i,
    );
  });

  it("écarte les superlatifs et garanties de résultat non démontrés", () => {
    const auditedSections = `${problemsHtml}\n${whatWeProduceHtml}`;

    expect(auditedSections).not.toMatch(
      /imbattable|arrêtent le scroll|qu'on maîtrise|pas soixante qu'on survole|le calendrier est rempli/i,
    );
    expect(auditedSections).not.toMatch(/testés en A\/B|AB-testés/i);
  });
});
