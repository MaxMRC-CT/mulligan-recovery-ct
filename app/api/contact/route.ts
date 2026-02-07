import { NextResponse } from "next/server";

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

  // Placeholder handling only; replace with secure CRM/intake integration before production.
  console.info("Admissions inquiry received", {
    name,
    phone,
    email,
    reason,
    preferredContact,
    message
  });

  return NextResponse.json({ message: "Thanks. Our admissions team will contact you shortly." });
}
