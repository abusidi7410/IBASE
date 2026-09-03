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
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Capabilities } from "@/components/site/Capabilities";
import { services, getServiceBySlug } from "@/content/site";
import { serviceImages } from "@/content/service-images";
import { company } from "@/content/site";
import { SITE_URL, siteUrl } from "@/content/seo";
import type { ServiceSlug } from "@/content/site";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Wifi,
  Cloud,
  Network,
  PhoneCall,
  Code2,
  ShieldCheck,
  Cctv,
  SunMedium,
  Compass,
};

const seoTitleByService: Record<string, string> = {
  "internet-services": "Internet Services in Kaduna & Nigeria | TOSS",
  "wireless-services": "Wireless Networking Solutions in Kaduna | TOSS",
  "cloud-computing": "Cloud Computing Services in Kaduna & Nigeria | TOSS",
  "network-design": "Network Design & Implementation in Kaduna | TOSS",
  "voip-telecom": "VoIP & Telecom Solutions in Kaduna | TOSS",
  "software-development": "Software Development Services in Kaduna | TOSS",
  cybersecurity: "Cybersecurity Services in Kaduna & Nigeria | TOSS",
  "cctv-surveillance": "CCTV Surveillance Solutions in Kaduna | TOSS",
  "renewable-energy": "Renewable Energy Solutions in Kaduna | TOSS",
  "it-consultancy": "IT Consultancy Services in Kaduna | TOSS",
};

const seoDescriptionByService: Record<string, string> = {
  "internet-services":
    "Fiber optic, microwave and VSAT internet services in Kaduna and across Nigeria from Tech One-Stop Solution Ltd — high-speed, reliable and secure connectivity.",
  "wireless-services":
    "Wireless networking solutions in Kaduna — enterprise Wi-Fi, long-distance wireless links and mesh networks installed and supported by Tech One-Stop Solution Ltd.",
  "cloud-computing":
    "Cloud computing services in Kaduna and Nigeria from Tech One-Stop Solution Ltd on Google Cloud, Microsoft Azure and Amazon AWS — migration, integration and support.",
  "network-design":
    "Network design and implementation in Kaduna — wired and wireless LAN/WAN, ISP networks, data center networking, firewalls, VPN and traffic management.",
  "voip-telecom":
    "VoIP and telecom solutions in Kaduna from Tech One-Stop Solution Ltd — voice, data and video communication for businesses and service providers.",
  "software-development":
    "Software development services in Kaduna — custom applications, hospital, banking, ERP, HR & payroll and hosting solutions from Tech One-Stop Solution Ltd.",
  cybersecurity:
    "Cybersecurity services in Kaduna and Nigeria — firewalls, intrusion detection, VPN, IAM, data security, penetration testing and security awareness from TOSS.",
  "cctv-surveillance":
    "CCTV surveillance installation in Kaduna — IP and analog camera systems with remote monitoring, motion detection and intelligent analytics.",
  "renewable-energy":
    "Renewable energy solutions in Kaduna — solar panels, inverters, battery storage and energy management to keep your ICT systems online.",
  "it-consultancy":
    "IT consultancy services in Kaduna — technology strategy, infrastructure planning, implementation, training and ongoing support from Tech One-Stop Solution Ltd.",
};

