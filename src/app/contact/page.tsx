
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Instagram, Linkedin, Twitter } from "lucide-react"; // Added Instagram, Linkedin, Twitter

export default function ContactUsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Mail className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          We&apos;d love to hear from you! Whether you have a question, feedback, or a partnership inquiry, please feel free to reach out.
        </p>
      </section>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle>Send us a Message</CardTitle>
          <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>

      <section className="text-center py-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Other Ways to Reach Us</h2>
        <p className="text-muted-foreground">
          For urgent matters, you can also contact us at:
        </p>
        <p className="text-accent mt-2">
          contact@fahm.example.com (This is a placeholder email)
        </p>
      </section>

      <section className="text-center py-6 border-t border-border">
        <h2 className="text-2xl font-semibold text-primary mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="#" // Replace with your actual Instagram link
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
        <p className="text-xs text-muted-foreground mt-4">
          (Social media links are placeholders)
        </p>
      </section>
    </div>
  );
}
