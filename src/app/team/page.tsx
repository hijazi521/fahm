
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { use } from 'react';

type PageProps = {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function TeamPage({ params, searchParams }: PageProps) {
  if (params) {
    use(params);
  }
  if (searchParams) {
    use(searchParams);
  }
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <Users className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Meet Our Team
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          The dedicated individuals behind Fahm. The team that is working day and night to bring the best result possible.
        </p>
      </section>

      <Card className="max-w-5xl mx-auto shadow-xl mt-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Team Members</CardTitle>
          <CardDescription>The passionate individuals driving Fahm forward.</CardDescription>
        </CardHeader>
        <CardContent className="py-10 text-center">
          <p className="text-xl text-muted-foreground">
            Team member details will be updated soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

    