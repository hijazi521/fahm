
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Users, Send, Instagram, Twitter, Star, Loader2 } from "lucide-react"; // Removed Linkedin
import { handleContactFormSubmission } from "@/app/actions/contact-actions";
import { handleFeedbackSubmission, type FeedbackFormValues as FeedbackFormSchemaValues } from "@/app/actions/feedback-actions";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, {
    message: "Message cannot exceed 1000 characters."
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const clientFeedbackFormSchema = z.object({
  feedbackMessage: z.string().min(10, { message: "Feedback must be at least 10 characters." }).max(2000),
  rating: z.number().min(1).max(5).optional().nullable(),
});
type FeedbackFormValues = z.infer<typeof clientFeedbackFormSchema>;

type PageProps = {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ConnectPage({ params, searchParams }: PageProps) {
  const { toast } = useToast();
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [currentRating, setCurrentRating] = useState<number | null>(null);

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const feedbackForm = useForm<FeedbackFormValues>({
    resolver: zodResolver(clientFeedbackFormSchema),
    defaultValues: {
      feedbackMessage: "",
      rating: null,
    },
  });

  async function onContactSubmit(values: ContactFormValues) {
    setIsSubmittingContact(true);
    try {
      const result = await handleContactFormSubmission(values);
      if (result.success) {
        toast({
          title: result.message || "Message Sent!",
          description: result.message?.includes("logged") ? "Email sending may not be fully configured on the server." : "Thank you for contacting us.",
        });
        contactForm.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: (result.error || "An unexpected error occurred.") + " If email sending is configured, please check server logs for more details.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission client-side error:", error);
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred while submitting the contact form. Please try again later. Check server logs for details if the issue persists.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingContact(false);
    }
  }

  async function onFeedbackSubmit(values: FeedbackFormValues) {
    setIsSubmittingFeedback(true);
    const submissionValues: FeedbackFormSchemaValues = {
      feedbackMessage: values.feedbackMessage,
      rating: currentRating,
    };

    try {
      const result = await handleFeedbackSubmission(submissionValues);
      if (result.success) {
        toast({
          title: result.message || "Feedback Submitted!",
          description: result.message?.includes("logged") ? "Email sending may not be fully configured on the server." : "Thank you for your feedback.",
        });
        feedbackForm.reset();
        setCurrentRating(null);
      } else {
        toast({
          title: "Feedback Submission Failed",
          description: (result.error || "An unexpected error occurred.") + " If email sending is configured, please check server logs for details.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Feedback form submission client-side error:", error);
      toast({
        title: "Feedback Submission Error",
        description: "An unexpected error occurred while submitting feedback. Please try again later. Check server logs for details if issue persists.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingFeedback(false);
    }
  }

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Users className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Connect With Us
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          Get in touch, share your feedback, or learn more about our team.
        </p>
      </section>

      <Card className="max-w-5xl mx-auto shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-x-0 lg:gap-x-0">
            {/* Contact Form Section */}
            <div className="space-y-6 md:border-r md:border-border md:pr-8 lg:md:pr-12">
              <div>
                <h2 className="text-2xl font-semibold text-primary">Send us a Message</h2>
                <p className="text-muted-foreground mt-1">
                  Fill out the form below and we'll get back to you.
                </p>
              </div>
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={contactForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={contactForm.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Inquiry about Fahm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            className="min-h-[120px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-2">
                    <Button type="submit" className="w-full sm:w-auto" disabled={isSubmittingContact}>
                      {isSubmittingContact ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                   <p className="text-xs text-muted-foreground text-center pt-2">
                     If email sending is not configured, messages are logged to the server console. Ensure Resend is configured with an API key and verified domain.
                   </p>
                </form>
              </Form>
            </div>

            {/* Feedback Section */}
            <div className="space-y-6 mt-8 md:mt-0 md:pl-8 lg:md:pl-12">
              <div>
                <h2 className="text-2xl font-semibold text-primary">Feedback & Ratings</h2>
                <p className="text-muted-foreground mt-1">
                  Let us know what you think or how we can improve.
                </p>
              </div>
              <Form {...feedbackForm}>
                <form onSubmit={feedbackForm.handleSubmit(onFeedbackSubmit)} className="space-y-6">
                  <FormField
                    control={feedbackForm.control}
                    name="feedbackMessage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="feedback-message">Your Feedback</FormLabel>
                        <FormControl>
                          <Textarea
                            id="feedback-message"
                            placeholder="Share your thoughts, suggestions, or report an issue..."
                            className="min-h-[120px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={feedbackForm.control}
                    name="rating"
                    render={() => ( 
                      <FormItem>
                        <FormLabel>Rate our platform</FormLabel>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Button
                              key={star}
                              type="button"
                              variant="ghost"
                              size="icon"
                              className={cn(
                                "hover:text-accent",
                                currentRating && star <= currentRating ? "text-accent fill-accent" : "text-muted-foreground/50"
                              )}
                              onClick={() => {
                                const newRating = currentRating === star ? null : star;
                                setCurrentRating(newRating);
                                feedbackForm.setValue('rating', newRating, { shouldValidate: true });
                              }}
                              aria-label={`Rate ${star} star${currentRating && star <= currentRating ? ' selected' : ''}`}
                            >
                              <Star className={cn("h-6 w-6", currentRating && star <= currentRating && "fill-current")} />
                            </Button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-2">
                    <Button type="submit" className="w-full sm:w-auto" disabled={isSubmittingFeedback}>
                       {isSubmittingFeedback ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                           Submit Feedback
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center pt-2">
                    Feedback submissions will be emailed. Ensure Resend is configured.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meet Our Team Section */}
      <Card className="max-w-5xl mx-auto shadow-xl mt-8">
        <CardHeader className="text-center">
          <Users className="mx-auto h-12 w-12 text-accent mb-3" />
          <CardTitle className="text-3xl">Meet Our Team</CardTitle>
          <CardDescription>The dedicated individuals behind Fahm.</CardDescription>
        </CardHeader>
        <CardContent className="py-6 text-center">
          <p className="text-lg text-muted-foreground">
            Team member details will be updated soon.
          </p>
        </CardContent>
      </Card>

      <section className="text-center py-6 border-t border-border mt-8">
        <h2 className="text-2xl font-semibold text-primary mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/fahmsite/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Fahm on Instagram"
          >
            <Instagram className="h-8 w-8" />
          </a>
          <a
            href="/coming-soon" 
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Fahm on Twitter (Coming Soon)"
          >
            <Twitter className="h-8 w-8" />
          </a>
          {/* LinkedIn icon and link removed */}
        </div>
      </section>
    </div>
  );
}

    