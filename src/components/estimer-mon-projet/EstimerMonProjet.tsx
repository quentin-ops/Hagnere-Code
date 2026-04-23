"use client";

import { useEffect, useRef, useState } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import {
  PROJECT_TYPE_LABELS,
  PROJECT_TYPES,
  URGENCY_LABELS,
  URGENCY_LEVELS,
  FEATURE_OPTIONS,
  INTEGRATION_OPTIONS,
  type CalculatorInput,
  type EstimateApiResponse,
  type EstimateResult,
  type ProjectType,
  type UrgencyLevel,
  type FeatureId,
  type IntegrationId,
} from "./types";
import { CalculatorNav } from "./CalculatorNav";
import { ResultView } from "./ResultView";
import "./calculator.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const STORAGE_KEY = "hc-estimate-draft-v1";
const TOTAL_STEPS = 7;

type WizardState = {
  projectType: ProjectType | "";
  screensCount: number;
  usersCount: "small" | "medium" | "large" | "huge";
  features: FeatureId[];
  integrations: IntegrationId[];
  urgency: UrgencyLevel | "";
  description: string;
  email: string;
  firstName: string;
  company: string;
};

const INITIAL: WizardState = {
  projectType: "",
  screensCount: 8,
  usersCount: "small",
  features: [],
  integrations: [],
  urgency: "",
  description: "",
  email: "",
  firstName: "",
  company: "",
};

type FetchStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "success"; result: EstimateResult; tokensUsed: number };

