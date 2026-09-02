import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Logo } from "./Logo";
import { services } from "@/content/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  function handleServicesEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  }

  function handleServicesLeave() {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  }

  const isServicesActive =
    location.pathname.startsWith("/services");

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur-[2px] transition-shadow ${
        scrolled ? "shadow-[0_1px_3px_rgba(32,37,34,0.08)]" : ""
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-foreground font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-primary",
              }}
            >
              {l.label}
            </Link>
          ))}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              to="/services"
              className={`relative inline-flex items-center gap-1 text-sm transition-colors hover:text-foreground ${
                isServicesActive
                  ? "text-foreground font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                  : "text-muted-foreground"
              }`}
            >
              Services
              <ChevronDown
                className={`size-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {servicesOpen && (
              <div
                className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 border border-border bg-surface py-2 shadow-[0_4px_12px_rgba(32,37,34,0.08)]"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                ))}
                <div className="mx-5 my-1 border-t border-border" />
                <Link
                  to="/services"
                  className="block px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  View All Services
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            hash="quote"
            className="inline-flex h-10 items-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base text-foreground last:border-0"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {l.label}
              </Link>
            ))}

            <MobileServicesSection onClose={() => setOpen(false)} />

            <Link
              to="/contact"
              hash="quote"
              onClick={() => setOpen(false)}
              className="my-4 inline-flex h-12 items-center justify-center rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileServicesSection({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setExpanded(true);
    }
  }, [location.pathname]);

  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={`flex w-full items-center justify-between py-4 text-base ${
          location.pathname.startsWith("/services")
            ? "font-medium text-primary"
            : "text-foreground"
        }`}
      >
        Services
        <ChevronDown
          className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="pb-2">
          <Link
            to="/services"
            onClick={onClose}
            className="block py-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All Services
          </Link>
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              onClick={onClose}
              className="block py-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
