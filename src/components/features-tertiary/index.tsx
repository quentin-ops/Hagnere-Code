import React from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { HumanIcon, IntegrationIcon, WorkflowIcon } from "@/icons";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/four";

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800  divide-neutral-200 dark:divide-neutral-800">
          <div className="md:border-r border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Devis immédiat par IA
              </h2>
              <CardDescription>
                Notre outil d&apos;estimation basé sur l&apos;IA analyse votre besoin, la complexité fonctionnelle et les ressources nécessaires pour vous fournir une première estimation claire et cohérente, en quelques minutes.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Allocation des ressources
              </h2>
              <CardDescription>
                Nous sélectionnons et affectons les profils les plus pertinents pour votre projet : développeurs, experts IA, designers ou DevOps, en fonction de vos objectifs, de vos contraintes et de votre calendrier.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20% ">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="md:border-r border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Processus & pilotage
              </h2>
              <CardDescription>
                Chaque projet suit un cadre clair : jalons définis, rapports hebdomadaires, feedback régulier et validations successives. Vous gardez une visibilité constante sur l&apos;avancement et les décisions clés.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-20%  mask-r-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div className=" dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Gouvernance, qualité & sécurité
              </h2>
              <CardDescription>
                Nos outils et méthodes intègrent des mécanismes de contrôle, de validation et de sécurité pour garantir des livrables fiables, conformes et exploitables en production.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="">
              <SkeletonFour />
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
    <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md text-balance">
      {children}
    </p>
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
