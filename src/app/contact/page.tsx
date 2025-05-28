
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Instagram, Linkedin, Twitter, Star, Loader2 } from "lucide-react";
import { handleContactFormSubmission } from "@/app/actions/contact-actions";

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

export default function ContactUsPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await handleContactFormSubmission(values);
      if (result.success) {
        toast({
          title: result.message || "Message Sent!",
          description: result.message?.includes("logged") ? "Email sending is not fully configured on the server." : "Thank you for contacting us.",
        });
        form.reset();
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
        description: "An unexpected error occurred while submitting the form. Please try again later. Check server logs for details if the issue persists.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Mail className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          We'd love to hear from you! Whether you have a question, feedback, or a partnership inquiry, please feel free to reach out.
        </p>
      </section>

      <Card className="max-w-5xl mx-auto shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-x-0 lg:gap-x-0">
            <div className="space-y-6 md:border-r md:border-border md:pr-8 lg:md:pr-12">
              <div>
                <h2 className="text-2xl font-semibold text-primary">Send us a Message</h2>
                <p className="text-muted-foreground mt-1">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
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
                      control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
                    <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
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
                     If email sending is not configured, messages are logged to the server console.
                   </p>
                </form>
              </Form>
            </div>

            <div className="space-y-6 mt-8 md:mt-0 md:pl-8 lg:md:pl-12">
              <div>
                <h2 className="text-2xl font-semibold text-primary">Feedback & Ratings</h2>
                <p className="text-muted-foreground mt-1">
                  Let us know what you think or how we can improve.
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feedback-message">Your Feedback</Label>
                  <Textarea
                    id="feedback-message"
                    placeholder="Share your thoughts, suggestions, or report an issue..."
                    className="min-h-[120px] resize-y"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label>Rate our platform</Label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Button key={rating} variant="ghost" size="icon" className="text-muted-foreground/50 hover:text-accent" disabled aria-label={`Rate ${rating} star`}>
                        <Star className="h-6 w-6" />
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <Button type="button" className="w-full sm:w-auto" disabled>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Feedback (Coming Soon)
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-2">
                  Feedback submission functionality will be available soon.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="text-center py-6 border-t border-border">
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
            href="#" // Replace with your actual Twitter/X link
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Fahm on Twitter"
          >
            <Twitter className="h-8 w-8" />
          </a>
          <a
            href="#" // Replace with your actual LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Fahm on LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </section>
    </div>
  );
}
