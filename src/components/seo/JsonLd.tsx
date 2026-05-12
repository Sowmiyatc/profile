import { site } from "@/data/site";

export function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    ...(typeof window !== "undefined"
      ? { url: `${window.location.origin}${import.meta.env.BASE_URL}`.replace(/\/+$/, "") }
      : {}),
    sameAs: [site.linkedin],
    email: site.email,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
