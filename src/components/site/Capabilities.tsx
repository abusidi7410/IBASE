import { capabilities } from "@/content/site";

export function Capabilities() {
  return (
    <div className="grid gap-px border-y border-border bg-border md:grid-cols-3">
      {capabilities.map((c) => (
        <div key={c.title} className="bg-background px-6 py-12 md:px-8 md:py-16">
          <p className="eyebrow text-primary">{c.title}</p>
          <p className="mt-4 text-lg leading-snug text-foreground">
            {c.description}
          </p>
        </div>
      ))}
    </div>
  );
}
