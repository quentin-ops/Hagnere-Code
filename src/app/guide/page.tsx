import { permanentRedirect } from "next/navigation";

// Ancienne page guide → hub /guides
export default function Page() {
  permanentRedirect("/guides");
}
