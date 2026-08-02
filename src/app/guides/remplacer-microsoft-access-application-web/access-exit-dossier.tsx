"use client";

import { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Check,
  Clipboard,
  Plus,
  Printer,
  Trash2,
} from "lucide-react";

export type TernaryAnswer = "unknown" | "yes" | "no";
export type AccessItemType =
  | "unknown"
  | "task"
  | "table"
  | "query"
  | "form"
  | "report"
  | "macro"
  | "vba"
  | "connection"
  | "scheduled-task"
  | "attachment-link"
  | "other";
export type Criticality = "unknown" | "low" | "medium" | "high";
export type ExitTarget =
  | "unknown"
  | "keep-access"
  | "split-data-ui"
  | "migrate-storage"
  | "standard"
  | "low-code"
  | "web-custom"
  | "remove";

export interface AccessExitItem {
  id: string;
  name: string;
  type: AccessItemType;
  owner: string;
  frequency: string;
  criticality: Criticality;
  dependency: string;
  sensitiveData: TernaryAnswer;
  target: ExitTarget;
  recoveryProof: string;
}

export interface ExitItemAssessment {
  missingFields: string[];
  blockers: string[];
  readyForPilotDiscussion: boolean;
}

export interface ExitDossierSummary {
  totalItems: number;
  documentedItems: number;
  itemsWithUnknowns: number;
  blockerCount: number;
  readyForPilotDiscussion: number;
}

const TYPE_OPTIONS: Array<{ value: AccessItemType; label: string }> = [
  { value: "unknown", label: "À vérifier" },
  { value: "task", label: "Tâche métier" },
  { value: "table", label: "Table ou données" },
  { value: "query", label: "Requête" },
  { value: "form", label: "Formulaire" },
  { value: "report", label: "État ou impression" },
  { value: "macro", label: "Macro" },
  { value: "vba", label: "Code VBA" },
  { value: "connection", label: "Connexion, ODBC ou API" },
  { value: "scheduled-task", label: "Tâche planifiée" },
  { value: "attachment-link", label: "Pièce jointe, lien ou chemin local" },
  { value: "other", label: "Autre" },
];

const TARGET_OPTIONS: Array<{ value: ExitTarget; label: string }> = [
  { value: "unknown", label: "À décider" },
  { value: "keep-access", label: "Conserver et stabiliser Access" },
  { value: "split-data-ui", label: "Séparer interface et données" },
  { value: "migrate-storage", label: "Migrer seulement le stockage" },
  { value: "standard", label: "Tester un logiciel standard" },
  {
    value: "low-code",
    label: "Tester une plateforme avec peu de code (low-code)",
  },
  { value: "web-custom", label: "Étudier une application web dédiée" },
  { value: "remove", label: "Supprimer cette tâche ou cet objet" },
];

const CRITICALITY_OPTIONS: Array<{
  value: Criticality;
  label: string;
}> = [
  { value: "unknown", label: "À vérifier" },
  { value: "low", label: "Faible" },
  { value: "medium", label: "Moyenne" },
  { value: "high", label: "Élevée" },
];

const TERNARY_OPTIONS: Array<{ value: TernaryAnswer; label: string }> = [
  { value: "unknown", label: "À vérifier" },
  { value: "yes", label: "Oui" },
  { value: "no", label: "Non" },
];

function makeEmptyItem(index: number): AccessExitItem {
  return {
    id: `access-item-${index}`,
    name: "",
    type: "unknown",
    owner: "",
    frequency: "",
    criticality: "unknown",
    dependency: "",
    sensitiveData: "unknown",
    target: "unknown",
    recoveryProof: "",
  };
}

export const EMPTY_ACCESS_ITEM = makeEmptyItem(1);

