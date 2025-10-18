'use server';

import { getDashboardInsights, DashboardDataInput } from '@/ai/flows/dashboard-analytics-insights';
import { z } from 'zod';

const ActionResponseSchema = z.object({
  summary: z.string(),
  keyTrends: z.string(),
});

export async function generateDashboardInsights(input: DashboardDataInput) {
  try {
    const result = await getDashboardInsights(input);
    const validatedResult = ActionResponseSchema.parse(result);
    return { success: true, data: validatedResult };
  } catch (error) {
    console.error('Error generating dashboard insights:', error);
    return { success: false, error: 'Failed to generate insights. Please try again.' };
  }
}
