
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Instagram, Linkedin, Twitter, Star } from "lucide-react";

export default function ContactUsPage() {
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
          <div className="grid md:grid-cols-2 gap-x-0 lg:gap-x-0"> {/* Adjusted gap for border */}
            {/* Left Column: Send Message */}
            <div className="space-y-6 md:border-r md:border-border md:pr-8 lg:md:pr-12">
              <div>
                <h2 className="text-2xl font-semibold text-primary">Send us a Message</h2>
                <p className="text-muted-foreground mt-1">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="e.g., John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., Inquiry about Fahm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[120px] resize-y"
                  />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full sm:w-auto" disabled>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message (Coming Soon)
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-2">
                  Please note: Form submission functionality will be available soon.
                </p>
              </form>
            </div>

            {/* Right Column: Feedback & Ratings */}
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
