"use client";

import Link from "next/link";
import type { MultiServiceEstimate, RiskSeverity } from "./types";

interface ResultViewProps {
  result: MultiServiceEstimate;
  tokensUsed: number;
  contactEmail: string;
  onRestart: () => void;
}

function euro(n: number): string {
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
}

const SEVERITY_LABELS: Record<RiskSeverity, string> = {
  low: "Risque faible",
  medium: "Risque modéré",
  high: "Risque élevé",
};

export function ResultView({ result, tokensUsed, contactEmail, onRestart }: ResultViewProps) {
  const {
    summary,
    oneshot_projects,
    monthly_retainers,
    team_allocation,
    deployment_roadmap,
    risks_global,
    warnings,
    not_a_good_fit_warning,
    next_steps,
  } = {
    risks_global: [], // not in v1 schema yet, kept for future
    ...result,
  };
  void risks_global;

  // Build mailto with the synthesis pre-filled
  const mailtoBody = encodeURIComponent(
    `Bonjour,\n\nJ'ai utilisé votre calculateur IA et l'estimation me paraît cohérente. ` +
      `Je voudrais réserver un Discovery Sprint pour avoir un devis ferme.\n\n` +
      `Synthèse de l'estimation :\n` +
      `- Projets one-shot : ${
        summary.oneshot_price_total
          ? `${euro(summary.oneshot_price_total.min)} – ${euro(summary.oneshot_price_total.max)} €`
          : "aucun"
      }\n` +
      `- Mensuel récurrent : ${
        summary.monthly_recurring_total
          ? `${euro(summary.monthly_recurring_total.min)} – ${euro(summary.monthly_recurring_total.max)} €/mois`
          : "aucun"
      }\n` +
      `- Année 1 totale : ${euro(summary.year_1_total.min)} – ${euro(summary.year_1_total.max)} €\n\n` +
      `Services dans le scope : ${[
        ...oneshot_projects.map((p) => p.service_label),
        ...monthly_retainers.map((r) => r.service_label),
      ].join(", ")}\n\nMerci !`,
  );
  const mailtoHref = `mailto:hello@hagnere-code.fr?subject=${encodeURIComponent(
    "Demande de Discovery Sprint suite estimation IA",
  )}&body=${mailtoBody}`;

  return (
    <section className="rview">
      <div className="wrap">
        {/* ═══ HERO ═══ */}
        <div className="rview-hero">
          <div className="rview-hero-bg-grid" />
          <div className="rview-hero-bg-radial" />

          <div className="rview-hero-tag">
            <span className="rview-hero-tag-pill">ESTIMATION IA MULTI-SERVICES</span>
            <span className="rview-hero-tag-text">
              Claude Opus 4.7 · ~{Math.round(tokensUsed / 100) / 10} k tokens
            </span>
          </div>

          {/* Multi-volet pricing */}
          <div className="rview-hero-prices">
            {summary.oneshot_price_total && (
              <div className="rview-hero-price">
                <div className="rview-hero-price-label">PROJETS ONE-SHOT</div>
                <div className="rview-hero-price-amount">
                  {euro(summary.oneshot_price_total.min)}
                  <span className="rview-hero-price-sep">–</span>
                  {euro(summary.oneshot_price_total.max)}
                  <span className="rview-hero-price-currency"> € HT</span>
                </div>
              </div>
            )}
            {summary.monthly_recurring_total && (
              <div className="rview-hero-price">
                <div className="rview-hero-price-label">MENSUEL RÉCURRENT</div>
                <div className="rview-hero-price-amount">
                  {euro(summary.monthly_recurring_total.min)}
                  <span className="rview-hero-price-sep">–</span>
                  {euro(summary.monthly_recurring_total.max)}
                  <span className="rview-hero-price-currency"> € / mois</span>
                </div>
              </div>
            )}
            <div className="rview-hero-price rview-hero-price-total">
              <div className="rview-hero-price-label">ANNÉE 1 TOTALE</div>
              <div className="rview-hero-price-amount">
                {euro(summary.year_1_total.min)}
                <span className="rview-hero-price-sep">–</span>
                {euro(summary.year_1_total.max)}
                <span className="rview-hero-price-currency"> € HT</span>
              </div>
            </div>
          </div>

          <div className="rview-hero-subline">
            {summary.build_duration_weeks && (
              <span>
                <b>{summary.build_duration_weeks.min}–{summary.build_duration_weeks.max}</b> semaines de build
              </span>
            )}
            {summary.build_duration_weeks && <span className="sep" />}
            <span>
              Confiance&nbsp;: <ConfidenceBadge confidence={summary.overall_confidence} />
            </span>
          </div>

          <p className="rview-hero-oneliner">{summary.one_liner}</p>

          {/* Synergies détectées */}
          {summary.detected_synergies.length > 0 && (
            <div className="rview-hero-synergies">
              <div className="rview-hero-synergies-h">SYNERGIES DÉTECTÉES</div>
              <ul>
                {summary.detected_synergies.map((s, i) => (
                  <li key={i}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rview-hero-disclaimer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span>
              <b>Estimation indicative</b> basée sur ton brief et nos 23 projets livrés.
              Le devis ferme est délivré après le Discovery Sprint (1 500 €, déduit phase 2).
            </span>
          </div>
        </div>

        {/* Misfit alert */}
        {not_a_good_fit_warning && (
          <div className="rview-misfit">
            <div className="rview-misfit-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </div>
            <div className="rview-misfit-body">
              <div className="rview-misfit-h">À toi de décider — Sprint Fixe™ n&apos;est peut-être pas ce qu&apos;il te faut</div>
              <p>{not_a_good_fit_warning}</p>
            </div>
          </div>
        )}

        {/* ═══ ROADMAP DE DÉPLOIEMENT ═══ */}
        {deployment_roadmap.length > 0 && (
          <div className="rview-roadmap">
            <div className="rview-section-h">
              <span className="eyebrow">— Plan de déploiement</span>
              <h2>
                L&apos;ordre <span className="grad-accent">recommandé.</span>
              </h2>
            </div>
            <RoadmapTimeline phases={deployment_roadmap} />
          </div>
        )}

        {/* ═══ DEUX COLONNES : One-shot + Retainers ═══ */}
        <div className="rview-two-cols">
          {/* One-shot column */}
          {oneshot_projects.length > 0 && (
            <div className="rview-col">
              <div className="rview-section-h">
                <span className="eyebrow">— Forfaits projet</span>
                <h2>
                  {oneshot_projects.length} projet{oneshot_projects.length > 1 ? "s" : ""}
                  <br />
                  <span className="grad-accent">one-shot.</span>
                </h2>
              </div>
              <div className="rview-projects">
                {oneshot_projects.map((p) => (
                  <ProjectCard key={p.service_id} project={p} />
                ))}
              </div>
            </div>
          )}

          {/* Retainers column */}
          {monthly_retainers.length > 0 && (
            <div className="rview-col">
              <div className="rview-section-h">
                <span className="eyebrow">— Retainers mensuels</span>
                <h2>
                  {monthly_retainers.length} prestation{monthly_retainers.length > 1 ? "s" : ""}
                  <br />
                  <span className="grad-accent">récurrente{monthly_retainers.length > 1 ? "s" : ""}.</span>
                </h2>
              </div>
              <div className="rview-retainers">
                {monthly_retainers.map((r) => (
                  <RetainerCard key={r.service_id} retainer={r} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ═══ ÉQUIPE ALLOUÉE ═══ */}
        {team_allocation.length > 0 && (
          <div className="rview-team">
            <div className="rview-section-h">
              <span className="eyebrow">— Équipe allouée</span>
              <h2>
                Qui fait quoi, <span className="grad-accent">combien de temps.</span>
              </h2>
            </div>
            <div className="rview-team-grid">
              {team_allocation.map((m, i) => (
                <div key={i} className="rview-team-card">
                  <div className="rview-team-role">{m.role}</div>
                  <div className="rview-team-meta">
                    <span className={`rview-team-pill rview-team-pill-${m.involvement}`}>
                      {m.involvement === "full-time" && "Plein temps"}
                      {m.involvement === "part-time" && "Temps partiel"}
                      {m.involvement === "ponctuel" && "Ponctuel"}
                    </span>
                    <span>
                      <b>{m.duration_weeks}</b> sem.
                    </span>
                  </div>
                  <div className="rview-team-ownership">{m.ownership}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ WARNINGS ═══ */}
        {warnings.length > 0 && (
          <div className="rview-warnings">
            <div className="rview-warnings-h">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <span>POINTS D&apos;ATTENTION</span>
            </div>
            <ul className="rview-warnings-list">
              {warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ═══ NEXT STEPS + CTAs ═══ */}
        <div className="rview-next">
          <div className="rview-next-bg-grid" />
          <div className="rview-next-bg-radial" />
          <div className="rview-next-tag">
            <span className="rview-next-tag-pill">PROCHAINES ÉTAPES</span>
          </div>
          <h2 className="rview-next-title">
            Tu fais quoi maintenant&nbsp;?<br />
            <span className="grad-accent">Trois actions concrètes.</span>
          </h2>
          <ol className="rview-next-list">
            {next_steps.map((step, i) => (
              <li key={i}>
                <div className="rview-next-num">{i + 1}</div>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="rview-next-cta">
            <Link href={mailtoHref} className="btn btn-accent btn-lg">
              📅 Réserver un Discovery Sprint
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/tarifs" className="rview-next-btn-ghost">
              Voir les fourchettes par service
            </Link>
            <button type="button" onClick={onRestart} className="rview-next-btn-ghost">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
              </svg>
              Refaire une estimation
            </button>
          </div>
          {contactEmail && (
            <p className="rview-next-emailed">
              On t&apos;enverra un récap par email à <b>{contactEmail}</b> sous 24 h ouvrées.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// Sub-components
// =====================================================================

function ConfidenceBadge({ confidence }: { confidence: "low" | "medium" | "high" }) {
  const labels = { low: "faible", medium: "moyenne", high: "élevée" };
  return <span className={`rview-conf rview-conf-${confidence}`}>{labels[confidence]}</span>;
}

function ProjectCard({
  project,
}: {
  project: MultiServiceEstimate["oneshot_projects"][number];
}) {
  return (
    <details className="rview-project" open>
      <summary className="rview-project-summary">
        <div className="rview-project-head">
          <div>
            <div className="rview-project-label">{project.service_label}</div>
            <div className="rview-project-scope">{project.scope_summary}</div>
          </div>
          <div className="rview-project-price">
            <div className="rview-project-amount">
              {euro(project.estimated_price.min)} – {euro(project.estimated_price.max)} €
            </div>
            <div className="rview-project-meta">
              {project.estimated_duration_weeks.min}–{project.estimated_duration_weeks.max} sem.
              {project.discovery_required && " · Discovery requis"}
            </div>
          </div>
        </div>
      </summary>

      {/* Phasing */}
      {project.phasing.length > 0 && (
        <div className="rview-project-section">
          <div className="rview-project-section-h">PHASING</div>
          <div className="rview-phasing-rail">
            {project.phasing.map((week) => (
              <div key={week.week} className="rview-phasing-row">
                <div className="rview-phasing-marker">
                  <span>{week.week}</span>
                </div>
                <div className="rview-phasing-card">
                  <div className="rview-phasing-meta">
                    <span className="rview-phasing-week">SEMAINE {week.week}</span>
                    <span className="rview-phasing-name">{week.name}</span>
                  </div>
                  <ul className="rview-phasing-tasks">
                    {week.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                  <div className="rview-phasing-friday">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>
                      <b>Démo vendredi&nbsp;:</b> {week.friday_demo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stack */}
      <div className="rview-project-section">
        <div className="rview-project-section-h">STACK</div>
        <div className="rview-stack-list">
          <StackRow label="Backend" items={project.stack.backend} />
          <StackRow label="Frontend" items={project.stack.frontend} />
          <StackRow label="Data" items={project.stack.data} />
          <StackRow label="Intégrations" items={project.stack.integrations} />
          <StackRow label="Hébergement" items={[project.stack.hosting]} />
        </div>
      </div>

      {/* Risks */}
      {project.risks.length > 0 && (
        <div className="rview-project-section">
          <div className="rview-project-section-h">RISQUES &amp; MITIGATION</div>
          <div className="rview-risks-grid">
            {project.risks.map((r, i) => (
              <div key={i} className={`rview-risk rview-risk-${r.severity}`}>
                <span className={`rview-risk-pill rview-risk-pill-${r.severity}`}>
                  {SEVERITY_LABELS[r.severity]}
                </span>
                <h4 className="rview-risk-title">{r.title}</h4>
                <p className="rview-risk-mit">{r.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lagniappe */}
      {project.lagniappe && (
        <div className="rview-project-section">
          <div className="rview-lagniappe-card">
            <div className="rview-lagniappe-icon">🎁</div>
            <div className="rview-lagniappe-body">
              <div className="rview-lagniappe-h">LAGNIAPPE — feature bonus offerte</div>
              <h4 className="rview-lagniappe-feature">{project.lagniappe.feature_idea}</h4>
              <p className="rview-lagniappe-why">{project.lagniappe.why_it_helps}</p>
              <div className="rview-lagniappe-meta">
                <span className="rview-lagniappe-pill">+{project.lagniappe.estimated_added_days} jours offerts</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </details>
  );
}

function RetainerCard({
  retainer,
}: {
  retainer: MultiServiceEstimate["monthly_retainers"][number];
}) {
  return (
    <div className="rview-retainer">
      <div className="rview-retainer-head">
        <div>
          <div className="rview-retainer-label">{retainer.service_label}</div>
          <div className="rview-retainer-tier">Tier recommandé : <b>{retainer.recommended_tier}</b></div>
        </div>
        <div className="rview-retainer-price">
          <div className="rview-retainer-amount">
            {euro(retainer.monthly_price.min)} – {euro(retainer.monthly_price.max)} €
          </div>
          <div className="rview-retainer-per">/ mois HT</div>
        </div>
      </div>

      <div className="rview-retainer-meta">
        <span>
          Engagement min&nbsp;: <b>{retainer.minimum_engagement_months} mois</b>
        </span>
        {retainer.setup_fee && retainer.setup_fee > 0 && (
          <span>
            · Setup&nbsp;: <b>{euro(retainer.setup_fee)} €</b>
          </span>
        )}
        {retainer.starts_after_oneshot && (
          <span>
            · Démarre après <b>{retainer.starts_after_oneshot}</b>
            {retainer.starts_at_week_offset > 0 ? ` (S+${retainer.starts_at_week_offset})` : ""}
          </span>
        )}
      </div>

      {retainer.monthly_deliverables.length > 0 && (
        <div className="rview-retainer-deliverables">
          <div className="rview-retainer-deliverables-h">LIVRABLES MENSUELS</div>
          <ul>
            {retainer.monthly_deliverables.map((d, i) => (
              <li key={i}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function RoadmapTimeline({
  phases,
}: {
  phases: MultiServiceEstimate["deployment_roadmap"];
}) {
  if (phases.length === 0) return null;
  // Compute total span for scaling
  const sorted = [...phases].sort((a, b) => a.order - b.order);
  const lastPhase = sorted[sorted.length - 1];
  const totalWeeks = Math.max(
    lastPhase.starts_at_week + lastPhase.duration_weeks,
    8,
  );

  return (
    <div className="rview-roadmap-list">
      {sorted.map((phase) => {
        const startPct = (phase.starts_at_week / totalWeeks) * 100;
        const widthPct = Math.max(
          (phase.duration_weeks / totalWeeks) * 100,
          // visual minimum so very short phases stay visible
          4,
        );
        const isShortLabel = widthPct < 18;
        return (
          <div key={phase.order} className={`rview-roadmap-row rview-roadmap-row-${phase.type}`}>
            <div className="rview-roadmap-meta">
              <span className="rview-roadmap-order">#{phase.order}</span>
              <span className="rview-roadmap-week">
                S{phase.starts_at_week}
                {phase.duration_weeks > 0 ? `–S${phase.starts_at_week + phase.duration_weeks}` : ""}
              </span>
            </div>
            <div className="rview-roadmap-track">
              <div
                className={`rview-roadmap-bar ${isShortLabel ? "rview-roadmap-bar-short" : ""}`}
                style={{ left: `${startPct}%`, width: `${widthPct}%` }}
                title={`${phase.name} (S${phase.starts_at_week} → S${phase.starts_at_week + phase.duration_weeks})`}
              >
                <span className="rview-roadmap-bar-label">{phase.name}</span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="rview-roadmap-axis">
        <span>S0</span>
        <span>S{Math.round(totalWeeks / 4)}</span>
        <span>S{Math.round(totalWeeks / 2)}</span>
        <span>S{Math.round((totalWeeks * 3) / 4)}</span>
        <span>S{totalWeeks}</span>
      </div>
    </div>
  );
}

function StackRow({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="rview-stack-row">
      <div className="rview-stack-label">{label}</div>
      <div className="rview-stack-chips">
        {items.map((item) => (
          <span key={item} className="rview-stack-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
