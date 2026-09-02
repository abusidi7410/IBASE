import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";

const title = "Technology Services | Tech One-Stop Solution Ltd";
const description =
  "Internet and wireless connectivity, cloud computing, network design, VoIP, software development, cybersecurity, CCTV, renewable energy and IT consultancy services from TOSS.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  return (
    <>
      <Outlet />
      <CTA />
    </>
  );
}
