import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-baseline gap-2"
      aria-label="Tech One-Stop Solution Ltd — home"
    >
      <img
        src="/logo.jpeg"
        alt="Tech One-Stop Solution Ltd"
        className="h-8 w-auto"
      />
    </Link>
  );
}
