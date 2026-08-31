import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="bg-charcoal text-charcoal-foreground">
      <div className="container-page flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow text-primary">Request a quote</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-foreground/75">
            Talk to TOSS about your next technology, connectivity, infrastructure or digital
            transformation project.
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
  );
}
