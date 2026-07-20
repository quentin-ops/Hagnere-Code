"use client";

import { useRef, type ReactNode } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { useMethodeToc } from "./useMethodeToc";

type MethodeInteractiveRootProps = {
  children: ReactNode;
};

/**
 * Frontière client minimale de la page Méthode.
 *
 * Le contenu éditorial est fourni en children par le Server Component ; seuls
 * le scrollspy du sommaire et les interactions visuelles partagées sont
 * hydratés dans le navigateur.
 */
export function MethodeInteractiveRoot({
  children,
}: MethodeInteractiveRootProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);
  useMethodeToc(rootRef);

  return (
    <div ref={rootRef} className="hc-design">
      {children}
    </div>
  );
}
