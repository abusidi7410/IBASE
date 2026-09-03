import { Link } from "@tanstack/react-router";
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
import { services } from "@/content/site";
import { serviceImages } from "@/content/service-images";
import { Reveal } from "@/components/site/Reveal";

const icons: Record<string, LucideIcon> = {
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

export function ServiceGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <Reveal stagger className="mt-12">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => {
          const Icon = icons[service.icon] ?? Globe;
          const image = serviceImages[service.slug];
          return (
            <li
              key={service.slug}
              className="group flex flex-col overflow-hidden border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(32,37,34,0.08)]"
            >
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="flex flex-1 flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-background">
                  {image ? (
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon
                        className="size-8 text-primary/50"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-sm bg-surface/90 text-primary shadow-sm backdrop-blur-[2px]">
                    <Icon className="size-4" aria-hidden="true" strokeWidth={1.5} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-start justify-between gap-3 text-base font-semibold text-foreground">
                    <span>{service.title}</span>
                    <ArrowRight
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    View Service
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
