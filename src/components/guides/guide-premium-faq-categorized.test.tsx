/** @vitest-environment happy-dom */

import { flushSync } from "react-dom";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { GuidePremiumFaqCategorized } from "./guide-premium-faq-categorized";

const categories = [
  {
    key: "choix",
    num: "01",
    label: "Choisir",
    items: [
      {
        question: "Quel processus choisir ?",
        answer: "Un processus fréquent et mesurable.",
      },
    ],
  },
  {
    key: "cout",
    num: "02",
    label: "Chiffrer",
    items: [
      {
        question: "Quel coût retenir ?",
        answer: "Le coût complet sur une même période.",
      },
    ],
  },
];

describe("GuidePremiumFaqCategorized accessibility", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeAll(() => {
    (
      globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }
    ).IS_REACT_ACT_ENVIRONMENT = true;
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.append(container);
    root = createRoot(container);
    flushSync(() =>
      root.render(<GuidePremiumFaqCategorized categories={categories} />),
    );
  });

  afterEach(() => {
    flushSync(() => root.unmount());
    container.remove();
  });

  it("links every tab, tabpanel, question and answer with unique ids", () => {
    const tabs = [
      ...container.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    ];
    const panels = [
      ...container.querySelectorAll<HTMLElement>('[role="tabpanel"]'),
    ];

    expect(tabs).toHaveLength(2);
    expect(panels).toHaveLength(2);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[0].tabIndex).toBe(0);
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].tabIndex).toBe(-1);

    for (const tab of tabs) {
      const panelId = tab.getAttribute("aria-controls");
      const panel = panelId ? container.querySelector(`#${panelId}`) : null;
      expect(panel).not.toBeNull();
      expect(panel?.getAttribute("aria-labelledby")).toBe(tab.id);
    }

    const questions = [
      ...container.querySelectorAll<HTMLButtonElement>(
        "button[aria-expanded][aria-controls]",
      ),
    ];
    expect(questions).toHaveLength(2);
    for (const question of questions) {
      const answerId = question.getAttribute("aria-controls");
      const answer = answerId ? container.querySelector(`#${answerId}`) : null;
      expect(answer?.getAttribute("role")).toBe("region");
      expect(answer?.getAttribute("aria-labelledby")).toBe(question.id);
    }

    const ids = [...container.querySelectorAll<HTMLElement>("[id]")].map(
      (element) => element.id,
    );
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("moves and activates tabs with arrow, Home and End keys", () => {
    const tabs = [
      ...container.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    ];

    flushSync(() => {
      tabs[0].focus();
      tabs[0].dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
      );
    });
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(tabs[1]);

    flushSync(() => {
      tabs[1].dispatchEvent(
        new KeyboardEvent("keydown", { key: "Home", bubbles: true }),
      );
    });
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(tabs[0]);

    flushSync(() => {
      tabs[0].dispatchEvent(
        new KeyboardEvent("keydown", { key: "End", bubbles: true }),
      );
    });
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(tabs[1]);
  });

  it("relies on one native button activation instead of toggling on keydown too", () => {
    const question = container.querySelector<HTMLButtonElement>(
      'button[aria-expanded="true"]',
    );
    expect(question).not.toBeNull();
    expect(question?.type).toBe("button");

    flushSync(() => {
      question?.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      );
    });
    expect(question?.getAttribute("aria-expanded")).toBe("true");

    flushSync(() => {
      question?.click();
    });
    expect(question?.getAttribute("aria-expanded")).toBe("false");

    flushSync(() => {
      question?.dispatchEvent(
        new KeyboardEvent("keydown", { key: " ", bubbles: true }),
      );
    });
    expect(question?.getAttribute("aria-expanded")).toBe("false");

    flushSync(() => {
      question?.click();
    });
    expect(question?.getAttribute("aria-expanded")).toBe("true");
  });
});
