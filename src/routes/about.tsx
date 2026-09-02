import { createFileRoute } from "@tanstack/react-router";
import engineersImage from "@/assets/engineers-network.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MissionVision } from "@/components/site/MissionVision";
import { Industries } from "@/components/site/Industries";
import { CTA } from "@/components/site/CTA";
import { company, technologies } from "@/content/site";

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

const coreValues = [
  {
    title: "Innovation",
    description: "Technology designed around evolving business needs.",
  },
  {
    title: "Reliability",
    description: "Dependable infrastructure and technology solutions.",
  },
  {
    title: "Security",
    description: "Security-focused technology and cybersecurity capabilities.",
  },
  {
    title: "Scalability",
    description: "Solutions designed to grow with organizations.",
  },
  {
    title: "Expertise",
    description: "Experience across ICT and technology infrastructure.",
  },
  {
    title: "End-to-End Support",
    description: "Consultation, design, implementation and ongoing support.",
  },
];

const whatWeDo = [
  "ICT infrastructure design and implementation",
  "Network design and deployment — wired, wireless, LAN/WAN and data center",
  "Internet and connectivity — fiber optics, microwave and VSAT",
  "Cloud computing — Google Cloud, Microsoft Azure, Amazon AWS",
  "Cybersecurity — firewalls, IDS, VPN, penetration testing and awareness",
  "Software development — custom applications and business automation",
  "VoIP and telecom — voice, data and video communication systems",
  "CCTV surveillance — IP and analog systems with remote monitoring",
  "Renewable energy — solar panels, inverters and battery storage",
  "IT consultancy — strategy, planning, training and ongoing support",
];

const whyTossItems = [
  {
    heading: "Single point of contact",
    text: "One company for connectivity, networking, cloud, security, software, surveillance, power and consultancy — reducing complexity for organizations managing multiple technology needs.",
  },
  {
    heading: "Nigerian market expertise",
    text: "Practical infrastructure choices informed by the realities of operating in Nigeria — dependable systems, realistic deployment plans and support that understands local conditions.",
  },
  {
    heading: "Full delivery cycle",
    text: "From initial consultation and design through procurement, installation, testing, commissioning and ongoing support — TOSS stays involved after the project is delivered.",
  },
];

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
            alt="Server racks and network cabling in a data center environment"
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
            <p className="eyebrow">Company overview</p>
            <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-primary">
              EST. {company.established}
            </p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              Tech One-Stop Solution Ltd ({company.short}) is a Nigerian ICT
              solutions company established in {company.established}. We provide
              innovative and future-ready technology solutions to organizations
              across Nigeria — serving government institutions, healthcare
              facilities, educational establishments, banking and financial
              organizations, telecommunications operators, hospitality businesses,
              SMEs and enterprises.
            </p>
            <p>
              Our role is to serve as a single point of contact for information
              and communications technology. We design, implement and support
              the connectivity, network, cloud, security, software and power
              systems that organizations depend on — combining technical expertise
              with a practical understanding of the Nigerian operating environment.
            </p>
            <p>
              Our capabilities span ICT infrastructure, network design and
              implementation, internet and wireless connectivity, cloud computing,
              cybersecurity, software development, VoIP and telecommunications,
              CCTV surveillance, renewable energy and IT consultancy. Every
              engagement is shaped around the specific requirements of the
              organization we serve.
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
        <SectionHeader eyebrow="Core values" title="What guides us" />
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => (
            <li key={v.title} className="border-t border-border pt-6">
              <h3 className="text-base font-semibold text-foreground">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="What we do" title="Our capabilities" />
          <ul className="mt-10 space-y-3">
            {whatWeDo.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <SectionHeader eyebrow="Why TOSS" title="Why organizations choose TOSS" />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {whyTossItems.map((item) => (
            <div key={item.heading} className="border-t border-border pt-6">
              <h3 className="text-base font-semibold text-foreground">
                {item.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Industries" title="Industries we serve" />
          <Industries />
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <SectionHeader eyebrow="Technology" title="Technology & infrastructure" />
        <div className="mt-10 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <span
              key={t}
              className="border border-border bg-surface px-4 py-2 text-sm text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Technologies and platforms TOSS works with. These are listed as
          technical capabilities and do not represent formal partnerships or
          vendor accreditations.
        </p>
      </section>

      <CTA />
    </>
  );
}
