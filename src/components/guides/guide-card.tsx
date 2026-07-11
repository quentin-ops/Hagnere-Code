import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface GuideCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

export function GuideCard({ href, icon: Icon, title, description, badge }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-1 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 hover:shadow-sm"
    >
      <div className="flex-1 p-5 sm:p-6">
        <div className="size-10 rounded-lg bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-100 dark:border-zinc-800 group-hover:bg-white dark:group-hover:bg-zinc-800 group-hover:border-zinc-200 dark:group-hover:border-zinc-700 transition-colors">
          <Icon className="size-5 text-zinc-600 dark:text-zinc-400" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
          {badge && (
            <span className="shrink-0 px-1.5 py-px rounded-full text-[9px] font-bold uppercase tracking-wide bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/25">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 mt-auto">
        <span className="text-xs font-semibold text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 flex items-center gap-1 transition-colors">
          Lire le guide <ArrowRight className="size-3" />
        </span>
      </div>
    </Link>
  );
}

/* Carte large pour le guide principal */
interface GuideCardFeaturedProps {
  href: string;
  badge: string;
  readTime: string;
  title: string;
  description: string;
}

export function GuideCardFeatured({
  href,
  badge,
  readTime,
  title,
  description,
}: GuideCardFeaturedProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 p-6 sm:p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-5 sm:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold uppercase tracking-wide">
                  {badge}
                </span>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
            <div className="flex items-center shrink-0">
              <div className="size-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all duration-300">
                <ArrowRight className="size-5 text-zinc-400 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
