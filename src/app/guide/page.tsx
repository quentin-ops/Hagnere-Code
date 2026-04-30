import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Page indisponible — Hagnéré Code",
  robots: { index: false, follow: false, nocache: true },
};

export default function Page() {
  notFound();
}
