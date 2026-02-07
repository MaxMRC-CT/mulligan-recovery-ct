"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FormInput, FormTextArea } from "@/components/ui/form-input";

type Status = {
  kind: "idle" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      reason: String(formData.get("reason") ?? ""),
      preferredContact: String(formData.get("preferredContact") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? "")
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          kind: "error",
          message: data.message ?? "Unable to send your request right now."
        });
        return;
      }

      form.reset();
      setStatus({
        kind: "success",
        message: data.message ?? "Your request was submitted."
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Unable to send your request right now. Please call (203) 555-0173."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" aria-describedby="form-disclaimer form-privacy-note" noValidate>
      <h2 className="text-2xl font-semibold text-neutral-900">Admissions Inquiry</h2>
      <p id="form-disclaimer" className="mt-3 text-sm text-neutral-700">
        This form is for general contact only and is not monitored for medical emergencies.
      </p>
      <p id="form-privacy-note" className="mt-2 text-xs text-neutral-700">
        Do not include diagnosis details, medication information, insurance member IDs, or treatment history.
      </p>

      <div className="form-stack mt-6">
        <FormInput id="name" name="name" label="Full Name" autoComplete="name" required />
        <FormInput id="phone" name="phone" label="Phone" type="tel" autoComplete="tel" required />
        <FormInput id="email" name="email" label="Email (optional)" type="email" autoComplete="email" />

        <label htmlFor="reason" className="block">
          <span className="mb-1 block text-sm font-medium text-neutral-900">Reason for Inquiry</span>
          <select id="reason" name="reason" className="input-field" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option value="admissions">Admissions availability</option>
            <option value="insurance">Insurance and payment questions</option>
            <option value="referral">Referral partner coordination</option>
            <option value="family">Family support question</option>
          </select>
        </label>

        <label htmlFor="preferredContact" className="block">
          <span className="mb-1 block text-sm font-medium text-neutral-900">Preferred Contact Method</span>
          <select id="preferredContact" name="preferredContact" className="input-field" required defaultValue="phone">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </label>

        <FormTextArea
          id="message"
          name="message"
          label="Brief Message (optional)"
          maxLength={320}
          placeholder="General question only. Please avoid private health details."
        />

        <label className="flex items-start gap-3 rounded-xl border border-line bg-neutral-50 p-3 text-sm text-neutral-700">
          <input id="consent" name="consent" type="checkbox" className="mt-1" required />
          <span>
            I understand this is a general contact form and consent to being contacted by Mulligan Recovery Centers of
            CT.
          </span>
        </label>

        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit Request"}
        </Button>
        {status.kind !== "idle" ? (
          <p className={status.kind === "success" ? "text-sm text-secondary-dark" : "text-sm text-red-700"}>
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
