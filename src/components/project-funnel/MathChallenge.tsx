"use client";

import { useEffect, useRef, useState } from "react";
import {
  MATH_CHALLENGE_MAX,
  MATH_CHALLENGE_MIN,
  type MathChallengePayload,
} from "@/lib/math-challenge";

export type MathChallengeValue = {
  a: number;
  b: number;
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
  return { a: value.a, b: value.b, answer: Number(value.answer.trim()) };
}

function randomTerm(): number {
  return (
    MATH_CHALLENGE_MIN +
    Math.floor(Math.random() * (MATH_CHALLENGE_MAX - MATH_CHALLENGE_MIN + 1))
  );
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
 * maintenable en interne. Les termes sont tirés après le mount (SSR-safe :
 * le serveur rend un placeholder stable, le client tire au hasard).
 */
export function MathChallenge({ onChange, error, className = "" }: Props) {
  const [terms, setTerms] = useState<{ a: number; b: number } | null>(null);
  const [answer, setAnswer] = useState("");

  // onChange vit dans une ref : son identité peut changer à chaque render
  // du parent, la mettre en dep re-déclencherait l'effet inutilement.
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  // Tirage aléatoire post-mount uniquement : Math.random() pendant le
  // render SSR produirait un mismatch d'hydration (serveur ≠ client).
  // C'est le pattern « synchronisation avec un système extérieur » (ici
  // la source d'aléa client) que la règle autorise à désactiver localement,
  // comme pour l'hydration localStorage du funnel (ProjectFunnel.tsx).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setTerms({ a: randomTerm(), b: randomTerm() });
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Le parent démarre à null : on ne le notifie qu'une fois les termes
  // tirés (post-mount) — pousser null pendant le commit initial déclenche
  // un setState sur un arbre pas encore monté (warning React 19).
  useEffect(() => {
    if (!terms) return;
    onChangeRef.current({ ...terms, answer });
  }, [terms, answer]);

  // Pas de htmlFor/id : le label enveloppe l'input, l'association est
  // implicite — et useId créerait un risque de mismatch d'hydration.
  return (
    <label className={className}>
      <span>
        Anti-robot : combien font {terms ? `${terms.a} + ${terms.b}` : "… + …"}
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
        disabled={!terms}
      />
      {error && <em role="alert">{error}</em>}
    </label>
  );
}
