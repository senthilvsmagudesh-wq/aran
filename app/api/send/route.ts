import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, company, mobile, message, product } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "senthilvsmagudesh@gmail.com",
      subject: `New Quote Request${product ? ` — ${product}` : ""} | Aran Innovative Packaging`,
      html: `
        <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background:#f0fdf4; padding:24px;">
          <div style="max-width:680px; margin:0 auto; background:#ffffff; border-radius:16px; box-shadow:0 10px 25px rgba(16,185,129,0.15); overflow:hidden;">
            <div style="background:linear-gradient(90deg, #059669, #16a34a); padding:20px 24px; color:#fff;">
              <div style="font-size:18px; opacity:.9;">Aran Innovative Packaging</div>
              <div style="font-size:26px; font-weight:800; letter-spacing:.2px;">New Quote Request</div>
            </div>
            <div style="padding:24px;">
              <p style="margin:0 0 16px; color:#065f46; font-size:15px;">A new request has been submitted. Details are below:</p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%; border-collapse:separate; border-spacing:0; background:#ecfdf5; border:1px solid #a7f3d0; border-radius:12px;">
                <tbody>
                  <tr>
                    <td style="width:180px; padding:14px 16px; background:#d1fae5; color:#065f46; font-weight:600; border-bottom:1px solid #a7f3d0;">Name</td>
                    <td style="padding:14px 16px; color:#064e3b; border-bottom:1px solid #a7f3d0;">${name || "-"}</td>
                  </tr>
                  <tr>
                    <td style="width:180px; padding:14px 16px; background:#d1fae5; color:#065f46; font-weight:600; border-bottom:1px solid #a7f3d0;">Mobile</td>
                    <td style="padding:14px 16px; color:#064e3b; border-bottom:1px solid #a7f3d0;">${mobile || "-"}</td>
                  </tr>
                  <tr>
                    <td style="width:180px; padding:14px 16px; background:#d1fae5; color:#065f46; font-weight:600; border-bottom:1px solid #a7f3d0;">Email</td>
                    <td style="padding:14px 16px; color:#064e3b; border-bottom:1px solid #a7f3d0;">${email || "-"}</td>
                  </tr>
                  <tr>
                    <td style="width:180px; padding:14px 16px; background:#d1fae5; color:#065f46; font-weight:600; border-bottom:1px solid #a7f3d0;">Company / Business</td>
                    <td style="padding:14px 16px; color:#064e3b; border-bottom:1px solid #a7f3d0;">${company || "-"}</td>
                  </tr>
                  <tr>
                    <td style="width:180px; padding:14px 16px; background:#d1fae5; color:#065f46; font-weight:600; border-bottom:1px solid #a7f3d0; vertical-align:top;">Message</td>
                    <td style="padding:14px 16px; color:#064e3b; white-space:pre-wrap;">${(message || "-").replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>
                  </tr>
                </tbody>
              </table>

              <div style="margin-top:18px; padding:12px 14px; background:#f0fdf4; border:1px dashed #86efac; color:#065f46; border-radius:10px; font-size:13px;">
                Tip: You can reply directly to this email to contact the requester.
              </div>
            </div>
            <div style="padding:14px 20px; background:#f7fee7; color:#3f6212; font-size:12px; text-align:center;">
              ${new Date().getFullYear()} Aran Innovative Packaging — Salem, Tamil Nadu
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json({ success: false, error });
  }
}