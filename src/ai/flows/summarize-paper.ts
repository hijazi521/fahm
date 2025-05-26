// 'use server';

/**
 * @fileOverview Summarizes a research paper to provide users with a quick understanding of its main points.
 *
 * - summarizePaper - A function that summarizes the paper.
 * - SummarizePaperInput - The input type for the summarizePaper function.
 * - SummarizePaperOutput - The return type for the summarizePaper function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePaperInputSchema = z.object({
  paperText: z
    .string()
    .describe('The full text content of the research paper to be summarized.'),
});
export type SummarizePaperInput = z.infer<typeof SummarizePaperInputSchema>;

const SummarizePaperOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the research paper.'),
});
export type SummarizePaperOutput = z.infer<typeof SummarizePaperOutputSchema>;

export async function summarizePaper(input: SummarizePaperInput): Promise<SummarizePaperOutput> {
  return summarizePaperFlow(input);
}

const summarizePaperPrompt = ai.definePrompt({
  name: 'summarizePaperPrompt',
  input: {schema: SummarizePaperInputSchema},
  output: {schema: SummarizePaperOutputSchema},
  prompt: `You are an expert research paper summarizer. Your task is to provide a concise and informative summary of the given research paper text.

  Research Paper Text:
  {{paperText}}
  `,
});

const summarizePaperFlow = ai.defineFlow(
  {
    name: 'summarizePaperFlow',
    inputSchema: SummarizePaperInputSchema,
    outputSchema: SummarizePaperOutputSchema,
  },
  async input => {
    const {output} = await summarizePaperPrompt(input);
    return output!;
  }
);
