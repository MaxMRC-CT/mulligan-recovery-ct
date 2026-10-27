import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  reason?: string;
  preferredContact?: string;
  message?: string;
  consent?: boolean;
  website?: string;
};

const reasonLabels: Record<string, string> = {
  admissions: "Admissions availability",
  insurance: "Insurance and payment questions",
  referral: "Referral partner coordination",
  family: "Family support question"
};

// Sends the inquiry to the admissions inbox through Resend's HTTP API.
// Requires RESEND_API_KEY and CONTACT_FROM_EMAIL (a sender on a domain verified in Resend);
// CONTACT_TO_EMAIL overrides the default admissions inbox.
async function sendInquiryEmail(inquiry: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? site.admissionsEmail;

  if (!apiKey || !from) {
    throw new Error("Contact email is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
  }

  const text = [
    "New admissions inquiry from the website.",
    "",
    `Name: ${inquiry.name}`,
    `Phone: ${inquiry.phone}`,
    `Email: ${inquiry.email || "(not provided)"}`,
    `Reason: ${reasonLabels[inquiry.reason] ?? inquiry.reason}`,
    `Preferred contact: ${inquiry.preferredContact}`,
    "",
    "Message:",
    inquiry.message || "(no message)"
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Website inquiry: ${reasonLabels[inquiry.reason] ?? "General"} (${inquiry.name})`,
      text,
      ...(inquiry.email ? { reply_to: inquiry.email } : {})
    })
  });

  if (!response.ok) {
    throw new Error(`Resend responded with ${response.status}: ${await response.text()}`);
  }
}

const disallowedPattern = /(diagnos|medication|rx|prescription|ssn|social security|member id|policy number|dob|date of birth|treatment history|symptom)/i;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request format." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ message: "Request blocked." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const reason = payload.reason?.trim() ?? "";
  const preferredContact = payload.preferredContact?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !phone || !reason || !preferredContact || !payload.consent) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (message.length > 320) {
    return NextResponse.json({ message: "Please keep the message under 320 characters." }, { status: 400 });
  }

  if (disallowedPattern.test(message)) {
    return NextResponse.json(
      { message: "Please remove private health or insurance details. This form accepts general inquiries only." },
      { status: 400 }
    );
  }

  try {
    await sendInquiryEmail({ name, phone, email, reason, preferredContact, message });
  } catch (error) {
    console.error("Failed to send admissions inquiry email", error);
    return NextResponse.json(
      { message: `We couldn't send your request right now. Please email us at ${site.admissionsEmail}.` },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Thanks. Our admissions team will contact you shortly." });
}
