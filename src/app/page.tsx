
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Handshake, LayoutGrid, Instagram } from 'lucide-react';

const featuredSections = [
  {
    title: 'Publishments',
    description: 'Explore groundbreaking papers and articles.',
    href: '/publishments',
    icon: <LayoutGrid className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Our Mission',
    description: 'Learn about our vision and goals.',
    href: '/mission',
    icon: <BookOpen className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Meet the Team',
    description: 'Get to know the people behind Fahm.',
    href: '/team',
    icon: <Users className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Our Partners',
    description: 'Discover our collaborations.',
    href: '/partners',
    icon: <Handshake className="h-8 w-8 text-accent" />,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 bg-card rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
          Welcome to Fahm
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl sm:max-w-2xl sm:mx-auto md:text-2xl">
          Explore articles and reports written exclusively by students
        </p>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <Button
            asChild
            size="icon"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            aria-label="Fahm on Instagram"
          >
            <Link href="https://www.instagram.com/fahmsite/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-8 w-8" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/publishments">
              View Publishments <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Sections */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          Discover Fahm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSections.map((section) => (
            <Card key={section.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
              <CardHeader className="items-center text-center">
                {section.icon}
                <CardTitle className="text-xl mt-2">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center">{section.description}</CardDescription>
              </CardContent>
              <div className="p-4 pt-0 text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link href={section.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Uploads Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          Recent Uploads
        </h2>
        <Card className="shadow-lg">
          <CardContent className="py-8 text-center">
            <p className="text-xl text-muted-foreground">
              Going to be released soon
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
