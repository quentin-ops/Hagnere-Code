"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import {
  SERVICE_CATEGORIES,
  CATEGORY_LABELS,
  CATEGORY_SUBS,
  SERVICES,
  SERVICES_BY_CATEGORY,
  URGENCY_LABELS,
  URGENCY_LEVELS,
  URGENCY_SUBS,
  type CalculatorInput,
  type EstimateApiResponse,
  type MultiServiceEstimate,
  type ServiceId,
  type UrgencyLevel,
} from "./types";
import { ServiceModule, isModuleValid } from "./service-modules";
import { CalculatorNav } from "./CalculatorNav";
import { ResultView } from "./ResultView";
import "./calculator.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const STORAGE_KEY = "hc-estimate-multi-v1";

type WizardState = {
  selectedServices: ServiceId[];
  perService: Partial<Record<ServiceId, unknown>>;
  urgency: UrgencyLevel | "";
  description: string;
  email: string;
  firstName: string;
  company: string;
  rgpdConsent: boolean;
};

const INITIAL: WizardState = {
  selectedServices: [],
  perService: {},
  urgency: "",
  description: "",
  email: "",
  firstName: "",
  company: "",
  rgpdConsent: false,
};

type FetchStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "success"; result: MultiServiceEstimate; tokensUsed: number };

/**
 * The wizard step structure is computed dynamically based on which
 * services were checked at step 0. We model each "step" as a discriminated
 * union so the renderer is exhaustive.
 */
type WizardStep =
  | { kind: "select" }
  | { kind: "service"; serviceId: ServiceId }
  | { kind: "urgency" }
  | { kind: "description" }
  | { kind: "contact" };

function computeSteps(selected: ServiceId[]): WizardStep[] {
  const steps: WizardStep[] = [{ kind: "select" }];
  for (const sid of selected) steps.push({ kind: "service", serviceId: sid });
  steps.push({ kind: "urgency" });
  steps.push({ kind: "description" });
  steps.push({ kind: "contact" });
  return steps;
}

