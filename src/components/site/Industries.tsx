import { industries } from "@/content/site";

export function Industries() {
  return (
    <ul className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
      {industries.map((industry) => (
        <li
          key={industry}
          className="bg-surface px-5 py-8 text-sm font-medium text-foreground"
        >
          {industry}
        </li>
      ))}
    </ul>
  );
}
