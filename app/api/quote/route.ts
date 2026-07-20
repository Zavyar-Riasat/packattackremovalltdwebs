import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { 
      moveType, 
      propertySize, 
      moveDate, 
      collectionAddress, 
      deliveryAddress, 
      name, 
      email, 
      phone, 
      additionalInfo 
    } = data;

    // Validate required fields
    if (!name || !email || !phone || !collectionAddress || !deliveryAddress || !moveDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-w-xl mx-auto p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <h2 style="color: #064e3b; margin-bottom: 20px;">New Quote Request: ${name}</h2>
        
        <h3 style="color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Customer Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3 style="color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px;">Move Details</h3>
        <p><strong>Move Type:</strong> <span style="text-transform: capitalize;">${moveType}</span></p>
        <p><strong>Property Size:</strong> ${propertySize}</p>
        <p><strong>Move Date:</strong> ${moveDate}</p>

        <h3 style="color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px;">Locations</h3>
        <p><strong>Moving From:</strong> ${collectionAddress}</p>
        <p><strong>Moving To:</strong> ${deliveryAddress}</p>

        <h3 style="color: #334155; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px;">Additional Info</h3>
        <p>${additionalInfo || '<em>No additional information provided.</em>'}</p>
      </div>
    `;

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const recipient = process.env.QUOTE_RECIPIENT || 'info@packattackremovalltd.com';
      const fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER || '';
      const ownerBcc = process.env.OWNER_EMAIL || '';

      const mailOptions: any = {
        from: `"Pack & Attack Quotes" <${fromAddress}>`,
        to: recipient,
        replyTo: email,
        subject: `New Quote Request from ${name}`,
        html: htmlContent,
      };

      if (ownerBcc) mailOptions.bcc = ownerBcc;

      await transporter.sendMail(mailOptions);
    } else {
      console.warn('⚠️ EMAIL_USER or EMAIL_PASS environment variables are not set! Email was NOT sent. Logging data instead:');
      console.log('--- Quote Data ---');
      console.log(data);
      console.log('------------------');
    }

    return NextResponse.json({ success: true, message: 'Quote submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting quote:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}