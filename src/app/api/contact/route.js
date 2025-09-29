import { NextResponse } from "next/server";
import { resend, ensureResendConfigured } from "@/lib/resend";

function getRecipients(value, fallback) {
  if (value) {
    const list = value
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean);
    if (list.length > 0) {
      return list;
    }
  }
  return fallback;
}

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    ensureResendConfigured("Contact");

    const from = process.env.RESEND_FROM_EMAIL;
    const ownerEmails = process.env.RESEND_OWNER_EMAIL;
    const to = getRecipients(ownerEmails, from ? [from] : []);
    const logoUrl = process.env.RESEND_BRAND_LOGO_URL;

    if (!from || to.length === 0) {
      return NextResponse.json(
        { error: "Contact email recipients are not configured." },
        { status: 500 },
      );
    }

    const textBody = [
      `New contact message`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Message:\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const htmlBody = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(15,23,42,0.12);">
        <tr>
          <td style="background:#2563eb;padding:32px 40px;color:#ffffff;">
            ${logoUrl ? `<img src="${logoUrl}" alt="Bodayemo" style="height:48px;margin-bottom:16px;border-radius:12px;" />` : ""}
            <p style="margin:0;font-size:14px;letter-spacing:2px;text-transform:uppercase;font-weight:600;opacity:0.85;">New enquiry</p>
            <h1 style="margin:8px 0 0;font-size:28px;line-height:1.3;font-weight:700;">Message from ${name}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;font-family:'Inter',Segoe UI,Roboto,sans-serif;color:#0f172a;font-size:16px;line-height:1.6;">
            <p style="margin:0 0 20px;">Hi there,</p>
            <p style="margin:0 0 24px;">A visitor submitted the contact form on Bodayemo.com. The details are below.</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:12px 16px;background:#f8fafc;border-radius:12px;margin-bottom:8px;font-weight:600;">Contact information</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:16px;">
                  <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
                  <p style="margin:0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></p>
                  ${phone ? `<p style="margin:0;"><strong>Phone:</strong> ${phone}</p>` : ""}
                </td>
              </tr>
            </table>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:12px 16px;background:#f8fafc;border-radius:12px;margin-bottom:8px;font-weight:600;">Message</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:12px;">
                  <p style="margin:0;color:#475569;white-space:pre-line;">${message}</p>
                </td>
              </tr>
            </table>
            <p style="margin:32px 0 0;color:#94a3b8;font-size:13px;">This email was generated automatically by the Bodayemo contact form.</p>
          </td>
        </tr>
      </table>
    `;

    await resend.emails.send({
      from,
      to,
      subject: `New contact enquiry from ${name}`,
      reply_to: email,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend contact error", error);
    return NextResponse.json(
      { error: "Something went wrong while sending the message." },
      { status: 500 },
    );
  }
}





