import FinancialOverviewChart from '@/components/charts/financial-overview-chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockTransactions } from '@/lib/data';
import { ArrowUpRight, ArrowDownLeft, PlusCircle } from 'lucide-react';
import type { Transaction } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddTransactionForm } from './components/add-transaction-form';

export default function FinancesPage() {
    const totalIncome = mockTransactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = mockTransactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
    const netResult = totalIncome - totalExpenses;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion Financière</h1>
          <p className="text-muted-foreground">Suivez les entrées et sorties, et analysez la santé financière.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Ajouter une transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle>Ajouter une transaction</DialogTitle>
              <DialogDescription>
                Remplissez les détails ci-dessous pour enregistrer une nouvelle transaction.
              </DialogDescription>
            </DialogHeader>
            <AddTransactionForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Revenus Totaux</CardDescription>
            <CardTitle className="text-3xl text-primary">${totalIncome.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Dépenses Totales</CardDescription>
            <CardTitle className="text-3xl text-destructive">${totalExpenses.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Résultat Net</CardDescription>
            <CardTitle className={cn("text-3xl", netResult >= 0 ? "text-primary" : "text-destructive")}>${netResult.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Aperçu sur 6 mois</CardTitle>
          <CardDescription>Évolution des revenus et dépenses.</CardDescription>
        </CardHeader>
        <CardContent>
          <FinancialOverviewChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transactions Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Montant</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction: Transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.type === 'Income' ? 'default' : 'destructive'} className="gap-1">
                        {transaction.type === 'Income' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownLeft className="h-3 w-3" />}
                        {transaction.type === 'Income' ? 'Entrée' : 'Sortie'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell className={cn("text-right", transaction.type === 'Income' ? 'text-primary' : 'text-destructive')}>
                    ${transaction.amount.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
