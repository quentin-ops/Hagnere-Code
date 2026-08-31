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
import {
  clearProjectInquiryClientKey,
  getProjectInquiryClientKey,
} from "@/lib/project-inquiry-client-key";
import { trackFunnelEvent } from "@/lib/funnel-analytics";
import { trackLeadConversion } from "@/lib/lead-conversion";
import {
  calculateExcelCost,
  EXCEL_CALCULATOR_DEFAULTS,
  REFERENCE_PROJECT_BUDGET,
} from "@/lib/excel-cost-calculator";
import "./excel-calculator.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/site-footer.css";

type CaptureFieldName =
  | "firstName"
  | "email"
  | "company"
  | "mathChallengeAnswer"
  | "consent";

type CaptureErrors = Partial<Record<CaptureFieldName, string>>;

type CaptureStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message?: string }
  | { kind: "error"; message: string; fields?: CaptureErrors };

function euro(n: number): string {
  return n.toLocaleString("fr-FR", {
    maximumFractionDigits: 0,
  }) + " €";
}

const CAPTURE_FIELD_ORDER: CaptureFieldName[] = [
  "firstName",
  "email",
  "company",
  "mathChallengeAnswer",
  "consent",
];

function focusFirstCaptureError(
  form: HTMLFormElement,
  errors: CaptureErrors,
): void {
  const firstField = CAPTURE_FIELD_ORDER.find((name) => errors[name]);
  if (!firstField) return;
  requestAnimationFrame(() => {
    const control = form.elements.namedItem(firstField);
    if (control instanceof HTMLElement) control.focus();
  });
}

