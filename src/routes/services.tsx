import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";

const title = "ICT & Networking Services in Kaduna | TOSS";
const description =
  "Explore Tech One-Stop Solution Ltd services: internet, wireless, cloud computing, network design, VoIP, software development, cybersecurity, CCTV, renewable energy and IT consultancy in Kaduna and across Nigeria.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
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
