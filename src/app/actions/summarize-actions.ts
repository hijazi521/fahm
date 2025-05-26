'use server';

import { summarizePaper, type SummarizePaperInput } from '@/ai/flows/summarize-paper';

export async function handleSummarizePaper(paperText: string): Promise<{ summary?: string; error?: string }> {
  if (!paperText || paperText.trim().length === 0) {
    return { error: 'Paper text cannot be empty.' };
  }

  try {
    const input: SummarizePaperInput = { paperText };
    const result = await summarizePaper(input);
    return { summary: result.summary };
  } catch (e) {
    console.error('Error summarizing paper:', e);
    // It's better to return a generic error message to the client
    return { error: 'Failed to summarize the paper. Please try again later.' };
  }
}