export function assessExitItem(item: AccessExitItem): ExitItemAssessment {
  const missingFields: string[] = [];

  if (!item.name.trim()) missingFields.push("objet ou tâche");
  if (item.type === "unknown") missingFields.push("type");
  if (!item.owner.trim()) missingFields.push("responsable métier");
  if (!item.frequency.trim()) missingFields.push("fréquence");
  if (item.criticality === "unknown") missingFields.push("criticité");
  if (!item.dependency.trim()) missingFields.push("dépendances");
  if (item.sensitiveData === "unknown") {
    missingFields.push("nature des données");
  }
  if (item.target === "unknown") missingFields.push("cible pressentie");
  if (!item.recoveryProof.trim()) {
    missingFields.push("preuve de reprise");
  }

  const blockers: string[] = [];
  if (item.criticality === "high" && !item.owner.trim()) {
    blockers.push("Objet critique sans responsable métier identifié.");
  }
  if (item.criticality === "high" && !item.recoveryProof.trim()) {
    blockers.push("Objet critique sans preuve de reprise définie.");
  }
  if (item.sensitiveData === "yes" && !item.owner.trim()) {
    blockers.push(
      "Données personnelles, confidentielles ou réglementées sans responsable identifié.",
    );
  }
  if (
    item.target !== "unknown" &&
    item.target !== "keep-access" &&
    !item.dependency.trim()
  ) {
    blockers.push("Cible choisie alors que les dépendances restent inconnues.");
  }

  return {
    missingFields,
    blockers,
    readyForPilotDiscussion:
      missingFields.length === 0 && blockers.length === 0,
  };
}

export function summarizeExitDossier(
  items: AccessExitItem[],
): ExitDossierSummary {
  const assessments = items.map(assessExitItem);
  return {
    totalItems: items.length,
    documentedItems: assessments.filter(
      (assessment) => assessment.missingFields.length === 0,
    ).length,
    itemsWithUnknowns: assessments.filter(
      (assessment) => assessment.missingFields.length > 0,
    ).length,
    blockerCount: assessments.reduce(
      (sum, assessment) => sum + assessment.blockers.length,
      0,
    ),
    readyForPilotDiscussion: assessments.filter(
      (assessment) => assessment.readyForPilotDiscussion,
    ).length,
  };
}

function optionLabel<T extends string>(
  options: Array<{ value: T; label: string }>,
  value: T,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function buildExitDossierText(items: AccessExitItem[]) {
  const summary = summarizeExitDossier(items);
  const lines = [
    "DOSSIER DE SORTIE MICROSOFT ACCESS",
    "Document de travail local — aucune recommandation automatique",
    "",
    `Éléments recensés : ${summary.totalItems}`,
    `Éléments complets : ${summary.documentedItems}`,
    `Éléments avec inconnues : ${summary.itemsWithUnknowns}`,
    `Points bloquants : ${summary.blockerCount}`,
    "",
  ];

  items.forEach((item, index) => {
    const assessment = assessExitItem(item);
    lines.push(
      `${index + 1}. ${item.name.trim() || "Objet ou tâche à nommer"}`,
      `Type : ${optionLabel(TYPE_OPTIONS, item.type)}`,
      `Responsable : ${item.owner.trim() || "À vérifier"}`,
      `Fréquence : ${item.frequency.trim() || "À vérifier"}`,
      `Criticité : ${optionLabel(CRITICALITY_OPTIONS, item.criticality)}`,
      `Dépendances : ${item.dependency.trim() || "À vérifier"}`,
      `Données personnelles, confidentielles ou réglementées : ${optionLabel(TERNARY_OPTIONS, item.sensitiveData)}`,
      `Cible pressentie : ${optionLabel(TARGET_OPTIONS, item.target)}`,
      `Preuve de reprise : ${item.recoveryProof.trim() || "À vérifier"}`,
      `Champs à compléter : ${assessment.missingFields.join(", ") || "Aucun"}`,
      `Points bloquants : ${assessment.blockers.join(" ") || "Aucun détecté par ce formulaire"}`,
      "",
    );
  });

  lines.push(
    "Ce dossier ne choisit pas une architecture, un produit, un budget ou une date de bascule. Faites vérifier les dépendances, les droits, les licences et les preuves de reprise avant tout pilote.",
  );
  return lines.join("\n");
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-xs font-semibold text-zinc-800 dark:text-zinc-100"
    >
      {children}
    </label>
  );
}

