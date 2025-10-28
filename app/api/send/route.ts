import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "senthilvsmagudesh@gmail.com",
      subject: "New Quote Request from Divine Mart",
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json({ success: false, error });
  }
}