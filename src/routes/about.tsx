import { createFileRoute } from "@tanstack/react-router";
import engineersImage from "@/assets/engineers-network.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MissionVision } from "@/components/site/MissionVision";
import { WhyToss } from "@/components/site/WhyToss";
import { Industries } from "@/components/site/Industries";
import { CTA } from "@/components/site/CTA";

const title = "About TOSS | Nigerian ICT Solutions Company";
const description =
  "Established in 2020, Tech One-Stop Solution Ltd is a Nigerian ICT company delivering networking, cybersecurity, cloud, software, telecom, CCTV, renewable energy and consultancy solutions.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            as="h1"
            eyebrow="About TOSS"
            title="A technology partner focused on what's next."
            intro="Tech One-Stop Solution Ltd is a Nigerian ICT solutions company established in 2020, supporting organizations through digital transformation with practical, future-ready technology."
          />
          <img
            src={engineersImage}
            alt="TOSS-style network engineering work on enterprise rack equipment"
            width={1280}
            height={960}
            loading="lazy"
            className="h-[280px] w-full object-cover sm:h-[360px]"
          />
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">Our role</p>
            <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-primary">
              EST. 2020
            </p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              TOSS works as a single point of contact for information and
              communications technology. Our work spans ICT infrastructure,
              network design and implementation, connectivity, telecom and VoIP,
              cybersecurity, cloud computing, custom software development, CCTV
              surveillance, renewable energy and IT consultancy.
            </p>
            <p>
              We support digital transformation programmes for government
              institutions, enterprises, hospitals, educational institutions,
              financial organizations, telecommunications operators and SMEs —
              from initial consultation and design through implementation,
              training and ongoing support.
            </p>
            <p>
              Our approach is straightforward: understand the operational
              requirement, specify technology that is dependable and
              maintainable, and stay involved after commissioning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <MissionVision />
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <SectionHeader eyebrow="Why TOSS" title="Why organizations choose TOSS" />
        <WhyToss />
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Industries" title="Industries we serve" />
          <Industries />
        </div>
      </section>

      <CTA />
    </>
  );
}
