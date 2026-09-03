import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/A network server with multiple ethernet cables 65611207 Stock Photo at Vecteezy and 8 more pages - Personal - Microsoft_ Edge 9_3_2026 1_30_34 PM-ezremove.png";
import engineersImage from "@/assets/WhatsApp Image 2026-09-03 at 1.41.01 PM.jpeg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Capabilities } from "@/components/site/Capabilities";
import { SolutionsList } from "@/components/site/SolutionsList";
import { ProjectsList } from "@/components/site/ProjectsList";
import { Industries } from "@/components/site/Industries";
import { WhyToss } from "@/components/site/WhyToss";
import { CTA } from "@/components/site/CTA";
import { company } from "@/content/site";

const title = "Tech One-Stop Solution Ltd | ICT & Technology Solutions in Nigeria";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: company.description },
      { property: "og:title", content: title },
      { property: "og:description", content: company.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow animate-hero" style={{ animationDelay: "0ms" }}>
              {company.name}
            </p>
            <h1
              className="mt-5 animate-hero text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.9rem]"
              style={{ animationDelay: "80ms" }}
            >
              Technology solutions that keep your business connected, secure and moving forward.
            </h1>
            <p
              className="mt-6 max-w-xl animate-hero text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              TOSS delivers reliable ICT, networking, connectivity, cybersecurity, software, cloud
              and infrastructure solutions for organizations across Nigeria.
            </p>
            <div
              className="mt-9 flex animate-hero flex-wrap gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-[0_4px_12px_rgba(214,129,18,0.25)]"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center rounded-sm border border-input px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden animate-hero-image" style={{ animationDelay: "120ms" }}>
            <img
              src={heroImage}
              alt="Enterprise network server with multiple ethernet cable connections"
              width={1296}
              height={760}
              fetchPriority="high"
              className="h-[340px] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03] sm:h-[440px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Technology built around your business.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Tech One-Stop Solution Ltd is a Nigerian ICT solutions company
              established in 2020, providing innovative and future-ready
              technology solutions. We design, implement and support the systems
              organizations rely on every day — connectivity, networks, cloud,
              security, software and power.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every engagement is shaped around the realities of the Nigerian
              market: practical infrastructure choices, dependable support and
              solutions that can scale as an organization grows.
            </p>
            <p className="mt-8 border-t border-border pt-6 text-sm font-semibold tracking-[0.16em] text-primary">
              EST. 2020
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={engineersImage}
              alt="Enterprise network server and cabling infrastructure"
              width={714}
              height={1280}
              loading="lazy"
              className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02] sm:h-[400px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Our Technology Services"
              intro="End-to-end technology solutions designed to connect, secure and transform modern organizations."
            />
          </Reveal>
          <ServiceGrid limit={6} />
          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <Capabilities />

      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Solutions"
            title="Technology solutions for real business needs."
            intro="Software and platform solutions developed by TOSS for healthcare, finance, enterprise operations and identity management."
          />
        </Reveal>
        <Reveal delay={100}>
          <SolutionsList />
        </Reveal>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Projects"
              title="Selected Projects"
              intro="Technology solutions delivered across critical sectors."
            />
          </Reveal>
          <Reveal delay={100}>
            <ProjectsList />
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <SectionHeader eyebrow="Why TOSS" title="Why organizations choose TOSS" />
        </Reveal>
        <Reveal stagger delay={100}>
          <WhyToss />
        </Reveal>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader eyebrow="Industries" title="Industries we serve" />
          </Reveal>
          <Reveal stagger delay={100}>
            <Industries />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <CTA />
      </Reveal>
    </>
  );
}
