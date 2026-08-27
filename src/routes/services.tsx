import { createFileRoute } from "@tanstack/react-router";
import solarImage from "@/assets/solar-installation.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Capabilities } from "@/components/site/Capabilities";
import { TechStack } from "@/components/site/TechStack";
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
  component: Services,
});

function Services() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeader
            as="h1"
            eyebrow="Services"
            title="Our Technology Services"
            intro="End-to-end technology solutions designed to connect, secure and transform modern organizations."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <ServiceGrid />
      </section>

      <Capabilities />

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">Power & continuity</p>
          <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
            Infrastructure that stays online.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Connectivity and computing depend on stable power. TOSS delivers
            renewable energy solutions — solar panels, inverters, battery
            storage and energy management — alongside the network and ICT
            systems they support.
          </p>
        </div>
        <img
          src={solarImage}
          alt="Rooftop solar panel array with wall-mounted inverters"
          width={1280}
          height={960}
          loading="lazy"
          className="h-[280px] w-full object-cover sm:h-[380px]"
        />
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Capabilities"
            title="Technology & Infrastructure"
          />
          <TechStack />
        </div>
      </section>

      <CTA />
    </>
  );
}
