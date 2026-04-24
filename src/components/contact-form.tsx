"use client";
import React, { useState, useRef, useCallback } from "react";
import { IconMailFilled, IconSearch, IconLoader2, IconMicrophone, IconPlayerStop } from "@tabler/icons-react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PhoneInput } from "@/components/ui/phone-input";

export function ContactFormGridWithDetails() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
      <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
        <div className="flex items-start justify-start">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <IconMailFilled className="h-6 w-6 text-blue-500" />
          </FeatureIconContainer>
        </div>
        <h2 className="mt-9 bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl dark:from-neutral-200 dark:to-neutral-300">
          Nous contacter
        </h2>
        <p className="mt-8 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-400">
          Nous sommes toujours à la recherche de nouvelles opportunités pour améliorer nos produits et services.
          Contactez-nous et dites-nous comment nous pouvons vous aider.
        </p>

        <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            hello@hagnere-code.fr
          </p>

          <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            +33 3 74 47 20 18
          </p>
        </div>
        <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
          <Pin className="-top-[1.4rem] left-[19%]" />

          <img
            src="/world.svg"
            width={500}
            height={500}
            alt="world map"
            className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
          />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

// Voice Recorder Button Component
function VoiceRecorderButton({
  onTranscription,
  disabled
}: {
  onTranscription: (text: string) => void;
  disabled?: boolean;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4'
      });

      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        setIsProcessing(true);

        const audioBlob = new Blob(chunksRef.current, {
          type: mediaRecorder.mimeType
        });

        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());

        try {
          const formData = new FormData();
          formData.append('audio', audioBlob, 'recording.webm');

          const response = await fetch('/api/transcribe', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();

          if (response.ok && data.text) {
            onTranscription(data.text);
          }
        } catch (error) {
          console.error('Transcription error:', error);
        } finally {
          setIsProcessing(false);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  }, [onTranscription]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }, [isRecording]);

  const toggleRecording = useCallback(() => {
    if (isProcessing) return;

    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [isRecording, isProcessing, startRecording, stopRecording]);

  return (
    <button
      type="button"
      onClick={toggleRecording}
      disabled={disabled || isProcessing}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-lg transition",
        "text-neutral-600 hover:bg-white hover:text-neutral-900",
        "dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        isRecording && "text-red-600 dark:text-red-500",
        isProcessing && "text-blue-600 dark:text-blue-500"
      )}
      title={isRecording ? "Arrêter l'enregistrement" : "Dicter votre message"}
    >
      {/* Microphone icon (inactive state) */}
      {!isRecording && !isProcessing && (
        <IconMicrophone className="h-5 w-5" />
      )}

      {/* Stop icon (recording state) */}
      {isRecording && !isProcessing && (
        <IconPlayerStop className="h-5 w-5" />
      )}

      {/* Loading icon (processing state) */}
      {isProcessing && (
        <IconLoader2 className="h-5 w-5 animate-spin" />
      )}

      {/* Pulsing red dot (visible only during recording) */}
      {isRecording && !isProcessing && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
        </span>
      )}
    </button>
  );
}