export function AccessExitDossierTool() {
  const nextItemId = useRef(3);
  const [items, setItems] = useState<AccessExitItem[]>([
    makeEmptyItem(1),
    makeEmptyItem(2),
  ]);
  const [copyStatus, setCopyStatus] = useState<{
    message: string;
    kind: "success" | "error";
  } | null>(null);
  const summary = useMemo(() => summarizeExitDossier(items), [items]);

  function updateItem<K extends keyof AccessExitItem>(
    id: string,
    key: K,
    value: AccessExitItem[K],
  ) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, [key]: value } : item,
      ),
    );
  }

  function addItem() {
    const newItem = makeEmptyItem(nextItemId.current);
    nextItemId.current += 1;
    setItems((current) => [...current, newItem]);
  }

  function removeItem(id: string) {
    setItems((current) =>
      current.length === 1 ? current : current.filter((item) => item.id !== id),
    );
  }

  async function copyDossier() {
    try {
      await navigator.clipboard.writeText(buildExitDossierText(items));
      setCopyStatus({
        message: "Dossier copié dans le presse-papiers.",
        kind: "success",
      });
    } catch {
      setCopyStatus({
        message:
          "Copie impossible dans ce navigateur. Utilisez l’impression ou copiez les champs manuellement.",
        kind: "error",
      });
    }
  }

  return (
    <div
      data-testid="access-exit-dossier"
      className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="border-b border-zinc-200 bg-zinc-50 p-5 print:hidden dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
          Outil local · dossier de sortie Access
        </p>
        <h3 className="mt-2 text-xl font-bold text-zinc-950 dark:text-white">
          Recensez ce qui doit survivre avant de choisir la cible
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Décrivez une tâche métier ou un objet Access par fiche. Les champs
          restent dans cette page : aucun envoi, aucune sauvegarde automatique
          et aucune génération de faux fichier. « À vérifier » reste une
          inconnue, jamais un zéro ni un accord implicite.
        </p>
      </div>

      <div className="grid gap-3 border-b border-zinc-200 p-5 print:hidden dark:border-zinc-800 sm:grid-cols-4 sm:p-6">
        {[
          ["Éléments", summary.totalItems],
          ["Complets", summary.documentedItems],
          ["Avec inconnues", summary.itemsWithUnknowns],
          ["Points bloquants", summary.blockerCount],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {label}
            </p>
            <p className="mt-1 text-xl font-bold tabular-nums text-zinc-950 dark:text-white">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-5 p-5 print:hidden sm:p-6">
        {items.map((item, index) => {
          const assessment = assessExitItem(item);
          return (
            <section
              key={item.id}
              aria-labelledby={`${item.id}-title`}
              className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <h4
                  id={`${item.id}-title`}
                  className="text-base font-bold text-zinc-950 dark:text-white"
                >
                  Fiche {index + 1}
                </h4>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  disabled={items.length === 1}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-zinc-200 px-3 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  aria-label={`Supprimer la fiche ${index + 1}`}
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                  Supprimer
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <FieldLabel htmlFor={`${item.id}-name`}>
                    Objet Access ou tâche métier
                  </FieldLabel>
                  <input
                    id={`${item.id}-name`}
                    value={item.name}
                    onChange={(event) =>
                      updateItem(item.id, "name", event.target.value)
                    }
                    placeholder="Ex. éditer et envoyer le bon d’intervention"
                    className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor={`${item.id}-type`}>Type</FieldLabel>
                  <select
                    id={`${item.id}-type`}
                    value={item.type}
                    onChange={(event) =>
                      updateItem(
                        item.id,
                        "type",
                        event.target.value as AccessItemType,
                      )
                    }
                    className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {TYPE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel htmlFor={`${item.id}-owner`}>
                    Responsable métier
                  </FieldLabel>
                  <input
                    id={`${item.id}-owner`}
                    value={item.owner}
                    onChange={(event) =>
                      updateItem(item.id, "owner", event.target.value)
                    }
                    placeholder="Nom ou rôle, sinon À vérifier"
                    className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor={`${item.id}-frequency`}>
                    Fréquence et période observée
                  </FieldLabel>
                  <input
                    id={`${item.id}-frequency`}
                    value={item.frequency}
                    onChange={(event) =>
                      updateItem(item.id, "frequency", event.target.value)
                    }
                    placeholder="Ex. 12 fois par semaine depuis 3 mois"
                    className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor={`${item.id}-criticality`}>
                    Criticité pour l’activité
                  </FieldLabel>
                  <select
                    id={`${item.id}-criticality`}
                    value={item.criticality}
                    onChange={(event) =>
                      updateItem(
                        item.id,
                        "criticality",
                        event.target.value as Criticality,
                      )
                    }
                    className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {CRITICALITY_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <FieldLabel htmlFor={`${item.id}-dependency`}>
                    Dépendances connues
                  </FieldLabel>
                  <textarea
                    id={`${item.id}-dependency`}
                    value={item.dependency}
                    onChange={(event) =>
                      updateItem(item.id, "dependency", event.target.value)
                    }
                    placeholder="Ex. requête Q_Commandes, modèle Word, dossier réseau, Outlook, import comptable, compte de service"
                    rows={3}
                    className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor={`${item.id}-sensitive`}>
                    Données personnelles, confidentielles ou réglementées
                  </FieldLabel>
                  <select
                    id={`${item.id}-sensitive`}
                    value={item.sensitiveData}
                    onChange={(event) =>
                      updateItem(
                        item.id,
                        "sensitiveData",
                        event.target.value as TernaryAnswer,
                      )
                    }
                    className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {TERNARY_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel htmlFor={`${item.id}-target`}>
                    Cible pressentie, sans engagement
                  </FieldLabel>
                  <select
                    id={`${item.id}-target`}
                    value={item.target}
                    onChange={(event) =>
                      updateItem(
                        item.id,
                        "target",
                        event.target.value as ExitTarget,
                      )
                    }
                    className="min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  >
                    {TARGET_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <FieldLabel htmlFor={`${item.id}-recovery`}>
                    Preuve de reprise attendue
                  </FieldLabel>
                  <textarea
                    id={`${item.id}-recovery`}
                    value={item.recoveryProof}
                    onChange={(event) =>
                      updateItem(item.id, "recoveryProof", event.target.value)
                    }
                    placeholder="Ex. trois dossiers rejoués, totaux identiques, pièce jointe retrouvée, impression validée et retour arrière testé"
                    rows={3}
                    className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                  />
                </div>
              </div>

              <div
                className={`mt-4 rounded-xl border p-3 text-xs leading-relaxed ${
                  assessment.readyForPilotDiscussion
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200"
                    : "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200"
                }`}
              >
                {assessment.readyForPilotDiscussion ? (
                  <p className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    Fiche complète pour une discussion de pilote. Cela ne valide
                    ni la cible ni la migration.
                  </p>
                ) : (
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <p>
                        À compléter :{" "}
                        {assessment.missingFields.join(", ") || "aucun champ"}.
                      </p>
                      {assessment.blockers.length > 0 && (
                        <ul className="mt-1 list-disc pl-4">
                          {assessment.blockers.map((blocker) => (
                            <li key={blocker}>{blocker}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={addItem}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            <Plus className="size-4" aria-hidden="true" />
            Ajouter une fiche
          </button>
          <button
            type="button"
            onClick={copyDossier}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Clipboard className="size-4" aria-hidden="true" />
            Copier le dossier
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
          >
            <Printer className="size-4" aria-hidden="true" />
            Imprimer cette page
          </button>
        </div>
        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          Conseil de confidentialité : utilisez des rôles et des identifiants
          internes neutres. Ne collez ni mot de passe, ni secret, ni donnée
          personnelle dans cet outil.
        </p>
        {copyStatus && (
          <p
            className={`text-sm ${
              copyStatus.kind === "success"
                ? "text-emerald-700 dark:text-emerald-300"
                : "text-amber-800 dark:text-amber-200"
            }`}
            role="status"
          >
            {copyStatus.message}
          </p>
        )}
      </div>

      <pre
        data-testid="access-exit-print-summary"
        className="hidden whitespace-pre-wrap border-t border-zinc-200 p-6 text-xs print:block dark:border-zinc-800"
      >
        {buildExitDossierText(items)}
      </pre>
    </div>
  );
}
