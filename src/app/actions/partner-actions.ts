
'use server';

import type { PartnerFormValues } from '@/components/forms/partner-program-form';
import { Resend } from 'resend';
import * as z from 'zod';

// Define the schema on the server side for validation, matching the client-side schema
const partnerFormSchema = z.object({
  organizationName: z.string().min(2, { message: 'Organization name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }).regex(/^\+?[0-9\s-()]*$/, { message: "Invalid phone number format."}),
  schoolOrInstitution: z.string().min(2, { message: 'School or institution name must be at least 2 characters.' }),
  partnershipInterest: z.string().min(10, { message: 'Partnership interest description (min 10 characters).' }).max(500, { message: 'Partnership interest description (max 500 characters).'})
});


export async function handlePartnerFormSubmission(
  values: PartnerFormValues
): Promise<{ success: boolean; error?: string; message?: string }> {
  const validationResult = partnerFormSchema.safeParse(values);
  if (!validationResult.success) {
    console.error('Server-side validation failed for partner form:', validationResult.error.flatten().fieldErrors);
    return { success: false, error: 'Invalid form data received.' };
  }

  const { organizationName, email, phoneNumber, schoolOrInstitution, partnershipInterest } = validationResult.data;

  console.log('Partner Program Application Received:');
  console.log('Organization Name:', organizationName);
  console.log('Email:', email);
  console.log('Phone Number:', phoneNumber);
  console.log('School/Institution:', schoolOrInstitution);
  console.log('Partnership Interest:', partnershipInterest);

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY is not set. Partner application email will not be sent. Data logged to console.');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate processing
    return { success: true, message: "Application details logged (email sending not configured)." };
  }

  const resend = new Resend(resendApiKey);
  const toEmail = 'fahmcontactus@gmail.com';
  // IMPORTANT: Replace 'partnerform@yourverifieddomain.com' with an email address
  // associated with a domain you have verified in your Resend account.
  const fromEmail = 'partnerform@yourverifieddomain.com'; // CHANGE THIS

  try {
    await resend.emails.send({
      from: `"${organizationName} - Fahm Partner Inquiry" <${fromEmail}>`,
      to: toEmail,
      subject: `New Partner Program Application: ${organizationName}`,
      reply_to: email,
      html: `
        <h1>New Partner Program Application</h1>
        <p><strong>Organization Name:</strong> ${organizationName}</p>
        <p><strong>Contact Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>School/Institution Type:</strong> ${schoolOrInstitution}</p>
        <p><strong>Partnership Interest:</strong></p>
        <p>${partnershipInterest.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Partner Program Application:
        Organization Name: ${organizationName}
        Contact Email: ${email}
        Phone Number: ${phoneNumber}
        School/Institution Type: ${schoolOrInstitution}
        Partnership Interest:
        ${partnershipInterest}
      `
    });
    return { success: true, message: "Application submitted successfully! We will be in touch." };
  } catch (error) {
    console.error('Partner application email sending failed:', error);
    return { success: false, error: 'Failed to submit application. Please try again later.' };
  }
}

