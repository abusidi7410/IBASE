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
    <ul className="grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => {
        const Icon = icons[service.icon] ?? Globe;
        return (
          <li
            key={service.slug}
            className="group relative border-b border-r border-border bg-surface p-7 transition-all duration-300 hover:bg-white/40 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
          >
            <div className="pointer-events-none absolute inset-0 rounded-none border border-transparent transition-all duration-300 group-hover:border-white/40 group-hover:backdrop-blur-[6px] [-webkit-backdrop-filter:blur(6px)]" />
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="block"
            >
              <Icon className="size-5 text-primary" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-5 flex items-start justify-between gap-3 text-base font-semibold text-foreground">
                {service.title}
                <ArrowRight
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