export function EstimerMonProjet() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const [stepIdx, setStepIdx] = useState(0);
  // Lazy init: hydrates from localStorage on first render so we avoid a
  // cascading render and a brief flash of empty state.
  const [state, setState] = useState<WizardState>(() => {
    if (typeof window === "undefined") return INITIAL;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return INITIAL;
      const parsed = JSON.parse(raw) as Partial<WizardState>;
      return { ...INITIAL, ...parsed };
    } catch {
      return INITIAL;
    }
  });
  const [status, setStatus] = useState<FetchStatus>({ kind: "idle" });

  // Save draft on change (except contact)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (status.kind === "success") return;
    const { email: _e, firstName: _fn, company: _c, rgpdConsent: _rg, ...persisted } = state;
    void _e; void _fn; void _c; void _rg;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
    } catch {
      /* ignore */
    }
  }, [state, status.kind]);

  const steps = useMemo(() => computeSteps(state.selectedServices), [state.selectedServices]);
  const currentStep = steps[stepIdx] || steps[0];
  const totalSteps = steps.length;

  function update<K extends keyof WizardState>(key: K, value: WizardState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(sid: ServiceId) {
    const isSelected = state.selectedServices.includes(sid);
    const next = isSelected
      ? state.selectedServices.filter((s) => s !== sid)
      : [...state.selectedServices, sid];
    setState((prev) => ({ ...prev, selectedServices: next }));
  }

  function applyPreset(services: ServiceId[]) {
    setState((prev) => ({ ...prev, selectedServices: services }));
  }

  function skipServiceModule(sid: ServiceId) {
    // Mark this module as intentionally skipped (empty answers object → server
    // sees no answers and lowers confidence to "low" for this service)
    setState((prev) => ({
      ...prev,
      perService: { ...prev.perService, [sid]: {} },
    }));
    // Auto-advance to the next step
    if (stepIdx < steps.length - 1) setStepIdx(stepIdx + 1);
  }

  function setServiceAnswers(sid: ServiceId, answers: unknown) {
    setState((prev) => ({
      ...prev,
      perService: { ...prev.perService, [sid]: answers },
    }));
  }

  // Validation per step
  function canAdvance(step: WizardStep): boolean {
    if (step.kind === "select") return state.selectedServices.length > 0;
    if (step.kind === "service") return isModuleValid(step.serviceId, state.perService[step.serviceId]);
    if (step.kind === "urgency") return Boolean(state.urgency);
    if (step.kind === "description") return state.description.trim().length >= 50;
    if (step.kind === "contact") {
      // Contact is optional, BUT if any field is filled, RGPD consent is required
      const hasContact = Boolean(
        state.email.trim() || state.firstName.trim() || state.company.trim(),
      );
      return !hasContact || state.rgpdConsent;
    }
    return true;
  }

  const isLastStep = stepIdx === totalSteps - 1;

  function next() {
    if (!canAdvance(currentStep)) return;
    if (!isLastStep) setStepIdx(stepIdx + 1);
    else void submit();
  }

  function back() {
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  }

  function jumpToStep(target: WizardStep) {
    const idx = steps.findIndex((s) => {
      if (s.kind !== target.kind) return false;
      if (s.kind === "service" && target.kind === "service") {
        return s.serviceId === target.serviceId;
      }
      return true;
    });
    if (idx >= 0) setStepIdx(idx);
  }

  async function submit() {
    setStatus({ kind: "loading" });
    try {
      const payload: CalculatorInput = {
        selectedServices: state.selectedServices,
        // The wizard stores answers as `unknown` for runtime flexibility;
        // the server re-validates them by service type.
        perService: state.perService as CalculatorInput["perService"],
        urgency: state.urgency as UrgencyLevel,
        description: state.description.trim(),
        email: state.email.trim() || undefined,
        firstName: state.firstName.trim() || undefined,
        company: state.company.trim() || undefined,
        rgpdConsent: state.rgpdConsent || undefined,
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
    setStepIdx(0);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  return (
    <div ref={rootRef} className="hc-design">
      <CalculatorNav />

      <div className="wrap">
        <div className="crumb">
          <Link href="/">Accueil</Link>
          <span className="sep">/</span>
          <Link href="/outils/calculateur-cout-excel">Outils</Link>
          <span className="sep">/</span>
          <span style={{ color: "var(--ink-3)" }}>Estimer mon projet</span>
        </div>
      </div>

      <main className="calc-main">
        {status.kind === "success" ? (
          <ResultView
            result={status.result}
            tokensUsed={status.tokensUsed}
            contactEmail={state.email}
            onRestart={restart}
          />
        ) : status.kind === "loading" ? (
          <LoadingView />
        ) : (
          <WizardView
            steps={steps}
            stepIdx={stepIdx}
            currentStep={currentStep}
            isLastStep={isLastStep}
            state={state}
            update={update}
            toggleService={toggleService}
            applyPreset={applyPreset}
            skipServiceModule={skipServiceModule}
            setServiceAnswers={setServiceAnswers}
            jumpToStep={jumpToStep}
            canAdvance={canAdvance(currentStep)}
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
// Loading view
// =====================================================================

function LoadingView() {
  const [phase, setPhase] = useState(0);
  const phases = [
    "Lecture de ton brief multi-services…",
    "Croisement des barèmes Sprint Fixe™ avec nos projets livrés…",
    "Détection des synergies (tracking mutualisé, retainers décalés)…",
    "Choix de la stack et de l'équipe à allouer…",
    "Construction de la roadmap de déploiement…",
    "Rédaction de l'estimation finale…",
  ];
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => Math.min(p + 1, phases.length - 1)), 5000);
    return () => clearInterval(id);
  }, [phases.length]);

  return (
    <div className="wrap">
      <div className="calc-loading" role="status" aria-live="polite" aria-busy="true">
        <div className="calc-loading-card">
          <div className="calc-loading-orb">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true" width="44" height="44">
              <path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z" />
            </svg>
            <div className="calc-loading-pulse" />
          </div>
          <div className="calc-loading-tag">
            <span className="dot" />
            CLAUDE OPUS 4.7 · ANALYSE MULTI-SERVICES
          </div>
          <h2 className="calc-loading-title">
            On chiffre ton programme
            <br />
            <span className="grad-accent">comme un Discovery élargi.</span>
          </h2>
          <p className="calc-loading-sub">
            L&apos;IA croise les services cochés, détecte les synergies (tracking
            mutualisé, retainers à enchaîner, équipe partagée) et te renvoie
            une fourchette globale + un plan de déploiement cohérent.
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
              L&apos;estimation prend 30 à 60 secondes selon le nombre de services. Ne ferme pas la page.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// Wizard view
// =====================================================================

interface WizardViewProps {
  steps: WizardStep[];
  stepIdx: number;
  currentStep: WizardStep;
  isLastStep: boolean;
  state: WizardState;
  update: <K extends keyof WizardState>(key: K, value: WizardState[K]) => void;
  toggleService: (sid: ServiceId) => void;
  applyPreset: (services: ServiceId[]) => void;
  skipServiceModule: (sid: ServiceId) => void;
  setServiceAnswers: (sid: ServiceId, answers: unknown) => void;
  jumpToStep: (target: WizardStep) => void;
  canAdvance: boolean;
  onNext: () => void;
  onBack: () => void;
  errorMessage: string | null;
}

function WizardView({
  steps,
  stepIdx,
  currentStep,
  isLastStep,
  state,
  update,
  toggleService,
  applyPreset,
  skipServiceModule,
  setServiceAnswers,
  jumpToStep,
  canAdvance,
  onNext,
  onBack,
  errorMessage,
}: WizardViewProps) {
  const totalSteps = steps.length;
  const remainingSteps = totalSteps - stepIdx - 1;
  const remainingMin = Math.max(1, Math.ceil(remainingSteps * 0.5));
  const stepHeadingRef = useRef<HTMLDivElement>(null);

  // On step change: focus the heading region (better screen-reader UX)
  // and scroll into view on mobile where the sticky CTA hides bottom content.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = stepHeadingRef.current;
    if (!node) return;
    node.focus({ preventScroll: true });
    if (window.innerWidth < 760) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [stepIdx]);

  return (
    <section className="calc-wizard">
      <div className="wrap">
        {/* Header — only shown on the first step */}
        {currentStep.kind === "select" && (
          <header className="calc-header">
            <div className="calc-header-tag">
              <span className="dot" />
              CALCULATEUR IA · GRATUIT · SANS INSCRIPTION
            </div>
            <h1 className="calc-headline">
              Estime ton programme
              <br />
              <span className="grad-accent">multi-services.</span>
            </h1>
            <p className="calc-sub">
              Coche les services dont tu as besoin (un site, un SaaS, du SEO, des ads, de
              la maintenance — ou tout à la fois). Notre IA chiffre l&apos;ensemble en
              tenant compte des <b>synergies</b> entre services et te renvoie une
              fourchette + un plan de déploiement cohérent.
            </p>
          </header>
        )}

        {/* Progress */}
        <div className="calc-progress">
          <div className="calc-progress-bar">
            <div
              className="calc-progress-fill"
              style={{ width: `${((stepIdx + 1) / totalSteps) * 100}%` }}
            />
          </div>
          <div className="calc-progress-label-row">
            <span>
              Étape <b>{stepIdx + 1}</b> / {totalSteps}
              {!isLastStep && (
                <span className="calc-progress-time"> · ≈ {remainingMin} min restantes</span>
              )}
            </span>
            <span className="calc-progress-name">{stepName(currentStep)}</span>
          </div>
        </div>

        {/* Step content */}
        <div
          className="calc-step"
          ref={stepHeadingRef}
          tabIndex={-1}
          role="region"
          aria-live="polite"
          aria-atomic="false"
          aria-label={`Étape ${stepIdx + 1} sur ${totalSteps} : ${stepName(currentStep)}`}
        >
          {currentStep.kind === "select" && (
            <SelectStep
              selected={state.selectedServices}
              onToggle={toggleService}
              onApplyPreset={applyPreset}
            />
          )}
          {currentStep.kind === "service" && (
            <ServiceStep
              serviceId={currentStep.serviceId}
              answers={state.perService[currentStep.serviceId]}
              onChange={(a) => setServiceAnswers(currentStep.serviceId, a)}
              onSkip={() => skipServiceModule(currentStep.serviceId)}
            />
          )}
          {currentStep.kind === "urgency" && (
            <UrgencyStep value={state.urgency} onChange={(v) => update("urgency", v)} />
          )}
          {currentStep.kind === "description" && (
            <DescriptionStep
              value={state.description}
              onChange={(v) => update("description", v)}
              selectedServices={state.selectedServices}
              perService={state.perService}
              urgency={state.urgency}
            />
          )}
          {currentStep.kind === "contact" && (
            <ContactStep
              email={state.email}
              firstName={state.firstName}
              company={state.company}
              rgpdConsent={state.rgpdConsent}
              recapState={state}
              onJumpToStep={jumpToStep}
              onChange={(field, v) => update(field, v)}
              onConsentChange={(v) => update("rgpdConsent", v)}
            />
          )}
        </div>

        {errorMessage && (
          <div className="calc-error" role="alert" aria-live="assertive" aria-atomic="true">
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
            disabled={stepIdx === 0}
            style={stepIdx === 0 ? { visibility: "hidden" } : undefined}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour
          </button>

          <button
            type="button"
            className="btn btn-accent btn-lg"
            onClick={onNext}
            disabled={!canAdvance}
          >
            {isLastStep ? "Lancer l'estimation IA" : "Suivant"}
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function stepName(step: WizardStep): string {
  if (step.kind === "select") return "Quels services ?";
  if (step.kind === "urgency") return "Délai souhaité";
  if (step.kind === "description") return "Description du projet";
  if (step.kind === "contact") return "Tes coordonnées (optionnel)";
  // service step
  const map: Record<ServiceId, string> = {
    "site-vitrine": "Site vitrine — détails",
    saas: "SaaS — détails",
    "outil-interne": "Outil interne — détails",
    ecommerce: "E-commerce — détails",
    "app-mobile": "App mobile — détails",
    refonte: "Refonte — détails",
    seo: "SEO — détails",
    ads: "Ads — détails",
    video: "Vidéo — détails",
    maintenance: "Maintenance — détails",
    "securite-rgpd": "Sécurité & RGPD — détails",
    "audit-technique": "Audit technique — détails",
  };
  return map[step.serviceId];
}

// =====================================================================
// Step renderers
// =====================================================================

// Quick presets — let users skip the manual selection grid
const SERVICE_PRESETS: Array<{
  id: string;
  label: string;
  description: string;
  services: ServiceId[];
}> = [
  {
    id: "lancer-projet",
    label: "🚀 Lancer un nouveau projet",
    description: "Site + SaaS + maintenance après livraison",
    services: ["site-vitrine", "saas", "maintenance"],
  },
  {
    id: "acquisition",
    label: "📈 Acquisition & croissance",
    description: "Site + SEO + Ads + Vidéo",
    services: ["site-vitrine", "seo", "ads", "video"],
  },
  {
    id: "maintenir-securiser",
    label: "🛡️ Maintenir & sécuriser",
    description: "Audit + maintenance + sécurité RGPD",
    services: ["audit-technique", "maintenance", "securite-rgpd"],
  },
];

function SelectStep({
  selected,
  onToggle,
  onApplyPreset,
}: {
  selected: ServiceId[];
  onToggle: (sid: ServiceId) => void;
  onApplyPreset: (services: ServiceId[]) => void;
}) {
  const [filter, setFilter] = useState("");
  const filterLower = filter.trim().toLowerCase();

  function matchesFilter(serviceId: ServiceId): boolean {
    if (!filterLower) return true;
    const s = SERVICES[serviceId];
    return (
      s.label.toLowerCase().includes(filterLower) ||
      s.shortLabel.toLowerCase().includes(filterLower) ||
      s.description.toLowerCase().includes(filterLower) ||
      s.id.toLowerCase().includes(filterLower)
    );
  }

  return (
    <>
      <h2 className="calc-step-title">De quoi as-tu besoin ?</h2>
      <p className="calc-step-sub">
        Coche tous les services qui font partie de ton projet — un seul ou plusieurs.
        L&apos;IA chiffrera l&apos;ensemble en tenant compte des <b>synergies</b>
        (ex : site + ads = tracking mutualisé, économies réelles).
      </p>

      {/* Quick presets */}
      <div className="calc-presets">
        <div className="calc-presets-h">⚡ Démarre rapide avec un préset</div>
        <div className="calc-presets-row">
          {SERVICE_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onApplyPreset(p.services)}
              className="calc-preset"
            >
              <div className="calc-preset-label">{p.label}</div>
              <div className="calc-preset-desc">{p.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Filter input */}
      <div className="calc-filter">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrer : SaaS, SEO, mobile, audit…"
          className="calc-filter-input"
          aria-label="Filtrer les services"
        />
        {filter && (
          <button
            type="button"
            onClick={() => setFilter("")}
            className="calc-filter-clear"
            aria-label="Effacer le filtre"
          >
            ×
          </button>
        )}
      </div>

      {SERVICE_CATEGORIES.map((cat) => {
        const visible = SERVICES_BY_CATEGORY[cat].filter((s) => matchesFilter(s.id));
        if (visible.length === 0) return null;
        return (
          <div key={cat} className="calc-cat-block">
            <div className="calc-cat-h">
              <span className="calc-cat-label">{CATEGORY_LABELS[cat]}</span>
              <span className="calc-cat-sub">{CATEGORY_SUBS[cat]}</span>
            </div>
            <div className="calc-services-grid">
              {visible.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onToggle(s.id)}
                  className={`calc-service ${selected.includes(s.id) ? "selected" : ""}`}
                  aria-pressed={selected.includes(s.id)}
                >
                  <div className="calc-service-check">
                    {selected.includes(s.id) && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    )}
                  </div>
                  <div className="calc-service-body">
                    <div className="calc-service-label">{s.label}</div>
                    <div className="calc-service-desc">{s.description}</div>
                  </div>
                  <div className={`calc-service-pill calc-service-pill-${s.pricingModel}`}>
                    {s.pricingModel === "oneshot" && "FORFAIT"}
                    {s.pricingModel === "retainer" && "MENSUEL"}
                    {s.pricingModel === "mixed" && "MIXTE"}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      })}
      <p className="calc-meta">
        <b>{selected.length}</b> service{selected.length > 1 ? "s" : ""} sélectionné
        {selected.length > 1 ? "s" : ""}
      </p>
    </>
  );
}

function ServiceStep({
  serviceId,
  answers,
  onChange,
  onSkip,
}: {
  serviceId: ServiceId;
  answers: unknown;
  onChange: (a: unknown) => void;
  onSkip: () => void;
}) {
  return (
    <>
      <div className="calc-step-head-row">
        <h2 className="calc-step-title">{stepName({ kind: "service", serviceId })}</h2>
        <button
          type="button"
          onClick={onSkip}
          className="calc-skip-btn"
          aria-label="Passer ce module sans répondre"
        >
          Passer ce module
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <p className="calc-step-sub">
        Quelques précisions pour que l&apos;IA puisse chiffrer ce service de manière
        réaliste. Si tu n&apos;es pas sûr, garde les valeurs par défaut — la
        description libre à la fin permettra d&apos;affiner. Tu peux aussi <b>passer ce
        module</b> : l&apos;IA chiffrera large, mais tu auras quand même une fourchette.
      </p>
      <ServiceModule serviceId={serviceId} answers={answers} onChange={onChange} />
    </>
  );
}

function UrgencyStep({
  value,
  onChange,
}: {
  value: UrgencyLevel | "";
  onChange: (v: UrgencyLevel) => void;
}) {
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
              <div className="calc-radio-row-sub">{URGENCY_SUBS[u]}</div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

function DescriptionStep({
  value,
  onChange,
  selectedServices,
  perService,
  urgency,
}: {
  value: string;
  onChange: (v: string) => void;
  selectedServices: ServiceId[];
  perService: Partial<Record<ServiceId, unknown>>;
  urgency: UrgencyLevel | "";
}) {
  const charCount = value.length;
  const minOk = charCount >= 50;
  const maxOk = charCount <= 4000;
  const selectedCount = selectedServices.length;
  const placeholder =
    selectedCount > 1
      ? "Ex : On veut lancer un cabinet de conseil RH. Il nous faut un site vitrine pro pour capter des leads, un SaaS interne pour gérer les missions et facturer, et démarrer du SEO long-terme + des ads LinkedIn pour acquérir nos premiers clients en 6 mois. Cible : DRH d'ETI 200-500 sal. Budget total ~80k€ build + 5k€/mois ensuite."
      : "Ex : On veut digitaliser le suivi de mission de notre cabinet (12 consultants). Aujourd'hui c'est Excel + emails, on veut un outil interne avec timesheets, facturation auto vers Pennylane, et un mini espace client. Cible : 50 missions/mois en cours.";

  function buildDraft(): string {
    if (selectedServices.length === 0) return "";
    const lines: string[] = [];
    const labels = selectedServices.map((sid) => SERVICES[sid].shortLabel).join(" + ");
    lines.push(`Projet multi-volets : ${labels}.`);
    lines.push("");

    for (const sid of selectedServices) {
      const def = SERVICES[sid];
      const ans = perService[sid] as Record<string, unknown> | undefined;
      const bits: string[] = [];

      if (ans && Object.keys(ans).length > 0) {
        // Pull the most informative answer keys we know exist across modules.
        for (const [k, v] of Object.entries(ans)) {
          if (v === null || v === undefined || v === "") continue;
          if (Array.isArray(v) && v.length === 0) continue;
          const label = k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toLowerCase());
          if (Array.isArray(v)) bits.push(`${label} : ${v.join(", ")}`);
          else if (typeof v === "boolean") {
            if (v) bits.push(label);
          } else {
            bits.push(`${label} : ${String(v)}`);
          }
        }
      }

      if (bits.length === 0) {
        lines.push(`• ${def.label} — à cadrer ensemble.`);
      } else {
        lines.push(`• ${def.label} — ${bits.slice(0, 5).join(" ; ")}.`);
      }
    }

    if (urgency) {
      lines.push("");
      lines.push(`Délai souhaité : ${URGENCY_LABELS[urgency]}.`);
    }
    lines.push("");
    lines.push("Contexte métier / objectif business : [à compléter]");
    lines.push("Contraintes (budget, intégrations, compliance) : [à compléter]");
    return lines.join("\n");
  }

  function handlePrefill() {
    const draft = buildDraft();
    if (!draft) return;
    if (
      value.trim().length > 0 &&
      !window.confirm("Remplacer ta description actuelle par un brouillon généré depuis tes choix ?")
    ) {
      return;
    }
    onChange(draft);
  }

  return (
    <>
      <div className="calc-step-head-row">
        <h2 className="calc-step-title">Décris ton projet en détail.</h2>
        {selectedCount > 0 && (
          <button
            type="button"
            onClick={handlePrefill}
            className="calc-prefill-btn"
            aria-label="Pré-remplir la description depuis mes choix"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
            Pré-remplir depuis mes choix
          </button>
        )}
      </div>
      <p className="calc-step-sub">
        C&apos;est l&apos;input le plus important. Plus tu es précis sur le <b>contexte
        métier</b>, l&apos;<b>objectif business</b> et les <b>contraintes</b>, plus
        l&apos;estimation IA sera fine. Le bouton « Pré-remplir » génère un brouillon
        à partir des étapes précédentes — à toi de l&apos;enrichir.
      </p>
      <textarea
        className="calc-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={12}
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

function ContactStep({
  email,
  firstName,
  company,
  rgpdConsent,
  recapState,
  onJumpToStep,
  onChange,
  onConsentChange,
}: {
  email: string;
  firstName: string;
  company: string;
  rgpdConsent: boolean;
  recapState: WizardState;
  onJumpToStep: (target: WizardStep) => void;
  onChange: <K extends "email" | "firstName" | "company">(field: K, v: string) => void;
  onConsentChange: (v: boolean) => void;
}) {
  const hasContact = Boolean(email.trim() || firstName.trim() || company.trim());
  return (
    <>
      <RecapCard state={recapState} onJumpToStep={onJumpToStep} />
      <h2 className="calc-step-title">Tes coordonnées <span className="calc-step-title-hint">(optionnel)</span></h2>
      <p className="calc-step-sub">
        Laisse-nous tes coordonnées si tu veux qu&apos;on te recontacte sous
        24 h ouvrées avec une fourchette ferme et 3 créneaux Discovery. Sinon,
        l&apos;estimation s&apos;affiche directement à l&apos;écran et tu pourras
        la <b>télécharger en PDF</b> ou <b>réserver un créneau Calendly</b> juste
        après.
      </p>
      <div className="calc-form-grid">
        <div className="calc-form-field">
          <label htmlFor="firstName" className="calc-label">Prénom</label>
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
          <label htmlFor="company" className="calc-label">Entreprise</label>
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
          <label htmlFor="email" className="calc-label">Email pro</label>
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
        {/* Honeypot */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <label htmlFor="hp-website">Website</label>
          <input id="hp-website" type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {/* RGPD checkbox — required if any contact field is filled */}
      {hasContact && (
        <label className={`calc-rgpd ${rgpdConsent ? "checked" : ""}`}>
          <input
            type="checkbox"
            checked={rgpdConsent}
            onChange={(e) => onConsentChange(e.target.checked)}
            className="calc-rgpd-input"
          />
          <span className="calc-rgpd-box" aria-hidden="true">
            {rgpdConsent && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12l5 5L20 7" />
              </svg>
            )}
          </span>
          <span className="calc-rgpd-text">
            J&apos;accepte d&apos;être recontacté(e) par Hagnéré Code à propos de mon
            projet. Mes coordonnées seront utilisées <b>uniquement à cette fin</b>,
            jamais transmises à un tiers, et supprimées à ma demande
            (<a href="/legal/mentions" target="_blank" rel="noopener noreferrer">mentions légales</a>).
            <span className="calc-rgpd-required"> *Obligatoire pour traiter ta demande.</span>
          </span>
        </label>
      )}

      <div className="calc-trust">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
        </svg>
        <span>
          On ne stocke ni ta description ni ton estimation côté serveur.
          Tes coordonnées passent uniquement chez Quentin et Nicolas pour te recontacter.
        </span>
      </div>
    </>
  );
}

// =====================================================================
// Recap card — shown above the contact form so the user reviews
// everything before submitting. Each line has an "Edit" button that
// jumps back to the relevant step (Stripe-style review pattern).
// =====================================================================

function RecapCard({
  state,
  onJumpToStep,
}: {
  state: WizardState;
  onJumpToStep: (target: WizardStep) => void;
}) {
  const serviceLabels = state.selectedServices
    .map((sid) => SERVICES[sid].shortLabel)
    .join(" · ");
  const urgencyLabel = state.urgency ? URGENCY_LABELS[state.urgency] : "—";
  const descPreview =
    state.description.length > 180
      ? `${state.description.slice(0, 180).trim()}…`
      : state.description;

  return (
    <div className="calc-recap">
      <div className="calc-recap-h">
        <div className="calc-recap-tag">RÉCAP AVANT ENVOI</div>
        <div className="calc-recap-title">Vérifie tes choix avant de lancer l&apos;IA</div>
      </div>

      <div className="calc-recap-rows">
        <div className="calc-recap-row">
          <div className="calc-recap-row-label">Services</div>
          <div className="calc-recap-row-value">
            <b>{state.selectedServices.length}</b>
            {state.selectedServices.length > 0 && <> · {serviceLabels}</>}
          </div>
          <button
            type="button"
            className="calc-recap-edit"
            onClick={() => onJumpToStep({ kind: "select" })}
            aria-label="Modifier la sélection de services"
          >
            Modifier
          </button>
        </div>

        {state.selectedServices.map((sid) => {
          const ans = state.perService[sid] as Record<string, unknown> | undefined;
          const hasAnswers = ans && Object.keys(ans).length > 0;
          return (
            <div key={sid} className="calc-recap-row calc-recap-row-sub">
              <div className="calc-recap-row-label">↳ {SERVICES[sid].shortLabel}</div>
              <div className="calc-recap-row-value">
                {hasAnswers ? (
                  <span className="calc-recap-ok">✓ Renseigné</span>
                ) : (
                  <span className="calc-recap-skip">⊘ Passé</span>
                )}
              </div>
              <button
                type="button"
                className="calc-recap-edit"
                onClick={() => onJumpToStep({ kind: "service", serviceId: sid })}
                aria-label={`Modifier ${SERVICES[sid].label}`}
              >
                Modifier
              </button>
            </div>
          );
        })}

        <div className="calc-recap-row">
          <div className="calc-recap-row-label">Délai</div>
          <div className="calc-recap-row-value">{urgencyLabel}</div>
          <button
            type="button"
            className="calc-recap-edit"
            onClick={() => onJumpToStep({ kind: "urgency" })}
            aria-label="Modifier le délai"
          >
            Modifier
          </button>
        </div>

        <div className="calc-recap-row">
          <div className="calc-recap-row-label">Description</div>
          <div className="calc-recap-row-value calc-recap-row-desc">
            {descPreview || <em className="calc-recap-empty">— vide —</em>}
            <span className="calc-recap-meta">{state.description.length} car.</span>
          </div>
          <button
            type="button"
            className="calc-recap-edit"
            onClick={() => onJumpToStep({ kind: "description" })}
            aria-label="Modifier la description"
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}
