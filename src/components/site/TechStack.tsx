import { technologies } from "@/content/site";

export function TechStack() {
  return (
    <div>
      <ul className="mt-10 flex flex-wrap gap-2">
        {technologies.map((t) => (
          <li
            key={t}
            className="border border-border bg-surface px-4 py-2 text-sm text-foreground"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
        Technologies and platforms TOSS works with. These are listed as
        technical capabilities and do not represent formal partnerships or
        vendor accreditations.
      </p>
    </div>
  );
}
