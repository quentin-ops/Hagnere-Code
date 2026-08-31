"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { VoiceDictateButton } from "./VoiceDictateButton";
import {
  MathChallenge,
  getMathChallengeError,
  toMathChallengePayload,
  type MathChallengeValue,
} from "@/components/project-funnel/MathChallenge";
import {
  briefWasCaptured,
  PROJECT_INQUIRY_TIMEOUT_MS,
  PROJECT_INQUIRY_TIMEOUT_SECONDS,
} from "@/components/project-funnel/inquiry-response";
import {
  FIRST_CALL_CONTACT,
  FIRST_CALL_CONTACT_SHORT,
  FIRST_CALL_META,
} from "@/components/homepage/first-call";
import { TEAM_TOTAL_COUNT } from "@/lib/team";
import { SERVICE_LINKS } from "@/lib/services";
import { LOCAL_PAGES, localPagePath } from "@/lib/local-pages";
import { PRIVACY_NOTICE_VERSION } from "@/lib/privacy-notice";
import { CALENDLY_URL } from "@/lib/calendly";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact-details";
import { isCookieBannerEnabled } from "@/lib/cookie-consent";
import {
  clearProjectInquiryClientKey,
  getProjectInquiryClientKey,
} from "@/lib/project-inquiry-client-key";
import { readLeadSource } from "@/lib/lead-source";
import { trackFunnelEvent } from "@/lib/funnel-analytics";
import { trackLeadConversion } from "@/lib/lead-conversion";
import { isProviderTimeoutError } from "@/lib/provider-timeout";
import "./site-footer.css";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message?: string }
  | { kind: "error"; message: string; fields?: Record<string, string> };

/**
 * Toute mise en échec doit laisser une porte humaine.
 *
 * Deux branches sur cinq n'en donnaient pas : le refus serveur générique
 * (« Une erreur est survenue »), et la panne réseau — qui invitait pourtant à
 * « écrire directement » sans jamais donner l'adresse. Un visiteur qui vient de
 * remplir le formulaire se retrouvait sans aucun moyen de nous joindre.
 * Les erreurs de saisie, elles, n'en ont pas besoin : le visiteur peut corriger.
 */
const REPLI_HUMAIN = `Votre saisie reste affichée : réessayez, écrivez-nous à ${CONTACT_EMAIL} ou appelez le ${CONTACT_PHONE_DISPLAY}.`;

function avecRepliHumain(message: string): string {
  const base = message.trim();
  if (!base) return REPLI_HUMAIN;
  // Idempotent : plusieurs branches portent déjà l'adresse en toutes lettres.
  if (base.includes(CONTACT_EMAIL)) return base;
  return `${base} ${REPLI_HUMAIN}`;
}

const BUDGETS = ["< 15k", "15-30k", "30-60k", "60k+", "Je ne sais pas"];
/**
 * Les sujets sont dérivés du registre des services publiés, pas recopiés.
 * La liste en dur n'en couvrait que 7 sur 11 : référencement, publicité,
 * contenu vidéo et sécurité n'étaient pas proposables, alors que les pages
 * correspondantes envoyaient leurs boutons de devis vers ce formulaire.
 */
const PROJECT_TYPES = [
  ...SERVICE_LINKS.map((service) => service.title),
  "Reprise ou audit d'un existant",
  "Je ne sais pas",
];

/**
 * Exemple de message propre à la page d'où vient le visiteur.
 *
 * Le même exemple — remplacer des Excel par une plateforme — s'affichait sur
 * les 11 pages service, y compris contenu & vidéo et sécurité & RGPD, où il ne
 * veut rien dire. Un visiteur qui vient de cliquer « Cadrer le Deep » sur la
 * page audit lisait une invitation à parler de facturation.
 */
const DEFAULT_MESSAGE_EXAMPLE =
  "Ex. : on veut remplacer nos Excels par une plateforme qui centralise nos 42 clients et sort les factures auto.";

const SERVICE_MESSAGE_EXAMPLES: Record<string, string> = {
  "/services/saas-applications-metier":
    "Ex. : on veut sortir un premier SaaS pour nos 40 clients, avec comptes, abonnement et facturation. On a une maquette et pas encore de code.",
  "/services/outils-internes-sur-mesure":
    "Ex. : on veut remplacer nos Excels par une plateforme qui centralise nos 42 clients et sort les factures auto.",
  "/services/sites-vitrines":
    "Ex. : notre site a six ans, il est lent sur mobile et on ne peut plus rien modifier nous-mêmes. Une quinzaine de pages à reprendre.",
  "/services/ecommerce":
    "Ex. : on vend 300 références, le tunnel de commande perd du monde au paiement et on veut brancher notre logiciel de stock.",
  "/services/referencement-google":
    "Ex. : on n'apparaît sur aucune de nos requêtes métier. On a la Search Console et on ne sait pas par où commencer.",
  "/services/publicite-en-ligne":
    "Ex. : on dépense 3 000 € par mois sur Google Ads sans savoir ce que ça rapporte, et le compte n'a pas été revu depuis un an.",
  "/services/contenu-video":
    "Ex. : on veut une série de vidéos courtes pour présenter notre offre, tournage sur site et montage, à diffuser sur LinkedIn.",
  "/services/application-mobile":
    "Ex. : nos équipes terrain saisissent sur papier. Il leur faut une application qui marche hors connexion et synchronise le soir.",
  "/services/maintenance-evolution":
    "Ex. : notre prestataire s'est arrêté, l'application tourne toujours et personne ne sait la faire évoluer.",
  "/services/securite-rgpd":
    "Ex. : un client nous demande nos garanties RGPD et un audit de sécurité avant de signer. On ne sait pas où on en est.",
  "/services/audit-technique":
    "Ex. : on envisage de racheter un éditeur et on veut savoir ce que vaut son code avant de s'engager.",
};
const TIMELINES = [
  "Dès que possible",
  "Dans 1 mois",
  "Dans 3 mois",
  "Pas encore défini",
];

