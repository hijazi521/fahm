
'use server';

import * as z from 'zod';
import { Resend } from 'resend';

// Define the schema for feedback form
const feedbackFormSchema = z.object({
  feedbackMessage: z.string().min(10, { message: "Feedback message must be at least 10 characters." }).max(2000, { message: "Feedback message cannot exceed 2000 characters."}),
  rating: z.number().min(1).max(5).optional().nullable().describe("A rating from 1 to 5 stars."),
  // You could add name/email fields if you want them to be non-anonymous, e.g.:
  // name: z.string().optional(),
  // email: z.string().email().optional(),
});

export type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export async function handleFeedbackSubmission(
  values: FeedbackFormValues
): Promise<{ success: boolean; error?: string; message?: string }> {
  const validationResult = feedbackFormSchema.safeParse(values);
  if (!validationResult.success) {
    console.error('Server-side validation failed for feedback form:', validationResult.error.flatten().fieldErrors);
    return { success: false, error: 'Invalid form data received for feedback. Check server logs for details.' };
  }

  const { feedbackMessage, rating } = validationResult.data;

  // Log to console as a fallback or for debugging
  console.log('Feedback Submission Received:');
  console.log('Message:', feedbackMessage);
  console.log('Rating:', rating ? `${rating} stars` : 'Not rated');

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY is not set. Feedback email will not be sent. Ensure Resend is configured with an API key and verified domain for email sending to work.');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate processing
    return { success: true, message: "Feedback logged (email sending not configured)." };
  }

  const resend = new Resend(resendApiKey);
  const toEmail = 'fahmcontactus@gmail.com'; // Destination for feedback emails
  // IMPORTANT: Replace 'feedback@yourverifieddomain.com' with an email address
  // associated with a domain you have verified in your Resend account.
  const fromEmail = 'feedback@yourverifieddomain.com'; // CHANGE THIS

  try {
    await resend.emails.send({
      from: `"Fahm Platform Feedback" <${fromEmail}>`,
      to: toEmail,
      subject: `New Platform Feedback Received${rating ? ` (${rating} Stars)` : ''}`,
      html: `
        <h1>New Platform Feedback</h1>
        ${rating ? `<p><strong>Rating:</strong> ${'⭐'.repeat(rating)} (${rating}/5)</p>` : '<p><strong>Rating:</strong> Not rated</p>'}
        <p><strong>Feedback Message:</strong></p>
        <p>${feedbackMessage.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Platform Feedback:
        Rating: ${rating ? `${rating}/5 stars` : 'Not rated'}
        Feedback Message:
        ${feedbackMessage}
      `
    });
    return { success: true, message: "Feedback submitted successfully! Thank you." };
  } catch (error) {
    console.error('Feedback email sending failed via Resend:', error);
    return { success: false, error: 'Failed to submit feedback. Please try again later. Check server logs for details.' };
  }
}
