import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-baseline gap-2"
      aria-label="Tech One-Stop Solution Ltd — home"
    >
      <span
        className={`text-lg font-semibold tracking-tight ${
          tone === "light" ? "text-charcoal-foreground" : "text-primary"
        }`}
      >
        TOSS
      </span>
      <span
        className={`hidden text-[11px] font-medium tracking-wide sm:inline ${
          tone === "light" ? "text-charcoal-foreground/60" : "text-muted-foreground"
        }`}
      >
        Tech One-Stop Solution Ltd
      </span>
    </Link>
  );
}
