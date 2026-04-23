"use client";

import { useEffect, RefObject } from "react";

function makeSvg(paths: Array<{ d: string }>): SVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("aria-hidden", "true");
  paths.forEach(({ d }) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    svg.appendChild(path);
  });
  return svg;
}

const MENU_PATHS = [{ d: "M3 6h18M3 12h18M3 18h18" }];
const CLOSE_PATHS = [{ d: "M6 6l12 12M6 18L18 6" }];

function setBurgerIcon(btn: HTMLElement, open: boolean) {
  btn.replaceChildren(makeSvg(open ? CLOSE_PATHS : MENU_PATHS));
}

export function useDesignInteractive(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups: Array<() => void> = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    root.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector<HTMLElement>(".faq-q");
      const a = item.querySelector<HTMLElement>(".faq-a");
      if (!q) return;
      q.setAttribute("role", "button");
      q.setAttribute("tabindex", "0");
      q.setAttribute("aria-expanded", item.classList.contains("open") ? "true" : "false");
      if (a) a.setAttribute("aria-hidden", item.classList.contains("open") ? "false" : "true");

      const toggle = () => {
        const wasOpen = item.classList.contains("open");
        root.querySelectorAll(".faq-item").forEach((x) => {
          x.classList.remove("open");
          x.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
          x.querySelector(".faq-a")?.setAttribute("aria-hidden", "true");
        });
        if (!wasOpen) {
          item.classList.add("open");
          q.setAttribute("aria-expanded", "true");
          a?.setAttribute("aria-hidden", "false");
        }
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      };
      q.addEventListener("click", toggle);
      q.addEventListener("keydown", onKey as EventListener);
      cleanups.push(() => {
        q.removeEventListener("click", toggle);
        q.removeEventListener("keydown", onKey as EventListener);
      });
    });

    const nav = root.querySelector<HTMLElement>(".nav");
    const navCta = root.querySelector<HTMLElement>(".nav-cta");
    if (nav && navCta) {
      const burger = document.createElement("button");
      burger.type = "button";
      burger.className = "nav-burger";
      burger.setAttribute("aria-label", "Ouvrir le menu");
      burger.setAttribute("aria-expanded", "false");
      setBurgerIcon(burger, false);
      navCta.appendChild(burger);

      const setOpen = (open: boolean) => {
        nav.classList.toggle("nav-open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
        setBurgerIcon(burger, open);
        document.body.style.overflow = open ? "hidden" : "";
      };
      const toggle = () => setOpen(!nav.classList.contains("nav-open"));
      const onBurger: EventListener = (e) => {
        e.stopPropagation();
        toggle();
      };
      const onDocClick: EventListener = (e) => {
        if (!nav.classList.contains("nav-open")) return;
        if (!nav.contains(e.target as Node)) setOpen(false);
      };
      const onLinkClick: EventListener = (e) => {
        const a = (e.target as Element)?.closest("a");
        if (a && nav.classList.contains("nav-open")) setOpen(false);
      };
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape" && nav.classList.contains("nav-open")) setOpen(false);
      };
      burger.addEventListener("click", onBurger);
      document.addEventListener("click", onDocClick);
      nav.addEventListener("click", onLinkClick);
      document.addEventListener("keydown", onEsc);
      cleanups.push(() => {
        burger.removeEventListener("click", onBurger);
        document.removeEventListener("click", onDocClick);
        nav.removeEventListener("click", onLinkClick);
        document.removeEventListener("keydown", onEsc);
        document.body.style.overflow = "";
        burger.remove();
      });
    }

    // Hero founder-video button — logs intent until a real Loom URL is wired.
    const heroVideo = root.querySelector<HTMLButtonElement>(".hero-video");
    if (heroVideo) {
      const onVideoClick: EventListener = () => {
        const url = heroVideo.dataset.loomUrl;
        if (url && url.includes("loom.com") && !url.endsWith("placeholder")) {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          alert(
            "Vidéo fondateur en cours de montage — elle sera publiée très prochainement. En attendant, réservez 30 min avec un associé pour le même message, en direct.",
          );
        }
      };
      heroVideo.addEventListener("click", onVideoClick);
      cleanups.push(() => heroVideo.removeEventListener("click", onVideoClick));
    }

    // Scenario toggle — used on service pages (SaaS .sa-scenarios, Outils internes .oi-scenarios,
    // E-commerce .ec-scenarios, Sites vitrines .sv-scenarios, SEO .seo-scenarios, Ads .ads-scenarios,
    // Contenu & vidéo .cv-scenarios, Maintenance & évolution .me-scenarios).
    // Each container has data-active + child tabs [data-scenario] + panels [data-panel].
    const scenarioContainers = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".sa-scenarios, .oi-scenarios, .ec-scenarios, .sv-scenarios, .seo-scenarios, .ads-scenarios, .cv-scenarios, .me-scenarios",
      ),
    );
    scenarioContainers.forEach((scenarios) => {
      const prefix = scenarios.classList.contains("me-scenarios")
        ? "me"
        : scenarios.classList.contains("ads-scenarios")
          ? "ads"
          : scenarios.classList.contains("seo-scenarios")
            ? "seo"
            : scenarios.classList.contains("cv-scenarios")
              ? "cv"
              : scenarios.classList.contains("oi-scenarios")
                ? "oi"
                : scenarios.classList.contains("ec-scenarios")
                  ? "ec"
                  : scenarios.classList.contains("sv-scenarios")
                    ? "sv"
                    : "sa";
      const tabs = Array.from(
        scenarios.querySelectorAll<HTMLButtonElement>(`.${prefix}-scen-tab`),
      );
      const panels = Array.from(
        scenarios.querySelectorAll<HTMLElement>(`.${prefix}-scen-panel`),
      );

      const activate = (key: string) => {
        scenarios.dataset.active = key;
        tabs.forEach((t) => {
          const active = t.dataset.scenario === key;
          t.setAttribute("aria-selected", active ? "true" : "false");
          t.classList.toggle("is-active", active);
        });
        panels.forEach((p) => {
          const active = p.dataset.panel === key;
          p.hidden = !active;
          p.setAttribute("aria-hidden", active ? "false" : "true");
          p.classList.toggle("is-active", active);
        });
      };

      activate(scenarios.dataset.active || tabs[0]?.dataset.scenario || "");

      tabs.forEach((t) => {
        const onClick = () => {
          const key = t.dataset.scenario;
          if (key) activate(key);
        };
        const onKey = (e: KeyboardEvent) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const idx = tabs.indexOf(t);
            const next =
              e.key === "ArrowRight"
                ? tabs[(idx + 1) % tabs.length]
                : tabs[(idx - 1 + tabs.length) % tabs.length];
            next.focus();
            const key = next.dataset.scenario;
            if (key) activate(key);
          }
        };
        t.addEventListener("click", onClick);
        t.addEventListener("keydown", onKey as EventListener);
        cleanups.push(() => {
          t.removeEventListener("click", onClick);
          t.removeEventListener("keydown", onKey as EventListener);
        });
      });
    });

    // GMV Calculator — used on /services/ecommerce to compare Shopify 3y TCO vs Hagnéré forfait.
    const calc = root.querySelector<HTMLElement>(".ec-calc");
    if (calc) {
      const gmv = calc.querySelector<HTMLInputElement>("#ec-calc-gmv");
      const apps = calc.querySelector<HTMLInputElement>("#ec-calc-apps");
      const fees = calc.querySelector<HTMLInputElement>("#ec-calc-fees");
      const planBtns = Array.from(
        calc.querySelectorAll<HTMLButtonElement>(".ec-calc-seg"),
      );
      const gmvVal = calc.querySelector<HTMLElement>("#ec-calc-gmv-v");
      const appsVal = calc.querySelector<HTMLElement>("#ec-calc-apps-v");
      const feesVal = calc.querySelector<HTMLElement>("#ec-calc-fees-v");
      const shopifyTotal = calc.querySelector<HTMLElement>("#ec-calc-shopify-total");
      const hcTotal = calc.querySelector<HTMLElement>("#ec-calc-hc-total");
      const diffAmount = calc.querySelector<HTMLElement>("#ec-calc-diff-amount");
      const diffLabel = calc.querySelector<HTMLElement>("#ec-calc-diff-label");
      const months = calc.querySelector<HTMLElement>("#ec-calc-months");
      const breakevenLine = calc.querySelector<HTMLElement>("#ec-calc-breakeven");

      const fmt = (n: number) =>
        Math.round(n).toLocaleString("fr-FR").replace(/\s/g, " ");

      let plan: "basic" | "plus" =
        (planBtns
          .find((b) => b.classList.contains("is-active"))
          ?.dataset.shopifyPlan as "basic" | "plus") || "plus";

      const recompute = () => {
        const gmvNum = parseInt(gmv?.value || "0", 10);
        const appsNum = parseInt(apps?.value || "0", 10);
        const feesNum = parseFloat(fees?.value || "0");

        if (gmvVal) gmvVal.textContent = fmt(gmvNum);
        if (appsVal) appsVal.textContent = fmt(appsNum);
        if (feesVal)
          feesVal.textContent = feesNum.toFixed(1).replace(".", ",");

        // Shopify yearly cost:
        // licence + apps*12 + fees%*GMV + (plus only: 0.15% GMV fee)
        const licenceMonthly = plan === "plus" ? 2300 : 60;
        const gmvFeePlus = plan === "plus" ? gmvNum * 0.0015 : 0;
        const shopifyYearly =
          licenceMonthly * 12 +
          appsNum * 12 +
          (feesNum / 100) * gmvNum +
          gmvFeePlus;
        const shopify3y = shopifyYearly * 3;

        // Hagnéré: médiane forfait Scale 45k€ + TMA 1500€/mois × 36 mois
        const hcForfait = 45000;
        const hcTma = 1500 * 36;
        const hcTotal3y = hcForfait + hcTma;

        if (shopifyTotal) shopifyTotal.textContent = fmt(shopify3y);
        if (hcTotal) hcTotal.textContent = fmt(hcTotal3y);

        const diff = shopify3y - hcTotal3y;
        if (diffAmount) {
          diffAmount.textContent = fmt(Math.abs(diff));
        }
        if (diffLabel) {
          diffLabel.textContent =
            diff >= 0
              ? "Économies sur 3 ans"
              : "Shopify reste moins cher sur 3 ans";
        }

        if (breakevenLine) {
          if (diff > 0) {
            const monthlySavings = (shopifyYearly - hcTma / 3) / 12;
            const monthsToBe = Math.ceil(hcForfait / monthlySavings);
            if (months) months.textContent = String(monthsToBe);
            breakevenLine.style.display = "block";
          } else {
            breakevenLine.style.display = "none";
          }
        }
      };

      const onInput = () => recompute();
      const listeners: Array<[EventTarget, string, EventListener]> = [];
      if (gmv) {
        gmv.addEventListener("input", onInput);
        listeners.push([gmv, "input", onInput]);
      }
      if (apps) {
        apps.addEventListener("input", onInput);
        listeners.push([apps, "input", onInput]);
      }
      if (fees) {
        fees.addEventListener("input", onInput);
        listeners.push([fees, "input", onInput]);
      }

      planBtns.forEach((btn) => {
        const onClick = () => {
          const p = btn.dataset.shopifyPlan as "basic" | "plus";
          if (!p) return;
          plan = p;
          planBtns.forEach((b) => {
            const active = b === btn;
            b.classList.toggle("is-active", active);
            b.setAttribute("aria-pressed", active ? "true" : "false");
          });
          recompute();
        };
        btn.addEventListener("click", onClick);
        listeners.push([btn, "click", onClick]);
      });

      recompute();
      cleanups.push(() => {
        listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
      });
    }

    const navItem = root.querySelector<HTMLElement>(".nav-item");
    const navTrigger = navItem?.querySelector<HTMLElement>(".nav-trigger");
    if (navItem && navTrigger) {
      const onTriggerClick: EventListener = (e) => {
        if (window.matchMedia("(max-width: 768px)").matches) {
          e.preventDefault();
          navItem.classList.toggle("nav-item-open");
        }
      };
      navTrigger.addEventListener("click", onTriggerClick);
      cleanups.push(() => navTrigger.removeEventListener("click", onTriggerClick));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [rootRef]);
}
