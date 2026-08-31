import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-infrastructure.jpg";
import engineersImage from "@/assets/engineers-network.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Capabilities } from "@/components/site/Capabilities";
import { SolutionsList } from "@/components/site/SolutionsList";
import { ProjectsList } from "@/components/site/ProjectsList";
import { Industries } from "@/components/site/Industries";
import { WhyToss } from "@/components/site/WhyToss";
import { TechStack } from "@/components/site/TechStack";
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
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="reveal">
            <p className="eyebrow">Tech One-Stop Solution Ltd</p>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.9rem]">
              Technology solutions that keep your business connected, secure and moving forward.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              TOSS delivers reliable ICT, networking, connectivity, cybersecurity, software, cloud
              and infrastructure solutions for organizations across Nigeria.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
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

          <div className="relative">
            <img
              src={heroImage}
              alt="Structured fiber optic cabling in an enterprise data center"
              width={1280}
              height={1440}
              fetchPriority="high"
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Technology built around your business.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Tech One-Stop Solution Ltd has operated since 2020 as a Nigerian ICT company providing
              innovative and future-ready technology solutions. We design, implement and support the
              systems organizations rely on every day — connectivity, networks, cloud, security,
              software and power.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every engagement is shaped around the realities of the Nigerian market: practical
              infrastructure choices, dependable support and solutions that can scale as an
              organization grows.
            </p>
            <p className="mt-8 border-t border-border pt-6 text-sm font-semibold tracking-[0.16em] text-primary">
              EST. 2020
            </p>
          </div>
          <img
            src={engineersImage}
            alt="Server racks and network cabling in a data center environment"
            width={1280}
            height={960}
            loading="lazy"
            className="h-[300px] w-full object-cover sm:h-[400px]"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Services"
            title="Our Technology Services"
            intro="End-to-end technology solutions designed to connect, secure and transform modern organizations."
          />
          <div className="mt-12">
            <ServiceGrid limit={6} />
          </div>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View all services
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <Capabilities />

      {/* Solutions */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeader
          eyebrow="Solutions"
          title="Technology solutions for real business needs."
          intro="Software and platform solutions developed by TOSS for healthcare, finance, enterprise operations and identity management."
        />
        <SolutionsList />
      </section>

      {/* Projects */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Projects"
            title="Selected Projects"
            intro="Technology solutions delivered across critical sectors."
          />
          <ProjectsList />
        </div>
      </section>

      {/* Why TOSS */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeader eyebrow="Why TOSS" title="Why organizations choose TOSS" />
        <WhyToss />
      </section>

      {/* Industries */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Industries" title="Industries we serve" />
          <Industries />
        </div>
      </section>

      {/* Technology */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeader eyebrow="Capabilities" title="Technology & Infrastructure" />
        <TechStack />
      </section>

      <CTA />
    </>
  );
}
