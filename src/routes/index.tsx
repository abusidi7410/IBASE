import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cctv,
  Cloud,
  Code2,
  Compass,
  Globe,
  Network,
  PhoneCall,
  ShieldCheck,
  SunMedium,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import engineersImage from "@/assets/engineers-network.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Capabilities } from "@/components/site/Capabilities";
import { SolutionsList } from "@/components/site/SolutionsList";
import { ProjectsList } from "@/components/site/ProjectsList";
import { Industries } from "@/components/site/Industries";
import { WhyToss } from "@/components/site/WhyToss";
import { CTA } from "@/components/site/CTA";
import { company, services } from "@/content/site";

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

const iconMap: Record<string, LucideIcon> = {
  Globe, Wifi, Cloud, Network, PhoneCall, Code2, ShieldCheck, Cctv, SunMedium, Compass,
};

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
              alt="Structured fiber optic cabling in an enterprise data center"
              width={1280}
              height={1440}
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
              alt="Server racks and network cabling in a data center environment"
              width={1280}
              height={960}
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
        <Reveal stagger className="mt-12">
          <ul className="grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <li
                  key={service.slug}
                  className="group relative border-b border-r border-border bg-background p-7 transition-all duration-300 hover:bg-white/40 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <div className="pointer-events-none absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-white/40 group-hover:backdrop-blur-[6px] [-webkit-backdrop-filter:blur(6px)]" />
                  <Link to="/services/$slug" params={{ slug: service.slug }} className="block">
                    <Icon className="size-5 text-primary" aria-hidden="true" strokeWidth={1.5} />
                    <h3 className="mt-5 flex items-start justify-between gap-3 text-base font-semibold text-foreground">
                      {service.title}
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-hover:translate-x-0.5" aria-hidden="true" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </Link>
                </li>
              );
            })}
            </ul>
          </Reveal>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View all services
          </Link>
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
