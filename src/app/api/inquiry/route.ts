import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, type, message } = await req.json();

    // 1. Internal Notification (Email to Mukesh)
    await resend.emails.send({
      from: 'Mukesh HQ <office@mukeshkrana.com>',
      to: ['mukesh@bharatsec.com'], // Your personal/work inbox
      subject: `New Strategic Inquiry: ${type}`,
      html: `<p>New message from <b>${name}</b> (${email}) regarding <b>${type}</b>:</p><p>${message}</p>`
    });

    // 2. Auto-Reply (Email to the Visitor)
    await resend.emails.send({
      from: 'Mukesh K. Rana <office@mukeshkrana.com>',
      to: [email],
      subject: `Re: Strategic Inquiry - Mukesh K. Rana`,
      html: `
        <div style="font-family: 'Helvetica', sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #eee; border-radius: 20px;">
          <h2 style="color: #111; letter-spacing: -1px;">Acknowledgment of Inquiry</h2>
          <p style="color: #444; line-height: 1.6;">Hello ${name},</p>
          <p style="color: #444; line-height: 1.6;">
            Thank you for reaching out regarding <b>${type}</b>. This message serves as a formal confirmation that your inquiry has been received by my office.
          </p>
          <p style="color: #444; line-height: 1.6;">
            I personally review all strategic proposals and partnership requests. Given the current volume of operations across <b>BharatSec</b> and <b>Smart Platter</b>, please allow 48-72 hours for a formal response.
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
  } catch (error) {
    return NextResponse.json({ error: "Transmission failed" }, { status: 500 });
  }
}