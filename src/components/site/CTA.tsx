import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
            Talk to TOSS about your next technology, connectivity,
            infrastructure or digital transformation project.
          </p>
        </div>
        <Link
          to="/contact"
          hash="quote"
          className="inline-flex h-12 w-fit shrink-0 items-center rounded-sm bg-background px-6 text-sm font-medium text-primary transition-colors hover:bg-background/90"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
