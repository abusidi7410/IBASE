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
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  ...serviceSlugs.map((s) => ({
    path: `/services/${s}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  { path: "/solutions", priority: "0.7", changefreq: "monthly" },
  { path: "/projects", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
];

// Canonical domain. Keep in sync with src/content/seo.ts (SITE_URL).
const SITE_BASE = "https://toss.ng";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pagePaths
  .map(
    (p) =>
      `  <url><loc>${SITE_BASE}${p.path}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`,
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
