
'use client';

import type { Article } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { handleSummarizePaper } from '@/app/actions/summarize-actions';
import { Loader2, BookMarked } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from '@/components/ui/scroll-area';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSummarize = async () => {
    setIsLoadingSummary(true);
    setError(null);
    setSummary(null);
    const result = await handleSummarizePaper(article.content);
    if (result.summary) {
      setSummary(result.summary);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoadingSummary(false);
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 flex flex-col h-full bg-card">
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
        
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {summary && (
          <Alert variant="default" className="mt-4 bg-background/50 border-primary/30">
             <BookMarked className="h-5 w-5 text-accent" />
            <AlertTitle className="text-accent">AI Summary</AlertTitle>
            <ScrollArea className="h-32">
              <AlertDescription className="text-sm text-foreground/80 whitespace-pre-wrap">
                {summary}
              </AlertDescription>
            </ScrollArea>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onSummarize} disabled={isLoadingSummary} className="w-full">
          {isLoadingSummary ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Summarizing...
            </>
          ) : (
            'Summarize with AI'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}

