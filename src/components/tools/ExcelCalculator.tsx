"use client";

import Link from "next/link";
import { useMemo, useRef, useState, type FormEvent } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { MainNav } from "@/components/design-shared/MainNav";
import {
  MathChallenge,
  isMathAnswerCorrect,
  toMathChallengePayload,
  type MathChallengeValue,
} from "@/components/project-funnel/MathChallenge";
import "./excel-calculator.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/site-footer.css";

type CaptureStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const CUSTOM_TOOL_BASE_COST = 28000; // référence forfait standard
const AMORTIZATION_YEARS = 3;

function euro(n: number): string {
  return n.toLocaleString("fr-FR", {
    maximumFractionDigits: 0,
  }) + " €";
}

export function ExcelCalculator() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  // --- Inputs
  const [people, setPeople] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [avgSalary, setAvgSalary] = useState(45000); // brut annuel chargé
  const [errorRate, setErrorRate] = useState(15); // % d'erreurs Excel estimé
  const [errorCostPerIncident, setErrorCostPerIncident] = useState(250);

  // --- Derived calculations
  const result = useMemo(() => {
    // 1 salaire brut chargé → coût horaire (45 k€ / 1600h productives réelles)
    const hourlyCost = avgSalary / 1600;
    // Coût annuel temps perdu
    const timeYearCost = Math.round(hoursPerWeek * 48 * people * hourlyCost);
    // Nombre d'incidents estimés / an (1 incident pour chaque N heures passées selon taux)
    const incidentsPerYear = Math.round(
      ((hoursPerWeek * 48 * people) * (errorRate / 100)) / 10,
    );
    const errorYearCost = incidentsPerYear * errorCostPerIncident;
    const totalYearCost = timeYearCost + errorYearCost;
    const totalThreeYears = totalYearCost * AMORTIZATION_YEARS;
    const customToolCost = CUSTOM_TOOL_BASE_COST;
    const savingsOverToolCost = totalThreeYears - customToolCost;
    const roiMonths = customToolCost / Math.max(totalYearCost, 1) * 12;
    return {
      hourlyCost: Math.round(hourlyCost),
      timeYearCost,
      incidentsPerYear,
      errorYearCost,
      totalYearCost,
      totalThreeYears,
      customToolCost,
      savingsOverToolCost,
      roiMonths: Math.round(roiMonths),
    };
  }, [people, hoursPerWeek, avgSalary, errorRate, errorCostPerIncident]);

  // --- Email capture
  const [status, setStatus] = useState<CaptureStatus>({ kind: "idle" });
  // Anti-bot maison : question de calcul, vérifiée côté client avant envoi
  // puis revalidée server-side par /api/project-inquiry.
  const [math, setMath] = useState<MathChallengeValue | null>(null);

  async function onCapture(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const firstName = String(data.get("firstName") || "").trim();
    const company = String(data.get("company") || "").trim();

    if (!firstName || !company || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus({
        kind: "error",
        message: "Merci de remplir prénom, email pro et entreprise.",
      });
      return;
    }

    if (!isMathAnswerCorrect(math)) {
      setStatus({
        kind: "error",
        message: "La réponse au calcul anti-robot est incorrecte — recomptez.",
      });
      return;
    }

    setStatus({ kind: "submitting" });

    const message = [
      "[Calculateur coût Excel — rapport demandé]",
      "",
      `Hypothèses entrées par l'utilisateur :`,
      `· Personnes concernées : ${people}`,
      `· Heures/semaine perdues : ${hoursPerWeek}`,
      `· Salaire moyen annuel : ${euro(avgSalary)}`,
      `· Taux d'erreur estimé : ${errorRate}%`,
      `· Coût moyen par incident : ${euro(errorCostPerIncident)}`,
      "",
      `Résultat calculé :`,
      `· Coût annuel temps perdu : ${euro(result.timeYearCost)}`,
      `· Coût annuel incidents : ${euro(result.errorYearCost)}`,
      `· Total annuel : ${euro(result.totalYearCost)}`,
      `· Total sur 3 ans : ${euro(result.totalThreeYears)}`,
      `· Gain net vs outil sur mesure (${euro(CUSTOM_TOOL_BASE_COST)}) : ${euro(result.savingsOverToolCost)}`,
      `· ROI outil sur mesure : ${result.roiMonths} mois`,
    ].join("\n");

    try {
      const res = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName: "— (calculateur)",
          email,
          company,
          budget: result.totalYearCost > 20000 ? "15-30k" : "< 15k",
          message,
          mathChallenge: toMathChallengePayload(math),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus({ kind: "success" });
    } catch {
      setStatus({
        kind: "error",
        message:
          "Envoi impossible pour le moment. Réessayez ou écrivez-nous à quentin@hagnere-patrimoine.fr.",
      });
    }
  }

  // --- UI
  return (
    <div ref={rootRef} className="hc-design calc-root">
      <MainNav />

      {/* Hero */}
      <section className="calc-hero">
        <div className="wrap calc-hero-inner">
          <div className="calc-pill">
            <span className="dot" /> Outil · 100 % gratuit · 2 min
          </div>
          <h1>
            Combien vous coûte<br />
            <span className="calc-accent">réellement</span> votre Excel ?
          </h1>
          <p>
            Calculez en 2 minutes le coût caché de vos tableurs métier : temps
            perdu, erreurs de saisie, ressaisies. Comparez avec le prix d&apos;un
            outil sur mesure et obtenez votre ROI en mois.
          </p>
          <div className="calc-hero-meta">
            <span>✓ Aucun email obligatoire pour le calcul</span>
            <span className="sep" />
            <span>✓ Rapport PDF sur demande</span>
            <span className="sep" />
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="calc-main">
        <div className="wrap calc-grid">
          {/* Inputs */}
          <div className="calc-inputs">
            <div className="calc-card">
              <div className="calc-card-head">
                <div className="calc-card-kind">VOS HYPOTHÈSES</div>
                <div className="calc-card-title">Ajustez, le résultat bouge en direct</div>
              </div>

              <div className="calc-field">
                <label>
                  <span>Personnes concernées par ces Excel</span>
                  <b className="calc-val">{people}</b>
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                />
                <div className="calc-range-meta">
                  <span>1</span>
                  <span>30+</span>
                </div>
              </div>

              <div className="calc-field">
                <label>
                  <span>Heures par semaine perdues (par personne)</span>
                  <b className="calc-val">{hoursPerWeek} h</b>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                />
                <div className="calc-range-meta">
                  <span>1 h</span>
                  <span>20 h</span>
                </div>
              </div>

              <div className="calc-field">
                <label>
                  <span>Salaire brut chargé moyen</span>
                  <b className="calc-val">{euro(avgSalary)} / an</b>
                </label>
                <input
                  type="range"
                  min="25000"
                  max="120000"
                  step="2500"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                />
                <div className="calc-range-meta">
                  <span>25 k€</span>
                  <span>120 k€+</span>
                </div>
              </div>

              <div className="calc-field">
                <label>
                  <span>Taux d&apos;erreur dans ces fichiers (estimé)</span>
                  <b className="calc-val">{errorRate} %</b>
                </label>
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={errorRate}
                  onChange={(e) => setErrorRate(Number(e.target.value))}
                />
                <div className="calc-range-meta">
                  <span>0 %</span>
                  <span>40 %</span>
                </div>
              </div>

              <div className="calc-field">
                <label>
                  <span>Coût moyen d&apos;un incident causé par l&apos;Excel</span>
                  <b className="calc-val">{euro(errorCostPerIncident)}</b>
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={errorCostPerIncident}
                  onChange={(e) =>
                    setErrorCostPerIncident(Number(e.target.value))
                  }
                />
                <div className="calc-range-meta">
                  <span>0 €</span>
                  <span>2 000 €</span>
                </div>
              </div>

              <details className="calc-details">
                <summary>Comment on calcule</summary>
                <ul>
                  <li>
                    <b>Temps perdu</b> = heures × 48 semaines × personnes ×
                    coût horaire (salaire / 1 600 h productives)
                  </li>
                  <li>
                    <b>Incidents</b> = 1 incident tous les 10 heures Excel pondéré
                    par le taux d&apos;erreur
                  </li>
                  <li>
                    <b>Comparatif outil sur mesure</b> : forfait standard
                    Hagnéré Code {euro(CUSTOM_TOOL_BASE_COST)} amorti sur 3 ans
                  </li>
                </ul>
              </details>
            </div>
          </div>

          {/* Results */}
          <aside className="calc-results">
            <div className="calc-res-card">
              <div className="calc-res-kind">COÛT ANNUEL ESTIMÉ</div>
              <div className="calc-res-big">{euro(result.totalYearCost)}</div>
              <div className="calc-res-sub">par an · rien que pour ces Excel</div>
              <div className="calc-res-bd">
                <div className="calc-res-row">
                  <span>Temps perdu équipe</span>
                  <b>{euro(result.timeYearCost)}</b>
                </div>
                <div className="calc-res-row">
                  <span>Incidents &amp; ressaisies</span>
                  <b>{euro(result.errorYearCost)}</b>
                </div>
              </div>
            </div>

            <div className="calc-res-card calc-res-dark">
              <div className="calc-res-kind on-dark">SUR 3 ANS</div>
              <div className="calc-res-big">{euro(result.totalThreeYears)}</div>
              <div className="calc-res-sub on-dark">
                C&apos;est ce que coûte le statu quo
              </div>
            </div>

            <div className="calc-res-compare">
              <div className="calc-res-compare-head">
                <div className="calc-res-compare-kind">VS OUTIL SUR MESURE</div>
                <div className="calc-res-compare-title">
                  Forfait standard Hagnéré Code
                </div>
              </div>
              <div className="calc-res-compare-price">{euro(CUSTOM_TOOL_BASE_COST)}</div>
              <div className="calc-res-compare-meta">
                Livré en 5-10 semaines · forfait fixe · code à vous
              </div>

              <div
                className={
                  "calc-res-savings" +
                  (result.savingsOverToolCost > 0 ? "" : " is-neutral")
                }
              >
                <div className="calc-res-savings-kind">
                  {result.savingsOverToolCost > 0 ? "GAIN NET SUR 3 ANS" : "ÉCART"}
                </div>
                <div
                  className={
                    "calc-res-savings-big " +
                    (result.savingsOverToolCost > 0 ? "good" : "neutral")
                  }
                >
                  {result.savingsOverToolCost > 0 ? "+ " : ""}
                  {euro(Math.abs(result.savingsOverToolCost))}
                </div>
                <div className="calc-res-savings-roi">
                  ROI estimé : <b>{result.roiMonths} mois</b>
                </div>
              </div>
            </div>

            {/* Capture form */}
            <form className="calc-capture" onSubmit={onCapture}>
              <div className="calc-capture-head">
                <div className="calc-card-kind">RECEVOIR LE RAPPORT</div>
                <div className="calc-card-title">PDF + créneau 30 min offert</div>
                <p>
                  Vos hypothèses + nos 3 recommandations personnalisées,
                  envoyées sous 24 h ouvrées. Sans engagement.
                </p>
              </div>

              <label className="calc-capture-field">
                <span>Prénom</span>
                <input name="firstName" type="text" required autoComplete="given-name" />
              </label>
              <label className="calc-capture-field">
                <span>Email pro</span>
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label className="calc-capture-field">
                <span>Entreprise</span>
                <input name="company" type="text" required autoComplete="organization" />
              </label>

              {/* Anti-bot maison : question de calcul (remplace Turnstile). */}
              <MathChallenge
                className="calc-capture-field"
                onChange={setMath}
              />

              <button
                type="submit"
                className="btn btn-accent btn-lg calc-capture-submit"
                disabled={status.kind === "submitting"}
              >
                {status.kind === "submitting"
                  ? "Envoi en cours…"
                  : "Recevoir le rapport"}
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              {status.kind === "success" && (
                <div className="calc-alert calc-alert-ok">
                  ✓ Demande reçue. Notre équipe vous envoie le rapport sous 24 h ouvrées.
                </div>
              )}
              {status.kind === "error" && (
                <div className="calc-alert calc-alert-err">✕ {status.message}</div>
              )}

              <p className="calc-capture-legal">
                Aucune newsletter automatique. Email uniquement pour le rapport
                et un éventuel suivi humain.
              </p>
            </form>
          </aside>
        </div>
      </section>

      {/* Context & caveats */}
      <section className="calc-context">
        <div className="wrap">
          <div className="calc-context-grid">
            <div>
              <div className="eyebrow">— Pour cadrer</div>
              <h2>Ce que ce calculateur ne dit pas.</h2>
              <p>
                Un{" "}
                <Link
                  href="/services/outils-internes-sur-mesure"
                  style={{ textDecoration: "underline" }}
                >
                  outil sur mesure
                </Link>{" "}
                ne remplace pas l&apos;Excel par magie. Il y a
                des coûts et des risques que ce calcul n&apos;intègre pas
                volontairement, et qu&apos;on préfère discuter honnêtement avant
                signature.
              </p>
              <p>
                Avant de chiffrer une reconstruction, faites aussi le{" "}
                <Link
                  href="/guides/transformer-excel-en-application"
                  style={{ textDecoration: "underline" }}
                >
                  diagnostic Excel vers application
                </Link>{" "}
                : il peut recommander de fiabiliser le fichier ou d&apos;acheter un
                logiciel existant plutôt que de développer.
              </p>
            </div>
            <div className="calc-context-list">
              <div className="calc-context-item">
                <div className="calc-context-item-num">⚠️</div>
                <div>
                  <b>Adoption par l&apos;équipe</b> — un outil bien conçu, mal
                  déployé, échoue. Notre forfait inclut la formation et
                  l&apos;accompagnement au changement.
                </div>
              </div>
              <div className="calc-context-item">
                <div className="calc-context-item-num">⚠️</div>
                <div>
                  <b>Migration des données</b> — vos Excel actuels doivent
                  entrer dans le nouvel outil. Comptez 5 à 15% du budget
                  projet, déjà inclus dans nos forfaits.
                </div>
              </div>
              <div className="calc-context-item">
                <div className="calc-context-item-num">⚠️</div>
                <div>
                  <b>Maintenance &amp; évolution</b> — un outil vit. 8 à 15% du
                  coût initial en forfait annuel couvre hébergement, mises à
                  jour de sécurité, petites évolutions.
                </div>
              </div>
              <div className="calc-context-item">
                <div className="calc-context-item-num">⚠️</div>
                <div>
                  <b>Le bon moment</b> — parfois, garder Excel 6 mois de plus
                  est la décision la plus économique. On vous le dira si c&apos;est
                  le cas.
                </div>
              </div>
            </div>
          </div>

          <div className="calc-cta-back">
            <Link href="/demarrer-un-projet" className="btn btn-primary btn-lg">
              Parler de mon projet avec un expert
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
