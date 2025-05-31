
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid } from 'lucide-react';
import { use } from 'react';

type PageProps = {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function PublishmentsPage({ params, searchParams }: PageProps) {
  if (params) {
    use(params);
  }
  if (searchParams) {
    use(searchParams);
  }

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <LayoutGrid className="mx-auto h-16 w-16 text-accent mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Publishments
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          Explore our collection of groundbreaking papers and articles.
        </p>
      </section>

      <section className="py-8">
        <Card className="shadow-md border-0">
          <CardContent className="py-10 text-center">
            <p className="text-xl text-muted-foreground">
              To be released soon
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
