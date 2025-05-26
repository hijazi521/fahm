
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div>
            <p>
              Fahm is a unique, student exclusive platform dedicated to empowering young minds by providing them with a professional space to publish their work, ranging from research papers and articles to opinion pieces across a wide range of fields, including medicine, social issues, economics, and more. As a non-profit initiative, Fahm operates at no cost to its users, ensuring that financial limitations never become a barrier to academic expression and recognition.
            </p>
            <p className="mt-4">
              Our mission is to offer students a trusted and credible outlet where they can showcase their research on modern and pressing global issues, gaining valuable recognition and credibility in academic and professional spaces.
            </p>
            <p className="mt-4">
              Behind Fahm is an amazing and supportive team committed to guiding students through the publication process, along with experienced advisors who play an essential role in maintaining quality and integrity. In addition to publishing student work, Fahm will also be releasing its own in-house research and publications, contributing actively to the global pool of knowledge and sparking further conversation and inquiry.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