export function EstimerMonProjet() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const [step, setStep] = useState(0);
  const [state, setState] = useState<WizardState>(INITIAL);
  const [status, setStatus] = useState<FetchStatus>({ kind: "idle" });

  // Restore draft from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<WizardState>;
      setState((prev) => ({ ...prev, ...parsed }));
    } catch {
      /* ignore corrupt drafts */
    }
  }, []);

  // Save draft on every change (except contact info, which is sensitive)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (status.kind === "success") return; // don't persist after success
    const { email, firstName, company, ...persisted } = state;
    void email;
    void firstName;
    void company;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
    } catch {
      /* localStorage may be full or disabled */
    }
  }, [state, status.kind]);

  function update<K extends keyof WizardState>(key: K, value: WizardState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function toggleArray<T extends string>(arr: T[], value: T): T[] {
    return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
  }

  // Step validation — gates the "next" button
  function canAdvance(currentStep: number): boolean {
    switch (currentStep) {
      case 0:
        return state.projectType !== "";
      case 1:
        return state.screensCount >= 1 && Boolean(state.usersCount);
      case 2:
        return true; // features optional
      case 3:
        return true; // integrations optional
      case 4:
        return state.urgency !== "";
      case 5:
        return state.description.trim().length >= 50;
      case 6:
        return true; // contact optional
      default:
        return false;
    }
  }

  function next() {
    if (!canAdvance(step)) return;
    if (step < TOTAL_STEPS - 1) setStep(step + 1);
    else void submit();
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  async function submit() {
    setStatus({ kind: "loading" });
    try {
      const payload: CalculatorInput = {
        projectType: state.projectType as ProjectType,
        screensCount: state.screensCount,
        usersCount: state.usersCount,
        features: state.features,
        integrations: state.integrations,
        urgency: state.urgency as UrgencyLevel,
        description: state.description.trim(),
        email: state.email.trim() || undefined,
        firstName: state.firstName.trim() || undefined,
        company: state.company.trim() || undefined,
      };
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as EstimateApiResponse;
      if (!res.ok || !json.ok) {
        const message = json.ok
          ? "Erreur inconnue."
          : json.field_errors
          ? Object.values(json.field_errors).join(" ")
          : json.error;
        setStatus({ kind: "error", message });
        return;
      }
      setStatus({ kind: "success", result: json.result, tokensUsed: json.tokens_used });
      // Clear the draft now that we have a result
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error
            ? `Impossible de joindre le serveur : ${err.message}`
            : "Impossible de joindre le serveur. Vérifie ta connexion et réessaie.",
      });
    }
  }

  function restart() {
    setState(INITIAL);
    setStatus({ kind: "idle" });
    setStep(0);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  // ============== RENDER ==============

  return (
    <div ref={rootRef} className="hc-design">
      <CalculatorNav />

      <div className="wrap">
        <div className="crumb">
          <a href="/">Accueil</a>
          <span className="sep">/</span>
          <a href="/outils/calculateur-cout-excel">Outils</a>
          <span className="sep">/</span>
          <span style={{ color: "var(--ink-3)" }}>Estimer mon projet</span>
        </div>
      </div>

      <main className="calc-main">
        {status.kind === "success" ? (
          <ResultView
            result={status.result}
            tokensUsed={status.tokensUsed}
            onRestart={restart}
            contactEmail={state.email}
          />
        ) : status.kind === "loading" ? (
          <LoadingView />
        ) : (
          <WizardView
            step={step}
            totalSteps={TOTAL_STEPS}
            state={state}
            update={update}
            toggleArray={toggleArray}
            canAdvance={canAdvance(step)}
            onNext={next}
            onBack={back}
            errorMessage={status.kind === "error" ? status.message : null}
          />
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

// =====================================================================
// Loading view — animated "Claude analyse"
// =====================================================================

function LoadingView() {
  const [phase, setPhase] = useState(0);
  const phases = [
    "Lecture de votre brief…",
    "Cadrage du périmètre & comparaison aux 23 projets livrés…",
    "Choix de la stack technique…",
    "Identification des risques & d'une lagniappe…",
    "Rédaction de l'estimation…",
  ];
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => Math.min(p + 1, phases.length - 1)), 4500);
    return () => clearInterval(id);
  }, [phases.length]);

  return (
    <div className="wrap">
      <div className="calc-loading">
        <div className="calc-loading-card">
          <div className="calc-loading-orb">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true" width="44" height="44">
              <path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z" />
            </svg>
            <div className="calc-loading-pulse" />
          </div>
          <div className="calc-loading-tag">
            <span className="dot" />
            CLAUDE OPUS 4.7 · ANALYSE EN COURS
          </div>
          <h2 className="calc-loading-title">
            On chiffre ton projet
            <br />
            <span className="grad-accent">comme un Discovery.</span>
          </h2>
          <p className="calc-loading-sub">
            Notre IA suit la même méthodologie qu&apos;un cadrage humain :
            elle compare ton brief aux 23 projets livrés, identifie les risques,
            propose une stack et un phasing semaine par semaine.
          </p>
          <div className="calc-loading-phases">
            {phases.map((label, i) => (
              <div
                key={label}
                className={`calc-loading-phase ${i < phase ? "done" : i === phase ? "active" : ""}`}
              >
                <div className="calc-loading-phase-dot">
                  {i < phase ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  ) : i === phase ? (
                    <span className="calc-loading-phase-spinner" />
                  ) : null}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="calc-loading-disclaimer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span>
              L&apos;estimation prend en général 20 à 45 secondes. Ne ferme pas la
              page — on ne sauvegarde pas l&apos;analyse côté serveur.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// Wizard view — the multi-step form
// =====================================================================

interface WizardViewProps {
  step: number;
  totalSteps: number;
  state: WizardState;
  update: <K extends keyof WizardState>(key: K, value: WizardState[K]) => void;
  toggleArray: <T extends string>(arr: T[], value: T) => T[];
  canAdvance: boolean;
  onNext: () => void;
  onBack: () => void;
  errorMessage: string | null;
}

function WizardView({
  step,
  totalSteps,
  state,
  update,
  toggleArray,
  canAdvance,
  onNext,
  onBack,
  errorMessage,
}: WizardViewProps) {
  const stepLabels = [
    "Type",
    "Périmètre",
    "Features",
    "Intégrations",
    "Délai",
    "Description",
    "Coordonnées",
  ];

  return (
    <section className="calc-wizard">
      <div className="wrap">
        {/* Header */}
        <header className="calc-header">
          <div className="calc-header-tag">
            <span className="dot" />
            CALCULATEUR IA · GRATUIT · 90 SECONDES
          </div>
          <h1 className="calc-headline">
            Estime ton projet
            <br />
            <span className="grad-accent">avec notre IA.</span>
          </h1>
          <p className="calc-sub">
            Réponds à 6 questions sur ton projet. Notre IA, entraînée sur nos
            barèmes et nos 23 projets livrés, te renvoie une fourchette de prix,
            un phasing semaine par semaine, une stack recommandée et les risques
            à anticiper. <b>Aucune donnée n&apos;est stockée.</b>
          </p>
        </header>

        {/* Progress */}
        <div className="calc-progress">
          <div className="calc-progress-steps">
            {stepLabels.map((label, i) => (
              <div
                key={label}
                className={`calc-progress-step ${i < step ? "done" : i === step ? "active" : ""}`}
              >
                <div className="calc-progress-num">
                  {i < step ? (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="calc-progress-label">{label}</span>
              </div>
            ))}
          </div>
          <div className="calc-progress-bar">
            <div
              className="calc-progress-fill"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="calc-step">
          {step === 0 && (
            <Step0
              value={state.projectType}
              onChange={(v) => update("projectType", v)}
            />
          )}
          {step === 1 && (
            <Step1
              screensCount={state.screensCount}
              usersCount={state.usersCount}
              onScreens={(v) => update("screensCount", v)}
              onUsers={(v) => update("usersCount", v)}
            />
          )}
          {step === 2 && (
            <Step2
              selected={state.features}
              onToggle={(id) => update("features", toggleArray(state.features, id))}
            />
          )}
          {step === 3 && (
            <Step3
              selected={state.integrations}
              onToggle={(id) => update("integrations", toggleArray(state.integrations, id))}
            />
          )}
          {step === 4 && <Step4 value={state.urgency} onChange={(v) => update("urgency", v)} />}
          {step === 5 && (
            <Step5
              value={state.description}
              onChange={(v) => update("description", v)}
              projectType={state.projectType}
            />
          )}
          {step === 6 && (
            <Step6
              email={state.email}
              firstName={state.firstName}
              company={state.company}
              onChange={(field, v) => update(field, v)}
            />
          )}
        </div>

        {errorMessage && (
          <div className="calc-error" role="alert">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Navigation */}
        <div className="calc-nav">
          <button
            type="button"
            className="btn btn-ghost btn-lg"
            onClick={onBack}
            disabled={step === 0}
            style={step === 0 ? { visibility: "hidden" } : undefined}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour
          </button>

          <span className="calc-nav-progress">
            Étape <b>{step + 1}</b> sur {totalSteps}
          </span>

          <button
            type="button"
            className="btn btn-accent btn-lg"
            onClick={onNext}
            disabled={!canAdvance}
          >
            {step === totalSteps - 1 ? "Lancer l'estimation IA" : "Suivant"}
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// Individual steps
// =====================================================================

function Step0({
  value,
  onChange,
}: {
  value: ProjectType | "";
  onChange: (v: ProjectType) => void;
}) {
  const icons: Record<ProjectType, React.ReactNode> = {
    saas: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    "site-vitrine": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20" />
      </svg>
    ),
    "outil-interne": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18M7 14l3-3 4 4 5-5" />
      </svg>
    ),
    ecommerce: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    "app-mobile": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    refonte: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  };

  return (
    <>
      <h2 className="calc-step-title">Quel type de projet veux-tu construire ?</h2>
      <p className="calc-step-sub">
        Ça nous aide à appliquer les bons barèmes — chaque type a son sweet spot
        de prix et de délai.
      </p>
      <div className="calc-cards-grid">
        {PROJECT_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onChange(type)}
            className={`calc-card ${value === type ? "selected" : ""}`}
            aria-pressed={value === type}
          >
            <div className="calc-card-ic">{icons[type]}</div>
            <div className="calc-card-label">{PROJECT_TYPE_LABELS[type]}</div>
          </button>
        ))}
      </div>
    </>
  );
}

function Step1({
  screensCount,
  usersCount,
  onScreens,
  onUsers,
}: {
  screensCount: number;
  usersCount: WizardState["usersCount"];
  onScreens: (v: number) => void;
  onUsers: (v: WizardState["usersCount"]) => void;
}) {
  const userBuckets: Array<{ id: WizardState["usersCount"]; label: string; sub: string }> = [
    { id: "small", label: "< 50", sub: "Outil interne, MVP, beta privée" },
    { id: "medium", label: "50–500", sub: "PME, B2B, équipes structurées" },
    { id: "large", label: "500–5k", sub: "Plateforme à fort volume, B2B+" },
    { id: "huge", label: "5 000+", sub: "Marketplace, B2C, mass-market" },
  ];

  return (
    <>
      <h2 className="calc-step-title">Donne-nous le périmètre.</h2>
      <p className="calc-step-sub">
        Approximations bienvenues — l&apos;IA ajustera selon la description plus tard.
      </p>

      <div className="calc-field">
        <label className="calc-label">
          Nombre d&apos;écrans estimé : <b>{screensCount}</b>
        </label>
        <p className="calc-help">
          Compte chaque écran distinct (login, dashboard, formulaire, page de paramètres…).
          Pour un MVP : 5–10. Pour un SaaS complet : 15–25.
        </p>
        <input
          type="range"
          min={1}
          max={50}
          step={1}
          value={screensCount}
          onChange={(e) => onScreens(Number(e.target.value))}
          className="calc-range"
        />
        <div className="calc-range-marks">
          <span>1</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>50+</span>
        </div>
      </div>

      <div className="calc-field">
        <label className="calc-label">Nombre d&apos;utilisateurs prévus à l&apos;ouverture</label>
        <div className="calc-grid-2">
          {userBuckets.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => onUsers(b.id)}
              className={`calc-radio ${usersCount === b.id ? "selected" : ""}`}
              aria-pressed={usersCount === b.id}
            >
              <div className="calc-radio-main">{b.label}</div>
              <div className="calc-radio-sub">{b.sub}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function Step2({
  selected,
  onToggle,
}: {
  selected: FeatureId[];
  onToggle: (id: FeatureId) => void;
}) {
  return (
    <>
      <h2 className="calc-step-title">Quelles features clés sont nécessaires ?</h2>
      <p className="calc-step-sub">
        Coche tout ce qui s&apos;applique. C&apos;est ok de cocher beaucoup ou rien —
        l&apos;IA précisera selon la description.
      </p>
      <div className="calc-checklist">
        {FEATURE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onToggle(opt.id)}
            className={`calc-check ${selected.includes(opt.id) ? "selected" : ""}`}
            aria-pressed={selected.includes(opt.id)}
          >
            <div className="calc-check-box">
              {selected.includes(opt.id) && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </div>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
      <p className="calc-meta">
        <b>{selected.length}</b> {selected.length > 1 ? "features sélectionnées" : "feature sélectionnée"}
      </p>
    </>
  );
}

function Step3({
  selected,
  onToggle,
}: {
  selected: IntegrationId[];
  onToggle: (id: IntegrationId) => void;
}) {
  return (
    <>
      <h2 className="calc-step-title">Quelles intégrations tierces ?</h2>
      <p className="calc-step-sub">
        Outils externes que ton produit devra appeler. Si tu n&apos;es pas sûr,
        n&apos;en coche aucune — on précisera au Discovery Sprint.
      </p>
      <div className="calc-checklist">
        {INTEGRATION_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onToggle(opt.id)}
            className={`calc-check ${selected.includes(opt.id) ? "selected" : ""}`}
            aria-pressed={selected.includes(opt.id)}
          >
            <div className="calc-check-box">
              {selected.includes(opt.id) && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </div>
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
      <p className="calc-meta">
        <b>{selected.length}</b> {selected.length > 1 ? "intégrations sélectionnées" : "intégration sélectionnée"}
      </p>
    </>
  );
}

function Step4({
  value,
  onChange,
}: {
  value: UrgencyLevel | "";
  onChange: (v: UrgencyLevel) => void;
}) {
  const subs: Record<UrgencyLevel, string> = {
    urgent: "+30-50 % de surcoût · projets < 15 k€ uniquement",
    "1-month": "Délai serré, scope cadrable nécessaire",
    "3-months": "Sweet spot Sprint Fixe™ — la plupart des projets",
    "6-months": "Confortable, possibilité de Care+ évolutif",
    "no-rush": "Optimisation max coût/qualité",
  };
  return (
    <>
      <h2 className="calc-step-title">Quel est ton délai souhaité ?</h2>
      <p className="calc-step-sub">
        On vise toujours la date contractuelle. Plus c&apos;est urgent, plus le coût grimpe.
      </p>
      <div className="calc-radio-stack">
        {URGENCY_LEVELS.map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => onChange(u)}
            className={`calc-radio-row ${value === u ? "selected" : ""}`}
            aria-pressed={value === u}
          >
            <div className="calc-radio-row-dot" />
            <div className="calc-radio-row-body">
              <div className="calc-radio-row-label">{URGENCY_LABELS[u]}</div>
              <div className="calc-radio-row-sub">{subs[u]}</div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

function Step5({
  value,
  onChange,
  projectType,
}: {
  value: string;
  onChange: (v: string) => void;
  projectType: ProjectType | "";
}) {
  const placeholders: Record<ProjectType, string> = {
    saas: "Ex : Une plateforme SaaS pour les cabinets dentaires qui gère les rendez-vous, les rappels patient SMS, la facturation et la liaison avec leur logiciel comptable. Cible : 50 cabinets en France la 1ère année. On a déjà un Excel manuel à digitaliser.",
    "site-vitrine": "Ex : Refonte du site de notre cabinet de patrimoine (8 pages : home, services, équipe, blog SEO, simulateur fiscal, contact). On veut convertir : prise de RDV intégrée, capture de leads, blog SEO sur 30 mots-clés.",
    "outil-interne": "Ex : Outil interne pour notre équipe logistique (12 personnes) qui remplace 3 fichiers Excel partagés. Gestion des stocks multi-entrepôts, alertes ruptures, exports comptables, intégration ERP existant.",
    ecommerce: "Ex : Boutique haut de gamme pour notre marque outdoor (200 produits, 5 catégories). Shopify Plus avec checkout custom, intégration ERP comptable, programme fidélité, blog éditorial. Cible 5k commandes/mois.",
    "app-mobile": "Ex : App mobile compagnon de notre SaaS web pour les commerciaux terrain. Création de devis hors-ligne, signature tactile client, sync auto au retour de connexion, push notifications. iOS + Android.",
    refonte: "Ex : Notre SaaS actuel a 5 ans, écrit en Symfony 4, plus maintenable. On veut une refonte complète en gardant la même DB (200k users, 8 ans d'historique). Migration progressive sur 6 mois.",
  };
  const placeholder = projectType
    ? placeholders[projectType]
    : "Décris ton projet en quelques paragraphes : qu'est-ce que tu veux construire, pour qui, pourquoi, quelles contraintes (budget, délai, existant), quelles features critiques.";

  const charCount = value.length;
  const minOk = charCount >= 50;
  const maxOk = charCount <= 4000;

  return (
    <>
      <h2 className="calc-step-title">Décris ton projet en détail.</h2>
      <p className="calc-step-sub">
        C&apos;est l&apos;input le plus important. Plus tu es précis, plus l&apos;estimation
        sera fine. Décris le <b>pourquoi</b>, le <b>pour qui</b>, le <b>quoi</b>, et les
        <b> contraintes</b> connues.
      </p>
      <textarea
        className="calc-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={10}
        maxLength={4000}
      />
      <div className="calc-textarea-meta">
        <span className={!minOk ? "warn" : ""}>
          {charCount} / 50 minimum {minOk ? "✓" : ""}
        </span>
        <span className={!maxOk ? "warn" : ""}>
          {charCount} / 4 000 maximum
        </span>
      </div>
    </>
  );
}

function Step6({
  email,
  firstName,
  company,
  onChange,
}: {
  email: string;
  firstName: string;
  company: string;
  onChange: <K extends "email" | "firstName" | "company">(field: K, v: string) => void;
}) {
  return (
    <>
      <h2 className="calc-step-title">Quelques infos sur toi (optionnel).</h2>
      <p className="calc-step-sub">
        L&apos;estimation s&apos;affichera quoi qu&apos;il arrive. Ces infos servent uniquement si
        tu veux qu&apos;on te recontacte avec un Discovery Sprint chiffré, ou
        recevoir l&apos;estimation par email.
      </p>
      <div className="calc-form-grid">
        <div className="calc-form-field">
          <label htmlFor="firstName" className="calc-label">
            Prénom
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className="calc-input"
            placeholder="Quentin"
            autoComplete="given-name"
            maxLength={80}
          />
        </div>
        <div className="calc-form-field">
          <label htmlFor="company" className="calc-label">
            Entreprise
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => onChange("company", e.target.value)}
            className="calc-input"
            placeholder="Acme SAS"
            autoComplete="organization"
            maxLength={120}
          />
        </div>
        <div className="calc-form-field calc-form-field-wide">
          <label htmlFor="email" className="calc-label">
            Email pro
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onChange("email", e.target.value)}
            className="calc-input"
            placeholder="quentin@acme.com"
            autoComplete="email"
            maxLength={200}
          />
        </div>
        {/* Honeypot — hidden from real users via CSS, bots fill everything */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <label htmlFor="hp-website">Website</label>
          <input id="hp-website" type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="calc-trust">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
        </svg>
        <span>
          On ne stocke ni ta description ni ton estimation côté serveur.
          Ces infos ne sont utilisées que pour te recontacter si tu le demandes.
        </span>
      </div>
    </>
  );
}