export function ExcelCalculator() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  // --- Inputs
  const [people, setPeople] = useState(EXCEL_CALCULATOR_DEFAULTS.people);
  const [hoursPerWeek, setHoursPerWeek] = useState(
    EXCEL_CALCULATOR_DEFAULTS.hoursPerWeek,
  );
  const [avgSalary, setAvgSalary] = useState(
    EXCEL_CALCULATOR_DEFAULTS.avgSalary,
  ); // brut annuel chargé
  const [errorRate, setErrorRate] = useState(
    EXCEL_CALCULATOR_DEFAULTS.errorRate,
  ); // % d'erreurs Excel estimé
  const [errorCostPerIncident, setErrorCostPerIncident] = useState(
    EXCEL_CALCULATOR_DEFAULTS.errorCostPerIncident,
  );

  // --- Derived calculations
  const result = useMemo(
    () =>
      calculateExcelCost({
        people,
        hoursPerWeek,
        avgSalary,
        errorRate,
        errorCostPerIncident,
      }),
    [people, hoursPerWeek, avgSalary, errorRate, errorCostPerIncident],
  );

  // --- Email capture
  const [status, setStatus] = useState<CaptureStatus>({ kind: "idle" });
  // Anti-bot maison : question de calcul, vérifiée côté client avant envoi
  // puis revalidée server-side par /api/project-inquiry.
  const [math, setMath] = useState<MathChallengeValue | null>(null);
  const submissionKeyRef = useRef<string | null>(null);
  // Dénominateur du formulaire : sans lui on connaît le nombre d'envois, jamais
  // le nombre de visiteurs qui ont commencé à le remplir — donc aucun taux de
  // transformation sur une page servie à du trafic payant. Un seul événement
  // par montage, au premier focus, comme le formulaire du pied de page.
  const openTrackedRef = useRef(false);

  async function onCapture(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const firstName = String(data.get("firstName") || "").trim();
    const company = String(data.get("company") || "").trim();
    const validationErrors: CaptureErrors = {};

    if (!firstName) validationErrors.firstName = "Indiquez votre prénom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      validationErrors.email = "Saisissez une adresse email valide.";
    }
    if (!company) validationErrors.company = "Indiquez votre entreprise.";
    if (!isMathAnswerCorrect(math)) {
      validationErrors.mathChallengeAnswer =
        "La réponse au calcul anti-robot est incorrecte — recomptez.";
    }
    if (data.get("consent") !== "on") {
      validationErrors.consent =
        "Confirmez avoir lu la politique de confidentialité.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        kind: "error",
        message: "Corrigez les champs indiqués avant l’envoi.",
        fields: validationErrors,
      });
      focusFirstCaptureError(form, validationErrors);
      return;
    }

    setStatus({ kind: "submitting" });

    const message = [
      "[Calculateur coût Excel — résultats partagés]",
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
      `· Hypothèse illustrative de budget projet : ${euro(REFERENCE_PROJECT_BUDGET)}`,
      `· Écart brut sur 3 ans avant coûts résiduels et récurrents : ${euro(result.grossThreeYearGap)}`,
      `· Seuil d'équivalence brut théorique : ${result.grossBreakEvenMonths} mois`,
      "· Attention : ce calcul ne constitue ni un devis, ni une prévision de gain, ni un ROI.",
    ].join("\n");

    try {
      const submissionKey =
        submissionKeyRef.current ?? getProjectInquiryClientKey();
      submissionKeyRef.current = submissionKey;
      const res = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": submissionKey,
        },
        body: JSON.stringify({
          firstName,
          lastName: "— (calculateur)",
          email,
          company,
          // Aucun `budget` n'est envoyé. Le champ était déduit du coût du statu
          // quo simulé (`totalYearCost > 20000 ? "15-30k" : "< 15k"`), donc
          // renseigné même quand le visiteur n'avait touché aucun curseur — les
          // valeurs par défaut de la page donnent déjà 46 000 €. Cette tranche
          // n'était pas saisie : elle repartait pourtant telle quelle dans
          // l'accusé de réception envoyé AU VISITEUR, sous le titre
          // « Récapitulatif », à côté d'un libellé « Budget » emprunté au
          // tunnel /demarrer-un-projet où il est, lui, réellement choisi.
          // Le champ est optionnel côté API : le récapitulatif affiche
          // « non précisé », ce qui est exact. Le coût annuel simulé reste dans
          // le corps du message, sous son vrai nom (« Total annuel »).
          message,
          mathChallenge: toMathChallengePayload(math),
          consent: data.get("consent") === "on",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
        errors?: Record<string, string>;
        captured?: boolean;
      };
      // Un 200 ne vaut pas réception : /api/project-inquiry renvoie
      // `{ ok: true, captured: false }` sans rien enregistrer (piège à robots,
      // ou absence de fournisseur d'envoi hors production). Annoncer « demande
      // envoyée » dans ce cas ferait repartir un visiteur rassuré alors que
      // personne n'a reçu ses coordonnées.
      if (!res.ok || json.captured !== true) {
        const serverFields = Object.fromEntries(
          CAPTURE_FIELD_ORDER.flatMap((name) => {
            const apiName =
              name === "mathChallengeAnswer" ? "mathChallenge" : name;
            const fieldError = json.errors?.[apiName];
            return fieldError ? [[name, fieldError]] : [];
          }),
        ) as CaptureErrors;
        setStatus({
          kind: "error",
          message:
            json.error ||
            (res.ok
              ? "Votre demande n'a pas été enregistrée. Réessayez, ou écrivez-nous à quentin@hagnere-patrimoine.fr."
              : "Envoi impossible pour le moment. Vérifiez les champs indiqués."),
          fields: serverFields,
        });
        focusFirstCaptureError(form, serverFields);
        return;
      }
      setStatus({ kind: "success", message: json.message });
      // Le calculateur est une surface de conversion à part entière — prénom,
      // e-mail pro et entreprise — et n'émettait strictement aucune mesure :
      // ni ligne dans `funnel_analytics_event`, ni conversion Google Ads, alors
      // que le tunnel, le pied de page et /merci passent tous par ici.
      //
      // Clé de déduplication propre à cette page : le pied de page rendu plus
      // bas envoie ses propres conversions sous `contact_form:converted`, et un
      // même visiteur peut légitimement remplir les deux. Portée « document »
      // et non « session » : la portée session écrirait une clé dans le
      // navigateur, donc une ligne de plus au tableau « Stockages utilisés par
      // le site » de /legal/cookies, qui s'annonce exhaustif.
      trackLeadConversion("contact_form", "contact_form_submit_success", {
        page: "/outils/calculateur-cout-excel",
        dedupeKey: "calc:converted",
        dedupeScope: "document",
      });
      submissionKeyRef.current = null;
      clearProjectInquiryClientKey();
    } catch {
      setStatus({
        kind: "error",
        message:
          "Envoi impossible pour le moment. Réessayez ou écrivez-nous à quentin@hagnere-patrimoine.fr.",
      });
    }
  }

  const errors = status.kind === "error" ? status.fields || {} : {};

  // --- UI
  return (
    <div ref={rootRef} className="hc-design calc-root">
      <MainNav />
      <main id="main-content" tabIndex={-1}>

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
            perdu, erreurs de saisie, ressaisies. Mettez ce coût déclaré en
            regard d&apos;une hypothèse de budget, sans le confondre avec un ROI.
          </p>
          <div className="calc-hero-meta">
            <span>✓ Aucun email obligatoire pour le calcul</span>
            <span className="sep" />
            <span>✓ Résultat détaillé à l&apos;écran</span>
            <span className="sep" />
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </section>

      {/* Calculator.
          `aria-label` : une <section> sans nom accessible n'est pas exposée
          comme repère de navigation par un lecteur d'écran — elle vaut alors
          une <div>, mais en laissant croire le contraire à la relecture.
          C'est le bloc central de l'outil : il mérite un nom. */}
      <section className="calc-main" aria-label="Calculateur du coût de votre Excel">
        <div className="wrap calc-grid">
          {/* Inputs */}
          <div className="calc-inputs">
            <div className="calc-card">
              <div className="calc-card-head">
                <div className="calc-card-kind">VOS HYPOTHÈSES</div>
                <div className="calc-card-title">Ajustez, le résultat bouge en direct</div>
              </div>

              <div className="calc-field">
                <label htmlFor="excel-people">
                  <span>Personnes concernées par ces Excel</span>
                  <b className="calc-val">{people}</b>
                </label>
                <input
                  id="excel-people"
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
                <label htmlFor="excel-hours-per-week">
                  <span>Heures par semaine perdues (par personne)</span>
                  <b className="calc-val">{hoursPerWeek} h</b>
                </label>
                <input
                  id="excel-hours-per-week"
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
                <label htmlFor="excel-average-salary">
                  <span>Salaire brut chargé moyen</span>
                  <b className="calc-val">{euro(avgSalary)} / an</b>
                </label>
                <input
                  id="excel-average-salary"
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
                <label htmlFor="excel-error-rate">
                  <span>Taux d&apos;erreur dans ces fichiers (estimé)</span>
                  <b className="calc-val">{errorRate} %</b>
                </label>
                <input
                  id="excel-error-rate"
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
                <label htmlFor="excel-incident-cost">
                  <span>Coût moyen d&apos;un incident causé par l&apos;Excel</span>
                  <b className="calc-val">{euro(errorCostPerIncident)}</b>
                </label>
                <input
                  id="excel-incident-cost"
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
                {/* `minHeight` : ce resume mesurait 18 px de haut, la moitie de la
                    cible tactile de 44 px, sur le seul controle qui explique le
                    calcul affiche juste au-dessus. */}
                <summary style={{ minHeight: 44, display: "flex", alignItems: "center" }}>
                  Comment on calcule
                </summary>
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
                    <b>Hypothèse de comparaison</b> : budget projet illustratif
                    de {euro(REFERENCE_PROJECT_BUDGET)}, à remplacer par un devis
                  </li>
                  <li>
                    <b>Limite</b> : le seuil brut suppose que 100 % des coûts
                    déclarés disparaissent. Il exclut temps résiduel, adoption,
                    maintenance, hébergement, financement, fiscalité et aléas
                  </li>
                </ul>
              </details>
            </div>
          </div>

          {/* Results */}
          <section className="calc-results" aria-labelledby="calc-results-title">
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
              Estimation mise à jour : {euro(result.totalYearCost)} par an, soit {euro(result.totalThreeYears)} sur trois ans. Seuil d&apos;équivalence brut théorique : {result.grossBreakEvenMonths} mois.
            </p>
            <div className="calc-res-card">
              <div className="calc-res-kind" id="calc-results-title">COÛT ANNUEL ESTIMÉ</div>
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
                Coût déclaré du statu quo si les hypothèses restent stables
              </div>
            </div>

            <div className="calc-res-compare">
              <div className="calc-res-compare-head">
                <div className="calc-res-compare-kind">HYPOTHÈSE DE COMPARAISON</div>
                <div className="calc-res-compare-title">
                  Budget projet illustratif
                </div>
              </div>
              <div className="calc-res-compare-price">{euro(REFERENCE_PROJECT_BUDGET)}</div>
              <div className="calc-res-compare-meta">
                À remplacer par un devis · planning, droits et coûts tiers à cadrer
              </div>

              <div
                className={
                  "calc-res-savings" +
                  (result.grossThreeYearGap > 0 ? "" : " is-neutral")
                }
              >
                <div className="calc-res-savings-kind">
                  {result.grossThreeYearGap > 0
                    ? "ÉCART BRUT SUR 3 ANS"
                    : "BUDGET DE RÉFÉRENCE SUPÉRIEUR DE"}
                </div>
                <div
                  className={
                    "calc-res-savings-big " +
                    (result.grossThreeYearGap > 0 ? "good" : "neutral")
                  }
                >
                  {result.grossThreeYearGap > 0 ? "+ " : ""}
                  {euro(Math.abs(result.grossThreeYearGap))}
                </div>
                <div className="calc-res-savings-roi">
                  Seuil d&apos;équivalence brut théorique :{" "}
                  <b>{result.grossBreakEvenMonths} mois</b>
                </div>
                <p className="calc-res-caveat">
                  Ce n&apos;est ni un gain garanti ni un ROI : tous les coûts
                  résiduels, récurrents et de déploiement restent à chiffrer.
                </p>
              </div>
            </div>

            {/* Capture form */}
            <form
              className="calc-capture"
              onSubmit={onCapture}
              onFocusCapture={() => {
                if (openTrackedRef.current) return;
                openTrackedRef.current = true;
                // `form` distingue ce formulaire de celui du pied de page, rendu
                // sur la même page : sans cette propriété, les deux ouvertures
                // se confondraient dans le même dénominateur.
                trackFunnelEvent("contact_form_open", {
                  page: "/outils/calculateur-cout-excel",
                  form: "excel_calculator",
                });
              }}
              noValidate
              aria-busy={status.kind === "submitting"}
            >
              <div className="calc-capture-head">
                <div className="calc-card-kind">PARTAGER LE DIAGNOSTIC</div>
                <div className="calc-card-title">Envoyer vos hypothèses à l&apos;équipe</div>
                <p>
                  Le résultat reste visible sur cette page. Ce formulaire transmet
                  vos hypothèses pour permettre une réponse humaine, sans promettre
                  un rapport automatique ni un délai non contractualisé.
                </p>
              </div>

              <label className="calc-capture-field" htmlFor="calc-first-name">
                <span>Prénom</span>
                <input
                  id="calc-first-name"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? "calc-first-name-error" : undefined}
                />
                {errors.firstName && <em id="calc-first-name-error">{errors.firstName}</em>}
              </label>
              <label className="calc-capture-field" htmlFor="calc-email">
                <span>Email pro</span>
                <input
                  id="calc-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "calc-email-error" : undefined}
                />
                {errors.email && <em id="calc-email-error">{errors.email}</em>}
              </label>
              <label className="calc-capture-field" htmlFor="calc-company">
                <span>Entreprise</span>
                <input
                  id="calc-company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "calc-company-error" : undefined}
                />
                {errors.company && <em id="calc-company-error">{errors.company}</em>}
              </label>

              {/* Anti-bot maison : question de calcul (remplace Turnstile). */}
              <MathChallenge
                className="calc-capture-field"
                onChange={setMath}
                error={errors.mathChallengeAnswer}
              />

              <label className="calc-capture-consent">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "calc-consent-error" : undefined}
                />
                <span>
                  J&apos;ai pris connaissance de la politique de confidentialité et
                  je demande à HAGNERE CODE de traiter ces informations pour me
                  répondre. Selon que j&apos;agis en mon nom ou pour mon organisation,
                  la base est précontractuelle ou relève de l&apos;intérêt légitime à
                  traiter une demande professionnelle. Les données sont accessibles
                  à HAGNERE CODE et aux prestataires nécessaires, puis conservées au
                  maximum trois ans après le dernier échange utile en l&apos;absence de
                  contrat. La politique détaille les destinataires et vos droits.{" "}
                  <Link href="/legal/confidentialite">Politique de confidentialité</Link>
                </span>
              </label>
              {errors.consent && (
                <em className="calc-field-error" id="calc-consent-error">
                  {errors.consent}
                </em>
              )}

              <button
                type="submit"
                className="btn btn-accent btn-lg calc-capture-submit"
                disabled={status.kind === "submitting"}
                aria-busy={status.kind === "submitting"}
              >
                {status.kind === "submitting"
                  ? "Envoi en cours…"
                  : "Envoyer mon diagnostic"}
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>

              {status.kind === "success" && (
                <div className="calc-alert calc-alert-ok" role="status">
                  ✓ {status.message || "Demande reçue. Votre diagnostic a été transmis à l'équipe."}
                </div>
              )}
              {status.kind === "error" && (
                <div className="calc-alert calc-alert-err" role="alert">✕ {status.message}</div>
              )}

              <p className="calc-capture-legal">
                Aucune newsletter automatique. Votre email sert uniquement à
                répondre à cette demande.
              </p>
            </form>
          </section>
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
                Avant de chiffrer une reconstruction, appliquez aussi notre{" "}
                <Link
                  href="/guides/automatiser-processus-metier"
                  style={{ textDecoration: "underline" }}
                >
                  méthode pour choisir un premier processus à automatiser
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
                  déployé, échoue. Le devis doit préciser la formation, les
                  référents, les critères d&apos;adoption et l&apos;accompagnement.
                </div>
              </div>
              <div className="calc-context-item">
                <div className="calc-context-item-num">⚠️</div>
                <div>
                  <b>Migration des données</b> — vos Excel actuels doivent
                  entrer dans le nouvel outil. Le volume, la qualité et les
                  règles de reprise doivent être audités puis chiffrés au devis.
                </div>
              </div>
              <div className="calc-context-item">
                <div className="calc-context-item-num">⚠️</div>
                <div>
                  <b>Maintenance &amp; évolution</b> — un outil vit. Hébergement,
                  support, mises à jour, supervision et évolutions sont des
                  coûts récurrents à chiffrer séparément.
                </div>
              </div>
              <div className="calc-context-item">
                <div className="calc-context-item-num">⚠️</div>
                <div>
                  <b>Le bon moment</b> — parfois, garder Excel 6 mois de plus
                  est la décision la plus économique. Le cadrage peut conclure
                  à la fiabilisation du fichier ou à un logiciel du marché.
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

      </main>
      <SiteFooter />
    </div>
  );
}
