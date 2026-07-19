"use client";

import { useState, type ReactNode } from "react";
import { trackFunnelEvent } from "@/lib/funnel-analytics";
import type { DownloadFormat } from "@/lib/resources";

interface TrackedDownloadLinkProps {
  href: string;
  downloadName: string;
  resourceId: string;
  guideSlug: string;
  fileId: string;
  format: DownloadFormat;
  placement: string;
  className?: string;
  children: ReactNode;
}

export function TrackedDownloadLink({
  href,
  downloadName,
  resourceId,
  guideSlug,
  fileId,
  format,
  placement,
  className,
  children,
}: TrackedDownloadLinkProps) {
  const [announcementSequence, setAnnouncementSequence] = useState(0);

  function handleClick() {
    trackFunnelEvent("resource_download_click", {
      resource: resourceId,
      file: fileId,
      format,
      placement,
      guide: guideSlug,
    });
    setAnnouncementSequence((sequence) => sequence + 1);
  }

  return (
    <>
      <a
        href={href}
        download={downloadName}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
      <span className="sr-only" role="status" aria-live="polite">
        {announcementSequence > 0
          ? `Téléchargement demandé${announcementSequence > 1 ? `, tentative ${announcementSequence}` : ""}. Si votre navigateur ne l'affiche pas, activez de nouveau ce lien.`
          : ""}
      </span>
    </>
  );
}
