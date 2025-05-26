
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Handshake, ExternalLink } from "lucide-react";

export default function PartnersPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <Handshake className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Our Valued Partners
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          Institutes and Organizations that are helping accelerate this project and increase the reach of Fahm to the whole globe
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary">Official Partners</h2>
        <Card className="shadow-md">
          <CardContent className="py-10 text-center">
            <p className="text-xl text-muted-foreground">
              Collaborations coming soon
            </p>
          </CardContent>
        </Card>
      </section>

      <Card className="shadow-lg mt-16">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl text-center">Stronger Together</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-6 md:py-8 px-4 md:px-6">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            We are always looking for new partners to collaborate with. If you are interested in working with us, please get in touch.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in our mission to democratize knowledge and foster innovation.
          </p>
        </CardContent>
        <CardFooter className="justify-center pt-6 pb-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <Link href="/partners/join">
              Become a Partner
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
