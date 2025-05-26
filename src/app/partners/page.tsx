
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
          Collaborating with leading institutions to drive innovation and disseminate knowledge.
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-4xl font-semibold text-center mb-10 text-primary">Official Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
          {[
            { name: "Tech University", hint: "university logo" },
            { name: "Innovate Labs", hint: "research lab" },
            { name: "Global Research Institute", hint: "institute building" },
            { name: "Science Foundation", hint: "foundation emblem" },
          ].map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow transform hover:scale-105">
              <Image 
                src={`https://placehold.co/200x100.png`} 
                alt={partner.name} 
                width={180} 
                height={90} 
                data-ai-hint={partner.hint} 
                className="mb-4 filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" 
              />
              <p className="text-md font-medium text-muted-foreground">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Stronger Together</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p>
                We collaborate with leading institutions, universities, and research organizations to bring you the highest quality insights. Our partners share our commitment to open access and the ethical dissemination of knowledge.
              </p>
              <p className="mt-4">
                Through these collaborations, we aim to amplify the impact of research, foster interdisciplinary connections, and support the growth of a vibrant global academic community. We are always open to exploring new partnerships that align with our mission.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Global network of partners"
                layout="fill"
                objectFit="cover"
                data-ai-hint="global network"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center pt-6">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/partners/join">
              Join Our Partner Program
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
