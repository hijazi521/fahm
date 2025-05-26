
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Info } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-card rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
          Welcome to Fahm
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl sm:max-w-2xl sm:mx-auto md:text-2xl">
          Explore articles and reports written exclusively by students
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/publishments">
            Explore Publishments <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      {/* Coming Soon Section */}
      <section>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader className="flex flex-row items-center space-x-4">
            <Info className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl">More Features Coming Soon!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are working hard to bring you more exciting content and features. Stay tuned!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
