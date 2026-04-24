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
      const emailForm = auditSection.querySelector<HTMLFormElement>("[data-audit-email-form]");
      const emailInput = auditSection.querySelector<HTMLInputElement>("[data-audit-email]");
      const emailAck = auditSection.querySelector<HTMLElement>("[data-audit-email-ack]");

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
          "<b>Brancher Sentry + Better Stack + Grafana</b> dans les 14 premiers jours. Alertes Slack contextualisées, pas du bruit. MTTD médian cible : 2-4 min.",
          "<b>Activer Dependabot + Snyk + auto-merge mineurs</b> sous CI verte. CVE critiques patchés sous 48 h, majors en revue humaine.",
          "<b>Tester les backups en restauration chaque trimestre</b> sur environnement isolé. Runbook DR versionné. RPO 15 min · RTO 1 h.",
          "<b>Écrire runbooks par type d'incident</b> + astreinte PagerDuty + post-mortem sous 72 h sans blame. MTTR divisé par 3.",
          "<b>Binôme obligatoire dès J+1</b> + documentation vivante (Notion + Loom) + onboarding reproductible. Bus factor ≥ 2.",
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
          "Express recommandé · 8 000 €",
          "Standard recommandé · 18 000 €",
          "Deep recommandé · 38 000 €",
          "Tech DD M&A recommandé · 68 000 €",
        ];
        const atTierVerdicts = [
          "Vos réponses indiquent un besoin <b>rapide et ciblé</b>. Format Express 3-5 jours, 1 senior, livrable Notion + Loom. Démarrage sous 3 j ouvrés. <b>8 000 € HT fixe</b>.",
          "Vos réponses indiquent un besoin <b>complet board-ready</b>. Format Standard 10 jours ouvrés, 2 seniors + associé-lead, 8 dimensions couvertes, Tech Debt P&L chiffré, deck 12-18 slides. <b>18 000 € HT fixe</b>.",
          "Vos réponses indiquent une <b>décision majeure en jeu</b> (levée, refonte &gt; 500 k€, compliance). Format Deep 15-20 jours, 3 seniors + architecte + associé, rapport 60-80 pages, 3 scenarios chiffrés sur 3 ans. <b>38 000 € HT fixe</b>.",
          "Vos réponses indiquent une <b>Tech Due Diligence M&amp;A</b>. Format Tech DD M&A 20-30 jours, 4 personnes dédiées + coordination avocats, rapport 80-120 pages, analyse licences OSS + IP, attorney-client privilege. <b>68 000 € HT fixe</b>.",
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
          let verdictText = "Votre app est globalement en bonne santé. Quelques points à consolider pour passer de « bon » à « excellent ».";

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
            verdictText = "Votre app est en fragilité critique sur plusieurs axes. Un audit complet + plan de remédiation sur 6-12 mois est vivement recommandé.";
          } else if (total < 70) {
            level = "attention";
            label = "Needs attention";
            verdictText = "Votre app tient, mais plusieurs zones méritent une reprise en main. Les 3 priorités ci-dessous feront la différence en 3 mois.";
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
                : `<li><div><b>Tout est vert</b><br>Félicitations — votre setup M&E est au niveau des meilleures pratiques 2026. Gardez le cap.</div></li>`;
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
          if (emailAck) emailAck.hidden = true;
          if (emailInput) emailInput.value = "";
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

        // Email capture (placeholder — TODO: wire to Resend endpoint)
        if (emailForm && emailInput && emailAck) {
          const onSubmit = (e: Event) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
            // Persist locally for now; real impl will POST to /api/audit-report
            try {
              localStorage.setItem("me-audit-email", email);
              localStorage.setItem(
                "me-audit-score",
                JSON.stringify({ answers, ts: Date.now() }),
              );
            } catch {}
            emailAck.hidden = false;
          };
          emailForm.addEventListener("submit", onSubmit);
          cleanups.push(() => emailForm.removeEventListener("submit", onSubmit));
        }

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
            b.setAttribute("aria-selected", active ? "true" : "false");
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
