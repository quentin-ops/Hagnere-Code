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
      status: 202,
      payload: {
        ok: true,
        captured: true,
        teamNotified: false,
        confirmationSent: false,
        message:
          "Votre demande est enregistrée, mais aucun e-mail de confirmation n'a pu être envoyé. Inutile de renvoyer le formulaire.",
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
      status: 202,
      payload: {
        ok: true,
        captured: true,
        teamNotified: false,
        confirmationSent: false,
        message:
          "Votre demande est enregistrée, mais la notification e-mail est retardée. Inutile de renvoyer le formulaire.",
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
