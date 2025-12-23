import React from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";

export const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
            Notre avantage
          </p>
          <h2 className="mt-4 text-2xl font-bold text-neutral-800 md:text-4xl dark:text-neutral-100">
            Plus rapides, plus compétents, moins chers
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-600 md:text-lg dark:text-neutral-400">
            Nous combinons l&apos;IA, des frameworks éprouvés et des développeurs seniors pour livrer plus vite, avec une qualité irréprochable — et un budget maîtrisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                L&apos;intelligence artificielle intégrée à chaque étape
              </h2>
              <CardDescription>
                Nous utilisons les modèles d&apos;IA les plus avancés pour accélérer la conception, le développement et l&apos;optimisation de vos projets. L&apos;IA n&apos;est pas un gadget : c&apos;est un levier de productivité quotidien, encadré par des développeurs seniors.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Accélération du développement et du refactoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Amélioration continue de la qualité du code
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Gain de temps sans compromis sur la robustesse
                </li>
              </ul>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Des stacks techniques adaptées, pas des choix par défaut
              </h2>
              <CardDescription>
                Chaque projet repose sur une stack technique choisie pour sa performance, sa maintenabilité et sa capacité à évoluer. Nous nous appuyons sur des frameworks éprouvés pour éviter de réinventer l&apos;existant et accélérer la mise en œuvre.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Frameworks modernes et maintenus
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Composants UI robustes et performants
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-indigo-500" />
                  Architecture pensée pour évoluer
                </li>
              </ul>
            </CardContent>
            <CardSkeleton className="mask-radial-from-50% mask-t-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>

        <div className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                  Des composants UI éprouvés, pas réinventés
                </h2>
                <CardDescription>
                  Nous nous appuyons sur des librairies de composants reconnues pour leur qualité et leur accessibilité. Cela nous permet de livrer plus vite des interfaces soignées, tout en gardant une base de code maintenable.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-indigo-500" />
                    shadcn/ui, Radix et autres briques solides
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-indigo-500" />
                    Accessibilité native et bonnes pratiques
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-indigo-500" />
                    Personnalisation complète selon vos besoins
                  </li>
                </ul>
              </CardContent>
            </div>
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 mt-2 max-w-md text-balance">{children}</p>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
