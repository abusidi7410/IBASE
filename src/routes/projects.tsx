import { createFileRoute } from "@tanstack/react-router";
import towerImage from "@/assets/telecom-tower.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ProjectsList } from "@/components/site/ProjectsList";
import { CTA } from "@/components/site/CTA";

const title = "Selected Projects | Tech One-Stop Solution Ltd";
const description =
  "Projects delivered by TOSS across healthcare, government and education, including network equipment supply and the equipping of digital learning centers in Nigeria.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeader
            as="h1"
            eyebrow="Projects"
            title="Selected Projects"
            intro="Technology solutions delivered across critical sectors."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <ProjectsList />
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Project references are drawn from the TOSS company profile. Imagery on
          this site is illustrative of the technology environments we work in
          and does not depict specific client sites.
        </p>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <img
            src={towerImage}
            alt="Telecommunications tower with microwave dishes and cable infrastructure"
            width={1280}
            height={960}
            loading="lazy"
            className="h-[280px] w-full object-cover sm:h-[380px]"
          />
          <div>
            <p className="eyebrow">Delivery approach</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
              Procurement, installation, testing and commissioning.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              TOSS handles the full delivery cycle — specification and
              procurement of equipment, installation on site, testing and
              commissioning, then handover with training and ongoing support.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
