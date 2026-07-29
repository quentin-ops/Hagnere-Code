import { notFound, permanentRedirect } from "next/navigation";
import { getLegacyGuideDestination } from "@/lib/legacy-guide-redirects";

export default async function LegacyGuideRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getLegacyGuideDestination(slug);

  if (!destination) notFound();

  permanentRedirect(destination);
}
