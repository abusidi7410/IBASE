import { mission, missionSupport, vision, visionSupport } from "@/content/site";

export function MissionVision() {
  return (
    <div className="grid gap-14 md:grid-cols-2 md:gap-20">
      <div>
        <h2 className="eyebrow text-primary">Our Mission</h2>
        <p className="mt-5 text-xl leading-snug text-foreground sm:text-2xl">
          {mission}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {missionSupport}
        </p>
      </div>
      <div>
        <h2 className="eyebrow text-primary">Our Vision</h2>
        <p className="mt-5 text-xl leading-snug text-foreground sm:text-2xl">
          {vision}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {visionSupport}
        </p>
      </div>
    </div>
  );
}
