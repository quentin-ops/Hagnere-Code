import {
  Archive,
  Check,
  Download,
  FileSpreadsheet,
  FileText,
} from "lucide-react";
import type { DownloadableFile, DownloadableResource } from "@/lib/resources";
import { TrackedDownloadLink } from "./TrackedDownloadLink";

interface ResourceDownloadCardProps {
  resource: DownloadableResource;
  placement?: string;
}

function FileIcon({ file }: { file: DownloadableFile }) {
  if (file.format === "xlsx") {
    return <FileSpreadsheet className="size-5" aria-hidden="true" />;
  }

  return <FileText className="size-5" aria-hidden="true" />;
}

export function ResourceDownloadCard({
  resource,
  placement = "article_top",
}: ResourceDownloadCardProps) {
  return (
    <section
      id="telecharger-kit"
      aria-labelledby="telecharger-kit-title"
      className="not-prose scroll-mt-24 my-8 overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm dark:border-violet-900/70 dark:bg-zinc-950"
    >
      <div className="border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 sm:p-7 dark:border-violet-950 dark:from-violet-950/50 dark:via-zinc-950 dark:to-blue-950/30">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Gratuit
              </span>
              <span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700">
                Sans formulaire ni email
              </span>
              <span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700">
                Version {resource.version}
              </span>
            </div>
            <h2
              id="telecharger-kit-title"
              className="m-0 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-white"
            >
              {resource.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {resource.description}
            </p>
          </div>

          <TrackedDownloadLink
            href={resource.primary.href}
            downloadName={resource.primary.downloadName}
            resourceId={resource.id}
            guideSlug={resource.guideSlug}
            fileId={resource.primary.id}
            format={resource.primary.format}
            placement={placement}
            className="inline-flex min-h-11 w-full shrink-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <Archive className="size-4" aria-hidden="true" />
            Télécharger le kit complet
            <span className="text-xs font-normal opacity-70">
              ZIP · {resource.primary.sizeLabel}
            </span>
          </TrackedDownloadLink>
        </div>

        <ul
          aria-label="Caractéristiques du kit"
          className="mt-5 flex flex-col gap-2 text-xs text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-5 dark:text-zinc-400"
        >
          {[
            `${resource.files.length} fichiers, téléchargeables séparément`,
            "Aucune donnée à renseigner pour télécharger",
            `Mis à jour le ${resource.updatedLabel}`,
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check
                className="mt-0.5 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 sm:p-7">
        <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
          Télécharger un fichier séparément
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {resource.files.map((file) => (
            <li
              key={file.id}
              className="flex min-w-0 flex-col rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  <FileIcon file={file} />
                </span>
                <div className="min-w-0">
                  <p className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
                    {file.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {file.description}
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <TrackedDownloadLink
                  href={file.href}
                  downloadName={file.downloadName}
                  resourceId={resource.id}
                  guideSlug={resource.guideSlug}
                  fileId={file.id}
                  format={file.format}
                  placement={`${placement}_individual`}
                  className="inline-flex min-h-11 w-full flex-col items-center justify-center gap-1 rounded-lg border border-zinc-300 px-3 py-2 text-center text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <Download className="size-4" aria-hidden="true" />
                    Télécharger {file.label}
                  </span>
                  <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
                    {file.formatLabel} · {file.sizeLabel}
                  </span>
                </TrackedDownloadLink>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {resource.compatibility} Le kit aide à cadrer un projet ; il ne
          remplace ni le contrat, ni un audit de conformité, ni un conseil
          juridique adapté.
        </p>
      </div>
    </section>
  );
}
