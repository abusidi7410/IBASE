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
import { Capabilities } from "@/components/site/Capabilities";
import { services, getServiceBySlug } from "@/content/site";
import type { ServiceSlug } from "@/content/site";

import heroImage from "@/assets/hero-infrastructure.jpg";
import engineersImage from "@/assets/engineers-network.jpg";
import solarImage from "@/assets/solar-installation.jpg";
import internetImage from "@/assets/internet service.png";
import wirelessImage from "@/assets/wireless service.png";
import cloudImage from "@/assets/cloud computing.png";
import networkImage from "@/assets/network desing and implementation.png";
import voipImage from "@/assets/voice over internet.png";
import softwareImage from "@/assets/software development.png";
import cyberImage from "@/assets/cyber security (2).png";
import cctvImage from "@/assets/camera.png";
import consultancyImage from "@/assets/consultation.png";

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

const serviceImages: Record<string, { src: string; alt: string }> = {
  "internet-services": {
    src: internetImage,
    alt: "Internet services — fiber optic, microwave and VSAT connectivity",
  },
  "wireless-services": {
    src: wirelessImage,
    alt: "Wireless services — Wi-Fi, long-distance links and mesh networks",
  },
  "cloud-computing": {
    src: cloudImage,
    alt: "Cloud computing — Google Cloud, Microsoft Azure and Amazon AWS",
  },
  "network-design": {
    src: networkImage,
    alt: "Network design and implementation — LAN/WAN, data center, fiber optics",
  },
  "voip-telecom": {
    src: voipImage,
    alt: "VoIP and telecom solutions — voice, data and video communication",
  },
  "software-development": {
    src: softwareImage,
    alt: "Software development — custom applications and business automation",
  },
  cybersecurity: {
    src: cyberImage,
    alt: "Cybersecurity — firewalls, IDS, VPN and penetration testing",
  },
  "cctv-surveillance": {
    src: cctvImage,
    alt: "CCTV surveillance — IP and analog systems with remote monitoring",
  },
  "renewable-energy": {
    src: solarImage,
    alt: "Renewable energy — solar panels, inverters and battery storage",
  },
  "it-consultancy": {
    src: consultancyImage,
    alt: "IT consultancy — strategy, planning, training and support",
  },
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    const title = service
      ? `${service.title} | Tech One-Stop Solution Ltd`
      : "Service | Tech One-Stop Solution Ltd";
    const description = service
      ? `${service.description} Tech One-Stop Solution Ltd — ICT solutions in Nigeria.`
      : "Technology services from Tech One-Stop Solution Ltd in Nigeria.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
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
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={image?.src}
              alt={image?.alt}
              width={1280}
              height={960}
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Icon className="size-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <p className="eyebrow mt-6">What we provide</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-4">
              {service.whatWeProvide.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                >
                  <ArrowRight
                    className="mt-1.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Technologies" title="Technologies & platforms" />
          <div className="mt-10 flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <span
                key={t}
                className="border border-border bg-background px-4 py-2 text-sm text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            These are listed as technical capabilities and do not represent
            formal partnerships or vendor accreditations.
          </p>
        </div>
      </section>

      <Capabilities />

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