/**
 * Repli sans JavaScript du formulaire court.
 *
 * Le <form> n'a ni `action` ni `method` : sans JS, l'envoi déclencherait une
 * navigation GET vers la page courante — prénom, nom, e-mail professionnel et
 * message partiraient dans la barre d'adresse, donc aussi dans le `Referer` et
 * dans les journaux serveur. Masquer le bouton ne suffisait pas : la soumission
 * IMPLICITE (touche Entrée dans un champ texte) part sans lui.
 *
 * D'où le `<input type="submit" disabled>` en tête de ce repli. Le contenu d'un
 * <noscript> n'est analysé comme des éléments QUE si le script est désactivé :
 * ce bouton n'existe donc que dans ce cas, où il devient le bouton par défaut du
 * formulaire (premier bouton d'envoi dans l'ordre du document). La spécification
 * HTML ne déclenche la soumission implicite que si ce bouton par défaut n'est
 * pas désactivé — et n'utilise le repli « formulaire sans bouton d'envoi » que
 * s'il n'y en a aucun. Entrée ne fait donc plus rien du tout. Avec JavaScript,
 * ce bouton n'existe pas et Entrée continue d'envoyer normalement.
 *
 * On masque en plus le bouton visible et on affiché les voies directes.
 *
 * (Chaîne constante : React ne peut pas hydrater le contenu d'un <noscript>
 * comme des éléments. Aucune donnée utilisateur, surface XSS nulle.)
 */
const NOSCRIPT_FORM_FALLBACK = `<input type="submit" disabled hidden aria-hidden="true" tabindex="-1" />
<style>.sf-form .sf-submit{display:none}</style>
<div class="sf-alert sf-alert-err">Ce formulaire a besoin de JavaScript pour être envoyé. Écrivez-nous à <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>, appelez le <a href="tel:${CONTACT_PHONE_E164}">${CONTACT_PHONE_DISPLAY}</a> ou <a href="${CALENDLY_URL}" rel="noopener noreferrer">réservez un créneau</a>.</div>`;

type ContactProjectSectionProps = {
  headingLevel?: "h1" | "h2";
  className?: string;
  contactPageCopy?: boolean;
};

