import { permanentRedirect } from "next/navigation";

// L'ancien calculateur a été remplacé par le funnel lead /demarrer-un-projet
// (mêmes 12 services, brief structuré, réponse manuelle sous 24 h ouvrées).
// On garde la route en redirect 308 permanent pour préserver les backlinks
// et le SEO, le temps que Google bascule.
export default function Page() {
  permanentRedirect("/demarrer-un-projet");
}
