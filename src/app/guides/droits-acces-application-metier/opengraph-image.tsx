import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Droits d’accès d’une application métier : rôles, objets, actions, portée et tests de refus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Droits d’accès d’une application métier",
    subtitle: "Qui voit, modifie, valide, exporte ou supprime quoi ?",
    labels: [
      "Rôles",
      "Objets",
      "Actions",
      "Refus par défaut",
      "Tests sans score",
    ],
    accent: "blue",
  });
}
