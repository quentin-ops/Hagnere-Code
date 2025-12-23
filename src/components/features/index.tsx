import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { Card, CardContent, CardSkeleton, CardTitle, CardTitleText, CardDescription } from "./card";
import { IconRepeat, IconDatabaseOff, IconUnlink } from "@tabler/icons-react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonTwo } from "./skeletons/second";

export const Features = () => {
  return (
    <section className="relative overflow-visible">
      {/* Red halo blob */}
      <div
        className="pointer-events-none absolute top-0 -left-[300px] w-[800px] h-[800px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(239,68,68,0) 70%)",
        }}
      />
      <Container className="relative z-10 py-10 md:py-20 lg:py-32">
        <div className="flex flex-col gap-6">
        <Heading className="text-center lg:text-left bg-gradient-to-r from-neutral-900 via-red-400 to-red-500 dark:from-white dark:via-red-400 dark:to-red-500 bg-clip-text text-transparent pb-2 max-w-5xl text-2xl md:text-3xl lg:text-4xl">
          Vos équipes croulent sous les tâches répétitives et les outils fragmentés.
        </Heading>
        <Subheading className="text-center lg:text-left max-w-3xl">
          Données dispersées, logiciels non connectés, processus manuels chronophages.
          Résultat : vos équipes passent leur temps sur des tâches à faible valeur ajoutée…
          au lieu de faire avancer votre business.
        </Subheading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne />
          </CardSkeleton>
          <CardContent>
            <CardTitle>
              <IconRepeat className="size-5 md:size-6 shrink-0" />
              <CardTitleText>Tâches répétitives chronophages</CardTitleText>
              <CardDescription>
                Saisie manuelle, relances clients, contrôles, ressaisies entre outils…
                Des heures perdues chaque semaine sur des tâches à faible valeur ajoutée, pourtant largement automatisables.
              </CardDescription>
            </CardTitle>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton>
            <SkeletonTwo />
          </CardSkeleton>
          <CardContent>
            <CardTitle>
              <IconDatabaseOff className="size-5 md:size-6 shrink-0" />
              <CardTitleText>Données dispersées et difficiles à exploiter</CardTitleText>
              <CardDescription>
                Vos informations sont éparpillées entre plusieurs logiciels, fichiers et outils métiers.
                Retrouver la bonne donnée prend du temps, génère des erreurs et ralentit la prise de décision.
              </CardDescription>
            </CardTitle>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton>
            <SkeletonThree />
          </CardSkeleton>
          <CardContent>
            <CardTitle>
              <IconUnlink className="size-5 md:size-6 shrink-0" />
              <CardTitleText>Outils non connectés entre eux</CardTitleText>
              <CardDescription>
                Vos logiciels ne communiquent pas entre eux.
                Résultat : exports manuels, doublons, incohérences et dépendance excessive aux manipulations humaines.
              </CardDescription>
            </CardTitle>
          </CardContent>
        </Card>
      </div>
      </Container>
    </section>
  );
};
