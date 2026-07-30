"use client";

import { useMemo, useState } from "react";

export type ValidationRisk =
  "problem" | "buyer" | "channel" | "price" | "usage" | "feasibility";

export type ValidationTest =
  | "retrospective-interview"
  | "qualified-landing"
  | "clickable-prototype"
  | "manual-pilot"
  | "commercial-offer"
  | "technical-spike";

export interface ValidationTestPlan {
  risk: ValidationRisk;
  segment: string;
  assumption: string;
  test: ValidationTest;
  observation: string;
  continueCriterion: string;
  pivotCriterion: string;
  stopCriterion: string;
  owner: string;
}

export interface ValidationTestAssessment {
  ready: boolean;
  missingFields: string[];
  testedScope: string;
  untestedScope: string;
  warning: string | null;
  copyText: string;
}

const riskLabels: Record<ValidationRisk, string> = {
  problem: "Problème réellement prioritaire",
  buyer: "Acheteur et décision d’achat",
  channel: "Accès répétable aux prospects",
  price: "Acceptation de l’offre et du prix",
  usage: "Utilisation réelle du service",
  feasibility: "Faisabilité, données et contraintes",
};

const testDetails: Record<
  ValidationTest,
  {
    label: string;
    testedScope: string;
    untestedScope: string;
    compatibleRisks: ValidationRisk[];
  }
> = {
  "retrospective-interview": {
    label: "Entretien sur un épisode passé",
    testedScope:
      "La fréquence, les conséquences et la manière dont la personne traite aujourd’hui le problème.",
    untestedScope:
      "Un entretien ne prouve ni l’achat, ni l’usage futur, ni la rentabilité du SaaS.",
    compatibleRisks: ["problem"],
  },
  "qualified-landing": {
    label: "Page de présentation montrée au public visé",
    testedScope:
      "La compréhension de la promesse et une action légère avec le mode de recrutement choisi.",
    untestedScope:
      "Une adresse laissée ne prouve ni le budget, ni l’usage, ni la fidélité future.",
    compatibleRisks: ["channel"],
  },
  "clickable-prototype": {
    label: "Prototype cliquable",
    testedScope:
      "La compréhension du parcours et la capacité d’un utilisateur à accomplir une tâche simulée.",
    untestedScope:
      "Le prototype ne prouve ni la faisabilité de production, ni la vente, ni la tenue en charge.",
    compatibleRisks: ["usage"],
  },
  "manual-pilot": {
    label: "Pilote rendu manuellement",
    testedScope:
      "La valeur du résultat dans une situation réelle et les opérations cachées derrière le service.",
    untestedScope:
      "Un service manuel réussi ne prouve pas encore que le logiciel sera rentable, sûr ou utilisé durablement.",
    compatibleRisks: ["usage", "problem"],
  },
  "commercial-offer": {
    label: "Proposition commerciale explicite",
    testedScope:
      "Le parcours d’achat, les objections, le budget et le niveau d’engagement accepté par un acheteur habilité.",
    untestedScope:
      "Une lettre d’intention ou même un pilote payé ne prouve pas l’usage répété ni le renouvellement.",
    compatibleRisks: ["buyer", "price"],
  },
  "technical-spike": {
    label: "Essai technique ciblé",
    testedScope:
      "Une inconnue technique précise : accès à une API, qualité d’un jeu de données ou temps d’un calcul.",
    untestedScope:
      "Un essai technique ne prouve ni le besoin, ni la vente, ni l’adoption.",
    compatibleRisks: ["feasibility"],
  },
};

const fieldLabels: Record<
  keyof Omit<ValidationTestPlan, "risk" | "test">,
  string
> = {
  segment: "segment précis",
  assumption: "phrase à tester",
  observation: "observation à relever",
  continueCriterion: "critère pour continuer",
  pivotCriterion: "critère pour changer d’hypothèse",
  stopCriterion: "condition d’arrêt",
  owner: "responsable de la décision",
};

