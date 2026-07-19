import Link from "next/link";
import {
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
} from "lucide-react";

export function GuideSidebarCTA({
  showWhitePaperPromo = true,
}: {
  showWhitePaperPromo?: boolean;
}) {
  return (
    <div className="space-y-4">
      {showWhitePaperPromo && (
        <aside className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900/60 dark:bg-violet-950/30">
          <div className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm dark:bg-zinc-900 dark:text-violet-300">
              <FileSpreadsheet className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-violet-700 dark:text-violet-300">
                Livre blanc gratuit
              </p>
              <h3 className="mt-1 text-base font-bold leading-snug text-zinc-950 dark:text-white">
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
        </aside>
      )}

      <div className="rounded-2xl bg-zinc-950 dark:bg-zinc-900 p-6 md:p-8 relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08),transparent_60%)]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Votre projet web
            </p>
            <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
              Gratuit &amp; sans engagement
            </h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Décrivez votre projet en 3 minutes — notre équipe vous répond
              personnellement sous 24 h ouvrées.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-2.5 mb-6">
            {[
              "Réponse sous 24 h ouvrées",
              "Forfait fixe contractuel",
              "Une équipe qui code",
              "30 j de garantie post-lancement",
            ].map((benefit) => (
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
