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
    const {
      serviceTitle,
      name,
      email,
      phone,
      eventDate,
      audienceSize,
      budget,
      message,
      package: selectedPackage,
      fieldConfig = {},
    } = await request.json();

    if (!serviceTitle || !name || !email) {
      return NextResponse.json(
        { error: "Service information, name, and email are required." },
        { status: 400 },
      );
    }

    ensureResendConfigured("Booking");

    const from = process.env.RESEND_FROM_EMAIL;
    const ownerEmails = process.env.RESEND_OWNER_EMAIL;
    const to = getRecipients(ownerEmails, from ? [from] : []);
    const logoUrl = process.env.RESEND_BRAND_LOGO_URL;

    if (!from || to.length === 0) {
      return NextResponse.json(
        { error: "Booking email recipients are not configured." },
        { status: 500 },
      );
    }

    const config = {
      showEventDate: fieldConfig.showEventDate !== false,
      eventDateLabel: fieldConfig.eventDateLabel ?? "Event date",
      showAudience: fieldConfig.showAudience !== false,
      audienceLabel: fieldConfig.audienceLabel ?? "Audience size",
      budgetLabel: fieldConfig.budgetLabel ?? "Budget",
      messageLabel: fieldConfig.messageLabel ?? "Additional details",
      phoneLabel: fieldConfig.phoneLabel ?? "Phone / WhatsApp",
    };

    const featureList = selectedPackage?.features ?? [];

    const textParts = [
      `New booking request for ${serviceTitle}`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `${config.phoneLabel}: ${phone}` : null,
      config.showEventDate && eventDate ? `${config.eventDateLabel}: ${eventDate}` : null,
      config.showAudience && audienceSize ? `${config.audienceLabel}: ${audienceSize}` : null,
      budget ? `${config.budgetLabel}: ${budget}` : null,
      selectedPackage?.title
        ? `Selected package: ${selectedPackage.title}${selectedPackage.price ? ` (${selectedPackage.price})` : ""}`
        : null,
      featureList.length ? `Package features:\n- ${featureList.join("\n- ")}` : null,
      message ? `${config.messageLabel}:\n${message}` : null,
    ].filter(Boolean);

    const textBody = textParts.join("\n");

    const clientInfoRows = [
      `<p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>`,
      `<p style="margin:0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#ea580c;text-decoration:none;">${email}</a></p>`,
      phone ? `<p style="margin:0 0 8px;"><strong>${config.phoneLabel}:</strong> ${phone}</p>` : "",
      config.showEventDate && eventDate
        ? `<p style="margin:0 0 8px;"><strong>${config.eventDateLabel}:</strong> ${eventDate}</p>`
        : "",
      config.showAudience && audienceSize
        ? `<p style="margin:0 0 8px;"><strong>${config.audienceLabel}:</strong> ${audienceSize}</p>`
        : "",
      budget ? `<p style="margin:0;"><strong>${config.budgetLabel}:</strong> ${budget}</p>` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const packageSection = selectedPackage?.title
      ? `
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:12px 16px;background:#f8fafc;border-radius:12px;margin-bottom:8px;font-weight:600;">Selected package</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:16px;">
                <p style="margin:0 0 8px;"><strong>${selectedPackage.title}</strong>${selectedPackage.price ? ` &middot; ${selectedPackage.price}` : ""}</p>
                ${featureList.length
                  ? `<ul style="margin:0;padding-left:20px;color:#475569;">${featureList
                      .map((feature) => `<li style="margin-bottom:6px;">${feature}</li>`)
                      .join("")}</ul>`
                  : ""}
              </td>
            </tr>
          </table>
        `
      : "";

    const messageSection = message
      ? `
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:12px 16px;background:#f8fafc;border-radius:12px;margin-bottom:8px;font-weight:600;">${config.messageLabel}</td>
            </tr>
            <tr>
              <td style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:12px;">
                <p style="margin:0;color:#475569;white-space:pre-line;">${message}</p>
              </td>
            </tr>
          </table>
        `
      : "";

    const htmlBody = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(15,23,42,0.12);">
        <tr>
          <td style="background:#2563eb;padding:32px 40px;color:#ffffff;">
            ${logoUrl ? `<img src="${logoUrl}" alt="Bodayemo" style="height:48px;margin-bottom:16px;border-radius:12px;" />` : ""}
            <p style="margin:0;font-size:14px;letter-spacing:2px;text-transform:uppercase;font-weight:600;opacity:0.85;">Booking Request</p>
            <h1 style="margin:8px 0 0;font-size:28px;line-height:1.3;font-weight:700;">${serviceTitle}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;font-family:'Inter',Segoe UI,Roboto,sans-serif;color:#0f172a;font-size:16px;line-height:1.6;">
            <p style="margin:0 0 20px;">Hi there,</p>
            <p style="margin:0 0 24px;">You have received a new booking enquiry on Bodayemo.com. Below are the submitted details.</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:12px 16px;background:#f8fafc;border-radius:12px;margin-bottom:8px;font-weight:600;">Client information</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:16px;">
                  ${clientInfoRows}
                </td>
              </tr>
            </table>
            ${packageSection}
            ${messageSection}
            <p style="margin:32px 0 0;color:#94a3b8;font-size:13px;">This email was generated automatically by the Bodayemo booking form.</p>
          </td>
        </tr>
      </table>
    `;

    await resend.emails.send({
      from,
      to,
      subject: `New booking request: ${serviceTitle}`,
      reply_to: email,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend booking error", error);
    return NextResponse.json(
      { error: "Something went wrong while sending the booking." },
      { status: 500 },
    );
  }
}
