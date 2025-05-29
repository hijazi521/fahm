
import { Hourglass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { use } from 'react';

type PageProps = {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ComingSoonPage({ params, searchParams }: PageProps) {
  if (params) {
    use(params);
  }
  if (searchParams) {
    use(searchParams);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 py-12">
      <Card className="w-full max-w-md shadow-xl text-center">
        <CardHeader>
          <Hourglass className="mx-auto h-16 w-16 text-accent mb-4" />
          <CardTitle className="text-3xl sm:text-4xl">Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg">
            This page or feature is currently under construction.
          </p>
          <p className="text-muted-foreground text-lg mt-2">
            Please check back later.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