function clean(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export function assessValidationTest(
  plan: ValidationTestPlan,
): ValidationTestAssessment {
  const missingFields = (
    Object.keys(fieldLabels) as (keyof typeof fieldLabels)[]
  )
    .filter((key) => clean(plan[key]).length === 0)
    .map((key) => fieldLabels[key]);
  const test = testDetails[plan.test];
  const warning = test.compatibleRisks.includes(plan.risk)
    ? null
    : `Ce test répond mal à la question « ${riskLabels[plan.risk]} ». Choisissez un test qui observe directement ce point, ou reformulez ce qui doit être vrai.`;

  const copyText = [
    "CARTE DE TEST — IDÉE SAAS",
    "",
    `Question examinée : ${riskLabels[plan.risk]}`,
    `Segment : ${clean(plan.segment) || "[à écrire]"}`,
    `Ce qui doit être vrai : ${clean(plan.assumption) || "[à écrire]"}`,
    `Test : ${test.label}`,
    `Observation à relever : ${clean(plan.observation) || "[à écrire]"}`,
    `Continuer si : ${clean(plan.continueCriterion) || "[à écrire]"}`,
    `Changer d’hypothèse si : ${clean(plan.pivotCriterion) || "[à écrire]"}`,
    `Arrêter ou mettre en attente si : ${clean(plan.stopCriterion) || "[à écrire]"}`,
    `Responsable de la décision : ${clean(plan.owner) || "[à écrire]"}`,
    "",
    `Ce que ce test peut montrer : ${test.testedScope}`,
    `Ce qu’il ne montre pas : ${test.untestedScope}`,
  ].join("\n");

  return {
    ready: missingFields.length === 0 && warning === null,
    missingFields,
    testedScope: test.testedScope,
    untestedScope: test.untestedScope,
    warning,
    copyText,
  };
}

const initialPlan: ValidationTestPlan = {
  risk: "buyer",
  segment:
    "Responsables achats de PME industrielles qui suivent des pièces fournisseurs",
  assumption:
    "Un responsable disposant d’un budget accepte d’examiner un pilote payant lorsque des pièces manquantes ont déjà retardé un contrôle.",
  test: "commercial-offer",
  observation:
    "Nombre d’acheteurs habilités qui examinent une proposition écrite, objections et engagement effectivement accepté.",
  continueCriterion:
    "Le seuil que nous aurons écrit avant les rendez-vous est atteint par des acheteurs habilités.",
  pivotCriterion:
    "Le problème est confirmé, mais le budget, le signataire ou le service demandé diffère de ce que nous avions prévu.",
  stopCriterion:
    "Aucun acheteur habilité n’accepte la prochaine étape prévue, malgré un recrutement conforme au segment.",
  owner: "La personne qui engage le budget du futur produit",
};

interface TextFieldProps {
  id: keyof Omit<ValidationTestPlan, "risk" | "test">;
  label: string;
  value: string;
  rows?: number;
  onChange: (
    key: keyof Omit<ValidationTestPlan, "risk" | "test">,
    value: string,
  ) => void;
}

function TextField({ id, label, value, rows = 2, onChange }: TextFieldProps) {
  return (
    <label
      htmlFor={`validation-${id}`}
      className="block rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-700 dark:bg-zinc-950"
    >
      <span className="block text-xs font-semibold leading-snug text-zinc-700 dark:text-zinc-200">
        {label}
      </span>
      <textarea
        id={`validation-${id}`}
        rows={rows}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        className="mt-2 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm leading-relaxed text-zinc-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
      />
    </label>
  );
}

export function ValidationTestPlanner() {
  const [plan, setPlan] = useState<ValidationTestPlan>(initialPlan);
  const [copyStatus, setCopyStatus] = useState("");
  const assessment = useMemo(() => assessValidationTest(plan), [plan]);

  const updateText = (
    key: keyof Omit<ValidationTestPlan, "risk" | "test">,
    value: string,
  ) => {
    setPlan((current) => ({ ...current, [key]: value }));
    setCopyStatus("");
  };

  const copyPlan = async () => {
    try {
      await navigator.clipboard.writeText(assessment.copyText);
      setCopyStatus("Carte copiée. Collez-la dans votre document de travail.");
    } catch {
      setCopyStatus(
        "La copie automatique a échoué. Sélectionnez le texte de la carte ci-dessous.",
      );
    }
  };

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="border-b border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">
          Journal de test — aucune donnée envoyée
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Écrire le test et les trois décisions avant de le lancer
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Les valeurs de départ appartiennent au scénario fictif du guide.
          Remplacez-les. L’outil ne donne pas une note à votre idée : il
          contrôle seulement que les champs sont remplis et que le test choisi
          correspond à la question examinée.
        </p>
      </div>

      <div className="grid gap-7 p-5 sm:p-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-700 dark:bg-zinc-950">
              <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Question à trancher
              </span>
              <select
                value={plan.risk}
                onChange={(event) => {
                  setPlan((current) => ({
                    ...current,
                    risk: event.target.value as ValidationRisk,
                  }));
                  setCopyStatus("");
                }}
                className="mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              >
                {Object.entries(riskLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block rounded-xl border border-zinc-200 bg-white p-3.5 dark:border-zinc-700 dark:bg-zinc-950">
              <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Test choisi
              </span>
              <select
                value={plan.test}
                onChange={(event) => {
                  setPlan((current) => ({
                    ...current,
                    test: event.target.value as ValidationTest,
                  }));
                  setCopyStatus("");
                }}
                className="mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              >
                {Object.entries(testDetails).map(([value, details]) => (
                  <option key={value} value={value}>
                    {details.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <TextField
            id="segment"
            label="Segment précis"
            value={plan.segment}
            onChange={updateText}
          />
          <TextField
            id="assumption"
            label="Ce qui doit être vrai — une seule phrase que le test peut contredire"
            value={plan.assumption}
            rows={3}
            onChange={updateText}
          />
          <TextField
            id="observation"
            label="Ce qui sera réellement observé ou compté"
            value={plan.observation}
            rows={3}
            onChange={updateText}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <TextField
              id="continueCriterion"
              label="Continuer si…"
              value={plan.continueCriterion}
              rows={4}
              onChange={updateText}
            />
            <TextField
              id="pivotCriterion"
              label="Changer d’hypothèse si…"
              value={plan.pivotCriterion}
              rows={4}
              onChange={updateText}
            />
            <TextField
              id="stopCriterion"
              label="Arrêter si…"
              value={plan.stopCriterion}
              rows={4}
              onChange={updateText}
            />
          </div>
          <TextField
            id="owner"
            label="Personne responsable de la décision"
            value={plan.owner}
            onChange={updateText}
          />
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div
            className={`rounded-2xl border p-5 ${
              assessment.ready
                ? "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100"
                : "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100"
            }`}
            aria-live="polite"
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] opacity-70">
              Contrôle de la carte
            </p>
            <p className="mt-2 text-lg font-bold">
              {assessment.ready
                ? "La structure de la carte est complète"
                : "La carte doit encore être corrigée"}
            </p>
            {assessment.ready ? (
              <p className="mt-2 text-sm leading-relaxed">
                Ce contrôle vérifie les champs et la cohérence entre la question
                et le type de test. Il ne valide ni la qualité du recrutement,
                ni le seuil, ni la réalité de l’observation.
              </p>
            ) : null}
            {assessment.warning ? (
              <p className="mt-2 text-sm leading-relaxed">
                {assessment.warning}
              </p>
            ) : null}
            {assessment.missingFields.length > 0 ? (
              <p className="mt-2 text-sm leading-relaxed">
                Champs manquants : {assessment.missingFields.join(", ")}.
              </p>
            ) : null}
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                Ce que ce test peut montrer
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                {assessment.testedScope}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                Ce qu’il ne montre pas
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                {assessment.untestedScope}
              </p>
            </div>
          </div>

          <pre
            tabIndex={0}
            className="mt-4 max-h-[430px] overflow-auto whitespace-pre-wrap rounded-xl border border-zinc-200 bg-white p-4 text-xs leading-relaxed text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
          >
            {assessment.copyText}
          </pre>

          <button
            type="button"
            onClick={copyPlan}
            className="mt-3 flex min-h-11 w-full items-center justify-center rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Copier ma carte de test
          </button>
          {copyStatus ? (
            <p
              className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300"
              aria-live="polite"
            >
              {copyStatus}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
