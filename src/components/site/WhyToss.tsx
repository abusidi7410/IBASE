import {
  Activity,
  GraduationCap,
  Lightbulb,
  LifeBuoy,
  Lock,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { advantages } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  Lightbulb,
  Activity,
  Lock,
  TrendingUp,
  GraduationCap,
  LifeBuoy,
};

export function WhyToss() {
  return (
    <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {advantages.map((a) => {
        const Icon = icons[a.icon] ?? Lightbulb;
        return (
          <li key={a.title} className="border-t border-border pt-6">
            <Icon className="size-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {a.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {a.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
