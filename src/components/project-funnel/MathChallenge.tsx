"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY_NATIONAL,
} from "@/lib/contact-details";
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

/**
 * Messages du contrôle anti-robot. Trois situations distinctes — les
 * confondre revient à accuser d'erreur un visiteur à qui la question n'a
 * jamais été montrée (champ vide et désactivé quand le défi ne charge pas).
 */
/*
 * « par e-mail ou téléphone » sans donner ni l'un ni l'autre n'est pas une
 * porte de sortie : c'est une invitation à chercher. Ce message s'affiche
 * précisément quand le visiteur ne PEUT plus envoyer le formulaire — il lui
 * faut les coordonnées, pas leur mention.
 */
export const MATH_CHALLENGE_UNAVAILABLE_MESSAGE =
  `Le contrôle anti-robot n'a pas pu se charger — vous n'y êtes pour rien. Réessayez le contrôle, ou envoyez-nous votre demande directement à ${CONTACT_EMAIL} ou au ${CONTACT_PHONE_DISPLAY_NATIONAL}.`;
export const MATH_CHALLENGE_EMPTY_MESSAGE =
  "Répondez à la question anti-robot juste au-dessus pour envoyer votre brief.";
export const MATH_CHALLENGE_WRONG_ANSWER_MESSAGE =
  "Réponse incorrecte — recomptez.";

/**
 * Message bloquant à afficher, ou null si la réponse permet l'envoi.
 * Distingue « défi non chargé », « champ vide » et « réponse fausse ».
 */
export function getMathChallengeError(
  value: MathChallengeValue | null,
): string | null {
  if (!value) return MATH_CHALLENGE_UNAVAILABLE_MESSAGE;
  if (!value.answer.trim()) return MATH_CHALLENGE_EMPTY_MESSAGE;
  return isMathAnswerCorrect(value) ? null : MATH_CHALLENGE_WRONG_ANSWER_MESSAGE;
}

/**
 * Marge visée avant expiration : l'équation est renouvelée cinq minutes
 * avant la fin de validité du token, pour qu'un formulaire resté ouvert
 * pendant une longue lecture ne finisse pas en 403 à l'envoi.
 */
export const MATH_CHALLENGE_REFRESH_MARGIN_MS = 5 * 60 * 1_000;

/**
 * Plancher de rappel : garde-fou contre une horloge client en avance ou un
 * token déjà expiré à la réception. Sans lui, `refreshIn` tomberait à zéro
 * et le composant martèlerait /api/math-challenge.
 */
export const MATH_CHALLENGE_MIN_REFRESH_MS = 5_000;

/**
 * Délai avant de redemander une équation, en ms.
 *
 * La marge est plafonnée à un tiers de la durée de vie restante : elle est
 * donc dérivée du TTL réellement servi, et non figée à cinq minutes. Sans
 * ce plafond, réduire `MATH_CHALLENGE_TTL_MS` côté serveur sous la marge
 * rendait `expiresAt - now - marge` négatif, le composant retombait sur son
 * plancher et rappelait l'API en boucle — un déni de service accidentel
 * déclenché par un simple changement de constante à l'autre bout du code.
 * Le délai retourné vaut toujours au moins deux tiers de la vie restante.
 */
export function getMathChallengeRefreshDelay(
  expiresAt: number,
  now: number,
): number {
  const remaining = expiresAt - now;
  const margin = Math.min(MATH_CHALLENGE_REFRESH_MARGIN_MS, remaining / 3);
  return Math.max(MATH_CHALLENGE_MIN_REFRESH_MS, remaining - margin);
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
  /** Prévient l'hôte que la question n'a pas pu être chargée : il peut
      alors proposer un autre canal plutôt qu'un message d'erreur faux. */
  onLoadErrorChange?: (unavailable: boolean) => void;
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
export function MathChallenge({
  onChange,
  error,
  onLoadErrorChange,
  className = "",
}: Props) {
  const inputId = useId();
  const questionId = `${inputId}-question`;
  const errorId = `${inputId}-error`;
  const [challenge, setChallenge] = useState<IssuedMathChallenge | null>(null);
  const [answer, setAnswer] = useState("");
  const [loadError, setLoadError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  // Le renouvellement automatique de l'équation vide la réponse : sans
  // mention explicite, un utilisateur lent voit sa saisie disparaître sans
  // savoir pourquoi (la zone live n'annonce que la nouvelle question).
  const [answerCleared, setAnswerCleared] = useState(false);

  // onChange vit dans une ref : son identité peut changer à chaque render
  // du parent, la mettre en dep re-déclencherait l'effet inutilement.
  const onChangeRef = useRef(onChange);
  const onLoadErrorChangeRef = useRef(onLoadErrorChange);
  const answerRef = useRef(answer);
  useEffect(() => {
    onChangeRef.current = onChange;
    onLoadErrorChangeRef.current = onLoadErrorChange;
    answerRef.current = answer;
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
        const hadAnswer = answerRef.current.trim().length > 0;
        setChallenge(issued);
        setAnswer("");
        setAnswerCleared(hadAnswer);
        setLoadError(false);
        onLoadErrorChangeRef.current?.(false);
      })
      .catch((fetchError: unknown) => {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }
        setLoadError(true);
        onChangeRef.current(null);
        onLoadErrorChangeRef.current?.(true);
      });
    return () => controller.abort();
  }, [refreshKey]);

  // Renouvelle l'équation avant son expiration. Le formulaire peut ainsi
  // rester ouvert pendant une longue lecture sans finir en 403 — et la marge
  // suit le TTL réellement servi (cf. getMathChallengeRefreshDelay) au lieu
  // d'être figée à cinq minutes.
  useEffect(() => {
    if (!challenge) return;
    const refreshIn = getMathChallengeRefreshDelay(
      challenge.expiresAt,
      Date.now(),
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

  // Quand la question n'a pas pu être chargée, le champ est vide et
  // désactivé : afficher le message d'erreur de l'hôte (« réponse
  // incorrecte ») accuserait le visiteur d'un calcul jamais montré.
  const message = loadError ? MATH_CHALLENGE_UNAVAILABLE_MESSAGE : error;

  return (
    <label
      className={className}
      htmlFor={inputId}
      aria-busy={!challenge && !loadError}
    >
      <span id={questionId} aria-live="polite" aria-atomic="true">
        Anti-robot : combien font {challenge ? `${challenge.a} + ${challenge.b}` : "… + …"}
        &nbsp;?
        {answerCleared && (
          <small> Nouvelle question : votre réponse précédente a été effacée.</small>
        )}
      </span>
      <input
        id={inputId}
        name="mathChallengeAnswer"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="Votre réponse"
        value={answer}
        onChange={(event) => {
          setAnswer(event.target.value);
          setAnswerCleared(false);
        }}
        required
        aria-invalid={Boolean(message)}
        aria-describedby={message ? `${questionId} ${errorId}` : questionId}
        disabled={!challenge}
      />
      {message && (
        <em id={errorId} role="alert">
          {message}
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
