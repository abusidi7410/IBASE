import {
  ArrowUpRight,
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
            className="group border-b border-r border-border bg-surface p-7 transition-colors hover:bg-secondary sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
          >
            <Icon className="size-5 text-primary" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-5 flex items-start justify-between gap-3 text-base font-semibold text-foreground">
              {service.title}
              <ArrowUpRight
                className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
