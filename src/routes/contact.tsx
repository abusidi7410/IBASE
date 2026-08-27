import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/content/site";

const title = "Contact TOSS | ICT Solutions in Kaduna, Nigeria";
const description =
  "Contact Tech One-Stop Solution Ltd in Kaduna, Nigeria to discuss networking, connectivity, cybersecurity, cloud, software, CCTV or renewable energy projects.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <div className="container-page">
          <SectionHeader
            as="h1"
            eyebrow="Contact"
            title="Let's talk."
            intro="Tell us about your technology, connectivity, infrastructure or digital transformation requirement and we will respond with next steps."
          />
        </div>
      </section>

      <section className="container-page py-16 lg:py-20" id="quote">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-lg font-semibold text-foreground">
              {company.name}
            </h2>
            <address className="mt-6 space-y-6 text-sm not-italic leading-relaxed text-muted-foreground">
              <div>
                <p className="eyebrow">Office</p>
                <p className="mt-2 text-foreground">{company.address}</p>
              </div>
              <div>
                <p className="eyebrow">Phone</p>
                <p className="mt-2">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {company.phone}
                  </a>
                </p>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <p className="mt-2">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {company.email}
                  </a>
                </p>
              </div>
              <div>
                <p className="eyebrow">Website</p>
                <p className="mt-2 text-foreground">{company.website}</p>
              </div>
            </address>
          </div>

          <div className="lg:col-span-8">
            <h2 className="sr-only">Request a quote</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
