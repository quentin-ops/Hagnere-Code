"use client";

import { useEffect, type RefObject } from "react";
import { calculateEcommerceCostComparison } from "@/lib/ecommerce-cost-comparison";
import {
  applySystemTheme,
  applyTheme,
  toggleThemeWithReveal,
} from "@/lib/theme-transition";

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

function makeChevron(): SVGElement {
  return makeSvg([{ d: "M6 9l6 6 6-6" }]);
}

type IdleCb = (cb: () => void, opts?: { timeout?: number }) => number;

function runWhenIdle(fn: () => void): () => void {
  const ric = (window as unknown as { requestIdleCallback?: IdleCb })
    .requestIdleCallback;
  if (ric) {
    const handle = ric(fn, { timeout: 300 });
    return () => {
      const cic = (window as unknown as {
        cancelIdleCallback?: (h: number) => void;
      }).cancelIdleCallback;
      if (cic) cic(handle);
    };
  }
  const handle = window.setTimeout(fn, 0);
  return () => window.clearTimeout(handle);
}

export function useDesignInteractive(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups: Array<() => void> = [];
    let cancelDeferred: (() => void) | null = null;

    // Pas d'IntersectionObserver sur `.reveal` : l'effet d'apparition au
    // défilement est neutralisé par responsive.css (`.reveal { opacity: 1 }`,
    // chargé après chaque page.css), pour que le contenu reste visible sans
    // JavaScript, à l'impression et en capture pleine page. Observer 56 à 364
    // nœuds par page ne produisait donc plus aucune animation — seulement du
    // travail de thread principal juste après l'hydratation.

    let faqSeq = 0;
    root.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector<HTMLElement>(".faq-q");
      const a = item.querySelector<HTMLElement>(".faq-a");
      if (!q) return;
      q.setAttribute("role", "button");
      q.setAttribute("tabindex", "0");
      const initiallyOpen = item.classList.contains("open");
      q.setAttribute("aria-expanded", initiallyOpen ? "true" : "false");
      if (a) {
        // Relation question ↔ réponse : sans aria-controls, un lecteur d'écran
        // ne sait pas quel bloc le bouton déplie.
        if (!a.id) {
          faqSeq += 1;
          let candidate = `faq-a-${faqSeq}`;
          while (document.getElementById(candidate)) {
            faqSeq += 1;
            candidate = `faq-a-${faqSeq}`;
          }
          a.id = candidate;
        }
        q.setAttribute("aria-controls", a.id);
        a.setAttribute("aria-hidden", initiallyOpen ? "false" : "true");
        a.toggleAttribute("inert", !initiallyOpen);
      }

      const toggle = () => {
        const wasOpen = item.classList.contains("open");
        root.querySelectorAll(".faq-item").forEach((x) => {
          x.classList.remove("open");
          x.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
          const answer = x.querySelector<HTMLElement>(".faq-a");
          answer?.setAttribute("aria-hidden", "true");
          answer?.setAttribute("inert", "");
        });
        if (!wasOpen) {
          item.classList.add("open");
          q.setAttribute("aria-expanded", "true");
          a?.setAttribute("aria-hidden", "false");
          a?.removeAttribute("inert");
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

    // Toggle thème clair/sombre (bouton injecté dans nav-html). Écrit la
    // même clé localStorage que le script d'initialisation du layout
    // ("theme") et bascule la classe .dark sur <html>.
    const staticThemeButtons = root.querySelectorAll<HTMLButtonElement>(
      "[data-theme-toggle]",
    );
    staticThemeButtons.forEach((btn) => {
      const onToggle = () => {
        const rect = btn.getBoundingClientRect();
        const dark = !document.documentElement.classList.contains("dark");
        toggleThemeWithReveal(
          { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
          () => applyTheme(dark),
        );
      };
      btn.addEventListener("click", onToggle);
      cleanups.push(() => btn.removeEventListener("click", onToggle));
    });

    // Les pages dont la navigation provient de nav-html n'embarquent pas le
    // composant ThemeToggle. Elles suivent tout de même un changement de thème
    // système en direct tant qu'aucun choix explicite n'est enregistré.
    if (staticThemeButtons.length > 0) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
      const onSystemThemeChange = () => {
        let storedTheme: string | null = null;
        try {
          storedTheme = window.localStorage.getItem("theme");
        } catch {
          /* stockage indisponible : le thème système reste la source */
        }
        if (storedTheme === "dark" || storedTheme === "light") return;
        applySystemTheme(systemTheme.matches);
      };
      systemTheme.addEventListener("change", onSystemThemeChange);
      cleanups.push(() =>
        systemTheme.removeEventListener("change", onSystemThemeChange),
      );
    }

    const nav = root.querySelector<HTMLElement>(".nav");
    const navCta = root.querySelector<HTMLElement>(".nav-cta");
    const navLinks = root.querySelector<HTMLElement>(".nav-links");
    const existingContactLink = navLinks?.querySelector<HTMLAnchorElement>(
      ':scope > a[href="/contact"]',
    );
    if (existingContactLink && window.location.pathname === "/contact") {
      existingContactLink.classList.add("active");
    }
    if (navLinks && !existingContactLink) {
      const contactLink = document.createElement("a");
      contactLink.href = "/contact";
      contactLink.textContent = "Contact";
      if (window.location.pathname === "/contact") contactLink.classList.add("active");
      navLinks.appendChild(contactLink);
      cleanups.push(() => contactLink.remove());
    }

    if (navLinks && !navLinks.querySelector(".nav-mobile-panel")) {
      const mobilePanel = document.createElement("div");
      mobilePanel.className = "nav-mobile-panel";

      const mobileEyebrow = document.createElement("span");
      mobileEyebrow.className = "nav-mobile-eyebrow";
      mobileEyebrow.textContent = "Prochaine étape";

      const mobileTitle = document.createElement("strong");
      mobileTitle.textContent = "Cadrer votre projet en 30 min.";

      const mobileText = document.createElement("p");
      mobileText.textContent = "Quelqu'un qui code vous répond, sans engagement.";

      const mobileActions = document.createElement("div");
      mobileActions.className = "nav-mobile-actions";

      const primaryAction = document.createElement("a");
      primaryAction.href = "/demarrer-un-projet";
      primaryAction.textContent = "Démarrer";

      const secondaryAction = document.createElement("a");
      secondaryAction.href = "/contact";
      secondaryAction.textContent = "Contact";

      mobileActions.append(primaryAction, secondaryAction);
      mobilePanel.append(mobileEyebrow, mobileTitle, mobileText, mobileActions);
      navLinks.prepend(mobilePanel);
      cleanups.push(() => mobilePanel.remove());
    }

    if (navLinks && !navLinks.querySelector(".nav-more")) {
      const secondaryLinks = Array.from(
        navLinks.querySelectorAll<HTMLAnchorElement>(":scope > a"),
      ).filter((link) =>
        ["Équipe", "Calculateur"].includes(link.textContent?.trim() || ""),
      );

      if (secondaryLinks.length >= 2) {
        const more = document.createElement("div");
        more.className = "nav-item nav-more";
        const movedLinks = [...secondaryLinks];

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "nav-trigger nav-more-trigger";
        trigger.setAttribute("aria-haspopup", "true");
        trigger.setAttribute("aria-expanded", "false");
        trigger.append("À consulter", makeChevron());

        const menu = document.createElement("div");
        menu.className = "nav-more-menu";

        secondaryLinks.forEach((link) => {
          const item = document.createElement("a");
          item.href = link.getAttribute("href") || link.href;
          item.textContent = link.textContent?.trim() || "";
          if (link.classList.contains("active")) item.classList.add("active");
          menu.appendChild(item);
          link.remove();
        });

        more.append(trigger, menu);
        const contact = navLinks.querySelector(':scope > a[href="/contact"]');
        if (contact) {
          navLinks.insertBefore(more, contact);
        } else {
          navLinks.appendChild(more);
        }

        const setMoreOpen = (open: boolean) => {
          more.classList.toggle("is-open", open);
          trigger.setAttribute("aria-expanded", open ? "true" : "false");
        };
        const onTriggerClick = (e: MouseEvent) => {
          e.stopPropagation();
          setMoreOpen(!more.classList.contains("is-open"));
        };
        const onDocClick = (e: MouseEvent) => {
          if (!more.contains(e.target as Node)) setMoreOpen(false);
        };
        const onEsc = (e: KeyboardEvent) => {
          if (e.key === "Escape") setMoreOpen(false);
        };
        trigger.addEventListener("click", onTriggerClick);
        document.addEventListener("click", onDocClick);
        document.addEventListener("keydown", onEsc);
        cleanups.push(() => {
          trigger.removeEventListener("click", onTriggerClick);
          document.removeEventListener("click", onDocClick);
          document.removeEventListener("keydown", onEsc);
          if (more.parentNode === navLinks) {
            movedLinks.forEach((link) => navLinks.insertBefore(link, more));
          }
          more.remove();
        });
      }
    }

    if (nav && navCta) {
      document.body.classList.remove("nav-menu-lock");
      document.documentElement.classList.remove("nav-menu-lock");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      let burger = navCta.querySelector<HTMLButtonElement>(".nav-burger");
      const createdBurger = !burger;
      if (!burger) {
        burger = document.createElement("button");
        burger.type = "button";
        burger.className = "nav-burger";
        navCta.appendChild(burger);
      }
      burger.setAttribute("aria-label", "Ouvrir le menu");
      burger.setAttribute("aria-expanded", "false");
      setBurgerIcon(burger, false);
      nav.classList.add("nav-ready");

      let lockedScrollY = 0;
      const closeMobileDropdowns = () => {
        nav.querySelectorAll<HTMLElement>(".nav-item-open").forEach((item) => {
          item.classList.remove("nav-item-open");
          item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
        });
      };
      const setScrollLock = (locked: boolean) => {
        if (locked) {
          lockedScrollY = window.scrollY;
          document.documentElement.classList.add("nav-menu-lock");
          document.body.classList.add("nav-menu-lock");
          document.body.style.position = "fixed";
          document.body.style.top = `-${lockedScrollY}px`;
          document.body.style.left = "0";
          document.body.style.right = "0";
          document.body.style.width = "100%";
          document.body.style.overflow = "hidden";
          return;
        }

        const restoreY = lockedScrollY;
        document.documentElement.classList.remove("nav-menu-lock");
        document.body.classList.remove("nav-menu-lock");
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        if (restoreY > 0) window.scrollTo(0, restoreY);
        lockedScrollY = 0;
      };
      const setOpen = (open: boolean) => {
        nav.classList.toggle("nav-open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
        setBurgerIcon(burger, open);
        setScrollLock(open);
        closeMobileDropdowns();
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
        const target = e.target as Element;
        if (target?.closest(".nav-trigger")) return;
        const a = target?.closest("a");
        if (a && nav.classList.contains("nav-open")) setOpen(false);
      };
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape" && nav.classList.contains("nav-open")) setOpen(false);
      };
      const onResize = () => {
        if (window.matchMedia("(min-width: 901px)").matches && nav.classList.contains("nav-open")) {
          setOpen(false);
        }
      };
      burger.addEventListener("click", onBurger);
      document.addEventListener("click", onDocClick);
      nav.addEventListener("click", onLinkClick);
      document.addEventListener("keydown", onEsc);
      window.addEventListener("resize", onResize);
      cleanups.push(() => {
        burger.removeEventListener("click", onBurger);
        document.removeEventListener("click", onDocClick);
        nav.removeEventListener("click", onLinkClick);
        document.removeEventListener("keydown", onEsc);
        window.removeEventListener("resize", onResize);
        setScrollLock(false);
        nav.classList.remove("nav-ready");
        if (createdBurger) burger.remove();
      });
    }

    // Hero founder-video button — logs intent until a real Loom URL is wired.
    const heroVideo = root.querySelector<HTMLButtonElement>("button.hero-video");
    if (heroVideo) {
      const onVideoClick: EventListener = () => {
        const url = heroVideo.dataset.loomUrl;
        if (url && url.includes("loom.com") && !url.endsWith("placeholder")) {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          alert(
            "Vidéo fondateur en cours de montage — elle sera publiée très prochainement. En attendant, réservez 30 min avec un expert pour le même message, en direct.",
          );
        }
      };
      heroVideo.addEventListener("click", onVideoClick);
      cleanups.push(() => heroVideo.removeEventListener("click", onVideoClick));
    }

    // ======================================================================
    // DEFERRED SETUP — page-specific widgets (scenarios, calculator, audit,
    // FAQ filters, verticals spotlight). On the homepage most of these find
    // nothing, but the querySelectorAll scans still walked the giant DOM and
    // blocked the main thread for ~200-500ms on mobile after first paint.
    // We push them to requestIdleCallback so the browser can paint and
    // respond to touch first.
    // ======================================================================
    const deferredSetup = () => {

    // Scenario toggle — used on service pages (SaaS .sa-scenarios, Outils internes .oi-scenarios,
    // E-commerce .ec-scenarios, Sites vitrines .sv-scenarios, SEO .seo-scenarios, Ads .ads-scenarios,
    // Contenu & vidéo .cv-scenarios, Maintenance & évolution .me-scenarios, Audit technique .at-scenarios).
    // Each container has data-active + child tabs [data-scenario] + panels [data-panel].
    const scenarioContainers = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".sa-scenarios, .oi-scenarios, .ec-scenarios, .sv-scenarios, .seo-scenarios, .ads-scenarios, .cv-scenarios, .me-scenarios, .at-scenarios",
      ),
    );
    scenarioContainers.forEach((scenarios) => {
      const prefix = scenarios.classList.contains("at-scenarios")
        ? "at"
        : scenarios.classList.contains("me-scenarios")
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

      const tabList = scenarios.querySelector<HTMLElement>("[role='tablist']");
      if (tabList && !tabList.hasAttribute("aria-label")) {
        tabList.setAttribute("aria-label", "Choisir un scénario");
      }
      tabs.forEach((tab) => {
        const key = tab.dataset.scenario;
        const panel = panels.find((item) => item.dataset.panel === key);
        if (!key || !panel) return;
        const tabId = `${prefix}-scenario-tab-${key}`;
        const panelId = `${prefix}-scenario-panel-${key}`;
        tab.id = tabId;
        tab.setAttribute("aria-controls", panelId);
        panel.id = panelId;
        panel.setAttribute("aria-labelledby", tabId);
      });

      const activate = (key: string) => {
        scenarios.dataset.active = key;
        tabs.forEach((t) => {
          const active = t.dataset.scenario === key;
          t.setAttribute("aria-selected", active ? "true" : "false");
          t.tabIndex = active ? 0 : -1;
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
          if (
            e.key === "ArrowRight" ||
            e.key === "ArrowLeft" ||
            e.key === "Home" ||
            e.key === "End"
          ) {
            e.preventDefault();
            const idx = tabs.indexOf(t);
            const next =
              e.key === "Home"
                ? tabs[0]
                : e.key === "End"
                  ? tabs[tabs.length - 1]
                  : e.key === "ArrowRight"
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

    // Outil interne — coût annuel du temps déclaré. Il s'agit d'une baseline
    // arithmétique, pas d'une promesse d'économies : 47 semaines travaillées/an.
    const roiCalc = root.querySelector<HTMLElement>(".roi-calc");
    if (roiCalc) {
      const people = roiCalc.querySelector<HTMLInputElement>("#roi-people");
      const hours = roiCalc.querySelector<HTMLInputElement>("#roi-hours");
      const cost = roiCalc.querySelector<HTMLInputElement>("#roi-cost");
      const peopleVal = roiCalc.querySelector<HTMLElement>("#roi-people-v");
      const hoursVal = roiCalc.querySelector<HTMLElement>("#roi-hours-v");
      const costVal = roiCalc.querySelector<HTMLElement>("#roi-cost-v");
      const total = roiCalc.querySelector<HTMLElement>("#roi-total");
      const monthly = roiCalc.querySelector<HTMLElement>("#roi-monthly");
      const fmt = (value: number) => Math.round(value).toLocaleString("fr-FR");
      const recompute = () => {
        const peopleNum = Number(people?.value || 0);
        const hoursNum = Number(hours?.value || 0);
        const costNum = Number(cost?.value || 0);
        const annualCost = peopleNum * hoursNum * costNum * 47;
        if (peopleVal) peopleVal.textContent = String(peopleNum);
        if (hoursVal) hoursVal.textContent = String(hoursNum);
        if (costVal) costVal.textContent = String(costNum);
        if (total) total.textContent = fmt(annualCost);
        if (monthly) monthly.textContent = fmt(annualCost / 12);
      };
      const inputs = [people, hours, cost].filter(
        (input): input is HTMLInputElement => Boolean(input),
      );
      inputs.forEach((input) => input.addEventListener("input", recompute));
      recompute();
      cleanups.push(() => {
        inputs.forEach((input) => input.removeEventListener("input", recompute));
      });
    }

    // GMV Calculator — used on /services/ecommerce to compare Shopify 3y TCO vs Hagnéré forfait.
    const calc = root.querySelector<HTMLElement>(".ec-calc");
    if (calc) {
      const license = calc.querySelector<HTMLInputElement>("#ec-calc-license");
      const gmv = calc.querySelector<HTMLInputElement>("#ec-calc-gmv");
      const apps = calc.querySelector<HTMLInputElement>("#ec-calc-apps");
      const fees = calc.querySelector<HTMLInputElement>("#ec-calc-fees");
      const licenseVal = calc.querySelector<HTMLElement>("#ec-calc-license-v");
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

      const recompute = () => {
        const licenseNum = parseInt(license?.value || "0", 10);
        const gmvNum = parseInt(gmv?.value || "0", 10);
        const appsNum = parseInt(apps?.value || "0", 10);
        const feesNum = parseFloat(fees?.value || "0");

        if (licenseVal) licenseVal.textContent = fmt(licenseNum);
        if (gmvVal) gmvVal.textContent = fmt(gmvNum);
        if (appsVal) appsVal.textContent = fmt(appsNum);
        if (feesVal)
          feesVal.textContent = feesNum.toFixed(1).replace(".", ",");

        const comparison = calculateEcommerceCostComparison({
          annualGmv: gmvNum,
          shopifyMonthlyLicense: licenseNum,
          shopifyMonthlyApps: appsNum,
          shopifyVariableFeePercent: feesNum,
        });

        if (shopifyTotal)
          shopifyTotal.textContent = fmt(comparison.shopifyTotal);
        if (hcTotal) hcTotal.textContent = fmt(comparison.hagnereTotal);

        if (diffAmount) {
          diffAmount.textContent = fmt(Math.abs(comparison.difference));
        }
        if (diffLabel) {
          diffLabel.textContent =
            comparison.difference >= 0
              ? "Écart en faveur du scénario Hagnéré"
              : "Écart en faveur du scénario Shopify";
        }

        if (breakevenLine) {
          if (
            comparison.difference > 0 &&
            comparison.breakEvenMonths !== null
          ) {
            if (months)
              months.textContent = String(comparison.breakEvenMonths);
            breakevenLine.style.display = "block";
          } else {
            breakevenLine.style.display = "none";
          }
        }
      };

      const onInput = () => recompute();
      const listeners: Array<[EventTarget, string, EventListener]> = [];
      if (license) {
        license.addEventListener("input", onInput);
        listeners.push([license, "input", onInput]);
      }
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

      recompute();
      cleanups.push(() => {
        listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
      });
    }

    // Mini-audit — 5 questions + scoring + priorities + email capture.
    // Used on /services/maintenance-evolution (.me-audit) and /services/audit-technique (.at-audit).
    const auditSection = root.querySelector<HTMLElement>(".me-audit, .at-audit");
    if (auditSection) {
      const box = auditSection.querySelector<HTMLElement>(".me-audit-box, .at-audit-box");
      const resultPanel = auditSection.querySelector<HTMLElement>("[data-audit-result]");
      const questions = Array.from(
        auditSection.querySelectorAll<HTMLElement>("[data-audit-q]"),
      );
      const currentLabel = auditSection.querySelector<HTMLElement>("[data-audit-current]");
      const fill = auditSection.querySelector<HTMLElement>("[data-audit-fill]");
      const prevBtn = auditSection.querySelector<HTMLButtonElement>("[data-audit-prev]");
      const nextBtn = auditSection.querySelector<HTMLButtonElement>("[data-audit-next]");
      const restartBtn = auditSection.querySelector<HTMLButtonElement>("[data-audit-restart]");

      if (box && questions.length === 5 && currentLabel && fill && prevBtn && nextBtn && resultPanel) {
        let step = 0;
        const answers: number[] = new Array(5).fill(-1);

        // Branche la logique du mini-audit selon la page (M&E vs audit-technique).
        const isAuditTech = auditSection.classList.contains("at-audit");

        // --- Config M&E : diagnostic "santé de votre app" sur /100 ---
        const meTopics = [
          "Monitoring d'erreurs",
          "Patch des CVE / dépendances",
          "Backups testés en restauration",
          "Procédure d'incident (runbook)",
          "Bus factor",
        ];
        const meRemediations = [
          "<b>Revoir la détection et l'alerte</b> selon les incidents redoutés, puis définir des objectifs mesurables adaptés à la criticité.",
          "<b>Documenter la politique de correctifs</b> : sources de veille, qualification, tests, délais cibles et procédure d'exception.",
          "<b>Tester une restauration</b> sur un environnement isolé et consigner le résultat avant de promettre un RPO ou un RTO.",
          "<b>Écrire les premiers runbooks</b> à partir des incidents réellement rencontrés, avec rôles, escalade et retour d'expérience.",
          "<b>Réduire la dépendance à une personne</b> par revue croisée, documentation et exercice de reprise par un autre intervenant.",
        ];

        // --- Config audit-technique : recommandation tier sur /160 ---
        const atTopics = [
          "Déclencheur de l'audit",
          "Enjeu business de la décision",
          "Timeline requise",
          "Destinataires du rapport",
          "Maturité actuelle de la tech",
        ];
        const atTierLabels = [
          "Format Express recommandé",
          "Format Standard recommandé",
          "Format Deep recommandé",
          "Format Tech DD M&A recommandé",
        ];
        const atTierVerdicts = [
          "Vos réponses orientent vers un besoin <b>ciblé</b>. Le périmètre, les preuves, les intervenants, le calendrier et les livrables restent à confirmer avant devis.",
          "Vos réponses orientent vers un audit <b>standard</b>. Les dimensions couvertes et le format de restitution sont définis après examen du contexte et des accès disponibles.",
          "Vos réponses orientent vers un audit <b>approfondi</b>. Les compétences, scénarios et travaux nécessaires sont précisés au devis selon la décision à sécuriser.",
          "Vos réponses évoquent une <b>due diligence technique</b>. Le périmètre, les conseils juridiques, la confidentialité et les intervenants habilités doivent être cadrés au cas par cas.",
        ];

        const questionTopics = isAuditTech ? atTopics : meTopics;
        const remediations = isAuditTech ? [] : meRemediations;

        const showStep = (s: number) => {
          step = s;
          questions.forEach((q, i) => q.classList.toggle("is-active", i === s));
          currentLabel.textContent = String(s + 1);
          fill.style.width = `${((s + 1) / 5) * 100}%`;
          prevBtn.disabled = s === 0;
          nextBtn.disabled = answers[s] === -1;
          nextBtn.innerHTML =
            s === 4
              ? `Voir mon score <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
              : `Question suivante <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
          box.dataset.auditStep = String(s);
        };

        const computeResult = () => {
          const total = answers.reduce((sum, v) => sum + (v < 0 ? 0 : v), 0);
          const badge = resultPanel.querySelector<HTMLElement>("[data-audit-badge]");
          const verdict = resultPanel.querySelector<HTMLElement>("[data-audit-verdict]");
          const scoreSmall = resultPanel.querySelector<HTMLElement>("[data-audit-score]");
          const scoreBig = resultPanel.querySelector<SVGTextElement>("[data-audit-score-big]");
          const prioritiesList = resultPanel.querySelector<HTMLElement>("[data-audit-priorities]");
          const arc = resultPanel.querySelector<SVGPathElement>("[data-audit-arc]");
          const needle = resultPanel.querySelector<SVGCircleElement>("[data-audit-needle]");

          if (scoreSmall) scoreSmall.textContent = String(total);
          if (scoreBig) scoreBig.textContent = String(total);

          let level = "healthy";
          let label = "Healthy";
          let verdictText = "Vos réponses ne signalent pas de faiblesse évidente dans ce questionnaire. Ce résultat ne remplace pas un audit ni une vérification des preuves.";

          if (isAuditTech) {
            // Scoring audit-technique (max 160) → recommande un tier
            let tierIdx = 1; // default Standard
            if (total < 50) {
              tierIdx = 0; // Express
              level = "healthy";
            } else if (total < 90) {
              tierIdx = 1; // Standard
              level = "healthy";
            } else if (total < 130) {
              tierIdx = 2; // Deep
              level = "attention";
            } else {
              tierIdx = 3; // Tech DD M&A
              level = "critical";
            }
            label = atTierLabels[tierIdx];
            verdictText = atTierVerdicts[tierIdx];
          } else if (total < 40) {
            level = "critical";
            label = "Remédiation urgente";
            verdictText = "Vos réponses font ressortir plusieurs sujets à vérifier rapidement. Le questionnaire ne permet pas, seul, de conclure sur la criticité réelle.";
          } else if (total < 70) {
            level = "attention";
            label = "Needs attention";
            verdictText = "Vos réponses font ressortir plusieurs zones à examiner. Les priorités ci-dessous servent de point de départ et doivent être validées sur pièces.";
          }
          if (badge) {
            badge.textContent = label;
            badge.dataset.level = level;
          }
          if (verdict) {
            // audit-tech verdicts contiennent du HTML (<b>), M&E verdicts sont du texte pur
            if (isAuditTech) {
              verdict.innerHTML = verdictText;
            } else {
              verdict.textContent = verdictText;
            }
          }

          // Gauge arc animation (scale /100 pour M&E, /160 pour audit-tech)
          const maxScore = isAuditTech ? 160 : 100;
          if (arc) {
            const pct = Math.min(maxScore, Math.max(0, total)) / maxScore;
            const length = 251;
            arc.style.transition = "stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
            arc.style.strokeDashoffset = String(length * (1 - pct));
          }
          if (needle) {
            const pct = Math.min(maxScore, Math.max(0, total)) / maxScore;
            const angle = Math.PI * (1 - pct);
            const cx = 100 + Math.cos(angle) * 80;
            const cy = 100 - Math.sin(angle) * 80;
            needle.style.transition = "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
            needle.setAttribute("cx", String(cx));
            needle.setAttribute("cy", String(cy));
          }

          // Résultats : "Pourquoi ce format" pour audit-tech, "Top 3 priorités" pour M&E
          if (prioritiesList) {
            if (isAuditTech) {
              // Afficher les 5 critères avec la valeur sélectionnée, expliquant le tier
              const criteriaExplainer = answers.map((v, i) => {
                const weight = v >= 25 ? "fort" : v >= 15 ? "moyen" : "faible";
                return `<li><div><b>${questionTopics[i]}</b><br>Poids ${weight} dans votre profil · contribue à ${v} pts.</div></li>`;
              });
              prioritiesList.innerHTML = criteriaExplainer.join("");
            } else {
              // Top 3 priorities = 3 lowest-scoring questions (M&E)
              const scored = answers.map((v, i) => ({ v, i, topic: questionTopics[i], rem: remediations[i] }));
              scored.sort((a, b) => a.v - b.v);
              const top3 = scored.slice(0, 3).filter((s) => s.v < 20);
              prioritiesList.innerHTML = top3.length
                ? top3.map((s) => `<li><div><b>${s.topic}</b><br>${s.rem}</div></li>`).join("")
                : `<li><div><b>Aucun signal faible dans ces cinq réponses</b><br>Vérifiez néanmoins les preuves, les tests de restauration et les incidents réels avant de conclure.</div></li>`;
            }
          }

          box.hidden = true;
          resultPanel.hidden = false;
          setTimeout(() => resultPanel.classList.add("in"), 20);
        };

        // Radio listener per question
        questions.forEach((qEl, qIdx) => {
          const radios = Array.from(qEl.querySelectorAll<HTMLInputElement>("[data-audit-answer]"));
          radios.forEach((r) => {
            const onChange = () => {
              answers[qIdx] = parseInt(r.value, 10);
              nextBtn.disabled = false;
            };
            r.addEventListener("change", onChange);
            cleanups.push(() => r.removeEventListener("change", onChange));
          });
        });

        const onPrev = () => {
          if (step > 0) showStep(step - 1);
        };
        const onNext = () => {
          if (answers[step] === -1) return;
          if (step < 4) showStep(step + 1);
          else computeResult();
        };
        const onRestart = () => {
          answers.fill(-1);
          questions.forEach((q) => {
            q.querySelectorAll<HTMLInputElement>("input[type=radio]").forEach((r) => {
              r.checked = false;
            });
          });
          resultPanel.hidden = true;
          box.hidden = false;
          showStep(0);
        };

        prevBtn.addEventListener("click", onPrev);
        nextBtn.addEventListener("click", onNext);
        if (restartBtn) restartBtn.addEventListener("click", onRestart);
        cleanups.push(() => {
          prevBtn.removeEventListener("click", onPrev);
          nextBtn.removeEventListener("click", onNext);
          if (restartBtn) restartBtn.removeEventListener("click", onRestart);
        });

        // Init
        showStep(0);
      }
    }

    // FAQ persona filters — used on service pages that tag faq-items with data-persona.
    const faqFilterContainers = Array.from(
      root.querySelectorAll<HTMLElement>(".me-faq-filters, .at-faq-filters"),
    );
    faqFilterContainers.forEach((container) => {
      const buttons = Array.from(
        container.querySelectorAll<HTMLButtonElement>(".me-faq-filter, .at-faq-filter"),
      );
      // Find the nearest .faq-list within the same faq section
      const section = container.closest<HTMLElement>(".faq");
      const list = section?.querySelector<HTMLElement>(".faq-list");
      if (!list) return;
      buttons.forEach((btn) => {
        const onClick = () => {
          const key = btn.dataset.faqFilter || "all";
          list.dataset.faqFilter = key;
          buttons.forEach((b) => {
            const active = b === btn;
            b.classList.toggle("is-active", active);
            b.setAttribute("aria-pressed", active ? "true" : "false");
          });
        };
        btn.addEventListener("click", onClick);
        cleanups.push(() => btn.removeEventListener("click", onClick));
      });
    });

    // Verticals cards — cursor-follow spotlight via --mx / --my CSS vars.
    // Updates throttled to rAF; listener only active while pointer is over the card.
    const vtCards = Array.from(root.querySelectorAll<HTMLElement>(".vt-card"));
    if (vtCards.length && !window.matchMedia("(hover: none)").matches) {
      vtCards.forEach((card) => {
        let frame = 0;
        let pendingX = 0;
        let pendingY = 0;

        const flush = () => {
          frame = 0;
          card.style.setProperty("--mx", `${pendingX}px`);
          card.style.setProperty("--my", `${pendingY}px`);
        };
        const onMove = (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          pendingX = e.clientX - rect.left;
          pendingY = e.clientY - rect.top;
          if (!frame) frame = requestAnimationFrame(flush);
        };
        card.addEventListener("pointermove", onMove);
        cleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          if (frame) cancelAnimationFrame(frame);
        });
      });
    }

    }; // end deferredSetup
    cancelDeferred = runWhenIdle(deferredSetup);

    const navDropdownItems = Array.from(
      root.querySelectorAll<HTMLElement>(".nav-item"),
    ).filter((item) => item.querySelector(".nav-dd"));

    const closeAllNavDropdowns = () => {
      navDropdownItems.forEach((item) => {
        item.classList.remove("nav-item-open");
        item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
      });
    };

    navDropdownItems.forEach((navItem) => {
      const navTrigger = navItem.querySelector<HTMLElement>(".nav-trigger");
      if (!navTrigger) return;
      navTrigger.setAttribute("aria-expanded", "false");

      // Le click toggle l'état "ouvert" sur toutes les tailles d'écran.
      // Sur desktop, l'utilisateur peut hover OU cliquer (la CSS gère les deux états).
      const onTriggerClick: EventListener = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const willOpen = !navItem.classList.contains("nav-item-open");
        closeAllNavDropdowns();
        navItem.classList.toggle("nav-item-open", willOpen);
        navTrigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
      };
      navTrigger.addEventListener("click", onTriggerClick);
      cleanups.push(() => navTrigger.removeEventListener("click", onTriggerClick));
    });

    // Click hors du dropdown → ferme + Escape → ferme
    if (navDropdownItems.length) {
      const onDocClickClose = (e: MouseEvent) => {
        const target = e.target as Node;
        const insideOpen = navDropdownItems.some(
          (item) => item.classList.contains("nav-item-open") && item.contains(target),
        );
        if (!insideOpen) closeAllNavDropdowns();
      };
      const onEscClose = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeAllNavDropdowns();
      };
      document.addEventListener("click", onDocClickClose);
      document.addEventListener("keydown", onEscClose);
      cleanups.push(() => {
        document.removeEventListener("click", onDocClickClose);
        document.removeEventListener("keydown", onEscClose);
      });
    }

    // ----- New pill + mega-menu (.hc-nav) ---------------------------------
    // Wires hover/click to open the panel, hover on a left-sidebar category
    // to swap the right pane, and outside-click + Escape to close.
    root.querySelectorAll<HTMLElement>("[data-mega-root]").forEach((megaRoot) => {
      const trigger = megaRoot.querySelector<HTMLElement>("[data-mega-trigger]");
      const panel = megaRoot.querySelector<HTMLElement>("[data-mega-panel]");
      if (!trigger || !panel) return;

      const cats = Array.from(megaRoot.querySelectorAll<HTMLElement>(".hc-mega-cat[data-cat]"));
      const panes = Array.from(megaRoot.querySelectorAll<HTMLElement>(".hc-mega-pane[data-pane]"));

      // Sous 720 px la feuille est en position:fixed : sans verrou, la page
      // continue de défiler derrière elle dès qu'un geste démarre hors du
      // panneau. Le verrou est conditionné au tactile pour ne pas provoquer de
      // saut de barre de défilement sur desktop.
      const isMobileSheet = () =>
        typeof window.matchMedia === "function" &&
        window.matchMedia("(max-width: 720px)").matches;
      const setScrollLock = (locked: boolean) => {
        document.documentElement.classList.toggle("nav-menu-lock", locked);
        document.body.classList.toggle("nav-menu-lock", locked);
      };

      const setOpen = (open: boolean) => {
        if (!open && panel.contains(document.activeElement)) trigger.focus();
        megaRoot.dataset.megaOpen = open ? "true" : "false";
        trigger.setAttribute("aria-expanded", open ? "true" : "false");
        panel.setAttribute("aria-hidden", open ? "false" : "true");
        panel.toggleAttribute("inert", !open);
        setScrollLock(open && isMobileSheet());
      };
      const setActive = (cat: string) => {
        cats.forEach((c) => {
          const active = c.dataset.cat === cat;
          c.classList.toggle("is-active", active);
          c.setAttribute("aria-pressed", active ? "true" : "false");
        });
        panes.forEach((p) => {
          const active = p.dataset.pane === cat;
          p.classList.toggle("is-active", active);
          p.setAttribute("aria-hidden", active ? "false" : "true");
        });
      };

      // Default: first category active
      const initial = cats[0]?.dataset.cat;
      if (initial) setActive(initial);

      // Hover: open on enter, close on leave (with grace delay)
      let closeTimer: number | undefined;
      const cancelClose = () => {
        if (closeTimer !== undefined) {
          window.clearTimeout(closeTimer);
          closeTimer = undefined;
        }
      };
      const scheduleClose = () => {
        cancelClose();
        closeTimer = window.setTimeout(() => setOpen(false), 120);
      };
      // Hover open/close — only on devices that actually support hover
      // (desktop pointers). On touch devices, tapping fires synthetic
      // mouseenter+click events which would open then immediately toggle
      // closed, making the menu unusable.
      const hoverSupported =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const onMouseEnter = () => {
        cancelClose();
        setOpen(true);
      };
      if (hoverSupported) {
        megaRoot.addEventListener("mouseenter", onMouseEnter);
        megaRoot.addEventListener("mouseleave", scheduleClose);
      }

      // Click on trigger toggles (mobile-friendly)
      const onTriggerClick = (e: MouseEvent) => {
        e.preventDefault();
        const willOpen = megaRoot.dataset.megaOpen !== "true";
        setOpen(willOpen);
      };
      trigger.addEventListener("click", onTriggerClick);

      // Hover/focus/click on a category swaps the right pane.
      // Click is required on touch devices (mouseenter doesn't fire from a tap).
      cats.forEach((cat) => {
        const cl = () => {
          const c = cat.dataset.cat;
          if (c) setActive(c);
        };
        const onClick = (e: MouseEvent) => {
          e.preventDefault();
          cl();
          if (window.matchMedia("(max-width: 720px)").matches) {
            const content = panel.querySelector<HTMLElement>(".hc-mega-content");
            if (content) {
              panel.scrollTo({
                top: content.offsetTop,
                behavior: "smooth",
              });
            }
          }
        };
        cat.addEventListener("mouseenter", cl);
        cat.addEventListener("focus", cl);
        cat.addEventListener("click", onClick);
        cleanups.push(() => {
          cat.removeEventListener("mouseenter", cl);
          cat.removeEventListener("focus", cl);
          cat.removeEventListener("click", onClick);
        });
      });

      // Outside click closes
      const onDocClick = (e: MouseEvent) => {
        if (!megaRoot.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener("click", onDocClick);

      // Escape closes
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);

      cleanups.push(() => {
        trigger.removeEventListener("click", onTriggerClick);
        if (hoverSupported) {
          megaRoot.removeEventListener("mouseenter", onMouseEnter);
          megaRoot.removeEventListener("mouseleave", scheduleClose);
        }
        document.removeEventListener("click", onDocClick);
        document.removeEventListener("keydown", onKey);
        cancelClose();
        setScrollLock(false);
      });
    });

    return () => {
      if (cancelDeferred) cancelDeferred();
      cleanups.forEach((fn) => fn());
    };
  }, [rootRef]);
}
