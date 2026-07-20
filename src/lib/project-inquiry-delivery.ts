export type InquiryDeliveryPayload = {
  ok?: true;
  error?: string;
  dev?: true;
  captured: boolean;
  teamNotified: boolean;
  confirmationSent: boolean;
  message?: string;
};

export type InquiryDeliveryOutcome = {
  status: number;
  payload: InquiryDeliveryPayload;
};

type MailAttempt =
  | { ok: true }
  | { ok: false; errorName: string };

export type InquiryMailDelivery =
  | { kind: "complete" }
  | { kind: "team_failed"; errorName: string }
  | { kind: "confirmation_failed"; errorName: string };

function thrownErrorName(error: unknown): string {
  if (error instanceof Error && error.name) return error.name;
  return "unknown_error";
}

/** Sépare les deux envois afin qu'une panne de confirmation ne masque jamais
 * la notification équipe déjà réussie. */
export async function deliverInquiryEmails(
  sendTeam: () => Promise<MailAttempt>,
  sendConfirmation: () => Promise<MailAttempt>,
): Promise<InquiryMailDelivery> {
  let team: MailAttempt;
  try {
    team = await sendTeam();
  } catch (error) {
    return { kind: "team_failed", errorName: thrownErrorName(error) };
  }
  if (!team.ok) return { kind: "team_failed", errorName: team.errorName };

  let confirmation: MailAttempt;
  try {
    confirmation = await sendConfirmation();
  } catch (error) {
    return { kind: "confirmation_failed", errorName: thrownErrorName(error) };
  }
  if (!confirmation.ok) {
    return {
      kind: "confirmation_failed",
      errorName: confirmation.errorName,
    };
  }

  return { kind: "complete" };
}

export function missingMailProviderOutcome(
  isProduction: boolean,
  persisted: boolean,
): InquiryDeliveryOutcome {
  if (!isProduction) {
    return {
      status: 200,
      payload: {
        ok: true,
        dev: true,
        captured: persisted,
        teamNotified: false,
        confirmationSent: false,
        message: "Mode local : aucun e-mail n'a été envoyé.",
      },
    };
  }

  if (persisted) {
    return {
      status: 503,
      payload: {
        error:
          "Votre demande est enregistrée mais aucune notification n'a pu partir. Réessayez ou écrivez à quentin@hagnere-patrimoine.fr ; un retry identique ne dupliquera pas le brief.",
        captured: true,
        teamNotified: false,
        confirmationSent: false,
      },
    };
  }

  return {
    status: 503,
    payload: {
      error:
        "Le service d'envoi est temporairement indisponible et votre demande n'a pas été enregistrée. Écrivez à quentin@hagnere-patrimoine.fr.",
      captured: false,
      teamNotified: false,
      confirmationSent: false,
    },
  };
}

export function teamMailFailureOutcome(persisted: boolean): InquiryDeliveryOutcome {
  if (persisted) {
    return {
      status: 502,
      payload: {
        error:
          "Votre demande est enregistrée mais la notification e-mail a échoué. Réessayez ou écrivez à quentin@hagnere-patrimoine.fr ; un retry identique ne dupliquera pas le brief.",
        captured: true,
        teamNotified: false,
        confirmationSent: false,
      },
    };
  }

  return {
    status: 502,
    payload: {
      error:
        "L'envoi a échoué et votre demande n'a pas été enregistrée. Réessayez ou écrivez à quentin@hagnere-patrimoine.fr.",
      captured: false,
      teamNotified: false,
      confirmationSent: false,
    },
  };
}

export function confirmationMailFailureOutcome(): InquiryDeliveryOutcome {
  return {
    status: 200,
    payload: {
      ok: true,
      captured: true,
      teamNotified: true,
      confirmationSent: false,
      message:
        "Votre message a bien été transmis à l'équipe, mais l'e-mail de confirmation n'a pas pu partir. Inutile de renvoyer le formulaire.",
    },
  };
}
