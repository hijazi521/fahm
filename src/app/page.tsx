
import { ArticleCard } from '@/components/research/article-card';
import { DUMMY_ARTICLES } from '@/lib/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Handshake, LayoutGrid } from 'lucide-react';

const featuredSections = [
  {
    title: 'Publishments',
    description: 'Explore our collection of groundbreaking papers and articles.',
    href: '/publishments',
    icon: <LayoutGrid className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Our Mission',
    description: 'Learn about our dedication to democratizing knowledge.',
    href: '/mission',
    icon: <BookOpen className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Meet the Team',
    description: 'Discover the passionate individuals behind Fahm.',
    href: '/team',
    icon: <Users className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Our Partners',
    description: 'See the organizations we collaborate with.',
    href: '/partners',
    icon: <Handshake className="h-8 w-8 text-accent" />,
  },
];

export default function HomePage() {
  const recentArticles = DUMMY_ARTICLES.slice(0, 3); // Show first 3 articles as recent

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-card rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
          Welcome to Fahm
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl sm:max-w-2xl sm:mx-auto md:text-2xl">
          Your gateway to accessible research and insightful discoveries.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/publishments">
            Explore Publishments <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      {/* Featured Sections */}
      <section>
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-8 text-primary">
          Discover Fahm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredSections.map((section) => (
            <Card key={section.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-4">
                {section.icon}
                <CardTitle className="text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{section.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={section.href}>
                    Go to {section.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Uploads Section */}
      <section>
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-8 text-primary">
          Recent Uploads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        {DUMMY_ARTICLES.length > 3 && (
          <div className="text-center mt-8">
            <Button asChild variant="link" className="text-accent hover:text-accent/80">
              <Link href="/publishments">
                View All Publishments <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
