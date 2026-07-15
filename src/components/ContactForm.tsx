import { useId, useState } from "react";
import { BRAND } from "../content";

type Status = "idle" | "submitting" | "success" | "error";

interface Fields {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", company: "", message: "" };

/** Minimal, dependency-free validation. Returns a message per invalid field. */
function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "That doesn't look like a valid email.";
  }
  if (fields.message.trim().length < 10) {
    errors.message = "Tell us a little more — at least 10 characters.";
  }
  return errors;
}

const isConfigured = !BRAND.formEndpoint.includes("your-form-id");

export function ContactForm() {
  const uid = useId();
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const fieldId = (name: keyof Fields) => `${uid}-${name}`;
  const errorId = (name: keyof Fields) => `${uid}-${name}-error`;

  const update =
    (name: keyof Fields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [name]: event.target.value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Demo mode: no endpoint configured yet, so simulate a successful send.
    if (!isConfigured) {
      setStatus("submitting");
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      setFields(EMPTY);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(BRAND.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-success" role="status">
            <span aria-hidden="true">✓</span>
            <h2>Message sent.</h2>
            <p>Thanks for reaching out — we&apos;ll be in touch within a day.</p>
            <button type="button" className="contact-reset" onClick={() => setStatus("idle")}>
              Send another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-copy">
          <span>04 / Talk to us</span>
          <h2>
            Tell us what you&apos;d
            <br />
            <em>automate first.</em>
          </h2>
          <p>
            Send a note and we&apos;ll map your busiest workflow with you — no
            slide deck, no commitment.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <Field
            id={fieldId("name")}
            label="Name"
            error={errors.name}
            errorId={errorId("name")}
          >
            <input
              id={fieldId("name")}
              name="name"
              type="text"
              autoComplete="name"
              value={fields.name}
              onChange={update("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? errorId("name") : undefined}
            />
          </Field>

          <Field
            id={fieldId("email")}
            label="Work email"
            error={errors.email}
            errorId={errorId("email")}
          >
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={update("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? errorId("email") : undefined}
            />
          </Field>

          <Field id={fieldId("company")} label="Company" optional>
            <input
              id={fieldId("company")}
              name="company"
              type="text"
              autoComplete="organization"
              value={fields.company}
              onChange={update("company")}
            />
          </Field>

          <Field
            id={fieldId("message")}
            label="What would you automate?"
            error={errors.message}
            errorId={errorId("message")}
          >
            <textarea
              id={fieldId("message")}
              name="message"
              rows={4}
              value={fields.message}
              onChange={update("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? errorId("message") : undefined}
            />
          </Field>

          <button type="submit" className="contact-submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message"}
            <b aria-hidden="true">↗</b>
          </button>

          <p className="contact-status" role="status" aria-live="polite">
            {status === "error" &&
              "Something went wrong sending your message. Please try again."}
            {!isConfigured && status === "idle" && (
              <span className="contact-hint">
                Demo mode — set a Formspree endpoint in content.ts to receive real
                submissions.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  errorId?: string;
  optional?: boolean;
  children: React.ReactNode;
}

function Field({ id, label, error, errorId, optional, children }: FieldProps) {
  return (
    <div className={`contact-field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>
        {label} {optional && <span className="optional">optional</span>}
      </label>
      {children}
      {error && (
        <span className="field-error" id={errorId}>
          {error}
        </span>
      )}
    </div>
  );
}
