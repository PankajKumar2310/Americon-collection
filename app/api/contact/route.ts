import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const personalEmail = process.env.PERSONAL_EMAIL;

    if (!emailUser || !emailPass || !personalEmail) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { message: 'Email service not configured properly' },
        { status: 500 }
      );
    }

    // Create transporter with your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change this if you use a different email provider
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      // Add configuration for better deliverability
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter connection
    await transporter.verify();

    // Email to you (the owner)
    const ownerMailOptions = {
      from: `"American Collection Contact Form" <${emailUser}>`,
      to: personalEmail,
      subject: `🏠 New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; margin-bottom: 20px; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
              🏠 New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0; color: #555;">
                <strong style="color: #2c3e50;">👤 Name:</strong> 
                <span style="color: #3498db; font-weight: 500;">${name}</span>
              </p>
              <p style="margin: 8px 0; color: #555;">
                <strong style="color: #2c3e50;">📧 Email:</strong> 
                <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a>
              </p>
              ${phone ? `
              <p style="margin: 8px 0; color: #555;">
                <strong style="color: #2c3e50;">📱 Phone:</strong> 
                <span style="color: #3498db; font-weight: 500;">${phone}</span>
              </p>
              ` : ''}
            </div>

            <div style="background-color: #ecf0f1; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #2c3e50; margin-top: 0;">💬 Message:</h3>
              <p style="color: #34495e; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="border-top: 1px solid #ecf0f1; padding-top: 20px; margin-top: 20px;">
              <p style="color: #7f8c8d; font-size: 12px; margin: 0;">
                📅 Sent: ${new Date().toLocaleString()}<br>
                🌐 From: American Collection Contact Form
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the customer
    const customerMailOptions = {
      from: `"American Collection" <${emailUser}>`,
      to: email,
      subject: `Thank you for contacting American Collection`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">
              🏠 American Collection
            </h1>
            
            <h2 style="color: #3498db; margin-bottom: 20px;">Thank You for Your Message!</h2>
            
            <p style="color: #34495e; line-height: 1.6; margin-bottom: 20px;">
              Dear ${name},
            </p>
            
            <p style="color: #34495e; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to American Collection. We have received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #ecf0f1; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #2c3e50; margin-top: 0;">Your Message:</h3>
              <p style="color: #34495e; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://american-collection.com" style="background-color: #3498db; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
            
            <div style="border-top: 1px solid #ecf0f1; padding-top: 20px; margin-top: 20px;">
              <p style="color: #7f8c8d; font-size: 12px; text-align: center; margin: 0;">
                This is an automated message. Please do not reply to this email.<br>
                American Collection • Kansas City Comfort with a Personal Touch
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    console.log('Contact form emails sent successfully');

    return NextResponse.json(
      { 
        message: 'Message sent successfully! We will contact you soon.',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending contact form email:', error);
    
    // Return more specific error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email service configuration error. Please contact support.';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
    }

    return NextResponse.json(
      { 
        message: errorMessage,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
