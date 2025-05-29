
import { ArticleCard } from '@/components/research/article-card';
import { DUMMY_ARTICLES, type Article } from '@/lib/constants';
import { LayoutGrid } from 'lucide-react';

export default function PublishmentsPage() {
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

      <section>
        {DUMMY_ARTICLES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_ARTICLES.map((article: Article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No articles published yet. Check back soon!
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
