import { solutions } from "@/content/site";

export function SolutionsList() {
  return (
    <ul className="mt-12 divide-y divide-border border-y border-border">
      {solutions.map((s, i) => (
        <li
          key={s.title}
          className="grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8"
        >
          <span className="text-xs tabular-nums text-muted-foreground md:col-span-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold text-foreground md:col-span-4">
            {s.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-7">
            {s.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
