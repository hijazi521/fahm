import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Target } from "lucide-react";

export default function MissionPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Target className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Our Mission
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          Democratizing access to knowledge and fostering innovation.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Empowering Through Insight</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p>
                At Fahm Insights, our mission is to democratize access to cutting-edge research and foster a global community of learners and innovators. We believe that knowledge should be open, accessible, and easily understandable for everyone, everywhere.
              </p>
              <p className="mt-4">
                We strive to break down the barriers that traditionally limit the reach of academic and scientific discoveries. By leveraging advanced AI technologies, we aim to make complex information digestible and engaging, empowering individuals to learn, create, and solve the world's most pressing challenges.
              </p>
              <p className="mt-4">
                Our platform is built on the principles of clarity, integrity, and collaboration. We are committed to providing a space where ideas can flourish, discussions can thrive, and the collective pursuit of knowledge can advance humanity.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Collaborative research environment"
                layout="fill"
                objectFit="cover"
                data-ai-hint="collaboration knowledge"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
