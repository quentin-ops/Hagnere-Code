"use client";

import {
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";

type InteractiveDesignRootProps = {
  children: ReactNode;
  className: string;
  style?: CSSProperties;
};

/**
 * Petite frontière client commune aux pages éditoriales.
 *
 * Le contenu statique reste rendu par le serveur et n'est donc pas recopié
 * dans le bundle JavaScript du navigateur. Seuls les comportements partagés
 * (navigation, accordéons, thème et révélations) sont hydratés ici.
 */
export function InteractiveDesignRoot({
  children,
  className,
  style,
}: InteractiveDesignRootProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className={className} style={style}>
      {children}
    </div>
  );
}
