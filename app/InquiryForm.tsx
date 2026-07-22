"use client";

import { useState, FormEvent } from "react";

// Formspree endpoint — submissions land in the owner's inbox; the email
// address itself never appears in the page source.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgogzjwj";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="inquiry-status success">
        Thanks — your inquiry has been sent. We&rsquo;ll be in touch.
      </p>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <input
        type="hidden"
        name="_subject"
        value="TakeHomeTest.com — Acquisition Inquiry"
      />
      <button
        type="submit"
        className="inquiry-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>
      {status === "error" && (
        <p className="inquiry-status error">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
