import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Forward to email via simple mailto or third-party service
    // When RESEND_API_KEY is configured, use Resend to send emails
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL ?? "win060787@gmail.com";

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Nova Tech AI Contact Form <noreply@novatechai.com>",
          to: recipientEmail,
          reply_to: email,
          subject: `[Contact Form] ${subject} — from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px;">
              <h2 style="color: #111;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name</td><td style="padding: 8px 0; color: #111;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; color: #111;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Subject</td><td style="padding: 8px 0; color: #111;">${subject}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
                <p style="color: #333; white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        console.error("Resend error:", await resendRes.text());
        return NextResponse.json(
          { error: "Failed to send message." },
          { status: 500 }
        );
      }
    } else {
      // Log to console when no email service is configured (development)
      console.log("Contact form submission (no email service configured):", {
        name,
        email,
        subject,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
