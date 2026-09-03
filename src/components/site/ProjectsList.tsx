import { projects } from "@/content/site";

export function ProjectsList() {
  return (
    <ul className="mt-12 divide-y divide-border border-y border-border">
      {projects.map((p, i) => (
        <li
          key={`${p.client}-${i}`}
          className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
        >
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold text-foreground">{p.client}</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              {p.sector}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">{p.scope}</p>
          <p className="text-sm tabular-nums text-foreground md:col-span-2 md:text-right">
            <span className="glass inline-block rounded-sm px-3 py-1 text-primary brightness-105">
              {p.year}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
