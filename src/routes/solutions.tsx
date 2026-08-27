import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SolutionsList } from "@/components/site/SolutionsList";
import { Industries } from "@/components/site/Industries";
import { CTA } from "@/components/site/CTA";

const title = "Solutions | Tech One-Stop Solution Ltd";
const description =
  "TOSS software and platform solutions: Global-Care hospital management, Bank-Well microfinance banking, X-Global ERP, HR & Payroll, cloud and web hosting, and biometric solutions.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeader
            as="h1"
            eyebrow="Solutions"
            title="Technology solutions for real business needs."
            intro="Software and platform solutions developed by TOSS for healthcare, finance, enterprise operations, hosting and identity management."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <SolutionsList />
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Industries" title="Industries we serve" />
          <Industries />
        </div>
      </section>

      <CTA />
    </>
  );
}
