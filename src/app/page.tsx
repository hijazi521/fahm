
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Handshake, LayoutGrid, Instagram, Send, Twitter, Linkedin } from 'lucide-react'; // Added Linkedin
import { DUMMY_ARTICLES, type Article } from '@/lib/constants';
import { ArticleCard } from '@/components/research/article-card';
import { use } from 'react';
import React from 'react';

type PageProps = {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const featuredSections = [
  {
    title: 'Our Mission',
    description: 'Learn about our vision and goals.',
    href: '/mission',
    icon: <BookOpen className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Publishments',
    description: 'Explore groundbreaking papers and articles.',
    href: '/publishments',
    icon: <LayoutGrid className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Our Partners',
    description: 'Discover our collaborations.',
    href: '/partners',
    icon: <Handshake className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Connect With Us',
    description: 'Get in touch, meet the team, or share feedback.',
    href: '/contact',
    icon: <Users className="h-8 w-8 text-accent" />,
  },
];

export default function HomePage({ params, searchParams }: PageProps) {
  if (params) {
    use(params);
  }
  if (searchParams) {
    use(searchParams);
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 bg-card rounded-lg shadow-xl border-0">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
          Welcome to Fahm
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl sm:max-w-2xl sm:mx-auto md:text-2xl">
          Explore articles and reports written exclusively by students!
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
           <Button
            asChild
            size="icon"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            aria-label="Fahm on Twitter (Coming Soon)"
          >
            <Link href="/coming-soon">
              <Twitter className="h-8 w-8" />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            aria-label="Fahm on LinkedIn (Coming Soon)"
          >
            <Link href="/coming-soon">
              <Linkedin className="h-8 w-8" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/publishments">
              View Publishments <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Sections - New Layout */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
          Discover Fahm
        </h2>
        <div className="space-y-8">
          {featuredSections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col sm:flex-row items-center bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out gap-6 border-0"
            >
              <div className="flex-shrink-0">
                {React.cloneElement(section.icon, { className: "h-12 w-12 sm:h-16 sm:w-16 text-accent" })}
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-xl font-semibold text-primary mb-2">{section.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{section.description}</p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-accent hover:text-accent/80 text-sm font-medium"
                >
                  <Link href={section.href}>
                    Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action - Submit Work */}
      <section className="py-8">
        <Card className="border-0 bg-accent text-accent-foreground shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-2xl font-semibold underline">Have Research to Share?</h3>
              <p className="text-lg opacity-90 font-semibold">Submit your work now and contribute to our growing platform.</p>
            </div>
            <Button asChild size="lg" variant="outline" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 hover:text-accent border-accent-foreground">
              <Link href="/submit">
                Submit Your Work <Send className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Recent Uploads Section - Temporarily Removed
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
          Recent Uploads:
        </h2>
        {DUMMY_ARTICLES.slice(0, 2).length > 0 ? ( // Check based on DUMMY_ARTICLES or a live data source
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DUMMY_ARTICLES.slice(0, 2).map((article: Article) => ( // Iterate over DUMMY_ARTICLES or live data
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardContent className="py-8 text-center">
              <p className="text-xl text-muted-foreground">
                Will be updated soon
              </p>
            </CardContent>
          </Card>
        )}
      </section>
      */}
    </div>
  );
}
