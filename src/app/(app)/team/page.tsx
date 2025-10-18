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
import { AddEmployeeForm } from '../employees/components/add-employee-form';

export default function TeamPage() {
  const adminMembers = mockEmployees.filter(e => ['Admin', 'Manager', 'RH'].includes(e.role));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Équipe d'Administration</h1>
            <p className="text-muted-foreground">Gérez les membres de l'équipe d'administration.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Ajouter un membre
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Ajouter un nouveau membre</DialogTitle>
              <DialogDescription>
                Remplissez les informations ci-dessous pour ajouter un nouveau membre.
              </DialogDescription>
            </DialogHeader>
            <AddEmployeeForm />
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={adminMembers} />
    </div>
  );
}
