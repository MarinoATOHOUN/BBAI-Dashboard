'use client';

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generateDashboardInsights } from '@/app/actions';
import { mockDashboardDataForAI } from '@/lib/data';
import { Skeleton } from '../ui/skeleton';

type Insights = {
  summary: string;
  keyTrends: string;
};

export function AiInsightsGenerator() {
  const [insights, setInsights] = useState<Insights | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setInsights(null);

    const result = await generateDashboardInsights(mockDashboardDataForAI);

    if (result.success) {
      setInsights(result.data);
    } else {
      setError(result.error);
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          Analyse & Tendances par IA
        </CardTitle>
        <CardDescription>
          Cliquez pour générer un résumé des performances, de la réussite des projets et du respect du budget.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? (
            'Génération...'
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Générer les aperçus
            </>
          )}
        </Button>
        {isLoading && (
            <div className="mt-4 space-y-4">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-6 w-1/4 mt-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
        )}
        {error && <p className="mt-4 text-destructive">{error}</p>}
        {insights && (
          <div className="mt-6 space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-lg text-primary">Résumé des Aperçus</h3>
              <p className="text-muted-foreground">{insights.summary}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-primary">Tendances Clés</h3>
              <p className="text-muted-foreground whitespace-pre-line">{insights.keyTrends}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
