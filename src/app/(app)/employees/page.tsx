import { mockEmployees } from '@/lib/data';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddEmployeeForm } from './components/add-employee-form';

export default function EmployeesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Gestion des Employés</h1>
            <p className="text-muted-foreground">Gérez les employés, leurs rôles et leurs informations.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Ajouter un employé
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Ajouter un nouvel employé</DialogTitle>
              <DialogDescription>
                Remplissez les informations ci-dessous pour ajouter un nouvel employé.
              </DialogDescription>
            </DialogHeader>
            <AddEmployeeForm />
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={mockEmployees} />
    </div>
  );
}
