import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, FolderKanban, CircleDollarSign, BarChart } from "lucide-react";
import { AiInsightsGenerator } from "@/components/dashboard/ai-insights-generator";
import { mockEmployees, mockProjects, mockTransactions } from "@/lib/data";
import FinancialOverviewChart from "@/components/charts/financial-overview-chart";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardPage() {
    const activeEmployees = mockEmployees.filter(e => e.status === 'Active').length;
    const projectsInProgress = mockProjects.filter(p => p.status === 'In Progress').length;
    const totalIncome = mockTransactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = mockTransactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employés Actifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeEmployees}</div>
            <p className="text-xs text-muted-foreground"> sur {mockEmployees.length} au total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projets en Cours</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectsInProgress}</div>
            <p className="text-xs text-muted-foreground">sur {mockProjects.length} projets</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenus (30j)</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${totalIncome.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Revenus totaux ce mois-ci</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dépenses (30j)</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">${totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Dépenses totales ce mois-ci</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <AiInsightsGenerator />
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Aperçu Financier</CardTitle>
              <CardDescription>Revenus vs Dépenses sur les 6 derniers mois.</CardDescription>
            </CardHeader>
            <CardContent>
              <FinancialOverviewChart />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Projets Récents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockProjects.slice(0, 3).map(project => (
              <div key={project.id} className="flex items-center space-x-4">
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{project.title}</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>{project.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nouveaux Membres</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockEmployees.slice(0, 3).map(employee => (
              <div key={employee.id} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={employee.avatarUrl} alt={employee.name} />
                  <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{employee.name}</p>
                  <p className="text-sm text-muted-foreground">{employee.email}</p>
                </div>
                <div className="text-sm text-muted-foreground">{employee.role}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