function ContactForm() {
  const [activeTab, setActiveTab] = useState("individual");

  // Individual form state
  const [individualForm, setIndividualForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Company form state
  const [companyForm, setCompanyForm] = useState({
    firstName: "",
    lastName: "",
    siren: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sirenLoading, setSirenLoading] = useState(false);
  const [sirenError, setSirenError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSirenSearch = async () => {
    if (!companyForm.siren) return;

    setSirenLoading(true);
    setSirenError("");

    try {
      const response = await fetch(`/api/sirene?siren=${companyForm.siren}`);
      const data = await response.json();

      if (!response.ok) {
        setSirenError(data.error || "Erreur lors de la recherche");
        return;
      }

      setCompanyForm((prev) => ({
        ...prev,
        companyName: data.companyName,
      }));
    } catch {
      setSirenError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setSirenLoading(false);
    }
  };

  const handleIndividualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "individual",
          ...individualForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.error || "Erreur lors de l'envoi");
        return;
      }

      setSubmitSuccess(true);
      setIndividualForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setSubmitError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleCompanySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "company",
          ...companyForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.error || "Erreur lors de l'envoi");
        return;
      }

      setSubmitSuccess(true);
      setCompanyForm({
        firstName: "",
        lastName: "",
        siren: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setSubmitError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleIndividualTranscription = useCallback((text: string) => {
    setIndividualForm((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message} ${text}` : text,
    }));
  }, []);

  const handleCompanyTranscription = useCallback((text: string) => {
    setCompanyForm((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message} ${text}` : text,
    }));
  }, []);

  const inputClassName = "shadow-input h-10 w-full rounded-md border border-transparent bg-white pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white";
  const labelClassName = "mb-2 inline-block text-sm font-medium text-neutral-600 dark:text-neutral-300";

  return (
    <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-10 dark:from-neutral-900 dark:to-neutral-950">
      <Grid size={20} />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="relative z-20 w-full">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="individual" className="flex-1">Particulier</TabsTrigger>
          <TabsTrigger value="company" className="flex-1">Entreprise</TabsTrigger>
        </TabsList>

        <TabsContent value="individual">
          <form onSubmit={handleIndividualSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClassName} htmlFor="firstName">
                  Prénom *
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Jean"
                  value={individualForm.firstName}
                  onChange={(e) => setIndividualForm((prev) => ({ ...prev, firstName: e.target.value }))}
                  className={inputClassName}
                  required
                />
              </div>
              <div>
                <label className={labelClassName} htmlFor="lastName">
                  Nom *
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Dupont"
                  value={individualForm.lastName}
                  onChange={(e) => setIndividualForm((prev) => ({ ...prev, lastName: e.target.value }))}
                  className={inputClassName}
                  required
                />
              </div>
            </div>

            <div>
              <label className={labelClassName} htmlFor="individualEmail">
                Adresse email *
              </label>
              <input
                id="individualEmail"
                type="email"
                placeholder="contact@exemple.com"
                value={individualForm.email}
                onChange={(e) => setIndividualForm((prev) => ({ ...prev, email: e.target.value }))}
                className={inputClassName}
                required
              />
            </div>

            <div>
              <label className={labelClassName} htmlFor="individualPhone">
                Téléphone
              </label>
              <PhoneInput
                value={individualForm.phone}
                onChange={(value) => setIndividualForm((prev) => ({ ...prev, phone: value || "" }))}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="individualMessage">
                  Message *
                </label>
                <VoiceRecorderButton
                  onTranscription={handleIndividualTranscription}
                  disabled={submitLoading}
                />
              </div>
              <textarea
                id="individualMessage"
                rows={5}
                placeholder="Décrivez votre projet..."
                value={individualForm.message}
                onChange={(e) => setIndividualForm((prev) => ({ ...prev, message: e.target.value }))}
                className="shadow-input w-full rounded-md border border-transparent bg-white pt-4 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
                required
              />
            </div>

            {submitError && <p className="text-sm text-red-500">{submitError}</p>}
            {submitSuccess && (
              <div className="text-sm text-green-500 space-y-1">
                <p className="font-medium">Message envoyé avec succès !</p>
                <p className="text-green-600/80">Nous revenons vers vous d&apos;ici 24h ouvrées maximum par mail ou par téléphone. Pensez à consulter vos spams.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitLoading}
              className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed md:text-sm"
            >
              {submitLoading ? (
                <>
                  <IconLoader2 className="h-4 w-4 mr-2 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer"
              )}
            </button>
          </form>
        </TabsContent>

        <TabsContent value="company">
          <form onSubmit={handleCompanySubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClassName} htmlFor="companyFirstName">
                  Prénom *
                </label>
                <input
                  id="companyFirstName"
                  type="text"
                  placeholder="Jean"
                  value={companyForm.firstName}
                  onChange={(e) => setCompanyForm((prev) => ({ ...prev, firstName: e.target.value }))}
                  className={inputClassName}
                  required
                />
              </div>
              <div>
                <label className={labelClassName} htmlFor="companyLastName">
                  Nom *
                </label>
                <input
                  id="companyLastName"
                  type="text"
                  placeholder="Dupont"
                  value={companyForm.lastName}
                  onChange={(e) => setCompanyForm((prev) => ({ ...prev, lastName: e.target.value }))}
                  className={inputClassName}
                  required
                />
              </div>
            </div>

            <div>
              <label className={labelClassName} htmlFor="siren">
                Numéro SIREN *
              </label>
              <div className="flex gap-2">
                <input
                  id="siren"
                  type="text"
                  placeholder="123 456 789"
                  value={companyForm.siren}
                  onChange={(e) => {
                    setCompanyForm((prev) => ({ ...prev, siren: e.target.value }));
                    setSirenError("");
                  }}
                  className={cn(inputClassName, "flex-1")}
                  required
                />
                <button
                  type="button"
                  onClick={handleSirenSearch}
                  disabled={sirenLoading || !companyForm.siren}
                  className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sirenLoading ? (
                    <IconLoader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <IconSearch className="h-4 w-4" />
                  )}
                </button>
              </div>
              {sirenError && <p className="text-sm text-red-500 mt-1">{sirenError}</p>}
            </div>

            <div>
              <label className={labelClassName} htmlFor="companyName">
                Dénomination sociale *
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Auto-rempli après recherche SIREN"
                value={companyForm.companyName}
                onChange={(e) => setCompanyForm((prev) => ({ ...prev, companyName: e.target.value }))}
                className={cn(inputClassName, companyForm.companyName && "bg-green-50 dark:bg-green-900/20")}
                required
              />
            </div>

            <div>
              <label className={labelClassName} htmlFor="companyEmail">
                Adresse email *
              </label>
              <input
                id="companyEmail"
                type="email"
                placeholder="contact@entreprise.com"
                value={companyForm.email}
                onChange={(e) => setCompanyForm((prev) => ({ ...prev, email: e.target.value }))}
                className={inputClassName}
                required
              />
            </div>

            <div>
              <label className={labelClassName} htmlFor="companyPhone">
                Téléphone
              </label>
              <PhoneInput
                value={companyForm.phone}
                onChange={(value) => setCompanyForm((prev) => ({ ...prev, phone: value || "" }))}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-neutral-600 dark:text-neutral-300" htmlFor="companyMessage">
                  Message *
                </label>
                <VoiceRecorderButton
                  onTranscription={handleCompanyTranscription}
                  disabled={submitLoading}
                />
              </div>
              <textarea
                id="companyMessage"
                rows={5}
                placeholder="Décrivez votre projet..."
                value={companyForm.message}
                onChange={(e) => setCompanyForm((prev) => ({ ...prev, message: e.target.value }))}
                className="shadow-input w-full rounded-md border border-transparent bg-white pt-4 pl-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
                required
              />
            </div>

            {submitError && <p className="text-sm text-red-500">{submitError}</p>}
            {submitSuccess && (
              <div className="text-sm text-green-500 space-y-1">
                <p className="font-medium">Message envoyé avec succès !</p>
                <p className="text-green-600/80">Nous revenons vers vous d&apos;ici 24h ouvrées maximum par mail ou par téléphone. Pensez à consulter vos spams.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitLoading}
              className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-neutral-800 px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed md:text-sm"
            >
              {submitLoading ? (
                <>
                  <IconLoader2 className="h-4 w-4 mr-2 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer"
              )}
            </button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{ transform: "translateZ(1px)" }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className,
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-white">
          Nous sommes ici
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500"></span>
        </div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-blue-600 blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-blue-300" />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-gray-50 dark:bg-neutral-800",
          className,
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:h-[8px] dark:blur-sm"></div>
    </div>
  );
};

const DEFAULT_GRID_PATTERN = [
  [8, 2],
  [9, 5],
  [10, 3],
  [7, 6],
  [11, 4],
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? DEFAULT_GRID_PATTERN;
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-10 dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100"
        />
      </div>
    </div>
  );
};

type GridPatternProps = React.SVGProps<SVGSVGElement> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], idx) => (
            <rect
              strokeWidth="0"
              key={`${squareX}-${squareY}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
