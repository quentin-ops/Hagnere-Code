import { permanentRedirect } from "next/navigation";

// L'ancien hub /outils a été remplacé par le funnel lead /demarrer-un-projet.
// Redirect 308 permanent pour préserver les backlinks et le SEO.
export default function Page() {
  permanentRedirect("/demarrer-un-projet");
}
