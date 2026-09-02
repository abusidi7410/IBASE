import { createFileRoute } from "@tanstack/react-router";

const serviceSlugs = [
  "internet-services",
  "wireless-services",
  "cloud-computing",
  "network-design",
  "voip-telecom",
  "software-development",
  "cybersecurity",
  "cctv-surveillance",
  "renewable-energy",
  "it-consultancy",
];

const pagePaths = [
  "/",
  "/about",
  "/services",
  ...serviceSlugs.map((s) => `/services/${s}`),
  "/solutions",
  "/projects",
  "/contact",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pagePaths
  .map(
    (p) =>
      `  <url><loc>${origin}${p}</loc><changefreq>monthly</changefreq></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});
