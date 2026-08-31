import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`eyebrow flex items-center gap-2.5 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <As
        className={`${
          As === "h1"
            ? "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            : "text-2xl sm:text-3xl"
        } ${eyebrow ? "mt-4" : ""} font-semibold text-foreground`}
      >
        {title}
      </As>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}
