"use client";

import { useEffect, useRef, useState } from "react";
import type {
  IssuedMathChallenge,
  MathChallengePayload,
} from "@/lib/math-challenge";

export type MathChallengeValue = {
  a: number;
  b: number;
  token: string;
  answer: string;
};

/** true si la réponse tapée correspond à la somme attendue. */
export function isMathAnswerCorrect(value: MathChallengeValue | null): boolean {
  if (!value) return false;
  const parsed = Number(value.answer.trim());
  return Number.isInteger(parsed) && parsed === value.a + value.b;
}

/** Payload prêt pour /api/project-inquiry (réponse numérique). */
export function toMathChallengePayload(
  value: MathChallengeValue | null,
): MathChallengePayload | undefined {
  if (!value) return undefined;
  return { token: value.token, answer: Number(value.answer.trim()) };
}

type Props = {
  onChange: (value: MathChallengeValue | null) => void;
  error?: string | null;
  /** Classe du wrapper — colle au style du formulaire hôte
      (sf-field, pf-field, calc-capture-field…). */
  className?: string;
};

/**
 * Anti-bot maison : question de calcul simple (« Combien font 4 + 7 ? »).
 * Remplace Cloudflare Turnstile — aucun script tiers, rien à configurer,
 * maintenable en interne. Les termes et le token associé sont émis et signés
 * côté serveur ; le navigateur ne peut donc pas choisir sa propre équation.
 */
export function MathChallenge({ onChange, error, className = "" }: Props) {
  const [challenge, setChallenge] = useState<IssuedMathChallenge | null>(null);
  const [answer, setAnswer] = useState("");
  const [loadError, setLoadError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // onChange vit dans une ref : son identité peut changer à chaque render
  // du parent, la mettre en dep re-déclencherait l'effet inutilement.
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const controller = new AbortController();
    void fetch("/api/math-challenge", {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("challenge unavailable");
        return (await response.json()) as IssuedMathChallenge;
      })
      .then((issued) => {
        setChallenge(issued);
        setAnswer("");
        setLoadError(false);
      })
      .catch((fetchError: unknown) => {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }
        setLoadError(true);
        onChangeRef.current(null);
      });
    return () => controller.abort();
  }, [refreshKey]);

  // Renouvelle l'équation cinq minutes avant son expiration. Le formulaire
  // peut ainsi rester ouvert pendant une longue lecture sans finir en 403.
  useEffect(() => {
    if (!challenge) return;
    const refreshIn = Math.max(
      1_000,
      challenge.expiresAt - Date.now() - 5 * 60 * 1_000,
    );
    const id = window.setTimeout(() => {
      setRefreshKey((current) => current + 1);
    }, refreshIn);
    return () => window.clearTimeout(id);
  }, [challenge]);

  // Le parent démarre à null : on ne le notifie qu'une fois le challenge
  // reçu — pousser null pendant le commit initial déclenche
  // un setState sur un arbre pas encore monté (warning React 19).
  useEffect(() => {
    if (!challenge) return;
    onChangeRef.current({
      a: challenge.a,
      b: challenge.b,
      token: challenge.token,
      answer,
    });
  }, [challenge, answer]);

  // Pas de htmlFor/id : le label enveloppe l'input, l'association est
  // implicite — et useId créerait un risque de mismatch d'hydration.
  return (
    <label className={className}>
      <span>
        Anti-robot : combien font {challenge ? `${challenge.a} + ${challenge.b}` : "… + …"}
        &nbsp;?
      </span>
      <input
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="Votre réponse"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        required
        aria-invalid={!!error}
        disabled={!challenge}
      />
      {(error || loadError) && (
        <em role="alert">
          {error || "Contrôle indisponible. Rechargez la page ou écrivez-nous par email."}
        </em>
      )}
      {loadError && (
        <button
          type="button"
          onClick={() => setRefreshKey((current) => current + 1)}
        >
          Réessayer le contrôle
        </button>
      )}
    </label>
  );
}
