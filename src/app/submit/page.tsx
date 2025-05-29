
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";
import { use } from 'react';

type PageProps = {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function SubmitPage({ params, searchParams }: PageProps) {
  if (params) {
    use(params);
  }
  if (searchParams) {
    use(searchParams);
  }

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <UploadCloud className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Submit Your Work
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
          We are excited to review your submissions. Please follow the guidelines below.
        </p>
      </section>

      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Submission Portal</CardTitle>
          <CardDescription>
            Details about the submission process and form will be available here soon.
          </CardDescription>
        </CardHeader>
        <CardContent className="py-10 text-center">
          <p className="text-xl text-muted-foreground">
            Submission functionality coming soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
