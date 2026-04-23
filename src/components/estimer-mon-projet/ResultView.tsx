"use client";

import Link from "next/link";
import type { EstimateResult, RiskSeverity } from "./types";

interface ResultViewProps {
  result: EstimateResult;
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
  const { summary, discovery, phasing, stack, risks, lagniappe, warnings, not_a_good_fit_warning, next_steps } = result;

  // Prefill mailto for the "demander un devis" CTA
  const calendlyMailtoBody = encodeURIComponent(
    `Bonjour,\n\nJ'ai utilisé votre calculateur IA et l'estimation me paraît cohérente. ` +
      `Je voudrais réserver un Discovery Sprint pour avoir un devis ferme.\n\n` +
      `Synthèse de l'estimation :\n` +
      `- ${summary.project_type_label}\n` +
      `- Fourchette : ${euro(summary.estimated_price.min)}–${euro(summary.estimated_price.max)} € · ${summary.estimated_duration_weeks.min}-${summary.estimated_duration_weeks.max} sem.\n` +
      `- Plan suggéré : ${summary.suggested_plan}\n\n` +
      `Merci !`
  );
  const mailtoHref = `mailto:hello@hagnere-code.fr?subject=${encodeURIComponent(
    "Demande de Discovery Sprint suite estimation IA"
  )}&body=${calendlyMailtoBody}`;

  return (
    <section className="rview">
      <div className="wrap">
        {/* Hero card — the big estimate */}
        <div className="rview-hero">
          <div className="rview-hero-bg-grid" />
          <div className="rview-hero-bg-radial" />

          <div className="rview-hero-tag">
            <span className="rview-hero-tag-pill">ESTIMATION IA</span>
            <span className="rview-hero-tag-text">
              Générée par Claude Opus 4.7 · ~{Math.round(tokensUsed / 100) / 10} k tokens
            </span>
          </div>

          <h1 className="rview-hero-title">
            <span className="rview-hero-amount">
              {euro(summary.estimated_price.min)}
              <span className="rview-hero-currency">–</span>
              {euro(summary.estimated_price.max)}
              <span className="rview-hero-currency"> € HT</span>
            </span>
          </h1>

          <div className="rview-hero-subline">
            <span>
              <b>{summary.estimated_duration_weeks.min}–{summary.estimated_duration_weeks.max}</b> semaines
            </span>
            <span className="sep" />
            <span>
              Plan suggéré&nbsp;: <b>{summary.suggested_plan}</b>
            </span>
            <span className="sep" />
            <span>
              Confiance&nbsp;: <ConfidenceBadge confidence={summary.confidence} />
            </span>
          </div>

          <p className="rview-hero-oneliner">{summary.one_liner}</p>

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

        {/* Not-a-good-fit alert */}
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

        {/* Discovery + Phasing */}
        <div className="rview-grid">
          <div className="rview-discovery">
            <div className="rview-section-h">
              <span className="eyebrow">— Étape 0 · Avant le projet</span>
              <h2>Discovery Sprint</h2>
            </div>
            <div className="rview-discovery-card">
              <div className="rview-discovery-price">
                <span className="rview-discovery-amount">{euro(discovery.price)} €</span>
                <span className="rview-discovery-meta">{discovery.duration_days} jours · déduits si phase 2</span>
              </div>
              <ul className="rview-discovery-list">
                {discovery.deliverables.map((d) => (
                  <li key={d}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rview-phasing">
            <div className="rview-section-h">
              <span className="eyebrow">— Phasing semaine par semaine</span>
              <h2>
                Le Sprint Fixe™ <span className="grad-accent">en {phasing.length} semaines</span>
              </h2>
            </div>
            <div className="rview-phasing-rail">
              {phasing.map((week) => (
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
        </div>

        {/* Stack + Lagniappe */}
        <div className="rview-grid-2">
          <div className="rview-stack">
            <div className="rview-section-h">
              <span className="eyebrow">— Stack recommandée</span>
              <h2>L&apos;outillage technique.</h2>
            </div>
            <div className="rview-stack-list">
              <StackRow label="Backend" items={stack.backend} />
              <StackRow label="Frontend" items={stack.frontend} />
              <StackRow label="Data &amp; stockage" items={stack.data} />
              <StackRow label="Intégrations" items={stack.integrations} />
              <StackRow label="Hébergement" items={[stack.hosting]} />
            </div>
          </div>

          <div className="rview-lagniappe">
            <div className="rview-section-h">
              <span className="eyebrow">— La lagniappe</span>
              <h2>
                Le cadeau <span className="grad-accent">offert.</span>
              </h2>
            </div>
            <div className="rview-lagniappe-card">
              <div className="rview-lagniappe-icon">🎁</div>
              <h3 className="rview-lagniappe-feature">{lagniappe.feature_idea}</h3>
              <p className="rview-lagniappe-why">{lagniappe.why_it_helps}</p>
              <div className="rview-lagniappe-meta">
                <span className="rview-lagniappe-pill">+{lagniappe.estimated_added_days} jours</span>
                <span>Inclus, jamais facturé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Risks */}
        {risks.length > 0 && (
          <div className="rview-risks">
            <div className="rview-section-h">
              <span className="eyebrow">— Risques identifiés</span>
              <h2>
                Ce qu&apos;il faut <span className="grad-accent">anticiper.</span>
              </h2>
            </div>
            <div className="rview-risks-grid">
              {risks.map((risk, i) => (
                <div key={i} className={`rview-risk rview-risk-${risk.severity}`}>
                  <div className="rview-risk-meta">
                    <span className={`rview-risk-pill rview-risk-pill-${risk.severity}`}>
                      {SEVERITY_LABELS[risk.severity]}
                    </span>
                  </div>
                  <h3 className="rview-risk-title">{risk.title}</h3>
                  <div className="rview-risk-mitigation">
                    <span className="rview-risk-mitigation-h">MITIGATION</span>
                    <p>{risk.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Warnings */}
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

        {/* Next steps + CTAs */}
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
              Voir les fourchettes de prix
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

function ConfidenceBadge({ confidence }: { confidence: "low" | "medium" | "high" }) {
  const labels = { low: "faible", medium: "moyenne", high: "élevée" };
  return <span className={`rview-conf rview-conf-${confidence}`}>{labels[confidence]}</span>;
}

function StackRow({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="rview-stack-row">
      <div className="rview-stack-label">{label.replace(/&amp;/g, "&")}</div>
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
