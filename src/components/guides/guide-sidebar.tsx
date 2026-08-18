import Link from "next/link";
import {
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  Calendar,
} from "lucide-react";

const guideBenefits = [
  "Échange sans engagement",
  "Budget et étapes expliqués",
  "Réponse par un développeur",
  "Conserver l’existant reste une option",
];

export function GuideHeroCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-600 to-indigo-700 p-7 text-white shadow-[0_18px_48px_-20px_rgba(109,40,217,0.58)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.20),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.20),transparent_60%)]" />

      <div className="relative z-10">
        <p className="mb-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/85">
          <span className="inline-block size-1 rounded-full bg-white/80" />
          Diagnostic de projet
        </p>
        <p className="mb-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-[1.15] tracking-tight">
          Transformez le guide en{" "}
          <em className="font-medium italic text-white/90">
            décisions applicables à votre projet
          </em>
        </p>
        <p className="mb-5 text-sm leading-relaxed text-white/85">
          Décrivez votre contexte, vos contraintes et le résultat attendu.
          Nous vous répondons avec un premier cadrage concret, y compris si une
          solution plus simple suffit.
        </p>

        <ul className="mb-6 space-y-2">
          {guideBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2.5 text-sm text-white/95"
            >
              <CheckCircle2
                className="size-4 shrink-0 text-white"
                aria-hidden="true"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2.5">
          <Link
            href="/demarrer-un-projet"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            <Calendar className="size-4" aria-hidden="true" />
            Décrire mon projet
          </Link>
          <a
            href="tel:+33374472018"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            03 74 47 20 18
          </a>
        </div>
      </div>
    </div>
  );
}

export function GuideContextCTA({
  showWhitePaperPromo = false,
}: {
  showWhitePaperPromo?: boolean;
}) {
  return (
    <div className="space-y-4">
      {showWhitePaperPromo && (
        <section
          aria-labelledby="guide-premium-white-paper-title"
          className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900/60 dark:bg-violet-950/30"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm dark:bg-zinc-900 dark:text-violet-300">
              <FileSpreadsheet className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
                Livre blanc gratuit
              </p>
              <h3
                id="guide-premium-white-paper-title"
                className="mt-1 text-base font-bold leading-snug text-zinc-950 dark:text-white"
              >
                Vous comparez des devis web ?
              </h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Calculez le coût réel sur 36 mois, filtrez les risques et copiez la
            grille remplie dans Excel ou Google Sheets.
          </p>
          <Link
            href="/livres-blancs/comparer-devis-site-internet"
            className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-800"
          >
            Comparer mes devis
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </Link>
        </section>
      )}

      <div className="relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-6 shadow-[0_0_0_4px_rgba(109,40,217,0.05),0_18px_48px_-22px_rgba(109,40,217,0.35)] dark:border-violet-950 dark:bg-zinc-950 sm:p-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.09),transparent_60%)]" />
        <div className="relative">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex size-7 items-center justify-center rounded-lg bg-violet-50 text-violet-700 ring-1 ring-violet-100 dark:bg-violet-950 dark:text-violet-300 dark:ring-violet-900">
              <Calendar className="size-3.5" aria-hidden="true" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
              Accompagnement
            </span>
          </div>

          <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-zinc-950 dark:text-white">
            Cadrez votre projet avec un développeur
          </h3>
          <p className="mb-5 text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-300">
            Besoin, contraintes, reprise de l’existant, budget et prochaine
            décision : obtenez un premier avis concret avant de vous engager.
          </p>

          <ul className="mb-5 space-y-2">
            {guideBenefits.slice(0, 3).map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-[13px] leading-snug text-zinc-700 dark:text-zinc-200"
              >
                <CheckCircle2
                  className="mt-0.5 size-3.5 shrink-0 text-violet-700 dark:text-violet-300"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <Link
              href="/demarrer-un-projet"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Calendar className="size-4" aria-hidden="true" />
              Décrire mon projet
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="tel:+33374472018"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              <Phone className="size-4" aria-hidden="true" />
              03 74 47 20 18
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GuideSidebarCTA({
  showWhitePaperPromo = false,
}: {
  showWhitePaperPromo?: boolean;
}) {
  return (
    <div className="space-y-4">
      {showWhitePaperPromo && (
        <section
          aria-labelledby="guide-white-paper-title"
          className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900/60 dark:bg-violet-950/30"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm dark:bg-zinc-900 dark:text-violet-300">
              <FileSpreadsheet className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
                Livre blanc gratuit
              </p>
              <h3
                id="guide-white-paper-title"
                className="mt-1 text-base font-bold leading-snug text-zinc-950 dark:text-white"
              >
                Vous comparez des devis web ?
              </h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Calculez le coût réel sur 36 mois, filtrez les risques et copiez la
            grille remplie dans Excel ou Google Sheets.
          </p>
          <Link
            href="/livres-blancs/comparer-devis-site-internet"
            className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-violet-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-800"
          >
            Comparer mes devis
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </Link>
        </section>
      )}

      <div className="rounded-2xl bg-zinc-950 dark:bg-zinc-900 p-6 md:p-8 relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08),transparent_60%)]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Une question sur votre projet ?
            </p>
            <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
              Obtenez un premier avis concret
            </h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Expliquez votre activité, le problème rencontré et le résultat
              attendu. Votre demande est lue par un développeur, qui peut aussi
              vous recommander une solution plus simple.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-2.5 mb-6">
            {guideBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-zinc-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link
              href="/demarrer-un-projet"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <Send className="size-4" />
              Décrire mon projet
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+33374472018"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-colors"
            >
              <Phone className="size-4" />
              03 74 47 20 18
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