export function ContactProjectSection({
  headingLevel = "h2",
  className = "",
  contactPageCopy = false,
}: ContactProjectSectionProps) {
  /**
   * Ce formulaire est l'unique destination des 40 et quelques boutons de devis
   * des pages service. Il arrivait vide : le visiteur qui venait de cliquer
   * « Cadrer le Deep » sur la page audit devait re-saisir le sujet qu'il venait
   * de choisir. On lit donc le service depuis la route plutot que d'exiger des
   * onze pages qu'elles transportent un parametre.
   */
  const pathname = usePathname();
  const serviceContext = SERVICE_LINKS.find(
    (service) => service.path === pathname,
  );
  const messageExample =
    (pathname ? SERVICE_MESSAGE_EXAMPLES[pathname] : undefined) ??
    DEFAULT_MESSAGE_EXAMPLE;

  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [message, setMessage] = useState("");
  const [challengeEnabled, setChallengeEnabled] = useState(false);
  // Anti-bot maison : question de calcul, vérifiée côté client avant envoi
  // puis revalidée server-side par /api/project-inquiry.
  const [math, setMath] = useState<MathChallengeValue | null>(null);
  // Vrai quand /api/math-challenge n'a pas répondu : le champ reste vide et
  // désactivé, il faut alors proposer une autre voie plutôt qu'un message
  // qui accuse le visiteur d'une erreur de calcul jamais affichée.
  const [mathUnavailable, setMathUnavailable] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const submissionKeyRef = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // Vrai uniquement quand c'est l'envoi qui vient de faire apparaître le
  // contrôle anti-robot : on n'y déplace le focus que dans ce cas, jamais
  // quand l'utilisateur vient simplement de cliquer dans un champ.
  const focusChallengeRef = useRef(false);
  // `contact_form_open` est le dénominateur du formulaire : sans lui, on sait
  // combien de gens ont envoyé, jamais combien ont commencé — donc aucun taux
  // d'abandon sur les pages service, cibles naturelles des annonces. Le nom
  // était déclaré dans FUNNEL_EVENT_NAMES sans que rien ne l'émette. Un seul
  // événement par montage : le premier focus dans le formulaire.
  const openTrackedRef = useRef(false);
  const fieldId = useId();
  const errorId = (field: string) => `${fieldId}-${field}-error`;
  const describedBy = (field: string, hasError: unknown) =>
    hasError ? errorId(field) : undefined;
  const labelId = (field: string) => `${fieldId}-${field}-label`;

  // Le champ inséré est `disabled` tant que /api/math-challenge n'a pas
  // répondu : on attend qu'il devienne utilisable avant d'y poser le focus.
  useEffect(() => {
    if (!challengeEnabled || !focusChallengeRef.current) return;
    let frame = 0;
    let attempts = 0;
    const tryFocus = () => {
      const input = formRef.current?.querySelector<HTMLInputElement>(
        'input[name="mathChallengeAnswer"]',
      );
      if (input && !input.disabled) {
        focusChallengeRef.current = false;
        input.focus();
        return;
      }
      attempts += 1;
      if (attempts > 150) {
        focusChallengeRef.current = false;
        return;
      }
      frame = requestAnimationFrame(tryFocus);
    };
    frame = requestAnimationFrame(tryFocus);
    return () => cancelAnimationFrame(frame);
  }, [challengeEnabled]);

  const handleTranscribed = useCallback((text: string) => {
    setMessage((prev) => {
      const trimmed = prev.trim();
      const next = trimmed ? `${trimmed}\n\n${text}` : text;
      // Re-focus the textarea so the user sees the cursor land at the end.
      requestAnimationFrame(() => {
        const el = messageRef.current;
        if (el) {
          el.focus();
          el.setSelectionRange(next.length, next.length);
        }
      });
      return next;
    });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!challengeEnabled) {
      focusChallengeRef.current = true;
      setChallengeEnabled(true);
      setStatus({
        kind: "error",
        message: "Complétez le contrôle anti-robot qui vient de s’afficher.",
        fields: { mathChallenge: "Répondez au calcul avant l’envoi." },
      });
      return;
    }

    // Distingue « défi non chargé », « champ vide » et « réponse fausse » :
    // afficher « Réponse incorrecte » devant un champ vide et désactivé
    // accusait le visiteur d'un calcul qui ne lui avait jamais été montré.
    const challengeError = getMathChallengeError(math);
    if (challengeError) {
      setStatus({
        kind: "error",
        message: challengeError,
        fields: { mathChallenge: challengeError },
      });
      return;
    }

    const payload = {
      firstName: String(data.get("firstName") || "").trim(),
      lastName: String(data.get("lastName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      projectType: String(data.get("projectType") || "").trim(),
      timeline: String(data.get("timeline") || "").trim(),
      budget: String(data.get("budget") || "").trim(),
      message: String(data.get("message") || "").trim(),
      honeypot: String(data.get("honeypot") || ""),
      mathChallenge: toMathChallengePayload(math),
      consent: data.get("consent") === "on",
      // Ce formulaire est servi sur l'accueil, /services, les pages service et
      // /tarifs : c'est une porte d'entrée à part entière, elle doit tracer sa
      // provenance comme le tunnel. Cf. src/lib/lead-source.ts.
      ...readLeadSource(),
    };

    setStatus({ kind: "submitting" });

    try {
      const submissionKey =
        submissionKeyRef.current ?? getProjectInquiryClientKey();
      submissionKeyRef.current = submissionKey;
      const res = await fetch("/api/project-inquiry", {
        method: "POST",
        // Le bouton est réellement `disabled` pendant l'envoi : sans délai
        // maximal, une requête qui ne répond jamais laissait le visiteur sur
        // « Envoi en cours… » sans issue, et ce formulaire ne conserve aucun
        // brouillon. Le catch rend la main avec e-mail et téléphone.
        signal: AbortSignal.timeout(PROJECT_INQUIRY_TIMEOUT_MS),
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": submissionKey,
        },
        body: JSON.stringify(payload),
      });
      const json: {
        ok?: boolean;
        error?: string;
        errors?: Record<string, string>;
        captured?: boolean;
        message?: string;
      } = await res.json().catch(() => ({}));

      if (!res.ok) {
        trackFunnelEvent("contact_form_submit_error", {
          page: window.location.pathname,
          status: res.status,
        });
        setStatus({
          kind: "error",
          message: avecRepliHumain(
            json.error ||
              "Une erreur est survenue, merci de réessayer dans un instant.",
          ),
          fields: json.errors,
        });
        return;
      }
      // 200 ne veut pas dire « enregistré ». La route répond volontairement
      // `{ ok: true, captured: false }` quand le piège à robots s'est
      // déclenché — un gestionnaire de mots de passe suffit à le remplir.
      // Afficher « Message bien reçu » à ce visiteur perdrait le lead en
      // silence : on garde sa saisie et on lui donne une voie directe.
      //
      // Le prédicat est celui du tunnel (`captured === true`, rien d'autre) :
      // tester `json.captured === false` faisait passer pour un succès un 200
      // au corps illisible — page d'erreur insérée par un proxy, corps tronqué,
      // `res.json()` qui échoue et retombe sur `{}` — donc effaçait la saisie
      // et comptait une conversion pour un lead jamais enregistré.
      if (!briefWasCaptured(res.ok, json)) {
        // Le champ piège n'est pas contrôlé et n'est jamais vidé sur ce chemin :
        // sans cette remise à zéro, chaque nouvelle tentative renvoyait la même
        // valeur et retombait sur le même refus. Le faux positif n'était donc
        // « rattrapable » que hors formulaire.
        const honeypot = formRef.current?.querySelector<HTMLInputElement>(
          'input[name="honeypot"]',
        );
        if (honeypot) honeypot.value = "";
        trackFunnelEvent("contact_form_submit_error", {
          page: window.location.pathname,
          status: res.status,
        });
        setStatus({
          kind: "error",
          message: `Votre message n'a pas pu être enregistré. Écrivez-nous directement à ${CONTACT_EMAIL} ou appelez le ${CONTACT_PHONE_DISPLAY} — votre saisie reste affichée ci-dessus.`,
        });
        return;
      }
      setStatus({ kind: "success", message: json.message });
      // Le formulaire est remis à zéro après un succès et reste utilisable, et
      // le pied de page est rendu sur une quinzaine de pages : sans
      // déduplication, un second envoi comptait un second lead payant pour le
      // même prospect — le tunnel, lui, dédupliquait déjà (cf.
      // ConversionTracker). Portée « document » et non « session » : la portée
      // session écrirait une clé dans le navigateur, donc une ligne de plus au
      // tableau « Stockages utilisés par le site » de /legal/cookies, qui
      // s'annonce exhaustif. Une conversion en double survit ici à un
      // rechargement complet, pas aux navigations internes.
      trackLeadConversion("contact_form", "contact_form_submit_success", {
        dedupeKey: "contact_form:converted",
        dedupeScope: "document",
      });
      submissionKeyRef.current = null;
      clearProjectInquiryClientKey();
      form.reset();
      setMessage("");
      setMath(null);
      setChallengeEnabled(false);
    } catch (error) {
      setStatus({
        kind: "error",
        message: isProviderTimeoutError(error)
          ? `Le serveur n'a pas répondu en ${PROJECT_INQUIRY_TIMEOUT_SECONDS} secondes et l'envoi a été interrompu. Votre saisie reste affichée : réessayez, écrivez-nous à ${CONTACT_EMAIL} ou appelez le ${CONTACT_PHONE_DISPLAY}.`
          : avecRepliHumain("Impossible de contacter le serveur."),
      });
    }
  }

  const errs = status.kind === "error" ? status.fields || {} : {};
  const Heading = headingLevel;
  const classNames = ["sf-contact", className].filter(Boolean).join(" ");
  const heading = contactPageCopy ? (
    <>
      Parlons de votre projet web sur mesure.{" "}
      <span className="sf-accent">30 minutes, c&apos;est tout.</span>
    </>
  ) : (
    <>
      Parlons de <br />
      votre projet.{" "}
      <span className="sf-accent">30 minutes, c&apos;est tout.</span>
    </>
  );
  const intro = contactPageCopy ? (
    <>
      SaaS B2B, application métier, outil interne, reprise Laravel ou site
      vitrine premium : quelqu&apos;un qui code lit votre demande.
      <b> Premier cadrage gratuit, sans engagement.</b>
    </>
  ) : (
    <>
      Choisissez ce qui vous va : un créneau direct avec{" "}
      {FIRST_CALL_CONTACT_SHORT}, un email rapide, ou un formulaire si vous
      préférez écrire.
      <b> Objectif de réponse le prochain jour ouvré, sans délai garanti.</b>
    </>
  );

  return (
    <section
      className={classNames}
      id="contact"
      aria-labelledby="contact-project-title"
    >
      <div className="sf-bg-grid" aria-hidden="true" />
      <div className="wrap sf-contact-inner">
        <div className="sf-contact-head">
          <div className="eyebrow on-dark">— Prochaine étape</div>
          <Heading id="contact-project-title">{heading}</Heading>
          <p>{intro}</p>
          {/*
            Raccourci vers le calendrier embarqué, réservé à /contact.

            Le titre promet « 30 minutes, c'est tout », mais sur cette page le
            widget de réservation est le DERNIER enfant de <main> : hero,
            formulaire, trois sections et FAQ le séparent du haut de page, soit
            près de neuf écrans de défilement. L'ancre existait déjà et aucun
            lien du site ne pointait dessus.

            Le rendu est conditionné à `contactPageCopy` parce que la cible,
            `#contact-calendly-heading`, n'existe QUE sur /contact : ce même
            composant est rendu en pied de page sur les 60+ autres pages, où ce
            lien mènerait à un fragment absent.

            Il ne double pas la carte « Réserver un créneau » de la colonne
            gauche : celle-ci ouvre Calendly dans un nouvel onglet, celui-ci
            reste sur la page. Les libellés sont donc volontairement distincts.
          */}
          {contactPageCopy ? (
            <div className="sf-contact-jump">
              <a href="#contact-calendly-heading" className="sf-jump-link">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="M12 14v4M10 16l2 2 2-2" />
                </svg>
                Choisir un créneau sur cette page
              </a>
            </div>
          ) : null}
        </div>

        <div className="sf-contact-grid">
          {/* Colonne gauche — Calendly + email + tel */}
          <div className="sf-left">
            <div className="sf-card">
              <div className="sf-card-top">
                <div className="sf-card-ic">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div>
                  <div className="sf-card-kind">LE PLUS RAPIDE</div>
                  <div className="sf-card-title">{FIRST_CALL_META}</div>
                </div>
              </div>
              <p className="sf-card-body">
                Pas un commercial, pas un chef de projet : {FIRST_CALL_CONTACT}{" "}
                vous écoute, vous donne un avis franc, et repart avec votre
                brief si ça matche.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-lg sf-card-cta"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Réserver un créneau
                <svg
                  className="arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <div className="sf-card-meta">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                Sans engagement · visio ou téléphone
              </div>
            </div>

            <div className="sf-direct">
              <div className="sf-direct-row">
                <div className="sf-direct-k">Email</div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="sf-direct-v"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="sf-direct-row">
                <div className="sf-direct-k">Téléphone</div>
                <a href={`tel:${CONTACT_PHONE_E164}`} className="sf-direct-v">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
              <div className="sf-direct-row">
                <div className="sf-direct-k">Adresse</div>
                <div className="sf-direct-v sf-direct-addr">
                  {/* L'espace explicite avant le <br /> évite que
                      « Bellevue73000 » soit restitué d'un bloc par une
                      technologie d'assistance ou une extraction de texte. */}
                  {CONTACT_ADDRESS.street}{" "}
                  <br />
                  {CONTACT_ADDRESS.postalCode} {CONTACT_ADDRESS.locality}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          {/* Pas de `noValidate` : la validation native du navigateur est la
              seule qui fonctionne avant que le JavaScript de la page ait
              répondu, et elle évite qu'un envoi incomplet parte jusqu'au
              serveur pour revenir en erreur. Les messages de champ renvoyés
              par l'API restent affichés par-dessus. */}
          <form
            className="sf-form"
            ref={formRef}
            onSubmit={onSubmit}
            onFocusCapture={() => {
              setChallengeEnabled(true);
              if (openTrackedRef.current) return;
              openTrackedRef.current = true;
              trackFunnelEvent("contact_form_open", {
                page: window.location.pathname,
              });
            }}
          >
            <div className="sf-form-head">
              <div className="sf-card-kind">OU ÉCRIVEZ-NOUS</div>
              <div className="sf-card-title">Formulaire projet</div>
            </div>

            {/* aria-labelledby pointe sur le seul libellé : sans lui, le message
                d'erreur rendu dans le <label> polluerait le nom accessible du
                champ. L'erreur est reliée par aria-describedby. */}
            <div className="sf-grid-2">
              <label className="sf-field">
                <span id={labelId("firstName")}>Prénom</span>
                <input
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  aria-labelledby={labelId("firstName")}
                  aria-invalid={!!errs.firstName}
                  aria-describedby={describedBy("firstName", errs.firstName)}
                />
                {errs.firstName && (
                  <em id={errorId("firstName")}>{errs.firstName}</em>
                )}
              </label>
              <label className="sf-field">
                <span id={labelId("lastName")}>Nom</span>
                <input
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  aria-labelledby={labelId("lastName")}
                  aria-invalid={!!errs.lastName}
                  aria-describedby={describedBy("lastName", errs.lastName)}
                />
                {errs.lastName && (
                  <em id={errorId("lastName")}>{errs.lastName}</em>
                )}
              </label>
            </div>

            <label className="sf-field">
              <span id={labelId("email")}>Email professionnel</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-labelledby={labelId("email")}
                aria-invalid={!!errs.email}
                aria-describedby={describedBy("email", errs.email)}
              />
              {errs.email && <em id={errorId("email")}>{errs.email}</em>}
            </label>

            <div className="sf-grid-2">
              <label className="sf-field">
                <span id={labelId("company")}>Entreprise</span>
                <input
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  aria-labelledby={labelId("company")}
                  aria-invalid={!!errs.company}
                  aria-describedby={describedBy("company", errs.company)}
                />
                {errs.company && (
                  <em id={errorId("company")}>{errs.company}</em>
                )}
              </label>
              <label className="sf-field">
                <span>
                  Téléphone <em className="sf-opt">(optionnel)</em>
                </span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>

            <label className="sf-field">
              <span id={labelId("projectType")}>
                Type de projet <em className="sf-opt">(optionnel)</em>
              </span>
              <select
                key={serviceContext?.path ?? "sans-service"}
                name="projectType"
                defaultValue={serviceContext?.title ?? ""}
                aria-labelledby={labelId("projectType")}
                aria-invalid={!!errs.projectType}
                aria-describedby={describedBy("projectType", errs.projectType)}
              >
                <option value="" disabled>
                  Choisir le sujet…
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errs.projectType && (
                <em id={errorId("projectType")}>{errs.projectType}</em>
              )}
            </label>

            <div className="sf-grid-2">
              <label className="sf-field">
                <span id={labelId("budget")}>Budget envisagé</span>
                <select
                  name="budget"
                  defaultValue=""
                  aria-labelledby={labelId("budget")}
                  aria-invalid={!!errs.budget}
                  aria-describedby={describedBy("budget", errs.budget)}
                >
                  <option value="" disabled>
                    Choisir une fourchette…
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b === "Je ne sais pas" ? b : `${b} €`}
                    </option>
                  ))}
                </select>
                {errs.budget && <em id={errorId("budget")}>{errs.budget}</em>}
              </label>

              <label className="sf-field">
                <span id={labelId("timeline")}>
                  Échéance <em className="sf-opt">(optionnel)</em>
                </span>
                <select
                  name="timeline"
                  defaultValue=""
                  aria-labelledby={labelId("timeline")}
                  aria-invalid={!!errs.timeline}
                  aria-describedby={describedBy("timeline", errs.timeline)}
                >
                  <option value="" disabled>
                    Choisir un timing…
                  </option>
                  {TIMELINES.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
                {errs.timeline && (
                  <em id={errorId("timeline")}>{errs.timeline}</em>
                )}
              </label>
            </div>

            <label className="sf-field sf-field-message">
              <div className="sf-field-head">
                <span id={labelId("message")}>En quelques phrases</span>
                <VoiceDictateButton
                  className="sf-mic"
                  onTranscribed={handleTranscribed}
                />
              </div>
              <textarea
                ref={messageRef}
                name="message"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-labelledby={labelId("message")}
                aria-invalid={!!errs.message}
                aria-describedby={describedBy("message", errs.message)}
                placeholder={`${messageExample} Cliquez sur Dicter pour parler au lieu d'écrire.`}
              />
              {errs.message && <em id={errorId("message")}>{errs.message}</em>}
            </label>

            {/* honeypot (invisible) */}
            <label className="sf-honeypot" aria-hidden="true">
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            {/* Anti-bot maison : question de calcul (remplace Turnstile). */}
            {challengeEnabled ? (
              <MathChallenge
                className="sf-field sf-field-captcha"
                onChange={setMath}
                error={errs.mathChallenge}
                onLoadErrorChange={setMathUnavailable}
              />
            ) : (
              <div className="sf-field sf-field-captcha sf-captcha-pending">
                <span>Contrôle anti-robot</span>
                <small>
                  Le calcul est chargé uniquement lorsque vous commencez ce
                  formulaire.
                </small>
              </div>
            )}

            {/* Voie de sortie permanente : le calcul est la seule barrière
                cognitive du formulaire, et le seul point de blocage possible
                si le contrôle ne se charge pas. */}
            {challengeEnabled && (
              <p className="sf-captcha-escape">
                {mathUnavailable
                  ? "Le contrôle anti-robot ne s'est pas chargé — votre saisie n'est pas en cause. Réessayez le contrôle ci-dessus, ou transmettez-nous votre demande directement : "
                  : "Vous ne pouvez pas répondre au calcul ? Transmettez-nous votre demande directement : "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                {" · "}
                <a href={`tel:${CONTACT_PHONE_E164}`}>
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </p>
            )}

            <label className="sf-consent">
              <input
                type="checkbox"
                name="consent"
                required
                aria-invalid={!!errs.consent}
                aria-describedby={describedBy("consent", errs.consent)}
              />
              <span>
                J&apos;ai pris connaissance de la{" "}
                <a href="/legal/confidentialite">
                  politique de confidentialité
                </a>{" "}
                et je demande à HAGNERE CODE de traiter mes informations afin de
                répondre à ma demande. Selon que j&apos;agis en mon nom ou pour
                mon organisation, ce traitement repose sur des mesures
                précontractuelles ou sur l&apos;intérêt légitime à traiter une
                demande professionnelle. Les données sont accessibles à HAGNERE
                CODE et aux prestataires nécessaires, puis conservées au maximum
                trois ans après le dernier échange utile en l&apos;absence de
                contrat. La politique détaille les destinataires et vos droits.
                {/* L'accusé de réception envoyé après l'envoi porte la mention
                    « Version <date> — prise de connaissance confirmée ». Sans
                    ce numéro affiché ici, la personne ne peut pas rattacher
                    l'attestation au texte qu'elle a réellement pu lire. */}
                <small className="sf-consent-version">
                  Politique en vigueur : version {PRIVACY_NOTICE_VERSION}. C&apos;est
                  cette version qui sera enregistrée avec votre demande.
                </small>
              </span>
            </label>
            {errs.consent && (
              <em className="sf-consent-error" id={errorId("consent")}>
                {errs.consent}
              </em>
            )}

            {/* Sans JavaScript, l'envoi AJAX ne peut pas s'exécuter : le bouton
                déclencherait une navigation GET vers la page courante, la saisie
                partirait dans la barre d'adresse et la page se rechargerait vide
                sans le moindre message. On masque donc le bouton dans ce cas et
                on affiche les voies de contact directes. */}
            <noscript
              dangerouslySetInnerHTML={{ __html: NOSCRIPT_FORM_FALLBACK }}
            />

            <button
              type="submit"
              className="btn btn-primary btn-lg sf-submit"
              disabled={status.kind === "submitting"}
            >
              {status.kind === "submitting" ? (
                "Envoi en cours…"
              ) : (
                <>
                  Envoyer
                  <svg
                    className="arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            {status.kind === "success" && (
              <div className="sf-alert sf-alert-ok" role="status">
                ✓{" "}
                {status.message ||
                  "Message bien reçu. Nous visons une réponse le prochain jour ouvré, sans délai garanti."}
              </div>
            )}
            {status.kind === "error" && (
              <div className="sf-alert sf-alert-err" role="alert">
                ✕ {status.message}
              </div>
            )}

            <p className="sf-legal-note">
              Pas de newsletter ni de vente de données. Les sous-traitants
              techniques nécessaires sont documentés dans notre politique.
            </p>
          </form>
        </div>

        <div className="sf-trust-row">
          <span>🇫🇷 Équipe 100% en France</span>
          <span className="sep" />
          <span>Prestataires et localisations documentés</span>
          <span className="sep" />
          <span>RGPD · contact interne identifié</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Libellés courts des pages locales dans le pied de page.
 *
 * Le registre `LOCAL_PAGES` ne porte qu'un `title` SEO (trop long ici) et une
 * `locality`. Plutôt que de fabriquer une préposition française par calcul
 * (« à Bassens », « en Savoie », « au Havre »…), on nomme explicitement les
 * pages publiées ; toute page ajoutée au registre retombe sur sa `locality`,
 * ce qui garde le lien présent — donc l'invariant de maillage vrai — même
 * sans passer ici.
 */
const LOCAL_PAGE_LABELS: Record<string, string> = {
  "/agence": "Agence à Bassens (73)",
  "/agence/savoie": "Agence web en Savoie",
  "/agence/savoie/chambery": "Agence web à Chambéry",
};

type SiteFooterProps = {
  showContact?: boolean;
};

export function SiteFooter({ showContact = true }: SiteFooterProps = {}) {
  return (
    <>
      {showContact && <ContactProjectSection />}
      {/* Footer principal */}
      <footer className="sf-footer">
        <div className="wrap">
          {/* ── Row 1 : Brand pitch ──────────────────────────────── */}
          <div className="sf-foot-brand-row">
            <div className="sf-foot-brand">
              <Link href="/" className="brand">
                <div className="brand-mark">HC</div>
                <div className="brand-name">
                  <b>Hagnéré</b> <span>Code</span>
                </div>
              </Link>
              <p>
                Studio de développement SaaS, applications métier et outils
                internes, basé à{" "}
                <Link href="/agence" className="sf-foot-inline-link">
                  Bassens, aux portes de Chambéry
                </Link>
                . Next.js, React, Claude Code, forfait fixe.
              </p>
              <div className="sf-foot-trust">
                <span className="sf-foot-chip">
                  <span className="dot dot-green" /> {TEAM_TOTAL_COUNT}{" "}
                  personnes
                </span>
                <span className="sf-foot-chip">
                  <span className="dot dot-accent" /> Bassens · 100 % France
                </span>
              </div>
            </div>

            <Link href="/services" className="sf-foot-cta">
              <div className="sf-foot-cta-body">
                {/* Dérivé du registre : le hub, le sitemap, le JSON-LD et ce
                    libellé ne peuvent plus annoncer trois nombres différents. */}
                <span className="sf-foot-cta-kicker">
                  {SERVICE_LINKS.length} services
                </span>
                <span className="sf-foot-cta-title">
                  Découvrir tout ce qu&apos;on peut construire pour vous
                </span>
              </div>
              <span className="sf-foot-cta-arrow" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* ── Row 2 : Services (11 tuiles, plein largeur) ───────── */}
          <details className="sf-foot-services sf-foot-group" open>
            <summary className="sf-foot-title"><span>Services</span><span className="sf-foot-chev" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
            <div className="sf-tile-grid sf-tile-grid-services">
              <Link
                className="sf-tile"
                href="/services/saas-applications-metier"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M2 20h20" />
                    <path d="M8 9h6M8 13h4" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Développement SaaS sur mesure
                </span>
              </Link>
              <Link
                className="sf-tile"
                href="/services/outils-internes-sur-mesure"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </span>
                <span className="sf-tile-label">Outils internes</span>
              </Link>
              <Link className="sf-tile" href="/services/sites-vitrines">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                  </svg>
                </span>
                <span className="sf-tile-label">Sites vitrines</span>
              </Link>
              <Link className="sf-tile" href="/services/ecommerce">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6h15l-1.5 9h-12L6 6z" />
                    <path d="M6 6L4 2H1" />
                    <circle cx="9" cy="20" r="1.5" />
                    <circle cx="18" cy="20" r="1.5" />
                  </svg>
                </span>
                <span className="sf-tile-label">E-commerce</span>
              </Link>
              <Link className="sf-tile" href="/services/application-mobile">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2.5" />
                    <path d="M11 18h2" />
                  </svg>
                </span>
                <span className="sf-tile-label">Application mobile</span>
              </Link>
              <Link className="sf-tile" href="/services/referencement-google">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.5-4.5" />
                  </svg>
                </span>
                <span className="sf-tile-label">SEO &amp; référencement</span>
              </Link>
              <Link className="sf-tile" href="/services/publicite-en-ligne">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 11v2a4 4 0 004 4l9 4V5L7 9a4 4 0 00-4 2z" />
                    <path d="M11 18v2" />
                  </svg>
                </span>
                <span className="sf-tile-label">Publicité en ligne</span>
              </Link>
              <Link className="sf-tile" href="/services/contenu-video">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                    <path d="M22 8l-6 4 6 4V8z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Contenu &amp; vidéo</span>
              </Link>
              <Link className="sf-tile" href="/services/securite-rgpd">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="sf-tile-label">Sécurité &amp; RGPD</span>
              </Link>
              <Link className="sf-tile" href="/services/maintenance-evolution">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 12a9 9 0 0115-6.7L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 01-15 6.7L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Maintenance &amp; évolution
                </span>
              </Link>
              <Link className="sf-tile" href="/services/audit-technique">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 11h6M9 15h4" />
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 7h6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Audit technique</span>
              </Link>
            </div>
          </details>

          {/* ── Row 2 bis : ancrage local ─────────────────────────────
              Les pages /agence, /agence/savoie et /agence/savoie/chambery
              n'avaient aucun emplacement permanent : le pied de page en est
              un, présent sur chaque page du site. La liste est dérivée du
              registre `LOCAL_PAGES` pour qu'une page locale ouverte plus tard
              ne puisse plus rester orpheline (invariant verrouillé par
              shared-shell-contract.test.tsx). */}
          <details className="sf-foot-services sf-foot-local sf-foot-group" open>
            <summary className="sf-foot-title"><span>Agence en Savoie</span><span className="sf-foot-chev" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
            <div className="sf-tile-grid sf-tile-grid-local">
              {LOCAL_PAGES.map((page) => {
                const href = localPagePath(page);
                return (
                  <Link className="sf-tile" href={href} key={href}>
                    <span className="sf-tile-ic">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>
                    <span className="sf-tile-label">
                      {LOCAL_PAGE_LABELS[href] ?? page.locality}
                    </span>
                  </Link>
                );
              })}
            </div>
          </details>

          {/* ── Row 3 : Studio | Contact | Légal ─────────────────── */}
          <div className="sf-foot-cols">
            <details className="sf-foot-col sf-foot-group" open>
              <summary className="sf-foot-title"><span>Studio</span><span className="sf-foot-chev" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <Link className="sf-tile" href="/methode">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3h18v18H3z" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
                <span className="sf-tile-label">Méthode Sprint Fixe</span>
              </Link>
              {/* Pages technologie : aucun emplacement permanent avant cette
                  passe (elles ne vivaient que de liens éditoriaux). */}
              <Link className="sf-tile" href="/agence-next-js">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 17l-5-5 5-5M16 7l5 5-5 5" />
                  </svg>
                </span>
                <span className="sf-tile-label">Agence Next.js</span>
              </Link>
              <Link className="sf-tile" href="/agence-react">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4.2"
                      transform="rotate(60 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4.2"
                      transform="rotate(120 12 12)"
                    />
                  </svg>
                </span>
                <span className="sf-tile-label">Agence React</span>
              </Link>
              <Link className="sf-tile" href="/realisations">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 6l10 6 10-6" />
                    <path d="M2 6v12l10 4 10-4V6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Réalisations</span>
              </Link>
              <Link className="sf-tile" href="/equipe">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2" />
                    <path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 19c0-2 2-3.5 4-3.5" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Équipe ({TEAM_TOTAL_COUNT} personnes)
                </span>
              </Link>
              <Link className="sf-tile" href="/tarifs">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v20M17 6H9a3 3 0 100 6h6a3 3 0 110 6H7" />
                  </svg>
                </span>
                <span className="sf-tile-label">Tarifs</span>
              </Link>
              <Link className="sf-tile" href="/demarrer-un-projet">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span className="sf-tile-label">Démarrer mon projet</span>
              </Link>
              <Link className="sf-tile" href="/outils/calculateur-cout-excel">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14.7 6.3a3 3 0 00-4.2 4.2l-7 7v3h3l7-7a3 3 0 004.2-4.2l-1.5 1.5-1.5-1.5 1.5-1.5z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Calculateur coût Excel</span>
              </Link>
              <Link className="sf-tile" href="/ressources">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 2v4M16 2v4M8 10h8M8 14h5" />
                  </svg>
                </span>
                <span className="sf-tile-label">Ressources gratuites</span>
              </Link>
              <Link className="sf-tile" href="/guides">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Guides web</span>
              </Link>
              <Link className="sf-tile" href="/livres-blancs">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M8 13h8M8 17h6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Livres blancs</span>
              </Link>
            </details>

            <details className="sf-foot-col sf-foot-group" open>
              <summary className="sf-foot-title"><span>Contact</span><span className="sf-foot-chev" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <a className="sf-tile" href={`mailto:${CONTACT_EMAIL}`}>
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span className="sf-tile-label">{CONTACT_EMAIL}</span>
              </a>
              <a className="sf-tile" href={`tel:${CONTACT_PHONE_E164}`}>
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.7.6 2.5a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.8.3 1.6.5 2.5.6a2 2 0 011.7 2z" />
                  </svg>
                </span>
                <span className="sf-tile-label">{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <Link className="sf-tile" href="/demarrer-un-projet">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Formulaire projet</span>
              </Link>
              <Link className="sf-tile" href="/contact">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Page contact</span>
              </Link>
              <Link className="sf-tile" href="/rendez-vous">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M9 16l2 2 4-4" />
                  </svg>
                </span>
                <span className="sf-tile-label">Rendez-vous 30 min</span>
              </Link>
              <a
                className="sf-tile"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <span className="sf-tile-label">Réserver 30 min</span>
              </a>
              {/* Canal WhatsApp : rendu tant qu'il n'est pas désactivé par
                  `NEXT_PUBLIC_CONTACT_WHATSAPP=off`. Le lien est dérivé de la
                  ligne publiée, et `wa.me` n'aboutit que si ce numéro est
                  réellement inscrit sur WhatsApp — voir `resolveWhatsAppUrl`
                  dans src/lib/contact-details.ts. */}
              {CONTACT_WHATSAPP_URL && (
                <a
                  className="sf-tile"
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sf-tile-ic">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.3-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 22h-.1a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 014.4 2.1 9.9 9.9 0 0112 0a9.8 9.8 0 017 2.9 9.8 9.8 0 012.9 7c0 5.5-4.4 9.9-9.9 9.9m8.4-18.3A11.8 11.8 0 0012.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7a11.9 11.9 0 005.7 1.4h.1c6.5 0 11.9-5.3 11.9-11.9a11.8 11.8 0 00-3.5-8.4z" />
                    </svg>
                  </span>
                  <span className="sf-tile-label">WhatsApp</span>
                </a>
              )}
            </details>

            <details className="sf-foot-col sf-foot-group" open>
              <summary className="sf-foot-title"><span>Légal</span><span className="sf-foot-chev" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <Link className="sf-tile" href="/legal/mentions">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </span>
                <span className="sf-tile-label">Mentions légales</span>
              </Link>
              <Link className="sf-tile" href="/legal/cgv">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M9 13l2 2 4-4" />
                  </svg>
                </span>
                <span className="sf-tile-label">CGV</span>
              </Link>
              <Link className="sf-tile" href="/legal/confidentialite">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                </span>
                <span className="sf-tile-label">Confidentialité</span>
              </Link>
              <Link className="sf-tile" href="/legal/cookies">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 00-9.6-12.8A2.5 2.5 0 0112 2z" />
                    <circle cx="9" cy="10" r="1" />
                    <circle cx="14" cy="14" r="1" />
                    <circle cx="9" cy="16" r="1" />
                  </svg>
                </span>
                <span className="sf-tile-label">Cookies</span>
              </Link>
              {/* Sans bannière active, aucun traceur facultatif n'est déposé :
                  il n'y a donc aucune préférence à rouvrir. Afficher le bouton
                  promettrait un panneau qui n'existe pas. */}
              {isCookieBannerEnabled() ? (
              <button
                type="button"
                className="sf-tile"
                onClick={() => {
                  if (window.openCookiePreferences) {
                    window.openCookiePreferences();
                  } else {
                    window.location.assign("/legal/cookies");
                  }
                }}
                aria-label="Gérer mes cookies"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Gérer mes cookies</span>
              </button>
              ) : null}
              <Link className="sf-tile" href="/legal/reclamations">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Réclamations &amp; médiation
                </span>
              </Link>
              <Link className="sf-tile" href="/legal/accessibilite">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="6" r="2" />
                    <path d="M5 12h14M9 12l-2 9M15 12l2 9M12 12v3" />
                  </svg>
                </span>
                <span className="sf-tile-label">Accessibilité</span>
              </Link>
            </details>
          </div>

          <div className="sf-foot-bot">
            <div>
              © {new Date().getUTCFullYear()} HAGNERE CODE · SASU au capital de
              10 € · RCS CHAMBÉRY 993 672 856 · TVA FR30 993 672 856 · Adresse
              du siège social : {CONTACT_ADDRESS.street},{" "}
              {CONTACT_ADDRESS.postalCode} {CONTACT_ADDRESS.locality}
            </div>
            <div>BUILT WITH NEXT.JS + CLAUDE CODE</div>
          </div>
        </div>
      </footer>
    </>
  );
}