// Related services for contextual internal linking (only meaningful links).
const relatedServicesBySlug: Record<string, string[]> = {
  "internet-services": ["network-design", "wireless-services", "cybersecurity"],
  "wireless-services": ["network-design", "internet-services"],
  "cloud-computing": ["software-development", "cybersecurity", "it-consultancy"],
  "network-design": ["wireless-services", "internet-services", "cybersecurity"],
  "voip-telecom": ["network-design", "internet-services"],
  "software-development": ["cloud-computing", "it-consultancy"],
  cybersecurity: ["network-design", "cloud-computing", "it-consultancy"],
  "cctv-surveillance": ["network-design", "renewable-energy"],
  "renewable-energy": ["network-design", "cctv-surveillance"],
  "it-consultancy": ["cloud-computing", "software-development", "cybersecurity"],
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    const serviceUrl = siteUrl(`/services/${params.slug}`);
    const title = service
      ? seoTitleByService[service.slug] ?? `${service.title} | TOSS`
      : "Service | Tech One-Stop Solution Ltd";
    const description = service
      ? seoDescriptionByService[service.slug] ?? service.description
      : "Technology services from Tech One-Stop Solution Ltd in Kaduna, Nigeria.";
    const meta: Array<
      | { title: string }
      | { name: string; content: string }
      | { property: string; content: string }
    > = [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: serviceUrl },
      { property: "og:image", content: siteUrl("/og-image.png") },
      { property: "og:site_name", content: company.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: siteUrl("/og-image.png") },
    ];
    const links = [{ rel: "canonical", href: serviceUrl }];

    const scripts: Array<{ type: string; children: string }> = [];
    if (service) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: siteUrl("/services"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: service.title,
              item: serviceUrl,
            },
          ],
        }),
      });
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: serviceUrl,
          provider: {
            "@type": "Organization",
            name: company.name,
            url: SITE_URL,
          },
          areaServed: { "@type": "Country", name: "Nigeria" },
          serviceType: service.title,
          providerMobility: "static",
        }),
      });
    }

    return { meta, links, scripts };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">
          Service not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The service you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/services"
            className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            View all services
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <ServiceNotFound />;

  const Icon = iconMap[service.icon] ?? Globe;
  const image = serviceImages[slug];

  return (
    <>
      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb" className="animate-hero" style={{ animationDelay: "0ms" }}>
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/services" className="transition-colors hover:text-primary">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {service.title}
                </li>
              </ol>
            </nav>
            <p className="eyebrow mt-6 animate-hero" style={{ animationDelay: "40ms" }}>
              Services
            </p>
            <h1
              className="mt-4 animate-hero text-3xl font-semibold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              style={{ animationDelay: "80ms" }}
            >
              {service.title}
            </h1>
            <p
              className="mt-6 max-w-xl animate-hero text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              {service.intro}
            </p>
            <div className="mt-8 animate-hero" style={{ animationDelay: "240ms" }}>
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-[0_4px_12px_rgba(214,129,18,0.25)]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden animate-hero-image" style={{ animationDelay: "120ms" }}>
            <img
              src={image?.src}
              alt={image?.alt}
              width={1280}
              height={960}
              loading="lazy"
              className="h-[300px] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03] sm:h-[380px] lg:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
              What {service.title.toLowerCase()} involves
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              {service.overview.split(/\n{2,}/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="What we provide"
              title={`What TOSS provides under ${service.title.toLowerCase()}`}
            />
          </Reveal>
          <Reveal stagger className="mt-10">
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {service.whatWeProvide.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                >
                  <ArrowRight className="mt-1.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div>
              <Icon className="size-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <p className="eyebrow mt-6">How TOSS helps</p>
              <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Applying this service to your organization
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.howWeHelp}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <div>
              <p className="eyebrow">Key capabilities</p>
              <ul className="mt-6 space-y-3">
                {service.keyCapabilities.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-b border-border pb-3 text-base leading-relaxed text-foreground"
                  >
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">Who it&apos;s for</p>
              <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Who can benefit
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.whoItsFor}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="eyebrow">Why it matters</p>
              <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                Business value
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.whyItMatters}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <div>
          <Reveal>
            <SectionHeader eyebrow="Technologies" title="Technologies & platforms" />
          </Reveal>
          <Reveal stagger className="mt-10">
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="border border-border bg-surface px-4 py-2 text-sm text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            These are listed as technical capabilities and do not represent
            formal partnerships or vendor accreditations.
          </p>
        </div>
      </section>

      <Capabilities />

      {(() => {
        const related = relatedServicesBySlug[slug] ?? [];
        const relatedServices = related
          .map((s) => getServiceBySlug(s))
          .filter((s): s is NonNullable<typeof s> => Boolean(s));
        if (relatedServices.length === 0) return null;
        return (
          <section className="container-page py-20 lg:py-24">
            <SectionHeader eyebrow="Related services" title="Complementary solutions" />
            <ul className="mt-10 grid grid-cols-1 border-t border-border sm:grid-cols-2 gap-px lg:grid-cols-3">
              {relatedServices.map((s) => {
                const SIcon = iconMap[s.icon] ?? Globe;
                return (
                  <li key={s.slug} className="group border-b border-border">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="block p-6 transition-colors hover:bg-secondary"
                    >
                      <SIcon
                        className="size-5 text-primary"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                      <h3 className="mt-4 flex items-start justify-between gap-3 text-base font-semibold text-foreground">
                        {s.title}
                        <ArrowRight
                          className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })()}

      <section className="container-page py-20 lg:py-24">
        <SectionHeader eyebrow="Services" title="All services" />
        <ul className="mt-10 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((s) => s.slug !== slug)
            .slice(0, 6)
            .map((s) => {
              const SIcon = iconMap[s.icon] ?? Globe;
              return (
                <li
                  key={s.slug}
                  className="group border-b border-r border-border bg-surface p-7 transition-colors hover:bg-secondary sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block"
                  >
                    <SIcon
                      className="size-5 text-primary"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-5 flex items-start justify-between gap-3 text-base font-semibold text-foreground">
                      {s.title}
                      <ArrowRight
                        className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </Link>
                </li>
              );
            })}
        </ul>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          View all services
        </Link>
      </section>

      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container-page flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-primary">Interested in this service?</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-foreground/75">
              Talk to TOSS about your {service.title.toLowerCase()} requirements
              and we will respond with next steps.
            </p>
          </div>
          <Link
            to="/contact"
            hash="quote"
            className="inline-flex h-12 w-fit shrink-0 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
