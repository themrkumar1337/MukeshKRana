import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Check for the API key at runtime to prevent Vercel build errors
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Critical: RESEND_API_KEY is missing from environment variables.");
    return NextResponse.json(
      { error: "Email service configuration missing" }, 
      { status: 500 }
    );
  }

  // Initialize Resend safely inside the request handler
  const resend = new Resend(apiKey);

  try {
    const { name, email, type, message } = await req.json();

    // 1. Internal Notification (Email to Mukesh's Office)
    await resend.emails.send({
      from: 'Mukesh HQ <office@mukeshkrana.com>',
      to: ['mukesh@bharatsec.com'], // Sent to your primary business email
      subject: `New Strategic Inquiry: ${type}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Strategic Inquiry Received</h2>
          <p><b>From:</b> ${name} (${email})</p>
          <p><b>Interest:</b> ${type}</p>
          <hr />
          <p><b>Message:</b></p>
          <p>${message}</p>
        </div>
      `
    });

    // 2. Auto-Reply (Professional Acknowledgment to the Visitor)
    await resend.emails.send({
      from: 'Mukesh K. Rana <office@mukeshkrana.com>',
      to: [email],
      subject: `Acknowledgment: Inquiry regarding ${type}`,
      html: `
        <div style="font-family: 'Helvetica', sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #eee; border-radius: 20px;">
          <h2 style="color: #111; letter-spacing: -1px;">Acknowledgment of Inquiry</h2>
          <p style="color: #444; line-height: 1.6;">Hello ${name},</p>
          <p style="color: #444; line-height: 1.6;">
            Thank you for reaching out regarding <b>${type}</b>. This message serves as a formal confirmation that your inquiry has been received by my office.
          </p>
          <p style="color: #444; line-height: 1.6;">
            I personally review all strategic proposals and partnership requests. Given the current volume of operations across <b>BharatSec</b> and my other ventures, please allow 48-72 hours for a formal response.
          </p>
          <p style="color: #444; line-height: 1.6;">
            In the meantime, feel free to explore my latest insights on cybersecurity and entrepreneurship via my official channels.
          </p>
          <br />
          <p style="color: #111; font-weight: bold; margin-bottom: 5px;">Mukesh K. Rana</p>
          <p style="color: #888; font-size: 12px; margin-top: 0;">CEO & Founder, Bharat Security</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Inquiry Transmission Error:", error);
    return NextResponse.json(
      { error: "Transmission failed", details: error.message }, 
      { status: 500 }
    );
  }
}