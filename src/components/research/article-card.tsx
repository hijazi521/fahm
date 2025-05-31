
'use client';

import type { Article } from '@/lib/constants';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// Removed useState, handleSummarizePaper, Loader2, BookMarked, Alert, ScrollArea imports as they are no longer needed

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  // Removed summary, isLoadingSummary, and error states
  // Removed onSummarize function

  return (
    <Card className="border-0 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 flex flex-col h-full bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold leading-tight">{article.title}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          By {article.authors.join(', ')} - Published on {article.publicationDate}
          {article.category && ` - Category: ${article.category}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="aspect-video relative w-full rounded-md overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={article.imageHint}
          />
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed">{article.abstract}</p>
        
        {/* Removed error Alert display */}
        {/* Removed summary Alert display */}
      </CardContent>
      {/* Removed CardFooter with the "Summarize with AI" button */}
    </Card>
  );
}
