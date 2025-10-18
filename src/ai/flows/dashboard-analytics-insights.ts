'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating summarized insights and highlighting key trends
 * from admin dashboard data related to employee performance, project success rates, and budget adherence.
 *
 * - `getDashboardInsights` - A function that takes dashboard data as input and returns summarized insights and key trends.
 * - `DashboardDataInput` - The input type for the `getDashboardInsights` function.
 * - `DashboardInsightsOutput` - The return type for the `getDashboardInsights` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DashboardDataInputSchema = z.object({
  employeePerformanceData: z.string().describe('Data related to employee performance.'),
  projectSuccessData: z.string().describe('Data related to project success rates.'),
  budgetAdherenceData: z.string().describe('Data related to budget adherence.'),
});
export type DashboardDataInput = z.infer<typeof DashboardDataInputSchema>;

const DashboardInsightsOutputSchema = z.object({
  summary: z.string().describe('A summary of the key insights and trends from the dashboard data.'),
  keyTrends: z.string().describe('Highlighted key trends in employee performance, project success, and budget adherence.'),
});
export type DashboardInsightsOutput = z.infer<typeof DashboardInsightsOutputSchema>;

export async function getDashboardInsights(input: DashboardDataInput): Promise<DashboardInsightsOutput> {
  return dashboardAnalyticsInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dashboardAnalyticsInsightsPrompt',
  input: {schema: DashboardDataInputSchema},
  output: {schema: DashboardInsightsOutputSchema},
  prompt: `You are an AI assistant analyzing admin dashboard data to provide summarized insights and key trends.

  Analyze the following data to identify key insights and trends related to employee performance, project success rates, and budget adherence.

  Employee Performance Data: {{{employeePerformanceData}}}
  Project Success Data: {{{projectSuccessData}}}
  Budget Adherence Data: {{{budgetAdherenceData}}}

  Provide a concise summary of the key insights and trends.
  Highlight the most important trends related to employee performance, project success, and budget adherence.
  Make sure that the summary and key trends are easy to understand and actionable.
  `,
});

const dashboardAnalyticsInsightsFlow = ai.defineFlow(
  {
    name: 'dashboardAnalyticsInsightsFlow',
    inputSchema: DashboardDataInputSchema,
    outputSchema: DashboardInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
