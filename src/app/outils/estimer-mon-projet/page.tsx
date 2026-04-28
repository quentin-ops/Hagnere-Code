import { permanentRedirect } from "next/navigation";

// L'ancien calculateur a été fusionné avec le funnel /demarrer-un-projet
// (mêmes 12 services + IA + Discovery + parcours client + DB persistance).
// On garde la route en redirect 308 permanent pour préserver les backlinks
// et le SEO, le temps que Google bascule.
export default function Page() {
  permanentRedirect("/demarrer-un-projet");
}
