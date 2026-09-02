import { Link } from "@tanstack/react-router";
import { company, services } from "@/content/site";

const companyLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <img src="/logo-white.svg" alt="Tech One-Stop Solution Ltd" className="h-10 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-charcoal-foreground/70">
            {company.name} provides innovative and future-ready ICT solutions in Nigeria —
            connectivity, networking, cloud, cybersecurity, software, surveillance, renewable energy
            and consultancy.
          </p>
        </div>

        <nav aria-labelledby="footer-company">
          <h2 id="footer-company" className="eyebrow text-charcoal-foreground/50">
            Company
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-charcoal-foreground/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-charcoal-foreground/50">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-charcoal-foreground/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-charcoal-foreground/50">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-charcoal-foreground/80">
            <p>{company.city}</p>
            <p>
              <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-primary">
                {company.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-primary">
                {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-charcoal-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {company.name}. All rights reserved.</p>
          <p>{company.website}</p>
        </div>
      </div>
    </footer>
  );
}
