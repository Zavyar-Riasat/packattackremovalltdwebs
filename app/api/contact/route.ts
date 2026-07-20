import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. UPDATED: Swapped to the streamlined Gmail transporter configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '', // Uses your 16-character app password
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-w-xl mx-auto p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 style="color: #064e3b; margin-bottom: 20px;">New Contact Message: ${subject}</h2>
        
        <h3 style="color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Sender Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || '<em>Not provided</em>'}</p>

        <h3 style="color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px;">Message</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    // 2. UPDATED: Condition check and mail envelope configured to match your environment variables
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: `"Pack & Attack Contact Form" <${process.env.EMAIL_USER}>`,
        to: 'info@packattackremovalltd.com',
        replyTo: email, // Direct reply to the sender
        subject: `Website Contact: ${subject}`,
        html: htmlContent,
      });
    } else {
      console.warn('⚠️ EMAIL_USER or EMAIL_PASS environment variables are not set! Contact message NOT sent. Logging data:');
      console.log('--- Contact Message ---');
      console.log(data);
      console.log('-----------------------');
    }

    return NextResponse.json({ success: true, message: 'Message submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}