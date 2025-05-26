
'use server';

import * as z from 'zod';
import { Resend } from 'resend';

// Define the schema on the server side as well for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message cannot exceed 1000 characters."}),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function handleContactFormSubmission(
  values: ContactFormValues
): Promise<{ success: boolean; error?: string; message?: string }> {
  const validationResult = contactFormSchema.safeParse(values);
  if (!validationResult.success) {
    console.error('Server-side validation failed:', validationResult.error.flatten().fieldErrors);
    return { success: false, error: 'Invalid form data received.' };
  }

  const { name, email, subject, message } = validationResult.data;

  // Log to console as a fallback or for debugging
  console.log('Contact Form Submission Received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY is not set. Email will not be sent. Message logged to console.');
    // Simulate success for UI purposes if API key is missing, but provide a specific message.
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: "Message logged (email sending not configured)." };
  }

  const resend = new Resend(resendApiKey);

  try {
    // IMPORTANT: Replace 'contactform@yourverifieddomain.com' with an email address
    // associated with a domain you have verified in your Resend account.
    // You CANNOT reliably send emails from a free email provider like @gmail.com as the "from" address.
    const fromEmail = 'contactform@yourverifieddomain.com'; // CHANGE THIS
    const toEmail = 'fahmcontactus@gmail.com';

    await resend.emails.send({
      from: `"${name}" <${fromEmail}>`, // Sender name and email
      to: toEmail,
      subject: `Fahm Contact Form: ${subject}`,
      reply_to: email, // Set the sender's email as the reply-to address
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `
    });
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error('Email sending failed:', error);
    // It's good practice to not expose detailed error messages to the client.
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
