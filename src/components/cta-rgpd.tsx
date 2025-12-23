"use client";
import React from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { IconShieldCheck, IconKey, IconFileSearch, IconServer, IconRobot } from "@tabler/icons-react";

export function CTARgpd() {
  return (
    <section className="py-60 w-full overflow-hidden relative z-30">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-slate-800 dark:from-neutral-900 to-gray-900 sm:rounded-2xl">
          <div className="relative -mx-6 sm:mx-0 sm:rounded-2xl overflow-hidden px-6 md:px-8">
            <div
              className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
              style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
              }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>

            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              {/* Badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <IconShieldCheck className="h-6 w-6 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                  Conformite & RGPD
                </span>
              </div>

              <h2 className="text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                Securite et conformite des la conception
              </h2>
              <p className="mt-4 max-w-[26rem] text-center mx-auto text-base/6 text-neutral-200">
                <Balancer>
                  Gestion des acces, tracabilite, minimisation des donnees, hebergement adapte,
                  et integrations IA encadrees selon votre niveau d&apos;exigence.
                </Balancer>
              </p>

              {/* Micro-bullets */}
              <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <IconKey className="h-4 w-4 text-indigo-400" />
                  <span>Acces & permissions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <IconFileSearch className="h-4 w-4 text-indigo-400" />
                  <span>Logs & tracabilite</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <IconServer className="h-4 w-4 text-indigo-400" />
                  <span>Hebergement UE</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <IconRobot className="h-4 w-4 text-indigo-400" />
                  <span>IA : garde-fous + validation</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mx-auto flex justify-center mt-6">
                <Link
                  href="/contact"
                  className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
                >
                  Discuter de vos besoins
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
