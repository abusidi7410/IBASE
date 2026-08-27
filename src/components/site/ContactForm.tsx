import { useState, type FormEvent } from "react";
import { company, services } from "@/content/site";

const fieldClass =
  "mt-2 h-11 w-full rounded-sm border border-input bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-primary";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // Static site: no backend is connected. The submission is composed into an
  // email draft so a form/email service can be wired in here later.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Full Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Inquiry — ${data.get("service") || "General"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-surface p-6 sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${fieldClass} h-auto py-3`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Send Inquiry
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground" role="status">
        {submitted
          ? `Your email client should now open with the inquiry addressed to ${company.email}. If it does not, please email us directly.`
          : `This form is not yet connected to a mail service. Submitting opens an email addressed to ${company.email} with your details.`}
      </p>
    </form>
  );
}
